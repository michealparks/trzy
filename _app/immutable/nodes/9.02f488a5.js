import{s as k,o as P,n as z}from"../chunks/scheduler.b0c1c2c3.js";import{S as I,i as R,r as E,u as $,v as b,d as O,t as w,w as M,g as H,s as y,h as S,z as D,c as _,a as m,f as h}from"../chunks/index.f44ac6f0.js";import{e as n,f as T,g as A,u as F,s as X,c as Y,h as q,b as B,C as G}from"../chunks/setup.f293222f.js";import{D as J,C as K}from"../chunks/code.749cf45e.js";const Q=t=>{t.traverse(e=>{const r="isMesh"in e,s="isLight"in e&&!("isAmbientLight"in e)&&!("isRectAreaLight"in e);e.castShadow=r||s,e.receiveShadow=r})},U=()=>{let t=0,e=0;return new ResizeObserver(([s])=>{t=(s==null?void 0:s.contentRect.width)??0,e=(s==null?void 0:s.contentRect.height)??0}).observe(n.target),s=>{n.pointer.set(s.offsetX/t*2-1,-(s.offsetY/e*2)+1),n.raycaster.setFromCamera(n.pointer,n.camera)}},V=t=>{n.interactiveMap[t.uuid]===void 0&&(n.interactiveObjects.push(t),n.interactiveMap[t.uuid]=t)},W=t=>{const e=n.interactiveObjects.indexOf(t);n.interactiveObjects.splice(e,1),delete n.interactiveMap[t.uuid]},Z=()=>{const t=T(r=>V(r)),e=A(r=>W(r));return()=>{t(),e()}},x=t=>`${(t.eventObject||t.object).uuid}/${t.index}${t.instanceId}`,C=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],N=t=>{const e=t.offsetX-(n.initialClick[0]??0),r=t.offsetY-(n.initialClick[1]??0);return Math.round(Math.hypot(e,r))},g=t=>{n.hovered.forEach(e=>{if(t.length===0||!t.some(r=>r.object===e.object&&r.index===e.index&&r.instanceId===e.instanceId)){const{eventObject:r}=e;n.hovered.delete(x(e)),r.dispatchEvent({type:"pointerout",...e,intersections:t}),r.dispatchEvent({type:"pointerleave",...e,intersections:t})}})},ee=()=>{const t=new Set,e=[];let r=n.raycaster.intersectObjects(n.interactiveObjects).sort((s,i)=>s.distance-i.distance).filter(s=>{const i=x(s);return t.has(i)?!1:(t.add(i),!0)});return n.filter&&(r=n.filter(r,n)),r.forEach(s=>{let i=s.object;for(;i;)e.push({...s,eventObject:i}),i=i.parent}),e},j=(t,e)=>{e.forEach(r=>{r.dispatchEvent({type:"pointermissed",event:t})})},L=t=>t==="pointerleave"||t==="pointercancel"?()=>{n.pointerOverTarget=!1,g([])}:t==="pointerenter"?()=>{n.pointerOverTarget=!0}:e=>{const r=t==="pointermove",s=t==="click"||t==="contextmenu"||t==="dblclick";n.compute(e,n);const i=n.enabled?ee():[],c=s?N(e):0;t==="pointerdown"&&(n.initialClick=[e.offsetX,e.offsetY],n.initialHits=i.map(o=>o.eventObject)),s&&i.length===0&&c<=2&&j(e,n.interactiveObjects),r&&g(i);let p=!1;const a=()=>{p=!0};for(let o=0,u=i.length;o<u;o+=1){const l=i[o],d={stopped:p,...l,intersections:i,stopPropagation(){a(),d.stopped=!0;const f=[...n.hovered.values()];if(n.hovered.size>0&&f.some(v=>v.eventObject===l.eventObject)){const v=i.slice(0,i.indexOf(l));g([...v,l])}},camera:n.raycaster.camera,delta:c,nativeEvent:e,pointer:n.pointer,ray:n.raycaster.ray};if(r){const f=x(d),v=n.hovered.get(f);v?v.stopped&&d.stopPropagation():(n.hovered.set(f,d),l.eventObject.dispatchEvent({type:"pointerover",...d}),l.eventObject.dispatchEvent({type:"pointerenter",...d})),l.eventObject.dispatchEvent({type:"pointermove",...d})}else(!s||n.initialHits.includes(l.eventObject))&&(j(e,n.interactiveObjects.filter(f=>!n.initialHits.includes(f))),l.eventObject.dispatchEvent({type:t,...d}));if(p)break}},te=()=>(C.forEach(([t,e])=>{n.target.addEventListener(t,L(t),{passive:e})}),()=>{C.forEach(([t])=>{n.target.removeEventListener(t,L(t))})}),ne=t=>{n.camera=t.camera,n.enabled=t.enabled??!0,n.target=t.target,n.filter=t.filter,n.compute=t.compute??U();const e=Z(),r=te();return{context:n,dispose:()=>{e(),r()}}},se=t=>{const e=2*Math.PI*Math.random();return[t*Math.cos(e),t*Math.sin(e)]},re=`
import * as THREE from 'three'
import { pointerEvents } from 'trzy'

pointerEvents({ target: canvas, camera })

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial()
)

mesh.addEventListener('pointerenter', (event) => console.log(event))
mesh.addEventListener('pointerleave', (event) => console.log(event))
mesh.addEventListener('click', (event) => console.log(event))

mesh.addEventListener('pointerenter', (event) => {
  // Call stop propagation to stop events from firing on other intersections.
  event.stopPropagation()
})
`;function oe(t){let e,r="Adds pointer events to all rendererable objects.",s,i,c,p,a;return i=new G({}),p=new K({props:{code:re}}),{c(){e=H("p"),e.textContent=r,s=y(),E(i.$$.fragment),c=y(),E(p.$$.fragment)},l(o){e=S(o,"P",{"data-svelte-h":!0}),D(e)!=="svelte-1y787p9"&&(e.textContent=r),s=_(o),$(i.$$.fragment,o),c=_(o),$(p.$$.fragment,o)},m(o,u){m(o,e,u),m(o,s,u),b(i,o,u),m(o,c,u),b(p,o,u),a=!0},p:z,i(o){a||(O(i.$$.fragment,o),O(p.$$.fragment,o),a=!0)},o(o){w(i.$$.fragment,o),w(p.$$.fragment,o),a=!1},d(o){o&&(h(e),h(s),h(c)),M(i,o),M(p,o)}}}function ie(t){let e,r;return e=new J({props:{title:"pointerEvents",$$slots:{default:[oe]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,i){b(e,s,i),r=!0},p(s,[i]){const c={};i&1&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i(s){r||(O(e.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),r=!1},d(s){M(e,s)}}}function ae(t){return P(()=>{const{scene:e,camera:r,renderer:s}=F(),{dispose:i}=ne({target:s.domElement,camera:r.current});X();const c=Array.from({length:20}).map(()=>{const a=new Y({color:"yellow"}),o=q(a,.5,.5,.5),[u,l]=se(1.5);return o.position.set(u,-.25,l),o.userData.rotation={y:(Math.random()-.5)*.1,z:(Math.random()-.5)*.1},o.addEventListener("pointerenter",d=>{d.stopPropagation(),a.color.set("hotpink")}),o.addEventListener("pointerleave",()=>a.color.set("yellow")),o.addEventListener("click",()=>a.color.set("blue")),o});e.add(...c),Q(e);const{stop:p}=B(()=>{c.forEach(a=>{a.rotation.y+=a.userData.rotation.y,a.rotation.z+=a.userData.rotation.z})});return()=>{p(),i()}}),[]}class ue extends I{constructor(e){super(),R(this,e,ae,ie,k,{})}}export{ue as component};
