import{c as d}from"./index-86dc3ddb.js";import{s as p}from"./lib-d171c297.js";const u=`import { three } from 'trzy'

const { update } = three({ webGPU: true })

update(() => {
  // Will run after each frame is rendered.
})
`,P={title:"WebGPU",parameters:{docs:{description:{component:""},source:{code:u}}}},i=()=>{const{canvas:r,camera:s,scene:a,renderer:c,update:m}=d({webGPU:!0});return console.log(c),p({canvas:r,camera:s,scene:a,update:m,controls:!0,webGPU:!0}),r},e={render:i};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,P as default};
//# sourceMappingURL=index.stories-385dbe7b.js.map
