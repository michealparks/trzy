import type { WebGLRenderer } from 'three'

let session: XRSession | undefined

export const xrState = {
  sessionGranted: false,
}

export const xrSupportState = {
  ALLOWED: 0,
  NOT_ALLOWED: 1,
  NOT_SECURE: 2,
  NOT_SUPPORTED: 3,
} as const

export const xrSupportStateMessage = {
  0: 'Enter VR',
  1: 'VR is not allowed',
  2: 'VR requires HTTPS',
  3: 'VR not supported',
} as const

export const requestXrSessionSupport = async () => {
  if (navigator.xr === undefined) {
    return xrSupportState.NOT_SUPPORTED
  }

  if (!window.isSecureContext) {
    return xrSupportState.NOT_SECURE
  }

  try {
    const supported = await navigator.xr.isSessionSupported('immersive-vr')

    if (supported) {
      return xrSupportState.ALLOWED
    }

    return xrSupportState.NOT_SUPPORTED
  } catch {
    return xrSupportState.NOT_ALLOWED
  }
}

export const requestSession = async (renderer: WebGLRenderer) => {
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
};

export const endSession = () => {
  if (session === undefined) {
    throw new Error('Tried to end undefined session!');
  }
  session.end();
};

export const createXrButton = async (renderer: WebGLRenderer) => {
  const xrSupport = await requestXrSessionSupport();
  const button = document.createElement('v-button') as HTMLElement & { label: string };
  button.label = xrSupportStateMessage[xrSupport];

  if (xrSupport === xrSupportState.ALLOWED) {
    button.addEventListener('click', () => {
      renderer.domElement.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;';
      return requestSession(renderer);
    });
  }

  return button;
};

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
    xrState.sessionGranted = true;
  });
}
