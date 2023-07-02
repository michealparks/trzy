import { AxesHelper, ViewHelper } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'
import { useTrzy, useFrame } from '../../core'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { scene, camera, renderer } = useTrzy()

  setup()

  const helper = new ViewHelper(camera.current, renderer)

  useFrame((_, delta) => helper.render(delta))

  scene.add(new AxesHelper())

  renderer.domElement.style.position = 'relative'
  return renderer.domElement
}

export const Primary: StoryObj = { render }
