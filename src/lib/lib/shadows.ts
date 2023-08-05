import type * as THREE from 'three'

export const setShadowMapSize = (light: THREE.Light, mapSize = 1024, bias = -0.0001) => {
  if (light.shadow === undefined) {
    return
  }

  light.shadow.bias = bias
  light.shadow.mapSize.set(mapSize, mapSize)
  light.shadow.dispose()
  light.shadow.map = null
  light.shadow.needsUpdate = true
}

export const shadows = (object: THREE.Object3D) => {
  object.traverse((child) => {
    const isMesh = 'isMesh' in child
    const isShadowCastingLight = 'isLight' in child && !('isAmbientLight' in child) && !('isRectAreaLight' in child)
    child.castShadow = isMesh || isShadowCastingLight
    child.receiveShadow = isMesh
  })
}
