/* eslint-disable @typescript-eslint/no-dynamic-delete */

import type * as THREE from 'three'
import { context } from './context'

export const addInteractiveObject = (object: THREE.Object3D) => {
  // Check if the object is already in the list
  if (context.interactiveMap[object.uuid] !== undefined) {
    return
  }

  context.interactiveObjects.push(object)
  context.interactiveMap[object.uuid] = object
}

export const removeInteractiveObject = (object: THREE.Object3D) => {
  const index = context.interactiveObjects.indexOf(object)
  context.interactiveObjects.splice(index, 1)
  delete context.interactiveMap[object.uuid]
}
