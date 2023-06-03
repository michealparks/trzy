var g=Object.defineProperty;var f=(n,r,e)=>r in n?g(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e;var t=(n,r,e)=>(f(n,typeof r!="symbol"?r+"":r,e),e);import{M as v,P as p,S as C,D as z,C as S,t as h}from"./teleport-bfa5777f.js";import{s as w}from"./lib-a13e8409.js";var x=`varying vec3 worldPosition;

uniform float uDistance;

void main() {
  vec3 pos = position.xzy * uDistance;
  pos.xz += cameraPosition.xz;

  worldPosition = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,P=`varying vec3 worldPosition;

uniform float uCellSize;
uniform float uLargeCellSize;
uniform vec3 uColor;
uniform float uDistance;

float getGrid(float size) {
  vec2 r = worldPosition.xz / size;
  vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
  float line = min(grid.x, grid.y);

  return 1.0 - min(line, 1.0);
}

void main() {
  float d = 1.0 - min(distance(cameraPosition.xz, worldPosition.xz) / uDistance, 1.0);

  float g1 = getGrid(uCellSize);
  float g2 = getGrid(uLargeCellSize);

  gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
  gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2);

  if (gl_FragColor.a <= 0.0) discard;
}`;class G extends v{constructor(e=1,a=10,c="white",m=8e3){const d=new p,o=new C({side:z,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:a},uColor:{value:new S(c)},uDistance:{value:m}},transparent:!0,vertexShader:x,fragmentShader:P,extensions:{derivatives:!0}});super(d,o);t(this,"frustumCulled",!1);t(this,"material");this.material=o}get cellSize(){return this.material.uniforms.uCellSize.value}set cellSize(e){this.material.uniforms.uCellSize.value=e}get largeCellSize(){return this.material.uniforms.uLargeCellSize.value}set largeCellSize(e){this.material.uniforms.uLargeCellSize.value=e}get color(){return this.material.uniforms.uColor.value}set color(e){this.material.uniforms.uColor.value=e}get distance(){return this.material.uniforms.uDistance.value}set distance(e){this.material.uniforms.uDistance.value=e}}const _=`import * as THREE from 'three'
import { GridHelper } from '.'

const scene = new THREE.Scene()
const cellSize = 1
const largeCellSize = 10
const color = 'white'
scene.add(new GridHelper(cellSize, largeCellSize, color))
`,F={title:"Grid Helper",parameters:{docs:{description:{component:"Similar to `THREE.GridHelper` but is just a single plane with lines rendered on the GPU."},source:{code:_}}}},D=()=>{const{scene:n,camera:r,canvas:e,update:a}=h();return w({scene:n,camera:r,canvas:e,update:a,controls:!0}),n.add(new G(1,10,"white")),e},i={render:D};var l,s,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render
}`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const L=["Primary"];export{i as Primary,L as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-2d594265.js.map
