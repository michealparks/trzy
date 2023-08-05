import * as THREE from 'three'

type Callback = (object: THREE.Object3D) => void

const add = THREE.Object3D.prototype.add

const addFns = new Set<Callback>()

let patchedAdd = false

const patchAdd = () => {
  THREE.Object3D.prototype.add = function (...objects: THREE.Object3D[]) {
    add.call(this, ...objects)
    addFns.forEach((fn) => objects.forEach((object) => fn(object)))
    return this
  }
  patchedAdd = true
}

const unpatchAdd = () => {
  THREE.Object3D.prototype.add = add
  patchedAdd = false
}

export const useAdd = (callback: Callback) => {
  if (!patchedAdd) {
    patchAdd()
  }
  addFns.add(callback)
  return () => {
    addFns.delete(callback)
    if (addFns.size === 0 && patchedAdd) {
      unpatchAdd()
    }
  }
}
