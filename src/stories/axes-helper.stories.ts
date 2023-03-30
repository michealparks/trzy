
import type { Meta, StoryObj } from '@storybook/html';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { AxesHelper, threeInstance } from '../main';

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Axes Helper',
  parameters: {
    docs: {
      source: {
        code: `import { AxesHelper } from 'trzy'

const helper = new AxesHelper({ size: 1.5, width: 0.0025 })

scene.add(helper.setColors('yellow', 'blue', 'pink'))

// later
helper.dispose()`
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

    scene.add(new AxesHelper({ size: 1.5, width: 0.0025 }).setColors('yellow', 'blue', 'pink'))
    
    scene.add(new THREE.AmbientLight(undefined, 0.2))

    new OrbitControls(camera, canvas)

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.3, 0.3),
      new THREE.MeshStandardMaterial(),
    )

    scene.add(cube)

    camera.position.set(2, 2, 2)
    camera.lookAt(0, 0, 0)

    canvas.style.cssText = 'width: 100%; height: 400px;'

    run()

    return canvas
  },
}
