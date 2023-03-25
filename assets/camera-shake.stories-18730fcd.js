var B=Object.defineProperty;var Y=(s,t,n)=>t in s?B(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var a=(s,t,n)=>(Y(s,typeof t!="symbol"?t+"":t,n),n);import{E as I,u as _,r as O,t as X,c as J,a as K,D as Q,M as V,B as W,b as Z}from"./three-0d2b188b.js";const $=.5*(Math.sqrt(3)-1),w=(3-Math.sqrt(3))/6,N=s=>Math.floor(s)|0,L=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function M(s=Math.random){const t=tt(s),n=new Float64Array(t).map(i=>L[i%12*2]),e=new Float64Array(t).map(i=>L[i%12*2+1]);return function(o,c){let A=0,T=0,q=0;const H=(o+c)*$,b=N(o+H),R=N(c+H),z=(b+R)*w,U=b-z,j=R-z,h=o-U,l=c-j;let f,g;h>l?(f=1,g=0):(f=0,g=1);const S=h-f+w,E=l-g+w,v=h-1+2*w,k=l-1+2*w,C=b&255,F=R&255;let d=.5-h*h-l*l;if(d>=0){const r=C+t[F],p=n[r],u=e[r];d*=d,A=d*d*(p*h+u*l)}let m=.5-S*S-E*E;if(m>=0){const r=C+f+t[F+g],p=n[r],u=e[r];m*=m,T=m*m*(p*S+u*E)}let y=.5-v*v-k*k;if(y>=0){const r=C+1+t[F+1],p=n[r],u=e[r];y*=y,q=y*y*(p*v+u*k)}return 70*(A+T+q)}}function tt(s){const n=new Uint8Array(512);for(let e=0;e<512/2;e++)n[e]=e;for(let e=0;e<512/2-1;e++){const i=e+~~(s()*(256-e)),o=n[e];n[e]=n[i],n[i]=o}for(let e=256;e<512;e++)n[e]=n[e-256];return n}class et{constructor(t){a(this,"decay",!1);a(this,"decayRate",.65);a(this,"intensity",.5);a(this,"maxPitch",.05);a(this,"maxRoll",.05);a(this,"maxYaw",.05);a(this,"pitchFrequency",5e-4);a(this,"rollFrequency",5e-4);a(this,"yawFrequency",5e-4);a(this,"yawNoise",M());a(this,"pitchNoise",M());a(this,"rollNoise",M());a(this,"then",0);a(this,"activeControls",null);a(this,"initialRotation",new I);a(this,"camera");a(this,"updateRotation",()=>{this.initialRotation=this.camera.rotation.clone()});a(this,"handleUpdate",(t,n)=>{const e=this.intensity**2,i=this.maxYaw*e*this.yawNoise(t*this.yawFrequency,1),o=this.maxPitch*e*this.pitchNoise(t*this.pitchFrequency,1),c=this.maxRoll*e*this.rollNoise(t*this.rollFrequency,1);this.camera.rotation.set(this.initialRotation.x+o,this.initialRotation.y+i,this.initialRotation.z+c),this.decay&&this.intensity>0&&(this.intensity-=this.decayRate*n,this.intensity<0?this.intensity=0:this.intensity>1&&(this.intensity=1))});this.camera=t}enable(t){this.then=performance.now(),this.initialRotation.copy(this.camera.rotation),_(this.handleUpdate),t&&(this.activeControls=t,this.activeControls.addEventListener("change",this.updateRotation))}disable(){O(this.handleUpdate),this.activeControls&&(this.activeControls.removeEventListener("change",this.updateRotation),this.activeControls=null)}}const st={title:"Camera Shake",parameters:{docs:{source:{code:`<script>

import { CameraShake } from 'trzy'

const cameraShake = new CameraShake(camera)
cameraShake.enable()

cameraShake.disable()

<\/script>`}}}},x={render:()=>{const{scene:s,camera:t,canvas:n,run:e}=X(),i=new et(t);s.add(new J),s.add(new K(void 0,.2));const o=new Q(void 0,.5);o.position.set(-5,2,5),s.add(o);const c=new V(new W,new Z);return s.add(c),t.position.set(2,2,2),t.lookAt(0,0,0),n.style.cssText="width: 100%; height: 400px;",i.enable(),e(),n}};var D,G,P;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const {
      scene,
      camera,
      canvas,
      run
    } = threeInstance();
    const cameraShake = new CameraShake(camera);
    scene.add(new THREE.AxesHelper());
    scene.add(new THREE.AmbientLight(undefined, 0.2));
    const light = new THREE.DirectionalLight(undefined, 0.5);
    light.position.set(-5, 2, 5);
    scene.add(light);
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
    scene.add(cube);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);
    canvas.style.cssText = 'width: 100%; height: 400px;';
    cameraShake.enable();
    run();
    return canvas;
  }
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const it=["Primary"];export{x as Primary,it as __namedExportsOrder,st as default};
//# sourceMappingURL=camera-shake.stories-18730fcd.js.map
