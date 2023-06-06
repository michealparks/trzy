import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

THREE.Cache.enabled = true

const audios: Record<string, THREE.Audio> = {}

export const audioLoader = new THREE.AudioLoader()
export const fileLoader = new THREE.FileLoader()
export const gltfLoader = new GLTFLoader()
export const textureLoader = new THREE.TextureLoader()

/**
 * Loads an audio file.
 *
 * @param file
 * @param listener
 * @returns
 */
export const loadAudio = async (file: string, listener: THREE.AudioListener) => {
  const buffer = await audioLoader.loadAsync(file)
  const audio = new THREE.Audio(listener)
  audio.setBuffer(buffer)
  audios[file] = audio
  return audio
}

/**
 * Plays a loaded audio file.
 *
 * @param file
 * @param volume
 * @param loop
 */
export const playAudio = (file: string, volume = 0.5, loop = false) => {
  const audio = audios[file]

  if (audio === undefined) {
    throw new Error(`Audio file ${file} has not been loaded!`)
  }

  audio.setLoop(loop)
  audio.setVolume(volume)
  audio.play()
}

export const loadFile = (file: string) => fileLoader.loadAsync(file)
export const loadGLTF = (path: string) => gltfLoader.loadAsync(path)
export const loadTexture = (file: string) => textureLoader.loadAsync(file)

export const setPath = (path: string): void => {
  audioLoader.setPath(path)
  fileLoader.setPath(path)
  gltfLoader.setPath(path)
  textureLoader.setPath(path)
}
