import{s as p,d as m}from"./setup-bf23c97c.js";const t=new Set;let y=!1,c=!1;const a={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},s=(r,e)=>{const o=r.toLowerCase();switch(o){case"s":case"arrowdown":{a.y=-1*e;break}case"w":case"arrowup":{a.y=1*e;break}case"a":case"arrowleft":{a.x=-1*e;break}case"d":case"arrowright":{a.x=1*e;break}case" ":{a.space=1*e;break}case"q":{a.r=1*e;break}case"e":{a.r=-1*e;break}case"shift":{a.shift=1*e;break}}e===1?a.keys[o]=!0:delete a.keys[o]},u=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();a.controlling=!0,t.add(e),t.forEach(o=>s(o,1))},f=r=>{c&&(r.preventDefault(),r.stopImmediatePropagation());const e=r.key.toLowerCase();t.delete(e),s(e,0),t.forEach(o=>s(o,1)),t.size===0&&(a.controlling=!1)},w=()=>{t.forEach(r=>s(r,0)),t.clear()},k=()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",f),window.addEventListener("blur",w),y=!1},b=(r={})=>(c=r.preventDefault??!1,y||(window.addEventListener("keydown",u),window.addEventListener("keyup",f),window.addEventListener("blur",w)),{keyboard:a,disposeKeyboard:k}),h=`import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// Later
disposeKeyboard()
`,L={title:"Keyboard",parameters:{docs:{source:{code:h}}}},E=()=>{p();const r=document.createElement("container"),e=document.createElement("pre");r.append(e);const{keyboard:o}=b();return m(()=>{e.innerHTML=JSON.stringify(o,void 0,"  ")}),r},n={render:E};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Primary"];export{n as Primary,v as __namedExportsOrder,L as default};
//# sourceMappingURL=keyboard.stories-b581dbfb.js.map
