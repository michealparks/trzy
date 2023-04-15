import { CameraShake, useRaf } from 'trzy'

const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

useRaf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()