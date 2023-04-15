import{t as a,A as p}from"./index-22cc7c1f.js";import{s as c}from"./lib-934aea98.js";const l=`import { AxesHelper } from 'trzy'

const helper = new AxesHelper({ size: 1.5, width: 0.0025 })

scene.add(helper.setColors('yellow', 'blue', 'pink'))

// later
helper.dispose()
`,u={title:"Axes Helper",parameters:{docs:{description:{component:"Similar to `THREE.AxesHelper` but uses `THREE.Line2` to render axes."},source:{code:l}}}},i=()=>{const{scene:t,canvas:n}=a();return c({controls:!0}),t.add(new p({size:1.5,width:.0025}).setColors("yellow","blue","pink")),n},e={render:i};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const x=["Primary"];export{e as Primary,x as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories-0d444989.js.map
