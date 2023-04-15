import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// later
disposeKeyboard()
