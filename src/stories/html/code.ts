import { Html, useRaf } from 'trzy'

const html = new Html({
  el: document.querySelector('el')
  camera,
  canvas,
  object3D
})

useRaf(() => {
  // render your scene, then update.
  html.update()
})
