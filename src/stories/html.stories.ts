
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
...

const el = document.createElement('div')
container.append(el)
el.innerHTML = 'CUBE'

const object3D = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial(),
)
scene.add(object3D)

new Html({ camera, canvas, el, object3D })

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

    const { scene, camera, canvas } = threeInstance()
    container.append(canvas)

    const el = document.createElement('div')
    container.append(el)
    el.innerHTML = 'CUBE'

    new OrbitControls(camera, canvas)

    scene.add(new THREE.AmbientLight(undefined, 0.2))

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial(),
    )
    cube.add(new THREE.AxesHelper())
    cube.position.set(1, 0, 1)

    update(() => {
      cube.rotation.y += 0.01
    })

    new Html({ camera, canvas, el, object3D: cube })

    scene.add(cube)

    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    el.style.cssText = 'position: absolute; top: 0; left: 0; background: #eee; padding: 0.5rem 1rem;'
    container.style.cssText = 'position: relative; width: 100%; height: 400px;'
    canvas.style.cssText = 'width: 100%; height: 100%;'

    return container
  },
}
