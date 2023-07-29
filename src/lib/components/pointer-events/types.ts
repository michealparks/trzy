import type { Camera, Raycaster, Vector2 } from 'three'

export type DomEvent = PointerEvent | MouseEvent | WheelEvent

export interface Intersection extends THREE.Intersection {
  /** The event source (the object which registered the handler) */
  eventObject: THREE.Object3D
}

export interface IntersectionEvent<NativeEvent> extends Intersection {
  /** The event source (the object which registered the handler) */
  eventObject: THREE.Object3D
  /** An array of intersections */
  intersections: Intersection[]
  /** Normalized event coordinates */
  pointer: THREE.Vector2
  /** Delta between first click and this event */
  delta: number
  /** The ray that pierced it */
  ray: THREE.Ray
  /** The camera that was used by the raycaster */
  camera: Camera
  /** StopPropagation will stop underlying handlers from firing */
  stopPropagation: () => void
  /** The original host event */
  nativeEvent: NativeEvent
  /** If the event was stopped by calling stopPropagation */
  stopped: boolean
}

export type Properties<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends (_: unknown) => unknown ? never : K }[keyof T]
>

export interface PointerCaptureTarget {
  intersection: Intersection
  target: Element
}

export type Context = {
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  enabled: boolean
  target: HTMLElement
  pointer: Vector2
  pointerOverTarget: boolean
  lastEvent: DomEvent | undefined
  raycaster: Raycaster
  initialClick: [x: number, y: number]
  initialHits: THREE.Object3D[]
  hovered: Map<string, IntersectionEvent<DomEvent>>
  interactiveObjects: THREE.Object3D[]
  interactiveMap: Record<string, THREE.Object3D>
  compute: (event: DomEvent, ctx: Context) => void
  filter?: undefined | ((items: THREE.Intersection[], ctx: Context) => THREE.Intersection[])
}

export type FilterFunction = (items: THREE.Intersection[], ctx: Context) => THREE.Intersection[]

export type ComputeFunction = (event: DomEvent, ctx: Context) => void

export type Events = {
  click: IntersectionEvent<MouseEvent>
  contextmenu: IntersectionEvent<MouseEvent>
  dblclick: IntersectionEvent<MouseEvent>
  wheel: IntersectionEvent<WheelEvent>
  pointerup: IntersectionEvent<PointerEvent>
  pointerdown: IntersectionEvent<PointerEvent>
  pointerover: IntersectionEvent<PointerEvent>
  pointerout: IntersectionEvent<PointerEvent>
  pointerenter: IntersectionEvent<PointerEvent>
  pointerleave: IntersectionEvent<PointerEvent>
  pointermove: IntersectionEvent<PointerEvent>
  pointermissed: MouseEvent
}
