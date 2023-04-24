import{c as m,n as p}from"./index-99b0b950.js";import{s as u}from"./lib-54ac10ae.js";const i=`import { three } from 'trzy'

const { update } = three({ webGPU: true })

update(() => {
  // Will run after each frame is rendered.
})
`,l={title:"WebGPU",parameters:{docs:{description:{component:""},source:{code:i}}}},f=()=>{const{canvas:r,camera:o,scene:s,renderer:c,update:d}=m({webGPU:!0});return c.shadow.type=p,u({canvas:r,camera:o,scene:s,update:d,controls:!0,webGPU:!0}),r},e={render:f};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,l as default};
//# sourceMappingURL=index.stories-fb064e32.js.map
