import * as THREE from 'three'
import { MouseRaycaster, useFrame, useTrzy } from '$lib'
import { setup } from '../lib/setup'
import { strawberry } from '../lib/strawberry'

setup()

const { scene, camera, renderer } = useTrzy()
const scale = new THREE.Vector3(1, 1, 1)

const raycaster = new MouseRaycaster({ camera: camera.current, target: renderer.domElement })
raycaster.recursive = true
raycaster.camera = camera.current

let hovered = false
const clicked = false
let lerpSpeed = 0.1

// eslint-disable-next-line unicorn/prefer-top-level-await
strawberry().then((group) => {
  scene.add(group)
  group.traverse((child) => (child as THREE.Mesh).geometry?.computeBoundsTree?.())
  raycaster.objects = [group]

  useFrame(() => group.scale.lerp(scale, lerpSpeed))
})

raycaster.addEventListener('move', (event) => {
  if (event.intersections.length > 0) {
    lerpSpeed = 0.1
    scale.setScalar(0.12)
  } else if (!clicked) {
    lerpSpeed = 0.1
    scale.setScalar(0.1)
  }

  hovered = event.intersections.length > 0
})

raycaster.addEventListener('click', (event) => {
  if (event.intersections.length === 0) {
    return
  }

  lerpSpeed = 0.2
  scale.setScalar(scale.x === 0.17 ? (hovered ? 0.12 : 0.1) : 0.17)
})
