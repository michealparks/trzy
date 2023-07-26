
import * as THREE from 'three'
import { Html } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { setup } from '../setup'
import { useFrame, useTrzy } from '../../core'

const meta: Meta = {
  title: 'HTML',
  parameters: {
    docs: { source: { code } },
  },
}

export default meta

const render = () => {
  const { scene, renderer } = useTrzy()

  setup()

  const container = document.createElement('div')
  container.style.cssText = 'position: relative; width: 100%; height: 400px;'
  container.append(renderer.domElement)

  const cubes: THREE.Mesh[] = []
  const htmls: Html[] = []

  const n = 6

  for (let index = 0; index < n; index += 1) {
    const element = document.createElement('div')
    container.append(element)
    element.innerHTML = `Cube ${index}`
    element.style.cssText = `
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      padding: 0.25rem 0.5rem;
    `

    const object3D = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial()
    )
    object3D.position.set(THREE.MathUtils.randInt(-2, 2), -0.25, THREE.MathUtils.randInt(-2, 2))
    scene.add(object3D)
    cubes.push(object3D)

    htmls.push(new Html({ el: element, object3D }))
  }

  useFrame(() => {
    cubes.forEach((cube) => (cube.rotation.y += 0.01))
  })

  return container
}

export const Primary: StoryObj = { render }
