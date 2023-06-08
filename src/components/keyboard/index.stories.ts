
import type { Meta, StoryObj } from '@storybook/html'
import { three, useKeyboard } from '../../main'
import code from './code?raw'

const meta: Meta = {
  title: 'Keyboard',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const container = document.createElement('container')

  const pre = document.createElement('pre')
  container.append(pre)

  const { keyboard } = useKeyboard()
  const { update } = three()

  update(() => {
    pre.innerHTML = JSON.stringify(keyboard, undefined, '  ')
  })

  return container
}

export const Primary: StoryObj = { render }
