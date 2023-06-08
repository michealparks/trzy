import { AxesHelper, ViewHelper, three } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { scene, camera, canvas, renderer, update } = three()

  setup()

  const helper = new ViewHelper(camera.current, renderer)

  update((_, delta) => helper.render(delta))

  scene.add(new AxesHelper())

  canvas.style.position = 'relative'
  return canvas
}

export const Primary: StoryObj = { render }
