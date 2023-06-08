import * as THREE from 'three'

const memcpy = (
  source: any,
  sourceOffset: any,
  destination: any,
  destinationOffset: any,
  length: any
) => {
  source = source.subarray || source.slice ? source : source.buffer
  destination = destination.subarray || destination.slice ? destination : destination.buffer

  source = sourceOffset
    ? (source.subarray
      ? source.subarray(sourceOffset, length && sourceOffset + length)
      : source.slice(sourceOffset, length && sourceOffset + length))
    : source

  if (destination.set) {
    destination.set(source, destinationOffset)
  } else {
    for (const [index, element] of source.entries()) {
      destination[index + destinationOffset] = element
    }
  }

  return destination
}

export class MeshLineGeometry extends THREE.BufferGeometry {
  isMeshLine = true
  override type = 'MeshLine'

  positions: number[] = []
  previous: number[] = []
  next: number[] = []
  side: number[] = []
  width: number[] = []
  indices_array: number[] = []
  uvs: number[] = []
  counters: number[] = []
  attenuation: 'none' | 'squared' = 'none'

  _attributes: any

  widthCallback: ((n: number) => number) | undefined

  // Used to raycast
  matrixWorld = new THREE.Matrix4()

  constructor (parameters: {
    points?: Float32Array
  } = {}) {
    super()

    if (parameters.points) {
      this.setPoints(parameters.points)
    }
  }

  setPoints (value: Float32Array): void {
    /*
     * As the points are mutated we store them
     * for later retreival when necessary (declaritive architectures)
     */
    this.positions.splice(0, this.positions.length)
    this.counters.splice(0, this.counters.length)

    for (let index = 0, l = value.length; index < l; index += 3) {
      const count = index / value.length
      this.positions.push(
        value[index]!,
        value[index + 1]!,
        value[index + 2]!,
        value[index]!,
        value[index + 1]!,
        value[index + 2]!
      )
      this.counters.push(count, count)
    }

    this.process()
  }

  setMatrixWorld (matrixWorld: THREE.Matrix4) {
    this.matrixWorld = matrixWorld
  }

  compareV3 (a: number, b: number) {
    const aa = a * 6
    const ab = b * 6

    return (
      this.positions[aa] === this.positions[ab] &&
      this.positions[aa + 1] === this.positions[ab + 1] &&
      this.positions[aa + 2] === this.positions[ab + 2]
    )
  }

  copyV3 (a: number) {
    const index = a * 6
    return [this.positions[index], this.positions[index + 1], this.positions[index + 2]]
  }

  process () {
    const l = this.positions.length / 6

    this.previous.splice(0, this.previous.length)
    this.next.splice(0, this.next.length)
    this.side.splice(0, this.side.length)
    this.width.splice(0, this.width.length)
    this.indices_array.splice(0, this.indices_array.length)
    this.uvs.splice(0, this.uvs.length)

    let w = 0
    let v

    // Initial previous points
    v = this.compareV3(0, l - 1) ? this.copyV3(l - 2) : this.copyV3(0)

    this.previous.push(v[0]!, v[1]!, v[2]!, v[0]!, v[1]!, v[2]!)

    for (let index = 0; index < l; index += 1) {
      // Sides
      this.side.push(1, -1)

      // Widths
      if (this.widthCallback !== undefined) {
        w = this.widthCallback(index / (l - 1))
      } else if (this.attenuation === 'squared') {
        w = (index / (l - 1)) ** 2
      } else {
        w = 1
      }

      this.width.push(w, w)

      // Uvs
      this.uvs.push(index / (l - 1), 0, index / (l - 1), 1)

      if (index < l - 1) {
        // Points previous to positions
        v = this.copyV3(index)
        this.previous.push(v[0]!, v[1]!, v[2]!, v[0]!, v[1]!, v[2]!)

        // Indices
        const n = index * 2
        this.indices_array.push(n, n + 1, n + 2, n + 2, n + 1, n + 3)
      }
      if (index > 0) {
        // Points after positions
        v = this.copyV3(index)
        this.next.push(v[0]!, v[1]!, v[2]!, v[0]!, v[1]!, v[2]!)
      }
    }

    // Last next point
    v = this.compareV3(l - 1, 0) ? this.copyV3(1) : this.copyV3(l - 1)
    this.next.push(v[0]!, v[1]!, v[2]!, v[0]!, v[1]!, v[2]!)

    /*
     * Redefining the attribute seems to prevent range errors
     * if the user sets a differing number of vertices
     */
    if (!this._attributes || this._attributes.position.count !== this.positions.length) {
      this._attributes = {
        counters: new THREE.BufferAttribute(new Float32Array(this.counters), 1),
        index: new THREE.BufferAttribute(new Uint16Array(this.indices_array), 1),
        next: new THREE.BufferAttribute(new Float32Array(this.next), 3),
        position: new THREE.BufferAttribute(new Float32Array(this.positions), 3),
        previous: new THREE.BufferAttribute(new Float32Array(this.previous), 3),
        side: new THREE.BufferAttribute(new Float32Array(this.side), 1),
        uv: new THREE.BufferAttribute(new Float32Array(this.uvs), 2),
        width: new THREE.BufferAttribute(new Float32Array(this.width), 1),
      }
    } else {
      this._attributes.position.copyArray(this.positions)
      this._attributes.position.needsUpdate = true
      this._attributes.previous.copyArray(this.previous)
      this._attributes.previous.needsUpdate = true
      this._attributes.next.copyArray(this.next)
      this._attributes.next.needsUpdate = true
      this._attributes.side.copyArray(this.side)
      this._attributes.side.needsUpdate = true
      this._attributes.width.copyArray(this.width)
      this._attributes.width.needsUpdate = true
      this._attributes.uv.copyArray(this.uvs)
      this._attributes.uv.needsUpdate = true
      this._attributes.index.copyArray(this.indices_array)
      this._attributes.index.needsUpdate = true
    }

    this.setAttribute('position', this._attributes.position)
    this.setAttribute('previous', this._attributes.previous)
    this.setAttribute('next', this._attributes.next)
    this.setAttribute('side', this._attributes.side)
    this.setAttribute('width', this._attributes.width)
    this.setAttribute('uv', this._attributes.uv)
    this.setAttribute('counters', this._attributes.counters)

    this.setIndex(this._attributes.index)

    this.computeBoundingSphere()
    this.computeBoundingBox()
  }

  /**
   * Fast method to advance the line by one position.  The oldest position is removed.
   * @param position
   */
  advance (position: THREE.Vector3) {
    const positions = (this.attributes.position as THREE.BufferAttribute).array as number[]
    const previous = (this.attributes.previous as THREE.BufferAttribute).array
    const next = (this.attributes.next as THREE.BufferAttribute).array as number[]
    const l = positions.length

    // PREVIOUS
    memcpy(positions, 0, previous, 0, l)

    // POSITIONS
    memcpy(positions, 6, positions, 0, l - 6)

    positions[l - 6] = position.x
    positions[l - 5] = position.y
    positions[l - 4] = position.z
    positions[l - 3] = position.x
    positions[l - 2] = position.y
    positions[l - 1] = position.z

    // NEXT
    memcpy(positions, 6, next, 0, l - 6)

    next[l - 6] = position.x
    next[l - 5] = position.y
    next[l - 4] = position.z
    next[l - 3] = position.x
    next[l - 2] = position.y
    next[l - 1] = position.z

    this.attributes.position!.needsUpdate = true
    this.attributes.previous!.needsUpdate = true
    this.attributes.next!.needsUpdate = true
  }
}
