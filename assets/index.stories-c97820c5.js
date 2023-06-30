import{t as Y}from"./teleport-97191997.js";const m=()=>({id:"",A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0});let p=!1;const d=m(),i=m(),L=m(),T=m(),l=(e,{axes:t,buttons:a})=>{var n,r,c,o,g,u,v,f,G,h,S,k;e.leftStickX=t[0]??0,e.leftStickY=t[1]??0,e.rightStickX=t[2]??0,e.rightStickY=t[3]??0,e.A=((n=a[0])==null?void 0:n.value)??0,e.B=((r=a[1])==null?void 0:r.value)??0,e.X=((c=a[2])==null?void 0:c.value)??0,e.Y=((o=a[3])==null?void 0:o.value)??0,e.leftBumper=((g=a[4])==null?void 0:g.value)??0,e.rightBumper=((u=a[5])==null?void 0:u.value)??0,e.leftTrigger=((v=a[6])==null?void 0:v.value)??0,e.rightTrigger=((f=a[7])==null?void 0:f.value)??0,e.back=((G=a[8])==null?void 0:G.value)??0,e.start=((h=a[9])==null?void 0:h.value)??0,e.leftStickButton=((S=a[10])==null?void 0:S.value)??0,e.rightStickButton=((k=a[11])==null?void 0:k.value)??0,e.padY=-a[12].value||a[13].value,e.padX=-a[14].value||a[15].value},O=()=>{const[e,t,a,n]=window.navigator.getGamepads();e!=null&&l(d,e),t!=null&&l(i,t),a!=null&&l(L,a),n!=null&&l(T,n)},E=e=>{const{id:t}=e.gamepad;t===d.id?d.connected=!1:t===i.id&&(i.connected=!1)},X=()=>{const[e,t]=window.navigator.getGamepads();d.connected=e!=null,d.id=(e==null?void 0:e.id)??"",i.connected=t!=null,i.id=(t==null?void 0:t.id)??""},z=()=>{window.removeEventListener("gamepadconnected",X),window.removeEventListener("gamepaddisconnected",E),p=!1},A=()=>(p||(window.addEventListener("gamepadconnected",X),window.addEventListener("gamepaddisconnected",E),p=!0),{gamepad1:d,gamepad2:i,updateGamepads:O,disposeGamepads:z}),H=`import { useGamepad, raf } from 'trzy'

const { gamepad1, gamepad2, updateGamepads, disposeGamepads } = useGamepad()

raf(() => {
  updateGamepads()
})

// later
disposeGamepads()
`,N={title:"Gamepad",parameters:{docs:{source:{code:H}}}},J=()=>{const{update:e}=Y(),t=document.createElement("div");t.style.display="flex";const a=document.createElement("pre"),n=document.createElement("pre");a.style.width="400px",t.append(a,n);const{gamepad1:r,gamepad2:c,updateGamepads:o}=A();return e(()=>{o(),a.innerHTML=`Gamepad 1

${JSON.stringify(r,void 0,2)}`,n.innerHTML=`Gamepad 2

${JSON.stringify(c,void 0,2)}`}),t},s={render:J};var w,B,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const P=["Primary"];export{s as Primary,P as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-c97820c5.js.map
