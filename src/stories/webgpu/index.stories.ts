import * as THREE from 'three'
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
  const { canvas, camera, scene, renderer, update } = threeInstance({ webGPU: true })

  renderer.shadow.type = THREE.PCFSoftShadowMap

  setup({ canvas, camera, scene, update, controls: true, webGPU: true })

  return canvas
}

export const Primary: StoryObj = { render }
