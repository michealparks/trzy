
import type { Meta, StoryObj } from '@storybook/html'
import { AxesHelper, three } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Axes Helper',
  parameters: {
    docs: {
      description: {
        component: 'Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes.'
      },
      source: { code }
    }
  }
}

export default meta

const render = () => {
  const { scene, canvas } = three()

  setup({ controls: true })

  scene.add(new AxesHelper({ size: 1.5, width: 0.0025 }).setColors('yellow', 'blue', 'pink'))

  return canvas
}

export const Primary: StoryObj = { render }
