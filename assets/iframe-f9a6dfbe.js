import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const p="modulepreload",R=function(o,_){return new URL(o,_).href},l={},e=function(_,n,a){if(!n||n.length===0)return _();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=R(t,a),t in l)return;l[t]=!0;const i=t.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const m=r[c];if(m.href===t&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":p,i||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),i)return new Promise((c,m)=>{s.addEventListener("load",c),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>_())},{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:P}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,O=T({page:"preview"});E.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=P({url:u});E.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const f={"./src/stories/three/index.stories.ts":async()=>e(()=>import("./index.stories-22d7cf1a.js"),["./index.stories-22d7cf1a.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/lib/index.stories.mdx":async()=>e(()=>import("./index.stories-812ad8bd.js"),["./index.stories-812ad8bd.js","./index-b36dbce1.js","./_commonjsHelpers-725317a4.js","./index-d475d2ea.js","./index-d37d4223.js","./index-c45868c5.js","./index-356e4a49.js","./index-97ddb740.js"],import.meta.url),"./src/stories/axes-helper/index.stories.ts":async()=>e(()=>import("./index.stories-711ea2a7.js"),["./index.stories-711ea2a7.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/camera-shake/index.stories.ts":async()=>e(()=>import("./index.stories-77c58811.js"),["./index.stories-77c58811.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/gamepad/index.stories.ts":async()=>e(()=>import("./index.stories-97975726.js"),["./index.stories-97975726.js","./teleport-12648e09.js"],import.meta.url),"./src/stories/html/index.stories.ts":async()=>e(()=>import("./index.stories-213f74e7.js"),["./index.stories-213f74e7.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/keyboard/index.stories.ts":async()=>e(()=>import("./index.stories-e0bda4b7.js"),["./index.stories-e0bda4b7.js","./teleport-12648e09.js"],import.meta.url),"./src/stories/mouse-raycaster/mouse-raycaster.stories.ts":async()=>e(()=>import("./mouse-raycaster.stories-fe581c39.js"),["./mouse-raycaster.stories-fe581c39.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/orbit-controls-gizmo/index.stories.ts":async()=>e(()=>import("./index.stories-6c744a86.js"),["./index.stories-6c744a86.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/soft-shadows/index.stories.ts":async()=>e(()=>import("./index.stories-3ed40ef1.js"),["./index.stories-3ed40ef1.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/three/index.stories.ts":async()=>e(()=>import("./index.stories-22d7cf1a.js"),["./index.stories-22d7cf1a.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/webgpu/index.stories.ts":async()=>e(()=>import("./index.stories-c2cbcb9a.js"),["./index.stories-c2cbcb9a.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url),"./src/stories/xr/index.stories.ts":async()=>e(()=>import("./index.stories-e5749c46.js"),["./index.stories-e5749c46.js","./teleport-12648e09.js","./lib-d58bb1a1.js"],import.meta.url)};async function L(o){return f[o]()}const{composeConfigs:A,PreviewWeb:I,ClientApi:y}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const o=await Promise.all([e(()=>import("./config-feb329f9.js"),["./config-feb329f9.js","./index-d475d2ea.js","./index-356e4a49.js","./index-c45868c5.js","./_commonjsHelpers-725317a4.js"],import.meta.url),e(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),e(()=>import("./preview-8d665b38.js"),[],import.meta.url),e(()=>import("./preview-a60aa466.js"),[],import.meta.url),e(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-b038cc74.js"),["./preview-b038cc74.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js"],import.meta.url),e(()=>import("./preview-5adc7f14.js"),[],import.meta.url)]);return A(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new y({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:S});export{e as _};
//# sourceMappingURL=iframe-f9a6dfbe.js.map
