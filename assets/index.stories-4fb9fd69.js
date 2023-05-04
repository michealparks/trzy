import{r as u,M as x}from"./index-4d7c8a4f.js";import{u as p}from"./index-cbb608e3.js";import"./iframe-546cfa9e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";var c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=u,h=Symbol.for("react.element"),_=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(r,t,n){var e,s={},l=null,d=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(d=t.ref);for(e in t)j.call(t,e)&&!y.hasOwnProperty(e)&&(s[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)s[e]===void 0&&(s[e]=t[e]);return{$$typeof:h,type:r,key:l,ref:d,props:s,_owner:g.current}}i.Fragment=_;i.jsx=m;i.jsxs=m;c.exports=i;var o=c.exports;function A(r={}){const{wrapper:t}=Object.assign({},p(),r.components);return t?o.jsx(t,{...r,children:o.jsx(n,{})}):n();function n(){const e=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},p(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{title:"Lib"}),`
`,o.jsx(e.h3,{id:"animation",children:"Animation"}),`
`,o.jsx(e.p,{children:"Functions for more easily handling animations"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-ts",children:`import { fadeToAction } from 'trzy'

fadeToAction(lastAction, nextAction, duration, loop)
`})}),`
`,o.jsx(e.h3,{id:"assets",children:"Assets"}),`
`,o.jsx(e.p,{children:"Light abstractions on top of THREE loaders"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-ts",children:`import { setPath, loadAudio, loadFile, loadGLTF, loadTexture } from 'trzy'

setPath('path/to/assets')

const audio = await loadAudio('audio.mp3')
const file = await loadFile('file.json')
const gltf = await loadGLTF('cat.glb')
const texture = await loadTexture('dog.png')
`})}),`
`,o.jsx(e.h3,{id:"audio",children:"Audio"}),`
`,o.jsx(e.p,{children:"Additional audio helpers"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-ts",children:`import { preloadAudio, playAudio } from 'trzy'

preloadAudio('rickroll.mp3')
playAudio('rickroll.mp3', volume, loop)
`})})]})}}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const a={title:"Lib",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:A};const M=["__page"];export{M as __namedExportsOrder,E as __page,a as default};
//# sourceMappingURL=index.stories-4fb9fd69.js.map
