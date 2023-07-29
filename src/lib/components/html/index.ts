import * as THREE from 'three'

const vec = new THREE.Vector3()
const size = new THREE.Vector2()

let observers = 0

let resizeObserver: ResizeObserver

const root = document.createElement('div')

const initialize = (target: HTMLElement) => {
  target.parentElement?.append(root)
  resizeObserver = new ResizeObserver(([entry]) => {
    const rect = entry?.contentRect
    size.x = entry?.contentRect.width ?? 0
    size.y = entry?.contentRect.height ?? 0
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
  resizeObserver.observe(target)
}

export class Html {
  element?: HTMLElement | undefined
  object3D?: THREE.Object3D | undefined

  dispose: () => void

  constructor ({ element, object3D }: {
    element: HTMLElement
    object3D: THREE.Object3D
  }) {
    this.element = element
    this.object3D = object3D

    const container = document.createElement('div')
    container.style.cssText = 'position: absolute; top: 0; left: 0; pointer-events: auto'
    container.append(element)
    root.append(container)

    const update = (renderer: THREE.WebGLRenderer, camera: THREE.Camera): void => {
      if (this.element === undefined || this.object3D === undefined) {
        return
      }

      if (observers === 0) {
        initialize(renderer.domElement)
      }

      observers += 1

      /*
       * Get the normalized screen coordinate of that position
       * x and y will be in the -1 to +1 range with x = -1 being
       * on the left and y = -1 being on the bottom
       * this.object3D.getWorldPosition(vec).project(this.camera)
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

    const afterRender = object3D.onAfterRender

    object3D.onAfterRender = (renderer, scene, camera, geometry, material, group) => {
      update(renderer, camera)
      afterRender?.(renderer, scene, camera, geometry, material, group)
    }

    this.dispose = () => {
      object3D.onAfterRender = afterRender
      this.element = undefined
      this.object3D = undefined
      observers -= 1
      if (observers === 0) {
        resizeObserver.disconnect()
      }
    }
  }
}
