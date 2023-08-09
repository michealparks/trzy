import * as THREE from 'three'
import { resizeObserver } from '$lib/lib/observers'
import { Html } from '$lib'
import { ButtonMaterial } from './sprite'

const getAxisMaterial = (color: THREE.ColorRepresentation) => {
  return new THREE.MeshBasicMaterial({
    color: new THREE.Color(color),
    toneMapped: false,
  })
}

interface Options {
  axes?: 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx'
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
}

const colors = { x: '#ff3653', y: '#8adb00', z: '#2c8fff' }

export class ViewHelper extends THREE.Object3D {
  isViewHelper = true

  animating = false
  center = new THREE.Vector3()

  /**
   * Turn rate in angles per second. Default is `2 * Math.PI`
   */
  turnRate = 2 * Math.PI

  dispose: () => void

  constructor (camera: THREE.PerspectiveCamera | THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, options: Options = {}) {
    super()

    // eslint-disable-next-line unicorn/prefer-spread
    const axesList = (options.axes ?? 'xyz').split('') as [string, string, string]
    const axisLetters = ['x', 'y', 'z', 'x', 'y', 'z'] as const
    const { position = 'top-right' } = options

    const canvas = renderer.domElement
    const size = new THREE.Vector2()
    const dpr = window.devicePixelRatio
    const targetPosition = new THREE.Vector3()
    const targetQuaternion = new THREE.Quaternion()

    const clock = new THREE.Clock()
    const q1 = new THREE.Quaternion()
    const q2 = new THREE.Quaternion()
    const euler = new THREE.Euler()
    const viewport = new THREE.Vector4()
    let radius = 0

    const geometry = new THREE.BoxGeometry(0.5, 0.05, 0.05).translate(0.4, 0, 0)
    const axes = axesList.map((axis) => new THREE.Mesh(geometry, getAxisMaterial(colors[axis as 'x' | 'y' | 'z'])))
    const dummy = new THREE.Object3D()

    const orthoCamera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0, 4)
    orthoCamera.position.set(0, 0, 2)

    const point = new THREE.Vector3()
    const dim = 220

    const target = document.createElement('div')
    canvas.before(target)

    axes[1]?.rotation.set(0, 0, Math.PI / 2)
    axes[2]?.rotation.set(0, -Math.PI / 2, 0)

    axes.forEach((axis) => this.add(axis))

    const helpers = axisLetters.map((axis, index) => {
      const sign = index > 2 ? -1 : 1
      const material = new ButtonMaterial(colors[axesList[index % 3]! as 'x' | 'y' | 'z'], sign === 1 ? axesList[index] : undefined)
      const sprite = new THREE.Sprite(material)
      sprite.position[axis] = sign
      sprite.scale.setScalar(sign === 1 ? 1 : 0.8)
      sprite.userData = { name: axis, sign }
      return sprite
    })

    helpers.forEach((helper) => this.add(helper))

    const htmls = helpers.map((object3D) => {
      const element = document.createElement('div')
      const axis = object3D.userData.name
      const sign = object3D.userData.sign === 1 ? '' : '-'
      element.role = 'button'
      element.ariaLabel = `${sign}${axis}`
      element.dataset.axis = axis
      element.dataset.sign = sign
      element.style.cssText = `
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        cursor: pointer;
      `
      return new Html({ element, object3D, target })
    })

    const observer = resizeObserver(canvas, (rect) => {
      size.x = rect.width
      size.y = rect.height

      target.style.cssText = `
        position: absolute;
        top: ${canvas.offsetTop}px;
        left: ${canvas.offsetLeft + (rect.width - (dim / dpr))}px;
        width: ${dim / dpr}px;
        height: ${dim / dpr}px;
      `
    })

    let oldClear = false

    const oldRender = renderer.render

