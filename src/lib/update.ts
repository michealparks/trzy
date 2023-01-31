type Callback = (time: number, delta: number) => void

const callbacks: Callback[] = []

let time = performance.now()
let then = performance.now()

export const runUpdates = () => {
  time = performance.now()
  const delta = time - then
  then = time

  for (let i = 0, l = callbacks.length; i < l; i += 1) {
    callbacks[i]!(time, delta)
  }
}

/**
 * Registers a callback that will be executed on each frame.
 * @param callback The callback to execute on each frame.
 */
export const update = (callback: Callback) => {
  callbacks.push(callback)
}

export const removeUpdate = (callback: Callback) => {
  callbacks.splice(callbacks.indexOf(callback), 1)
}
