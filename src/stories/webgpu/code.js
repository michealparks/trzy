import { three } from 'trzy'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

const renderer = WebGPU.isAvailable() ? new WebGPURenderer() : undefined
const { update } = three({ renderer })

update(() => {
  
})
