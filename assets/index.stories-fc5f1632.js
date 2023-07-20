var ye=Object.defineProperty;var me=(n,e,t)=>e in n?ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>(me(n,typeof e!="symbol"?e+"":e,t),t),xe=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var G=(n,e,t)=>(xe(n,e,"read from private field"),t?t.call(n):e.get(n)),Ht=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};import{t as we,d as H,R as ae,v as le,V as M,w as fe,L as X,T as pt,x as be,n as yt,y as Ae,D as Pe,z as ct,F as Xt,J as Te,M as ue,K as Yt,u as ve,s as Be,c as ge}from"./setup-d3d63792.js";var j;class Se extends we{constructor(t){super();R(this,"camera");R(this,"raycaster");R(this,"objects",[]);R(this,"pointerDown",new H);R(this,"pointerUp",new H);R(this,"pointerMove",new H);R(this,"recursive",!0);R(this,"renderer");Ht(this,j,{click:0,move:0});R(this,"onPointerDown",t=>{this.getNormalizedCoordinates(t,this.pointerDown)});R(this,"onPointerUp",t=>{if(this.camera===void 0||(this.getNormalizedCoordinates(t,this.pointerUp),this.pointerDown.sub(this.pointerUp).lengthSq()>.001))return;this.raycaster.setFromCamera(this.pointerUp,this.camera);const s=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"click",intersections:s})});R(this,"onPointerMove",t=>{if(this.camera===void 0)return;this.getNormalizedCoordinates(t,this.pointerMove),this.raycaster.setFromCamera(this.pointerMove,this.camera);const s=this.raycaster.intersectObjects(this.objects,this.recursive);this.dispatchEvent({type:"move",intersections:s})});this.camera=t.camera,this.renderer=t.renderer,this.raycaster=t.raycaster??new ae,this.objects=t.objects??(t.scene?[t.scene]:[]),this.recursive=t.recursive??!0}on(t,s){super.addEventListener(t,s);const i=this.renderer.domElement;t==="move"&&G(this,j).move===0?i.addEventListener("pointermove",this.onPointerMove,{passive:!0}):t==="click"&&G(this,j).click===0&&(i.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),i.addEventListener("pointerup",this.onPointerUp,{passive:!0})),G(this,j)[t]+=1}off(t,s){super.removeEventListener(t,s);const i=this.renderer.domElement;G(this,j)[t]-=1,t==="move"&&G(this,j).move<=0?i.removeEventListener("pointermove",this.onPointerMove):t==="click"&&G(this,j).click<=0&&(i.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),i.addEventListener("pointerup",this.onPointerUp,{passive:!0}))}getNormalizedCoordinates(t,s){const i=this.renderer.domElement,r=i.getBoundingClientRect();s.x=(t.clientX-r.x)/i.clientWidth*2-1,s.y=-((t.clientY-r.y)/i.clientHeight*2)+1}dispose(){const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointermove",this.onPointerMove)}}j=new WeakMap;const pe=0,Me=1,Ie=2,Zt=2,zt=1.25,Wt=1,Ct=6*4+4+4,Vt=65535,Ce=Math.pow(2,-24);class bt{constructor(){}}function q(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function Ee(n){n[0]=n[1]=n[2]=1/0,n[3]=n[4]=n[5]=-1/0}function Kt(n){let e=-1,t=-1/0;for(let s=0;s<3;s++){const i=n[s+3]-n[s];i>t&&(t=i,e=s)}return e}function $t(n,e){e.set(n)}function Jt(n,e,t){let s,i;for(let r=0;r<3;r++){const o=r+3;s=n[r],i=e[r],t[r]=s<i?s:i,s=n[o],i=e[o],t[o]=s>i?s:i}}function At(n,e,t){for(let s=0;s<3;s++){const i=e[n+2*s],r=e[n+2*s+1],o=i-r,f=i+r;o<t[s]&&(t[s]=o),f>t[s+3]&&(t[s+3]=f)}}function lt(n){const e=n[3]-n[0],t=n[4]-n[1],s=n[5]-n[2];return 2*(e*t+t*s+s*e)}function Fe(n,e){if(!n.index){const t=n.attributes.position.count,s=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let i;t>65535?i=new Uint32Array(new s(4*t)):i=new Uint16Array(new s(2*t)),n.setIndex(new le(i,1));for(let r=0;r<t;r++)i[r]=r}}function Le(n){if(!n.groups||!n.groups.length)return[{offset:0,count:n.index.count/3}];const e=[],t=new Set;for(const i of n.groups)t.add(i.start),t.add(i.start+i.count);const s=Array.from(t.values()).sort((i,r)=>i-r);for(let i=0;i<s.length-1;i++){const r=s[i],o=s[i+1];e.push({offset:r/3,count:(o-r)/3})}return e}function Ut(n,e,t,s,i=null){let r=1/0,o=1/0,f=1/0,c=-1/0,a=-1/0,l=-1/0,p=1/0,u=1/0,d=1/0,x=-1/0,B=-1/0,A=-1/0;const h=i!==null;for(let m=e*6,y=(e+t)*6;m<y;m+=6){const b=n[m+0],P=n[m+1],w=b-P,T=b+P;w<r&&(r=w),T>c&&(c=T),h&&b<p&&(p=b),h&&b>x&&(x=b);const v=n[m+2],g=n[m+3],S=v-g,I=v+g;S<o&&(o=S),I>a&&(a=I),h&&v<u&&(u=v),h&&v>B&&(B=v);const C=n[m+4],E=n[m+5],F=C-E,L=C+E;F<f&&(f=F),L>l&&(l=L),h&&C<d&&(d=C),h&&C>A&&(A=C)}s[0]=r,s[1]=o,s[2]=f,s[3]=c,s[4]=a,s[5]=l,h&&(i[0]=p,i[1]=u,i[2]=d,i[3]=x,i[4]=B,i[5]=A)}function ze(n,e,t,s){let i=1/0,r=1/0,o=1/0,f=-1/0,c=-1/0,a=-1/0;for(let l=e*6,p=(e+t)*6;l<p;l+=6){const u=n[l+0];u<i&&(i=u),u>f&&(f=u);const d=n[l+2];d<r&&(r=d),d>c&&(c=d);const x=n[l+4];x<o&&(o=x),x>a&&(a=x)}s[0]=i,s[1]=r,s[2]=o,s[3]=f,s[4]=c,s[5]=a}function Ue(n,e,t,s,i){let r=t,o=t+s-1;const f=i.pos,c=i.axis*2;for(;;){for(;r<=o&&e[r*6+c]<f;)r++;for(;r<=o&&e[o*6+c]>=f;)o--;if(r<o){for(let a=0;a<3;a++){let l=n[r*3+a];n[r*3+a]=n[o*3+a],n[o*3+a]=l;let p=e[r*6+a*2+0];e[r*6+a*2+0]=e[o*6+a*2+0],e[o*6+a*2+0]=p;let u=e[r*6+a*2+1];e[r*6+a*2+1]=e[o*6+a*2+1],e[o*6+a*2+1]=u}r++,o--}else return r}}const O=32,De=(n,e)=>n.candidate-e.candidate,W=new Array(O).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Pt=new Float32Array(6);function _e(n,e,t,s,i,r){let o=-1,f=0;if(r===pe)o=Kt(e),o!==-1&&(f=(e[o]+e[o+3])/2);else if(r===Me)o=Kt(n),o!==-1&&(f=Re(t,s,i,o));else if(r===Ie){const c=lt(n);let a=zt*i;const l=s*6,p=(s+i)*6;for(let u=0;u<3;u++){const d=e[u],A=(e[u+3]-d)/O;if(i<O/4){const h=[...W];h.length=i;let m=0;for(let b=l;b<p;b+=6,m++){const P=h[m];P.candidate=t[b+2*u],P.count=0;const{bounds:w,leftCacheBounds:T,rightCacheBounds:v}=P;for(let g=0;g<3;g++)v[g]=1/0,v[g+3]=-1/0,T[g]=1/0,T[g+3]=-1/0,w[g]=1/0,w[g+3]=-1/0;At(b,t,w)}h.sort(De);let y=i;for(let b=0;b<y;b++){const P=h[b];for(;b+1<y&&h[b+1].candidate===P.candidate;)h.splice(b+1,1),y--}for(let b=l;b<p;b+=6){const P=t[b+2*u];for(let w=0;w<y;w++){const T=h[w];P>=T.candidate?At(b,t,T.rightCacheBounds):(At(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<y;b++){const P=h[b],w=P.count,T=i-P.count,v=P.leftCacheBounds,g=P.rightCacheBounds;let S=0;w!==0&&(S=lt(v)/c);let I=0;T!==0&&(I=lt(g)/c);const C=Wt+zt*(S*w+I*T);C<a&&(o=u,a=C,f=P.candidate)}}else{for(let y=0;y<O;y++){const b=W[y];b.count=0,b.candidate=d+A+y*A;const P=b.bounds;for(let w=0;w<3;w++)P[w]=1/0,P[w+3]=-1/0}for(let y=l;y<p;y+=6){let w=~~((t[y+2*u]-d)/A);w>=O&&(w=O-1);const T=W[w];T.count++,At(y,t,T.bounds)}const h=W[O-1];$t(h.bounds,h.rightCacheBounds);for(let y=O-2;y>=0;y--){const b=W[y],P=W[y+1];Jt(b.bounds,P.rightCacheBounds,b.rightCacheBounds)}let m=0;for(let y=0;y<O-1;y++){const b=W[y],P=b.count,w=b.bounds,v=W[y+1].rightCacheBounds;P!==0&&(m===0?$t(w,Pt):Jt(w,Pt,Pt)),m+=P;let g=0,S=0;m!==0&&(g=lt(Pt)/c);const I=i-m;I!==0&&(S=lt(v)/c);const C=Wt+zt*(g*m+S*I);C<a&&(o=u,a=C,f=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:f}}function Re(n,e,t,s){let i=0;for(let r=e,o=e+t;r<o;r++)i+=n[r*6+s*2];return i/t}function Ne(n,e){Ee(e);const t=n.attributes.position,s=n.index.array,i=s.length/3,r=new Float32Array(i*6),o=t.normalized,f=t.array,c=t.offset||0;let a=3;t.isInterleavedBufferAttribute&&(a=t.data.stride);const l=["getX","getY","getZ"];for(let p=0;p<i;p++){const u=p*3,d=p*6;let x,B,A;o?(x=s[u+0],B=s[u+1],A=s[u+2]):(x=s[u+0]*a+c,B=s[u+1]*a+c,A=s[u+2]*a+c);for(let h=0;h<3;h++){let m,y,b;o?(m=t[l[h]](x),y=t[l[h]](B),b=t[l[h]](A)):(m=f[x+h],y=f[B+h],b=f[A+h]);let P=m;y<P&&(P=y),b<P&&(P=b);let w=m;y>w&&(w=y),b>w&&(w=b);const T=(w-P)/2,v=h*2;r[d+v+0]=P+T,r[d+v+1]=T+(Math.abs(P)+T)*Ce,P<e[h]&&(e[h]=P),w>e[h+3]&&(e[h+3]=w)}}return r}function Ve(n,e){function t(h){u&&u(h/d)}function s(h,m,y,b=null,P=0){if(!x&&P>=c&&(x=!0,a&&(console.warn(`MeshBVH: Max depth of ${c} reached when generating BVH. Consider increasing maxDepth.`),console.warn(n))),y<=l||P>=c)return t(m+y),h.offset=m,h.count=y,h;const w=_e(h.boundingData,b,o,m,y,p);if(w.axis===-1)return t(m+y),h.offset=m,h.count=y,h;const T=Ue(f,o,m,y,w);if(T===m||T===m+y)t(m+y),h.offset=m,h.count=y;else{h.splitAxis=w.axis;const v=new bt,g=m,S=T-m;h.left=v,v.boundingData=new Float32Array(6),Ut(o,g,S,v.boundingData,r),s(v,g,S,r,P+1);const I=new bt,C=T,E=y-S;h.right=I,I.boundingData=new Float32Array(6),Ut(o,C,E,I.boundingData,r),s(I,C,E,r,P+1)}return h}Fe(n,e);const i=new Float32Array(6),r=new Float32Array(6),o=Ne(n,i),f=n.index.array,c=e.maxDepth,a=e.verbose,l=e.maxLeafTris,p=e.strategy,u=e.onProgress,d=n.index.count/3;let x=!1;const B=[],A=Le(n);if(A.length===1){const h=A[0],m=new bt;m.boundingData=i,ze(o,h.offset,h.count,r),s(m,h.offset,h.count,r),B.push(m)}else for(let h of A){const m=new bt;m.boundingData=new Float32Array(6),Ut(o,h.offset,h.count,m.boundingData,r),s(m,h.offset,h.count,r),B.push(m)}return B}function qe(n,e){const t=Ve(n,e);let s,i,r;const o=[],f=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let l=0;l<t.length;l++){const p=t[l];let u=c(p);const d=new f(Ct*u);s=new Float32Array(d),i=new Uint32Array(d),r=new Uint16Array(d),a(0,p),o.push(d)}return o;function c(l){return l.count?1:1+c(l.left)+c(l.right)}function a(l,p){const u=l/4,d=l/2,x=!!p.count,B=p.boundingData;for(let A=0;A<6;A++)s[u+A]=B[A];if(x){const A=p.offset,h=p.count;return i[u+6]=A,r[d+14]=h,r[d+15]=Vt,l+Ct}else{const A=p.left,h=p.right,m=p.splitAxis;let y;if(y=a(l+Ct,A),y/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return i[u+6]=y/4,y=a(y,h),i[u+7]=m,y}}}class Y{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let s=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const c=e[r][t];s=c<s?c:s,i=c>i?c:i}this.min=s,this.max=i}setFromPoints(e,t){let s=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const f=t[r],c=e.dot(f);s=c<s?c:s,i=c>i?c:i}this.min=s,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Y.prototype.setFromBox=function(){const n=new M;return function(t,s){const i=s.min,r=s.max;let o=1/0,f=-1/0;for(let c=0;c<=1;c++)for(let a=0;a<=1;a++)for(let l=0;l<=1;l++){n.x=i.x*c+r.x*(1-c),n.y=i.y*a+r.y*(1-a),n.z=i.z*l+r.z*(1-l);const p=t.dot(n);o=Math.min(p,o),f=Math.max(p,f)}this.min=o,this.max=f}}();const ke=function(){const n=new M,e=new M,t=new M;return function(i,r,o){const f=i.start,c=n,a=r.start,l=e;t.subVectors(f,a),n.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const p=t.dot(l),u=l.dot(c),d=l.dot(l),x=t.dot(c),A=c.dot(c)*d-u*u;let h,m;A!==0?h=(p*u-x*d)/A:h=0,m=(p+h*u)/d,o.x=h,o.y=m}}(),jt=function(){const n=new H,e=new M,t=new M;return function(i,r,o,f){ke(i,r,n);let c=n.x,a=n.y;if(c>=0&&c<=1&&a>=0&&a<=1){i.at(c,o),r.at(a,f);return}else if(c>=0&&c<=1){a<0?r.at(0,f):r.at(1,f),i.closestPointToPoint(f,!0,o);return}else if(a>=0&&a<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,f);return}else{let l;c<0?l=i.start:l=i.end;let p;a<0?p=r.start:p=r.end;const u=e,d=t;if(i.closestPointToPoint(p,!0,e),r.closestPointToPoint(l,!0,t),u.distanceToSquared(p)<=d.distanceToSquared(l)){o.copy(u),f.copy(p);return}else{o.copy(l),f.copy(d);return}}}}(),Oe=function(){const n=new M,e=new M,t=new fe,s=new X;return function(r,o){const{radius:f,center:c}=r,{a,b:l,c:p}=o;if(s.start=a,s.end=l,s.closestPointToPoint(c,!0,n).distanceTo(c)<=f||(s.start=a,s.end=p,s.closestPointToPoint(c,!0,n).distanceTo(c)<=f)||(s.start=l,s.end=p,s.closestPointToPoint(c,!0,n).distanceTo(c)<=f))return!0;const B=o.getPlane(t);if(Math.abs(B.distanceToPoint(c))<=f){const h=B.projectPoint(c,e);if(o.containsPoint(h))return!0}return!1}}(),je=1e-15;function tt(n){return Math.abs(n)<je}class Z extends pt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new M),this.satBounds=new Array(4).fill().map(()=>new Y),this.points=[this.a,this.b,this.c],this.sphere=new be,this.plane=new fe,this.needsUpdate=!0}intersectsSphere(e){return Oe(e,this)}update(){const e=this.a,t=this.b,s=this.c,i=this.points,r=this.satAxes,o=this.satBounds,f=r[0],c=o[0];this.getNormal(f),c.setFromPoints(f,i);const a=r[1],l=o[1];a.subVectors(e,t),l.setFromPoints(a,i);const p=r[2],u=o[2];p.subVectors(t,s),u.setFromPoints(p,i);const d=r[3],x=o[3];d.subVectors(s,e),x.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(f,e),this.needsUpdate=!1}}Z.prototype.closestPointToSegment=function(){const n=new M,e=new M,t=new X;return function(i,r=null,o=null){const{start:f,end:c}=i,a=this.points;let l,p=1/0;for(let u=0;u<3;u++){const d=(u+1)%3;t.start.copy(a[u]),t.end.copy(a[d]),jt(t,i,n,e),l=n.distanceToSquared(e),l<p&&(p=l,r&&r.copy(n),o&&o.copy(e))}return this.closestPointToPoint(f,n),l=f.distanceToSquared(n),l<p&&(p=l,r&&r.copy(n),o&&o.copy(f)),this.closestPointToPoint(c,n),l=c.distanceToSquared(n),l<p&&(p=l,r&&r.copy(n),o&&o.copy(c)),Math.sqrt(p)}}();Z.prototype.intersectsTriangle=function(){const n=new Z,e=new Array(3),t=new Array(3),s=new Y,i=new Y,r=new M,o=new M,f=new M,c=new M,a=new X,l=new X,p=new X;return function(d,x=null,B=!1){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(n.copy(d),n.update(),d=n);const A=this.plane,h=d.plane;if(Math.abs(A.normal.dot(h.normal))>1-1e-10){const m=this.satBounds,y=this.satAxes;t[0]=d.a,t[1]=d.b,t[2]=d.c;for(let w=0;w<4;w++){const T=m[w],v=y[w];if(s.setFromPoints(v,t),T.isSeparated(s))return!1}const b=d.satBounds,P=d.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let w=0;w<4;w++){const T=b[w],v=P[w];if(s.setFromPoints(v,e),T.isSeparated(s))return!1}for(let w=0;w<4;w++){const T=y[w];for(let v=0;v<4;v++){const g=P[v];if(r.crossVectors(T,g),s.setFromPoints(r,e),i.setFromPoints(r,t),s.isSeparated(i))return!1}}return x&&(B||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}else{const m=this.points;let y=!1,b=0;for(let F=0;F<3;F++){const L=m[F],U=m[(F+1)%3];a.start.copy(L),a.end.copy(U),a.delta(o);const z=y?l.start:l.end,D=tt(h.distanceToPoint(L));if(tt(h.normal.dot(o))&&D){l.copy(a),b=2;break}const _=h.intersectLine(a,z);if(!_&&D&&z.copy(L),(_||D)&&!tt(z.distanceTo(U))){if(b++,y)break;y=!0}}if(b===1&&d.containsPoint(l.end))return x&&(x.start.copy(l.end),x.end.copy(l.end)),!0;if(b!==2)return!1;const P=d.points;let w=!1,T=0;for(let F=0;F<3;F++){const L=P[F],U=P[(F+1)%3];a.start.copy(L),a.end.copy(U),a.delta(f);const z=w?p.start:p.end,D=tt(A.distanceToPoint(L));if(tt(A.normal.dot(f))&&D){p.copy(a),T=2;break}const _=A.intersectLine(a,z);if(!_&&D&&z.copy(L),(_||D)&&!tt(z.distanceTo(U))){if(T++,w)break;w=!0}}if(T===1&&this.containsPoint(p.end))return x&&(x.start.copy(p.end),x.end.copy(p.end)),!0;if(T!==2)return!1;if(l.delta(o),p.delta(f),o.dot(f)<0){let F=p.start;p.start=p.end,p.end=F}const v=l.start.dot(o),g=l.end.dot(o),S=p.start.dot(o),I=p.end.dot(o),C=g<S,E=v<I;return v!==I&&S!==g&&C===E?!1:(x&&(c.subVectors(l.start,p.start),c.dot(o)>0?x.start.copy(l.start):x.start.copy(p.start),c.subVectors(l.end,p.end),c.dot(o)<0?x.end.copy(l.end):x.end.copy(p.end)),!0)}}}();Z.prototype.distanceToPoint=function(){const n=new M;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();Z.prototype.distanceToTriangle=function(){const n=new M,e=new M,t=["a","b","c"],s=new X,i=new X;return function(o,f=null,c=null){const a=f||c?s:null;if(this.intersectsTriangle(o,a))return(f||c)&&(f&&a.getCenter(f),c&&a.getCenter(c)),0;let l=1/0;for(let p=0;p<3;p++){let u;const d=t[p],x=o[d];this.closestPointToPoint(x,n),u=x.distanceToSquared(n),u<l&&(l=u,f&&f.copy(n),c&&c.copy(x));const B=this[d];o.closestPointToPoint(B,n),u=B.distanceToSquared(n),u<l&&(l=u,f&&f.copy(B),c&&c.copy(n))}for(let p=0;p<3;p++){const u=t[p],d=t[(p+1)%3];s.set(this[u],this[d]);for(let x=0;x<3;x++){const B=t[x],A=t[(x+1)%3];i.set(o[B],o[A]),jt(s,i,n,e);const h=n.distanceToSquared(e);h<l&&(l=h,f&&f.copy(n),c&&c.copy(e))}}return Math.sqrt(l)}}();class k{constructor(e,t,s){this.isOrientedBox=!0,this.min=new M,this.max=new M,this.matrix=new yt,this.invMatrix=new yt,this.points=new Array(8).fill().map(()=>new M),this.satAxes=new Array(3).fill().map(()=>new M),this.satBounds=new Array(3).fill().map(()=>new Y),this.alignedSatBounds=new Array(3).fill().map(()=>new Y),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),s&&this.matrix.copy(s)}set(e,t,s){this.min.copy(e),this.max.copy(t),this.matrix.copy(s),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}k.prototype.update=function(){return function(){const e=this.matrix,t=this.min,s=this.max,i=this.points;for(let a=0;a<=1;a++)for(let l=0;l<=1;l++)for(let p=0;p<=1;p++){const u=1*a|2*l|4*p,d=i[u];d.x=a?s.x:t.x,d.y=l?s.y:t.y,d.z=p?s.z:t.z,d.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,f=i[0];for(let a=0;a<3;a++){const l=o[a],p=r[a],u=1<<a,d=i[u];l.subVectors(f,d),p.setFromPoints(l,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();k.prototype.intersectsBox=function(){const n=new Y;return function(t){this.needsUpdate&&this.update();const s=t.min,i=t.max,r=this.satBounds,o=this.satAxes,f=this.alignedSatBounds;if(n.min=s.x,n.max=i.x,f[0].isSeparated(n)||(n.min=s.y,n.max=i.y,f[1].isSeparated(n))||(n.min=s.z,n.max=i.z,f[2].isSeparated(n)))return!1;for(let c=0;c<3;c++){const a=o[c],l=r[c];if(n.setFromBox(a,t),l.isSeparated(n))return!1}return!0}}();k.prototype.intersectsTriangle=function(){const n=new Z,e=new Array(3),t=new Y,s=new Y,i=new M;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const f=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let u=0;u<3;u++){const d=f[u],x=c[u];if(t.setFromPoints(x,e),d.isSeparated(t))return!1}const a=o.satBounds,l=o.satAxes,p=this.points;for(let u=0;u<3;u++){const d=a[u],x=l[u];if(t.setFromPoints(x,p),d.isSeparated(t))return!1}for(let u=0;u<3;u++){const d=c[u];for(let x=0;x<4;x++){const B=l[x];if(i.crossVectors(d,B),t.setFromPoints(i,e),s.setFromPoints(i,p),t.isSeparated(s))return!1}}return!0}}();k.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();k.prototype.distanceToPoint=function(){const n=new M;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}();k.prototype.distanceToBox=function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new X),t=new Array(12).fill().map(()=>new X),s=new M,i=new M;return function(o,f=0,c=null,a=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||a)&&(o.getCenter(i),this.closestPointToPoint(i,s),o.closestPointToPoint(s,i),c&&c.copy(s),a&&a.copy(i)),0;const l=f*f,p=o.min,u=o.max,d=this.points;let x=1/0;for(let A=0;A<8;A++){const h=d[A];i.copy(h).clamp(p,u);const m=h.distanceToSquared(i);if(m<x&&(x=m,c&&c.copy(h),a&&a.copy(i),m<l))return Math.sqrt(m)}let B=0;for(let A=0;A<3;A++)for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){const y=(A+1)%3,b=(A+2)%3,P=h<<y|m<<b,w=1<<A|h<<y|m<<b,T=d[P],v=d[w];e[B].set(T,v);const S=n[A],I=n[y],C=n[b],E=t[B],F=E.start,L=E.end;F[S]=p[S],F[I]=h?p[I]:u[I],F[C]=m?p[C]:u[I],L[S]=u[S],L[I]=h?p[I]:u[I],L[C]=m?p[C]:u[I],B++}for(let A=0;A<=1;A++)for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){i.x=A?u.x:p.x,i.y=h?u.y:p.y,i.z=m?u.z:p.z,this.closestPointToPoint(i,s);const y=i.distanceToSquared(s);if(y<x&&(x=y,c&&c.copy(s),a&&a.copy(i),y<l))return Math.sqrt(y)}for(let A=0;A<12;A++){const h=e[A];for(let m=0;m<12;m++){const y=t[m];jt(h,y,s,i);const b=s.distanceToSquared(i);if(b<x&&(x=b,c&&c.copy(s),a&&a.copy(i),b<l))return Math.sqrt(b)}}return Math.sqrt(x)}}();const et=new M,nt=new M,st=new M,Tt=new H,vt=new H,Bt=new H,Gt=new M,Qt=new M,te=new M,gt=new M;function He(n,e,t,s,i,r){let o;return r===Ae?o=n.intersectTriangle(s,t,e,!0,i):o=n.intersectTriangle(e,t,s,r!==Pe,i),o===null?null:{distance:n.origin.distanceTo(i),point:i.clone()}}function Xe(n,e,t,s,i,r,o,f,c){et.fromBufferAttribute(e,r),nt.fromBufferAttribute(e,o),st.fromBufferAttribute(e,f);const a=He(n,et,nt,st,gt,c);if(a){s&&(Tt.fromBufferAttribute(s,r),vt.fromBufferAttribute(s,o),Bt.fromBufferAttribute(s,f),a.uv=pt.getInterpolation(gt,et,nt,st,Tt,vt,Bt,new H)),i&&(Tt.fromBufferAttribute(i,r),vt.fromBufferAttribute(i,o),Bt.fromBufferAttribute(i,f),a.uv1=pt.getInterpolation(gt,et,nt,st,Tt,vt,Bt,new H)),t&&(Gt.fromBufferAttribute(t,r),Qt.fromBufferAttribute(t,o),te.fromBufferAttribute(t,f),a.normal=pt.getInterpolation(gt,et,nt,st,Gt,Qt,te,new M),a.normal.dot(n.direction)>0&&a.normal.multiplyScalar(-1));const l={a:r,b:o,c:f,normal:new M,materialIndex:0};pt.getNormal(et,nt,st,l.normal),a.face=l,a.faceIndex=r}return a}function de(n,e,t,s,i){const r=s*3,o=n.index.getX(r),f=n.index.getX(r+1),c=n.index.getX(r+2),{position:a,normal:l,uv:p,uv1:u}=n.attributes,d=Xe(t,a,l,p,u,o,f,c,e);return d?(d.faceIndex=s,i&&i.push(d),d):null}function Ye(n,e,t,s,i,r){for(let o=s,f=s+i;o<f;o++)de(n,e,t,o,r)}function Ze(n,e,t,s,i){let r=1/0,o=null;for(let f=s,c=s+i;f<c;f++){const a=de(n,e,t,f);a&&a.distance<r&&(o=a,r=a.distance)}return o}function ee(n,e,t){return n===null||(n.point.applyMatrix4(e.matrixWorld),n.distance=n.point.distanceTo(t.ray.origin),n.object=e,n.distance<t.near||n.distance>t.far)?null:n}function V(n,e,t,s){const i=n.a,r=n.b,o=n.c;let f=e,c=e+1,a=e+2;t&&(f=t.getX(e),c=t.getX(e+1),a=t.getX(e+2)),i.x=s.getX(f),i.y=s.getY(f),i.z=s.getZ(f),r.x=s.getX(c),r.y=s.getY(c),r.z=s.getZ(c),o.x=s.getX(a),o.y=s.getY(a),o.z=s.getZ(a)}function ne(n,e,t,s,i,r,o){const f=t.index,c=t.attributes.position;for(let a=n,l=e+n;a<l;a++)if(V(o,a*3,f,c),o.needsUpdate=!0,s(o,a,i,r))return!0;return!1}class he{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function K(n,e){return e[n+15]===65535}function rt(n,e){return e[n+6]}function mt(n,e){return e[n+14]}function xt(n){return n+8}function wt(n,e){return e[n+6]}function We(n,e){return e[n+7]}const ot=new ct,Ft=new M,Ke=["x","y","z"];function qt(n,e,t,s,i){let r=n*2,o=at,f=$,c=J;if(K(r,f)){const l=rt(n,c),p=mt(r,f);Ye(e,t,s,l,p,i)}else{const l=xt(n);Lt(l,o,s,Ft)&&qt(l,e,t,s,i);const p=wt(n,c);Lt(p,o,s,Ft)&&qt(p,e,t,s,i)}}function kt(n,e,t,s){let i=n*2,r=at,o=$,f=J;if(K(i,o)){const a=rt(n,f),l=mt(i,o);return Ze(e,t,s,a,l)}else{const a=We(n,f),l=Ke[a],u=s.direction[l]>=0;let d,x;u?(d=xt(n),x=wt(n,f)):(d=wt(n,f),x=xt(n));const A=Lt(d,r,s,Ft)?kt(d,e,t,s):null;if(A){const y=A.point[l];if(u?y<=r[x+a]:y>=r[x+a+3])return A}const m=Lt(x,r,s,Ft)?kt(x,e,t,s):null;return A&&m?A.distance<=m.distance?A:m:A||m||null}}const $e=function(){let n,e;const t=[],s=new he(()=>new ct);return function(...o){n=s.getPrimitive(),e=s.getPrimitive(),t.push(n,e);const f=i(...o);s.releasePrimitive(n),s.releasePrimitive(e),t.pop(),t.pop();const c=t.length;return c>0&&(e=t[c-1],n=t[c-2]),f};function i(r,o,f,c,a=null,l=0,p=0){function u(y){let b=y*2,P=$,w=J;for(;!K(b,P);)y=xt(y),b=y*2;return rt(y,w)}function d(y){let b=y*2,P=$,w=J;for(;!K(b,P);)y=wt(y,w),b=y*2;return rt(y,w)+mt(b,P)}let x=r*2,B=at,A=$,h=J;if(K(x,A)){const y=rt(r,h),b=mt(x,A);return q(r,B,n),c(y,b,!1,p,l+r,n)}else{const y=xt(r),b=wt(r,h);let P=y,w=b,T,v,g,S;if(a&&(g=n,S=e,q(P,B,g),q(w,B,S),T=a(g),v=a(S),v<T)){P=b,w=y;const z=T;T=v,v=z,g=S}g||(g=n,q(P,B,g));const I=K(P*2,A),C=f(g,I,T,p+1,l+P);let E;if(C===Zt){const z=u(P),_=d(P)-z;E=c(z,_,!0,p+1,l+P,g)}else E=C&&i(P,o,f,c,a,l,p+1);if(E)return!0;S=e,q(w,B,S);const F=K(w*2,A),L=f(S,F,v,p+1,l+w);let U;if(L===Zt){const z=u(w),_=d(w)-z;U=c(z,_,!0,p+1,l+w,S)}else U=L&&i(w,o,f,c,a,l,p+1);return!!U}}}(),Je=function(){const n=new Z,e=new Z,t=new yt,s=new k,i=new k;return function r(o,f,c,a,l=null){let p=o*2,u=at,d=$,x=J;if(l===null&&(c.boundingBox||c.computeBoundingBox(),s.set(c.boundingBox.min,c.boundingBox.max,a),l=s),K(p,d)){const A=f,h=A.index,m=A.attributes.position,y=c.index,b=c.attributes.position,P=rt(o,x),w=mt(p,d);if(t.copy(a).invert(),c.boundsTree)return q(o,u,i),i.matrix.copy(t),i.needsUpdate=!0,c.boundsTree.shapecast({intersectsBounds:v=>i.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(a),v.b.applyMatrix4(a),v.c.applyMatrix4(a),v.needsUpdate=!0;for(let g=P*3,S=(w+P)*3;g<S;g+=3)if(V(e,g,h,m),e.needsUpdate=!0,v.intersectsTriangle(e))return!0;return!1}});for(let T=P*3,v=w+P*3;T<v;T+=3){V(n,T,h,m),n.a.applyMatrix4(t),n.b.applyMatrix4(t),n.c.applyMatrix4(t),n.needsUpdate=!0;for(let g=0,S=y.count;g<S;g+=3)if(V(e,g,y,b),e.needsUpdate=!0,n.intersectsTriangle(e))return!0}}else{const A=o+8,h=x[o+6];return q(A,u,ot),!!(l.intersectsBox(ot)&&r(A,f,c,a,l)||(q(h,u,ot),l.intersectsBox(ot)&&r(h,f,c,a,l)))}}}();function Lt(n,e,t,s){return q(n,e,ot),t.intersectBox(ot,s)}const Ot=[];let Et,at,$,J;function dt(n){Et&&Ot.push(Et),Et=n,at=new Float32Array(n),$=new Uint16Array(n),J=new Uint32Array(n)}function St(){Et=null,at=null,$=null,J=null,Ot.length&&dt(Ot.pop())}const Dt=Symbol("skip tree generation"),_t=new ct,Rt=new ct,it=new yt,Q=new k,ft=new k,ut=new M,Mt=new M,Ge=new M,Qe=new M,tn=new M,se=new ct,N=new he(()=>new Z);class ht{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),ht.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const s=e.geometry,i=e._roots,r=s.getIndex();let o;return t.cloneBuffers?o={roots:i.map(f=>f.slice()),index:r.array.slice()}:o={roots:i,index:r.array},o}static deserialize(e,t,s={}){if(typeof s=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),ht.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});s={setIndex:!0,...s};const{index:i,roots:r}=e,o=new ht(t,{...s,[Dt]:!0});if(o._roots=r,s.setIndex){const f=t.getIndex();if(f===null){const c=new le(e.index,1,!1);t.setIndex(c)}else f.array!==i&&(f.array.set(i),f.needsUpdate=!0)}return o}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:pe,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Dt]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Dt]||(this._roots=qe(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ct))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,s=t.index.array,i=t.attributes.position;let r,o,f,c,a=0;const l=this._roots;for(let u=0,d=l.length;u<d;u++)r=l[u],o=new Uint32Array(r),f=new Uint16Array(r),c=new Float32Array(r),p(0,a),a+=r.byteLength;function p(u,d,x=!1){const B=u*2;if(f[B+15]===Vt){const h=o[u+6],m=f[B+14];let y=1/0,b=1/0,P=1/0,w=-1/0,T=-1/0,v=-1/0;for(let g=3*h,S=3*(h+m);g<S;g++){const I=s[g],C=i.getX(I),E=i.getY(I),F=i.getZ(I);C<y&&(y=C),C>w&&(w=C),E<b&&(b=E),E>T&&(T=E),F<P&&(P=F),F>v&&(v=F)}return c[u+0]!==y||c[u+1]!==b||c[u+2]!==P||c[u+3]!==w||c[u+4]!==T||c[u+5]!==v?(c[u+0]=y,c[u+1]=b,c[u+2]=P,c[u+3]=w,c[u+4]=T,c[u+5]=v,!0):!1}else{const h=u+8,m=o[u+6],y=h+d,b=m+d;let P=x,w=!1,T=!1;e?P||(w=e.has(y),T=e.has(b),P=!w&&!T):(w=!0,T=!0);const v=P||w,g=P||T;let S=!1;v&&(S=p(h,d,P));let I=!1;g&&(I=p(m,d,P));const C=S||I;if(C)for(let E=0;E<3;E++){const F=h+E,L=m+E,U=c[F],z=c[F+3],D=c[L],_=c[L+3];c[u+E]=U<D?U:D,c[u+E+3]=z>_?z:_}return C}}}traverse(e,t=0){const s=this._roots[t],i=new Uint32Array(s),r=new Uint16Array(s);o(0);function o(f,c=0){const a=f*2,l=r[a+15]===Vt;if(l){const p=i[f+6],u=r[a+14];e(c,l,new Float32Array(s,f*4,6),p,u)}else{const p=f+Ct/4,u=i[f+6],d=i[f+7];e(c,l,new Float32Array(s,f*4,6),d)||(o(p,c+1),o(u,c+1))}}}raycast(e,t=Xt){const s=this._roots,i=this.geometry,r=[],o=t.isMaterial,f=Array.isArray(t),c=i.groups,a=o?t.side:t;for(let l=0,p=s.length;l<p;l++){const u=f?t[c[l].materialIndex].side:a,d=r.length;if(dt(s[l]),qt(0,i,u,e,r),St(),f){const x=c[l].materialIndex;for(let B=d,A=r.length;B<A;B++)r[B].face.materialIndex=x}}return r}raycastFirst(e,t=Xt){const s=this._roots,i=this.geometry,r=t.isMaterial,o=Array.isArray(t);let f=null;const c=i.groups,a=r?t.side:t;for(let l=0,p=s.length;l<p;l++){const u=o?t[c[l].materialIndex].side:a;dt(s[l]);const d=kt(0,i,u,e);St(),d!=null&&(f==null||d.distance<f.distance)&&(f=d,o&&(d.face.materialIndex=c[l].materialIndex))}return f}intersectsGeometry(e,t){const s=this.geometry;let i=!1;for(const r of this._roots)if(dt(r),i=Je(0,s,e,t),St(),i)break;return i}shapecast(e,t,s){const i=this.geometry;if(e instanceof Function){if(t){const u=t;t=(d,x,B,A)=>{const h=x*3;return u(d,h,h+1,h+2,B,A)}}e={boundsTraverseOrder:s,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const r=N.getPrimitive();let{boundsTraverseOrder:o,intersectsBounds:f,intersectsRange:c,intersectsTriangle:a}=e;if(c&&a){const u=c;c=(d,x,B,A,h)=>u(d,x,B,A,h)?!0:ne(d,x,i,a,B,A,r)}else c||(a?c=(u,d,x,B)=>ne(u,d,i,a,x,B,r):c=(u,d,x)=>x);let l=!1,p=0;for(const u of this._roots){if(dt(u),l=$e(0,i,f,c,o,p),St(),l)break;p+=u.byteLength}return N.releasePrimitive(r),l}bvhcast(e,t,s){let{intersectsRanges:i,intersectsTriangles:r}=s;const o=this.geometry.index,f=this.geometry.attributes.position,c=e.geometry.index,a=e.geometry.attributes.position;it.copy(t).invert();const l=N.getPrimitive(),p=N.getPrimitive();if(r){let d=function(x,B,A,h,m,y,b,P){for(let w=A,T=A+h;w<T;w++){V(p,w*3,c,a),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let v=x,g=x+B;v<g;v++)if(V(l,v*3,o,f),l.needsUpdate=!0,r(l,p,v,w,m,y,b,P))return!0}return!1};if(i){const x=i;i=function(B,A,h,m,y,b,P,w){return x(B,A,h,m,y,b,P,w)?!0:d(B,A,h,m,y,b,P,w)}}else i=d}e.getBoundingBox(Rt),Rt.applyMatrix4(t);const u=this.shapecast({intersectsBounds:d=>Rt.intersectsBox(d),intersectsRange:(d,x,B,A,h,m)=>(_t.copy(m),_t.applyMatrix4(it),e.shapecast({intersectsBounds:y=>_t.intersectsBox(y),intersectsRange:(y,b,P,w,T)=>i(d,x,y,b,A,h,w,T)}))});return N.releasePrimitive(l),N.releasePrimitive(p),u}intersectsBox(e,t){return Q.set(e.min,e.max,t),Q.needsUpdate=!0,this.shapecast({intersectsBounds:s=>Q.intersectsBox(s),intersectsTriangle:s=>Q.intersectsTriangle(s)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,s={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Q.set(e.boundingBox.min,e.boundingBox.max,t),Q.needsUpdate=!0;const f=this.geometry,c=f.attributes.position,a=f.index,l=e.attributes.position,p=e.index,u=N.getPrimitive(),d=N.getPrimitive();let x=Mt,B=Ge,A=null,h=null;i&&(A=Qe,h=tn);let m=1/0,y=null,b=null;return it.copy(t).invert(),ft.matrix.copy(it),this.shapecast({boundsTraverseOrder:P=>Q.distanceToBox(P),intersectsBounds:(P,w,T)=>T<m&&T<o?(w&&(ft.min.copy(P.min),ft.max.copy(P.max),ft.needsUpdate=!0),!0):!1,intersectsRange:(P,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:T=>ft.distanceToBox(T),intersectsBounds:(T,v,g)=>g<m&&g<o,intersectsRange:(T,v)=>{for(let g=T*3,S=(T+v)*3;g<S;g+=3){V(d,g,p,l),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let I=P*3,C=(P+w)*3;I<C;I+=3){V(u,I,a,c),u.needsUpdate=!0;const E=u.distanceToTriangle(d,x,A);if(E<m&&(B.copy(x),h&&h.copy(A),m=E,y=I/3,b=g/3),E<r)return!0}}}});{const T=p?p.count:l.count;for(let v=0,g=T;v<g;v+=3){V(d,v,p,l),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let S=P*3,I=(P+w)*3;S<I;S+=3){V(u,S,a,c),u.needsUpdate=!0;const C=u.distanceToTriangle(d,x,A);if(C<m&&(B.copy(x),h&&h.copy(A),m=C,y=S/3,b=v/3),C<r)return!0}}}}}),N.releasePrimitive(u),N.releasePrimitive(d),m===1/0?null:(s.point?s.point.copy(B):s.point=B.clone(),s.distance=m,s.faceIndex=y,i&&(i.point?i.point.copy(h):i.point=h.clone(),i.point.applyMatrix4(it),B.applyMatrix4(it),i.distance=B.sub(i.point).length(),i.faceIndex=b),s)}closestPointToPoint(e,t={},s=0,i=1/0){const r=s*s,o=i*i;let f=1/0,c=null;if(this.shapecast({boundsTraverseOrder:l=>(ut.copy(e).clamp(l.min,l.max),ut.distanceToSquared(e)),intersectsBounds:(l,p,u)=>u<f&&u<o,intersectsTriangle:(l,p)=>{l.closestPointToPoint(e,ut);const u=e.distanceToSquared(ut);return u<f&&(Mt.copy(ut),f=u,c=p),u<r}}),f===1/0)return null;const a=Math.sqrt(f);return t.point?t.point.copy(Mt):t.point=Mt.clone(),t.distance=a,t.faceIndex=c,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(s=>{q(0,new Float32Array(s),se),e.union(se)}),e}}const Nt=new Te,ie=new yt,en=ue.prototype.raycast;function nn(n,e){if(this.geometry.boundsTree){if(this.material===void 0)return;ie.copy(this.matrixWorld).invert(),Nt.copy(n.ray).applyMatrix4(ie);const t=this.geometry.boundsTree;if(n.firstHitOnly===!0){const s=ee(t.raycastFirst(Nt,this.material),this,n);s&&e.push(s)}else{const s=t.raycast(Nt,this.material);for(let i=0,r=s.length;i<r;i++){const o=ee(s[i],this,n);o&&e.push(o)}}}else en.call(this,n,e)}function sn(n){return this.boundsTree=new ht(this,n),this.boundsTree}function on(){this.boundsTree=null}const rn=()=>{Yt.prototype.computeBoundsTree=sn,Yt.prototype.disposeBoundsTree=on,ue.prototype.raycast=nn,ae.prototype.firstHitOnly=!0},cn=`import { MouseRaycaster } from 'trzy'

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
`,un={title:"Mouse Raycaster",parameters:{docs:{source:{code:cn}}}},an=()=>{rn();const{scene:n,camera:e,renderer:t}=ve();return Be().then(()=>{const s=new M(1,1,1);let i=!1,r=.1;const o=n.getObjectByName("Strawberry");o.traverse(c=>{var a,l;return(l=(a=c.geometry)==null?void 0:a.computeBoundsTree)==null?void 0:l.call(a)});const f=new Se({renderer:t});f.recursive=!0,f.objects=[o],f.camera=e.current,f.on("move",c=>{c.intersections.length>0?(r=.1,s.setScalar(.12)):(r=.1,s.setScalar(.1)),i=c.intersections.length>0}),f.on("click",c=>{c.intersections.length!==0&&(r=.2,s.setScalar(s.x===.17?i?.12:.1:.17))}),ge(()=>o.scale.lerp(s,r))}),t.domElement},It={render:an};var oe,re,ce;It.parameters={...It.parameters,docs:{...(oe=It.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render
}`,...(ce=(re=It.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const pn=["Primary"];export{It as Primary,pn as __namedExportsOrder,un as default};
//# sourceMappingURL=index.stories-fc5f1632.js.map
