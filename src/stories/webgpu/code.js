import { three } from 'trzy'

const { update } = three({ webGPU: true })

update(() => {
  // Will run after each frame is rendered.
})
