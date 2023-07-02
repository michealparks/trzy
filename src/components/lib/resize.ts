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
  const w = Math.trunc(width * dpi)
  const h = Math.trunc(height * dpi)
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

  console.log(w, h)

  if (composer !== undefined) {
    composer.setSize(w, h, false)
  }

  if (!renderer.xr.isPresenting) {
    renderer.setSize(w, h, false)
  }
}

export const rendererResizer = ({
  camera,
  renderer,
  composer,
  dpr,
}: {
  camera: { current: THREE.Camera }
  renderer: THREE.WebGLRenderer
  composer?: EffectComposer
  dpr: { current: number }
}) => {
  const observer = new ResizeObserver(debounce<ResizeObserverCallback>(([entry]) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize
    const { width, height } = entry!.contentRect
    resize(width, height, dpr.current, camera.current, renderer, composer)
  }, 30))

  observer.observe(renderer.domElement)
  resize(renderer.domElement.clientWidth, renderer.domElement.clientHeight, dpr.current, camera.current, renderer, composer)

  return () => observer.disconnect()
}
