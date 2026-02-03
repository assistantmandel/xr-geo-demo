import { ref, shallowRef } from 'vue'
import * as THREE from 'three'

/**
 * WebXR Hit Test composable
 * Allows placing objects on real-world surfaces detected by AR
 */
export function useHitTest() {
  const hitTestSource = shallowRef<XRHitTestSource | null>(null)
  const hitTestResults = ref<XRHitTestResult[]>([])
  const reticlePosition = ref<THREE.Vector3 | null>(null)
  const reticleVisible = ref(false)

  // Initialize hit test source when AR session starts
  const initHitTest = async (session: XRSession, _refSpace: XRReferenceSpace) => {
    try {
      // Request hit test source from viewer position
      const viewerSpace = await session.requestReferenceSpace('viewer')
      const source = await session.requestHitTestSource?.({
        space: viewerSpace,
      })
      hitTestSource.value = source ?? null
    } catch (e) {
      console.warn('Hit test not supported:', e)
    }
  }

  // Process hit test results each frame
  const processHitTest = (frame: XRFrame, refSpace: XRReferenceSpace) => {
    if (!hitTestSource.value) return null

    const results = frame.getHitTestResults(hitTestSource.value)
    hitTestResults.value = results

    if (results.length > 0 && results[0]) {
      const hit = results[0]
      const pose = hit.getPose(refSpace)
      
      if (pose) {
        const position = new THREE.Vector3(
          pose.transform.position.x,
          pose.transform.position.y,
          pose.transform.position.z
        )
        reticlePosition.value = position
        reticleVisible.value = true
        return position
      }
    }
    
    reticleVisible.value = false
    return null
  }

  // Cleanup hit test source
  const cleanup = () => {
    if (hitTestSource.value) {
      hitTestSource.value.cancel()
      hitTestSource.value = null
    }
  }

  return {
    hitTestSource,
    hitTestResults,
    reticlePosition,
    reticleVisible,
    initHitTest,
    processHitTest,
    cleanup,
  }
}
