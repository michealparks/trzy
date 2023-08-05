/*
 *  Integration and compilation: @N8Programs
 *  Inspired by:
 *   https://github.com/mrdoob/three.js/blob/dev/examples/webgl_shadowmap_pcss.html
 *   https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-17-efficient-soft-edged-shadows-using
 *   https://developer.download.nvidia.com/whitepapers/2008/PCSS_Integration.pdf
 *   https://github.com/mrdoob/three.js/blob/master/examples/webgl_shadowmap_pcss.html [spidersharma03]
 *   https://spline.design/
 *  Concept:
 *   https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/
 *  Vogel Disk Implementation:
 *   https://www.shadertoy.com/view/4l3yRM [ashalah]
 *  High-Frequency Noise Implementation:
 *   https://www.shadertoy.com/view/tt3fDH [spawner64]
 */

import * as THREE from 'three'
import shader from './index.glsl?raw'

type SoftShadowsProps = {
  /** Size of the light source (the larger the softer the light), default: 25 */
  size?: number
  /** Number of samples (more samples less noise but more expensive), default: 10 */
  samples?: number
  /** Depth focus, use it to shift the focal point (where the shadow is the sharpest), default: 0 (the beginning) */
  focus?: number
}

export const resetSoftShadows = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
  scene.traverse((object) => {
    if ('material' in object) {
      const material = object.material as THREE.Material
      renderer.properties.remove(material)
      material.dispose()
    }
  })

  renderer.info.programs?.splice(0, renderer.info.programs.length)
  renderer.compile(scene, camera)
}

export const softShadows = ({ focus = 0, size = 25, samples = 10 }: SoftShadowsProps = {}) => {
  const original = THREE.ShaderChunk.shadowmap_pars_fragment
  const finalShader = shader
    .replaceAll('$FOCUS', focus.toString())
    .replaceAll('$SIZE', size.toString())
    .replaceAll('$SAMPLES', samples.toString())

  THREE.ShaderChunk.shadowmap_pars_fragment = THREE.ShaderChunk.shadowmap_pars_fragment
    .replace('#ifdef USE_SHADOWMAP', finalShader)
    .replace(
      '#if defined( SHADOWMAP_TYPE_PCF )',
      '\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )'
    )
  return (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
    THREE.ShaderChunk.shadowmap_pars_fragment = original
    resetSoftShadows(renderer, scene, camera)
  }
}
