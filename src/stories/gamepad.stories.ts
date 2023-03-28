
import type { Meta, StoryObj } from '@storybook/html'
import { gamepadManager } from '../main'

const meta: Meta = {
  title: 'Gamepad',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { gamepadManager } from 'trzy'

const { gamepad, updateGamepad, disposeGamepad } = gamepadManager()

const frame = () => {
  requestAnimationFrame(frame)
  update()
}

frame()

// later
disposeGamepad()

</script>
        `,
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
    container.style.cssText = 'position: relative; width: 100%; height: 400px;'

    const pre = document.createElement('pre')
    container.append(pre)

    const { gamepad, updateGamepad } = gamepadManager()

    const frame = () => {
      requestAnimationFrame(frame)
      updateGamepad()
      pre.innerHTML = JSON.stringify(gamepad, null, '  ')
    }

    frame()

    return container
  },
}
