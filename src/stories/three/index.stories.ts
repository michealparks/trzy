
import type { Meta, StoryObj } from '@storybook/html'
import { three } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Three',
  parameters: {
    docs: {
      description: {
        component: 'Instantiates a scene, camera, renderer, and frame loop.'
      },
      source: { code }
    }
  }
}

export default meta

const render = () => {
  const { canvas } = three()

  setup({ controls: true })

  return canvas
}

export const Primary: StoryObj = { render }