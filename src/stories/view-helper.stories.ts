import { AxesHelper, ViewHelper } from '../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code/view-helper?raw'
import { setup } from './lib/setup'
import { useTrzy } from '../core'

const meta: Meta = {
  title: 'ViewHelper',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { scene, camera, renderer } = useTrzy()
  const container = document.createElement('div')
  container.append(renderer.domElement)
  setup()

  // eslint-disable-next-line no-new
  new ViewHelper(camera.current, renderer)

  scene.add(new AxesHelper())
  return container
}

export const Primary: StoryObj = { render }
