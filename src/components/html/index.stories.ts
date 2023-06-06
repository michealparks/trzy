
import * as THREE from 'three'
import type { Meta, StoryObj } from '@storybook/html'
import { three, Html } from '../../main'
import code from './code?raw'
import { setup } from '../lib'

const meta: Meta = {
  title: 'HTML',
  parameters: {
    docs: { source: { code } }
  }
}

export default meta

const render = () => {
  const { scene, camera, canvas, update } = three()

  setup({ scene, camera, canvas, update, controls: true })

  const container = document.createElement('div')
  container.style.cssText = 'position: relative; width: 100%; height: 400px;'
  container.append(canvas)

  const cubes: THREE.Mesh[] = []
  const htmls: Html[] = []

  const n = 6

  for (let i = 0; i < n; i += 1) {
    const el = document.createElement('div')
    container.append(el)
    el.innerHTML = `Cube ${i}`
    el.style.cssText = `
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `

    const object3D = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial(),
    )
    object3D.position.set(THREE.MathUtils.randInt(-2, 2), -0.25, THREE.MathUtils.randInt(-2, 2))
    scene.add(object3D)
    cubes.push(object3D)

    htmls.push(new Html({ camera: camera.current, canvas, el, object3D }))
  }

  update(() => {
    for (let i = 0; i < n; i += 1) {
      cubes[i]!.rotation.y += 0.01
      htmls[i]!.update()
    }
  })

  return container
}

export const Primary: StoryObj = { render }
