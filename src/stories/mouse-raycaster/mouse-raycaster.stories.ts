
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { three, MouseRaycaster } from '../../main'
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
  const { scene, camera, renderer } = three()

  setup({ controls: true })

  const n = 100
  const cube = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshStandardMaterial(),
    n,
  )
  cube.position.set(0, 0, 0)
  cube.castShadow = cube.receiveShadow = true
  scene.add(cube)

  const m4 = new THREE.Matrix4()
  const m4_2 = new THREE.Matrix4()
  const v3 = new THREE.Vector3()
  const color = new THREE.Color()

  const rows = n / 10
  for (let i = 0; i < n; i += 1) {
    v3.set(i % rows - (rows / 2), 0, Math.floor(i / rows) - (rows / 2))
    m4.setPosition(v3)
    cube.setMatrixAt(i, m4)
    cube.setColorAt(i, color.set('yellow'))
  }

  const raycaster = new MouseRaycaster({ scene, camera, renderer })

  raycaster.on('move', (event) => {
    for (let i = 0; i < n; i += 1) {
      cube.getMatrixAt(i, m4_2)
      m4.makeScale(1, 1, 1)
      m4.setPosition(v3.setFromMatrixPosition(m4_2))
      cube.setMatrixAt(i, m4)
    }

    for (const intersection of event.intersections) {
      const { instanceId } = intersection
      cube.getMatrixAt(instanceId, m4_2)
      m4.makeScale(1.2, 1.2, 1.2)
      m4.setPosition(v3.setFromMatrixPosition(m4_2))
      cube.setMatrixAt(instanceId, m4)
    }

    cube.instanceMatrix.needsUpdate = true
  })

  raycaster.on('click', (event) => {
    for (const intersection of event.intersections) {
      const { instanceId } = intersection
      cube.setColorAt(instanceId, color.set('hotpink'))
    }

    cube.instanceColor!.needsUpdate = true
  })

  return renderer.domElement
}

export const Primary: StoryObj = { render }
