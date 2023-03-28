import{t as l,a as w,D as u,M as c,B as E,b as d,c as M,P as y,h as T,u as g}from"./index-3135bd9b.js";import{s as H}from"./shadows-9b4af7e8.js";const R={title:"Three",parameters:{docs:{source:{type:"code",code:`
<script>

import { three } from 'trzy'

const {
  scene,
  camera,
  canvas,
  renderer,
  setCamera,
  run,
  pause,
} = three()

run()

<\/script>
        `}}}},n={render:()=>{const{scene:e,camera:a,canvas:r,run:m}=l({shadowMap:T});e.add(a),e.add(new w(void 0,.5));const t=new u(void 0,1);t.position.set(2,3,-2),t.lookAt(0,0,0),e.add(t);const s=new c(new E,new d);s.add(new M),e.add(s),g(()=>{s.rotation.y+=.01});const o=new c(new y(10,10,1,1).rotateX(-Math.PI/2),new d);return o.position.y=-.5,e.add(o),a.position.set(5,5,5),a.lookAt(0,0,0),H(e),r.style.cssText="width: 100%; height: 400px;",m(),r}};var i,h,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance({
      shadowMap: THREE.BasicShadowMap
    });
    scene.add(camera);
    scene.add(new THREE.AmbientLight(undefined, 0.5));
    const light = new THREE.DirectionalLight(undefined, 1);
    light.position.set(2, 3, -2);
    light.lookAt(0, 0, 0);
    scene.add(light);
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
    cube.add(new THREE.AxesHelper());
    scene.add(cube);
    update(() => {
      cube.rotation.y += 0.01;
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 1, 1).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial());
    floor.position.y = -0.5;
    scene.add(floor);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    shadows(scene);
    canvas.style.cssText = 'width: 100%; height: 400px;';
    run();
    return canvas;
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const b=["Primary"];export{n as Primary,b as __namedExportsOrder,R as default};
//# sourceMappingURL=three.stories-33b2da21.js.map
