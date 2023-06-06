import type { Meta, StoryObj } from '@storybook/html'
import { three, xr, plane } from '../../main'
import { setup } from '../lib'
import code from './code?raw'
// import Inspector from 'three-inspect'

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

  const { canvas, camera, scene, renderer, update } = three({
    parameters: { antialias: true }
  })
  container.append(canvas)

  setup({ canvas, camera, scene, update, controls: false })

  xr.setup(renderer, scene, camera.current)

  const floor = plane(undefined, 30, 30)
  floor.position.y = -4.5
  floor.rotation.x = -Math.PI / 2
  floor.rotation.z = Math.PI / 4
  scene.add(floor)

  xr.createButton().then((button) => {
    button.style.cssText = `
      position: absolute;
      bottom: 15px;
      left: 15px;
      z-index: 100;
    `
    container.append(button)
  })

  canvas.addEventListener('click', () => {
    xr.entered ? xr.endSession() : xr.requestSession()
  })

  xr.on('enter', () => xr.enableTeleport(floor))

  update((_, delta) => xr.update(delta))

  // new Inspector({ scene, camera: camera.current, renderer })

  return container
}

export const Primary: StoryObj = { render }
