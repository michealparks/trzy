
import { Html } from 'trzy'

const element = document.createElement('div')
element.innerHTML = 'Cube 1'
element.style.cssText = `
  background: white;
  padding: 0.25rem 0.5rem;
`

const html = new Html({
  element,
  object3D,
})
