import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const BACKEND = env.VITE_BACKEND_URL || 'http://localhost:5000'

  return {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api':     { target: BACKEND, changeOrigin: true },
        '/uploads': { target: BACKEND, changeOrigin: true },
      },
    },
  }
})
