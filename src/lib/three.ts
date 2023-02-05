import * as THREE from 'three'
import { resizeRendererToDisplaySize } from './render-to-display-size'
import { runUpdates, runPostUpdates } from './update'

let cache: null | {
  camera: THREE.PerspectiveCamera
  canvas: HTMLCanvasElement
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
} = null

export const three = () => {
  if (cache !== null) {
    return cache;
  }

  cache = threeInstance()

  return cache
}

export const threeInstance = () => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  })
  const scene = new THREE.Scene()

  let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera = new THREE.PerspectiveCamera()

  const loop = () => {
    runUpdates()
    resizeRendererToDisplaySize(camera, renderer)
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