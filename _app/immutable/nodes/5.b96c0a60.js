import{s as w,o as x,n as z}from"../chunks/scheduler.b0c1c2c3.js";import{S as G,i as y,r as p,u as $,v as u,d,t as g,w as _,g as H,s as C,h as S,z as q,c as v,a as c,f}from"../chunks/index.f44ac6f0.js";import{s as D,u as P,C as b}from"../chunks/setup.f293222f.js";import{G as h}from"../chunks/index.6f29f975.js";import{D as A,C as M}from"../chunks/code.749cf45e.js";const T=`
import { GridHelper } from 'trzy'

const grid = new GridHelper()
grid.color = '#333'
grid.cellSize = 0.1
grid.largeCellSize = 1

scene.add(grid)
`;function j(m){let t,s="A shader-based grid implementation.",n,r,a,o,l;return r=new b({}),o=new M({props:{code:T}}),{c(){t=H("p"),t.textContent=s,n=C(),p(r.$$.fragment),a=C(),p(o.$$.fragment)},l(e){t=S(e,"P",{"data-svelte-h":!0}),q(t)!=="svelte-4q6zy2"&&(t.textContent=s),n=v(e),$(r.$$.fragment,e),a=v(e),$(o.$$.fragment,e)},m(e,i){c(e,t,i),c(e,n,i),u(r,e,i),c(e,a,i),u(o,e,i),l=!0},p:z,i(e){l||(d(r.$$.fragment,e),d(o.$$.fragment,e),l=!0)},o(e){g(r.$$.fragment,e),g(o.$$.fragment,e),l=!1},d(e){e&&(f(t),f(n),f(a)),_(r,e),_(o,e)}}}function k(m){let t,s;return t=new A({props:{title:"GridHelper",$$slots:{default:[j]},$$scope:{ctx:m}}}),{c(){p(t.$$.fragment)},l(n){$(t.$$.fragment,n)},m(n,r){u(t,n,r),s=!0},p(n,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){s||(d(t.$$.fragment,n),s=!0)},o(n){g(t.$$.fragment,n),s=!1},d(n){_(t,n)}}}function B(m){return x(()=>{D();const{scene:t}=P();t.add(new h(.1,1,"#333"))}),[]}class L extends G{constructor(t){super(),y(this,t,B,k,w,{})}}export{L as component};
