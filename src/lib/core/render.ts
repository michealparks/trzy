import { internalContext, type TrzyContext } from './context'

export type UseRenderCallback = (ctx: TrzyContext, delta: number) => void

export const renderHandlers: { fn: UseRenderCallback; order: number }[] = []

export interface UseRenderOptions {
  order?: number
}

export const useRender = (fn: (ctx: TrzyContext, delta: number) => void, options?: UseRenderOptions | undefined) => {
  renderHandlers.push({ fn, order: options?.order ?? 0 })
  internalContext.renderHandlersNeedSortCheck = true
}
