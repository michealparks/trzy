var u=Object.defineProperty;var m=(r,i,e)=>i in r?u(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var a=(r,i,e)=>(m(r,typeof i!="symbol"?i+"":i,e),e);import{M as g,I as c,J as d,D as f,q as v}from"./setup.7b4362ef.js";const C=`
varying vec3 worldPosition;

uniform float uDistance;

void main() {
  worldPosition = position.xzy * uDistance;
  worldPosition.xz += cameraPosition.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
}
`,z=`
varying vec3 worldPosition;

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
}
`;class x extends g{constructor(e=1,o=10,t="white",s=8e3){const n=new c,l=new d({side:f,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:o},uColor:{value:new v(t)},uDistance:{value:s}},vertexShader:C,fragmentShader:z,transparent:!0,extensions:{derivatives:!0}});super(n,l);a(this,"frustumCulled",!1);a(this,"material");this.material=l}get cellSize(){return this.material.uniforms.uCellSize.value}set cellSize(e){this.material.uniforms.uCellSize.value=e}get largeCellSize(){return this.material.uniforms.uLargeCellSize.value}set largeCellSize(e){this.material.uniforms.uLargeCellSize.value=e}get color(){return this.material.uniforms.uColor.value}set color(e){this.material.uniforms.uColor.value.set(e)}get distance(){return this.material.uniforms.uDistance.value}set distance(e){this.material.uniforms.uDistance.value=e}}export{x as G};
