import type * as THREE from 'three'
import { buildControllers } from './controller'
import { createTeleport } from './teleport'

const supportStateMessages = {
  'allowed': 'Enter VR',
  'not_allowed': 'VR is not allowed',
  'not_secure': 'VR requires HTTPS',
  'not_supported': 'VR not supported',
} as const

export const xr = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
  if (navigator.xr === undefined || (/WebXRViewer\//ui).test(navigator.userAgent)) {
    // Do nothing
  } else {
    navigator.xr.addEventListener('sessiongranted', () => {
      state.sessionGranted = true
    })
  }

  let session: XRSession | undefined

  const state = {
    sessionGranted: false,
  }

  const teleport = createTeleport(renderer, scene, camera)

  const listeners: Record<string, (() => void)[]> = {}

  const on = (event: string, fn: () => void) => {
    listeners[event] ??= []
    listeners[event]!.push(fn)
  }

  const fire = (event: string) => {
    const fns = listeners[event]

    if (fns === undefined) return

    for (let i = 0, l = fns.length; i < l; i += 1) {
      fns[i]!()
    }
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

    session.addEventListener('end', () => fire('end'))
    session.addEventListener('exit', () => fire('exit'))

    await renderer.xr.setSession(session)

    fire('enter')
  }

  const endSession = (): void => {
    if (session === undefined) {
      throw new Error('Tried to end undefined session!')
    }

    session.end()
  }

  const addControllers = () => {
    buildControllers(renderer, scene)
    return self
  }

  const enableTeleport = (...navMeshes: THREE.Object3D[]) => {
    teleport.enable(...navMeshes)
    return self
  }

  const disableTeleport = () => {
    teleport.disable()
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

  const update = (delta: number) => {
    teleport.update(delta)
  }

  const self = {
    state,
    supportStateMessages,
    createButton,
    requestSessionSupport,
    requestSession,
    endSession,
    addControllers,
    enableTeleport,
    disableTeleport,
    on,
    update,
  }  

  return self
}
