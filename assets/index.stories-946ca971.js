var T=Object.defineProperty;var B=(a,s,t)=>s in a?T(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;var n=(a,s,t)=>(B(a,typeof s!="symbol"?s+"":s,t),t);import{E as H,t as U}from"./teleport-bfa5777f.js";import{s as X}from"./lib-a13e8409.js";const I=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,M=a=>Math.floor(a)|0,_=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function E(a=Math.random){const s=J(a),t=new Float64Array(s).map(i=>_[i%12*2]),e=new Float64Array(s).map(i=>_[i%12*2+1]);return function(o,c){let w=0,b=0,N=0;const P=(o+c)*I,R=M(o+P),g=M(c+P),A=(R+g)*f,L=R-A,O=g-A,l=o-L,h=c-O;let x,S;l>h?(x=1,S=0):(x=0,S=1);const C=l-x+f,k=h-S+f,F=l-1+2*f,j=h-1+2*f,q=R&255,z=g&255;let m=.5-l*l-h*h;if(m>=0){const r=q+s[z],d=t[r],p=e[r];m*=m,w=m*m*(d*l+p*h)}let y=.5-C*C-k*k;if(y>=0){const r=q+x+s[z+S],d=t[r],p=e[r];y*=y,b=y*y*(d*C+p*k)}let u=.5-F*F-j*j;if(u>=0){const r=q+1+s[z+1],d=t[r],p=e[r];u*=u,N=u*u*(d*F+p*j)}return 70*(w+b+N)}}function J(a){const t=new Uint8Array(512);for(let e=0;e<512/2;e++)t[e]=e;for(let e=0;e<512/2-1;e++){const i=e+~~(a()*(256-e)),o=t[e];t[e]=t[i],t[i]=o}for(let e=256;e<512;e++)t[e]=t[e-256];return t}class K{constructor(s){n(this,"enabled",!1);n(this,"decay",!1);n(this,"decayRate",.65);n(this,"intensity",.5);n(this,"maxPitch",.05);n(this,"maxRoll",.05);n(this,"maxYaw",.05);n(this,"pitchFrequency",5e-4);n(this,"rollFrequency",5e-4);n(this,"yawFrequency",5e-4);n(this,"time",0);n(this,"initialRotation",new H);n(this,"object");n(this,"yawNoise",E());n(this,"pitchNoise",E());n(this,"rollNoise",E());n(this,"saveRotation",()=>{this.initialRotation.copy(this.object.rotation)});n(this,"update",s=>{this.time+=s;const t=this.intensity**2,e=this.maxYaw*t*this.yawNoise(this.time*this.yawFrequency,1),i=this.maxPitch*t*this.pitchNoise(this.time*this.pitchFrequency,1),o=this.maxRoll*t*this.rollNoise(this.time*this.rollFrequency,1);this.object.rotation.set(this.initialRotation.x+i,this.initialRotation.y+e,this.initialRotation.z+o),this.decay&&this.intensity>0&&(this.intensity-=this.decayRate*s,this.intensity<0?this.intensity=0:this.intensity>1&&(this.intensity=1))});this.object=s}enable(){this.saveRotation(),this.enabled=!0}disable(){this.enabled=!1}}class Q extends K{constructor(t){super(t);n(this,"activeControls",null)}enable(t){super.enable(),t&&(this.activeControls=t,this.activeControls.addEventListener("change",this.saveRotation))}disable(){super.disable(),this.activeControls&&(this.activeControls.removeEventListener("change",this.saveRotation),this.activeControls=null)}}const V=`import { CameraShake, raf } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

raf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()
`,et={title:"Camera Shake",parameters:{docs:{source:{code:V}}}},W=()=>{const{scene:a,camera:s,canvas:t,update:e,beforeRender:i}=U();return X({scene:a,camera:s,canvas:t,update:e,controls:!0}).then(o=>{const c=new Q(s.current);c.enable(o),i((w,b)=>{c.update(b)})}),t},v={render:W};var G,Y,D;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render
}`,...(D=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};const st=["Primary"];export{v as Primary,st as __namedExportsOrder,et as default};
//# sourceMappingURL=index.stories-946ca971.js.map
