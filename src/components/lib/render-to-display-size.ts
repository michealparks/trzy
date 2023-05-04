import type * as THREE from 'three'
import type { EffectComposer } from 'postprocessing'

export const resizeRendererToDisplaySize = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  composer?: EffectComposer,
  force = false,
  dpi = window.devicePixelRatio
): void => {
  const canvas = renderer.domElement
  const width = canvas.clientWidth * dpi | 0
  const height = canvas.clientHeight * dpi | 0
  const needResize = canvas.width !== width || canvas.height !== height

  if (needResize || force) {
    const aspect = canvas.clientWidth / canvas.clientHeight

    if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const cam = camera as THREE.PerspectiveCamera
      cam.aspect = aspect
      cam.updateProjectionMatrix()
    } else {
      const cam = camera as THREE.OrthographicCamera
      cam.left = cam.userData.size * aspect / -2
      cam.right = cam.userData.size * aspect / 2
      cam.top = cam.userData.size / 2
      cam.bottom = cam.userData.size / -2
      cam.updateProjectionMatrix()
    }

    if (composer !== undefined) {
      composer.setSize(width, height, false)
    }

    if (!renderer.xr?.isPresenting) {
      renderer.setSize(width, height, false)
    }
  }
}
