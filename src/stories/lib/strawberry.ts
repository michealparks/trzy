import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

export const strawberry = async () => {
  const glb = await loader.loadAsync(`${import.meta.env.BASE_URL}glb/strawberry.glb`)
  const group = new THREE.Group()
  group.add(glb.scene.getObjectByName('Stem')!)
  group.add(glb.scene.getObjectByName('Seeds')!)
  group.add(glb.scene.getObjectByName('Leaves')!)
  group.add(glb.scene.getObjectByName('Body')!)
  group.name = 'Strawberry'

  group.position.y = 0.2
  group.scale.setScalar(0.1)

  return group
}