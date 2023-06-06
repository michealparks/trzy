import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'

let built = false

const grips: THREE.XRGripSpace[] = []
const controllers: THREE.XRTargetRaySpace[] = []

export const getControllers = (renderer: THREE.WebGLRenderer) => {
  if (built) {
    return { controllers, grips }
  }

  const controllerModelFactory = new XRControllerModelFactory()

  for (let index = 0; index < 2; index += 1) {
    const controller = renderer.xr.getController(index)
    controller.name = `XR Controller ${index === 0 ? 'Left' : 'Right'}`
    controller.userData.index = index
    controllers.push(controller)

    const grip = renderer.xr.getControllerGrip(index)
    grip.add(controllerModelFactory.createControllerModel(grip))
    grip.name = `XR Controller Grip ${index === 0 ? 'Left' : 'Right'}`
    grip.userData.index = index
    grips.push(grip)
  }

  built = true

  return { controllers, grips }
}
