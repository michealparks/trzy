import * as THREE from 'three'

const add = THREE.Object3D.prototype.add
const remove = THREE.Object3D.prototype.remove
const clear = THREE.Object3D.prototype.clear

type Callback = (object: THREE.Object3D) => void

const addFns = new Set<Callback>()
const removeFns = new Set<Callback>()

let patchedAdd = false
let patchedRemove = false

const patchAdd = () => {
  THREE.Object3D.prototype.add = function (...objects: THREE.Object3D[]) {
    add.call(this, ...objects)
    addFns.forEach((fn) => objects.forEach((object) => fn(object)))
    return this
  }
  patchedAdd = true
}

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

const unpatchAdd = () => {
  THREE.Object3D.prototype.add = add
  patchedAdd = false
}

const unpatchRemove = () => {
  THREE.Object3D.prototype.remove = remove
  THREE.Object3D.prototype.clear = clear
  patchedRemove = false
}

export const useOnAdd = (callback: Callback) => {
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

export const useOnRemove = (callback: Callback) => {
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
