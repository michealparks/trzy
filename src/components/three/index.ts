import * as THREE from 'three'
import { EffectComposer } from 'postprocessing'
import { rendererResizer } from '../lib/resize'

THREE.ColorManagement.enabled = true

let cache: undefined | ReturnType<typeof threeInstance>

export const threeInstance = (properties: {
  parameters?: THREE.WebGLRendererParameters,
  autostart?: boolean,
  dpi?: number,
  shadowMap?: THREE.ShadowMapType | false,
  renderer?: THREE.WebGLRenderer
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  const renderer = properties.renderer ?? new THREE.WebGLRenderer({
    powerPreference: 'high-performance',
    ...properties.parameters,
  })

  renderer.useLegacyLights = false

  if (renderer.outputColorSpace === undefined) {
    renderer.outputEncoding = THREE.sRGBEncoding
  }

  renderer.toneMapping = THREE.ACESFilmicToneMapping

  if (renderer.shadowMap !== undefined && properties.shadowMap !== false) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = properties.shadowMap ?? THREE.PCFSoftShadowMap
  }

  const camera: { current: THREE.Camera } = { current: new THREE.PerspectiveCamera() }

  const scene = new THREE.Scene()
  scene.add(camera.current)

  let composer = properties.composer?.(scene, camera.current, renderer)

  let t = performance.now()
  let dt = 0
  let then = performance.now()

  const references = {
    camera,
    canvas: renderer.domElement,
    renderer,
    scene,
  }

  const updates: ((context: typeof references, delta: number) => void)[] = []
  const beforeRenders: ((context: typeof references, delta: number) => void)[] = []

  const frame = () => {
    t = performance.now()
    dt = t - then
    then = t

    for (let index = 0, l = beforeRenders.length; index < l; index += 1) {
      beforeRenders[index]!(references, dt)
    }

    if (composer === undefined) {
      renderer.render(scene, camera.current)
    } else {
      composer.render(dt)
    }

    for (let index = 0, l = updates.length; index < l; index += 1) {
      updates[index]!(references, dt)
    }
  }

  let disposeResizer = rendererResizer(camera.current, renderer, composer, properties.dpi)

  const setCamera = (nextCamera: THREE.Camera): void => {
    disposeResizer()

    camera.current = nextCamera
    scene.add(camera.current)

    composer = properties.composer?.(scene, camera.current, renderer)

    disposeResizer = rendererResizer(camera.current, renderer, composer, properties.dpi)
  }

  const stop = (): void => renderer.setAnimationLoop(null)
  const start = (): void => renderer.setAnimationLoop(frame)

  const beforeRender = (callback: (context: typeof references, delta: number) => void) => {
    beforeRenders.push(callback)
    return () => beforeRenders.splice(beforeRenders.indexOf(callback), 1)
  }

  const update = (callback: (context: typeof references, delta: number) => void) => {
    updates.push(callback)
    return () => updates.splice(updates.indexOf(callback), 1)
  }

  if (properties.autostart !== false) {
    start()
  }

  return {
    ...references,
    beforeRender,
    setCamera,
    start,
    stop,
    update,
  }
}

export const three = (properties: {
  parameters?: THREE.WebGLRendererParameters,
  autostart?: boolean,
  dpi?: number,
  shadowMap?: THREE.ShadowMapType | false,
  renderer?: THREE.WebGLRenderer
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  if (cache !== undefined) {
    return cache
  }

  cache = threeInstance(properties)

  return cache
}
