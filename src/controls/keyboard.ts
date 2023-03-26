export const keyboardManager = () => {
  const pressedKeys = new Set<string>()

  const keyboard = {
    controlling: false,
    shift: 0,
    space: 0,
    r: 0,
    x: 0,
    y: 0,
  }

  const handleKey = (key: string, pressed: number) => {
    switch (key.toLowerCase()) {
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
  }

  const handleKeyDown = (event: { key: string }) => {
    const key = event.key.toLowerCase()
    keyboard.controlling = true
  
    pressedKeys.add(key)
  
    for (const pressedKey of pressedKeys) {
      handleKey(pressedKey, 1)
    }
  }

  const handleKeyUp = (event: { key: string }) => {
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

  const dispose = () => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  }

  window.addEventListener('keydown', handleKeyDown, { passive: true })
  window.addEventListener('keyup', handleKeyUp, { passive: true })

  return { keyboard, dispose }
}
