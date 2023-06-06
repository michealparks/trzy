
import type { Meta, StoryObj } from '@storybook/html'
import { threeInstance } from '../../main'
import { setup } from '../setup'
import code from './code?raw'

const meta: Meta = {
  title: 'Three',
  parameters: {
    docs: {
      description: {
        component: `Instantiates a scene, camera, renderer, and frame loop.`
      },
      source: { code }
    }
  }
}

export default meta

const render = () => {
  const { scene, camera, canvas, update } = threeInstance()

  setup({ scene, camera, canvas, update, controls: true })

  return canvas
}

export const Primary: StoryObj = { render }
