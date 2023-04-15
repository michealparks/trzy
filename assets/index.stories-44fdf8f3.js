import{t as b,M as y,B as x,a as w,b as m,H as M}from"./index-de99f9b2.js";import{s as H}from"./lib-170271b8.js";const v=`import { Html, useRaf } from 'trzy'

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
`,E={title:"HTML",parameters:{docs:{source:{code:v}}}},T=()=>{const{scene:u,camera:f,canvas:a,update:h}=b();H({controls:!0});const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(a);const o=[],c=[],d=6;for(let e=0;e<d;e+=1){const n=document.createElement("div");t.append(n),n.innerHTML=`Cube ${e}`,n.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const r=new y(new x(.5,.5,.5),new w);r.position.set(m.randInt(-2,2),-.25,m.randInt(-2,2)),u.add(r),o.push(r),c.push(new M({camera:f,canvas:a,el:n,object3D:r}))}return h(()=>{for(let e=0;e<d;e+=1)o[e].rotation.y+=.01,c[e].update()}),t},s={render:T};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Primary"];export{s as Primary,S as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-44fdf8f3.js.map
