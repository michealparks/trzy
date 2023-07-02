import { CameraShake } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { orbitControls, setup } from '../setup'
import { useFrame, useTrzy } from '../../core'

const meta: Meta = {
  title: 'Camera Shake',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  setup()

  const { camera, renderer } = useTrzy()
  const cameraShake = new CameraShake(camera.current)

  useFrame((_, delta) => {
    cameraShake.update(delta)
  })

  cameraShake.enable(orbitControls)

  return renderer.domElement
}

export default meta

export const Primary: StoryObj = { render }
