import type { Meta, StoryObj } from '@storybook/html'
import { GridHelper, three } from '../../main'
import { setup } from '../setup'
import code from './code?raw'

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
  const { scene, camera, canvas, update } = three()

  setup({ scene, camera, canvas, update, controls: true })

  scene.add(new GridHelper(1, 10, 'white'))

  return canvas
}

export const Primary: StoryObj = { render }
