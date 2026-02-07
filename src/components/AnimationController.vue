<script setup lang="ts">
import { useLoop, useTresContext } from '@tresjs/core'
import type { Mesh } from 'three'

const { scene } = useTresContext()
const { onBeforeRender } = useLoop()

let localTime = 0

onBeforeRender(({ delta }) => {
  localTime += delta
  
  // Find and animate objects by name
  const sceneValue = scene.value
  if (!sceneValue) return
  
  // Find cubes, spheres, and cones by traversing the scene
  sceneValue.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      
      // Animate based on geometry type
      if (mesh.geometry?.type === 'BoxGeometry') {
        mesh.rotation.y += delta * 0.5
        mesh.position.y = 0.1 + Math.sin(localTime * 2) * 0.02
      } else if (mesh.geometry?.type === 'SphereGeometry') {
        mesh.position.y = 0.1 + Math.sin(localTime * 2 + 1) * 0.02
      } else if (mesh.geometry?.type === 'ConeGeometry') {
        mesh.rotation.y -= delta * 0.3
        mesh.position.y = 0.1 + Math.sin(localTime * 2 + 2) * 0.02
      }
    }
  })
})
</script>

<template>
  <!-- This component renders nothing, it just runs animations -->
</template>
