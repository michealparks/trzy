import { useGamepad } from '../gamepad'
import { useKeyboard } from '../keyboard'

type InputMap = Record<string, {
    keyboard: keyof ReturnType<typeof useKeyboard>['keyboard'],
    gamepad: keyof ReturnType<typeof useGamepad>['gamepad1']
  }>;

const { gamepad1 } = useGamepad()
const { keyboard } = useKeyboard()

/**
 *
 * @param options
 * @param options.map An input map.
 */
export const useNormalizedInputs = (map: InputMap) => {
  const inputs: Record<string, string | number | boolean> = {}
  const entries = Object.entries(map)

  const updateInputs = () => {
    for (let index = 0, l = entries.length; index < l; index += 1) {
      const [key, value] = entries[index]!
      inputs[key] = gamepad1[value.gamepad] ?? keyboard[value.keyboard] ?? 0
    }
  }

  return { inputs, updateInputs }
}

/*
 * Const { inputs } = useNormalizedInputs({
 *   jump: { keyboard: 'space', gamepad: 'X' },
 * })
 */
