import * as THREE from 'three'
import { resizeObserver } from '../../lib/observers'

const vec = new THREE.Vector3()
const size = new THREE.Vector2()

let observers = 0
let initialized = false

let observer: ResizeObserver
let targetElement: HTMLElement

const root = document.createElement('div')

const mount = (target: HTMLElement) => {
  initialized = true
  targetElement = target
  target.before(root)

  observer = resizeObserver(target, (rect) => {
    size.x = rect.width
    size.y = rect.height
    root.style.cssText = `
      position: absolute;
      top: ${target.offsetTop}px;
      left: ${target.offsetLeft}px;
      height: ${rect?.height}px;
      width: ${rect?.width}px;
      overflow: hidden;
      pointer-events: none;
    `
  })
  observer.observe(target)
}

const destroy = () => {
  targetElement.remove()
  root.remove()
  observer.disconnect()
  initialized = false
}

type Cameras = THREE.PerspectiveCamera | THREE.OrthographicCamera

export class Html {
  element?: HTMLElement | undefined
  object3D?: THREE.Object3D | undefined

  update: (camera: Cameras, renderer: THREE.WebGLRenderer) => void
  dispose: () => void

  constructor (props: {
    element?: HTMLElement
    object3D?: THREE.Object3D
    target?: HTMLElement
  }) {
    const { object3D, target } = props
    let { element } = props

    const container = document.createElement('div')
    container.style.cssText = 'position: absolute; top: 0; left: 0; pointer-events: auto'

    observers += 1

    Object.defineProperty(this, 'element', {
      get () {
        return element
      },
      set (value: HTMLElement | undefined) {
        if (value) {
          container.append(value)
          root.append(container)
        } else {
          element?.remove()
        }
        element = value
      },
      enumerable: true,
      configurable: true,
    })

    this.update = (camera: Cameras, renderer: THREE.WebGLRenderer): void => {
      if (this.element === undefined || this.object3D === undefined) {
        return
      }

      if (!initialized) {
        mount(target ?? renderer.domElement)
      }

      /*
       * Get the normalized screen coordinate of that position
       * x and y will be in the -1 to +1 range with x = -1 being
       * on the left and y = -1 being on the bottom
       */
      vec.setFromMatrixPosition(this.object3D.matrixWorld).project(camera)

      // Convert the normalized position to CSS coordinates
      const x = ((vec.x * 0.5) + 0.5) * size.x
      const y = ((vec.y * -0.5) + 0.5) * size.y

      // Move the elem to that position
      this.element.style.transform = `translate3d(-50%,-50%,0) translate3d(${x}px,${y}px,0)`

      // Set the zIndex for sorting
      this.element.style.zIndex = `${Math.trunc(((-vec.z * 0.5) + 0.5) * 100_000)}`
    }

    this.element = element
    this.object3D = object3D

    this.dispose = () => {
      element?.remove()
      container.remove()

      this.element = undefined
      this.object3D = undefined

      observers -= 1
      if (observers === 0) {
        destroy()
      }
    }
  }
}
