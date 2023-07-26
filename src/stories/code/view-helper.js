import * as THREE from 'three'
import { ViewHelper } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()
const helper = new ViewHelper(camera, renderer)
