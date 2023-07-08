import{s as Y,a as L}from"./setup-9d42791d.js";const l=()=>({id:"",A:0,B:0,X:0,Y:0,back:0,connected:!1,leftBumper:0,leftStickButton:0,leftStickX:0,leftStickY:0,leftTrigger:0,padX:0,padY:0,rightBumper:0,rightStickButton:0,rightStickX:0,rightStickY:0,rightTrigger:0,start:0});let m=!1;const d=l(),i=l(),T=l(),O=l(),o=(e,{axes:t,buttons:a})=>{var n,r,c,p,g,u,v,f,G,S,h,k;e.leftStickX=t[0]??0,e.leftStickY=t[1]??0,e.rightStickX=t[2]??0,e.rightStickY=t[3]??0,e.A=((n=a[0])==null?void 0:n.value)??0,e.B=((r=a[1])==null?void 0:r.value)??0,e.X=((c=a[2])==null?void 0:c.value)??0,e.Y=((p=a[3])==null?void 0:p.value)??0,e.leftBumper=((g=a[4])==null?void 0:g.value)??0,e.rightBumper=((u=a[5])==null?void 0:u.value)??0,e.leftTrigger=((v=a[6])==null?void 0:v.value)??0,e.rightTrigger=((f=a[7])==null?void 0:f.value)??0,e.back=((G=a[8])==null?void 0:G.value)??0,e.start=((S=a[9])==null?void 0:S.value)??0,e.leftStickButton=((h=a[10])==null?void 0:h.value)??0,e.rightStickButton=((k=a[11])==null?void 0:k.value)??0,e.padY=-a[12].value||a[13].value,e.padX=-a[14].value||a[15].value},z=()=>{const[e,t,a,n]=window.navigator.getGamepads();e!=null&&o(d,e),t!=null&&o(i,t),a!=null&&o(T,a),n!=null&&o(O,n)},E=e=>{const{id:t}=e.gamepad;t===d.id?d.connected=!1:t===i.id&&(i.connected=!1)},X=()=>{const[e,t]=window.navigator.getGamepads();d.connected=e!=null,d.id=(e==null?void 0:e.id)??"",i.connected=t!=null,i.id=(t==null?void 0:t.id)??""},A=()=>{window.removeEventListener("gamepadconnected",X),window.removeEventListener("gamepaddisconnected",E),m=!1},H=()=>(m||(window.addEventListener("gamepadconnected",X),window.addEventListener("gamepaddisconnected",E),m=!0),{gamepad1:d,gamepad2:i,updateGamepads:z,disposeGamepads:A}),J=`import { useGamepad } from 'trzy'

const { gamepad1, gamepad2, updateGamepads, disposeGamepads } = useGamepad()

// In your game loop
updateGamepads()

// later
disposeGamepads()
`,P={title:"Gamepad",parameters:{docs:{source:{code:J}}}},M=()=>{Y();const e=document.createElement("div");e.style.display="flex";const t=document.createElement("pre"),a=document.createElement("pre");t.style.width="400px",e.append(t,a);const{gamepad1:n,gamepad2:r,updateGamepads:c}=H();return L(()=>{c(),t.innerHTML=`Gamepad 1

${JSON.stringify(n,void 0,2)}`,a.innerHTML=`Gamepad 2

${JSON.stringify(r,void 0,2)}`}),e},s={render:M};var w,B,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const _=["Primary"];export{s as Primary,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=index.stories-4d64280b.js.map
