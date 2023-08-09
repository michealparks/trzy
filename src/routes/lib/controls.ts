import { useFrame, useTrzy } from '$lib'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let ctrl: OrbitControls

export const controls = () => {
  if (ctrl) {
    return ctrl
  }

  const { camera, renderer } = useTrzy()
  ctrl = new OrbitControls(camera.current, renderer.domElement)
  ctrl.enableDamping = true
  ctrl.enablePan = false
  ctrl.enableZoom = false
  ctrl.autoRotate = true
  useFrame(() => ctrl.update(), { order: Number.NEGATIVE_INFINITY })

  return ctrl
}
