import{r as X,s as U,n as G,c as Y,d as Z,u as ee,g as te,e as se}from"../chunks/scheduler.b0c1c2c3.js";import{d as x,S as B,i as F,g as w,h as b,j as $,f as u,k as v,a as y,e as E,m as J,s as O,n as Q,c as T,x as k,o as R,y as I,r as ne,u as le,v as ae,t as L,w as oe}from"../chunks/index.f44ac6f0.js";import{p as ie}from"../chunks/stores.2c480587.js";import{e as P}from"../chunks/singletons.180b201d.js";function q(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function re(a,e){a.d(1),e.delete(a.key)}function ce(a,e,n,i,r,o,t,s,l,f,g,W){let _=a.length,m=o.length,d=_;const H={};for(;d--;)H[a[d].key]=d;const M=[],A=new Map,j=new Map,V=[];for(d=m;d--;){const c=W(r,o,d),h=n(c);let p=t.get(h);p?i&&V.push(()=>p.p(c,e)):(p=f(h,c),p.c()),A.set(h,M[d]=p),h in H&&j.set(h,Math.abs(d-H[h]))}const z=new Set,C=new Set;function N(c){x(c,1),c.m(s,g),t.set(c.key,c),g=c.first,m--}for(;_&&m;){const c=M[m-1],h=a[_-1],p=c.key,S=h.key;c===h?(g=c.first,_--,m--):A.has(S)?!t.has(p)||z.has(p)?N(c):C.has(S)?_--:j.get(p)>j.get(S)?(C.add(p),N(c)):(z.add(S),_--):(l(h,t),_--)}for(;_--;){const c=a[_];A.has(c.key)||l(c,t)}for(;m;)N(M[m-1]);return X(V),M}const fe=!0,ue=!1,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:fe,ssr:ue},Symbol.toStringTag,{value:"Module"}));function D(a,e,n){const i=a.slice();return i[2]=e[n][0],i[3]=e[n][1],i}function he(a){let e,n=a[2]+"",i,r;return{c(){e=w("p"),i=J(n),r=O(),this.h()},l(o){e=b(o,"P",{class:!0});var t=$(e);i=Q(t,n),r=T(t),t.forEach(u),this.h()},h(){v(e,"class","uppercase text-xs font-bold pt-4 pb-1 px-6 text-white")},m(o,t){y(o,e,t),k(e,i),k(e,r)},p(o,t){t&1&&n!==(n=o[2]+"")&&R(i,n)},d(o){o&&u(e)}}}function pe(a){let e,n=a[2]+"",i,r,o;return{c(){e=w("a"),i=J(n),r=O(),this.h()},l(t){e=b(t,"A",{href:!0,class:!0});var s=$(e);i=Q(s,n),r=T(s),s.forEach(u),this.h()},h(){v(e,"href",o=P+"/"+a[3]),v(e,"class","block py-1 px-6 text-sm no-underline text-white text-opacity-70 svelte-50d7fa"),I(e,"active",`/${a[3]}`===a[1].route.id)},m(t,s){y(t,e,s),k(e,i),k(e,r)},p(t,s){s&1&&n!==(n=t[2]+"")&&R(i,n),s&1&&o!==(o=P+"/"+t[3])&&v(e,"href",o),s&3&&I(e,"active",`/${t[3]}`===t[1].route.id)},d(t){t&&u(e)}}}function K(a,e){let n,i;function r(s,l){return s[3]!==void 0?pe:he}let o=r(e),t=o(e);return{key:a,first:null,c(){n=E(),t.c(),i=E(),this.h()},l(s){n=E(),t.l(s),i=E(),this.h()},h(){this.first=n},m(s,l){y(s,n,l),t.m(s,l),y(s,i,l)},p(s,l){e=s,o===(o=r(e))&&t?t.p(e,l):(t.d(1),t=o(e),t&&(t.c(),t.m(i.parentNode,i)))},d(s){s&&(u(n),u(i)),t.d(s)}}}function _e(a){let e,n=[],i=new Map,r=q(a[0]);const o=t=>t[2];for(let t=0;t<r.length;t+=1){let s=D(a,r,t),l=o(s);i.set(l,n[t]=K(l,s))}return{c(){e=w("nav");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=b(t,"NAV",{class:!0});var s=$(e);for(let l=0;l<n.length;l+=1)n[l].l(s);s.forEach(u),this.h()},h(){v(e,"class","sticky top-0 self-start py-12 svelte-50d7fa")},m(t,s){y(t,e,s);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(t,[s]){s&3&&(r=q(t[0]),n=ce(n,s,o,1,t,r,i,e,re,K,null,D))},i:G,o:G,d(t){t&&u(e);for(let s=0;s<n.length;s+=1)n[s].d()}}}function de(a,e,n){let i;Y(a,ie,o=>n(1,i=o));let{routes:r}=e;return a.$$set=o=>{"routes"in o&&n(0,r=o.routes)},[r,i]}class me extends B{constructor(e){super(),F(this,e,de,_e,U,{routes:0})}}function ve(a){let e,n,i,r,o;n=new me({props:{routes:[["Trzy",""],["Helpers"],["AxesHelper","axes-helper"],["GridHelper","grid-helper"],["ViewHelper","view-helper"],["Objects"],["HTML","html"],["CameraShake","camera-shake"],["Hooks"],["pointerEvents","pointer-events"],["useGamepad","use-gamepad"],["useKeyboard","use-keyboard"],["Utilities"],["Math","math"]]}});const t=a[1].default,s=Z(t,a,a[0],null);return{c(){e=w("main"),ne(n.$$.fragment),i=O(),r=w("div"),s&&s.c(),this.h()},l(l){e=b(l,"MAIN",{class:!0});var f=$(e);le(n.$$.fragment,f),i=T(f),r=b(f,"DIV",{class:!0});var g=$(r);s&&s.l(g),g.forEach(u),f.forEach(u),this.h()},h(){v(r,"class","svelte-x6sku0"),v(e,"class","svelte-x6sku0")},m(l,f){y(l,e,f),ae(n,e,null),k(e,i),k(e,r),s&&s.m(r,null),o=!0},p(l,[f]){s&&s.p&&(!o||f&1)&&ee(s,t,l,l[0],o?se(t,l[0],f,null):te(l[0]),null)},i(l){o||(x(n.$$.fragment,l),x(s,l),o=!0)},o(l){L(n.$$.fragment,l),L(s,l),o=!1},d(l){l&&u(e),oe(n),s&&s.d(l)}}}function ge(a,e,n){let{$$slots:i={},$$scope:r}=e;return a.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,i]}class Me extends B{constructor(e){super(),F(this,e,ge,ve,U,{})}}export{Me as component,$e as universal};