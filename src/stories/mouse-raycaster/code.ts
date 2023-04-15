import { MouseRaycaster } from 'trzy'

const raycaster = new MouseRaycaster({
  scene, // alternatively, pass objects: THREE.Object3D[]
  camera,
  renderer,
  recursive: true,
})

raycaster.on('move', (event) => console.log(event.intersections))
raycaster.on('click', (event) => console.log(event.intersections))

// later
raycaster.dispose()
