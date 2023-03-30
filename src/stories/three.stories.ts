
import type { Meta, StoryObj } from '@storybook/html'
import * as THREE from 'three'
import { shadows } from '../components/lib/shadows'
import { threeInstance, update } from '../main'

const meta: Meta = {
  title: 'Three',
  parameters: {
    docs: {
      description: {
        component: 'Instantiates a scene, camera, renderer, and frame loop.'
      },
      source: {
        type: 'code',
        code: `import * as THREE from 'three'
import { three, update, postUpdate } from 'trzy'

const { scene, camera, canvas, renderer, setCamera, run, pause } = three({
  // defaults.
  alpha: false,
  antialias: false,
  camera: 'perspective' // or 'orthographic'
  checkShaderErrors: true,
  depth: true,
  outputEncoding: THREE.sRGBEncoding,
  shadowMap: undefined // can be any THREE.ShadowMapType,
  stencil: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  xr: false,
})

run()

update(() => {
  // Will run before each frame.
})

postUpdate(() => {
  // Will run after each frame.
})`,
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
