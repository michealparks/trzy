import{l as c,s as i,u as l,B as h,b as p}from"./setup-bf23c97c.js";import{s as u}from"./shadows-fc355632.js";import{f}from"./floor-7cf59b96.js";class M extends c{constructor(){super({fragmentShader:"void main(){gl_FragColor=vec4(0.);discard;}",vertexShader:"void main(){}"})}}const y=`import * as THREE from 'three'
import { MeshDiscardMaterial } from 'trzy'

const geometry = new THREE.BoxGeometry()

// Creates a material that is discarded in the fragment shader.
const material = new MeshDiscardMaterial()
const mesh = new THREE.Mesh(geometry, material)
`,v={title:"Discard Material",parameters:{docs:{source:{code:y}}}},g=()=>{i();const{scene:e,renderer:o}=l();e.add(f());const n=new h,m=new M,d=new p(n,m);return e.add(d),u(e),o.domElement},r={render:g};var a,s,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const D=["Primary"];export{r as Primary,D as __namedExportsOrder,v as default};
//# sourceMappingURL=discard-material.stories-b58e4ce9.js.map
