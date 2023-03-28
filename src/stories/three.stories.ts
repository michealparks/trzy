
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { shadows } from '../components/lib/shadows'
import { threeInstance, update } from '../main'

const meta: Meta = {
  title: 'Three',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { three } from 'trzy'

const {
  scene,
  camera,
  canvas,
  renderer,
  setCamera,
  run,
  pause,
} = three()

run()

</script>
        `,
      }
    }
  }
}

export default meta

export const Primary: StoryObj = {
  render: () => {
    const { scene, camera, canvas, run } = threeInstance({ shadowMap: THREE.BasicShadowMap })

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
      cube.rotation.y += 0.01
    })
    
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10, 1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial()
    )
    floor.position.y = -0.5
    scene.add(floor)

    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    shadows(scene)

    canvas.style.cssText = 'width: 100%; height: 400px;'
    
    run()

    return canvas
  },
}
