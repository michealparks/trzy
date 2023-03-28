import{t as h,O as u,a as w,D as b,M as x,B as g,b as E,A as v}from"./index-3135bd9b.js";import{O as T}from"./OrbitControls-4e58d31a.js";const O={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:`
<script>
...

new OrbitControlsGizmo({ camera, el, orbitControls }),

<\/script>
        `}}}},t={render:()=>{const e=document.createElement("div"),{scene:s,camera:n,canvas:o,run:m}=h();e.append(o);const r=document.createElement("div");e.append(r);const p=new T(n,o);new u({camera:n,el:r,orbitControls:p}),s.add(new w(void 0,.2));const a=new b(void 0,.5);a.position.set(-5,2,5),s.add(a);const i=new x(new g,new E);return i.add(new v),s.add(i),n.position.set(2,2,2),n.lookAt(0,0,0),r.style.cssText="position: absolute; top: 50px; right: 40px;",e.style.cssText="width: 100%; height: 400px;",o.style.cssText="width: 100%; height: 100%;",m(),e}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    container.append(canvas);
    const el = document.createElement('div');
    container.append(el);
    const orbitControls = new OrbitControls(camera, canvas);
    new OrbitControlsGizmo({
      camera,
      el,
      orbitControls
    });
    scene.add(new THREE.AmbientLight(undefined, 0.2));
    const light = new THREE.DirectionalLight(undefined, 0.5);
    light.position.set(-5, 2, 5);
    scene.add(light);
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
    cube.add(new AxesHelper());
    scene.add(cube);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);
    el.style.cssText = 'position: absolute; top: 50px; right: 40px;';
    container.style.cssText = 'width: 100%; height: 400px;';
    canvas.style.cssText = 'width: 100%; height: 100%;';
    run();
    return container;
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const A=["Primary"];export{t as Primary,A as __namedExportsOrder,O as default};
//# sourceMappingURL=orbit-controls-gizmo.stories-3c361849.js.map
