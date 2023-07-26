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

export const injectInteractivityPlugin = (): void => {
  useOnAdd((object) => addInteractiveObject(object))
  useOnRemove((object) => removeInteractiveObject(object))
}

export { addInteractiveObject, removeInteractiveObject } from './hook'
