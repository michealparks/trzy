import { Color, type ColorRepresentation } from 'three'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry'
import { Line2 } from 'three/examples/jsm/lines/Line2'

const color = new Color()

export class AxesHelper extends Line2 {
  override type = 'AxesHelper'

	constructor({ size = 1, width = 0.005 }: { size?: number, width?: number } = {}) {
		const geometry = new LineGeometry()

    geometry.setPositions([
			0, 0, 0,    size, 0, 0,    0, 0, 0,
			0, 0, 0,    0, size, 0,    0, 0, 0,
			0, 0, 0,    0, 0, size,    0, 0, 0,
		])

    geometry.setColors([
			1, 0, 0,    1, 0, 0,    1, 0, 0,
			0, 1, 0,    0, 1, 0,    0, 1, 0,
			0, 0, 1,    0, 0, 1,    0, 0, 1,
		])

    const material = new LineMaterial({
      linewidth: width,
      vertexColors: true,
      alphaToCoverage: true,
    })

		super(geometry, material)

    this.computeLineDistances()
	}

	setColors(xAxis: ColorRepresentation, yAxis: ColorRepresentation, zAxis: ColorRepresentation): this {
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

	dispose(): void {
		this.geometry.dispose()
    this.material.dispose()
	}
}
