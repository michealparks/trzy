import { useGamepad, useRaf } from 'trzy'

const { gamepad1, gamepad2, updateGamepad, disposeGamepad } = useGamepad()

useRaf(() => {
  updateGamepad()
})

// later
disposeGamepad()
