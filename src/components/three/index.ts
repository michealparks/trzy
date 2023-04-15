import * as THREE from 'three'
import { resizeRendererToDisplaySize } from '../lib/render-to-display-size'

THREE.ColorManagement.enabled = true

let cache: null | ReturnType<typeof threeInstance> = null

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
} = {}) => {
  const renderer = new THREE.WebGLRenderer({
    alpha: props.alpha,
    antialias: props.antialias,
    depth: props.depth,
    powerPreference: 'high-performance',
    stencil: props.stencil,
  })
 
  renderer.useLegacyLights = false
  renderer.debug.checkShaderErrors = props.checkShaderErrors ?? true
  renderer.xr.enabled = props.xr ?? false
  renderer.outputEncoding = props.outputEncoding ?? THREE.sRGBEncoding
  renderer.toneMapping = props.toneMapping ?? THREE.ACESFilmicToneMapping

  if (props.shadowMap !== false) {
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = props.shadowMap ?? THREE.PCFSoftShadowMap
  }

  let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera = props.camera === 'orthographic'
    ? new THREE.OrthographicCamera()
    : new THREE.PerspectiveCamera()

  const scene = new THREE.Scene()
  scene.add(camera)

  let time = performance.now()
  let then = performance.now()
  let delta = 0

  const updates: ((time: number, delta: number) => void)[] = []

  const loop = () => {
    time = performance.now()
    delta = time - then
    then = time

    resizeRendererToDisplaySize(camera, renderer)
    renderer.render(scene, camera)

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

  const update = (callback: (time: number, delta: number) => void) => {
    updates.push(callback)
  }

  const stopUpdate = (callback: (time: number, delta: number) => void) => {
    updates.splice(updates.indexOf(callback), 1)
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
    update,
    stopUpdate,
  }
}
