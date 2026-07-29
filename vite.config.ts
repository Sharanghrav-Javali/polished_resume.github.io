import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/polished_resume.github.io/' : '/',
  }
})
