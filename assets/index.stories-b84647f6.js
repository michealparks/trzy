import{bl as w,bm as P,a as g,bn as O}from"./teleport-3940721f.js";import{s as L}from"./lib-532181b1.js";const s={ALLOWED:0,NOT_ALLOWED:1,NOT_SECURE:2,NOT_SUPPORTED:3},E={0:"Enter VR",1:"VR is not allowed",2:"VR requires HTTPS",3:"VR not supported"},R=(o,c,u)=>{navigator.xr===void 0||/WebXRViewer\//ui.test(navigator.userAgent)||navigator.xr.addEventListener("sessiongranted",()=>{p.sessionGranted=!0});let t;const p={sessionGranted:!1},a=w(o,c,u),r={},i=(e,n)=>{r[e]??(r[e]=[]),r[e].push(n)},d=e=>{const n=r[e];if(n!==void 0)for(let f=0,T=n.length;f<T;f+=1)n[f]()},l=async()=>{if(navigator.xr===void 0)return s.NOT_SUPPORTED;if(!window.isSecureContext)return s.NOT_SECURE;try{return await navigator.xr.isSessionSupported("immersive-vr")?s.ALLOWED:s.NOT_SUPPORTED}catch{return s.NOT_ALLOWED}},x=async()=>{if(navigator.xr===void 0)throw new Error("navigator.xr is undefined!");t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]}),t.addEventListener("end",()=>d("end")),t.addEventListener("exit",()=>d("exit")),await o.xr.setSession(t),d("enter")},b={state:p,supportStates:s,supportStateMessages:E,createButton:async()=>{const e=await l(),n=document.createElement("button");return n.textContent=E[e],e===s.ALLOWED&&n.addEventListener("click",x),n},requestSessionSupport:l,requestSession:x,endSession:()=>{if(t===void 0)throw new Error("Tried to end undefined session!");t.end()},showControllers:()=>(P(o,c),b),enableTeleport:(...e)=>(a.enable(...e),b),disableTeleport:()=>{a.disable()},on:i,update:e=>{a.update(e)}};return b},W=`import { three } from 'trzy'
import WebGPU from 'three/examples/jsm/capabilities/WebGPU'
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

const renderer = WebGPU.isAvailable() ? new WebGPURenderer() : undefined
const { update } = three({ renderer })

update(() => {
  
})
`,q={title:"XR",parameters:{docs:{description:{component:""},source:{code:W}}}},U=()=>{const o=document.createElement("div");o.style.cssText="width:100%;height:420px;";const{canvas:c,camera:u,scene:t,renderer:p,update:a}=g();o.append(c),p.xr.enabled=!0;const r=R(p,t,u.current);r.createButton().then(d=>o.append(d)),r.showControllers().enableTeleport(),L({canvas:c,camera:u,scene:t,update:a,controls:!0});const i=O(void 0,30,30);return i.position.y=-4.5,i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/4,t.add(i),a((d,l)=>r.update(l)),o},m={render:U};var h,v,S;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const B=["Primary"];export{m as Primary,B as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-b84647f6.js.map
