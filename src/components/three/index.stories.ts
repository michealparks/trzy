
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'
import { three } from '../../main'


const meta: Meta = {
  title: 'Three',
  parameters: {
    docs: {
      description: {
        component: 'Instantiates a scene, camera, renderer, and frame loop.',
      },
      source: { code },
    },
  },
}

export default meta

const render = () => {
  const { canvas } = three()

  setup()

  return canvas
}

export const Primary: StoryObj = { render }
