import{s as p,u as c,A as l}from"./setup-bf23c97c.js";const d=`import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
scene.add(helper)

// Defaults
helper.length = 10
helper.width = 0.1
helper.setColors('red', 'blue', 'green')

// Later
helper.dispose()
`,u={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:d}}}},m=()=>{p();const{scene:o,renderer:a}=c(),r=new l;return r.setColors("red","green","blue"),r.length=100,o.add(r),a.domElement},e={render:m};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,u as default};
//# sourceMappingURL=axes-helper.stories-91e0cd92.js.map
