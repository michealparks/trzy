var C=Object.defineProperty;var b=(n,s,e)=>s in n?C(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e;var o=(n,s,e)=>(b(n,typeof s!="symbol"?s+"":s,e),e),k=(n,s,e)=>{if(!s.has(n))throw TypeError("Cannot "+e)};var m=(n,s,e)=>(k(n,s,"read from private field"),e?e.call(n):s.get(n)),y=(n,s,e)=>{if(s.has(n))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(n):s.set(n,e)};import{d as L,V as w,R as U,t as j,I as D,B as R,a as A,e as f,f as S,C as z}from"./index-de99f9b2.js";import{s as F}from"./lib-170271b8.js";var c;class I extends L{constructor(e){super();o(this,"camera");o(this,"raycaster");o(this,"objects",[]);o(this,"pointerDown",new w);o(this,"pointerUp",new w);o(this,"pointerMove",new w);o(this,"recursive",!0);o(this,"renderer");y(this,c,{click:0,move:0});o(this,"onPointerDown",e=>{this.getNormalizedCoordinates(e,this.pointerDown)});o(this,"onPointerUp",e=>{if(this.getNormalizedCoordinates(e,this.pointerUp),this.pointerDown.sub(this.pointerUp).lengthSq()>.001)return;this.raycaster.setFromCamera(this.pointerUp,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"click",intersections:r})});o(this,"onPointerMove",e=>{this.getNormalizedCoordinates(e,this.pointerMove),this.raycaster.setFromCamera(this.pointerMove,this.camera);const r=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"move",intersections:r})});this.camera=e.camera,this.renderer=e.renderer,this.raycaster=e.raycaster??new U,this.objects=e.objects??(e.scene?[e.scene]:[]),this.recursive=e.recursive??!0}on(e,r){super.addEventListener(e,r);const t=this.renderer.domElement;e==="move"&&m(this,c).move===0?t.addEventListener("pointermove",this.onPointerMove,{passive:!0}):e==="click"&&m(this,c).click===0&&(t.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),t.addEventListener("pointerup",this.onPointerUp,{passive:!0})),m(this,c)[e]+=1}off(e,r){super.removeEventListener(e,r);const t=this.renderer.domElement;m(this,c)[e]-=1,e==="move"&&m(this,c).move<=0?t.removeEventListener("pointermove",this.onPointerMove):e==="click"&&m(this,c).click<=0&&(t.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),t.addEventListener("pointerup",this.onPointerUp,{passive:!0}))}getNormalizedCoordinates(e,r){const t=this.renderer.domElement,i=t.getBoundingClientRect();r.x=(e.clientX-i.x)/t.clientWidth*2-1,r.y=-((e.clientY-i.y)/t.clientHeight*2)+1}dispose(){const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointermove",this.onPointerMove)}}c=new WeakMap;const N=`import { MouseRaycaster } from 'trzy'

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
`,H={title:"Mouse Raycaster",parameters:{docs:{source:{code:N}}}},O=()=>{const{scene:n,camera:s,renderer:e}=j();F({controls:!0});const r=100,t=new D(new R(.5,.5,.5),new A,r);t.position.set(0,0,0),t.castShadow=t.receiveShadow=!0,n.add(t);const i=new f,h=new f,v=new S,M=new z,l=r/10;for(let a=0;a<r;a+=1)v.set(a%l-l/2,0,Math.floor(a/l)-l/2),i.setPosition(v),t.setMatrixAt(a,i),t.setColorAt(a,M.set("yellow"));const E=new I({scene:n,camera:s,renderer:e});return E.on("move",a=>{for(let d=0;d<r;d+=1)t.getMatrixAt(d,h),i.makeScale(1,1,1),i.setPosition(v.setFromMatrixPosition(h)),t.setMatrixAt(d,i);for(const d of a.intersections){const{instanceId:p}=d;t.getMatrixAt(p,h),i.makeScale(1.2,1.2,1.2),i.setPosition(v.setFromMatrixPosition(h)),t.setMatrixAt(p,i)}t.instanceMatrix.needsUpdate=!0}),E.on("click",a=>{for(const d of a.intersections){const{instanceId:p}=d;t.setColorAt(p,M.set("hotpink"))}t.instanceColor.needsUpdate=!0}),e.domElement},u={render:O};var P,x,g;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render
}`,...(g=(x=u.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const q=["Primary"];export{u as Primary,q as __namedExportsOrder,H as default};
//# sourceMappingURL=mouse-raycaster.stories-34451673.js.map
