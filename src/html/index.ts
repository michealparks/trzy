import {
  Object3D,
  Vector3,
  type PerspectiveCamera,
  type OrthographicCamera
} from 'three'

type Cameras = PerspectiveCamera | OrthographicCamera

const vec = new Vector3()

export interface Props {
  el: HTMLElement
  object3D: Object3D
  camera: Cameras
  canvas: HTMLCanvasElement
}

export const html = ({
  el,
  object3D,
  camera,
  canvas
}: Props) => {
  const update = () => {
    // get the normalized screen coordinate of that position
    // x and y will be in the -1 to +1 range with x = -1 being
    // on the left and y = -1 being on the bottom
    vec.copy(object3D.position).project(camera)

    // convert the normalized position to CSS coordinates
    const x = (vec.x *  0.5 + 0.5) * canvas.clientWidth
    const y = (vec.y * -0.5 + 0.5) * canvas.clientHeight

    // move the elem to that position
    el.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`

    // set the zIndex for sorting
    el.style.zIndex = String((-vec.z * 0.5 + 0.5) * 100_000 | 0)
  }

  return { update }
}
