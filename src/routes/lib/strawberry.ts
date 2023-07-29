import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

let group: THREE.Group | undefined

export const strawberry = async () => {
  if (group) {
    return group
  }

  const glb = await loader.loadAsync(`${import.meta.env.BASE_URL}glb/strawberry.glb`)
  group = new THREE.Group()
  group.add(
    glb.scene.getObjectByName('Stem')!,
    glb.scene.getObjectByName('Seeds')!,
    glb.scene.getObjectByName('Leaves')!,
    glb.scene.getObjectByName('Body')!
  )
  group.name = 'Strawberry'
  group.scale.setScalar(0.5)
  return group
}
