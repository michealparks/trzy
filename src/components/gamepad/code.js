import { useGamepad } from 'trzy'

const { gamepad1, gamepad2, updateGamepads, disposeGamepads } = useGamepad()

// In your game loop
updateGamepads()

// later
disposeGamepads()
