<template>
  <section class="timeline section" id="timeline">
    <p class="eyebrow">04 — Path</p>
    <h2 class="timeline__title">How I got here</h2>
    <div ref="wrap" class="timeline__wrap glass">
      <svg class="timeline__line" viewBox="0 0 800 4" preserveAspectRatio="none">
        <line ref="lineEl" x1="0" y1="2" x2="800" y2="2" stroke="url(#grad)" stroke-width="2" />
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stop-color="#5ad1e6" />
            <stop offset="100%" stop-color="#8b7cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div class="timeline__points">
        <div v-for="stop in stops" :key="stop.year" class="timeline__stop">
          <span class="timeline__dot"></span>
          <span class="timeline__year">{{ stop.year }}</span>
          <span class="timeline__label">{{ stop.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const wrap = ref<HTMLElement | null>(null)
const lineEl = ref<SVGLineElement | null>(null)

const stops = [
  { year: '2019', label: 'Student' },
  { year: '2021', label: 'Developer' },
  { year: '2023', label: 'AI' },
  { year: '2025', label: 'Infrastructure' }
]

onMounted(() => {
  if (!lineEl.value) return
  const length = 800
  lineEl.value.style.strokeDasharray = `${length}`
  lineEl.value.style.strokeDashoffset = `${length}`

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(lineEl.value, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' })
          gsap.from('.timeline__stop', {
            opacity: 0,
            y: 16,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.2
          })
          io.disconnect()
        }
      })
    },
    { threshold: 0.4 }
  )
  if (wrap.value) io.observe(wrap.value)
})
</script>

<style scoped>
.timeline__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 3rem;
}

.timeline__wrap {
  position: relative;
  padding: 25px;
}

.timeline__line {
  width: 100%;
  height: 4px;
  display: block;
}

.timeline__points {
  display: flex;
  justify-content: space-between;
  margin-top: -0.5rem;
}

.timeline__stop {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.timeline__dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 16px var(--signal-dim);
}

.timeline__year {
  font-family: var(--font-mono);
  font-size: 1.7rem;
  color: var(--ink-1);
}

.timeline__label {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--ink-0);
}

@media (max-width: 640px) {
  .timeline__points {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}
</style>
