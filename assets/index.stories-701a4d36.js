import{S as i,t as d,B as h,M as l}from"./teleport-77ede96c.js";class p extends i{constructor(){super({fragmentShader:"void main(){gl_FragColor=vec4(0.0,0.0,0.0,0.0);discard;}",vertexShader:"void main(){}"})}}const M=`import * as THREE from 'three'
import { MeshDiscardMaterial } from 'trzy'

const geometry = new THREE.BoxGeometry()

// Creates a material that is discarded in the fragment shader.
const material = new MeshDiscardMaterial()
const mesh = new THREE.Mesh(geometry, material)
`,y={title:"Discard Material",parameters:{docs:{source:{code:M}}}},g=()=>{const{scene:r,canvas:o}=d(),n=new h,c=new p,m=new l(n,c);return r.add(m),o},e={render:g};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const E=["Primary"];export{e as Primary,E as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-701a4d36.js.map
