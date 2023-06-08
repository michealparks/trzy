import { AxesHelper, three } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Axes Helper',
  parameters: {
    docs: {
      description: {
        component: 'Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes.',
      },
      source: { code },
    },
  },
}

export default meta

const render = () => {
  const { scene, canvas } = three()

  setup()

  const helper = new AxesHelper()
  helper.setColors('red', 'green', 'blue')
  helper.length = 100

  scene.add(helper)

  return canvas
}

export const Primary: StoryObj = { render }
