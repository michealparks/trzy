import * as THREE from 'three'
import { three } from '../main'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shadows } from '../components/lib/shadows'

const { scene, camera, canvas, update } = three()

export const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false

update(() => controls.update())

export const setup = (props: { controls: boolean }) => {
  controls.enabled = props.controls

  scene.clear()

  const light = new THREE.DirectionalLight(undefined, 1.0)
  light.position.set(-5, 2, 5)
  scene.add(light)

  scene.add(new THREE.AmbientLight(undefined, 0.4))

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial(),
  )

  const plane = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.1, 5),
    new THREE.MeshStandardMaterial(),
  ).translateY(-0.5)

  scene.add(cube, plane)
  shadows(scene)

  camera.position.set(4, 4, 4)
  camera.lookAt(0, 0, 0)
}
