import type { Context } from './context'

export const fns: ((ctx: Context, delta: number, frame?: XRFrame) => void)[] = []

export interface UseFrameOptions {
  autostart: boolean
}

export const useFrame = (fn: (ctx: Context, delta: number, frame?: XRFrame) => void, options?: UseFrameOptions | undefined) => {
  const start = () => fns.push(fn)
  const stop = () => fns.splice(fns.indexOf(fn), 1)

  if (options?.autostart ?? true) {
    start()
  }

  return {
    start,
    stop,
    started: { current: options?.autostart ?? true },
  }
}
