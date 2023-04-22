
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { three, MouseRaycaster, bvhRaycast } from '../../main'
import code from './code?raw'
import { setup } from '../lib'

const meta: Meta = {
  title: 'Mouse Raycaster',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  bvhRaycast()

  const { scene, camera, canvas, renderer, update } = three()

  setup({ scene, camera, canvas, update, controls: true }).then(() => {
    let scale = new THREE.Vector3(1, 1, 1)
    let hovered = false
    let clicked = false
    let lerpSpeed = 0.1
  
    const obj = scene.getObjectByName('Strawberry')!
    obj.traverse(child => (child as THREE.Mesh).geometry?.computeBoundsTree?.())
    const raycaster = new MouseRaycaster({ scene, camera, renderer, recursive: true, objects: [obj] })

    raycaster.on('move', (event) => {
      if (event.intersections.length > 0) {
        lerpSpeed = 0.1
        scale.setScalar(1.2)
      } else if (!clicked) {
        lerpSpeed = 0.1
        scale.setScalar(1)
      }

      if (event.intersections.length > 0) {
        hovered = true
      } else {
        hovered = false
      }
    })

    raycaster.on('click', (event) => {
      if (event.intersections.length === 0) return
  
      lerpSpeed = 0.2
      scale.setScalar(scale.x === 1.7 ? hovered ? 1.2 : 1 : 1.7)
    })

    update(() => obj.scale.lerp(scale, lerpSpeed))
  })

  return canvas
}

export const Primary: StoryObj = { render }
