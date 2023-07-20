import{u as y,s as b,M as f,B as x,a as w,b as d,H as M,c as H}from"./setup-d3d63792.js";const v=`import { Html } from 'trzy'

const html = new Html({
  el: document.querySelector('el'),
  camera,
  canvas,
  object3D,
})

 // In your frame loop, render your scene, then update html.
 html.update()
`,g={title:"HTML",parameters:{docs:{source:{code:v}}}},E=()=>{const{scene:u,camera:h,renderer:a}=y();b();const t=document.createElement("div");t.style.cssText="position: relative; width: 100%; height: 400px;",t.append(a.domElement);const o=[],c=[],m=6;for(let e=0;e<m;e+=1){const n=document.createElement("div");t.append(n),n.innerHTML=`Cube ${e}`,n.style.cssText=`
      font-family: system-ui;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.25rem 0.5rem;
    `;const r=new f(new x,new w);r.position.set(d.randInt(-2,2),-.25,d.randInt(-2,2)),u.add(r),o.push(r),c.push(new M({camera:h.current,canvas:a.domElement,el:n,object3D:r}))}return H(()=>{for(let e=0;e<m;e+=1)o[e].rotation.y+=.01,c[e].update()}),t},s={render:E};var l,i,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const k=["Primary"];export{s as Primary,k as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-2c789431.js.map
