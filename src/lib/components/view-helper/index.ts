import * as THREE from 'three'

const getAxisMaterial = (color: THREE.Color) => {
  return new THREE.MeshBasicMaterial({ color, toneMapped: false })
}

const getSpriteMaterial = (color?: THREE.Color, text?: string | undefined) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  canvas.width = 64
  canvas.height = 64

  if (context !== null) {
    context.beginPath()
    context.arc(32, 32, 16, 0, 2 * Math.PI)
    context.closePath()
    context.fillStyle = color?.getStyle() ?? ''
    context.fill()

    if (text !== undefined) {
      context.font = '24px system-ui'
      context.textAlign = 'center'
      context.fillStyle = '#000000'
      context.fillText(text.toUpperCase(), 32, 41)
    }
  }

  const map = new THREE.CanvasTexture(canvas)

  return new THREE.SpriteMaterial({ map, toneMapped: false })
}

interface Options {
  colors?: [x: string, y: string, z: string]
}

export class ViewHelper extends THREE.Object3D {
  isViewHelper = true
  animating = false
  center = new THREE.Vector3()

  /**
   * Turn rate in angles per second. Default is `2 * Math.PI`
   */
  turnRate = 2 * Math.PI

  dispose: () => void

  constructor (camera: THREE.Camera, renderer: THREE.WebGLRenderer, options: Options = {}) {
    super()

    const axisLetters = ['x', 'y', 'z', 'x', 'y', 'z'] as const

    const canvas = renderer.domElement
    const colorHexes = options.colors ?? ['#ff3653', '#8adb00', '#2c8fff']
    const targetPosition = new THREE.Vector3()
    const targetQuaternion = new THREE.Quaternion()

    const clock = new THREE.Clock()
    const q1 = new THREE.Quaternion()
    const q2 = new THREE.Quaternion()
    const euler = new THREE.Euler()
    const viewport = new THREE.Vector4()
    let radius = 0

    const geometry = new THREE.BoxGeometry(0.8, 0.05, 0.05).translate(0.4, 0, 0)
    const colors = colorHexes.map((hex) => new THREE.Color(hex))
    const axes = colors.map((color) => new THREE.Mesh(geometry, getAxisMaterial(color)))

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const dummy = new THREE.Object3D()

    const orthoCamera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0, 4)
    orthoCamera.position.set(0, 0, 2)

    axes[1]?.rotation.set(0, 0, Math.PI / 2)
    axes[2]?.rotation.set(0, -Math.PI / 2, 0)

    axes.forEach((axis) => this.add(axis))

    const helpers = axisLetters.map((name, index) => {
      const sign = index > 2 ? -1 : 1
      const material = getSpriteMaterial(colors[index % 3], sign === 1 ? name : undefined)
      const sprite = new THREE.Sprite(material)
      sprite.position[name] = sign
      sprite.scale.setScalar(sign === 1 ? 1 : 0.8)
      sprite.userData = { name, sign }
      return sprite
    })

    helpers.forEach((helper) => this.add(helper))

    const point = new THREE.Vector3()
    const dim = 220

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
      renderer.setViewport((canvas.offsetWidth * window.devicePixelRatio) - dim, 0, dim, dim)
      oldRender.call(renderer, this, orthoCamera)
      renderer.setViewport(viewport)

      // Restore default
      renderer.autoClear = oldClear
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
      }
    }

    const prepareAnimationData = (object: THREE.Object3D, focusPoint: THREE.Vector3) => {
      targetPosition.set(0, 0, 0)
      targetPosition[object.userData.name as 'x' | 'y' | 'z'] = object.userData.sign as 1 | -1
      targetQuaternion.setFromEuler(animationAngle(object.userData.name))

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

      const rect = canvas.getBoundingClientRect()
      const offsetX = rect.left + ((canvas.offsetWidth) - dim)
      const offsetY = rect.top + ((canvas.offsetHeight) - dim)

      pointer.x = (((event.clientX - offsetX) / (rect.right - offsetX)) * 2) - 1
      pointer.y = -(((event.clientY - offsetY) / (rect.bottom - offsetY)) * 2) + 1

      raycaster.setFromCamera(pointer, orthoCamera)

      const intersects = raycaster.intersectObjects(helpers)

      const [intersection] = intersects

      if (intersection === undefined) {
        return
      }

      prepareAnimationData(intersection.object, this.center)

      this.animating = true
    }

    renderer.render = (...args) => {
      oldRender.call(renderer, ...args)
      render()
      if (this.animating) {
        update()
      }
    }

    canvas.addEventListener('click', handleClick)

    this.dispose = () => {
      canvas.removeEventListener('click', handleClick)
      renderer.render = oldRender
      geometry.dispose()

      axes.forEach((axis) => axis.material.dispose())
      helpers.forEach((helper) => {
        helper.material.map?.dispose()
        helper.material.dispose()
      })
    }
  }
}
