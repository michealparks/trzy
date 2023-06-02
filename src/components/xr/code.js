import { three, xr } from '.'

const { renderer, scene, camera } = three()
const vr = xr(renderer, scene, camera)

document.body.append(await vr.createButton())

const support = await vr.requestSessionSupport()
