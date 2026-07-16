<template>
  <section class="stats section" id="stats">
    <div ref="grid" class="stats__grid glass">
      <div v-for="stat in stats" :key="stat.label" class="stats__item">
        <span class="stats__value" :ref="(el) => setRef(el, stat)">{{ stat.display }}</span>
        <span class="stats__label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import gsap from 'gsap'

interface Stat {
  label: string
  value: number | null // null renders the literal suffix as-is (e.g. the coffee ∞)
  suffix: string
  display: string
}

const stats = reactive<Stat[]>([
  { label: 'Projects', value: 100, suffix: '+', display: '0+' },
  { label: 'Years Experience', value: 7, suffix: '+', display: '0+' },
  { label: 'Technologies', value: 20, suffix: '+', display: '0+' },
  { label: 'Coffee', value: null, suffix: '', display: '∞' }
])

const grid = ref<HTMLElement | null>(null)
const els = new Map<Stat, HTMLElement>()

function setRef(el: unknown, stat: Stat) {
  if (el) els.set(stat, el as HTMLElement)
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        stats.forEach((stat) => {
          if (stat.value === null) return
          const counter = { n: 0 }
          gsap.to(counter, {
            n: stat.value,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              stat.display = `${Math.round(counter.n)}${stat.suffix}`
            }
          })
        })
        io.disconnect()
      })
    },
    { threshold: 0.5 }
  )
  if (grid.value) io.observe(grid.value)
})
</script>

<style scoped>
.stats__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  text-align: center;
  padding: 25px;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stats__value {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 600;
  background: linear-gradient(135deg, var(--signal), var(--violet));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stats__label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink-2);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
