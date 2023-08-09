import { context, internalContext } from './context'
import { handlers, type Stages } from './frame'
import { renderHandlers } from './render'

let then = 0

const runRenderHandlers = (delta: number) => {
  if (internalContext.renderHandlersNeedSortCheck) {
    renderHandlers.sort((a, b) => (a.order > b.order ? 1 : -1))
    internalContext.renderHandlersNeedSortCheck = false
  }

  renderHandlers.forEach((item) => item.fn(context, delta))
}

const runHandlers = (stage: Stages, delta: number, frame?: XRFrame) => {
  if (internalContext.frameHandlersNeedSortCheck) {
    handlers[stage].sort((a, b) => (a.order > b.order ? 1 : -1))
    internalContext.frameHandlersNeedSortCheck = false
  }

  handlers[stage].forEach((handler) => handler.fn(context, delta, frame))
}

export const frameloop = (time: number, frame: XRFrame) => {
  const now = performance.now()
  const delta = now - then
  then = time

  if (handlers.update.length > 0) {
    runHandlers('update', delta, frame)
  }

  if (renderHandlers.length > 0) {
    runRenderHandlers(delta)
  } else {
    context.renderer.render(context.scene, context.camera.current)
  }

  if (handlers.after.length > 0) {
    runHandlers('after', delta, frame)
  }
}
