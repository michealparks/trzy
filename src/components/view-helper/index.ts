import * as THREE from 'three'
import { darkenColor } from '../lib/color'

const color1 = '#ff3653'
const color2 = '#8adb00'
const color3 = '#2c8fff'

const darkColor1 = darkenColor(color1, 50)
const darkColor2 = darkenColor(color2, 50)
const darkColor3 = darkenColor(color3, 50)

const size = 128 * window.devicePixelRatio
const turnRate = 3 * Math.PI // turn rate in angles per second

const q1 = new THREE.Quaternion()
const q2 = new THREE.Quaternion()

const geometry = new THREE.BoxGeometry(0.8, 0.05, 0.05).translate(0.4, 0, 0)

const btnSize = 64

const drawTexture = (sprite: THREE.Sprite) => {
  const { context, text } = sprite.userData as {
    context: CanvasRenderingContext2D
    text: string
  }

  context.beginPath()
  context.arc(btnSize / 2, btnSize / 2, btnSize / 4, 0, 2 * Math.PI)
  context.closePath()
  context.fillStyle = sprite.userData.color
  context.fill()

  if (text !== '') {
    context.font = 'bold 23px system-ui'
    context.textAlign = 'center'
    context.fillStyle = '#000000'
    context.fillText(text, 32, 41)
  }

  sprite.material.needsUpdate = true
  sprite.material.map!.needsUpdate = true
}

const createAxis = (color: string) => {
  const material = new THREE.MeshBasicMaterial({ color, toneMapped: false })
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}

const createSprite = (color: string, text = '') => {
  const canvas = document.createElement('canvas')
  canvas.width = btnSize
  canvas.height = btnSize

  const context = canvas.getContext('2d')!
  const map = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({ map, toneMapped: false })
  const sprite = new THREE.Sprite(material)

  sprite.userData.color = color
  sprite.userData.text = text
  sprite.userData.context = context

  drawTexture(sprite)

  return sprite
}

export class ViewHelper extends THREE.Object3D {
  isViewHelper = true

  animating = false
  center = new THREE.Vector3()
  point = new THREE.Vector3()
  viewport = new THREE.Vector4()
  targetQuaternion = new THREE.Quaternion()

  radius = 0

  orthoCamera = new THREE.OrthographicCamera(-2, 2, 2, -2, -4, 4)

  axes: readonly [THREE.Mesh, THREE.Mesh, THREE.Mesh]
  btns: readonly [THREE.Sprite, THREE.Sprite, THREE.Sprite, THREE.Sprite, THREE.Sprite, THREE.Sprite]

  camera: THREE.Camera
  renderer: THREE.WebGLRenderer

