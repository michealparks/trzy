import{t as b,M as y,B as x,a as w,b as m,H as M}from"./teleport-77ede96c.js";import{s as H}from"./setup-019dd85b.js";const v=`import { Html, raf } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  camera,
  canvas,
  object3D,
})

raf(() => {
  // render your scene, then update.
  html.update()
})
`,E={title:"HTML",parameters:{docs:{source:{code:v}}}},T=()=>{const{scene:u,camera:f,canvas:s,update:h}=b();H();const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(s);const o=[],c=[],d=6;for(let e=0;e<d;e+=1){const n=document.createElement("div");t.append(n),n.innerHTML=`Cube ${e}`,n.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const r=new y(new x,new w);r.position.set(m.randInt(-2,2),-.25,m.randInt(-2,2)),u.add(r),o.push(r),c.push(new M({camera:f.current,canvas:s,el:n,object3D:r}))}return h(()=>{for(let e=0;e<d;e+=1)o[e].rotation.y+=.01,c[e].update()}),t},a={render:T};var i,p,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Primary"];export{a as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-f34cd184.js.map
