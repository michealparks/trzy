var R=Object.defineProperty;var k=(n,t,e)=>t in n?R(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var o=(n,t,e)=>(k(n,typeof t!="symbol"?t+"":t,e),e),C=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var h=(n,t,e)=>(C(n,t,"read from private field"),e?e.call(n):t.get(n)),f=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)};import{d as L,V as M,R as D,t as I,a as T,D as U,I as H,B as j,b as S,e as b,f as _,C as F}from"./index-3135bd9b.js";var a;class z extends L{constructor(e){super();o(this,"camera");o(this,"raycaster");o(this,"objects",[]);o(this,"pointerDown",new M);o(this,"pointerUp",new M);o(this,"pointerMove",new M);o(this,"recursive",!0);o(this,"renderer");f(this,a,{click:0,move:0});o(this,"onPointerDown",e=>{this.getNormalizedCoordinates(e,this.pointerDown)});o(this,"onPointerUp",e=>{if(this.getNormalizedCoordinates(e,this.pointerUp),this.pointerDown.sub(this.pointerUp).lengthSq()>.001)return;this.raycaster.setFromCamera(this.pointerUp,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"click",intersections:r})});o(this,"onPointerMove",e=>{this.getNormalizedCoordinates(e,this.pointerMove),this.raycaster.setFromCamera(this.pointerMove,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"move",intersections:r})});this.camera=e.camera,this.renderer=e.renderer,this.raycaster=e.raycaster??new D,this.objects=e.objects??(e.scene?[e.scene]:[]),this.recursive=e.recursive??!0}on(e,r){super.addEventListener(e,r);const s=this.renderer.domElement;e==="move"&&h(this,a).move===0?s.addEventListener("pointermove",this.onPointerMove,{passive:!0}):e==="click"&&h(this,a).click===0&&(s.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),s.addEventListener("pointerup",this.onPointerUp,{passive:!0})),h(this,a)[e]+=1}off(e,r){super.removeEventListener(e,r);const s=this.renderer.domElement;h(this,a)[e]-=1,e==="move"&&h(this,a).move<=0?s.removeEventListener("pointermove",this.onPointerMove):e==="click"&&h(this,a).click<=0&&(s.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),s.addEventListener("pointerup",this.onPointerUp,{passive:!0}))}getNormalizedCoordinates(e,r){const s=this.renderer.domElement,l=s.getBoundingClientRect();r.x=(e.clientX-l.x)/s.clientWidth*2-1,r.y=-((e.clientY-l.y)/s.clientHeight*2)+1}dispose(){const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointermove",this.onPointerMove)}}a=new WeakMap;const O={title:"Mouse Raycaster",parameters:{docs:{source:{type:"code",code:`
<script>

import { MouseRaycaster } from 'trzy'

const raycaster = new MouseRaycaster({
  scene, // alternatively, pass objects: THREE.Object3D[]
  camera,
  renderer,
  recursive: true,
})

raycaster.on('move', (event) => console.log(event.intersections))
raycaster.on('click', (event) => console.log(event.intersections))

// later
raycaster.dispose()

<\/script>
        `}}}},E={render:()=>{const{scene:n,camera:t,renderer:e,run:r}=I();n.add(new T(void 0,.2));const s=new U(void 0,.5);s.position.set(-5,2,5),n.add(s);const l=100,i=new H(new j(.5,.5,.5),new S,l);i.position.set(0,0,0);const d=new b,v=new b,u=new _,x=new F,p=l/10;for(let c=0;c<l;c+=1)u.set(c%p-p/2,0,Math.floor(c/p)-p/2),d.setPosition(u),i.setMatrixAt(c,d),i.setColorAt(c,x.set("yellow"));const y=new z({scene:n,camera:t,renderer:e});return y.on("move",c=>{for(let m=0;m<l;m+=1)i.getMatrixAt(m,v),d.makeScale(1,1,1),d.setPosition(u.setFromMatrixPosition(v)),i.setMatrixAt(m,d);for(const m of c.intersections){const{instanceId:w}=m;i.getMatrixAt(w,v),d.makeScale(1.2,1.2,1.2),d.setPosition(u.setFromMatrixPosition(v)),i.setMatrixAt(w,d)}i.instanceMatrix.needsUpdate=!0}),y.on("click",c=>{for(const m of c.intersections){const{instanceId:w}=m;i.setColorAt(w,x.set("hotpink"))}i.instanceColor.needsUpdate=!0}),n.add(i),t.position.set(5,5,5),t.lookAt(0,0,0),e.domElement.style.cssText="width: 100%; height: 400px;",r(),e.domElement}};var g,P,A;E.parameters={...E.parameters,docs:{...(g=E.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      renderer,
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
      scene,
      camera,
      renderer
    });
    raycaster.on('move', event => {
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
    raycaster.on('click', event => {
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
    renderer.domElement.style.cssText = 'width: 100%; height: 400px;';
    run();
    return renderer.domElement;
  }
}`,...(A=(P=E.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const V=["Primary"];export{E as Primary,V as __namedExportsOrder,O as default};
//# sourceMappingURL=mouse-raycaster.stories-519f88d5.js.map
