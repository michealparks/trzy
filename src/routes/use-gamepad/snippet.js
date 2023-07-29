
import { useGamepad } from 'trzy'

const { gamepad, gamepads, updateGamepads, disposeGamepads } = useGamepad()

// In your game loop
updateGamepads()

// Later
disposeGamepads()
