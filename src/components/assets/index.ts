import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

THREE.Cache.enabled = true

export const audioLoader = new THREE.AudioLoader()
export const fileLoader = new THREE.FileLoader()
export const gltfLoader = new GLTFLoader()
export const textureLoader = new THREE.TextureLoader()

export const loadAudio = (file: string) => audioLoader.loadAsync(file)
export const loadFile = (file: string) => fileLoader.loadAsync(file)
export const loadGLTF = (path: string) => gltfLoader.loadAsync(path)
export const loadTexture = (file: string) => textureLoader.loadAsync(file)

export const setPath = (path: string): void => {
  audioLoader.setPath(path)
  fileLoader.setPath(path)
  gltfLoader.setPath(path)
  textureLoader.setPath(path)
}
