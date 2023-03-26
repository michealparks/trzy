import{t as u,u as k}from"./index-132f2a42.js";const w=()=>{const r=new Set,e={controlling:!1,shift:0,space:0,r:0,x:0,y:0},t=(a,n)=>{switch(a.toLowerCase()){case"s":case"arrowdown":e.y=-1*n;break;case"w":case"arrowup":e.y=1*n;break;case"a":case"arrowleft":e.x=-1*n;break;case"d":case"arrowright":e.x=1*n;break;case" ":e.space=1*n;break;case"q":e.r=1*n;break;case"e":e.r=-1*n;break;case"shift":e.shift=1*n;break}},o=a=>{const n=a.key.toLowerCase();e.controlling=!0,r.add(n);for(const c of r)t(c,1)},i=a=>{const n=a.key.toLowerCase();r.delete(n),t(n,0);for(const c of r)t(c,1);r.size===0&&(e.controlling=!1)},l=()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)};return window.addEventListener("keydown",o,{passive:!0}),window.addEventListener("keyup",i,{passive:!0}),{keyboard:e,dispose:l}},b={title:"Keyboard",parameters:{docs:{source:{type:"code",code:`
<script>

import { keyboardManager } from 'trzy'

const { keyboard } = keyboardManager()

<\/script>
        `}}}},s={render:()=>{const r=document.createElement("div");r.style.cssText="position: relative; width: 100%; height: 400px;";const e=document.createElement("pre");r.append(e);const{keyboard:t}=w(),{run:o}=u();return k(()=>{e.innerHTML=JSON.stringify(t,null,"  ")}),o(),r}};var d,y,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 100%; height: 400px;';
    const pre = document.createElement('pre');
    container.append(pre);
    const {
      keyboard
    } = keyboardManager();
    const {
      run
    } = threeInstance();
    update(() => {
      pre.innerHTML = JSON.stringify(keyboard, null, '  ');
    });
    run();
    return container;
  }
}`,...(p=(y=s.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const f=["Primary"];export{s as Primary,f as __namedExportsOrder,b as default};
//# sourceMappingURL=keyboard.stories-0e0e8051.js.map