	constructor(camera: THREE.Camera, renderer: THREE.WebGLRenderer) {
		super()

    this.camera = camera
    this.renderer = renderer

    const mouse = new THREE.Vector2()
    const dummy = new THREE.Object3D()

		this.orthoCamera.position.set(0, 0, 2)

    this.axes = [
      createAxis(color1),
      createAxis(color2),
      createAxis(color3),
    ] as const

    this.btns = [
      createSprite(color1, 'X'),
      createSprite(color2, 'Y'),
      createSprite(color3, 'Z'),
      createSprite(color1),
      createSprite(color2),
      createSprite(color3),
    ] as const

    this.axes[1].rotation.z = Math.PI / 2
		this.axes[2].rotation.y = -Math.PI / 2

    this.btns[0].position.x = 1
		this.btns[1].position.y = 1
		this.btns[2].position.z = 1
		this.btns[3].position.x = -1
		this.btns[4].position.y = -1
		this.btns[5].position.z = -1

    this.btns[3].scale.setScalar(0.8)
    this.btns[4].scale.setScalar(0.8)
    this.btns[5].scale.setScalar(0.8)

		this.add(
      ...this.axes,
      ...this.btns,
    )

    const interactiveObjects: THREE.Object3D[] = [...this.btns]
		const targetPosition = new THREE.Vector3()
    const raycaster = new THREE.Raycaster()

		const handleClick = (event: MouseEvent) => {
			if (this.animating === true) {
        return false
      }

      const { domElement } = renderer
			const rect = domElement.getBoundingClientRect()
      mouse.x = (event.clientX - rect.left - rect.width + 128)
      mouse.y = (event.clientY - rect.top)

      mouse.x = (mouse.x / 128) * 2 - 1
      mouse.y = (mouse.y / 128) * 2 - 1
 
			raycaster.setFromCamera(mouse, this.orthoCamera)

			const intersects = raycaster.intersectObjects(interactiveObjects)
      const [intersection] = intersects

			if (intersection) {
				const object = intersection.object

				prepareAnimationData(object, this.center)

				this.animating = true

				return true
			} else {
				return false
			}
		}

    renderer.domElement.addEventListener('click', handleClick)

    const euler = new THREE.Euler()

		const prepareAnimationData = (object: THREE.Object3D, focusPoint: THREE.Vector3) => {
      if (object.position.x === 1) {
        targetPosition.set(1, 0, 0)
        this.targetQuaternion.setFromEuler(euler.set(0, Math.PI * 0.5, 0))
      } else if (object.position.y === 1) {
        targetPosition.set(0, 1, 0)
				this.targetQuaternion.setFromEuler(euler.set(-Math.PI * 0.5, 0, 0))
      } else if (object.position.z === 1) {
        targetPosition.set(0, 0, 1)
        this.targetQuaternion.setFromEuler(euler.set(0, 0, 0))
      } else if (object.position.x === -1) {
        targetPosition.set(-1, 0, 0)
				this.targetQuaternion.setFromEuler(euler.set(0, -Math.PI * 0.5, 0))
      } else if (object.position.y === -1) {
        targetPosition.set(0, -1, 0)
				this.targetQuaternion.setFromEuler(euler.set(Math.PI * 0.5, 0, 0))
      } else if (object.position.z === -1) {
        targetPosition.set(0, 0, -1)
				this.targetQuaternion.setFromEuler(euler.set(0, Math.PI, 0))
      }

			this.radius = camera.position.distanceTo(focusPoint)
			targetPosition.multiplyScalar(this.radius).add(focusPoint)

			dummy.position.copy(focusPoint)

			dummy.lookAt(camera.position)
			q1.copy(dummy.quaternion)

			dummy.lookAt(targetPosition)
			q2.copy(dummy.quaternion)
		}
	}

  render = (delta: number) => {
    if (this.animating) {
      const step = delta * turnRate / 1000

			// animate position by doing a slerp and then scaling the position on the unit sphere
			q1.rotateTowards(q2, step)

			this.camera.position
        .set(0, 0, 1)
        .applyQuaternion(q1)
        .multiplyScalar(this.radius)
        .add(this.center)

			// animate orientation
			this.camera.quaternion.rotateTowards(this.targetQuaternion, step)

			if (q1.angleTo(q2) === 0) {
				this.animating = false
			}
    }
  
    this.quaternion.copy(this.camera.quaternion).invert()
    this.updateMatrixWorld()

    const { x, y, z } = this.point.set(0, 0, 1).applyQuaternion(this.camera.quaternion)

    this.btns[0].userData.color = x >= 0 ? color1 : darkColor1
    this.btns[1].userData.color = y >= 0 ? color2 : darkColor2
    this.btns[2].userData.color = z >= 0 ? color3 : darkColor3
    this.btns[3].userData.color = x < 0 ? color1 : darkColor1
    this.btns[4].userData.color = y < 0 ? color2 : darkColor2
    this.btns[5].userData.color = z < 0 ? color3 : darkColor3

    for (const btn of this.btns) {
      drawTexture(btn)
    }

    {
      const x = (this.renderer.domElement.offsetWidth * window.devicePixelRatio) - size
      const y = (this.renderer.domElement.offsetHeight * window.devicePixelRatio) - size

      const { autoClear, outputColorSpace } = this.renderer
      this.renderer.autoClear = false
      this.renderer.outputColorSpace = 'srgb-linear'
      this.renderer.getViewport(this.viewport)
      this.renderer.setViewport(x, y, size, size)
      this.renderer.render(this, this.orthoCamera)
      this.renderer.setViewport(this.viewport)
      this.renderer.autoClear = autoClear
      this.renderer.outputColorSpace = outputColorSpace
    }
  }

  dispose = () => {
    for (let item of [...this.axes, ...this.btns]) {
      if (item instanceof THREE.Sprite) {
        item.material.map?.dispose()
      }
      
      if (item.material instanceof THREE.Material) {
        item.material.dispose()
      }
    }
  }
}
