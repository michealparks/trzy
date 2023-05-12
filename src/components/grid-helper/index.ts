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
      transparent: true,
      vertexShader,
      fragmentShader,
      extensions: {
        derivatives: true,
      }
    })
    super(geometry, material)
    this.material = material
  }

  get cellSize() {
    return this.material.uniforms.cellSize!.value
  }
  set cellSize(value: number) {
    this.material.uniforms.cellSize!.value = value
  }

  get largeCellSize() {
    return this.material.uniforms.cellSize!.value
  }
  set largeCellSize(value: number) {
    this.material.uniforms.largeCellSize!.value = value
  }
}
