import { Html } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  camera,
  canvas,
  object3D,
})

 // In your frame loop, render your scene, then update html.
 html.update()
