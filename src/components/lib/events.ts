export const dispatcher = () => {
  const listeners: Record<string, (() => void)[]> = {}

  const on = (event: string, fn: () => void) => {
    listeners[event] ??= []
    listeners[event]!.push(fn)
  }

  const off = (event: string, fn: () => void) => {
    const fns = listeners[event]

    if (fns === undefined) return

    fns.splice(fns.indexOf(fn), 1)
  }

  const fire = (event: string) => {
    const fns = listeners[event]

    if (fns === undefined) return

    for (let i = 0, l = fns.length; i < l; i += 1) {
      fns[i]!()
    }
  }

  return {
    listeners,
    on,
    off,
    fire,
  }
}
