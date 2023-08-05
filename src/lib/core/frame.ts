import { internalContext, type TrzyContext } from './context'

export type UseFrameCallback = (ctx: TrzyContext, delta: number, frame?: XRFrame) => void

export const frameHandlers: { fn: UseFrameCallback; order: number }[] = []

export interface UseFrameOptions {
  autostart?: boolean
  order?: number
}

export const useFrame = (fn: (ctx: TrzyContext, delta: number, frame?: XRFrame) => void, options?: UseFrameOptions | undefined) => {
  const config = {
    start () {
      config.started.current = true
      frameHandlers.push({ fn, order: options?.order ?? 0 })
      internalContext.frameHandlersNeedSortCheck = true
    },
    stop () {
      config.started.current = false
      frameHandlers.splice(frameHandlers.findIndex((item) => item.fn === fn), 1)
    },
    started: { current: options?.autostart ?? true },
  }

  if (options?.autostart ?? true) {
    config.start()
  }

  return config
}
