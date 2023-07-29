
import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'

export class Shake {
  decay = false
  decayRate = 0.65
  intensity = 0.5
  maxPitch = 0.05
  maxRoll = 0.05
  maxYaw = 0.05
  pitchFrequency = 0.0005
  rollFrequency = 0.0005
  yawFrequency = 0.0005

  object: THREE.Object3D

  enabled = true
  saveRotation: () => void
  update: () => void

  constructor (object: THREE.Object3D) {
    const initialRotation = new THREE.Euler()
    const yawNoise = createNoise2D()
    const pitchNoise = createNoise2D()
    const rollNoise = createNoise2D()

    let enabled = true
    let time = 0
    let then = performance.now()

    const saveRotation = (): void => {
      initialRotation.copy(this.object.rotation)
    }

    const update = (): void => {
      const now = performance.now()
      const delta = now - then
      time += delta
      then = now

      const shake = this.intensity ** 2
      const yaw = this.maxYaw * shake * yawNoise(time * this.yawFrequency, 1)
      const pitch = this.maxPitch * shake * pitchNoise(time * this.pitchFrequency, 1)
      const roll = this.maxRoll * shake * rollNoise(time * this.rollFrequency, 1)

      this.object.rotation.set(
        initialRotation.x + pitch,
        initialRotation.y + yaw,
        initialRotation.z + roll
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

    Object.defineProperty(this, 'enabled', {
      get () {
        return enabled
      },
      set (value: boolean) {
        enabled = value

        if (!enabled) {
          return
        }

        saveRotation()
      },
      enumerable: true,
      configurable: true,
    })

    this.object = object
    this.saveRotation = saveRotation
    this.update = update
  }
}
