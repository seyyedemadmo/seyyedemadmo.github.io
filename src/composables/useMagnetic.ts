import { onMounted, onBeforeUnmount, type Ref } from 'vue'

/**
 * Gives an element a "magnetic" pull toward the cursor while hovered,
 * and eases back to rest on leave. Distance-limited so it only
 * activates near the element (cheap, no global listener cost).
 */
export function useMagnetic(el: Ref<HTMLElement | null>, strength = 0.35) {
  let frame = 0
  let bounds: DOMRect | null = null

  function onMove(e: MouseEvent) {
    if (!el.value || !bounds) return
    const relX = e.clientX - (bounds.left + bounds.width / 2)
    const relY = e.clientY - (bounds.top + bounds.height / 2)
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      el.value!.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
    })
  }

  function onEnter() {
    bounds = el.value?.getBoundingClientRect() ?? null
    window.addEventListener('mousemove', onMove)
  }

  function onLeave() {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(frame)
    if (el.value) el.value.style.transform = 'translate(0, 0)'
  }

  onMounted(() => {
    el.value?.addEventListener('mouseenter', onEnter)
    el.value?.addEventListener('mouseleave', onLeave)
  })

  onBeforeUnmount(() => {
    el.value?.removeEventListener('mouseenter', onEnter)
    el.value?.removeEventListener('mouseleave', onLeave)
    window.removeEventListener('mousemove', onMove)
  })
}
