var Uf=Object.defineProperty;var If=(r,e,t)=>e in r?Uf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var vn=(r,e,t)=>(If(r,typeof e!="symbol"?e+"":e,t),t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="152",nb={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ib={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,$c=1,Ff=2,Xu=1,qu=2,$n=3,Fn=0,Gt=1,En=2,Kn=0,di=1,Jr=2,Qr=3,eo=4,ba=5,Ci=100,$u=101,ju=102,Aa=103,wa=104,Yu=200,Ku=201,Zu=202,Ju=203,uc=204,hc=205,Qu=206,eh=207,th=208,nh=209,ih=210,sh=0,rh=1,oh=2,to=3,ah=4,ch=5,lh=6,uh=7,hh=0,Of=1,Bf=2,an=0,dh=1,fh=2,ph=3,dc=4,Gf=5,mh=300,gs=301,_s=302,no=303,io=304,mo=306,Fi=1e3,fn=1001,Js=1002,it=1003,so=1004,js=1005,It=1006,gh=1007,Oi=1008,In=1009,zf=1010,Vf=1011,fc=1012,kf=1013,ui=1014,sn=1015,fi=1016,Hf=1017,Wf=1018,Ui=1020,Xf=1021,rn=1023,qf=1024,$f=1025,Zn=1026,Bi=1027,_h=1028,jf=1029,xh=1030,Yf=1031,Kf=1033,Do=33776,qr=33777,$r=33778,jr=33779,jc=35840,Yc=35841,Kc=35842,Zc=35843,Zf=36196,Ra=37492,Ca=37496,La=37808,Na=37809,Pa=37810,Ua=37811,Ia=37812,Da=37813,Fa=37814,Oa=37815,Ba=37816,Ga=37817,za=37818,Va=37819,ka=37820,Ha=37821,Fo=36492,Jf=36283,Jc=36284,Qc=36285,el=36286,Qs=2300,xs=2301,Oo=2302,tl=2400,nl=2401,il=2402,Qf=2500,ep=0,vh=1,Wa=2,pc=3e3,Jn=3001,tp=3200,np=3201,ro=0,Sh=1,pi="",he="srgb",On="srgb-linear",yh="display-p3",ip=0,Yr=7680,sp=7681,rp=7682,op=7683,ap=34055,cp=34056,lp=5386,up=512,hp=513,dp=514,fp=515,pp=516,mp=517,gp=518,Mh=519,Xa=35044,sl="300 es",qa=1035;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const Ys=Math.PI/180,vs=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function mc(r,e){return(r%e+e)%e}function _p(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function xp(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function vp(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function Sp(r,e=1){return e-Math.abs(mc(r,e*2)-e)}function yp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Mp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Tp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ep(r,e){return r+Math.random()*(e-r)}function bp(r){return r*(.5-Math.random())}function Ap(r){r!==void 0&&(rl=r);let e=rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(r){return r*Ys}function Rp(r){return r*vs}function $a(r){return(r&r-1)===0&&r!==0}function Th(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Eh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*p,a*l);break;case"YXY":r.set(c*p,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const go={DEG2RAD:Ys,RAD2DEG:vs,generateUUID:bn,clamp:_t,euclideanModulo:mc,mapLinear:_p,inverseLerp:xp,lerp:Ks,damp:vp,pingpong:Sp,smoothstep:yp,smootherstep:Mp,randInt:Tp,randFloat:Ep,randFloatSpread:bp,seededRandom:Ap,degToRad:wp,radToDeg:Rp,isPowerOfTwo:$a,ceilPowerOfTwo:Th,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:Cp,normalize:Fe,denormalize:on};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],x=i[4],b=i[7],E=i[2],R=i[5],P=i[8];return s[0]=o*_+a*y+c*E,s[3]=o*m+a*x+c*R,s[6]=o*f+a*b+c*P,s[1]=l*_+u*y+h*E,s[4]=l*m+u*x+h*R,s[7]=l*f+u*b+h*P,s[2]=d*_+p*y+g*E,s[5]=d*m+p*x+g*R,s[8]=d*f+p*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Ve;function bh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ol={};function Zs(r){r in ol||(ol[r]=!0,console.warn(r))}function ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Lp=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Np=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Pp(r){return r.convertSRGBToLinear().applyMatrix3(Np)}function Up(r){return r.applyMatrix3(Lp).convertLinearToSRGB()}const Ip={[On]:r=>r,[he]:r=>r.convertSRGBToLinear(),[yh]:Pp},Dp={[On]:r=>r,[he]:r=>r.convertLinearToSRGB(),[yh]:Up},hn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return On},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ip[e],i=Dp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let qi;class Ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=er("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wh{constructor(e=null){this.isSource=!0,this.uuid=bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zo(i[o].image)):s.push(zo(i[o]))}else s=zo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fp=0;class St extends bs{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=fn,i=fn,s=It,o=Oi,a=rn,c=In,l=St.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=bn(),this.name="",this.source=new wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?he:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===he?Jn:pc}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?he:pi}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=mh;St.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(p+1)/2,E=(f+1)/2,R=(u+d)/4,P=(h+_)/4,G=(g+m)/4;return x>b&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=P/n):b>E?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=G/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=P/s,i=G/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends bs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?he:pi),this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rh extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Op extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),R=Math.atan2(E,f*y);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const b=a*y;if(c=c*m+d*b,l=l*m+p*b,u=u*m+g*b,h=h*m+_*b,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new A,al=new xi;class gn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Vn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),$i.copy(i.boundingBox),$i.applyMatrix4(e.matrixWorld),this.union($i)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),hr.subVectors(this.max,Is),ji.subVectors(e.a,Is),Yi.subVectors(e.b,Is),Ki.subVectors(e.c,Is),ti.subVectors(Yi,ji),ni.subVectors(Ki,Yi),Mi.subVectors(ji,Ki);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!ko(t,ji,Yi,Ki,hr)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,ji,Yi,Ki,hr))?!1:(dr.crossVectors(ti,ni),t=[dr.x,dr.y,dr.z],ko(t,ji,Yi,Ki,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,$i=new gn,ji=new A,Yi=new A,Ki=new A,ti=new A,ni=new A,Mi=new A,Is=new A,hr=new A,dr=new A,Ti=new A;function ko(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ti.fromArray(r,s);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Bp=new gn,Ds=new A,Ho=new A;class wn{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Ho)),this.expandByPoint(Ds.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new A,Wo=new A,fr=new A,ii=new A,Xo=new A,pr=new A,qo=new A;class _o{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wo.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Wo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fr),a=ii.dot(this.direction),c=-ii.dot(fr),l=ii.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Wo).addScaledVector(fr,d),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){Xo.subVectors(t,e),pr.subVectors(n,e),qo.crossVectors(Xo,pr);let o=this.direction.dot(qo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(pr.crossVectors(ii,pr));if(c<0)return null;const l=a*this.direction.dot(Xo.cross(ii));if(l<0||c+l>o)return null;const u=-a*ii.dot(qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,zp)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),si.crossVectors(n,Jt),si.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),si.crossVectors(n,Jt)),si.normalize(),mr.crossVectors(Jt,si),i[0]=si.x,i[4]=mr.x,i[8]=Jt.x,i[1]=si.y,i[5]=mr.y,i[9]=Jt.y,i[2]=si.z,i[6]=mr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],b=n[11],E=n[15],R=i[0],P=i[4],G=i[8],v=i[12],w=i[1],Y=i[5],B=i[9],N=i[13],O=i[2],F=i[6],J=i[10],$=i[14],j=i[3],Q=i[7],ee=i[11],xe=i[15];return s[0]=o*R+a*w+c*O+l*j,s[4]=o*P+a*Y+c*F+l*Q,s[8]=o*G+a*B+c*J+l*ee,s[12]=o*v+a*N+c*$+l*xe,s[1]=u*R+h*w+d*O+p*j,s[5]=u*P+h*Y+d*F+p*Q,s[9]=u*G+h*B+d*J+p*ee,s[13]=u*v+h*N+d*$+p*xe,s[2]=g*R+_*w+m*O+f*j,s[6]=g*P+_*Y+m*F+f*Q,s[10]=g*G+_*B+m*J+f*ee,s[14]=g*v+_*N+m*$+f*xe,s[3]=y*R+x*w+b*O+E*j,s[7]=y*P+x*Y+b*F+E*Q,s[11]=y*G+x*B+b*J+E*ee,s[15]=y*v+x*N+b*$+E*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+s*o*d-i*o*p+i*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+n*o*p+s*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,x=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,b=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,E=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*y+n*x+i*b+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=y*P,e[1]=(_*d*s-h*m*s-_*i*p+n*m*p+h*i*f-n*d*f)*P,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*f+n*c*f)*P,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*p-n*c*p)*P,e[4]=x*P,e[5]=(u*m*s-g*d*s+g*i*p-t*m*p-u*i*f+t*d*f)*P,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*f-t*c*f)*P,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*p+t*c*p)*P,e[8]=b*P,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*f-t*h*f)*P,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*f+t*a*f)*P,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*p-t*a*p)*P,e[12]=E*P,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*P,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,y=c*l,x=c*u,b=c*h,E=n.x,R=n.y,P=n.z;return i[0]=(1-(_+f))*E,i[1]=(p+b)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(p-b)*R,i[5]=(1-(d+f))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(g+x)*P,i[9]=(m-y)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const l=1/s,u=1/o,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),h=(t+e)*c,d=(n+i)*l,p=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new A,Sn=new Pe,Gp=new A(0,0,0),zp=new A(1,1,1),si=new A,mr=new A,Jt=new A,cl=new Pe,ll=new xi;class xo{constructor(e=0,t=0,n=0,i=xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xo.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vp=0;const ul=new A,Ji=new xi,Hn=new Pe,gr=new A,Fs=new A,kp=new A,Hp=new xi,hl=new A(1,0,0),dl=new A(0,1,0),fl=new A(0,0,1),Wp={type:"added"},pl={type:"removed"};class ct extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new A,t=new xo,n=new xi,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ve}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Fs,gr,this.up):Hn.lookAt(gr,Fs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new A,Wn=new A,$o=new A,Xn=new A,Qi=new A,es=new A,ml=new A,jo=new A,Yo=new A,Ko=new A;let _r=!1;class Tn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Wn.subVectors(n,t),$o.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Wn),c=yn.dot($o),l=Wn.dot(Wn),u=Wn.dot($o),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn),Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,n,i,s,o,a,c){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Xn),c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Wn.subVectors(e,t),yn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Qi.subVectors(i,n),es.subVectors(s,n),jo.subVectors(e,n);const c=Qi.dot(jo),l=es.dot(jo);if(c<=0&&l<=0)return t.copy(n);Yo.subVectors(e,i);const u=Qi.dot(Yo),h=es.dot(Yo);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Qi,o);Ko.subVectors(e,s);const p=Qi.dot(Ko),g=es.dot(Ko);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(es,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ml.subVectors(s,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(ml,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xp=0;class An extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=di,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Zo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=he){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=hn.workingColorSpace){if(e=mc(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zo(o,s,e+1/3),this.g=Zo(o,s,e),this.b=Zo(o,s,e-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(e,t=he){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=he){const n=Ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=he){return hn.fromWorkingColorSpace(Bt.copy(this),e),Math.round(_t(Bt.r*255,0,255))*65536+Math.round(_t(Bt.g*255,0,255))*256+Math.round(_t(Bt.b*255,0,255))}getHexString(e=he){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hn.workingColorSpace){hn.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=hn.workingColorSpace){return hn.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=he){hn.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==he?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(xr);const n=Ks(Mn.h,xr.h,t),i=Ks(Mn.s,xr.s,t),s=Ks(Mn.l,xr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ce;Ce.NAMES=Ch;class hi extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=qp();function qp(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Qt(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=_t(r,-65504,65504),jn.floatView[0]=r;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function vr(r){const e=r>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(r&1023)]+jn.exponentTable[e],jn.floatView[0]}const pt=new A,Sr=new Ie;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _c extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xc extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lh extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=vr(this.array[e*this.itemSize]);return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize]=Qt(t),this}getY(e){let t=vr(this.array[e*this.itemSize+1]);return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+1]=Qt(t),this}getZ(e){let t=vr(this.array[e*this.itemSize+2]);return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+2]=Qt(t),this}getW(e){let t=vr(this.array[e*this.itemSize+3]);return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+3]=Qt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array)),this.array[e+0]=Qt(t),this.array[e+1]=Qt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[e+0]=Qt(t),this.array[e+1]=Qt(n),this.array[e+2]=Qt(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[e+0]=Qt(t),this.array[e+1]=Qt(n),this.array[e+2]=Qt(i),this.array[e+3]=Qt(s),this}}class pn extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $p=0;const un=new Pe,Jo=new ct,ts=new A,en=new gn,Os=new gn,At=new A;class _n extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?xc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(en.min,Os.min),en.expandByPoint(At),At.addVectors(en.max,Os.max),en.expandByPoint(At)):(en.expandByPoint(Os.min),en.expandByPoint(Os.max))}en.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(e,l),At.add(ts)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new A,u[w]=new A;const h=new A,d=new A,p=new A,g=new Ie,_=new Ie,m=new Ie,f=new A,y=new A;function x(w,Y,B){h.fromArray(i,w*3),d.fromArray(i,Y*3),p.fromArray(i,B*3),g.fromArray(o,w*2),_.fromArray(o,Y*2),m.fromArray(o,B*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(N),l[w].add(f),l[Y].add(f),l[B].add(f),u[w].add(y),u[Y].add(y),u[B].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,Y=b.length;w<Y;++w){const B=b[w],N=B.start,O=B.count;for(let F=N,J=N+O;F<J;F+=3)x(n[F+0],n[F+1],n[F+2])}const E=new A,R=new A,P=new A,G=new A;function v(w){P.fromArray(s,w*3),G.copy(P);const Y=l[w];E.copy(Y),E.sub(P.multiplyScalar(P.dot(Y))).normalize(),R.crossVectors(G,Y);const N=R.dot(u[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=N}for(let w=0,Y=b.length;w<Y;++w){const B=b[w],N=B.start,O=B.count;for(let F=N,J=N+O;F<J;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,s=new A,o=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new Pe,Cn=new _o,yr=new wn,_l=new A,ns=new A,is=new A,ss=new A,Qo=new A,Mr=new A,Tr=new Ie,Er=new Ie,br=new Ie,xl=new A,vl=new A,Sl=new A,Ar=new A,wr=new A;class Kt extends ct{constructor(e=new _n,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Qo.fromBufferAttribute(h,e),o?Mr.addScaledVector(Qo,u):Mr.addScaledVector(Qo.sub(t),u))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(yr.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(yr,_l)===null||Cn.origin.distanceToSquared(_l)>(e.far-e.near)**2))&&(gl.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(gl),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,h=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,b=y;x<b;x+=3){const E=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);n=Rr(this,m,e,Cn,c,l,u,E,R,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=o.getX(_),y=o.getX(_+1),x=o.getX(_+2);n=Rr(this,s,e,Cn,c,l,u,f,y,x),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let x=f,b=y;x<b;x+=3){const E=x,R=x+1,P=x+2;n=Rr(this,m,e,Cn,c,l,u,E,R,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=_,y=_+1,x=_+2;n=Rr(this,s,e,Cn,c,l,u,f,y,x),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function jp(r,e,t,n,i,s,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Fn,a),c===null)return null;wr.copy(a),wr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:r}}function Rr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,ns),r.getVertexPosition(c,is),r.getVertexPosition(l,ss);const u=jp(r,e,t,n,ns,is,ss,Ar);if(u){i&&(Tr.fromBufferAttribute(i,a),Er.fromBufferAttribute(i,c),br.fromBufferAttribute(i,l),u.uv=Tn.getInterpolation(Ar,ns,is,ss,Tr,Er,br,new Ie)),s&&(Tr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,c),br.fromBufferAttribute(s,l),u.uv1=Tn.getInterpolation(Ar,ns,is,ss,Tr,Er,br,new Ie),u.uv2=u.uv1),o&&(xl.fromBufferAttribute(o,a),vl.fromBufferAttribute(o,c),Sl.fromBufferAttribute(o,l),u.normal=Tn.getInterpolation(Ar,ns,is,ss,xl,vl,Sl,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};Tn.getNormal(ns,is,ss,h.normal),u.face=h}return u}class As extends _n{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function g(_,m,f,y,x,b,E,R,P,G,v){const w=b/P,Y=E/G,B=b/2,N=E/2,O=R/2,F=P+1,J=G+1;let $=0,j=0;const Q=new A;for(let ee=0;ee<J;ee++){const xe=ee*Y-N;for(let de=0;de<F;de++){const V=de*w-B;Q[_]=V*y,Q[m]=xe*x,Q[f]=O,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(de/P),h.push(1-ee/G),$+=1}}for(let ee=0;ee<G;ee++)for(let xe=0;xe<P;xe++){const de=d+xe+F*ee,V=d+xe+F*(ee+1),Z=d+(xe+1)+F*(ee+1),ae=d+(xe+1)+F*ee;c.push(de,V,ae),c.push(V,Z,ae),j+=6}a.addGroup(p,j,v),p+=j,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=Ss(r[t]);for(const i in n)e[i]=n[i]}return e}function Yp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Nh(r){return r.getRenderTarget()===null?r.outputColorSpace:On}const vo={clone:Ss,merge:Wt};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ph extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class Jp extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Xt(rs,os,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Xt(rs,os,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Xt(rs,os,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Xt(rs,os,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Xt(rs,os,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Xt(rs,os,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class vc extends St{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?he:pi),this.texture=new vc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new As(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Kt(i,s),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=It),new Jp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ea=new A,em=new A,tm=new Ve;class Ai{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ea.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tm.getNormalMatrix(e),i=this.coplanarPoint(ea).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new wn,Cr=new A;class ar{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],y=n[14],x=n[15];return t[0].setComponents(a-i,h-c,_-d,x-m).normalize(),t[1].setComponents(a+i,h+c,_+d,x+m).normalize(),t[2].setComponents(a+s,h+l,_+p,x+f).normalize(),t[3].setComponents(a-s,h-l,_-p,x-f).normalize(),t[4].setComponents(a-o,h-u,_-g,x-y).normalize(),t[5].setComponents(a+o,h+u,_+g,x+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cr.x=i.normal.x>0?e.max.x:e.min.x,Cr.y=i.normal.y>0?e.max.y:e.min.y,Cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,l),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Sc extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-o;for(let x=0;x<l;x++){const b=x*h-s;g.push(b,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const x=y+l*f,b=y+l*(f+1),E=y+1+l*(f+1),R=y+1+l*f;p.push(x,b,R),p.push(b,E,R)}this.setIndex(p),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm="vec3 transformed = vec3( position );",um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
#endif`,qm=`#if defined( USE_ENVMAP )
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,Qm=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,og=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_UV
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
#endif`,Yg=`#ifdef USE_UV
	varying vec2 vUv;
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
#endif`,Kg=`#ifdef USE_UV
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,u_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,__=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,v_=`#define NORMAL
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
}`,S_=`#define PHONG
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
}`,y_=`#define PHONG
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
}`,M_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,b_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,w_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:cm,begin_vertex:lm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:Sm,color_vertex:ym,common:Mm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Em,displacementmap_pars_vertex:bm,displacementmap_vertex:Am,emissivemap_fragment:wm,emissivemap_pars_fragment:Rm,encodings_fragment:Cm,encodings_pars_fragment:Lm,envmap_fragment:Nm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Um,envmap_pars_vertex:Im,envmap_physical_pars_fragment:qm,envmap_vertex:Dm,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:Gm,gradientmap_pars_fragment:zm,lightmap_fragment:Vm,lightmap_pars_fragment:km,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:$m,lights_toon_pars_fragment:jm,lights_phong_fragment:Ym,lights_phong_pars_fragment:Km,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:_g,normal_pars_fragment:xg,normal_pars_vertex:vg,normal_vertex:Sg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:bg,output_fragment:Ag,packing:wg,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Lg,dithering_pars_fragment:Ng,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Dg,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:Gg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:kg,specularmap_pars_fragment:Hg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:$g,uv_pars_fragment:jg,uv_pars_vertex:Yg,uv_vertex:Kg,worldpos_vertex:Zg,background_vert:Jg,background_frag:Qg,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:c_,equirect_frag:l_,linedashed_vert:u_,linedashed_frag:h_,meshbasic_vert:d_,meshbasic_frag:f_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:__,meshnormal_vert:x_,meshnormal_frag:v_,meshphong_vert:S_,meshphong_frag:y_,meshphysical_vert:M_,meshphysical_frag:T_,meshtoon_vert:E_,meshtoon_frag:b_,points_vert:A_,points_frag:w_,shadow_vert:R_,shadow_frag:C_,sprite_vert:L_,sprite_frag:N_},re={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},jt={basic:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([re.lights,re.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};jt.physical={uniforms:Wt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Lr={r:0,b:0,g:0};function P_(r,e,t,n,i,s,o){const a=new Ce(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let y=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===mo)?(u===void 0&&(u=new Kt(new As(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ss(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==he,(h!==x||d!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Kt(new Sc(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ss(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=x.colorSpace!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Lr,Nh(r)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function U_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(O,F,J,$,j){let Q=!1;if(o){const ee=_($,J,F);l!==ee&&(l=ee,p(l.object)),Q=f(O,$,J,j),Q&&y(O,$,J,j)}else{const ee=F.wireframe===!0;(l.geometry!==$.id||l.program!==J.id||l.wireframe!==ee)&&(l.geometry=$.id,l.program=J.id,l.wireframe=ee,Q=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,G(O,F,J,$),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,F,J){const $=J.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let Q=j[F.id];Q===void 0&&(Q={},j[F.id]=Q);let ee=Q[$];return ee===void 0&&(ee=m(d()),Q[$]=ee),ee}function m(O){const F=[],J=[],$=[];for(let j=0;j<i;j++)F[j]=0,J[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:$,object:O,attributes:{},index:null}}function f(O,F,J,$){const j=l.attributes,Q=F.attributes;let ee=0;const xe=J.getAttributes();for(const de in xe)if(xe[de].location>=0){const Z=j[de];let ae=Q[de];if(ae===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;ee++}return l.attributesNum!==ee||l.index!==$}function y(O,F,J,$){const j={},Q=F.attributes;let ee=0;const xe=J.getAttributes();for(const de in xe)if(xe[de].location>=0){let Z=Q[de];Z===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),j[de]=ae,ee++}l.attributes=j,l.attributesNum=ee,l.index=$}function x(){const O=l.newAttributes;for(let F=0,J=O.length;F<J;F++)O[F]=0}function b(O){E(O,0)}function E(O,F){const J=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;J[O]=1,$[O]===0&&(r.enableVertexAttribArray(O),$[O]=1),j[O]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),j[O]=F)}function R(){const O=l.newAttributes,F=l.enabledAttributes;for(let J=0,$=F.length;J<$;J++)F[J]!==O[J]&&(r.disableVertexAttribArray(J),F[J]=0)}function P(O,F,J,$,j,Q){n.isWebGL2===!0&&(J===r.INT||J===r.UNSIGNED_INT)?r.vertexAttribIPointer(O,F,J,j,Q):r.vertexAttribPointer(O,F,J,$,j,Q)}function G(O,F,J,$){if(n.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=$.attributes,Q=J.getAttributes(),ee=F.defaultAttributeValues;for(const xe in Q){const de=Q[xe];if(de.location>=0){let V=j[xe];if(V===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){const Z=V.normalized,ae=V.itemSize,le=t.get(V);if(le===void 0)continue;const L=le.buffer,Ue=le.type,Le=le.bytesPerElement;if(V.isInterleavedBufferAttribute){const oe=V.data,we=oe.stride,Ze=V.offset;if(oe.isInstancedInterleavedBuffer){for(let Me=0;Me<de.locationSize;Me++)E(de.location+Me,oe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<de.locationSize;Me++)b(de.location+Me);r.bindBuffer(r.ARRAY_BUFFER,L);for(let Me=0;Me<de.locationSize;Me++)P(de.location+Me,ae/de.locationSize,Ue,Z,we*Le,(Ze+ae/de.locationSize*Me)*Le)}else{if(V.isInstancedBufferAttribute){for(let oe=0;oe<de.locationSize;oe++)E(de.location+oe,V.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let oe=0;oe<de.locationSize;oe++)b(de.location+oe);r.bindBuffer(r.ARRAY_BUFFER,L);for(let oe=0;oe<de.locationSize;oe++)P(de.location+oe,ae/de.locationSize,Ue,Z,ae*Le,ae/de.locationSize*oe*Le)}}else if(ee!==void 0){const Z=ee[xe];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(de.location,Z);break;case 3:r.vertexAttrib3fv(de.location,Z);break;case 4:r.vertexAttrib4fv(de.location,Z);break;default:r.vertexAttrib1fv(de.location,Z)}}}}R()}function v(){B();for(const O in a){const F=a[O];for(const J in F){const $=F[J];for(const j in $)g($[j].object),delete $[j];delete F[J]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const F=a[O.id];for(const J in F){const $=F[J];for(const j in $)g($[j].object),delete $[j];delete F[J]}delete a[O.id]}function Y(O){for(const F in a){const J=a[F];if(J[O.id]===void 0)continue;const $=J[O.id];for(const j in $)g($[j].object),delete $[j];delete J[O.id]}}function B(){N(),u=!0,l!==c&&(l=c,p(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:N,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:x,enableAttribute:b,disableUnusedAttributes:R}}function I_(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function D_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=o||e.has("OES_texture_float"),E=x&&b,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:R}}function F_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ai,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const y=s?0:n,x=y*4;let b=f.clippingState||null;c.value=b,b=u(g,d,x,p);for(let E=0;E!==x;++E)b[E]=t[E];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,b=p;x!==_;++x,b+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function O_(r){let e=new WeakMap;function t(o,a){return a===no?o.mapping=gs:a===io&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===no||a===io)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qp(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class So extends Ph{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,yl=[.125,.215,.35,.446,.526,.582],Li=20,ta=new So,Ml=new Ce;let na=null;const wi=(1+Math.sqrt(5))/2,as=1/wi,Tl=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,wi,as),new A(0,wi,-as),new A(as,0,wi),new A(-as,0,wi),new A(wi,as,0),new A(-wi,as,0)];class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){na=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na),e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:fi,format:rn,colorSpace:On,depthBuffer:!1},i=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(s)),this._blurMaterial=G_(s,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,i){const a=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ml),u.toneMapping=an,u.autoClear=!1;const p=new hi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Kt(new As,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ml),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Nr(i,y*x,f>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Tl[(i-1)%Tl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Li-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const f=[];let y=0;for(let P=0;P<Li;++P){const G=P/_,v=Math.exp(-G*G/2);f.push(v),P===0?y+=v:P<m&&(y+=2*v)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[i],E=3*b*(i>x-ds?i-x+ds:0),R=4*(this._cubeSize-b);Nr(t,E,R,3*b,2*b),c.setRenderTarget(t),c.render(h,ta)}}function B_(r){const e=[],t=[],n=[];let i=r;const s=r-ds+1+yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ds?c=yl[o-r+ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,G=R>2?0:-1,v=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];y.set(v,_*g*R),x.set(d,m*g*R);const w=[R,R,R,R,R,R];b.set(w,f*g*R)}const E=new _n;E.setAttribute("position",new zt(y,_)),E.setAttribute("uv",new zt(x,m)),E.setAttribute("faceIndex",new zt(b,f)),e.push(E),i>ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(r,e,t){const n=new mi(r,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function G_(r,e,t){const n=new Float32Array(Li),i=new A(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Al(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function z_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===no||c===io,u=c===gs||c===_s;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new El(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new El(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k_(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,b=y.length;x<b;x+=3){const E=y[x+0],R=y[x+1],P=y[x+2];d.push(E,R,R,P,P,E)}}else{const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const E=x+0,R=x+1,P=x+2;d.push(E,R,R,P,P,E)}}const m=new(bh(d)?xc:_c)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function H_(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*c),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,d*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function W_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function X_(r,e){return r[0]-e[0]}function q_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function $_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ye,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let O=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let G=0;y===!0&&(G=1),x===!0&&(G=2),b===!0&&(G=3);let v=u.attributes.position.count*G,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const Y=new Float32Array(v*w*4*g),B=new Rh(Y,v,w,g);B.type=sn,B.needsUpdate=!0;const N=G*4;for(let F=0;F<g;F++){const J=E[F],$=R[F],j=P[F],Q=v*w*4*F;for(let ee=0;ee<J.count;ee++){const xe=ee*N;y===!0&&(o.fromBufferAttribute(J,ee),Y[Q+xe+0]=o.x,Y[Q+xe+1]=o.y,Y[Q+xe+2]=o.z,Y[Q+xe+3]=0),x===!0&&(o.fromBufferAttribute($,ee),Y[Q+xe+4]=o.x,Y[Q+xe+5]=o.y,Y[Q+xe+6]=o.z,Y[Q+xe+7]=0),b===!0&&(o.fromBufferAttribute(j,ee),Y[Q+xe+8]=o.x,Y[Q+xe+9]=o.y,Y[Q+xe+10]=o.z,Y[Q+xe+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new Ie(v,w)},s.set(u,_),u.addEventListener("dispose",O)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){const b=g[x];b[0]=x,b[1]=d[x]}g.sort(q_);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(X_);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const b=a[x],E=b[0],R=b[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),m&&u.getAttribute("morphNormal"+x)!==m[E]&&u.setAttribute("morphNormal"+x,m[E]),i[x]=R,f+=R):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function j_(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ih=new St,Dh=new Rh,Fh=new Op,Oh=new vc,Rl=[],Cl=[],Ll=new Float32Array(16),Nl=new Float32Array(9),Pl=new Float32Array(4);function ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Rl[i];if(s===void 0&&(s=new Float32Array(i),Rl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yo(r,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function Q_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Pl.set(n),r.uniformMatrix2fv(this.addr,!1,Pl),Mt(t,n)}}function ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Nl.set(n),r.uniformMatrix3fv(this.addr,!1,Nl),Mt(t,n)}}function tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Ll.set(n),r.uniformMatrix4fv(this.addr,!1,Ll),Mt(t,n)}}function nx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function ox(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ih,i)}function hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fh,i)}function dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dh,i)}function px(r){switch(r){case 5126:return Y_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(r,e){r.uniform1fv(this.addr,e)}function gx(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function _x(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function xx(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sx(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yx(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Mx(r,e){r.uniform1iv(this.addr,e)}function Tx(r,e){r.uniform2iv(this.addr,e)}function Ex(r,e){r.uniform3iv(this.addr,e)}function bx(r,e){r.uniform4iv(this.addr,e)}function Ax(r,e){r.uniform1uiv(this.addr,e)}function wx(r,e){r.uniform2uiv(this.addr,e)}function Rx(r,e){r.uniform3uiv(this.addr,e)}function Cx(r,e){r.uniform4uiv(this.addr,e)}function Lx(r,e,t){const n=this.cache,i=e.length,s=yo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ih,s[o])}function Nx(r,e,t){const n=this.cache,i=e.length,s=yo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fh,s[o])}function Px(r,e,t){const n=this.cache,i=e.length,s=yo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Oh,s[o])}function Ux(r,e,t){const n=this.cache,i=e.length,s=yo(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Dh,s[o])}function Ix(r){switch(r){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return Sx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return bx;case 5125:return Ax;case 36294:return wx;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ux}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=px(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ix(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ul(r,e){r.seq.push(e),r.map[e.id]=e}function Bx(r,e,t){const n=r.name,i=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),o=ia.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ul(t,l===void 0?new Dx(a,r,e):new Fx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ox(a),Ul(t,h)),t=h}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Bx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Il(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Gx=0;function zx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vx(r){switch(r){case On:return["Linear","( value )"];case he:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Dl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zx(r.getShaderSource(e),o)}else return i}function kx(r,e){const t=Vx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hx(r,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case dc:t="ACESFilmic";break;case Gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function Xx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Xs(r){return r!==""}function Fl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(r){return r.replace($x,jx)}function jx(r,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ja(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(r){return r.replace(Yx,Kx)}function Kx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Jx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Of:e="ENVMAP_BLENDING_MIX";break;case Bf:e="ENVMAP_BLENDING_ADD";break}return e}function tv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Zx(t),l=Jx(t),u=Qx(t),h=ev(t),d=tv(t),p=t.isWebGL2?"":Wx(t),g=Xx(s),_=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Gl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[p,Gl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Be.tonemapping_pars_fragment:"",t.toneMapping!==an?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=ja(o),o=Fl(o,t),o=Ol(o,t),a=ja(a),a=Fl(a,t),a=Ol(a,t),o=Bl(o),a=Bl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+o,b=y+f+a,E=Il(i,i.VERTEX_SHADER,x),R=Il(i,i.FRAGMENT_SHADER,b);if(i.attachShader(_,E),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(E).trim(),Y=i.getShaderInfoLog(R).trim();let B=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,R);else{const O=Dl(i,E,"vertex"),F=Dl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+O+`
`+F)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||Y==="")&&(N=!1);N&&(this.diagnostics={runnable:B,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(E),i.deleteShader(R);let P;this.getUniforms=function(){return P===void 0&&(P=new Kr(i,_)),P};let G;return this.getAttributes=function(){return G===void 0&&(G=qx(i,_)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rv(e),t.set(e,n)),n}}class rv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function ov(r,e,t,n,i,s,o){const a=new gc,c=new sv,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,Y,B,N){const O=B.fog,F=N.geometry,J=v.isMeshStandardMaterial?B.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),j=$&&$.mapping===mo?$.image.height:null,Q=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=ee!==void 0?ee.length:0;let de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let V,Z,ae,le;if(Q){const st=jt[Q];V=st.vertexShader,Z=st.fragmentShader}else V=v.vertexShader,Z=v.fragmentShader,c.update(v),ae=c.getVertexShaderID(v),le=c.getFragmentShaderID(v);const L=r.getRenderTarget(),Ue=N.isInstancedMesh===!0,Le=!!v.map,oe=!!v.matcap,we=!!$,Ze=!!v.aoMap,Me=!!v.lightMap,ke=!!v.bumpMap,Tt=!!v.normalMap,Ct=!!v.displacementMap,Et=!!v.emissiveMap,gt=!!v.metalnessMap,Je=!!v.roughnessMap,lt=v.clearcoat>0,$t=v.iridescence>0,T=v.sheen>0,S=v.transmission>0,z=lt&&!!v.clearcoatMap,ie=lt&&!!v.clearcoatNormalMap,se=lt&&!!v.clearcoatRoughnessMap,ce=$t&&!!v.iridescenceMap,Re=$t&&!!v.iridescenceThicknessMap,pe=T&&!!v.sheenColorMap,X=T&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Te=!!v.specularColorMap,be=!!v.specularIntensityMap,fe=S&&!!v.transmissionMap,Se=S&&!!v.thicknessMap,qe=!!v.gradientMap,tt=!!v.alphaMap,ht=v.alphaTest>0,C=!!v.extensions,k=!!F.attributes.uv1,te=!!F.attributes.uv2,ue=!!F.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:v.type,vertexShader:V,fragmentShader:Z,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:L===null?r.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:On,map:Le,matcap:oe,envMap:we,envMapMode:we&&$.mapping,envMapCubeUVHeight:j,aoMap:Ze,lightMap:Me,bumpMap:ke,normalMap:Tt,displacementMap:d&&Ct,emissiveMap:Et,normalMapObjectSpace:Tt&&v.normalMapType===Sh,normalMapTangentSpace:Tt&&v.normalMapType===ro,metalnessMap:gt,roughnessMap:Je,clearcoat:lt,clearcoatMap:z,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:$t,iridescenceMap:ce,iridescenceThicknessMap:Re,sheen:T,sheenColorMap:pe,sheenRoughnessMap:X,specularMap:ve,specularColorMap:Te,specularIntensityMap:be,transmission:S,transmissionMap:fe,thicknessMap:Se,gradientMap:qe,opaque:v.transparent===!1&&v.blending===di,alphaMap:tt,alphaTest:ht,combine:v.combine,mapUv:Le&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:Me&&_(v.lightMap.channel),bumpMapUv:ke&&_(v.bumpMap.channel),normalMapUv:Tt&&_(v.normalMap.channel),displacementMapUv:Ct&&_(v.displacementMap.channel),emissiveMapUv:Et&&_(v.emissiveMap.channel),metalnessMapUv:gt&&_(v.metalnessMap.channel),roughnessMapUv:Je&&_(v.roughnessMap.channel),clearcoatMapUv:z&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:Te&&_(v.specularColorMap.channel),specularIntensityMapUv:be&&_(v.specularIntensityMap.channel),transmissionMapUv:fe&&_(v.transmissionMap.channel),thicknessMapUv:Se&&_(v.thicknessMap.channel),alphaMapUv:tt&&_(v.alphaMap.channel),vertexTangents:Tt&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:te,vertexUv3s:ue,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Le||tt),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:an,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===En,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:C&&v.extensions.derivatives===!0,extensionFragDepth:C&&v.extensions.fragDepth===!0,extensionDrawBuffers:C&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const Y in v.defines)w.push(Y),w.push(v.defines[Y]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),v.push(a.mask)}function b(v){const w=g[v.type];let Y;if(w){const B=jt[w];Y=vo.clone(B.uniforms)}else Y=v.uniforms;return Y}function E(v,w){let Y;for(let B=0,N=l.length;B<N;B++){const O=l[B];if(O.cacheKey===w){Y=O,++Y.usedTimes;break}}return Y===void 0&&(Y=new nv(r,w,v,s),l.push(Y)),Y}function R(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function P(v){c.remove(v)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:E,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:G}}function av(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||cv),n.length>1&&n.sort(d||zl),i.length>1&&i.sort(d||zl)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function lv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vl,r.set(n,[o])):i>=s.length?(o=new Vl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function uv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ce};break;case"SpotLight":t={position:new A,direction:new A,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dv=0;function fv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pv(r,e){const t=new uv,n=hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new A);const s=new A,o=new Pe,a=new Pe;function c(u,h){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let _=0,m=0,f=0,y=0,x=0,b=0,E=0,R=0,P=0,G=0;u.sort(fv);const v=h===!0?Math.PI:1;for(let Y=0,B=u.length;Y<B;Y++){const N=u[Y],O=N.color,F=N.intensity,J=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=O.r*F*v,p+=O.g*F*v,g+=O.b*F*v;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],F);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){const Q=N.shadow,ee=n.get(N);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=N.shadow.matrix,b++}i.directional[_]=j,_++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(O).multiplyScalar(F*v),j.distance=J,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[f]=j;const Q=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,Q.updateMatrices(N),N.castShadow&&G++),i.spotLightMatrix[f]=Q.matrix,N.castShadow){const ee=n.get(N);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.spotShadow[f]=ee,i.spotShadowMap[f]=$,R++}f++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(O).multiplyScalar(F),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=j,y++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*v),j.distance=N.distance,j.decay=N.decay,N.castShadow){const Q=N.shadow,ee=n.get(N);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=N.shadow.matrix,E++}i.point[m]=j,m++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(F*v),j.groundColor.copy(N.groundColor).multiplyScalar(F*v),i.hemi[x]=j,x++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==E||w.numSpotShadows!==R||w.numSpotMaps!==P)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=R+P-G,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=G,w.directionalLength=_,w.pointLength=m,w.spotLength=f,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=E,w.numSpotShadows=R,w.numSpotMaps=P,i.version=dv++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const b=u[y];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(b.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function kl(r,e){const t=new pv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function mv(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new kl(r,e),t.set(s,[c])):o>=a.length?(c=new kl(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class gv extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _v extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`;function Sv(r,e,t){let n=new ar;const i=new Ie,s=new Ie,o=new Ye,a=new gv({depthPacking:np}),c=new _v,l={},u=t.maxTextureSize,h={[Fn]:Gt,[Gt]:Fn,[En]:En},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:xv,fragmentShader:vv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let f=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const G=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Kn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const B=f!==$n&&this.type===$n,N=f===$n&&this.type!==$n;for(let O=0,F=E.length;O<F;O++){const J=E[O],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const j=$.getFrameExtents();if(i.multiply(j),s.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,$.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,$.mapSize.y=s.y)),$.map===null||B===!0||N===!0){const ee=this.type!==$n?{minFilter:it,magFilter:it}:{};$.map!==null&&$.map.dispose(),$.map=new mi(i.x,i.y,ee),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const Q=$.getViewportCount();for(let ee=0;ee<Q;ee++){const xe=$.getViewport(ee);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),Y.viewport(o),$.updateMatrices(J,ee),n=$.getFrustum(),b(R,P,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===$n&&y($,P),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(G,v,w)};function y(E,R){const P=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,P,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,P,p,_,null)}function x(E,R,P,G){let v=null;const w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=v.uuid,B=R.uuid;let N=l[Y];N===void 0&&(N={},l[Y]=N);let O=N[B];O===void 0&&(O=v.clone(),N[B]=O),v=O}if(v.visible=R.visible,v.wireframe=R.wireframe,G===$n?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const Y=r.properties.get(v);Y.light=P}return v}function b(E,R,P,G,v){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===$n)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const B=e.update(E),N=E.material;if(Array.isArray(N)){const O=B.groups;for(let F=0,J=O.length;F<J;F++){const $=O[F],j=N[$.materialIndex];if(j&&j.visible){const Q=x(E,j,G,v);r.renderBufferDirect(P,null,B,Q,E,$)}}}else if(N.visible){const O=x(E,N,G,v);r.renderBufferDirect(P,null,B,O,E,null)}}const Y=E.children;for(let B=0,N=Y.length;B<N;B++)b(Y[B],R,P,G,v)}}function yv(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const k=new Ye;let te=null;const ue=new Ye(0,0,0,0);return{setMask:function(me){te!==me&&!C&&(r.colorMask(me,me,me,me),te=me)},setLocked:function(me){C=me},setClear:function(me,st,rt,Ft,ei){ei===!0&&(me*=Ft,st*=Ft,rt*=Ft),k.set(me,st,rt,Ft),ue.equals(k)===!1&&(r.clearColor(me,st,rt,Ft),ue.copy(k))},reset:function(){C=!1,te=null,ue.set(-1,0,0,0)}}}function s(){let C=!1,k=null,te=null,ue=null;return{setTest:function(me){me?L(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(me){k!==me&&!C&&(r.depthMask(me),k=me)},setFunc:function(me){if(te!==me){switch(me){case sh:r.depthFunc(r.NEVER);break;case rh:r.depthFunc(r.ALWAYS);break;case oh:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case ch:r.depthFunc(r.GEQUAL);break;case lh:r.depthFunc(r.GREATER);break;case uh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=me}},setLocked:function(me){C=me},setClear:function(me){ue!==me&&(r.clearDepth(me),ue=me)},reset:function(){C=!1,k=null,te=null,ue=null}}}function o(){let C=!1,k=null,te=null,ue=null,me=null,st=null,rt=null,Ft=null,ei=null;return{setTest:function(dt){C||(dt?L(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(dt){k!==dt&&!C&&(r.stencilMask(dt),k=dt)},setFunc:function(dt,ln,Rn){(te!==dt||ue!==ln||me!==Rn)&&(r.stencilFunc(dt,ln,Rn),te=dt,ue=ln,me=Rn)},setOp:function(dt,ln,Rn){(st!==dt||rt!==ln||Ft!==Rn)&&(r.stencilOp(dt,ln,Rn),st=dt,rt=ln,Ft=Rn)},setLocked:function(dt){C=dt},setClear:function(dt){ei!==dt&&(r.clearStencil(dt),ei=dt)},reset:function(){C=!1,k=null,te=null,ue=null,me=null,st=null,rt=null,Ft=null,ei=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,b=null,E=null,R=null,P=null,G=null,v=!1,w=null,Y=null,B=null,N=null,O=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,$=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=$>=2);let Q=null,ee={};const xe=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),V=new Ye().fromArray(xe),Z=new Ye().fromArray(de);function ae(C,k,te,ue){const me=new Uint8Array(4),st=r.createTexture();r.bindTexture(C,st),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<te;rt++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(k,0,r.RGBA,1,1,ue,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(k+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return st}const le={};le[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),L(r.DEPTH_TEST),c.setFunc(to),Ct(!1),Et($c),L(r.CULL_FACE),ke(Kn);function L(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function Ue(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function Le(C,k){return p[C]!==k?(r.bindFramebuffer(C,k),p[C]=k,n&&(C===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=k),C===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=k)),!0):!1}function oe(C,k){let te=_,ue=!1;if(C)if(te=g.get(k),te===void 0&&(te=[],g.set(k,te)),C.isWebGLMultipleRenderTargets){const me=C.texture;if(te.length!==me.length||te[0]!==r.COLOR_ATTACHMENT0){for(let st=0,rt=me.length;st<rt;st++)te[st]=r.COLOR_ATTACHMENT0+st;te.length=me.length,ue=!0}}else te[0]!==r.COLOR_ATTACHMENT0&&(te[0]=r.COLOR_ATTACHMENT0,ue=!0);else te[0]!==r.BACK&&(te[0]=r.BACK,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function we(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const Ze={[Ci]:r.FUNC_ADD,[$u]:r.FUNC_SUBTRACT,[ju]:r.FUNC_REVERSE_SUBTRACT};if(n)Ze[Aa]=r.MIN,Ze[wa]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ze[Aa]=C.MIN_EXT,Ze[wa]=C.MAX_EXT)}const Me={[Yu]:r.ZERO,[Ku]:r.ONE,[Zu]:r.SRC_COLOR,[uc]:r.SRC_ALPHA,[ih]:r.SRC_ALPHA_SATURATE,[th]:r.DST_COLOR,[Qu]:r.DST_ALPHA,[Ju]:r.ONE_MINUS_SRC_COLOR,[hc]:r.ONE_MINUS_SRC_ALPHA,[nh]:r.ONE_MINUS_DST_COLOR,[eh]:r.ONE_MINUS_DST_ALPHA};function ke(C,k,te,ue,me,st,rt,Ft){if(C===Kn){f===!0&&(Ue(r.BLEND),f=!1);return}if(f===!1&&(L(r.BLEND),f=!0),C!==ba){if(C!==y||Ft!==v){if((x!==Ci||R!==Ci)&&(r.blendEquation(r.FUNC_ADD),x=Ci,R=Ci),Ft)switch(C){case di:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jr:r.blendFunc(r.ONE,r.ONE);break;case Qr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case di:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,E=null,P=null,G=null,y=C,v=Ft}return}me=me||k,st=st||te,rt=rt||ue,(k!==x||me!==R)&&(r.blendEquationSeparate(Ze[k],Ze[me]),x=k,R=me),(te!==b||ue!==E||st!==P||rt!==G)&&(r.blendFuncSeparate(Me[te],Me[ue],Me[st],Me[rt]),b=te,E=ue,P=st,G=rt),y=C,v=!1}function Tt(C,k){C.side===En?Ue(r.CULL_FACE):L(r.CULL_FACE);let te=C.side===Gt;k&&(te=!te),Ct(te),C.blending===di&&C.transparent===!1?ke(Kn):ke(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ue=C.stencilWrite;l.setTest(ue),ue&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Je(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?L(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(C){w!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),w=C)}function Et(C){C!==Df?(L(r.CULL_FACE),C!==Y&&(C===$c?r.cullFace(r.BACK):C===Ff?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),Y=C}function gt(C){C!==B&&(J&&r.lineWidth(C),B=C)}function Je(C,k,te){C?(L(r.POLYGON_OFFSET_FILL),(N!==k||O!==te)&&(r.polygonOffset(k,te),N=k,O=te)):Ue(r.POLYGON_OFFSET_FILL)}function lt(C){C?L(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function $t(C){C===void 0&&(C=r.TEXTURE0+F-1),Q!==C&&(r.activeTexture(C),Q=C)}function T(C,k,te){te===void 0&&(Q===null?te=r.TEXTURE0+F-1:te=Q);let ue=ee[te];ue===void 0&&(ue={type:void 0,texture:void 0},ee[te]=ue),(ue.type!==C||ue.texture!==k)&&(Q!==te&&(r.activeTexture(te),Q=te),r.bindTexture(C,k||le[C]),ue.type=C,ue.texture=k)}function S(){const C=ee[Q];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(C){V.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),V.copy(C))}function Se(C){Z.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Z.copy(C))}function qe(C,k){let te=h.get(k);te===void 0&&(te=new WeakMap,h.set(k,te));let ue=te.get(C);ue===void 0&&(ue=r.getUniformBlockIndex(k,C.name),te.set(C,ue))}function tt(C,k){const ue=h.get(k).get(C);u.get(k)!==ue&&(r.uniformBlockBinding(k,ue,C.__bindingPointIndex),u.set(k,ue))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Q=null,ee={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,b=null,E=null,R=null,P=null,G=null,v=!1,w=null,Y=null,B=null,N=null,O=null,V.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:L,disable:Ue,bindFramebuffer:Le,drawBuffers:oe,useProgram:we,setBlending:ke,setMaterial:Tt,setFlipSided:Ct,setCullFace:Et,setLineWidth:gt,setPolygonOffset:Je,setScissorTest:lt,activeTexture:$t,bindTexture:T,unbindTexture:S,compressedTexImage2D:z,compressedTexImage3D:ie,texImage2D:Te,texImage3D:be,updateUBOMapping:qe,uniformBlockBinding:tt,texStorage2D:X,texStorage3D:ve,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Re,compressedTexSubImage3D:pe,scissor:fe,viewport:Se,reset:ht}}function Mv(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return f?new OffscreenCanvas(T,S):er("canvas")}function x(T,S,z,ie){let se=1;if((T.width>ie||T.height>ie)&&(se=ie/Math.max(T.width,T.height)),se<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=S?Eh:Math.floor,Re=ce(se*T.width),pe=ce(se*T.height);_===void 0&&(_=y(Re,pe));const X=z?y(Re,pe):_;return X.width=Re,X.height=pe,X.getContext("2d").drawImage(T,0,0,Re,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Re+"x"+pe+")."),X}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return $a(T.width)&&$a(T.height)}function E(T){return a?!1:T.wrapS!==fn||T.wrapT!==fn||T.minFilter!==it&&T.minFilter!==It}function R(T,S){return T.generateMipmaps&&S&&T.minFilter!==it&&T.minFilter!==It}function P(T){r.generateMipmap(T)}function G(T,S,z,ie,se=!1){if(a===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=S;return S===r.RED&&(z===r.FLOAT&&(ce=r.R32F),z===r.HALF_FLOAT&&(ce=r.R16F),z===r.UNSIGNED_BYTE&&(ce=r.R8)),S===r.RG&&(z===r.FLOAT&&(ce=r.RG32F),z===r.HALF_FLOAT&&(ce=r.RG16F),z===r.UNSIGNED_BYTE&&(ce=r.RG8)),S===r.RGBA&&(z===r.FLOAT&&(ce=r.RGBA32F),z===r.HALF_FLOAT&&(ce=r.RGBA16F),z===r.UNSIGNED_BYTE&&(ce=ie===he&&se===!1?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(T,S,z){return R(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==it&&T.minFilter!==It?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){return T===it||T===so||T===js?r.NEAREST:r.LINEAR}function Y(T){const S=T.target;S.removeEventListener("dispose",Y),N(S),S.isVideoTexture&&g.delete(S)}function B(T){const S=T.target;S.removeEventListener("dispose",B),F(S)}function N(T){const S=n.get(T);if(S.__webglInit===void 0)return;const z=T.source,ie=m.get(z);if(ie){const se=ie[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(T),Object.keys(ie).length===0&&m.delete(z)}n.remove(T)}function O(T){const S=n.get(T);r.deleteTexture(S.__webglTexture);const z=T.source,ie=m.get(z);delete ie[S.__cacheKey],o.memory.textures--}function F(T){const S=T.texture,z=n.get(T),ie=n.get(S);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(z.__webglFramebuffer[se]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,ce=S.length;se<ce;se++){const Re=n.get(S[se]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(S[se])}n.remove(S),n.remove(T)}let J=0;function $(){J=0}function j(){const T=J;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),J+=1,T}function Q(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ee(T,S){const z=n.get(T);if(T.isVideoTexture&&lt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(z,T,S);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function xe(T,S){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Ue(z,T,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function de(T,S){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Ue(z,T,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function V(T,S){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Le(z,T,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const Z={[Fi]:r.REPEAT,[fn]:r.CLAMP_TO_EDGE,[Js]:r.MIRRORED_REPEAT},ae={[it]:r.NEAREST,[so]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[It]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR};function le(T,S,z){if(z?(r.texParameteri(T,r.TEXTURE_WRAP_S,Z[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,Z[S.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,Z[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ae[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ae[S.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==fn||S.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,w(S.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==it&&S.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===it||S.minFilter!==js&&S.minFilter!==Oi||S.type===sn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===fi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function L(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",Y));const ie=S.source;let se=m.get(ie);se===void 0&&(se={},m.set(ie,se));const ce=Q(S);if(ce!==T.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[ce].usedTimes++;const Re=se[T.__cacheKey];Re!==void 0&&(se[T.__cacheKey].usedTimes--,Re.usedTimes===0&&O(S)),T.__cacheKey=ce,T.__webglTexture=se[ce].texture}return z}function Ue(T,S,z){let ie=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=r.TEXTURE_3D);const se=L(T,S),ce=S.source;t.bindTexture(ie,T.__webglTexture,r.TEXTURE0+z);const Re=n.get(ce);if(ce.version!==Re.__version||se===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const pe=E(S)&&b(S.image)===!1;let X=x(S.image,pe,!1,u);X=$t(S,X);const ve=b(X)||a,Te=s.convert(S.format,S.colorSpace);let be=s.convert(S.type),fe=G(S.internalFormat,Te,be,S.colorSpace);le(ie,S,ve);let Se;const qe=S.mipmaps,tt=a&&S.isVideoTexture!==!0,ht=Re.__version===void 0||se===!0,C=v(S,X,ve);if(S.isDepthTexture)fe=r.DEPTH_COMPONENT,a?S.type===sn?fe=r.DEPTH_COMPONENT32F:S.type===ui?fe=r.DEPTH_COMPONENT24:S.type===Ui?fe=r.DEPTH24_STENCIL8:fe=r.DEPTH_COMPONENT16:S.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zn&&fe===r.DEPTH_COMPONENT&&S.type!==fc&&S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ui,be=s.convert(S.type)),S.format===Bi&&fe===r.DEPTH_COMPONENT&&(fe=r.DEPTH_STENCIL,S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ui,be=s.convert(S.type))),ht&&(tt?t.texStorage2D(r.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(r.TEXTURE_2D,0,fe,X.width,X.height,0,Te,be,null));else if(S.isDataTexture)if(qe.length>0&&ve){tt&&ht&&t.texStorage2D(r.TEXTURE_2D,C,fe,qe[0].width,qe[0].height);for(let k=0,te=qe.length;k<te;k++)Se=qe[k],tt?t.texSubImage2D(r.TEXTURE_2D,k,0,0,Se.width,Se.height,Te,be,Se.data):t.texImage2D(r.TEXTURE_2D,k,fe,Se.width,Se.height,0,Te,be,Se.data);S.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(r.TEXTURE_2D,C,fe,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,X.width,X.height,Te,be,X.data)):t.texImage2D(r.TEXTURE_2D,0,fe,X.width,X.height,0,Te,be,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,C,fe,qe[0].width,qe[0].height,X.depth);for(let k=0,te=qe.length;k<te;k++)Se=qe[k],S.format!==rn?Te!==null?tt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,X.depth,Te,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,fe,Se.width,Se.height,X.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,Se.width,Se.height,X.depth,Te,be,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,fe,Se.width,Se.height,X.depth,0,Te,be,Se.data)}else{tt&&ht&&t.texStorage2D(r.TEXTURE_2D,C,fe,qe[0].width,qe[0].height);for(let k=0,te=qe.length;k<te;k++)Se=qe[k],S.format!==rn?Te!==null?tt?t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,k,fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(r.TEXTURE_2D,k,0,0,Se.width,Se.height,Te,be,Se.data):t.texImage2D(r.TEXTURE_2D,k,fe,Se.width,Se.height,0,Te,be,Se.data)}else if(S.isDataArrayTexture)tt?(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,C,fe,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Te,be,X.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,Te,be,X.data);else if(S.isData3DTexture)tt?(ht&&t.texStorage3D(r.TEXTURE_3D,C,fe,X.width,X.height,X.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Te,be,X.data)):t.texImage3D(r.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,Te,be,X.data);else if(S.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(r.TEXTURE_2D,C,fe,X.width,X.height);else{let k=X.width,te=X.height;for(let ue=0;ue<C;ue++)t.texImage2D(r.TEXTURE_2D,ue,fe,k,te,0,Te,be,null),k>>=1,te>>=1}}else if(qe.length>0&&ve){tt&&ht&&t.texStorage2D(r.TEXTURE_2D,C,fe,qe[0].width,qe[0].height);for(let k=0,te=qe.length;k<te;k++)Se=qe[k],tt?t.texSubImage2D(r.TEXTURE_2D,k,0,0,Te,be,Se):t.texImage2D(r.TEXTURE_2D,k,fe,Te,be,Se);S.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(r.TEXTURE_2D,C,fe,X.width,X.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,be,X)):t.texImage2D(r.TEXTURE_2D,0,fe,Te,be,X);R(S,ve)&&P(ie),Re.__version=ce.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Le(T,S,z){if(S.image.length!==6)return;const ie=L(T,S),se=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+z);const ce=n.get(se);if(se.version!==ce.__version||ie===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,pe=S.image[0]&&S.image[0].isDataTexture,X=[];for(let k=0;k<6;k++)!Re&&!pe?X[k]=x(S.image[k],!1,!0,l):X[k]=pe?S.image[k].image:S.image[k],X[k]=$t(S,X[k]);const ve=X[0],Te=b(ve)||a,be=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),Se=G(S.internalFormat,be,fe,S.colorSpace),qe=a&&S.isVideoTexture!==!0,tt=ce.__version===void 0||ie===!0;let ht=v(S,ve,Te);le(r.TEXTURE_CUBE_MAP,S,Te);let C;if(Re){qe&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Se,ve.width,ve.height);for(let k=0;k<6;k++){C=X[k].mipmaps;for(let te=0;te<C.length;te++){const ue=C[te];S.format!==rn?be!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,Se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,0,0,ue.width,ue.height,be,fe,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te,Se,ue.width,ue.height,0,be,fe,ue.data)}}}else{C=S.mipmaps,qe&&tt&&(C.length>0&&ht++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Se,X[0].width,X[0].height));for(let k=0;k<6;k++)if(pe){qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,X[k].width,X[k].height,be,fe,X[k].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Se,X[k].width,X[k].height,0,be,fe,X[k].data);for(let te=0;te<C.length;te++){const me=C[te].image[k].image;qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,0,0,me.width,me.height,be,fe,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,Se,me.width,me.height,0,be,fe,me.data)}}else{qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,be,fe,X[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Se,be,fe,X[k]);for(let te=0;te<C.length;te++){const ue=C[te];qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,0,0,be,fe,ue.image[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,te+1,Se,be,fe,ue.image[k])}}}R(S,Te)&&P(r.TEXTURE_CUBE_MAP),ce.__version=se.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function oe(T,S,z,ie,se){const ce=s.convert(z.format,z.colorSpace),Re=s.convert(z.type),pe=G(z.internalFormat,ce,Re,z.colorSpace);n.get(S).__hasExternalTextures||(se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,0,pe,S.width,S.height,S.depth,0,ce,Re,null):t.texImage2D(se,0,pe,S.width,S.height,0,ce,Re,null)),t.bindFramebuffer(r.FRAMEBUFFER,T),Je(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,se,n.get(z).__webglTexture,0,gt(S)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,se,n.get(z).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(T,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ie=r.DEPTH_COMPONENT16;if(z||Je(S)){const se=S.depthTexture;se&&se.isDepthTexture&&(se.type===sn?ie=r.DEPTH_COMPONENT32F:se.type===ui&&(ie=r.DEPTH_COMPONENT24));const ce=gt(S);Je(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ie,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ie,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ie=gt(S);z&&Je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,S.width,S.height):Je(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0;se<ie.length;se++){const ce=ie[se],Re=s.convert(ce.format,ce.colorSpace),pe=s.convert(ce.type),X=G(ce.internalFormat,Re,pe,ce.colorSpace),ve=gt(S);z&&Je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,X,S.width,S.height):Je(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const ie=n.get(S.depthTexture).__webglTexture,se=gt(S);if(S.depthTexture.format===Zn)Je(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Bi)Je(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(T){const S=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ze(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=r.createRenderbuffer(),we(S.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),we(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(T,S,z){const ie=n.get(T);S!==void 0&&oe(ie.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),z!==void 0&&Me(T)}function Tt(T){const S=T.texture,z=n.get(T),ie=n.get(S);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=S.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,Re=b(T)||a;if(se){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)z.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const pe=T.texture;for(let X=0,ve=pe.length;X<ve;X++){const Te=n.get(pe[X]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Je(T)===!1){const pe=ce?S:[S];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<pe.length;X++){const ve=pe[X];z.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[X]);const Te=s.convert(ve.format,ve.colorSpace),be=s.convert(ve.type),fe=G(ve.internalFormat,Te,be,ve.colorSpace,T.isXRRenderTarget===!0),Se=gt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,z.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),we(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),le(r.TEXTURE_CUBE_MAP,S,Re);for(let pe=0;pe<6;pe++)oe(z.__webglFramebuffer[pe],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe);R(S,Re)&&P(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const pe=T.texture;for(let X=0,ve=pe.length;X<ve;X++){const Te=pe[X],be=n.get(Te);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),le(r.TEXTURE_2D,Te,Re),oe(z.__webglFramebuffer,T,Te,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D),R(Te,Re)&&P(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?pe=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ie.__webglTexture),le(pe,S,Re),oe(z.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,pe),R(S,Re)&&P(pe),t.unbindTexture()}T.depthBuffer&&Me(T)}function Ct(T){const S=b(T)||a,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,se=z.length;ie<se;ie++){const ce=z[ie];if(R(ce,S)){const Re=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pe=n.get(ce).__webglTexture;t.bindTexture(Re,pe),P(Re),t.unbindTexture()}}}function Et(T){if(a&&T.samples>0&&Je(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,ie=T.height;let se=r.COLOR_BUFFER_BIT;const ce=[],Re=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(T),X=T.isWebGLMultipleRenderTargets===!0;if(X)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){ce.push(r.COLOR_ATTACHMENT0+ve),T.depthBuffer&&ce.push(Re);const Te=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Te===!1&&(T.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),X&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]),Te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Re]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Re])),X){const be=n.get(S[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,z,ie,0,0,z,ie,se,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Te=n.get(S[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function gt(T){return Math.min(h,T.samples)}function Je(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function $t(T,S){const z=T.colorSpace,ie=T.format,se=T.type;return T.isCompressedTexture===!0||T.format===qa||z!==On&&z!==pi&&(z===he?a===!1?e.has("EXT_sRGB")===!0&&ie===rn?(T.format=qa,T.minFilter=It,T.generateMipmaps=!1):S=Ah.sRGBToLinear(S):(ie!==rn||se!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=xe,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Je}function Tv(r,e,t){const n=t.isWebGL2;function i(s,o=pi){let a;if(s===In)return r.UNSIGNED_BYTE;if(s===Hf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zf)return r.BYTE;if(s===Vf)return r.SHORT;if(s===fc)return r.UNSIGNED_SHORT;if(s===kf)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===sn)return r.FLOAT;if(s===fi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xf)return r.ALPHA;if(s===rn)return r.RGBA;if(s===qf)return r.LUMINANCE;if(s===$f)return r.LUMINANCE_ALPHA;if(s===Zn)return r.DEPTH_COMPONENT;if(s===Bi)return r.DEPTH_STENCIL;if(s===qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_h)return r.RED;if(s===jf)return r.RED_INTEGER;if(s===xh)return r.RG;if(s===Yf)return r.RG_INTEGER;if(s===Kf)return r.RGBA_INTEGER;if(s===Do||s===qr||s===$r||s===jr)if(o===he)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Do)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Do)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jc||s===Yc||s===Kc||s===Zc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ra||s===Ca)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ra)return o===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ca)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===La||s===Na||s===Pa||s===Ua||s===Ia||s===Da||s===Fa||s===Oa||s===Ba||s===Ga||s===za||s===Va||s===ka||s===Ha)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===La)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Na)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pa)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ua)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ia)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Da)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fa)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oa)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ba)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ga)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===za)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Va)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ka)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ha)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fo)return o===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jf||s===Jc||s===Qc||s===el)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ev extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ni extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mc extends St{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=ui),n===void 0&&u===Bi&&(n=Ui),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=c!==void 0?c:it,this.flipY=!1,this.generateMipmaps=!1}}class Av extends bs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],x=[],b=new Set,E=new Map,R=new Xt;R.layers.enable(1),R.viewport=new Ye;const P=new Xt;P.layers.enable(2),P.viewport=new Ye;const G=[R,P],v=new Ev;v.layers.enable(1),v.layers.enable(2);let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new sa,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new sa,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new sa,y[V]=Z),Z.getHandSpace()};function B(V){const Z=x.indexOf(V.inputSource);if(Z===-1)return;const ae=y[Z];ae!==void 0&&(ae.update(V.inputSource,V.frame,l||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let V=0;V<y.length;V++){const Z=x[V];Z!==null&&(x[V]=null,y[V].disconnect(Z))}w=null,Y=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),f=new mi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ae=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Bi:Zn,ae=_.stencil?Ui:ui);const L={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(L),i.updateRenderState({layers:[d]}),f=new mi(d.textureWidth,d.textureHeight,{format:rn,type:In,depthTexture:new Mc(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(f);Ue.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],le=x.indexOf(ae);le>=0&&(x[le]=null,y[le].disconnect(ae))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let le=x.indexOf(ae);if(le===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(ae),le=Ue;break}else if(x[Ue]===null){x[Ue]=ae,le=Ue;break}if(le===-1)break}const L=y[le];L&&L.connect(ae)}}const F=new A,J=new A;function $(V,Z,ae){F.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const le=F.distanceTo(J),L=Z.projectionMatrix.elements,Ue=ae.projectionMatrix.elements,Le=L[14]/(L[10]-1),oe=L[14]/(L[10]+1),we=(L[9]+1)/L[5],Ze=(L[9]-1)/L[5],Me=(L[8]-1)/L[0],ke=(Ue[8]+1)/Ue[0],Tt=Le*Me,Ct=Le*ke,Et=le/(-Me+ke),gt=Et*-Me;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(gt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Je=Le+Et,lt=oe+Et,$t=Tt-gt,T=Ct+(le-gt),S=we*oe/lt*Je,z=Ze*oe/lt*Je;V.projectionMatrix.makePerspective($t,T,S,z,Je,lt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=P.near=R.near=V.near,v.far=P.far=R.far=V.far,(w!==v.near||Y!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,Y=v.far);const Z=V.parent,ae=v.cameras;j(v,Z);for(let le=0;le<ae.length;le++)j(ae[le],Z);ae.length===2?$(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),Q(V,v,Z)};function Q(V,Z,ae){ae===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const le=V.children;for(let L=0,Ue=le.length;L<Ue;L++)le[L].updateMatrixWorld(!0);V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return b};let ee=null;function xe(V,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let le=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let L=0;L<ae.length;L++){const Ue=ae[L];let Le=null;if(p!==null)Le=p.getViewport(Ue);else{const we=h.getViewSubImage(d,Ue);Le=we.viewport,L===0&&(e.setRenderTargetTextures(f,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f))}let oe=G[L];oe===void 0&&(oe=new Xt,oe.layers.enable(L),oe.viewport=new Ye,G[L]=oe),oe.matrix.fromArray(Ue.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ue.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Le.x,Le.y,Le.width,Le.height),L===0&&(v.matrix.copy(oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(oe)}}for(let ae=0;ae<y.length;ae++){const le=x[ae],L=y[ae];le!==null&&L!==void 0&&L.update(le,Z,l||o)}if(ee&&ee(V,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ae=null;for(const le of b)Z.detectedPlanes.has(le)||(ae===null&&(ae=[]),ae.push(le));if(ae!==null)for(const le of ae)b.delete(le),E.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of Z.detectedPlanes)if(!b.has(le))b.add(le),E.set(le,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const L=E.get(le);le.lastChangedTime>L&&(E.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const de=new Uh;de.setAnimationLoop(xe),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}}function wv(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rv(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=i[y.id];b===void 0&&(g(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){const x=h();y.__bindingPointIndex=x;const b=r.createBuffer(),E=y.__size,R=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,P=b.length;R<P;R++){const G=b[R];if(p(G,R,E)===!0){const v=G.__offset,w=Array.isArray(G.value)?G.value:[G.value];let Y=0;for(let B=0;B<w.length;B++){const N=w[B],O=_(N);typeof N=="number"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,v+Y,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=N.elements[0],G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=N.elements[0],G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=N.elements[0]):(N.toArray(G.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,G.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,x,b){const E=y.value;if(b[x]===void 0){if(typeof E=="number")b[x]=E;else{const R=Array.isArray(E)?E:[E],P=[];for(let G=0;G<R.length;G++)P.push(R[G].clone());b[x]=P}return!0}else if(typeof E=="number"){if(b[x]!==E)return b[x]=E,!0}else{const R=Array.isArray(b[x])?b[x]:[b[x]],P=Array.isArray(E)?E:[E];for(let G=0;G<R.length;G++){const v=R[G];if(v.equals(P[G])===!1)return v.copy(P[G]),!0}}return!1}function g(y){const x=y.uniforms;let b=0;const E=16;let R=0;for(let P=0,G=x.length;P<G;P++){const v=x[P],w={boundary:0,storage:0},Y=Array.isArray(v.value)?v.value:[v.value];for(let B=0,N=Y.length;B<N;B++){const O=Y[B],F=_(O);w.boundary+=F.boundary,w.storage+=F.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=b,P>0){R=b%E;const B=E-R;R!==0&&B-w.boundary<0&&(b+=E-R,v.__offset=b)}b+=w.storage}return R=b%E,R>0&&(b+=E-R),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}function Cv(){const r=er("canvas");return r.style.display="block",r}class Bh{constructor(e={}){const{canvas:t=Cv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=he,this.useLegacyLights=!0,this.toneMapping=an,this.toneMappingExposure=1;const f=this;let y=!1,x=0,b=0,E=null,R=-1,P=null;const G=new Ye,v=new Ye;let w=null,Y=t.width,B=t.height,N=1,O=null,F=null;const J=new Ye(0,0,Y,B),$=new Ye(0,0,Y,B);let j=!1;const Q=new ar;let ee=!1,xe=!1,de=null;const V=new Pe,Z=new A,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return E===null?N:1}let L=n;function Ue(M,D){for(let H=0;H<M.length;H++){const U=M[H],q=t.getContext(U,D);if(q!==null)return q}return null}try{const M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",tt,!1),L===null){const D=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&D.shift(),L=Ue(D,M),L===null)throw Ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Le,oe,we,Ze,Me,ke,Tt,Ct,Et,gt,Je,lt,$t,T,S,z,ie,se,ce,Re,pe,X,ve,Te;function be(){Le=new V_(L),oe=new D_(L,Le,e),Le.init(oe),X=new Tv(L,Le,oe),we=new yv(L,Le,oe),Ze=new W_(L),Me=new av,ke=new Mv(L,Le,we,Me,oe,X,Ze),Tt=new O_(f),Ct=new z_(f),Et=new nm(L,oe),ve=new U_(L,Le,Et,oe),gt=new k_(L,Et,Ze,ve),Je=new j_(L,gt,Et,Ze),ce=new $_(L,oe,ke),z=new F_(Me),lt=new ov(f,Tt,Ct,Le,oe,ve,z),$t=new wv(f,Me),T=new lv,S=new mv(Le,oe),se=new P_(f,Tt,Ct,we,Je,d,c),ie=new Sv(f,Je,oe),Te=new Rv(L,Ze,oe,we),Re=new I_(L,Le,Ze,oe),pe=new H_(L,Le,Ze,oe),Ze.programs=lt.programs,f.capabilities=oe,f.extensions=Le,f.properties=Me,f.renderLists=T,f.shadowMap=ie,f.state=we,f.info=Ze}be();const fe=new Av(f,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(Y,B,!1))},this.getSize=function(M){return M.set(Y,B)},this.setSize=function(M,D,H=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,B=D,t.width=Math.floor(M*N),t.height=Math.floor(D*N),H===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Y*N,B*N).floor()},this.setDrawingBufferSize=function(M,D,H){Y=M,B=D,N=H,t.width=Math.floor(M*H),t.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,D,H,U){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,D,H,U),we.viewport(G.copy(J).multiplyScalar(N).floor())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,D,H,U){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,D,H,U),we.scissor(v.copy($).multiplyScalar(N).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){we.setScissorTest(j=M)},this.setOpaqueSort=function(M){O=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(M=!0,D=!0,H=!0){let U=0;M&&(U|=L.COLOR_BUFFER_BIT),D&&(U|=L.DEPTH_BUFFER_BIT),H&&(U|=L.STENCIL_BUFFER_BIT),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),T.dispose(),S.dispose(),Me.dispose(),Tt.dispose(),Ct.dispose(),Je.dispose(),ve.dispose(),Te.dispose(),lt.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",me),fe.removeEventListener("sessionend",st),de&&(de.dispose(),de=null),rt.stop()};function Se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const M=Ze.autoReset,D=ie.enabled,H=ie.autoUpdate,U=ie.needsUpdate,q=ie.type;be(),Ze.autoReset=M,ie.enabled=D,ie.autoUpdate=H,ie.needsUpdate=U,ie.type=q}function tt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ht(M){const D=M.target;D.removeEventListener("dispose",ht),C(D)}function C(M){k(M),Me.remove(M)}function k(M){const D=Me.get(M).programs;D!==void 0&&(D.forEach(function(H){lt.releaseProgram(H)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,U,q,Ee){D===null&&(D=ae);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Ne=Cf(M,D,H,U,q);we.setMaterial(U,Ae);let Oe=H.index,Ge=1;U.wireframe===!0&&(Oe=gt.getWireframeAttribute(H),Ge=2);const ze=H.drawRange,He=H.attributes.position;let nt=ze.start*Ge,Vt=(ze.start+ze.count)*Ge;Ee!==null&&(nt=Math.max(nt,Ee.start*Ge),Vt=Math.min(Vt,(Ee.start+Ee.count)*Ge)),Oe!==null?(nt=Math.max(nt,0),Vt=Math.min(Vt,Oe.count)):He!=null&&(nt=Math.max(nt,0),Vt=Math.min(Vt,He.count));const xn=Vt-nt;if(xn<0||xn===1/0)return;ve.setup(q,U,Ne,H,Oe);let vi,ft=Re;if(Oe!==null&&(vi=Et.get(Oe),ft=pe,ft.setIndex(vi)),q.isMesh)U.wireframe===!0?(we.setLineWidth(U.wireframeLinewidth*le()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(q.isLine){let $e=U.linewidth;$e===void 0&&($e=1),we.setLineWidth($e*le()),q.isLineSegments?ft.setMode(L.LINES):q.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else q.isPoints?ft.setMode(L.POINTS):q.isSprite&&ft.setMode(L.TRIANGLES);if(q.isInstancedMesh)ft.renderInstances(nt,xn,q.count);else if(H.isInstancedBufferGeometry){const $e=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,No=Math.min(H.instanceCount,$e);ft.renderInstances(nt,xn,No)}else ft.render(nt,xn)},this.compile=function(M,D){function H(U,q,Ee){U.transparent===!0&&U.side===En&&U.forceSinglePass===!1?(U.side=Gt,U.needsUpdate=!0,ur(U,q,Ee),U.side=Fn,U.needsUpdate=!0,ur(U,q,Ee),U.side=En):ur(U,q,Ee)}g=S.get(M),g.init(),m.push(g),M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(f.useLegacyLights),M.traverse(function(U){const q=U.material;if(q)if(Array.isArray(q))for(let Ee=0;Ee<q.length;Ee++){const Ae=q[Ee];H(Ae,M,U)}else H(q,M,U)}),m.pop(),g=null};let te=null;function ue(M){te&&te(M)}function me(){rt.stop()}function st(){rt.start()}const rt=new Uh;rt.setAnimationLoop(ue),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(M){te=M,fe.setAnimationLoop(M),M===null?rt.stop():rt.start()},fe.addEventListener("sessionstart",me),fe.addEventListener("sessionend",st),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(D),D=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(f,M,D,E),g=S.get(M,m.length),g.init(),m.push(g),V.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Q.setFromProjectionMatrix(V),xe=this.localClippingEnabled,ee=z.init(this.clippingPlanes,xe),p=T.get(M,_.length),p.init(),_.push(p),Ft(M,D,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(O,F),ee===!0&&z.beginShadows();const H=g.state.shadowsArray;if(ie.render(H,M,D),ee===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(p,M),g.setupLights(f.useLegacyLights),D.isArrayCamera){const U=D.cameras;for(let q=0,Ee=U.length;q<Ee;q++){const Ae=U[q];ei(p,M,Ae,Ae.viewport)}}else ei(p,M,D);E!==null&&(ke.updateMultisampleRenderTarget(E),ke.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(f,M,D),ve.resetDefaultState(),R=-1,P=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Ft(M,D,H,U){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){U&&Z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);const Ae=Je.update(M),Ne=M.material;Ne.visible&&p.push(M,Ae,Ne,H,Z.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==Ze.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ze.render.frame);const Ae=Je.update(M),Ne=M.material;if(U&&(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Z.copy(Ae.boundingSphere.center).applyMatrix4(M.matrixWorld).applyMatrix4(V)),Array.isArray(Ne)){const Oe=Ae.groups;for(let Ge=0,ze=Oe.length;Ge<ze;Ge++){const He=Oe[Ge],nt=Ne[He.materialIndex];nt&&nt.visible&&p.push(M,Ae,nt,H,Z.z,He)}}else Ne.visible&&p.push(M,Ae,Ne,H,Z.z,null)}}const Ee=M.children;for(let Ae=0,Ne=Ee.length;Ae<Ne;Ae++)Ft(Ee[Ae],D,H,U)}function ei(M,D,H,U){const q=M.opaque,Ee=M.transmissive,Ae=M.transparent;g.setupLightsView(H),ee===!0&&z.setGlobalState(f.clippingPlanes,H),Ee.length>0&&dt(q,Ee,D,H),U&&we.viewport(G.copy(U)),q.length>0&&ln(q,D,H),Ee.length>0&&ln(Ee,D,H),Ae.length>0&&ln(Ae,D,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function dt(M,D,H,U){if(de===null){const Ne=oe.isWebGL2;de=new mi(1024,1024,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?fi:In,minFilter:Oi,samples:Ne&&a===!0?4:0})}const q=f.getRenderTarget();f.setRenderTarget(de),f.clear();const Ee=f.toneMapping;f.toneMapping=an,ln(M,H,U),ke.updateMultisampleRenderTarget(de),ke.updateRenderTargetMipmap(de);let Ae=!1;for(let Ne=0,Oe=D.length;Ne<Oe;Ne++){const Ge=D[Ne],ze=Ge.object,He=Ge.geometry,nt=Ge.material,Vt=Ge.group;if(nt.side===En&&ze.layers.test(U.layers)){const xn=nt.side;nt.side=Gt,nt.needsUpdate=!0,Rn(ze,H,U,He,nt,Vt),nt.side=xn,nt.needsUpdate=!0,Ae=!0}}Ae===!0&&(ke.updateMultisampleRenderTarget(de),ke.updateRenderTargetMipmap(de)),f.setRenderTarget(q),f.toneMapping=Ee}function ln(M,D,H){const U=D.isScene===!0?D.overrideMaterial:null;for(let q=0,Ee=M.length;q<Ee;q++){const Ae=M[q],Ne=Ae.object,Oe=Ae.geometry,Ge=U===null?Ae.material:U,ze=Ae.group;Ne.layers.test(H.layers)&&Rn(Ne,D,H,Oe,Ge,ze)}}function Rn(M,D,H,U,q,Ee){M.onBeforeRender(f,D,H,U,q,Ee),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(f,D,H,U,M,Ee),q.transparent===!0&&q.side===En&&q.forceSinglePass===!1?(q.side=Gt,q.needsUpdate=!0,f.renderBufferDirect(H,D,U,q,M,Ee),q.side=Fn,q.needsUpdate=!0,f.renderBufferDirect(H,D,U,q,M,Ee),q.side=En):f.renderBufferDirect(H,D,U,q,M,Ee),M.onAfterRender(f,D,H,U,q,Ee)}function ur(M,D,H){D.isScene!==!0&&(D=ae);const U=Me.get(M),q=g.state.lights,Ee=g.state.shadowsArray,Ae=q.state.version,Ne=lt.getParameters(M,q.state,Ee,D,H),Oe=lt.getProgramCacheKey(Ne);let Ge=U.programs;U.environment=M.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(M.isMeshStandardMaterial?Ct:Tt).get(M.envMap||U.environment),Ge===void 0&&(M.addEventListener("dispose",ht),Ge=new Map,U.programs=Ge);let ze=Ge.get(Oe);if(ze!==void 0){if(U.currentProgram===ze&&U.lightsStateVersion===Ae)return Wc(M,Ne),ze}else Ne.uniforms=lt.getUniforms(M),M.onBuild(H,Ne,f),M.onBeforeCompile(Ne,f),ze=lt.acquireProgram(Ne,Oe),Ge.set(Oe,ze),U.uniforms=Ne.uniforms;const He=U.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=z.uniform),Wc(M,Ne),U.needsLights=Nf(M),U.lightsStateVersion=Ae,U.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix);const nt=ze.getUniforms(),Vt=Kr.seqWithValue(nt.seq,He);return U.currentProgram=ze,U.uniformsList=Vt,ze}function Wc(M,D){const H=Me.get(M);H.outputColorSpace=D.outputColorSpace,H.instancing=D.instancing,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Cf(M,D,H,U,q){D.isScene!==!0&&(D=ae),ke.resetTextureUnits();const Ee=D.fog,Ae=U.isMeshStandardMaterial?D.environment:null,Ne=E===null?f.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:On,Oe=(U.isMeshStandardMaterial?Ct:Tt).get(U.envMap||Ae),Ge=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!U.normalMap&&!!H.attributes.tangent,He=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,Vt=!!H.morphAttributes.color,xn=U.toneMapped?f.toneMapping:an,vi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=vi!==void 0?vi.length:0,$e=Me.get(U),No=g.state.lights;if(ee===!0&&(xe===!0||M!==P)){const Zt=M===P&&U.id===R;z.setState(U,M,Zt)}let bt=!1;U.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==No.state.version||$e.outputColorSpace!==Ne||q.isInstancedMesh&&$e.instancing===!1||!q.isInstancedMesh&&$e.instancing===!0||q.isSkinnedMesh&&$e.skinning===!1||!q.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Oe||U.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==z.numPlanes||$e.numIntersection!==z.numIntersection)||$e.vertexAlphas!==Ge||$e.vertexTangents!==ze||$e.morphTargets!==He||$e.morphNormals!==nt||$e.morphColors!==Vt||$e.toneMapping!==xn||oe.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(bt=!0):(bt=!0,$e.__version=U.version);let Si=$e.currentProgram;bt===!0&&(Si=ur(U,D,q));let Xc=!1,Us=!1,Po=!1;const kt=Si.getUniforms(),yi=$e.uniforms;if(we.useProgram(Si.program)&&(Xc=!0,Us=!0,Po=!0),U.id!==R&&(R=U.id,Us=!0),Xc||P!==M){if(kt.setValue(L,"projectionMatrix",M.projectionMatrix),oe.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),P!==M&&(P=M,Us=!0,Po=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Zt=kt.map.cameraPosition;Zt!==void 0&&Zt.setValue(L,Z.setFromMatrixPosition(M.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&kt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||q.isSkinnedMesh)&&kt.setValue(L,"viewMatrix",M.matrixWorldInverse)}if(q.isSkinnedMesh){kt.setOptional(L,q,"bindMatrix"),kt.setOptional(L,q,"bindMatrixInverse");const Zt=q.skeleton;Zt&&(oe.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),kt.setValue(L,"boneTexture",Zt.boneTexture,ke),kt.setValue(L,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uo=H.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0&&oe.isWebGL2===!0)&&ce.update(q,H,Si),(Us||$e.receiveShadow!==q.receiveShadow)&&($e.receiveShadow=q.receiveShadow,kt.setValue(L,"receiveShadow",q.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(yi.envMap.value=Oe,yi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Us&&(kt.setValue(L,"toneMappingExposure",f.toneMappingExposure),$e.needsLights&&Lf(yi,Po),Ee&&U.fog===!0&&$t.refreshFogUniforms(yi,Ee),$t.refreshMaterialUniforms(yi,U,N,B,de),Kr.upload(L,$e.uniformsList,yi,ke)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Kr.upload(L,$e.uniformsList,yi,ke),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&kt.setValue(L,"center",q.center),kt.setValue(L,"modelViewMatrix",q.modelViewMatrix),kt.setValue(L,"normalMatrix",q.normalMatrix),kt.setValue(L,"modelMatrix",q.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Zt=U.uniformsGroups;for(let Io=0,Pf=Zt.length;Io<Pf;Io++)if(oe.isWebGL2){const qc=Zt[Io];Te.update(qc,Si),Te.bind(qc,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Lf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Nf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,D,H){Me.get(M.texture).__webglTexture=D,Me.get(M.depthTexture).__webglTexture=H;const U=Me.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const H=Me.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){E=M,x=D,b=H;let U=!0,q=null,Ee=!1,Ae=!1;if(M){const Oe=Me.get(M);Oe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(L.FRAMEBUFFER,null),U=!1):Oe.__webglFramebuffer===void 0?ke.setupRenderTarget(M):Oe.__hasExternalTextures&&ke.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const ze=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(q=ze[D],Ee=!0):oe.isWebGL2&&M.samples>0&&ke.useMultisampledRTT(M)===!1?q=Me.get(M).__webglMultisampledFramebuffer:q=ze,G.copy(M.viewport),v.copy(M.scissor),w=M.scissorTest}else G.copy(J).multiplyScalar(N).floor(),v.copy($).multiplyScalar(N).floor(),w=j;if(we.bindFramebuffer(L.FRAMEBUFFER,q)&&oe.drawBuffers&&U&&we.drawBuffers(M,q),we.viewport(G),we.scissor(v),we.setScissorTest(w),Ee){const Oe=Me.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Oe.__webglTexture,H)}else if(Ae){const Oe=Me.get(M.texture),Ge=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,H||0,Ge)}R=-1},this.readRenderTargetPixels=function(M,D,H,U,q,Ee,Ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){we.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Oe=M.texture,Ge=Oe.format,ze=Oe.type;if(Ge!==rn&&X.convert(Ge)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===fi&&(Le.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(ze!==In&&X.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===sn&&(oe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-U&&H>=0&&H<=M.height-q&&L.readPixels(D,H,U,q,X.convert(Ge),X.convert(ze),Ee)}finally{const Oe=E!==null?Me.get(E).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(M,D,H=0){const U=Math.pow(2,-H),q=Math.floor(D.image.width*U),Ee=Math.floor(D.image.height*U);ke.setTexture2D(D,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,M.x,M.y,q,Ee),we.unbindTexture()},this.copyTextureToTexture=function(M,D,H,U=0){const q=D.image.width,Ee=D.image.height,Ae=X.convert(H.format),Ne=X.convert(H.type);ke.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,M.x,M.y,q,Ee,Ae,Ne,D.image.data):D.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Ae,D.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,U,M.x,M.y,Ae,Ne,D.image),U===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H,U,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=M.max.x-M.min.x+1,Ae=M.max.y-M.min.y+1,Ne=M.max.z-M.min.z+1,Oe=X.convert(U.format),Ge=X.convert(U.type);let ze;if(U.isData3DTexture)ke.setTexture3D(U,0),ze=L.TEXTURE_3D;else if(U.isDataArrayTexture)ke.setTexture2DArray(U,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const He=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),xn=L.getParameter(L.UNPACK_SKIP_ROWS),vi=L.getParameter(L.UNPACK_SKIP_IMAGES),ft=H.isCompressedTexture?H.mipmaps[0]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,M.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,M.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(ze,q,D.x,D.y,D.z,Ee,Ae,Ne,Oe,Ge,ft.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,q,D.x,D.y,D.z,Ee,Ae,Ne,Oe,ft.data)):L.texSubImage3D(ze,q,D.x,D.y,D.z,Ee,Ae,Ne,Oe,Ge,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,He),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vi),q===0&&U.generateMipmaps&&L.generateMipmap(ze),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){x=0,b=0,E=null,we.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===he?Jn:pc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?he:On}}class Lv extends Bh{}Lv.prototype.isWebGL1Renderer=!0;class Nv extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new A;class Yn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hl=new A,Wl=new Ye,Xl=new Ye,Pv=new A,ql=new Pe,cs=new A;class Uv extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)cs.fromBufferAttribute(t,n),this.applyBoneTransform(n,cs),this.boundingBox.expandByPoint(cs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)cs.fromBufferAttribute(t,n),this.applyBoneTransform(n,cs),this.boundingSphere.expandByPoint(cs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wl.fromBufferAttribute(i.attributes.skinIndex,e),Xl.fromBufferAttribute(i.attributes.skinWeight,e),Hl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xl.getComponent(s);if(o!==0){const a=Wl.getComponent(s);ql.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pv.copy(Hl).applyMatrix4(ql),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class zh extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Iv extends St{constructor(e=null,t=1,n=1,i,s,o,a,c,l=it,u=it,h,d){super(null,o,a,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new Pe,Dv=new Pe;class Tc{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Dv;$l.multiplyMatrices(a,t[s]),$l.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Th(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Iv(t,e,e,rn,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new zh),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class jl extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Pe,Yl=new Pe,Pr=[],Kl=new gn,Fv=new Pe,Bs=new Kt,Gs=new wn;class Ov extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Kl.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Gs.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ls),Yl.multiplyMatrices(n,ls),Bs.matrixWorld=Yl,Bs.raycast(e,Pr);for(let o=0,a=Pr.length;o<a;o++){const c=Pr[o];c.instanceId=s,c.object=this,t.push(c)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new A,Jl=new A,Ql=new Pe,ra=new _o,Ur=new wn;class Ec extends ct{constructor(e=new _n,t=new Vh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zl.fromBufferAttribute(t,i-1),Jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Ql.copy(i).invert(),ra.copy(e.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new A,u=new A,h=new A,d=new A,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=f,b=y-1;x<b;x+=p){const E=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,R),ra.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(d);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=f,b=y-1;x<b;x+=p){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ra.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const eu=new A,tu=new A;class Bv extends Ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)eu.fromBufferAttribute(t,i),tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eu.distanceTo(tu);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gv extends Ec{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kh extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nu=new Pe,Ya=new _o,Ir=new wn,Dr=new A;class zv extends ct{constructor(e=new _n,t=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;nu.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(nu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Dr.fromBufferAttribute(h,m),iu(Dr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Dr.fromBufferAttribute(h,g),iu(Dr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function iu(r,e,t,n,i,s,o){const a=Ya.distanceSqToPoint(r);if(a<t){const c=new A;Ya.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Vv extends St{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:It,this.magFilter=s!==void 0?s:It,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class kv extends _n{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new A,s=new A;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,p=h.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),y=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,f),s.fromBufferAttribute(o,y),su(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),su(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new pn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function su(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class bc extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ri(r,e,t){return Hh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Fr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ru(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Wh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wv extends cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:s=e,a=2*t-n;break;case il:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:o=e,c=2*n-t;break;case il:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let E=0;E!==a;++E)s[E]=f*o[u+E]+y*o[l+E]+x*o[c+E]+b*o[h+E];return s}}class Xv extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}}class qv extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ri(n,s,o),this.values=ri(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Hh(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=ri(this.times),t=ri(this.values),n=this.getValueSize(),i=this.getInterpolation()===Oo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=ri(e,0,o),this.values=ri(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ri(this.times,0),t=ri(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=xs;class Rs extends Gn{}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Qs;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xh extends Gn{}Xh.prototype.ValueTypeName="color";class tr extends Gn{}tr.prototype.ValueTypeName="number";class $v extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)xi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Gi extends Gn{InterpolantFactoryMethodLinear(e){return new $v(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=xs;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Gn{}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Qs;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Gn{}nr.prototype.ValueTypeName="vector";class jv{constructor(e,t=-1,n,i=Qf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Kv(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Gn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Hv(c);c=ru(c,1,u),l=ru(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];Wh(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new tr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(nr,p+".position",d,"pos",i),n(Gi,p+".quaternion",d,"rot",i),n(nr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return Xh;case"quaternion":return Gi;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Kv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yv(r.type);if(r.times===void 0){const t=[],n=[];Wh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const zi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Jv=new Zv;class Ls{constructor(e){this.manager=e!==void 0?e:Jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const qn={};class Qv extends Error{constructor(e,t){super(e),this.response=t}}class Mo extends Ls{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=qn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:x,value:b})=>{if(x)f.close();else{_+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,P=u.length;R<P;R++){const G=u[R];G.onProgress&&G.onProgress(E)}f.enqueue(b),y()}})}}});return new Response(m)}else throw new Qv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{zi.add(e,l);const u=qn[e];delete qn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=qn[e];if(u===void 0)throw this.manager.itemError(e),l;delete qn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class e0 extends Ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=er("img");function c(){u(),zi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class qh extends Ls{constructor(e){super(e)}load(e,t,n,i){const s=new St,o=new e0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class To extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const oa=new Pe,ou=new A,au=new A;class Ac{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t0 extends Ac{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class n0 extends To{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new t0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cu=new Pe,zs=new A,aa=new A;class i0 extends Ac{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-zs.x,-zs.y,-zs.z),cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu)}}class s0 extends To{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class r0 extends Ac{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o0 extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sb extends To{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ka{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class a0 extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class c0 extends Ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){zi.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Or;class l0{static getContext(){return Or===void 0&&(Or=new(window.AudioContext||window.webkitAudioContext)),Or}static setContext(e){Or=e}}class u0 extends Ls{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Mo(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);l0.getContext().decodeAudioData(l,function(h){t(h)},a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const wc="\\[\\]\\.:\\/",h0=new RegExp("["+wc+"]","g"),Rc="[^"+wc+"]",d0="[^"+wc.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Rc),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),_0=new RegExp("^"+f0+p0+m0+g0+"$"),x0=["material","materials","bones","map"];class v0{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(e){const t=_0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=v0;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Za extends Gh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class rb{constructor(e,t,n=0,i=1/0){this.ray=new _o(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ja(e,this,n,t),n.sort(lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ja(e[i],this,n,t);return n.sort(lu),n}}function lu(r,e){return r.distance-e.distance}function Ja(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ja(i[s],e,t,!0)}}class ob{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const uu=new A,Br=new A;class S0{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){uu.subVectors(e,this.start),Br.subVectors(this.end,this.start);const n=Br.dot(Br);let s=Br.dot(uu)/n;return t&&(s=_t(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jt.line={uniforms:vo.merge([re.common,re.fog,re.line]),vertexShader:`
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
		`};class Cc extends Bn{constructor(e){super({type:"LineMaterial",uniforms:vo.clone(jt.line.uniforms),vertexShader:jt.line.vertexShader,fragmentShader:jt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const hu=new gn,Gr=new A;class $h extends a0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pn(e,3)),this.setAttribute("uv",new pn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Za(t,6,1);return this.setAttribute("instanceStart",new Yn(n,3,0)),this.setAttribute("instanceEnd",new Yn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Za(t,6,1);return this.setAttribute("instanceColorStart",new Yn(n,3,0)),this.setAttribute("instanceColorEnd",new Yn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new kv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),hu.setFromBufferAttribute(t),this.boundingBox.union(hu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gr.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gr)),Gr.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Gr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class jh extends $h{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}const du=new A,fu=new A,Lt=new Ye,Nt=new Ye,Ln=new Ye,ca=new A,la=new Pe,Ut=new S0,pu=new A,zr=new gn,Vr=new wn,Nn=new Ye;let Un,Ii;function mu(r,e,t){return Nn.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Nn.multiplyScalar(1/Nn.w),Nn.x=Ii/t.width,Nn.y=Ii/t.height,Nn.applyMatrix4(r.projectionMatrixInverse),Nn.multiplyScalar(1/Nn.w),Math.abs(Math.max(Nn.x,Nn.y))}function y0(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){Ut.start.fromBufferAttribute(i,a),Ut.end.fromBufferAttribute(s,a),Ut.applyMatrix4(t);const l=new A,u=new A;Un.distanceSqToSegment(Ut.start,Ut.end,u,l),u.distanceTo(l)<Ii*.5&&e.push({point:u,pointOnLine:l,distance:Un.origin.distanceTo(u),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function M0(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;Un.at(1,Ln),Ln.w=1,Ln.applyMatrix4(e.matrixWorldInverse),Ln.applyMatrix4(n),Ln.multiplyScalar(1/Ln.w),Ln.x*=s.x/2,Ln.y*=s.y/2,Ln.z=0,ca.copy(Ln),la.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Lt.fromBufferAttribute(c,d),Nt.fromBufferAttribute(l,d),Lt.w=1,Nt.w=1,Lt.applyMatrix4(la),Nt.applyMatrix4(la),Lt.z>h&&Nt.z>h)continue;if(Lt.z>h){const x=Lt.z-Nt.z,b=(Lt.z-h)/x;Lt.lerp(Nt,b)}else if(Nt.z>h){const x=Nt.z-Lt.z,b=(Nt.z-h)/x;Nt.lerp(Lt,b)}Lt.applyMatrix4(n),Nt.applyMatrix4(n),Lt.multiplyScalar(1/Lt.w),Nt.multiplyScalar(1/Nt.w),Lt.x*=s.x/2,Lt.y*=s.y/2,Nt.x*=s.x/2,Nt.y*=s.y/2,Ut.start.copy(Lt),Ut.start.z=0,Ut.end.copy(Nt),Ut.end.z=0;const _=Ut.closestPointToPointParameter(ca,!0);Ut.at(_,pu);const m=go.lerp(Lt.z,Nt.z,_),f=m>=-1&&m<=1,y=ca.distanceTo(pu)<Ii*.5;if(f&&y){Ut.start.fromBufferAttribute(c,d),Ut.end.fromBufferAttribute(l,d),Ut.start.applyMatrix4(o),Ut.end.applyMatrix4(o);const x=new A,b=new A;Un.distanceSqToSegment(Ut.start,Ut.end,b,x),t.push({point:b,pointOnLine:x,distance:Un.origin.distanceTo(b),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}}class T0 extends Kt{constructor(e=new $h,t=new Cc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)du.fromBufferAttribute(t,o),fu.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+du.distanceTo(fu);const s=new Za(i,2,1);return e.setAttribute("instanceDistanceStart",new Yn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Yn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Un=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Ii=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Vr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ii*.5;else{const h=Math.max(i.near,Vr.distanceToPoint(Un.origin));l=mu(i,h,c.resolution)}if(Vr.radius+=l,Un.intersectsSphere(Vr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),zr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ii*.5;else{const h=Math.max(i.near,zr.distanceToPoint(Un.origin));u=mu(i,h,c.resolution)}zr.expandByScalar(u),Un.intersectsBox(zr)!==!1&&(n?y0(this,t):M0(this,i,t))}}class E0 extends T0{constructor(e=new jh,t=new Cc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const ua=new Ce;class ab extends E0{constructor({size:t=1,width:n=.005}={}){const i=new jh;i.setPositions([0,0,0,t,0,0,0,0,0,0,0,0,0,t,0,0,0,0,0,0,0,0,0,t,0,0,0]),i.setColors([1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1]);const s=new Cc({linewidth:n,vertexColors:!0,alphaToCoverage:!0});super(i,s);vn(this,"type","AxesHelper");this.computeLineDistances()}setColors(t,n,i){const s=ua.set(t).toArray(),o=ua.set(n).toArray(),a=ua.set(i).toArray();return this.geometry.setColors([...s,...s,...s,...o,...o,...o,...a,...a,...a]),this}dispose(){this.geometry.dispose(),this.material.dispose()}}const b0=(r,e,t,n)=>{const i=class extends Bn{constructor(a={}){const c=Object.entries(r);let l={};for(const[u,h]of c){const d=vo.clone({[u]:{value:h}});l={...l,...d}}super({uniforms:l,vertexShader:e,fragmentShader:t});vn(this,"key","");for(const[u]of c)Object.defineProperty(this,u,{get:()=>this.uniforms[u].value,set:h=>this.uniforms[u].value=h});Object.assign(this,a),n!==void 0&&n(this)}};return i.key=go.generateUUID(),i};b0({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard; }");const us={x:["#f73c3c","#942424"],y:["#6ccb26","#417a17"],z:["#178cf0","#0e5490"]},gu=new A,_u=new Pe,xu=new A,ha=new Ie,da=new Ie,A0=new Ie,vu=new Ie,Su=new Ie;class lb{constructor(e){vn(this,"dispose");vn(this,"camera");vn(this,"controls");this.camera=e.camera,this.controls=e.controls;const n=(e.size??80)*window.devicePixelRatio,i=8*window.devicePixelRatio,s=6*window.devicePixelRatio,o=8*window.devicePixelRatio,a=2*window.devicePixelRatio,c=new A(n/2,n/2,0);let l=null,u=!1,h,d=!1;const p=document.createElement("canvas");p.style.width=`${n/2}px`,p.style.height=`${n/2}px`,p.width=n,p.height=n,p.className="orbit-controls-gizmo",e.el.append(p);const g=(e.axes??"xyz").toUpperCase().split(""),_=[{axis:"x",color:us.x,direction:new A(1,0,0),label:g[0],line:a,position:new A,size:i},{axis:"y",color:us.y,direction:new A(0,1,0),label:g[1],line:a,position:new A,size:i},{axis:"z",color:us.z,direction:new A(0,0,1),label:g[2],line:a,position:new A,size:i},{axis:"-x",color:us.x,direction:new A(-1,0,0),position:new A,size:s},{axis:"-y",color:us.y,direction:new A(0,-1,0),position:new A,size:s},{axis:"-z",color:us.z,direction:new A(0,0,-1),position:new A,size:s}],m=p.getContext("2d"),f=(B,N=10,O="#FF0000")=>{m.beginPath(),m.arc(B.x,B.y,N,0,2*Math.PI,!1),m.fillStyle=O,m.fill(),m.closePath()},y=(B,N,O=1,F="#FF0000")=>{m.beginPath(),m.moveTo(B.x,B.y),m.lineTo(N.x,N.y),m.lineWidth=O,m.strokeStyle=F,m.stroke(),m.closePath()},x=B=>{B&&m.clearRect(0,0,p.width,p.height);for(let N=0,O=_.length;N<O;N+=1){const F=_[N],J=l===F,$=F.position.z>=-.01?F.color[0]:F.color[1];F.line&&y(c,F.position,F.line,$),f(F.position,F.size,J?"#FFFFFF":$),F.label&&(m.font=`bold ${12*window.devicePixelRatio}px monospace`,m.fillStyle="#222222",m.textBaseline="middle",m.textAlign="center",m.fillText(F.label,F.position.x,F.position.y))}},b=B=>{const N=B.direction.clone().applyMatrix4(_u);B.position.set(N.x*(c.x-B.size/2-o)+c.x,c.y-N.y*(c.y-B.size/2-o),N.z)},E=()=>{this.camera.updateMatrix(),_u.extractRotation(this.camera.matrix).invert();for(let B=0,N=_.length;B<N;B+=1)b(_[B]);_.sort((B,N)=>B.position.z>N.position.z?1:-1),x(!0)},R=B=>{u||p.classList.add("dragging"),u=!0,da.set(B.clientX,B.clientY),A0.subVectors(da,ha).multiplyScalar(.5),ha.copy(da)},P=B=>{Su.set(B.clientX,B.clientY),u=!1,vu.distanceToSquared(Su)<3&&Y(),p.classList.remove("dragging"),this.controls.enabled=d,window.removeEventListener("pointermove",R,!1),window.removeEventListener("pointerup",P,!1)},G=()=>{h=p.getBoundingClientRect()},v=B=>{if(u)return;const N=l;l=null,B!==void 0&&xu.set(B.clientX-h.left,B.clientY-h.top,0);for(let O=0,F=_.length;O<F;O+=1){const J=_[O];gu.copy(J.position).divideScalar(window.devicePixelRatio),xu.distanceTo(gu)<J.size&&(l=J)}N!==l&&x(!1)},w=B=>{ha.set(B.clientX,B.clientY),vu.set(B.clientX,B.clientY),d=this.controls.enabled,this.controls.enabled=!1,window.addEventListener("pointermove",R,!1),window.addEventListener("pointerup",P,!1)},Y=()=>{if(l===null)return;const B=l.direction.clone(),N=this.camera.position.distanceTo(this.controls.target);B.multiplyScalar(N);const O=400,F=performance.now(),J=1,$=()=>{const Q=performance.now()-F,ee=Math.min(Q/O,J);if(this.camera.position.lerp(B,ee),this.controls.update(),ee!==J){requestAnimationFrame($);return}v()};$(),l=null};this.controls.addEventListener("change",E),this.controls.addEventListener("start",()=>p.classList.add("inactive")),this.controls.addEventListener("end",()=>p.classList.remove("inactive")),p.addEventListener("pointerdown",w,!1),p.addEventListener("pointerenter",G,!1),p.addEventListener("pointermove",v,!1),requestAnimationFrame(E),this.dispose=()=>{this.controls.removeEventListener("change",E),this.controls.removeEventListener("start",()=>p.classList.add("inactive")),this.controls.removeEventListener("end",()=>p.classList.remove("inactive")),p.removeEventListener("pointerdown",w,!1),p.removeEventListener("pointerenter",G,!1),p.removeEventListener("pointermove",v,!1),window.removeEventListener("pointermove",R,!1),window.removeEventListener("pointerup",P,!1),p.remove()}}}const kr=new A;class ub{constructor({camera:e,canvas:t,el:n,object3D:i}){vn(this,"camera");vn(this,"canvas");vn(this,"el");vn(this,"object3D");vn(this,"update",()=>{if(this.el===void 0||this.camera===void 0||this.canvas===void 0||this.object3D===void 0)return;kr.setFromMatrixPosition(this.object3D.matrixWorld).project(this.camera);const e=(kr.x*.5+.5)*this.canvas.clientWidth,t=(kr.y*-.5+.5)*this.canvas.clientHeight;this.el.style.transform=`translate3d(-50%,-50%,0) translate3d(${e}px,${t}px,0)`,this.el.style.zIndex=String((-kr.z*.5+.5)*1e5|0)});this.el=n,this.camera=e,this.canvas=t,this.object3D=i}dispose(){this.el=void 0,this.camera=void 0,this.canvas=void 0,this.object3D=void 0}}navigator.xr===void 0||/WebXRViewer\//ui.test(navigator.userAgent)||navigator.xr.addEventListener("sessiongranted",()=>{});new A,new A,new A;const w0=(r,e=100)=>{let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(r,e,...n)}},Yh=(r,e,t,n,i,s)=>{var l;const o=r*t|0,a=e*t|0,c=o/a;if(n.isPerspectiveCamera){const u=n;u.aspect=c,u.updateProjectionMatrix()}else{const u=n;u.left=u.userData.size*c/-2,u.right=u.userData.size*c/2,u.top=u.userData.size/2,u.bottom=u.userData.size/-2,u.updateProjectionMatrix()}s!==void 0&&s.setSize(o,a,!1),(l=i.xr)!=null&&l.isPresenting||i.setSize(o,a,!1)},R0=(r,e,t,n=window.devicePixelRatio)=>{C0(r,e,t,n);const i=new ResizeObserver(w0(([s])=>{const{width:o,height:a}=s.contentRect;Yh(o,a,n,r,e,t)},30));return i.observe(e.domElement),()=>i.disconnect()},C0=(r,e,t,n=window.devicePixelRatio)=>{const i=e.domElement,s=i.clientWidth*n|0,o=i.clientHeight*n|0;Yh(s,o,n,r,e,t)};performance.now();performance.now();window.GPUShaderStage===void 0&&(window.GPUShaderStage={VERTEX:1,FRAGMENT:2,COMPUTE:4});class L0{static isAvailable(){return navigator.gpu!==void 0}static getErrorMessage(){const e='Your browser does not support <a href="https://gpuweb.github.io/gpuweb/" style="color:blue">WebGPU</a> yet',t=document.createElement("div");return t.id="webgpumessage",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.maxWidth="400px",t.style.margin="5em auto 0",t.innerHTML=e,t}}const N0=L0,qs={PointList:"point-list",LineList:"line-list",LineStrip:"line-strip",TriangleList:"triangle-list",TriangleStrip:"triangle-strip"},Pt={Never:"never",Less:"less",Equal:"equal",LessEqual:"less-equal",Greater:"greater",NotEqual:"not-equal",GreaterEqual:"greater-equal",Always:"always"},Pn={Store:"store",Discard:"discard"},nn={Load:"load",Clear:"clear"},fa={CCW:"ccw",CW:"cw"},pa={None:"none",Front:"front",Back:"back"},ir={Uint16:"uint16",Uint32:"uint32"},W={R8Unorm:"r8unorm",R8Snorm:"r8snorm",R8Uint:"r8uint",R8Sint:"r8sint",R16Uint:"r16uint",R16Sint:"r16sint",R16Float:"r16float",RG8Unorm:"rg8unorm",RG8Snorm:"rg8snorm",RG8Uint:"rg8uint",RG8Sint:"rg8sint",R32Uint:"r32uint",R32Sint:"r32sint",R32Float:"r32float",RG16Uint:"rg16uint",RG16Sint:"rg16sint",RG16Float:"rg16float",RGBA8Unorm:"rgba8unorm",RGBA8UnormSRGB:"rgba8unorm-srgb",RGBA8Snorm:"rgba8snorm",RGBA8Uint:"rgba8uint",RGBA8Sint:"rgba8sint",BGRA8Unorm:"bgra8unorm",BGRA8UnormSRGB:"bgra8unorm-srgb",RGB9E5UFloat:"rgb9e5ufloat",RGB10A2Unorm:"rgb10a2unorm",RG11B10uFloat:"rgb10a2unorm",RG32Uint:"rg32uint",RG32Sint:"rg32sint",RG32Float:"rg32float",RGBA16Uint:"rgba16uint",RGBA16Sint:"rgba16sint",RGBA16Float:"rgba16float",RGBA32Uint:"rgba32uint",RGBA32Sint:"rgba32sint",RGBA32Float:"rgba32float",Stencil8:"stencil8",Depth16Unorm:"depth16unorm",Depth24Plus:"depth24plus",Depth24PlusStencil8:"depth24plus-stencil8",Depth32Float:"depth32float",Depth32FloatStencil8:"depth32float-stencil8",BC1RGBAUnorm:"bc1-rgba-unorm",BC1RGBAUnormSRGB:"bc1-rgba-unorm-srgb",BC2RGBAUnorm:"bc2-rgba-unorm",BC2RGBAUnormSRGB:"bc2-rgba-unorm-srgb",BC3RGBAUnorm:"bc3-rgba-unorm",BC3RGBAUnormSRGB:"bc3-rgba-unorm-srgb",BC4RUnorm:"bc4-r-unorm",BC4RSnorm:"bc4-r-snorm",BC5RGUnorm:"bc5-rg-unorm",BC5RGSnorm:"bc5-rg-snorm",BC6HRGBUFloat:"bc6h-rgb-ufloat",BC6HRGBFloat:"bc6h-rgb-float",BC7RGBAUnorm:"bc7-rgba-unorm",BC7RGBAUnormSRGB:"bc7-rgba-srgb",ETC2RGB8Unorm:"etc2-rgb8unorm",ETC2RGB8UnormSRGB:"etc2-rgb8unorm-srgb",ETC2RGB8A1Unorm:"etc2-rgb8a1unorm",ETC2RGB8A1UnormSRGB:"etc2-rgb8a1unorm-srgb",ETC2RGBA8Unorm:"etc2-rgba8unorm",ETC2RGBA8UnormSRGB:"etc2-rgba8unorm-srgb",EACR11Unorm:"eac-r11unorm",EACR11Snorm:"eac-r11snorm",EACRG11Unorm:"eac-rg11unorm",EACRG11Snorm:"eac-rg11snorm",ASTC4x4Unorm:"astc-4x4-unorm",ASTC4x4UnormSRGB:"astc-4x4-unorm-srgb",ASTC5x4Unorm:"astc-5x4-unorm",ASTC5x4UnormSRGB:"astc-5x4-unorm-srgb",ASTC5x5Unorm:"astc-5x5-unorm",ASTC5x5UnormSRGB:"astc-5x5-unorm-srgb",ASTC6x5Unorm:"astc-6x5-unorm",ASTC6x5UnormSRGB:"astc-6x5-unorm-srgb",ASTC6x6Unorm:"astc-6x6-unorm",ASTC6x6UnormSRGB:"astc-6x6-unorm-srgb",ASTC8x5Unorm:"astc-8x5-unorm",ASTC8x5UnormSRGB:"astc-8x5-unorm-srgb",ASTC8x6Unorm:"astc-8x6-unorm",ASTC8x6UnormSRGB:"astc-8x6-unorm-srgb",ASTC8x8Unorm:"astc-8x8-unorm",ASTC8x8UnormSRGB:"astc-8x8-unorm-srgb",ASTC10x5Unorm:"astc-10x5-unorm",ASTC10x5UnormSRGB:"astc-10x5-unorm-srgb",ASTC10x6Unorm:"astc-10x6-unorm",ASTC10x6UnormSRGB:"astc-10x6-unorm-srgb",ASTC10x8Unorm:"astc-10x8-unorm",ASTC10x8UnormSRGB:"astc-10x8-unorm-srgb",ASTC10x10Unorm:"astc-10x10-unorm",ASTC10x10UnormSRGB:"astc-10x10-unorm-srgb",ASTC12x10Unorm:"astc-12x10-unorm",ASTC12x10UnormSRGB:"astc-12x10-unorm-srgb",ASTC12x12Unorm:"astc-12x12-unorm",ASTC12x12UnormSRGB:"astc-12x12-unorm-srgb"},ma={ClampToEdge:"clamp-to-edge",Repeat:"repeat",MirrorRepeat:"mirror-repeat"},Qa={Linear:"linear",Nearest:"nearest"},Ke={Zero:"zero",One:"one",SrcColor:"src-color",OneMinusSrcColor:"one-minus-src-color",SrcAlpha:"src-alpha",OneMinusSrcAlpha:"one-minus-src-alpha",DstColor:"dst-color",OneMinusDstColor:"one-minus-dst-color",DstAlpha:"dst-alpha",OneMinusDstAlpha:"one-minus-dst-alpha",SrcAlphaSaturated:"src-alpha-saturated",BlendColor:"blend-color",OneMinusBlendColor:"one-minus-blend-color"},tn={Add:"add",Subtract:"subtract",ReverseSubtract:"reverse-subtract",Min:"min",Max:"max"},yu={None:0,Red:1,Green:2,Blue:4,Alpha:8,All:15},oi={Keep:"keep",Zero:"zero",Replace:"replace",Invert:"invert",IncrementClamp:"increment-clamp",DecrementClamp:"decrement-clamp",IncrementWrap:"increment-wrap",DecrementWrap:"decrement-wrap"},Eo={UniformBuffer:"uniform-buffer",StorageBuffer:"storage-buffer",ReadonlyStorageBuffer:"readonly-storage-buffer",Sampler:"sampler",ComparisonSampler:"comparison-sampler",SampledTexture:"sampled-texture",MultisampledTexture:"multisampled-texture",ReadonlyStorageTexture:"readonly-storage-texture",WriteonlyStorageTexture:"writeonly-storage-texture"},Mu={OneD:"1d",TwoD:"2d",ThreeD:"3d"},oo={OneD:"1d",TwoD:"2d",TwoDArray:"2d-array",Cube:"cube",CubeArray:"cube-array",ThreeD:"3d"},Tu={All:"all",StencilOnly:"stencil-only",DepthOnly:"depth-only"},Eu={Vertex:"vertex",Instance:"instance"},ec={DepthClipControl:"depth-clip-control",Depth32FloatStencil8:"depth32float-stencil8",TextureCompressionBC:"texture-compression-bc",TextureCompressionETC2:"texture-compression-etc2",TextureCompressionASTC:"texture-compression-astc",TimestampQuery:"timestamp-query",IndirectFirstInstance:"indirect-first-instance",ShaderF16:"shader-f16",RG11B10UFloat:"rg11b10ufloat-renderable",BGRA8UNormStorage:"bgra8unorm-storage",Float32Filterable:"float32-filterable"},li=16,P0=211,U0=212;class I0{constructor(){this.nodes=null,this.animationLoop=null,this.requestId=null,this.isAnimating=!1,this.context=self}start(){if(this.isAnimating===!0||this.animationLoop===null||this.nodes===null)return;this.isAnimating=!0;const e=(t,n)=>{this.requestId=self.requestAnimationFrame(e),this.nodes.nodeFrame.update(),this.animationLoop(t,n)};this.requestId=self.requestAnimationFrame(e)}stop(){self.cancelAnimationFrame(this.requestId),this.isAnimating=!1}setAnimationLoop(e){this.animationLoop=e}setNodes(e){this.nodes=e}}const D0=I0;class sr extends WeakMap{constructor(){super()}get(e){if(Array.isArray(e)){let t=this;for(let n=0;n<e.length-1;n++)if(t=t.get(e[n]),t===void 0)return;return t.get(e[e.length-1])}else return super.get(e)}set(e,t){if(Array.isArray(e)){let n=this;for(let i=0;i<e.length-1;i++){const s=e[i];n.has(s)===!1&&n.set(s,new WeakMap),n=n.get(s)}return n.set(e[e.length-1],t)}else return super.set(e,t)}delete(e){if(Array.isArray(e)){let t=this;for(let n=0;n<e.length-1;n++)if(t=t.get(e[n]),t===void 0)return!1;return t.delete(e[e.length-1])}else return super.delete(e)}}class F0{constructor(e,t,n,i,s,o,a){this.renderer=e,this.nodes=t,this.object=n,this.material=i,this.scene=s,this.camera=o,this.lightsNode=a,this.geometry=n.geometry,this._materialVersion=-1,this._materialCacheKey=""}getCacheKey(){const{material:e,scene:t,lightsNode:n}=this;e.version!==this._materialVersion&&(this._materialVersion=e.version,this._materialCacheKey=e.customProgramCacheKey());const i=[];return i.push("material:"+this._materialCacheKey),i.push("nodes:"+this.nodes.getCacheKey(t,n)),"{"+i.join(",")+"}"}}class O0{constructor(e,t,n,i){this.renderer=e,this.nodes=t,this.geometries=n,this.info=i,this.cache=new sr}get(e,t,n,i,s){const o=[e,t,n,i,s];let a=this.cache.get(o);return a===void 0&&(a=new F0(this.renderer,this.nodes,e,t,n,i,s),this.cache.set(o,a)),a}remove(e,t,n,i,s){this.cache.delete([e,t,n,i,s])}dispose(){this.cache=new sr,this.updateMap=new WeakMap}}const B0=O0;class G0{constructor(e){this.buffers=new WeakMap,this.device=e}get(e){return e=this._getAttribute(e),this.buffers.get(e)}remove(e){e=this._getAttribute(e);const t=this.buffers.get(e);t&&(this._destroyBuffers(t),this.buffers.delete(e))}update(e,t=!1,n=null){e=this._getAttribute(e);let i=this.buffers.get(e);i===void 0?(n===null&&(n=t===!0?GPUBufferUsage.INDEX:GPUBufferUsage.VERTEX),i=this._createBuffer(e,n),this.buffers.set(e,i)):n&&n!==i.usage?(this._destroyBuffers(i),i=this._createBuffer(e,n),this.buffers.set(e,i)):i.version<e.version&&(this._writeBuffer(i.buffer,e),i.version=e.version)}async getArrayBuffer(e){const t=this.get(e),n=this.device,i=t.buffer,s=i.size;let o=t.readBuffer,a=!0;o===null&&(o=n.createBuffer({label:e.name,size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=!1,t.readBuffer=o);const c=n.createCommandEncoder({});c.copyBufferToBuffer(i,0,o,0,s),a&&o.unmap();const l=c.finish();return n.queue.submit([l]),await o.mapAsync(GPUMapMode.READ),o.getMappedRange()}_getAttribute(e){return e.isInterleavedBufferAttribute&&(e=e.data),e}_createBuffer(e,t){const n=e.array,i=n.byteLength+(4-n.byteLength%4)%4,s=this.device.createBuffer({label:e.name,size:i,usage:t|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new n.constructor(s.getMappedRange()).set(n),s.unmap(),e.onUploadCallback(),{version:e.version,buffer:s,readBuffer:null,usage:t}}_writeBuffer(e,t){const n=this.device,i=t.array,s=t.updateRange;s.count===-1?n.queue.writeBuffer(e,0,i,0):(n.queue.writeBuffer(e,0,i,s.offset*i.BYTES_PER_ELEMENT,s.count*i.BYTES_PER_ELEMENT),s.count=-1)}_destroyBuffers({buffer:e,readBuffer:t}){e.destroy(),t!==null&&t.destroy()}}const z0=G0;function V0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kh(r){return r.index!==null?r.index.version:r.attributes.position.version}function bu(r){const e=[],t=r.index,n=r.attributes.position;if(t!==null){const s=t.array;for(let o=0,a=s.length;o<a;o+=3){const c=s[o+0],l=s[o+1],u=s[o+2];e.push(c,l,l,u,u,c)}}else{const s=n.array;for(let o=0,a=s.length/3-1;o<a;o+=3){const c=o+0,l=o+1,u=o+2;e.push(c,l,l,u,u,c)}}const i=new(V0(e)?xc:_c)(e,1);return i.version=Kh(r),i}class k0{constructor(e,t,n){this.attributes=e,this.properties=t,this.info=n,this.wireframes=new WeakMap,this.geometryFrame=new WeakMap}has(e){const t=e.geometry;return this.properties.has(t)&&this.properties.get(t).initialized===!0}update(e){this.has(e)===!1&&this.initGeometry(e),this.updateFrameAttributes(e)}initGeometry(e){const t=e.geometry,n=this.properties.get(t);n.initialized=!0;const i=()=>{this.info.memory.geometries--;const s=t.index,o=t.attributes;s!==null&&this.attributes.remove(s);for(const c in o)this.attributes.remove(o[c]);const a=this.wireframes.get(t);a!==void 0&&this.attributes.remove(a),t.removeEventListener("dispose",i)};this.info.memory.geometries++,t.addEventListener("dispose",i)}updateFrameAttributes(e){const t=this.info.render.frame,n=e.geometry;this.geometryFrame.get(n)!==t&&(this.updateAttributes(e),this.geometryFrame.set(n,t))}updateAttributes(e){const n=e.geometry.attributes;for(const s in n)this.attributes.update(n[s]);const i=this.getIndex(e);i!==null&&this.attributes.update(i,!0)}getIndex(e){const{geometry:t,material:n}=e;let i=t.index;if(n.wireframe===!0){const s=this.wireframes;let o=s.get(t);o===void 0?(o=bu(t),s.set(t,o)):o.version!==Kh(t)&&(this.attributes.remove(o),o=bu(t),s.set(t,o)),i=o}return i}}const H0=k0;class W0{constructor(){this.autoReset=!0,this.render={frame:0,drawCalls:0,triangles:0,points:0,lines:0},this.memory={geometries:0,textures:0}}update(e,t,n){this.render.drawCalls++,e.isMesh||e.isSprite?this.render.triangles+=n*(t/3):e.isPoints?this.render.points+=n*t:e.isLineSegments?this.render.lines+=n*(t/2):e.isLine?this.render.lines+=n*(t-1):console.error("THREE.WebGPUInfo: Unknown object type.")}reset(){this.render.frame++,this.render.drawCalls=0,this.render.triangles=0,this.render.points=0,this.render.lines=0}dispose(){this.reset(),this.render.frame=0,this.memory.geometries=0,this.memory.textures=0}}const X0=W0;class q0{constructor(){this.properties=new WeakMap}get(e){let t=this.properties.get(e);return t===void 0&&(t={},this.properties.set(e,t)),t}remove(e){this.properties.delete(e)}has(e){return this.properties.has(e)}dispose(){this.properties=new WeakMap}}const $0=q0,j0=new Map([[Int8Array,["sint8","snorm8"]],[Uint8Array,["uint8","unorm8"]],[Int16Array,["sint16","snorm16"]],[Uint16Array,["uint16","unorm16"]],[Int32Array,["sint32","snorm32"]],[Uint32Array,["uint32","unorm32"]],[Float32Array,["float32"]]]),Y0=new Map([[Lh,["float16"]]]),K0=new Map([[Int32Array,"sint32"],[Uint32Array,"uint32"],[Float32Array,"float32"]]);class Z0{constructor(e,t){this.cacheKey=null,this.shaderAttributes=null,this.stageVertex=null,this.stageFragment=null,this.usedTimes=0,this._device=e,this._utils=t}init(e,t,n,i,s){const{object:o,material:a,geometry:c}=i,l=this._getShaderAttributes(s,c),u=[];for(const b of l){const E=b.name,R=c.getAttribute(E),P=R!==void 0&&R.isInstancedBufferAttribute?Eu.Instance:Eu.Vertex;u.push({arrayStride:b.arrayStride,attributes:[{shaderLocation:b.slot,offset:b.offset,format:b.format}],stepMode:P})}this.cacheKey=e,this.shaderAttributes=l,this.stageVertex=t,this.stageFragment=n;let h={},d={};a.transparent===!0&&a.blending!==Kn&&(h=this._getAlphaBlend(a),d=this._getColorBlend(a));let p={};a.stencilWrite===!0&&(p={compare:this._getStencilCompare(a),failOp:this._getStencilOperation(a.stencilFail),depthFailOp:this._getStencilOperation(a.stencilZFail),passOp:this._getStencilOperation(a.stencilZPass)});const g=this._getPrimitiveState(o,c,a),_=this._getColorWriteMask(a),m=this._getDepthCompare(a),f=this._utils.getCurrentColorFormat(),y=this._utils.getCurrentDepthStencilFormat(),x=this._utils.getSampleCount();this.pipeline=this._device.createRenderPipeline({vertex:Object.assign({},t.stage,{buffers:u}),fragment:Object.assign({},n.stage,{targets:[{format:f,blend:{alpha:h,color:d},writeMask:_}]}),primitive:g,depthStencil:{format:y,depthWriteEnabled:a.depthWrite,depthCompare:m,stencilFront:p,stencilBack:{},stencilReadMask:a.stencilFuncMask,stencilWriteMask:a.stencilWriteMask},multisample:{count:x},layout:"auto"})}_getAlphaBlend(e){const t=e.blending,n=e.premultipliedAlpha;let i;switch(t){case di:n===!1&&(i={srcFactor:Ke.One,dstFactor:Ke.OneMinusSrcAlpha,operation:tn.Add});break;case Jr:i={srcFactor:Ke.Zero,dstFactor:Ke.One,operation:tn.Add};break;case Qr:n===!0&&(i={srcFactor:Ke.OneMinusSrcColor,dstFactor:Ke.OneMinusSrcAlpha,operation:tn.Add});break;case eo:n===!0&&(i={srcFactor:Ke.Zero,dstFactor:Ke.SrcAlpha,operation:tn.Add});break;case ba:const s=e.blendSrcAlpha,o=e.blendDstAlpha,a=e.blendEquationAlpha;s!==null&&o!==null&&a!==null&&(i={srcFactor:this._getBlendFactor(s),dstFactor:this._getBlendFactor(o),operation:this._getBlendOperation(a)});break;default:console.error("THREE.WebGPURenderer: Blending not supported.",t)}return i}_getBlendFactor(e){let t;switch(e){case Yu:t=Ke.Zero;break;case Ku:t=Ke.One;break;case Zu:t=Ke.SrcColor;break;case Ju:t=Ke.OneMinusSrcColor;break;case uc:t=Ke.SrcAlpha;break;case hc:t=Ke.OneMinusSrcAlpha;break;case th:t=Ke.DstColor;break;case nh:t=Ke.OneMinusDstColor;break;case Qu:t=Ke.DstAlpha;break;case eh:t=Ke.OneMinusDstAlpha;break;case ih:t=Ke.SrcAlphaSaturated;break;case P0:t=Ke.BlendColor;break;case U0:t=Ke.OneMinusBlendColor;break;default:console.error("THREE.WebGPURenderer: Blend factor not supported.",e)}return t}_getBlendOperation(e){let t;switch(e){case Ci:t=tn.Add;break;case $u:t=tn.Subtract;break;case ju:t=tn.ReverseSubtract;break;case Aa:t=tn.Min;break;case wa:t=tn.Max;break;default:console.error("THREE.WebGPURenderer: Blend equation not supported.",e)}return t}_getColorBlend(e){const t=e.blending,n=e.premultipliedAlpha,i={srcFactor:null,dstFactor:null,operation:null};switch(t){case di:i.srcFactor=n===!0?Ke.One:Ke.SrcAlpha,i.dstFactor=Ke.OneMinusSrcAlpha,i.operation=tn.Add;break;case Jr:i.srcFactor=n===!0?Ke.One:Ke.SrcAlpha,i.dstFactor=Ke.One,i.operation=tn.Add;break;case Qr:i.srcFactor=Ke.Zero,i.dstFactor=n===!0?Ke.Zero:Ke.OneMinusSrcColor,i.operation=tn.Add;break;case eo:i.srcFactor=Ke.Zero,i.dstFactor=Ke.SrcColor,i.operation=tn.Add;break;case ba:i.srcFactor=this._getBlendFactor(e.blendSrc),i.dstFactor=this._getBlendFactor(e.blendDst),i.operation=this._getBlendOperation(e.blendEquation);break;default:console.error("THREE.WebGPURenderer: Blending not supported.",t)}return i}_getColorWriteMask(e){return e.colorWrite===!0?yu.All:yu.None}_getDepthCompare(e){let t;if(e.depthTest===!1)t=Pt.Always;else{const n=e.depthFunc;switch(n){case sh:t=Pt.Never;break;case rh:t=Pt.Always;break;case oh:t=Pt.Less;break;case to:t=Pt.LessEqual;break;case ah:t=Pt.Equal;break;case ch:t=Pt.GreaterEqual;break;case lh:t=Pt.Greater;break;case uh:t=Pt.NotEqual;break;default:console.error("THREE.WebGPURenderer: Invalid depth function.",n)}}return t}_getPrimitiveState(e,t,n){const i={};if(i.topology=this._utils.getPrimitiveTopology(e,n),e.isLine===!0&&e.isLineSegments!==!0){const s=t.index?t.index.count:t.attributes.position.count;i.stripIndexFormat=s>65535?ir.Uint32:ir.Uint16}switch(n.side){case Fn:i.frontFace=fa.CW,i.cullMode=pa.Front;break;case Gt:i.frontFace=fa.CW,i.cullMode=pa.Back;break;case En:i.frontFace=fa.CW,i.cullMode=pa.None;break;default:console.error("THREE.WebGPURenderer: Unknown Material.side value.",n.side);break}return i}_getStencilCompare(e){let t;const n=e.stencilFunc;switch(n){case up:t=Pt.Never;break;case Mh:t=Pt.Always;break;case hp:t=Pt.Less;break;case fp:t=Pt.LessEqual;break;case dp:t=Pt.Equal;break;case gp:t=Pt.GreaterEqual;break;case pp:t=Pt.Greater;break;case mp:t=Pt.NotEqual;break;default:console.error("THREE.WebGPURenderer: Invalid stencil function.",n)}return t}_getStencilOperation(e){let t;switch(e){case Yr:t=oi.Keep;break;case ip:t=oi.Zero;break;case sp:t=oi.Replace;break;case lp:t=oi.Invert;break;case rp:t=oi.IncrementClamp;break;case op:t=oi.DecrementClamp;break;case ap:t=oi.IncrementWrap;break;case cp:t=oi.DecrementWrap;break;default:console.error("THREE.WebGPURenderer: Invalid stencil operation.",t)}return t}_getVertexFormat(e){const{itemSize:t,normalized:n}=e,i=e.array.constructor,s=e.constructor;let o;if(t==1)o=K0.get(i);else{const c=(Y0.get(s)||j0.get(i))[n?1:0];if(c){const l=i.BYTES_PER_ELEMENT*t,h=Math.floor((l+3)/4)*4/i.BYTES_PER_ELEMENT;if(h%1)throw new Error("THREE.WebGPURenderer: Bad vertex format item size.");o=`${c}x${h}`}}return o||console.error("THREE.WebGPURenderer: Vertex format not supported yet."),o}_getShaderAttributes(e,t){const n=e.attributes,i=[];for(let s=0;s<n.length;s++){const a=n[s].name,c=t.getAttribute(a),l=c.array.BYTES_PER_ELEMENT,u=this._getVertexFormat(c);let h=c.itemSize*l,d=0;c.isInterleavedBufferAttribute===!0&&(h=c.data.stride*l,d=c.offset*l),i.push({name:a,arrayStride:h,offset:d,format:u,slot:s})}return i}}const J0=Z0;let Q0=0;class eS{constructor(e,t,n){this.id=Q0++,this.code=t,this.type=n,this.usedTimes=0,this.stage={module:e.createShaderModule({code:t,label:n}),entryPoint:"main"}}}const tc=eS;class tS{constructor(e,t,n){this.device=e,this.nodes=t,this.utils=n,this.bindings=null,this.pipelines=[],this.cache=new WeakMap,this.stages={vertex:new Map,fragment:new Map}}get(e){const t=this.device,n=this._getCache(e);let i=n.currentPipeline;if(this._needsUpdate(e)){this._releasePipeline(e);const s=this.nodes.get(e);let o=this.stages.vertex.get(s.vertexShader);o===void 0&&(o=new tc(t,s.vertexShader,"vertex"),this.stages.vertex.set(s.vertexShader,o));let a=this.stages.fragment.get(s.fragmentShader);a===void 0&&(a=new tc(t,s.fragmentShader,"fragment"),this.stages.fragment.set(s.fragmentShader,a)),i=this._acquirePipeline(o,a,e),n.currentPipeline=i,i.usedTimes++,o.usedTimes++,a.usedTimes++}return i}remove(e){this._releasePipeline(e)}dispose(){this.pipelines=[],this.cache=new WeakMap,this.shaderModules={vertex:new Map,fragment:new Map}}_acquirePipeline(e,t,n){let i;const s=this.pipelines,o=this._computeCacheKey(e,t,n);for(let a=0,c=s.length;a<c;a++){const l=s[a];if(l.cacheKey===o){i=l;break}}return i===void 0&&(i=new J0(this.device,this.utils),i.init(o,e,t,n,this.nodes.get(n)),s.push(i)),i}_computeCacheKey(e,t,n){const{object:i,material:s}=n,o=this.utils;return[e.id,t.id,s.transparent,s.blending,s.premultipliedAlpha,s.blendSrc,s.blendDst,s.blendEquation,s.blendSrcAlpha,s.blendDstAlpha,s.blendEquationAlpha,s.colorWrite,s.depthWrite,s.depthTest,s.depthFunc,s.stencilWrite,s.stencilFunc,s.stencilFail,s.stencilZFail,s.stencilZPass,s.stencilFuncMask,s.stencilWriteMask,s.side,o.getSampleCount(),o.getCurrentColorSpace(),o.getCurrentColorFormat(),o.getCurrentDepthStencilFormat(),o.getPrimitiveTopology(i,s)].join()}_getCache(e){let t=this.cache.get(e);return t===void 0&&(t={},this.cache.set(e,t)),t}_releasePipeline(e){const t=this._getCache(e),n=t.currentPipeline;if(delete t.currentPipeline,this.bindings.remove(e),n&&--n.usedTimes===0){const i=this.pipelines,s=i.indexOf(n);i[s]=i[i.length-1],i.pop(),this._releaseStage(n.stageVertex),this._releaseStage(n.stageFragment)}}_releaseStage(e){if(--e.usedTimes===0){const t=e.code,n=e.type;this.stages[n].delete(t)}}_needsUpdate(e){const t=this._getCache(e),n=e.material;let i=!1;t.currentPipeline===void 0&&(i=!0),(t.material!==n||t.materialVersion!==n.version||t.transparent!==n.transparent||t.blending!==n.blending||t.premultipliedAlpha!==n.premultipliedAlpha||t.blendSrc!==n.blendSrc||t.blendDst!==n.blendDst||t.blendEquation!==n.blendEquation||t.blendSrcAlpha!==n.blendSrcAlpha||t.blendDstAlpha!==n.blendDstAlpha||t.blendEquationAlpha!==n.blendEquationAlpha||t.colorWrite!==n.colorWrite||t.depthWrite!==n.depthWrite||t.depthTest!==n.depthTest||t.depthFunc!==n.depthFunc||t.stencilWrite!==n.stencilWrite||t.stencilFunc!==n.stencilFunc||t.stencilFail!==n.stencilFail||t.stencilZFail!==n.stencilZFail||t.stencilZPass!==n.stencilZPass||t.stencilFuncMask!==n.stencilFuncMask||t.stencilWriteMask!==n.stencilWriteMask||t.side!==n.side)&&(t.material=n,t.materialVersion=n.version,t.transparent=n.transparent,t.blending=n.blending,t.premultipliedAlpha=n.premultipliedAlpha,t.blendSrc=n.blendSrc,t.blendDst=n.blendDst,t.blendEquation=n.blendEquation,t.blendSrcAlpha=n.blendSrcAlpha,t.blendDstAlpha=n.blendDstAlpha,t.blendEquationAlpha=n.blendEquationAlpha,t.colorWrite=n.colorWrite,t.depthWrite=n.depthWrite,t.depthTest=n.depthTest,t.depthFunc=n.depthFunc,t.stencilWrite=n.stencilWrite,t.stencilFunc=n.stencilFunc,t.stencilFail=n.stencilFail,t.stencilZFail=n.stencilZFail,t.stencilZPass=n.stencilZPass,t.stencilFuncMask=n.stencilFuncMask,t.stencilWriteMask=n.stencilWriteMask,t.side=n.side,i=!0);const s=this.utils,o=s.getSampleCount(),a=s.getCurrentColorSpace(),c=s.getCurrentColorFormat(),l=s.getCurrentDepthStencilFormat();return(t.sampleCount!==o||t.colorSpace!==a||t.colorFormat!==c||t.depthStencilFormat!==l)&&(t.sampleCount=o,t.colorSpace=a,t.colorFormat=c,t.depthStencilFormat=l,i=!0),i}}const nS=tS;class iS{constructor(e,t){this.device=e,this.nodes=t,this.pipelines=new WeakMap,this.stages={compute:new WeakMap}}has(e){return this.pipelines.get(e)!==void 0}get(e){let t=this.pipelines.get(e);if(t===void 0){const n=this.device,s=this.nodes.getForCompute(e).computeShader,o={computeShader:s};let a=this.stages.compute.get(o);a===void 0&&(a=new tc(n,s,"compute"),this.stages.compute.set(o,a)),t=n.createComputePipeline({compute:a.stage,layout:"auto"}),this.pipelines.set(e,t)}return t}dispose(){this.pipelines=new WeakMap,this.stages={compute:new WeakMap}}}const sS=iS;class rS{constructor(e,t,n,i,s,o,a,c){this.device=e,this.info=t,this.properties=n,this.textures=i,this.renderPipelines=s,this.computePipelines=o,this.attributes=a,this.nodes=c,this.uniformsData=new WeakMap,this.updateMap=new WeakMap}get(e){let t=this.uniformsData.get(e);if(t===void 0){const i=this.nodes.get(e).getBindings(),o=this.renderPipelines.get(e).pipeline.getBindGroupLayout(0),a=this._createBindGroup(i,o);t={layout:o,group:a,bindings:i},this.uniformsData.set(e,t)}return t}getForCompute(e){let t=this.uniformsData.get(e);if(t===void 0){const i=this.nodes.getForCompute(e).getBindings(),o=this.computePipelines.get(e).getBindGroupLayout(0),a=this._createBindGroup(i,o);t={layout:o,group:a,bindings:i},this.uniformsData.set(e,t)}return t}remove(e){this.uniformsData.delete(e)}update(e){const t=this.textures,n=this.get(e),i=n.bindings,s=this.updateMap,o=this.info.render.frame;let a=!1;for(const c of i){const l=c.isShared,u=s.get(c)===o;if(!(l&&u)){if(c.isUniformBuffer){const h=c.getBuffer();if(c.update()===!0){const p=c.bufferGPU;this.device.queue.writeBuffer(p,0,h,0)}}else if(c.isStorageBuffer){const h=c.attribute;this.attributes.update(h,!1,c.usage)}else if(c.isSampler){const h=c.getTexture();t.updateSampler(h);const d=t.getSampler(h);c.samplerGPU!==d&&(c.samplerGPU=d,a=!0)}else if(c.isSampledTexture){const h=c.getTexture(),d=t.updateTexture(h),p=t.getTextureGPU(h);(p!==void 0&&c.textureGPU!==p||d===!0)&&(c.textureGPU=p,a=!0)}s.set(c,o)}}a===!0&&(n.group=this._createBindGroup(i,n.layout))}dispose(){this.uniformsData=new WeakMap,this.updateMap=new WeakMap}_createBindGroup(e,t){let n=0;const i=[];for(const s of e){if(s.isUniformBuffer){if(s.bufferGPU===null){const o=s.getByteLength();s.bufferGPU=this.device.createBuffer({label:"bindingBuffer",size:o,usage:s.usage})}i.push({binding:n,resource:{buffer:s.bufferGPU}})}else if(s.isStorageBuffer){if(s.bufferGPU===null){const o=s.attribute;this.attributes.update(o,!1,s.usage),s.bufferGPU=this.attributes.get(o).buffer}i.push({binding:n,resource:{buffer:s.bufferGPU}})}else if(s.isSampler)s.samplerGPU===null&&(s.samplerGPU=this.textures.getDefaultSampler()),i.push({binding:n,resource:s.samplerGPU});else if(s.isSampledTexture){s.textureGPU===null&&(s.isSampledCubeTexture?s.textureGPU=this.textures.getDefaultCubeTexture():s.texture.isVideoTexture?s.textureGPU=this.textures.getDefaultVideoTexture():s.texture.isDepthTexture?s.textureGPU=this.textures.getDefaultDepthTexture():s.textureGPU=this.textures.getDefaultTexture());const o=s.textureGPU instanceof GPUTexture?s.textureGPU.createView({aspect:s.aspect,dimension:s.dimension}):s.textureGPU;i.push({binding:n,resource:o})}n++}return this.device.createBindGroup({layout:t,entries:i})}}const oS=rS,Au={VERTEX:"vertex",FRAGMENT:"fragment"},wt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},aS=["fragment","vertex"],cS=["construct","analyze","generate"],lS=[...aS,"compute"],Zh=["x","y","z","w"];function Lc(r){let e="{";r.isNode===!0&&(e+=`uuid:"${r.uuid}"`);for(const{property:t,index:n,childNode:i}of ao(r)){let s=Lc(i);s.includes(",")||(s=s.slice(s.indexOf('"'),s.indexOf("}"))),e+=`,${t}${n!==void 0?"/"+n:""}:${s}`}return e+="}",e}function*ao(r,e=!1){for(const t in r){if(t.startsWith("_")===!0)continue;const n=r[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const s=n[i];s&&(s.isNode===!0||e&&typeof s.toJSON=="function")&&(yield{property:t,index:i,childNode:s})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const s=n[i];s&&(s.isNode===!0||e&&typeof s.toJSON=="function")&&(yield{property:t,index:i,childNode:s})}}}function co(r){if(r==null)return null;const e=typeof r;return r.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":r.isVector2===!0?"vec2":r.isVector3===!0?"vec3":r.isVector4===!0?"vec4":r.isMatrix3===!0?"mat3":r.isMatrix4===!0?"mat4":r.isColor===!0?"color":r instanceof ArrayBuffer?"ArrayBuffer":null}function nc(r,...e){const t=r?r.slice(-4):void 0;return r==="color"?new Ce(...e):t==="vec2"?new Ie(...e):t==="vec3"?new A(...e):t==="vec4"?new Ye(...e):t==="mat3"?new Ve(...e):t==="mat4"?new Pe(...e):r==="bool"?e[0]||!1:r==="float"||r==="int"||r==="uint"?e[0]||0:r==="string"?e[0]||"":r==="ArrayBuffer"?hS(e[0]):null}function uS(r){let e="";const t=new Uint8Array(r);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function hS(r){return Uint8Array.from(atob(r),e=>e.charCodeAt(0)).buffer}const wu=new Map;let dS=0;class fS{constructor(e=null){this.isNode=!0,this.nodeType=e,this.updateType=wt.NONE,this.updateBeforeType=wt.NONE,this.uuid=go.generateUUID(),Object.defineProperty(this,"id",{value:dS++})}get type(){return this.constructor.name}isGlobal(){return!1}*getChildren(){const e=this;for(const{property:t,index:n,childNode:i}of ao(this))n!==void 0?yield{childNode:i,replaceNode(s){e[t][n]=s}}:yield{childNode:i,replaceNode(s){e[t]=s}}}traverse(e,t=null){e(this,t);for(const{childNode:n,replaceNode:i}of this.getChildren())n.traverse(e,i)}getCacheKey(){return Lc(this)}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(){return this.nodeType}getReference(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}construct(e){const t=e.getNodeProperties(this);for(const{childNode:n}of this.getChildren())t["_node"+n.id]=n;return null}analyze(e){const t=e.getDataFromNode(this);if(t.dependenciesCount=t.dependenciesCount===void 0?1:t.dependenciesCount+1,t.dependenciesCount===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getReference(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const s=e.getBuildStage();if(s==="construct"){const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){o.initialized=!0,o.outputNode=this.construct(e);for(const a of Object.values(o))a&&a.isNode===!0&&a.build(e)}}else if(s==="analyze")this.analyze(e);else if(s==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return ao(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:s,childNode:o}of t)s!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(s)?[]:{}),n[i][s]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const s of e.inputNodes[n])i.push(t[s]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const s in e.inputNodes[n]){const o=e.inputNodes[n][s];i[s]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let s=e.nodes[t];s===void 0&&(s={uuid:t,type:n,meta:e,metadata:{version:4.5,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[s.uuid]=s),this.serialize(s),delete s.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(s.textures=a),c.length>0&&(s.images=c),l.length>0&&(s.nodes=l)}return s}}const Xe=fS;function _e(r){if(typeof r!="function"||!r.name)throw new Error(`Node class ${r.name} is not a class`);if(wu.has(r.name))throw new Error(`Redefinition of node class ${r.name}`);wu.set(r.name,r)}class Jh extends Xe{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?co(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=co(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=uS(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?nc(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}const Qh=Jh;_e(Jh);class ed extends Xe{constructor(e,t){super(),this.node=e,this.indexNode=t}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}const td=ed;_e(ed);class nd extends Xe{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),s=n.build(e,i);return e.format(s,i,t)}}const id=nd;_e(nd);class sd extends Xe{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).dependenciesCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),s=e.getDataFromNode(this);if(e.context.tempRead!==!1&&s.propertyName!==void 0)return e.format(s.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),s.snippet=o,s.propertyName=c,e.format(s.propertyName,i,t)}}return super.build(e,t)}}const Ns=sd;_e(sd);class rd extends Ns{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,s=[];for(const a of i){const c=a.build(e);s.push(c)}const o=`${e.getType(n)}( ${s.join(", ")} )`;return e.format(o,n,t)}}const pS=rd;_e(rd);const mS=Zh.join("");class od extends Xe{constructor(e,t="x"){super(),this.node=e,this.components=t}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Zh.indexOf(t)+1,e);return e}getNodeType(e){return e.getTypeFromLength(this.components.length)}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let s=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength()));const c=n.build(e,o);this.components.length===i&&this.components===mS.slice(0,this.components.length)?s=e.format(c,o,t):s=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else s=n.build(e,t);return s}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}const Ru=od;_e(od);class ad extends Qh{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.getConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}const cn=ad;_e(ad);const fs=new Map;function K(r,e){if(fs.has(r))throw new Error(`Redefinition of node element ${r}`);if(typeof e!="function")throw new Error(`Node element ${r} is not a function`);fs.set(r,e)}const cd={construct(r,e){const t=e.shift();return r(hd(t),...e)},get:function(r,e,t){if(typeof e=="string"&&r[e]===void 0)if(fs.has(e)){const n=fs.get(e);return(...i)=>n(t,...i)}else if(e.endsWith("Assign")&&fs.has(e.slice(0,e.length-6))){const n=fs.get(e.slice(0,e.length-6));return(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=e.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),We(new Ru(r,e));if(e==="width"||e==="height")return We(new Ru(r,e==="width"?"x":"y"));if(/^\d+$/.test(e)===!0)return We(new td(r,new cn(Number(e),"uint")))}return r[e]}},ga=new WeakMap,gS=function(r){const e=co(r);if(e==="node"){let t=ga.get(r);return t===void 0&&(t=new Proxy(r,cd),ga.set(r,t),ga.set(t,t)),t}else{if(e==="float"||e==="boolean")return We(ud(r));if(e&&e!=="string")return We(new cn(r))}return r},_S=function(r){for(const e in r)r[e]=We(r[e]);return r},xS=function(r){const e=r.length;for(let t=0;t<e;t++)r[t]=We(r[t]);return r},vS=function(r,e=null,t=null,n=null){const i=s=>We(n!==null?Object.assign(s,n):s);return e===null?(...s)=>i(new r(...Zr(s))):t!==null?(t=We(t),(...s)=>i(new r(e,...Zr(s),t))):(...s)=>i(new r(e,...Zr(s)))},SS=function(r,...e){return We(new r(...Zr(e)))};class yS extends Xe{constructor(e){super(),this._jsFunc=e}call(e,t,n){return e=hd(e),We(this._jsFunc(e,t,n))}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}construct(e){return e.addStack(),e.stack.outputNode=We(this._jsFunc(e.stack,e)),e.removeStack()}}const MS=[!1,!0],TS=[0,1,2,3],ES=[-1,-2],ld=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Nc=new Map;for(const r of MS)Nc.set(r,new cn(r));const Pc=new Map;for(const r of TS)Pc.set(r,new cn(r,"uint"));const Uc=new Map([...Pc].map(r=>new cn(r.value,"int")));for(const r of ES)Uc.set(r,new cn(r,"int"));const bo=new Map([...Uc].map(r=>new cn(r.value)));for(const r of ld)bo.set(r,new cn(r));for(const r of ld)bo.set(-r,new cn(-r));const Ao={bool:Nc,uint:Pc,ints:Uc,float:bo},Cu=new Map([...Nc,...bo]),ud=r=>Cu.has(r)?Cu.get(r):r.isNode===!0?r:new cn(r),at=function(r,e=null){return(...t)=>{if(t.length===0)return We(new cn(nc(r),r));{if(r==="color"&&t[0].isNode!==!0&&(t=[nc(r,...t)]),t.length===1&&e!==null&&e.has(t[0]))return e.get(t[0]);const n=t.map(ud);return n.length===1?We(n[0].nodeType===r||co(n[0].value)===r?n[0]:new id(n[0],r)):We(new pS(n,r))}}},lr=r=>r!=null?r.nodeType||r.convertTo||(typeof r=="string"?r:null):null;function Qn(r){return new Proxy(new yS(r),cd)}const We=r=>gS(r),hd=r=>new _S(r),Zr=r=>new xS(r),ne=(...r)=>new vS(...r),ye=(...r)=>new SS(...r),_a=(...r)=>new Qn(...r);_e(Qn);const bS=new at("color"),gi=new at("float",Ao.float),AS=new at("int",Ao.int),wS=new at("uint",Ao.uint),RS=new at("bool",Ao.bool),rr=new at("vec2"),CS=new at("ivec2"),LS=new at("uvec2"),NS=new at("bvec2"),Dt=new at("vec3"),PS=new at("ivec3"),US=new at("uvec3"),IS=new at("bvec3"),Pi=new at("vec4"),DS=new at("ivec4"),FS=new at("uvec4"),OS=new at("bvec4"),or=new at("mat3"),BS=new at("imat3"),GS=new at("umat3"),zS=new at("bmat3"),VS=new at("mat4"),kS=new at("imat4"),HS=new at("umat4"),WS=new at("bmat4"),XS=(r="")=>We(new cn(r,"string")),qS=r=>We(new cn(r,"ArrayBuffer"));K("color",bS);K("float",gi);K("int",AS);K("uint",wS);K("bool",RS);K("vec2",rr);K("ivec2",CS);K("uvec2",LS);K("bvec2",NS);K("vec3",Dt);K("ivec3",PS);K("uvec3",US);K("bvec3",IS);K("vec4",Pi);K("ivec4",DS);K("uvec4",FS);K("bvec4",OS);K("mat3",or);K("imat3",BS);K("umat3",GS);K("bmat3",zS);K("mat4",VS);K("imat4",kS);K("umat4",HS);K("bmat4",WS);K("string",XS);K("arrayBuffer",qS);const $S=ne(td),jS=(r,e)=>We(new id(We(r),e));K("element",$S);K("convert",jS);class Ic extends Qh{constructor(e,t=null){super(e,t),this.isUniformNode=!0}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let s=e.getNodeFromHash(i);s===void 0&&(e.setHashNode(this,i),s=this);const o=s.getInputType(e),a=e.getUniformFromNode(s,e.shaderStage,o),c=e.getPropertyName(a);return e.format(c,n,t)}}const wo=Ic,_i=(r,e)=>{const t=lr(e||r),n=r&&r.isNode===!0?r.node&&r.node.value||r.value:r;return We(new Ic(n,t))};_e(Ic);class dd extends Xe{constructor(e,t=null){super(),this.node=e,this.name=t}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),s=e.getVaryingFromNode(this,i);s.needsInterpolation||(s.needsInterpolation=e.shaderStage==="fragment"),t!==null&&(s.name=t);const o=e.getPropertyName(s,Au.VERTEX);return e.flowNodeFromShaderStage(Au.VERTEX,n,i,o),e.getPropertyName(s)}}const Yt=ne(dd);K("varying",Yt);_e(dd);class Dc extends Xe{constructor(e,t=null){super(t),this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){const t=this.getAttributeName(e);let n=super.getNodeType(e);if(n===null)if(e.hasGeometryAttribute(t)){const i=e.geometry.getAttribute(t);n=e.getTypeFromAttribute(i)}else n="float";return n}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const s=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(s),a=e.getAttribute(t,o);return e.isShaderStage("vertex")?e.format(a.name,o,n):Yt(this).build(e,n)}else return console.warn(`AttributeNode: Attribute "${t}" not found.`),e.getConst(n)}}const ys=(r,e)=>We(new Dc(r,e));_e(Dc);class fd extends Xe{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e,t){const n=this.callNode.build(e,"void");return n!==""&&e.addLineFlowCode(n),this.outputNode.build(e,t)}}const pd=ne(fd);K("bypass",pd);_e(fd);let YS=0;class KS{constructor(){this.id=YS++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}const md=KS;class gd extends Xe{constructor(e,t=new md){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache();e.setCache(this.cache);const i=this.node.build(e,...t);return e.setCache(n),i}}const _d=ne(gd);K("cache",_d);_e(gd);class xd extends Xe{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}construct(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const Di=ne(xd);K("context",Di);_e(xd);class vd extends Xe{constructor(){super("uint"),this.isInstanceIndexNode=!0}generate(e){return e.getInstanceIndex()}}const ZS=ye(vd);_e(vd);class JS{constructor(e,t){this.isNodeAttribute=!0,this.name=e,this.type=t}}const QS=JS;class ey{constructor(e,t,n,i=void 0){this.isNodeUniform=!0,this.name=e,this.type=t,this.node=n,this.needsUpdate=i}get value(){return this.node.value}set value(e){this.node.value=e}}const ty=ey;class ny{constructor(e,t){this.isNodeVar=!0,this.name=e,this.type=t}}const Sd=ny;class iy extends Sd{constructor(e,t){super(e,t),this.needsInterpolation=!1,this.isNodeVarying=!0}}const sy=iy;class ry{constructor(e,t,n=""){this.name=e,this.type=t,this.code=n,Object.defineProperty(this,"isNodeCode",{value:!0})}}const oy=ry;class ay{constructor(){this.keywords=[],this.nodes=[],this.keywordsCallback={}}getNode(e){let t=this.nodes[e];return t===void 0&&this.keywordsCallback[e]!==void 0&&(t=this.keywordsCallback[e](e),this.nodes[e]=t),t}addKeyword(e,t){return this.keywords.push(e),this.keywordsCallback[e]=t,this}parse(e){const t=this.keywords,n=new RegExp(`\\b${t.join("\\b|\\b")}\\b`,"g"),i=e.match(n),s=[];if(i!==null)for(const o of i){const a=this.getNode(o);a!==void 0&&s.indexOf(a)===-1&&s.push(a)}return s}include(e,t){const n=this.parse(t);for(const i of n)i.build(e)}}const cy=ay;class ut extends Ns{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let s=n;for(let o=0;o<i.length;o++)s=new ut(e,s,i[o]);n=s}this.aNode=t,this.bNode=n}hasDependencies(e){return this.op!=="="?super.hasDependencies(e):!1}getNodeType(e,t){const n=this.op,i=this.aNode,s=this.bNode,o=i.getNodeType(e),a=s.getNodeType(e);if(o==="void"||a==="void")return"void";if(n==="="||n==="%")return o;if(n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,s=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=s.getNodeType(e),n==="="?c=a:n==="<"||n===">"||n==="<="||n===">="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=s.build(e,c),h=e.getTypeLength(t);if(t!=="void")return n==="="?(e.addLineFlowCode(`${l} ${this.op} ${u}`),l):n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${this.op} ${u} )`,o,t);if(a!=="void")return e.format(`${l} ${this.op} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const lo=ne(ut,"+"),ic=ne(ut,"-"),yd=ne(ut,"*"),Md=ne(ut,"/"),ly=ne(ut,"%"),uy=ne(ut,"=="),Td=ne(ut,"="),hy=ne(ut,"<"),dy=ne(ut,">"),fy=ne(ut,"<="),py=ne(ut,">="),my=ne(ut,"&&"),gy=ne(ut,"||"),_y=ne(ut,"^^"),xy=ne(ut,"&"),vy=ne(ut,"|"),Sy=ne(ut,"^"),yy=ne(ut,"<<"),My=ne(ut,">>");K("add",lo);K("sub",ic);K("mul",yd);K("div",Md);K("remainder",ly);K("equal",uy);K("assign",Td);K("lessThan",hy);K("greaterThan",dy);K("lessThanEqual",fy);K("greaterThanEqual",py);K("and",my);K("or",gy);K("xor",_y);K("bitAnd",xy);K("bitOr",vy);K("bitXor",Sy);K("shiftLeft",yy);K("shiftRight",My);_e(ut);class Ed extends Xe{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const Ty=ne(Ed);_e(Ed);class Hi extends Xe{constructor(e,t=null){super(e),this.name=t}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){const t=e.getVarFromNode(this,this.getNodeType(e)),n=this.name;return n!==null&&(t.name=n),e.getPropertyName(t)}}const Ey=(r,e)=>We(new Hi(r,lr(e))),hs=ye(Hi,"vec4","DiffuseColor"),xa=ye(Hi,"float","Roughness");ye(Hi,"float","Metalness");ye(Hi,"color","SpecularColor");ye(Hi,"float","Shininess");_e(Hi);class bd extends Xe{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e){const t=this.getNodeType(e),n={tempWrite:!1},{ifNode:i,elseNode:s}=this,o=i.getNodeType(e)!=="void"||s&&s.getNodeType(e)!=="void",a=o?Ey(t).build(e):"",c=Di(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${c} ) {

`).addFlowTab();let l=Di(this.ifNode,n).build(e,t);if(l=o?a+" = "+l+";":l,e.removeFlowTab().addFlowCode(e.tab+"	"+l+`

`+e.tab+"}"),s!==null){e.addFlowCode(` else {

`).addFlowTab();let u=Di(s,n).build(e,t);u=a?a+" = "+u+";":u,e.removeFlowTab().addFlowCode(e.tab+"	"+u+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return a}}const uo=ne(bd);K("cond",uo);_e(bd);class Ad extends Xe{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(pd(Ty(),e)),this}if(e,t){const n=_a(t);return this._currentCond=uo(e,n),this.add(this._currentCond)}elseif(e,t){const n=_a(t),i=uo(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=_a(e),this}assign(e,t){return this.add(Td(e,t))}build(e,...t){for(const n of this.nodes)n.build(e);return this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}const Lu=ne(Ad);_e(Ad);class wd extends wo{constructor(e){super(0),this.textureNode=e,this.updateType=wt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:s}=n;this.value=Math.log2(Math.max(i,s))}}}const Rd=ne(wd);_e(wd);const by=new Map([[2,"vec2"],[3,"vec3"],[4,"vec4"],[9,"mat3"],[16,"mat4"]]),Ay=new Map([[Int8Array,"int"],[Int16Array,"int"],[Int32Array,"int"],[Uint8Array,"uint"],[Uint16Array,"uint"],[Uint32Array,"uint"],[Float32Array,"float"]]),wy=new Set([Int32Array,Uint32Array,Float32Array]),Hr=r=>(r=Number(r),r+(r%1?"":".0"));class Ry{constructor(e,t,n){this.object=e,this.material=e&&(e.material||null),this.geometry=e&&(e.geometry||null),this.renderer=t,this.parser=n,this.nodes=[],this.updateNodes=[],this.updateBeforeNodes=[],this.hashNodes={},this.lightsNode=null,this.environmentNode=null,this.fogNode=null,this.toneMappingNode=null,this.vertexShader=null,this.fragmentShader=null,this.computeShader=null,this.flowNodes={vertex:[],fragment:[],compute:[]},this.flowCode={vertex:"",fragment:"",compute:[]},this.uniforms={vertex:[],fragment:[],compute:[],index:0},this.codes={vertex:[],fragment:[],compute:[]},this.attributes=[],this.varyings=[],this.vars={vertex:[],fragment:[],compute:[]},this.flow={code:""},this.chaining=[],this.stack=Lu(),this.tab="	",this.context={keywords:new cy,material:this.material,getMIPLevelAlgorithmNode:(i,s)=>s.mul(Rd(i))},this.cache=new md,this.globalCache=this.cache,this.flowsData=new WeakMap,this.shaderStage=null,this.buildStage=null}setHashNode(e,t){this.hashNodes[t]=e}addNode(e){if(this.nodes.indexOf(e)===-1){const t=e.getUpdateType(),n=e.getUpdateBeforeType();t!==wt.NONE&&this.updateNodes.push(e),n!==wt.NONE&&this.updateBeforeNodes.push(e),this.nodes.push(e),this.setHashNode(e,e.getHash(this))}}get currentNode(){return this.chaining[this.chaining.length-1]}addChain(e){this.chaining.push(e)}removeChain(e){if(this.chaining.pop()!==e)throw new Error("NodeBuilder: Invalid node chaining!")}getMethod(e){return e}getNodeFromHash(e){return this.hashNodes[e]}addFlow(e,t){return this.flowNodes[e].push(t),t}setContext(e){this.context=e}getContext(){return this.context}setCache(e){this.cache=e}getCache(){return this.cache}isAvailable(){return!1}getInstanceIndex(){console.warn("Abstract function.")}getFrontFacing(){console.warn("Abstract function.")}getFragCoord(){console.warn("Abstract function.")}isFlipY(){return!1}getTexture(){console.warn("Abstract function.")}getTextureLevel(){console.warn("Abstract function.")}getConst(e,t=null){if(t===null&&(e==="float"||e==="int"||e==="uint"?t=0:e==="bool"?t=!1:e==="color"?t=new Ce:e==="vec2"?t=new Ie:e==="vec3"?t=new A:e==="vec4"&&(t=new Ye)),e==="float")return Hr(t);if(e==="int")return`${Math.round(t)}`;if(e==="uint")return t>=0?`${Math.round(t)}u`:"0u";if(e==="bool")return t?"true":"false";if(e==="color")return`${this.getType("vec3")}( ${Hr(t.r)}, ${Hr(t.g)}, ${Hr(t.b)} )`;const n=this.getTypeLength(e),i=this.getComponentType(e),s=o=>this.getConst(i,o);if(n===2)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)} )`;if(n===3)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)} )`;if(n===4)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)}, ${s(t.w)} )`;if(n>4)return`${this.getType(e)}()`;throw new Error(`NodeBuilder: Type '${e}' not found in generate constant attempt.`)}getType(e){return e}generateMethod(e){return e}hasGeometryAttribute(e){return this.geometry&&this.geometry.getAttribute(e)!==void 0}getAttribute(e,t){const n=this.attributes;for(const s of n)if(s.name===e)return s;const i=new QS(e,t);return n.push(i),i}getPropertyName(e){return e.name}isVector(e){return/vec\d/.test(e)}isMatrix(e){return/mat\d/.test(e)}isReference(e){return e==="void"||e==="property"||e==="sampler"||e==="texture"||e==="cubeTexture"}isShaderStage(e){return this.shaderStage===e}getTextureEncodingFromMap(e){return console.warn("THREE.NodeBuilder: Method .getTextureEncodingFromMap replaced by .getTextureColorSpaceFromMap in r152+."),this.getTextureColorSpaceFromMap(e)===he?Jn:pc}getTextureColorSpaceFromMap(e){let t;return e&&e.isTexture?t=e.colorSpace:e&&e.isWebGLRenderTarget?t=e.texture.colorSpace:t=pi,t}getComponentType(e){if(e=this.getVectorType(e),e==="float"||e==="bool"||e==="int"||e==="uint")return e;const t=/(b|i|u|)(vec|mat)([2-4])/.exec(e);return t===null?null:t[1]==="b"?"bool":t[1]==="i"?"int":t[1]==="u"?"uint":"float"}getVectorType(e){return e==="color"?"vec3":e==="texture"?"vec4":e}getTypeFromLength(e,t="float"){if(e===1)return t;const n=by.get(e);return(t==="float"?"":t[0])+n}getTypeFromArray(e){return Ay.get(e.constructor)}getTypeFromAttribute(e){let t=e;e.isInterleavedBufferAttribute&&(t=e.data);const n=t.array,i=wy.has(n.constructor)?e.itemSize:t.stride||e.itemSize,s=e.normalized;let o;return!(e instanceof Lh)&&s!==!0&&(o=this.getTypeFromArray(n)),this.getTypeFromLength(i,o)}getTypeLength(e){const t=this.getVectorType(e),n=/vec([2-4])/.exec(t);return n!==null?Number(n[1]):t==="float"||t==="bool"||t==="int"||t==="uint"?1:/mat3/.test(e)===!0?9:/mat4/.test(e)===!0?16:0}getVectorFromMatrix(e){return e.replace("mat","vec")}changeComponentType(e,t){return this.getTypeFromLength(this.getTypeLength(e),t)}getIntegerType(e){const t=this.getComponentType(e);return t==="int"||t==="uint"?e:this.changeComponentType(e,"int")}addStack(){return this.stack=Lu(this.stack),this.stack}removeStack(){const e=this.stack;return this.stack=e.parent,e}getDataFromNode(e,t=this.shaderStage){const n=e.isGlobal(this)?this.globalCache:this.cache;let i=n.getNodeData(e);return i===void 0&&(i={vertex:{},fragment:{},compute:{}},n.setNodeData(e,i)),t!==null?i[t]:i}getNodeProperties(e,t=this.shaderStage){const n=this.getDataFromNode(e,t);return n.properties||(n.properties={outputNode:null})}getUniformFromNode(e,t,n){const i=this.getDataFromNode(e,t);let s=i.uniform;if(s===void 0){const o=this.uniforms.index++;s=new ty("nodeUniform"+o,n,e),this.uniforms[t].push(s),i.uniform=s}return s}getVarFromNode(e,t,n=this.shaderStage){const i=this.getDataFromNode(e,n);let s=i.variable;if(s===void 0){const o=this.vars[n],a=o.length;s=new Sd("nodeVar"+a,t),o.push(s),i.variable=s}return s}getVaryingFromNode(e,t){const n=this.getDataFromNode(e,null);let i=n.varying;if(i===void 0){const s=this.varyings,o=s.length;i=new sy("nodeVarying"+o,t),s.push(i),n.varying=i}return i}getCodeFromNode(e,t,n=this.shaderStage){const i=this.getDataFromNode(e);let s=i.code;if(s===void 0){const o=this.codes[n],a=o.length;s=new oy("nodeCode"+a,t),o.push(s),i.code=s}return s}addLineFlowCode(e){return e===""?this:(e=this.tab+e,/;\s*$/.test(e)||(e=e+`;
`),this.flow.code+=e,this)}addFlowCode(e){return this.flow.code+=e,this}addFlowTab(){return this.tab+="	",this}removeFlowTab(){return this.tab=this.tab.slice(0,-1),this}getFlowData(e){return this.flowsData.get(e)}flowNode(e){const t=e.getNodeType(this),n=this.flowChildNode(e,t);return this.flowsData.set(e,n),n}flowChildNode(e,t=null){const n=this.flow,i={code:""};return this.flow=i,i.result=e.build(this,t),this.flow=n,i}flowNodeFromShaderStage(e,t,n=null,i=null){const s=this.shaderStage;this.setShaderStage(e);const o=this.flowChildNode(t,n);return i!==null&&(o.code+=`${this.tab+i} = ${o.result};
`),this.flowCode[e]=this.flowCode[e]+o.code,this.setShaderStage(s),o}getAttributes(){console.warn("Abstract function.")}getVaryings(){console.warn("Abstract function.")}getVars(e){let t="";const n=this.vars[e];for(const i of n)t+=`${i.type} ${i.name}; `;return t}getUniforms(){console.warn("Abstract function.")}getCodes(e){const t=this.codes[e];let n="";for(const i of t)n+=i.code+`
`;return n}getHash(){return this.vertexShader+this.fragmentShader+this.computeShader}setShaderStage(e){this.shaderStage=e}getShaderStage(){return this.shaderStage}setBuildStage(e){this.buildStage=e}getBuildStage(){return this.buildStage}buildCode(){console.warn("Abstract function.")}build(){for(const e of cS){this.setBuildStage(e),this.context.vertex&&this.context.vertex.isNode&&this.flowNodeFromShaderStage("vertex",this.context.vertex);for(const t of lS){this.setShaderStage(t);const n=this.flowNodes[t];for(const i of n)e==="generate"?this.flowNode(i):i.build(this)}}return this.setBuildStage(null),this.setShaderStage(null),this.buildCode(),this}format(e,t,n){if(t=this.getVectorType(t),n=this.getVectorType(n),t===n||n===null||this.isReference(n))return e;const i=this.getTypeLength(t),s=this.getTypeLength(n);return i>4||s>4||s===0?e:i===s?`${this.getType(n)}( ${e} )`:i>s?this.format(`${e}.${"xyz".slice(0,s)}`,this.getTypeFromLength(s,this.getComponentType(t)),n):s===4?`${this.getType(n)}( ${this.format(e,t,"vec3")}, 1.0 )`:i===2?`${this.getType(n)}( ${this.format(e,t,"vec2")}, 0.0 )`:`${this.getType(n)}( ${e} )`}getSignature(){return`// Three.js r${po} - NodeMaterial System
`}}const Cy=Ry;class Ly{constructor(){this.time=0,this.deltaTime=0,this.frameId=0,this.renderId=0,this.startTime=null,this.frameMap=new WeakMap,this.frameBeforeMap=new WeakMap,this.renderMap=new WeakMap,this.renderBeforeMap=new WeakMap,this.renderer=null,this.material=null,this.camera=null,this.object=null,this.scene=null}updateBeforeNode(e){const t=e.getUpdateBeforeType();t===wt.FRAME?this.frameBeforeMap.get(e)!==this.frameId&&(this.frameBeforeMap.set(e,this.frameId),e.updateBefore(this)):t===wt.RENDER?(this.renderBeforeMap.get(e)!==this.renderId||this.frameBeforeMap.get(e)!==this.frameId)&&(this.renderBeforeMap.set(e,this.renderId),this.frameBeforeMap.set(e,this.frameId),e.updateBefore(this)):t===wt.OBJECT&&e.updateBefore(this)}updateNode(e){const t=e.getUpdateType();t===wt.FRAME?this.frameMap.get(e)!==this.frameId&&(this.frameMap.set(e,this.frameId),e.update(this)):t===wt.RENDER?(this.renderMap.get(e)!==this.renderId||this.frameMap.get(e)!==this.frameId)&&(this.renderMap.set(e,this.renderId),this.frameMap.set(e,this.frameId),e.update(this)):t===wt.OBJECT&&e.update(this)}update(){this.frameId++,this.lastTime===void 0&&(this.lastTime=performance.now()),this.deltaTime=(performance.now()-this.lastTime)/1e3,this.lastTime=performance.now(),this.time+=this.deltaTime}}const Nu=Ly;class Cd{constructor(e,t,n=null,i="",s=!1){this.type=e,this.name=t,this.count=n,this.qualifier=i,this.isConst=s}}Cd.isNodeFunctionInput=!0;const Ny=Cd;class Ld extends Xe{constructor(e,t=null){super(),this.node=e,this.name=t}assign(e){return e.traverse((t,n)=>{n&&t.uuid===this.uuid&&n(this.node)}),this.node=e,this}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node,n=this.name;if(n===null&&t.isTempNode===!0)return t.build(e);const i=e.getVectorType(this.getNodeType(e)),s=t.build(e,i),o=e.getVarFromNode(this,i);n!==null&&(o.name=n);const a=e.getPropertyName(o);return e.addLineFlowCode(`${a} = ${s}`),a}}const Ro=ne(Ld),Nd=Ro;K("label",Ro);K("temp",Nd);_e(Ld);class I extends Ns{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,s=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return s>o&&s>a?t:o>a?n:a>s?i:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),s=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Pi(Dt(h),0):u=Pi(Dt(u),0);const d=yd(u,h).xyz;return mn(d).build(e,t)}else{if(n===I.NEGATE)return e.format("-"+o.build(e,s),i,t);if(n===I.ONE_MINUS)return ic(1,o).build(e,t);if(n===I.RECIPROCAL)return Md(1,o).build(e,t);if(n===I.DIFFERENCE)return Pd(ic(o,a)).build(e,t);{const u=[];return n===I.CROSS?u.push(o.build(e,i),a.build(e,i)):n===I.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":s),a.build(e,s)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(o.build(e,s),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":s)):n===I.REFRACT?u.push(o.build(e,s),a.build(e,s),c.build(e,"float")):n===I.MIX?u.push(o.build(e,s),a.build(e,s),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":s)):(u.push(o.build(e,s)),a!==null&&u.push(a.build(e,s)),c!==null&&u.push(c.build(e,s))),e.format(`${e.getMethod(n)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";gi(1e-6);gi(1e6);const Py=ne(I,I.RADIANS),Uy=ne(I,I.DEGREES),Iy=ne(I,I.EXP),Dy=ne(I,I.EXP2),Fy=ne(I,I.LOG),Oy=ne(I,I.LOG2),By=ne(I,I.SQRT),Gy=ne(I,I.INVERSE_SQRT),zy=ne(I,I.FLOOR),Vy=ne(I,I.CEIL),mn=ne(I,I.NORMALIZE),ky=ne(I,I.FRACT),Hy=ne(I,I.SIN),Wy=ne(I,I.COS),Xy=ne(I,I.TAN),qy=ne(I,I.ASIN),$y=ne(I,I.ACOS),jy=ne(I,I.ATAN),Pd=ne(I,I.ABS),Yy=ne(I,I.SIGN),Ky=ne(I,I.LENGTH),Ud=ne(I,I.NEGATE),Zy=ne(I,I.ONE_MINUS),Jy=ne(I,I.DFDX),Qy=ne(I,I.DFDY),eM=ne(I,I.ROUND),tM=ne(I,I.RECIPROCAL),nM=ne(I,I.ATAN2),iM=ne(I,I.MIN),sM=ne(I,I.MAX),rM=ne(I,I.MOD),oM=ne(I,I.STEP),aM=ne(I,I.REFLECT),cM=ne(I,I.DISTANCE),lM=ne(I,I.DIFFERENCE),uM=ne(I,I.DOT),hM=ne(I,I.CROSS),dM=ne(I,I.POW),fM=ne(I,I.POW,2),pM=ne(I,I.POW,3),mM=ne(I,I.POW,4),Id=ne(I,I.TRANSFORM_DIRECTION),Dd=ne(I,I.MIX),Fd=(r,e=0,t=1)=>We(new I(I.CLAMP,We(r),We(e),We(t))),gM=r=>Fd(r),_M=ne(I,I.REFRACT),Od=ne(I,I.SMOOTHSTEP),xM=ne(I,I.FACEFORWARD),vM=(r,e,t)=>Dd(e,t,r),SM=(r,e,t)=>Od(e,t,r);K("radians",Py);K("degrees",Uy);K("exp",Iy);K("exp2",Dy);K("log",Fy);K("log2",Oy);K("sqrt",By);K("inverseSqrt",Gy);K("floor",zy);K("ceil",Vy);K("normalize",mn);K("fract",ky);K("sin",Hy);K("cos",Wy);K("tan",Xy);K("asin",qy);K("acos",$y);K("atan",jy);K("abs",Pd);K("sign",Yy);K("length",Ky);K("negate",Ud);K("oneMinus",Zy);K("dFdx",Jy);K("dFdy",Qy);K("round",eM);K("reciprocal",tM);K("atan2",nM);K("min",iM);K("max",sM);K("mod",rM);K("step",oM);K("reflect",aM);K("distance",cM);K("dot",uM);K("cross",hM);K("pow",dM);K("pow2",fM);K("pow3",pM);K("pow4",mM);K("transformDirection",Id);K("mix",vM);K("clamp",Fd);K("refract",_M);K("smoothstep",SM);K("faceForward",xM);K("difference",lM);K("saturate",gM);_e(I);class De extends Xe{constructor(e=De.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=wt.OBJECT,this._uniformNode=_i(null)}getNodeType(){const e=this.scope;if(e===De.WORLD_MATRIX||e===De.VIEW_MATRIX)return"mat4";if(e===De.NORMAL_MATRIX)return"mat3";if(e===De.POSITION||e===De.VIEW_POSITION||e===De.DIRECTION)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===De.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===De.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===De.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===De.POSITION)n.value=n.value||new A,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===De.DIRECTION)n.value=n.value||new A,t.getWorldDirection(n.value);else if(i===De.VIEW_POSITION){const s=e.camera;n.value=n.value||new A,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(s.matrixWorldInverse)}}generate(e){const t=this.scope;return t===De.WORLD_MATRIX||t===De.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===De.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===De.POSITION||t===De.VIEW_POSITION||t===De.DIRECTION)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}De.VIEW_MATRIX="viewMatrix";De.NORMAL_MATRIX="normalMatrix";De.WORLD_MATRIX="worldMatrix";De.POSITION="position";De.VIEW_POSITION="viewPosition";De.DIRECTION="direction";const Bd=De;ne(De,De.DIRECTION);ne(De,De.VIEW_MATRIX);ne(De,De.NORMAL_MATRIX);ne(De,De.WORLD_MATRIX);ne(De,De.POSITION);ne(De,De.VIEW_POSITION);_e(De);class qt extends Bd{constructor(e=qt.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ye(qt,qt.DIRECTION);const Fc=ye(qt,qt.VIEW_MATRIX),Gd=ye(qt,qt.NORMAL_MATRIX),sc=ye(qt,qt.WORLD_MATRIX);ye(qt,qt.POSITION);ye(qt,qt.VIEW_POSITION);_e(qt);class ot extends Xe{constructor(e=ot.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===ot.GEOMETRY)n=ys("position","vec3");else if(t===ot.LOCAL)n=Yt(yM);else if(t===ot.WORLD){const i=sc.mul(Dn);n=Yt(i)}else if(t===ot.VIEW){const i=Fc.mul(Dn);n=Yt(i)}else if(t===ot.VIEW_DIRECTION){const i=Co.negate();n=mn(Yt(i))}else if(t===ot.WORLD_DIRECTION){const i=Dn.transformDirection(sc);n=mn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}ot.GEOMETRY="geometry";ot.LOCAL="local";ot.WORLD="world";ot.WORLD_DIRECTION="worldDirection";ot.VIEW="view";ot.VIEW_DIRECTION="viewDirection";const yM=ye(ot,ot.GEOMETRY),Dn=ye(ot,ot.LOCAL),zd=ye(ot,ot.WORLD),Vd=ye(ot,ot.WORLD_DIRECTION),Co=ye(ot,ot.VIEW),kd=ye(ot,ot.VIEW_DIRECTION);_e(ot);class Hd extends Ns{constructor(e=Vd){super("vec2"),this.dirNode=e}construct(){const e=Ud(this.dirNode),t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return rr(t,n)}}const rc=ne(Hd);_e(Hd);class Rt extends Bd{constructor(e=Rt.POSITION){super(e)}getNodeType(e){return this.scope===Rt.PROJECTION_MATRIX?"mat4":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===Rt.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===Rt.VIEW_MATRIX?n.value=t.matrixWorldInverse:(this.object3d=t,super.update(e))}generate(e){return this.scope===Rt.PROJECTION_MATRIX&&(this._uniformNode.nodeType="mat4"),super.generate(e)}}Rt.PROJECTION_MATRIX="projectionMatrix";const MM=ye(Rt,Rt.PROJECTION_MATRIX),Wi=ye(Rt,Rt.VIEW_MATRIX);ye(Rt,Rt.NORMAL_MATRIX);ye(Rt,Rt.WORLD_MATRIX);ye(Rt,Rt.POSITION);_e(Rt);class xt extends Xe{constructor(e=xt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===xt.GEOMETRY)n=ys("normal","vec3");else if(t===xt.LOCAL)n=Yt(Wd);else if(t===xt.VIEW){const i=Gd.mul(Ms);n=mn(Yt(i))}else if(t===xt.WORLD){const i=Ps.transformDirection(Wi);n=mn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}xt.GEOMETRY="geometry";xt.LOCAL="local";xt.VIEW="view";xt.WORLD="world";const Wd=ye(xt,xt.GEOMETRY),Ms=ye(xt,xt.LOCAL),Ps=ye(xt,xt.VIEW),TM=ye(xt,xt.WORLD),Ts=Ro(Ps,"TransformedNormalView"),Pu=Ts.transformDirection(Wi).normalize();_e(xt);class Xd extends Xe{constructor(e,t=null){super("float"),this.textureNode=e,this.roughnessNode=t}construct(){const{textureNode:e,roughnessNode:t}=this,n=Rd(e),i=t.mul(t).mul(Math.PI).div(t.add(1));return n.add(i.log2()).clamp(0,n)}}const Uu=ne(Xd);_e(Xd);class qd extends Dc{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e+1:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const ho=(...r)=>We(new qd(...r));_e(qd);let Iu;class Oc extends wo{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Iu||(Iu=ho())}construct(e){const t=e.getNodeProperties(this);let n=this.uvNode;n===null&&e.context.getUVNode&&(n=e.context.getUVNode(this)),n||(n=this.getDefaultUV());let i=this.levelNode;i===null&&e.context.getSamplerLevelNode&&(i=e.context.getSamplerLevelNode(this)),t.uvNode=n,t.levelNode=i?e.context.getMIPLevelAlgorithmNode(this,i):null}generate(e,t){const{uvNode:n,levelNode:i}=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"property");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const a=this.getNodeType(e),c=e.getDataFromNode(this);let l=c.propertyName;if(l===void 0){const u=n.build(e,"vec2"),h=e.getVarFromNode(this,a);l=e.getPropertyName(h);let d=null;if(i&&i.isNode===!0){const p=i.build(e,"float");d=e.getTextureLevel(s,o,u,p)}else d=e.getTexture(s,o,u);e.addLineFlowCode(`${l} = ${d}`),c.snippet=d,c.propertyName=l}return e.format(l,a,t)}}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}}const Es=ne(Oc);K("texture",Es);_e(Oc);class mt extends Xe{constructor(e=mt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===mt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===mt.GEOMETRY)n=ys("tangent","vec4");else if(t===mt.LOCAL)n=Yt(fo.xyz);else if(t===mt.VIEW){const i=Fc.mul(Bc).xyz;n=mn(Yt(i))}else if(t===mt.WORLD){const i=Lo.transformDirection(Wi);n=mn(Yt(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}mt.GEOMETRY="geometry";mt.LOCAL="local";mt.VIEW="view";mt.WORLD="world";const fo=ye(mt,mt.GEOMETRY),Bc=ye(mt,mt.LOCAL),Lo=ye(mt,mt.VIEW),EM=ye(mt,mt.WORLD),$d=Ro(Lo,"TransformedTangentView");mn($d.transformDirection(Wi));_e(mt);class vt extends Xe{constructor(e=vt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===vt.GEOMETRY?n=Wd.cross(fo):t===vt.LOCAL?n=Ms.cross(Bc):t===vt.VIEW?n=Ps.cross(Lo):t===vt.WORLD&&(n=TM.cross(EM));const i=n.mul(fo.w).xyz;return mn(Yt(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}vt.GEOMETRY="geometry";vt.LOCAL="local";vt.VIEW="view";vt.WORLD="world";ye(vt,vt.GEOMETRY);ye(vt,vt.LOCAL);const bM=ye(vt,vt.VIEW);ye(vt,vt.WORLD);const AM=mn(Ts.cross($d).mul(fo.w));mn(AM.transformDirection(Wi));_e(vt);class jd extends wo{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Yd=(r,e,t)=>We(new jd(r,lr(e),t));_e(jd);class Kd extends Xe{constructor(){super("vec3")}getHash(){return"reflectVector"}construct(){return kd.negate().reflect(Ts).transformDirection(Wi)}}const wM=ye(Kd);_e(Kd);class Zd extends Oc{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return wM}generate(e,t){const{uvNode:n,levelNode:i}=e.getNodeProperties(this),s=this.value;if(!s||s.isCubeTexture!==!0)throw new Error("CubeTextureNode: Need a three.js cube texture.");const o=wo.prototype.generate.call(this,e,"cubeTexture");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const a=e.getDataFromNode(this);let c=a.propertyName;if(c===void 0){const u=Dt(n.x.negate(),n.yz).build(e,"vec3"),h=e.getVarFromNode(this,"vec4");c=e.getPropertyName(h);let d=null;if(i&&i.isNode===!0){const p=i.build(e,"float");d=e.getTextureLevel(this,o,u,p)}else d=e.getTexture(this,o,u);e.addLineFlowCode(`${c} = ${d}`),a.snippet=d,a.propertyName=c}return e.format(c,"vec4",t)}}}const oc=ne(Zd);K("cubeTexture",oc);_e(Zd);class Gc extends Xe{constructor(e,t,n=null){super(),this.property=e,this.uniformType=t,this.object=n,this.node=null,this.updateType=wt.OBJECT,this.setNodeType(t)}setNodeType(e){let t=null;e==="texture"?t=Es(null):t=_i(e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}update(e){const t=this.object!==null?this.object:e.object,n=this.property;this.node.value=t[n]}construct(){return this.node}}const Ri=(r,e,t)=>We(new Gc(r,lr(e),t));_e(Gc);class Jd extends Gc{constructor(e,t,n=null){super(e,t,n),this.material=n}construct(e){const t=this.material!==null?this.material:e.material;return this.node.value=t[this.property],super.construct(e)}update(e){this.object=this.material!==null?this.material:e.material,super.update(e)}}const $s=(r,e,t)=>We(new Jd(r,lr(e),t));_e(Jd);class ge extends Xe{constructor(e){super(),this.scope=e}getNodeType(e){const t=this.scope,n=e.context.material;if(t===ge.COLOR)return n.map!==null?"vec4":"vec3";if(t===ge.OPACITY||t===ge.ROTATION)return"float";if(t===ge.UV)return"vec2";if(t===ge.EMISSIVE)return"vec3";if(t===ge.ROUGHNESS||t===ge.METALNESS||t===ge.SPECULAR||t===ge.SHININESS)return"float"}getFloat(e){return $s(e,"float")}getColor(e){return $s(e,"color")}getTexture(e){const t=$s(e,"texture");return t.node.uvNode=RM,t}construct(e){const t=e.context.material,n=this.scope;let i=null;if(n===ge.ALPHA_TEST)i=this.getFloat("alphaTest");else if(n===ge.COLOR){const s=this.getColor("color");t.map&&t.map.isTexture===!0?i=s.mul(this.getTexture("map")):i=s}else if(n===ge.OPACITY){const s=this.getFloat("opacity");t.alphaMap&&t.alphaMap.isTexture===!0?i=s.mul(this.getTexture("alphaMap")):i=s}else if(n===ge.SHININESS)i=this.getFloat("shininess");else if(n===ge.SPECULAR_COLOR)i=this.getColor("specular");else if(n===ge.REFLECTIVITY){const s=this.getFloat("reflectivity");t.specularMap&&t.specularMap.isTexture===!0?i=s.mul(this.getTexture("specularMap").r):i=s}else if(n===ge.ROUGHNESS){const s=this.getFloat("roughness");t.roughnessMap&&t.roughnessMap.isTexture===!0?i=s.mul(this.getTexture("roughnessMap").g):i=s}else if(n===ge.METALNESS){const s=this.getFloat("metalness");t.metalnessMap&&t.metalnessMap.isTexture===!0?i=s.mul(this.getTexture("metalnessMap").b):i=s}else if(n===ge.EMISSIVE){const s=this.getColor("emissive");t.emissiveMap&&t.emissiveMap.isTexture===!0?i=s.mul(this.getTexture("emissiveMap")):i=s}else if(n===ge.ROTATION)i=this.getFloat("rotation");else if(n===ge.UV){let s=t.map||t.specularMap||t.displacementMap||t.normalMap||t.bumpMap||t.roughnessMap||t.metalnessMap||t.alphaMap||t.emissiveMap||t.clearcoatMap||t.clearcoatNormalMap||t.clearcoatRoughnessMap||t.iridescenceMap||t.iridescenceThicknessMap||t.specularIntensityMap||t.specularColorMap||t.transmissionMap||t.thicknessMap||t.sheenColorMap||t.sheenRoughnessMap;s?(s.isWebGLRenderTarget&&(s=s.texture),s.matrixAutoUpdate===!0&&s.updateMatrix(),i=_i(s.matrix).mul(Dt(ho(),1))):i=ho()}else{const s=this.getNodeType(e);i=$s(n,s)}return i}}ge.ALPHA_TEST="alphaTest";ge.COLOR="color";ge.OPACITY="opacity";ge.SHININESS="shininess";ge.SPECULAR_COLOR="specularColor";ge.REFLECTIVITY="reflectivity";ge.ROUGHNESS="roughness";ge.METALNESS="metalness";ge.EMISSIVE="emissive";ge.ROTATION="rotation";ge.UV="uv";const RM=ye(ge,ge.UV),CM=ye(ge,ge.ALPHA_TEST),LM=ye(ge,ge.COLOR);ye(ge,ge.SHININESS);const NM=ye(ge,ge.EMISSIVE),PM=ye(ge,ge.OPACITY);ye(ge,ge.SPECULAR_COLOR);ye(ge,ge.REFLECTIVITY);ye(ge,ge.ROUGHNESS);ye(ge,ge.METALNESS);ye(ge,ge.ROTATION);_e(ge);class Qd extends Xe{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const UM=ye(Qd),IM=gi(UM).mul(2).sub(1);_e(Qd);const DM=new Qn(r=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=r,s=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(s),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(p.dot(p)),_=IM.mul(g.inverseSqrt());return lo(d.mul(n.x,_),p.mul(n.y,_),l.mul(n.z)).normalize()});class ef extends Ns{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=ro}construct(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=Dt(i.xy.mul(n),i.z));let s=null;return t===Sh?s=Gd.mul(i).normalize():t===ro&&(e.hasGeometryAttribute("tangent")===!0?s=OM.mul(i).normalize():s=DM.call({eye_pos:Co,surf_norm:Ps,mapN:i,uv:ho()})),s}}const FM=ne(ef),OM=or(Lo,bM,Ps);_e(ef);class Vi extends ge{constructor(e){super(e)}getNodeType(e){const t=this.scope;let n=null;return t===Vi.NORMAL&&(n="vec3"),n||super.getNodeType(e)}construct(e){const t=e.material,n=this.scope;let i=null;return n===Vi.NORMAL&&(i=t.normalMap?FM(this.getTexture("normalMap"),$s("normalScale","vec2")):Ps),i||super.construct(e)}}Vi.NORMAL="normal";const BM=ye(Vi,Vi.NORMAL);_e(Vi);class tf extends Xe{constructor(e){super("void"),this.instanceMesh=e;const t=Yd(e.instanceMatrix.array,"mat4",e.count);this.instanceMatrixNode=Nd(t.element(ZS))}generate(e){const{instanceMatrixNode:t}=this,n=t.mul(Dn).xyz,i=or(t[0].xyz,t[1].xyz,t[2].xyz),s=Ms.div(Dt(i[0].dot(i[0]),i[1].dot(i[1]),i[2].dot(i[2]))),o=i.mul(s).xyz;Dn.assign(n).build(e),Ms.assign(o).build(e)}}const GM=ne(tf);_e(tf);class nf extends Xe{constructor(e=Dn){super("vec4"),this.position=e}generate(e){const t=this.position;return MM.mul(Fc).mul(t).build(e)}}const zM=ne(nf);_e(nf);const VM=new Qn((r,{},e)=>{const{index:t,weight:n,bindMatrix:i,bindMatrixInverse:s,boneMatrices:o}=r,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(Dn),d=lo(a.mul(h).mul(n.x),c.mul(h).mul(n.y),l.mul(h).mul(n.z),u.mul(h).mul(n.w)),p=s.mul(d).xyz;let g=lo(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=s.mul(g).mul(i);const _=g.transformDirection(Ms).xyz;Dn.assign(p).build(e),Ms.assign(_).build(e),e.hasGeometryAttribute("tangent")&&Bc.assign(_).build(e)});class sf extends Xe{constructor(e){super("void"),this.skinnedMesh=e,this.updateType=wt.OBJECT,this.skinIndexNode=ys("skinIndex","uvec4"),this.skinWeightNode=ys("skinWeight","vec4"),this.bindMatrixNode=_i(e.bindMatrix,"mat4"),this.bindMatrixInverseNode=_i(e.bindMatrixInverse,"mat4"),this.boneMatricesNode=Yd(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)}generate(e){VM.call({index:this.skinIndexNode,weight:this.skinWeightNode,bindMatrix:this.bindMatrixNode,bindMatrixInverse:this.bindMatrixInverseNode,boneMatrices:this.boneMatricesNode},{},e)}update(){this.skinnedMesh.skeleton.update()}}const kM=ne(sf);_e(sf);const HM=new Qn(({color:r,exposure:e})=>r.mul(e)),WM=new Qn(({color:r,exposure:e})=>(r=r.mul(e),r.div(r.add(1)).clamp())),XM=new Qn(({color:r,exposure:e})=>{r=r.mul(e),r=r.sub(.004).max(0);const t=r.mul(r.mul(6.2).add(.5)),n=r.mul(r.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),qM=new Qn(({color:r})=>{const e=r.mul(r.add(.0245786)).sub(90537e-9),t=r.mul(r.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),$M=new Qn(({color:r,exposure:e})=>{const t=or(Dt(.59719,.076,.0284),Dt(.35458,.90834,.13383),Dt(.04823,.01566,.83777)),n=or(Dt(1.60475,-.10208,-.00327),Dt(-.53108,1.10813,-.07276),Dt(-.07367,-.00605,1.07602));return r=r.mul(e).div(.6),r=t.mul(r),r=qM.call({color:r}),r=n.mul(r),r.clamp()}),jM={[dh]:HM,[fh]:WM,[ph]:XM,[dc]:$M};class rf extends Ns{constructor(e=an,t=gi(1),n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}construct(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===an)return t;const i={exposure:this.exposureNode,color:t},s=jM[n];let o=null;return s?o=s.call(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const YM=(r,e,t)=>We(new rf(r,We(e),We(t)));_e(rf);let va;class et extends Xe{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===et.COORDINATE?"vec4":"vec2"}getUpdateType(){let e=wt.NONE;return this.scope===et.RESOLUTION&&(e=wt.FRAME),this.updateType=e,e}update({renderer:e}){e.getDrawingBufferSize(va)}construct(e){const t=this.scope;if(t===et.COORDINATE)return;let n=null;if(t===et.RESOLUTION)n=_i(va||(va=new Ie));else{const i=rr(new et(et.COORDINATE)),s=new et(et.RESOLUTION);n=i.div(s);let o=n.x,a=n.y;(/top/i.test(t)&&e.isFlipY()||/bottom/i.test(t)&&e.isFlipY()===!1)&&(a=a.oneMinus()),/right/i.test(t)&&(o=o.oneMinus()),n=rr(o,a)}return n}generate(e){return this.scope===et.COORDINATE?e.getFragCoord():super.generate(e)}}et.COORDINATE="coordinate";et.RESOLUTION="resolution";et.TOP_LEFT="topLeft";et.BOTTOM_LEFT="bottomLeft";et.TOP_RIGHT="topRight";et.BOTTOM_RIGHT="bottomRight";ye(et,et.COORDINATE);ye(et,et.RESOLUTION);ye(et,et.TOP_LEFT);const KM=ye(et,et.BOTTOM_LEFT);ye(et,et.TOP_RIGHT);ye(et,et.BOTTOM_RIGHT);_e(et);class zc extends Xe{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this._includes=t}setIncludes(e){return this._includes=e,this}getIncludes(){return this._includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}const Sa=zc;ne(zc);_e(zc);class Vc extends Xe{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}mixAssign(e){return this.mix(e,this.colorNode)}construct(){return this.factorNode}}const of=Vc,ZM=ne(Vc);K("fog",ZM);_e(Vc);class af extends of{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}construct(){return Od(this.nearNode,this.farNode,Co.z.negate())}}const cf=ne(af);K("rangeFog",cf);_e(af);class lf extends of{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}construct(){const e=Co.z.negate(),t=this.densityNode;return t.mul(t,e,e).negate().exp().oneMinus()}}const uf=ne(lf);K("densityFog",uf);_e(lf);class hf extends Xe{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}const kc=hf;_e(hf);const Du=new WeakMap,JM=r=>r.sort((e,t)=>e.id-t.id);class df extends Xe{constructor(e=[]){super("vec3"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}construct(e){const t=this.lightNodes;for(const n of t)n.build(e)}getHash(e){if(this._hash===null){let t="";const n=this.lightNodes;for(const i of n)t+=i.getHash(e)+" ";this._hash=t}return this._hash}getLightNodeByHash(e){const t=this.lightNodes;for(const n of t)if(n.light.uuid===e)return n;return null}fromLights(e=[]){const t=[];e=JM(e);for(const n of e){let i=this.getLightNodeByHash(n.uuid);if(i===null){const s=n.constructor,o=Du.has(s)?Du.get(s):rT;i=We(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const QM=r=>We(new df().fromLights(r)),eT=ne(df);class ff extends kc{constructor(e=null){super(),this.aoNode=e}construct(e){const n=this.aoNode.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}const tT=ff;_e(ff);class pf extends kc{constructor(e=null){super(),this.envNode=e}construct(e){const t=this.envNode,n=e.getNodeProperties(this);let i,s,o;const a=Di(t,{getUVNode:u=>{let h=null;return i===void 0&&(i=kd.negate().reflect(Ts),i=xa.mul(xa).mix(i,Ts).normalize(),i=i.transformDirection(Wi)),u.isCubeTextureNode?h=i:u.isTextureNode&&(s===void 0&&(s=rc(i)),h=s),h},getSamplerLevelNode:()=>xa,getMIPLevelAlgorithmNode:(u,h)=>Uu(u,h)}),c=Di(t,{getUVNode:u=>{let h=null;return u.isCubeTextureNode?h=Pu:u.isTextureNode&&(o===void 0&&(o=rc(Pu),o=rr(o.x,o.y.oneMinus())),h=o),h},getSamplerLevelNode:()=>gi(1),getMIPLevelAlgorithmNode:(u,h)=>Uu(u,h)}),l=_d(a);e.context.radiance.addAssign(l),e.context.iblIrradiance.addAssign(c.mul(Math.PI)),n.radianceContext=l,n.irradianceContext=c}}const nT=pf;_e(pf);const ac=new Map;class mf extends Bn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.name,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null}customProgramCacheKey(){return Lc(this)}build(e){this.construct(e)}construct(e){e.addStack(),e.stack.outputNode=this.constructPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack(),this.normals===!0&&this.constructNormal(e),this.constructDiffuseColor(e),this.constructVariants(e);const t=this.constructLighting(e);e.stack.outputNode=this.constructOutput(e,t,hs.a),e.addFlow("fragment",e.removeStack())}constructPosition(e){const t=e.object;let n=Dn;return this.positionNode!==null&&(n=n.bypass(Dn.assign(this.positionNode))),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&(n=n.bypass(GM(t))),t.isSkinnedMesh===!0&&(n=n.bypass(kM(t))),e.context.vertex=n,zM()}constructDiffuseColor({stack:e,geometry:t}){let n=this.colorNode?Pi(this.colorNode):LM;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Pi(n.xyz.mul(ys("color")),n.a)),e.assign(hs,n);const i=this.opacityNode?gi(this.opacityNode):PM;if(e.assign(hs.a,hs.a.mul(i)),this.alphaTestNode||this.alphaTest>0){const s=this.alphaTestNode?gi(this.alphaTestNode):CM;e.add(hs.a.lessThanEqual(s).discard())}}constructVariants(){}constructNormal({stack:e}){const t=this.normalNode?Dt(this.normalNode):BM;return e.assign(Ts,t),t}constructLights(e){const t=this.envNode||e.environmentNode,n=[];t&&n.push(new nT(t)),e.material.aoMap&&n.push(new tT(Es(e.material.aoMap)));let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=eT([...i.lightNodes,...n])),i}constructLightingModel(){}constructLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:s}=this,a=this.lights===!0||this.lightsNode!==null?this.constructLights(e):null,c=a?this.constructLightingModel(e):null;let l=hs.rgb;return a&&a.hasLight!==!1?l=a.lightingContext(c,n,i):n!==null&&(l=Dt(i!==null?Dd(l,n,i):n)),(s&&s.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(l=l.add(s?Dt(s):NM)),l}constructOutput(e,t,n){const i=e.renderer,s=e.toneMappingNode;s&&(t=s.context({color:t}));let o=Pi(t,n);o=o.colorSpace(i.outputColorSpace);const a=e.fogNode;return a&&(o=Pi(a.mixAssign(o.rgb),o.a)),o}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=An.prototype.toJSON.call(this,e),i=ao(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=s(e.textures),a=s(e.images),c=s(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=iT(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}const gf=mf;function _f(r){if(typeof r!="function"||!r.name)throw new Error(`Node material ${r.name} is not a class`);if(ac.has(r.name))throw new Error(`Redefinition of node material ${r.name}`);ac.set(r.name,r)}function iT(r){const e=ac.get(r);if(e!==void 0)return new e}_f(mf);const sT=new hi;class xf extends gf{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(sT),this.setValues(e)}copy(e){return this.colorNode=e.colorNode,this.opacityNode=e.opacityNode,this.alphaTestNode=e.alphaTestNode,this.lightNode=e.lightNode,this.positionNode=e.positionNode,super.copy(e)}}const vf=xf;_f(xf);let ya=null;class Sf extends kc{constructor(e=null){super(),this.updateType=wt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new Ce,this.colorNode=_i(this.color)}getHash(){return this.light.uuid}constructShadow(e){let t=this.shadowNode;if(t===null){ya===null&&(ya=new vf);const n=this.light.shadow,i=e.getRenderTarget(n.mapSize.width,n.mapSize.height),s=new Mc;s.minFilter=it,s.magFilter=it,i.depthTexture=s,n.camera.updateProjectionMatrix();const o=Ri("bias","float",n);let a=_i(n.matrix).mul(zd);a=a.xyz.div(a.w),a=Dt(a.x,a.y.oneMinus(),a.z);let c=Es(s,a.xy);c=c.mul(.5).add(.5).add(o),t=uo(a.z.lessThan(c).or(a.y.lessThan(1e-6)),1,0),this.rtt=i,this.colorNode=this.colorNode.mul(t),this.shadowNode=t,this.updateBeforeType=wt.RENDER}}construct(e){this.light.castShadow&&this.constructShadow(e)}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:s}=e;s.overrideMaterial=ya,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),i.setRenderTarget(t),i.render(s,n.shadow.camera),i.setRenderTarget(null),s.overrideMaterial=null}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(e){const{light:t}=this;this.color.copy(t.color).multiplyScalar(t.intensity)}}const rT=Sf;_e(Sf);class oT{parseFunction(){console.warn("Abstract function.")}}const aT=oT;class yf{constructor(e,t,n="",i=""){this.type=e,this.inputs=t,this.name=n,this.presicion=i}getCode(){console.warn("Abstract function.")}}yf.isNodeFunction=!0;const cT=yf,lT=/^[fn]*\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)\s*[\-\>]*\s*([a-z_0-9]+)?/i,uT=/[a-z_0-9]+/ig,hT={f32:"float"},dT=r=>{r=r.trim();const e=r.match(lT);if(e!==null&&e.length===4){const t=e[2],n=[];let i=null;for(;(i=uT.exec(t))!==null;)n.push(i);const s=[];let o=0;for(;o<n.length;){const u=n[o++][0];let h=n[o++][0];h=hT[h]||h,o<n.length&&/^[fui]\d{2}$/.test(n[o][0])===!0&&o++,s.push(new Ny(h,u))}const a=r.substring(e[0].length),c=e[1]!==void 0?e[1]:"";return{type:e[3]||"void",inputs:s,name:c,inputsCode:t,blockCode:a}}else throw new Error("FunctionNode: Function is not a WGSL code.")};class fT extends cT{constructor(e){const{type:t,inputs:n,name:i,inputsCode:s,blockCode:o}=dT(e);super(t,n,i),this.inputsCode=s,this.blockCode=o}getCode(e=this.name){const t=this.type!=="void"?"-> "+this.type:"";return`fn ${e} ( ${this.inputsCode.trim()} ) ${t}`+this.blockCode}}const pT=fT;class mT extends aT{parseFunction(e){return new pT(e)}}const gT=mT;function _T(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}class vT{constructor(){this.renderItems=[],this.renderItemsIndex=0,this.opaque=[],this.transparent=[],this.lightsNode=QM([]),this.lightsArray=[]}init(){return this.renderItemsIndex=0,this.opaque.length=0,this.transparent.length=0,this.lightsArray.length=0,this}getNextRenderItem(e,t,n,i,s,o){let a=this.renderItems[this.renderItemsIndex];return a===void 0?(a={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:s,group:o},this.renderItems[this.renderItemsIndex]=a):(a.id=e.id,a.object=e,a.geometry=t,a.material=n,a.groupOrder=i,a.renderOrder=e.renderOrder,a.z=s,a.group=o),this.renderItemsIndex++,a}push(e,t,n,i,s,o){const a=this.getNextRenderItem(e,t,n,i,s,o);(n.transparent===!0?this.transparent:this.opaque).push(a)}unshift(e,t,n,i,s,o){const a=this.getNextRenderItem(e,t,n,i,s,o);(n.transparent===!0?this.transparent:this.opaque).unshift(a)}pushLight(e){this.lightsArray.push(e)}getLightsNode(){return this.lightsNode.fromLights(this.lightsArray)}sort(e,t){this.opaque.length>1&&this.opaque.sort(e||_T),this.transparent.length>1&&this.transparent.sort(t||xT)}finish(){this.lightsNode.fromLights(this.lightsArray);for(let e=this.renderItemsIndex,t=this.renderItems.length;e<t;e++){const n=this.renderItems[e];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.program=null,n.group=null}}}class ST{constructor(){this.lists=new WeakMap,this.lists=new sr}get(e,t){const n=this.lists,i=[e,t];let s=n.get(i);return s===void 0&&(s=new vT,n.set(i,s)),s}dispose(){this.lists=new WeakMap}}const yT=ST;class MT{constructor(){this.depth=!0,this.stencil=!0,this.descriptorGPU=null,this.encoderGPU=null,this.currentPassGPU=null}}class TT{constructor(){this.renderStates=new sr}get(e,t){const n=[e,t];let i=this.renderStates.get(n);return i===void 0&&(i=new MT,this.renderStates.set(n,i)),i}dispose(){this.renderStates=new sr}}const ET=TT;class bT{constructor(e){this.device=e;const t=`
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
`;this.sampler=e.createSampler({minFilter:Qa.Linear}),this.pipelines={},this.mipmapVertexShaderModule=e.createShaderModule({label:"mipmapVertex",code:t}),this.mipmapFragmentShaderModule=e.createShaderModule({label:"mipmapFragment",code:n})}getMipmapPipeline(e){let t=this.pipelines[e];return t===void 0&&(t=this.device.createRenderPipeline({vertex:{module:this.mipmapVertexShaderModule,entryPoint:"main"},fragment:{module:this.mipmapFragmentShaderModule,entryPoint:"main",targets:[{format:e}]},primitive:{topology:qs.TriangleStrip,stripIndexFormat:ir.Uint32},layout:"auto"}),this.pipelines[e]=t),t}generateMipmaps(e,t,n=0){const i=this.getMipmapPipeline(t.format),s=this.device.createCommandEncoder({}),o=i.getBindGroupLayout(0);let a=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:oo.TwoD,baseArrayLayer:n});for(let c=1;c<t.mipLevelCount;c++){const l=e.createView({baseMipLevel:c,mipLevelCount:1,dimension:oo.TwoD,baseArrayLayer:n}),u=s.beginRenderPass({colorAttachments:[{view:l,loadOp:nn.Clear,storeOp:Pn.Store,clearValue:[0,0,0,0]}]}),h=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:this.sampler},{binding:1,resource:a}]});u.setPipeline(i),u.setBindGroup(0,h),u.draw(4,1,0,0),u.end(),a=l}this.device.queue.submit([s.finish()])}}const AT=bT;class wT{constructor(e,t,n){this.device=e,this.properties=t,this.info=n,this.defaultTexture=null,this.depthDefaultTexture=null,this.defaultVideoTexture=null,this.defaultCubeTexture=null,this.defaultSampler=null,this.samplerCache=new Map,this.utils=null}getDefaultSampler(){return this.defaultSampler===null&&(this.defaultSampler=this.device.createSampler({})),this.defaultSampler}getDefaultDepthTexture(){if(this.depthDefaultTexture===null){const e=new Mc;e.image.width=1,e.image.height=1,this._uploadTexture(e),this.depthDefaultTexture=this.getTextureGPU(e)}return this.depthDefaultTexture}getDefaultTexture(){if(this.defaultTexture===null){const e=new St;e.minFilter=it,e.magFilter=it,this._uploadTexture(e),this.defaultTexture=this.getTextureGPU(e)}return this.defaultTexture}getDefaultVideoTexture(){if(this.defaultVideoTexture===null){const e=document.getElementById("video"),t=new Vv(e);t.minFilter=it,t.magFilter=it,this._uploadVideoTexture(t),this.defaultVideoTexture=this.getTextureGPU(t)}return this.defaultVideoTexture}getDefaultCubeTexture(){if(this.defaultCubeTexture===null){const e=new vc;e.minFilter=it,e.magFilter=it,this._uploadTexture(e),this.defaultCubeTexture=this.getTextureGPU(e)}return this.defaultCubeTexture}getTextureGPU(e){return this.properties.get(e).textureGPU}getSampler(e){return this.properties.get(e).samplerGPU}updateTexture(e){let t=!1;const n=this.properties.get(e);if(e.version>0&&n.version!==e.version){const i=e.image;if(i===void 0)console.warn("THREE.WebGPURenderer: Texture marked for update but image is undefined.");else if(i.complete===!1)console.warn("THREE.WebGPURenderer: Texture marked for update but image is incomplete.");else{if(n.initialized===void 0){n.initialized=!0;const s=CT.bind(this);n.disposeCallback=s,e.addEventListener("dispose",s),this.info.memory.textures++}e.isVideoTexture?t=this._uploadVideoTexture(e):t=this._uploadTexture(e)}}return n.initializedRTT===!1&&(n.initializedRTT=!0,t=!0),t}updateSampler(e){const t=[];t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy);const n=t.join();let i=this.samplerCache.get(n);i===void 0&&(i=this.device.createSampler({addressModeU:this._convertAddressMode(e.wrapS),addressModeV:this._convertAddressMode(e.wrapT),addressModeW:this._convertAddressMode(e.wrapR),magFilter:this._convertFilterMode(e.magFilter),minFilter:this._convertFilterMode(e.minFilter),mipmapFilter:this._convertFilterMode(e.minFilter),maxAnisotropy:e.anisotropy}),this.samplerCache.set(n,i));const s=this.properties.get(e);s.samplerGPU=i}initRenderTarget(e){const t=this.properties,n=t.get(e);if(n.initialized===void 0){const i=this.device,s=e.width,o=e.height,a=e.texture,c=a.internalFormat||this._getFormat(a),l=a.name?"_"+a.name:"",u=this._needsMipmaps(a),h=this._getMipLevelCount(a,s,o,u),d=i.createTexture({label:"renderTarget"+l,size:{width:s,height:o,depthOrArrayLayers:1},mipLevelCount:h,format:c,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});this.info.memory.textures++,n.colorTextureGPU=d,n.colorTextureFormat=c;const p=t.get(a);if(p.textureGPU=d,p.initializedRTT=!1,e.depthBuffer===!0){const _=e.depthTexture!==null?this._getFormat(e.depthTexture):W.Depth24PlusStencil8,m=i.createTexture({label:"renderTarget"+l+"_depthBuffer",size:{width:s,height:o,depthOrArrayLayers:1},format:_,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});if(this.info.memory.textures++,n.depthTextureGPU=m,n.depthTextureFormat=_,e.depthTexture!==null){const f=t.get(e.depthTexture);f.textureGPU=m,f.initializedRTT=!1}}const g=RT.bind(this);n.disposeCallback=g,e.addEventListener("dispose",g),n.initialized=!0}}dispose(){this.samplerCache.clear()}_convertAddressMode(e){let t=ma.ClampToEdge;return e===Fi?t=ma.Repeat:e===Js&&(t=ma.MirrorRepeat),t}_convertFilterMode(e){let t=Qa.Linear;return(e===it||e===so||e===js)&&(t=Qa.Nearest),t}_uploadVideoTexture(e){const t=this.device,n=this.properties.get(e),i=t.importExternalTexture({source:e.source.data});return n.textureGPU=i,!0}_uploadTexture(e){let t=!1;const n=this.device,i=e.image,s=this.properties.get(e),{width:o,height:a,depth:c}=this._getSize(e),l=this._needsMipmaps(e),u=this._getDimension(e),h=this._getMipLevelCount(e,o,a,l),d=e.internalFormat||this._getFormat(e);let p=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;l&&(p|=GPUTextureUsage.RENDER_ATTACHMENT);const g={label:e.name,size:{width:o,height:a,depthOrArrayLayers:c},mipLevelCount:h,sampleCount:1,dimension:u,format:d,usage:p};let _=s.textureGPU;return _===void 0&&(_=n.createTexture(g),t=!0),e.isDataTexture||e.isDataArrayTexture||e.isData3DTexture?this._copyBufferToTexture(i,_,g,l):e.isCompressedTexture?this._copyCompressedBufferToTexture(e.mipmaps,_,g):e.isCubeTexture?i.length===6&&this._copyCubeMapToTexture(i,e,_,g,l):e.isRenderTargetTexture?l===!0&&this._generateMipmaps(_,g):e.isDepthTexture!==!0&&i!==null&&this._copyImageToTexture(i,e,_,g,l),s.textureGPU=_,s.version=e.version,t}_copyBufferToTexture(e,t,n,i,s=0){const o=e.data,a=this._getBytesPerTexel(n.format),c=e.width*a;this.device.queue.writeTexture({texture:t,mipLevel:0,origin:{x:0,y:0,z:s}},o,{offset:0,bytesPerRow:c},{width:e.width,height:e.height,depthOrArrayLayers:e.depth!==void 0?e.depth:1}),i===!0&&this._generateMipmaps(t,n,s)}_copyCubeMapToTexture(e,t,n,i,s){for(let o=0;o<6;o++){const a=e[o];a.isDataTexture?this._copyBufferToTexture(a.image,n,i,s,o):this._copyImageToTexture(a,t,n,i,s,o)}}_copyExternalImageToTexture(e,t,n,i,s=0){this.device.queue.copyExternalImageToTexture({source:e},{texture:t,mipLevel:0,origin:{x:0,y:0,z:s}},{width:e.width,height:e.height,depthOrArrayLayers:1}),i&&this._generateMipmaps(t,n,s)}_copyCompressedBufferToTexture(e,t,n){const i=this._getBlockData(n.format);for(let s=0;s<e.length;s++){const o=e[s],a=o.width,c=o.height,l=Math.ceil(a/i.width)*i.byteLength;this.device.queue.writeTexture({texture:t,mipLevel:s},o.data,{offset:0,bytesPerRow:l},{width:Math.ceil(a/i.width)*i.width,height:Math.ceil(c/i.width)*i.width,depthOrArrayLayers:1})}}_generateMipmaps(e,t,n){this.utils===null&&(this.utils=new AT(this.device)),this.utils.generateMipmaps(e,t,n)}_getBlockData(e){if(e===W.BC1RGBAUnorm||e===W.BC1RGBAUnormSRGB)return{byteLength:8,width:4,height:4};if(e===W.BC2RGBAUnorm||e===W.BC2RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===W.BC3RGBAUnorm||e===W.BC3RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===W.BC4RUnorm||e===W.BC4RSNorm)return{byteLength:8,width:4,height:4};if(e===W.BC5RGUnorm||e===W.BC5RGSnorm)return{byteLength:16,width:4,height:4};if(e===W.BC6HRGBUFloat||e===W.BC6HRGBFloat)return{byteLength:16,width:4,height:4};if(e===W.BC7RGBAUnorm||e===W.BC7RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===W.ETC2RGB8Unorm||e===W.ETC2RGB8UnormSRGB)return{byteLength:8,width:4,height:4};if(e===W.ETC2RGB8A1Unorm||e===W.ETC2RGB8A1UnormSRGB)return{byteLength:8,width:4,height:4};if(e===W.ETC2RGBA8Unorm||e===W.ETC2RGBA8UnormSRGB)return{byteLength:16,width:4,height:4};if(e===W.EACR11Unorm)return{byteLength:8,width:4,height:4};if(e===W.EACR11Snorm)return{byteLength:8,width:4,height:4};if(e===W.EACRG11Unorm)return{byteLength:16,width:4,height:4};if(e===W.EACRG11Snorm)return{byteLength:16,width:4,height:4};if(e===W.ASTC4x4Unorm||e===W.ASTC4x4UnormSRGB)return{byteLength:16,width:4,height:4};if(e===W.ASTC5x4Unorm||e===W.ASTC5x4UnormSRGB)return{byteLength:16,width:5,height:4};if(e===W.ASTC5x5Unorm||e===W.ASTC5x5UnormSRGB)return{byteLength:16,width:5,height:5};if(e===W.ASTC6x5Unorm||e===W.ASTC6x5UnormSRGB)return{byteLength:16,width:6,height:5};if(e===W.ASTC6x6Unorm||e===W.ASTC6x6UnormSRGB)return{byteLength:16,width:6,height:6};if(e===W.ASTC8x5Unorm||e===W.ASTC8x5UnormSRGB)return{byteLength:16,width:8,height:5};if(e===W.ASTC8x6Unorm||e===W.ASTC8x6UnormSRGB)return{byteLength:16,width:8,height:6};if(e===W.ASTC8x8Unorm||e===W.ASTC8x8UnormSRGB)return{byteLength:16,width:8,height:8};if(e===W.ASTC10x5Unorm||e===W.ASTC10x5UnormSRGB)return{byteLength:16,width:10,height:5};if(e===W.ASTC10x6Unorm||e===W.ASTC10x6UnormSRGB)return{byteLength:16,width:10,height:6};if(e===W.ASTC10x8Unorm||e===W.ASTC10x8UnormSRGB)return{byteLength:16,width:10,height:8};if(e===W.ASTC10x10Unorm||e===W.ASTC10x10UnormSRGB)return{byteLength:16,width:10,height:10};if(e===W.ASTC12x10Unorm||e===W.ASTC12x10UnormSRGB)return{byteLength:16,width:12,height:10};if(e===W.ASTC12x12Unorm||e===W.ASTC12x12UnormSRGB)return{byteLength:16,width:12,height:12}}_getBytesPerTexel(e){if(e===W.R8Unorm)return 1;if(e===W.R16Float||e===W.RG8Unorm)return 2;if(e===W.RG16Float||e===W.R32Float||e===W.RGBA8Unorm||e===W.RGBA8UnormSRGB)return 4;if(e===W.RG32Float||e===W.RGBA16Float)return 8;if(e===W.RGBA32Float)return 16}_getDimension(e){let t;return e.isData3DTexture?t=Mu.ThreeD:t=Mu.TwoD,t}_getFormat(e){const t=e.format,n=e.type,i=e.colorSpace;let s;if(e.isCompressedTexture===!0)switch(t){case qr:s=i===he?W.BC1RGBAUnormSRGB:W.BC1RGBAUnorm;break;case $r:s=i===he?W.BC2RGBAUnormSRGB:W.BC2RGBAUnorm;break;case jr:s=i===he?W.BC3RGBAUnormSRGB:W.BC3RGBAUnorm;break;case Ra:s=i===he?W.ETC2RGB8UnormSRGB:W.ETC2RGB8Unorm;break;case Ca:s=i===he?W.ETC2RGBA8UnormSRGB:W.ETC2RGBA8Unorm;break;case La:s=i===he?W.ASTC4x4UnormSRGB:W.ASTC4x4Unorm;break;case Na:s=i===he?W.ASTC5x4UnormSRGB:W.ASTC5x4Unorm;break;case Pa:s=i===he?W.ASTC5x5UnormSRGB:W.ASTC5x5Unorm;break;case Ua:s=i===he?W.ASTC6x5UnormSRGB:W.ASTC6x5Unorm;break;case Ia:s=i===he?W.ASTC6x6UnormSRGB:W.ASTC6x6Unorm;break;case Da:s=i===he?W.ASTC8x5UnormSRGB:W.ASTC8x5Unorm;break;case Fa:s=i===he?W.ASTC8x6UnormSRGB:W.ASTC8x6Unorm;break;case Oa:s=i===he?W.ASTC8x8UnormSRGB:W.ASTC8x8Unorm;break;case Ba:s=i===he?W.ASTC10x5UnormSRGB:W.ASTC10x5Unorm;break;case Ga:s=i===he?W.ASTC10x6UnormSRGB:W.ASTC10x6Unorm;break;case za:s=i===he?W.ASTC10x8UnormSRGB:W.ASTC10x8Unorm;break;case Va:s=i===he?W.ASTC10x10UnormSRGB:W.ASTC10x10Unorm;break;case ka:s=i===he?W.ASTC12x10UnormSRGB:W.ASTC12x10Unorm;break;case Ha:s=i===he?W.ASTC12x12UnormSRGB:W.ASTC12x12Unorm;break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}else switch(t){case rn:switch(n){case In:s=i===he?W.RGBA8UnormSRGB:W.RGBA8Unorm;break;case fi:s=W.RGBA16Float;break;case sn:s=W.RGBA32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGBAFormat.",n)}break;case _h:switch(n){case In:s=W.R8Unorm;break;case fi:s=W.R16Float;break;case sn:s=W.R32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RedFormat.",n)}break;case xh:switch(n){case In:s=W.RG8Unorm;break;case fi:s=W.RG16Float;break;case sn:s=W.RG32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGFormat.",n)}break;case Zn:switch(n){case fc:s=W.Depth16Unorm;break;case ui:s=W.Depth24Plus;break;case sn:s=W.Depth32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthFormat.",n)}break;case Bi:switch(n){case Ui:s=W.Depth24PlusStencil8;break;case sn:this.device.features.has(ec.Depth32FloatStencil8)===!1&&console.error('WebGPURenderer: Depth textures with DepthStencilFormat + FloatType can only be used with the "depth32float-stencil8" GPU feature.'),s=W.Depth32FloatStencil8;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthStencilFormat.",n)}break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}return s}_isHTMLImage(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement}_copyImageToTexture(e,t,n,i,s,o){this._isHTMLImage(e)?this._getImageBitmapFromHTML(e,t).then(a=>{this._copyExternalImageToTexture(a,n,i,s,o)}):this._copyExternalImageToTexture(e,n,i,s,o)}_getImageBitmapFromHTML(e,t){const n=e.width,i=e.height,s={};return s.imageOrientation=t.flipY===!0?"flipY":"none",s.premultiplyAlpha=t.premultiplyAlpha===!0?"premultiply":"default",createImageBitmap(e,0,0,n,i,s)}_getImageBitmap(e,t){const n=e.width,i=e.height;if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement){const s={};return s.imageOrientation=t.flipY===!0?"flipY":"none",s.premultiplyAlpha=t.premultiplyAlpha===!0?"premultiply":"default",createImageBitmap(e,0,0,n,i,s)}else return Promise.resolve(e)}_getMipLevelCount(e,t,n,i){let s;return e.isCompressedTexture?s=e.mipmaps.length:i?s=Math.floor(Math.log2(Math.max(t,n)))+1:s=1,s}_getSize(e){const t=e.image;let n,i,s;if(e.isCubeTexture){const o=t.length>0?t[0].image||t[0]:null;n=o?o.width:1,i=o?o.height:1,s=6}else t!==null?(n=t.width,i=t.height,s=t.depth!==void 0?t.depth:1):n=i=s=1;return{width:n,height:i,depth:s}}_needsMipmaps(e){return e.isCompressedTexture!==!0&&e.generateMipmaps===!0&&e.minFilter!==it&&e.minFilter!==It}}function RT(r){const e=r.target,t=this.properties,n=t.get(e);e.removeEventListener("dispose",n.disposeCallback),n.colorTextureGPU.destroy(),t.remove(e.texture),this.info.memory.textures--,e.depthBuffer===!0&&(n.depthTextureGPU.destroy(),this.info.memory.textures--,e.depthTexture!==null&&t.remove(e.depthTexture)),t.remove(e)}function CT(r){const e=r.target,t=this.properties.get(e);t.textureGPU.destroy(),e.removeEventListener("dispose",t.disposeCallback),this.properties.remove(e),this.info.memory.textures--}const LT=wT;let Vs;const bi=new Ce;class NT{constructor(e,t){this.renderer=e,this.properties=t,this.boxMesh=null,this.boxMeshNode=null,this.forceClear=!1}clear(){this.forceClear=!0}update(e,t,n){const i=this.renderer,s=e.isScene===!0?e.backgroundNode||this.properties.get(e).backgroundNode||e.background:null;let o=this.forceClear;if(s===null)bi.copy(i._clearColor),Vs=i._clearAlpha;else if(s.isColor===!0)bi.copy(s),Vs=1,o=!0;else if(s.isNode===!0){const l=this.properties.get(e),u=s;bi.copy(i._clearColor),Vs=i._clearAlpha;let h=this.boxMesh;if(h===null){this.boxMeshNode=Di(u,{getUVNode:()=>Vd});const p=new vf;p.colorNode=this.boxMeshNode,p.side=Gt,p.depthTest=!1,p.depthWrite=!1,p.fog=!1,this.boxMesh=h=new Kt(new As(1,1,1),p),h.frustumCulled=!1,h.onBeforeRender=function(g,_,m){const f=m.far;this.matrixWorld.makeScale(f,f,f).copyPosition(m.matrixWorld)}}const d=u.getCacheKey();l.backgroundCacheKey!==d&&(this.boxMeshNode.node=u,h.material.needsUpdate=!0,l.backgroundCacheKey=d),t.unshift(h,h.geometry,h.material,0,0,null)}else console.error("THREE.WebGPURenderer: Unsupported background configuration.",s);const a=n.descriptorGPU.colorAttachments[0],c=n.descriptorGPU.depthStencilAttachment;i.autoClear===!0||o===!0?(i.autoClearColor===!0?(bi.multiplyScalar(Vs),a.clearValue={r:bi.r,g:bi.g,b:bi.b,a:Vs},a.loadOp=nn.Clear,a.storeOp=Pn.Store):(a.loadOp=nn.Load,a.storeOp=Pn.Store),n.depth&&(i.autoClearDepth===!0?(c.depthClearValue=i._clearDepth,c.depthLoadOp=nn.Clear,c.depthStoreOp=Pn.Store):(c.depthLoadOp=nn.Load,c.depthStoreOp=Pn.Store)),n.stencil&&(i.autoClearStencil===!0?(c.stencilClearValue=i._clearStencil,c.stencilLoadOp=nn.Clear,c.stencilStoreOp=Pn.Store):(c.stencilLoadOp=nn.Load,c.stencilStoreOp=Pn.Store))):(a.loadOp=nn.Load,a.storeOp=Pn.Store,n.depth&&(c.depthLoadOp=nn.Load,c.depthStoreOp=Pn.Store),n.stencil&&(c.stencilLoadOp=nn.Load,c.stencilStoreOp=Pn.Store)),this.forceClear=!1}}const PT=NT;class UT{constructor(e=""){this.name=e,this.visibility=null,this.type=null,this.isShared=!1}setVisibility(e){this.visibility=e}}const Hc=UT;function Mf(r){return r+(li-r%li)%li}function IT(r,e=4){const n=Tf(e)*r;return Mf(n)}function Tf(r){return r+(4-r%4)%4}class DT extends Hc{constructor(e,t,n=null){super(e),this.isBuffer=!0,this.bytesPerElement=Float32Array.BYTES_PER_ELEMENT,this.type=t,this.visibility=GPUShaderStage.VERTEX,this.usage=GPUBufferUsage.COPY_DST,this.buffer=n,this.bufferGPU=null}getByteLength(){return Mf(this.buffer.byteLength)}getBuffer(){return this.buffer}update(){return!0}}const Ef=DT;class FT extends Ef{constructor(e,t=null){super(e,Eo.UniformBuffer,t),this.isUniformBuffer=!0,this.usage|=GPUBufferUsage.UNIFORM}}const bf=FT;class OT extends bf{constructor(e){super(e),this.isUniformsGroup=!0,this.uniforms=[]}addUniform(e){return this.uniforms.push(e),this}removeUniform(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}getBuffer(){let e=this.buffer;if(e===null){const t=this.getByteLength();e=new Float32Array(new ArrayBuffer(t)),this.buffer=e}return e}getByteLength(){let e=0;for(let t=0,n=this.uniforms.length;t<n;t++){const i=this.uniforms[t],s=e%li,o=li-s;s!==0&&o-i.boundary<0?e+=li-s:s%i.boundary!==0&&(e+=s%i.boundary),i.offset=e/this.bytesPerElement,e+=i.itemSize*this.bytesPerElement}return Math.ceil(e/li)*li}update(){let e=!1;for(const t of this.uniforms)this.updateByType(t)===!0&&(e=!0);return e}updateByType(e){if(e.isFloatUniform)return this.updateNumber(e);if(e.isVector2Uniform)return this.updateVector2(e);if(e.isVector3Uniform)return this.updateVector3(e);if(e.isVector4Uniform)return this.updateVector4(e);if(e.isColorUniform)return this.updateColor(e);if(e.isMatrix3Uniform)return this.updateMatrix3(e);if(e.isMatrix4Uniform)return this.updateMatrix4(e);console.error("THREE.WebGPUUniformsGroup: Unsupported uniform type.",e)}updateNumber(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return n[s]!==i&&(n[s]=i,t=!0),t}updateVector2(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y)&&(n[s+0]=i.x,n[s+1]=i.y,t=!0),t}updateVector3(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y||n[s+2]!==i.z)&&(n[s+0]=i.x,n[s+1]=i.y,n[s+2]=i.z,t=!0),t}updateVector4(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y||n[s+2]!==i.z||n[s+4]!==i.w)&&(n[s+0]=i.x,n[s+1]=i.y,n[s+2]=i.z,n[s+3]=i.w,t=!0),t}updateColor(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.r||n[s+1]!==i.g||n[s+2]!==i.b)&&(n[s+0]=i.r,n[s+1]=i.g,n[s+2]=i.b,t=!0),t}updateMatrix3(e){let t=!1;const n=this.buffer,i=e.getValue().elements,s=e.offset;return(n[s+0]!==i[0]||n[s+1]!==i[1]||n[s+2]!==i[2]||n[s+4]!==i[3]||n[s+5]!==i[4]||n[s+6]!==i[5]||n[s+8]!==i[6]||n[s+9]!==i[7]||n[s+10]!==i[8])&&(n[s+0]=i[0],n[s+1]=i[1],n[s+2]=i[2],n[s+4]=i[3],n[s+5]=i[4],n[s+6]=i[5],n[s+8]=i[6],n[s+9]=i[7],n[s+10]=i[8],t=!0),t}updateMatrix4(e){let t=!1;const n=this.buffer,i=e.getValue().elements,s=e.offset;return BT(n,i,s)===!1&&(n.set(i,s),t=!0),t}}function BT(r,e,t){for(let n=0,i=e.length;n<i;n++)if(r[t+n]!==e[n])return!1;return!0}const GT=OT;class Xi{constructor(e,t=null){this.name=e,this.value=t,this.boundary=0,this.itemSize=0,this.offset=0}setValue(e){this.value=e}getValue(){return this.value}}class zT extends Xi{constructor(e,t=0){super(e,t),this.isFloatUniform=!0,this.boundary=4,this.itemSize=1}}class VT extends Xi{constructor(e,t=new Ie){super(e,t),this.isVector2Uniform=!0,this.boundary=8,this.itemSize=2}}class kT extends Xi{constructor(e,t=new A){super(e,t),this.isVector3Uniform=!0,this.boundary=16,this.itemSize=3}}class HT extends Xi{constructor(e,t=new Ye){super(e,t),this.isVector4Uniform=!0,this.boundary=16,this.itemSize=4}}class WT extends Xi{constructor(e,t=new Ce){super(e,t),this.isColorUniform=!0,this.boundary=16,this.itemSize=3}}class XT extends Xi{constructor(e,t=new Ve){super(e,t),this.isMatrix3Uniform=!0,this.boundary=48,this.itemSize=12}}class qT extends Xi{constructor(e,t=new Pe){super(e,t),this.isMatrix4Uniform=!0,this.boundary=64,this.itemSize=16}}class $T extends zT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class jT extends VT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class YT extends kT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class KT extends HT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class ZT extends WT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class JT extends XT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class QT extends qT{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class eE extends Hc{constructor(e,t){super(e),this.isSampler=!0,this.texture=t,this.type=Eo.Sampler,this.visibility=GPUShaderStage.FRAGMENT,this.samplerGPU=null}getTexture(){return this.texture}}const tE=eE;class nE extends tE{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}const iE=nE;class Af extends Hc{constructor(e,t){super(e),this.isSampledTexture=!0,this.texture=t,this.dimension=oo.TwoD,this.type=Eo.SampledTexture,this.visibility=GPUShaderStage.FRAGMENT,this.aspect=t.isDepthTexture?Tu.DepthOnly:Tu.All,this.textureGPU=null}getTexture(){return this.texture}}class sE extends Af{constructor(e,t){super(e,t),this.isSampledCubeTexture=!0,this.dimension=oo.Cube}}class rE extends Af{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}class oE extends sE{constructor(e,t){super(e,t.value),this.textureNode=t}getTexture(){return this.textureNode.value}}class aE extends Ef{constructor(e,t){super(e,Eo.StorageBuffer,t.array),this.isStorageBuffer=!0,this.usage|=GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE,this.attribute=t}}const cE=aE;class lE extends mi{constructor(e,t,n={}){super(e,t,n)}}const uE=lE,Fu={vertex:GPUShaderStage.VERTEX,fragment:GPUShaderStage.FRAGMENT,compute:GPUShaderStage.COMPUTE},hE={instance:!0},dE={float:"f32",int:"i32",uint:"u32",bool:"bool",color:"vec3<f32>",vec2:"vec2<f32>",ivec2:"vec2<i32>",uvec2:"vec2<u32>",bvec2:"vec2<bool>",vec3:"vec3<f32>",ivec3:"vec3<i32>",uvec3:"vec3<u32>",bvec3:"vec3<bool>",vec4:"vec4<f32>",ivec4:"vec4<i32>",uvec4:"vec4<u32>",bvec4:"vec4<bool>",mat3:"mat3x3<f32>",imat3:"mat3x3<i32>",umat3:"mat3x3<u32>",bmat3:"mat3x3<bool>",mat4:"mat4x4<f32>",imat4:"mat4x4<i32>",umat4:"mat4x4<u32>",bmat4:"mat4x4<bool>"},fE={dFdx:"dpdx",dFdy:"dpdy",mod:"threejs_mod",lessThanEqual:"threejs_lessThanEqual",inversesqrt:"inverseSqrt"},Ou={lessThanEqual:new Sa(`
fn threejs_lessThanEqual( a : vec3<f32>, b : vec3<f32> ) -> vec3<bool> {

	return vec3<bool>( a.x <= b.x, a.y <= b.y, a.z <= b.z );

}
`),mod:new Sa(`
fn threejs_mod( x : f32, y : f32 ) -> f32 {

	return x - y * floor( x / y );

}
`),repeatWrapping:new Sa(`
fn threejs_repeatWrapping( uv : vec2<f32>, dimension : vec2<u32> ) -> vec2<u32> {

	let uvScaled = vec2<u32>( uv * vec2<f32>( dimension ) );

	return ( ( uvScaled % dimension ) + dimension ) % dimension;

}
`)};class pE extends Cy{constructor(e,t){super(e,t,new gT),this.bindings={vertex:[],fragment:[],compute:[]},this.bindingsOffset={vertex:0,fragment:0,compute:0},this.uniformsGroup={},this.builtins={vertex:new Map,fragment:new Map,compute:new Map,attribute:new Map}}build(){const{object:e,material:t}=this;return t!==null?gf.fromMaterial(t).build(this):this.addFlow("compute",e),super.build()}getSampler(e,t,n=this.shaderStage){if(n==="fragment")return`textureSample( ${e}, ${e}_sampler, ${t} )`;{this._include("repeatWrapping");const i=`textureDimensions( ${e}, 0 )`;return`textureLoad( ${e}, threejs_repeatWrapping( ${t}, ${i} ), 0 )`}}getVideoSampler(e,t,n=this.shaderStage){if(n==="fragment")return`textureSampleBaseClampToEdge( ${e}, ${e}_sampler, vec2<f32>( ${t}.x, 1.0 - ${t}.y ) )`;console.error(`WebGPURenderer: THREE.VideoTexture does not support ${n} shader.`)}getSamplerLevel(e,t,n,i=this.shaderStage){if(i==="fragment")return`textureSampleLevel( ${e}, ${e}_sampler, ${t}, ${n} )`;{this._include("repeatWrapping");const s=`textureDimensions( ${e}, 0 )`;return`textureLoad( ${e}, threejs_repeatWrapping( ${t}, ${s} ), i32( ${n} ) )`}}getTexture(e,t,n,i=this.shaderStage){let s=null;return e.isVideoTexture===!0?s=this.getVideoSampler(t,n,i):s=this.getSampler(t,n,i),s}getTextureLevel(e,t,n,i,s=this.shaderStage){let o=null;return e.isVideoTexture===!0?o=this.getVideoSampler(t,n,s):o=this.getSamplerLevel(t,n,i,s),o}getPropertyName(e,t=this.shaderStage){if(e.isNodeVarying===!0&&e.needsInterpolation===!0){if(t==="vertex")return`NodeVaryings.${e.name}`}else if(e.isNodeUniform===!0){const n=e.name,i=e.type;return i==="texture"||i==="cubeTexture"?n:i==="buffer"||i==="storageBuffer"?`NodeBuffer_${e.node.id}.${n}`:`NodeUniforms.${n}`}return super.getPropertyName(e)}getBindings(){const e=this.bindings;return this.material!==null?[...e.vertex,...e.fragment]:e.compute}getUniformFromNode(e,t,n){const i=super.getUniformFromNode(e,t,n),s=this.getDataFromNode(e,t);if(s.uniformGPU===void 0){let o;const a=this.bindings[t];if(n==="texture"||n==="cubeTexture"){const c=new iE(`${i.name}_sampler`,i.node);let l=null;n==="texture"?l=new rE(i.name,i.node):n==="cubeTexture"&&(l=new oE(i.name,i.node));const u=a[a.length-1],h=u&&u.isUniformsGroup?a.length-1:a.length;t==="fragment"?(a.splice(h,0,c,l),o=[c,l]):(a.splice(h,0,l),o=[l])}else if(n==="buffer"||n==="storageBuffer"){const c=n==="storageBuffer"?cE:bf,l=new c("NodeBuffer_"+e.id,e.value);l.setVisibility(Fu[t]);const u=a[a.length-1],h=u&&u.isUniformsGroup?a.length-1:a.length;a.splice(h,0,l),o=l}else{let c=this.uniformsGroup[t];if(c===void 0&&(c=new GT("nodeUniforms"),c.setVisibility(Fu[t]),this.uniformsGroup[t]=c,a.push(c)),e.isArrayUniformNode===!0){o=[];for(const l of e.nodes){const u=this._getNodeUniform(l,n);u.boundary=IT(u.itemSize),u.itemSize=Tf(u.itemSize),c.addUniform(u),o.push(u)}}else o=this._getNodeUniform(i,n),c.addUniform(o)}s.uniformGPU=o,t==="vertex"&&(this.bindingsOffset.fragment=a.length)}return i}isReference(e){return super.isReference(e)||e==="texture_2d"||e==="texture_cube"}getBuiltin(e,t,n,i=this.shaderStage){const s=this.builtins[i];return s.has(e)===!1&&s.set(e,{name:e,property:t,type:n}),t}getInstanceIndex(){return this.shaderStage==="vertex"?this.getBuiltin("instance_index","instanceIndex","u32","attribute"):"instanceIndex"}getFrontFacing(){return this.getBuiltin("front_facing","isFront","bool")}getFragCoord(){return this.getBuiltin("position","fragCoord","vec4<f32>","fragment")}isFlipY(){return!1}getAttributes(e){const t=[];if(e==="compute"&&this.getBuiltin("global_invocation_id","id","vec3<u32>","attribute"),e==="vertex"||e==="compute"){for(const{name:s,property:o,type:a}of this.builtins.attribute.values())t.push(`@builtin( ${s} ) ${o} : ${a}`);const n=this.attributes,i=n.length;for(let s=0;s<i;s++){const o=n[s],a=o.name,c=this.getType(o.type);t.push(`@location( ${s} ) ${a} : ${c}`)}}return t.join(`,
	`)}getVars(e){const t=[],n=this.vars[e];for(const i of n){const s=i.name,o=this.getType(i.type);t.push(`	var ${s} : ${o};`)}return`
${t.join(`
`)}
`}getVaryings(e){const t=[];if(e==="vertex"&&this.getBuiltin("position","Vertex","vec4<f32>","vertex"),e==="vertex"||e==="fragment"){const i=this.varyings,s=this.vars[e];for(let o=0;o<i.length;o++){const a=i[o];a.needsInterpolation?t.push(`@location( ${o} ) ${a.name} : ${this.getType(a.type)}`):s.includes(a)===!1&&s.push(a)}}for(const{name:i,property:s,type:o}of this.builtins[e].values())t.push(`@builtin( ${i} ) ${s} : ${o}`);const n=t.join(`,
	`);return e==="vertex"?this._getWGSLStruct("NodeVaryingsStruct","	"+n):n}getUniforms(e){const t=this.uniforms[e],n=[],i=[],s=[];let o=this.bindingsOffset[e];for(const c of t)if(c.type==="texture"||c.type==="cubeTexture"){e==="fragment"&&n.push(`@group( 0 ) @binding( ${o++} ) var ${c.name}_sampler : sampler;`);const l=c.node.value;let u;l.isCubeTexture===!0?u="texture_cube<f32>":l.isDepthTexture===!0?u="texture_depth_2d":l.isVideoTexture===!0?u="texture_external":u="texture_2d<f32>",n.push(`@group( 0 ) @binding( ${o++} ) var ${c.name} : ${u};`)}else if(c.type==="buffer"||c.type==="storageBuffer"){const l=c.node,u=this.getType(l.bufferType),h=l.bufferCount,d=h>0?", "+h:"",p=`	${c.name} : array< ${u}${d} >
`,g=l.isStorageBufferNode?"storage,read_write":"uniform";i.push(this._getWGSLStructBinding("NodeBuffer_"+l.id,p,g,o++))}else{const l=this.getType(this.getVectorType(c.type));if(Array.isArray(c.value)===!0){const u=c.value.length;s.push(`uniform ${l}[ ${u} ] ${c.name}`)}else s.push(`	${c.name} : ${l}`)}let a=n.join(`
`);return a+=i.join(`
`),s.length>0&&(a+=this._getWGSLStructBinding("NodeUniforms",s.join(`,
`),"uniform",o++)),a}buildCode(){const e=this.material!==null?{fragment:{},vertex:{}}:{compute:{}};for(const t in e){let n=`// code

`;n+=this.flowCode[t];const i=this.flowNodes[t],s=i[i.length-1];for(const a of i){const c=this.getFlowData(a),l=a.name;l&&(n.length>0&&(n+=`
`),n+=`	// flow -> ${l}
	`),n+=`${c.code}
	`,a===s&&t!=="compute"&&(n+=`// result
	`,t==="vertex"?n+="NodeVaryings.Vertex = ":t==="fragment"&&(n+="return "),n+=`${c.result};`)}const o=e[t];o.uniforms=this.getUniforms(t),o.attributes=this.getAttributes(t),o.varyings=this.getVaryings(t),o.vars=this.getVars(t),o.codes=this.getCodes(t),o.flow=n}this.material!==null?(this.vertexShader=this._getWGSLVertexCode(e.vertex),this.fragmentShader=this._getWGSLFragmentCode(e.fragment)):this.computeShader=this._getWGSLComputeCode(e.compute,(this.object.workgroupSize||[64]).join(", "))}getRenderTarget(e,t,n){return new uE(e,t,n)}getMethod(e){return Ou[e]!==void 0&&this._include(e),fE[e]||e}getType(e){return dE[e]||e}isAvailable(e){return hE[e]===!0}_include(e){Ou[e].build(this)}_getNodeUniform(e,t){if(t==="float")return new $T(e);if(t==="vec2")return new jT(e);if(t==="vec3")return new YT(e);if(t==="vec4")return new KT(e);if(t==="color")return new ZT(e);if(t==="mat3")return new JT(e);if(t==="mat4")return new QT(e);throw new Error(`Uniform "${t}" not declared.`)}_getWGSLVertexCode(e){return`${this.getSignature()}

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
};`}_getWGSLStructBinding(e,t,n,i=0,s=0){const o=e+"Struct";return`${this._getWGSLStruct(o,t)}
@binding( ${i} ) @group( ${s} )
var<${n}> ${e} : ${o};`}}const Bu=pE;class mE{constructor(e,t){this.renderer=e,this.properties=t,this.nodeFrame=new Nu}get(e){const t=this.properties.get(e);let n=t.nodeBuilder;return n===void 0&&(n=new Bu(e.object,this.renderer),n.material=e.material,n.lightsNode=e.lightsNode,n.environmentNode=this.getEnvironmentNode(e.scene),n.fogNode=this.getFogNode(e.scene),n.toneMappingNode=this.getToneMappingNode(),n.build(),t.nodeBuilder=n),n}getForCompute(e){const t=this.properties.get(e);let n=t.nodeBuilder;return n===void 0&&(n=new Bu(e,this.renderer),n.build(),t.nodeBuilder=n),n}remove(e){const t=this.properties.get(e);delete t.nodeBuilder}getEnvironmentNode(e){return e.environmentNode||this.properties.get(e).environmentNode||null}getFogNode(e){return e.fogNode||this.properties.get(e).fogNode||null}getToneMappingNode(){return this.renderer.toneMappingNode||this.properties.get(this.renderer).toneMappingNode||null}getCacheKey(e,t){const n=this.getEnvironmentNode(e),i=this.getFogNode(e),s=this.getToneMappingNode(),o=[];return t&&o.push("lightsNode:"+t.getCacheKey()),n&&o.push("environmentNode:"+n.getCacheKey()),i&&o.push("fogNode:"+i.getCacheKey()),s&&o.push("toneMappingNode:"+s.getCacheKey()),"{"+o.join(",")+"}"}updateToneMapping(){const e=this.renderer,t=this.properties.get(e),n=e.toneMapping;n!==an?t.toneMapping!==n&&(t.toneMappingNode=YM(n,Ri("toneMappingExposure","float",e)),t.toneMapping=n):(delete t.toneMappingNode,delete t.toneMapping)}updateBackground(e){const t=this.properties.get(e),n=e.background;if(n){if(t.background!==n){let i=null;if(n.isCubeTexture===!0)i=oc(n,Id(zd,sc));else if(n.isTexture===!0){let s=null;n.mapping===no||n.mapping===io?s=rc():s=KM,i=Es(n,s)}else n.isColor!==!0&&console.error("WebGPUNodes: Unsupported background configuration.",n);t.backgroundNode=i,t.background=n}}else t.backgroundNode&&(delete t.backgroundNode,delete t.background)}updateFog(e){const t=this.properties.get(e),n=e.fog;if(n){if(t.fog!==n){let i=null;n.isFogExp2?i=uf(Ri("color","color",n),Ri("density","float",n)):n.isFog?i=cf(Ri("color","color",n),Ri("near","float",n),Ri("far","float",n)):console.error("WebGPUNodes: Unsupported fog configuration.",n),t.fogNode=i,t.fog=n}}else delete t.fogNode,delete t.fog}updateEnvironment(e){const t=this.properties.get(e),n=e.environment;if(n){if(t.environment!==n){let i=null;n.isCubeTexture===!0?i=oc(n):n.isTexture===!0?i=Es(n):console.error("WebGPUNodes: Unsupported environment configuration.",n),t.environmentNode=i,t.environment=n}}else t.environmentNode&&(delete t.environmentNode,delete t.environment)}getNodeFrame(e){const t=this.nodeFrame;return t.scene=e.scene,t.object=e.object,t.camera=e.camera,t.renderer=e.renderer,t.material=e.material,t}updateBefore(e){const t=this.getNodeFrame(e),n=this.get(e);for(const i of n.updateBeforeNodes)t.updateBeforeNode(i)}update(e){const t=this.getNodeFrame(e),n=this.get(e);for(const i of n.updateNodes)t.updateNode(i)}dispose(){this.nodeFrame=new Nu}}const gE=mE;class _E{constructor(e){this.renderer=e}getCurrentColorSpace(){const e=this.renderer,t=e.getRenderTarget();return t!==null?t.texture.colorSpace:e.outputColorSpace}getCurrentColorFormat(){let e;const t=this.renderer,n=t.getRenderTarget();return n!==null?e=t._properties.get(n).colorTextureFormat:e=W.BGRA8Unorm,e}getCurrentDepthStencilFormat(){let e;const t=this.renderer,n=t.getRenderTarget();return n!==null?e=t._properties.get(n).depthTextureFormat:e=W.Depth24PlusStencil8,e}getPrimitiveTopology(e,t){if(e.isPoints)return qs.PointList;if(e.isLineSegments||e.isMesh&&t.wireframe===!0)return qs.LineList;if(e.isLine)return qs.LineStrip;if(e.isMesh)return qs.TriangleList}getSampleCount(){return this.renderer._parameters.sampleCount}}const xE=_E;console.info("THREE.WebGPURenderer: Modified Matrix4.makePerspective() and Matrix4.makeOrtographic() to work with WebGPU, see https://github.com/mrdoob/three.js/issues/20276.");Pe.prototype.makePerspective=function(r,e,t,n,i,s){const o=this.elements,a=2*i/(e-r),c=2*i/(t-n),l=(e+r)/(e-r),u=(t+n)/(t-n),h=-s/(s-i),d=-s*i/(s-i);return o[0]=a,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this};Pe.prototype.makeOrthographic=function(r,e,t,n,i,s){const o=this.elements,a=1/(e-r),c=1/(t-n),l=1/(s-i),u=(e+r)*a,h=(t+n)*c,d=i*l;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-1*l,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this};ar.prototype.setFromProjectionMatrix=function(r){const e=this.planes,t=r.elements,n=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],h=t[8],d=t[9],p=t[10],g=t[11],_=t[12],m=t[13],f=t[14],y=t[15];return e[0].setComponents(o-n,u-a,g-h,y-_).normalize(),e[1].setComponents(o+n,u+a,g+h,y+_).normalize(),e[2].setComponents(o+i,u+c,g+d,y+m).normalize(),e[3].setComponents(o-i,u-c,g-d,y-m).normalize(),e[4].setComponents(o-s,u-l,g-p,y-f).normalize(),e[5].setComponents(s,l,p,f).normalize(),this};const Ma=new ar,Wr=new Pe,ks=new A;class vE{constructor(e={}){this.isWebGPURenderer=!0,this.domElement=e.canvas!==void 0?e.canvas:this._createCanvasElement(),this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.outputColorSpace=he,this.toneMapping=an,this.toneMappingExposure=1,this.sortObjects=!0,this._parameters=Object.assign({},e),this._pixelRatio=1,this._width=this.domElement.width,this._height=this.domElement.height,this._viewport=null,this._scissor=null,this._adapter=null,this._device=null,this._context=null,this._colorBuffer=null,this._depthBuffer=null,this._info=null,this._properties=null,this._attributes=null,this._geometries=null,this._nodes=null,this._bindings=null,this._objects=null,this._renderPipelines=null,this._computePipelines=null,this._renderLists=null,this._renderStates=null,this._textures=null,this._background=null,this._animation=new D0,this._currentRenderState=null,this._opaqueSort=null,this._transparentSort=null,this._clearAlpha=1,this._clearColor=new Ce(0),this._clearDepth=1,this._clearStencil=0,this._renderTarget=null,this._initialized=!1,this._parameters.antialias=e.antialias===!0,this._parameters.antialias===!0?this._parameters.sampleCount=e.sampleCount===void 0?4:e.sampleCount:this._parameters.sampleCount=1,this._parameters.requiredLimits=e.requiredLimits===void 0?{}:e.requiredLimits,this.shadow={shadowMap:{}}}async init(){if(this._initialized===!0)throw new Error("WebGPURenderer: Device has already been initialized.");const e=this._parameters,t={powerPreference:e.powerPreference},n=await navigator.gpu.requestAdapter(t);if(n===null)throw new Error("WebGPURenderer: Unable to create WebGPU adapter.");const i=Object.values(ec),s=[];for(const l of i)n.features.has(l)&&s.push(l);const o={requiredFeatures:s,requiredLimits:e.requiredLimits},a=await n.requestDevice(o),c=e.context!==void 0?e.context:this.domElement.getContext("webgpu");this._adapter=n,this._device=a,this._context=c,this._configureContext(),this._info=new X0,this._properties=new $0,this._attributes=new z0(a),this._geometries=new H0(this._attributes,this._properties,this._info),this._textures=new LT(a,this._properties,this._info),this._utils=new xE(this),this._nodes=new gE(this,this._properties),this._objects=new B0(this,this._nodes,this._geometries,this._info),this._computePipelines=new sS(a,this._nodes),this._renderPipelines=new nS(a,this._nodes,this._utils),this._bindings=this._renderPipelines.bindings=new oS(a,this._info,this._properties,this._textures,this._renderPipelines,this._computePipelines,this._attributes,this._nodes),this._renderLists=new yT,this._renderStates=new ET,this._background=new PT(this,this._properties),this._setupColorBuffer(),this._setupDepthBuffer(),this._animation.setNodes(this._nodes),this._animation.start(),this._initialized=!0}async render(e,t){this._initialized===!1&&await this.init();const n=this._nodes.nodeFrame,i=n.renderId,s=this._currentRenderState,o=this._renderStates.get(e,t),a=this._renderTarget;this._currentRenderState=o,n.renderId++,this._animation.isAnimating===!1&&n.update(),e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),this._info.autoReset===!0&&this._info.reset(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ma.setFromProjectionMatrix(Wr);const c=this._renderLists.get(e,t);c.init(),this._projectObject(e,t,0,c),c.finish(),this.sortObjects===!0&&c.sort(this._opaqueSort,this._transparentSort),o.descriptorGPU={colorAttachments:[{view:null}],depthStencilAttachment:{view:null}};const l=o.descriptorGPU.colorAttachments[0],u=o.descriptorGPU.depthStencilAttachment;if(a!==null){this._textures.initRenderTarget(a);const f=this._properties.get(a);l.view=f.colorTextureGPU.createView(),u.view=f.depthTextureGPU.createView(),o.stencil=a.depthTexture?a.depthTexture.format!==Zn:!0}else this._parameters.antialias===!0?(l.view=this._colorBuffer.createView(),l.resolveTarget=this._context.getCurrentTexture().createView()):(l.view=this._context.getCurrentTexture().createView(),l.resolveTarget=void 0),u.view=this._depthBuffer.createView();this._nodes.updateEnvironment(e),this._nodes.updateFog(e),this._nodes.updateBackground(e),this._nodes.updateToneMapping(),this._background.update(e,c,o);const h=this._device;o.encoderGPU=h.createCommandEncoder({}),o.currentPassGPU=o.encoderGPU.beginRenderPass(o.descriptorGPU);const d=this._viewport;if(d!==null){const f=Math.floor(d.width*this._pixelRatio),y=Math.floor(d.height*this._pixelRatio);o.currentPassGPU.setViewport(d.x,d.y,f,y,d.minDepth,d.maxDepth)}const p=this._scissor;if(p!==null){const f=Math.floor(p.width*this._pixelRatio),y=Math.floor(p.height*this._pixelRatio);o.currentPassGPU.setScissorRect(p.x,p.y,f,y)}const g=c.opaque,_=c.transparent,m=c.lightsNode;g.length>0&&this._renderObjects(g,t,e,m,o),_.length>0&&this._renderObjects(_,t,e,m,o),o.currentPassGPU.end(),h.queue.submit([o.encoderGPU.finish()]),n.renderId=i,this._currentRenderState=s}setAnimationLoop(e){this._initialized===!1&&this.init();const t=this._animation;t.setAnimationLoop(e),e===null?t.stop():t.start()}async getArrayBuffer(e){return await this._attributes.getArrayBuffer(e)}getContext(){return this._context}getPixelRatio(){return this._pixelRatio}getDrawingBufferSize(e){return e.set(this._width*this._pixelRatio,this._height*this._pixelRatio).floor()}getSize(e){return e.set(this._width,this._height)}setPixelRatio(e=1){this._pixelRatio=e,this.setSize(this._width,this._height,!1)}setDrawingBufferSize(e,t,n){this._width=e,this._height=t,this._pixelRatio=n,this.domElement.width=Math.floor(e*n),this.domElement.height=Math.floor(t*n),this._configureContext(),this._setupColorBuffer(),this._setupDepthBuffer()}setSize(e,t,n=!0){this._width=e,this._height=t,this.domElement.width=Math.floor(e*this._pixelRatio),this.domElement.height=Math.floor(t*this._pixelRatio),n===!0&&(this.domElement.style.width=e+"px",this.domElement.style.height=t+"px"),this._configureContext(),this._setupColorBuffer(),this._setupDepthBuffer()}setOpaqueSort(e){this._opaqueSort=e}setTransparentSort(e){this._transparentSort=e}getScissor(e){const t=this._scissor;return e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e}setScissor(e,t,n,i){e===null?this._scissor=null:this._scissor={x:e,y:t,width:n,height:i}}copyFramebufferToRenderTarget(e){const t=this._currentRenderState,{encoderGPU:n,descriptorGPU:i}=t,s=e.texture;s.internalFormat=W.BGRA8Unorm,this._textures.initRenderTarget(e);const o=this._context.getCurrentTexture(),a=this._textures.getTextureGPU(s);t.currentPassGPU.end(),n.copyTextureToTexture({texture:o},{texture:a},[s.image.width,s.image.height]),i.colorAttachments[0].loadOp=nn.Load,t.depth&&(i.depthStencilAttachment.depthLoadOp=nn.Load),t.stencil&&(i.depthStencilAttachment.stencilLoadOp=nn.Load),t.currentPassGPU=n.beginRenderPass(i)}getViewport(e){const t=this._viewport;return e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e.minDepth=t.minDepth,e.maxDepth=t.maxDepth,e}setViewport(e,t,n,i,s=0,o=1){e===null?this._viewport=null:this._viewport={x:e,y:t,width:n,height:i,minDepth:s,maxDepth:o}}getClearColor(e){return e.copy(this._clearColor)}setClearColor(e,t=1){this._clearColor.set(e),this._clearAlpha=t}getClearAlpha(){return this._clearAlpha}setClearAlpha(e){this._clearAlpha=e}getClearDepth(){return this._clearDepth}setClearDepth(e){this._clearDepth=e}getClearStencil(){return this._clearStencil}setClearStencil(e){this._clearStencil=e}clear(){this._background&&this._background.clear()}dispose(){this._objects.dispose(),this._properties.dispose(),this._renderPipelines.dispose(),this._computePipelines.dispose(),this._nodes.dispose(),this._bindings.dispose(),this._info.dispose(),this._renderLists.dispose(),this._renderStates.dispose(),this._textures.dispose(),this.setRenderTarget(null),this.setAnimationLoop(null)}setRenderTarget(e){this._renderTarget=e}async compute(...e){this._initialized===!1&&await this.init();const t=this._device,n=this._computePipelines,i=t.createCommandEncoder({}),s=i.beginComputePass();for(const o of e){n.has(o)===!1&&o.onInit({renderer:this});const a=n.get(o);s.setPipeline(a);const c=this._bindings.getForCompute(o).group;this._bindings.update(o),s.setBindGroup(0,c),s.dispatchWorkgroups(o.dispatchCount)}s.end(),t.queue.submit([i.finish()])}getRenderTarget(){return this._renderTarget}hasFeature(e){if(this._initialized===!1)throw new Error("THREE.WebGPURenderer: Renderer must be initialized before testing features.");if(Object.values(ec).includes(e)===!1)throw new Error("THREE.WebGPURenderer: Unknown WebGPU GPU feature: "+e);return this._adapter.features.has(e)}_projectObject(e,t,n,i){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)i.pushLight(e);else if(e.isSprite){if(!e.frustumCulled||Ma.intersectsSprite(e)){this.sortObjects===!0&&ks.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Wr);const a=e.geometry,c=e.material;c.visible&&i.push(e,a,c,n,ks.z,null)}}else if(e.isLineLoop)console.error("THREE.WebGPURenderer: Objects of type THREE.LineLoop are not supported. Please use THREE.Line or THREE.LineSegments.");else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ma.intersectsObject(e))){const a=e.geometry,c=e.material;if(this.sortObjects===!0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ks.copy(a.boundingSphere.center).applyMatrix4(e.matrixWorld).applyMatrix4(Wr)),Array.isArray(c)){const l=a.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u],p=c[d.materialIndex];p&&p.visible&&i.push(e,a,p,n,ks.z,d)}}else c.visible&&i.push(e,a,c,n,ks.z,null)}}const o=e.children;for(let a=0,c=o.length;a<c;a++)this._projectObject(o[a],t,n,i)}_renderObjects(e,t,n,i){for(let s=0,o=e.length;s<o;s++){const a=e[s],{object:c,geometry:l,material:u,group:h}=a;if(t.isArrayCamera){const d=t.cameras;for(let p=0,g=d.length;p<g;p++){const _=d[p];if(c.layers.test(_.layers)){const m=_.viewport,f=m.minDepth===void 0?0:m.minDepth,y=m.maxDepth===void 0?1:m.maxDepth;this._currentRenderState.currentPassGPU.setViewport(m.x,m.y,m.width,m.height,f,y),this._renderObject(c,n,_,l,u,h,i)}}}else this._renderObject(c,n,t,l,u,h,i)}}_renderObject(e,t,n,i,s,o,a){s=t.overrideMaterial!==null?t.overrideMaterial:s,e.onBeforeRender(this,t,n,i,s,o);const c=this._getRenderObject(e,s,t,n,a);this._nodes.updateBefore(c);const l=this._currentRenderState.currentPassGPU,u=this._info;e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),this._nodes.update(c),this._geometries.update(c),this._bindings.update(c);const h=this._renderPipelines.get(c);l.setPipeline(h.pipeline);const d=this._bindings.get(c).group;l.setBindGroup(0,d);const p=this._geometries.getIndex(c),g=p!==null;g===!0&&this._setupIndexBuffer(p,l),this._setupVertexBuffers(i.attributes,l,h);const _=i.drawRange,m=_.start,f=i.isInstancedBufferGeometry?i.instanceCount:e.isInstancedMesh?e.count:1;if(g===!0){const y=_.count!==1/0?_.count:p.count;l.drawIndexed(y,f,m,0,0),u.update(e,y,f)}else{const y=i.attributes.position,x=_.count!==1/0?_.count:y.count;l.draw(x,f,m,0),u.update(e,x,f)}}_getRenderObject(e,t,n,i,s){const o=this._objects.get(e,t,n,i,s),a=this._properties.get(o);if(a.initialized!==!0){a.initialized=!0;const l=()=>{this._renderPipelines.remove(o),this._nodes.remove(o),this._properties.remove(o),this._objects.remove(e,t,n,i,s),o.material.removeEventListener("dispose",l)};o.material.addEventListener("dispose",l)}const c=o.getCacheKey();return a.cacheKey!==c&&(a.cacheKey=c,this._renderPipelines.remove(o),this._nodes.remove(o)),o}_setupIndexBuffer(e,t){const n=this._attributes.get(e).buffer,i=e.array instanceof Uint16Array?ir.Uint16:ir.Uint32;t.setIndexBuffer(n,i)}_setupVertexBuffers(e,t,n){const i=n.shaderAttributes;for(const s of i){const o=s.name,a=s.slot,c=e[o];if(c!==void 0){const l=this._attributes.get(c).buffer;t.setVertexBuffer(a,l)}}}_setupColorBuffer(){this._device&&(this._colorBuffer&&this._colorBuffer.destroy(),this._colorBuffer=this._device.createTexture({label:"colorBuffer",size:{width:Math.floor(this._width*this._pixelRatio),height:Math.floor(this._height*this._pixelRatio),depthOrArrayLayers:1},sampleCount:this._parameters.sampleCount,format:W.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}))}_setupDepthBuffer(){this._device&&(this._depthBuffer&&this._depthBuffer.destroy(),this._depthBuffer=this._device.createTexture({label:"depthBuffer",size:{width:Math.floor(this._width*this._pixelRatio),height:Math.floor(this._height*this._pixelRatio),depthOrArrayLayers:1},sampleCount:this._parameters.sampleCount,format:W.Depth24PlusStencil8,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}))}_configureContext(){const e=this._device;e&&this._context.configure({device:e,format:W.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"premultiplied"})}_createCanvasElement(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}}const SE=vE;hn.enabled=!0;let Xr=null;const yE=r=>r.webGPU===!0&&N0.isAvailable()?new SE:new Bh({alpha:r.alpha,antialias:r.antialias,depth:r.depth,powerPreference:"high-performance",stencil:r.stencil}),hb=(r={})=>(Xr!==null||(Xr=ME(r)),Xr),ME=(r={})=>{var f;const{render:e}=r,t=yE(r);t.useLegacyLights=!1,t.debug!==void 0&&(t.debug.checkShaderErrors=r.checkShaderErrors??!0),t.xr!==void 0&&(t.xr.enabled=r.xr??!1),t.outputEncoding=r.outputEncoding??Jn,t.toneMapping=r.toneMapping??dc,t.shadowMap!==void 0&&r.shadowMap!==!1&&(t.shadowMap.enabled=!0,t.shadowMap.type=r.shadowMap??qu);let n=r.camera==="orthographic"?new So:new Xt;const i=new Nv;i.add(n);const s=(f=r.composer)==null?void 0:f.call(r,i,n,t);let o=performance.now(),a=performance.now(),c=0;const l=[],u=[];R0(n,t,s,r.dpi);const h=()=>{o=performance.now(),c=o-a,a=o;for(let y=0,x=u.length;y<x;y+=1)u[y](o,c);e!==void 0?e(c,i,n,t):s!==void 0?s.render(c):t.render(i,n);for(let y=0,x=l.length;y<x;y+=1)l[y](o,c)},d=y=>{n=y},p=()=>{t.setAnimationLoop(null)},g=()=>{t.setAnimationLoop(h)},_=y=>(u.push(y),()=>u.splice(u.indexOf(y),1)),m=y=>(l.push(y),()=>l.splice(l.indexOf(y),1));return r.autostart!==!1&&g(),{camera:n,canvas:t.domElement,renderer:t,scene:i,setCamera:d,stop:p,start:g,beforeRender:_,update:m}};function Gu(r,e){if(e===ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wa||e===vh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class TE extends Ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new GE(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ka.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Mo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wf){try{o[je.KHR_BINARY_GLTF]=new zE(e)}catch(h){i&&i(h);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new QE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new AE;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new VE(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new kE;break;case je.KHR_MESH_QUANTIZATION:o[h]=new HE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function EE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ce(16777215);c.color!==void 0&&u.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new o0(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new s0(u),l.distance=h;break;case"spot":l=new n0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class AE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return hi}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,he))}return Promise.all(i)}}class wE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class RE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class LE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,he)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class NE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class PE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(a[0],a[1],a[2]),Promise.all(s)}}class UE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,he)),Promise.all(s)}}class DE{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class FE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BE{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class GE{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of h){const _=new Pe,m=new A,f=new xi,y=new A(1,1,1),x=new Ov(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,f,y));for(const b in c)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const wf="glTF",Hs=12,zu={JSON:1313821514,BIN:5130562};class zE{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hs,s=new DataView(e,Hs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===zu.JSON){const l=new Uint8Array(e,Hs+o,a);this.content=n.decode(l)}else if(c===zu.BIN){const l=Hs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=cc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=ms[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}h(d)},a,l)})})}}class kE{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HE{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Rf extends cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,y=1-m,x=f-d+h;for(let b=0;b!==a;b++){const E=o[_+b+a],R=o[_+b+c]*u,P=o[g+b+a],G=o[g+b]*u;s[b]=y*E+x*R+m*P+f*G}return s}}const WE=new xi;class XE extends Rf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return WE.fromArray(s).normalize().toArray(s),s}}const dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:it,9729:It,9984:so,9985:gh,9986:js,9987:Oi},ku={33071:fn,33648:Js,10497:Fi},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qE={CUBICSPLINE:void 0,LINEAR:xs,STEP:Qs},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $E(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new bc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function Ws(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jE(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function YE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KE(r){const e=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Hu(e.attributes):t=r.indices+":"+Hu(r.attributes)+":"+r.mode,t}function Hu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function lc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JE=new Pe;class QE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new EE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new qh(this.options.manager):this.textureLoader=new c0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ws(s,a,i),ci(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ka.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ta[i.type],a=ms[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new zt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ta[i.type],l=ms[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(y);x||(_=new l(a,f*p,i.count*p/u),x=new Gh(_,p/u),t.cache.add(y,x)),m=new Yn(x,c,d%p/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new zt(_,c,g);if(i.sparse!==void 0){const f=Ta.SCALAR,y=ms[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,E=new y(o[1],x,i.sparse.count*f),R=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized));for(let P=0,G=E.length;P<G;P++){const v=E[P];if(m.setX(v,R[P*c]),c>=2&&m.setY(v,R[P*c+1]),c>=3&&m.setZ(v,R[P*c+2]),c>=4&&m.setW(v,R[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vu[d.magFilter]||It,u.minFilter=Vu[d.minFilter]||Oi,u.wrapS=ku[d.wrapS]||Fi,u.wrapT=ku[d.wrapT]||Fi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new St(_);m.needsUpdate=!0,d(m)}),t.load(Ka.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||ZE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new kh,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Vh,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return bc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,he)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=En);const u=s.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ea.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==hi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==hi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==hi&&(a.emissive=new Ce().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==hi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,he)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ci(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ws(i,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=KE(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Wu(new _n,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?$E(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const y=l[p];if(m.mode===dn.TRIANGLES||m.mode===dn.TRIANGLE_STRIP||m.mode===dn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Uv(_,y):new Kt(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===dn.TRIANGLE_STRIP?f.geometry=Gu(f.geometry,vh):m.mode===dn.TRIANGLE_FAN&&(f.geometry=Gu(f.geometry,Wa));else if(m.mode===dn.LINES)f=new Bv(_,y);else if(m.mode===dn.LINE_STRIP)f=new Ec(_,y);else if(m.mode===dn.LINE_LOOP)f=new Gv(_,y);else if(m.mode===dn.POINTS)f=new zv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&YE(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),ci(f,s),m.extensions&&Ws(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Ni;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(go.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new So(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Pe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Tc(a,c)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],o=[],a=[],c=[],l=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],g=d.target,_=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(s.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),c.push(p),l.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let f=0,y=h.length;f<y;f++){const x=h[f],b=d[f],E=p[f],R=g[f],P=_[f];if(x===void 0)continue;x.updateMatrix();let G;switch(ai[P.path]){case ai.weights:G=tr;break;case ai.rotation:G=Gi;break;case ai.position:case ai.scale:default:G=nr;break}const v=x.name?x.name:x.uuid,w=R.interpolation!==void 0?qE[R.interpolation]:xs,Y=[];ai[P.path]===ai.weights?x.traverse(function(N){N.morphTargetInfluences&&Y.push(N.name?N.name:N.uuid)}):Y.push(v);let B=E.array;if(E.normalized){const N=lc(B.constructor),O=new Float32Array(B.length);for(let F=0,J=B.length;F<J;F++)O[F]=B[F]*N;B=O}for(let N=0,O=Y.length;N<O;N++){const F=new G(Y[N]+"."+ai[P.path],b.array,B,w);R.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function($){const j=this instanceof Gi?XE:Rf;return new j(this.times,this.values,this.getValueSize()/3,$)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}return new jv(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,JE)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new zh:l.length>1?u=new Ni:l.length===1?u=l[0]:u=new ct,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ci(u,s),s.extensions&&Ws(n,u,s),s.matrix!==void 0){const h=new Pe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ni;n.name&&(s.name=i.createUniqueName(n.name)),ci(s,n),n.extensions&&Ws(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof An||d instanceof St)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=l(s),s})}}function eb(r,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const u=lc(ms[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new A,c=new A;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=lc(ms[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Wu(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=cc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ci(r,e),eb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jE(r,e.targets,t):r})}zi.enabled=!0;new u0;new Mo;new TE;new qh;export{ab as A,As as B,En as D,xo as E,Fn as F,TE as G,ub as H,S0 as L,Kt as M,lb as O,Ai as P,xi as Q,rb as R,wn as S,Tn as T,Ie as V,bc as a,go as b,ME as c,bs as d,zt as e,A as f,Pe as g,Gt as h,gn as i,_o as j,_n as k,Be as l,nb as m,ib as n,ob as o,o0 as p,sb as q,Ni as r,hb as t};
//# sourceMappingURL=index-ea951f63.js.map
