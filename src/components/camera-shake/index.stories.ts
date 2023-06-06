
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

const render = () => {
  const { scene, camera, canvas, update, beforeRender } = three()

  setup({ scene, camera, canvas, update, controls: true }).then((controls) => {
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
