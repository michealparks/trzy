import { shaderMaterial } from '../shader-material'

export const MeshDiscardMaterial = shaderMaterial(
  {},
  'void main() { }',
  'void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard; }'
)
