import type * as THREE from 'three'
import { buildControllers } from './controller'
import { createTeleport } from './teleport'

const supportStates = {
  ALLOWED: 0,
  NOT_ALLOWED: 1,
  NOT_SECURE: 2,
  NOT_SUPPORTED: 3,
} as const

type SupportValues = typeof supportStates[keyof typeof supportStates]

const supportStateMessages = {
  0: 'Enter VR',
  1: 'VR is not allowed',
  2: 'VR requires HTTPS',
  3: 'VR not supported',
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

  const requestSessionSupport = async (): Promise<SupportValues> => {
    if (navigator.xr === undefined) {
      return supportStates.NOT_SUPPORTED
    }

    if (!window.isSecureContext) {
      return supportStates.NOT_SECURE
    }

    try {
      const supported = await navigator.xr.isSessionSupported('immersive-vr')
      return supported ? supportStates.ALLOWED : supportStates.NOT_SUPPORTED
    } catch {
      return supportStates.NOT_ALLOWED
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

  const showControllers = () => {
    buildControllers(renderer, scene)
    return self
  }

  const enableTeleport = (...navmesh: THREE.Object3D[]) => {
    teleport.enable(...navmesh)
    return self
  }

  const disableTeleport = () => {
    teleport.disable()
  }

  const createButton = async () => {
    const xrSupport = await requestSessionSupport()
    const button = document.createElement('button')
    button.textContent = supportStateMessages[xrSupport]
  
    if (xrSupport === supportStates.ALLOWED) {
      button.addEventListener('click', requestSession)
    }
  
    return button
  }

  const update = (delta: number) => {
    teleport.update(delta)
  }

  const self = {
    state,
    supportStates,
    supportStateMessages,
    createButton,
    requestSessionSupport,
    requestSession,
    endSession,
    showControllers,
    enableTeleport,
    disableTeleport,
    on,
    update,
  }  

  return self
}
