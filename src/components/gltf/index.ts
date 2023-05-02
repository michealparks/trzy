import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

export const setPathGLTF = (path: string) => loader.setPath(path)

export const loadGLTF = (path: string) => loader.loadAsync(path)
