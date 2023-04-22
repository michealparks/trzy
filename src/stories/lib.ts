import * as THREE from 'three'
import { three } from '../main'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shadows } from '../components/lib/shadows'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const { scene, camera, canvas, update } = three()
const loader = new GLTFLoader()

export const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false

update(() => controls.update())

export const setup = async (props: { controls: boolean }) => {
  controls.enabled = props.controls

  scene.clear()

  const light = new THREE.DirectionalLight(undefined, 4)
  light.position.set(5, 3, 5)
  scene.add(light)

  scene.add(new THREE.AmbientLight(undefined, 0.8))

  const glb = await loader.loadAsync(`${import.meta.env.BASE_URL}glb/strawberry.glb`)
  scene.add(glb.scene.getObjectByName('Bg')!)

  const group = new THREE.Group()
  group.add(glb.scene.getObjectByName('Stem')!)
  group.add(glb.scene.getObjectByName('Seeds')!)
  group.add(glb.scene.getObjectByName('Leaves')!)
  group.add(glb.scene.getObjectByName('Body')!)
  group.name = 'Strawberry'
  scene.add(group)

  shadows(scene)

  camera.position.set(8, 2, 6)
  camera.lookAt(0, 0, 0)
}
