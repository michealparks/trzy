export const bakeShadows = (renderer: THREE.WebGLRenderer) => {
  renderer.shadowMap.autoUpdate = false
  renderer.shadowMap.needsUpdate = true

  return () => {
    renderer.shadowMap.autoUpdate = renderer.shadowMap.needsUpdate = true
  }
}
