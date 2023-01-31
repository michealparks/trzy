import {
  Object3D,
  Vector3,
  type PerspectiveCamera,
  type OrthographicCamera
} from 'three'
import { removeUpdate, update } from '../main'

const vec = new Vector3()

export interface Props {
  camera: PerspectiveCamera | OrthographicCamera
  canvas: HTMLCanvasElement
  el: HTMLElement
  object3D: Object3D
}

export class Html {
  camera: PerspectiveCamera | OrthographicCamera
  canvas: HTMLCanvasElement
  el: HTMLElement
  object3D: Object3D

  constructor ({
    camera,
    canvas,
    el,
    object3D,
  }: Props) {
    this.el = el
    this.camera = camera
    this.canvas = canvas
    this.object3D = object3D
    
    update(this.handleUpdate)
  }

  handleUpdate = () => {
    // get the normalized screen coordinate of that position
    // x and y will be in the -1 to +1 range with x = -1 being
    // on the left and y = -1 being on the bottom
    vec.copy(this.object3D.position).project(this.camera)

    // convert the normalized position to CSS coordinates
    const x = (vec.x *  0.5 + 0.5) * this.canvas.clientWidth
    const y = (vec.y * -0.5 + 0.5) * this.canvas.clientHeight

    // move the elem to that position
    this.el.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`

    // set the zIndex for sorting
    this.el.style.zIndex = String((-vec.z * 0.5 + 0.5) * 100_000 | 0)
  }

  dispose () {
    removeUpdate(this.handleUpdate)
  }
}
