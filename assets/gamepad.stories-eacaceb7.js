import"./index-d0386946.js";const E=()=>({id:"",A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0});let p=!1;const t=E(),r=E(),S=(e,{axes:n,buttons:a})=>{var d,c,m,i,l,s,u,g,f,v,G,h;e.leftStickX=n[0]??0,e.leftStickY=n[1]??0,e.rightStickX=n[2]??0,e.rightStickY=n[3]??0,e.A=((d=a[0])==null?void 0:d.value)??0,e.B=((c=a[1])==null?void 0:c.value)??0,e.X=((m=a[2])==null?void 0:m.value)??0,e.Y=((i=a[3])==null?void 0:i.value)??0,e.leftBumper=((l=a[4])==null?void 0:l.value)??0,e.rightBumper=((s=a[5])==null?void 0:s.value)??0,e.leftTrigger=((u=a[6])==null?void 0:u.value)??0,e.rightTrigger=((g=a[7])==null?void 0:g.value)??0,e.back=((f=a[8])==null?void 0:f.value)??0,e.start=((v=a[9])==null?void 0:v.value)??0,e.leftStickButton=((G=a[10])==null?void 0:G.value)??0,e.rightStickButton=((h=a[11])==null?void 0:h.value)??0,e.padY=-a[12].value||a[13].value,e.padX=-a[14].value||a[15].value},L=()=>{const[e,n]=window.navigator.getGamepads();e!=null&&S(t,e),n!=null&&S(r,n)},B=e=>{const{id:n}=e.gamepad;n===t.id?t.connected=!1:n===r.id&&(r.connected=!1)},T=()=>{const[e,n]=window.navigator.getGamepads();t.connected=e!=null,t.id=(e==null?void 0:e.id)??"",r.connected=n!=null,r.id=(n==null?void 0:n.id)??""},X=()=>{window.removeEventListener("gamepadconnected",T),window.removeEventListener("gamepaddisconnected",B),p=!1},Y=()=>(p||(window.addEventListener("gamepadconnected",T),window.addEventListener("gamepaddisconnected",B),p=!0),{gamepad:t,gamepad2:r,updateGamepad:L,disposeGamepad:X}),A={title:"Gamepad",parameters:{docs:{source:{code:`import { useGamepad } from 'trzy'

const { gamepad, gamepad2, updateGamepad, disposeGamepad } = useGamepad()

const frame = () => {
  requestAnimationFrame(frame)
  updateGamepad()
}

frame()

// later
disposeGamepad()`}}}},o={render:()=>{const e=document.createElement("div");e.style.cssText=`
      position: relative;
      width: 600px;
      height: 400px;
      display: flex;
      justify-content: space-between;
    `;const n=document.createElement("pre");e.append(n);const a=document.createElement("pre");e.append(a);const{gamepad:d,gamepad2:c,updateGamepad:m}=Y(),i=()=>{requestAnimationFrame(i),m(),n.innerHTML=`Gamepad 1

${JSON.stringify(d,null,"  ")}`,a.innerHTML=`Gamepad 2

${JSON.stringify(c,null,"  ")}`};return i(),e}};var w,k,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      position: relative;
      width: 600px;
      height: 400px;
      display: flex;
      justify-content: space-between;
    \`;
    const pre = document.createElement('pre');
    container.append(pre);
    const pre2 = document.createElement('pre');
    container.append(pre2);
    const {
      gamepad,
      gamepad2,
      updateGamepad
    } = useGamepad();
    const frame = () => {
      requestAnimationFrame(frame);
      updateGamepad();
      pre.innerHTML = \`Gamepad 1\\n\\n\${JSON.stringify(gamepad, null, '  ')}\`;
      pre2.innerHTML = \`Gamepad 2\\n\\n\${JSON.stringify(gamepad2, null, '  ')}\`;
    };
    frame();
    return container;
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const O=["Primary"];export{o as Primary,O as __namedExportsOrder,A as default};
//# sourceMappingURL=gamepad.stories-eacaceb7.js.map
