import { getControllerModels, getControllers } from './controller'
import { createTeleport } from './teleport'
import { dispatcher } from '../../lib/events'
import { getHands } from './hand'

const events = dispatcher()

let entered = false
let controllersEnabled = false
let handsEnabled = false

let session: XRSession | undefined

let _renderer: THREE.WebGLRenderer
let _scene: THREE.Scene
let _camera: THREE.Camera
let teleport: undefined | ReturnType<typeof createTeleport>

const supportStateMessages = {
  allowed: 'Enter VR',
  not_allowed: 'VR is not allowed',
  not_secure: 'VR requires HTTPS',
  not_supported: 'VR not supported',
} as const

const setup = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
  _renderer = renderer
  _scene = scene
  _camera = camera

  _renderer.xr.enabled = true
}

const requestSessionSupport = async (): Promise<'allowed' | 'not_allowed' | 'not_secure' | 'not_supported'> => {
  if (navigator.xr === undefined) {
    return 'not_supported'
  }

  if (!window.isSecureContext) {
    return 'not_secure'
  }

  try {
    const supported = await navigator.xr.isSessionSupported('immersive-vr')
    return supported ? 'allowed' : 'not_supported'
  } catch {
    return 'not_allowed'
  }
}

const handleEnd = () => events.fire('end')
const handleExit = () => events.fire('exit')

const requestSession = async () => {
  if (navigator.xr === undefined) {
    throw new Error('navigator.xr is undefined!')
  }

  session = await navigator.xr.requestSession('immersive-vr', {
    optionalFeatures: [
      'local-floor',
      'bounded-floor',
      'hand-tracking',
      'layers',
    ],
  })

  session.addEventListener('end', handleEnd)
  session.addEventListener('exit', handleExit)

  await _renderer.xr.setSession(session)

  entered = true
  events.fire('enter')
}

const endSession = (): void => {
  entered = false
  session?.end()
}

const createButton = async () => {
  const xrSupport = await requestSessionSupport()
  const button = document.createElement('button')
  button.textContent = supportStateMessages[xrSupport]

  if (xrSupport === 'allowed') {
    button.addEventListener('click', requestSession)
  }

  return button
}

const toggleControllers = (enable: boolean) => {
  controllersEnabled = enable

  const { grip0, grip1, controller0, controller1 } = getControllers(_renderer)

  if (enable) {
    _scene.add(grip0, grip1, controller0, controller1)
  } else {
    _scene.remove(grip0, grip1, controller0, controller1)
  }
}

const toggleHands = (enable: boolean) => {
  handsEnabled = enable

  const { hand0, hand1 } = getHands(_renderer)

  if (enable) {
    _scene.add(hand0, hand1)
  } else {
    _scene.remove(hand0, hand1)
  }
}

const enableTeleport = (...navMeshes: THREE.Object3D[]) => {
  if (teleport === undefined) {
    const { controller0, controller1 } = getControllers(_renderer)
    teleport = createTeleport(_renderer, _scene, _camera, [controller0, controller1])
  }

  if (!controllersEnabled) {
    toggleControllers(true)
  }

  teleport.enable(...navMeshes)
}

const disableTeleport = () => {
  teleport?.disable()
}

const update = (delta: number) => {
  teleport?.update(delta)
}

export const xr = {
  get entered () {
    return entered
  },
  get handsEnabled () {
    return handsEnabled
  },
  get controllersEnabled () {
    return controllersEnabled
  },
  supportStateMessages,
  setup,
  createButton,
  requestSessionSupport,
  requestSession,
  endSession,
  enableTeleport,
  disableTeleport,
  getControllers: () => getControllers(_renderer),
  getControllerModels: () => getControllerModels(_renderer),
  getHands: () => getHands(_renderer),
  toggleControllers,
  toggleHands,
  update,
  ...events,
}
