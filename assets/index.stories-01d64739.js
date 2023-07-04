import{S as d,s as i,u as l,B as h,M as p}from"./setup-1360b994.js";class u extends d{constructor(){super({fragmentShader:"void main(){gl_FragColor=vec4(0.0,0.0,0.0,0.0);discard;}",vertexShader:"void main(){}"})}}const M=`import * as THREE from 'three'
import { MeshDiscardMaterial } from 'trzy'

const geometry = new THREE.BoxGeometry()

// Creates a material that is discarded in the fragment shader.
const material = new MeshDiscardMaterial()
const mesh = new THREE.Mesh(geometry, material)
`,E={title:"Discard Material",parameters:{docs:{source:{code:M}}}},y=()=>{i();const{scene:r,renderer:o}=l(),n=new h,c=new u,m=new p(n,c);return r.add(m),o.domElement},e={render:y};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const f=["Primary"];export{e as Primary,f as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-01d64739.js.map
