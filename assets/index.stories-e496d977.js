import{r as u,M as x}from"./index-655a9cbd.js";import{u as p}from"./index-8e82be09.js";import"./iframe-5655107e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,h=Symbol.for("react.element"),j=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(n,o,t){var e,s={},d=null,l=null;t!==void 0&&(d=""+t),o.key!==void 0&&(d=""+o.key),o.ref!==void 0&&(l=o.ref);for(e in o)_.call(o,e)&&!y.hasOwnProperty(e)&&(s[e]=o[e]);if(n&&n.defaultProps)for(e in o=n.defaultProps,o)s[e]===void 0&&(s[e]=o[e]);return{$$typeof:h,type:n,key:d,ref:l,props:s,_owner:g.current}}a.Fragment=j;a.jsx=m;a.jsxs=m;c.exports=a;var r=c.exports;function A(n={}){const{wrapper:o}=Object.assign({},p(),n.components);return o?r.jsx(o,{...n,children:r.jsx(t,{})}):t();function t(){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},p(),n.components);return r.jsxs(r.Fragment,{children:[r.jsx(x,{title:"Lib"}),`
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

`})})]})}}const R=()=>{throw new Error("Docs-only story")};R.parameters={docsOnly:!0};const i={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:A};const k=["__page"];export{k as __namedExportsOrder,R as __page,i as default};
//# sourceMappingURL=index.stories-e496d977.js.map
