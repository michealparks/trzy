import{t as i,O as p,A as d}from"./index-22cc7c1f.js";import{s as l,c as u}from"./lib-934aea98.js";const x=`import { OrbitControlsGizmo } from 'trzy'

new OrbitControlsGizmo({ camera, el, controls })
`,f={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:x}}}},z=()=>{const{scene:a,camera:c,canvas:m}=i();l({controls:!0});const r=document.createElement("container");r.append(m);const t=document.createElement("div");return t.style.cssText="position: absolute; top: 50px; right: 40px;",r.append(t),new p({camera:c,el:t,controls:u}),a.add(new d({size:2,width:.002})),r},e={render:z};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories-ceba0f55.js.map
