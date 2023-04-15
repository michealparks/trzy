import { AmbientLight, Light, type Object3D } from 'three'

export const shadows = (object: Object3D, {
  castShadow = true,
  receiveShadow = true,
}: {
  castShadow?: boolean
  receiveShadow?: boolean
} = {}): void => {
  object.traverse((child) => {
    if (child instanceof AmbientLight) {
      return
    }

    child.castShadow = castShadow
  
    if (child instanceof Light) {
      return 
    }

    child.receiveShadow = receiveShadow
  })
}
