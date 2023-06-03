
import type { Meta, StoryObj } from '@storybook/html'
import { three, MeshDiscardMaterial } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Discard Material',
  parameters: {
    docs: { source: { code } }
  }
}

const render = () => {
  const { scene, camera, canvas, update } = three()
  const material = new MeshDiscardMaterial()

  setup({ scene, camera, canvas, update, controls: true })

  return canvas
}

export default meta

export const Primary: StoryObj = { render }
