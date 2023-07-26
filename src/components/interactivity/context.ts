import * as THREE from 'three'
import type { Context } from './types'

export const context: Context = {
  camera: undefined! as THREE.PerspectiveCamera | THREE.OrthographicCamera,
  enabled: true,
  pointer: new THREE.Vector2(),
  pointerOverTarget: false,
  lastEvent: undefined,
  raycaster: new THREE.Raycaster(),
  initialClick: [0, 0],
  initialHits: [],
  hovered: new Map(),
  interactiveObjects: [] as THREE.Object3D[],
  interactiveMap: {} as Record<string, THREE.Object3D>,
  target: undefined! as HTMLElement,
  compute: () => {
    // Will be replaced by the default or the user-provided function
  },
  filter: undefined,
}
