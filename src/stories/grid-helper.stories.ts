import { GridHelper } from '../main'
import { useTrzy } from '../core'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code/grid-helper?raw'
import { setup } from './lib/setup'

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
  setup()

  const { scene, renderer } = useTrzy()

  scene.add(new GridHelper(1, 10, 'white'))

  return renderer.domElement
}

export const Primary: StoryObj = { render }
