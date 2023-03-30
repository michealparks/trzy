import { useGamepad } from './gamepad'
import { useKeyboard } from './keyboard'

interface InputMap {
  [key: string]: {
    keyboard: keyof ReturnType<typeof useKeyboard>['keyboard'],
    gamepad: keyof ReturnType<typeof useGamepad>['gamepad']
  }
}

const { gamepad } = useGamepad()
const { keyboard } = useKeyboard()


/**
 * 
 * @param options
 * @param options.map An input map.
 */
export const useNormalizedInputs = (map: InputMap) => {
  const inputs: Record<string, number> = {}
  const entries = Object.entries(map)

  const updateInputs = () => {
    for (let i = 0, l = entries.length; i < l; i += 1) {
      const [key, value] = entries[i]!
      inputs[key] = gamepad[value.gamepad] ?? keyboard[value.keyboard] ?? 0
    }
  }  

  return { inputs, updateInputs }
}

const { inputs } = useNormalizedInputs({
  jump: { keyboard: 'space', gamepad: 'X' },
})
