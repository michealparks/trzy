import * as THREE from 'three'
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh'

export const bvhRaycast = () => {
  THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
  THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
  THREE.Mesh.prototype.raycast = acceleratedRaycast

  THREE.Raycaster.prototype.firstHitOnly = true
}