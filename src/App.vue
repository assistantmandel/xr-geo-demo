<script setup lang="ts">
/**
 * WebXR AR Demo App
 * 
 * A simple demonstration of WebXR AR capabilities using:
 * - Vue 3 + TypeScript
 * - TresJS (Three.js for Vue)
 * - WebXR Device API
 * 
 * Features:
 * - AR passthrough camera view
 * - 3D geometric objects placed in physical space
 * - Objects positioned ~1 meter from starting position
 */
import ARScene from './components/ARScene.vue'
</script>

<template>
  <div id="app">
    <ARScene />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