    // eslint-disable-next-line consistent-return
    const animationAngle = (axis: 'x' | 'y' | 'z' | '-x' | '-y' | '-z') => {
      switch (axis) {
      case 'x': { return euler.set(0, Math.PI * 0.5, 0) }
      case 'y': { return euler.set(-Math.PI * 0.5, 0, 0) }
      case 'z': { return euler.set(0, 0, 0) }
      case '-x': { return euler.set(0, -Math.PI * 0.5, 0) }
      case '-y': { return euler.set(Math.PI * 0.5, 0, 0) }
      case '-z': { return euler.set(0, Math.PI, 0) }
      }
    }

    const render = () => {
      this.quaternion.copy(camera.quaternion).invert()

      point.set(0, 0, 1).applyQuaternion(camera.quaternion)

      axisLetters.forEach((letter, index) => {
        const helper = helpers[index]

        if (helper === undefined) {
          return
        }

        if (index < 3) {
          helper.material.opacity = point[letter] >= 0 ? 1 : 0.5
        } else {
          helper.material.opacity = point[letter] < 0 ? 1 : 0.5
        }
      })

      oldClear = renderer.autoClear
      renderer.autoClear = false

      renderer.clearDepth()
      renderer.getViewport(viewport)

      const width = size.x * dpr
      const height = size.y * dpr

      switch (position) {
      case 'top-right': {
        renderer.setViewport(width - dim, height - dim, dim, dim)
        break
      }
      case 'bottom-right': {
        renderer.setViewport(width - dim, 0, dim, dim)
        break
      }
      case 'bottom-left': {
        renderer.setViewport(0, 0, dim, dim)
        break
      }
      case 'top-left': {
        renderer.setViewport(0, height - dim, dim, dim)
        break
      }
      }

      oldRender.call(renderer, this, orthoCamera)
      renderer.setViewport(viewport)

      // Restore default
      renderer.autoClear = oldClear

      htmls.forEach((html) => html.update(orthoCamera, renderer))
    }

    const update = () => {
      const delta = clock.getDelta()
      const step = delta * this.turnRate

      // Animate position by doing a slerp and then scaling the position on the unit sphere
      q1.rotateTowards(q2, step)
      camera.position.set(0, 0, 1)
        .applyQuaternion(q1)
        .multiplyScalar(radius)
        .add(this.center)

      // Animate orientation
      camera.quaternion.rotateTowards(targetQuaternion, step)

      if (q1.angleTo(q2) === 0) {
        this.animating = false
        clock.stop()
      }
    }

    const prepareAnimationData = (axis: 'x' | 'y' | 'z', sign: '' | '-', focusPoint: THREE.Vector3) => {
      targetPosition.set(0, 0, 0)
      targetPosition[axis] = sign === '-' ? -1 : 1
      targetQuaternion.setFromEuler(animationAngle(`${sign}${axis}`))

      radius = camera.position.distanceTo(focusPoint)
      targetPosition.multiplyScalar(radius).add(focusPoint)

      dummy.position.copy(focusPoint)

      dummy.lookAt(camera.position)
      q1.copy(dummy.quaternion)

      dummy.lookAt(targetPosition)
      q2.copy(dummy.quaternion)
    }

    const handleClick = (event: MouseEvent) => {
      if (this.animating) {
        return
      }

      const { axis, sign } = (event.currentTarget as HTMLElement).dataset

      prepareAnimationData(axis as 'x' | 'y' | 'z', sign as '' | '-', this.center)

      clock.start()
      this.animating = true
    }

    htmls.forEach((html) => html.element?.addEventListener('click', handleClick))

    renderer.render = (...args) => {
      oldRender.call(renderer, ...args)
      render()
      if (this.animating) {
        update()
      }
    }

    this.dispose = () => {
      renderer.render = oldRender

      htmls.forEach((html) => {
        html.element?.remove()
        html.dispose()
      })

      target.removeEventListener('click', handleClick)
      target.remove()

      observer.disconnect()

      geometry.dispose()

      axes.forEach((axis) => axis.material.dispose())

      helpers.forEach((helper) => {
        helper.material.map?.dispose()
        helper.material.dispose()
      })
    }
  }
}
