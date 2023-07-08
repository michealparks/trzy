import{u as p,s as d,p as i,a as l,A as u}from"./setup-9d42791d.js";const E=`import * as THREE from 'three'
import { ViewHelper } from '.'

const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()
const helper = new ViewHelper(camera, renderer)
`,y={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:E}}}},w=()=>{const{scene:a,camera:o,renderer:r}=p();d();const c=new i(o.current,r);return l((H,m)=>c.render(m)),a.add(new u),r.domElement.style.position="relative",r.domElement},e={render:w};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const R=["Primary"];export{e as Primary,R as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-bf7b88a7.js.map
