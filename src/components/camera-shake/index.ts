
import type { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import { Euler, type OrthographicCamera, type PerspectiveCamera } from 'three'
import { createNoise2D } from 'simplex-noise'

export type Controls =
  | PointerLockControls
  | OrbitControls
  | MapControls

export class CameraShake {
  decay = false
  decayRate = 0.65
  intensity = 0.5
  maxPitch = 0.05
  maxRoll = 0.05
  maxYaw = 0.05
  pitchFrequency = 0.0005
  rollFrequency = 0.0005
  yawFrequency = 0.0005

  yawNoise = createNoise2D()
  pitchNoise = createNoise2D()
  rollNoise = createNoise2D()
  then = 0
  activeControls: Controls | null = null
  initialRotation = new Euler()
  camera: PerspectiveCamera | OrthographicCamera

  constructor (camera: PerspectiveCamera | OrthographicCamera) {
    this.camera = camera
  }

  updateRotation = () => {
    this.initialRotation = this.camera.rotation.clone()
  }

  enable (controls?: OrbitControls) {
    this.then = performance.now()
    this.initialRotation.copy(this.camera.rotation)

    if (controls) {
      this.activeControls = controls
      this.activeControls.addEventListener('change', this.updateRotation)
    }
  } 

  update = (time: number, delta: number) => {
    const shake = this.intensity ** 2
    const yaw = this.maxYaw * shake * this.yawNoise(time * this.yawFrequency, 1)
    const pitch = this.maxPitch * shake * this.pitchNoise(time * this.pitchFrequency, 1)
    const roll = this.maxRoll * shake * this.rollNoise(time * this.rollFrequency, 1)

    this.camera.rotation.set(
      this.initialRotation.x + pitch,
      this.initialRotation.y + yaw,
      this.initialRotation.z + roll
    )

    if (this.decay && this.intensity > 0) {
      this.intensity -= this.decayRate * delta
      
      if (this.intensity < 0) {
        this.intensity = 0
      } else if (this.intensity > 1) {
        this.intensity = 1
      }
    }
  }

  disable () {
    if (this.activeControls) {
      this.activeControls.removeEventListener('change', this.updateRotation)
      this.activeControls = null
    }
  }
}
