import type { Context } from './context'

export const renderFns: ((ctx: Context, delta: number) => void)[] = []

export interface UseRenderOptions {
  sort?: number
}

export const useRender = (fn: (ctx: Context, delta: number) => void, options?: UseRenderOptions | undefined) => {
  renderFns.push(fn)
}
