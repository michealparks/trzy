import{t as m,a as u,D as E,M as d,B as w,b as c,c as f,P as M,h as T,u as g}from"./index-d0386946.js";import{s as y}from"./shadows-9d6f2766.js";const x={title:"Three",parameters:{docs:{description:{component:"Instantiates a scene, camera, renderer, and frame loop."},source:{type:"code",code:`import * as THREE from 'three'
import { three, update, postUpdate } from 'trzy'

const { scene, camera, canvas, renderer, setCamera, run, pause } = three({
  // defaults.
  alpha: false,
  antialias: false,
  camera: 'perspective' // or 'orthographic'
  checkShaderErrors: true,
  depth: true,
  outputEncoding: THREE.sRGBEncoding,
  shadowMap: undefined // can be any THREE.ShadowMapType,
  stencil: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  xr: false,
})

run()

update(() => {
  // Will run before each frame.
})

postUpdate(() => {
  // Will run after each frame.
})`}}}},a={render:()=>{const{scene:e,camera:n,canvas:s,run:l}=m({shadowMap:T});e.add(n),e.add(new u(void 0,.5));const t=new E(void 0,1);t.position.set(2,3,-2),t.lookAt(0,0,0),e.add(t);const r=new d(new w,new c);r.add(new f),e.add(r),g(()=>{r.rotation.y+=.01});const o=new d(new M(10,10,1,1).rotateX(-Math.PI/2),new c);return o.position.y=-.5,e.add(o),n.position.set(5,5,5),n.lookAt(0,0,0),y(e),s.style.cssText="width: 100%; height: 400px;",l(),s}};var i,p,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const b=["Primary"];export{a as Primary,b as __namedExportsOrder,x as default};
//# sourceMappingURL=three.stories-03657d10.js.map
