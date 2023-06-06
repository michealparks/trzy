export const throttle = <T extends Function>(callback: T, delay = 500) => {
  let shouldWait = false

  return (...args: unknown[]) => {
    if (shouldWait) {
      return
    }

    callback(...args)
    shouldWait = true
    window.setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}
