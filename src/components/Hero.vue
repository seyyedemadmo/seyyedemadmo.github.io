<template>
  <section class="hero section" id="top">
    <div class="hero__grid">
      <div class="hero__text">
        <p class="eyebrow">Systems &amp; AI</p>
        <h1 class="hero__name">EMAD</h1>
        <h1 class="hero__name">MODARESI</h1>
        <p class="hero__role">
          AI Engineer<br />
          Python Developer<br />
          Remote Infrastructure Architect
        </p>
        <div class="hero__cta">
          <button ref="exploreBtn" class="btn btn--primary" data-cursor="hover" @click="scrollToProjects">
            Explore ↓
          </button>
        </div>
      </div>
      <div class="hero__object">
        <canvas ref="canvasEl" class="hero__canvas" data-cursor="hover"></canvas>
        <p class="hero__hint">drag to rotate</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import { useMagnetic } from '../composables/useMagnetic'

const canvasEl = ref<HTMLCanvasElement | null>(null)
const exploreBtn = ref<HTMLElement | null>(null)
useMagnetic(exploreBtn, 0.3)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let core: THREE.Group
let raf = 0

let dragging = false
let lastX = 0
let lastY = 0
let velX = 0
let velY = 0
let rotX = 0
let rotY = 0

function buildScene(width: number, height: number) {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 5.2

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value!, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)

  core = new THREE.Group()

  const outerGeo = new THREE.IcosahedronGeometry(1.6, 1)
  const outerMat = new THREE.MeshBasicMaterial({ color: 0x5ad1e6, wireframe: true, transparent: true, opacity: 0.55 })
  const outer = new THREE.Mesh(outerGeo, outerMat)
  core.add(outer)

  const innerGeo = new THREE.IcosahedronGeometry(0.9, 0)
  const innerMat = new THREE.MeshBasicMaterial({ color: 0x8b7cf6, wireframe: true, transparent: true, opacity: 0.8 })
  const inner = new THREE.Mesh(innerGeo, innerMat)
  core.add(inner)

  const glowGeo = new THREE.SphereGeometry(0.55, 24, 24)
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xff7a45, transparent: true, opacity: 0.15 })
  core.add(new THREE.Mesh(glowGeo, glowMat))

  scene.add(core)

  // entrance
  core.scale.set(0.001, 0.001, 0.001)
  gsap.to(core.scale, { x: 1, y: 1, z: 1, duration: 1.4, ease: 'elastic.out(1, 0.6)', delay: 0.3 })
}

function onPointerDown(e: PointerEvent) {
  dragging = true
  lastX = e.clientX
  lastY = e.clientY
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
}

function onPointerMove(e: PointerEvent) {
  if (!dragging) return
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  velY = dx * 0.005
  velX = dy * 0.005
  lastX = e.clientX
  lastY = e.clientY
}

function onPointerUp() {
  dragging = false
}

function onResize() {
  if (!canvasEl.value || !renderer || !camera) return
  const w = canvasEl.value.clientWidth
  const h = canvasEl.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

function tick() {
  raf = requestAnimationFrame(tick)
  if (!dragging) {
    velX *= 0.96
    velY *= 0.96
    velY += 0.0006 // idle auto-spin
  }
  rotX += velX
  rotY += velY
  core.rotation.x = rotX
  core.rotation.y = rotY
  renderer.render(scene, camera)
}

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const w = canvasEl.value!.clientWidth
  const h = canvasEl.value!.clientHeight
  buildScene(w, h)

  canvasEl.value!.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('resize', onResize)
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  canvasEl.value?.removeEventListener('pointerdown', onPointerDown)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.hero__name {
  font-size: clamp(3.5rem, 10vw, 7rem);
  line-height: 0.95;
  background: linear-gradient(135deg, var(--ink-0), var(--signal) 60%, var(--violet));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.25rem;
}

.hero__role {
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  color: var(--ink-1);
  line-height: 1.9;
  margin-bottom: 2.25rem;
}

.hero__cta {
  display: flex;
}

.hero__object {
  position: relative;
  height: clamp(280px, 40vw, 460px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__canvas {
  width: 100%;
  height: 100%;
  cursor: grab;
  touch-action: none;
}

.hero__canvas:active {
  cursor: grabbing;
}

.hero__hint {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-2);
}

@media (max-width: 860px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }
  .hero__object {
    order: -1;
  }
}
</style>
