<template>
  <canvas ref="canvasEl" class="bg-canvas" aria-hidden="true"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvasEl = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let controls: OrbitControls
let points: THREE.Points
let lineSegments: THREE.LineSegments
let iconPoints: THREE.Points
let iconLines: THREE.LineSegments
let iconGroup: THREE.Group
let raf = 0
let running = true

const COUNT = 1000
const positions = new Float32Array(COUNT * 3)
const basePositions = new Float32Array(COUNT * 3)
const phases = new Float32Array(COUNT)

let lastFrameTime = performance.now()
let avgFrameMs = 16
const MAX_LINK_DIST = 2.6

// --- icon (dot + line style, built from sampled points along "</>") ---
// Bump this to make the icon bigger/smaller without touching the sampling logic.
let iconPositions: Float32Array
let iconBasePositions: Float32Array
let iconPhases: Float32Array
let iconLinePairs: [number, number][] = []

const ICON_SCALE = 1.8
const ICON_POINT_SIZE = 0.08
const STROKE_THICKNESS = 0.28 // total ribbon width in unit space, before ICON_SCALE
const STRANDS_PER_STROKE = 4

function sampleSegment(
  p0: [number, number],
  p1: [number, number],
  count: number,
  out: { x: number; y: number; z: number }[]
) {
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1)
    const x = (p0[0] + (p1[0] - p0[0]) * t) * ICON_SCALE
    const y = (p0[1] + (p1[1] - p0[1]) * t) * ICON_SCALE
    const z = (Math.random() - 0.5) * 0.6
    out.push({ x, y, z })
  }
}

function buildIconGeometry() {

  const apexL: [number, number] = [-2.5, 0]
  const armLU: [number, number] = [-1.1, 1.1]
  const armLL: [number, number] = [-1.1, -1.1]

  const apexR: [number, number] = [2.5, 0]
  const armRU: [number, number] = [1.1, 1.1]
  const armRL: [number, number] = [1.1, -1.1]

  const slashTop: [number, number] = [0.65, 1.3]
  const slashBottom: [number, number] = [-0.65, -1.3]

  const samples: { x: number; y: number; z: number }[] = []
  const strokeRanges: [number, number][] = [] // [startIdx, endIdx] per stroke, for chaining lines

  const addStroke = (p0: [number, number], p1: [number, number], count: number) => {
    const dx = p1[0] - p0[0]
    const dy = p1[1] - p0[1]
    const len = Math.hypot(dx, dy) || 1
    const nx = -dy / len // unit perpendicular
    const ny = dx / len

    for (let s = 0; s < STRANDS_PER_STROKE; s++) {
      const spread = s / (STRANDS_PER_STROKE - 1) - 0.5 // -0.5..0.5
      const offset = spread * STROKE_THICKNESS
      const op0: [number, number] = [p0[0] + nx * offset, p0[1] + ny * offset]
      const op1: [number, number] = [p1[0] + nx * offset, p1[1] + ny * offset]

      const start = samples.length
      sampleSegment(op0, op1, count, samples)
      strokeRanges.push([start, samples.length - 1])
    }
  }

  addStroke(apexL, armLU, 60) // "<" upper arm
  addStroke(apexL, armLL, 60) // "<" lower arm
  addStroke(apexR, armRU, 60) // ">" upper arm
  addStroke(apexR, armRL, 60) // ">" lower arm
  addStroke(slashBottom, slashTop, 80) // "/"

  const ICON_COUNT = samples.length
  iconPositions = new Float32Array(ICON_COUNT * 3)
  iconBasePositions = new Float32Array(ICON_COUNT * 3)
  iconPhases = new Float32Array(ICON_COUNT)

  samples.forEach((s, i) => {
    iconPositions[i * 3] = s.x
    iconPositions[i * 3 + 1] = s.y
    iconPositions[i * 3 + 2] = s.z
    iconBasePositions[i * 3] = s.x
    iconBasePositions[i * 3 + 1] = s.y
    iconBasePositions[i * 3 + 2] = s.z
    iconPhases[i] = Math.random() * Math.PI * 2
  })

  iconLinePairs = []
  for (const [start, end] of strokeRanges) {
    for (let i = start; i < end; i++) iconLinePairs.push([i, i + 1])
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(iconPositions, 3))
  const material = new THREE.PointsMaterial({
    size: ICON_POINT_SIZE,
    color: 0x5ad1e6,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })
  iconPoints = new THREE.Points(geo, material)

  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(iconLinePairs.length * 6), 3))
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x8b7cf6,
    transparent: true,
    opacity: 0.5, // stronger than the background link lines (0.18) since this is the focal shape
    blending: THREE.AdditiveBlending
  })
  iconLines = new THREE.LineSegments(lineGeo, lineMaterial)

  iconGroup = new THREE.Group()
  iconGroup.add(iconPoints, iconLines)
}

