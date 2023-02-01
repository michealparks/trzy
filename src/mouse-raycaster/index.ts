import {
  type Object3D,
  type OrthographicCamera,
  type PerspectiveCamera,
  Raycaster,
  Vector2,
  EventDispatcher
} from 'three'

interface Props {
  camera: PerspectiveCamera | OrthographicCamera
  canvas: HTMLCanvasElement
  raycaster?: Raycaster
  objects?: Object3D[]
  recursive?: boolean
}

export class MouseRaycaster extends EventDispatcher {
  camera: PerspectiveCamera | OrthographicCamera
  canvas: HTMLCanvasElement
  raycaster: Raycaster
  objects: Object3D[] = []
  pointerDown = new Vector2()
  pointerUp = new Vector2()
  recursive = true

  constructor (props: Props) {
    super()
    this.camera = props.camera
    this.canvas = props.canvas
    this.raycaster = props.raycaster ?? new Raycaster()
    this.objects = props.objects ?? []
    this.recursive = props.recursive ?? true

    this.canvas.addEventListener('pointerdown', this.onPointerDown, { passive: true })
    this.canvas.addEventListener('pointerup', this.onPointerUp, { passive: true })
  }

  getNormalizedCoordinates (event: PointerEvent, vec: Vector2) {
    const rect = this.canvas.getBoundingClientRect()

    /*
     * Calculate pointer position in normalized device coordinates
     * (-1 to +1) for both components
     */
    vec.x = (((event.clientX - rect.x) / this.canvas.clientWidth) * 2) - 1
    vec.y = -(((event.clientY - rect.y) / this.canvas.clientHeight) * 2) + 1
  }

  onPointerDown = (event: PointerEvent) => {
    this.getNormalizedCoordinates(event, this.pointerDown)
  }

  onPointerUp = (event: PointerEvent) => {
    this.getNormalizedCoordinates(event, this.pointerUp)

    if (this.pointerDown.sub(this.pointerUp).lengthSq() > 0.001) {
      return
    }

    // Update the picking ray with the camera and pointer position
    this.raycaster.setFromCamera(this.pointerUp, this.camera)

    const intersections = this.raycaster.intersectObjects(this.objects, this.recursive)

    this.dispatchEvent({ type: 'click', intersections })
  }

  dispose () {
    this.canvas.removeEventListener('pointerdown', this.onPointerDown)
    this.canvas.removeEventListener('pointerup', this.onPointerUp)
  }
}
