import{t as h,a as b,D as w,M as E,B as g,b as H,c as T,H as v,u as y}from"./index-132f2a42.js";import{O as x}from"./OrbitControls-4866e7ae.js";const L={title:"HTML",parameters:{docs:{source:{type:"code",code:`
<script>

import { Html } from 'trzy'

new Html({
  el: document.querySelector('el')
  camera,
  canvas,
  object3D
})

<\/script>
        `}}}},c={render:()=>{const n=document.createElement("div");n.style.cssText="position: relative; width: 100%; height: 400px;";const{scene:t,camera:s,canvas:a,run:u}=h();n.append(a),new x(s,a),t.add(new b(void 0,.2));const i=new w(void 0,.5);i.position.set(-5,2,5),t.add(i);const d=[];for(let e=0;e<6;e+=1){const o=document.createElement("div");n.append(o),o.innerHTML=`Cube ${e}`,o.style.cssText="position: absolute; top: 0; left: 0; background: #eee; padding: 0.5rem 1rem;";const r=new E(new g,new H);r.position.set((e-3)*2,0,0),t.add(r),d.push(r),new v({camera:s,canvas:a,el:o,object3D:r})}return t.add(new T),y(()=>{for(let e=0;e<6;e+=1)d[e].rotation.y+=.01}),s.position.set(5,5,5),s.lookAt(0,0,0),a.style.cssText="width: 100%; height: 100%;",u(),n}};var l,m,p;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 100%; height: 400px;';
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    container.append(canvas);
    new OrbitControls(camera, canvas);
    scene.add(new THREE.AmbientLight(undefined, 0.2));
    const light = new THREE.DirectionalLight(undefined, 0.5);
    light.position.set(-5, 2, 5);
    scene.add(light);
    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i += 1) {
      const el = document.createElement('div');
      container.append(el);
      el.innerHTML = \`Cube \${i}\`;
      el.style.cssText = 'position: absolute; top: 0; left: 0; background: #eee; padding: 0.5rem 1rem;';
      const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
      cube.position.set((i - 3) * 2, 0, 0);
      scene.add(cube);
      cubes.push(cube);
      new Html({
        camera,
        canvas,
        el,
        object3D: cube
      });
    }
    scene.add(new THREE.AxesHelper());
    update(() => {
      for (let i = 0; i < 6; i += 1) {
        cubes[i]!.rotation.y += 0.01;
      }
    });
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    canvas.style.cssText = 'width: 100%; height: 100%;';
    run();
    return container;
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["Primary"];export{c as Primary,R as __namedExportsOrder,L as default};
//# sourceMappingURL=html.stories-0739be52.js.map
