import{a as b,M as y,B as x,b as w,c as l,H as M}from"./index-b1a306c2.js";import{s as H}from"./lib-557be54d.js";const v=`import { Html, useRaf } from 'trzy'

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
`,E={title:"HTML",parameters:{docs:{source:{code:v}}}},T=()=>{const{scene:o,camera:c,canvas:a,update:m}=b();H({scene:o,camera:c,canvas:a,update:m,controls:!0});const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(a);const d=[],i=[],p=6;for(let e=0;e<p;e+=1){const r=document.createElement("div");t.append(r),r.innerHTML=`Cube ${e}`,r.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const n=new y(new x,new w);n.position.set(l.randInt(-2,2),-.25,l.randInt(-2,2)),o.add(n),d.push(n),i.push(new M({camera:c.current,canvas:a,el:r,object3D:n}))}return m(()=>{for(let e=0;e<p;e+=1)d[e].rotation.y+=.01,i[e].update()}),t},s={render:T};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Primary"];export{s as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-dc3de796.js.map
