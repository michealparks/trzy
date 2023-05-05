import{l as r,t as v}from"./index-ea951f63.js";import{s as S}from"./lib-3b1acf2d.js";var m=`#define RGB_NOISE_FUNCTION(uv) (randRgb(uv))

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
}`;let f=!1;const _=(e,n,t)=>`
#define PENUMBRA_FILTER_SIZE float(${n})
#define FOCUS float(${e})
#define SAMPLES ${t}
#define SAMPLES_FLOAT float(${t})
#define SIZE float(${n})
${m}`,p=(e,n,t)=>{n.traverse(a=>{a.isMesh&&a.material.isMaterial&&(e.properties.remove(a.material),a.material.dispose())}),e.info.programs!==null&&(e.info.programs.length=0),e.compile(n,t)};let c;const h=({focus:e=0,size:n=25,samples:t=10}={})=>(f||(c=r.shadowmap_pars_fragment,r.shadowmap_pars_fragment=r.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP
${_(e,n,t)}`).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`)),f=!0,({renderer:a,scene:o,camera:l})=>{r.shadowmap_pars_fragment=c,p(a,o,l)}),g=`import { softShadows, resetSoftShadows } from 'trzy'

softShadows()

// Only needed if softShadows() is called after setting up the scene.
resetSoftShadows()
`,E={title:"Soft Shadows",parameters:{docs:{source:{code:g}}}},R=()=>{h();const{scene:e,camera:n,canvas:t,renderer:a,update:o}=v();return p(a,e,n),S({scene:e,camera:n,canvas:t,update:o,controls:!0}).then(()=>{const l=e.getObjectByName("Strawberry");o(()=>{l.rotation.y+=.05})}),a.domElement},s={render:R};var i,d,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const I=["Primary"];export{s as Primary,I as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-6c5df16b.js.map
