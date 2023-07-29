import { internalContext, type Context } from './context'

export type UseRenderCallback = (ctx: Context, delta: number) => void

export const renderHandlers: { fn: UseRenderCallback; order: number }[] = []

export interface UseRenderOptions {
  order?: number
}

export const useRender = (fn: (ctx: Context, delta: number) => void, options?: UseRenderOptions | undefined) => {
  renderHandlers.push({ fn, order: options?.order ?? 0 })
  internalContext.renderHandlersNeedSortCheck = true
}
