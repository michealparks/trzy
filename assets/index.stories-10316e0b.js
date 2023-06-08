import{t as p,A as c}from"./teleport-77ede96c.js";import{s as l}from"./setup-746c8827.js";const d=`import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
helper.length = 10
helper.width = 0.1
helper.setColors('yellow', 'blue', 'pink')

scene.add(helper)

// later
helper.dispose()
`,u={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:d}}}},m=()=>{const{scene:o,canvas:a}=p();l();const r=new c;return r.setColors("red","green","blue"),r.length=100,o.add(r),a},e={render:m};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const E=["Primary"];export{e as Primary,E as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-10316e0b.js.map
