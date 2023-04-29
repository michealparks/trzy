import{t as c,A as l}from"./index-14544d63.js";import{s as d}from"./lib-16c3f5a3.js";const i=`import { AxesHelper } from 'trzy'

const helper = new AxesHelper({ size: 1.5, width: 0.0025 })

scene.add(helper.setColors('yellow', 'blue', 'pink'))

// later
helper.dispose()
`,H={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:i}}}},m=()=>{const{scene:r,camera:a,canvas:s,update:p}=c();return d({scene:r,camera:a,canvas:s,update:p,controls:!0}),r.add(new l({size:1.5,width:.0025}).setColors("yellow","blue","pink")),s},e={render:m};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,H as default};
//# sourceMappingURL=index.stories-aba35546.js.map
