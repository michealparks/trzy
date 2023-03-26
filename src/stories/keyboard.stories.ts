
import type { Meta, StoryObj } from '@storybook/html'
import { keyboardManager, update, threeInstance } from '../main'

const meta: Meta = {
  title: 'Keyboard',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { keyboardManager } from 'trzy'

const { keyboard } = keyboardManager()

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

    const { keyboard } = keyboardManager()
    const { run } = threeInstance()

    update(() => {
      pre.innerHTML = JSON.stringify(keyboard, null, '  ')
    })

    run()

    return container
  },
}
