import { getDefaultComputeFunction } from './compute'
import { injectInteractivityPlugin } from './plugin'
import { setupInteractivity } from './setup'
import type { ComputeFunction, FilterFunction } from './types'
import { context } from './context'

const interactivity = (options: {
  target: HTMLElement
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
  enabled?: boolean
  /**
   * The compute function is responsible for updating the state of the interactivity plugin.
   * It needs to set up the raycaster and the pointer vector. If no compute function is provided,
   * the plugin will use the default compute function.
   */
  compute?: ComputeFunction
  /**
   * The filter function is responsible for filtering and sorting the
   * intersections. By default, the intersections are sorted by distance. If no
   * filter function is provided, the plugin will use the default filter function.
   */
  filter?: FilterFunction
}) => {
  context.camera = options.camera
  context.enabled = options.enabled ?? true
  context.target = options.target
  context.filter = options.filter
  context.compute = options.compute ?? getDefaultComputeFunction()

  injectInteractivityPlugin()
  setupInteractivity()

  return context
}

export type { DomEvent, Intersection, IntersectionEvent } from './types'
export { interactivity }
