<script setup lang="ts">
import { shallowRef, reactive, nextTick } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import type { WebGLRenderer } from 'three'
import { useWebXR } from '../composables/useWebXR'
import AnimationController from './AnimationController.vue'

/**
 * AR Scene Component
 * Using TresJS's OrbitControls from cientos for proper integration
 */

const rendererRef = shallowRef<WebGLRenderer | null>(null)
const { isSupported, isSessionActive, startSession, endSession } = useWebXR()

// Object ID counter for unique IDs
let nextObjectId = 1

// Placed objects - start with default positions
const placedObjects = reactive<Array<{
  type: 'cube' | 'sphere' | 'cone'
  position: [number, number, number]
  color: string
  id: number
}>>([
  { type: 'cube', position: [-0.5, 0.1, -1], color: '#ef4444', id: nextObjectId++ },
  { type: 'sphere', position: [0, 0.1, -1], color: '#3b82f6', id: nextObjectId++ },
  { type: 'cone', position: [0.5, 0.1, -1], color: '#22c55e', id: nextObjectId++ },
])

// Called when TresCanvas is ready
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onCanvasReady = (context: any) => {
  if (context?.renderer?.instance) {
    rendererRef.value = context.renderer.instance
  } else if (context?.renderer) {
    rendererRef.value = context.renderer
  }
}

// Start AR when button clicked
const handleStartAR = async () => {
  if (!rendererRef.value) {
    console.warn('Renderer not ready')
    return
  }
  await startSession(rendererRef.value)
}

// Stop AR session
const handleStopAR = () => {
  endSession()
}

// Add new object at random position
const addObject = () => {
  const types = ['cube', 'sphere', 'cone'] as const
  const colors = ['#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'] as const
  
  const typeIndex = Math.floor(Math.random() * types.length)
  const colorIndex = Math.floor(Math.random() * colors.length)
  
  placedObjects.push({
    type: types[typeIndex] ?? 'cube',
    position: [
      (Math.random() - 0.5) * 2,
      0.1,
      -1 - Math.random()
    ],
    color: colors[colorIndex] ?? '#f59e0b',
    id: nextObjectId++,
  })
}

// Reset to default objects
const resetObjects = () => {
  // Clear the array completely first
  placedObjects.length = 0
  // Then add defaults in next tick to trigger re-render
  nextTick(() => {
    placedObjects.push(
      { type: 'cube', position: [-0.5, 0.1, -1], color: '#ef4444', id: nextObjectId++ },
      { type: 'sphere', position: [0, 0.1, -1], color: '#3b82f6', id: nextObjectId++ },
      { type: 'cone', position: [0.5, 0.1, -1], color: '#22c55e', id: nextObjectId++ }
    )
  })
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
        <p class="hint">Try on Android Chrome or use the 3D preview below</p>
      </div>
    </div>

    <!-- Object controls -->
    <div class="object-controls">
      <button @click="addObject" class="control-btn">
        ➕ Add Object
      </button>
      <button @click="resetObjects" class="control-btn secondary">
        🔄 Reset
      </button>
    </div>

    <!-- TresJS Canvas with 3D Scene -->
    <TresCanvas
      :alpha="true"
      :antialias="true"
      class="tres-canvas"
      @ready="onCanvasReady"
    >
      <!-- Camera -->
      <TresPerspectiveCamera :position="[0, 1.6, 3]" />
      
      <!-- OrbitControls from cientos - placed inside TresCanvas -->
      <OrbitControls 
        v-if="!isSessionActive"
        :enable-damping="true"
        :damping-factor="0.05"
        :max-polar-angle="Math.PI / 2"
        make-default
      />

      <!-- Animation component - uses useLoop inside TresCanvas context -->
      <AnimationController />
      
      <!-- Lights -->
      <TresAmbientLight :intensity="0.6" />
      <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" :cast-shadow="true" />
      <TresPointLight :position="[0, 2, 0]" :intensity="0.3" color="#ffffff" />

      <!-- Dynamic objects from placedObjects array -->
      <template v-for="obj in placedObjects" :key="obj.id">
        <!-- Cube -->
        <TresMesh 
          v-if="obj.type === 'cube'" 
          :position="obj.position"
          :cast-shadow="true"
        >
          <TresBoxGeometry :args="[0.15, 0.15, 0.15]" />
          <TresMeshStandardMaterial :color="obj.color" :metalness="0.3" :roughness="0.4" />
        </TresMesh>

        <!-- Sphere -->
        <TresMesh 
          v-if="obj.type === 'sphere'" 
          :position="obj.position"
          :cast-shadow="true"
        >
          <TresSphereGeometry :args="[0.1, 32, 32]" />
          <TresMeshStandardMaterial :color="obj.color" :metalness="0.5" :roughness="0.2" />
        </TresMesh>

        <!-- Cone -->
        <TresMesh 
          v-if="obj.type === 'cone'" 
          :position="obj.position"
          :cast-shadow="true"
        >
          <TresConeGeometry :args="[0.08, 0.2, 32]" />
          <TresMeshStandardMaterial :color="obj.color" :metalness="0.3" :roughness="0.5" />
        </TresMesh>
      </template>

      <!-- Ground plane (visible in non-AR mode) -->
      <TresMesh v-if="!isSessionActive" :rotation="[-Math.PI / 2, 0, 0]" :position="[0, 0, 0]" :receive-shadow="true">
        <TresPlaneGeometry :args="[10, 10]" />
        <TresMeshStandardMaterial color="#2a2a2a" :roughness="0.8" />
      </TresMesh>

      <!-- Grid helper (visible in non-AR mode) -->
      <TresGridHelper v-if="!isSessionActive" :args="[10, 20, '#444', '#333']" />
    </TresCanvas>

    <!-- Status indicator -->
    <div v-if="isSessionActive" class="status">
      🔴 AR Session Active • Move around to see objects
    </div>

    <!-- Instructions (non-AR) -->
    <div v-if="!isSessionActive && !isSupported" class="instructions">
      <p>🖱️ Drag to rotate • Scroll to zoom</p>
    </div>

    <!-- Object count -->
    <div class="object-count">
      {{ placedObjects.length }} objects
    </div>
  </div>
</template>

<style scoped>
.ar-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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

.ar-button:active {
  transform: translateY(0);
}

.ar-button.stop {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
}

.not-supported {
  background: rgba(0, 0, 0, 0.85);
  padding: 20px 30px;
  border-radius: 16px;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
}

.not-supported p {
  margin: 8px 0;
}

.not-supported .hint {
  font-size: 14px;
  opacity: 0.7;
}

.object-controls {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  gap: 12px;
}

.control-btn {
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255,255,255,0.15);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.2s;
}

.control-btn:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-2px);
}

.control-btn.secondary {
  background: rgba(0,0,0,0.3);
}

.status {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.instructions {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.6);
  color: rgba(255,255,255,0.8);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  backdrop-filter: blur(10px);
}

.object-count {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0,0,0,0.5);
  color: rgba(255,255,255,0.7);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  backdrop-filter: blur(10px);
}
</style>
