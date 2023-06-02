const s=`import { three } from 'trzy'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

const renderer = WebGPU.isAvailable() ? new WebGPURenderer() : undefined
const { update } = three({ renderer })

update(() => {
  
})
`,m={title:"WebGPU",parameters:{docs:{description:{component:""},source:{code:s}}}},a=()=>{const o=document.createElement("div");return(async()=>{})(),o},e={render:a};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,m as default};
//# sourceMappingURL=index.stories-a171a621.js.map
