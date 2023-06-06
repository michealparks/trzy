import { CameraShake, raf } from 'trzy'

const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

raf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()