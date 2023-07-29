import type { MapControls } from 'three/examples/jsm/controls/MapControls'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

import { Shake } from '../shake'

export class CameraShake extends Shake {
  controls: PointerLockControls | OrbitControls | MapControls | undefined

  constructor (camera: THREE.PerspectiveCamera | THREE.OrthographicCamera) {
    super(camera)

    let controls: PointerLockControls | OrbitControls | MapControls | undefined

    Object.defineProperty(this, 'controls', {
      get () {
        return controls
      },
      set (value: PointerLockControls | OrbitControls | MapControls | undefined) {
        if (controls !== undefined) {
          controls.removeEventListener('change', this.saveRotation)
        }

        controls = value

        if (controls !== undefined) {
          controls.addEventListener('change', this.saveRotation)
        }
      },
      enumerable: true,
      configurable: true,
    })
  }
}
