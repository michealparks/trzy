
import type { Meta, StoryObj } from '@storybook/html'
import { three, softShadows, resetSoftShadows } from '../../main'
import code from './code?raw'
import { setup } from '../lib'

const meta: Meta = {
  title: 'Soft Shadows',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { renderer, scene, camera, update } = three()

  softShadows()
  resetSoftShadows(renderer, scene, camera)

  
  setup({ controls: true }).then(() => {
    const object = scene.getObjectByName('Strawberry')!
    update(() => {
      
      object.rotation.y += 0.05
    })
  })

  

  return renderer.domElement
}

export const Primary: StoryObj = { render }
