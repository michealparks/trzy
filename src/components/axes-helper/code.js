import * as THREE from 'three'
import { AxesHelper } from '.'

const scene = new THREE.Scene()
const helper = new AxesHelper()
helper.length = 10
helper.width = 0.1
helper.setColors('yellow', 'blue', 'pink')

scene.add(helper)

// later
helper.dispose()
