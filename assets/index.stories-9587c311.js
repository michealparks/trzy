import{t as k}from"./teleport-3940721f.js";const a=new Set;let y=!1,c=!1;const t={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},s=(r,e)=>{const o=r.toLowerCase();switch(o){case"s":case"arrowdown":t.y=-1*e;break;case"w":case"arrowup":t.y=1*e;break;case"a":case"arrowleft":t.x=-1*e;break;case"d":case"arrowright":t.x=1*e;break;case" ":t.space=1*e;break;case"q":t.r=1*e;break;case"e":t.r=-1*e;break;case"shift":t.shift=1*e;break}e===1?t.keys[o]=!0:delete t.keys[o]},f=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();t.controlling=!0,a.add(e);for(const o of a)s(o,1)},p=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();a.delete(e),s(e,0);for(const o of a)s(o,1);a.size===0&&(t.controlling=!1)},u=()=>{for(const r of a)s(r,0);a.clear()},m=()=>{window.removeEventListener("keydown",f),window.removeEventListener("keyup",p),window.addEventListener("blur",u),y=!1},b=(r={})=>(c=r.preventDefault??!1,y||(window.addEventListener("keydown",f),window.addEventListener("keyup",p),window.addEventListener("blur",u)),{keyboard:t,disposeKeyboard:m}),K=`import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// later
disposeKeyboard()
`,v={title:"Keyboard",parameters:{docs:{source:{code:K}}}},h=()=>{const r=document.createElement("container"),e=document.createElement("pre");r.append(e);const{keyboard:o}=b(),{update:w}=k();return w(()=>{e.innerHTML=JSON.stringify(o,null,"  ")}),r},n={render:h};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["Primary"];export{n as Primary,E as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories-9587c311.js.map
