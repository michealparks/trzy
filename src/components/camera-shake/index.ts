import type { MapControls } from 'three/examples/jsm/controls/MapControls'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

import { Shake } from '../shake'

export type Controls =
  | PointerLockControls
  | OrbitControls
  | MapControls

export class CameraShake extends Shake {
  activeControls: Controls | undefined

  override enable (controls?: OrbitControls): void {
    super.enable()
    this.activeControls = controls
    this.activeControls?.addEventListener('change', this.saveRotation)
  }

  override disable (): void {
    super.disable()
    this.activeControls?.removeEventListener('change', this.saveRotation)
    this.activeControls = undefined
  }
}
