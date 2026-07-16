<template>
  <section class="projects section" id="projects">
    <p class="eyebrow">03 — Projects</p>
    <h2 class="projects__title">Selected work</h2>
    <div class="projects__grid">
      <article v-for="project in projects" :key="project.name" class="project-card glass" data-cursor="hover"
        @mousemove="onTilt" @mouseleave="onTiltReset">
        <div class="project-card__inner">
          <p class="project-card__eyebrow">{{ project.tag }}</p>
          <h3 class="project-card__name">{{ project.name }}</h3>
          <p class="project-card__desc">{{ project.desc }}</p>
          <div class="project-card__links">
            <a v-if="project.demo" :href="project.demo" class="btn" target="_blank" rel="noopener">Demo</a>
            <a v-if="project.github" :href="project.github" class="btn" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
// Replace hrefs and copy with your real project details before deploying.
const projects = [
  {
    name: 'Fortress PAM',
    tag: 'Enterprise Access',
    desc: 'A privileged access management bastion for remote infrastructure — session replay, credential vaulting, and audit-grade recording for RDP, VNC, and SSH.',
    demo: '#',
    github: '#'
  },
  {
    name: 'Vision Pipeline',
    tag: 'Computer Vision',
    desc: 'Real-time detection and tracking pipeline built on OpenCV and TensorFlow, deployed behind a FastAPI service layer.',
    demo: '#',
    github: '#'
  },
  {
    name: 'Fleet Orchestrator',
    tag: 'Infrastructure',
    desc: 'Docker-based orchestration for distributed Linux fleets, with a Vue control-plane UI and Redis-backed job queue.',
    demo: '#',
    github: '#'
  },
  {
    name: 'ParaiseHub',
    tag: 'backend',
    desc: 'Reservatiion Platform base on python (DRF). Co-work Space reservations and more',
    demo: '#',
    github: '#'
  },
  {
    name: 'IoT Platform',
    tag: 'micro-controller',
    desc: 'Designed and developed end-to-end IoT systems using ESP32 and Arduino with PlatformIO, integrating MQTT communication, Django REST APIs, Dockerized backend services, and real-time device monitoring, control, and data collection.',
    demo: '#',
    github: '#'
  },
  {
    name: 'Smart Device Management',
    tag: 'IoT & Edge Computing',
    desc: 'Developed secure edge-to-cloud infrastructure for embedded devices using ESP32, MQTT, Docker, Python, and Django. ',
    demo: '#',
    github: '#'
  },
  {
    name: 'Face Analysie',
    tag: 'AI & Computer Vision',
    desc: 'Develop a robust facial feature extraction system for multiple platforms, including authentication systems, PAM access control, and other security applications.',
    demo: '#',
    github: '#'
  },
  {
    name: 'UEBA Services',
    tag: 'AI & ML',
    desc: 'Design a self-supervised deep neural network to detect anomalous activities on the platform using log data.',
    demo: '#',
    github: '#'
  },
]

function onTilt(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width - 0.5
  const py = (e.clientY - rect.top) / rect.height - 0.5
  card.style.transform = `perspective(800px) rotateX(${py * -10}deg) rotateY(${px * 10}deg) translateY(-4px)`
}

function onTiltReset(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
}
</script>

<style scoped>
.projects__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 2.5rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  padding: 2rem;
  transition: transform 0.25s var(--ease-out), border-color 0.3s ease;
  will-change: transform;
}

.project-card:hover {
  border-color: var(--signal);
}

.project-card__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--violet);
  margin-bottom: 0.75rem;
}

.project-card__name {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}

.project-card__desc {
  font-size: 0.92rem;
  margin-bottom: 1.5rem;
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
}
</style>
