import type * as THREE from 'three'

let session: XRSession | undefined

const state = {
  sessionGranted: false,
}

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

const requestSessionSupport = async (): Promise<SupportValues> => {
  if (navigator.xr === undefined) {
    return supportStates.NOT_SUPPORTED
  }

  if (!window.isSecureContext) {
    return supportStates.NOT_SECURE
  }

  try {
    const supported = await navigator.xr.isSessionSupported('immersive-vr')

    if (supported) {
      return supportStates.ALLOWED
    }

    return supportStates.NOT_SUPPORTED
  } catch {
    return supportStates.NOT_ALLOWED
  }
}

const requestSession = async (renderer: THREE.WebGLRenderer): Promise<void> => {
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

  return renderer.xr.setSession(session)
}

const endSession = (): void => {
  if (session === undefined) {
    throw new Error('Tried to end undefined session!')
  }

  session.end()
}

const createButton = async (renderer: THREE.WebGLRenderer): Promise<HTMLButtonElement> => {
  const xrSupport = await requestSessionSupport()
  const button = document.createElement('button')
  button.textContent = supportStateMessages[xrSupport]

  if (xrSupport === supportStates.ALLOWED) {
    button.addEventListener('click', () => {
      renderer.domElement.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;'
      return requestSession(renderer)
    })
  }

  return button
}

/*
 * WebXRViewer (based on Firefox) has a bug where addEventListener
 * throws a silent exception and aborts execution entirely.
 */
if (
  navigator.xr === undefined ||
  (/WebXRViewer\//ui).test(navigator.userAgent)
) {
  // Do nothing
} else {
  navigator.xr.addEventListener('sessiongranted', () => {
    state.sessionGranted = true
  })
}

export const xr = {
  state,
  supportStates,
  supportStateMessages,
  createButton,
  requestSessionSupport,
  requestSession,
  endSession,
}
