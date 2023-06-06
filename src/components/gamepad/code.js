import { useGamepad, raf } from 'trzy'

const { gamepad1, gamepad2, updateGamepads, disposeGamepads } = useGamepad()

raf(() => {
  updateGamepads()
})

// later
disposeGamepads()
