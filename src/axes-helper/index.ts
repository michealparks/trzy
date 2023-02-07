import {
  Color,
  type ColorRepresentation,
} from 'three'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { Line2 } from 'three/examples/jsm/lines/Line2'

const color = new Color()

export class AxesHelper extends Line2 {
  override type = 'AxesHelper'

	constructor({ size = 1, width = 0.005 }: { size?: number, width?: number } = {}) {
		const vertices = [
			0, 0, 0,	size, 0, 0,
			0, 0, 0,	0, size, 0,
			0, 0, 0,	0, 0, size
		]

		const colors = [
			1, 0, 0,	1, 0.6, 0,
			0, 1, 0,	0.6, 1, 0,
			0, 0, 1,	0, 0.6, 1
		]

		const geometry = new LineGeometry()
    geometry.setPositions(vertices)
    geometry.setColors(colors)

    const material = new LineMaterial({
      color: 0xffffff,
      linewidth: width,
      vertexColors: true,
      dashed: false,
      alphaToCoverage: true,
    })

		super( geometry, material )

    this.computeLineDistances()
	}

	setColors( xAxisColor: ColorRepresentation, yAxisColor: ColorRepresentation, zAxisColor: ColorRepresentation ) {
    const colors: number[] = []

		color.set( xAxisColor )
    colors.push(...color.toArray(), ...color.toArray())

		color.set( yAxisColor )
    colors.push(...color.toArray(), ...color.toArray())

		color.set( zAxisColor )
    colors.push(...color.toArray(), ...color.toArray())

    this.geometry.setColors(colors)

		return this
	}

	dispose() {
		this.geometry.dispose()
    this.material.dispose()
	}
}
