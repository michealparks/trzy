
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { MapControls } from 'three/examples/jsm/controls/MapControls'
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import * as THREE from 'three'
import { Shake } from '../shake'

export type Controls =
  | PointerLockControls
  | OrbitControls
  | MapControls

export class CameraShake extends Shake {
  activeControls: Controls | null = null

  constructor (camera: THREE.Camera) {
    super(camera)
  }

  override enable (controls?: OrbitControls): void {
    super.enable()

    if (controls) {
      this.activeControls = controls
      this.activeControls.addEventListener('change', this.saveRotation)
    }
  } 

  override disable (): void {
    super.disable()

    if (this.activeControls) {
      this.activeControls.removeEventListener('change', this.saveRotation)
      this.activeControls = null
    }
  }
}
