import{a as b,R as h,bk as P,bl as x,bm as f}from"./teleport-12648e09.js";import{s as y}from"./lib-d58bb1a1.js";const G=`import { three } from 'trzy'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

const renderer = WebGPU.isAvailable() ? new WebGPURenderer() : undefined
const { update } = three({ renderer })

update(() => {
  
})
`,v={title:"XR",parameters:{docs:{description:{component:""},source:{code:G}}}},R=()=>{const r=document.createElement("div");r.style.cssText="width:100%;height:420px;";const{canvas:o,camera:s,scene:n,renderer:a,update:m}=b();r.append(o),a.xr.enabled=!0;const i=new h,l=P({renderer:a,scene:n,camera:s.current,raycaster:i});x.createButton(a).then(u=>r.append(u)),y({canvas:o,camera:s,scene:n,update:m,controls:!0});const e=f(void 0,30,30);return e.position.y=-4.5,e.rotation.x=-Math.PI/2,e.rotation.z=Math.PI/4,n.add(e),l.enable(e),r},t={render:R};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const w=["Primary"];export{t as Primary,w as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-e5749c46.js.map
