import * as THREE from 'three'
import type { Meta, StoryObj } from '@storybook/html'
import { MouseRaycaster } from '..'
import { bvhRaycast } from '../components/bvh'
import { setup } from './lib/setup'
import { useFrame, useTrzy } from '../core'
import code from './code/mouse-raycaster?raw'
import { strawberry } from './lib/strawberry'

const meta: Meta = {
  title: 'Mouse Raycaster',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  bvhRaycast()
  setup()

  const { scene, camera, renderer } = useTrzy()
  const scale = new THREE.Vector3(1, 1, 1)

  const raycaster = new MouseRaycaster({ renderer })
  raycaster.recursive = true
  raycaster.camera = camera.current

  let hovered = false
  let clicked = false
  let lerpSpeed = 0.1

  strawberry().then((group) => {
    scene.add(group)
    group.traverse((child) => (child as THREE.Mesh).geometry?.computeBoundsTree?.())
    raycaster.objects = [group]

    useFrame(() => group.scale.lerp(scale, lerpSpeed))
  })

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

  return renderer.domElement
}

export const Primary: StoryObj = { render }
