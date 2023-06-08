import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory'

let built = false

let hand0: THREE.XRHandSpace
let hand1: THREE.XRHandSpace

const buildHands = (renderer: THREE.WebGLRenderer) => {
  const handModelFactory = new XRHandModelFactory()

  hand0 = renderer.xr.getHand(0)
  hand0.name = 'XR Hand Left'
  hand0.userData.index = 0

  const model0 = handModelFactory.createHandModel(hand0, 'mesh')
  model0.name = 'XR Hand Model Left'
  hand0.add(model0)

  hand1 = renderer.xr.getHand(1)
  hand1.name = 'XR Hand Right'
  hand0.userData.index = 1

  const model1 = handModelFactory.createHandModel(hand1, 'mesh')
  model1.name = 'XR Hand Model Right'
  hand1.add(model1)

  built = true
}

export const getHands = (renderer: THREE.WebGLRenderer) => {
  if (!built) {
    buildHands(renderer)
  }

  return { hand0, hand1 }
}
