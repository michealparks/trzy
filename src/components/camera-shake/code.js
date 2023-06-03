import * as THREE from 'three'
import { CameraShake, useRaf } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

useRaf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()
