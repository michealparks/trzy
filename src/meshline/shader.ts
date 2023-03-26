import * as THREE from 'three'

export const meshlineVert = `
#include <common>
${THREE.ShaderChunk.logdepthbuf_pars_vertex}
${THREE.ShaderChunk.fog_pars_vertex}
attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;
attribute float counters;

uniform vec2 resolution;
uniform float lineWidth;
uniform vec3 color;
uniform float opacity;
uniform float sizeAttenuation;

varying vec2 vUV;
varying vec4 vColor;
varying float vCounters;

vec2 fix(vec4 i, float aspect) {
  vec2 res = i.xy / i.w;
  res.x *= aspect;
  vCounters = counters;
  return res;
}

void main() {
  float aspect = resolution.x / resolution.y;
  vColor = vec4(color, opacity);
  vUV = uv;

  mat4 m = projectionMatrix * modelViewMatrix;
  vec4 finalPosition = m * vec4(position, 1.0);
  vec4 prevPos = m * vec4(previous, 1.0);
  vec4 nextPos = m * vec4(next, 1.0);

  vec2 currentP = fix(finalPosition, aspect);
  vec2 prevP = fix(prevPos, aspect);
  vec2 nextP = fix(nextPos, aspect);

  float w = lineWidth * width;

  vec2 dir;
  if (nextP == currentP) {
    dir = normalize(currentP - prevP);
  } else if (prevP == currentP) {
    dir = normalize(nextP - currentP);
  } else {
    vec2 dir1 = normalize(currentP - prevP);
    vec2 dir2 = normalize(nextP - currentP);
    dir = normalize(dir1 + dir2);
  }

  vec4 normal = vec4(-dir.y, dir.x, 0.0, 1.0);
  normal.xy *= 0.5 * w;
  normal *= projectionMatrix;

  if (sizeAttenuation == 0.0) {
    normal.xy *= finalPosition.w;
    normal.xy /= ( vec4( resolution, 0.0, 1. ) * projectionMatrix ).xy;
  }

  finalPosition.xy += normal.xy * side;
  gl_Position = finalPosition;

  ${THREE.ShaderChunk.logdepthbuf_vertex}
  ${THREE.ShaderChunk.fog_vertex ? 'vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);' : ''}
  ${THREE.ShaderChunk.fog_vertex}
}`

export const meshlineFrag = `
${THREE.ShaderChunk.fog_pars_fragment}
${THREE.ShaderChunk.logdepthbuf_pars_fragment}

uniform sampler2D map;
uniform sampler2D alphaMap;
uniform float useMap;
uniform float useAlphaMap;
uniform float useDash;
uniform float dashArray;
uniform float dashOffset;
uniform float dashRatio;
uniform float visibility;
uniform float alphaTest;
uniform vec2 repeat;

varying vec2 vUV;
varying vec4 vColor;
varying float vCounters;

void main() {
  ${THREE.ShaderChunk.logdepthbuf_fragment}
  vec4 color = vColor;

  if (useMap == 1.0) {
    color *= texture2D(map, vUV * repeat);
  }

  if (useAlphaMap == 1.0) {
    color.a *= texture2D( alphaMap, vUV * repeat ).a;
  }

  if (color.a < alphaTest) {
    discard;
  }

  if (useDash == 1.0) {
    color.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
  }

  gl_FragColor = color;
  gl_FragColor.a *= step(vCounters, visibility);

  ${THREE.ShaderChunk.fog_fragment}
}`
