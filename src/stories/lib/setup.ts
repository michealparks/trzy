import { useFrame, trzy } from '../../core'
import { ambientLight, directionalLight } from '../../main'
import Inspector from 'three-inspect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const { scene, camera, renderer } = trzy()

export const orbitControls = new OrbitControls(camera.current, renderer.domElement)
orbitControls.enableDamping = true
orbitControls.enablePan = false
useFrame(() => orbitControls.update())

const dir = directionalLight()
dir.position.set(0, 1, 1)

const ambient = ambientLight()

export const setup = () => {
  scene.clear()
  scene.add(camera.current)
  scene.add(dir)
  scene.add(ambient)

  camera.current.position.set(1, 1.8, 1)
  camera.current.lookAt(0, 0, 0)

  if (localStorage.getItem('debug')) {
    // eslint-disable-next-line no-new
    new Inspector({ scene, camera: camera.current, renderer })
  }
}
