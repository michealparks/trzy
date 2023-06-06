import * as THREE from 'three'

const axisToColor: Record<string, string> = { x: 'red', y: 'green', z: 'blue' }

export class AxesHelper extends THREE.Object3D {
  axes: THREE.Mesh[] = []

  constructor (length = 10, width = 0.05, axes = 'xyz') {
    super()

    const geometry = new THREE.BoxGeometry(1, 1, 1)

    for (const axis of axes) {
      const color = axisToColor[axis]
      const material = new THREE.MeshBasicMaterial({ color })
      this.axes.push(new THREE.Mesh(geometry, material))
    }

    this.axes[0]?.geometry.translate(0.5, 0, 0)
    this.axes[1]?.geometry.translate(0, 0.5, 0)
    this.axes[0]?.geometry.translate(0, 0, 0.5)

    this.length = length
    this.width = width

    this.add(...this.axes)
  }

  set length (value: number) {
    this.axes[0]?.scale.setX(value)
    this.axes[1]?.scale.setY(value)
    this.axes[2]?.scale.setZ(value)
  }

  get length () {
    return this.axes[0]?.scale.x ?? 0
  }

  set width (value: number) {
    this.axes[0]?.scale.setY(value)
    this.axes[0]?.scale.setZ(value)
    this.axes[1]?.scale.setX(value)
    this.axes[1]?.scale.setZ(value)
    this.axes[2]?.scale.setX(value)
    this.axes[2]?.scale.setY(value)
  }

  get width () {
    return this.axes[0]?.scale.y ?? 0
  }

  setColors (x: THREE.ColorRepresentation, y: THREE.ColorRepresentation, z: THREE.ColorRepresentation): this {
    const xmat = this.axes[0]?.material as THREE.MeshBasicMaterial | undefined
    const ymat = this.axes[1]?.material as THREE.MeshBasicMaterial | undefined
    const zmat = this.axes[2]?.material as THREE.MeshBasicMaterial | undefined

    xmat?.color.set(x)
    ymat?.color.set(y)
    zmat?.color.set(z)

    return this
  }
}
