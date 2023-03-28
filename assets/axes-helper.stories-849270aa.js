import{t as l,A as p,a as h,D as m,M as w,B as u,b as x}from"./index-3135bd9b.js";import{O as b}from"./OrbitControls-4e58d31a.js";const y={title:"Axes Helper",parameters:{docs:{source:{code:`<script>

import { AxesHelper } from 'trzy'

const helper = new AxesHelper({ size: 1.5, width: 0.0025 })

scene.add(helper.setColors('yellow', 'blue', 'pink'))

// later
helper.dispose()

<\/script>`}}}},n={render:()=>{const{scene:e,camera:s,canvas:t,run:c}=l();e.add(new p({size:1.5,width:.0025}).setColors("yellow","blue","pink")),e.add(new h(void 0,.2)),new b(s,t);const r=new m(void 0,.5);r.position.set(-5,2,5),e.add(r);const d=new w(new u(.3,.3,.3),new x);return e.add(d),s.position.set(2,2,2),s.lookAt(0,0,0),t.style.cssText="width: 100%; height: 400px;",c(),t}};var a,o,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    scene.add(new AxesHelper({
      size: 1.5,
      width: 0.0025
    }).setColors('yellow', 'blue', 'pink'));
    scene.add(new THREE.AmbientLight(undefined, 0.2));
    new OrbitControls(camera, canvas);
    const light = new THREE.DirectionalLight(undefined, 0.5);
    light.position.set(-5, 2, 5);
    scene.add(light);
    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), new THREE.MeshStandardMaterial());
    scene.add(cube);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);
    canvas.style.cssText = 'width: 100%; height: 400px;';
    run();
    return canvas;
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const A=["Primary"];export{n as Primary,A as __namedExportsOrder,y as default};
//# sourceMappingURL=axes-helper.stories-849270aa.js.map
