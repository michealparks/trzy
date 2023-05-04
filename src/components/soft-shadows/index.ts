// From: https://github.com/mrdoob/three.js/blob/dev/examples/webgl_shadowmap_pcss.html

import * as THREE from 'three'
import glsl from './index.glsl'

let added = false

const pcss = (focus: number, size: number, samples: number) => `
#define PENUMBRA_FILTER_SIZE float(${size})
#define FOCUS float(${focus})
#define SAMPLES ${samples}
#define SAMPLES_FLOAT float(${samples})
#define SIZE float(${size})
${glsl}`

export const resetSoftShadows = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  scene.traverse((object) => {
    if ((object as THREE.Mesh).isMesh && ((object as THREE.Mesh).material as THREE.Material).isMaterial) {
      ;renderer.properties.remove((object as THREE.Mesh).material as THREE.Material)
      ;((object as THREE.Mesh).material as THREE.Material).dispose()
    }
  })

  if (renderer.info.programs !== null) {
    renderer.info.programs.length = 0
  }

  renderer.compile(scene, camera)
}

let original: string

export const softShadows = ({
  focus = 0,
  size = 25,
  samples = 10
}: {
  focus?: number
  size?: number
  samples?: number
} = {}) => {
  if (!added) {
    original = THREE.ShaderChunk.shadowmap_pars_fragment

    THREE.ShaderChunk.shadowmap_pars_fragment = THREE.ShaderChunk.shadowmap_pars_fragment
      .replace(
        '#ifdef USE_SHADOWMAP',
        `#ifdef USE_SHADOWMAP\n${pcss(focus, size, samples)}`
      )
      .replace(
        '#if defined( SHADOWMAP_TYPE_PCF )',
        '\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )'
      )
  }

  added = true

  return ({
    renderer,
    scene,
    camera
  }: {
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.Camera
  }) => {
    THREE.ShaderChunk.shadowmap_pars_fragment = original
    resetSoftShadows(renderer, scene, camera)
  }
}
