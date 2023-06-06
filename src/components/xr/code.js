import { three, xr } from 'trzy'

const { renderer, scene, camera, xr } = three()

xr.setup(renderer, scene, camera.current)

const button = await xr.createButton()
container.append(button)

xr.enableTeleport(floor)
