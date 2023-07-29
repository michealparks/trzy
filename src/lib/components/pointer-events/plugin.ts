import { useOnAdd, useOnRemove } from '../lib/add-remove'
import { addInteractiveObject, removeInteractiveObject } from './hook'

export const interactivityEventNames = [
  'click',
  'contextmenu',
  'dblclick',
  'wheel',
  'pointerup',
  'pointerdown',
  'pointerover',
  'pointerout',
  'pointerenter',
  'pointerleave',
  'pointermove',
  'pointermissed',
]

export const injectInteractivityPlugin = () => {
  const disposeAdd = useOnAdd((object) => addInteractiveObject(object))
  const disposeRemove = useOnRemove((object) => removeInteractiveObject(object))

  return () => {
    disposeAdd()
    disposeRemove()
  }
}

export { addInteractiveObject, removeInteractiveObject } from './hook'
