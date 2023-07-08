import{s as a,u as l,A as c}from"./setup-9d42791d.js";const d=`import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
helper.length = 10
helper.width = 0.1
helper.setColors('yellow', 'blue', 'pink')

scene.add(helper)

// later
helper.dispose()
`,u={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:d}}}},m=()=>{a();const{scene:t,renderer:p}=l(),r=new c;return r.setColors("red","green","blue"),r.length=100,t.add(r),p.domElement},e={render:m};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-88e8cceb.js.map
