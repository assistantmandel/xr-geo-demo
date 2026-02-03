<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three'
import { useWebXR } from '../composables/useWebXR'

/**
 * AR Scene Component
 * Displays geometric objects positioned in 3D space
 * Objects are placed ~1 meter from the origin
 */

const canvasRef = ref<InstanceType<typeof TresCanvas> | null>(null)
const { isSupported, isSessionActive, startSession, endSession } = useWebXR()

// Object positions (1 meter forward, spread horizontally)
const positions = {
  cube: [-0.5, 0, -1] as [number, number, number],    // Left
  sphere: [0, 0, -1] as [number, number, number],      // Center  
  cone: [0.5, 0, -1] as [number, number, number],      // Right
}

// Start AR when button clicked
const handleStartAR = async () => {
  if (!canvasRef.value) return
  
  // Access the Three.js renderer from TresCanvas
  const renderer = canvasRef.value.context?.renderer?.value
  if (renderer) {
    await startSession(renderer)
  }
}

// Stop AR session
const handleStopAR = () => {
  endSession()
}
</script>

<template>
  <div class="ar-container">
    <!-- AR Controls -->
    <div class="controls">
      <template v-if="isSupported">
        <button 
          v-if="!isSessionActive" 
          @click="handleStartAR"
          class="ar-button"
        >
          🥽 Start AR
        </button>
        <button 
          v-else 
          @click="handleStopAR"
          class="ar-button stop"
        >
          ✕ Exit AR
        </button>
      </template>
      <div v-else class="not-supported">
        <p>⚠️ WebXR AR not supported</p>
        <p class="hint">Try on a mobile device with Chrome/Safari</p>
      </div>
    </div>

    <!-- TresJS Canvas with 3D Scene -->
    <TresCanvas
      ref="canvasRef"
      :alpha="true"
      :antialias="true"
      class="tres-canvas"
    >
      <!-- Camera -->
      <TresPerspectiveCamera :position="[0, 1.6, 3]" />
      
      <!-- Lights -->
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />

      <!-- Red Cube (left) -->
      <TresMesh :position="positions.cube">
        <TresBoxGeometry :args="[0.2, 0.2, 0.2]" />
        <TresMeshStandardMaterial color="#ef4444" />
      </TresMesh>

      <!-- Blue Sphere (center) -->
      <TresMesh :position="positions.sphere">
        <TresSphereGeometry :args="[0.12, 32, 32]" />
        <TresMeshStandardMaterial color="#3b82f6" />
      </TresMesh>

      <!-- Green Cone (right) -->
      <TresMesh :position="positions.cone">
        <TresConeGeometry :args="[0.1, 0.25, 32]" />
        <TresMeshStandardMaterial color="#22c55e" />
      </TresMesh>

      <!-- Grid helper (visible in non-AR mode) -->
      <TresGridHelper v-if="!isSessionActive" :args="[10, 10]" />
      
      <!-- Orbit controls for non-AR preview -->
      <OrbitControls v-if="!isSessionActive" />
    </TresCanvas>

    <!-- Status indicator -->
    <div v-if="isSessionActive" class="status">
      AR Session Active
    </div>
  </div>
</template>

<style scoped>
.ar-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #1a1a1a;
}

.tres-canvas {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.ar-button {
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}

.ar-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.ar-button.stop {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
}

.not-supported {
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  color: white;
}

.not-supported p {
  margin: 8px 0;
}

.not-supported .hint {
  font-size: 14px;
  opacity: 0.7;
}

.status {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>
