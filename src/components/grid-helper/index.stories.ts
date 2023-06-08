import { GridHelper, three } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Grid Helper',
  parameters: {
    docs: {
      description: {
        component: 'Similar to `THREE.GridHelper` but is just a single plane with lines rendered on the GPU.',
      },
      source: { code },
    },
  },
}

export default meta

const render = () => {
  const { scene, canvas } = three()

  setup()

  scene.add(new GridHelper(1, 10, 'white'))

  return canvas
}

export const Primary: StoryObj = { render }
