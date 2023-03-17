
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { shadows } from '../lib/shadows'
import { threeInstance, softShadows, update } from '../main'

const meta: Meta = {
  title: 'Soft Shadows',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { softShadows } from 'trzy'

softShadows()

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
    softShadows()

    const { scene, camera, canvas, run } = threeInstance({
      shadowMap: THREE.BasicShadowMap
    })

    new OrbitControls(camera, canvas)

    scene.add(camera)
    scene.add(new THREE.AmbientLight(undefined, 0.5))

    const light = new THREE.DirectionalLight(undefined, 1)
    light.position.set(2, 3, -2)
    light.lookAt(0, 0, 0)
    scene.add(light)
    
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial(),
    )
    cube.add(new THREE.AxesHelper())
    scene.add(cube)

    update(() => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    })
    
    const floor = new THREE.Mesh  (
      new THREE.PlaneGeometry(10, 10, 1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial()
    )
    floor.position.y = -2
    scene.add(floor)

    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    shadows(scene)

    canvas.style.cssText = 'width: 100%; height: 400px;'
    
    run()

    return canvas
  },
}
