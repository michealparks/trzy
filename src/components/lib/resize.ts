import type * as THREE from 'three'
import type { EffectComposer } from 'postprocessing'
import { debounce } from './debounce'

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
  const observer = new ResizeObserver(debounce<ResizeObserverCallback>(([entry]) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize
    const { width, height } = entry!.contentRect
    resize(width, height, dpi, camera, renderer, composer)
  }, 30))

  observer.observe(renderer.domElement)

  return () => observer.disconnect()
}
