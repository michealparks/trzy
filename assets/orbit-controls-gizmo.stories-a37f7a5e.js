import{t as h,O as u,a as w,D as b,M as x,B as g,b as E,A as v}from"./index-d0386946.js";import{O as y}from"./OrbitControls-d68ab618.js";const O={title:"Orbit Controls Gizmo",parameters:{docs:{source:{code:`import { OrbitControlsGizmo } from 'trzy'

new OrbitControlsGizmo({ camera, el, orbitControls })`}}}},t={render:()=>{const e=document.createElement("div"),{scene:o,camera:n,canvas:s,run:m}=h();e.append(s);const r=document.createElement("div");e.append(r);const p=new y(n,s);new u({camera:n,el:r,orbitControls:p}),o.add(new w(void 0,.2));const a=new b(void 0,.5);a.position.set(-5,2,5),o.add(a);const i=new x(new g,new E);return i.add(new v),o.add(i),n.position.set(2,2,2),n.lookAt(0,0,0),r.style.cssText="position: absolute; top: 50px; right: 40px;",e.style.cssText="width: 100%; height: 400px;",s.style.cssText="width: 100%; height: 100%;",m(),e}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
//# sourceMappingURL=orbit-controls-gizmo.stories-a37f7a5e.js.map
