import{t as d,O as l,A as u}from"./index-ea951f63.js";import{s as x}from"./lib-3b1acf2d.js";const z=`import { OrbitControlsGizmo } from 'trzy'

new OrbitControlsGizmo({ camera, el, controls })
`,h={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:z}}}},O=()=>{const{scene:o,camera:s,canvas:n,update:i}=d(),r=document.createElement("container");return x({scene:o,camera:s,canvas:n,update:i,controls:!0}).then(p=>{r.append(n);const t=document.createElement("div");t.style.cssText="position: absolute; top: 50px; right: 40px;",r.append(t),new l({camera:s,el:t,controls:p}),o.add(new u({size:2,width:.002}))}),r},e={render:O};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-6b9bb260.js.map
