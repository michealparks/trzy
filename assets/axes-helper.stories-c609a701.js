import{t as l,A as p,a as m,D as h,M as w,B as u,b as x}from"./three-0d2b188b.js";import{O as b}from"./OrbitControls-4676173d.js";const y={title:"Axes Helper",parameters:{docs:{source:{code:`<script>

import { AxesHelper } from 'trzy'

const helper = new AxesHelper()
scene.add(helper.setColors('yellow', 'blue', 'pink'))

<\/script>`}}}},n={render:()=>{const{scene:e,camera:s,canvas:t,run:i}=l();e.add(new p().setColors("yellow","blue","pink")),e.add(new m(void 0,.2)),new b(s,t);const r=new h(void 0,.5);r.position.set(-5,2,5),e.add(r);const d=new w(new u(.3,.3,.3),new x);return e.add(d),s.position.set(2,2,2),s.lookAt(0,0,0),t.style.cssText="width: 100%; height: 400px;",i(),t}};var a,o,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    scene.add(new AxesHelper().setColors('yellow', 'blue', 'pink'));
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
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const A=["Primary"];export{n as Primary,A as __namedExportsOrder,y as default};
//# sourceMappingURL=axes-helper.stories-c609a701.js.map
