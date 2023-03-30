
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { threeInstance, AxesHelper, OrbitControlsGizmo } from '../main'

const meta: Meta = {
  title: 'Orbit Controls Gizmo',
  parameters: {
    docs: {
      source: {
        code: `import { OrbitControlsGizmo } from 'trzy'

new OrbitControlsGizmo({ camera, el, orbitControls })`
      }
    }
  }
}

export default meta

export const Primary: StoryObj = {
  render: () => {
    const container = document.createElement('div')

    const { scene, camera, canvas, run } = threeInstance()
    container.append(canvas)

    const el = document.createElement('div')
    container.append(el)

    const orbitControls = new OrbitControls(camera, canvas)

    new OrbitControlsGizmo({ camera, el, orbitControls })

    scene.add(new THREE.AmbientLight(undefined, 0.2))

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial(),
    )

    cube.add(new AxesHelper())

    scene.add(cube)

    camera.position.set(2, 2, 2)
    camera.lookAt(0, 0, 0)

    el.style.cssText = 'position: absolute; top: 50px; right: 40px;'
    container.style.cssText = 'width: 100%; height: 400px;'
    canvas.style.cssText = 'width: 100%; height: 100%;'

    run()

    return container
  },
}
