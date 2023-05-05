import type * as THREE from 'three'
import type { EffectComposer } from 'postprocessing'

const resize = (
  width: number,
  height: number,
  dpi: number,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  composer?: EffectComposer
) => {
  const w = width * dpi | 0
  const h = height * dpi | 0
  const aspect = w / h

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
    composer.setSize(w, h, false)
  }

  if (!renderer.xr?.isPresenting) {
    renderer.setSize(w, h, false)
  }
}

export const addRendererResizer = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  composer?: EffectComposer,
  dpi = window.devicePixelRatio
) => {
  resizeRenderer(camera, renderer, composer, dpi)

  const observer = new ResizeObserver((entries) => {
    for (let i = 0, l = entries.length; i < l; i += 1) {
      const { width, height } = entries[i]!.contentRect
      resize(width, height, dpi, camera, renderer, composer)
    }
  })

  observer.observe(renderer.domElement)

  return () => observer.disconnect()
}

export const resizeRenderer = (
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  composer?: EffectComposer,
  dpi = window.devicePixelRatio
) => {
  const canvas = renderer.domElement
  const width = canvas.clientWidth * dpi | 0
  const height = canvas.clientHeight * dpi | 0
  resize(width, height, dpi, camera, renderer, composer)
}
