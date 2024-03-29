import * as THREE from 'three'

const vertexShader = `
varying vec3 worldPosition;

uniform float uDistance;

void main() {
  worldPosition = position.xzy * uDistance;
  worldPosition.xz += cameraPosition.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
}
`

const fragmentShader = `
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
`

export class GridHelper extends THREE.Mesh {
  override frustumCulled = false
  override material: THREE.ShaderMaterial

  constructor (cellSize = 1, largeCellSize = 10, color = 'white', distance = 8000) {
    const geometry = new THREE.PlaneGeometry()
    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        uCellSize: { value: cellSize },
        uLargeCellSize: { value: largeCellSize },
        uColor: { value: new THREE.Color(color) },
        uDistance: { value: distance },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      extensions: {
        derivatives: true,
      },
    })
    super(geometry, material)
    this.material = material
  }

  get cellSize (): number {
    return this.material.uniforms.uCellSize!.value
  }
  set cellSize (value: number) {
    this.material.uniforms.uCellSize!.value = value
  }

  get largeCellSize (): number {
    return this.material.uniforms.uLargeCellSize!.value
  }
  set largeCellSize (value: number) {
    this.material.uniforms.uLargeCellSize!.value = value
  }

  get color (): THREE.ColorRepresentation {
    return this.material.uniforms.uColor!.value
  }
  set color (value: THREE.ColorRepresentation) {
    this.material.uniforms.uColor!.value.set(value)
  }

  get distance (): number {
    return this.material.uniforms.uDistance!.value
  }
  set distance (value: number) {
    this.material.uniforms.uDistance!.value = value
  }
}
