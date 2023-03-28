export const gamepadManager = () => {
  const gamepad = {
    A: 0,
    B: 0,
    X: 0,
    Y: 0,
    back: 0,
    connected: false,
    leftBumper: 0,
    leftStickButton: 0,
    leftStickX: 0,
    leftStickY: 0,
    leftTrigger: 0,
    padX: 0,
    padY: 0,
    rightBumper: 0,
    rightStickButton: 0,
    rightStickX: 0,
    rightStickY: 0,
    rightTrigger: 0,
    start: 0,
  }

  const handleGamepad = ({ axes, buttons }: Gamepad) => {
    gamepad.leftStickX = axes[0]!
    gamepad.leftStickY = axes[1]!
    gamepad.rightStickX = axes[2]!
    gamepad.rightStickY = axes[3]!
  
    gamepad.A = buttons[0]!.value
    gamepad.B = buttons[1]!.value
    gamepad.X = buttons[2]!.value
    gamepad.Y = buttons[3]!.value
  
    gamepad.leftBumper = buttons[4]!.value
    gamepad.rightBumper = buttons[5]!.value
    gamepad.leftTrigger = buttons[6]!.value
    gamepad.rightTrigger = buttons[7]!.value
  
    gamepad.back = buttons[8]!.value
    gamepad.start = buttons[9]!.value
  
    gamepad.leftStickButton = buttons[10]!.value
    gamepad.rightStickButton = buttons[11]!.value
  
    gamepad.padY = -buttons[12]!.value || buttons[13]!.value
    gamepad.padX = -buttons[14]!.value || buttons[15]!.value
  }

  const updateGamepad = () => {
    const [pad1, pad2] = window.navigator.getGamepads()
  
    if (pad1 !== null && pad1 !== undefined) {
      handleGamepad(pad1)
    }
  
    if (pad2 !== null && pad2 !== undefined) {
      handleGamepad(pad2)
    }
  }

  const handleGamepadDisconnected = () => {
    gamepad.connected = false
  }
  
  const handleGamepadConnected = () => {
    const [pad1, pad2] = navigator.getGamepads()
  
    if (
      (pad1 === null || pad1 === undefined) &&
      (pad2 === null || pad2 === undefined)
    ) {
      return
    }
  
    gamepad.connected = true

    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)
  }

  const disposeGamepad = () => {
    window.removeEventListener('gamepadconnected', handleGamepadConnected)
    window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected)
  }

  window.addEventListener('gamepadconnected', handleGamepadConnected)

  return { gamepad, updateGamepad, disposeGamepad }
}
