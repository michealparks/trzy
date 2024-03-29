
import { setup } from '../lib/setup'
import { useTrzy, useFrame, plane, xr } from '$lib'

const container = document.createElement('div')
container.style.cssText = 'width:100%;height:420px;'

const { scene, camera, renderer } = useTrzy()

container.append(renderer.domElement)

const floor = plane(undefined, 4, 4)
floor.rotation.x = -Math.PI / 2
scene.add(floor)

setup()

xr.setup(renderer, scene, camera.current)

const { model0, model1 } = xr.getControllerModels()
model0.castShadow = true
model0.receiveShadow = true

model1.castShadow = true
model1.receiveShadow = true

scene.getObjectByName('Strawberry')?.position.set(0, 1, 0)

// eslint-disable-next-line unicorn/prefer-top-level-await
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

  useFrame((_, delta) => xr.update(delta))
})
