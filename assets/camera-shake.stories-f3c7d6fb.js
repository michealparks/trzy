var B=Object.defineProperty;var Y=(s,t,n)=>t in s?B(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var a=(s,t,n)=>(Y(s,typeof t!="symbol"?t+"":t,n),n);import{E as _,t as O,c as U,a as X,D as J,M as K,B as Q,b as V}from"./index-d0386946.js";const W=.5*(Math.sqrt(3)-1),w=(3-Math.sqrt(3))/6,N=s=>Math.floor(s)|0,L=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function M(s=Math.random){const t=Z(s),n=new Float64Array(t).map(i=>L[i%12*2]),e=new Float64Array(t).map(i=>L[i%12*2+1]);return function(o,c){let A=0,T=0,q=0;const H=(o+c)*W,S=N(o+H),b=N(c+H),z=(S+b)*w,j=S-z,I=b-z,h=o-j,l=c-I;let f,g;h>l?(f=1,g=0):(f=0,g=1);const R=h-f+w,E=l-g+w,k=h-1+2*w,v=l-1+2*w,C=S&255,F=b&255;let d=.5-h*h-l*l;if(d>=0){const r=C+t[F],y=n[r],p=e[r];d*=d,A=d*d*(y*h+p*l)}let m=.5-R*R-E*E;if(m>=0){const r=C+f+t[F+g],y=n[r],p=e[r];m*=m,T=m*m*(y*R+p*E)}let u=.5-k*k-v*v;if(u>=0){const r=C+1+t[F+1],y=n[r],p=e[r];u*=u,q=u*u*(y*k+p*v)}return 70*(A+T+q)}}function Z(s){const n=new Uint8Array(512);for(let e=0;e<512/2;e++)n[e]=e;for(let e=0;e<512/2-1;e++){const i=e+~~(s()*(256-e)),o=n[e];n[e]=n[i],n[i]=o}for(let e=256;e<512;e++)n[e]=n[e-256];return n}class ${constructor(t){a(this,"decay",!1);a(this,"decayRate",.65);a(this,"intensity",.5);a(this,"maxPitch",.05);a(this,"maxRoll",.05);a(this,"maxYaw",.05);a(this,"pitchFrequency",5e-4);a(this,"rollFrequency",5e-4);a(this,"yawFrequency",5e-4);a(this,"yawNoise",M());a(this,"pitchNoise",M());a(this,"rollNoise",M());a(this,"then",0);a(this,"activeControls",null);a(this,"initialRotation",new _);a(this,"camera");a(this,"updateRotation",()=>{this.initialRotation=this.camera.rotation.clone()});a(this,"update",(t,n)=>{const e=this.intensity**2,i=this.maxYaw*e*this.yawNoise(t*this.yawFrequency,1),o=this.maxPitch*e*this.pitchNoise(t*this.pitchFrequency,1),c=this.maxRoll*e*this.rollNoise(t*this.rollFrequency,1);this.camera.rotation.set(this.initialRotation.x+o,this.initialRotation.y+i,this.initialRotation.z+c),this.decay&&this.intensity>0&&(this.intensity-=this.decayRate*n,this.intensity<0?this.intensity=0:this.intensity>1&&(this.intensity=1))});this.camera=t}enable(t){this.then=performance.now(),this.initialRotation.copy(this.camera.rotation),t&&(this.activeControls=t,this.activeControls.addEventListener("change",this.updateRotation))}disable(){this.activeControls&&(this.activeControls.removeEventListener("change",this.updateRotation),this.activeControls=null)}}const nt={title:"Camera Shake",parameters:{docs:{source:{code:`import { CameraShake } from 'trzy'

const cameraShake = new CameraShake(camera)

// If using with three() and run()
cameraShake.enable()
cameraShake.disable()

// If using your own game loop
cameraShake.update(time, delta)`}}}},x={render:()=>{const{scene:s,camera:t,canvas:n,run:e}=O(),i=new $(t);s.add(new U),s.add(new X(void 0,.2));const o=new J(void 0,.5);o.position.set(-5,2,5),s.add(o);const c=new K(new Q,new V);return s.add(c),t.position.set(2,2,2),t.lookAt(0,0,0),n.style.cssText="width: 100%; height: 400px;",i.enable(),e(),n}};var D,G,P;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const at=["Primary"];export{x as Primary,at as __namedExportsOrder,nt as default};
//# sourceMappingURL=camera-shake.stories-f3c7d6fb.js.map
