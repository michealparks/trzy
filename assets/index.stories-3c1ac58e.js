import{t as l,A as d}from"./teleport-bfa5777f.js";import{s as m}from"./lib-a13e8409.js";const i=`import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
helper.length = 10
helper.width = 0.1
helper.setColors('yellow', 'blue', 'pink')

scene.add(helper)

// later
helper.dispose()
`,H={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:i}}}},u=()=>{const{scene:s,camera:p,canvas:n,update:c}=l();m({scene:s,camera:p,canvas:n,update:c,controls:!0});const r=new d;return r.setColors("red","green","blue"),r.length=100,s.add(r),n},e={render:u};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Primary"];export{e as Primary,x as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-3c1ac58e.js.map
