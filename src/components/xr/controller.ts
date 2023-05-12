import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'

const controllerModelFactory = new XRControllerModelFactory()

export const buildControllers = (renderer: THREE.WebGLRenderer, scene: THREE.Scene) => {
  for (let index = 0; index < 2; index += 1) {
    const controllerGrip = renderer.xr.getControllerGrip(index)
	  controllerGrip.add(controllerModelFactory.createControllerModel(controllerGrip))
		scene.add(controllerGrip)
  }
}
