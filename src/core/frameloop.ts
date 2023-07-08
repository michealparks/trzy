import { context, internalContext } from './context'
import { frameHandlers } from './frame'
import { renderHandlers } from './render'

let then = 0

const runRenderHandlers = (delta: number) => {
  renderHandlers.forEach((item) => item.fn(context, delta))

  if (internalContext.renderHandlersNeedSortCheck) {
    renderHandlers.sort((a, b) => (a.order > b.order ? 1 : -1))
    internalContext.renderHandlersNeedSortCheck = false
  }
}

const runFrameHandlers = (delta: number, frame?: XRFrame) => {
  frameHandlers.forEach((item) => item.fn(context, delta, frame))
}

export const frameloop = (time: number, frame: XRFrame) => {
  const now = performance.now()
  const delta = now - then
  then = time

  if (frameHandlers.length > 0) {
    runFrameHandlers(delta, frame)
  }

  if (renderHandlers.length > 0) {
    runRenderHandlers(delta)
  } else {
    context.renderer.render(context.scene, context.camera.current)
  }
}
