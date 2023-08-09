import{s as X,n as Y}from"../chunks/scheduler.b0c1c2c3.js";import{S as Z,i as ee,r as w,u as g,v as P,d as F,t as j,w as E,g as o,s as m,h as f,z as p,c as i,a as n,f as r}from"../chunks/index.f44ac6f0.js";import{D as te,C as k}from"../chunks/code.b8097ffb.js";function ne(J){let a,u=`The Trzy library mainly consists of extras, utils, and helpers, but also contains 
    a very thin framework meant to act as a vanilla replacement for some features provided
    by React Three Fiber or Threlte.`,s,l,H="The first call to the <code>useTrzy()</code> function will instantiate everything you need to get a THREE.js project started.",q,$,L,c,K="useTrzy",R,d,N="The `useTrzy` function will provide all instantiated objects.",h,x,D,y,Q="The renderer will automatically resize to the size of its parent.",M,v,U="Trzy will automatically create a render loop, and callbacks can be added to it.",S,C,O,_,V="Frame callbacks can be manually started and stopped, and render order can be specified.",A,z,B,T,W="Cameras can be changed by reassigning the default camera.",G,b,I;return $=new k({props:{code:`
import { useTrzy } from 'trzy'

useTrzy()
`}}),x=new k({props:{code:`
import { useTrzy, ambientLight, box } from 'trzy'

const { scene, camera, renderer } = useTrzy()

document.append(renderer.domElement)
`}}),C=new k({props:{code:`
import { useFrame } from 'trzy'

useFrame((ctx, delta) => {
  ctx.camera.current.position.z += 0.1
})
`}}),z=new k({props:{code:`
import { useFrame } from 'trzy'

useFrame((ctx, delta) => {
  ctx.camera.current.position.z += 0.1
})
`}}),b=new k({props:{code:`
import { useTrzy } from 'trzy'

const { camera } = useTrzy()

camera.current = new THREE.OrthographicCamera()
`}}),{c(){a=o("p"),a.textContent=u,s=m(),l=o("p"),l.innerHTML=H,q=m(),w($.$$.fragment),L=m(),c=o("h3"),c.textContent=K,R=m(),d=o("p"),d.textContent=N,h=m(),w(x.$$.fragment),D=m(),y=o("p"),y.textContent=Q,M=m(),v=o("p"),v.textContent=U,S=m(),w(C.$$.fragment),O=m(),_=o("p"),_.textContent=V,A=m(),w(z.$$.fragment),B=m(),T=o("p"),T.textContent=W,G=m(),w(b.$$.fragment)},l(e){a=f(e,"P",{"data-svelte-h":!0}),p(a)!=="svelte-1vr50cf"&&(a.textContent=u),s=i(e),l=f(e,"P",{"data-svelte-h":!0}),p(l)!=="svelte-1j1bdos"&&(l.innerHTML=H),q=i(e),g($.$$.fragment,e),L=i(e),c=f(e,"H3",{"data-svelte-h":!0}),p(c)!=="svelte-p4um56"&&(c.textContent=K),R=i(e),d=f(e,"P",{"data-svelte-h":!0}),p(d)!=="svelte-3823fv"&&(d.textContent=N),h=i(e),g(x.$$.fragment,e),D=i(e),y=f(e,"P",{"data-svelte-h":!0}),p(y)!=="svelte-jqi9vz"&&(y.textContent=Q),M=i(e),v=f(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-gd18fp"&&(v.textContent=U),S=i(e),g(C.$$.fragment,e),O=i(e),_=f(e,"P",{"data-svelte-h":!0}),p(_)!=="svelte-ua682a"&&(_.textContent=V),A=i(e),g(z.$$.fragment,e),B=i(e),T=f(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1kqww29"&&(T.textContent=W),G=i(e),g(b.$$.fragment,e)},m(e,t){n(e,a,t),n(e,s,t),n(e,l,t),n(e,q,t),P($,e,t),n(e,L,t),n(e,c,t),n(e,R,t),n(e,d,t),n(e,h,t),P(x,e,t),n(e,D,t),n(e,y,t),n(e,M,t),n(e,v,t),n(e,S,t),P(C,e,t),n(e,O,t),n(e,_,t),n(e,A,t),P(z,e,t),n(e,B,t),n(e,T,t),n(e,G,t),P(b,e,t),I=!0},p:Y,i(e){I||(F($.$$.fragment,e),F(x.$$.fragment,e),F(C.$$.fragment,e),F(z.$$.fragment,e),F(b.$$.fragment,e),I=!0)},o(e){j($.$$.fragment,e),j(x.$$.fragment,e),j(C.$$.fragment,e),j(z.$$.fragment,e),j(b.$$.fragment,e),I=!1},d(e){e&&(r(a),r(s),r(l),r(q),r(L),r(c),r(R),r(d),r(h),r(D),r(y),r(M),r(v),r(S),r(O),r(_),r(A),r(B),r(T),r(G)),E($,e),E(x,e),E(C,e),E(z,e),E(b,e)}}}function re(J){let a,u;return a=new te({props:{title:"Trzy",$$slots:{default:[ne]},$$scope:{ctx:J}}}),{c(){w(a.$$.fragment)},l(s){g(a.$$.fragment,s)},m(s,l){P(a,s,l),u=!0},p(s,[l]){const H={};l&1&&(H.$$scope={dirty:l,ctx:s}),a.$set(H)},i(s){u||(F(a.$$.fragment,s),u=!0)},o(s){j(a.$$.fragment,s),u=!1},d(s){E(a,s)}}}class me extends Z{constructor(a){super(),ee(this,a,null,re,X,{})}}export{me as component};
