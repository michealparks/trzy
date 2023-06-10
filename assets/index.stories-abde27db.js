import{t as i,n as l,A as u}from"./teleport-77ede96c.js";import{s as w}from"./setup-019dd85b.js";const E=`import * as THREE from 'three'
import { ViewHelper } from '.'

const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()
const helper = new ViewHelper(camera, renderer)
`,v={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:E}}}},H=()=>{const{scene:a,camera:o,canvas:r,renderer:c,update:m}=i();w();const p=new l(o.current,c);return m((f,d)=>p.render(d)),a.add(new u),r.style.position="relative",r},e={render:H};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const x=["Primary"];export{e as Primary,x as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-abde27db.js.map
