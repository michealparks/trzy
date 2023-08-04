
import * as THREE from 'three'
import { pointerEvents } from 'trzy'

pointerEvents({ target: canvas, camera })

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial()
)

mesh.addEventListener('pointerenter', (event) => console.log(event))
mesh.addEventListener('pointerleave', (event) => console.log(event))
mesh.addEventListener('click', (event) => console.log(event))

mesh.addEventListener('pointerenter', (event) => {
  // Call stop propagation to stop events from firing on other intersections.
  event.stopPropagation()
})
