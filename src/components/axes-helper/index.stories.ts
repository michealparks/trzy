
import type { Meta, StoryObj } from '@storybook/html'
import { useTrzy } from '../../core'
import { AxesHelper } from '../../main'
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

const render = () => {
  setup()

  const { scene, renderer } = useTrzy()
  const helper = new AxesHelper()
  helper.setColors('red', 'green', 'blue')
  helper.length = 100

  scene.add(helper)
  return renderer.domElement
}

export default meta

export const Primary: StoryObj = { render }
