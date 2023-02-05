import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  Vector2,
  Vector3,
  Matrix4,
  type PerspectiveCamera,
  type OrthographicCamera,
} from 'three'

interface Axis {
  axis: 'x' | 'y' | 'z' | '-x' | '-y' | '-z'
  color: string[]
  direction: Vector3
  label?: string
  line?: number
  position: Vector3
  size: number
}

// Generate list of axes
const colors = {
  x: ['#f73c3c', '#942424'],
  y: ['#6ccb26', '#417a17'],
  z: ['#178cf0', '#0e5490'],
}

// Internals
const vec = new Vector3()
const invRotMat = new Matrix4()
const mouse = new Vector3()
const rotateStart = new Vector2()
const rotateEnd = new Vector2()
const rotateDelta = new Vector2()

export class OrbitControlsGizmo {
  dispose: () => void
  camera: PerspectiveCamera | OrthographicCamera
  orbitControls: OrbitControls

  constructor (props: {
    camera: PerspectiveCamera | OrthographicCamera
    el: HTMLElement
    orbitControls: OrbitControls
    axes?: string
    size?: number
  }) {
    this.camera = props.camera
    this.orbitControls = props.orbitControls

    const unscaledSize = props.size ?? 80
    const size = unscaledSize * window.devicePixelRatio
    const primarySize = 8 * window.devicePixelRatio
    const secondarySize = 6 * window.devicePixelRatio
    const padding = 8 * window.devicePixelRatio
    const line = 2 * window.devicePixelRatio
    const center = new Vector3(size / 2, size / 2, 0)

    let selectedAxis: Axis | null = null
    let isDragging = false
    let rect: DOMRect
    let orbitState = false

    const canvas = document.createElement('canvas')
    canvas.style.width = `${size / 2}px`
    canvas.style.height = `${size / 2}px`
    canvas.width = size
    canvas.height = size
    canvas.className = 'orbit-controls-gizmo'
    props.el.append(canvas)

    const labels = (props.axes ?? 'xyz').toUpperCase().split('')

    const axes: Axis[] = [
      { axis: 'x', color: colors.x, direction: new Vector3(1, 0, 0), label: labels[0], line, position: new Vector3(), size: primarySize },
      { axis: 'y', color: colors.y, direction: new Vector3(0, 1, 0), label: labels[1], line, position: new Vector3(), size: primarySize },
      { axis: 'z', color: colors.z, direction: new Vector3(0, 0, 1), label: labels[2], line, position: new Vector3(), size: primarySize },
      { axis: '-x', color: colors.x, direction: new Vector3(-1, 0, 0), position: new Vector3(), size: secondarySize },
      { axis: '-y', color: colors.y, direction: new Vector3(0, -1, 0), position: new Vector3(), size: secondarySize },
      { axis: '-z', color: colors.z, direction: new Vector3(0, 0, -1), position: new Vector3(), size: secondarySize },
    ]

    const context = canvas.getContext('2d')!

    const drawCircle = (point: Vector3, radius = 10, color = '#FF0000') => {
      context.beginPath()
      context.arc(point.x, point.y, radius, 0, 2 * Math.PI, false)
      context.fillStyle = color
      context.fill()
      context.closePath()
    }
  
    const drawLine = (point1: Vector3, point2: Vector3, width = 1, color = '#FF0000') => {
      context.beginPath()
      context.moveTo(point1.x, point1.y)
      context.lineTo(point2.x, point2.y)
      context.lineWidth = width
      context.strokeStyle = color
      context.stroke()
      context.closePath()
    }

    const drawLayers = (clear: boolean) => {
      if (clear) {
        context.clearRect(0, 0, canvas.width, canvas.height)
      }
  
      // For each layer, draw the axis
      for (let i = 0, length = axes.length; i < length; i += 1) {
        const axis = axes[i]!
  
        // Set the color
        const highlight = selectedAxis === axis
        const color = (axis.position.z >= -0.01)
          ? axis.color[0]
          : axis.color[1]
  
        // Draw the line that connects it to the center if enabled
        if (axis.line) {
          drawLine(center, axis.position, axis.line, color)
        }
  
        // Draw the circle for the axis
        drawCircle(axis.position, axis.size, highlight ? '#FFFFFF' : color)
  
        // Write the axis label (X,Y,Z) if provided
        if (axis.label) {
          context.font = `bold ${12 * window.devicePixelRatio}px monospace`
          context.fillStyle = '#222222'
          context.textBaseline = 'middle'
          context.textAlign = 'center'
          context.fillText(axis.label, axis.position.x, axis.position.y)
        }
      }
    }  

    const setAxisPosition = (axis: Axis) => {
      const position = axis.direction.clone().applyMatrix4(invRotMat)
      axis.position.set(
        (position.x * (center.x - (axis.size / 2) - padding)) + center.x,
        center.y - (position.y * (center.y - (axis.size / 2) - padding)),
        position.z
      )
    }

    const update = () => {
      this.camera.updateMatrix()
      invRotMat.extractRotation(this.camera.matrix).invert()
  
      for (let i = 0, length = axes.length; i < length; i += 1) {
        setAxisPosition(axes[i]!)
      }
  
      // Sort the layers where the +Z position is last so its drawn on top of anything below it
      axes.sort((a, b) => ((a.position.z > b.position.z) ? 1 : -1))
  
      // Draw the layers
      drawLayers(true)
    }

    const onDrag = (e: PointerEvent) => {
      if (!isDragging) {
        canvas.classList.add('dragging')
      }
  
      isDragging = true
  
      selectedAxis = null
  
      rotateEnd.set(e.clientX, e.clientY)
  
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(0.5)
  
      rotateStart.copy(rotateEnd)
    }

    const onPointerUp = () => {
      setTimeout(() => {
        isDragging = false
      }, 0)
      canvas.classList.remove('dragging')
      this.orbitControls.enabled = orbitState
      window.removeEventListener('pointermove', onDrag, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }

    const onPointerEnter = () => {
      rect = canvas.getBoundingClientRect()
    }

    const onPointerMove = (e?: PointerEvent) => {
      if (isDragging) {
        return
      }
  
      const currentAxis = selectedAxis
  
      selectedAxis = null
      if (e !== undefined) {
        mouse.set(e.clientX - rect.left, e.clientY - rect.top, 0)
      }
  
      // Loop through each layer
      for (let i = 0, length = axes.length; i < length; i += 1) {
        const axis = axes[i]!
        vec.copy(axis.position).divideScalar(window.devicePixelRatio)
        const distance = mouse.distanceTo(vec)
  
        if (distance < axis.size) {
          selectedAxis = axis
        }
      }
  
      if (currentAxis !== selectedAxis) {
        drawLayers(false)
      }
    }

    const onPointerDown = (e: PointerEvent) => {
      rotateStart.set(e.clientX, e.clientY)
      orbitState = this.orbitControls.enabled
      this.orbitControls.enabled = false
      window.addEventListener('pointermove', onDrag, false)
      window.addEventListener('pointerup', onPointerUp, false)
    }

    const onMouseClick = () => {
      if (isDragging || !selectedAxis) {
        return
      }
  
      const vec = selectedAxis.direction.clone()
      const distance = this.camera.position.distanceTo(this.orbitControls.target)
      vec.multiplyScalar(distance)
  
      const duration = 400
      const start = performance.now()
      const maxAlpha = 1
  
      const loop = () => {
        const now = performance.now()
        const delta = now - start
        const alpha = Math.min(delta / duration, maxAlpha)
        this.camera.position.lerp(vec, alpha)
        this.orbitControls.update()
  
        if (alpha !== maxAlpha) {
          requestAnimationFrame(loop)
          return
        }
  
        onPointerMove()
      }
  
      loop()
  
      selectedAxis = null
    }

    this.orbitControls.addEventListener('change', update)
    this.orbitControls.addEventListener('start', () => canvas.classList.add('inactive'))
    this.orbitControls.addEventListener('end', () => canvas.classList.remove('inactive'))

    canvas.addEventListener('pointerdown', onPointerDown, false)
    canvas.addEventListener('pointerenter', onPointerEnter, false)
    canvas.addEventListener('pointermove', onPointerMove, false)
    canvas.addEventListener('click', onMouseClick, false)

    update()
  
    this.dispose = () => {
      this.orbitControls.removeEventListener('change', update)
      this.orbitControls.removeEventListener('start', () => canvas.classList.add('inactive'))
      this.orbitControls.removeEventListener('end', () => canvas.classList.remove('inactive'))
  
      canvas.removeEventListener('pointerdown', onPointerDown, false)
      canvas.removeEventListener('pointerenter', onPointerEnter, false)
      canvas.removeEventListener('pointermove', onPointerMove, false)
      canvas.removeEventListener('click', onMouseClick, false)
      window.removeEventListener('pointermove', onDrag, false)
      window.removeEventListener('pointerup', onPointerUp, false)
  
      canvas.remove()
    }
  }
}
