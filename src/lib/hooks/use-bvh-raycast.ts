import * as THREE from 'three'
import * as BVH from 'three-mesh-bvh'
import { useAdd } from './use-add'
import { useRemove } from './use-remove'

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
  maxLeafTris?: number
}

export const useBvhRaycast = (options: BvhOptions = {}) => {
  const { computeBoundsTree, disposeBoundsTree } = THREE.BufferGeometry.prototype
  const { raycast } = THREE.Mesh.prototype

  THREE.BufferGeometry.prototype.computeBoundsTree = BVH.computeBoundsTree
  THREE.BufferGeometry.prototype.disposeBoundsTree = BVH.disposeBoundsTree
  THREE.Mesh.prototype.raycast = BVH.acceleratedRaycast
  THREE.Raycaster.prototype.firstHitOnly = options.firstHitOnly ?? true

  const disposeAdd = useAdd((object) => {
    const mesh = object as THREE.Mesh
    if (mesh.isMesh) {
      mesh.geometry.computeBoundsTree(options)
    }
  })

  const disposeRemove = useRemove((object) => {
    const mesh = object as THREE.Mesh
    if (mesh.isMesh) {
      mesh.geometry.disposeBoundsTree()
    }
  })

  return () => {
    disposeAdd()
    disposeRemove()
    THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
    THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
    THREE.Mesh.prototype.raycast = raycast
    delete THREE.Raycaster.prototype.firstHitOnly
  }
}
