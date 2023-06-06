import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'

let built = false

const grips: THREE.XRGripSpace[] = []
const controllers: THREE.XRTargetRaySpace[] = []

export const getControllers = (renderer: THREE.WebGLRenderer) => {
  if (built) {
    return { grips, controllers }
  }

  const controllerModelFactory = new XRControllerModelFactory()

  for (let i = 0; i < 2; i += 1) {
    const controller = renderer.xr.getController(i)
    controller.name = `XR Controller ${i === 0 ? 'Left' : 'Right'}`
    controller.userData.index = i
    controllers.push(controller)

    const grip = renderer.xr.getControllerGrip(i)
    grip.add(controllerModelFactory.createControllerModel(grip))
    grip.name = `XR Controller Grip ${i === 0 ? 'Left' : 'Right'}`
    grip.userData.index = i
    grips.push(grip)
  }

  built = true

  return { grips, controllers }
}
