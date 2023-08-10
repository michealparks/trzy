import * as THREE from 'three'
import * as BVH from 'three-mesh-bvh'

type BvhOptions = {
  /** Use .raycastFirst to retrieve hits which is generally faster, default: false */
  firstHitOnly?: boolean
  /** Split strategy, default: SAH (slowest to construct, fastest runtime, least memory) */
  strategy?: BVH.SplitStrategy
  /** Print out warnings encountered during tree construction, default: false */
  verbose?: boolean
  /** If true then the bounding box for the geometry is set once the BVH has been constructed, default: true */
  setBoundingBox?: boolean
  /** The maximum depth to allow the tree to build to, default: 40 */
  maxDepth?: number
  /** The number of triangles to aim for in a leaf node, default: 10 */
  maxLeafTris?: number,
}

export const useBvhRaycast = (options: BvhOptions = {}) => {
  const { computeBoundsTree: computeOriginal, disposeBoundsTree: disposeOriginal } = THREE.BufferGeometry.prototype
  const { raycast: raycastPoints } = THREE.Points.prototype
  const { raycast: raycastMesh } = THREE.Mesh.prototype

  THREE.Points.prototype.raycast = BVH.acceleratedRaycast
  THREE.Mesh.prototype.raycast = BVH.acceleratedRaycast
  THREE.Raycaster.prototype.firstHitOnly = options.firstHitOnly ?? true

  THREE.BufferGeometry.prototype.computeBoundsTree = function computeBoundsTree (opts?: BVH.MeshBVHOptions) {
    return BVH.computeBoundsTree.call(this, opts ?? options)
  }
  THREE.BufferGeometry.prototype.disposeBoundsTree = BVH.disposeBoundsTree

  const dispose = () => {
    THREE.BufferGeometry.prototype.computeBoundsTree = computeOriginal
    THREE.BufferGeometry.prototype.disposeBoundsTree = disposeOriginal
    THREE.Points.prototype.raycast = raycastPoints
    THREE.Mesh.prototype.raycast = raycastMesh
    delete THREE.Raycaster.prototype.firstHitOnly
  }

  return dispose
}
