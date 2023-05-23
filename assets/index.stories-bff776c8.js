var g=Object.defineProperty;var f=(a,r,e)=>r in a?g(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var t=(a,r,e)=>(f(a,typeof r!="symbol"?r+"":r,e),e);import{M as v,P as p,S as C,D as z,C as S,a as h}from"./teleport-3940721f.js";import{s as w}from"./lib-532181b1.js";var x=`varying vec3 worldPosition;

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
}`;class G extends v{constructor(e=1,n=10,m="white",d=8e3){const c=new p,o=new C({side:z,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:n},uColor:{value:new S(m)},uDistance:{value:d}},transparent:!0,vertexShader:x,fragmentShader:P,extensions:{derivatives:!0}});super(c,o);t(this,"frustumCulled",!1);t(this,"material");this.material=o}get cellSize(){return this.material.uniforms.uCellSize.value}set cellSize(e){this.material.uniforms.uCellSize.value=e}get largeCellSize(){return this.material.uniforms.uLargeCellSize.value}set largeCellSize(e){this.material.uniforms.uLargeCellSize.value=e}get color(){return this.material.uniforms.uColor.value}set color(e){this.material.uniforms.uColor.value=e}get distance(){return this.material.uniforms.uDistance.value}set distance(e){this.material.uniforms.uDistance.value=e}}const _=`import { GridHelper } from 'trzy'

scene.add(new GridHelper(1, 10, 'white'))
`,L={title:"Grid Helper",parameters:{docs:{description:{component:"Similar to `THREE.GridHelper` but is just a single plane with lines rendered on the GPU."},source:{code:_}}}},y=()=>{const{scene:a,camera:r,canvas:e,update:n}=h();return w({scene:a,camera:r,canvas:e,update:n,controls:!0}),a.add(new G(1,10,"white")),e},i={render:y};var l,s,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render
}`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-bff776c8.js.map
