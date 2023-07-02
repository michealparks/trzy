
import type { Meta, StoryObj } from '@storybook/html'
import { resetSoftShadows, softShadows } from '../../main'
import code from './code?raw'
import { setup } from '../setup'
import { useFrame, useTrzy } from '../../core'

const meta: Meta = {
  title: 'Soft Shadows',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  softShadows()

  const { scene, camera, renderer } = useTrzy()

  resetSoftShadows(renderer, scene, camera.current)

  setup().then(() => {
    const object = scene.getObjectByName('Strawberry')!
    useFrame(() => {
      object.rotation.y += 0.05
    })
  })

  return renderer.domElement
}

export const Primary: StoryObj = { render }
