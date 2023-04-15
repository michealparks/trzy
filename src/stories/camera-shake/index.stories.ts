
import type { Meta, StoryObj } from '@storybook/html'
import { three, CameraShake } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Camera Shake',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { camera, canvas, update } = three()

  setup({ controls: false })

  const cameraShake = new CameraShake(camera)
  cameraShake.enable()

  update((_, delta) => {
    cameraShake.update(delta)
  })

  return canvas
}

export const Primary: StoryObj = { render }
