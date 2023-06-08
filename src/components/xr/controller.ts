import { type XRControllerModel, XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'

let built = false

let model0: XRControllerModel
let model1: XRControllerModel

let grip0: THREE.XRGripSpace
let grip1: THREE.XRGripSpace

let controller0: THREE.XRTargetRaySpace
let controller1: THREE.XRTargetRaySpace

const buildControllers = (renderer: THREE.WebGLRenderer) => {
  const controllerModelFactory = new XRControllerModelFactory()

  controller0 = renderer.xr.getController(0)
  controller0.name = 'XR Controller Left'
  controller0.userData.index = 0

  controller1 = renderer.xr.getController(1)
  controller1.name = 'XR Controller Right'
  controller1.userData.index = 1

  grip0 = renderer.xr.getControllerGrip(0)
  grip0.name = 'XR Controller Grip Left'
  grip0.userData.index = 0

  model0 = controllerModelFactory.createControllerModel(grip0)
  grip0.add(model0)

  grip1 = renderer.xr.getControllerGrip(1)
  grip1.name = 'XR Controller Grip Right'
  grip1.userData.index = 1

  model1 = controllerModelFactory.createControllerModel(grip1)
  grip1.add(model1)

  built = true
}

export const getControllers = (renderer: THREE.WebGLRenderer) => {
  if (!built) {
    buildControllers(renderer)
  }

  return { grip0, grip1, controller0, controller1 }
}

export const getControllerModels = (renderer: THREE.WebGLRenderer) => {
  if (!built) {
    buildControllers(renderer)
  }

  return { model0, model1 }
}
