import { ambientLight, directionalLight, useTrzy } from '$lib'
import Inspector from 'three-inspect'
import { controls } from './controls'

const dir = directionalLight()
dir.intensity = 2
dir.position.set(0, 1, 1)

const ambient = ambientLight()
ambient.intensity = 1.5

export const setup = () => {
  const { scene, camera, renderer } = useTrzy()

  const ctrl = controls()

  scene.clear()
  scene.add(camera.current, dir, ambient)

  camera.current.position.set(1, 1.8, 1)
  camera.current.lookAt(0, 0, 0)

  if (localStorage.getItem('debug')) {
    // eslint-disable-next-line no-new
    new Inspector({ scene, camera: camera.current, renderer })
  }

  return ctrl
}
