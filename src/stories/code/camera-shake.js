import * as THREE from 'three'
import { CameraShake } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

// In your game loop, before rendering your scene
cameraShake.update(delta)

cameraShake.disable()
