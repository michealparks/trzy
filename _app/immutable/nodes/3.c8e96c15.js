import{s as C,o as w,n as v}from"../chunks/scheduler.b0c1c2c3.js";import{S as H,i as A,r as i,u as $,v as u,d as _,t as d,w as g,g as y,s as h,h as E,z,c as x,a as c,f}from"../chunks/index.f44ac6f0.js";import{s as D,u as S,A as T,C as b}from"../chunks/setup.ed225109.js";import{D as k,C as P}from"../chunks/code.d1157f0e.js";const R=`
import * as THREE from 'three'
import { AxesHelper } from 'trzy'

const scene = new THREE.Scene()
const helper = new AxesHelper()
scene.add(helper)

// Defaults
helper.length = 10
helper.width = 0.1
helper.setColors('red', 'blue', 'green')

// Later
helper.dispose()
`;function q(m){let t,r="Creates axes with thick lines.",n,s,a,o,p;return s=new b({}),o=new P({props:{code:R}}),{c(){t=y("p"),t.textContent=r,n=h(),i(s.$$.fragment),a=h(),i(o.$$.fragment)},l(e){t=E(e,"P",{"data-svelte-h":!0}),z(t)!=="svelte-1b3ayk6"&&(t.textContent=r),n=x(e),$(s.$$.fragment,e),a=x(e),$(o.$$.fragment,e)},m(e,l){c(e,t,l),c(e,n,l),u(s,e,l),c(e,a,l),u(o,e,l),p=!0},p:v,i(e){p||(_(s.$$.fragment,e),_(o.$$.fragment,e),p=!0)},o(e){d(s.$$.fragment,e),d(o.$$.fragment,e),p=!1},d(e){e&&(f(t),f(n),f(a)),g(s,e),g(o,e)}}}function L(m){let t,r;return t=new k({props:{title:"AxesHelper",$$slots:{default:[q]},$$scope:{ctx:m}}}),{c(){i(t.$$.fragment)},l(n){$(t.$$.fragment,n)},m(n,s){u(t,n,s),r=!0},p(n,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){r||(_(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){g(t,n)}}}function M(m){return w(()=>{D();const{scene:t}=S();t.add(new T)}),[]}class I extends H{constructor(t){super(),A(this,t,M,L,C,{})}}export{I as component};
