
import * as THREE from 'three'
import { pointerEvents, useBvhRaycast } from 'trzy'

// Optionally install three-mesh-bvh
useBvhRaycast({ firstHitOnly: true })

pointerEvents({ target: canvas, camera })

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial()
)

// If using three-mesh-bvh
mesh.geometry.computeBoundsTree()

mesh.addEventListener('pointerenter', (event) => console.log(event))
mesh.addEventListener('pointerleave', (event) => console.log(event))
mesh.addEventListener('click', (event) => console.log(event))

mesh.addEventListener('pointerenter', (event) => {
  // Call stop propagation to stop events from firing on other intersections.
  event.stopPropagation()
})
