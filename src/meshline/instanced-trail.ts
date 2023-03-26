import * as THREE from 'three'
import { MeshLineGeometry } from './geometry'
import { MeshLineMaterial } from './material'
import type { TrailProps } from './types'

interface InstancedTrailProps {
  count: number
}

export class InstancedTrail extends THREE.InstancedMesh<MeshLineGeometry, MeshLineMaterial> {
  constructor (props: TrailProps & InstancedTrailProps) {
    const geometry = new MeshLineGeometry()
    const material = new MeshLineMaterial({
      color: props.color ?? 'hotpink',
      lineWidth: 0.1,
      resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
      sizeAttenuation: 1,
    })

    super(geometry, material, props.count)
  }
}
