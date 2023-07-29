let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera

export const internalContext = {
  renderHandlersNeedSortCheck: false,
  frameHandlersNeedSortCheck: false,
}

export const context = {
  renderer: undefined! as THREE.WebGLRenderer,
  scene: undefined! as THREE.Scene,
  camera: {
    get current () {
      return camera
    },
    set current (value: THREE.PerspectiveCamera | THREE.OrthographicCamera) {
      camera = value
    },
  },
  dpr: {
    get current () {
      return context.renderer.getPixelRatio()
    },
    set current (value: number) {
      context.renderer.setPixelRatio(value)
    },
  },
  toneMapping: {
    get toneMapping () {
      return context.renderer.toneMapping
    },
    set toneMapping (value: THREE.ToneMapping) {
      context.renderer.toneMapping = value
    },
  },
}

export type Context = typeof context
