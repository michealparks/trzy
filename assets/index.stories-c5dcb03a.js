import{M as i}from"./index-2f0e13e8.js";import{j as e}from"./jsx-runtime-fb6d6fac.js";import{u as s}from"./index-6fa08cb5.js";import"./iframe-d81bd6c4.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./assert-8a73c1e6.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-3a491cd6.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Lib"}),`
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
`})})]})}function a(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const y=["__page"];export{y as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=index.stories-c5dcb03a.js.map
