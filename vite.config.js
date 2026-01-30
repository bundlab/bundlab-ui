export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    watch: {
      usePolling: true, // Helps with older hardware/filesystem syncing
    },
  },
})
