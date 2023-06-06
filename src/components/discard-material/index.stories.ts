import * as THREE from 'three'
import type { Meta, StoryObj } from '@storybook/html'
import { MeshDiscardMaterial, three } from '../../main'
import code from './code?raw'

const meta: Meta = {
  title: 'Discard Material',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  const { scene, canvas } = three()
  const geometry = new THREE.BoxGeometry()
  const material = new MeshDiscardMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  return canvas
}

export default meta

export const Primary: StoryObj = { render }
