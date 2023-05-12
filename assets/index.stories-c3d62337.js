var g=Object.defineProperty;var f=(a,r,e)=>r in a?g(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var o=(a,r,e)=>(f(a,typeof r!="symbol"?r+"":r,e),e);import{M as p,P as v,S as z,D as S,C,a as w}from"./teleport-3940721f.js";import{s as x}from"./lib-532181b1.js";var h=`varying vec3 worldPosition;

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
}`;class G extends p{constructor(e=1,n=10,d="white",c=8e3){const m=new v,t=new z({side:S,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:n},uColor:{value:new C(d)},uDistance:{value:c}},transparent:!0,vertexShader:h,fragmentShader:P,extensions:{derivatives:!0}});super(m,t);o(this,"frustumCulled",!1);o(this,"material");this.material=t}get cellSize(){return this.material.uniforms.cellSize.value}set cellSize(e){this.material.uniforms.cellSize.value=e}get largeCellSize(){return this.material.uniforms.cellSize.value}set largeCellSize(e){this.material.uniforms.largeCellSize.value=e}}const _=`import { GridHelper } from 'trzy'

scene.add(new GridHelper(1, 10, 'white'))
`,M={title:"Grid Helper",parameters:{docs:{description:{component:"Similar to `THREE.GridHelper` but is just a single plane with lines rendered on the GPU."},source:{code:_}}}},y=()=>{const{scene:a,camera:r,canvas:e,update:n}=w();return x({scene:a,camera:r,canvas:e,update:n,controls:!0}),a.add(new G(1,10,"white")),e},i={render:y};var l,s,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render
}`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const b=["Primary"];export{i as Primary,b as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-c3d62337.js.map