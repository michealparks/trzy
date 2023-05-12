import type { Meta, StoryObj } from '@storybook/html'
import { three, xr, plane } from '../../main'
import { setup } from '../lib'
import code from './code?raw'

const meta: Meta = {
  title: 'XR',
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
  const container = document.createElement('div')
  container.style.cssText = 'width:100%;height:420px;'

  const { canvas, camera, scene, renderer, update } = three()
  container.append(canvas)

  renderer.xr.enabled = true

  const xrHandler = xr(renderer, scene, camera.current)
  xrHandler.createButton().then((button) => container.append(button))
  xrHandler.showControllers().enableTeleport()

  setup({ canvas, camera, scene, update, controls: true })

  const floor = plane(undefined, 30, 30)
  floor.position.y = -4.5
  floor.rotation.x = -Math.PI / 2
  floor.rotation.z = Math.PI / 4
  scene.add(floor)

  update((_, delta) => xrHandler.update(delta))

  return container
}

export const Primary: StoryObj = { render }
