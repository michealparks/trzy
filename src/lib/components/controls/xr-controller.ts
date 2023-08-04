import type * as THREE from 'three'

export const xrControllerManager = (renderer: THREE.WebGLRenderer, gamepad: Record<string, number | boolean>) => {
  const xrControllers: {
    connected: boolean
    left: XRInputSource | undefined
    right: XRInputSource | undefined
  } = {
    connected: false,
    left: undefined,
    right: undefined,
  }

  /**
   * Configured currently for oculus quest 2 controllers
   */
  const handleXrGamepads = () => {
    const left = xrControllers.left?.gamepad
    const right = xrControllers.right?.gamepad

    if (left !== undefined) {
      gamepad.leftStickX = left.axes[2]!
      gamepad.leftStickY = left.axes[3]!
      gamepad.leftTrigger = left.buttons[0]!.value
      gamepad.leftBumper = left.buttons[1]!.value
      // ???
      gamepad.back = left.buttons[2]!.value
      gamepad.leftStickButton = left.buttons[3]!.value
      gamepad.X = left.buttons[4]!.value
      gamepad.Y = left.buttons[5]!.value
    }

    if (right !== undefined) {
      gamepad.rightStickX = right.axes[2]!
      gamepad.rightStickY = right.axes[3]!
      gamepad.rightTrigger = right.buttons[0]!.value
      gamepad.rightBumper = right.buttons[1]!.value
      // ???
      gamepad.start = right.buttons[2]!.value
      gamepad.rightStickButton = right.buttons[3]!.value
      gamepad.A = right.buttons[4]!.value
      gamepad.B = right.buttons[5]!.value
    }
  }

  const handleXrControllerConnected = ({ data }: { data: XRInputSource }) => {
    if (data.handedness === 'left') {
      xrControllers.left = data
    } else if (data.handedness === 'right') {
      xrControllers.right = data
    }

    if (
      xrControllers.left?.gamepad !== undefined ||
      xrControllers.right?.gamepad !== undefined
    ) {
      gamepad.connected = true
    }
  }

  const handleXrControllerDisconnected = ({ data }: { data: XRInputSource }) => {
    if (data.handedness === 'left') {
      xrControllers.left = undefined
    } else if (data.handedness === 'right') {
      xrControllers.left = undefined
    }

    const [pad1, pad2] = navigator.getGamepads()

    if (
      (pad1 === null || pad1 === undefined) &&
      (pad2 === null || pad2 === undefined)
    ) {
      gamepad.connected = false
    }
  }

  const update = () => {
    if (
      xrControllers.left?.gamepad !== undefined &&
      xrControllers.right?.gamepad !== undefined
    ) {
      handleXrGamepads()
    }
  }

  const controller1 = renderer.xr.getController(0)
  /*
   * Controller1.addEventListener('selectstart', handleXrSelectStart)
   * controller1.addEventListener('selectend', handleXrSelectEnd)
   */

  // @ts-expect-error this is not correctly typed
  controller1.addEventListener('connected', handleXrControllerConnected)
  // @ts-expect-error this is not correctly typed
  controller1.addEventListener('disconnected', handleXrControllerDisconnected)

  const controller2 = renderer.xr.getController(1)
  /*
   * Controller2.addEventListener('selectstart', handleXrSelectStart)
   * controller2.addEventListener('selectend', handleXrSelectEnd)
   */

  // @ts-expect-error this is not correctly typed
  controller2.addEventListener('connected', handleXrControllerConnected)
  // @ts-expect-error this is not correctly typed
  controller2.addEventListener('disconnected', handleXrControllerDisconnected)

  return { xrControllers, update }
}
