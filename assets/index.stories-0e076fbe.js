import{u as h,s as y,M as f,B as b,a as w,b as a,H as x,c as M}from"./setup-f1b0c42e.js";const H=`import { Html } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  object3D,
})
`,g={title:"HTML",parameters:{docs:{source:{code:H}}}},E=()=>{const{scene:i,renderer:l}=h();y();const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(l.domElement);const o=[],p=[],u=6;for(let e=0;e<u;e+=1){const n=document.createElement("div");t.append(n),n.innerHTML=`Cube ${e}`,n.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      padding: 0.25rem 0.5rem;
    `;const s=new f(new b,new w);s.position.set(a.randInt(-2,2),-.25,a.randInt(-2,2)),i.add(s),o.push(s),p.push(new x({el:n,object3D:s}))}return M(()=>{o.forEach(e=>e.rotation.y+=.01)}),t},r={render:E};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const v=["Primary"];export{r as Primary,v as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-0e076fbe.js.map
