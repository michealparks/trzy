import * as THREE from 'three'
import { MeshDiscardMaterial, shadows } from '../main'
import type { Meta, StoryObj } from '@storybook/html'
import code from './code/discard-material?raw'
import { useTrzy } from '../core'
import { setup } from './lib/setup'
import { floor } from './lib/floor'

const meta: Meta = {
  title: 'Discard Material',
  parameters: {
    docs: { source: { code } },
  },
}

const render = () => {
  setup()
  const { scene, renderer } = useTrzy()

  scene.add(floor())

  const geometry = new THREE.BoxGeometry()
  const material = new MeshDiscardMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  shadows(scene)

  return renderer.domElement
}

export default meta

export const Primary: StoryObj = { render }
