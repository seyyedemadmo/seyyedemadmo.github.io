<template>
  <div
    class="cursor-orb"
    :class="{ 'cursor-orb--active': hovering }"
    :style="{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})` }"
  ></div>
</template>

<script setup lang="ts">
import { useCursor } from '../composables/useCursor'
const { x, y, hovering } = useCursor()
</script>

<style scoped>
.cursor-orb {
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(90, 209, 230, 0.9), rgba(139, 124, 246, 0.2) 60%, transparent 70%);
  pointer-events: none;
  z-index: 999;
  mix-blend-mode: screen;
  transition: opacity 0.3s ease, transform 0.08s linear;
  will-change: transform;
}

.cursor-orb--active {
  background: radial-gradient(circle, rgba(255, 122, 69, 0.9), rgba(139, 124, 246, 0.25) 60%, transparent 72%);
}

@media (hover: none) {
  .cursor-orb {
    display: none;
  }
}
</style>
