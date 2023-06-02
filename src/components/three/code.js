import { three } from 'trzy'

const { renderer, scene, camera, start, stop, update } = three()

// Will start the animation loop. Only needs to be called if 
// the autostart param is explicitly false.
start()

update(() => {
  // Will run after each frame is rendered.
})

// Will stop the animation loop.
stop()

// Can be called with optional parameters
three({
  parameters: {
    alpha: true,
    antialias: true
  },
  autostart: false,
  shadowMap: undefined, // can be any THREE.ShadowMapType, or false.
  dpi: 1,
})

/**
 * Resetting the camera is possible
 */
import * as THREE from 'three'

const { setCamera } = three()

setCamera(new THREE.OrthographicCamera())

/**
 * Can be used with an EffectComposer
 */
import * as POST from 'postprocessing'

three({
  composer(scene, camera, renderer) {
    const composer = new POST.EffectComposer(renderer)
    composer.addPass(new POST.RenderPass(scene, camera))
    composer.addPass(
      new POST.EffectPass(
        camera,
        new POST.BloomEffect({
          intensity: 1,
          luminanceThreshold: 0.15,
          height: 512,
          width: 512,
          luminanceSmoothing: 0.08,
          mipmapBlur: true,
          kernelSize: POST.KernelSize.MEDIUM
        }),
        new POST.SMAAEffect({
          preset: POST.SMAAPreset.LOW
        })
      )
    )
    return composer
  }
})
