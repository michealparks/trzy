import * as THREE from 'three'

const remove = THREE.Object3D.prototype.remove
const clear = THREE.Object3D.prototype.clear

type Callback = (object: THREE.Object3D) => void

const removeFns = new Set<Callback>()

let patchedRemove = false

const patchRemove = () => {
  THREE.Object3D.prototype.remove = function (...objects: THREE.Object3D[]) {
    remove.call(this, ...objects)
    removeFns.forEach((fn) => objects.forEach((object) => fn(object)))
    return this
  }

  THREE.Object3D.prototype.clear = function () {
    clear.call(this)
    removeFns.forEach((fn) => this.children.forEach((child) => fn(child)))
    return this
  }
  patchedRemove = true
}

const unpatchRemove = () => {
  THREE.Object3D.prototype.remove = remove
  THREE.Object3D.prototype.clear = clear
  patchedRemove = false
}

export const useRemove = (callback: Callback) => {
  if (!patchedRemove) {
    patchRemove()
  }
  removeFns.add(callback)
  return () => {
    removeFns.delete(callback)
    if (removeFns.size === 0 && patchedRemove) {
      unpatchRemove()
    }
  }
}
