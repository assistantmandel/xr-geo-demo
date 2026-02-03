import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Device Motion composable
 * Provides device orientation data for non-AR fallback mode
 * Uses DeviceOrientation API for gyroscope data
 */
export function useDeviceMotion() {
  const alpha = ref(0) // Z-axis rotation (compass)
  const beta = ref(0)  // X-axis rotation (front-back tilt)
  const gamma = ref(0) // Y-axis rotation (left-right tilt)
  const isSupported = ref(false)
  const permissionGranted = ref(false)

  const handleOrientation = (event: DeviceOrientationEvent) => {
    alpha.value = event.alpha ?? 0
    beta.value = event.beta ?? 0
    gamma.value = event.gamma ?? 0
  }

  // Request permission (required on iOS 13+)
  const requestPermission = async () => {
    // Check if permission API exists (iOS 13+)
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission()
        if (permission === 'granted') {
          permissionGranted.value = true
          window.addEventListener('deviceorientation', handleOrientation)
          return true
        }
      } catch (e) {
        console.warn('Device orientation permission denied:', e)
        return false
      }
    } else {
      // No permission needed (Android, older iOS)
      permissionGranted.value = true
      window.addEventListener('deviceorientation', handleOrientation)
      return true
    }
    return false
  }

  onMounted(() => {
    // Check support
    isSupported.value = 'DeviceOrientationEvent' in window

    // Auto-start on non-iOS devices
    if (isSupported.value && typeof (DeviceOrientationEvent as any).requestPermission !== 'function') {
      permissionGranted.value = true
      window.addEventListener('deviceorientation', handleOrientation)
    }
  })

  onUnmounted(() => {
    window.removeEventListener('deviceorientation', handleOrientation)
  })

  return {
    alpha,
    beta,
    gamma,
    isSupported,
    permissionGranted,
    requestPermission,
  }
}
