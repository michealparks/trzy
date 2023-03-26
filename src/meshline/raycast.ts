import * as THREE from 'three'

/* eslint-disable func-style, no-invalid-this, no-continue */
export function raycast (this: THREE.Mesh, raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) {
  const inverseMatrix = new THREE.Matrix4()
  const ray = new THREE.Ray()
  const sphere = new THREE.Sphere()
  const interRay = new THREE.Vector3()
  const { geometry } = this
  // Checking boundingSphere distance to ray

  if (!geometry.boundingSphere) {
    geometry.computeBoundingSphere()
  }

  sphere.copy(geometry.boundingSphere!)
  sphere.applyMatrix4(this.matrixWorld)

  if (raycaster.ray.intersectSphere(sphere, interRay) === null) {
    return
  }

  inverseMatrix.copy(this.matrixWorld).invert()
  ray.copy(raycaster.ray).applyMatrix4(inverseMatrix)

  const vStart = new THREE.Vector3()
  const vEnd = new THREE.Vector3()
  const interSegment = new THREE.Vector3()
  const step = this instanceof THREE.LineSegments ? 2 : 1
  const index = geometry.index
  const attributes = geometry.attributes

  if (index !== null) {
    const indices = index.array
    const positions = (attributes.position as THREE.BufferAttribute).array
    const widths = (attributes.width as THREE.BufferAttribute).array

    for (let i = 0, l = indices.length - 1; i < l; i += step) {
      const a = indices[i]!
      const b = indices[i + 1]!

      vStart.fromArray(positions, a * 3)
      vEnd.fromArray(positions, b * 3)
      const lineWidth = (this.material as unknown as { lineWidth: number }).lineWidth
      const width = widths[Math.floor(i / 3)] === undefined ? 1 : widths[Math.floor(i / 3)]!
      const precision = (raycaster.params.Line!.threshold + (lineWidth * width)) / 2
      const precisionSq = precision ** 2

      const distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment)

      if (distSq > precisionSq) {
        continue
      }

      // Move back to world space for distance calculation
      interRay.applyMatrix4(this.matrixWorld)

      const distance = raycaster.ray.origin.distanceTo(interRay)

      if (distance < raycaster.near || distance > raycaster.far) {
        continue
      }

      intersects.push({
        distance,
        face: null,
        faceIndex: undefined,
        index: i,
        object: this,
        /*
         * What do we want? intersection point on the ray or on the segment??
         * point: raycaster.ray.at( distance ),
         */
        point: interSegment.clone().applyMatrix4(this.matrixWorld),
      })
      // Make event only fire once
      i = l
    }
  }
}
