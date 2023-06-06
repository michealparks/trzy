import { Html, raf } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  camera,
  canvas,
  object3D,
})

raf(() => {
  // render your scene, then update.
  html.update()
})
