import * as THREE from 'three'
import { plane, shadows, three } from '../main'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Inspector from 'three-inspect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const loader = new GLTFLoader()

let orbitControls: OrbitControls | undefined

const { canvas, camera, update, scene, renderer } = three({
  parameters: { antialias: true },
})

update(() => orbitControls?.update())

export const setup = async (options: {
  controls?: boolean,
  webGPU?: boolean
} = {}) => {
  const { controls = true, webGPU = false } = options

  let orbit: OrbitControls | undefined

  if (controls) {
    if (orbitControls) {
      orbitControls.enabled = false
      orbitControls.dispose()
    }

    orbitControls = new OrbitControls(camera.current, canvas)
    orbitControls.enableDamping = true
    orbitControls.enablePan = false
  }

  scene.clear()
  scene.add(camera.current)

  const light = new THREE.DirectionalLight(undefined, 4)
  light.name = 'Directional'
  light.position.set(2, 2, 2)
  scene.add(light)

  scene.add(new THREE.AmbientLight(undefined, 0.8))

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
  } else {
    shadows(scene)
  }

  camera.current.position.set(1, 1.8, 1)
  camera.current.lookAt(0, 0, 0)

  if (localStorage.getItem('debug')) {
    new Inspector({ scene, camera: camera.current as THREE.PerspectiveCamera, renderer })
  }

  return { controls: orbit, floor }
}
