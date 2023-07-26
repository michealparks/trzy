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

export const setup = async (opts: {
  floor?: boolean
  strawberry?: boolean
} = {}) => {
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

  if (opts.strawberry !== false) {
    scene.add(group)
    group.position.y = 0.2
    group.scale.setScalar(0.1)
  }

  const floor = plane(new THREE.MeshStandardMaterial(), 4, 4)
  floor.rotation.x = -Math.PI / 2

  if (opts.floor !== false) {
    scene.add(floor)
  }

  shadows(scene)

  camera.current.position.set(1, 1.8, 1)
  camera.current.lookAt(0, 0, 0)

  if (localStorage.getItem('debug')) {
    // eslint-disable-next-line no-new
    new Inspector({ scene, camera: camera.current, renderer })
  }

  return { floor }
}
