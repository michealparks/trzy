import{r as u,M as h}from"./index-a5134ef7.js";import{u as c}from"./index-196c4450.js";import"./iframe-284ea3b1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u,f=Symbol.for("react.element"),g=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,_=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(o,n,t){var e,s={},d=null,l=null;t!==void 0&&(d=""+t),n.key!==void 0&&(d=""+n.key),n.ref!==void 0&&(l=n.ref);for(e in n)j.call(n,e)&&!y.hasOwnProperty(e)&&(s[e]=n[e]);if(o&&o.defaultProps)for(e in n=o.defaultProps,n)s[e]===void 0&&(s[e]=n[e]);return{$$typeof:f,type:o,key:d,ref:l,props:s,_owner:_.current}}a.Fragment=g;a.jsx=m;a.jsxs=m;p.exports=a;var r=p.exports;function A(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?r.jsx(n,{...o,children:r.jsx(t,{})}):t();function t(){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},c(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{title:"Lib"}),`
`,r.jsx(e.h3,{id:"animation",children:"Animation"}),`
`,r.jsx(e.p,{children:"Functions for more easily handling animations"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`import { fadeToAction } from 'trzy'

fadeToAction(lastAction, nextAction, duration, loop)
`})}),`
`,r.jsx(e.h3,{id:"assets",children:"Assets"}),`
`,r.jsx(e.p,{children:"Light abstractions on top of THREE loaders"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`import { setPath, loadAudio, loadFile, loadGLTF, loadTexture } from 'trzy'

setPath('path/to/assets')

const audio = await loadAudio('audio.mp3')
const file = await loadFile('file.json')
const gltf = await loadGLTF('cat.glb')
const texture = await loadTexture('dog.png')
`})}),`
`,r.jsx(e.h3,{id:"audio",children:"Audio"}),`
`,r.jsx(e.p,{children:"Additional audio helpers"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`import { preloadAudio, playAudio } from 'trzy'

preloadAudio('rickroll.mp3')
playAudio('rickroll.mp3', volume, loop)
`})}),`
`,r.jsx(e.h3,{id:"resizing",children:"Resizing"}),`
`,r.jsx(e.p,{children:"Helpers for resizing the rendererer / effect composer"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`import { addRendererResizer } from 'trzy'

const disposeResizer = addRendererResizer(camera, renderer, composer, dpi)

`})}),`
`,r.jsx(e.h3,{id:"storage",children:"Storage"}),`
`,r.jsx(e.p,{children:"Localstorage but with JSON"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-ts",children:`import { save, load } from 'trzy'

save('bill', { type: 'mage', health: 0.25 })

const stats = load('bill')
`})})]})}}const R=()=>{throw new Error("Docs-only story")};R.parameters={docsOnly:!0};const i={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:A};const F=["__page"];export{F as __namedExportsOrder,R as __page,i as default};
//# sourceMappingURL=index.stories-2f202a01.js.map
