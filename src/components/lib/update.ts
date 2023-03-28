type Callback = (time: number, delta: number) => void

const updates: Callback[] = []
const postUpdates: Callback[] = []

let time = performance.now()
let then = performance.now()
let delta = 0

export const runUpdates = () => {
  time = performance.now()
  delta = time - then
  then = time

  for (let i = 0, l = updates.length; i < l; i += 1) {
    updates[i]!(time, delta)
  }
}

export const runPostUpdates = () => {
  for (let i = 0, l = postUpdates.length; i < l; i += 1) {
    postUpdates[i]!(time, delta)
  }
}

/**
 * Registers a callback that will be executed before each frame.
 * @param callback The callback to execute before each frame.
 */
export const update = (callback: Callback) => {
  updates.push(callback)
}

/**
 * Registers a callback that will be executed after each frame.
 * @param callback The callback to execute after each frame.
 */
export const postUpdate = (callback: Callback) => {
  postUpdates.push(callback)
}

export const removeUpdate = (callback: Callback) => {
  updates.splice(updates.indexOf(callback), 1)
}

export const removePostUpdate = (callback: Callback) => {
  postUpdates.splice(postUpdates.indexOf(callback), 1)
}
