varying vec3 worldPosition;

uniform float uDistance;

void main() {
  worldPosition = position.xzy * uDistance;
  worldPosition.xz += cameraPosition.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
}
