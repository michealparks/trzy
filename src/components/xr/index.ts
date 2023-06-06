import { createTeleport } from './teleport'
import { dispatcher } from '../lib/events'
import { getControllers } from './controller'

const events = dispatcher()

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

  xr.entered = true
  events.fire('enter')
}

const endSession = (): void => {
  xr.entered = false
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

const enableTeleport = (...navMeshes: THREE.Object3D[]) => {
  const { grips, controllers } = getControllers(_renderer)

  _scene.add(grips[0]!, grips[1]!, controllers[0]!, controllers[1]!)

  if (teleport === undefined) {
    teleport = createTeleport(_renderer, _scene, _camera, controllers)
  }

  teleport.enable(...navMeshes)
}

const disableTeleport = () => {
  teleport?.disable()
}

const toggleControllers = (enable: boolean) => {
  const { grips, controllers } = getControllers(_renderer)

  if (enable) {
    _scene.add(grips[0]!, grips[1]!, controllers[0]!, controllers[1]!)
  } else {
    _scene.remove(grips[0]!, grips[1]!, controllers[0]!, controllers[1]!)
  }
}

const update = (delta: number) => {
  teleport?.update(delta)
}

export const xr = {
  entered: false,
  supportStateMessages,
  setup,
  createButton,
  requestSessionSupport,
  requestSession,
  endSession,
  enableTeleport,
  disableTeleport,
  toggleControllers,
  update,
  ...events,
}
