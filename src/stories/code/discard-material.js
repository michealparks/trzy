import * as THREE from 'three'
import { MeshDiscardMaterial } from 'trzy'

const geometry = new THREE.BoxGeometry()

// Creates a material that is discarded in the fragment shader.
const material = new MeshDiscardMaterial()
const mesh = new THREE.Mesh(geometry, material)
