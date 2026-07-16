import { createApp } from 'vue'
import Lenis from 'lenis'
import App from './App.vue'
import './style.scss'

const app = createApp(App)
app.mount('#app')

// Smooth scrolling driven by Lenis, synced to rAF.
const lenis = new Lenis({
  duration: 1.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose for components that need to react to scroll (e.g. parallax bg).
;(window as any).__lenis = lenis
