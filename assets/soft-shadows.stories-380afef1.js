import{m as s,u,s as v,d as S}from"./setup-bf23c97c.js";import{s as m}from"./shadows-fc355632.js";import{s as h}from"./strawberry-9ab81ec5.js";import{f as _}from"./floor-7cf59b96.js";var g=`#ifdef USE_SHADOWMAP
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
  for(int i = 0; i < $SAMPLES; i ++) {
    offset = (vogelDiskSample(j, $SAMPLES, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
  for (int i = 0; i < $SAMPLES; i++) {
    vogelSample = vogelDiskSample(j, $SAMPLES, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float($SIZE));
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / $SAMPLES.0;
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
}`;const R=(e,n,a)=>{var o;n.traverse(t=>{if("material"in t){const r=t.material;e.properties.remove(r),r.dispose()}}),(o=e.info.programs)==null||o.splice(0,e.info.programs.length),e.compile(n,a)},N=({focus:e=0,size:n=25,samples:a=10}={})=>{const o=s.shadowmap_pars_fragment,t=g.replaceAll("$FOCUS",e).replaceAll("$SIZE",n).replaceAll("$SAMPLES",a);return s.shadowmap_pars_fragment=s.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",t).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`),(r,d,p)=>{s.shadowmap_pars_fragment=o,R(r,d,p)}},I=`import { softShadows, resetSoftShadows } from 'trzy'

softShadows()

// Only needed if softShadows() is called after setting up the scene.
resetSoftShadows(renderer, scene, camera)
`,A={title:"Soft Shadows",parameters:{docs:{source:{code:I}}}};N();const E=()=>{const{scene:e,renderer:n}=u();return v(),h().then(a=>{e.add(a),S(()=>a.rotation.y+=.05)}),e.add(_()),m(e),n.domElement},l={render:E};var c,f,i;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(i=(f=l.parameters)==null?void 0:f.docs)==null?void 0:i.source}}};const z=["Primary"];export{l as Primary,z as __namedExportsOrder,A as default};
//# sourceMappingURL=soft-shadows.stories-380afef1.js.map
