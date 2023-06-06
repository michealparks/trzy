const pressedKeys = new Set<string>()

let initialized = false
let preventDefault = false

const keyboard = {
  keys: {} as Record<string, boolean>,
  controlling: false,
  shift: 0,
  space: 0,
  r: 0,
  x: 0,
  y: 0,
}

const handleKey = (key: string, pressed: number): void => {
  const lowerkey = key.toLowerCase()

  switch (lowerkey) {
  case 's':
  case 'arrowdown':
    keyboard.y = -1 * pressed
    break
  case 'w':
  case 'arrowup':
    keyboard.y = +1 * pressed
    break
  case 'a':
  case 'arrowleft':
    keyboard.x = -1 * pressed
    break
  case 'd':
  case 'arrowright':
    keyboard.x = +1 * pressed
    break
  case ' ':
    keyboard.space = +1 * pressed
    break
  case 'q':
    keyboard.r = +1 * pressed
    break
  case 'e':
    keyboard.r = -1 * pressed
    break
  case 'shift':
    keyboard.shift = +1 * pressed
    break
  default:
    break
  }

  if (pressed === 1) {
    keyboard.keys[lowerkey] = true
  } else {
    delete keyboard.keys[lowerkey]
  }
}

const handleKeyDown = (event: KeyboardEvent): void => {
  if (preventDefault) {
    event.preventDefault()
    event.stopImmediatePropagation()
  }

  const key = event.key.toLowerCase()
  keyboard.controlling = true

  pressedKeys.add(key)

  for (const pressedKey of pressedKeys) {
    handleKey(pressedKey, 1)
  }
}

const handleKeyUp = (event: KeyboardEvent): void => {
  if (preventDefault) {
    event.preventDefault()
    event.stopImmediatePropagation()
  }
  
  const key = event.key.toLowerCase()
  pressedKeys.delete(key)

  handleKey(key, 0)

  for (const pressedKey of pressedKeys) {
    handleKey(pressedKey, 1)
  }

  if (pressedKeys.size === 0) {
    keyboard.controlling = false
  }
}  

const handleBlur = (): void => {
  for (const pressedKey of pressedKeys) {
    handleKey(pressedKey, 0)
  }
  pressedKeys.clear()
}

const disposeKeyboard = (): void => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
  window.addEventListener('blur', handleBlur)
  initialized = false
}

/**
 * 
 * @param options
 * @param options.preventDefault If true, prevents default on every keyup / keydown. Default is true.
 */
export const useKeyboard = (options: { preventDefault?: boolean } = {}): {
  keyboard: typeof keyboard,
  disposeKeyboard: () => void
} => {
  preventDefault = options.preventDefault ?? false

  if (!initialized) {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)
  }

  return { keyboard, disposeKeyboard }
}
