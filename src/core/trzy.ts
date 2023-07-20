import * as THREE from 'three'
import { context } from './context'
import { frameloop } from './frameloop'
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

/**
 *
 * @param options An optional set of rendering and canvas options.
 * @param options.dpr Pixel density. Default is window.devicePixelRatio.
 * @returns
 */
export const trzy = (options: TrzyOptions = {}) => {
  if (initialized) {
    console.warn('trzy() was called more than once! This will often produce undesirable results.')
  }

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

  renderer.setAnimationLoop(frameloop)

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