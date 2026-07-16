import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set base to '/<repo-name>/' when deploying to https://<user>.github.io/<repo-name>/
// Set base to '/' if deploying to a custom domain or a <user>.github.io root repo.
export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    target: 'esnext',
    sourcemap: false,
    outDir: 'docs'
  }
})
