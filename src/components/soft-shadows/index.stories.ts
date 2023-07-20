
import type { Meta, StoryObj } from '@storybook/html'
import { softShadows } from '../../main'
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

  const { scene, renderer } = useTrzy()

  setup().then(() => {
    const object = scene.getObjectByName('Strawberry')!
    useFrame(() => {
      object.rotation.y += 0.05
    })
  })

  return renderer.domElement
}

export const Primary: StoryObj = { render }
