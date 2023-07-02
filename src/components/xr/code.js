import { trzy, xr } from 'trzy'

const { renderer, scene, camera, xr } = trzy()

xr.setup(renderer, scene, camera.current)

const button = await xr.createButton()
container.append(button)

xr.enableTeleport(floor)
