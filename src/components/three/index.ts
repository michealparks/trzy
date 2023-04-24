import * as THREE from 'three'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'
import { resizeRendererToDisplaySize } from '../lib/render-to-display-size'
import { EffectComposer } from 'postprocessing'

THREE.ColorManagement.enabled = true

let cache: null | ReturnType<typeof threeInstance> = null

const createRenderer = (props: {
  alpha?: boolean
  antialias?: boolean
  depth?: boolean
  stencil?: boolean
  webGPU?: boolean
}): THREE.WebGLRenderer => {
  if (props.webGPU === true && WebGPU.isAvailable()) {
    return new WebGPURenderer()
  } else {
    return new THREE.WebGLRenderer({
      alpha: props.alpha,
      antialias: props.antialias,
      depth: props.depth,
      powerPreference: 'high-performance',
      stencil: props.stencil,
    })
  }
}

export const three = (props: {
  alpha?: boolean,
  antialias?: boolean,
  autostart?: boolean,
  camera?: 'perspective' | 'orthographic'
  checkShaderErrors?: boolean,
  depth?: boolean,
  outputEncoding?: THREE.TextureEncoding,
  shadowMap?: THREE.ShadowMapType | false,
  stencil?: boolean,
  toneMapping?: THREE.ToneMapping,
  xr?: boolean,
  webGPU?: boolean,
  render?: (delta: number, scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void,
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  if (cache !== null) {
    return cache
  }

  cache = threeInstance(props)

  return cache
}

export const threeInstance = (props: {
  alpha?: boolean,
  antialias?: boolean,
  autostart?: boolean,
  camera?: 'perspective' | 'orthographic'
  checkShaderErrors?: boolean,
  depth?: boolean,
  outputEncoding?: THREE.TextureEncoding,
  shadowMap?: THREE.ShadowMapType | false,
  stencil?: boolean,
  toneMapping?: THREE.ToneMapping,
  xr?: boolean,
  webGPU?: boolean,
  render?: (delta: number, scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void,
  composer?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => EffectComposer,
} = {}) => {
  const { render } = props
  const renderer = createRenderer(props)
 
  renderer.useLegacyLights = false

  if (renderer.debug !== undefined) {
    renderer.debug.checkShaderErrors = props.checkShaderErrors ?? true
  }

  if (renderer.xr !== undefined) {
    renderer.xr.enabled = props.xr ?? false
  }

  renderer.outputEncoding = props.outputEncoding ?? THREE.sRGBEncoding
  renderer.toneMapping = props.toneMapping ?? THREE.ACESFilmicToneMapping

  if (renderer.shadowMap !== undefined && props.shadowMap !== false) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = props.shadowMap ?? THREE.PCFSoftShadowMap
  }

  let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera = props.camera === 'orthographic'
    ? new THREE.OrthographicCamera()
    : new THREE.PerspectiveCamera()

  const scene = new THREE.Scene()
  scene.add(camera)

  const composer = props.composer?.(scene, camera, renderer)

  let time = performance.now()
  let then = performance.now()
  let delta = 0

  const updates: ((time: number, delta: number) => void)[] = []
  const beforeRenders: ((time: number, delta: number) => void)[] = []

  const loop = () => {
    time = performance.now()
    delta = time - then
    then = time

    for (let i = 0, l = beforeRenders.length; i < l; i += 1) {
      beforeRenders[i]!(time, delta)
    }

    if (render !== undefined) {
      render(delta, scene, camera, renderer)
    } else {
      resizeRendererToDisplaySize(camera, renderer, composer)
      if (composer !== undefined) {
        composer.render(delta)
      } else {
        renderer.render(scene, camera)
      }
    }

    for (let i = 0, l = updates.length; i < l; i += 1) {
      updates[i]!(time, delta)
    }
  }

  const setCamera = (newCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera) => {
    camera = newCamera
  }

  const stop = () => {
    renderer.setAnimationLoop(null)
  }

  const start = () => {
    renderer.setAnimationLoop(loop)
  }

  const beforeRender = (callback: (time: number, delta: number) => void) => {
    beforeRenders.push(callback)
    return () => beforeRenders.splice(beforeRenders.indexOf(callback), 1)
  }

  const update = (callback: (time: number, delta: number) => void) => {
    updates.push(callback)
    return () => updates.splice(updates.indexOf(callback), 1)
  }

  if (props.autostart !== false) {
    start()
  }

  return {
    camera,
    canvas: renderer.domElement,
    renderer,
    scene,
    setCamera,
    stop,
    start,
    beforeRender,
    update,
  }
}
