import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Enable Vue custom elements/web components
      template: {
        compilerOptions: {
          // TresJS uses custom elements
          isCustomElement: (tag) => tag.startsWith('Tres')
        }
      }
    })
  ],
  
  server: {
    // WebXR requires HTTPS (except localhost)
    // For local dev, use: vite --host --https
    https: false, // Set to true and provide cert for mobile testing
    host: true,   // Expose to network for mobile device testing
    port: 5173,
  },
  
  // Optimizations for Three.js
  optimizeDeps: {
    exclude: ['@tresjs/core'],
  },
})
