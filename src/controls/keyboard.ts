/**
 * 
 * @param options
 * @param options.element The element to attach the keyboard and blur event listeners. Default is window.
 * @param options.preventDefault If true, prevents default on every keyup / keydown. Default is true.
 */
export const keyboardManager = (options: {
  element?: HTMLElement
  preventDefault?: boolean
} = {}) => {
  const {
    element = window,
    preventDefault = true
  } = options

  const pressedKeys = new Set<string>()

  const keyboard = {
    keys: {} as Record<string, boolean>,
    controlling: false,
    shift: 0,
    space: 0,
    r: 0,
    x: 0,
    y: 0,
  }

  const handleKey = (key: string, pressed: number) => {
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

  const handleKeyDown = (event: KeyboardEvent) => {
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

  const handleKeyUp = (event: KeyboardEvent) => {
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

  const handleBlur = () => {
    for (const pressedKey of pressedKeys) {
      handleKey(pressedKey, 0)
    }
    pressedKeys.clear()
  }

  const disposeKeyboard = () => {
    // @ts-expect-error :|
    element.removeEventListener('keydown', handleKeyDown)
    // @ts-expect-error :|
    element.removeEventListener('keyup', handleKeyUp)
    element.addEventListener('blur', handleBlur)
  }

  // @ts-expect-error :|
  element.addEventListener('keydown', handleKeyDown)
  // @ts-expect-error :|
  element.addEventListener('keyup', handleKeyUp)
  element.addEventListener('blur', handleBlur)

  return { keyboard, disposeKeyboard }
}
