import * as THREE from 'three'
import { useFrame, trzy } from '../core'
import { plane, shadows } from '../main'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Inspector from 'three-inspect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const loader = new GLTFLoader()

const { scene, camera, renderer } = trzy()

export const orbitControls = new OrbitControls(camera.current, renderer.domElement)
orbitControls.enableDamping = true
orbitControls.enablePan = false
useFrame(() => orbitControls.update())

export const setup = async (options: {
  controls?: boolean,
  webGPU?: boolean
} = {}) => {
  const { webGPU = false } = options

  scene.clear()
  scene.add(camera.current)

  const light = new THREE.DirectionalLight(undefined, 1)
  light.name = 'Directional'
  light.position.set(2, 2, 2)
  scene.add(light)

  scene.add(new THREE.AmbientLight(undefined, 0.5))

  const glb = await loader.loadAsync(`${import.meta.env.BASE_URL}glb/strawberry.glb`)
  const group = new THREE.Group()
  group.add(glb.scene.getObjectByName('Stem')!)
  group.add(glb.scene.getObjectByName('Seeds')!)
  group.add(glb.scene.getObjectByName('Leaves')!)
  group.add(glb.scene.getObjectByName('Body')!)
  group.name = 'Strawberry'
  scene.add(group)
  group.position.y = 0.2
  group.scale.setScalar(0.1)

  const floor = plane(undefined, 4, 4)
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  if (webGPU) {
    light.shadow.mapSize.set(4096, 4096)
    light.shadow.bias = 0.0001
    light.shadow.camera.near = 1
    light.shadow.camera.far = 100
    light.shadow.camera.right = 17
    light.shadow.camera.left = -17
    light.shadow.camera.top = 17
    light.shadow.camera.bottom = -17
  }

  shadows(scene)

  camera.current.position.set(1, 1.8, 1)
  camera.current.lookAt(0, 0, 0)

  if (localStorage.getItem('debug')) {
    const inspect = new Inspector({ scene, camera: camera.current, renderer })
  }

  return { floor }
}
