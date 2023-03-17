
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { threeInstance, Html, update } from '../main'

const meta: Meta = {
  title: 'HTML',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { Html } from 'trzy'

new Html({
  el: document.querySelector('el')
  camera,
  canvas,
  object3D
})

</script>
        `,
      }
    }
  }
}

export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/html/api/csf
 * to learn how to use render functions.
 */
export const Primary: StoryObj = {
  render: () => {
    const container = document.createElement('div')
    container.style.cssText = 'position: relative; width: 100%; height: 400px;'

    const { scene, camera, canvas, run } = threeInstance()
    container.append(canvas)

    new OrbitControls(camera, canvas)

    scene.add(new THREE.AmbientLight(undefined, 0.2))

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const cubes: THREE.Mesh[] = []

    for (let i = 0; i < 6; i += 1) {
      const el = document.createElement('div')
      container.append(el)
      el.innerHTML = `Cube ${i}`
      el.style.cssText = 'position: absolute; top: 0; left: 0; background: #eee; padding: 0.5rem 1rem;'

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshStandardMaterial(),
      )
      cube.position.set((i - 3) * 2, 0, 0)
      scene.add(cube)
      cubes.push(cube)

      new Html({ camera, canvas, el, object3D: cube })
    }

    scene.add(new THREE.AxesHelper())

    update(() => {
      for (let i = 0; i < 6; i += 1) {
        cubes[i]!.rotation.y += 0.01
      }
    })

    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

   
    canvas.style.cssText = 'width: 100%; height: 100%;'

    run()

    return container
  },
}
