import{s as w,a as m}from"./setup-9d42791d.js";const t=new Set;let y=!1,c=!1;const o={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},s=(r,e)=>{const a=r.toLowerCase();switch(a){case"s":case"arrowdown":o.y=-1*e;break;case"w":case"arrowup":o.y=1*e;break;case"a":case"arrowleft":o.x=-1*e;break;case"d":case"arrowright":o.x=1*e;break;case" ":o.space=1*e;break;case"q":o.r=1*e;break;case"e":o.r=-1*e;break;case"shift":o.shift=1*e;break}e===1?o.keys[a]=!0:delete o.keys[a]},f=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();o.controlling=!0,t.add(e);for(const a of t)s(a,1)},p=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();t.delete(e),s(e,0);for(const a of t)s(a,1);t.size===0&&(o.controlling=!1)},u=()=>{for(const r of t)s(r,0);t.clear()},k=()=>{window.removeEventListener("keydown",f),window.removeEventListener("keyup",p),window.addEventListener("blur",u),y=!1},b=(r={})=>(c=r.preventDefault??!1,y||(window.addEventListener("keydown",f),window.addEventListener("keyup",p),window.addEventListener("blur",u)),{keyboard:o,disposeKeyboard:k}),K=`import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// later
disposeKeyboard()
`,h={title:"Keyboard",parameters:{docs:{source:{code:K}}}},v=()=>{w();const r=document.createElement("container"),e=document.createElement("pre");r.append(e);const{keyboard:a}=b();return m(()=>{e.innerHTML=JSON.stringify(a,void 0,"  ")}),r},n={render:v};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["Primary"];export{n as Primary,E as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-dc7cbe4c.js.map
