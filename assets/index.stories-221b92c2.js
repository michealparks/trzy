import{t as b,M as y,B as x,a as w,b as l,H as M}from"./teleport-bfa5777f.js";import{s as H}from"./lib-a13e8409.js";const v=`import { Html, raf } from 'trzy'

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
`,E={title:"HTML",parameters:{docs:{source:{code:v}}}},T=()=>{const{scene:o,camera:c,canvas:s,update:m}=b();H({scene:o,camera:c,canvas:s,update:m,controls:!0});const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(s);const d=[],i=[],p=6;for(let e=0;e<p;e+=1){const r=document.createElement("div");t.append(r),r.innerHTML=`Cube ${e}`,r.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const n=new y(new x,new w);n.position.set(l.randInt(-2,2),-.25,l.randInt(-2,2)),o.add(n),d.push(n),i.push(new M({camera:c.current,canvas:s,el:r,object3D:n}))}return m(()=>{for(let e=0;e<p;e+=1)d[e].rotation.y+=.01,i[e].update()}),t},a={render:T};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Primary"];export{a as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-221b92c2.js.map
