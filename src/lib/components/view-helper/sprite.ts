import * as THREE from 'three'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')!

canvas.width = canvas.height = 64

export class ButtonMaterial extends THREE.SpriteMaterial {
  constructor (color?: THREE.Color, text?: string | undefined) {
    context.clearRect(0, 0, 64, 64)
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

    const image = document.createElement('img')
    image.src = canvas.toDataURL()

    const map = new THREE.Texture(image)
    map.needsUpdate = true
    map.colorSpace = THREE.SRGBColorSpace
    document.body.append(image)
    super({ map, toneMapped: false })
  }
}
