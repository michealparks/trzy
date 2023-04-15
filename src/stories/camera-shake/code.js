import { CameraShake, useRaf } from 'trzy'

const cameraShake = new CameraShake(camera)

useRaf((time, delta) => {
  cameraShake.update(time, delta)
})
