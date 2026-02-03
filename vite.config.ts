import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  server: {
    // WebXR requires HTTPS (except localhost)
    // For mobile testing with HTTPS, use: vite --host --https
    host: true,   // Expose to network for mobile device testing
    port: 5173,
  },
  
  // Optimizations for Three.js
  optimizeDeps: {
    exclude: ['@tresjs/core'],
  },
})
