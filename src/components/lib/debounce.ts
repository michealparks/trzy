export const debounce = <T extends Function>(callback: T, delay = 100) => {
  let id: number | undefined

  return (...args: unknown[]) => {
    window.clearTimeout(id)
    id = window.setTimeout(callback, delay, ...args)
  }
}
