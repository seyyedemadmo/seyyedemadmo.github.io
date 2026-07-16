# Emad — Portfolio

Vue 3 + TypeScript + Vite + Three.js + GSAP + Lenis.

## What's actually here (vs. the original wishlist)

This is a real, working project covering the core signature pieces:

- **Background3D.vue** — a WebGL particle field where nearby particles link
  into a network graph, and the cursor acts as a gravity well that pulls
  and releases particles. FPS-adaptive: skips the expensive line recompute
  under load, and pauses entirely when the tab is hidden.
- **Hero.vue** — a draggable wireframe "core" (Three.js icosahedra) with
  drag inertia and an idle auto-spin.
- **CursorGlow.vue** — a lerped custom cursor that swaps color/scale over
  anything tagged `data-cursor="hover"`.
- **useMagnetic.ts** — magnetic-pull hover effect for buttons.
- Glassmorphic cards, scroll-triggered reveals (IntersectionObserver + GSAP),
  animated counters, a self-drawing SVG timeline, tilt-on-hover project
  cards, and Lenis smooth scrolling.

Not included (call these out if you want them added): custom GLSL shaders,
post-processing (bloom/DOF/SSAO), light/dark theme toggle, background music
toggle, PWA manifest, keyboard shortcuts. These are straightforward to layer
on top of this structure — ask and they can be added file-by-file.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Before you deploy

1. **Base path** — `vite.config.ts` sets `base: '/portfolio/'`. If your repo
   is named something else, change it to `/<your-repo-name>/`. If you're
   deploying to a `<username>.github.io` root repo or a custom domain, set
   it to `/`.
2. **Content** — replace the placeholder copy/links in `Projects.vue`,
   `Footer.vue`, and `About.vue` with your real projects and socials.
3. **Contact form** — `Contact.vue` currently fakes a network request.
   GitHub Pages can't run server code, so wire the `onSubmit` handler to a
   form service (Formspree, Resend, etc.) or your own API.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set the source to **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds and deploys
   automatically on every push.

## Structure

```
src/
  components/
    Background3D.vue   # fixed WebGL particle network + cursor gravity
    CursorGlow.vue      # custom cursor orb
    Hero.vue             # headline + draggable 3D core
    About.vue
    Skills.vue           # interactive tag cloud
    Projects.vue         # tilt-on-hover glass cards
    Timeline.vue         # self-drawing SVG path
    Stats.vue            # animated counters
    Contact.vue
    Footer.vue
  composables/
    useMagnetic.ts
    useCursor.ts
  App.vue                 # load sequence + section assembly
  main.ts                 # Lenis smooth scroll wiring
  style.scss              # design tokens, glass/button utilities
```
