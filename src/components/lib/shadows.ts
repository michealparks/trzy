import type * as THREE from 'three'

export const setMapSize = (light: THREE.Light, mapSize = 1024, bias = -0.0001) => {
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
  const isMesh = 'isMesh' in object
  const isShadowCastingLight = 'isLight' in object && !('isAmbientLight' in object) && !('isRectAreaLight' in object)

  object.castShadow = isMesh || isShadowCastingLight
  object.receiveShadow = isMesh
  object.children.forEach((child) => shadows(child))
}
