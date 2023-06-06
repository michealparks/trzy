import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'

const color = new THREE.Color()

export class AxesHelper extends Line2 {
  override type = 'AxesHelper'

  #length = 1

  constructor (length = 1, width = 0.2) {
    const geometry = new LineGeometry()

    geometry.setColors([
      1, 0, 0, 1, 0, 0, 1, 0, 0,
      0, 1, 0, 0, 1, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 1, 0, 0, 1,
    ])

    const material = new LineMaterial({
      alphaToCoverage: true,
      linewidth: width / 100,
      vertexColors: true,
    })

    super(geometry, material)

    this.length = length
  }

  set length (value: number) {
    this.#length = value
    this.geometry.setPositions([
      0, 0, 0, value, 0, 0, 0, 0, 0,
      0, 0, 0, 0, value, 0, 0, 0, 0,
      0, 0, 0, 0, 0, value, 0, 0, 0,
    ])
    this.computeLineDistances()
  }

  get length (): number {
    return this.#length
  }

  set width (value: number) {
    this.material.linewidth = value / 100
  }

  get width (): number {
    return this.material.linewidth * 100
  }

  setColors (xAxis: THREE.ColorRepresentation, yAxis: THREE.ColorRepresentation, zAxis: THREE.ColorRepresentation): this {
    const color1 = color.set(xAxis).toArray()
    const color2 = color.set(yAxis).toArray()
    const color3 = color.set(zAxis).toArray()

    this.geometry.setColors([
      ...color1, ...color1, ...color1,
      ...color2, ...color2, ...color2,
      ...color3, ...color3, ...color3,
    ])

    return this
  }

  dispose (): void {
    this.geometry.dispose()
    this.material.dispose()
  }
}
