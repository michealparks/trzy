import{t as b,M as y,B as x,a as w,b as l,H as M}from"./index-aa3706bc.js";import{s as H}from"./lib-b8bd67a6.js";const v=`import { Html, useRaf } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  camera,
  canvas,
  object3D,
})

useRaf(() => {
  // render your scene, then update.
  html.update()
})
`,E={title:"HTML",parameters:{docs:{source:{code:v}}}},T=()=>{const{scene:o,camera:c,canvas:a,update:d}=b();H({scene:o,camera:c,canvas:a,update:d,controls:!0});const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(a);const m=[],i=[],p=6;for(let e=0;e<p;e+=1){const n=document.createElement("div");t.append(n),n.innerHTML=`Cube ${e}`,n.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const r=new y(new x(.5,.5,.5),new w);r.position.set(l.randInt(-2,2),-.25,l.randInt(-2,2)),o.add(r),m.push(r),i.push(new M({camera:c,canvas:a,el:n,object3D:r}))}return d(()=>{for(let e=0;e<p;e+=1)m[e].rotation.y+=.01,i[e].update()}),t},s={render:T};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Primary"];export{s as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-7751ed09.js.map
