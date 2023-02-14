import * as THREE from 'three'
import { resizeRendererToDisplaySize } from './render-to-display-size'
import { runUpdates, runPostUpdates } from './update'

THREE.ColorManagement.legacyMode = false

let cache: null | {
  camera: THREE.PerspectiveCamera
  canvas: HTMLCanvasElement
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
} = null

export const three = (props = {}) => {
  if (cache !== null) {
    return cache
  }

  cache = threeInstance(props)

  return cache
}

export const threeInstance = (props: {
  alpha?: boolean,
  antialias?: boolean,
  checkShaderErrors?: boolean,
  depth?: boolean,
  outputEncoding?: THREE.TextureEncoding,
  physicallyCorrectLights?: boolean,
  shadowMap?: THREE.ShadowMapType,
  stencil?: boolean,
  toneMapping?: THREE.ToneMapping,
  xr?: boolean,
} = {}) => {
  const renderer = new THREE.WebGLRenderer({
    alpha: props.alpha,
    antialias: props.antialias,
    depth: props.depth,
    powerPreference: 'high-performance',
    stencil: props.stencil,
  })
  renderer.debug.checkShaderErrors = props.checkShaderErrors ?? true
  renderer.physicallyCorrectLights = props.physicallyCorrectLights ?? false
  renderer.xr.enabled = props.xr ?? false
  renderer.outputEncoding = props.outputEncoding ?? THREE.sRGBEncoding
  renderer.toneMapping = props.toneMapping ?? THREE.ACESFilmicToneMapping

  if (props.shadowMap) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = props.shadowMap
  }

  const scene = new THREE.Scene()

  let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera = new THREE.PerspectiveCamera()

  const loop = () => {
    resizeRendererToDisplaySize(camera, renderer)
    runUpdates()
    renderer.render(scene, camera)
    runPostUpdates()
  }

  const setCamera = (newCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera) => {
    camera = newCamera
  }

  const pause = () => {
    renderer.setAnimationLoop(null)
  }

  const run = () => {
    renderer.setAnimationLoop(loop)
  }

  run()

  return {
    camera,
    canvas: renderer.domElement,
    renderer,
    scene,
    setCamera,
    pause,
    run,
  }
}