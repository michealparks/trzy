import{s as p,u as l,A as c}from"./setup-f1b0c42e.js";const d=`import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
scene.add(helper)

// Defaults
helper.length = 10
helper.width = 0.1
helper.setColors('red', 'blue', 'green')

// later
helper.dispose()
`,u={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:d}}}},m=()=>{p();const{scene:o,renderer:a}=l(),r=new c;return r.setColors("red","green","blue"),r.length=100,o.add(r),a.domElement},e={render:m};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-5d45353e.js.map
