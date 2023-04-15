
import type { Meta, StoryObj } from '@storybook/html'
import { three, AxesHelper, OrbitControlsGizmo } from '../../main'
import { setup, controls } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { scene, camera, canvas } = three()

  setup({ controls: true })

  const container = document.createElement('container')
  container.append(canvas)

  const el = document.createElement('div')
  el.style.cssText = 'position: absolute; top: 50px; right: 40px;'
  container.append(el)

  new OrbitControlsGizmo({ camera, el, controls })

  scene.add(new AxesHelper({ size: 2, width: 0.002 }))

  return container
}

export const Primary: StoryObj = { render }
