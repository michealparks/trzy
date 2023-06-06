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

export const shadows = (object: THREE.Object3D, mapSize = 1024, bias = -0.0001) => {
  if ((object as THREE.AmbientLight).isAmbientLight !== true) {
    object.castShadow = true
    if ((object as THREE.Light).isLight) {
      setMapSize(object as THREE.Light, mapSize, bias)
    } else {
      object.receiveShadow = true
    }
  }

  const children = object.children
  for (let index = 0, l = children.length; index < l; index += 1) {
    shadows(children[index]!, mapSize, bias)
  }
}
