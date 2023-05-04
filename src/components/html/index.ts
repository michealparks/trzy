import * as THREE from 'three'

const vec = new THREE.Vector3()

export class Html {
  camera?: THREE.Camera | undefined
  canvas?: HTMLCanvasElement | undefined
  el?: HTMLElement | undefined
  object3D?: THREE.Object3D | undefined

  constructor ({
    camera,
    canvas,
    el,
    object3D,
  }: {
    camera?: THREE.Camera
    canvas?: HTMLCanvasElement
    el?: HTMLElement
    object3D?: THREE.Object3D
  }) {
    this.el = el
    this.camera = camera
    this.canvas = canvas
    this.object3D = object3D
  }

  update = (): void => {
    if (this.el === undefined) return
    if (this.camera === undefined) return
    if (this.canvas === undefined) return
    if (this.object3D === undefined) return
  
    // get the normalized screen coordinate of that position
    // x and y will be in the -1 to +1 range with x = -1 being
    // on the left and y = -1 being on the bottom
    // this.object3D.getWorldPosition(vec).project(this.camera)
    vec.setFromMatrixPosition(this.object3D.matrixWorld).project(this.camera)

    // convert the normalized position to CSS coordinates
    const x = (vec.x *  0.5 + 0.5) * this.canvas.clientWidth
    const y = (vec.y * -0.5 + 0.5) * this.canvas.clientHeight

    // move the elem to that position
    this.el.style.transform = `translate3d(-50%,-50%,0) translate3d(${x}px,${y}px,0)`

    // set the zIndex for sorting
    this.el.style.zIndex = String((-vec.z * 0.5 + 0.5) * 100_000 | 0)
  }

  dispose (): void {
    this.el = undefined
    this.camera = undefined
    this.canvas = undefined
    this.object3D = undefined
  }
}
