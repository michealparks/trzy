
import type { Meta, StoryObj } from '@storybook/html'
import { useGamepad } from '../main'

const meta: Meta = {
  title: 'Gamepad',
  parameters: {
    docs: {
      source: {
        code: `import { useGamepad } from 'trzy'

const { gamepad, gamepad2, updateGamepad, disposeGamepad } = useGamepad()

const frame = () => {
  requestAnimationFrame(frame)
  updateGamepad()
}

frame()

// later
disposeGamepad()`,
      }
    }
  }
}

export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/html/api/csf
 * to learn how to use render functions.
 */
export const Primary: StoryObj = {
  render: () => {
    const container = document.createElement('div')
    container.style.cssText = `
      position: relative;
      width: 600px;
      height: 400px;
      display: flex;
      justify-content: space-between;
    `

    const pre = document.createElement('pre')
    container.append(pre)

    const pre2 = document.createElement('pre')
    container.append(pre2)

    const { gamepad, gamepad2, updateGamepad } = useGamepad()

    const frame = () => {
      requestAnimationFrame(frame)
      updateGamepad()
      pre.innerHTML = `Gamepad 1\n\n${JSON.stringify(gamepad, null, '  ')}`
      pre2.innerHTML = `Gamepad 2\n\n${JSON.stringify(gamepad2, null, '  ')}`
    }

    frame()

    return container
  },
}
