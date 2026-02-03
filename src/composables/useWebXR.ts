import { ref, onMounted, onUnmounted } from 'vue'
import type { WebGLRenderer } from 'three'

/**
 * WebXR composable for managing AR sessions
 * Handles session lifecycle, reference space, and XR frame updates
 */
export function useWebXR() {
  const isSupported = ref(false)
  const isSessionActive = ref(false)
  const xrSession = ref<XRSession | null>(null)
  const xrRefSpace = ref<XRReferenceSpace | null>(null)

  // Check if WebXR AR is supported
  const checkSupport = async () => {
    if ('xr' in navigator) {
      try {
        isSupported.value = await navigator.xr!.isSessionSupported('immersive-ar')
      } catch (e) {
        console.warn('WebXR support check failed:', e)
        isSupported.value = false
      }
    }
  }

  // Start AR session
  const startSession = async (renderer: WebGLRenderer) => {
    if (!isSupported.value || isSessionActive.value) return null

    try {
      // Request AR session with hit-test feature
      const session = await navigator.xr!.requestSession('immersive-ar', {
        requiredFeatures: ['local-floor'],
        optionalFeatures: ['hit-test', 'dom-overlay'],
      })

      xrSession.value = session
      isSessionActive.value = true

      // Configure renderer for XR
      await renderer.xr.setSession(session)

      // Get reference space (local-floor for AR)
      xrRefSpace.value = await session.requestReferenceSpace('local-floor')

      // Handle session end
      session.addEventListener('end', () => {
        isSessionActive.value = false
        xrSession.value = null
        xrRefSpace.value = null
      })

      return session
    } catch (e) {
      console.error('Failed to start AR session:', e)
      return null
    }
  }

  // End AR session
  const endSession = async () => {
    if (xrSession.value) {
      await xrSession.value.end()
    }
  }

  onMounted(() => {
    checkSupport()
  })

  onUnmounted(() => {
    endSession()
  })

  return {
    isSupported,
    isSessionActive,
    xrSession,
    xrRefSpace,
    startSession,
    endSession,
  }
}
