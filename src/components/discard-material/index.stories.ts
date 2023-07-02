import * as THREE from 'three'
import { MeshDiscardMaterial } from '../../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code?raw'
import { useTrzy } from '../../core'
import { setup } from '../setup'

const meta: Meta = {
  title: 'Discard Material',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  setup()
  const { scene, renderer } = useTrzy()
  const geometry = new THREE.BoxGeometry()
  const material = new MeshDiscardMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  return renderer.domElement
}

export default meta

export const Primary: StoryObj = { render }
