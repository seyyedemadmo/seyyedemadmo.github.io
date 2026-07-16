<template>
  <section class="contact section" id="contact">
    <p class="eyebrow">05 — Contact</p>
    <div class="contact__panel glass">
      <h2 class="contact__title">Let's build something.</h2>
      <form class="contact__form" @submit.prevent="onSubmit">
        <label class="contact__field">
          <span>Name</span>
          <input v-model="form.name" type="text" required autocomplete="name" />
        </label>
        <label class="contact__field">
          <span>Email</span>
          <input v-model="form.email" type="email" required autocomplete="email" />
        </label>
        <label class="contact__field">
          <span>Message</span>
          <textarea v-model="form.message" rows="4" required></textarea>
        </label>
        <button ref="sendBtn" type="submit" class="btn btn--primary" data-cursor="hover" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send →' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMagnetic } from '../composables/useMagnetic'

const sendBtn = ref<HTMLElement | null>(null)
useMagnetic(sendBtn, 0.25)

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'sent'>('idle')

// Wire this up to your own backend, mail API, or a form service
// (e.g. Formspree, Resend) — GitHub Pages can't run server code.
async function onSubmit() {
  status.value = 'sending'
  await new Promise((r) => setTimeout(r, 900))
  status.value = 'sent'
  setTimeout(() => {
    status.value = 'idle'
    form.name = ''
    form.email = ''
    form.message = ''
  }, 2200)
}
</script>

<style scoped>
.contact__panel {
  padding: clamp(2rem, 5vw, 3.5rem);
  max-width: 640px;
}

.contact__title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  margin-bottom: 2rem;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-2);
}

.contact__field input,
.contact__field textarea {
  font-family: var(--font-body);
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  color: var(--ink-0);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.contact__field input:focus,
.contact__field textarea:focus {
  border-color: var(--signal);
  outline: none;
}

.contact__form .btn {
  align-self: flex-start;
}
</style>
