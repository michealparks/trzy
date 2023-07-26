
import type { Meta, StoryObj } from '@storybook/html'
import { useKeyboard } from '../main'
import { setup } from './lib/setup'
import { useFrame } from '../core'
import code from './code/keyboard?raw'

const meta: Meta = {
  title: 'Keyboard',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  setup()

  const container = document.createElement('container')

  const pre = document.createElement('pre')
  container.append(pre)

  const { keyboard } = useKeyboard()

  useFrame(() => {
    pre.innerHTML = JSON.stringify(keyboard, undefined, '  ')
  })

  return container
}

export const Primary: StoryObj = { render }
