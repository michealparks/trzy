import{t as Y}from"./index-5c9c688c.js";const y=()=>({id:"",A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0});let m=!1;const n=y(),r=y(),S=(e,{axes:a,buttons:t})=>{var i,d,c,l,s,p,g,u,v,f,G,h;e.leftStickX=a[0]??0,e.leftStickY=a[1]??0,e.rightStickX=a[2]??0,e.rightStickY=a[3]??0,e.A=((i=t[0])==null?void 0:i.value)??0,e.B=((d=t[1])==null?void 0:d.value)??0,e.X=((c=t[2])==null?void 0:c.value)??0,e.Y=((l=t[3])==null?void 0:l.value)??0,e.leftBumper=((s=t[4])==null?void 0:s.value)??0,e.rightBumper=((p=t[5])==null?void 0:p.value)??0,e.leftTrigger=((g=t[6])==null?void 0:g.value)??0,e.rightTrigger=((u=t[7])==null?void 0:u.value)??0,e.back=((v=t[8])==null?void 0:v.value)??0,e.start=((f=t[9])==null?void 0:f.value)??0,e.leftStickButton=((G=t[10])==null?void 0:G.value)??0,e.rightStickButton=((h=t[11])==null?void 0:h.value)??0,e.padY=-t[12].value||t[13].value,e.padX=-t[14].value||t[15].value},L=()=>{const[e,a]=window.navigator.getGamepads();e!=null&&S(n,e),a!=null&&S(r,a)},E=e=>{const{id:a}=e.gamepad;a===n.id?n.connected=!1:a===r.id&&(r.connected=!1)},X=()=>{const[e,a]=window.navigator.getGamepads();n.connected=e!=null,n.id=(e==null?void 0:e.id)??"",r.connected=a!=null,r.id=(a==null?void 0:a.id)??""},T=()=>{window.removeEventListener("gamepadconnected",X),window.removeEventListener("gamepaddisconnected",E),m=!1},O=()=>(m||(window.addEventListener("gamepadconnected",X),window.addEventListener("gamepaddisconnected",E),m=!0),{gamepad1:n,gamepad2:r,updateGamepad:L,disposeGamepad:T}),z=`import { useGamepad, useRaf } from 'trzy'

const { gamepad1, gamepad2, updateGamepad, disposeGamepad } = useGamepad()

useRaf(() => {
  updateGamepad()
})

// later
disposeGamepad()
`,J={title:"Gamepad",parameters:{docs:{source:{code:z}}}},A=()=>{const{update:e}=Y(),a=document.createElement("div");a.style.display="flex";const t=document.createElement("pre"),i=document.createElement("pre");t.style.width="400px",a.append(t,i);const{gamepad1:d,gamepad2:c,updateGamepad:l}=O();return e(()=>{l(),t.innerHTML=`Gamepad 1

${JSON.stringify(d,null,2)}`,i.innerHTML=`Gamepad 2

${JSON.stringify(c,null,2)}`}),a},o={render:A};var k,w,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const M=["Primary"];export{o as Primary,M as __namedExportsOrder,J as default};
//# sourceMappingURL=index.stories-01ac74b1.js.map
