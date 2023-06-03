var L=Object.defineProperty;var O=(i,t,e)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(O(i,typeof t!="symbol"?t+"":t,e),e);import{E as B,t as U}from"./teleport-bfa5777f.js";import{s as X}from"./lib-a13e8409.js";const I=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,M=i=>Math.floor(i)|0,_=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function N(i=Math.random){const t=J(i),e=new Float64Array(t).map(s=>_[s%12*2]),n=new Float64Array(t).map(s=>_[s%12*2+1]);return function(o,c){let S=0,R=0,P=0;const j=(o+c)*I,g=M(o+j),C=M(c+j),A=(g+C)*f,D=g-A,H=C-A,l=o-D,h=c-H;let w,x;l>h?(w=1,x=0):(w=0,x=1);const v=l-w+f,F=h-x+f,k=l-1+2*f,E=h-1+2*f,q=g&255,z=C&255;let m=.5-l*l-h*h;if(m>=0){const r=q+t[z],p=e[r],d=n[r];m*=m,S=m*m*(p*l+d*h)}let y=.5-v*v-F*F;if(y>=0){const r=q+w+t[z+x],p=e[r],d=n[r];y*=y,R=y*y*(p*v+d*F)}let u=.5-k*k-E*E;if(u>=0){const r=q+1+t[z+1],p=e[r],d=n[r];u*=u,P=u*u*(p*k+d*E)}return 70*(S+R+P)}}function J(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),o=e[n];e[n]=e[s],e[s]=o}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class K{constructor(t){a(this,"decay",!1);a(this,"decayRate",.65);a(this,"intensity",.5);a(this,"maxPitch",.05);a(this,"maxRoll",.05);a(this,"maxYaw",.05);a(this,"pitchFrequency",5e-4);a(this,"rollFrequency",5e-4);a(this,"yawFrequency",5e-4);a(this,"time",0);a(this,"yawNoise",N());a(this,"pitchNoise",N());a(this,"rollNoise",N());a(this,"then",0);a(this,"activeControls",null);a(this,"initialRotation",new B);a(this,"camera");a(this,"updateRotation",()=>{this.initialRotation.copy(this.camera.rotation)});a(this,"update",t=>{this.time+=t;const e=this.intensity**2,n=this.maxYaw*e*this.yawNoise(this.time*this.yawFrequency,1),s=this.maxPitch*e*this.pitchNoise(this.time*this.pitchFrequency,1),o=this.maxRoll*e*this.rollNoise(this.time*this.rollFrequency,1);this.camera.rotation.set(this.initialRotation.x+s,this.initialRotation.y+n,this.initialRotation.z+o),this.decay&&this.intensity>0&&(this.intensity-=this.decayRate*t,this.intensity<0?this.intensity=0:this.intensity>1&&(this.intensity=1))});this.camera=t}enable(t){this.then=performance.now(),this.initialRotation.copy(this.camera.rotation),t&&(this.activeControls=t,this.activeControls.addEventListener("change",this.updateRotation))}disable(){this.activeControls&&(this.activeControls.removeEventListener("change",this.updateRotation),this.activeControls=null)}}const Q=`import * as THREE from 'three'
import { CameraShake, useRaf } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

useRaf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()
`,tt={title:"Camera Shake",parameters:{docs:{source:{code:Q}}}},V=()=>{const{scene:i,camera:t,canvas:e,update:n,beforeRender:s}=U();return X({scene:i,camera:t,canvas:e,update:n,controls:!0}).then(o=>{const c=new K(t.current);c.enable(o),s((S,R)=>{c.update(R)})}),e},b={render:V};var G,T,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render
}`,...(Y=(T=b.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};const et=["Primary"];export{b as Primary,et as __namedExportsOrder,tt as default};
//# sourceMappingURL=index.stories-5bdb6f9e.js.map
