import { useAdd, useRemove } from '$lib/hooks'
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
  const disposeAdd = useAdd((object) => addInteractiveObject(object))
  const disposeRemove = useRemove((object) => removeInteractiveObject(object))

  return () => {
    disposeAdd()
    disposeRemove()
  }
}

export { addInteractiveObject, removeInteractiveObject } from './hook'
