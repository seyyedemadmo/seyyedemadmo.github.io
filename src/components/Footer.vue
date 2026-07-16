<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__mark">EMAD</span>
      <div class="footer__links">
        <a href="https://github.com/" target="_blank" rel="noopener" data-cursor="hover">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener" data-cursor="hover">LinkedIn</a>
        <a href="mailto:hello@example.com" data-cursor="hover">Email</a>
      </div>
      <span class="footer__year">© {{ year }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--glass-border);
  padding: 2rem clamp(1.25rem, 6vw, 6rem);
}

.footer__inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--ink-2);
}

.footer__mark {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--ink-0);
  letter-spacing: 0.05em;
}

.footer__links {
  display: flex;
  gap: 1.5rem;
}

.footer__links a:hover {
  color: var(--signal);
}
</style>
