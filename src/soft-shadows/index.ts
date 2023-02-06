// From: https://github.com/mrdoob/three.js/blob/dev/examples/webgl_shadowmap_pcss.html

import * as THREE from 'three'

const pcss = (
  frustum: number,
  size: number,
  near: number,
  samples: number,
  rings: number
) => `#define LIGHT_WORLD_SIZE ${size}
#define LIGHT_FRUSTUM_WIDTH ${frustum}
#define LIGHT_SIZE_UV (LIGHT_WORLD_SIZE / LIGHT_FRUSTUM_WIDTH)
#define NEAR_PLANE ${near}
#define NUM_SAMPLES ${samples}
#define NUM_RINGS ${rings}
#define BLOCKER_SEARCH_NUM_SAMPLES NUM_SAMPLES
vec2 poissonDisk[NUM_SAMPLES];
void initPoissonSamples( const in vec2 randomSeed ) {
  float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
  float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );
  // jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
  float angle = rand( randomSeed ) * PI2;
  float radius = INV_NUM_SAMPLES;
  float radiusStep = radius;
  #pragma unroll_loop_start
  for( int i = 0; i < ${samples}; i ++ ) {
    poissonDisk[i] = vec2( cos( angle ), sin( angle ) ) * pow( radius, 0.75 );
    radius += radiusStep;
    angle += ANGLE_STEP;
  }
  #pragma unroll_loop_end
}
float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
}
float findBlocker( sampler2D shadowMap, const in vec2 uv, const in float zReceiver ) {
  // This uses similar triangles to compute what
  // area of the shadow map we should search
  float searchRadius = LIGHT_SIZE_UV * ( zReceiver - NEAR_PLANE ) / zReceiver;
  float blockerDepthSum = 0.0;
  float shadowMapDepth = 0.0;
  int numBlockers = 0;
  #pragma unroll_loop_start
  for( int i = 0; i < ${samples}; i++ ) {
    shadowMapDepth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * searchRadius));
    if ( shadowMapDepth < zReceiver ) {
      blockerDepthSum += shadowMapDepth;
      numBlockers ++;
    }
  }
  #pragma unroll_loop_end
  if( numBlockers == 0 ) return -1.0;
  return blockerDepthSum / float( numBlockers );
}
float PCF_Filter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius ) {
  float sum = 0.0;
  float depth;
  #pragma unroll_loop_start
  for( int i = 0; i < ${samples}; i ++ ) {
    depth = unpackRGBAToDepth( texture2D( shadowMap, uv + poissonDisk[ i ] * filterRadius ) );
    if( zReceiver <= depth ) sum += 1.0;
  }
  #pragma unroll_loop_end
  #pragma unroll_loop_start
  for( int i = 0; i < ${samples}; i ++ ) {
    depth = unpackRGBAToDepth( texture2D( shadowMap, uv + -poissonDisk[ i ].yx * filterRadius ) );
    if( zReceiver <= depth ) sum += 1.0;
  }
  #pragma unroll_loop_end
  return sum / ( 2.0 * float( ${samples} ) );
}
float PCSS ( sampler2D shadowMap, vec4 coords ) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  initPoissonSamples( uv );
  // STEP 1: blocker search
  float avgBlockerDepth = findBlocker( shadowMap, uv, zReceiver );
  //There are no occluders so early out (this saves filtering)
  if( avgBlockerDepth == -1.0 ) return 1.0;
  // STEP 2: penumbra size
  float penumbraRatio = penumbraSize( zReceiver, avgBlockerDepth );
  float filterRadius = penumbraRatio * LIGHT_SIZE_UV * NEAR_PLANE / zReceiver;
  // STEP 3: filtering
  //return avgBlockerDepth;
  return PCF_Filter( shadowMap, uv, zReceiver, filterRadius );
}`

const reset = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  scene.traverse((object) => {
    if (
      object instanceof THREE.Mesh &&
      object.material instanceof THREE.Material
    ) {
      renderer.properties.remove(object.material)
      object.material.dispose()
    }
  })

  if (renderer.info.programs !== null) {
    renderer.info.programs.length = 0
  }

  renderer.compile(scene, camera)
}

export const softShadows = ({
  renderer,
  scene,
  camera,
  frustum = 3.75,
  size = 0.005,
  near = 9.5,
  samples = 10,
  rings = 11,
}: {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  frustum?: number
  size?: number
  near?: number
  samples?: number
  rings?: number
}) => {
  const original = THREE.ShaderChunk.shadowmap_pars_fragment

  THREE.ShaderChunk.shadowmap_pars_fragment = THREE.ShaderChunk.shadowmap_pars_fragment
    .replace(
      '#ifdef USE_SHADOWMAP',
      '#ifdef USE_SHADOWMAP\n' + pcss(frustum, size, near, samples, rings)
    )
    .replace(
      '#if defined( SHADOWMAP_TYPE_PCF )',
      '\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )'
    )

  reset(renderer, scene, camera)

  return () => {
    THREE.ShaderChunk.shadowmap_pars_fragment = original
    reset(renderer, scene, camera)
  }
}
