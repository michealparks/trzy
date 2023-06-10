import{s}from"./setup-019dd85b.js";import{t as o}from"./teleport-77ede96c.js";const c=`import { three } from 'trzy'

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
`,d={title:"Three",parameters:{docs:{description:{component:"Instantiates a scene, camera, renderer, and frame loop."},source:{code:c}}}},m=()=>{const{canvas:t}=o();return s(),t},e={render:m};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const l=["Primary"];export{e as Primary,l as __namedExportsOrder,d as default};
//# sourceMappingURL=index.stories-554c5b68.js.map
