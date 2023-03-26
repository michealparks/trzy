var f=Object.defineProperty;var P=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(P(s,typeof t!="symbol"?t+"":t,e),e);import{d as A,V as w,R,t as C,a as L,D as k,I,B as T,b as U,e as E,f as D,C as H}from"./index-132f2a42.js";class S extends A{constructor(e){super();n(this,"camera");n(this,"canvas");n(this,"raycaster");n(this,"objects",[]);n(this,"pointerDown",new w);n(this,"pointerUp",new w);n(this,"pointerMove",new w);n(this,"recursive",!0);n(this,"onPointerDown",e=>{this.getNormalizedCoordinates(e,this.pointerDown)});n(this,"onPointerUp",e=>{if(this.getNormalizedCoordinates(e,this.pointerUp),this.pointerDown.sub(this.pointerUp).lengthSq()>.001)return;this.raycaster.setFromCamera(this.pointerUp,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"click",intersections:r})});n(this,"onPointerMove",e=>{this.getNormalizedCoordinates(e,this.pointerMove),this.raycaster.setFromCamera(this.pointerMove,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"move",intersections:r})});this.camera=e.camera,this.canvas=e.canvas,this.raycaster=e.raycaster??new R,this.objects=e.objects??(e.scene?[e.scene]:[]),this.recursive=e.recursive??!0,this.canvas.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),this.canvas.addEventListener("pointerup",this.onPointerUp,{passive:!0}),e.move&&this.canvas.addEventListener("pointermove",this.onPointerMove,{passive:!0})}getNormalizedCoordinates(e,r){const d=this.canvas.getBoundingClientRect();r.x=(e.clientX-d.x)/this.canvas.clientWidth*2-1,r.y=-((e.clientY-d.y)/this.canvas.clientHeight*2)+1}dispose(){this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp)}}const F={title:"Mouse Raycaster",parameters:{docs:{source:{type:"code",code:`
<script>

import { MouseRaycaster } from 'trzy'

const raycaster = new MouseRaycaster({ camera, canvas, scene, move: true })

raycaster.addEventListener('move', (event) => {
  /* ... */
})

raycaster.addEventListener('click', (event) => {
  /* ... */
})

<\/script>
        `}}}},p={render:()=>{const{scene:s,camera:t,canvas:e,run:r}=C();s.add(new L(void 0,.2));const d=new k(void 0,.5);d.position.set(-5,2,5),s.add(d);const m=100,i=new I(new T(.5,.5,.5),new U,m);i.position.set(0,0,0);const a=new E,h=new E,v=new D,M=new H,l=m/10;for(let o=0;o<m;o+=1)v.set(o%l-l/2,0,Math.floor(o/l)-l/2),a.setPosition(v),i.setMatrixAt(o,a),i.setColorAt(o,M.set("yellow"));const y=new S({camera:t,canvas:e,scene:s,move:!0});return y.addEventListener("move",o=>{for(let c=0;c<m;c+=1)i.getMatrixAt(c,h),a.makeScale(1,1,1),a.setPosition(v.setFromMatrixPosition(h)),i.setMatrixAt(c,a);for(const c of o.intersections){const{instanceId:u}=c;i.getMatrixAt(u,h),a.makeScale(1.2,1.2,1.2),a.setPosition(v.setFromMatrixPosition(h)),i.setMatrixAt(u,a)}i.instanceMatrix.needsUpdate=!0}),y.addEventListener("click",o=>{for(const c of o.intersections){const{instanceId:u}=c;i.setColorAt(u,M.set("hotpink"))}i.instanceColor.needsUpdate=!0}),s.add(i),t.position.set(5,5,5),t.lookAt(0,0,0),e.style.cssText="width: 100%; height: 400px;",r(),e}};var x,b,g;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    scene.add(new THREE.AmbientLight(undefined, 0.2));
    const light = new THREE.DirectionalLight(undefined, 0.5);
    light.position.set(-5, 2, 5);
    scene.add(light);
    const n = 100;
    const cube = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial(), n);
    cube.position.set(0, 0, 0);
    const m4 = new THREE.Matrix4();
    const m4_2 = new THREE.Matrix4();
    const v3 = new THREE.Vector3();
    const color = new THREE.Color();
    const rows = n / 10;
    for (let i = 0; i < n; i += 1) {
      v3.set(i % rows - rows / 2, 0, Math.floor(i / rows) - rows / 2);
      m4.setPosition(v3);
      cube.setMatrixAt(i, m4);
      cube.setColorAt(i, color.set('yellow'));
    }
    const raycaster = new MouseRaycaster({
      camera,
      canvas,
      scene,
      move: true
    });
    raycaster.addEventListener('move', event => {
      for (let i = 0; i < n; i += 1) {
        cube.getMatrixAt(i, m4_2);
        m4.makeScale(1, 1, 1);
        m4.setPosition(v3.setFromMatrixPosition(m4_2));
        cube.setMatrixAt(i, m4);
      }
      for (const intersection of event.intersections) {
        const {
          instanceId
        } = intersection;
        cube.getMatrixAt(instanceId, m4_2);
        m4.makeScale(1.2, 1.2, 1.2);
        m4.setPosition(v3.setFromMatrixPosition(m4_2));
        cube.setMatrixAt(instanceId, m4);
      }
      cube.instanceMatrix.needsUpdate = true;
    });
    raycaster.addEventListener('click', event => {
      for (const intersection of event.intersections) {
        const {
          instanceId
        } = intersection;
        cube.setColorAt(instanceId, color.set('hotpink'));
      }
      cube.instanceColor!.needsUpdate = true;
    });
    scene.add(cube);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    canvas.style.cssText = 'width: 100%; height: 400px;';
    run();
    return canvas;
  }
}`,...(g=(b=p.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const z=["Primary"];export{p as Primary,z as __namedExportsOrder,F as default};
//# sourceMappingURL=mouse-raycaster.stories-97310aca.js.map
