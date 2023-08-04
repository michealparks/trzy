import * as THREE from 'three'
import { MeshDiscardMaterial, shadows, useTrzy } from '$lib'
import { setup } from '../lib/setup'
import { floor } from '../lib/floor'

setup()
const { scene } = useTrzy()

scene.add(floor())

const geometry = new THREE.BoxGeometry()
const material = new MeshDiscardMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

shadows(scene)
