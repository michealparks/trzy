import { CameraShake } from '../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code/camera-shake?raw'
import { orbitControls, setup } from './lib/setup'
import { useFrame, useTrzy } from '../core'
import { strawberry } from './lib/strawberry'

const meta: Meta = {
  title: 'Camera Shake',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  setup()

  const { scene, camera, renderer } = useTrzy()
  const cameraShake = new CameraShake(camera.current)

  strawberry().then((group) => scene.add(group))

  useFrame((_, delta) => cameraShake.update(delta))

  cameraShake.enable(orbitControls)

  return renderer.domElement
}

export default meta

export const Primary: StoryObj = { render }
