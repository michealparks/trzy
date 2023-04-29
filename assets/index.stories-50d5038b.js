import{c as p}from"./index-14544d63.js";import{s as i}from"./lib-16c3f5a3.js";const d=`import * as THREE from 'three'
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
`,h={title:"Three",parameters:{docs:{description:{component:"Instantiates a scene, camera, renderer, and frame loop."},source:{code:d}}}},l=()=>{const{scene:s,camera:o,canvas:r,update:c}=p();return i({scene:s,camera:o,canvas:r,update:c,controls:!0}),r},e={render:l};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const f=["Primary"];export{e as Primary,f as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-50d5038b.js.map
