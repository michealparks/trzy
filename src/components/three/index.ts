import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'
import { EffectComposer } from 'postprocessing'
import { addRendererResizer } from '../lib/resize'

THREE.ColorManagement.enabled = true

let cache: null | ReturnType<typeof threeInstance> = null

const createRenderer = (props: {
  parameters?: THREE.WebGLRendererParameters
  webGPU?: boolean
}): THREE.WebGLRenderer => {
  if (props.webGPU === true && WebGPU.isAvailable()) {
    return new WebGPURenderer(props.parameters)
  } else {
    return new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      ...props.parameters
    })
  }
}

export const three = (props: {
  parameters?: THREE.WebGLRendererParameters,
  autostart?: boolean,
  dpi?: number,
  shadowMap?: THREE.ShadowMapType | false,
  webGPU?: boolean,
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  if (cache !== null) {
    return cache
  }

  cache = threeInstance(props)

  return cache
}

export const threeInstance = (props: {
  parameters?: THREE.WebGLRendererParameters,
  autostart?: boolean,
  dpi?: number,
  shadowMap?: THREE.ShadowMapType | false,
  webGPU?: boolean,
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  const renderer = createRenderer(props)
 
  renderer.useLegacyLights = false

  if (renderer.outputColorSpace === undefined) {
    renderer.outputEncoding = THREE.sRGBEncoding
  }

  renderer.toneMapping = THREE.ACESFilmicToneMapping

  if (renderer.shadowMap !== undefined && props.shadowMap !== false) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = props.shadowMap ?? THREE.PCFSoftShadowMap
  }

  let camera: { current: THREE.Camera } = { current: new THREE.PerspectiveCamera() }

  const scene = new THREE.Scene()
  scene.add(camera.current)

  let composer = props.composer?.(scene, camera.current, renderer)

  let time = performance.now()
  let then = performance.now()
  let delta = 0

  const ctx = {
    canvas: renderer.domElement,
    renderer,
    scene,
    camera,
  }

  const updates: ((context: typeof ctx, delta: number) => void)[] = []
  const beforeRenders: ((context: typeof ctx, delta: number) => void)[] = []

  const frame = () => {
    time = performance.now()
    delta = time - then
    then = time

    for (let i = 0, l = beforeRenders.length; i < l; i += 1) {
      beforeRenders[i]!(ctx, delta)
    }

    if (composer !== undefined) {
      composer.render(delta)
    } else {
      renderer.render(scene, camera.current)
    }

    for (let i = 0, l = updates.length; i < l; i += 1) {
      updates[i]!(ctx, delta)
    }
  }

  let disposeResizer = addRendererResizer(camera.current, renderer, composer, props.dpi)

  const setCamera = (newCamera: THREE.Camera): void => {
    disposeResizer()

    camera.current = newCamera
    scene.add(camera.current)

    composer = props.composer?.(scene, camera.current, renderer)

    disposeResizer = addRendererResizer(camera.current, renderer, composer, props.dpi)
  }

  const stop = (): void => renderer.setAnimationLoop(null)
  const start = (): void => renderer.setAnimationLoop(frame)

  const beforeRender = (callback: (context: typeof ctx, delta: number) => void) => {
    beforeRenders.push(callback)
    return () => beforeRenders.splice(beforeRenders.indexOf(callback), 1)
  }

  const update = (callback: (context: typeof ctx, delta: number) => void) => {
    updates.push(callback)
    return () => updates.splice(updates.indexOf(callback), 1)
  }

  if (props.autostart !== false) {
    start()
  }

  return {
    ...ctx,
    setCamera,
    stop,
    start,
    beforeRender,
    update,
  }
}
