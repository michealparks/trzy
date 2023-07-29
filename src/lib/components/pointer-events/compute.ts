import type { ComputeFunction } from './types'
import { context } from './context'

export const getDefaultComputeFunction = (): ComputeFunction => {
  let width = 0
  let height = 0

  const resizeObserver = new ResizeObserver(([entry]) => {
    width = entry?.contentRect.width ?? 0
    height = entry?.contentRect.height ?? 0
  })

  resizeObserver.observe(context.target)

  return (event) => {
    context.pointer.set(((event.offsetX / width) * 2) - 1, -((event.offsetY / height) * 2) + 1)
    context.raycaster.setFromCamera(context.pointer, context.camera)
  }
}
