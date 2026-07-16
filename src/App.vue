<template>
  <div class="app" :class="{ 'app--ready': ready }">
    <div class="loader" v-if="!ready">
      <span class="loader__bar"><span class="loader__fill" :style="{ width: progress + '%' }"></span></span>
      <span class="loader__label">{{ progress }}%</span>
    </div>

    <Background3D />
    <CursorGlow />

    <main v-show="ready">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Stats />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Background3D from './components/Background3D.vue'
import CursorGlow from './components/CursorGlow.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'
import Stats from './components/Stats.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const ready = ref(false)
const progress = ref(0)

onMounted(() => {
  const start = performance.now()
  const duration = 900
  function tick() {
    const t = Math.min(1, (performance.now() - start) / duration)
    progress.value = Math.round(t * 100)
    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      setTimeout(() => (ready.value = true), 150)
    }
  }
  requestAnimationFrame(tick)
})
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
}

.loader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--bg-0);
}

.loader__bar {
  width: 200px;
  height: 2px;
  background: var(--glass-border);
  display: block;
  overflow: hidden;
}

.loader__fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--signal), var(--violet));
  transition: width 0.1s linear;
}

.loader__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-2);
  letter-spacing: 0.1em;
}

main {
  position: relative;
  z-index: 1;
}
</style>
