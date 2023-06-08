import type { Meta, StoryObj } from '@storybook/html'
import { three, xr } from '../../main'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'XR',
  parameters: {
    docs: {
      description: {
        component: '',
      },
      source: { code },
    },
  },
}

export default meta

const render = () => {
  const container = document.createElement('div')
  container.style.cssText = 'width:100%;height:420px;'

  const { canvas, camera, scene, renderer, update } = three({
    parameters: { antialias: true },
  })
  container.append(canvas)

  setup({ controls: false }).then(({ floor }) => {
    xr.setup(renderer, scene, camera.current)

    const { model0, model1 } = xr.getControllerModels()
    model0.castShadow = true
    model0.receiveShadow = true

    model1.castShadow = true
    model1.receiveShadow = true

    scene.getObjectByName('Strawberry')?.position.set(0, 1, 0)

    xr.createButton().then((button) => {
      button.style.cssText = `
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: 100;
      `
      container.append(button)

      xr.on('enter', () => {
        xr.toggleControllers(true)
        xr.toggleHands(true)
        xr.enableTeleport(floor)
      })

      update((_, delta) => xr.update(delta))
    })
  })

  return container
}

export const Primary: StoryObj = { render }
