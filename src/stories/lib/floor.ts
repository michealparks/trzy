import * as THREE from 'three'
import { plane } from '../../main'

export const floor = () => {
  const mesh = plane(new THREE.MeshStandardMaterial(), 4, 4)
  mesh.rotation.x = -Math.PI / 2
  return mesh
}
