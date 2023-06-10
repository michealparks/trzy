import type { Meta, StoryObj } from '@storybook/html'
/*
 * Import { threeInstance } from '../../main'
 * import { setup } from '../lib'
 */
import code from './code?raw'

const meta: Meta = {
  title: 'WebGPU',
  parameters: {
    docs: {
      description: {
        component: '',
      },
      source: { code },
    },
  },
}

export default meta

const render = () => {
  const container = document.createElement('div')

  const main = async () => {
    /*
     * Const module = import('three/examples/jsm/renderers/webgpu/WebGPURenderer')
     * console.log(module)
     */

    /*
     * Const { canvas, camera, scene, renderer, update } = threeInstance({
     *   renderer: 'gpu' in navigator ? new WebGPURenderer() : undefined,
     * })
     */

    // Setup({ canvas, camera, scene, update, controls: true, webGPU: true })
  }

  main()

  return container
}

export const Primary: StoryObj = { render }