
import * as THREE from 'three'
import { interactivity, shadows } from '../main'
import type { Meta, StoryObj } from '@storybook/html'
import { setup } from './lib/setup'
import { useFrame, useTrzy } from '../core'
import code from './code/interactivity?raw'

const meta: Meta = {
  title: 'Interactivity',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { scene, camera, renderer } = useTrzy()

  interactivity({ target: renderer.domElement, camera: camera.current })
  setup()

  const cubes: THREE.Mesh[] = []

  for (let index = 0; index < 20; index += 1) {
    const material = new THREE.MeshStandardMaterial({ color: 'yellow' })
    const geometry = new THREE.BoxGeometry()
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(THREE.MathUtils.randInt(-2, 2), -0.25, THREE.MathUtils.randInt(-2, 2))

    mesh.userData.rotation = {
      y: (Math.random() - 0.5) * 0.1,
      z: (Math.random() - 0.5) * 0.1,
    }

    scene.add(mesh)
    cubes.push(mesh)

    mesh.addEventListener('pointerenter', (event) => {
      event.stopPropagation()
      mesh.material.color.set('hotpink')
    })
    mesh.addEventListener('pointerleave', () => mesh.material.color.set('yellow'))
    mesh.addEventListener('click', () => (mesh.material.color.set('blue')))
  }

  shadows(scene)

  useFrame(() => {
    cubes.forEach((cube) => {
      cube.rotation.y += cube.userData.rotation.y
      cube.rotation.z += cube.userData.rotation.z
    })
  })

  return renderer.domElement
}

export const Primary: StoryObj = { render }
