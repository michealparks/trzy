import{t as b,u as w}from"./index-3135bd9b.js";const h=(s={})=>{const{element:n=window,preventDefault:c=!0}=s,a=new Set,r={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},d=(t,e)=>{const o=t.toLowerCase();switch(o){case"s":case"arrowdown":r.y=-1*e;break;case"w":case"arrowup":r.y=1*e;break;case"a":case"arrowleft":r.x=-1*e;break;case"d":case"arrowright":r.x=1*e;break;case" ":r.space=1*e;break;case"q":r.r=1*e;break;case"e":r.r=-1*e;break;case"shift":r.shift=1*e;break}e===1?r.keys[o]=!0:delete r.keys[o]},l=t=>{c&&(t.preventDefault(),t.stopImmediatePropagation());const e=t.key.toLowerCase();r.controlling=!0,a.add(e);for(const o of a)d(o,1)},y=t=>{c&&(t.preventDefault(),t.stopImmediatePropagation());const e=t.key.toLowerCase();a.delete(e),d(e,0);for(const o of a)d(o,1);a.size===0&&(r.controlling=!1)},p=()=>{for(const t of a)d(t,0);a.clear()},f=()=>{n.removeEventListener("keydown",l),n.removeEventListener("keyup",y),n.addEventListener("blur",p)};return n.addEventListener("keydown",l),n.addEventListener("keyup",y),n.addEventListener("blur",p),{keyboard:r,disposeKeyboard:f}},v={title:"Keyboard",parameters:{docs:{source:{type:"code",code:`
<script>

import { keyboardManager } from 'trzy'

const { keyboard, disposeKeyboard } = keyboardManager({ element: renderer.domElement, preventDefault: true })

// later
disposeKeyboard()

<\/script>
        `}}}},i={render:()=>{const s=document.createElement("div");s.style.cssText="position: relative; width: 100%; height: 400px;";const n=document.createElement("pre");s.append(n);const{keyboard:c}=h(),{run:a}=b();return w(()=>{n.innerHTML=JSON.stringify(c,null,"  ")}),a(),s}};var u,m,k;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(m=i.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const E=["Primary"];export{i as Primary,E as __namedExportsOrder,v as default};
//# sourceMappingURL=keyboard.stories-bc42d94e.js.map
