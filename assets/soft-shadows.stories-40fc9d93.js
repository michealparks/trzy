import{S as l,M as c,g as v,t as h,a as m,D as g,B as w,b as d,c as S,P as _,h as R,u as E}from"./three-0d2b188b.js";import{O as N}from"./OrbitControls-4676173d.js";import{s as B}from"./shadows-27c8e574.js";const I=(e,t,a)=>`
#define PENUMBRA_FILTER_SIZE float(${t})
#define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
vec3 randRGB(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}
vec3 lowPassRandRGB(vec2 uv) {
  // 3x3 convolution (average)
  // can be implemented as separable with an extra buffer for a total of 6 samples instead of 9
  vec3 result = vec3(0);
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, +1.0));
  result *= 0.111111111; // 1.0 / 9.0
  return result;
}
vec3 highPassRandRGB(vec2 uv) {
  // by subtracting the low-pass signal from the original signal, we're being left with the high-pass signal
  // hp(x) = x - lp(x)
  return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
}
vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}
float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
}
float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float blockerDepthSum = float(${e});
  float blockers = 0.0;
  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;
  #pragma unroll_loop_start
  for(int i = 0; i < ${a}; i ++) {
    offset = (vogelDiskSample(j, ${a}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
    depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset));
    if (depth < compare) {
      blockerDepthSum += depth;
      blockers++;
    }
    j++;
  }
  #pragma unroll_loop_end
  if (blockers > 0.0) {
    return blockerDepthSum / blockers;
  }
  return -1.0;
}
        
float vogelFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float shadow = 0.0f;
  int j = 0;
  vec2 vogelSample = vec2(0.0);
  vec2 offset = vec2(0.0);
  #pragma unroll_loop_start
  for (int i = 0; i < ${a}; i++) {
    vogelSample = vogelDiskSample(j, ${a}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float(${t}));
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / ${a}.0;
}
float PCSS (sampler2D shadowMap, vec4 coords) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
  if (avgBlockerDepth == -1.0) {
    return 1.0;
  }
  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
  return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
}`,M=(e,t,a)=>{t.traverse(o=>{o instanceof c&&o.material instanceof v&&(e.properties.remove(o.material),o.material.dispose())}),e.info.programs!==null&&(e.info.programs.length=0),e.compile(t,a)},x=({focus:e=0,size:t=25,samples:a=10}={})=>{const o=l.shadowmap_pars_fragment;return l.shadowmap_pars_fragment=l.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP
`+I(e,t,a)).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`),({renderer:r,scene:n,camera:s})=>{l.shadowmap_pars_fragment=o,M(r,n,s)}},k={title:"Soft Shadows",parameters:{docs:{source:{type:"code",code:`
<script>

import { softShadows } from 'trzy'

softShadows()

<\/script>
        `}}}},i={render:()=>{x();const{scene:e,camera:t,canvas:a,run:o}=h({shadowMap:R});new N(t,a),e.add(t),e.add(new m(void 0,.5));const r=new g(void 0,1);r.position.set(2,3,-2),r.lookAt(0,0,0),e.add(r);const n=new c(new w,new d);n.add(new S),e.add(n),E(()=>{n.rotation.x+=.01,n.rotation.y+=.01});const s=new c(new _(10,10,1,1).rotateX(-Math.PI/2),new d);return s.position.y=-2,e.add(s),t.position.set(5,5,5),t.lookAt(0,0,0),B(e),a.style.cssText="width: 100%; height: 400px;",o(),a}};var f,p,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    softShadows();
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance({
      shadowMap: THREE.BasicShadowMap
    });
    new OrbitControls(camera, canvas);
    scene.add(camera);
    scene.add(new THREE.AmbientLight(undefined, 0.5));
    const light = new THREE.DirectionalLight(undefined, 1);
    light.position.set(2, 3, -2);
    light.lookAt(0, 0, 0);
    scene.add(light);
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
    cube.add(new THREE.AxesHelper());
    scene.add(cube);
    update(() => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 1, 1).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial());
    floor.position.y = -2;
    scene.add(floor);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    shadows(scene);
    canvas.style.cssText = 'width: 100%; height: 400px;';
    run();
    return canvas;
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Primary"];export{i as Primary,P as __namedExportsOrder,k as default};
//# sourceMappingURL=soft-shadows.stories-40fc9d93.js.map
