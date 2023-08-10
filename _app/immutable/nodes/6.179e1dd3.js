import{s as C,o as M,n as b}from"../chunks/scheduler.b0c1c2c3.js";import{S as y,i as H,r as f,u as p,v as $,d,t as _,w as g,g as T,s as h,h as E,z as j,c as w,a as l,f as u}from"../chunks/index.f44ac6f0.js";import{u as D,s as L,M as z,B as S,c as k,d as v,H as B,b as x,C as I}from"../chunks/setup.ed225109.js";import{D as P,C as q}from"../chunks/code.97b5a18f.js";const A=`
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
`;function F(i){let t,o="HTML elements that are positioned relatively to objects.",n,a,m,c,s;return a=new I({}),c=new q({props:{code:A}}),{c(){t=T("p"),t.textContent=o,n=h(),f(a.$$.fragment),m=h(),f(c.$$.fragment)},l(e){t=E(e,"P",{"data-svelte-h":!0}),j(t)!=="svelte-fau9xj"&&(t.textContent=o),n=w(e),p(a.$$.fragment,e),m=w(e),p(c.$$.fragment,e)},m(e,r){l(e,t,r),l(e,n,r),$(a,e,r),l(e,m,r),$(c,e,r),s=!0},p:b,i(e){s||(d(a.$$.fragment,e),d(c.$$.fragment,e),s=!0)},o(e){_(a.$$.fragment,e),_(c.$$.fragment,e),s=!1},d(e){e&&(u(t),u(n),u(m)),g(a,e),g(c,e)}}}function G(i){let t,o;return t=new P({props:{title:"HTML",$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){f(t.$$.fragment)},l(n){p(t.$$.fragment,n)},m(n,a){$(t,n,a),o=!0},p(n,[a]){const m={};a&1&&(m.$$scope={dirty:a,ctx:n}),t.$set(m)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){_(t.$$.fragment,n),o=!1},d(n){g(t,n)}}}function U(i){return M(()=>{const{scene:t}=D();L();const o=[],n=[],a=6;for(let s=0;s<a;s+=1){const e=document.createElement("div");e.innerHTML=`Cube ${s}`,e.style.cssText=`
      background: white;
      padding: 0.25rem 0.5rem;
    `;const r=new z(new S,new k);r.position.set(v.randInt(-2,2),-.25,v.randInt(-2,2)),t.add(r),o.push(r),n.push(new B({element:e,object3D:r}))}const{stop:m}=x(()=>{o.forEach(s=>s.rotation.y+=.01)}),{stop:c}=x(s=>{n.forEach(e=>e.update(s.camera.current,s.renderer))},{stage:"after"});return()=>{n.forEach(s=>s.dispose()),m(),c()}}),[]}class Q extends y{constructor(t){super(),H(this,t,U,G,C,{})}}export{Q as component};
