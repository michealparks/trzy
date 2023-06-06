import * as THREE from 'three'
import { GridHelper } from '.'

const scene = new THREE.Scene()
const cellSize = 1
const largeCellSize = 10
const color = 'white'
scene.add(new GridHelper(cellSize, largeCellSize, color))
