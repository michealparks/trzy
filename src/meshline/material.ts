/* eslint-disable brace-style */
import * as THREE from 'three'
import { meshlineFrag, meshlineVert } from './shader'

export class MeshLineMaterial extends THREE.ShaderMaterial {
  readonly isMeshLineMaterial = true
  override readonly type = 'MeshLineMaterial'

  override uniforms = {
    ...THREE.UniformsLib.fog,
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    color: { value: new THREE.Color(0xffffff) },
    dashArray: { value: 0 },
    dashOffset: { value: 0 },
    dashRatio: { value: 0.5 },
    lineWidth: { value: 1 },
    map: { value: null },
    opacity: { value: 1 },
    repeat: { value: new THREE.Vector2(1, 1) },
    resolution: { value: new THREE.Vector2(1, 1) },
    sizeAttenuation: { value: 1 },
    useAlphaMap: { value: 0 },
    useDash: { value: 0 },
    useMap: { value: 0 },
    visibility: { value: 1 },
  }

  constructor (parameters?: any) {
    super({
      fragmentShader: meshlineFrag,
      vertexShader: meshlineVert,
    })

    this.setValues(parameters)
  }

  get alphaMap () { return this.uniforms.alphaMap.value }
  set alphaMap (value) { this.uniforms.alphaMap.value = value }

  override get alphaTest () { return this.uniforms.alphaTest.value }
  override set alphaTest (value: number) { this.uniforms.alphaTest.value = value }

  get color () { return this.uniforms.color.value }
  set color (value: THREE.Color) { this.uniforms.color.value = value }

  get dashArray () { return this.uniforms.dashArray.value }
  set dashArray (value) {
    this.uniforms.dashArray.value = value
    this.useDash = value === 0 ? 0 : 1
  }

  get dashOffset () { return this.uniforms.dashOffset.value }
  set dashOffset (value: number) { this.uniforms.dashOffset.value = value }

  get dashRatio () { return this.uniforms.dashRatio.value }
  set dashRatio (value: number) { this.uniforms.dashRatio.value = value }

  get lineWidth () { return this.uniforms.lineWidth.value }
  set lineWidth (value: number) { this.uniforms.lineWidth.value = value }

  get map () { return this.uniforms.map.value }
  set map (value) { this.uniforms.map.value = value }

  override get opacity () { return this.uniforms.opacity.value }
  override set opacity (value: number) {
    if (this.uniforms) {
      this.uniforms.opacity.value = value
    }
  }

  get resolution () { return this.uniforms.resolution.value }
  set resolution (value: THREE.Vector2) { this.uniforms.resolution.value.copy(value) }

  get repeat () { return this.uniforms.repeat.value }
  set repeat (value: THREE.Vector2) { this.uniforms.repeat.value.copy(value) }

  get sizeAttenuation () { return this.uniforms.sizeAttenuation.value }
  set sizeAttenuation (value: number) { this.uniforms.sizeAttenuation.value = value }

  get useAlphaMap () { return this.uniforms.useAlphaMap.value }
  set useAlphaMap (value: number) { this.uniforms.useAlphaMap.value = value }

  get useDash () { return this.uniforms.useDash.value }
  set useDash (value: number) { this.uniforms.useDash.value = value }

  get useMap () { return this.uniforms.useMap.value }
  set useMap (value: number) { this.uniforms.useMap.value = value }

  get visibility () { return this.uniforms.visibility.value }
  set visibility (value: number) { this.uniforms.visibility.value = value }

  override copy (source: MeshLineMaterial) {
    super.copy(source)

    this.lineWidth = source.lineWidth
    this.map = source.map
    this.useMap = source.useMap
    this.alphaMap = source.alphaMap
    this.useAlphaMap = source.useAlphaMap
    this.color.copy(source.color)
    this.opacity = source.opacity
    this.resolution.copy(source.resolution)
    this.sizeAttenuation = source.sizeAttenuation
    this.dashArray = source.dashArray
    this.dashOffset = (source.dashOffset)
    this.dashRatio = (source.dashRatio)
    this.useDash = source.useDash
    this.visibility = source.visibility
    this.alphaTest = source.alphaTest
    this.repeat.copy(source.repeat)

    return this
  }
}

