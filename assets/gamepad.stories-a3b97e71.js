import{r as o,u as m,t as u}from"./index-132f2a42.js";const v=()=>{const e={A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0},n=({axes:t,buttons:a})=>{e.leftStickX=t[0],e.leftStickY=t[1],e.rightStickX=t[2],e.rightStickY=t[3],e.A=a[0].value,e.B=a[1].value,e.X=a[2].value,e.Y=a[3].value,e.leftBumper=a[4].value,e.rightBumper=a[5].value,e.leftTrigger=a[6].value,e.rightTrigger=a[7].value,e.back=a[8].value,e.start=a[9].value,e.leftStickButton=a[10].value,e.rightStickButton=a[11].value,e.padY=-a[12].value||a[13].value,e.padX=-a[14].value||a[15].value},r=()=>{const[t,a]=window.navigator.getGamepads();t!=null&&n(t),a!=null&&n(a)},c=()=>{o(r),e.connected=!1},d=()=>{const[t,a]=navigator.getGamepads();t==null&&a==null||(e.connected=!0,m(r),window.addEventListener("gamepaddisconnected",c))},g=()=>{o(r),window.removeEventListener("gamepadconnected",d),window.removeEventListener("gamepaddisconnected",c)};return window.addEventListener("gamepadconnected",d,{passive:!0}),{gamepad:e,dispose:g}},f={title:"Gamepad",parameters:{docs:{source:{type:"code",code:`
<script>

import { gamepadManager } from 'trzy'

const { gamepad } = gamepadManager()

<\/script>
        `}}}},i={render:()=>{const e=document.createElement("div");e.style.cssText="position: relative; width: 100%; height: 400px;";const n=document.createElement("pre");e.append(n);const{run:r}=u(),{gamepad:c}=v();return m(()=>{n.innerHTML=JSON.stringify(c,null,"  ")}),r(),e}};var p,l,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 100%; height: 400px;';
    const pre = document.createElement('pre');
    container.append(pre);
    const {
      run
    } = threeInstance();
    const {
      gamepad
    } = gamepadManager();
    update(() => {
      pre.innerHTML = JSON.stringify(gamepad, null, '  ');
    });
    run();
    return container;
  }
}`,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const k=["Primary"];export{i as Primary,k as __namedExportsOrder,f as default};
//# sourceMappingURL=gamepad.stories-a3b97e71.js.map
