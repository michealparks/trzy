import * as THREE from 'three'
import { context, type TrzyContext } from './context'
import { frameloop } from './frameloop'
import { rendererResizer } from '$lib'
export interface TrzyOptions {
  canvas?: HTMLCanvasElement
  dpr?: number
  toneMapping?: THREE.ToneMapping
  colorSpace?: THREE.ColorSpace
  shadows?: boolean | THREE.ShadowMapType
  rendererParameters?: THREE.WebGLRendererParameters
}

let initialized = false

const trzy = (options: TrzyOptions = {}) => {
  if (initialized) {
    console.warn('trzy() was called more than once! This will often produce undesirable results.')
  }

  const renderer = new THREE.WebGLRenderer({
    canvas: options.canvas,
    antialias: true,
    powerPreference: 'high-performance',
    ...options.rendererParameters,
  })

  context.scene = new THREE.Scene()
  context.camera.current = new THREE.PerspectiveCamera()
  context.renderer = renderer
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

  initialized = true

  return {
    ...context,
    dispose () {
      disposeResizer()
      renderer.dispose()
    },
  }
}

/**
 *
 * @param options An optional set of rendering and canvas options. Options can only be passed during the first `useTrzy` call.
 * @param options.dpr Pixel density. Default is window.devicePixelRatio.
 * @param options.canvas An optional HTMLCanvasElement to render to.
 * @param options.toneMapping Optional THREE.ToneMapping.
 * @param options.colorSpace Optional THREE.ColorSpace.
 * @param options.shadows Optional shadows. Default is THREE.ShadowMapType.
 * @param rendererParameters An optional set of THREE.WebGLRendererParameters.
 * @returns a TrzyContext.
 */
export const useTrzy = (options: TrzyOptions = {}): TrzyContext => {
  if (!initialized) {
    return trzy(options)
  }

  return context
}
