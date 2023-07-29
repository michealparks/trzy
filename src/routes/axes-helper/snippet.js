
import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
scene.add(helper)

// Defaults
helper.length = 10
helper.width = 0.1
helper.setColors('red', 'blue', 'green')

// Later
helper.dispose()
