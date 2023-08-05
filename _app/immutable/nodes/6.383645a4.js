import{s as v,o as C,n as M}from"../chunks/scheduler.b0c1c2c3.js";import{S as b,i as y,r as f,u as p,v as $,d,t as _,w as g,g as H,s as h,h as T,z as j,c as w,a as l,f as u}from"../chunks/index.f44ac6f0.js";import{u as D,s as E,M as L,B as z,c as S,d as x,H as k,b as B,C as I}from"../chunks/setup.31a16d21.js";import{D as P,C as q}from"../chunks/code.5b2e6c9d.js";const F=`
import { Html } from 'trzy'

const element = document.createElement('div')
element.innerHTML = 'Cube 1'
element.style.cssText = \`
  background: white;
  padding: 0.25rem 0.5rem;
\`

const html = new Html({
  element,
  object3D,
})
`;function G(i){let t,o="HTML elements that are positioned relatively to objects.",n,a,r,s,m;return a=new I({}),s=new q({props:{code:F}}),{c(){t=H("p"),t.textContent=o,n=h(),f(a.$$.fragment),r=h(),f(s.$$.fragment)},l(e){t=T(e,"P",{"data-svelte-h":!0}),j(t)!=="svelte-fau9xj"&&(t.textContent=o),n=w(e),p(a.$$.fragment,e),r=w(e),p(s.$$.fragment,e)},m(e,c){l(e,t,c),l(e,n,c),$(a,e,c),l(e,r,c),$(s,e,c),m=!0},p:M,i(e){m||(d(a.$$.fragment,e),d(s.$$.fragment,e),m=!0)},o(e){_(a.$$.fragment,e),_(s.$$.fragment,e),m=!1},d(e){e&&(u(t),u(n),u(r)),g(a,e),g(s,e)}}}function U(i){let t,o;return t=new P({props:{title:"HTML",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){f(t.$$.fragment)},l(n){p(t.$$.fragment,n)},m(n,a){$(t,n,a),o=!0},p(n,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){_(t.$$.fragment,n),o=!1},d(n){g(t,n)}}}function A(i){return C(()=>{const{scene:t}=D();E();const o=[],n=[],a=6;for(let s=0;s<a;s+=1){const m=document.createElement("div");m.innerHTML=`Cube ${s}`,m.style.cssText=`
      background: white;
      padding: 0.25rem 0.5rem;
    `;const e=new L(new z,new S);e.position.set(x.randInt(-2,2),-.25,x.randInt(-2,2)),t.add(e),o.push(e),n.push(new k({element:m,object3D:e}))}const{stop:r}=B(()=>{o.forEach(s=>s.rotation.y+=.01)});return()=>{n.forEach(s=>s.dispose()),r()}}),[]}class Q extends b{constructor(t){super(),y(this,t,A,U,v,{})}}export{Q as component};
