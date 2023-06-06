
import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'

export class Shake {
  enabled = false
  decay = false
  decayRate = 0.65
  intensity = 0.5
  maxPitch = 0.05
  maxRoll = 0.05
  maxYaw = 0.05
  pitchFrequency = 0.0005
  rollFrequency = 0.0005
  yawFrequency = 0.0005
  time = 0
  initialRotation = new THREE.Euler()
  object: THREE.Object3D

  yawNoise = createNoise2D()
  pitchNoise = createNoise2D()
  rollNoise = createNoise2D()

  constructor (object: THREE.Object3D) {
    this.object = object
  }

  saveRotation = (): void => {
    this.initialRotation.copy(this.object.rotation)
  }

  enable (): void {
    this.saveRotation()
    this.enabled = true
  }

  disable (): void {
    this.enabled = false
  }

  update = (delta: number): void => {
    this.time += delta

    const shake = this.intensity ** 2
    const yaw = this.maxYaw * shake * this.yawNoise(this.time * this.yawFrequency, 1)
    const pitch = this.maxPitch * shake * this.pitchNoise(this.time * this.pitchFrequency, 1)
    const roll = this.maxRoll * shake * this.rollNoise(this.time * this.rollFrequency, 1)

    this.object.rotation.set(
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
}
