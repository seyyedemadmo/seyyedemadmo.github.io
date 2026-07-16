import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Tracks pointer position with lerped follow-through, and exposes
 * a "hovering" flag any interactive element can flip via data-cursor="hover".
 */
export function useCursor() {
  const x = ref(0)
  const y = ref(0)
  const hovering = ref(false)

  let targetX = 0
  let targetY = 0
  let raf = 0

  function onMove(e: MouseEvent) {
    targetX = e.clientX
    targetY = e.clientY
    const el = document.elementFromPoint(e.clientX, e.clientY)
    hovering.value = !!el?.closest('[data-cursor="hover"]')
  }

  function loop() {
    x.value += (targetX - x.value) * 0.18
    y.value += (targetY - y.value) * 0.18
    raf = requestAnimationFrame(loop)
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
  })

  return { x, y, hovering }
}
