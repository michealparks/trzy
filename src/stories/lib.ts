import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shadows } from '../main'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

export const setup = async ({
  camera,
  canvas,
  controls,
  scene,
  update,
  webGPU
}: {
  controls: boolean,
  scene: THREE.Scene,
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
  update: (cb: () => void) => void
  webGPU?: boolean
}) => {
  let orbit: OrbitControls | undefined

  if (controls) {
    orbit = new OrbitControls(camera, canvas)
    orbit.enableDamping = true
    orbit.enablePan = false
    update(() => orbit?.update())
  }

  scene.clear()

  const light = new THREE.DirectionalLight(undefined, 4)
  light.name = 'Directional'
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

  if (webGPU) {
    console.log('here')
    // shadows(scene, 4096, 0.001)
    light.shadow.mapSize.set(4096, 4096)
    light.shadow.bias = 0.0001
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 100;
    light.shadow.camera.right = 17;
    light.shadow.camera.left = - 17;
    light.shadow.camera.top	= 17;
    light.shadow.camera.bottom = -17;
  } else {
    shadows(scene)
  }

  camera.position.set(8, 2, 6)
  camera.lookAt(0, 0, 0)

  return orbit
}
