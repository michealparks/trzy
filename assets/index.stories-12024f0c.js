var g=Object.defineProperty;var f=(i,r,e)=>r in i?g(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e;var a=(i,r,e)=>(f(i,typeof r!="symbol"?r+"":r,e),e);import{M as v,P as p,S as C,D as z,C as S,t as h}from"./teleport-97191997.js";import{s as w}from"./setup-ff5f1186.js";var x=`varying vec3 worldPosition;

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
}`;class G extends v{constructor(e=1,u=10,c="white",m=8e3){const d=new p,t=new C({side:z,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:u},uColor:{value:new S(c)},uDistance:{value:m}},vertexShader:x,fragmentShader:P,transparent:!0,extensions:{derivatives:!0}});super(d,t);a(this,"frustumCulled",!1);a(this,"material");this.material=t}get cellSize(){return this.material.uniforms.uCellSize.value}set cellSize(e){this.material.uniforms.uCellSize.value=e}get largeCellSize(){return this.material.uniforms.uLargeCellSize.value}set largeCellSize(e){this.material.uniforms.uLargeCellSize.value=e}get color(){return this.material.uniforms.uColor.value}set color(e){this.material.uniforms.uColor.value=e}get distance(){return this.material.uniforms.uDistance.value}set distance(e){this.material.uniforms.uDistance.value=e}}const _=`import * as THREE from 'three'
import { GridHelper } from '.'

const scene = new THREE.Scene()
const cellSize = 1
const largeCellSize = 10
const color = 'white'
scene.add(new GridHelper(cellSize, largeCellSize, color))
`,F={title:"Grid Helper",parameters:{docs:{description:{component:"Similar to `THREE.GridHelper` but is just a single plane with lines rendered on the GPU."},source:{code:_}}}},D=()=>{const{scene:i,canvas:r}=h();return w(),i.add(new G(1,10,"white")),r},n={render:D};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const L=["Primary"];export{n as Primary,L as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-12024f0c.js.map
