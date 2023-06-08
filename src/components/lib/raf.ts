const callbacks: ((time: number, delta: number) => void)[] = []

let handle = 0
let time = performance.now()
let then = performance.now()
let delta = 0

const tick = () => {
  time = performance.now()
  delta = time - then
  then = time

  for (let index = 0, l = callbacks.length; index < l; index += 1) {
    callbacks[index]!(time, delta)
  }

  handle = requestAnimationFrame(tick)
}

const destroy = (callback: (time: number, delta: number) => void) => {
  callbacks.splice(callbacks.indexOf(callback), 1)

  if (callbacks.length === 0) {
    cancelAnimationFrame(handle)
  }
}

export const raf = (callback: (time: number, delta: number) => void): () => void => {
  if (callbacks.length === 0) {
    handle = requestAnimationFrame(tick)
  }

  callbacks.push(callback)

  return () => destroy(callback)
}
