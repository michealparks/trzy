import{M as v,l as S,m as o,t as m}from"./index-7262fabf.js";import{s as _}from"./lib-20843e7f.js";var h=`#define RGB_NOISE_FUNCTION(uv) (randRgb(uv))

vec3 randRgb(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}

vec3 lowPassRandRGB(vec2 uv) {
  
  
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
  result *= 0.111111111; 
  return result;
}

vec3 highPassRandRGB(vec2 uv) {
  
  
  return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
}

vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; 
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

float penumbraSize( const in float zReceiver, const in float zBlocker ) { 
  return (zReceiver - zBlocker) / zBlocker;
}

float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float blockerDepthSum = FOCUS;
  float blockers = 0.0;
  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;
  #pragma unroll_loop_start
  for(int i = 0; i < SAMPLES; i ++) {
    offset = (vogelDiskSample(j, SAMPLES, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
  for (int i = 0; i < SAMPLES; i++) {
    vogelSample = vogelDiskSample(j, SAMPLES, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * SIZE);
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / SAMPLES_FLOAT;
}

float PCSS (sampler2D shadowMap, vec4 coords) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; 
  float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
  if (avgBlockerDepth == -1.0) {
    return 1.0;
  }
  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
  return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
}`;let l=!1;const g=(e,n,a)=>`
#define PENUMBRA_FILTER_SIZE float(${n})
#define FOCUS float(${e})
#define SAMPLES ${a}
#define SAMPLES_FLOAT float(${a})
#define SIZE float(${n})
${h}`,u=(e,n,a)=>{n.traverse(t=>{t instanceof v&&t.material instanceof S&&(e.properties.remove(t.material),t.material.dispose())}),e.info.programs!==null&&(e.info.programs.length=0),e.compile(n,a)};let f;const R=({focus:e=0,size:n=25,samples:a=10}={})=>(l||(f=o.shadowmap_pars_fragment,o.shadowmap_pars_fragment=o.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP
${g(e,n,a)}`).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`)),l=!0,({renderer:t,scene:s,camera:p})=>{o.shadowmap_pars_fragment=f,u(t,s,p)}),N=`import { softShadows, resetSoftShadows } from 'trzy'

softShadows()

// Only needed if softShadows() is called after setting up the scene.
resetSoftShadows()
`,w={title:"Soft Shadows",parameters:{docs:{source:{code:N}}}},O=()=>{const{renderer:e,scene:n,camera:a,update:t}=m();return R(),u(e,n,a),_({controls:!0}).then(()=>{const s=n.getObjectByName("Strawberry");t(()=>{s.rotation.y+=.05})}),e.domElement},r={render:O};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const B=["Primary"];export{r as Primary,B as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories-d180d244.js.map
