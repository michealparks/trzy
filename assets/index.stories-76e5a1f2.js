import{l as s,u as v,s as d,c as m}from"./setup-f1b0c42e.js";var S=`#ifdef USE_SHADOWMAP
#define PENUMBRA_FILTER_SIZE float($SIZE)
#define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
vec3 randRGB(vec2 uv) {
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
  float blockerDepthSum = float($FOCUS);
  float blockers = 0.0;

  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;

  #pragma unroll_loop_start
  for(int i = 0; i < \${samples}; i ++) {
    offset = (vogelDiskSample(j, \${samples}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
  for (int i = 0; i < \${samples}; i++) {
    vogelSample = vogelDiskSample(j, \${samples}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float($SIZE));
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / \${samples}.0;
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
}`;const _=(e,n,a)=>{var t;n.traverse(o=>{if("material"in o){const r=o.material;e.properties.remove(r),r.dispose()}}),(t=e.info.programs)==null||t.splice(0,e.info.programs.length),e.compile(n,a)},h=({focus:e=0,size:n=25,samples:a=10}={})=>{const t=s.shadowmap_pars_fragment,o=S.replaceAll("$FOCUS",e).replaceAll("$SIZE",n).replaceAll("$SAMPLES",a);return s.shadowmap_pars_fragment=s.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",o).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`),(r,p,u)=>{s.shadowmap_pars_fragment=t,_(r,p,u)}},g=`import { softShadows, resetSoftShadows } from 'trzy'

softShadows()

// Only needed if softShadows() is called after setting up the scene.
resetSoftShadows()
`,I={title:"Soft Shadows",parameters:{docs:{source:{code:g}}}},R=()=>{h();const{scene:e,renderer:n}=v();return d().then(()=>{const a=e.getObjectByName("Strawberry");m(()=>{a.rotation.y+=.05})}),n.domElement},l={render:R};var c,f,i;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(i=(f=l.parameters)==null?void 0:f.docs)==null?void 0:i.source}}};const O=["Primary"];export{l as Primary,O as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories-76e5a1f2.js.map
