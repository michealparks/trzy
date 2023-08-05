import type { MapControls } from 'three/examples/jsm/controls/MapControls'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

import { Shake } from '../shake'

export class CameraShake extends Shake {
  controls: PointerLockControls | OrbitControls | MapControls | undefined

  constructor (
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
    controls?: PointerLockControls | OrbitControls | MapControls | undefined
  ) {
    super(camera)

    let cameraControls: PointerLockControls | OrbitControls | MapControls | undefined

    Object.defineProperty(this, 'controls', {
      get () {
        return cameraControls
      },
      set (value: PointerLockControls | OrbitControls | MapControls | undefined) {
        if (cameraControls !== undefined) {
          cameraControls.removeEventListener('change', this.saveRotation)
        }

        cameraControls = value

        if (cameraControls !== undefined) {
          cameraControls.addEventListener('change', this.saveRotation)
        }
      },
      enumerable: true,
      configurable: true,
    })

    this.controls = controls
  }
}
