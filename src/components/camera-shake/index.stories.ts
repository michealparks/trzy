import { CameraShake, three } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Camera Shake',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  const { camera, canvas, beforeRender } = three()

  setup().then(({ controls }) => {
    const cameraShake = new CameraShake(camera.current)
    cameraShake.enable(controls!)

    beforeRender((_, delta) => {
      cameraShake.update(delta)
    })
  })

  return canvas
}

export default meta

export const Primary: StoryObj = { render }
