import type { Meta, StoryObj } from '@storybook/html'
import { threeInstance } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'WebGPU',
  parameters: {
    docs: {
      description: {
        component: ''
      },
      source: { code }
    }
  }
}

export default meta

const render = () => {
  const { canvas, camera, scene, update } = threeInstance({ webGPU: true })

  setup({ canvas, camera, scene, update, controls: true }).then(() => {
    const light = scene.getObjectByName('Directional') as THREE.DirectionalLight
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 500;
    light.shadow.camera.right = 17;
    light.shadow.camera.left = - 17;
    light.shadow.camera.top	= 17;
    light.shadow.camera.bottom = - 17;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    light.shadow.bias = .0001;
  })

  return canvas
}

export const Primary: StoryObj = { render }
