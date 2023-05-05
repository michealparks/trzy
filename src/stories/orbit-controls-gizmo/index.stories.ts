
import type { Meta, StoryObj } from '@storybook/html'
import { three, AxesHelper, OrbitControlsGizmo } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { scene, camera, canvas, update } = three()

  const container = document.createElement('container')

  setup({ scene, camera, canvas, update, controls: true }).then((controls) => {
    
    container.append(canvas)

    const el = document.createElement('div')
    el.style.cssText = 'position: absolute; top: 50px; right: 40px;'
    container.append(el)

    new OrbitControlsGizmo({ camera: camera.current, el, controls: controls! })

    scene.add(new AxesHelper({ size: 2, width: 0.002 }))

  })

  return container
}

export const Primary: StoryObj = { render }
