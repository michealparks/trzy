var u=Object.defineProperty;var m=(r,i,e)=>i in r?u(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var a=(r,i,e)=>(m(r,typeof i!="symbol"?i+"":i,e),e);import{M as g,P as f,t as d,D as c,k as v}from"./setup.f293222f.js";var C=`varying vec3 worldPosition;

uniform float uDistance;

void main() {
  vec3 pos = position.xzy * uDistance;
  pos.xz += cameraPosition.xz;
  worldPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,z=`varying vec3 worldPosition;

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
}`;class h extends g{constructor(e=1,n=10,t="white",o=8e3){const s=new f,l=new d({side:c,uniforms:{uCellSize:{value:e},uLargeCellSize:{value:n},uColor:{value:new v(t)},uDistance:{value:o}},vertexShader:C,fragmentShader:z,transparent:!0,extensions:{derivatives:!0}});super(s,l);a(this,"frustumCulled",!1);a(this,"material");this.material=l}get cellSize(){return this.material.uniforms.uCellSize.value}set cellSize(e){this.material.uniforms.uCellSize.value=e}get largeCellSize(){return this.material.uniforms.uLargeCellSize.value}set largeCellSize(e){this.material.uniforms.uLargeCellSize.value=e}get color(){return this.material.uniforms.uColor.value}set color(e){this.material.uniforms.uColor.value.set(e)}get distance(){return this.material.uniforms.uDistance.value}set distance(e){this.material.uniforms.uDistance.value=e}}export{h as G};