function updateIcon(t: number) {
  for (let i = 0; i < iconPhases.length; i++) {
    const ix = i * 3
    const ph = iconPhases[i]
    // small idle wobble only — keeps the shape legible, unlike the background's freer drift
    iconPositions[ix] = iconBasePositions[ix] + Math.sin(t + ph) * 0.06
    iconPositions[ix + 1] = iconBasePositions[ix + 1] + Math.cos(t * 0.9 + ph) * 0.06
    iconPositions[ix + 2] = iconBasePositions[ix + 2] + Math.sin(t * 1.1 + ph) * 0.06
  }
  iconPoints.geometry.attributes.position.needsUpdate = true

  const linePos = iconLines.geometry.attributes.position.array as Float32Array
  iconLinePairs.forEach(([a, b], i) => {
    linePos[i * 6] = iconPositions[a * 3]
    linePos[i * 6 + 1] = iconPositions[a * 3 + 1]
    linePos[i * 6 + 2] = iconPositions[a * 3 + 2]
    linePos[i * 6 + 3] = iconPositions[b * 3]
    linePos[i * 6 + 4] = iconPositions[b * 3 + 1]
    linePos[i * 6 + 5] = iconPositions[b * 3 + 2]
  })
  iconLines.geometry.attributes.position.needsUpdate = true
}

function onResize() {
  if (!renderer || !camera) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function buildScene() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.z = 10

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value!, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enablePan = false   // mouse changes view only, never point/target position
  controls.enableZoom = false  // rotate-only
  controls.rotateSpeed = 0.5
  controls.minDistance = 4
  controls.maxDistance = 20

  const RANGE_X = 32
  const RANGE_Y = 20
  const RANGE_Z = 16

  for (let i = 0; i < COUNT; i++) {
    const x = (Math.random() - 0.5) * RANGE_X
    const y = (Math.random() - 0.5) * RANGE_Y
    const z = (Math.random() - 0.5) * RANGE_Z

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    basePositions[i * 3] = x
    basePositions[i * 3 + 1] = y
    basePositions[i * 3 + 2] = z

    phases[i] = Math.random() * Math.PI * 2
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    size: 0.045,
    color: 0x5ad1e6,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  const lineGeometry = new THREE.BufferGeometry()
  const maxLines = COUNT * 4
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3))
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x8b7cf6,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  })
  lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
  scene.add(lineSegments)

  buildIconGeometry()
  scene.add(iconGroup)
}

function updateLines() {
  const linePos = lineSegments.geometry.attributes.position.array as Float32Array
  let idx = 0
  const maxLines = linePos.length / 6

  for (let i = 0; i < COUNT && idx < maxLines; i++) {
    const ix = i * 3
    for (let j = i + 1; j < COUNT && idx < maxLines; j++) {
      const jx = j * 3
      const dx = positions[ix] - positions[jx]
      const dy = positions[ix + 1] - positions[jx + 1]
      const dz = positions[ix + 2] - positions[jx + 2]
      const d2 = dx * dx + dy * dy + dz * dz
      if (d2 < MAX_LINK_DIST * MAX_LINK_DIST) {
        linePos[idx * 6] = positions[ix]
        linePos[idx * 6 + 1] = positions[ix + 1]
        linePos[idx * 6 + 2] = positions[ix + 2]
        linePos[idx * 6 + 3] = positions[jx]
        linePos[idx * 6 + 4] = positions[jx + 1]
        linePos[idx * 6 + 5] = positions[jx + 2]
        idx++
      }
    }
  }
  for (let k = idx * 6; k < linePos.length; k++) linePos[k] = 0
  lineSegments.geometry.attributes.position.needsUpdate = true
  lineSegments.geometry.setDrawRange(0, idx * 2)
}

function tick() {
  if (!running) return
  raf = requestAnimationFrame(tick)

  const now = performance.now()
  const dt = now - lastFrameTime
  lastFrameTime = now
  avgFrameMs = avgFrameMs * 0.9 + dt * 0.1
  const skipLines = avgFrameMs > 28

  const t = now * 0.00035
  for (let i = 0; i < COUNT; i++) {
    const ix = i * 3
    const ph = phases[i]
    positions[ix] = basePositions[ix] + Math.sin(t + ph) * 0.15
    positions[ix + 1] = basePositions[ix + 1] + Math.cos(t * 0.9 + ph) * 0.15
    positions[ix + 2] = basePositions[ix + 2] + Math.sin(t * 1.1 + ph) * 0.15
  }
  points.geometry.attributes.position.needsUpdate = true

  if (!skipLines) updateLines()
  updateIcon(t)

  scene.rotation.y += 0.0006
  iconGroup.rotation.y += 0.002

  controls.update()
  renderer.render(scene, camera)
}

function onVisibility() {
  running = document.visibilityState === 'visible'
  if (running) {
    lastFrameTime = performance.now()
    raf = requestAnimationFrame(tick)
  } else {
    cancelAnimationFrame(raf)
  }
}

onMounted(() => {
  buildScene()
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibility)
  controls?.dispose()
  renderer?.dispose()
})
</script>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  z-index: -1;
  display: block;
}
</style>