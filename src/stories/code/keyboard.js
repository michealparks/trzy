import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// Later
disposeKeyboard()
