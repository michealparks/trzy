import type * as THREE from 'three'

export interface Settings {
  width?: number
  length: number
  decay: number
  /**
   * Wether to use the target's world or local positions
   */
  local: boolean
  // Min distance between previous and current points
  stride: number
  // Number of frames to wait before next calculation
  interval: number
}

export type TrailProps = {
  color?: THREE.ColorRepresentation
  attenuation?: (width: number) => number
  target?: THREE.Object3D
} & Partial<Settings>
