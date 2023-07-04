import * as THREE from 'three'
import { context } from './context'
import { frameHandlers } from './frame'
import { renderHandlers } from './render'
import { rendererResizer } from '../main'

export interface TrzyOptions {
  canvas?: HTMLCanvasElement
  dpr?: number
  toneMapping?: THREE.ToneMapping
  colorSpace?: THREE.ColorSpace
  shadows?: boolean | THREE.ShadowMapType
  rendererParameters?: THREE.WebGLRendererParameters
  size?: { width: number; height: number }
}

let initialized = false
let then = 0

const loop = (time: number, frame: XRFrame) => {
  const now = performance.now()
  const delta = now - then
  then = time

  if (renderHandlers.length > 0) {
    renderHandlers.forEach((item) => item.fn(context, delta))
  } else {
    context.renderer.render(context.scene, context.camera.current)
  }

  frameHandlers.forEach((item) => item.fn(context, delta, frame))
}

/**
 *
 * @param options An optional set of rendering and canvas options.
 * @param options.dpr Pixel density. Default is window.devicePixelRatio.
 * @returns
 */
export const trzy = (options: TrzyOptions = {}) => {
  initialized = true

  const renderer = new THREE.WebGLRenderer({
    canvas: options.canvas,
    antialias: true,
    powerPreference: 'high-performance',
    ...options.rendererParameters,
  })

  context.scene = new THREE.Scene()
  context.camera.current = new THREE.PerspectiveCamera()
  context.renderer = renderer
  if (options.size !== undefined) {
    renderer.setSize(options.size.width, options.size.height)
  }
  renderer.setPixelRatio(options.dpr ?? window.devicePixelRatio)
  renderer.toneMapping = options.toneMapping ?? THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = options.colorSpace ?? 'srgb'
  renderer.shadowMap.enabled = options.shadows !== false

  if ((options.shadows ?? true) === true) {
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
  } else if (typeof options.shadows === 'number') {
    renderer.shadowMap.type = options.shadows
  }

  renderer.setAnimationLoop(loop)

  const disposeResizer = rendererResizer(context)

  return {
    ...context,
    dispose () {
      disposeResizer()
      renderer.dispose()
    },
  }
}

export const useTrzy = () => {
  if (!initialized) {
    throw new Error('trzy() needs to be called.')
  }

  return context
}
