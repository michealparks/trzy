export const dispatcher = () => {
  const listeners: Record<string, (() => void)[]> = {}

  const on = (event: string, fn: () => void) => {
    listeners[event] ??= []
    listeners[event]!.push(fn)
  }

  const off = (event: string, fn: () => void) => {
    const fns = listeners[event]

    if (fns === undefined) {
      return
    }

    fns.splice(fns.indexOf(fn), 1)
  }

  const fire = (event: string) => {
    const fns = listeners[event]

    if (fns === undefined) {
      return
    }

    for (let index = 0, length = fns.length; index < length; index += 1) {
      fns[index]!()
    }
  }

  return {
    listeners,
    on,
    off,
    fire,
  }
}
