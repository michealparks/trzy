const createGamepad = () => ({
  id: '',
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
})

let initialized = false

const gamepad = createGamepad()
const gamepad2 = createGamepad()

const handleGamepad = (pad: ReturnType<typeof createGamepad>, { axes, buttons }: Gamepad) => {
  pad.leftStickX = axes[0] ?? 0
  pad.leftStickY = axes[1] ?? 0
  pad.rightStickX = axes[2] ?? 0
  pad.rightStickY = axes[3] ?? 0

  pad.A = buttons[0]?.value ?? 0
  pad.B = buttons[1]?.value ?? 0
  pad.X = buttons[2]?.value ?? 0
  pad.Y = buttons[3]?.value ?? 0

  pad.leftBumper = buttons[4]?.value ?? 0
  pad.rightBumper = buttons[5]?.value ?? 0
  pad.leftTrigger = buttons[6]?.value ?? 0
  pad.rightTrigger = buttons[7]?.value ?? 0

  pad.back = buttons[8]?.value ?? 0
  pad.start = buttons[9]?.value ?? 0

  pad.leftStickButton = buttons[10]?.value ?? 0
  pad.rightStickButton = buttons[11]?.value ?? 0

  pad.padY = -buttons[12]!.value || buttons[13]!.value
  pad.padX = -buttons[14]!.value || buttons[15]!.value
}

const updateGamepad = () => {
  const [pad1, pad2] = window.navigator.getGamepads()

  if (pad1 !== null && pad1 !== undefined) {
    handleGamepad(gamepad, pad1)
  }

  if (pad2 !== null && pad2 !== undefined) {
    handleGamepad(gamepad2, pad2)
  }
}

const handleGamepadDisconnected = (event: GamepadEvent) => {
  const { id } = event.gamepad

  if (id === gamepad.id) {
    gamepad.connected = false
  } else if (id === gamepad2.id) {
    gamepad2.connected = false
  }
}

const handleGamepadConnected = () => {
  const [pad1, pad2] = window.navigator.getGamepads()

  gamepad.connected = pad1 !== null && pad1 !== undefined
  gamepad.id = pad1?.id ?? ''

  gamepad2.connected = pad2 !== null && pad2 !== undefined
  gamepad2.id = pad2?.id ?? ''
}

const disposeGamepad = () => {
  window.removeEventListener('gamepadconnected', handleGamepadConnected)
  window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected)
  initialized = false
}

export const useGamepad = (): {
  gamepad: Readonly<ReturnType<typeof createGamepad>>
  gamepad2: Readonly<ReturnType<typeof createGamepad>>
  updateGamepad(): void
  disposeGamepad(): void
} => {
  if (!initialized) {
    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)
    initialized = true
  }

  return { gamepad, gamepad2, updateGamepad, disposeGamepad }
}
