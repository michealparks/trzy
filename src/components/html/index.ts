import * as THREE from 'three'

const vec = new THREE.Vector3()
const size = new THREE.Vector2()

let observers = 0

const resizeObserver = new ResizeObserver(([entry]) => {
  size.x = entry?.contentRect.width ?? 0
  size.y = entry?.contentRect.height ?? 0
})

export class Html {
  el?: HTMLElement | undefined
  object3D?: THREE.Object3D | undefined

  dispose: () => void

  constructor ({ el, object3D }: {
    el: HTMLElement
    object3D: THREE.Object3D
  }) {
    this.el = el
    this.object3D = object3D

    const update = (renderer: THREE.WebGLRenderer, camera: THREE.Camera): void => {
      if (this.el === undefined || this.object3D === undefined) {
        return
      }

      if (observers === 0) {
        resizeObserver.observe(renderer.domElement)
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
      this.el.style.transform = `translate3d(-50%,-50%,0) translate3d(${x}px,${y}px,0)`

      // Set the zIndex for sorting
      this.el.style.zIndex = `${Math.trunc(((-vec.z * 0.5) + 0.5) * 100_000)}`
    }

    const afterRender = object3D.onAfterRender

    object3D.onAfterRender = (...args) => {
      update(args[0], args[2])
      afterRender?.(...args)
    }

    this.dispose = () => {
      object3D.onAfterRender = afterRender
      this.el = undefined
      this.object3D = undefined
      observers -= 1
      if (observers === 0) {
        resizeObserver.disconnect()
      }
    }
  }
}
