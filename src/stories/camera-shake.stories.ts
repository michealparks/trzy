
import type { Meta, StoryObj } from '@storybook/html';
import * as THREE from 'three'
import { threeInstance, CameraShake } from '../main';

const meta: Meta = {
  title: 'Camera Shake',
}

export default meta

export const Primary: StoryObj = {
  render: () => {
    const { scene, camera, canvas } = threeInstance()
    const cameraShake = new CameraShake(camera)

    scene.add(new THREE.AxesHelper())
    
    scene.add(new THREE.AmbientLight(undefined, 0.2))

    const light = new THREE.DirectionalLight(undefined, 0.5)
    light.position.set(-5, 2, 5)
    scene.add(light)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial(),
    )

    scene.add(cube)

    camera.position.set(2, 2, 2)
    camera.lookAt(0, 0, 0)

    canvas.style.cssText = 'width: 100%; height: 400px;'

    cameraShake.enable()

    return canvas
  },
}
