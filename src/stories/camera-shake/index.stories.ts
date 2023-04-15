
import type { Meta, StoryObj } from '@storybook/html'
import { three, CameraShake } from '../../main'
import { setup, controls } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Camera Shake',
  parameters: {
    docs: { source: { code } }
  }
}

const render = () => {
  const { camera, canvas, beforeRender } = three()

  setup({ controls: true })

  const cameraShake = new CameraShake(camera)
  cameraShake.enable(controls)

  beforeRender((_, delta) => {
    cameraShake.update(delta)
  })

  return canvas
}

export default meta

export const Primary: StoryObj = { render }
