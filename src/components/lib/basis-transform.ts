import * as THREE from 'three'

const basesRegex = /^([+-][xyz])([+-][xyz])([+-][xyz])$/i
const nameToIndex = { x: 0, y: 1, z: 2 } as const
const orderedVectors = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] as const

const stringToAxes = (axes: string) => {
	return axes.toLowerCase().match(basesRegex)?.splice(1, 3).map((str) => {
    const negative = str[0] === '-'
    const name = str[1] as 'x' | 'y' | 'z'
    return { negative, name }
  })!
}

export const getBasisTransform = (from: string, to: string, targetMatrix: THREE.Matrix4): void => {
	const fromAxes = stringToAxes(from)
	const toAxes = stringToAxes(to)

	for (let i: 0 | 1 | 2 = 0; i < 3; i += 1) {
		const fromAxis = fromAxes[i]!
		const toAxis = toAxes[i]!

		const fromIndex = nameToIndex[fromAxis.name]
		const equalNegative = fromAxis.negative === toAxis.negative

		const vector = orderedVectors[fromIndex]
		vector.set(0, 0, 0)
		vector[toAxis.name] = equalNegative ? 1 : - 1
	}

	targetMatrix.makeBasis(orderedVectors[0], orderedVectors[1], orderedVectors[2])
}

export const axesToAsciiImage = (str: string): string => {
	const axes = stringToAxes( str )
	const axis0 = axes[0]!
	const r = axis0.negative ? ' ' : '-'
	const R = axis0.negative ? ' ' : axis0.name.toUpperCase()
	const l = axis0.negative ? '-' : ' '
	const L = axis0.negative ? axis0.name.toUpperCase() : ' '

	const axis1 = axes[1]!
	const u = axis1.negative ? ' ' : '|'
	const U = axis1.negative ? ' ' : axis1.name.toUpperCase()
	const d = axis1.negative ? '|' : ' '
	const D = axis1.negative ? axis1.name.toUpperCase() : ' '

	const axis2 = axes[2]!
	const f = axis2.negative ? ' ' : '/'
	const F = axis2.negative ? ' ' : axis2.name.toUpperCase()
	const b = axis2.negative ? '/' : ' '
	const B = axis2.negative ? axis2.name.toUpperCase() : ' '

	const template =
    '      U    \n' +
    '      u   B\n' +
    '      u b  \n' +
    'Llllll.rrrrr R\n' +
    '     fd    \n' +
    '   F  d    \n' +
    '      D    '

	return template
	// right
		.replace( /R/g, R )
		.replace( /r/g, r )

	// left
		.replace( /L/g, L )
		.replace( /l/g, l )

	// up
		.replace( /U/g, U )
		.replace( /u/g, u )

	// down
		.replace( /D/g, D )
		.replace( /d/g, d )

	// forward
		.replace( /F/g, F )
		.replace( /f/g, f )

	// back
		.replace( /B/g, B )
		.replace( /b/g, b )
}
