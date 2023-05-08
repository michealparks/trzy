import{a as h,R as P,bk as x,bl as f,bm as y}from"./teleport-abaf98f6.js";import{s as G}from"./lib-78c556bf.js";const R=`import { three } from 'trzy'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

const renderer = WebGPU.isAvailable() ? new WebGPURenderer() : undefined
const { update } = three({ renderer })

update(() => {
  
})
`,w={title:"XR",parameters:{docs:{description:{component:""},source:{code:R}}}},U=()=>{const r=document.createElement("div");r.style.cssText="width:100%;height:420px;";const{canvas:o,camera:s,scene:n,renderer:a,update:c}=h();r.append(o),a.xr.enabled=!0;const u=new P,d=x({renderer:a,scene:n,camera:s.current,raycaster:u});f.createButton(a).then(p=>r.append(p)),G({canvas:o,camera:s,scene:n,update:c,controls:!0});const e=y(void 0,30,30);return e.position.y=-4.5,e.rotation.x=-Math.PI/2,e.rotation.z=Math.PI/4,n.add(e),d.enable(e),c((p,b)=>d.update(b)),r},t={render:U};var m,i,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["Primary"];export{t as Primary,g as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories-4003a214.js.map
