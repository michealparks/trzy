
import type { Meta, StoryObj } from '@storybook/html'
import { three, AxesHelper, ViewHelper } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { scene, camera, canvas, renderer, update } = three()

  setup({ scene, camera, canvas, update, controls: true })

  const helper = new ViewHelper(camera.current, renderer)

  update((_, delta) => helper.render(delta))
  
  scene.add(new AxesHelper())

  canvas.style.position = 'relative'
  return canvas
}

export const Primary: StoryObj = { render }
