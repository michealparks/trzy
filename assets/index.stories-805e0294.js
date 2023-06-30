var T=Object.defineProperty;var B=(a,s,t)=>s in a?T(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;var n=(a,s,t)=>(B(a,typeof s!="symbol"?s+"":s,t),t);import{E as H,t as U}from"./teleport-97191997.js";import{s as X}from"./setup-ff5f1186.js";const I=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,M=a=>Math.floor(a)|0,_=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function q(a=Math.random){const s=J(a),t=new Float64Array(s).map(i=>_[i%12*2]),e=new Float64Array(s).map(i=>_[i%12*2+1]);return function(o,h){let z=0,E=0,N=0;const P=(o+h)*I,S=M(o+P),w=M(h+P),A=(S+w)*f,L=S-A,O=w-A,c=o-L,l=h-O;let b,x;c>l?(b=1,x=0):(b=0,x=1);const R=c-b+f,g=l-x+f,C=c-1+2*f,k=l-1+2*f,F=S&255,j=w&255;let m=.5-c*c-l*l;if(m>=0){const r=F+s[j],u=t[r],p=e[r];m*=m,z=m*m*(u*c+p*l)}let y=.5-R*R-g*g;if(y>=0){const r=F+b+s[j+x],u=t[r],p=e[r];y*=y,E=y*y*(u*R+p*g)}let d=.5-C*C-k*k;if(d>=0){const r=F+1+s[j+1],u=t[r],p=e[r];d*=d,N=d*d*(u*C+p*k)}return 70*(z+E+N)}}function J(a){const t=new Uint8Array(512);for(let e=0;e<512/2;e++)t[e]=e;for(let e=0;e<512/2-1;e++){const i=e+~~(a()*(256-e)),o=t[e];t[e]=t[i],t[i]=o}for(let e=256;e<512;e++)t[e]=t[e-256];return t}class K{constructor(s){n(this,"enabled",!1);n(this,"decay",!1);n(this,"decayRate",.65);n(this,"intensity",.5);n(this,"maxPitch",.05);n(this,"maxRoll",.05);n(this,"maxYaw",.05);n(this,"pitchFrequency",5e-4);n(this,"rollFrequency",5e-4);n(this,"yawFrequency",5e-4);n(this,"time",0);n(this,"initialRotation",new H);n(this,"object");n(this,"yawNoise",q());n(this,"pitchNoise",q());n(this,"rollNoise",q());n(this,"saveRotation",()=>{this.initialRotation.copy(this.object.rotation)});n(this,"update",s=>{this.time+=s;const t=this.intensity**2,e=this.maxYaw*t*this.yawNoise(this.time*this.yawFrequency,1),i=this.maxPitch*t*this.pitchNoise(this.time*this.pitchFrequency,1),o=this.maxRoll*t*this.rollNoise(this.time*this.rollFrequency,1);this.object.rotation.set(this.initialRotation.x+i,this.initialRotation.y+e,this.initialRotation.z+o),this.decay&&this.intensity>0&&(this.intensity-=this.decayRate*s,this.intensity<0?this.intensity=0:this.intensity>1&&(this.intensity=1))});this.object=s}enable(){this.saveRotation(),this.enabled=!0}disable(){this.enabled=!1}}class Q extends K{constructor(){super(...arguments);n(this,"activeControls")}enable(t){super.enable(),t&&(this.activeControls=t,this.activeControls.addEventListener("change",this.saveRotation))}disable(){super.disable(),this.activeControls&&(this.activeControls.removeEventListener("change",this.saveRotation),this.activeControls=void 0)}}const V=`import { CameraShake, raf } from 'trzy'

const camera = new THREE.PerspectiveCamera()
const cameraShake = new CameraShake(camera)

// Optionally pass orbitControls if they exist
cameraShake.enable(orbitControls)

raf((_, delta) => {
  // Before rendering your scene
  cameraShake.update(delta)
})

cameraShake.disable()
`,et={title:"Camera Shake",parameters:{docs:{source:{code:V}}}},W=()=>{const{camera:a,canvas:s,beforeRender:t}=U();return X().then(({controls:e})=>{const i=new Q(a.current);i.enable(e),t((o,h)=>{i.update(h)})}),s},v={render:W};var G,Y,D;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render
}`,...(D=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};const st=["Primary"];export{v as Primary,st as __namedExportsOrder,et as default};
//# sourceMappingURL=index.stories-805e0294.js.map
