import * as THREE from 'three'
import { three } from 'trzy'

// Also exports scene, camera, canvas, renderer, setCamera
const { start, stop, update } = three({
  // defaults.
  alpha: false,
  autoStart: true,
  antialias: false,
  camera: 'perspective', // or 'orthographic'
  checkShaderErrors: true,
  depth: true,
  outputEncoding: THREE.sRGBEncoding,
  shadowMap: undefined, // can be any THREE.ShadowMapType,
  stencil: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  xr: false,
})

// Will start the animation loop. Only needs to be called if 
// autostart is explicitly false.
start()

update(() => {
  // Will run after each frame is rendered.
})

// Will stop the animation loop.
stop()
