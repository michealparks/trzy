
import type { Meta, StoryObj } from '@storybook/html'
import { resetSoftShadows, softShadows, three } from '../../main'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Soft Shadows',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  softShadows()

  const { scene, camera, renderer, update } = three()

  resetSoftShadows(renderer, scene, camera.current)

  setup().then(() => {
    const object = scene.getObjectByName('Strawberry')!
    update(() => {
      object.rotation.y += 0.05
    })
  })

  return renderer.domElement
}

export const Primary: StoryObj = { render }
