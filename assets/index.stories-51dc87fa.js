import{t as o}from"./index-7262fabf.js";import{s}from"./lib-20843e7f.js";const c=`import * as THREE from 'three'
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
`,l={title:"Three",parameters:{docs:{description:{component:"Instantiates a scene, camera, renderer, and frame loop."},source:{code:c}}}},p=()=>{const{canvas:a}=o();return s({controls:!0}),a},e={render:p};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const m=["Primary"];export{e as Primary,m as __namedExportsOrder,l as default};
//# sourceMappingURL=index.stories-51dc87fa.js.map
