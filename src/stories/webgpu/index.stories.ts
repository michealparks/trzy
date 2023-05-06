import type { Meta, StoryObj } from '@storybook/html'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'
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
  const { canvas, camera, scene, renderer, update } = threeInstance({
    renderer: WebGPU.isAvailable() ? new WebGPURenderer() : undefined,
  })

  console.log(renderer)

  setup({ canvas, camera, scene, update, controls: true, webGPU: true })

  return canvas
}

export const Primary: StoryObj = { render }
