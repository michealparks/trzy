import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'

const color = new THREE.Color()

export class AxesHelper extends Line2 {
  override type = 'AxesHelper'

  #length = 1

  constructor (length = 1, width = 0.2) {
    super(new LineGeometry(), new LineMaterial({
      alphaToCoverage: true,
      linewidth: width / 100,
      vertexColors: true,
    }))

    this.length = length
    this.setColors('red', 'green', 'blue')
  }

  set length (value: number) {
    const positions = new Float32Array(27)
    this.#length = value
    positions[3] = value
    positions[13] = value
    positions[23] = value
    this.geometry.setPositions(positions)
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
    const colors = new Float32Array(27)
    const axes = [xAxis, yAxis, zAxis]

    axes.forEach((axis, i) => {
      color.set(axis)
      for (let j = i * 9; j < (i * 9) + 9; j += 3) {
        colors[j + 0] = color.r
        colors[j + 1] = color.g
        colors[j + 2] = color.b
      }
    })

    this.geometry.setColors(colors)

    return this
  }

  dispose (): void {
    this.geometry.dispose()
    this.material.dispose()
  }
}
