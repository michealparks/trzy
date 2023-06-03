import{t as i,o as l,A as u}from"./teleport-bfa5777f.js";import{s as w}from"./lib-a13e8409.js";const E=`import * as THREE from 'three'
import { ViewHelper } from '.'

const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()
const helper = new ViewHelper(camera, renderer)
`,v={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:E}}}},H=()=>{const{scene:t,camera:n,canvas:r,renderer:m,update:s}=i();w({scene:t,camera:n,canvas:r,update:s,controls:!0});const p=new l(n.current,m);return s((f,d)=>p.render(d)),t.add(new u),r.style.position="relative",r},e={render:H};var o,a,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const x=["Primary"];export{e as Primary,x as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-238019d0.js.map
