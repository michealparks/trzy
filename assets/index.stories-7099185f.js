import{s as w,c as y}from"./setup-f1b0c42e.js";const X=e=>({player:e,id:"",A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0});let d=!1;const r=[1,2,3,4].map(e=>X(e)),Y=(e,{axes:t,buttons:a})=>{var n,i,s,m,o,l,p,g,u,v,f,G;e.leftStickX=t[0]??0,e.leftStickY=t[1]??0,e.rightStickX=t[2]??0,e.rightStickY=t[3]??0,e.A=((n=a[0])==null?void 0:n.value)??0,e.B=((i=a[1])==null?void 0:i.value)??0,e.X=((s=a[2])==null?void 0:s.value)??0,e.Y=((m=a[3])==null?void 0:m.value)??0,e.leftBumper=((o=a[4])==null?void 0:o.value)??0,e.rightBumper=((l=a[5])==null?void 0:l.value)??0,e.leftTrigger=((p=a[6])==null?void 0:p.value)??0,e.rightTrigger=((g=a[7])==null?void 0:g.value)??0,e.back=((u=a[8])==null?void 0:u.value)??0,e.start=((v=a[9])==null?void 0:v.value)??0,e.leftStickButton=((f=a[10])==null?void 0:f.value)??0,e.rightStickButton=((G=a[11])==null?void 0:G.value)??0,e.padY=-a[12].value||a[13].value,e.padX=-a[14].value||a[15].value},L=()=>{navigator.getGamepads().forEach((e,t)=>{e!==null&&Y(r[t],e)})},E=e=>{const{id:t}=e.gamepad;r.forEach(a=>{t===a.id&&(a.connected=!1)})},B=()=>{navigator.getGamepads().forEach((e,t)=>{r[t].connected=e!==null,r[t].id=(e==null?void 0:e.id)??""})},T=()=>{window.removeEventListener("gamepadconnected",B),window.removeEventListener("gamepaddisconnected",E),d=!1},O=()=>(d||(window.addEventListener("gamepadconnected",B),window.addEventListener("gamepaddisconnected",E),d=!0),{gamepad:r[0],gamepads:r,updateGamepads:L,disposeGamepads:T}),z=`import { useGamepad } from 'trzy'

const { gamepad1, gamepad2, updateGamepads, disposeGamepads } = useGamepad()

// In your game loop
updateGamepads()

// later
disposeGamepads()
`,J={title:"Gamepad",parameters:{docs:{source:{code:z}}}},A=()=>{w();const e=document.createElement("div");e.style.display="flex";const t=document.createElement("pre"),a=document.createElement("pre");t.style.width="400px",e.append(t,a);const{gamepads:n,updateGamepads:i}=O();return y(()=>{i(),t.innerHTML=`Gamepad 1

${JSON.stringify(n[0],void 0,2)}`,a.innerHTML=`Gamepad 2

${JSON.stringify(n[1],void 0,2)}`}),e},c={render:A};var h,S,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const M=["Primary"];export{c as Primary,M as __namedExportsOrder,J as default};
//# sourceMappingURL=index.stories-7099185f.js.map
