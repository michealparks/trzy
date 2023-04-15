import {
  type Object3D,
  type OrthographicCamera,
  type PerspectiveCamera,
  type Scene,
  type WebGLRenderer,
  Raycaster,
  Vector2,
  EventDispatcher,
  Event,
  EventListener,
} from 'three'

type Events = 'click' | 'move'

export class MouseRaycaster extends EventDispatcher {
  camera: PerspectiveCamera | OrthographicCamera
  
  raycaster: Raycaster
  objects: Object3D[] = []
  pointerDown = new Vector2()
  pointerUp = new Vector2()
  pointerMove = new Vector2()
  recursive = true

  renderer: WebGLRenderer
  #events = { click: 0, move: 0 }

  constructor (props: {
    scene?: Scene
    camera: PerspectiveCamera | OrthographicCamera
    renderer: WebGLRenderer
    raycaster?: Raycaster
    objects?: Object3D[]
    recursive?: boolean
  }) {
    super()
    this.camera = props.camera
    this.renderer = props.renderer
    this.raycaster = props.raycaster ?? new Raycaster()
    this.objects = props.objects ?? (props.scene ? [props.scene] : [])
    this.recursive = props.recursive ?? true
  }

  on(type: Events, listener: EventListener<Event, Events, this>): void {
    super.addEventListener<Events>(type, listener)

    const canvas = this.renderer.domElement

    if (type === 'move' && this.#events.move === 0) {
      canvas.addEventListener('pointermove', this.onPointerMove, { passive: true })
    } else if (type === 'click' && this.#events.click === 0) {
      canvas.addEventListener('pointerdown', this.onPointerDown, { passive: true })
      canvas.addEventListener('pointerup', this.onPointerUp, { passive: true })
    }

    this.#events[type] += 1
  }

  off(type: Events, listener: EventListener<Event, Events, this>): void {
    super.removeEventListener<Events>(type, listener)

    const canvas = this.renderer.domElement

    this.#events[type] -= 1

    if (type === 'move' && this.#events.move <= 0) {
      canvas.removeEventListener('pointermove', this.onPointerMove)
    } else if (type === 'click' && this.#events.click <= 0) {
      canvas.addEventListener('pointerdown', this.onPointerDown, { passive: true })
      canvas.addEventListener('pointerup', this.onPointerUp, { passive: true })
    }
  }

  getNormalizedCoordinates (event: PointerEvent, vec: Vector2): void {
    const canvas = this.renderer.domElement
    const rect = canvas.getBoundingClientRect()

    /*
     * Calculate pointer position in normalized device coordinates
     * (-1 to +1) for both components
     */
    vec.x = (((event.clientX - rect.x) / canvas.clientWidth) * 2) - 1
    vec.y = -(((event.clientY - rect.y) / canvas.clientHeight) * 2) + 1
  }

  onPointerDown = (event: PointerEvent): void => {
    this.getNormalizedCoordinates(event, this.pointerDown)
  }

  onPointerUp = (event: PointerEvent): void => {
    this.getNormalizedCoordinates(event, this.pointerUp)

    if (this.pointerDown.sub(this.pointerUp).lengthSq() > 0.001) {
      return
    }

    // Update the picking ray with the camera and pointer position
    this.raycaster.setFromCamera(this.pointerUp, this.camera)

    const intersections = this.raycaster.intersectObjects(this.objects, this.recursive)

    this.dispatchEvent({ type: 'click', intersections })
  }

  onPointerMove = (event: PointerEvent): void => {
    this.getNormalizedCoordinates(event, this.pointerMove)

    this.raycaster.setFromCamera(this.pointerMove, this.camera)

    const intersections = this.raycaster.intersectObjects(this.objects, this.recursive)

    this.dispatchEvent({ type: 'move', intersections })
  }

  dispose (): void {
    const canvas = this.renderer.domElement

    canvas.removeEventListener('pointerdown', this.onPointerDown)
    canvas.removeEventListener('pointerup', this.onPointerUp)
    canvas.removeEventListener('pointermove', this.onPointerMove)
  }
}
