import{t as k}from"./teleport-97191997.js";const a=new Set;let y=!1,c=!1;const o={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},s=(r,e)=>{const t=r.toLowerCase();switch(t){case"s":case"arrowdown":o.y=-1*e;break;case"w":case"arrowup":o.y=1*e;break;case"a":case"arrowleft":o.x=-1*e;break;case"d":case"arrowright":o.x=1*e;break;case" ":o.space=1*e;break;case"q":o.r=1*e;break;case"e":o.r=-1*e;break;case"shift":o.shift=1*e;break}e===1?o.keys[t]=!0:delete o.keys[t]},f=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();o.controlling=!0,a.add(e);for(const t of a)s(t,1)},p=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();a.delete(e),s(e,0);for(const t of a)s(t,1);a.size===0&&(o.controlling=!1)},u=()=>{for(const r of a)s(r,0);a.clear()},m=()=>{window.removeEventListener("keydown",f),window.removeEventListener("keyup",p),window.addEventListener("blur",u),y=!1},b=(r={})=>(c=r.preventDefault??!1,y||(window.addEventListener("keydown",f),window.addEventListener("keyup",p),window.addEventListener("blur",u)),{keyboard:o,disposeKeyboard:m}),K=`import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// later
disposeKeyboard()
`,L={title:"Keyboard",parameters:{docs:{source:{code:K}}}},h=()=>{const r=document.createElement("container"),e=document.createElement("pre");r.append(e);const{keyboard:t}=b(),{update:w}=k();return w(()=>{e.innerHTML=JSON.stringify(t,void 0,"  ")}),r},n={render:h};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["Primary"];export{n as Primary,E as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-693b651c.js.map
