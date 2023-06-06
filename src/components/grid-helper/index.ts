import * as THREE from 'three'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

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
    this.material.uniforms.uColor!.value = value
  }

  get distance (): number {
    return this.material.uniforms.uDistance!.value
  }
  set distance (value: number) {
    this.material.uniforms.uDistance!.value = value
  }
}
