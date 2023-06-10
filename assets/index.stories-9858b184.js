import{M as i}from"./index-c19b1d0d.js";import{j as e}from"./jsx-runtime-085584dc.js";import{u as a}from"./index-704aaecd.js";import"./iframe-14606eeb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:t}=Object.assign({},a(),r.components);return t?e.jsx(t,{...r,children:e.jsx(s,{})}):s();function s(){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Lib"}),`
`,e.jsx(n.h3,{id:"animation",children:"Animation"}),`
`,e.jsx(n.p,{children:"Functions for more easily handling animations"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { fadeToAction } from 'trzy'

fadeToAction(lastAction, nextAction, duration, loop)
`})}),`
`,e.jsx(n.h3,{id:"assets",children:"Assets"}),`
`,e.jsx(n.p,{children:"Light abstractions on top of THREE loaders"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { setPath, loadAudio, loadFile, loadGLTF, loadTexture } from 'trzy'

setPath('path/to/assets')

const audio = await loadAudio('audio.mp3')
const file = await loadFile('file.json')
const gltf = await loadGLTF('cat.glb')
const texture = await loadTexture('dog.png')
`})}),`
`,e.jsx(n.h3,{id:"audio",children:"Audio"}),`
`,e.jsx(n.p,{children:"Additional audio helpers"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { preloadAudio, playAudio } from 'trzy'

preloadAudio('rickroll.mp3')
playAudio('rickroll.mp3', volume, loop)
`})}),`
`,e.jsx(n.h3,{id:"resizing",children:"Resizing"}),`
`,e.jsx(n.p,{children:"Helpers for resizing the rendererer / effect composer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { rendererResizer } from 'trzy'

const disposeResizer = rendererResizer(camera, renderer, composer, dpi)

`})}),`
`,e.jsx(n.h3,{id:"storage",children:"Storage"}),`
`,e.jsx(n.p,{children:"Localstorage but with JSON"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { save, load } from 'trzy'

save('bill', { type: 'mage', health: 0.25 })

const stats = load('bill')
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const y=["__page"];export{y as __namedExportsOrder,l as __page,o as default};
//# sourceMappingURL=index.stories-9858b184.js.map
