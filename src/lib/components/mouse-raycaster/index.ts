import * as THREE from 'three'

export class MouseRaycaster extends THREE.EventDispatcher {
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  target: HTMLElement
  raycaster: THREE.Raycaster
  objects: THREE.Object3D[] = []
  recursive = true

  dispose: () => void

  constructor (props: {
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
    raycaster?: THREE.Raycaster
    objects?: THREE.Object3D[]
    target: HTMLElement
    recursive?: boolean
  }) {
    super()
    this.camera = props.camera
    this.raycaster = props.raycaster ?? new THREE.Raycaster()
    this.objects = props.objects ?? []
    this.target = props.target
    this.recursive = props.recursive ?? true

    const pointerDown = new THREE.Vector2()
    const pointerUp = new THREE.Vector2()
    const pointerMove = new THREE.Vector2()
    const events = { click: 0, move: 0 }

    const getNormalizedCoordinates = (event: PointerEvent, vec: THREE.Vector2): void => {
      const rect = this.target.getBoundingClientRect()

      /*
       * Calculate pointer position in normalized device coordinates
       * (-1 to +1) for both components
       */
      vec.x = (((event.clientX - rect.x) / this.target.clientWidth) * 2) - 1
      vec.y = -(((event.clientY - rect.y) / this.target.clientHeight) * 2) + 1
    }

    const onPointerDown = (event: PointerEvent): void => {
      getNormalizedCoordinates(event, pointerDown)
    }

    const onPointerUp = (event: PointerEvent): void => {
      if (this.camera === undefined) {
        return
      }

      getNormalizedCoordinates(event, pointerUp)

      if (pointerDown.sub(pointerUp).lengthSq() > 0.001) {
        return
      }

      // Update the picking ray with the camera and pointer position
      this.raycaster.setFromCamera(pointerUp, this.camera)

      const intersections = this.raycaster.intersectObjects(this.objects, this.recursive)

      this.dispatchEvent({ type: 'click', intersections })
    }

    const onPointerMove = (event: PointerEvent): void => {
      if (this.camera === undefined) {
        return
      }

      getNormalizedCoordinates(event, pointerMove)

      this.raycaster.setFromCamera(pointerMove, this.camera)

      const intersections = this.raycaster.intersectObjects(this.objects, this.recursive)

      this.dispatchEvent({ type: 'move', intersections })
    }

    this.addEventListener = <T extends string> (type: T, listener: THREE.EventListener<THREE.Event, T, this>): void => {
      super.addEventListener(type, listener)

      if (type === 'click' || type === 'move') {
        if (type === 'move' && events.move === 0) {
          this.target.addEventListener('pointermove', onPointerMove, { passive: true })
        } else if (type === 'click' && events.click === 0) {
          this.target.addEventListener('pointerdown', onPointerDown, { passive: true })
          this.target.addEventListener('pointerup', onPointerUp, { passive: true })
        }

        events[type as 'click' | 'move'] += 1
      }
    }

    this.removeEventListener = <T extends string> (type: T, listener: THREE.EventListener<THREE.Event, T, this>): void => {
      super.removeEventListener(type, listener)

      if (type === 'click' || type === 'move') {
        events[type as 'click' | 'move'] -= 1

        if (type === 'move' && events.move <= 0) {
          this.target.removeEventListener('pointermove', onPointerMove)
        } else if (type === 'click' && events.click <= 0) {
          this.target.addEventListener('pointerdown', onPointerDown, { passive: true })
          this.target.addEventListener('pointerup', onPointerUp, { passive: true })
        }
      }
    }

    this.dispose = (): void => {
      this.target.removeEventListener('pointerdown', onPointerDown)
      this.target.removeEventListener('pointerup', onPointerUp)
      this.target.removeEventListener('pointermove', onPointerMove)
    }
  }
}
