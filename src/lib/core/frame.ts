import { internalContext, type TrzyContext } from './context'

export type Stages = 'update' | 'after'
export type UseFrameCallback = (ctx: TrzyContext, delta: number, frame?: XRFrame) => void
export type Handler = { fn: UseFrameCallback; order: number }

export const handlers = {
  update: [] as Handler[],
  after: [] as Handler[],
} as const

export interface UseFrameOptions {
  autostart?: boolean
  order?: number
  stage?: Stages
}

export const useFrame = (fn: (ctx: TrzyContext, delta: number, frame?: XRFrame) => void, options?: UseFrameOptions | undefined) => {
  const stage = options?.stage ?? 'update'

  const config = {
    start () {
      config.started.current = true
      handlers[stage].push({ fn, order: options?.order ?? 0 })
      internalContext.frameHandlersNeedSortCheck = true
    },
    stop () {
      config.started.current = false
      handlers[stage].splice(handlers[stage].findIndex((item) => item.fn === fn), 1)
    },
    started: { current: options?.autostart ?? true },
  }

  if (options?.autostart ?? true) {
    config.start()
  }

  return config
}
