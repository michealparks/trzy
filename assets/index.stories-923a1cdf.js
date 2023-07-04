import{M as a}from"./index-cf594fad.js";import{j as e}from"./jsx-runtime-2a01e979.js";import{u as s}from"./index-f63c64c1.js";import"./iframe-d4e350cd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Lib"}),`
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
`})})]})}function i(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:i};const A=["__page"];export{A as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=index.stories-923a1cdf.js.map
