import * as THREE from 'three'
import type { Meta, StoryObj } from '@storybook/html'
import { MouseRaycaster, three } from '../../main'
import { bvhRaycast } from '../bvh'
import code from './code?raw'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Mouse Raycaster',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  bvhRaycast()

  const { scene, camera, canvas, renderer, update } = three()

  setup().then(() => {
    const scale = new THREE.Vector3(1, 1, 1)

    let hovered = false
    let clicked = false
    let lerpSpeed = 0.1

    const object = scene.getObjectByName('Strawberry')!
    object.traverse((child) => (child as THREE.Mesh).geometry?.computeBoundsTree?.())

    const raycaster = new MouseRaycaster({ renderer })
    raycaster.recursive = true
    raycaster.objects = [object]
    raycaster.camera = camera.current

    raycaster.on('move', (event) => {
      if (event.intersections.length > 0) {
        lerpSpeed = 0.1
        scale.setScalar(0.12)
      } else if (!clicked) {
        lerpSpeed = 0.1
        scale.setScalar(0.1)
      }

      hovered = event.intersections.length > 0
    })

    raycaster.on('click', (event) => {
      if (event.intersections.length === 0) {
        return
      }

      lerpSpeed = 0.2
      scale.setScalar(scale.x === 0.17 ? (hovered ? 0.12 : 0.1) : 0.17)
    })

    update(() => object.scale.lerp(scale, lerpSpeed))
  })

  return canvas
}

export const Primary: StoryObj = { render }
