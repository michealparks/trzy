import{M as o}from"./index-cf594fad.js";import{j as e}from"./jsx-runtime-2a01e979.js";import{u as a}from"./index-f63c64c1.js";import"./iframe-d4e350cd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";function s(n){const r=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Core"}),`
`,e.jsx(r.p,{children:`The Trzy library mainly consists of extras, utils, and helpers, but also contains
a very thin framework meant to resemble React Three Fiber or Threlte.`}),`
`,e.jsx(r.h3,{id:"trzy",children:"trzy"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"trzy"}),` function will instantiate everything you need to get a THREE.js project started.
It should be only called once per project.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { trzy } from 'trzy'

trzy()
`})}),`
`,e.jsx(r.h3,{id:"usetrzy",children:"useTrzy"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useTrzy"})," function will provide all instantiated objects."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { useTrzy, ambientLight, box } from 'trzy'

const { scene, camera, renderer } = useTrzy()
`})}),`
`,e.jsx(r.p,{children:"Trzy will automatically create a render loop, and callbacks can be added to it."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { useFrame } from 'trzy'

useFrame((ctx, delta) => {
  ctx.camera.current.position.z += 0.1
})
`})}),`
`,e.jsx(r.p,{children:"Frame callbacks can be manually started and stopped, and render order can be specified."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { useFrame } from 'trzy'

const { start, stop, started } = useFrame((ctx) => {
  if (started.current && ctx.camera.current.position > 10) {
    stop()
  }
}, { autostart: false, order: 1 })

`})}),`
`,e.jsx(r.p,{children:"Cameras can be changed by reassigning the default camera."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { useTrzy } from 'trzy'

const { camera } = useTrzy()

camera.current = new THREE.OrthographicCamera()
`})})]})}function c(n={}){const{wrapper:r}=Object.assign({},a(),n.components);return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const t={title:"Core",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:c};const z=["__page"];export{z as __namedExportsOrder,i as __page,t as default};
//# sourceMappingURL=index.stories-2194be99.js.map
