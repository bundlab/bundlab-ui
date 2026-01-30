import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Essential for Docker to expose the port
    port: 5173,
    watch: {
      usePolling: true, // Fixes file-watch issues on Linux/Docker
    },
  },
})
