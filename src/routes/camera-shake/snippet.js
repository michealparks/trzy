
import * as THREE from 'three'
import { CameraShake } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// If using controls, register them
cameraShake.controls = orbitControls

// In your game loop, before rendering your scene
cameraShake.update()

// If you wish to disable
cameraShake.enabled = false
