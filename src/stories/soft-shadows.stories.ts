
import type { Meta, StoryObj } from '@storybook/html'
import { shadows, softShadows } from '../main'
import { setup } from './lib/setup'
import { useFrame, useTrzy } from '../core'
import code from './code/soft-shadows?raw'
import { strawberry } from './lib/strawberry'
import { floor } from './lib/floor'

const meta: Meta = {
  title: 'Soft Shadows',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

softShadows()

const render = () => {
  const { scene, renderer } = useTrzy()

  setup()

  strawberry().then((group) => {
    scene.add(group)
    useFrame(() => (group.rotation.y += 0.05))
  })

  scene.add(floor())

  shadows(scene)

  return renderer.domElement
}

export const Primary: StoryObj = { render }
