import{s as L,d as O,u as H,g as R,e as S,n as x,b as q}from"./scheduler.b0c1c2c3.js";import{S as P,i as z,g as j,m as b,s as T,h as w,j as D,n as k,f as g,c as A,k as h,a as E,x as m,o as I,d as K,t as N}from"./index.f44ac6f0.js";function B(i){let e,l,s,p,o;const c=i[2].default,r=O(c,i,i[1],null);return{c(){e=j("article"),l=j("h1"),s=b(i[0]),p=T(),r&&r.c(),this.h()},l(n){e=w(n,"ARTICLE",{class:!0});var a=D(e);l=w(a,"H1",{class:!0});var u=D(l);s=k(u,i[0]),u.forEach(g),p=A(a),r&&r.l(a),a.forEach(g),this.h()},h(){h(l,"class","m-0 py-4 font-bold text-3xl"),h(e,"class","p-8 svelte-wba0z3")},m(n,a){E(n,e,a),m(e,l),m(l,s),m(e,p),r&&r.m(e,null),o=!0},p(n,[a]){(!o||a&1)&&I(s,n[0]),r&&r.p&&(!o||a&2)&&H(r,c,n,n[1],o?S(c,n[1],a,null):R(n[1]),null)},i(n){o||(K(r,n),o=!0)},o(n){N(r,n),o=!1},d(n){n&&g(e),r&&r.d(n)}}}function F(i,e,l){let{$$slots:s={},$$scope:p}=e,{title:o}=e;return i.$$set=c=>{"title"in c&&l(0,o=c.title),"$$scope"in c&&l(1,p=c.$$scope)},[o,p,s]}class de extends P{constructor(e){super(),z(this,e,F,B,L,{title:0})}}const G="trzy",J="0.3.0",Q="A utility library for Three.js",U="module",V="Micheal Parks",W="MIT",X={url:"https://github.com/michealparks/trzy/issues"},Y="https://github.com/michealparks/trzy#readme",Z=["dist","!dist/**/*.test.*","!dist/**/*.spec.*"],$=["three","three.js","util","3d","webgl"],ee={lint:"eslint ./src",models:"node ./scripts/models.js",start:"vite dev",build:"vite build && npm run package",preview:"vite preview",package:"svelte-kit sync && svelte-package && publint",prepublishOnly:"npm run package",check:"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json","check:watch":"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"},te={".":{types:"./dist/index.d.ts",svelte:"./dist/index.js"}},se={three:"*"},ne={"@sveltejs/adapter-static":"^2.0.3","@sveltejs/kit":"^1.22.4","@sveltejs/package":"^2.2.0","@types/prismjs":"^1.26.0","@types/three":"^0.155.0","@typescript-eslint/eslint-plugin":"^6.2.1","@typescript-eslint/parser":"^6.2.1",autoprefixer:"^10.4.14",eslint:"^8.46.0","eslint-plugin-unicorn":"^48.0.1",postcss:"^8.4.27",postprocessing:"^6.32.2",prismjs:"^1.29.0",publint:"^0.2.0","simplex-noise":"^4.0.1",svelte:"^4.1.2","svelte-check":"^3.4.6",tailwindcss:"^3.3.3",three:"^0.155.0","three-inspect":"^0.3.4","three-mesh-bvh":"^0.6.3",tslib:"^2.6.1",typescript:"^5.1.6",vite:"^4.4.8","vite-plugin-glsl":"^1.1.2"},ie="./dist/index.js",le="./dist/index.d.ts",ce={name:G,version:J,description:Q,type:U,author:V,license:W,bugs:X,homepage:Y,files:Z,keywords:$,scripts:ee,exports:te,peerDependencies:se,devDependencies:ne,svelte:ie,types:le};function re(i){let e,l,s,p,o,c,r,n,a,u,v;return{c(){e=j("pre"),l=b("  "),s=j("code"),p=b(`
    `),o=b(i[1]),c=b(`
  `),n=b(`
`),a=T(),u=j("link"),this.h()},l(d){e=w(d,"PRE",{class:!0});var t=D(e);l=k(t,"  "),s=w(t,"CODE",{class:!0});var f=D(s);p=k(f,`
    `),o=k(f,i[1]),c=k(f,`
  `),f.forEach(g),n=k(t,`
`),t.forEach(g),a=A(d),u=w(d,"LINK",{rel:!0,crossorigin:!0,referrerpolicy:!0,href:!0}),this.h()},h(){h(s,"class",r="language-"+i[0]+" font-mono"),h(e,"class","flex-1 !bg-[#f8f8f8] !border-none !my-4 !mx-0 !py-0 !px-4"),h(u,"rel","stylesheet"),h(u,"crossorigin","anonymous"),h(u,"referrerpolicy","no-referrer"),h(u,"href",v="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-"+i[2]+".min.css")},m(d,t){E(d,e,t),m(e,l),m(e,s),m(s,p),m(s,o),m(s,c),i[4](s),m(e,n),E(d,a,t),E(d,u,t)},p(d,[t]){t&2&&I(o,d[1]),t&1&&r!==(r="language-"+d[0]+" font-mono")&&h(s,"class",r),t&4&&v!==(v="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-"+d[2]+".min.css")&&h(u,"href",v)},i:x,o:x,d(d){d&&(g(e),g(a),g(u)),i[4](null)}}}const C={};function oe(i,e,l){let{language:s="typescript"}=e,{code:p}=e,{theme:o="vs"}=e,c;const r=ce.devDependencies.prismjs.replace("^",""),n=t=>`https://cdnjs.cloudflare.com/ajax/libs/prism/${r}/${t}`,a=t=>new Promise((f,y)=>{const _=document.createElement("script");_.async=!0,_.src=t,_.addEventListener("load",f),_.addEventListener("error",y),document.head.append(_)}),u=async()=>{const{Prism:t}=window;t||await a(n("prism.min.js")),!C[s]&&s&&(await a(n(`components/prism-${s}.min.js`)),C[s]=!0),window.Prism.highlightElement(c)},v=t=>{const f={"<":"&lt",">":"&gt","/":"&#47"};let y=t;for(const[_,M]of Object.entries(f))y&&(y=y.replaceAll(_,M));return y};function d(t){q[t?"unshift":"push"](()=>{c=t,l(3,c),l(1,p)})}return i.$$set=t=>{"language"in t&&l(0,s=t.language),"code"in t&&l(1,p=t.code),"theme"in t&&l(2,o=t.theme)},i.$$.update=()=>{i.$$.dirty&10&&c&&p&&(l(3,c.innerHTML=v(p),c),u())},[s,p,o,c,d]}class ue extends P{constructor(e){super(),z(this,e,oe,re,L,{language:0,code:1,theme:2})}}export{ue as C,de as D};
