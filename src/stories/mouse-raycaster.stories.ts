
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { threeInstance, MouseRaycaster } from '../main'

const meta: Meta = {
  title: 'Mouse Raycaster',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
<script>

import { MouseRaycaster } from 'trzy'

const raycaster = new MouseRaycaster({ camera, canvas, scene, move: true })

raycaster.addEventListener('move', (event) => {
  /* ... */
})

raycaster.addEventListener('click', (event) => {
  /* ... */
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
    const { scene, camera, canvas, run } = threeInstance()

    scene.add(new THREE.AmbientLight(undefined, 0.2))

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const n = 100
    const cube = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshStandardMaterial(),
      n,
    )
    cube.position.set(0, 0, 0)

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

    const raycaster = new MouseRaycaster({ camera, canvas, scene, move: true })

    raycaster.addEventListener('move', (event) => {
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

    raycaster.addEventListener('click', (event) => {
      for (const intersection of event.intersections) {
        const { instanceId } = intersection
        cube.setColorAt(instanceId, color.set('hotpink'))
      }

      cube.instanceColor!.needsUpdate = true
    })

    scene.add(cube)

    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    canvas.style.cssText = 'width: 100%; height: 400px;'

    run()

    return canvas
  },
}
