<template>
  <section class="about section" id="about">
    <p class="eyebrow">01 — About</p>
    <div ref="panel" class="about__panel glass">
      <h2 class="about__title">Hello, I'm Emad.</h2>
      <p class="about__body">
        I design and build the systems that sit underneath everything else —
        Python backends, computer-vision pipelines, and the remote-access
        infrastructure that lets teams operate machines they'll never
        physically touch. My work lives at the intersection of AI tooling
        and the unglamorous plumbing that keeps it reliable: containers,
        Linux, networking, and the access-control layer that decides who
        gets to see what.
      </p>
      <div class="about__tags">
        <span v-for="tag in tags" :key="tag" class="about__tag">{{ tag }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const panel = ref<HTMLElement | null>(null)

const tags = [
  'Python', 'Computer Vision', 'Backend Architecture',
  'Remote Access Systems', 'Docker', 'Linux', 'Cloud'
]

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            panel.value,
            { opacity: 0, y: 40, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }
          )
          io.disconnect()
        }
      })
    },
    { threshold: 0.25 }
  )
  if (panel.value) io.observe(panel.value)
})
</script>

<style scoped>
.about__panel {
  padding: clamp(2rem, 5vw, 3.5rem);
  max-width: 760px;
}

.about__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 1.25rem;
}

.about__body {
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.about__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.about__tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  color: var(--signal);
  background: var(--signal-dim);
}
</style>
