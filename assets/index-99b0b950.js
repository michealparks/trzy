var Jd=Object.defineProperty;var Qd=(s,e,t)=>e in s?Jd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var fn=(s,e,t)=>(Qd(s,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="152dev",RT={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},CT={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef=0,Rc=1,tf=2,Su=1,Mu=2,kn=3,qn=0,Bt=1,Rn=2,Hn=0,ri=1,Ur=2,Ir=3,Dr=4,la=5,yi=100,yu=101,Tu=102,ua=103,ha=104,Eu=200,bu=201,wu=202,Au=203,Xa=204,$a=205,Ru=206,Cu=207,Pu=208,Lu=209,Nu=210,Uu=0,Iu=1,Du=2,Fr=3,Fu=4,Ou=5,Bu=6,Gu=7,zu=0,nf=1,sf=2,sn=0,Vu=1,ku=2,Wu=3,qa=4,rf=5,Hu=300,ns=301,is=302,Or=303,Br=304,eo=306,Gr=1e3,xn=1001,zr=1002,it=1003,da=1004,wr=1005,Wt=1006,of=1007,Os=1008,Pn=1009,af=1010,cf=1011,Ya=1012,lf=1013,ii=1014,en=1015,oi=1016,uf=1017,hf=1018,bi=1020,df=1021,tn=1023,ff=1024,pf=1025,Xn=1026,Ri=1027,Xu=1028,mf=1029,$u=1030,gf=1031,_f=1033,So=33776,Ar=33777,Rr=33778,Cr=33779,Cc=35840,Pc=35841,Lc=35842,Nc=35843,xf=36196,fa=37492,pa=37496,ma=37808,ga=37809,_a=37810,xa=37811,va=37812,Sa=37813,Ma=37814,ya=37815,Ta=37816,Ea=37817,ba=37818,wa=37819,Aa=37820,Ra=37821,Mo=36492,vf=36283,Uc=36284,Ic=36285,Dc=36286,Vr=2300,kr=2301,yo=2302,Fc=2400,Oc=2401,Bc=2402,Sf=2500,PT=0,LT=1,NT=2,ja=3e3,$n=3001,Mf=3200,yf=3201,Wr=0,qu=1,ai="",pe="srgb",Nn="srgb-linear",Yu="display-p3",Tf=0,Pr=7680,Ef=7681,bf=7682,wf=7683,Af=34055,Rf=34056,Cf=5386,Pf=512,Lf=513,Nf=514,Uf=515,If=516,Df=517,Ff=518,ju=519,Ca=35044,Gc="300 es",Pa=1035;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const Is=Math.PI/180,ss=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ka(s,e){return(s%e+e)%e}function Of(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ds(s,e,t){return(1-t)*s+t*e}function Gf(s,e,t,n){return Ds(s,e,1-Math.exp(-t*n))}function zf(s,e=1){return e-Math.abs(Ka(s,e*2)-e)}function Vf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function kf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hf(s,e){return s+Math.random()*(e-s)}function Xf(s){return s*(.5-Math.random())}function $f(s){s!==void 0&&(zc=s);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(s){return s*Is}function Yf(s){return s*ss}function La(s){return(s&s-1)===0&&s!==0}function Ku(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Za={DEG2RAD:Is,RAD2DEG:ss,generateUUID:vn,clamp:bt,euclideanModulo:Ka,mapLinear:Of,inverseLerp:Bf,lerp:Ds,damp:Gf,pingpong:zf,smoothstep:Vf,smootherstep:kf,randInt:Wf,randFloat:Hf,randFloatSpread:Xf,seededRandom:$f,degToRad:qf,radToDeg:Yf,isPowerOfTwo:La,ceilPowerOfTwo:Ku,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:jf,normalize:nt,denormalize:Wn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],T=i[1],S=i[4],A=i[7],E=i[2],R=i[5],N=i[8];return r[0]=o*_+a*T+c*E,r[3]=o*m+a*S+c*R,r[6]=o*f+a*A+c*N,r[1]=l*_+u*T+h*E,r[4]=l*m+u*S+h*R,r[7]=l*f+u*A+h*N,r[2]=d*_+p*T+g*E,r[5]=d*m+p*S+g*R,r[8]=d*f+p*A+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new ze;function Ju(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Vc={};function Fs(s){s in Vc||(Vc[s]=!0,console.warn(s))}function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Kf=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Zf=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Jf(s){return s.convertSRGBToLinear().applyMatrix3(Zf)}function Qf(s){return s.applyMatrix3(Kf).convertLinearToSRGB()}const ep={[Nn]:s=>s,[pe]:s=>s.convertSRGBToLinear(),[Yu]:Jf},tp={[Nn]:s=>s,[pe]:s=>s.convertLinearToSRGB(),[Yu]:Qf},cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Nn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ep[e],i=tp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ui;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Bs("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class eh{constructor(e=null){this.isSource=!0,this.uuid=vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bo(i[o].image)):r.push(bo(i[o]))}else r=bo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class It extends ds{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=xn,i=xn,r=Wt,o=Os,a=tn,c=Pn,l=It.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=vn(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$n?pe:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?$n:ja}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?pe:ai}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Hu;It.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,A=(p+1)/2,E=(f+1)/2,R=(u+d)/4,N=(h+_)/4,H=(g+m)/4;return S>A&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=N/n):A>E?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=R/i,r=H/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=N/r,i=H/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends ds{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?pe:ai),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class th extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const E=Math.sqrt(S),R=Math.atan2(E,f*T);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const A=a*T;if(c=c*m+d*A,l=l*m+p*A,u=u*m+g*A,h=h*m+_*A,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new w,kc=new fs;class Sn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox),Ii.applyMatrix4(e.matrixWorld),this.union(Ii);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Fn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else i.boundingBox===null&&i.computeBoundingBox(),Ii.copy(i.boundingBox),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),$s.subVectors(this.max,ys),Di.subVectors(e.a,ys),Fi.subVectors(e.b,ys),Oi.subVectors(e.c,ys),Kn.subVectors(Fi,Di),Zn.subVectors(Oi,Fi),mi.subVectors(Di,Oi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-mi.y,mi.x,0];return!Ao(t,Di,Fi,Oi,$s)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Di,Fi,Oi,$s))?!1:(qs.crossVectors(Kn,Zn),t=[qs.x,qs.y,qs.z],Ao(t,Di,Fi,Oi,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new w,new w,new w,new w,new w,new w,new w,new w],Fn=new w,Ii=new Sn,Di=new w,Fi=new w,Oi=new w,Kn=new w,Zn=new w,mi=new w,ys=new w,$s=new w,qs=new w,gi=new w;function Ao(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gi.fromArray(s,r);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const sp=new Sn,Ts=new w,Ro=new w;class Mn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ro)),this.expandByPoint(Ts.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new w,Co=new w,Ys=new w,Jn=new w,Po=new w,js=new w,Lo=new w;class to{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Co.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=Jn.dot(this.direction),c=-Jn.dot(Ys),l=Jn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Co).addScaledVector(Ys,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,r){Po.subVectors(t,e),js.subVectors(n,e),Lo.crossVectors(Po,js);let o=this.direction.dot(Lo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const c=a*this.direction.dot(js.crossVectors(Jn,js));if(c<0)return null;const l=a*this.direction.dot(Po.cross(Jn));if(l<0||c+l>o)return null;const u=-a*Jn.dot(Lo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,op)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Qn.crossVectors(n,Kt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Qn.crossVectors(n,Kt)),Qn.normalize(),Ks.crossVectors(Kt,Qn),i[0]=Qn.x,i[4]=Ks.x,i[8]=Kt.x,i[1]=Qn.y,i[5]=Ks.y,i[9]=Kt.y,i[2]=Qn.z,i[6]=Ks.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],S=n[7],A=n[11],E=n[15],R=i[0],N=i[4],H=i[8],x=i[12],b=i[1],K=i[5],B=i[9],L=i[13],O=i[2],F=i[6],Q=i[10],q=i[14],Y=i[3],J=i[7],ee=i[11],_e=i[15];return r[0]=o*R+a*b+c*O+l*Y,r[4]=o*N+a*K+c*F+l*J,r[8]=o*H+a*B+c*Q+l*ee,r[12]=o*x+a*L+c*q+l*_e,r[1]=u*R+h*b+d*O+p*Y,r[5]=u*N+h*K+d*F+p*J,r[9]=u*H+h*B+d*Q+p*ee,r[13]=u*x+h*L+d*q+p*_e,r[2]=g*R+_*b+m*O+f*Y,r[6]=g*N+_*K+m*F+f*J,r[10]=g*H+_*B+m*Q+f*ee,r[14]=g*x+_*L+m*q+f*_e,r[3]=T*R+S*b+A*O+E*Y,r[7]=T*N+S*K+A*F+E*J,r[11]=T*H+S*B+A*Q+E*ee,r[15]=T*x+S*L+A*q+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,S=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,A=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,E=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*T+n*S+i*A+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=T*N,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*N,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*N,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*p-n*c*p)*N,e[4]=S*N,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*N,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*N,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*p+t*c*p)*N,e[8]=A*N,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*N,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*N,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*N,e[12]=E*N,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*N,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*N,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,T=c*l,S=c*u,A=c*h,E=n.x,R=n.y,N=n.z;return i[0]=(1-(_+f))*E,i[1]=(p+A)*E,i[2]=(g-S)*E,i[3]=0,i[4]=(p-A)*R,i[5]=(1-(d+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+S)*N,i[9]=(m-T)*N,i[10]=(1-(d+_))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),a=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const l=1/r,u=1/o,h=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),h=(t+e)*c,d=(n+i)*l,p=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new w,pn=new Ie,rp=new w(0,0,0),op=new w(1,1,1),Qn=new w,Ks=new w,Kt=new w,Wc=new Ie,Hc=new fs;class no{constructor(e=0,t=0,n=0,i=no.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}no.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const Xc=new w,Gi=new fs,Bn=new Ie,Zs=new w,Es=new w,cp=new w,lp=new fs,$c=new w(1,0,0),qc=new w(0,1,0),Yc=new w(0,0,1),up={type:"added"},jc={type:"removed"};class dt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new w,t=new no,n=new fs,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ze}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Es,Zs,this.up):Bn.lookAt(Zs,Es,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new w(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new w,Gn=new w,No=new w,zn=new w,zi=new w,Vi=new w,Kc=new w,Uo=new w,Io=new w,Do=new w;let Js=!1;class _n{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Gn.subVectors(n,t),No.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Gn),c=mn.dot(No),l=Gn.dot(Gn),u=Gn.dot(No),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,i,r,o,a,c){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,zn),c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Gn.subVectors(e,t),mn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),_n.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),Vi.subVectors(r,n),Uo.subVectors(e,n);const c=zi.dot(Uo),l=Vi.dot(Uo);if(c<=0&&l<=0)return t.copy(n);Io.subVectors(e,i);const u=zi.dot(Io),h=Vi.dot(Io);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(zi,o);Do.subVectors(e,r);const p=zi.dot(Do),g=Vi.dot(Do);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Vi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Kc.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Kc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(zi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hp=0;class hi extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=ri,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xa,this.blendDst=$a,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=cn.workingColorSpace){if(e=Ka(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fo(o,r,e+1/3),this.g=Fo(o,r,e),this.b=Fo(o,r,e-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(e,t=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pe){const n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pe){return cn.fromWorkingColorSpace(Ot.copy(this),e),Math.round(bt(Ot.r*255,0,255))*65536+Math.round(bt(Ot.g*255,0,255))*256+Math.round(bt(Ot.b*255,0,255))}getHexString(e=pe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cn.workingColorSpace){cn.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=cn.workingColorSpace){return cn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=pe){cn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==pe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),gn.h+=e,gn.s+=t,gn.l+=n,this.setHSL(gn.h,gn.s,gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Qs);const n=Ds(gn.h,Qs.h,t),i=Ds(gn.s,Qs.s,t),r=Ds(gn.l,Qs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Oe;Oe.NAMES=nh;class Qa extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new w,er=new Ue;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ec extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dp=0;const an=new Ie,Oo=new dt,ki=new w,Zt=new Sn,bs=new Sn,Et=new w;class yn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?tc:ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Zt.min,bs.min),Zt.expandByPoint(Et),Et.addVectors(Zt.max,bs.max),Zt.expandByPoint(Et)):(Zt.expandByPoint(bs.min),Zt.expandByPoint(bs.max))}Zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(e,l),Et.add(ki)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new w,u[b]=new w;const h=new w,d=new w,p=new w,g=new Ue,_=new Ue,m=new Ue,f=new w,T=new w;function S(b,K,B){h.fromArray(i,b*3),d.fromArray(i,K*3),p.fromArray(i,B*3),g.fromArray(o,b*2),_.fromArray(o,K*2),m.fromArray(o,B*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const L=1/(_.x*m.y-m.x*_.y);isFinite(L)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(L),T.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(L),l[b].add(f),l[K].add(f),l[B].add(f),u[b].add(T),u[K].add(T),u[B].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let b=0,K=A.length;b<K;++b){const B=A[b],L=B.start,O=B.count;for(let F=L,Q=L+O;F<Q;F+=3)S(n[F+0],n[F+1],n[F+2])}const E=new w,R=new w,N=new w,H=new w;function x(b){N.fromArray(r,b*3),H.copy(N);const K=l[b];E.copy(K),E.sub(N.multiplyScalar(N.dot(K))).normalize(),R.crossVectors(H,K);const L=R.dot(u[b])<0?-1:1;c[b*4]=E.x,c[b*4+1]=E.y,c[b*4+2]=E.z,c[b*4+3]=L}for(let b=0,K=A.length;b<K;++b){const B=A[b],L=B.start,O=B.count;for(let F=L,Q=L+O;F<Q;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,u=new w,h=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Ie,En=new to,tr=new Mn,Jc=new w,Wi=new w,Hi=new w,Xi=new w,Bo=new w,nr=new w,ir=new Ue,sr=new Ue,rr=new Ue,Qc=new w,el=new w,tl=new w,or=new w,ar=new w;class nn extends dt{constructor(e=new yn,t=new Qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Bo.fromBufferAttribute(h,e),o?nr.addScaledVector(Bo,u):nr.addScaledVector(Bo.sub(t),u))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),En.copy(e.ray).recast(e.near),!(tr.containsPoint(En.origin)===!1&&(En.intersectSphere(tr,Jc)===null||En.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(r).invert(),En.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,o=i.index,a=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv2,u=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),T=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let S=f,A=T;S<A;S+=3){const E=o.getX(S),R=o.getX(S+1),N=o.getX(S+2);n=cr(this,m,e,En,c,l,u,E,R,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);n=cr(this,r,e,En,c,l,u,f,T,S),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),T=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let S=f,A=T;S<A;S+=3){const E=S,R=S+1,N=S+2;n=cr(this,m,e,En,c,l,u,E,R,N),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=_,T=_+1,S=_+2;n=cr(this,r,e,En,c,l,u,f,T,S),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function fp(s,e,t,n,i,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===qn,a),c===null)return null;ar.copy(a),ar.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:s}}function cr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Wi),s.getVertexPosition(c,Hi),s.getVertexPosition(l,Xi);const u=fp(s,e,t,n,Wi,Hi,Xi,or);if(u){i&&(ir.fromBufferAttribute(i,a),sr.fromBufferAttribute(i,c),rr.fromBufferAttribute(i,l),u.uv=_n.getInterpolation(or,Wi,Hi,Xi,ir,sr,rr,new Ue)),r&&(ir.fromBufferAttribute(r,a),sr.fromBufferAttribute(r,c),rr.fromBufferAttribute(r,l),u.uv2=_n.getInterpolation(or,Wi,Hi,Xi,ir,sr,rr,new Ue)),o&&(Qc.fromBufferAttribute(o,a),el.fromBufferAttribute(o,c),tl.fromBufferAttribute(o,l),u.normal=_n.getInterpolation(or,Wi,Hi,Xi,Qc,el,tl,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new w,materialIndex:0};_n.getNormal(Wi,Hi,Xi,h.normal),u.face=h}return u}class ps extends yn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(h,2));function g(_,m,f,T,S,A,E,R,N,H,x){const b=A/N,K=E/H,B=A/2,L=E/2,O=R/2,F=N+1,Q=H+1;let q=0,Y=0;const J=new w;for(let ee=0;ee<Q;ee++){const _e=ee*K-L;for(let he=0;he<F;he++){const W=he*b-B;J[_]=W*T,J[m]=_e*S,J[f]=O,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=R>0?1:-1,u.push(J.x,J.y,J.z),h.push(he/N),h.push(1-ee/H),q+=1}}for(let ee=0;ee<H;ee++)for(let _e=0;_e<N;_e++){const he=d+_e+F*ee,W=d+_e+F*(ee+1),Z=d+(_e+1)+F*(ee+1),ae=d+(_e+1)+F*ee;c.push(he,W,ae),c.push(W,Z,ae),Y+=6}a.addGroup(p,Y,x),p+=Y,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=rs(s[t]);for(const i in n)e[i]=n[i]}return e}function pp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ih(s){return s.getRenderTarget()===null?s.outputColorSpace:Nn}const io={clone:rs,merge:kt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends sh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,qi=1;class _p extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new $t($i,qi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new $t($i,qi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new $t($i,qi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new $t($i,qi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new $t($i,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new $t($i,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=sn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class nc extends It{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?pe:ai),this.texture=new nc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ps(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Hn});r.uniforms.tEquirect.value=t;const o=new nn(i,r),a=t.minFilter;return t.minFilter===Os&&(t.minFilter=Wt),new _p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Go=new w,vp=new w,Sp=new ze;class vi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Go.subVectors(n,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),i=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Mn,lr=new w;class ks{constructor(e=new vi,t=new vi,n=new vi,i=new vi,r=new vi,o=new vi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],T=n[14],S=n[15];return t[0].setComponents(a-i,h-c,_-d,S-m).normalize(),t[1].setComponents(a+i,h+c,_+d,S+m).normalize(),t[2].setComponents(a+r,h+l,_+p,S+f).normalize(),t[3].setComponents(a-r,h-l,_-p,S-f).normalize(),t[4].setComponents(a-o,h-u,_-g,S-T).normalize(),t[5].setComponents(a+o,h+u,_+g,S+T).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,p=u.updateRange;s.bindBuffer(h,l),p.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class ic extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let S=0;S<l;S++){const A=S*h-r;g.push(A,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const S=T+l*f,A=T+l*(f+1),E=T+1+l*(f+1),R=T+1+l*f;p.push(S,A,R),p.push(A,E,R)}this.setIndex(p),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp="vec3 transformed = vec3( position );",Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,_m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Um=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,fg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:yp,alphamap_pars_fragment:Tp,alphatest_fragment:Ep,alphatest_pars_fragment:bp,aomap_fragment:wp,aomap_pars_fragment:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Lp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:Gp,color_vertex:zp,common:Vp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Xp,emissivemap_fragment:$p,emissivemap_pars_fragment:qp,encodings_fragment:Yp,encodings_pars_fragment:jp,envmap_fragment:Kp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:tm,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:cm,lights_lambert_pars_fragment:lm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:xm,lights_fragment_maps:vm,lights_fragment_end:Sm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Em,map_fragment:bm,map_pars_fragment:wm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Im,normal_fragment_begin:Dm,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:Gm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Hm,output_fragment:Xm,packing:$m,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:jm,dithering_pars_fragment:Km,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:cg,tonemapping_fragment:lg,tonemapping_pars_fragment:ug,transmission_fragment:hg,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:xg,backgroundCube_vert:vg,backgroundCube_frag:Sg,cube_vert:Mg,cube_frag:yg,depth_vert:Tg,depth_frag:Eg,distanceRGBA_vert:bg,distanceRGBA_frag:wg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Ig,meshmatcap_vert:Dg,meshmatcap_frag:Fg,meshnormal_vert:Og,meshnormal_frag:Bg,meshphong_vert:Gg,meshphong_frag:zg,meshphysical_vert:Vg,meshphysical_frag:kg,meshtoon_vert:Wg,meshtoon_frag:Hg,points_vert:Xg,points_frag:$g,shadow_vert:qg,shadow_frag:Yg,sprite_vert:jg,sprite_frag:Kg},re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}}},qt={basic:{uniforms:kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:kt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:kt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:kt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:kt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:kt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:kt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:kt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:kt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:kt([re.common,re.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:kt([re.lights,re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};qt.physical={uniforms:kt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ur={r:0,b:0,g:0};function Zg(s,e,t,n,i,r,o){const a=new Oe(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let T=!1,S=f.isScene===!0?f.background:null;switch(S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,c):S&&S.isColor&&(_(S,1),T=!0),s.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),T=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),T=!0;break}(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===eo)?(u===void 0&&(u=new nn(new ps(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:rs(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=S.colorSpace!==pe,(h!==S||d!==S.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new ic(2,2),new Un({name:"BackgroundMaterial",uniforms:rs(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=S.colorSpace!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(ur,ih(s)),n.buffers.color.setClear(ur.r,ur.g,ur.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Jg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function h(O,F,Q,q,Y){let J=!1;if(o){const ee=_(q,Q,F);l!==ee&&(l=ee,p(l.object)),J=f(O,q,Q,Y),J&&T(O,q,Q,Y)}else{const ee=F.wireframe===!0;(l.geometry!==q.id||l.program!==Q.id||l.wireframe!==ee)&&(l.geometry=q.id,l.program=Q.id,l.wireframe=ee,J=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,H(O,F,Q,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,F,Q){const q=Q.wireframe===!0;let Y=a[O.id];Y===void 0&&(Y={},a[O.id]=Y);let J=Y[F.id];J===void 0&&(J={},Y[F.id]=J);let ee=J[q];return ee===void 0&&(ee=m(d()),J[q]=ee),ee}function m(O){const F=[],Q=[],q=[];for(let Y=0;Y<i;Y++)F[Y]=0,Q[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:q,object:O,attributes:{},index:null}}function f(O,F,Q,q){const Y=l.attributes,J=F.attributes;let ee=0;const _e=Q.getAttributes();for(const he in _e)if(_e[he].location>=0){const Z=Y[he];let ae=J[he];if(ae===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;ee++}return l.attributesNum!==ee||l.index!==q}function T(O,F,Q,q){const Y={},J=F.attributes;let ee=0;const _e=Q.getAttributes();for(const he in _e)if(_e[he].location>=0){let Z=J[he];Z===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),Y[he]=ae,ee++}l.attributes=Y,l.attributesNum=ee,l.index=q}function S(){const O=l.newAttributes;for(let F=0,Q=O.length;F<Q;F++)O[F]=0}function A(O){E(O,0)}function E(O,F){const Q=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;Q[O]=1,q[O]===0&&(s.enableVertexAttribArray(O),q[O]=1),Y[O]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),Y[O]=F)}function R(){const O=l.newAttributes,F=l.enabledAttributes;for(let Q=0,q=F.length;Q<q;Q++)F[Q]!==O[Q]&&(s.disableVertexAttribArray(Q),F[Q]=0)}function N(O,F,Q,q,Y,J){n.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT)?s.vertexAttribIPointer(O,F,Q,Y,J):s.vertexAttribPointer(O,F,Q,q,Y,J)}function H(O,F,Q,q){if(n.isWebGL2===!1&&(O.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const Y=q.attributes,J=Q.getAttributes(),ee=F.defaultAttributeValues;for(const _e in J){const he=J[_e];if(he.location>=0){let W=Y[_e];if(W===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){const Z=W.normalized,ae=W.itemSize,le=t.get(W);if(le===void 0)continue;const P=le.buffer,Le=le.type,Ce=le.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,we=oe.stride,je=W.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<he.locationSize;ye++)E(he.location+ye,oe.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<he.locationSize;ye++)A(he.location+ye);s.bindBuffer(s.ARRAY_BUFFER,P);for(let ye=0;ye<he.locationSize;ye++)N(he.location+ye,ae/he.locationSize,Le,Z,we*Ce,(je+ae/he.locationSize*ye)*Ce)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<he.locationSize;oe++)E(he.location+oe,W.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<he.locationSize;oe++)A(he.location+oe);s.bindBuffer(s.ARRAY_BUFFER,P);for(let oe=0;oe<he.locationSize;oe++)N(he.location+oe,ae/he.locationSize,Le,Z,ae*Ce,ae/he.locationSize*oe*Ce)}}else if(ee!==void 0){const Z=ee[_e];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(he.location,Z);break;case 3:s.vertexAttrib3fv(he.location,Z);break;case 4:s.vertexAttrib4fv(he.location,Z);break;default:s.vertexAttrib1fv(he.location,Z)}}}}R()}function x(){B();for(const O in a){const F=a[O];for(const Q in F){const q=F[Q];for(const Y in q)g(q[Y].object),delete q[Y];delete F[Q]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const F=a[O.id];for(const Q in F){const q=F[Q];for(const Y in q)g(q[Y].object),delete q[Y];delete F[Q]}delete a[O.id]}function K(O){for(const F in a){const Q=a[F];if(Q[O.id]===void 0)continue;const q=Q[O.id];for(const Y in q)g(q[Y].object),delete q[Y];delete Q[O.id]}}function B(){L(),u=!0,l!==c&&(l=c,p(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:L,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:K,initAttributes:S,enableAttribute:A,disableUnusedAttributes:R}}function Qg(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function e_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,A=o||e.has("OES_texture_float"),E=S&&A,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:A,floatVertexTextures:E,maxSamples:R}}function t_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new vi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,S=T*4;let A=f.clippingState||null;c.value=A,A=u(g,d,S,p);for(let E=0;E!==S;++E)A[E]=t[E];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,A=p;S!==_;++S,A+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function n_(s){let e=new WeakMap;function t(o,a){return a===Or?o.mapping=ns:a===Br&&(o.mapping=is),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Or||a===Br)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xp(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sc extends sh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,nl=[.125,.215,.35,.446,.526,.582],Ti=20,zo=new sc,il=new Oe;let Vo=null;const Si=(1+Math.sqrt(5))/2,Yi=1/Si,sl=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Si,Yi),new w(0,Si,-Yi),new w(Yi,0,Si),new w(-Yi,0,Si),new w(Si,Yi,0),new w(-Si,Yi,0)];class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:oi,format:tn,colorSpace:Nn,depthBuffer:!1},i=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(r)),this._blurMaterial=s_(r,e,t)}return i}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(il),u.toneMapping=sn,u.autoClear=!1;const p=new Qa({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new nn(new ps,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(il),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;hr(i,T*S,f>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sl[(i-1)%sl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const f=[];let T=0;for(let N=0;N<Ti;++N){const H=N/_,x=Math.exp(-H*H/2);f.push(x),N===0?T+=x:N<m&&(T+=2*x)}for(let N=0;N<f.length;N++)f[N]=f[N]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const A=this._sizeLods[i],E=3*A*(i>S-Qi?i-S+Qi:0),R=4*(this._cubeSize-A);hr(t,E,R,3*A,2*A),c.setRenderTarget(t),c.render(h,zo)}}function i_(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Qi?c=nl[o-s+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let R=0;R<p;R++){const N=R%3*2/3-1,H=R>2?0:-1,x=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];T.set(x,_*g*R),S.set(d,m*g*R);const b=[R,R,R,R,R,R];A.set(b,f*g*R)}const E=new yn;E.setAttribute("position",new ln(T,_)),E.setAttribute("uv",new ln(S,m)),E.setAttribute("faceIndex",new ln(A,f)),e.push(E),i>Qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(s,e,t){const n=new ci(s,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function s_(s,e,t){const n=new Float32Array(Ti),i=new w(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function al(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function cl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Or||c===Br,u=c===ns||c===is;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new rl(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new rl(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function o_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a_(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,A=T.length;S<A;S+=3){const E=T[S+0],R=T[S+1],N=T[S+2];d.push(E,R,R,N,N,E)}}else{const T=g.array;_=g.version;for(let S=0,A=T.length/3-1;S<A;S+=3){const E=S+0,R=S+1,N=S+2;d.push(E,R,R,N,N,E)}}const m=new(Ju(d)?tc:ec)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function c_(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function l_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u_(s,e){return s[0]-e[0]}function h_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function d_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new qe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let O=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let H=0;T===!0&&(H=1),S===!0&&(H=2),A===!0&&(H=3);let x=u.attributes.position.count*H,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const K=new Float32Array(x*b*4*g),B=new th(K,x,b,g);B.type=en,B.needsUpdate=!0;const L=H*4;for(let F=0;F<g;F++){const Q=E[F],q=R[F],Y=N[F],J=x*b*4*F;for(let ee=0;ee<Q.count;ee++){const _e=ee*L;T===!0&&(o.fromBufferAttribute(Q,ee),K[J+_e+0]=o.x,K[J+_e+1]=o.y,K[J+_e+2]=o.z,K[J+_e+3]=0),S===!0&&(o.fromBufferAttribute(q,ee),K[J+_e+4]=o.x,K[J+_e+5]=o.y,K[J+_e+6]=o.z,K[J+_e+7]=0),A===!0&&(o.fromBufferAttribute(Y,ee),K[J+_e+8]=o.x,K[J+_e+9]=o.y,K[J+_e+10]=o.z,K[J+_e+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new Ue(x,b)},r.set(u,_),u.addEventListener("dispose",O)}let m=0;for(let T=0;T<d.length;T++)m+=d[T];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",f),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let S=0;S<p;S++)g[S]=[S,0];n[u.id]=g}for(let S=0;S<p;S++){const A=g[S];A[0]=S,A[1]=d[S]}g.sort(h_);for(let S=0;S<8;S++)S<p&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(u_);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let S=0;S<8;S++){const A=a[S],E=A[0],R=A[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+S)!==_[E]&&u.setAttribute("morphTarget"+S,_[E]),m&&u.getAttribute("morphNormal"+S)!==m[E]&&u.setAttribute("morphNormal"+S,m[E]),i[S]=R,f+=R):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const T=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function f_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const oh=new It,ah=new th,ch=new ip,lh=new nc,ll=[],ul=[],hl=new Float32Array(16),dl=new Float32Array(9),fl=new Float32Array(4);function ms(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function so(s,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function p_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function __(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function x_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;fl.set(n),s.uniformMatrix2fv(this.addr,!1,fl),St(t,n)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;dl.set(n),s.uniformMatrix3fv(this.addr,!1,dl),St(t,n)}}function S_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(vt(t,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),St(t,n)}}function M_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function E_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function b_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function C_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||oh,i)}function P_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ch,i)}function L_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||lh,i)}function N_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ah,i)}function U_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return v_;case 35676:return S_;case 5124:case 35670:return M_;case 35667:case 35671:return y_;case 35668:case 35672:return T_;case 35669:case 35673:return E_;case 5125:return b_;case 36294:return w_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return N_}}function I_(s,e){s.uniform1fv(this.addr,e)}function D_(s,e){const t=ms(e,this.size,2);s.uniform2fv(this.addr,t)}function F_(s,e){const t=ms(e,this.size,3);s.uniform3fv(this.addr,t)}function O_(s,e){const t=ms(e,this.size,4);s.uniform4fv(this.addr,t)}function B_(s,e){const t=ms(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function G_(s,e){const t=ms(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function z_(s,e){const t=ms(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function V_(s,e){s.uniform1iv(this.addr,e)}function k_(s,e){s.uniform2iv(this.addr,e)}function W_(s,e){s.uniform3iv(this.addr,e)}function H_(s,e){s.uniform4iv(this.addr,e)}function X_(s,e){s.uniform1uiv(this.addr,e)}function $_(s,e){s.uniform2uiv(this.addr,e)}function q_(s,e){s.uniform3uiv(this.addr,e)}function Y_(s,e){s.uniform4uiv(this.addr,e)}function j_(s,e,t){const n=this.cache,i=e.length,r=so(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||oh,r[o])}function K_(s,e,t){const n=this.cache,i=e.length,r=so(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ch,r[o])}function Z_(s,e,t){const n=this.cache,i=e.length,r=so(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||lh,r[o])}function J_(s,e,t){const n=this.cache,i=e.length,r=so(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ah,r[o])}function Q_(s){switch(s){case 5126:return I_;case 35664:return D_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return G_;case 35676:return z_;case 5124:case 35670:return V_;case 35667:case 35671:return k_;case 35668:case 35672:return W_;case 35669:case 35673:return H_;case 5125:return X_;case 36294:return $_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=U_(t.type)}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Q_(t.type)}}class nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function pl(s,e){s.seq.push(e),s.map[e.id]=e}function ix(s,e,t){const n=s.name,i=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),o=ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){pl(t,l===void 0?new ex(a,s,e):new tx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new nx(a),pl(t,h)),t=h}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ix(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ml(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let sx=0;function rx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ox(s){switch(s){case Nn:return["Linear","( value )"];case pe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function gl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+rx(s.getShaderSource(e),o)}else return i}function ax(s,e){const t=ox(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cx(s,e){let t;switch(e){case Vu:t="Linear";break;case ku:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case qa:t="ACESFilmic";break;case rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function ux(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ls(s){return s!==""}function _l(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(s){return s.replace(dx,fx)}function fx(s,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Na(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(s){return s.replace(px,mx)}function mx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function _x(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zu:e="ENVMAP_BLENDING_MULTIPLY";break;case nf:e="ENVMAP_BLENDING_MIX";break;case sf:e="ENVMAP_BLENDING_ADD";break}return e}function Sx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=gx(t),l=_x(t),u=xx(t),h=vx(t),d=Sx(t),p=t.isWebGL2?"":lx(t),g=ux(r),_=i.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),f=[p,Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==sn?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Na(o),o=_l(o,t),o=xl(o,t),a=Na(a),a=_l(a,t),a=xl(a,t),o=vl(o),a=vl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+o,A=T+f+a,E=ml(i,i.VERTEX_SHADER,S),R=ml(i,i.FRAGMENT_SHADER,A);if(i.attachShader(_,E),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(E).trim(),K=i.getShaderInfoLog(R).trim();let B=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,R);else{const O=gl(i,E,"vertex"),F=gl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+O+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||K==="")&&(L=!1);L&&(this.diagnostics={runnable:B,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:K,prefix:f}})}i.deleteShader(E),i.deleteShader(R);let N;this.getUniforms=function(){return N===void 0&&(N=new Lr(i,_)),N};let H;return this.getAttributes=function(){return H===void 0&&(H=hx(i,_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let yx=0;class Tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function bx(s,e,t,n,i,r,o){const a=new Ja,c=new Tx,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===1?"uv2":"uv"}function m(x,b,K,B,L){const O=B.fog,F=L.geometry,Q=x.isMeshStandardMaterial?B.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),Y=q&&q.mapping===eo?q.image.height:null,J=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=ee!==void 0?ee.length:0;let he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let W,Z,ae,le;if(J){const ue=qt[J];W=ue.vertexShader,Z=ue.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),le=c.getFragmentShaderID(x);const P=s.getRenderTarget(),Le=L.isInstancedMesh===!0,Ce=!!x.map,oe=!!x.matcap,we=!!q,je=!!x.aoMap,ye=!!x.lightMap,Ve=!!x.bumpMap,Mt=!!x.normalMap,Rt=!!x.displacementMap,yt=!!x.emissiveMap,gt=!!x.metalnessMap,Ke=!!x.roughnessMap,at=x.clearcoat>0,Xt=x.iridescence>0,y=x.sheen>0,v=x.transmission>0,G=at&&!!x.clearcoatMap,ie=at&&!!x.clearcoatNormalMap,se=at&&!!x.clearcoatRoughnessMap,ce=Xt&&!!x.iridescenceMap,Ae=Xt&&!!x.iridescenceThicknessMap,fe=y&&!!x.sheenColorMap,X=y&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Te=!!x.specularColorMap,be=!!x.specularIntensityMap,de=v&&!!x.transmissionMap,ve=v&&!!x.thicknessMap,Xe=!!x.gradientMap,Je=!!x.alphaMap,ut=x.alphaTest>0,C=!!x.extensions,z=!!F.attributes.uv2;return{isWebGL2:u,shaderID:J,shaderName:x.type,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Le,instancingColor:Le&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nn,map:Ce,matcap:oe,envMap:we,envMapMode:we&&q.mapping,envMapCubeUVHeight:Y,aoMap:je,lightMap:ye,bumpMap:Ve,normalMap:Mt,displacementMap:d&&Rt,emissiveMap:yt,normalMapObjectSpace:Mt&&x.normalMapType===qu,normalMapTangentSpace:Mt&&x.normalMapType===Wr,metalnessMap:gt,roughnessMap:Ke,clearcoat:at,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:Xt,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:y,sheenColorMap:fe,sheenRoughnessMap:X,specularMap:xe,specularColorMap:Te,specularIntensityMap:be,transmission:v,transmissionMap:de,thicknessMap:ve,gradientMap:Xe,opaque:x.transparent===!1&&x.blending===ri,alphaMap:Je,alphaTest:ut,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:je&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Ve&&_(x.bumpMap.channel),normalMapUv:Mt&&_(x.normalMap.channel),displacementMapUv:Rt&&_(x.displacementMap.channel),emissiveMapUv:yt&&_(x.emissiveMap.channel),metalnessMapUv:gt&&_(x.metalnessMap.channel),roughnessMapUv:Ke&&_(x.roughnessMap.channel),clearcoatMapUv:G&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(x.sheenRoughnessMap.channel),specularMapUv:xe&&_(x.specularMap.channel),specularColorMapUv:Te&&_(x.specularColorMap.channel),specularIntensityMapUv:be&&_(x.specularIntensityMap.channel),transmissionMapUv:de&&_(x.transmissionMap.channel),thicknessMapUv:ve&&_(x.thicknessMap.channel),alphaMapUv:Je&&_(x.alphaMap.channel),vertexTangents:Mt&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:z,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ce||Je),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:sn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rn,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:C&&x.extensions.derivatives===!0,extensionFragDepth:C&&x.extensions.fragDepth===!0,extensionDrawBuffers:C&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)b.push(K),b.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(T(b,x),S(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function T(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUvs2&&a.enable(13),b.vertexTangents&&a.enable(14),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),x.push(a.mask)}function A(x){const b=g[x.type];let K;if(b){const B=qt[b];K=io.clone(B.uniforms)}else K=x.uniforms;return K}function E(x,b){let K;for(let B=0,L=l.length;B<L;B++){const O=l[B];if(O.cacheKey===b){K=O,++K.usedTimes;break}}return K===void 0&&(K=new Mx(s,b,x,r),l.push(K)),K}function R(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function N(x){c.remove(x)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:E,releaseProgram:R,releaseShaderCache:N,programs:l,dispose:H}}function wx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ax(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ml(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Ax),n.length>1&&n.sort(d||Ml),i.length>1&&i.sort(d||Ml)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Rx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yl,s.set(n,[o])):i>=r.length?(o=new yl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Cx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Oe};break;case"SpotLight":t={position:new w,direction:new w,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Px(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lx=0;function Nx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ux(s,e){const t=new Cx,n=Px(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new w);const r=new w,o=new Ie,a=new Ie;function c(u,h){let d=0,p=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let _=0,m=0,f=0,T=0,S=0,A=0,E=0,R=0,N=0,H=0;u.sort(Nx);const x=h===!0?Math.PI:1;for(let K=0,B=u.length;K<B;K++){const L=u[K],O=L.color,F=L.intensity,Q=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*F*x,p+=O.g*F*x,g+=O.b*F*x;else if(L.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],F);else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const J=L.shadow,ee=n.get(L);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,A++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(F*x),Y.distance=Q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[f]=Y;const J=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,J.updateMatrices(L),L.castShadow&&H++),i.spotLightMatrix[f]=J.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=q,R++}f++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(O).multiplyScalar(F),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=Y,T++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const J=L.shadow,ee=n.get(L);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(F*x),Y.groundColor.copy(L.groundColor).multiplyScalar(F*x),i.hemi[S]=Y,S++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==T||b.hemiLength!==S||b.numDirectionalShadows!==A||b.numPointShadows!==E||b.numSpotShadows!==R||b.numSpotMaps!==N)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=T,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=R+N-H,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=H,b.directionalLength=_,b.pointLength=m,b.spotLength=f,b.rectAreaLength=T,b.hemiLength=S,b.numDirectionalShadows=A,b.numPointShadows=E,b.numSpotShadows=R,b.numSpotMaps=N,i.version=Lx++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const A=u[T];if(A.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),d++}else if(A.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),g++}else if(A.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function Tl(s,e){const t=new Ux(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ix(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Tl(s,e),t.set(r,[c])):o>=a.length?(c=new Tl(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Dx extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fx extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(s,e,t){let n=new ks;const i=new Ue,r=new Ue,o=new qe,a=new Dx({depthPacking:yf}),c=new Fx,l={},u=t.maxTextureSize,h={[qn]:Bt,[Bt]:qn,[Rn]:Rn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let f=this.type;this.render=function(E,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const H=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Hn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const B=f!==kn&&this.type===kn,L=f===kn&&this.type!==kn;for(let O=0,F=E.length;O<F;O++){const Q=E[O],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||B===!0||L===!0){const ee=this.type!==kn?{minFilter:it,magFilter:it}:{};q.map!==null&&q.map.dispose(),q.map=new ci(i.x,i.y,ee),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const J=q.getViewportCount();for(let ee=0;ee<J;ee++){const _e=q.getViewport(ee);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),K.viewport(o),q.updateMatrices(Q,ee),n=q.getFrustum(),A(R,N,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===kn&&T(q,N),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(H,x,b)};function T(E,R){const N=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,N,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,N,p,_,null)}function S(E,R,N,H){let x=null;const b=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)x=b;else if(x=N.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=x.uuid,B=R.uuid;let L=l[K];L===void 0&&(L={},l[K]=L);let O=L[B];O===void 0&&(O=x.clone(),L[B]=O),x=O}if(x.visible=R.visible,x.wireframe=R.wireframe,H===kn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=s.properties.get(x);K.light=N}return x}function A(E,R,N,H,x){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const B=e.update(E),L=E.material;if(Array.isArray(L)){const O=B.groups;for(let F=0,Q=O.length;F<Q;F++){const q=O[F],Y=L[q.materialIndex];if(Y&&Y.visible){const J=S(E,Y,H,x);s.renderBufferDirect(N,null,B,J,E,q)}}}else if(L.visible){const O=S(E,L,H,x);s.renderBufferDirect(N,null,B,O,E,null)}}const K=E.children;for(let B=0,L=K.length;B<L;B++)A(K[B],R,N,H,x)}}function zx(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const z=new qe;let ne=null;const ue=new qe(0,0,0,0);return{setMask:function(Se){ne!==Se&&!C&&(s.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){C=Se},setClear:function(Se,ot,tt,Dt,jn){jn===!0&&(Se*=Dt,ot*=Dt,tt*=Dt),z.set(Se,ot,tt,Dt),ue.equals(z)===!1&&(s.clearColor(Se,ot,tt,Dt),ue.copy(z))},reset:function(){C=!1,ne=null,ue.set(-1,0,0,0)}}}function r(){let C=!1,z=null,ne=null,ue=null;return{setTest:function(Se){Se?P(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Se){z!==Se&&!C&&(s.depthMask(Se),z=Se)},setFunc:function(Se){if(ne!==Se){switch(Se){case Uu:s.depthFunc(s.NEVER);break;case Iu:s.depthFunc(s.ALWAYS);break;case Du:s.depthFunc(s.LESS);break;case Fr:s.depthFunc(s.LEQUAL);break;case Fu:s.depthFunc(s.EQUAL);break;case Ou:s.depthFunc(s.GEQUAL);break;case Bu:s.depthFunc(s.GREATER);break;case Gu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=Se}},setLocked:function(Se){C=Se},setClear:function(Se){ue!==Se&&(s.clearDepth(Se),ue=Se)},reset:function(){C=!1,z=null,ne=null,ue=null}}}function o(){let C=!1,z=null,ne=null,ue=null,Se=null,ot=null,tt=null,Dt=null,jn=null;return{setTest:function(ht){C||(ht?P(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(ht){z!==ht&&!C&&(s.stencilMask(ht),z=ht)},setFunc:function(ht,on,Tn){(ne!==ht||ue!==on||Se!==Tn)&&(s.stencilFunc(ht,on,Tn),ne=ht,ue=on,Se=Tn)},setOp:function(ht,on,Tn){(ot!==ht||tt!==on||Dt!==Tn)&&(s.stencilOp(ht,on,Tn),ot=ht,tt=on,Dt=Tn)},setLocked:function(ht){C=ht},setClear:function(ht){jn!==ht&&(s.clearStencil(ht),jn=ht)},reset:function(){C=!1,z=null,ne=null,ue=null,Se=null,ot=null,tt=null,Dt=null,jn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,T=null,S=null,A=null,E=null,R=null,N=null,H=null,x=!1,b=null,K=null,B=null,L=null,O=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=q>=2);let J=null,ee={};const _e=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),W=new qe().fromArray(_e),Z=new qe().fromArray(he);function ae(C,z,ne,ue){const Se=new Uint8Array(4),ot=s.createTexture();s.bindTexture(C,ot),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<ne;tt++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(z,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(z+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ot}const le={};le[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),P(s.DEPTH_TEST),c.setFunc(Fr),Rt(!1),yt(Rc),P(s.CULL_FACE),Ve(Hn);function P(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function Le(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function Ce(C,z){return p[C]!==z?(s.bindFramebuffer(C,z),p[C]=z,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=z),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=z)),!0):!1}function oe(C,z){let ne=_,ue=!1;if(C)if(ne=g.get(z),ne===void 0&&(ne=[],g.set(z,ne)),C.isWebGLMultipleRenderTargets){const Se=C.texture;if(ne.length!==Se.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,tt=Se.length;ot<tt;ot++)ne[ot]=s.COLOR_ATTACHMENT0+ot;ne.length=Se.length,ue=!0}}else ne[0]!==s.COLOR_ATTACHMENT0&&(ne[0]=s.COLOR_ATTACHMENT0,ue=!0);else ne[0]!==s.BACK&&(ne[0]=s.BACK,ue=!0);ue&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function we(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const je={[yi]:s.FUNC_ADD,[yu]:s.FUNC_SUBTRACT,[Tu]:s.FUNC_REVERSE_SUBTRACT};if(n)je[ua]=s.MIN,je[ha]=s.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(je[ua]=C.MIN_EXT,je[ha]=C.MAX_EXT)}const ye={[Eu]:s.ZERO,[bu]:s.ONE,[wu]:s.SRC_COLOR,[Xa]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Pu]:s.DST_COLOR,[Ru]:s.DST_ALPHA,[Au]:s.ONE_MINUS_SRC_COLOR,[$a]:s.ONE_MINUS_SRC_ALPHA,[Lu]:s.ONE_MINUS_DST_COLOR,[Cu]:s.ONE_MINUS_DST_ALPHA};function Ve(C,z,ne,ue,Se,ot,tt,Dt){if(C===Hn){f===!0&&(Le(s.BLEND),f=!1);return}if(f===!1&&(P(s.BLEND),f=!0),C!==la){if(C!==T||Dt!==x){if((S!==yi||R!==yi)&&(s.blendEquation(s.FUNC_ADD),S=yi,R=yi),Dt)switch(C){case ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.ONE,s.ONE);break;case Ir:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ir:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,E=null,N=null,H=null,T=C,x=Dt}return}Se=Se||z,ot=ot||ne,tt=tt||ue,(z!==S||Se!==R)&&(s.blendEquationSeparate(je[z],je[Se]),S=z,R=Se),(ne!==A||ue!==E||ot!==N||tt!==H)&&(s.blendFuncSeparate(ye[ne],ye[ue],ye[ot],ye[tt]),A=ne,E=ue,N=ot,H=tt),T=C,x=!1}function Mt(C,z){C.side===Rn?Le(s.CULL_FACE):P(s.CULL_FACE);let ne=C.side===Bt;z&&(ne=!ne),Rt(ne),C.blending===ri&&C.transparent===!1?Ve(Hn):Ve(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ue=C.stencilWrite;l.setTest(ue),ue&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(C){b!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),b=C)}function yt(C){C!==ef?(P(s.CULL_FACE),C!==K&&(C===Rc?s.cullFace(s.BACK):C===tf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),K=C}function gt(C){C!==B&&(Q&&s.lineWidth(C),B=C)}function Ke(C,z,ne){C?(P(s.POLYGON_OFFSET_FILL),(L!==z||O!==ne)&&(s.polygonOffset(z,ne),L=z,O=ne)):Le(s.POLYGON_OFFSET_FILL)}function at(C){C?P(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function Xt(C){C===void 0&&(C=s.TEXTURE0+F-1),J!==C&&(s.activeTexture(C),J=C)}function y(C,z,ne){ne===void 0&&(J===null?ne=s.TEXTURE0+F-1:ne=J);let ue=ee[ne];ue===void 0&&(ue={type:void 0,texture:void 0},ee[ne]=ue),(ue.type!==C||ue.texture!==z)&&(J!==ne&&(s.activeTexture(ne),J=ne),s.bindTexture(C,z||le[C]),ue.type=C,ue.texture=z)}function v(){const C=ee[J];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(C){W.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),W.copy(C))}function ve(C){Z.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),Z.copy(C))}function Xe(C,z){let ne=h.get(z);ne===void 0&&(ne=new WeakMap,h.set(z,ne));let ue=ne.get(C);ue===void 0&&(ue=s.getUniformBlockIndex(z,C.name),ne.set(C,ue))}function Je(C,z){const ue=h.get(z).get(C);u.get(z)!==ue&&(s.uniformBlockBinding(z,ue,C.__bindingPointIndex),u.set(z,ue))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ee={},p={},g=new WeakMap,_=[],m=null,f=!1,T=null,S=null,A=null,E=null,R=null,N=null,H=null,x=!1,b=null,K=null,B=null,L=null,O=null,W.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:P,disable:Le,bindFramebuffer:Ce,drawBuffers:oe,useProgram:we,setBlending:Ve,setMaterial:Mt,setFlipSided:Rt,setCullFace:yt,setLineWidth:gt,setPolygonOffset:Ke,setScissorTest:at,activeTexture:Xt,bindTexture:y,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:Te,texImage3D:be,updateUBOMapping:Xe,uniformBlockBinding:Je,texStorage2D:X,texStorage3D:xe,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Ae,compressedTexSubImage3D:fe,scissor:de,viewport:ve,reset:ut}}function Vx(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(y,v){return f?new OffscreenCanvas(y,v):Bs("canvas")}function S(y,v,G,ie){let se=1;if((y.width>ie||y.height>ie)&&(se=ie/Math.max(y.width,y.height)),se<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ce=v?Zu:Math.floor,Ae=ce(se*y.width),fe=ce(se*y.height);_===void 0&&(_=T(Ae,fe));const X=G?T(Ae,fe):_;return X.width=Ae,X.height=fe,X.getContext("2d").drawImage(y,0,0,Ae,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Ae+"x"+fe+")."),X}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function A(y){return La(y.width)&&La(y.height)}function E(y){return a?!1:y.wrapS!==xn||y.wrapT!==xn||y.minFilter!==it&&y.minFilter!==Wt}function R(y,v){return y.generateMipmaps&&v&&y.minFilter!==it&&y.minFilter!==Wt}function N(y){s.generateMipmap(y)}function H(y,v,G,ie,se=!1){if(a===!1)return v;if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce=v;return v===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),v===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),v===s.RGBA&&(G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=ie===pe&&se===!1?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(y,v,G){return R(y,G)===!0||y.isFramebufferTexture&&y.minFilter!==it&&y.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function b(y){return y===it||y===da||y===wr?s.NEAREST:s.LINEAR}function K(y){const v=y.target;v.removeEventListener("dispose",K),L(v),v.isVideoTexture&&g.delete(v)}function B(y){const v=y.target;v.removeEventListener("dispose",B),F(v)}function L(y){const v=n.get(y);if(v.__webglInit===void 0)return;const G=y.source,ie=m.get(G);if(ie){const se=ie[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(y),Object.keys(ie).length===0&&m.delete(G)}n.remove(y)}function O(y){const v=n.get(y);s.deleteTexture(v.__webglTexture);const G=y.source,ie=m.get(G);delete ie[v.__cacheKey],o.memory.textures--}function F(y){const v=y.texture,G=n.get(y),ie=n.get(v);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(G.__webglFramebuffer[se]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let se=0;se<G.__webglColorRenderbuffer.length;se++)G.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[se]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let se=0,ce=v.length;se<ce;se++){const Ae=n.get(v[se]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(v[se])}n.remove(v),n.remove(y)}let Q=0;function q(){Q=0}function Y(){const y=Q;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),Q+=1,y}function J(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function ee(y,v){const G=n.get(y);if(y.isVideoTexture&&at(y),y.isRenderTargetTexture===!1&&y.version>0&&G.__version!==y.version){const ie=y.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(G,y,v);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+v)}function _e(y,v){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Le(G,y,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+v)}function he(y,v){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Le(G,y,v);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+v)}function W(y,v){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Ce(G,y,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+v)}const Z={[Gr]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},ae={[it]:s.NEAREST,[da]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[of]:s.LINEAR_MIPMAP_NEAREST,[Os]:s.LINEAR_MIPMAP_LINEAR};function le(y,v,G){if(G?(s.texParameteri(y,s.TEXTURE_WRAP_S,Z[v.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,Z[v.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,Z[v.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,ae[v.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,ae[v.minFilter])):(s.texParameteri(y,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(y,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==xn||v.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(y,s.TEXTURE_MAG_FILTER,b(v.magFilter)),s.texParameteri(y,s.TEXTURE_MIN_FILTER,b(v.minFilter)),v.minFilter!==it&&v.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===it||v.minFilter!==wr&&v.minFilter!==Os||v.type===en&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===oi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(y,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function P(y,v){let G=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",K));const ie=v.source;let se=m.get(ie);se===void 0&&(se={},m.set(ie,se));const ce=J(v);if(ce!==y.__cacheKey){se[ce]===void 0&&(se[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[ce].usedTimes++;const Ae=se[y.__cacheKey];Ae!==void 0&&(se[y.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(v)),y.__cacheKey=ce,y.__webglTexture=se[ce].texture}return G}function Le(y,v,G){let ie=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=s.TEXTURE_3D);const se=P(y,v),ce=v.source;t.bindTexture(ie,y.__webglTexture,s.TEXTURE0+G);const Ae=n.get(ce);if(ce.version!==Ae.__version||se===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const fe=E(v)&&A(v.image)===!1;let X=S(v.image,fe,!1,u);X=Xt(v,X);const xe=A(X)||a,Te=r.convert(v.format,v.colorSpace);let be=r.convert(v.type),de=H(v.internalFormat,Te,be,v.colorSpace);le(ie,v,xe);let ve;const Xe=v.mipmaps,Je=a&&v.isVideoTexture!==!0,ut=Ae.__version===void 0||se===!0,C=x(v,X,xe);if(v.isDepthTexture)de=s.DEPTH_COMPONENT,a?v.type===en?de=s.DEPTH_COMPONENT32F:v.type===ii?de=s.DEPTH_COMPONENT24:v.type===bi?de=s.DEPTH24_STENCIL8:de=s.DEPTH_COMPONENT16:v.type===en&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Xn&&de===s.DEPTH_COMPONENT&&v.type!==Ya&&v.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ii,be=r.convert(v.type)),v.format===Ri&&de===s.DEPTH_COMPONENT&&(de=s.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,be=r.convert(v.type))),ut&&(Je?t.texStorage2D(s.TEXTURE_2D,1,de,X.width,X.height):t.texImage2D(s.TEXTURE_2D,0,de,X.width,X.height,0,Te,be,null));else if(v.isDataTexture)if(Xe.length>0&&xe){Je&&ut&&t.texStorage2D(s.TEXTURE_2D,C,de,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)ve=Xe[z],Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,ve.width,ve.height,Te,be,ve.data):t.texImage2D(s.TEXTURE_2D,z,de,ve.width,ve.height,0,Te,be,ve.data);v.generateMipmaps=!1}else Je?(ut&&t.texStorage2D(s.TEXTURE_2D,C,de,X.width,X.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,X.width,X.height,Te,be,X.data)):t.texImage2D(s.TEXTURE_2D,0,de,X.width,X.height,0,Te,be,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,C,de,Xe[0].width,Xe[0].height,X.depth);for(let z=0,ne=Xe.length;z<ne;z++)ve=Xe[z],v.format!==tn?Te!==null?Je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,X.depth,Te,ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,de,ve.width,ve.height,X.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,X.depth,Te,be,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,de,ve.width,ve.height,X.depth,0,Te,be,ve.data)}else{Je&&ut&&t.texStorage2D(s.TEXTURE_2D,C,de,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)ve=Xe[z],v.format!==tn?Te!==null?Je?t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,z,de,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,ve.width,ve.height,Te,be,ve.data):t.texImage2D(s.TEXTURE_2D,z,de,ve.width,ve.height,0,Te,be,ve.data)}else if(v.isDataArrayTexture)Je?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,C,de,X.width,X.height,X.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Te,be,X.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,X.width,X.height,X.depth,0,Te,be,X.data);else if(v.isData3DTexture)Je?(ut&&t.texStorage3D(s.TEXTURE_3D,C,de,X.width,X.height,X.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Te,be,X.data)):t.texImage3D(s.TEXTURE_3D,0,de,X.width,X.height,X.depth,0,Te,be,X.data);else if(v.isFramebufferTexture){if(ut)if(Je)t.texStorage2D(s.TEXTURE_2D,C,de,X.width,X.height);else{let z=X.width,ne=X.height;for(let ue=0;ue<C;ue++)t.texImage2D(s.TEXTURE_2D,ue,de,z,ne,0,Te,be,null),z>>=1,ne>>=1}}else if(Xe.length>0&&xe){Je&&ut&&t.texStorage2D(s.TEXTURE_2D,C,de,Xe[0].width,Xe[0].height);for(let z=0,ne=Xe.length;z<ne;z++)ve=Xe[z],Je?t.texSubImage2D(s.TEXTURE_2D,z,0,0,Te,be,ve):t.texImage2D(s.TEXTURE_2D,z,de,Te,be,ve);v.generateMipmaps=!1}else Je?(ut&&t.texStorage2D(s.TEXTURE_2D,C,de,X.width,X.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,be,X)):t.texImage2D(s.TEXTURE_2D,0,de,Te,be,X);R(v,xe)&&N(ie),Ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ce(y,v,G){if(v.image.length!==6)return;const ie=P(y,v),se=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+G);const ce=n.get(se);if(se.version!==ce.__version||ie===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,X=[];for(let z=0;z<6;z++)!Ae&&!fe?X[z]=S(v.image[z],!1,!0,l):X[z]=fe?v.image[z].image:v.image[z],X[z]=Xt(v,X[z]);const xe=X[0],Te=A(xe)||a,be=r.convert(v.format,v.colorSpace),de=r.convert(v.type),ve=H(v.internalFormat,be,de,v.colorSpace),Xe=a&&v.isVideoTexture!==!0,Je=ce.__version===void 0||ie===!0;let ut=x(v,xe,Te);le(s.TEXTURE_CUBE_MAP,v,Te);let C;if(Ae){Xe&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ve,xe.width,xe.height);for(let z=0;z<6;z++){C=X[z].mipmaps;for(let ne=0;ne<C.length;ne++){const ue=C[ne];v.format!==tn?be!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,ue.width,ue.height,be,de,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,ve,ue.width,ue.height,0,be,de,ue.data)}}}else{C=v.mipmaps,Xe&&Je&&(C.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ve,X[0].width,X[0].height));for(let z=0;z<6;z++)if(fe){Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,X[z].width,X[z].height,be,de,X[z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ve,X[z].width,X[z].height,0,be,de,X[z].data);for(let ne=0;ne<C.length;ne++){const Se=C[ne].image[z].image;Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Se.width,Se.height,be,de,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,ve,Se.width,Se.height,0,be,de,Se.data)}}else{Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,be,de,X[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ve,be,de,X[z]);for(let ne=0;ne<C.length;ne++){const ue=C[ne];Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,be,de,ue.image[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,ve,be,de,ue.image[z])}}}R(v,Te)&&N(s.TEXTURE_CUBE_MAP),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function oe(y,v,G,ie,se){const ce=r.convert(G.format,G.colorSpace),Ae=r.convert(G.type),fe=H(G.internalFormat,ce,Ae,G.colorSpace);n.get(v).__hasExternalTextures||(se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,0,fe,v.width,v.height,v.depth,0,ce,Ae,null):t.texImage2D(se,0,fe,v.width,v.height,0,ce,Ae,null)),t.bindFramebuffer(s.FRAMEBUFFER,y),Ke(v)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,0,gt(v)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(y,v,G){if(s.bindRenderbuffer(s.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let ie=s.DEPTH_COMPONENT16;if(G||Ke(v)){const se=v.depthTexture;se&&se.isDepthTexture&&(se.type===en?ie=s.DEPTH_COMPONENT32F:se.type===ii&&(ie=s.DEPTH_COMPONENT24));const ce=gt(v);Ke(v)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ie,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ie,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const ie=gt(v);G&&Ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,v.width,v.height):Ke(v)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,y)}else{const ie=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let se=0;se<ie.length;se++){const ce=ie[se],Ae=r.convert(ce.format,ce.colorSpace),fe=r.convert(ce.type),X=H(ce.internalFormat,Ae,fe,ce.colorSpace),xe=gt(v);G&&Ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,X,v.width,v.height):Ke(v)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const ie=n.get(v.depthTexture).__webglTexture,se=gt(v);if(v.depthTexture.format===Xn)Ke(v)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(v.depthTexture.format===Ri)Ke(v)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ye(y){const v=n.get(y),G=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");je(v.__webglFramebuffer,y)}else if(G){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]=s.createRenderbuffer(),we(v.__webglDepthbuffer[ie],y,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),we(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(y,v,G){const ie=n.get(y);v!==void 0&&oe(ie.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),G!==void 0&&ye(y)}function Mt(y){const v=y.texture,G=n.get(y),ie=n.get(v);y.addEventListener("dispose",B),y.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=v.version,o.memory.textures++);const se=y.isWebGLCubeRenderTarget===!0,ce=y.isWebGLMultipleRenderTargets===!0,Ae=A(y)||a;if(se){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)G.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const fe=y.texture;for(let X=0,xe=fe.length;X<xe;X++){const Te=n.get(fe[X]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ke(y)===!1){const fe=ce?v:[v];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<fe.length;X++){const xe=fe[X];G.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[X]);const Te=r.convert(xe.format,xe.colorSpace),be=r.convert(xe.type),de=H(xe.internalFormat,Te,be,xe.colorSpace,y.isXRRenderTarget===!0),ve=gt(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,de,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,G.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),we(G.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),le(s.TEXTURE_CUBE_MAP,v,Ae);for(let fe=0;fe<6;fe++)oe(G.__webglFramebuffer[fe],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe);R(v,Ae)&&N(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const fe=y.texture;for(let X=0,xe=fe.length;X<xe;X++){const Te=fe[X],be=n.get(Te);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),le(s.TEXTURE_2D,Te,Ae),oe(G.__webglFramebuffer,y,Te,s.COLOR_ATTACHMENT0+X,s.TEXTURE_2D),R(Te,Ae)&&N(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?fe=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),le(fe,v,Ae),oe(G.__webglFramebuffer,y,v,s.COLOR_ATTACHMENT0,fe),R(v,Ae)&&N(fe),t.unbindTexture()}y.depthBuffer&&ye(y)}function Rt(y){const v=A(y)||a,G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0,se=G.length;ie<se;ie++){const ce=G[ie];if(R(ce,v)){const Ae=y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(ce).__webglTexture;t.bindTexture(Ae,fe),N(Ae),t.unbindTexture()}}}function yt(y){if(a&&y.samples>0&&Ke(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],G=y.width,ie=y.height;let se=s.COLOR_BUFFER_BIT;const ce=[],Ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(y),X=y.isWebGLMultipleRenderTargets===!0;if(X)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){ce.push(s.COLOR_ATTACHMENT0+xe),y.depthBuffer&&ce.push(Ae);const Te=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Te===!1&&(y.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),X&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]),Te===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ae]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ae])),X){const be=n.get(v[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,G,ie,0,0,G,ie,se,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);const Te=n.get(v[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function gt(y){return Math.min(h,y.samples)}function Ke(y){const v=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(y){const v=o.render.frame;g.get(y)!==v&&(g.set(y,v),y.update())}function Xt(y,v){const G=y.colorSpace,ie=y.format,se=y.type;return y.isCompressedTexture===!0||y.format===Pa||G!==Nn&&G!==ai&&(G===pe?a===!1?e.has("EXT_sRGB")===!0&&ie===tn?(y.format=Pa,y.minFilter=Wt,y.generateMipmaps=!1):v=Qu.sRGBToLinear(v):(ie!==tn||se!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=he,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke}function kx(s,e,t){const n=t.isWebGL2;function i(r,o=ai){let a;if(r===Pn)return s.UNSIGNED_BYTE;if(r===uf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===af)return s.BYTE;if(r===cf)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===lf)return s.INT;if(r===ii)return s.UNSIGNED_INT;if(r===en)return s.FLOAT;if(r===oi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===df)return s.ALPHA;if(r===tn)return s.RGBA;if(r===ff)return s.LUMINANCE;if(r===pf)return s.LUMINANCE_ALPHA;if(r===Xn)return s.DEPTH_COMPONENT;if(r===Ri)return s.DEPTH_STENCIL;if(r===Pa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xu)return s.RED;if(r===mf)return s.RED_INTEGER;if(r===$u)return s.RG;if(r===gf)return s.RG_INTEGER;if(r===_f)return s.RGBA_INTEGER;if(r===So||r===Ar||r===Rr||r===Cr)if(o===pe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===So)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===So)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ar)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cc||r===Pc||r===Lc||r===Nc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fa||r===pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fa)return o===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pa)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ma||r===ga||r===_a||r===xa||r===va||r===Sa||r===Ma||r===ya||r===Ta||r===Ea||r===ba||r===wa||r===Aa||r===Ra)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ma)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ga)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_a)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xa)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===va)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sa)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ma)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ya)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ta)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ea)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ba)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wa)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Aa)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ra)return o===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Mo)return o===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===vf||r===Uc||r===Ic||r===Dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Mo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ic)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Wx extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class oc extends It{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Xn,u!==Xn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xn&&(n=ii),n===void 0&&u===Ri&&(n=bi),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=c!==void 0?c:it,this.flipY=!1,this.generateMipmaps=!1}}class Xx extends ds{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const T=[],S=[],A=new Set,E=new Map,R=new $t;R.layers.enable(1),R.viewport=new qe;const N=new $t;N.layers.enable(2),N.viewport=new qe;const H=[R,N],x=new Wx;x.layers.enable(1),x.layers.enable(2);let b=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=T[W];return Z===void 0&&(Z=new Wo,T[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=T[W];return Z===void 0&&(Z=new Wo,T[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=T[W];return Z===void 0&&(Z=new Wo,T[W]=Z),Z.getHandSpace()};function B(W){const Z=S.indexOf(W.inputSource);if(Z===-1)return;const ae=T[Z];ae!==void 0&&ae.dispatchEvent({type:W.type,data:W.inputSource})}function L(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let W=0;W<T.length;W++){const Z=S[W];Z!==null&&(S[W]=null,T[W].disconnect(Z))}b=null,K=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),f=new ci(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ae=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Ri:Xn,ae=_.stencil?bi:ii);const P={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(P),i.updateRenderState({layers:[d]}),f=new ci(d.textureWidth,d.textureHeight,{format:tn,type:Pn,depthTexture:new oc(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(W){for(let Z=0;Z<W.removed.length;Z++){const ae=W.removed[Z],le=S.indexOf(ae);le>=0&&(S[le]=null,T[le].disconnect(ae))}for(let Z=0;Z<W.added.length;Z++){const ae=W.added[Z];let le=S.indexOf(ae);if(le===-1){for(let Le=0;Le<T.length;Le++)if(Le>=S.length){S.push(ae),le=Le;break}else if(S[Le]===null){S[Le]=ae,le=Le;break}if(le===-1)break}const P=T[le];P&&P.connect(ae)}}const F=new w,Q=new w;function q(W,Z,ae){F.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(ae.matrixWorld);const le=F.distanceTo(Q),P=Z.projectionMatrix.elements,Le=ae.projectionMatrix.elements,Ce=P[14]/(P[10]-1),oe=P[14]/(P[10]+1),we=(P[9]+1)/P[5],je=(P[9]-1)/P[5],ye=(P[8]-1)/P[0],Ve=(Le[8]+1)/Le[0],Mt=Ce*ye,Rt=Ce*Ve,yt=le/(-ye+Ve),gt=yt*-ye;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(gt),W.translateZ(yt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ke=Ce+yt,at=oe+yt,Xt=Mt-gt,y=Rt+(le-gt),v=we*oe/at*Ke,G=je*oe/at*Ke;W.projectionMatrix.makePerspective(Xt,y,v,G,Ke,at),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;x.near=N.near=R.near=W.near,x.far=N.far=R.far=W.far,(b!==x.near||K!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,K=x.far);const Z=W.parent,ae=x.cameras;Y(x,Z);for(let le=0;le<ae.length;le++)Y(ae[le],Z);ae.length===2?q(x,R,N):x.projectionMatrix.copy(R.projectionMatrix),J(W,x,Z)};function J(W,Z,ae){ae===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const le=W.children;for(let P=0,Le=le.length;P<Le;P++)le[P].updateMatrixWorld(!0);W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ss*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return A};let ee=null;function _e(W,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let le=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let P=0;P<ae.length;P++){const Le=ae[P];let Ce=null;if(p!==null)Ce=p.getViewport(Le);else{const we=h.getViewSubImage(d,Le);Ce=we.viewport,P===0&&(e.setRenderTargetTextures(f,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f))}let oe=H[P];oe===void 0&&(oe=new $t,oe.layers.enable(P),oe.viewport=new qe,H[P]=oe),oe.matrix.fromArray(Le.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Le.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),P===0&&(x.matrix.copy(oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(oe)}}for(let ae=0;ae<T.length;ae++){const le=S[ae],P=T[ae];le!==null&&P!==void 0&&P.update(le,Z,l||o)}if(ee&&ee(W,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ae=null;for(const le of A)Z.detectedPlanes.has(le)||(ae===null&&(ae=[]),ae.push(le));if(ae!==null)for(const le of ae)A.delete(le),E.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of Z.detectedPlanes)if(!A.has(le))A.add(le),E.set(le,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const P=E.get(le);le.lastChangedTime>P&&(E.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const he=new rh;he.setAnimationLoop(_e),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}function $x(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ih(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,S,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qx(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,S){const A=S.program;n.uniformBlockBinding(T,A)}function l(T,S){let A=i[T.id];A===void 0&&(g(T),A=u(T),i[T.id]=A,T.addEventListener("dispose",m));const E=S.program;n.updateUBOMapping(T,E);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){const S=h();T.__bindingPointIndex=S;const A=s.createBuffer(),E=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,E,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],A=T.uniforms,E=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,N=A.length;R<N;R++){const H=A[R];if(p(H,R,E)===!0){const x=H.__offset,b=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let B=0;B<b.length;B++){const L=b[B],O=_(L);typeof L=="number"?(H.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,x+K,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=L.elements[0],H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=L.elements[0],H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=L.elements[0]):(L.toArray(H.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,H.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,S,A){const E=T.value;if(A[S]===void 0){if(typeof E=="number")A[S]=E;else{const R=Array.isArray(E)?E:[E],N=[];for(let H=0;H<R.length;H++)N.push(R[H].clone());A[S]=N}return!0}else if(typeof E=="number"){if(A[S]!==E)return A[S]=E,!0}else{const R=Array.isArray(A[S])?A[S]:[A[S]],N=Array.isArray(E)?E:[E];for(let H=0;H<R.length;H++){const x=R[H];if(x.equals(N[H])===!1)return x.copy(N[H]),!0}}return!1}function g(T){const S=T.uniforms;let A=0;const E=16;let R=0;for(let N=0,H=S.length;N<H;N++){const x=S[N],b={boundary:0,storage:0},K=Array.isArray(x.value)?x.value:[x.value];for(let B=0,L=K.length;B<L;B++){const O=K[B],F=_(O);b.boundary+=F.boundary,b.storage+=F.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=A,N>0){R=A%E;const B=E-R;R!==0&&B-b.boundary<0&&(A+=E-R,x.__offset=A)}A+=b.storage}return R=A%E,R>0&&(A+=E-R),T.__size=A,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}function Yx(){const s=Bs("canvas");return s.style.display="block",s}class uh{constructor(e={}){const{canvas:t=Yx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=pe,this.useLegacyLights=!0,this.toneMapping=sn,this.toneMappingExposure=1;const f=this;let T=!1,S=0,A=0,E=null,R=-1,N=null;const H=new qe,x=new qe;let b=null,K=t.width,B=t.height,L=1,O=null,F=null;const Q=new qe(0,0,K,B),q=new qe(0,0,K,B);let Y=!1;const J=new ks;let ee=!1,_e=!1,he=null;const W=new Ie,Z=new w,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?L:1}let P=n;function Le(M,D){for(let V=0;V<M.length;V++){const U=M[V],$=t.getContext(U,D);if($!==null)return $}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Je,!1),P===null){const D=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&D.shift(),P=Le(D,M),P===null)throw Le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ce,oe,we,je,ye,Ve,Mt,Rt,yt,gt,Ke,at,Xt,y,v,G,ie,se,ce,Ae,fe,X,xe,Te;function be(){Ce=new o_(P),oe=new e_(P,Ce,e),Ce.init(oe),X=new kx(P,Ce,oe),we=new zx(P,Ce,oe),je=new l_(P),ye=new wx,Ve=new Vx(P,Ce,we,ye,oe,X,je),Mt=new n_(f),Rt=new r_(f),yt=new Mp(P,oe),xe=new Jg(P,Ce,yt,oe),gt=new a_(P,yt,je,xe),Ke=new f_(P,gt,yt,je),ce=new d_(P,oe,Ve),G=new t_(ye),at=new bx(f,Mt,Rt,Ce,oe,xe,G),Xt=new $x(f,ye),y=new Rx,v=new Ix(Ce,oe),se=new Zg(f,Mt,Rt,we,Ke,d,c),ie=new Gx(f,Ke,oe),Te=new qx(P,je,oe,we),Ae=new Qg(P,Ce,je,oe),fe=new c_(P,Ce,je,oe),je.programs=at.programs,f.capabilities=oe,f.extensions=Ce,f.properties=ye,f.renderLists=y,f.shadowMap=ie,f.state=we,f.info=je}be();const de=new Xx(f,P);this.xr=de,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(M){M!==void 0&&(L=M,this.setSize(K,B,!1))},this.getSize=function(M){return M.set(K,B)},this.setSize=function(M,D,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,B=D,t.width=Math.floor(M*L),t.height=Math.floor(D*L),V===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(K*L,B*L).floor()},this.setDrawingBufferSize=function(M,D,V){K=M,B=D,L=V,t.width=Math.floor(M*V),t.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,D,V,U){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,D,V,U),we.viewport(H.copy(Q).multiplyScalar(L).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,D,V,U){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,D,V,U),we.scissor(x.copy(q).multiplyScalar(L).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){we.setScissorTest(Y=M)},this.setOpaqueSort=function(M){O=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(M=!0,D=!0,V=!0){let U=0;M&&(U|=P.COLOR_BUFFER_BIT),D&&(U|=P.DEPTH_BUFFER_BIT),V&&(U|=P.STENCIL_BUFFER_BIT),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),y.dispose(),v.dispose(),ye.dispose(),Mt.dispose(),Rt.dispose(),Ke.dispose(),xe.dispose(),Te.dispose(),at.dispose(),de.dispose(),de.removeEventListener("sessionstart",Se),de.removeEventListener("sessionend",ot),he&&(he.dispose(),he=null),tt.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=je.autoReset,D=ie.enabled,V=ie.autoUpdate,U=ie.needsUpdate,$=ie.type;be(),je.autoReset=M,ie.enabled=D,ie.autoUpdate=V,ie.needsUpdate=U,ie.type=$}function Je(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ut(M){const D=M.target;D.removeEventListener("dispose",ut),C(D)}function C(M){z(M),ye.remove(M)}function z(M){const D=ye.get(M).programs;D!==void 0&&(D.forEach(function(V){at.releaseProgram(V)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,U,$,Ee){D===null&&(D=ae);const Re=$.isMesh&&$.matrixWorld.determinant()<0,Pe=Yd(M,D,V,U,$);we.setMaterial(U,Re);let De=V.index,Be=1;U.wireframe===!0&&(De=gt.getWireframeAttribute(V),Be=2);const Ge=V.drawRange,ke=V.attributes.position;let Qe=Ge.start*Be,Gt=(Ge.start+Ge.count)*Be;Ee!==null&&(Qe=Math.max(Qe,Ee.start*Be),Gt=Math.min(Gt,(Ee.start+Ee.count)*Be)),De!==null?(Qe=Math.max(Qe,0),Gt=Math.min(Gt,De.count)):ke!=null&&(Qe=Math.max(Qe,0),Gt=Math.min(Gt,ke.count));const dn=Gt-Qe;if(dn<0||dn===1/0)return;xe.setup($,U,Pe,V,De);let di,ft=Ae;if(De!==null&&(di=yt.get(De),ft=fe,ft.setIndex(di)),$.isMesh)U.wireframe===!0?(we.setLineWidth(U.wireframeLinewidth*le()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if($.isLine){let $e=U.linewidth;$e===void 0&&($e=1),we.setLineWidth($e*le()),$.isLineSegments?ft.setMode(P.LINES):$.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else $.isPoints?ft.setMode(P.POINTS):$.isSprite&&ft.setMode(P.TRIANGLES);if($.isInstancedMesh)ft.renderInstances(Qe,dn,$.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,go=Math.min(V.instanceCount,$e);ft.renderInstances(Qe,dn,go)}else ft.render(Qe,dn)},this.compile=function(M,D){function V(U,$,Ee){U.transparent===!0&&U.side===Rn&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,Xs(U,$,Ee),U.side=qn,U.needsUpdate=!0,Xs(U,$,Ee),U.side=Rn):Xs(U,$,Ee)}g=v.get(M),g.init(),m.push(g),M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(f.useLegacyLights),M.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let Ee=0;Ee<$.length;Ee++){const Re=$[Ee];V(Re,M,U)}else V($,M,U)}),m.pop(),g=null};let ne=null;function ue(M){ne&&ne(M)}function Se(){tt.stop()}function ot(){tt.start()}const tt=new rh;tt.setAnimationLoop(ue),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(M){ne=M,de.setAnimationLoop(M),M===null?tt.stop():tt.start()},de.addEventListener("sessionstart",Se),de.addEventListener("sessionend",ot),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(D),D=de.getCamera()),M.isScene===!0&&M.onBeforeRender(f,M,D,E),g=v.get(M,m.length),g.init(),m.push(g),W.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix(W),_e=this.localClippingEnabled,ee=G.init(this.clippingPlanes,_e),p=y.get(M,_.length),p.init(),_.push(p),Dt(M,D,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(O,F),ee===!0&&G.beginShadows();const V=g.state.shadowsArray;if(ie.render(V,M,D),ee===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(p,M),g.setupLights(f.useLegacyLights),D.isArrayCamera){const U=D.cameras;for(let $=0,Ee=U.length;$<Ee;$++){const Re=U[$];jn(p,M,Re,Re.viewport)}}else jn(p,M,D);E!==null&&(Ve.updateMultisampleRenderTarget(E),Ve.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(f,M,D),xe.resetDefaultState(),R=-1,N=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Dt(M,D,V,U){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){U&&Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(W);const Re=Ke.update(M),Pe=M.material;Pe.visible&&p.push(M,Re,Pe,V,Z.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==je.render.frame&&(M.skeleton.update(),M.skeleton.frame=je.render.frame),!M.frustumCulled||J.intersectsObject(M))){U&&Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(W);const Re=Ke.update(M),Pe=M.material;if(Array.isArray(Pe)){const De=Re.groups;for(let Be=0,Ge=De.length;Be<Ge;Be++){const ke=De[Be],Qe=Pe[ke.materialIndex];Qe&&Qe.visible&&p.push(M,Re,Qe,V,Z.z,ke)}}else Pe.visible&&p.push(M,Re,Pe,V,Z.z,null)}}const Ee=M.children;for(let Re=0,Pe=Ee.length;Re<Pe;Re++)Dt(Ee[Re],D,V,U)}function jn(M,D,V,U){const $=M.opaque,Ee=M.transmissive,Re=M.transparent;g.setupLightsView(V),ee===!0&&G.setGlobalState(f.clippingPlanes,V),Ee.length>0&&ht($,Ee,D,V),U&&we.viewport(H.copy(U)),$.length>0&&on($,D,V),Ee.length>0&&on(Ee,D,V),Re.length>0&&on(Re,D,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ht(M,D,V,U){if(he===null){const Pe=oe.isWebGL2;he=new ci(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?oi:Pn,minFilter:Os,samples:Pe&&a===!0?4:0})}const $=f.getRenderTarget();f.setRenderTarget(he),f.clear();const Ee=f.toneMapping;f.toneMapping=sn,on(M,V,U),Ve.updateMultisampleRenderTarget(he),Ve.updateRenderTargetMipmap(he);let Re=!1;for(let Pe=0,De=D.length;Pe<De;Pe++){const Be=D[Pe],Ge=Be.object,ke=Be.geometry,Qe=Be.material,Gt=Be.group;if(Qe.side===Rn&&Ge.layers.test(U.layers)){const dn=Qe.side;Qe.side=Bt,Qe.needsUpdate=!0,Tn(Ge,V,U,ke,Qe,Gt),Qe.side=dn,Qe.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(he),Ve.updateRenderTargetMipmap(he)),f.setRenderTarget($),f.toneMapping=Ee}function on(M,D,V){const U=D.isScene===!0?D.overrideMaterial:null;for(let $=0,Ee=M.length;$<Ee;$++){const Re=M[$],Pe=Re.object,De=Re.geometry,Be=U===null?Re.material:U,Ge=Re.group;Pe.layers.test(V.layers)&&Tn(Pe,D,V,De,Be,Ge)}}function Tn(M,D,V,U,$,Ee){M.onBeforeRender(f,D,V,U,$,Ee),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(f,D,V,U,M,Ee),$.transparent===!0&&$.side===Rn&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,f.renderBufferDirect(V,D,U,$,M,Ee),$.side=qn,$.needsUpdate=!0,f.renderBufferDirect(V,D,U,$,M,Ee),$.side=Rn):f.renderBufferDirect(V,D,U,$,M,Ee),M.onAfterRender(f,D,V,U,$,Ee)}function Xs(M,D,V){D.isScene!==!0&&(D=ae);const U=ye.get(M),$=g.state.lights,Ee=g.state.shadowsArray,Re=$.state.version,Pe=at.getParameters(M,$.state,Ee,D,V),De=at.getProgramCacheKey(Pe);let Be=U.programs;U.environment=M.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(M.isMeshStandardMaterial?Rt:Mt).get(M.envMap||U.environment),Be===void 0&&(M.addEventListener("dispose",ut),Be=new Map,U.programs=Be);let Ge=Be.get(De);if(Ge!==void 0){if(U.currentProgram===Ge&&U.lightsStateVersion===Re)return bc(M,Pe),Ge}else Pe.uniforms=at.getUniforms(M),M.onBuild(V,Pe,f),M.onBeforeCompile(Pe,f),Ge=at.acquireProgram(Pe,De),Be.set(De,Ge),U.uniforms=Pe.uniforms;const ke=U.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=G.uniform),bc(M,Pe),U.needsLights=Kd(M),U.lightsStateVersion=Re,U.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMap.value=$.state.directionalShadowMap,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotShadowMap.value=$.state.spotShadowMap,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMap.value=$.state.pointShadowMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix);const Qe=Ge.getUniforms(),Gt=Lr.seqWithValue(Qe.seq,ke);return U.currentProgram=Ge,U.uniformsList=Gt,Ge}function bc(M,D){const V=ye.get(M);V.outputColorSpace=D.outputColorSpace,V.instancing=D.instancing,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Yd(M,D,V,U,$){D.isScene!==!0&&(D=ae),Ve.resetTextureUnits();const Ee=D.fog,Re=U.isMeshStandardMaterial?D.environment:null,Pe=E===null?f.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Nn,De=(U.isMeshStandardMaterial?Rt:Mt).get(U.envMap||Re),Be=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!U.normalMap&&!!V.attributes.tangent,ke=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,Gt=!!V.morphAttributes.color,dn=U.toneMapped?f.toneMapping:sn,di=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=di!==void 0?di.length:0,$e=ye.get(U),go=g.state.lights;if(ee===!0&&(_e===!0||M!==N)){const jt=M===N&&U.id===R;G.setState(U,M,jt)}let Tt=!1;U.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==go.state.version||$e.outputColorSpace!==Pe||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==De||U.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==G.numPlanes||$e.numIntersection!==G.numIntersection)||$e.vertexAlphas!==Be||$e.vertexTangents!==Ge||$e.morphTargets!==ke||$e.morphNormals!==Qe||$e.morphColors!==Gt||$e.toneMapping!==dn||oe.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(Tt=!0):(Tt=!0,$e.__version=U.version);let fi=$e.currentProgram;Tt===!0&&(fi=Xs(U,D,$));let wc=!1,Ms=!1,_o=!1;const zt=fi.getUniforms(),pi=$e.uniforms;if(we.useProgram(fi.program)&&(wc=!0,Ms=!0,_o=!0),U.id!==R&&(R=U.id,Ms=!0),wc||N!==M){if(zt.setValue(P,"projectionMatrix",M.projectionMatrix),oe.logarithmicDepthBuffer&&zt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),N!==M&&(N=M,Ms=!0,_o=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const jt=zt.map.cameraPosition;jt!==void 0&&jt.setValue(P,Z.setFromMatrixPosition(M.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&zt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||$.isSkinnedMesh)&&zt.setValue(P,"viewMatrix",M.matrixWorldInverse)}if($.isSkinnedMesh){zt.setOptional(P,$,"bindMatrix"),zt.setOptional(P,$,"bindMatrixInverse");const jt=$.skeleton;jt&&(oe.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),zt.setValue(P,"boneTexture",jt.boneTexture,Ve),zt.setValue(P,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xo=V.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&oe.isWebGL2===!0)&&ce.update($,V,fi),(Ms||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,zt.setValue(P,"receiveShadow",$.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(pi.envMap.value=De,pi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ms&&(zt.setValue(P,"toneMappingExposure",f.toneMappingExposure),$e.needsLights&&jd(pi,_o),Ee&&U.fog===!0&&Xt.refreshFogUniforms(pi,Ee),Xt.refreshMaterialUniforms(pi,U,L,B,he),Lr.upload(P,$e.uniformsList,pi,Ve)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Lr.upload(P,$e.uniformsList,pi,Ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&zt.setValue(P,"center",$.center),zt.setValue(P,"modelViewMatrix",$.modelViewMatrix),zt.setValue(P,"normalMatrix",$.normalMatrix),zt.setValue(P,"modelMatrix",$.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const jt=U.uniformsGroups;for(let vo=0,Zd=jt.length;vo<Zd;vo++)if(oe.isWebGL2){const Ac=jt[vo];Te.update(Ac,fi),Te.bind(Ac,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function jd(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Kd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,D,V){ye.get(M.texture).__webglTexture=D,ye.get(M.depthTexture).__webglTexture=V;const U=ye.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=V===void 0,U.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const V=ye.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){E=M,S=D,A=V;let U=!0,$=null,Ee=!1,Re=!1;if(M){const De=ye.get(M);De.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):De.__webglFramebuffer===void 0?Ve.setupRenderTarget(M):De.__hasExternalTextures&&Ve.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Re=!0);const Ge=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?($=Ge[D],Ee=!0):oe.isWebGL2&&M.samples>0&&Ve.useMultisampledRTT(M)===!1?$=ye.get(M).__webglMultisampledFramebuffer:$=Ge,H.copy(M.viewport),x.copy(M.scissor),b=M.scissorTest}else H.copy(Q).multiplyScalar(L).floor(),x.copy(q).multiplyScalar(L).floor(),b=Y;if(we.bindFramebuffer(P.FRAMEBUFFER,$)&&oe.drawBuffers&&U&&we.drawBuffers(M,$),we.viewport(H),we.scissor(x),we.setScissorTest(b),Ee){const De=ye.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,De.__webglTexture,V)}else if(Re){const De=ye.get(M.texture),Be=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,V||0,Be)}R=-1},this.readRenderTargetPixels=function(M,D,V,U,$,Ee,Re){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){we.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const De=M.texture,Be=De.format,Ge=De.type;if(Be!==tn&&X.convert(Be)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===oi&&(Ce.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ge!==Pn&&X.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===en&&(oe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-U&&V>=0&&V<=M.height-$&&P.readPixels(D,V,U,$,X.convert(Be),X.convert(Ge),Ee)}finally{const De=E!==null?ye.get(E).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(M,D,V=0){const U=Math.pow(2,-V),$=Math.floor(D.image.width*U),Ee=Math.floor(D.image.height*U);Ve.setTexture2D(D,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,M.x,M.y,$,Ee),we.unbindTexture()},this.copyTextureToTexture=function(M,D,V,U=0){const $=D.image.width,Ee=D.image.height,Re=X.convert(V.format),Pe=X.convert(V.type);Ve.setTexture2D(V,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment),D.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,M.x,M.y,$,Ee,Re,Pe,D.image.data):D.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Re,D.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,M.x,M.y,Re,Pe,D.image),U===0&&V.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,D,V,U,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=M.max.x-M.min.x+1,Re=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,De=X.convert(U.format),Be=X.convert(U.type);let Ge;if(U.isData3DTexture)Ve.setTexture3D(U,0),Ge=P.TEXTURE_3D;else if(U.isDataArrayTexture)Ve.setTexture2DArray(U,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ke=P.getParameter(P.UNPACK_ROW_LENGTH),Qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Gt=P.getParameter(P.UNPACK_SKIP_PIXELS),dn=P.getParameter(P.UNPACK_SKIP_ROWS),di=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[0]:V.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,M.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,M.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?P.texSubImage3D(Ge,$,D.x,D.y,D.z,Ee,Re,Pe,De,Be,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,$,D.x,D.y,D.z,Ee,Re,Pe,De,ft.data)):P.texSubImage3D(Ge,$,D.x,D.y,D.z,Ee,Re,Pe,De,Be,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,dn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,di),$===0&&U.generateMipmaps&&P.generateMipmap(Ge),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ve.setTextureCube(M,0):M.isData3DTexture?Ve.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ve.setTexture2DArray(M,0):Ve.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){S=0,A=0,E=null,we.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?$n:ja}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?pe:Nn}}class jx extends uh{}jx.prototype.isWebGL1Renderer=!0;class Kx extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Zx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new w;class si{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new si(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const El=new w,bl=new qe,wl=new qe,Jx=new w,Al=new Ie,ji=new w,Ho=new Mn;class UT extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ji.fromBufferAttribute(t,n),this.applyBoneTransform(n,ji),this.boundingBox.expandByPoint(ji)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ji.fromBufferAttribute(t,n),this.applyBoneTransform(n,ji),this.boundingSphere.expandByPoint(ji)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}raycast(e,t){this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(this.matrixWorld),e.ray.intersectsSphere(Ho)!==!1&&this._computeIntersections(e,t)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bl.fromBufferAttribute(i.attributes.skinIndex,e),wl.fromBufferAttribute(i.attributes.skinWeight,e),El.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wl.getComponent(r);if(o!==0){const a=bl.getComponent(r);Al.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jx.copy(El).applyMatrix4(Al),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Qx extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ev extends It{constructor(e=null,t=1,n=1,i,r,o,a,c,l=it,u=it,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rl=new Ie,tv=new Ie;class hh{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:tv;Rl.multiplyMatrices(a,t[r]),Rl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ku(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ev(t,e,e,tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qx),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Cl extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new Ie,Pl=new Ie,fr=[],Ll=new Sn,nv=new Ie,ws=new nn,As=new Mn;class IT extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Ll.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),As.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ki),Pl.multiplyMatrices(n,Ki),ws.matrixWorld=Pl,ws.raycast(e,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,t.push(c)}fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class iv extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nl=new w,Ul=new w,Il=new Ie,Xo=new to,pr=new Mn;class dh extends dt{constructor(e=new yn,t=new iv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nl.fromBufferAttribute(t,i-1),Ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nl.distanceTo(Ul);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;Il.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(Il);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,u=new w,h=new w,d=new w,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let S=f,A=T-1;S<A;S+=p){const E=g.getX(S),R=g.getX(S+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,R),Xo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(d);H<e.near||H>e.far||t.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),T=Math.min(m.count,o.start+o.count);for(let S=f,A=T-1;S<A;S+=p){if(l.fromBufferAttribute(m,S),u.fromBufferAttribute(m,S+1),Xo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Dl=new w,Fl=new w;class DT extends dh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dl.fromBufferAttribute(t,i),Fl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dl.distanceTo(Fl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FT extends dh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sv extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ol=new Ie,Ua=new to,mr=new Mn,gr=new w;class OT extends dt{constructor(e=new yn,t=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;Ol.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Ol);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);gr.fromBufferAttribute(h,m),Bl(gr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)gr.fromBufferAttribute(h,g),Bl(gr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bl(s,e,t,n,i,r,o){const a=Ua.distanceSqToPoint(s);if(a<t){const c=new w;Ua.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class rv extends It{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Wt,this.magFilter=r!==void 0?r:Wt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ov extends yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,r=new w;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,p=h.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),T=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,f),r.fromBufferAttribute(o,T),Gl(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Gl(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new un(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Gl(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class av extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class BT extends av{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ei(s,e,t){return fh(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function _r(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fh(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ph(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ro{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lv extends ro{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oc:r=e,a=2*t-n;break;case Bc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oc:o=e,c=2*n-t;break;case Bc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,A=p*m-p*_;for(let E=0;E!==a;++E)r[E]=f*o[u+E]+T*o[l+E]+S*o[c+E]+A*o[h+E];return r}}class uv extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class hv extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ei(n,r,o),this.values=ei(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&fh(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=ei(this.times),t=ei(this.values),n=this.getValueSize(),i=this.getInterpolation()===yo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=ei(e,0,o),this.values=ei(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ei(this.times,0),t=ei(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=kr;class gs extends In{}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Vr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class mh extends In{}mh.prototype.ValueTypeName="color";class Hr extends In{}Hr.prototype.ValueTypeName="number";class dv extends ro{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)fs.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ws extends In{InterpolantFactoryMethodLinear(e){return new dv(this.times,this.values,this.getValueSize(),e)}}Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=kr;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends In{}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Vr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends In{}Xr.prototype.ValueTypeName="vector";class GT{constructor(e,t=-1,n,i=Sf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=cv(c);c=zl(c,1,u),l=zl(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];ph(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){const S=d[g];m.push(S.time),f.push(S.morphTarget===_?1:0)}i.push(new Hr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(Xr,p+".position",d,"pos",i),n(Ws,p+".quaternion",d,"rot",i),n(Xr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return mh;case"quaternion":return Ws;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fv(s.type);if(s.times===void 0){const t=[],n=[];ph(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const os={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const gv=new mv;class oo{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Vn={};class _v extends Error{constructor(e,t){super(e),this.response=t}}class zT extends oo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Vn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){T();function T(){h.read().then(({done:S,value:A})=>{if(S)f.close();else{_+=A.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,N=u.length;R<N;R++){const H=u[R];H.onProgress&&H.onProgress(E)}f.enqueue(A),T()}})}}});return new Response(m)}else throw new _v(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{os.add(e,l);const u=Vn[e];delete Vn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Vn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xv extends oo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Bs("img");function c(){u(),os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class VT extends oo{constructor(e){super(e)}load(e,t,n,i){const r=new It,o=new xv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ao extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $o=new Ie,Vl=new w,kl=new w;class ac{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vv extends ac{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kT extends ao{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wl=new Ie,Rs=new w,qo=new w;class Sv extends ac{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),qo.copy(n.position),qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qo),n.updateMatrixWorld(),i.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}}class WT extends ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mv extends ac{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HT extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XT extends ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $T{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yv extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class qT extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){os.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const cc="\\[\\]\\.:\\/",Tv=new RegExp("["+cc+"]","g"),lc="[^"+cc+"]",Ev="[^"+cc.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",lc),wv=/(WCOD+)?/.source.replace("WCOD",Ev),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Cv=new RegExp("^"+bv+wv+Av+Rv+"$"),Pv=["material","materials","bones","map"];class Lv{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tv,"")}static parseTrackName(e){const t=Cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Pv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Lv;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ia extends Zx{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class YT{constructor(e,t,n=0,i=1/0){this.ray=new to(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Da(e,this,n,t),n.sort(Hl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Da(e[i],this,n,t);return n.sort(Hl),n}}function Hl(s,e){return s.distance-e.distance}function Da(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Da(i[r],e,t,!0)}}class jT{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Xl=new w,xr=new w;class Nv{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Xl.subVectors(e,this.start),xr.subVectors(this.end,this.start);const n=xr.dot(xr);let r=xr.dot(Xl)/n;return t&&(r=bt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qt.line={uniforms:io.merge([re.common,re.fog,re.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class uc extends Un{constructor(e){super({type:"LineMaterial",uniforms:io.clone(qt.line.uniforms),vertexShader:qt.line.vertexShader,fragmentShader:qt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const $l=new Sn,vr=new w;class gh extends yv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new un(e,3)),this.setAttribute("uv",new un(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ia(t,6,1);return this.setAttribute("instanceStart",new si(n,3,0)),this.setAttribute("instanceEnd",new si(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ia(t,6,1);return this.setAttribute("instanceColorStart",new si(n,3,0)),this.setAttribute("instanceColorEnd",new si(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ov(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),$l.setFromBufferAttribute(t),this.boundingBox.union($l))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)vr.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vr)),vr.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(vr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class _h extends gh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}const ql=new w,Yl=new w,Ct=new qe,Pt=new qe,bn=new qe,Yo=new w,jo=new Ie,Nt=new Nv,jl=new w,Sr=new Sn,Mr=new Mn,wn=new qe;let Cn,wi;function Kl(s,e,t){return wn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),wn.multiplyScalar(1/wn.w),wn.x=wi/t.width,wn.y=wi/t.height,wn.applyMatrix4(s.projectionMatrixInverse),wn.multiplyScalar(1/wn.w),Math.abs(Math.max(wn.x,wn.y))}function Uv(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){Nt.start.fromBufferAttribute(i,a),Nt.end.fromBufferAttribute(r,a),Nt.applyMatrix4(t);const l=new w,u=new w;Cn.distanceSqToSegment(Nt.start,Nt.end,u,l),u.distanceTo(l)<wi*.5&&e.push({point:u,pointOnLine:l,distance:Cn.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv2:null})}}function Iv(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;Cn.at(1,bn),bn.w=1,bn.applyMatrix4(e.matrixWorldInverse),bn.applyMatrix4(n),bn.multiplyScalar(1/bn.w),bn.x*=r.x/2,bn.y*=r.y/2,bn.z=0,Yo.copy(bn),jo.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Ct.fromBufferAttribute(c,d),Pt.fromBufferAttribute(l,d),Ct.w=1,Pt.w=1,Ct.applyMatrix4(jo),Pt.applyMatrix4(jo),Ct.z>h&&Pt.z>h)continue;if(Ct.z>h){const S=Ct.z-Pt.z,A=(Ct.z-h)/S;Ct.lerp(Pt,A)}else if(Pt.z>h){const S=Pt.z-Ct.z,A=(Pt.z-h)/S;Pt.lerp(Ct,A)}Ct.applyMatrix4(n),Pt.applyMatrix4(n),Ct.multiplyScalar(1/Ct.w),Pt.multiplyScalar(1/Pt.w),Ct.x*=r.x/2,Ct.y*=r.y/2,Pt.x*=r.x/2,Pt.y*=r.y/2,Nt.start.copy(Ct),Nt.start.z=0,Nt.end.copy(Pt),Nt.end.z=0;const _=Nt.closestPointToPointParameter(Yo,!0);Nt.at(_,jl);const m=Za.lerp(Ct.z,Pt.z,_),f=m>=-1&&m<=1,T=Yo.distanceTo(jl)<wi*.5;if(f&&T){Nt.start.fromBufferAttribute(c,d),Nt.end.fromBufferAttribute(l,d),Nt.start.applyMatrix4(o),Nt.end.applyMatrix4(o);const S=new w,A=new w;Cn.distanceSqToSegment(Nt.start,Nt.end,A,S),t.push({point:A,pointOnLine:S,distance:Cn.origin.distanceTo(A),object:s,face:null,faceIndex:d,uv:null,uv2:null})}}}class Dv extends nn{constructor(e=new gh,t=new uc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)ql.fromBufferAttribute(t,o),Yl.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ql.distanceTo(Yl);const r=new Ia(i,2,1);return e.setAttribute("instanceDistanceStart",new si(r,1,0)),e.setAttribute("instanceDistanceEnd",new si(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Cn=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;wi=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Mr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=wi*.5;else{const h=Math.max(i.near,Mr.distanceToPoint(Cn.origin));l=Kl(i,h,c.resolution)}if(Mr.radius+=l,Cn.intersectsSphere(Mr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Sr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=wi*.5;else{const h=Math.max(i.near,Sr.distanceToPoint(Cn.origin));u=Kl(i,h,c.resolution)}Sr.expandByScalar(u),Cn.intersectsBox(Sr)!==!1&&(n?Uv(this,t):Iv(this,i,t))}}class Fv extends Dv{constructor(e=new _h,t=new uc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Ko=new Oe;class KT extends Fv{constructor({size:t=1,width:n=.005}={}){const i=new _h;i.setPositions([0,0,0,t,0,0,0,0,0,0,0,0,0,t,0,0,0,0,0,0,0,0,0,t,0,0,0]),i.setColors([1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1]);const r=new uc({linewidth:n,vertexColors:!0,alphaToCoverage:!0});super(i,r);fn(this,"type","AxesHelper");this.computeLineDistances()}setColors(t,n,i){const r=Ko.set(t).toArray(),o=Ko.set(n).toArray(),a=Ko.set(i).toArray();return this.geometry.setColors([...r,...r,...r,...o,...o,...o,...a,...a,...a]),this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ov=(s,e,t,n)=>{const i=class extends Un{constructor(a={}){const c=Object.entries(s);let l={};for(const[u,h]of c){const d=io.clone({[u]:{value:h}});l={...l,...d}}super({uniforms:l,vertexShader:e,fragmentShader:t});fn(this,"key","");for(const[u]of c)Object.defineProperty(this,u,{get:()=>this.uniforms[u].value,set:h=>this.uniforms[u].value=h});Object.assign(this,a),n!==void 0&&n(this)}};return i.key=Za.generateUUID(),i};Ov({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard; }");const Zi={x:["#f73c3c","#942424"],y:["#6ccb26","#417a17"],z:["#178cf0","#0e5490"]},Zl=new w,Jl=new Ie,Ql=new w,Zo=new Ue,Jo=new Ue,Bv=new Ue,eu=new Ue,tu=new Ue;class JT{constructor(e){fn(this,"dispose");fn(this,"camera");fn(this,"controls");this.camera=e.camera,this.controls=e.controls;const n=(e.size??80)*window.devicePixelRatio,i=8*window.devicePixelRatio,r=6*window.devicePixelRatio,o=8*window.devicePixelRatio,a=2*window.devicePixelRatio,c=new w(n/2,n/2,0);let l=null,u=!1,h,d=!1;const p=document.createElement("canvas");p.style.width=`${n/2}px`,p.style.height=`${n/2}px`,p.width=n,p.height=n,p.className="orbit-controls-gizmo",e.el.append(p);const g=(e.axes??"xyz").toUpperCase().split(""),_=[{axis:"x",color:Zi.x,direction:new w(1,0,0),label:g[0],line:a,position:new w,size:i},{axis:"y",color:Zi.y,direction:new w(0,1,0),label:g[1],line:a,position:new w,size:i},{axis:"z",color:Zi.z,direction:new w(0,0,1),label:g[2],line:a,position:new w,size:i},{axis:"-x",color:Zi.x,direction:new w(-1,0,0),position:new w,size:r},{axis:"-y",color:Zi.y,direction:new w(0,-1,0),position:new w,size:r},{axis:"-z",color:Zi.z,direction:new w(0,0,-1),position:new w,size:r}],m=p.getContext("2d"),f=(B,L=10,O="#FF0000")=>{m.beginPath(),m.arc(B.x,B.y,L,0,2*Math.PI,!1),m.fillStyle=O,m.fill(),m.closePath()},T=(B,L,O=1,F="#FF0000")=>{m.beginPath(),m.moveTo(B.x,B.y),m.lineTo(L.x,L.y),m.lineWidth=O,m.strokeStyle=F,m.stroke(),m.closePath()},S=B=>{B&&m.clearRect(0,0,p.width,p.height);for(let L=0,O=_.length;L<O;L+=1){const F=_[L],Q=l===F,q=F.position.z>=-.01?F.color[0]:F.color[1];F.line&&T(c,F.position,F.line,q),f(F.position,F.size,Q?"#FFFFFF":q),F.label&&(m.font=`bold ${12*window.devicePixelRatio}px monospace`,m.fillStyle="#222222",m.textBaseline="middle",m.textAlign="center",m.fillText(F.label,F.position.x,F.position.y))}},A=B=>{const L=B.direction.clone().applyMatrix4(Jl);B.position.set(L.x*(c.x-B.size/2-o)+c.x,c.y-L.y*(c.y-B.size/2-o),L.z)},E=()=>{this.camera.updateMatrix(),Jl.extractRotation(this.camera.matrix).invert();for(let B=0,L=_.length;B<L;B+=1)A(_[B]);_.sort((B,L)=>B.position.z>L.position.z?1:-1),S(!0)},R=B=>{u||p.classList.add("dragging"),u=!0,Jo.set(B.clientX,B.clientY),Bv.subVectors(Jo,Zo).multiplyScalar(.5),Zo.copy(Jo)},N=B=>{tu.set(B.clientX,B.clientY),u=!1,eu.distanceToSquared(tu)<3&&K(),p.classList.remove("dragging"),this.controls.enabled=d,window.removeEventListener("pointermove",R,!1),window.removeEventListener("pointerup",N,!1)},H=()=>{h=p.getBoundingClientRect()},x=B=>{if(u)return;const L=l;l=null,B!==void 0&&Ql.set(B.clientX-h.left,B.clientY-h.top,0);for(let O=0,F=_.length;O<F;O+=1){const Q=_[O];Zl.copy(Q.position).divideScalar(window.devicePixelRatio),Ql.distanceTo(Zl)<Q.size&&(l=Q)}L!==l&&S(!1)},b=B=>{Zo.set(B.clientX,B.clientY),eu.set(B.clientX,B.clientY),d=this.controls.enabled,this.controls.enabled=!1,window.addEventListener("pointermove",R,!1),window.addEventListener("pointerup",N,!1)},K=()=>{if(l===null)return;const B=l.direction.clone(),L=this.camera.position.distanceTo(this.controls.target);B.multiplyScalar(L);const O=400,F=performance.now(),Q=1,q=()=>{const J=performance.now()-F,ee=Math.min(J/O,Q);if(this.camera.position.lerp(B,ee),this.controls.update(),ee!==Q){requestAnimationFrame(q);return}x()};q(),l=null};this.controls.addEventListener("change",E),this.controls.addEventListener("start",()=>p.classList.add("inactive")),this.controls.addEventListener("end",()=>p.classList.remove("inactive")),p.addEventListener("pointerdown",b,!1),p.addEventListener("pointerenter",H,!1),p.addEventListener("pointermove",x,!1),requestAnimationFrame(E),this.dispose=()=>{this.controls.removeEventListener("change",E),this.controls.removeEventListener("start",()=>p.classList.add("inactive")),this.controls.removeEventListener("end",()=>p.classList.remove("inactive")),p.removeEventListener("pointerdown",b,!1),p.removeEventListener("pointerenter",H,!1),p.removeEventListener("pointermove",x,!1),window.removeEventListener("pointermove",R,!1),window.removeEventListener("pointerup",N,!1),p.remove()}}}const yr=new w;class QT{constructor({camera:e,canvas:t,el:n,object3D:i}){fn(this,"camera");fn(this,"canvas");fn(this,"el");fn(this,"object3D");fn(this,"update",()=>{if(this.el===void 0||this.camera===void 0||this.canvas===void 0||this.object3D===void 0)return;yr.setFromMatrixPosition(this.object3D.matrixWorld).project(this.camera);const e=(yr.x*.5+.5)*this.canvas.clientWidth,t=(yr.y*-.5+.5)*this.canvas.clientHeight;this.el.style.transform=`translate3d(-50%,-50%,0) translate3d(${e}px,${t}px,0)`,this.el.style.zIndex=String((-yr.z*.5+.5)*1e5|0)});this.el=n,this.camera=e,this.canvas=t,this.object3D=i}dispose(){this.el=void 0,this.camera=void 0,this.canvas=void 0,this.object3D=void 0}}navigator.xr===void 0||/WebXRViewer\//ui.test(navigator.userAgent)||navigator.xr.addEventListener("sessiongranted",()=>{});new w,new w,new w;const Gv=(s,e,t,n=!1,i=window.devicePixelRatio)=>{var l;const r=e.domElement,o=r.clientWidth*i|0,a=r.clientHeight*i|0;if(r.width!==o||r.height!==a||n){const u=r.clientWidth/r.clientHeight;if(s.isPerspectiveCamera){const h=s;h.aspect=u,h.updateProjectionMatrix()}else{const h=s;h.left=h.userData.size*u/-2,h.right=h.userData.size*u/2,h.top=h.userData.size/2,h.bottom=h.userData.size/-2,h.updateProjectionMatrix()}t!==void 0&&t.setSize(o,a,!1),(l=e.xr)!=null&&l.isPresenting||e.setSize(o,a,!1)}};performance.now();performance.now();window.GPUShaderStage===void 0&&(window.GPUShaderStage={VERTEX:1,FRAGMENT:2,COMPUTE:4});class zv{static isAvailable(){return navigator.gpu!==void 0}static getErrorMessage(){const e='Your browser does not support <a href="https://gpuweb.github.io/gpuweb/" style="color:blue">WebGPU</a> yet.',t=document.createElement("div");return t.id="webgpumessage",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.width="400px",t.style.margin="5em auto 0",t.innerHTML=e,t}}const Vv=zv,Ns={PointList:"point-list",LineList:"line-list",LineStrip:"line-strip",TriangleList:"triangle-list",TriangleStrip:"triangle-strip"},Lt={Never:"never",Less:"less",Equal:"equal",LessEqual:"less-equal",Greater:"greater",NotEqual:"not-equal",GreaterEqual:"greater-equal",Always:"always"},An={Store:"store",Discard:"discard"},Qt={Load:"load",Clear:"clear"},Qo={CCW:"ccw",CW:"cw"},ea={None:"none",Front:"front",Back:"back"},Gs={Uint16:"uint16",Uint32:"uint32"},ct={Uint8x2:"uint8x2",Uint8x4:"uint8x4",Sint8x2:"sint8x2",Sint8x4:"sint8x4",Unorm8x2:"unorm8x2",Unorm8x4:"unorm8x4",Snorm8x2:"snorm8x2",Snorm8x4:"snorm8x4",Uint16x2:"uint16x2",Uint16x4:"uint16x4",Sint16x2:"sint16x2",Sint16x4:"sint16x4",Unorm16x2:"unorm16x2",Unorm16x4:"unorm16x4",Snorm16x2:"snorm16x2",Snorm16x4:"snorm16x4",Float16x2:"float16x2",Float16x4:"float16x4",Float32:"float32",Float32x2:"float32x2",Float32x3:"float32x3",Float32x4:"float32x4",Uint32:"uint32",Uint32x2:"uint32x2",Uint32x3:"uint32x3",Uint32x4:"uint32x4",Sint32:"sint32",Sint32x2:"sint32x2",Sint32x3:"sint32x3",Sint32x4:"sint32x4"},k={R8Unorm:"r8unorm",R8Snorm:"r8snorm",R8Uint:"r8uint",R8Sint:"r8sint",R16Uint:"r16uint",R16Sint:"r16sint",R16Float:"r16float",RG8Unorm:"rg8unorm",RG8Snorm:"rg8snorm",RG8Uint:"rg8uint",RG8Sint:"rg8sint",R32Uint:"r32uint",R32Sint:"r32sint",R32Float:"r32float",RG16Uint:"rg16uint",RG16Sint:"rg16sint",RG16Float:"rg16float",RGBA8Unorm:"rgba8unorm",RGBA8UnormSRGB:"rgba8unorm-srgb",RGBA8Snorm:"rgba8snorm",RGBA8Uint:"rgba8uint",RGBA8Sint:"rgba8sint",BGRA8Unorm:"bgra8unorm",BGRA8UnormSRGB:"bgra8unorm-srgb",RGB9E5UFloat:"rgb9e5ufloat",RGB10A2Unorm:"rgb10a2unorm",RG11B10uFloat:"rgb10a2unorm",RG32Uint:"rg32uint",RG32Sint:"rg32sint",RG32Float:"rg32float",RGBA16Uint:"rgba16uint",RGBA16Sint:"rgba16sint",RGBA16Float:"rgba16float",RGBA32Uint:"rgba32uint",RGBA32Sint:"rgba32sint",RGBA32Float:"rgba32float",Stencil8:"stencil8",Depth16Unorm:"depth16unorm",Depth24Plus:"depth24plus",Depth24PlusStencil8:"depth24plus-stencil8",Depth32Float:"depth32float",Depth32FloatStencil8:"depth32float-stencil8",BC1RGBAUnorm:"bc1-rgba-unorm",BC1RGBAUnormSRGB:"bc1-rgba-unorm-srgb",BC2RGBAUnorm:"bc2-rgba-unorm",BC2RGBAUnormSRGB:"bc2-rgba-unorm-srgb",BC3RGBAUnorm:"bc3-rgba-unorm",BC3RGBAUnormSRGB:"bc3-rgba-unorm-srgb",BC4RUnorm:"bc4-r-unorm",BC4RSnorm:"bc4-r-snorm",BC5RGUnorm:"bc5-rg-unorm",BC5RGSnorm:"bc5-rg-snorm",BC6HRGBUFloat:"bc6h-rgb-ufloat",BC6HRGBFloat:"bc6h-rgb-float",BC7RGBAUnorm:"bc7-rgba-unorm",BC7RGBAUnormSRGB:"bc7-rgba-srgb",ETC2RGB8Unorm:"etc2-rgb8unorm",ETC2RGB8UnormSRGB:"etc2-rgb8unorm-srgb",ETC2RGB8A1Unorm:"etc2-rgb8a1unorm",ETC2RGB8A1UnormSRGB:"etc2-rgb8a1unorm-srgb",ETC2RGBA8Unorm:"etc2-rgba8unorm",ETC2RGBA8UnormSRGB:"etc2-rgba8unorm-srgb",EACR11Unorm:"eac-r11unorm",EACR11Snorm:"eac-r11snorm",EACRG11Unorm:"eac-rg11unorm",EACRG11Snorm:"eac-rg11snorm",ASTC4x4Unorm:"astc-4x4-unorm",ASTC4x4UnormSRGB:"astc-4x4-unorm-srgb",ASTC5x4Unorm:"astc-5x4-unorm",ASTC5x4UnormSRGB:"astc-5x4-unorm-srgb",ASTC5x5Unorm:"astc-5x5-unorm",ASTC5x5UnormSRGB:"astc-5x5-unorm-srgb",ASTC6x5Unorm:"astc-6x5-unorm",ASTC6x5UnormSRGB:"astc-6x5-unorm-srgb",ASTC6x6Unorm:"astc-6x6-unorm",ASTC6x6UnormSRGB:"astc-6x6-unorm-srgb",ASTC8x5Unorm:"astc-8x5-unorm",ASTC8x5UnormSRGB:"astc-8x5-unorm-srgb",ASTC8x6Unorm:"astc-8x6-unorm",ASTC8x6UnormSRGB:"astc-8x6-unorm-srgb",ASTC8x8Unorm:"astc-8x8-unorm",ASTC8x8UnormSRGB:"astc-8x8-unorm-srgb",ASTC10x5Unorm:"astc-10x5-unorm",ASTC10x5UnormSRGB:"astc-10x5-unorm-srgb",ASTC10x6Unorm:"astc-10x6-unorm",ASTC10x6UnormSRGB:"astc-10x6-unorm-srgb",ASTC10x8Unorm:"astc-10x8-unorm",ASTC10x8UnormSRGB:"astc-10x8-unorm-srgb",ASTC10x10Unorm:"astc-10x10-unorm",ASTC10x10UnormSRGB:"astc-10x10-unorm-srgb",ASTC12x10Unorm:"astc-12x10-unorm",ASTC12x10UnormSRGB:"astc-12x10-unorm-srgb",ASTC12x12Unorm:"astc-12x12-unorm",ASTC12x12UnormSRGB:"astc-12x12-unorm-srgb"},ta={ClampToEdge:"clamp-to-edge",Repeat:"repeat",MirrorRepeat:"mirror-repeat"},Fa={Linear:"linear",Nearest:"nearest"},Ye={Zero:"zero",One:"one",SrcColor:"src-color",OneMinusSrcColor:"one-minus-src-color",SrcAlpha:"src-alpha",OneMinusSrcAlpha:"one-minus-src-alpha",DstColor:"dst-color",OneMinusDstColor:"one-minus-dst-color",DstAlpha:"dst-alpha",OneMinusDstAlpha:"one-minus-dst-alpha",SrcAlphaSaturated:"src-alpha-saturated",BlendColor:"blend-color",OneMinusBlendColor:"one-minus-blend-color"},Jt={Add:"add",Subtract:"subtract",ReverseSubtract:"reverse-subtract",Min:"min",Max:"max"},nu={None:0,Red:1,Green:2,Blue:4,Alpha:8,All:15},ti={Keep:"keep",Zero:"zero",Replace:"replace",Invert:"invert",IncrementClamp:"increment-clamp",DecrementClamp:"decrement-clamp",IncrementWrap:"increment-wrap",DecrementWrap:"decrement-wrap"},co={UniformBuffer:"uniform-buffer",StorageBuffer:"storage-buffer",ReadonlyStorageBuffer:"readonly-storage-buffer",Sampler:"sampler",ComparisonSampler:"comparison-sampler",SampledTexture:"sampled-texture",MultisampledTexture:"multisampled-texture",ReadonlyStorageTexture:"readonly-storage-texture",WriteonlyStorageTexture:"writeonly-storage-texture"},iu={OneD:"1d",TwoD:"2d",ThreeD:"3d"},$r={OneD:"1d",TwoD:"2d",TwoDArray:"2d-array",Cube:"cube",CubeArray:"cube-array",ThreeD:"3d"},su={All:"all",StencilOnly:"stencil-only",DepthOnly:"depth-only"},ru={Vertex:"vertex",Instance:"instance"},Oa={DepthClipControl:"depth-clip-control",Depth32FloatStencil8:"depth32float-stencil8",TextureCompressionBC:"texture-compression-bc",TextureCompressionETC2:"texture-compression-etc2",TextureCompressionASTC:"texture-compression-astc",TimestampQuery:"timestamp-query",IndirectFirstInstance:"indirect-first-instance",ShaderF16:"shader-f16",RG11B10UFloat:"rg11b10ufloat-renderable",BGRA8UNormStorage:"bgra8unorm-storage",Float32Filterable:"float32-filterable"},ni=16,kv=211,Wv=212;class Hv{constructor(){this.nodes=null,this.animationLoop=null,this.requestId=null,this.isAnimating=!1,this.context=self}start(){if(this.isAnimating===!0||this.animationLoop===null||this.nodes===null)return;this.isAnimating=!0;const e=(t,n)=>{this.requestId=self.requestAnimationFrame(e),this.nodes.nodeFrame.update(),this.animationLoop(t,n)};this.requestId=self.requestAnimationFrame(e)}stop(){self.cancelAnimationFrame(this.requestId),this.isAnimating=!1}setAnimationLoop(e){this.animationLoop=e}setNodes(e){this.nodes=e}}const Xv=Hv;class zs extends WeakMap{constructor(){super()}get(e){if(Array.isArray(e)){let t=this;for(let n=0;n<e.length-1;n++)if(t=t.get(e[n]),t===void 0)return;return t.get(e[e.length-1])}else return super.get(e)}set(e,t){if(Array.isArray(e)){let n=this;for(let i=0;i<e.length-1;i++){const r=e[i];n.has(r)===!1&&n.set(r,new WeakMap),n=n.get(r)}return n.set(e[e.length-1],t)}else return super.set(e,t)}delete(e){if(Array.isArray(e)){let t=this;for(let n=0;n<e.length-1;n++)if(t=t.get(e[n]),t===void 0)return!1;return t.delete(e[e.length-1])}else return super.delete(e)}}class $v{constructor(e,t,n,i,r,o,a){this.renderer=e,this.nodes=t,this.object=n,this.material=i,this.scene=r,this.camera=o,this.lightsNode=a,this.geometry=n.geometry,this._materialVersion=-1,this._materialCacheKey=""}getCacheKey(){const{material:e,scene:t,lightsNode:n}=this;e.version!==this._materialVersion&&(this._materialVersion=e.version,this._materialCacheKey=e.customProgramCacheKey());const i=[];return i.push("material:"+this._materialCacheKey),i.push("nodes:"+this.nodes.getCacheKey(t,n)),"{"+i.join(",")+"}"}}class qv{constructor(e,t,n,i){this.renderer=e,this.nodes=t,this.geometries=n,this.info=i,this.cache=new zs}get(e,t,n,i,r){const o=[e,t,n,i,r];let a=this.cache.get(o);return a===void 0&&(a=new $v(this.renderer,this.nodes,e,t,n,i,r),this.cache.set(o,a)),a}remove(e,t,n,i,r){this.cache.delete([e,t,n,i,r])}dispose(){this.cache=new zs,this.updateMap=new WeakMap}}const Yv=qv;class jv{constructor(e){this.buffers=new WeakMap,this.device=e}get(e){return e.isInterleavedBufferAttribute&&(e=e.data),this.buffers.get(e)}remove(e){e.isInterleavedBufferAttribute&&(e=e.data);const t=this.buffers.get(e);t&&(this._destroyBuffers(t),this.buffers.delete(e))}update(e,t=!1,n=null){e.isInterleavedBufferAttribute&&(e=e.data);let i=this.buffers.get(e);i===void 0?(n===null&&(n=t===!0?GPUBufferUsage.INDEX:GPUBufferUsage.VERTEX),i=this._createBuffer(e,n),this.buffers.set(e,i)):n&&n!==i.usage?(this._destroyBuffers(i),i=this._createBuffer(e,n),this.buffers.set(e,i)):i.version<e.version&&(this._writeBuffer(i.buffer,e),i.version=e.version)}async getArrayBuffer(e){const t=this.get(e),n=this.device,i=t.buffer,r=i.size;let o=t.readBuffer,a=!0;o===null&&(o=n.createBuffer({label:e.name,size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=!1,t.readBuffer=o);const c=n.createCommandEncoder({});c.copyBufferToBuffer(i,0,o,0,r),a&&o.unmap();const l=c.finish();return n.queue.submit([l]),await o.mapAsync(GPUMapMode.READ),o.getMappedRange()}_createBuffer(e,t){const n=e.array,i=n.byteLength+(4-n.byteLength%4)%4,r=this.device.createBuffer({label:e.name,size:i,usage:t|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new n.constructor(r.getMappedRange()).set(n),r.unmap(),e.onUploadCallback(),{version:e.version,buffer:r,readBuffer:null,usage:t}}_writeBuffer(e,t){const n=this.device,i=t.array,r=t.updateRange;r.count===-1?n.queue.writeBuffer(e,0,i,0):(n.queue.writeBuffer(e,0,i,r.offset*i.BYTES_PER_ELEMENT,r.count*i.BYTES_PER_ELEMENT),r.count=-1)}_destroyBuffers({buffer:e,readBuffer:t}){e.destroy(),t!==null&&t.destroy()}}const Kv=jv;function Zv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xh(s){return s.index!==null?s.index.version:s.attributes.position.version}function ou(s){const e=[],t=s.index,n=s.attributes.position;if(t!==null){const r=t.array;for(let o=0,a=r.length;o<a;o+=3){const c=r[o+0],l=r[o+1],u=r[o+2];e.push(c,l,l,u,u,c)}}else{const r=n.array;for(let o=0,a=r.length/3-1;o<a;o+=3){const c=o+0,l=o+1,u=o+2;e.push(c,l,l,u,u,c)}}const i=new(Zv(e)?tc:ec)(e,1);return i.version=xh(s),i}class Jv{constructor(e,t,n){this.attributes=e,this.properties=t,this.info=n,this.wireframes=new WeakMap,this.geometryFrame=new WeakMap}has(e){const t=e.geometry;return this.properties.has(t)&&this.properties.get(t).initialized===!0}update(e){this.has(e)===!1&&this.initGeometry(e),this.updateFrameAttributes(e)}initGeometry(e){const t=e.geometry,n=this.properties.get(t);n.initialized=!0;const i=()=>{this.info.memory.geometries--;const r=t.index,o=t.attributes;r!==null&&this.attributes.remove(r);for(const c in o)this.attributes.remove(o[c]);const a=this.wireframes.get(t);a!==void 0&&this.attributes.remove(a),t.removeEventListener("dispose",i)};this.info.memory.geometries++,t.addEventListener("dispose",i)}updateFrameAttributes(e){const t=this.info.render.frame,n=e.geometry;this.geometryFrame.get(n)!==t&&(this.updateAttributes(e),this.geometryFrame.set(n,t))}updateAttributes(e){const n=e.geometry.attributes;for(const r in n)this.attributes.update(n[r]);const i=this.getIndex(e);i!==null&&this.attributes.update(i,!0)}getIndex(e){const{geometry:t,material:n}=e;let i=t.index;if(n.wireframe===!0){const r=this.wireframes;let o=r.get(t);o===void 0?(o=ou(t),r.set(t,o)):o.version!==xh(t)&&(this.attributes.remove(o),o=ou(t),r.set(t,o)),i=o}return i}}const Qv=Jv;class e0{constructor(){this.autoReset=!0,this.render={frame:0,drawCalls:0,triangles:0,points:0,lines:0},this.memory={geometries:0,textures:0}}update(e,t,n){this.render.drawCalls++,e.isMesh||e.isSprite?this.render.triangles+=n*(t/3):e.isPoints?this.render.points+=n*t:e.isLineSegments?this.render.lines+=n*(t/2):e.isLine?this.render.lines+=n*(t-1):console.error("THREE.WebGPUInfo: Unknown object type.")}reset(){this.render.frame++,this.render.drawCalls=0,this.render.triangles=0,this.render.points=0,this.render.lines=0}dispose(){this.reset(),this.render.frame=0,this.memory.geometries=0,this.memory.textures=0}}const t0=e0;class n0{constructor(){this.properties=new WeakMap}get(e){let t=this.properties.get(e);return t===void 0&&(t={},this.properties.set(e,t)),t}remove(e){this.properties.delete(e)}has(e){return this.properties.has(e)}dispose(){this.properties=new WeakMap}}const i0=n0;class s0{constructor(e,t){this.cacheKey=null,this.shaderAttributes=null,this.stageVertex=null,this.stageFragment=null,this.usedTimes=0,this._device=e,this._utils=t}init(e,t,n,i,r){const{object:o,material:a,geometry:c}=i,l=this._getShaderAttributes(r,c),u=[];for(const A of l){const E=A.name,R=c.getAttribute(E),N=R!==void 0&&R.isInstancedBufferAttribute?ru.Instance:ru.Vertex;u.push({arrayStride:A.arrayStride,attributes:[{shaderLocation:A.slot,offset:A.offset,format:A.format}],stepMode:N})}this.cacheKey=e,this.shaderAttributes=l,this.stageVertex=t,this.stageFragment=n;let h={},d={};a.transparent===!0&&a.blending!==Hn&&(h=this._getAlphaBlend(a),d=this._getColorBlend(a));let p={};a.stencilWrite===!0&&(p={compare:this._getStencilCompare(a),failOp:this._getStencilOperation(a.stencilFail),depthFailOp:this._getStencilOperation(a.stencilZFail),passOp:this._getStencilOperation(a.stencilZPass)});const g=this._getPrimitiveState(o,c,a),_=this._getColorWriteMask(a),m=this._getDepthCompare(a),f=this._utils.getCurrentColorFormat(),T=this._utils.getCurrentDepthStencilFormat(),S=this._utils.getSampleCount();this.pipeline=this._device.createRenderPipeline({vertex:Object.assign({},t.stage,{buffers:u}),fragment:Object.assign({},n.stage,{targets:[{format:f,blend:{alpha:h,color:d},writeMask:_}]}),primitive:g,depthStencil:{format:T,depthWriteEnabled:a.depthWrite,depthCompare:m,stencilFront:p,stencilBack:{},stencilReadMask:a.stencilFuncMask,stencilWriteMask:a.stencilWriteMask},multisample:{count:S},layout:"auto"})}_getAlphaBlend(e){const t=e.blending,n=e.premultipliedAlpha;let i;switch(t){case ri:n===!1&&(i={srcFactor:Ye.One,dstFactor:Ye.OneMinusSrcAlpha,operation:Jt.Add});break;case Ur:i={srcFactor:Ye.Zero,dstFactor:Ye.One,operation:Jt.Add};break;case Ir:n===!0&&(i={srcFactor:Ye.OneMinusSrcColor,dstFactor:Ye.OneMinusSrcAlpha,operation:Jt.Add});break;case Dr:n===!0&&(i={srcFactor:Ye.Zero,dstFactor:Ye.SrcAlpha,operation:Jt.Add});break;case la:const r=e.blendSrcAlpha,o=e.blendDstAlpha,a=e.blendEquationAlpha;r!==null&&o!==null&&a!==null&&(i={srcFactor:this._getBlendFactor(r),dstFactor:this._getBlendFactor(o),operation:this._getBlendOperation(a)});break;default:console.error("THREE.WebGPURenderer: Blending not supported.",t)}return i}_getBlendFactor(e){let t;switch(e){case Eu:t=Ye.Zero;break;case bu:t=Ye.One;break;case wu:t=Ye.SrcColor;break;case Au:t=Ye.OneMinusSrcColor;break;case Xa:t=Ye.SrcAlpha;break;case $a:t=Ye.OneMinusSrcAlpha;break;case Pu:t=Ye.DstColor;break;case Lu:t=Ye.OneMinusDstColor;break;case Ru:t=Ye.DstAlpha;break;case Cu:t=Ye.OneMinusDstAlpha;break;case Nu:t=Ye.SrcAlphaSaturated;break;case kv:t=Ye.BlendColor;break;case Wv:t=Ye.OneMinusBlendColor;break;default:console.error("THREE.WebGPURenderer: Blend factor not supported.",e)}return t}_getBlendOperation(e){let t;switch(e){case yi:t=Jt.Add;break;case yu:t=Jt.Subtract;break;case Tu:t=Jt.ReverseSubtract;break;case ua:t=Jt.Min;break;case ha:t=Jt.Max;break;default:console.error("THREE.WebGPURenderer: Blend equation not supported.",e)}return t}_getColorBlend(e){const t=e.blending,n=e.premultipliedAlpha,i={srcFactor:null,dstFactor:null,operation:null};switch(t){case ri:i.srcFactor=n===!0?Ye.One:Ye.SrcAlpha,i.dstFactor=Ye.OneMinusSrcAlpha,i.operation=Jt.Add;break;case Ur:i.srcFactor=n===!0?Ye.One:Ye.SrcAlpha,i.dstFactor=Ye.One,i.operation=Jt.Add;break;case Ir:i.srcFactor=Ye.Zero,i.dstFactor=n===!0?Ye.Zero:Ye.OneMinusSrcColor,i.operation=Jt.Add;break;case Dr:i.srcFactor=Ye.Zero,i.dstFactor=Ye.SrcColor,i.operation=Jt.Add;break;case la:i.srcFactor=this._getBlendFactor(e.blendSrc),i.dstFactor=this._getBlendFactor(e.blendDst),i.operation=this._getBlendOperation(e.blendEquation);break;default:console.error("THREE.WebGPURenderer: Blending not supported.",t)}return i}_getColorWriteMask(e){return e.colorWrite===!0?nu.All:nu.None}_getDepthCompare(e){let t;if(e.depthTest===!1)t=Lt.Always;else{const n=e.depthFunc;switch(n){case Uu:t=Lt.Never;break;case Iu:t=Lt.Always;break;case Du:t=Lt.Less;break;case Fr:t=Lt.LessEqual;break;case Fu:t=Lt.Equal;break;case Ou:t=Lt.GreaterEqual;break;case Bu:t=Lt.Greater;break;case Gu:t=Lt.NotEqual;break;default:console.error("THREE.WebGPURenderer: Invalid depth function.",n)}}return t}_getPrimitiveState(e,t,n){const i={};if(i.topology=this._utils.getPrimitiveTopology(e,n),e.isLine===!0&&e.isLineSegments!==!0){const r=t.index?t.index.count:t.attributes.position.count;i.stripIndexFormat=r>65535?Gs.Uint32:Gs.Uint16}switch(n.side){case qn:i.frontFace=Qo.CW,i.cullMode=ea.Front;break;case Bt:i.frontFace=Qo.CW,i.cullMode=ea.Back;break;case Rn:i.frontFace=Qo.CW,i.cullMode=ea.None;break;default:console.error("THREE.WebGPURenderer: Unknown Material.side value.",n.side);break}return i}_getStencilCompare(e){let t;const n=e.stencilFunc;switch(n){case Pf:t=Lt.Never;break;case ju:t=Lt.Always;break;case Lf:t=Lt.Less;break;case Uf:t=Lt.LessEqual;break;case Nf:t=Lt.Equal;break;case Ff:t=Lt.GreaterEqual;break;case If:t=Lt.Greater;break;case Df:t=Lt.NotEqual;break;default:console.error("THREE.WebGPURenderer: Invalid stencil function.",n)}return t}_getStencilOperation(e){let t;switch(e){case Pr:t=ti.Keep;break;case Tf:t=ti.Zero;break;case Ef:t=ti.Replace;break;case Cf:t=ti.Invert;break;case bf:t=ti.IncrementClamp;break;case wf:t=ti.DecrementClamp;break;case Af:t=ti.IncrementWrap;break;case Rf:t=ti.DecrementWrap;break;default:console.error("THREE.WebGPURenderer: Invalid stencil operation.",t)}return t}_getVertexFormat(e,t){if(e==="float")return ct.Float32;if(e==="vec2")return t===2?ct.Float16x2:ct.Float32x2;if(e==="vec3")return ct.Float32x3;if(e==="vec4")return t===2?ct.Float16x4:ct.Float32x4;if(e==="int")return ct.Sint32;if(e==="ivec2")return t===1?ct.Sint8x2:t===2?ct.Sint16x2:ct.Sint32x2;if(e==="ivec3")return ct.Sint32x3;if(e==="ivec4")return t===1?ct.Sint8x4:t===2?ct.Sint16x4:ct.Sint32x4;if(e==="uint")return ct.Uint32;if(e==="uvec2")return t===1?ct.Uint8x2:t===2?ct.Uint16x2:ct.Uint32x2;if(e==="uvec3")return ct.Uint32x3;if(e==="uvec4")return t===1?ct.Uint8x4:t===2?ct.Uint16x4:ct.Uint32x4;console.error("THREE.WebGPURenderer: Shader variable type not supported yet.",e)}_getShaderAttributes(e,t){const n=e.attributes,i=[];for(let r=0;r<n.length;r++){const o=n[r],a=o.name,c=o.type,l=t.getAttribute(a),u=l.array.BYTES_PER_ELEMENT,h=this._getVertexFormat(c,u);let d=l.itemSize*u,p=0;l.isInterleavedBufferAttribute===!0&&(d=l.data.stride*u,p=l.offset*u),i.push({name:a,arrayStride:d,offset:p,format:h,slot:r})}return i}}const r0=s0;let o0=0;class a0{constructor(e,t,n){this.id=o0++,this.code=t,this.type=n,this.usedTimes=0,this.stage={module:e.createShaderModule({code:t,label:n}),entryPoint:"main"}}}const Ba=a0;class c0{constructor(e,t,n){this.device=e,this.nodes=t,this.utils=n,this.bindings=null,this.pipelines=[],this.cache=new WeakMap,this.stages={vertex:new Map,fragment:new Map}}get(e){const t=this.device,n=this._getCache(e);let i=n.currentPipeline;if(this._needsUpdate(e)){this._releasePipeline(e);const r=this.nodes.get(e);let o=this.stages.vertex.get(r.vertexShader);o===void 0&&(o=new Ba(t,r.vertexShader,"vertex"),this.stages.vertex.set(r.vertexShader,o));let a=this.stages.fragment.get(r.fragmentShader);a===void 0&&(a=new Ba(t,r.fragmentShader,"fragment"),this.stages.fragment.set(r.fragmentShader,a)),i=this._acquirePipeline(o,a,e),n.currentPipeline=i,i.usedTimes++,o.usedTimes++,a.usedTimes++}return i}remove(e){this._releasePipeline(e)}dispose(){this.pipelines=[],this.cache=new WeakMap,this.shaderModules={vertex:new Map,fragment:new Map}}_acquirePipeline(e,t,n){let i;const r=this.pipelines,o=this._computeCacheKey(e,t,n);for(let a=0,c=r.length;a<c;a++){const l=r[a];if(l.cacheKey===o){i=l;break}}return i===void 0&&(i=new r0(this.device,this.utils),i.init(o,e,t,n,this.nodes.get(n)),r.push(i)),i}_computeCacheKey(e,t,n){const{object:i,material:r}=n,o=this.utils;return[e.id,t.id,r.transparent,r.blending,r.premultipliedAlpha,r.blendSrc,r.blendDst,r.blendEquation,r.blendSrcAlpha,r.blendDstAlpha,r.blendEquationAlpha,r.colorWrite,r.depthWrite,r.depthTest,r.depthFunc,r.stencilWrite,r.stencilFunc,r.stencilFail,r.stencilZFail,r.stencilZPass,r.stencilFuncMask,r.stencilWriteMask,r.side,o.getSampleCount(),o.getCurrentColorSpace(),o.getCurrentColorFormat(),o.getCurrentDepthStencilFormat(),o.getPrimitiveTopology(i,r)].join()}_getCache(e){let t=this.cache.get(e);return t===void 0&&(t={},this.cache.set(e,t)),t}_releasePipeline(e){const t=this._getCache(e),n=t.currentPipeline;if(delete t.currentPipeline,this.bindings.remove(e),n&&--n.usedTimes===0){const i=this.pipelines,r=i.indexOf(n);i[r]=i[i.length-1],i.pop(),this._releaseStage(n.stageVertex),this._releaseStage(n.stageFragment)}}_releaseStage(e){if(--e.usedTimes===0){const t=e.code,n=e.type;this.stages[n].delete(t)}}_needsUpdate(e){const t=this._getCache(e),n=e.material;let i=!1;t.currentPipeline===void 0&&(i=!0),(t.material!==n||t.materialVersion!==n.version||t.transparent!==n.transparent||t.blending!==n.blending||t.premultipliedAlpha!==n.premultipliedAlpha||t.blendSrc!==n.blendSrc||t.blendDst!==n.blendDst||t.blendEquation!==n.blendEquation||t.blendSrcAlpha!==n.blendSrcAlpha||t.blendDstAlpha!==n.blendDstAlpha||t.blendEquationAlpha!==n.blendEquationAlpha||t.colorWrite!==n.colorWrite||t.depthWrite!==n.depthWrite||t.depthTest!==n.depthTest||t.depthFunc!==n.depthFunc||t.stencilWrite!==n.stencilWrite||t.stencilFunc!==n.stencilFunc||t.stencilFail!==n.stencilFail||t.stencilZFail!==n.stencilZFail||t.stencilZPass!==n.stencilZPass||t.stencilFuncMask!==n.stencilFuncMask||t.stencilWriteMask!==n.stencilWriteMask||t.side!==n.side)&&(t.material=n,t.materialVersion=n.version,t.transparent=n.transparent,t.blending=n.blending,t.premultipliedAlpha=n.premultipliedAlpha,t.blendSrc=n.blendSrc,t.blendDst=n.blendDst,t.blendEquation=n.blendEquation,t.blendSrcAlpha=n.blendSrcAlpha,t.blendDstAlpha=n.blendDstAlpha,t.blendEquationAlpha=n.blendEquationAlpha,t.colorWrite=n.colorWrite,t.depthWrite=n.depthWrite,t.depthTest=n.depthTest,t.depthFunc=n.depthFunc,t.stencilWrite=n.stencilWrite,t.stencilFunc=n.stencilFunc,t.stencilFail=n.stencilFail,t.stencilZFail=n.stencilZFail,t.stencilZPass=n.stencilZPass,t.stencilFuncMask=n.stencilFuncMask,t.stencilWriteMask=n.stencilWriteMask,t.side=n.side,i=!0);const r=this.utils,o=r.getSampleCount(),a=r.getCurrentColorSpace(),c=r.getCurrentColorFormat(),l=r.getCurrentDepthStencilFormat();return(t.sampleCount!==o||t.colorSpace!==a||t.colorFormat!==c||t.depthStencilFormat!==l)&&(t.sampleCount=o,t.colorSpace=a,t.colorFormat=c,t.depthStencilFormat=l,i=!0),i}}const l0=c0;class u0{constructor(e,t){this.device=e,this.nodes=t,this.pipelines=new WeakMap,this.stages={compute:new WeakMap}}has(e){return this.pipelines.get(e)!==void 0}get(e){let t=this.pipelines.get(e);if(t===void 0){const n=this.device,r=this.nodes.getForCompute(e).computeShader,o={computeShader:r};let a=this.stages.compute.get(o);a===void 0&&(a=new Ba(n,r,"compute"),this.stages.compute.set(o,a)),t=n.createComputePipeline({compute:a.stage,layout:"auto"}),this.pipelines.set(e,t)}return t}dispose(){this.pipelines=new WeakMap,this.stages={compute:new WeakMap}}}const h0=u0;class d0{constructor(e,t,n,i,r,o,a,c){this.device=e,this.info=t,this.properties=n,this.textures=i,this.renderPipelines=r,this.computePipelines=o,this.attributes=a,this.nodes=c,this.uniformsData=new WeakMap,this.updateMap=new WeakMap}get(e){let t=this.uniformsData.get(e);if(t===void 0){const i=this.nodes.get(e).getBindings(),o=this.renderPipelines.get(e).pipeline.getBindGroupLayout(0),a=this._createBindGroup(i,o);t={layout:o,group:a,bindings:i},this.uniformsData.set(e,t)}return t}getForCompute(e){let t=this.uniformsData.get(e);if(t===void 0){const i=this.nodes.getForCompute(e).getBindings(),o=this.computePipelines.get(e).getBindGroupLayout(0),a=this._createBindGroup(i,o);t={layout:o,group:a,bindings:i},this.uniformsData.set(e,t)}return t}remove(e){this.uniformsData.delete(e)}update(e){const t=this.textures,n=this.get(e),i=n.bindings,r=this.updateMap,o=this.info.render.frame;let a=!1;for(const c of i){const l=c.isShared,u=r.get(c)===o;if(!(l&&u)){if(c.isUniformBuffer){const h=c.getBuffer();if(c.update()===!0){const p=c.bufferGPU;this.device.queue.writeBuffer(p,0,h,0)}}else if(c.isStorageBuffer){const h=c.attribute;this.attributes.update(h,!1,c.usage)}else if(c.isSampler){const h=c.getTexture();t.updateSampler(h);const d=t.getSampler(h);c.samplerGPU!==d&&(c.samplerGPU=d,a=!0)}else if(c.isSampledTexture){const h=c.getTexture(),d=t.updateTexture(h),p=t.getTextureGPU(h);(p!==void 0&&c.textureGPU!==p||d===!0)&&(c.textureGPU=p,a=!0)}r.set(c,o)}}a===!0&&(n.group=this._createBindGroup(i,n.layout))}dispose(){this.uniformsData=new WeakMap,this.updateMap=new WeakMap}_createBindGroup(e,t){let n=0;const i=[];for(const r of e){if(r.isUniformBuffer){if(r.bufferGPU===null){const o=r.getByteLength();r.bufferGPU=this.device.createBuffer({label:"bindingBuffer",size:o,usage:r.usage})}i.push({binding:n,resource:{buffer:r.bufferGPU}})}else if(r.isStorageBuffer){if(r.bufferGPU===null){const o=r.attribute;this.attributes.update(o,!1,r.usage),r.bufferGPU=this.attributes.get(o).buffer}i.push({binding:n,resource:{buffer:r.bufferGPU}})}else if(r.isSampler)r.samplerGPU===null&&(r.samplerGPU=this.textures.getDefaultSampler()),i.push({binding:n,resource:r.samplerGPU});else if(r.isSampledTexture){r.textureGPU===null&&(r.isSampledCubeTexture?r.textureGPU=this.textures.getDefaultCubeTexture():r.texture.isVideoTexture?r.textureGPU=this.textures.getDefaultVideoTexture():r.texture.isDepthTexture?r.textureGPU=this.textures.getDefaultDepthTexture():r.textureGPU=this.textures.getDefaultTexture());const o=r.textureGPU instanceof GPUTexture?r.textureGPU.createView({aspect:r.aspect,dimension:r.dimension}):r.textureGPU;i.push({binding:n,resource:o})}n++}return this.device.createBindGroup({layout:t,entries:i})}}const f0=d0,au={VERTEX:"vertex",FRAGMENT:"fragment"},wt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},p0=["fragment","vertex"],m0=["construct","analyze","generate"],g0=[...p0,"compute"],vh=["x","y","z","w"];function hc(s){let e="{";s.isNode===!0&&(e+=`uuid:"${s.uuid}"`);for(const{property:t,index:n,childNode:i}of qr(s)){let r=hc(i);r.includes(",")||(r=r.slice(r.indexOf('"'),r.indexOf("}"))),e+=`,${t}${n!==void 0?"/"+n:""}:${r}`}return e+="}",e}function*qr(s,e=!1){for(const t in s){if(t.startsWith("_")===!0)continue;const n=s[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}}}function Yr(s){if(s==null)return null;const e=typeof s;return s.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function Ga(s,...e){const t=s?s.slice(-4):void 0;return s==="color"?new Oe(...e):t==="vec2"?new Ue(...e):t==="vec3"?new w(...e):t==="vec4"?new qe(...e):t==="mat3"?new ze(...e):t==="mat4"?new Ie(...e):s==="bool"?e[0]||!1:s==="float"||s==="int"||s==="uint"?e[0]||0:s==="string"?e[0]||"":s==="ArrayBuffer"?x0(e[0]):null}function _0(s){let e="";const t=new Uint8Array(s);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function x0(s){return Uint8Array.from(atob(s),e=>e.charCodeAt(0)).buffer}const cu=new Map;let v0=0;class S0{constructor(e=null){this.isNode=!0,this.nodeType=e,this.updateType=wt.NONE,this.updateBeforeType=wt.NONE,this.uuid=Za.generateUUID(),Object.defineProperty(this,"id",{value:v0++})}get type(){return this.constructor.name}isGlobal(){return!1}*getChildren(){const e=this;for(const{property:t,index:n,childNode:i}of qr(this))n!==void 0?yield{childNode:i,replaceNode(r){e[t][n]=r}}:yield{childNode:i,replaceNode(r){e[t]=r}}}traverse(e,t=null){e(this,t);for(const{childNode:n,replaceNode:i}of this.getChildren())n.traverse(e,i)}getCacheKey(){return hc(this)}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(){return this.nodeType}getReference(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}construct(e){const t=e.getNodeProperties(this);for(const{childNode:n}of this.getChildren())t["_node"+n.id]=n;return null}analyze(e){const t=e.getDataFromNode(this);if(t.dependenciesCount=t.dependenciesCount===void 0?1:t.dependenciesCount+1,t.dependenciesCount===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getReference(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const r=e.getBuildStage();if(r==="construct"){const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){o.initialized=!0,o.outputNode=this.construct(e);for(const a of Object.values(o))a&&a.isNode===!0&&a.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return qr(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of t)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const r of e.inputNodes[n])i.push(t[r]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];i[r]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.5,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}const He=S0;function ge(s){if(typeof s!="function"||!s.name)throw new Error(`Node class ${s.name} is not a class`);if(cu.has(s.name))throw new Error(`Redefinition of node class ${s.name}`);cu.set(s.name,s)}class Sh extends He{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Yr(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Yr(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=_0(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Ga(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}const Mh=Sh;ge(Sh);class yh extends He{constructor(e,t){super(),this.node=e,this.indexNode=t}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}const Th=yh;ge(yh);class Eh extends He{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),r=n.build(e,i);return e.format(r,i,t)}}const bh=Eh;ge(Eh);class wh extends He{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).dependenciesCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,i,t)}}return super.build(e,t)}}const xs=wh;ge(wh);class Ah extends xs{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,r=[];for(const a of i){const c=a.build(e);r.push(c)}const o=`${e.getType(n)}( ${r.join(", ")} )`;return e.format(o,n,t)}}const M0=Ah;ge(Ah);const y0=vh.join("");class Rh extends He{constructor(e,t="x"){super(),this.node=e,this.components=t}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(vh.indexOf(t)+1,e);return e}getNodeType(e){return e.getTypeFromLength(this.components.length)}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength()));const c=n.build(e,o);this.components.length===i&&this.components===y0.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}const lu=Rh;ge(Rh);class Ch extends Mh{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.getConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}const rn=Ch;ge(Ch);const es=new Map;function j(s,e){if(es.has(s))throw new Error(`Redefinition of node element ${s}`);if(typeof e!="function")throw new Error(`Node element ${s} is not a function`);es.set(s,e)}const Ph={construct(s,e){const t=e.shift();return s(Uh(t),...e)},get:function(s,e,t){if(typeof e=="string"&&s[e]===void 0)if(es.has(e)){const n=es.get(e);return(...i)=>n(t,...i)}else if(e.endsWith("Assign")&&es.has(e.slice(0,e.length-6))){const n=es.get(e.slice(0,e.length-6));return(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=e.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),We(new lu(s,e));if(e==="width"||e==="height")return We(new lu(s,e==="width"?"x":"y"));if(/^\d+$/.test(e)===!0)return We(new Th(s,new rn(Number(e),"uint")))}return s[e]}},na=new WeakMap,T0=function(s){const e=Yr(s);if(e==="node"){let t=na.get(s);return t===void 0&&(t=new Proxy(s,Ph),na.set(s,t),na.set(t,t)),t}else{if(e==="float"||e==="boolean")return We(Nh(s));if(e&&e!=="string")return We(new rn(s))}return s},E0=function(s){for(const e in s)s[e]=We(s[e]);return s},b0=function(s){const e=s.length;for(let t=0;t<e;t++)s[t]=We(s[t]);return s},w0=function(s,e=null,t=null,n=null){const i=r=>We(n!==null?Object.assign(r,n):r);return e===null?(...r)=>i(new s(...Nr(r))):t!==null?(t=We(t),(...r)=>i(new s(e,...Nr(r),t))):(...r)=>i(new s(e,...Nr(r)))},A0=function(s,...e){return We(new s(...Nr(e)))};class R0 extends He{constructor(e){super(),this._jsFunc=e}call(e,t,n){return e=Uh(e),We(this._jsFunc(e,t,n))}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}construct(e){return e.addStack(),e.stack.outputNode=We(this._jsFunc(e.stack,e)),e.removeStack()}}const C0=[!1,!0],P0=[0,1,2,3],L0=[-1,-2],Lh=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],dc=new Map;for(const s of C0)dc.set(s,new rn(s));const fc=new Map;for(const s of P0)fc.set(s,new rn(s,"uint"));const pc=new Map([...fc].map(s=>new rn(s.value,"int")));for(const s of L0)pc.set(s,new rn(s,"int"));const lo=new Map([...pc].map(s=>new rn(s.value)));for(const s of Lh)lo.set(s,new rn(s));for(const s of Lh)lo.set(-s,new rn(-s));const uo={bool:dc,uint:fc,ints:pc,float:lo},uu=new Map([...dc,...lo]),Nh=s=>uu.has(s)?uu.get(s):s.isNode===!0?s:new rn(s),rt=function(s,e=null){return(...t)=>{if(t.length===0)return We(new rn(Ga(s),s));{if(s==="color"&&t[0].isNode!==!0&&(t=[Ga(s,...t)]),t.length===1&&e!==null&&e.has(t[0]))return e.get(t[0]);const n=t.map(Nh);return n.length===1?We(n[0].nodeType===s||Yr(n[0].value)===s?n[0]:new bh(n[0],s)):We(new M0(n,s))}}},Hs=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function Yn(s){return new Proxy(new R0(s),Ph)}const We=s=>T0(s),Uh=s=>new E0(s),Nr=s=>new b0(s),te=(...s)=>new w0(...s),Me=(...s)=>new A0(...s),ia=(...s)=>new Yn(...s);ge(Yn);const N0=new rt("color"),li=new rt("float",uo.float),U0=new rt("int",uo.int),I0=new rt("uint",uo.uint),D0=new rt("bool",uo.bool),as=new rt("vec2"),F0=new rt("ivec2"),O0=new rt("uvec2"),B0=new rt("bvec2"),Ut=new rt("vec3"),G0=new rt("ivec3"),z0=new rt("uvec3"),V0=new rt("bvec3"),Ei=new rt("vec4"),k0=new rt("ivec4"),W0=new rt("uvec4"),H0=new rt("bvec4"),Vs=new rt("mat3"),X0=new rt("imat3"),$0=new rt("umat3"),q0=new rt("bmat3"),Y0=new rt("mat4"),j0=new rt("imat4"),K0=new rt("umat4"),Z0=new rt("bmat4"),J0=(s="")=>We(new rn(s,"string")),Q0=s=>We(new rn(s,"ArrayBuffer"));j("color",N0);j("float",li);j("int",U0);j("uint",I0);j("bool",D0);j("vec2",as);j("ivec2",F0);j("uvec2",O0);j("bvec2",B0);j("vec3",Ut);j("ivec3",G0);j("uvec3",z0);j("bvec3",V0);j("vec4",Ei);j("ivec4",k0);j("uvec4",W0);j("bvec4",H0);j("mat3",Vs);j("imat3",X0);j("umat3",$0);j("bmat3",q0);j("mat4",Y0);j("imat4",j0);j("umat4",K0);j("bmat4",Z0);j("string",J0);j("arrayBuffer",Q0);const eS=te(Th),tS=(s,e)=>We(new bh(We(s),e));j("element",eS);j("convert",tS);class mc extends Mh{constructor(e,t=null){super(e,t),this.isUniformNode=!0}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let r=e.getNodeFromHash(i);r===void 0&&(e.setHashNode(this,i),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,e.shaderStage,o),c=e.getPropertyName(a);return e.format(c,n,t)}}const ho=mc,ui=(s,e)=>{const t=Hs(e||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return We(new mc(n,t))};ge(mc);class Ih extends He{constructor(e,t=null){super(),this.node=e,this.name=t}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),r=e.getVaryingFromNode(this,i);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment"),t!==null&&(r.name=t);const o=e.getPropertyName(r,au.VERTEX);return e.flowNodeFromShaderStage(au.VERTEX,n,i,o),e.getPropertyName(r)}}const Yt=te(Ih);j("varying",Yt);ge(Ih);class gc extends He{constructor(e,t=null){super(t),this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){const t=this.getAttributeName(e);let n=super.getNodeType(e);if(n===null)if(e.hasGeometryAttribute(t)){const i=e.geometry.getAttribute(t);n=e.getTypeFromLength(i.itemSize)}else n="float";return n}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.getAttribute(t,n);return e.isShaderStage("vertex")?r.name:Yt(this).build(e,r.type)}else return console.warn(`Attribute "${t}" not found.`),e.getConst(n)}}const cs=(s,e)=>We(new gc(s,e));ge(gc);class Dh extends He{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e,t){const n=this.callNode.build(e,"void");return n!==""&&e.addLineFlowCode(n),this.outputNode.build(e,t)}}const Fh=te(Dh);j("bypass",Fh);ge(Dh);let nS=0;class iS{constructor(){this.id=nS++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}const Oh=iS;class Bh extends He{constructor(e,t=new Oh){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache();e.setCache(this.cache);const i=this.node.build(e,...t);return e.setCache(n),i}}const Gh=te(Bh);j("cache",Gh);ge(Bh);class zh extends He{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}construct(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const Ai=te(zh);j("context",Ai);ge(zh);class Vh extends He{constructor(){super("uint"),this.isInstanceIndexNode=!0}generate(e){return e.getInstanceIndex()}}const sS=Me(Vh);ge(Vh);class rS{constructor(e,t){this.isNodeAttribute=!0,this.name=e,this.type=t}}const oS=rS;class aS{constructor(e,t,n,i=void 0){this.isNodeUniform=!0,this.name=e,this.type=t,this.node=n,this.needsUpdate=i}get value(){return this.node.value}set value(e){this.node.value=e}}const cS=aS;class lS{constructor(e,t){this.isNodeVar=!0,this.name=e,this.type=t}}const kh=lS;class uS extends kh{constructor(e,t){super(e,t),this.needsInterpolation=!1,this.isNodeVarying=!0}}const hS=uS;class dS{constructor(e,t,n=""){this.name=e,this.type=t,this.code=n,Object.defineProperty(this,"isNodeCode",{value:!0})}}const fS=dS;class pS{constructor(){this.keywords=[],this.nodes=[],this.keywordsCallback={}}getNode(e){let t=this.nodes[e];return t===void 0&&this.keywordsCallback[e]!==void 0&&(t=this.keywordsCallback[e](e),this.nodes[e]=t),t}addKeyword(e,t){return this.keywords.push(e),this.keywordsCallback[e]=t,this}parse(e){const t=this.keywords,n=new RegExp(`\\b${t.join("\\b|\\b")}\\b`,"g"),i=e.match(n),r=[];if(i!==null)for(const o of i){const a=this.getNode(o);a!==void 0&&r.indexOf(a)===-1&&r.push(a)}return r}include(e,t){const n=this.parse(t);for(const i of n)i.build(e)}}const mS=pS;class lt extends xs{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new lt(e,r,i[o]);n=r}this.aNode=t,this.bNode=n}hasDependencies(e){return this.op!=="="?super.hasDependencies(e):!1}getNodeType(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(e),a=r.getNodeType(e);if(o==="void"||a==="void")return"void";if(n==="="||n==="%")return o;if(n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=r.getNodeType(e),n==="="?c=a:n==="<"||n===">"||n==="<="||n===">="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=r.build(e,c),h=e.getTypeLength(t);if(t!=="void")return n==="="?(e.addLineFlowCode(`${l} ${this.op} ${u}`),l):n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${this.op} ${u} )`,o,t);if(a!=="void")return e.format(`${l} ${this.op} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const jr=te(lt,"+"),za=te(lt,"-"),Wh=te(lt,"*"),Hh=te(lt,"/"),gS=te(lt,"%"),_S=te(lt,"=="),Xh=te(lt,"="),xS=te(lt,"<"),vS=te(lt,">"),SS=te(lt,"<="),MS=te(lt,">="),yS=te(lt,"&&"),TS=te(lt,"||"),ES=te(lt,"^^"),bS=te(lt,"&"),wS=te(lt,"|"),AS=te(lt,"^"),RS=te(lt,"<<"),CS=te(lt,">>");j("add",jr);j("sub",za);j("mul",Wh);j("div",Hh);j("remainder",gS);j("equal",_S);j("assign",Xh);j("lessThan",xS);j("greaterThan",vS);j("lessThanEqual",SS);j("greaterThanEqual",MS);j("and",yS);j("or",TS);j("xor",ES);j("bitAnd",bS);j("bitOr",wS);j("bitXor",AS);j("shiftLeft",RS);j("shiftRight",CS);ge(lt);class $h extends He{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const PS=te($h);ge($h);class Pi extends He{constructor(e,t=null){super(e),this.name=t}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){const t=e.getVarFromNode(this,this.getNodeType(e)),n=this.name;return n!==null&&(t.name=n),e.getPropertyName(t)}}const LS=(s,e)=>We(new Pi(s,Hs(e))),Ji=Me(Pi,"vec4","DiffuseColor"),sa=Me(Pi,"float","Roughness");Me(Pi,"float","Metalness");Me(Pi,"color","SpecularColor");Me(Pi,"float","Shininess");ge(Pi);class qh extends He{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e){const t=this.getNodeType(e),n={tempWrite:!1},{ifNode:i,elseNode:r}=this,o=i.getNodeType(e)!=="void"||r&&r.getNodeType(e)!=="void",a=o?LS(t).build(e):"",c=Ai(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${c} ) {

`).addFlowTab();let l=Ai(this.ifNode,n).build(e,t);if(l=o?a+" = "+l+";":l,e.removeFlowTab().addFlowCode(e.tab+"	"+l+`

`+e.tab+"}"),r!==null){e.addFlowCode(` else {

`).addFlowTab();let u=Ai(r,n).build(e,t);u=a?a+" = "+u+";":u,e.removeFlowTab().addFlowCode(e.tab+"	"+u+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return a}}const Kr=te(qh);j("cond",Kr);ge(qh);class Yh extends He{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(Fh(PS(),e)),this}if(e,t){const n=ia(t);return this._currentCond=Kr(e,n),this.add(this._currentCond)}elseif(e,t){const n=ia(t),i=Kr(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=ia(e),this}assign(e,t){return this.add(Xh(e,t))}build(e,...t){for(const n of this.nodes)n.build(e);return this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}const hu=te(Yh);ge(Yh);class jh extends ho{constructor(e){super(0),this.textureNode=e,this.updateType=wt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const Kh=te(jh);ge(jh);const vs=new Map;vs.set(2,"vec2");vs.set(3,"vec3");vs.set(4,"vec4");vs.set(9,"mat3");vs.set(16,"mat4");const Tr=s=>(s=Number(s),s+(s%1?"":".0"));class NS{constructor(e,t,n){this.object=e,this.material=e&&(e.material||null),this.geometry=e&&(e.geometry||null),this.renderer=t,this.parser=n,this.nodes=[],this.updateNodes=[],this.updateBeforeNodes=[],this.hashNodes={},this.lightsNode=null,this.environmentNode=null,this.fogNode=null,this.toneMappingNode=null,this.vertexShader=null,this.fragmentShader=null,this.computeShader=null,this.flowNodes={vertex:[],fragment:[],compute:[]},this.flowCode={vertex:"",fragment:"",compute:[]},this.uniforms={vertex:[],fragment:[],compute:[],index:0},this.codes={vertex:[],fragment:[],compute:[]},this.attributes=[],this.varyings=[],this.vars={vertex:[],fragment:[],compute:[]},this.flow={code:""},this.chaining=[],this.stack=hu(),this.tab="	",this.context={keywords:new mS,material:this.material,getMIPLevelAlgorithmNode:(i,r)=>r.mul(Kh(i))},this.cache=new Oh,this.globalCache=this.cache,this.flowsData=new WeakMap,this.shaderStage=null,this.buildStage=null}setHashNode(e,t){this.hashNodes[t]=e}addNode(e){if(this.nodes.indexOf(e)===-1){const t=e.getUpdateType(),n=e.getUpdateBeforeType();t!==wt.NONE&&this.updateNodes.push(e),n!==wt.NONE&&this.updateBeforeNodes.push(e),this.nodes.push(e),this.setHashNode(e,e.getHash(this))}}get currentNode(){return this.chaining[this.chaining.length-1]}addChain(e){this.chaining.push(e)}removeChain(e){if(this.chaining.pop()!==e)throw new Error("NodeBuilder: Invalid node chaining!")}getMethod(e){return e}getNodeFromHash(e){return this.hashNodes[e]}addFlow(e,t){return this.flowNodes[e].push(t),t}setContext(e){this.context=e}getContext(){return this.context}setCache(e){this.cache=e}getCache(){return this.cache}isAvailable(){return!1}getInstanceIndex(){console.warn("Abstract function.")}getFrontFacing(){console.warn("Abstract function.")}getFragCoord(){console.warn("Abstract function.")}isFlipY(){return!1}getTexture(){console.warn("Abstract function.")}getTextureLevel(){console.warn("Abstract function.")}getConst(e,t=null){if(t===null&&(e==="float"||e==="int"||e==="uint"?t=0:e==="bool"?t=!1:e==="color"?t=new Oe:e==="vec2"?t=new Ue:e==="vec3"?t=new w:e==="vec4"&&(t=new qe)),e==="float")return Tr(t);if(e==="int")return`${Math.round(t)}`;if(e==="uint")return t>=0?`${Math.round(t)}u`:"0u";if(e==="bool")return t?"true":"false";if(e==="color")return`${this.getType("vec3")}( ${Tr(t.r)}, ${Tr(t.g)}, ${Tr(t.b)} )`;const n=this.getTypeLength(e),i=this.getComponentType(e),r=o=>this.getConst(i,o);if(n===2)return`${this.getType(e)}( ${r(t.x)}, ${r(t.y)} )`;if(n===3)return`${this.getType(e)}( ${r(t.x)}, ${r(t.y)}, ${r(t.z)} )`;if(n===4)return`${this.getType(e)}( ${r(t.x)}, ${r(t.y)}, ${r(t.z)}, ${r(t.w)} )`;if(n>4)return`${this.getType(e)}()`;throw new Error(`NodeBuilder: Type '${e}' not found in generate constant attempt.`)}getType(e){return e}generateMethod(e){return e}hasGeometryAttribute(e){return this.geometry&&this.geometry.getAttribute(e)!==void 0}getAttribute(e,t){const n=this.attributes;for(const r of n)if(r.name===e)return r;const i=new oS(e,t);return n.push(i),i}getPropertyName(e){return e.name}isVector(e){return/vec\d/.test(e)}isMatrix(e){return/mat\d/.test(e)}isReference(e){return e==="void"||e==="property"||e==="sampler"||e==="texture"||e==="cubeTexture"}isShaderStage(e){return this.shaderStage===e}getTextureEncodingFromMap(e){return console.warn("THREE.NodeBuilder: Method .getTextureEncodingFromMap replaced by .getTextureColorSpaceFromMap in r152+."),this.getTextureColorSpaceFromMap(e)===pe?$n:ja}getTextureColorSpaceFromMap(e){let t;return e&&e.isTexture?t=e.colorSpace:e&&e.isWebGLRenderTarget?t=e.texture.colorSpace:t=ai,t}getComponentType(e){if(e=this.getVectorType(e),e==="float"||e==="bool"||e==="int"||e==="uint")return e;const t=/(b|i|u|)(vec|mat)([2-4])/.exec(e);return t===null?null:t[1]==="b"?"bool":t[1]==="i"?"int":t[1]==="u"?"uint":"float"}getVectorType(e){return e==="color"?"vec3":e==="texture"?"vec4":e}getTypeFromLength(e,t="float"){if(e===1)return t;const n=vs.get(e);return(t==="float"?"":t[0])+n}getTypeLength(e){const t=this.getVectorType(e),n=/vec([2-4])/.exec(t);return n!==null?Number(n[1]):t==="float"||t==="bool"||t==="int"||t==="uint"?1:/mat3/.test(e)===!0?9:/mat4/.test(e)===!0?16:0}getVectorFromMatrix(e){return e.replace("mat","vec")}changeComponentType(e,t){return this.getTypeFromLength(this.getTypeLength(e),t)}getIntegerType(e){const t=this.getComponentType(e);return t==="int"||t==="uint"?e:this.changeComponentType(e,"int")}addStack(){return this.stack=hu(this.stack),this.stack}removeStack(){const e=this.stack;return this.stack=e.parent,e}getDataFromNode(e,t=this.shaderStage){const n=e.isGlobal(this)?this.globalCache:this.cache;let i=n.getNodeData(e);return i===void 0&&(i={vertex:{},fragment:{},compute:{}},n.setNodeData(e,i)),t!==null?i[t]:i}getNodeProperties(e,t=this.shaderStage){const n=this.getDataFromNode(e,t);return n.properties||(n.properties={outputNode:null})}getUniformFromNode(e,t,n){const i=this.getDataFromNode(e,t);let r=i.uniform;if(r===void 0){const o=this.uniforms.index++;r=new cS("nodeUniform"+o,n,e),this.uniforms[t].push(r),i.uniform=r}return r}getVarFromNode(e,t,n=this.shaderStage){const i=this.getDataFromNode(e,n);let r=i.variable;if(r===void 0){const o=this.vars[n],a=o.length;r=new kh("nodeVar"+a,t),o.push(r),i.variable=r}return r}getVaryingFromNode(e,t){const n=this.getDataFromNode(e,null);let i=n.varying;if(i===void 0){const r=this.varyings,o=r.length;i=new hS("nodeVarying"+o,t),r.push(i),n.varying=i}return i}getCodeFromNode(e,t,n=this.shaderStage){const i=this.getDataFromNode(e);let r=i.code;if(r===void 0){const o=this.codes[n],a=o.length;r=new fS("nodeCode"+a,t),o.push(r),i.code=r}return r}addLineFlowCode(e){return e===""?this:(e=this.tab+e,/;\s*$/.test(e)||(e=e+`;
`),this.flow.code+=e,this)}addFlowCode(e){return this.flow.code+=e,this}addFlowTab(){return this.tab+="	",this}removeFlowTab(){return this.tab=this.tab.slice(0,-1),this}getFlowData(e){return this.flowsData.get(e)}flowNode(e){const t=e.getNodeType(this),n=this.flowChildNode(e,t);return this.flowsData.set(e,n),n}flowChildNode(e,t=null){const n=this.flow,i={code:""};return this.flow=i,i.result=e.build(this,t),this.flow=n,i}flowNodeFromShaderStage(e,t,n=null,i=null){const r=this.shaderStage;this.setShaderStage(e);const o=this.flowChildNode(t,n);return i!==null&&(o.code+=`${i} = ${o.result};
`+this.tab),this.flowCode[e]=this.flowCode[e]+o.code,this.setShaderStage(r),o}getAttributes(){console.warn("Abstract function.")}getVaryings(){console.warn("Abstract function.")}getVars(e){let t="";const n=this.vars[e];for(const i of n)t+=`${i.type} ${i.name}; `;return t}getUniforms(){console.warn("Abstract function.")}getCodes(e){const t=this.codes[e];let n="";for(const i of t)n+=i.code+`
`;return n}getHash(){return this.vertexShader+this.fragmentShader+this.computeShader}setShaderStage(e){this.shaderStage=e}getShaderStage(){return this.shaderStage}setBuildStage(e){this.buildStage=e}getBuildStage(){return this.buildStage}buildCode(){console.warn("Abstract function.")}build(){for(const e of m0){this.setBuildStage(e),this.context.vertex&&this.context.vertex.isNode&&this.flowNodeFromShaderStage("vertex",this.context.vertex);for(const t of g0){this.setShaderStage(t);const n=this.flowNodes[t];for(const i of n)e==="generate"?this.flowNode(i):i.build(this)}}return this.setBuildStage(null),this.setShaderStage(null),this.buildCode(),this}format(e,t,n){if(t=this.getVectorType(t),n=this.getVectorType(n),t===n||n===null||this.isReference(n))return e;const i=this.getTypeLength(t),r=this.getTypeLength(n);return i>4||r>4||r===0?e:i===r?`${this.getType(n)}( ${e} )`:i>r?this.format(`${e}.${"xyz".slice(0,r)}`,this.getTypeFromLength(r),n):r===4?`${this.getType(n)}( ${this.format(e,t,"vec3")}, 1.0 )`:i===2?`${this.getType(n)}( ${this.format(e,t,"vec2")}, 0.0 )`:`${this.getType(n)}( ${e} )`}getSignature(){return`// Three.js r${Qr} - NodeMaterial System
`}}const US=NS;class IS{constructor(){this.time=0,this.deltaTime=0,this.frameId=0,this.renderId=0,this.startTime=null,this.frameMap=new WeakMap,this.frameBeforeMap=new WeakMap,this.renderMap=new WeakMap,this.renderBeforeMap=new WeakMap,this.renderer=null,this.material=null,this.camera=null,this.object=null,this.scene=null}updateBeforeNode(e){const t=e.getUpdateBeforeType();t===wt.FRAME?this.frameBeforeMap.get(e)!==this.frameId&&(this.frameBeforeMap.set(e,this.frameId),e.updateBefore(this)):t===wt.RENDER?(this.renderBeforeMap.get(e)!==this.renderId||this.frameBeforeMap.get(e)!==this.frameId)&&(this.renderBeforeMap.set(e,this.renderId),this.frameBeforeMap.set(e,this.frameId),e.updateBefore(this)):t===wt.OBJECT&&e.updateBefore(this)}updateNode(e){const t=e.getUpdateType();t===wt.FRAME?this.frameMap.get(e)!==this.frameId&&(this.frameMap.set(e,this.frameId),e.update(this)):t===wt.RENDER?(this.renderMap.get(e)!==this.renderId||this.frameMap.get(e)!==this.frameId)&&(this.renderMap.set(e,this.renderId),this.frameMap.set(e,this.frameId),e.update(this)):t===wt.OBJECT&&e.update(this)}update(){this.frameId++,this.lastTime===void 0&&(this.lastTime=performance.now()),this.deltaTime=(performance.now()-this.lastTime)/1e3,this.lastTime=performance.now(),this.time+=this.deltaTime}}const du=IS;class Zh{constructor(e,t,n=null,i="",r=!1){this.type=e,this.name=t,this.count=n,this.qualifier=i,this.isConst=r}}Zh.isNodeFunctionInput=!0;const DS=Zh;class Jh extends He{constructor(e,t=null){super(),this.node=e,this.name=t}assign(e){return e.traverse((t,n)=>{n&&t.uuid===this.uuid&&n(this.node)}),this.node=e,this}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node,n=this.name;if(n===null&&t.isTempNode===!0)return t.build(e);const i=e.getVectorType(this.getNodeType(e)),r=t.build(e,i),o=e.getVarFromNode(this,i);n!==null&&(o.name=n);const a=e.getPropertyName(o);return e.addLineFlowCode(`${a} = ${r}`),a}}const fo=te(Jh),Qh=fo;j("label",fo);j("temp",Qh);ge(Jh);class I extends xs{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return r>o&&r>a?t:o>a?n:a>r?i:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Ei(Ut(h),0):u=Ei(Ut(u),0);const d=Wh(u,h).xyz;return hn(d).build(e,t)}else{if(n===I.NEGATE)return e.format("-"+o.build(e,r),i,t);if(n===I.ONE_MINUS)return za(1,o).build(e,t);if(n===I.RECIPROCAL)return Hh(1,o).build(e,t);if(n===I.DIFFERENCE)return ed(za(o,a)).build(e,t);{const u=[];return n===I.CROSS?u.push(o.build(e,i),a.build(e,i)):n===I.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===I.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===I.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";li(1e-6);li(1e6);const FS=te(I,I.RADIANS),OS=te(I,I.DEGREES),BS=te(I,I.EXP),GS=te(I,I.EXP2),zS=te(I,I.LOG),VS=te(I,I.LOG2),kS=te(I,I.SQRT),WS=te(I,I.INVERSE_SQRT),HS=te(I,I.FLOOR),XS=te(I,I.CEIL),hn=te(I,I.NORMALIZE),$S=te(I,I.FRACT),qS=te(I,I.SIN),YS=te(I,I.COS),jS=te(I,I.TAN),KS=te(I,I.ASIN),ZS=te(I,I.ACOS),JS=te(I,I.ATAN),ed=te(I,I.ABS),QS=te(I,I.SIGN),eM=te(I,I.LENGTH),td=te(I,I.NEGATE),tM=te(I,I.ONE_MINUS),nM=te(I,I.DFDX),iM=te(I,I.DFDY),sM=te(I,I.ROUND),rM=te(I,I.RECIPROCAL),oM=te(I,I.ATAN2),aM=te(I,I.MIN),cM=te(I,I.MAX),lM=te(I,I.MOD),uM=te(I,I.STEP),hM=te(I,I.REFLECT),dM=te(I,I.DISTANCE),fM=te(I,I.DIFFERENCE),pM=te(I,I.DOT),mM=te(I,I.CROSS),gM=te(I,I.POW),_M=te(I,I.POW,2),xM=te(I,I.POW,3),vM=te(I,I.POW,4),nd=te(I,I.TRANSFORM_DIRECTION),id=te(I,I.MIX),sd=(s,e=0,t=1)=>We(new I(I.CLAMP,We(s),We(e),We(t))),SM=s=>sd(s),MM=te(I,I.REFRACT),rd=te(I,I.SMOOTHSTEP),yM=te(I,I.FACEFORWARD),TM=(s,e,t)=>id(e,t,s),EM=(s,e,t)=>rd(e,t,s);j("radians",FS);j("degrees",OS);j("exp",BS);j("exp2",GS);j("log",zS);j("log2",VS);j("sqrt",kS);j("inverseSqrt",WS);j("floor",HS);j("ceil",XS);j("normalize",hn);j("fract",$S);j("sin",qS);j("cos",YS);j("tan",jS);j("asin",KS);j("acos",ZS);j("atan",JS);j("abs",ed);j("sign",QS);j("length",eM);j("negate",td);j("oneMinus",tM);j("dFdx",nM);j("dFdy",iM);j("round",sM);j("reciprocal",rM);j("atan2",oM);j("min",aM);j("max",cM);j("mod",lM);j("step",uM);j("reflect",hM);j("distance",dM);j("dot",pM);j("cross",mM);j("pow",gM);j("pow2",_M);j("pow3",xM);j("pow4",vM);j("transformDirection",nd);j("mix",TM);j("clamp",sd);j("refract",MM);j("smoothstep",EM);j("faceForward",yM);j("difference",fM);j("saturate",SM);ge(I);class Ne extends He{constructor(e=Ne.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=wt.OBJECT,this._uniformNode=ui(null)}getNodeType(){const e=this.scope;if(e===Ne.WORLD_MATRIX||e===Ne.VIEW_MATRIX)return"mat4";if(e===Ne.NORMAL_MATRIX)return"mat3";if(e===Ne.POSITION||e===Ne.VIEW_POSITION||e===Ne.DIRECTION)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===Ne.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===Ne.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===Ne.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===Ne.POSITION)n.value=n.value||new w,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===Ne.DIRECTION)n.value=n.value||new w,t.getWorldDirection(n.value);else if(i===Ne.VIEW_POSITION){const r=e.camera;n.value=n.value||new w,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Ne.WORLD_MATRIX||t===Ne.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Ne.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Ne.POSITION||t===Ne.VIEW_POSITION||t===Ne.DIRECTION)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ne.VIEW_MATRIX="viewMatrix";Ne.NORMAL_MATRIX="normalMatrix";Ne.WORLD_MATRIX="worldMatrix";Ne.POSITION="position";Ne.VIEW_POSITION="viewPosition";Ne.DIRECTION="direction";const od=Ne;te(Ne,Ne.DIRECTION);te(Ne,Ne.VIEW_MATRIX);te(Ne,Ne.NORMAL_MATRIX);te(Ne,Ne.WORLD_MATRIX);te(Ne,Ne.POSITION);te(Ne,Ne.VIEW_POSITION);ge(Ne);class Ht extends od{constructor(e=Ht.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}Me(Ht,Ht.DIRECTION);const _c=Me(Ht,Ht.VIEW_MATRIX),ad=Me(Ht,Ht.NORMAL_MATRIX),Va=Me(Ht,Ht.WORLD_MATRIX);Me(Ht,Ht.POSITION);Me(Ht,Ht.VIEW_POSITION);ge(Ht);class st extends He{constructor(e=st.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===st.GEOMETRY)n=cs("position","vec3");else if(t===st.LOCAL)n=Yt(bM);else if(t===st.WORLD){const i=Va.mul(Ln);n=Yt(i)}else if(t===st.VIEW){const i=_c.mul(Ln);n=Yt(i)}else if(t===st.VIEW_DIRECTION){const i=po.negate();n=hn(Yt(i))}else if(t===st.WORLD_DIRECTION){const i=Ln.transformDirection(Va);n=hn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}st.GEOMETRY="geometry";st.LOCAL="local";st.WORLD="world";st.WORLD_DIRECTION="worldDirection";st.VIEW="view";st.VIEW_DIRECTION="viewDirection";const bM=Me(st,st.GEOMETRY),Ln=Me(st,st.LOCAL),cd=Me(st,st.WORLD),ld=Me(st,st.WORLD_DIRECTION),po=Me(st,st.VIEW),ud=Me(st,st.VIEW_DIRECTION);ge(st);class hd extends xs{constructor(e=ld){super("vec2"),this.dirNode=e}construct(){const e=td(this.dirNode),t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return as(t,n)}}const ka=te(hd);ge(hd);class At extends od{constructor(e=At.POSITION){super(e)}getNodeType(e){return this.scope===At.PROJECTION_MATRIX?"mat4":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===At.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===At.VIEW_MATRIX?n.value=t.matrixWorldInverse:(this.object3d=t,super.update(e))}generate(e){return this.scope===At.PROJECTION_MATRIX&&(this._uniformNode.nodeType="mat4"),super.generate(e)}}At.PROJECTION_MATRIX="projectionMatrix";const wM=Me(At,At.PROJECTION_MATRIX),Li=Me(At,At.VIEW_MATRIX);Me(At,At.NORMAL_MATRIX);Me(At,At.WORLD_MATRIX);Me(At,At.POSITION);ge(At);class _t extends He{constructor(e=_t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===_t.GEOMETRY)n=cs("normal","vec3");else if(t===_t.LOCAL)n=Yt(dd);else if(t===_t.VIEW){const i=ad.mul(ls);n=hn(Yt(i))}else if(t===_t.WORLD){const i=Ss.transformDirection(Li);n=hn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_t.GEOMETRY="geometry";_t.LOCAL="local";_t.VIEW="view";_t.WORLD="world";const dd=Me(_t,_t.GEOMETRY),ls=Me(_t,_t.LOCAL),Ss=Me(_t,_t.VIEW),AM=Me(_t,_t.WORLD),us=fo(Ss,"TransformedNormalView"),fu=us.transformDirection(Li).normalize();ge(_t);class fd extends He{constructor(e,t=null){super("float"),this.textureNode=e,this.roughnessNode=t}construct(){const{textureNode:e,roughnessNode:t}=this,n=Kh(e),i=t.mul(t).mul(Math.PI).div(t.add(1));return n.add(i.log2()).clamp(0,n)}}const pu=te(fd);ge(fd);class pd extends gc{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e+1:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const Zr=(...s)=>We(new pd(...s));ge(pd);let mu;class xc extends ho{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return mu||(mu=Zr())}construct(e){const t=e.getNodeProperties(this);let n=this.uvNode;n===null&&e.context.getUVNode&&(n=e.context.getUVNode(this)),n||(n=this.getDefaultUV());let i=this.levelNode;i===null&&e.context.getSamplerLevelNode&&(i=e.context.getSamplerLevelNode(this)),t.uvNode=n,t.levelNode=i?e.context.getMIPLevelAlgorithmNode(this,i):null}generate(e,t){const{uvNode:n,levelNode:i}=e.getNodeProperties(this),r=this.value;if(!r||r.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"property");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const a=this.getNodeType(e),c=e.getDataFromNode(this);let l=c.propertyName;if(l===void 0){const u=n.build(e,"vec2"),h=e.getVarFromNode(this,a);l=e.getPropertyName(h);let d=null;if(i&&i.isNode===!0){const p=i.build(e,"float");d=e.getTextureLevel(r,o,u,p)}else d=e.getTexture(r,o,u);e.addLineFlowCode(`${l} = ${d}`),c.snippet=d,c.propertyName=l}return e.format(l,a,t)}}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}}const hs=te(xc);j("texture",hs);ge(xc);class mt extends He{constructor(e=mt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===mt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===mt.GEOMETRY)n=cs("tangent","vec4");else if(t===mt.LOCAL)n=Yt(Jr.xyz);else if(t===mt.VIEW){const i=_c.mul(vc).xyz;n=hn(Yt(i))}else if(t===mt.WORLD){const i=mo.transformDirection(Li);n=hn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}mt.GEOMETRY="geometry";mt.LOCAL="local";mt.VIEW="view";mt.WORLD="world";const Jr=Me(mt,mt.GEOMETRY),vc=Me(mt,mt.LOCAL),mo=Me(mt,mt.VIEW),RM=Me(mt,mt.WORLD),md=fo(mo,"TransformedTangentView");hn(md.transformDirection(Li));ge(mt);class xt extends He{constructor(e=xt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===xt.GEOMETRY?n=dd.cross(Jr):t===xt.LOCAL?n=ls.cross(vc):t===xt.VIEW?n=Ss.cross(mo):t===xt.WORLD&&(n=AM.cross(RM));const i=n.mul(Jr.w).xyz;return hn(Yt(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}xt.GEOMETRY="geometry";xt.LOCAL="local";xt.VIEW="view";xt.WORLD="world";Me(xt,xt.GEOMETRY);Me(xt,xt.LOCAL);const CM=Me(xt,xt.VIEW);Me(xt,xt.WORLD);const PM=hn(us.cross(md).mul(Jr.w));hn(PM.transformDirection(Li));ge(xt);class gd extends ho{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const _d=(s,e,t)=>We(new gd(s,Hs(e),t));ge(gd);class xd extends He{constructor(){super("vec3")}getHash(){return"reflectVector"}construct(){return ud.negate().reflect(us).transformDirection(Li)}}const LM=Me(xd);ge(xd);class vd extends xc{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return LM}generate(e,t){const{uvNode:n,levelNode:i}=e.getNodeProperties(this),r=this.value;if(!r||r.isCubeTexture!==!0)throw new Error("CubeTextureNode: Need a three.js cube texture.");const o=ho.prototype.generate.call(this,e,"cubeTexture");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const a=e.getDataFromNode(this);let c=a.propertyName;if(c===void 0){const u=Ut(n.x.negate(),n.yz).build(e,"vec3"),h=e.getVarFromNode(this,"vec4");c=e.getPropertyName(h);let d=null;if(i&&i.isNode===!0){const p=i.build(e,"float");d=e.getTextureLevel(this,o,u,p)}else d=e.getTexture(this,o,u);e.addLineFlowCode(`${c} = ${d}`),a.snippet=d,a.propertyName=c}return e.format(c,"vec4",t)}}}const Wa=te(vd);j("cubeTexture",Wa);ge(vd);class Sc extends He{constructor(e,t,n=null){super(),this.property=e,this.uniformType=t,this.object=n,this.node=null,this.updateType=wt.OBJECT,this.setNodeType(t)}setNodeType(e){let t=null;e==="texture"?t=hs(null):t=ui(e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}update(e){const t=this.object!==null?this.object:e.object,n=this.property;this.node.value=t[n]}construct(){return this.node}}const Mi=(s,e,t)=>We(new Sc(s,Hs(e),t));ge(Sc);class Sd extends Sc{constructor(e,t,n=null){super(e,t,n),this.material=n}construct(e){const t=this.material!==null?this.material:e.material;return this.node.value=t[this.property],super.construct(e)}update(e){this.object=this.material!==null?this.material:e.material,super.update(e)}}const Us=(s,e,t)=>We(new Sd(s,Hs(e),t));ge(Sd);class me extends He{constructor(e){super(),this.scope=e}getNodeType(e){const t=this.scope,n=e.context.material;if(t===me.COLOR)return n.map!==null?"vec4":"vec3";if(t===me.OPACITY||t===me.ROTATION)return"float";if(t===me.UV)return"vec2";if(t===me.EMISSIVE)return"vec3";if(t===me.ROUGHNESS||t===me.METALNESS||t===me.SPECULAR||t===me.SHININESS)return"float"}getFloat(e){return Us(e,"float")}getColor(e){return Us(e,"color")}getTexture(e){const t=Us(e,"texture");return t.node.uvNode=NM,t}construct(e){const t=e.context.material,n=this.scope;let i=null;if(n===me.ALPHA_TEST)i=this.getFloat("alphaTest");else if(n===me.COLOR){const r=this.getColor("color");t.map&&t.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===me.OPACITY){const r=this.getFloat("opacity");t.alphaMap&&t.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alphaMap")):i=r}else if(n===me.SHININESS)i=this.getFloat("shininess");else if(n===me.SPECULAR_COLOR)i=this.getColor("specular");else if(n===me.REFLECTIVITY){const r=this.getFloat("reflectivity");t.specularMap&&t.specularMap.isTexture===!0?i=r.mul(this.getTexture("specularMap").r):i=r}else if(n===me.ROUGHNESS){const r=this.getFloat("roughness");t.roughnessMap&&t.roughnessMap.isTexture===!0?i=r.mul(this.getTexture("roughnessMap").g):i=r}else if(n===me.METALNESS){const r=this.getFloat("metalness");t.metalnessMap&&t.metalnessMap.isTexture===!0?i=r.mul(this.getTexture("metalnessMap").b):i=r}else if(n===me.EMISSIVE){const r=this.getColor("emissive");t.emissiveMap&&t.emissiveMap.isTexture===!0?i=r.mul(this.getTexture("emissiveMap")):i=r}else if(n===me.ROTATION)i=this.getFloat("rotation");else if(n===me.UV){let r=t.map||t.specularMap||t.displacementMap||t.normalMap||t.bumpMap||t.roughnessMap||t.metalnessMap||t.alphaMap||t.emissiveMap||t.clearcoatMap||t.clearcoatNormalMap||t.clearcoatRoughnessMap||t.iridescenceMap||t.iridescenceThicknessMap||t.specularIntensityMap||t.specularColorMap||t.transmissionMap||t.thicknessMap||t.sheenColorMap||t.sheenRoughnessMap;r?(r.isWebGLRenderTarget&&(r=r.texture),r.matrixAutoUpdate===!0&&r.updateMatrix(),i=ui(r.matrix).mul(Ut(Zr(),1))):i=Zr()}else{const r=this.getNodeType(e);i=Us(n,r)}return i}}me.ALPHA_TEST="alphaTest";me.COLOR="color";me.OPACITY="opacity";me.SHININESS="shininess";me.SPECULAR_COLOR="specularColor";me.REFLECTIVITY="reflectivity";me.ROUGHNESS="roughness";me.METALNESS="metalness";me.EMISSIVE="emissive";me.ROTATION="rotation";me.UV="uv";const NM=Me(me,me.UV),UM=Me(me,me.ALPHA_TEST),IM=Me(me,me.COLOR);Me(me,me.SHININESS);const DM=Me(me,me.EMISSIVE),FM=Me(me,me.OPACITY);Me(me,me.SPECULAR_COLOR);Me(me,me.REFLECTIVITY);Me(me,me.ROUGHNESS);Me(me,me.METALNESS);Me(me,me.ROTATION);ge(me);class Md extends He{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const OM=Me(Md),BM=li(OM).mul(2).sub(1);ge(Md);const GM=new Yn(s=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=s,r=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(p.dot(p)),_=BM.mul(g.inverseSqrt());return jr(d.mul(n.x,_),p.mul(n.y,_),l.mul(n.z)).normalize()});class yd extends xs{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Wr}construct(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=Ut(i.xy.mul(n),i.z));let r=null;return t===qu?r=ad.mul(i).normalize():t===Wr&&(e.hasGeometryAttribute("tangent")===!0?r=VM.mul(i).normalize():r=GM.call({eye_pos:po,surf_norm:Ss,mapN:i,uv:Zr()})),r}}const zM=te(yd),VM=Vs(mo,CM,Ss);ge(yd);class Ci extends me{constructor(e){super(e)}getNodeType(e){const t=this.scope;let n=null;return t===Ci.NORMAL&&(n="vec3"),n||super.getNodeType(e)}construct(e){const t=e.material,n=this.scope;let i=null;return n===Ci.NORMAL&&(i=t.normalMap?zM(this.getTexture("normalMap"),Us("normalScale","vec2")):Ss),i||super.construct(e)}}Ci.NORMAL="normal";const kM=Me(Ci,Ci.NORMAL);ge(Ci);class Td extends He{constructor(e){super("void"),this.instanceMesh=e;const t=_d(e.instanceMatrix.array,"mat4",e.count);this.instanceMatrixNode=Qh(t.element(sS))}generate(e){const{instanceMatrixNode:t}=this,n=t.mul(Ln).xyz,i=Vs(t[0].xyz,t[1].xyz,t[2].xyz),r=ls.div(Ut(i[0].dot(i[0]),i[1].dot(i[1]),i[2].dot(i[2]))),o=i.mul(r).xyz;Ln.assign(n).build(e),ls.assign(o).build(e)}}const WM=te(Td);ge(Td);class Ed extends He{constructor(e=Ln){super("vec4"),this.position=e}generate(e){const t=this.position;return wM.mul(_c).mul(t).build(e)}}const HM=te(Ed);ge(Ed);const XM=new Yn((s,{},e)=>{const{index:t,weight:n,bindMatrix:i,bindMatrixInverse:r,boneMatrices:o}=s,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(Ln),d=jr(a.mul(h).mul(n.x),c.mul(h).mul(n.y),l.mul(h).mul(n.z),u.mul(h).mul(n.w)),p=r.mul(d).xyz;let g=jr(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(i);const _=g.transformDirection(ls).xyz;Ln.assign(p).build(e),ls.assign(_).build(e),e.hasGeometryAttribute("tangent")&&vc.assign(_).build(e)});class bd extends He{constructor(e){super("void"),this.skinnedMesh=e,this.updateType=wt.OBJECT,this.skinIndexNode=cs("skinIndex","uvec4"),this.skinWeightNode=cs("skinWeight","vec4"),this.bindMatrixNode=ui(e.bindMatrix,"mat4"),this.bindMatrixInverseNode=ui(e.bindMatrixInverse,"mat4"),this.boneMatricesNode=_d(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)}generate(e){XM.call({index:this.skinIndexNode,weight:this.skinWeightNode,bindMatrix:this.bindMatrixNode,bindMatrixInverse:this.bindMatrixInverseNode,boneMatrices:this.boneMatricesNode},{},e)}update(){this.skinnedMesh.skeleton.update()}}const $M=te(bd);ge(bd);const qM=new Yn(({color:s,exposure:e})=>s.mul(e)),YM=new Yn(({color:s,exposure:e})=>(s=s.mul(e),s.div(s.add(1)).clamp())),jM=new Yn(({color:s,exposure:e})=>{s=s.mul(e),s=s.sub(.004).max(0);const t=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),KM=new Yn(({color:s})=>{const e=s.mul(s.add(.0245786)).sub(90537e-9),t=s.mul(s.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),ZM=new Yn(({color:s,exposure:e})=>{const t=Vs(Ut(.59719,.076,.0284),Ut(.35458,.90834,.13383),Ut(.04823,.01566,.83777)),n=Vs(Ut(1.60475,-.10208,-.00327),Ut(-.53108,1.10813,-.07276),Ut(-.07367,-.00605,1.07602));return s=s.mul(e).div(.6),s=t.mul(s),s=KM.call({color:s}),s=n.mul(s),s.clamp()}),JM={[Vu]:qM,[ku]:YM,[Wu]:jM,[qa]:ZM};class wd extends xs{constructor(e=sn,t=li(1),n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}construct(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===sn)return t;const i={exposure:this.exposureNode,color:t},r=JM[n];let o=null;return r?o=r.call(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const QM=(s,e,t)=>We(new wd(s,We(e),We(t)));ge(wd);let ra;class Ze extends He{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===Ze.COORDINATE?"vec4":"vec2"}getUpdateType(){let e=wt.NONE;return this.scope===Ze.RESOLUTION&&(e=wt.FRAME),this.updateType=e,e}update({renderer:e}){e.getDrawingBufferSize(ra)}construct(e){const t=this.scope;if(t===Ze.COORDINATE)return;let n=null;if(t===Ze.RESOLUTION)n=ui(ra||(ra=new Ue));else{const i=as(new Ze(Ze.COORDINATE)),r=new Ze(Ze.RESOLUTION);n=i.div(r);let o=n.x,a=n.y;(/top/i.test(t)&&e.isFlipY()||/bottom/i.test(t)&&e.isFlipY()===!1)&&(a=a.oneMinus()),/right/i.test(t)&&(o=o.oneMinus()),n=as(o,a)}return n}generate(e){return this.scope===Ze.COORDINATE?e.getFragCoord():super.generate(e)}}Ze.COORDINATE="coordinate";Ze.RESOLUTION="resolution";Ze.TOP_LEFT="topLeft";Ze.BOTTOM_LEFT="bottomLeft";Ze.TOP_RIGHT="topRight";Ze.BOTTOM_RIGHT="bottomRight";Me(Ze,Ze.COORDINATE);Me(Ze,Ze.RESOLUTION);Me(Ze,Ze.TOP_LEFT);const ey=Me(Ze,Ze.BOTTOM_LEFT);Me(Ze,Ze.TOP_RIGHT);Me(Ze,Ze.BOTTOM_RIGHT);ge(Ze);class Mc extends He{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this._includes=t}setIncludes(e){return this._includes=e,this}getIncludes(){return this._includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}const oa=Mc;te(Mc);ge(Mc);class yc extends He{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}mixAssign(e){return this.mix(e,this.colorNode)}construct(){return this.factorNode}}const Ad=yc,ty=te(yc);j("fog",ty);ge(yc);class Rd extends Ad{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}construct(){return rd(this.nearNode,this.farNode,po.z.negate())}}const Cd=te(Rd);j("rangeFog",Cd);ge(Rd);class Pd extends Ad{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}construct(){const e=po.z.negate(),t=this.densityNode;return t.mul(t,e,e).negate().exp().oneMinus()}}const Ld=te(Pd);j("densityFog",Ld);ge(Pd);class Nd extends He{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}const Tc=Nd;ge(Nd);const gu=new WeakMap,ny=s=>s.sort((e,t)=>e.id-t.id);class Ud extends He{constructor(e=[]){super("vec3"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}construct(e){const t=this.lightNodes;for(const n of t)n.build(e)}getHash(e){if(this._hash===null){let t="";const n=this.lightNodes;for(const i of n)t+=i.getHash(e)+" ";this._hash=t}return this._hash}getLightNodeByHash(e){const t=this.lightNodes;for(const n of t)if(n.light.uuid===e)return n;return null}fromLights(e=[]){const t=[];e=ny(e);for(const n of e){let i=this.getLightNodeByHash(n.uuid);if(i===null){const r=n.constructor,o=gu.has(r)?gu.get(r):ly;i=We(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const iy=s=>We(new Ud().fromLights(s)),sy=te(Ud);class Id extends Tc{constructor(e=null){super(),this.aoNode=e}construct(e){const n=this.aoNode.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}const ry=Id;ge(Id);class Dd extends Tc{constructor(e=null){super(),this.envNode=e}construct(e){const t=this.envNode,n=e.getNodeProperties(this);let i,r,o;const a=Ai(t,{getUVNode:u=>{let h=null;return i===void 0&&(i=ud.negate().reflect(us),i=sa.mul(sa).mix(i,us).normalize(),i=i.transformDirection(Li)),u.isCubeTextureNode?h=i:u.isTextureNode&&(r===void 0&&(r=ka(i),r=as(r.x,r.y.oneMinus())),h=r),h},getSamplerLevelNode:()=>sa,getMIPLevelAlgorithmNode:(u,h)=>pu(u,h)}),c=Ai(t,{getUVNode:u=>{let h=null;return u.isCubeTextureNode?h=fu:u.isTextureNode&&(o===void 0&&(o=ka(fu),o=as(o.x,o.y.oneMinus())),h=o),h},getSamplerLevelNode:()=>li(1),getMIPLevelAlgorithmNode:(u,h)=>pu(u,h)}),l=Gh(a);e.context.radiance.addAssign(l),e.context.iblIrradiance.addAssign(c.mul(Math.PI)),n.radianceContext=l,n.irradianceContext=c}}const oy=Dd;ge(Dd);const Ha=new Map;class Fd extends Un{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.name,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null}customProgramCacheKey(){return hc(this)}build(e){this.construct(e)}construct(e){e.addStack(),e.stack.outputNode=this.constructPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack(),this.normals===!0&&this.constructNormal(e),this.constructDiffuseColor(e),this.constructVariants(e);const t=this.constructLighting(e);e.stack.outputNode=this.constructOutput(e,t,Ji.a),e.addFlow("fragment",e.removeStack())}constructPosition(e){const t=e.object;let n=Ln;return this.positionNode!==null&&(n=n.bypass(Ln.assign(this.positionNode))),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&(n=n.bypass(WM(t))),t.isSkinnedMesh===!0&&(n=n.bypass($M(t))),e.context.vertex=n,HM()}constructDiffuseColor({stack:e,geometry:t}){let n=this.colorNode?Ei(this.colorNode):IM;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ei(n.xyz.mul(cs("color")),n.a)),e.assign(Ji,n);const i=this.opacityNode?li(this.opacityNode):FM;if(e.assign(Ji.a,Ji.a.mul(i)),this.alphaTestNode||this.alphaTest>0){const r=this.alphaTestNode?li(this.alphaTestNode):UM;e.add(Ji.a.lessThanEqual(r).discard())}}constructVariants(){}constructNormal({stack:e}){const t=this.normalNode?Ut(this.normalNode):kM;return e.assign(us,t),t}constructLights(e){const t=this.envNode||e.environmentNode,n=[];t&&n.push(new oy(t)),e.material.aoMap&&n.push(new ry(hs(e.material.aoMap)));let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=sy([...i.lightNodes,...n])),i}constructLightingModel(){}constructLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.constructLights(e):null,c=a?this.constructLightingModel(e):null;let l=Ji.rgb;return a&&a.hasLight!==!1?l=a.lightingContext(c,n,i):n!==null&&(l=Ut(i!==null?id(l,n,i):n)),(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(l=l.add(r?Ut(r):DM)),l}constructOutput(e,t,n){const i=e.renderer,r=e.toneMappingNode;r&&(t=r.context({color:t}));let o=Ei(t,n);o=o.colorSpace(i.outputColorSpace);const a=e.fogNode;return a&&(o=Ei(a.mixAssign(o.rgb),o.a)),o}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=hi.prototype.toJSON.call(this,e),i=qr(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=ay(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}const Od=Fd;function Bd(s){if(typeof s!="function"||!s.name)throw new Error(`Node material ${s.name} is not a class`);if(Ha.has(s.name))throw new Error(`Redefinition of node material ${s.name}`);Ha.set(s.name,s)}function ay(s){const e=Ha.get(s);if(e!==void 0)return new e}Bd(Fd);const cy=new Qa;class Gd extends Od{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(cy),this.setValues(e)}copy(e){return this.colorNode=e.colorNode,this.opacityNode=e.opacityNode,this.alphaTestNode=e.alphaTestNode,this.lightNode=e.lightNode,this.positionNode=e.positionNode,super.copy(e)}}const zd=Gd;Bd(Gd);let aa=null;class Vd extends Tc{constructor(e=null){super(),this.updateType=wt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new Oe,this.colorNode=ui(this.color)}getHash(){return this.light.uuid}constructShadow(e){let t=this.shadowNode;if(t===null){aa===null&&(aa=new zd);const n=this.light.shadow,i=e.getRenderTarget(n.mapSize.width,n.mapSize.height),r=new oc;r.minFilter=it,r.magFilter=it,i.depthTexture=r,n.camera.updateProjectionMatrix();const o=Mi("bias","float",n);let a=ui(n.matrix).mul(cd);a=a.xyz.div(a.w),a=Ut(a.x,a.y.oneMinus(),a.z);let c=hs(r,a.xy);c=c.mul(.5).add(.5).add(o),t=Kr(a.z.lessThan(c).or(a.y.lessThan(1e-6)),1,0),this.rtt=i,this.colorNode=this.colorNode.mul(t),this.shadowNode=t,this.updateBeforeType=wt.RENDER}}construct(e){this.light.castShadow&&this.constructShadow(e)}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:r}=e;r.overrideMaterial=aa,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),i.setRenderTarget(t),i.render(r,n.shadow.camera),i.setRenderTarget(null),r.overrideMaterial=null}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(e){const{light:t}=this;this.color.copy(t.color).multiplyScalar(t.intensity)}}const ly=Vd;ge(Vd);class uy{parseFunction(){console.warn("Abstract function.")}}const hy=uy;class kd{constructor(e,t,n="",i=""){this.type=e,this.inputs=t,this.name=n,this.presicion=i}getCode(){console.warn("Abstract function.")}}kd.isNodeFunction=!0;const dy=kd,fy=/^[fn]*\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)\s*[\-\>]*\s*([a-z_0-9]+)?/i,py=/[a-z_0-9]+/ig,my={f32:"float"},gy=s=>{s=s.trim();const e=s.match(fy);if(e!==null&&e.length===4){const t=e[2],n=[];let i=null;for(;(i=py.exec(t))!==null;)n.push(i);const r=[];let o=0;for(;o<n.length;){const u=n[o++][0];let h=n[o++][0];h=my[h]||h,o<n.length&&/^[fui]\d{2}$/.test(n[o][0])===!0&&o++,r.push(new DS(h,u))}const a=s.substring(e[0].length),c=e[1]!==void 0?e[1]:"";return{type:e[3]||"void",inputs:r,name:c,inputsCode:t,blockCode:a}}else throw new Error("FunctionNode: Function is not a WGSL code.")};class _y extends dy{constructor(e){const{type:t,inputs:n,name:i,inputsCode:r,blockCode:o}=gy(e);super(t,n,i),this.inputsCode=r,this.blockCode=o}getCode(e=this.name){const t=this.type!=="void"?"-> "+this.type:"";return`fn ${e} ( ${this.inputsCode.trim()} ) ${t}`+this.blockCode}}const xy=_y;class vy extends hy{parseFunction(e){return new xy(e)}}const Sy=vy;function My(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}class Ty{constructor(){this.renderItems=[],this.renderItemsIndex=0,this.opaque=[],this.transparent=[],this.lightsNode=iy([]),this.lightsArray=[]}init(){return this.renderItemsIndex=0,this.opaque.length=0,this.transparent.length=0,this.lightsArray.length=0,this}getNextRenderItem(e,t,n,i,r,o){let a=this.renderItems[this.renderItemsIndex];return a===void 0?(a={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:r,group:o},this.renderItems[this.renderItemsIndex]=a):(a.id=e.id,a.object=e,a.geometry=t,a.material=n,a.groupOrder=i,a.renderOrder=e.renderOrder,a.z=r,a.group=o),this.renderItemsIndex++,a}push(e,t,n,i,r,o){const a=this.getNextRenderItem(e,t,n,i,r,o);(n.transparent===!0?this.transparent:this.opaque).push(a)}unshift(e,t,n,i,r,o){const a=this.getNextRenderItem(e,t,n,i,r,o);(n.transparent===!0?this.transparent:this.opaque).unshift(a)}pushLight(e){this.lightsArray.push(e)}getLightsNode(){return this.lightsNode.fromLights(this.lightsArray)}sort(e,t){this.opaque.length>1&&this.opaque.sort(e||My),this.transparent.length>1&&this.transparent.sort(t||yy)}finish(){this.lightsNode.fromLights(this.lightsArray);for(let e=this.renderItemsIndex,t=this.renderItems.length;e<t;e++){const n=this.renderItems[e];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.program=null,n.group=null}}}class Ey{constructor(){this.lists=new WeakMap,this.lists=new zs}get(e,t){const n=this.lists,i=[e,t];let r=n.get(i);return r===void 0&&(r=new Ty,n.set(i,r)),r}dispose(){this.lists=new WeakMap}}const by=Ey;class wy{constructor(){this.depth=!0,this.stencil=!0,this.descriptorGPU=null,this.encoderGPU=null,this.currentPassGPU=null}}class Ay{constructor(){this.renderStates=new zs}get(e,t){const n=[e,t];let i=this.renderStates.get(n);return i===void 0&&(i=new wy,this.renderStates.set(n,i)),i}dispose(){this.renderStates=new zs}}const Ry=Ay;class Cy{constructor(e){this.device=e;const t=`
struct VarysStruct {
	@builtin( position ) Position: vec4<f32>,
	@location( 0 ) vTex : vec2<f32>
};

@vertex
fn main( @builtin( vertex_index ) vertexIndex : u32 ) -> VarysStruct {

	var Varys : VarysStruct;

	var pos = array< vec2<f32>, 4 >(
		vec2<f32>( -1.0,  1.0 ),
		vec2<f32>(  1.0,  1.0 ),
		vec2<f32>( -1.0, -1.0 ),
		vec2<f32>(  1.0, -1.0 )
	);

	var tex = array< vec2<f32>, 4 >(
		vec2<f32>( 0.0, 0.0 ),
		vec2<f32>( 1.0, 0.0 ),
		vec2<f32>( 0.0, 1.0 ),
		vec2<f32>( 1.0, 1.0 )
	);

	Varys.vTex = tex[ vertexIndex ];
	Varys.Position = vec4<f32>( pos[ vertexIndex ], 0.0, 1.0 );

	return Varys;

}
`,n=`
@group( 0 ) @binding( 0 )
var imgSampler : sampler;

@group( 0 ) @binding( 1 )
var img : texture_2d<f32>;

@fragment
fn main( @location( 0 ) vTex : vec2<f32> ) -> @location( 0 ) vec4<f32> {

	return textureSample( img, imgSampler, vTex );

}
`;this.sampler=e.createSampler({minFilter:Fa.Linear}),this.pipelines={},this.mipmapVertexShaderModule=e.createShaderModule({label:"mipmapVertex",code:t}),this.mipmapFragmentShaderModule=e.createShaderModule({label:"mipmapFragment",code:n})}getMipmapPipeline(e){let t=this.pipelines[e];return t===void 0&&(t=this.device.createRenderPipeline({vertex:{module:this.mipmapVertexShaderModule,entryPoint:"main"},fragment:{module:this.mipmapFragmentShaderModule,entryPoint:"main",targets:[{format:e}]},primitive:{topology:Ns.TriangleStrip,stripIndexFormat:Gs.Uint32},layout:"auto"}),this.pipelines[e]=t),t}generateMipmaps(e,t,n=0){const i=this.getMipmapPipeline(t.format),r=this.device.createCommandEncoder({}),o=i.getBindGroupLayout(0);let a=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:$r.TwoD,baseArrayLayer:n});for(let c=1;c<t.mipLevelCount;c++){const l=e.createView({baseMipLevel:c,mipLevelCount:1,dimension:$r.TwoD,baseArrayLayer:n}),u=r.beginRenderPass({colorAttachments:[{view:l,loadOp:Qt.Clear,storeOp:An.Store,clearValue:[0,0,0,0]}]}),h=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:this.sampler},{binding:1,resource:a}]});u.setPipeline(i),u.setBindGroup(0,h),u.draw(4,1,0,0),u.end(),a=l}this.device.queue.submit([r.finish()])}}const Py=Cy;class Ly{constructor(e,t,n){this.device=e,this.properties=t,this.info=n,this.defaultTexture=null,this.depthDefaultTexture=null,this.defaultVideoTexture=null,this.defaultCubeTexture=null,this.defaultSampler=null,this.samplerCache=new Map,this.utils=null}getDefaultSampler(){return this.defaultSampler===null&&(this.defaultSampler=this.device.createSampler({})),this.defaultSampler}getDefaultDepthTexture(){if(this.depthDefaultTexture===null){const e=new oc;e.image.width=1,e.image.height=1,this._uploadTexture(e),this.depthDefaultTexture=this.getTextureGPU(e)}return this.depthDefaultTexture}getDefaultTexture(){if(this.defaultTexture===null){const e=new It;e.minFilter=it,e.magFilter=it,this._uploadTexture(e),this.defaultTexture=this.getTextureGPU(e)}return this.defaultTexture}getDefaultVideoTexture(){if(this.defaultVideoTexture===null){const e=document.getElementById("video"),t=new rv(e);t.minFilter=it,t.magFilter=it,this._uploadVideoTexture(t),this.defaultVideoTexture=this.getTextureGPU(t)}return this.defaultVideoTexture}getDefaultCubeTexture(){if(this.defaultCubeTexture===null){const e=new nc;e.minFilter=it,e.magFilter=it,this._uploadTexture(e),this.defaultCubeTexture=this.getTextureGPU(e)}return this.defaultCubeTexture}getTextureGPU(e){return this.properties.get(e).textureGPU}getSampler(e){return this.properties.get(e).samplerGPU}updateTexture(e){let t=!1;const n=this.properties.get(e);if(e.version>0&&n.version!==e.version){const i=e.image;if(i===void 0)console.warn("THREE.WebGPURenderer: Texture marked for update but image is undefined.");else if(i.complete===!1)console.warn("THREE.WebGPURenderer: Texture marked for update but image is incomplete.");else{if(n.initialized===void 0){n.initialized=!0;const r=Uy.bind(this);n.disposeCallback=r,e.addEventListener("dispose",r),this.info.memory.textures++}e.isVideoTexture?t=this._uploadVideoTexture(e):t=this._uploadTexture(e)}}return n.initializedRTT===!1&&(n.initializedRTT=!0,t=!0),t}updateSampler(e){const t=[];t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy);const n=t.join();let i=this.samplerCache.get(n);i===void 0&&(i=this.device.createSampler({addressModeU:this._convertAddressMode(e.wrapS),addressModeV:this._convertAddressMode(e.wrapT),addressModeW:this._convertAddressMode(e.wrapR),magFilter:this._convertFilterMode(e.magFilter),minFilter:this._convertFilterMode(e.minFilter),mipmapFilter:this._convertFilterMode(e.minFilter),maxAnisotropy:e.anisotropy}),this.samplerCache.set(n,i));const r=this.properties.get(e);r.samplerGPU=i}initRenderTarget(e){const t=this.properties,n=t.get(e);if(n.initialized===void 0){const i=this.device,r=e.width,o=e.height,a=e.texture,c=a.internalFormat||this._getFormat(a),l=a.name?"_"+a.name:"",u=this._needsMipmaps(a),h=this._getMipLevelCount(a,r,o,u),d=i.createTexture({label:"renderTarget"+l,size:{width:r,height:o,depthOrArrayLayers:1},mipLevelCount:h,format:c,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});this.info.memory.textures++,n.colorTextureGPU=d,n.colorTextureFormat=c;const p=t.get(a);if(p.textureGPU=d,p.initializedRTT=!1,e.depthBuffer===!0){const _=e.depthTexture!==null?this._getFormat(e.depthTexture):k.Depth24PlusStencil8,m=i.createTexture({label:"renderTarget"+l+"_depthBuffer",size:{width:r,height:o,depthOrArrayLayers:1},format:_,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});if(this.info.memory.textures++,n.depthTextureGPU=m,n.depthTextureFormat=_,e.depthTexture!==null){const f=t.get(e.depthTexture);f.textureGPU=m,f.initializedRTT=!1}}const g=Ny.bind(this);n.disposeCallback=g,e.addEventListener("dispose",g),n.initialized=!0}}dispose(){this.samplerCache.clear()}_convertAddressMode(e){let t=ta.ClampToEdge;return e===Gr?t=ta.Repeat:e===zr&&(t=ta.MirrorRepeat),t}_convertFilterMode(e){let t=Fa.Linear;return(e===it||e===da||e===wr)&&(t=Fa.Nearest),t}_uploadVideoTexture(e){const t=this.device,n=this.properties.get(e),i=t.importExternalTexture({source:e.source.data});return n.textureGPU=i,!0}_uploadTexture(e){let t=!1;const n=this.device,i=e.image,r=this.properties.get(e),{width:o,height:a,depth:c}=this._getSize(e),l=this._needsMipmaps(e),u=this._getDimension(e),h=this._getMipLevelCount(e,o,a,l),d=e.internalFormat||this._getFormat(e);let p=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;l&&(p|=GPUTextureUsage.RENDER_ATTACHMENT);const g={label:e.name,size:{width:o,height:a,depthOrArrayLayers:c},mipLevelCount:h,sampleCount:1,dimension:u,format:d,usage:p};let _=r.textureGPU;return _===void 0&&(_=n.createTexture(g),t=!0),e.isDataTexture||e.isDataArrayTexture||e.isData3DTexture?this._copyBufferToTexture(i,_,g,l):e.isCompressedTexture?this._copyCompressedBufferToTexture(e.mipmaps,_,g):e.isCubeTexture?i.length===6&&this._copyCubeMapToTexture(i,e,_,g,l):e.isRenderTargetTexture?l===!0&&this._generateMipmaps(_,g):e.isDepthTexture!==!0&&i!==null&&this._copyImageToTexture(i,e,_,g,l),r.textureGPU=_,r.version=e.version,t}_copyBufferToTexture(e,t,n,i,r=0){const o=e.data,a=this._getBytesPerTexel(n.format),c=e.width*a;this.device.queue.writeTexture({texture:t,mipLevel:0,origin:{x:0,y:0,z:r}},o,{offset:0,bytesPerRow:c},{width:e.width,height:e.height,depthOrArrayLayers:e.depth!==void 0?e.depth:1}),i===!0&&this._generateMipmaps(t,n,r)}_copyCubeMapToTexture(e,t,n,i,r){for(let o=0;o<6;o++){const a=e[o];a.isDataTexture?this._copyBufferToTexture(a.image,n,i,r,o):this._copyImageToTexture(a,t,n,i,r,o)}}_copyExternalImageToTexture(e,t,n,i,r=0){this.device.queue.copyExternalImageToTexture({source:e},{texture:t,mipLevel:0,origin:{x:0,y:0,z:r}},{width:e.width,height:e.height,depthOrArrayLayers:1}),i&&this._generateMipmaps(t,n,r)}_copyCompressedBufferToTexture(e,t,n){const i=this._getBlockData(n.format);for(let r=0;r<e.length;r++){const o=e[r],a=o.width,c=o.height,l=Math.ceil(a/i.width)*i.byteLength;this.device.queue.writeTexture({texture:t,mipLevel:r},o.data,{offset:0,bytesPerRow:l},{width:Math.ceil(a/i.width)*i.width,height:Math.ceil(c/i.width)*i.width,depthOrArrayLayers:1})}}_generateMipmaps(e,t,n){this.utils===null&&(this.utils=new Py(this.device)),this.utils.generateMipmaps(e,t,n)}_getBlockData(e){if(e===k.BC1RGBAUnorm||e===k.BC1RGBAUnormSRGB)return{byteLength:8,width:4,height:4};if(e===k.BC2RGBAUnorm||e===k.BC2RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===k.BC3RGBAUnorm||e===k.BC3RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===k.BC4RUnorm||e===k.BC4RSNorm)return{byteLength:8,width:4,height:4};if(e===k.BC5RGUnorm||e===k.BC5RGSnorm)return{byteLength:16,width:4,height:4};if(e===k.BC6HRGBUFloat||e===k.BC6HRGBFloat)return{byteLength:16,width:4,height:4};if(e===k.BC7RGBAUnorm||e===k.BC7RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===k.ETC2RGB8Unorm||e===k.ETC2RGB8UnormSRGB)return{byteLength:8,width:4,height:4};if(e===k.ETC2RGB8A1Unorm||e===k.ETC2RGB8A1UnormSRGB)return{byteLength:8,width:4,height:4};if(e===k.ETC2RGBA8Unorm||e===k.ETC2RGBA8UnormSRGB)return{byteLength:16,width:4,height:4};if(e===k.EACR11Unorm)return{byteLength:8,width:4,height:4};if(e===k.EACR11Snorm)return{byteLength:8,width:4,height:4};if(e===k.EACRG11Unorm)return{byteLength:16,width:4,height:4};if(e===k.EACRG11Snorm)return{byteLength:16,width:4,height:4};if(e===k.ASTC4x4Unorm||e===k.ASTC4x4UnormSRGB)return{byteLength:16,width:4,height:4};if(e===k.ASTC5x4Unorm||e===k.ASTC5x4UnormSRGB)return{byteLength:16,width:5,height:4};if(e===k.ASTC5x5Unorm||e===k.ASTC5x5UnormSRGB)return{byteLength:16,width:5,height:5};if(e===k.ASTC6x5Unorm||e===k.ASTC6x5UnormSRGB)return{byteLength:16,width:6,height:5};if(e===k.ASTC6x6Unorm||e===k.ASTC6x6UnormSRGB)return{byteLength:16,width:6,height:6};if(e===k.ASTC8x5Unorm||e===k.ASTC8x5UnormSRGB)return{byteLength:16,width:8,height:5};if(e===k.ASTC8x6Unorm||e===k.ASTC8x6UnormSRGB)return{byteLength:16,width:8,height:6};if(e===k.ASTC8x8Unorm||e===k.ASTC8x8UnormSRGB)return{byteLength:16,width:8,height:8};if(e===k.ASTC10x5Unorm||e===k.ASTC10x5UnormSRGB)return{byteLength:16,width:10,height:5};if(e===k.ASTC10x6Unorm||e===k.ASTC10x6UnormSRGB)return{byteLength:16,width:10,height:6};if(e===k.ASTC10x8Unorm||e===k.ASTC10x8UnormSRGB)return{byteLength:16,width:10,height:8};if(e===k.ASTC10x10Unorm||e===k.ASTC10x10UnormSRGB)return{byteLength:16,width:10,height:10};if(e===k.ASTC12x10Unorm||e===k.ASTC12x10UnormSRGB)return{byteLength:16,width:12,height:10};if(e===k.ASTC12x12Unorm||e===k.ASTC12x12UnormSRGB)return{byteLength:16,width:12,height:12}}_getBytesPerTexel(e){if(e===k.R8Unorm)return 1;if(e===k.R16Float||e===k.RG8Unorm)return 2;if(e===k.RG16Float||e===k.R32Float||e===k.RGBA8Unorm||e===k.RGBA8UnormSRGB)return 4;if(e===k.RG32Float||e===k.RGBA16Float)return 8;if(e===k.RGBA32Float)return 16}_getDimension(e){let t;return e.isData3DTexture?t=iu.ThreeD:t=iu.TwoD,t}_getFormat(e){const t=e.format,n=e.type,i=e.colorSpace;let r;if(e.isCompressedTexture===!0)switch(t){case Ar:r=i===pe?k.BC1RGBAUnormSRGB:k.BC1RGBAUnorm;break;case Rr:r=i===pe?k.BC2RGBAUnormSRGB:k.BC2RGBAUnorm;break;case Cr:r=i===pe?k.BC3RGBAUnormSRGB:k.BC3RGBAUnorm;break;case fa:r=i===pe?k.ETC2RGB8UnormSRGB:k.ETC2RGB8Unorm;break;case pa:r=i===pe?k.ETC2RGBA8UnormSRGB:k.ETC2RGBA8Unorm;break;case ma:r=i===pe?k.ASTC4x4UnormSRGB:k.ASTC4x4Unorm;break;case ga:r=i===pe?k.ASTC5x4UnormSRGB:k.ASTC5x4Unorm;break;case _a:r=i===pe?k.ASTC5x5UnormSRGB:k.ASTC5x5Unorm;break;case xa:r=i===pe?k.ASTC6x5UnormSRGB:k.ASTC6x5Unorm;break;case va:r=i===pe?k.ASTC6x6UnormSRGB:k.ASTC6x6Unorm;break;case Sa:r=i===pe?k.ASTC8x5UnormSRGB:k.ASTC8x5Unorm;break;case Ma:r=i===pe?k.ASTC8x6UnormSRGB:k.ASTC8x6Unorm;break;case ya:r=i===pe?k.ASTC8x8UnormSRGB:k.ASTC8x8Unorm;break;case Ta:r=i===pe?k.ASTC10x5UnormSRGB:k.ASTC10x5Unorm;break;case Ea:r=i===pe?k.ASTC10x6UnormSRGB:k.ASTC10x6Unorm;break;case ba:r=i===pe?k.ASTC10x8UnormSRGB:k.ASTC10x8Unorm;break;case wa:r=i===pe?k.ASTC10x10UnormSRGB:k.ASTC10x10Unorm;break;case Aa:r=i===pe?k.ASTC12x10UnormSRGB:k.ASTC12x10Unorm;break;case Ra:r=i===pe?k.ASTC12x12UnormSRGB:k.ASTC12x12Unorm;break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}else switch(t){case tn:switch(n){case Pn:r=i===pe?k.RGBA8UnormSRGB:k.RGBA8Unorm;break;case oi:r=k.RGBA16Float;break;case en:r=k.RGBA32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGBAFormat.",n)}break;case Xu:switch(n){case Pn:r=k.R8Unorm;break;case oi:r=k.R16Float;break;case en:r=k.R32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RedFormat.",n)}break;case $u:switch(n){case Pn:r=k.RG8Unorm;break;case oi:r=k.RG16Float;break;case en:r=k.RG32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGFormat.",n)}break;case Xn:switch(n){case Ya:r=k.Depth16Unorm;break;case ii:r=k.Depth24Plus;break;case en:r=k.Depth32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthFormat.",n)}break;case Ri:switch(n){case bi:r=k.Depth24PlusStencil8;break;case en:this.device.features.has(Oa.Depth32FloatStencil8)===!1&&console.error('WebGPURenderer: Depth textures with DepthStencilFormat + FloatType can only be used with the "depth32float-stencil8" GPU feature.'),r=k.Depth32FloatStencil8;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthStencilFormat.",n)}break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}return r}_isHTMLImage(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement}_copyImageToTexture(e,t,n,i,r,o){this._isHTMLImage(e)?this._getImageBitmapFromHTML(e,t).then(a=>{this._copyExternalImageToTexture(a,n,i,r,o)}):this._copyExternalImageToTexture(e,n,i,r,o)}_getImageBitmapFromHTML(e,t){const n=e.width,i=e.height,r={};return r.imageOrientation=t.flipY===!0?"flipY":"none",r.premultiplyAlpha=t.premultiplyAlpha===!0?"premultiply":"default",createImageBitmap(e,0,0,n,i,r)}_getImageBitmap(e,t){const n=e.width,i=e.height;if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement){const r={};return r.imageOrientation=t.flipY===!0?"flipY":"none",r.premultiplyAlpha=t.premultiplyAlpha===!0?"premultiply":"default",createImageBitmap(e,0,0,n,i,r)}else return Promise.resolve(e)}_getMipLevelCount(e,t,n,i){let r;return e.isCompressedTexture?r=e.mipmaps.length:i?r=Math.floor(Math.log2(Math.max(t,n)))+1:r=1,r}_getSize(e){const t=e.image;let n,i,r;if(e.isCubeTexture){const o=t.length>0?t[0].image||t[0]:null;n=o?o.width:1,i=o?o.height:1,r=6}else t!==null?(n=t.width,i=t.height,r=t.depth!==void 0?t.depth:1):n=i=r=1;return{width:n,height:i,depth:r}}_needsMipmaps(e){return e.isCompressedTexture!==!0&&e.generateMipmaps===!0&&e.minFilter!==it&&e.minFilter!==Wt}}function Ny(s){const e=s.target,t=this.properties,n=t.get(e);e.removeEventListener("dispose",n.disposeCallback),n.colorTextureGPU.destroy(),t.remove(e.texture),this.info.memory.textures--,e.depthBuffer===!0&&(n.depthTextureGPU.destroy(),this.info.memory.textures--,e.depthTexture!==null&&t.remove(e.depthTexture)),t.remove(e)}function Uy(s){const e=s.target,t=this.properties.get(e);t.textureGPU.destroy(),e.removeEventListener("dispose",t.disposeCallback),this.properties.remove(e),this.info.memory.textures--}const Iy=Ly;let Cs;const xi=new Oe;class Dy{constructor(e,t){this.renderer=e,this.properties=t,this.boxMesh=null,this.boxMeshNode=null,this.forceClear=!1}clear(){this.forceClear=!0}update(e,t,n){const i=this.renderer,r=e.isScene===!0?e.backgroundNode||this.properties.get(e).backgroundNode||e.background:null;let o=this.forceClear;if(r===null)xi.copy(i._clearColor),Cs=i._clearAlpha;else if(r.isColor===!0)xi.copy(r),Cs=1,o=!0;else if(r.isNode===!0){const l=this.properties.get(e),u=r;xi.copy(i._clearColor),Cs=i._clearAlpha;let h=this.boxMesh;if(h===null){this.boxMeshNode=Ai(u,{getUVNode:()=>ld});const p=new zd;p.colorNode=this.boxMeshNode,p.side=Bt,p.depthTest=!1,p.depthWrite=!1,p.fog=!1,this.boxMesh=h=new nn(new ps(1,1,1),p),h.onBeforeRender=function(g,_,m){this.matrixWorld.copyPosition(m.matrixWorld)}}const d=u.getCacheKey();l.backgroundMeshCacheKey!==d&&(this.boxMeshNode.node=u,h.material.needsUpdate=!0,l.backgroundMeshCacheKey=d),t.unshift(h,h.geometry,h.material,0,0,null)}else console.error("THREE.WebGPURenderer: Unsupported background configuration.",r);const a=n.descriptorGPU.colorAttachments[0],c=n.descriptorGPU.depthStencilAttachment;i.autoClear===!0||o===!0?(i.autoClearColor===!0?(xi.multiplyScalar(Cs),a.clearValue={r:xi.r,g:xi.g,b:xi.b,a:Cs},a.loadOp=Qt.Clear,a.storeOp=An.Store):(a.loadOp=Qt.Load,a.storeOp=An.Store),n.depth&&(i.autoClearDepth===!0?(c.depthClearValue=i._clearDepth,c.depthLoadOp=Qt.Clear,c.depthStoreOp=An.Store):(c.depthLoadOp=Qt.Load,c.depthStoreOp=An.Store)),n.stencil&&(i.autoClearStencil===!0?(c.stencilClearValue=i._clearStencil,c.stencilLoadOp=Qt.Clear,c.stencilStoreOp=An.Store):(c.stencilLoadOp=Qt.Load,c.stencilStoreOp=An.Store))):(a.loadOp=Qt.Load,a.storeOp=An.Store,n.depth&&(c.depthLoadOp=Qt.Load,c.depthStoreOp=An.Store),n.stencil&&(c.stencilLoadOp=Qt.Load,c.stencilStoreOp=An.Store)),this.forceClear=!1}}const Fy=Dy;class Oy{constructor(e=""){this.name=e,this.visibility=null,this.type=null,this.isShared=!1}setVisibility(e){this.visibility=e}}const Ec=Oy;function Wd(s){return s+(ni-s%ni)%ni}function By(s,e=4){const n=Hd(e)*s;return Wd(n)}function Hd(s){return s+(4-s%4)%4}class Gy extends Ec{constructor(e,t,n=null){super(e),this.isBuffer=!0,this.bytesPerElement=Float32Array.BYTES_PER_ELEMENT,this.type=t,this.visibility=GPUShaderStage.VERTEX,this.usage=GPUBufferUsage.COPY_DST,this.buffer=n,this.bufferGPU=null}getByteLength(){return Wd(this.buffer.byteLength)}getBuffer(){return this.buffer}update(){return!0}}const Xd=Gy;class zy extends Xd{constructor(e,t=null){super(e,co.UniformBuffer,t),this.isUniformBuffer=!0,this.usage|=GPUBufferUsage.UNIFORM}}const $d=zy;class Vy extends $d{constructor(e){super(e),this.isUniformsGroup=!0,this.uniforms=[]}addUniform(e){return this.uniforms.push(e),this}removeUniform(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}getBuffer(){let e=this.buffer;if(e===null){const t=this.getByteLength();e=new Float32Array(new ArrayBuffer(t)),this.buffer=e}return e}getByteLength(){let e=0;for(let t=0,n=this.uniforms.length;t<n;t++){const i=this.uniforms[t],r=e%ni,o=ni-r;r!==0&&o-i.boundary<0?e+=ni-r:r%i.boundary!==0&&(e+=r%i.boundary),i.offset=e/this.bytesPerElement,e+=i.itemSize*this.bytesPerElement}return Math.ceil(e/ni)*ni}update(){let e=!1;for(const t of this.uniforms)this.updateByType(t)===!0&&(e=!0);return e}updateByType(e){if(e.isFloatUniform)return this.updateNumber(e);if(e.isVector2Uniform)return this.updateVector2(e);if(e.isVector3Uniform)return this.updateVector3(e);if(e.isVector4Uniform)return this.updateVector4(e);if(e.isColorUniform)return this.updateColor(e);if(e.isMatrix3Uniform)return this.updateMatrix3(e);if(e.isMatrix4Uniform)return this.updateMatrix4(e);console.error("THREE.WebGPUUniformsGroup: Unsupported uniform type.",e)}updateNumber(e){let t=!1;const n=this.buffer,i=e.getValue(),r=e.offset;return n[r]!==i&&(n[r]=i,t=!0),t}updateVector2(e){let t=!1;const n=this.buffer,i=e.getValue(),r=e.offset;return(n[r+0]!==i.x||n[r+1]!==i.y)&&(n[r+0]=i.x,n[r+1]=i.y,t=!0),t}updateVector3(e){let t=!1;const n=this.buffer,i=e.getValue(),r=e.offset;return(n[r+0]!==i.x||n[r+1]!==i.y||n[r+2]!==i.z)&&(n[r+0]=i.x,n[r+1]=i.y,n[r+2]=i.z,t=!0),t}updateVector4(e){let t=!1;const n=this.buffer,i=e.getValue(),r=e.offset;return(n[r+0]!==i.x||n[r+1]!==i.y||n[r+2]!==i.z||n[r+4]!==i.w)&&(n[r+0]=i.x,n[r+1]=i.y,n[r+2]=i.z,n[r+3]=i.w,t=!0),t}updateColor(e){let t=!1;const n=this.buffer,i=e.getValue(),r=e.offset;return(n[r+0]!==i.r||n[r+1]!==i.g||n[r+2]!==i.b)&&(n[r+0]=i.r,n[r+1]=i.g,n[r+2]=i.b,t=!0),t}updateMatrix3(e){let t=!1;const n=this.buffer,i=e.getValue().elements,r=e.offset;return(n[r+0]!==i[0]||n[r+1]!==i[1]||n[r+2]!==i[2]||n[r+4]!==i[3]||n[r+5]!==i[4]||n[r+6]!==i[5]||n[r+8]!==i[6]||n[r+9]!==i[7]||n[r+10]!==i[8])&&(n[r+0]=i[0],n[r+1]=i[1],n[r+2]=i[2],n[r+4]=i[3],n[r+5]=i[4],n[r+6]=i[5],n[r+8]=i[6],n[r+9]=i[7],n[r+10]=i[8],t=!0),t}updateMatrix4(e){let t=!1;const n=this.buffer,i=e.getValue().elements,r=e.offset;return ky(n,i,r)===!1&&(n.set(i,r),t=!0),t}}function ky(s,e,t){for(let n=0,i=e.length;n<i;n++)if(s[t+n]!==e[n])return!1;return!0}const Wy=Vy;class Ni{constructor(e,t=null){this.name=e,this.value=t,this.boundary=0,this.itemSize=0,this.offset=0}setValue(e){this.value=e}getValue(){return this.value}}class Hy extends Ni{constructor(e,t=0){super(e,t),this.isFloatUniform=!0,this.boundary=4,this.itemSize=1}}class Xy extends Ni{constructor(e,t=new Ue){super(e,t),this.isVector2Uniform=!0,this.boundary=8,this.itemSize=2}}class $y extends Ni{constructor(e,t=new w){super(e,t),this.isVector3Uniform=!0,this.boundary=16,this.itemSize=3}}class qy extends Ni{constructor(e,t=new qe){super(e,t),this.isVector4Uniform=!0,this.boundary=16,this.itemSize=4}}class Yy extends Ni{constructor(e,t=new Oe){super(e,t),this.isColorUniform=!0,this.boundary=16,this.itemSize=3}}class jy extends Ni{constructor(e,t=new ze){super(e,t),this.isMatrix3Uniform=!0,this.boundary=48,this.itemSize=12}}class Ky extends Ni{constructor(e,t=new Ie){super(e,t),this.isMatrix4Uniform=!0,this.boundary=64,this.itemSize=16}}class Zy extends Hy{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class Jy extends Xy{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class Qy extends $y{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class eT extends qy{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class tT extends Yy{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class nT extends jy{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class iT extends Ky{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class sT extends Ec{constructor(e,t){super(e),this.isSampler=!0,this.texture=t,this.type=co.Sampler,this.visibility=GPUShaderStage.FRAGMENT,this.samplerGPU=null}getTexture(){return this.texture}}const rT=sT;class oT extends rT{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}const aT=oT;class qd extends Ec{constructor(e,t){super(e),this.isSampledTexture=!0,this.texture=t,this.dimension=$r.TwoD,this.type=co.SampledTexture,this.visibility=GPUShaderStage.FRAGMENT,this.aspect=t.isDepthTexture?su.DepthOnly:su.All,this.textureGPU=null}getTexture(){return this.texture}}class cT extends qd{constructor(e,t){super(e,t),this.isSampledCubeTexture=!0,this.dimension=$r.Cube}}class lT extends qd{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}class uT extends cT{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}class hT extends Xd{constructor(e,t){super(e,co.StorageBuffer,t.array),this.isStorageBuffer=!0,this.usage|=GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE,this.attribute=t}}const dT=hT;class fT extends ci{constructor(e,t,n={}){super(e,t,n)}}const pT=fT,_u={vertex:GPUShaderStage.VERTEX,fragment:GPUShaderStage.FRAGMENT,compute:GPUShaderStage.COMPUTE},mT={instance:!0},gT={float:"f32",int:"i32",uint:"u32",bool:"bool",color:"vec3<f32>",vec2:"vec2<f32>",ivec2:"vec2<i32>",uvec2:"vec2<u32>",bvec2:"vec2<bool>",vec3:"vec3<f32>",ivec3:"vec3<i32>",uvec3:"vec3<u32>",bvec3:"vec3<bool>",vec4:"vec4<f32>",ivec4:"vec4<i32>",uvec4:"vec4<u32>",bvec4:"vec4<bool>",mat3:"mat3x3<f32>",imat3:"mat3x3<i32>",umat3:"mat3x3<u32>",bmat3:"mat3x3<bool>",mat4:"mat4x4<f32>",imat4:"mat4x4<i32>",umat4:"mat4x4<u32>",bmat4:"mat4x4<bool>"},_T={dFdx:"dpdx",dFdy:"dpdy",mod:"threejs_mod",lessThanEqual:"threejs_lessThanEqual",inversesqrt:"inverseSqrt"},xu={lessThanEqual:new oa(`
fn threejs_lessThanEqual( a : vec3<f32>, b : vec3<f32> ) -> vec3<bool> {

	return vec3<bool>( a.x <= b.x, a.y <= b.y, a.z <= b.z );

}
`),mod:new oa(`
fn threejs_mod( x : f32, y : f32 ) -> f32 {

	return x - y * floor( x / y );

}
`),repeatWrapping:new oa(`
fn threejs_repeatWrapping( uv : vec2<f32>, dimension : vec2<u32> ) -> vec2<u32> {

	let uvScaled = vec2<u32>( uv * vec2<f32>( dimension ) );

	return ( ( uvScaled % dimension ) + dimension ) % dimension;

}
`)};class xT extends US{constructor(e,t){super(e,t,new Sy),this.bindings={vertex:[],fragment:[],compute:[]},this.bindingsOffset={vertex:0,fragment:0,compute:0},this.uniformsGroup={},this.builtins={vertex:new Map,fragment:new Map,compute:new Map,attribute:new Map}}build(){const{object:e,material:t}=this;return t!==null?Od.fromMaterial(t).build(this):this.addFlow("compute",e),super.build()}getSampler(e,t,n=this.shaderStage){if(n==="fragment")return`textureSample( ${e}, ${e}_sampler, ${t} )`;{this._include("repeatWrapping");const i=`textureDimensions( ${e}, 0 )`;return`textureLoad( ${e}, threejs_repeatWrapping( ${t}, ${i} ), 0 )`}}getVideoSampler(e,t,n=this.shaderStage){if(n==="fragment")return`textureSampleBaseClampToEdge( ${e}, ${e}_sampler, vec2<f32>( ${t}.x, 1.0 - ${t}.y ) )`;console.error(`WebGPURenderer: THREE.VideoTexture does not support ${n} shader.`)}getSamplerLevel(e,t,n,i=this.shaderStage){if(i==="fragment")return`textureSampleLevel( ${e}, ${e}_sampler, ${t}, ${n} )`;{this._include("repeatWrapping");const r=`textureDimensions( ${e}, 0 )`;return`textureLoad( ${e}, threejs_repeatWrapping( ${t}, ${r} ), i32( ${n} ) )`}}getTexture(e,t,n,i=this.shaderStage){let r=null;return e.isVideoTexture===!0?r=this.getVideoSampler(t,n,i):r=this.getSampler(t,n,i),r}getTextureLevel(e,t,n,i,r=this.shaderStage){let o=null;return e.isVideoTexture===!0?o=this.getVideoSampler(t,n,r):o=this.getSamplerLevel(t,n,i,r),o}getPropertyName(e,t=this.shaderStage){if(e.isNodeVarying===!0&&e.needsInterpolation===!0){if(t==="vertex")return`NodeVaryings.${e.name}`}else if(e.isNodeUniform===!0){const n=e.name,i=e.type;return i==="texture"||i==="cubeTexture"?n:i==="buffer"||i==="storageBuffer"?`NodeBuffer_${e.node.id}.${n}`:`NodeUniforms.${n}`}return super.getPropertyName(e)}getBindings(){const e=this.bindings;return this.material!==null?[...e.vertex,...e.fragment]:e.compute}getUniformFromNode(e,t,n){const i=super.getUniformFromNode(e,t,n),r=this.getDataFromNode(e,t);if(r.uniformGPU===void 0){let o;const a=this.bindings[t];if(n==="texture"||n==="cubeTexture"){const c=new aT(`${i.name}_sampler`,i.node);let l=null;n==="texture"?l=new lT(i.name,i.node):n==="cubeTexture"&&(l=new uT(i.name,i.node));const u=a[a.length-1],h=u&&u.isUniformsGroup?a.length-1:a.length;t==="fragment"?(a.splice(h,0,c,l),o=[c,l]):(a.splice(h,0,l),o=[l])}else if(n==="buffer"||n==="storageBuffer"){const c=n==="storageBuffer"?dT:$d,l=new c("NodeBuffer_"+e.id,e.value);l.setVisibility(_u[t]);const u=a[a.length-1],h=u&&u.isUniformsGroup?a.length-1:a.length;a.splice(h,0,l),o=l}else{let c=this.uniformsGroup[t];if(c===void 0&&(c=new Wy("nodeUniforms"),c.setVisibility(_u[t]),this.uniformsGroup[t]=c,a.push(c)),e.isArrayUniformNode===!0){o=[];for(const l of e.nodes){const u=this._getNodeUniform(l,n);u.boundary=By(u.itemSize),u.itemSize=Hd(u.itemSize),c.addUniform(u),o.push(u)}}else o=this._getNodeUniform(i,n),c.addUniform(o)}r.uniformGPU=o,t==="vertex"&&(this.bindingsOffset.fragment=a.length)}return i}isReference(e){return super.isReference(e)||e==="texture_2d"||e==="texture_cube"}getBuiltin(e,t,n,i=this.shaderStage){const r=this.builtins[i];return r.has(e)===!1&&r.set(e,{name:e,property:t,type:n}),t}getInstanceIndex(){return this.shaderStage==="vertex"?this.getBuiltin("instance_index","instanceIndex","u32","attribute"):"instanceIndex"}getFrontFacing(){return this.getBuiltin("front_facing","isFront","bool")}getFragCoord(){return this.getBuiltin("position","fragCoord","vec4<f32>","fragment")}isFlipY(){return!1}getAttributes(e){const t=[];if(e==="compute"&&this.getBuiltin("global_invocation_id","id","vec3<u32>","attribute"),e==="vertex"||e==="compute"){for(const{name:r,property:o,type:a}of this.builtins.attribute.values())t.push(`@builtin( ${r} ) ${o} : ${a}`);const n=this.attributes,i=n.length;for(let r=0;r<i;r++){const o=n[r],a=o.name,c=this.getType(o.type);t.push(`@location( ${r} ) ${a} : ${c}`)}}return t.join(`,
	`)}getVars(e){const t=[],n=this.vars[e];for(const i of n){const r=i.name,o=this.getType(i.type);t.push(`	var ${r} : ${o};`)}return`
${t.join(`
`)}
`}getVaryings(e){const t=[];if(e==="vertex"&&this.getBuiltin("position","Vertex","vec4<f32>","vertex"),e==="vertex"||e==="fragment"){const i=this.varyings,r=this.vars[e];for(let o=0;o<i.length;o++){const a=i[o];a.needsInterpolation?t.push(`@location( ${o} ) ${a.name} : ${this.getType(a.type)}`):r.includes(a)===!1&&r.push(a)}}for(const{name:i,property:r,type:o}of this.builtins[e].values())t.push(`@builtin( ${i} ) ${r} : ${o}`);const n=t.join(`,
	`);return e==="vertex"?this._getWGSLStruct("NodeVaryingsStruct","	"+n):n}getUniforms(e){const t=this.uniforms[e],n=[],i=[],r=[];let o=this.bindingsOffset[e];for(const c of t)if(c.type==="texture"||c.type==="cubeTexture"){e==="fragment"&&n.push(`@group( 0 ) @binding( ${o++} ) var ${c.name}_sampler : sampler;`);const l=c.node.value;let u;l.isCubeTexture===!0?u="texture_cube<f32>":l.isDepthTexture===!0?u="texture_depth_2d":l.isVideoTexture===!0?u="texture_external":u="texture_2d<f32>",n.push(`@group( 0 ) @binding( ${o++} ) var ${c.name} : ${u};`)}else if(c.type==="buffer"||c.type==="storageBuffer"){const l=c.node,u=this.getType(l.bufferType),h=l.bufferCount,d=h>0?", "+h:"",p=`	${c.name} : array< ${u}${d} >
`,g=l.isStorageBufferNode?"storage,read_write":"uniform";i.push(this._getWGSLStructBinding("NodeBuffer_"+l.id,p,g,o++))}else{const l=this.getType(this.getVectorType(c.type));if(Array.isArray(c.value)===!0){const u=c.value.length;r.push(`uniform ${l}[ ${u} ] ${c.name}`)}else r.push(`	${c.name} : ${l}`)}let a=n.join(`
`);return a+=i.join(`
`),r.length>0&&(a+=this._getWGSLStructBinding("NodeUniforms",r.join(`,
`),"uniform",o++)),a}buildCode(){const e=this.material!==null?{fragment:{},vertex:{}}:{compute:{}};for(const t in e){let n=`// code

`;n+=this.flowCode[t];const i=this.flowNodes[t],r=i[i.length-1];for(const a of i){const c=this.getFlowData(a),l=a.name;l&&(n.length>0&&(n+=`
`),n+=`	// flow -> ${l}
	`),n+=`${c.code}
	`,a===r&&t!=="compute"&&(n+=`// result
	`,t==="vertex"?n+="NodeVaryings.Vertex = ":t==="fragment"&&(n+="return "),n+=`${c.result};`)}const o=e[t];o.uniforms=this.getUniforms(t),o.attributes=this.getAttributes(t),o.varyings=this.getVaryings(t),o.vars=this.getVars(t),o.codes=this.getCodes(t),o.flow=n}this.material!==null?(this.vertexShader=this._getWGSLVertexCode(e.vertex),this.fragmentShader=this._getWGSLFragmentCode(e.fragment)):this.computeShader=this._getWGSLComputeCode(e.compute,(this.object.workgroupSize||[64]).join(", "))}getRenderTarget(e,t,n){return new pT(e,t,n)}getMethod(e){return xu[e]!==void 0&&this._include(e),_T[e]||e}getType(e){return gT[e]||e}isAvailable(e){return mT[e]===!0}_include(e){xu[e].build(this)}_getNodeUniform(e,t){if(t==="float")return new Zy(e);if(t==="vec2")return new Jy(e);if(t==="vec3")return new Qy(e);if(t==="vec4")return new eT(e);if(t==="color")return new tT(e);if(t==="mat3")return new nT(e);if(t==="mat4")return new iT(e);throw new Error(`Uniform "${t}" not declared.`)}_getWGSLVertexCode(e){return`${this.getSignature()}

// uniforms
${e.uniforms}

// varyings
${e.varyings}

// codes
${e.codes}

@vertex
fn main( ${e.attributes} ) -> NodeVaryingsStruct {

	// system
	var NodeVaryings: NodeVaryingsStruct;

	// vars
	${e.vars}

	// flow
	${e.flow}

	return NodeVaryings;

}
`}_getWGSLFragmentCode(e){return`${this.getSignature()}

// uniforms
${e.uniforms}

// codes
${e.codes}

@fragment
fn main( ${e.varyings} ) -> @location( 0 ) vec4<f32> {

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`}_getWGSLComputeCode(e,t){return`${this.getSignature()}
// system
var<private> instanceIndex : u32;

// uniforms
${e.uniforms}

// codes
${e.codes}

@compute @workgroup_size( ${t} )
fn main( ${e.attributes} ) {

	// system
	instanceIndex = id.x;

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`}_getWGSLStruct(e,t){return`
struct ${e} {
${t}
};`}_getWGSLStructBinding(e,t,n,i=0,r=0){const o=e+"Struct";return`${this._getWGSLStruct(o,t)}
@binding( ${i} ) @group( ${r} )
var<${n}> ${e} : ${o};`}}const vu=xT;class vT{constructor(e,t){this.renderer=e,this.properties=t,this.nodeFrame=new du}get(e){const t=this.properties.get(e);let n=t.nodeBuilder;return n===void 0&&(n=new vu(e.object,this.renderer),n.material=e.material,n.lightsNode=e.lightsNode,n.environmentNode=this.getEnvironmentNode(e.scene),n.fogNode=this.getFogNode(e.scene),n.toneMappingNode=this.getToneMappingNode(),n.build(),t.nodeBuilder=n),n}getForCompute(e){const t=this.properties.get(e);let n=t.nodeBuilder;return n===void 0&&(n=new vu(e,this.renderer),n.build(),t.nodeBuilder=n),n}remove(e){const t=this.properties.get(e);delete t.nodeBuilder}getEnvironmentNode(e){return e.environmentNode||this.properties.get(e).environmentNode||null}getFogNode(e){return e.fogNode||this.properties.get(e).fogNode||null}getToneMappingNode(){return this.renderer.toneMappingNode||this.properties.get(this.renderer).toneMappingNode||null}getCacheKey(e,t){const n=this.getEnvironmentNode(e),i=this.getFogNode(e),r=this.getToneMappingNode(),o=[];return t&&o.push("lightsNode:"+t.getCacheKey()),n&&o.push("environmentNode:"+n.getCacheKey()),i&&o.push("fogNode:"+i.getCacheKey()),r&&o.push("toneMappingNode:"+r.getCacheKey()),"{"+o.join(",")+"}"}updateToneMapping(){const e=this.renderer,t=this.properties.get(e),n=e.toneMapping;n!==sn?t.toneMapping!==n&&(t.toneMappingNode=QM(n,Mi("toneMappingExposure","float",e)),t.toneMapping=n):(delete t.toneMappingNode,delete t.toneMapping)}updateBackground(e){const t=this.properties.get(e),n=e.background;if(n){if(t.background!==n){let i=null;if(n.isCubeTexture===!0)i=Wa(n,nd(cd,Va));else if(n.isTexture===!0){let r=null;n.mapping===Or||n.mapping===Br?r=ka():r=ey,i=hs(n,r)}else n.isColor!==!0&&console.error("WebGPUNodes: Unsupported background configuration.",n);t.backgroundNode=i,t.background=n}}else t.backgroundNode&&(delete t.backgroundNode,delete t.background)}updateFog(e){const t=this.properties.get(e),n=e.fog;if(n){if(t.fog!==n){let i=null;n.isFogExp2?i=Ld(Mi("color","color",n),Mi("density","float",n)):n.isFog?i=Cd(Mi("color","color",n),Mi("near","float",n),Mi("far","float",n)):console.error("WebGPUNodes: Unsupported fog configuration.",n),t.fogNode=i,t.fog=n}}else delete t.fogNode,delete t.fog}updateEnvironment(e){const t=this.properties.get(e),n=e.environment;if(n){if(t.environment!==n){let i=null;n.isCubeTexture===!0?i=Wa(n):n.isTexture===!0?i=hs(n):console.error("WebGPUNodes: Unsupported environment configuration.",n),t.environmentNode=i,t.environment=n}}else t.environmentNode&&(delete t.environmentNode,delete t.environment)}getNodeFrame(e){const t=this.nodeFrame;return t.scene=e.scene,t.object=e.object,t.camera=e.camera,t.renderer=e.renderer,t.material=e.material,t}updateBefore(e){const t=this.getNodeFrame(e),n=this.get(e);for(const i of n.updateBeforeNodes)t.updateBeforeNode(i)}update(e){const t=this.getNodeFrame(e),n=this.get(e);for(const i of n.updateNodes)t.updateNode(i)}dispose(){this.nodeFrame=new du}}const ST=vT;class MT{constructor(e){this.renderer=e}getCurrentColorSpace(){const e=this.renderer,t=e.getRenderTarget();return t!==null?t.texture.colorSpace:e.outputColorSpace}getCurrentColorFormat(){let e;const t=this.renderer,n=t.getRenderTarget();return n!==null?e=t._properties.get(n).colorTextureFormat:e=k.BGRA8Unorm,e}getCurrentDepthStencilFormat(){let e;const t=this.renderer,n=t.getRenderTarget();return n!==null?e=t._properties.get(n).depthTextureFormat:e=k.Depth24PlusStencil8,e}getPrimitiveTopology(e,t){if(e.isPoints)return Ns.PointList;if(e.isLineSegments||e.isMesh&&t.wireframe===!0)return Ns.LineList;if(e.isLine)return Ns.LineStrip;if(e.isMesh)return Ns.TriangleList}getSampleCount(){return this.renderer._parameters.sampleCount}}const yT=MT;console.info("THREE.WebGPURenderer: Modified Matrix4.makePerspective() and Matrix4.makeOrtographic() to work with WebGPU, see https://github.com/mrdoob/three.js/issues/20276.");Ie.prototype.makePerspective=function(s,e,t,n,i,r){const o=this.elements,a=2*i/(e-s),c=2*i/(t-n),l=(e+s)/(e-s),u=(t+n)/(t-n),h=-r/(r-i),d=-r*i/(r-i);return o[0]=a,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this};Ie.prototype.makeOrthographic=function(s,e,t,n,i,r){const o=this.elements,a=1/(e-s),c=1/(t-n),l=1/(r-i),u=(e+s)*a,h=(t+n)*c,d=i*l;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-1*l,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this};ks.prototype.setFromProjectionMatrix=function(s){const e=this.planes,t=s.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],h=t[8],d=t[9],p=t[10],g=t[11],_=t[12],m=t[13],f=t[14],T=t[15];return e[0].setComponents(o-n,u-a,g-h,T-_).normalize(),e[1].setComponents(o+n,u+a,g+h,T+_).normalize(),e[2].setComponents(o+i,u+c,g+d,T+m).normalize(),e[3].setComponents(o-i,u-c,g-d,T-m).normalize(),e[4].setComponents(o-r,u-l,g-p,T-f).normalize(),e[5].setComponents(r,l,p,f).normalize(),this};const ca=new ks,Er=new Ie,Ps=new w;class TT{constructor(e={}){this.isWebGPURenderer=!0,this.domElement=e.canvas!==void 0?e.canvas:this._createCanvasElement(),this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.outputColorSpace=pe,this.toneMapping=sn,this.toneMappingExposure=1,this.sortObjects=!0,this._parameters=Object.assign({},e),this._pixelRatio=1,this._width=this.domElement.width,this._height=this.domElement.height,this._viewport=null,this._scissor=null,this._adapter=null,this._device=null,this._context=null,this._colorBuffer=null,this._depthBuffer=null,this._info=null,this._properties=null,this._attributes=null,this._geometries=null,this._nodes=null,this._bindings=null,this._objects=null,this._renderPipelines=null,this._computePipelines=null,this._renderLists=null,this._renderStates=null,this._textures=null,this._background=null,this._animation=new Xv,this._currentRenderState=null,this._opaqueSort=null,this._transparentSort=null,this._clearAlpha=1,this._clearColor=new Oe(0),this._clearDepth=1,this._clearStencil=0,this._renderTarget=null,this._initialized=!1,this._parameters.antialias=e.antialias===!0,this._parameters.antialias===!0?this._parameters.sampleCount=e.sampleCount===void 0?4:e.sampleCount:this._parameters.sampleCount=1,this._parameters.requiredLimits=e.requiredLimits===void 0?{}:e.requiredLimits,this.shadow={shadowMap:{}}}async init(){if(this._initialized===!0)throw new Error("WebGPURenderer: Device has already been initialized.");const e=this._parameters,t={powerPreference:e.powerPreference},n=await navigator.gpu.requestAdapter(t);if(n===null)throw new Error("WebGPURenderer: Unable to create WebGPU adapter.");const i=Object.values(Oa),r=[];for(const l of i)n.features.has(l)&&r.push(l);const o={requiredFeatures:r,requiredLimits:e.requiredLimits},a=await n.requestDevice(o),c=e.context!==void 0?e.context:this.domElement.getContext("webgpu");this._adapter=n,this._device=a,this._context=c,this._configureContext(),this._info=new t0,this._properties=new i0,this._attributes=new Kv(a),this._geometries=new Qv(this._attributes,this._properties,this._info),this._textures=new Iy(a,this._properties,this._info),this._utils=new yT(this),this._nodes=new ST(this,this._properties),this._objects=new Yv(this,this._nodes,this._geometries,this._info),this._computePipelines=new h0(a,this._nodes),this._renderPipelines=new l0(a,this._nodes,this._utils),this._bindings=this._renderPipelines.bindings=new f0(a,this._info,this._properties,this._textures,this._renderPipelines,this._computePipelines,this._attributes,this._nodes),this._renderLists=new by,this._renderStates=new Ry,this._background=new Fy(this,this._properties),this._setupColorBuffer(),this._setupDepthBuffer(),this._animation.setNodes(this._nodes),this._animation.start(),this._initialized=!0}async render(e,t){this._initialized===!1&&await this.init();const n=this._nodes.nodeFrame,i=n.renderId,r=this._currentRenderState,o=this._renderStates.get(e,t),a=this._renderTarget;this._currentRenderState=o,n.renderId++,this._animation.isAnimating===!1&&n.update(),e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),this._info.autoReset===!0&&this._info.reset(),Er.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ca.setFromProjectionMatrix(Er);const c=this._renderLists.get(e,t);c.init(),this._projectObject(e,t,0,c),c.finish(),this.sortObjects===!0&&c.sort(this._opaqueSort,this._transparentSort),o.descriptorGPU={colorAttachments:[{view:null}],depthStencilAttachment:{view:null}};const l=o.descriptorGPU.colorAttachments[0],u=o.descriptorGPU.depthStencilAttachment;if(a!==null){this._textures.initRenderTarget(a);const f=this._properties.get(a);l.view=f.colorTextureGPU.createView(),u.view=f.depthTextureGPU.createView(),o.stencil=a.depthTexture?a.depthTexture.format!==Xn:!0}else this._parameters.antialias===!0?(l.view=this._colorBuffer.createView(),l.resolveTarget=this._context.getCurrentTexture().createView()):(l.view=this._context.getCurrentTexture().createView(),l.resolveTarget=void 0),u.view=this._depthBuffer.createView();this._nodes.updateEnvironment(e),this._nodes.updateFog(e),this._nodes.updateBackground(e),this._nodes.updateToneMapping(),this._background.update(e,c,o);const h=this._device;o.encoderGPU=h.createCommandEncoder({}),o.currentPassGPU=o.encoderGPU.beginRenderPass(o.descriptorGPU);const d=this._viewport;if(d!==null){const f=Math.floor(d.width*this._pixelRatio),T=Math.floor(d.height*this._pixelRatio);o.currentPassGPU.setViewport(d.x,d.y,f,T,d.minDepth,d.maxDepth)}const p=this._scissor;if(p!==null){const f=Math.floor(p.width*this._pixelRatio),T=Math.floor(p.height*this._pixelRatio);o.currentPassGPU.setScissorRect(p.x,p.y,f,T)}const g=c.opaque,_=c.transparent,m=c.lightsNode;g.length>0&&this._renderObjects(g,t,e,m,o),_.length>0&&this._renderObjects(_,t,e,m,o),o.currentPassGPU.end(),h.queue.submit([o.encoderGPU.finish()]),n.renderId=i,this._currentRenderState=r}setAnimationLoop(e){this._initialized===!1&&this.init();const t=this._animation;t.setAnimationLoop(e),e===null?t.stop():t.start()}async getArrayBuffer(e){return await this._attributes.getArrayBuffer(e)}getContext(){return this._context}getPixelRatio(){return this._pixelRatio}getDrawingBufferSize(e){return e.set(this._width*this._pixelRatio,this._height*this._pixelRatio).floor()}getSize(e){return e.set(this._width,this._height)}setPixelRatio(e=1){this._pixelRatio=e,this.setSize(this._width,this._height,!1)}setDrawingBufferSize(e,t,n){this._width=e,this._height=t,this._pixelRatio=n,this.domElement.width=Math.floor(e*n),this.domElement.height=Math.floor(t*n),this._configureContext(),this._setupColorBuffer(),this._setupDepthBuffer()}setSize(e,t,n=!0){this._width=e,this._height=t,this.domElement.width=Math.floor(e*this._pixelRatio),this.domElement.height=Math.floor(t*this._pixelRatio),n===!0&&(this.domElement.style.width=e+"px",this.domElement.style.height=t+"px"),this._configureContext(),this._setupColorBuffer(),this._setupDepthBuffer()}setOpaqueSort(e){this._opaqueSort=e}setTransparentSort(e){this._transparentSort=e}getScissor(e){const t=this._scissor;return e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e}setScissor(e,t,n,i){e===null?this._scissor=null:this._scissor={x:e,y:t,width:n,height:i}}copyFramebufferToRenderTarget(e){const t=this._currentRenderState,{encoderGPU:n,descriptorGPU:i}=t,r=e.texture;r.internalFormat=k.BGRA8Unorm,this._textures.initRenderTarget(e);const o=this._context.getCurrentTexture(),a=this._textures.getTextureGPU(r);t.currentPassGPU.end(),n.copyTextureToTexture({texture:o},{texture:a},[r.image.width,r.image.height]),i.colorAttachments[0].loadOp=Qt.Load,t.depth&&(i.depthStencilAttachment.depthLoadOp=Qt.Load),t.stencil&&(i.depthStencilAttachment.stencilLoadOp=Qt.Load),t.currentPassGPU=n.beginRenderPass(i)}getViewport(e){const t=this._viewport;return e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e.minDepth=t.minDepth,e.maxDepth=t.maxDepth,e}setViewport(e,t,n,i,r=0,o=1){e===null?this._viewport=null:this._viewport={x:e,y:t,width:n,height:i,minDepth:r,maxDepth:o}}getClearColor(e){return e.copy(this._clearColor)}setClearColor(e,t=1){this._clearColor.set(e),this._clearAlpha=t}getClearAlpha(){return this._clearAlpha}setClearAlpha(e){this._clearAlpha=e}getClearDepth(){return this._clearDepth}setClearDepth(e){this._clearDepth=e}getClearStencil(){return this._clearStencil}setClearStencil(e){this._clearStencil=e}clear(){this._background&&this._background.clear()}dispose(){this._objects.dispose(),this._properties.dispose(),this._renderPipelines.dispose(),this._computePipelines.dispose(),this._nodes.dispose(),this._bindings.dispose(),this._info.dispose(),this._renderLists.dispose(),this._renderStates.dispose(),this._textures.dispose(),this.setRenderTarget(null),this.setAnimationLoop(null)}setRenderTarget(e){this._renderTarget=e}async compute(...e){this._initialized===!1&&await this.init();const t=this._device,n=this._computePipelines,i=t.createCommandEncoder({}),r=i.beginComputePass();for(const o of e){n.has(o)===!1&&o.onInit({renderer:this});const a=n.get(o);r.setPipeline(a);const c=this._bindings.getForCompute(o).group;this._bindings.update(o),r.setBindGroup(0,c),r.dispatchWorkgroups(o.dispatchCount)}r.end(),t.queue.submit([i.finish()])}getRenderTarget(){return this._renderTarget}hasFeature(e){if(this._initialized===!1)throw new Error("THREE.WebGPURenderer: Renderer must be initialized before testing features.");if(Object.values(Oa).includes(e)===!1)throw new Error("THREE.WebGPURenderer: Unknown WebGPU GPU feature: "+e);return this._adapter.features.has(e)}_projectObject(e,t,n,i){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)i.pushLight(e);else if(e.isSprite){if(!e.frustumCulled||ca.intersectsSprite(e)){this.sortObjects===!0&&Ps.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Er);const a=e.geometry,c=e.material;c.visible&&i.push(e,a,c,n,Ps.z,null)}}else if(e.isLineLoop)console.error("THREE.WebGPURenderer: Objects of type THREE.LineLoop are not supported. Please use THREE.Line or THREE.LineSegments.");else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ca.intersectsObject(e))){this.sortObjects===!0&&Ps.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Er);const a=e.geometry,c=e.material;if(Array.isArray(c)){const l=a.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u],p=c[d.materialIndex];p&&p.visible&&i.push(e,a,p,n,Ps.z,d)}}else c.visible&&i.push(e,a,c,n,Ps.z,null)}}const o=e.children;for(let a=0,c=o.length;a<c;a++)this._projectObject(o[a],t,n,i)}_renderObjects(e,t,n,i){for(let r=0,o=e.length;r<o;r++){const a=e[r],{object:c,geometry:l,material:u,group:h}=a;if(t.isArrayCamera){const d=t.cameras;for(let p=0,g=d.length;p<g;p++){const _=d[p];if(c.layers.test(_.layers)){const m=_.viewport,f=m.minDepth===void 0?0:m.minDepth,T=m.maxDepth===void 0?1:m.maxDepth;this._currentRenderState.currentPassGPU.setViewport(m.x,m.y,m.width,m.height,f,T),this._renderObject(c,n,_,l,u,h,i)}}}else this._renderObject(c,n,t,l,u,h,i)}}_renderObject(e,t,n,i,r,o,a){r=t.overrideMaterial!==null?t.overrideMaterial:r,e.onBeforeRender(this,t,n,i,r,o);const c=this._getRenderObject(e,r,t,n,a);this._nodes.updateBefore(c);const l=this._currentRenderState.currentPassGPU,u=this._info;e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),this._nodes.update(c),this._geometries.update(c),this._bindings.update(c);const h=this._renderPipelines.get(c);l.setPipeline(h.pipeline);const d=this._bindings.get(c).group;l.setBindGroup(0,d);const p=this._geometries.getIndex(c),g=p!==null;g===!0&&this._setupIndexBuffer(p,l),this._setupVertexBuffers(i.attributes,l,h);const _=i.drawRange,m=_.start,f=i.isInstancedBufferGeometry?i.instanceCount:e.isInstancedMesh?e.count:1;if(g===!0){const T=_.count!==1/0?_.count:p.count;l.drawIndexed(T,f,m,0,0),u.update(e,T,f)}else{const T=i.attributes.position,S=_.count!==1/0?_.count:T.count;l.draw(S,f,m,0),u.update(e,S,f)}}_getRenderObject(e,t,n,i,r){const o=this._objects.get(e,t,n,i,r),a=this._properties.get(o);if(a.initialized!==!0){a.initialized=!0;const l=()=>{this._renderPipelines.remove(o),this._nodes.remove(o),this._properties.remove(o),this._objects.remove(e,t,n,i,r),o.material.removeEventListener("dispose",l)};o.material.addEventListener("dispose",l)}const c=o.getCacheKey();return a.cacheKey!==c&&(a.cacheKey=c,this._renderPipelines.remove(o),this._nodes.remove(o)),o}_setupIndexBuffer(e,t){const n=this._attributes.get(e).buffer,i=e.array instanceof Uint16Array?Gs.Uint16:Gs.Uint32;t.setIndexBuffer(n,i)}_setupVertexBuffers(e,t,n){const i=n.shaderAttributes;for(const r of i){const o=r.name,a=r.slot,c=e[o];if(c!==void 0){const l=this._attributes.get(c).buffer;t.setVertexBuffer(a,l)}}}_setupColorBuffer(){this._device&&(this._colorBuffer&&this._colorBuffer.destroy(),this._colorBuffer=this._device.createTexture({label:"colorBuffer",size:{width:Math.floor(this._width*this._pixelRatio),height:Math.floor(this._height*this._pixelRatio),depthOrArrayLayers:1},sampleCount:this._parameters.sampleCount,format:k.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}))}_setupDepthBuffer(){this._device&&(this._depthBuffer&&this._depthBuffer.destroy(),this._depthBuffer=this._device.createTexture({label:"depthBuffer",size:{width:Math.floor(this._width*this._pixelRatio),height:Math.floor(this._height*this._pixelRatio),depthOrArrayLayers:1},sampleCount:this._parameters.sampleCount,format:k.Depth24PlusStencil8,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}))}_configureContext(){const e=this._device;e&&this._context.configure({device:e,format:k.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"premultiplied"})}_createCanvasElement(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}}const ET=TT;cn.enabled=!0;let br=null;const bT=s=>s.webGPU===!0&&Vv.isAvailable()?new ET:new uh({alpha:s.alpha,antialias:s.antialias,depth:s.depth,powerPreference:"high-performance",stencil:s.stencil}),eE=(s={})=>(br!==null||(br=wT(s)),br),wT=(s={})=>{const{render:e}=s,t=bT(s);t.useLegacyLights=!1,t.debug!==void 0&&(t.debug.checkShaderErrors=s.checkShaderErrors??!0),t.xr!==void 0&&(t.xr.enabled=s.xr??!1),t.outputEncoding=s.outputEncoding??$n,t.toneMapping=s.toneMapping??qa,t.shadowMap!==void 0&&s.shadowMap!==!1&&(t.shadowMap.enabled=!0,t.shadowMap.type=s.shadowMap??Mu);let n=s.camera==="orthographic"?new sc:new $t;const i=new Kx;i.add(n);let r=performance.now(),o=performance.now(),a=0;const c=[],l=[],u=()=>{r=performance.now(),a=r-o,o=r;for(let m=0,f=l.length;m<f;m+=1)l[m](r,a);e!==void 0?e(a):(Gv(n,t),t.render(i,n));for(let m=0,f=c.length;m<f;m+=1)c[m](r,a)},h=m=>{n=m},d=()=>{t.setAnimationLoop(null)},p=()=>{t.setAnimationLoop(u)},g=m=>(l.push(m),()=>l.splice(l.indexOf(m),1)),_=m=>(c.push(m),()=>c.splice(c.indexOf(m),1));return s.autostart!==!1&&p(),{camera:n,canvas:t.domElement,renderer:t,scene:i,setCamera:h,stop:d,start:p,beforeRender:g,update:_}};export{Gr as $,KT as A,ps as B,Oe as C,Rn as D,no as E,qn as F,HT as G,QT as H,Qa as I,pe as J,BT as K,Nv as L,nn as M,IT as N,JT as O,vi as P,fs as Q,YT as R,Mn as S,_n as T,dt as U,Ue as V,VT as W,qT as X,Zx as Y,Wt as Z,Os as _,av as a,sv as a0,iv as a1,et as a2,UT as a3,DT as a4,dh as a5,FT as a6,OT as a7,dr as a8,$t as a9,sc as aa,hh as ab,kr as ac,GT as ad,Qx as ae,it as af,da as ag,of as ah,wr as ai,xn as aj,zr as ak,Vr as al,si as am,It as an,Xr as ao,Ws as ap,Hr as aq,ro as ar,XT as as,Za as b,wT as c,ds as d,ln as e,w as f,Ie as g,Bt as h,Sn as i,to as j,yn as k,hi as l,Fe as m,Mu as n,RT as o,CT as p,jT as q,PT as r,NT as s,eE as t,LT as u,oo as v,$T as w,zT as x,kT as y,WT as z};
//# sourceMappingURL=index-99b0b950.js.map
