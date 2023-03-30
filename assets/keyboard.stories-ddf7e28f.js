import{t as m,u as k}from"./index-d0386946.js";const o=new Set;let y=!1,c=!1;const r={keys:{},controlling:!1,shift:0,space:0,r:0,x:0,y:0},s=(e,t)=>{const n=e.toLowerCase();switch(n){case"s":case"arrowdown":r.y=-1*t;break;case"w":case"arrowup":r.y=1*t;break;case"a":case"arrowleft":r.x=-1*t;break;case"d":case"arrowright":r.x=1*t;break;case" ":r.space=1*t;break;case"q":r.r=1*t;break;case"e":r.r=-1*t;break;case"shift":r.shift=1*t;break}t===1?r.keys[n]=!0:delete r.keys[n]},p=e=>{c&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.key.toLowerCase();r.controlling=!0,o.add(t);for(const n of o)s(n,1)},u=e=>{c&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.key.toLowerCase();o.delete(t),s(t,0);for(const n of o)s(n,1);o.size===0&&(r.controlling=!1)},f=()=>{for(const e of o)s(e,0);o.clear()},b=()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",u),window.addEventListener("blur",f),y=!1},h=(e={})=>(c=e.preventDefault??!0,y||(window.addEventListener("keydown",p),window.addEventListener("keyup",u),window.addEventListener("blur",f)),{keyboard:r,disposeKeyboard:b}),v={title:"Keyboard",parameters:{docs:{source:{code:`import { useKeyboard } from 'trzy'

const { keyboard, disposeKeyboard } = useKeyboard({ preventDefault: true })

// later
disposeKeyboard()`}}}},a={render:()=>{const e=document.createElement("div");e.style.cssText="position: relative; width: 100%; height: 400px;";const t=document.createElement("pre");e.append(t);const{keyboard:n}=h(),{run:w}=m();return k(()=>{t.innerHTML=JSON.stringify(n,null,"  ")}),w(),e}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 100%; height: 400px;';
    const pre = document.createElement('pre');
    container.append(pre);
    const {
      keyboard
    } = useKeyboard();
    const {
      run
    } = threeInstance();
    update(() => {
      pre.innerHTML = JSON.stringify(keyboard, null, '  ');
    });
    run();
    return container;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const g=["Primary"];export{a as Primary,g as __namedExportsOrder,v as default};
//# sourceMappingURL=keyboard.stories-ddf7e28f.js.map
