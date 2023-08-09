import{s as O,n as W}from"../chunks/scheduler.b0c1c2c3.js";import{S as D,i as H,r as _,u as h,v as C,d as x,t as g,w as P,g as y,s as u,h as S,z,c as d,a as l,f as c}from"../chunks/index.f44ac6f0.js";import{D as b,C as w}from"../chunks/code.e54316d0.js";function q($){let e,r="Circle",n,o,s,a,v="Sphere",f,i,p;return o=new w({props:{code:`
import { randomPointOnCircle, randomPointWithinCircle } from 'trzy'

const [x1, y1] = randomPointOnCircle()
const [x2, y2] = randomPointWithinCircle()
  `}}),i=new w({props:{code:`
import { randomPointOnSphere, randomPointWithinSphere } from 'trzy'

const [x1, y1, z1] = randomPointOnSphere()
const [x2, y2, z2] = randomPointWithinSphere()
  `}}),{c(){e=y("h3"),e.textContent=r,n=u(),_(o.$$.fragment),s=u(),a=y("h3"),a.textContent=v,f=u(),_(i.$$.fragment)},l(t){e=S(t,"H3",{"data-svelte-h":!0}),z(e)!=="svelte-1btn9hg"&&(e.textContent=r),n=d(t),h(o.$$.fragment,t),s=d(t),a=S(t,"H3",{"data-svelte-h":!0}),z(a)!=="svelte-1n21oil"&&(a.textContent=v),f=d(t),h(i.$$.fragment,t)},m(t,m){l(t,e,m),l(t,n,m),C(o,t,m),l(t,s,m),l(t,a,m),l(t,f,m),C(i,t,m),p=!0},p:W,i(t){p||(x(o.$$.fragment,t),x(i.$$.fragment,t),p=!0)},o(t){g(o.$$.fragment,t),g(i.$$.fragment,t),p=!1},d(t){t&&(c(e),c(n),c(s),c(a),c(f)),P(o,t),P(i,t)}}}function M($){let e,r;return e=new b({props:{title:"Math",$$slots:{default:[q]},$$scope:{ctx:$}}}),{c(){_(e.$$.fragment)},l(n){h(e.$$.fragment,n)},m(n,o){C(e,n,o),r=!0},p(n,[o]){const s={};o&1&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){r||(x(e.$$.fragment,n),r=!0)},o(n){g(e.$$.fragment,n),r=!1},d(n){P(e,n)}}}class B extends D{constructor(e){super(),H(this,e,null,M,O,{})}}export{B as component};
