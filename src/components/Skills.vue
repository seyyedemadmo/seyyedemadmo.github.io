<template>
  <section class="skills section" id="skills">
    <div class="glass skill_div">
      <p class="eyebrow">02 — Skills</p>
      <h2 class="skills__title">What I build with</h2>
      <div class="skills__cloud">
        <button v-for="(skill, i) in skills" :key="skill.name" class="skills__tag" data-cursor="hover" :style="{
          fontSize: `${skill.size}rem`,
          transform: hovered === i ? 'scale(1.15)' : `scale(1) translate(${pushes[i]?.x ?? 0}px, ${pushes[i]?.y ?? 0}px)`
        }" @mouseenter="onEnter(i)" @mouseleave="onLeave">
          {{ skill.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const skills = [
  { name: 'Python', size: 1.8 },
  { name: 'Django', size: 1.2 },
  { name: 'FastAPI', size: 1.4 },
  { name: 'Docker', size: 1.6 },
  { name: 'Linux', size: 1.7 },
  { name: 'TensorFlow', size: 1.3 },
  { name: 'Vue', size: 1.5 },
  { name: 'Electron', size: 1.1 },
  { name: 'Rust', size: 1.2 },
  { name: 'Redis', size: 1.1 },
  { name: 'PostgreSQL', size: 1.3 },
  { name: 'OpenCV', size: 1.4 }
]

const hovered = ref<number | null>(null)
const pushes = reactive<Record<number, { x: number; y: number }>>({})

function onEnter(i: number) {
  hovered.value = i
  // Nudge neighbouring tags away, proportional to proximity in the list —
  // a cheap stand-in for real collision physics that still reads as "push".
  skills.forEach((_, j) => {
    if (j === i) return
    const delta = j - i
    const dist = Math.abs(delta)
    if (dist <= 2) {
      const dir = delta > 0 ? 1 : -1
      pushes[j] = { x: dir * (14 / dist), y: dir * (6 / dist) }
    }
  })
}

function onLeave() {
  hovered.value = null
  Object.keys(pushes).forEach((k) => delete pushes[Number(k)])
}
</script>

<style scoped>
.skills__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 2.5rem;
}

.skills__cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.4rem;
  align-items: center;
}

.skills__tag {
  font-family: var(--font-display);
  font-weight: 500;
  background: none;
  border: none;
  color: var(--ink-1);
  cursor: pointer;
  padding: 0.2rem 0.3rem;
  transition: transform 0.35s var(--ease-out), color 0.3s ease;
}

.skills__tag:hover {
  color: var(--signal);
  text-shadow: 0 0 24px var(--signal-dim);
}
.skill_div {
  padding: 25px;
}
</style>
