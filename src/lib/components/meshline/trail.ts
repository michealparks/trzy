
import * as THREE from 'three'
import { MeshLineGeometry } from './geometry'
import { MeshLineMaterial } from './material'
import type { TrailProps } from './types'

const shiftLeft = (collection: Float32Array, steps = 1): Float32Array => {
  collection.set(collection.subarray(steps))
  collection.fill(Number.NEGATIVE_INFINITY, -steps)
  return collection
}

export class Trail extends THREE.Mesh<MeshLineGeometry, MeshLineMaterial> {
  #worldPosition = new THREE.Vector3()
  prevPosition = new THREE.Vector3()
  frameCount = 0
  decay = 1
  length = 20
  width = 0.5
  stride = 0
  interval = 1
  local = false

  points: Float32Array
  target: THREE.Object3D

  constructor (props: TrailProps = {}) {
    const { target = new THREE.Object3D() } = props
    const geometry = new MeshLineGeometry()
    const material = new MeshLineMaterial({
      color: props.color ?? 'hotpink',
      lineWidth: 0.1,
      resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
      sizeAttenuation: 1,
    })

    super(geometry, material)

    material.lineWidth = 0.1 * this.width

    this.target = target
    this.points = Float32Array.from({
      length: this.length * 10 * 3,
    }, (_, index) => target.position.getComponent(index % 3))
  }

  get attenuation () {
    return this.geometry.attenuation
  }

  set attenuation (value: 'none' | 'squared') {
    this.geometry.attenuation = value
  }

  update () {
    if (this.frameCount === 0) {
      let nextPosition: THREE.Vector3

      if (this.local) {
        nextPosition = this.target.position
      } else {
        this.target.getWorldPosition(this.#worldPosition)
        nextPosition = this.#worldPosition
      }

      for (let index = 0; index < this.decay; index += 1) {
        if (nextPosition.distanceTo(this.prevPosition) < this.stride) {
          continue
        }

        shiftLeft(this.points, 3)
        this.points.set(nextPosition.toArray(), this.points.length - 3)
      }
      this.prevPosition.copy(nextPosition)

      this.geometry.setPoints(this.points)
    }

    this.frameCount += 1
    this.frameCount %= this.interval
  }

  setWidthCallback (callback: (n: number) => number) {
    this.geometry.widthCallback = callback
  }
}
