(function(){"use strict";var e={7530:function(e,t,n){var r=n(9242),i=n(3396),o=(n(7658),n(7139)),a=n(4870),u=n.p+"img/muyu.01b485fa.png",c=n.p+"img/shaoxiang.099f3d44.png",s=n.p+"img/qiuqian.f027b624.png",l=n.p+"img/yinyue.5be95193.png",f=n.p+"media/3.af4565b8.mp3",d=n(2578),m=n(2483),p=n(2094);const h=e=>((0,i.dD)("data-v-6a79a8ec"),e=e(),(0,i.Cn)(),e),v={class:"total"},g={class:"navbar"},b=h((()=>(0,i._)("source",{src:f},null,-1))),y=[b];var w={__name:"NavBar",setup(e){const t=(0,m.tv)(),n=(0,p.L)(),{merit:r,getMerit:f}=(0,d.Jk)(n),h=((0,i.Fl)((()=>f)),(0,a.iH)(!1)),b=(0,a.iH)(null),w=()=>{h.value=!h.value,h.value?b.value.play():b.value.pause()},_=e=>{t.push(e)};return(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",v,"功德："+(0,o.zw)((0,a.SU)(r)),1),(0,i._)("div",g,[(0,i._)("img",{src:u,class:"but",onClick:t[0]||(t[0]=e=>_("/"))}),(0,i._)("img",{src:c,class:"but",onClick:t[1]||(t[1]=e=>_("/shaoxiang"))}),(0,i._)("img",{src:s,class:"but",onClick:t[2]||(t[2]=e=>_("/qiuqian"))}),(0,i._)("img",{src:l,class:"but",onClick:w})]),(0,i._)("audio",{id:"bgmusic",ref_key:"audioElement",ref:b},y,512)],64))}},_=n(89);const k=(0,_.Z)(w,[["__scopeId","data-v-6a79a8ec"]]);var S=k,O={__name:"App",setup(e){return(e,t)=>{const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),(0,i.Wm)(S)],64)}}};const C=O;var E=C;const x=[{path:"/",name:"muyu",component:()=>n.e(114).then(n.bind(n,7934))},{path:"/shaoxiang",name:"shaoxiang",component:()=>n.e(941).then(n.bind(n,6941))},{path:"/qiuqian",name:"qiuqian",component:()=>n.e(706).then(n.bind(n,4706))},{path:"/:pathMatch(.*)",component:()=>n.e(114).then(n.bind(n,7934))}],N=(0,m.p7)({history:(0,m.PO)("/Wooden-Fish-Vue-Web/"),routes:x});var j=N,A=n(3282);const W=(0,d.WB)();W.use(A.Z),W.use((({store:e})=>{const t=JSON.parse(JSON.stringify(e.$state));e.$reset=()=>{e.$state=JSON.parse(JSON.stringify(t))}}));var q=W;let F=16;const T=375;let L={enable:!0,config:[{maxWidth:1024,baseSize:32},{maxWidth:430,baseSize:48}]};function M(){let e=F;const t=document.documentElement.clientWidth>T?document.documentElement.clientWidth:T;L&&L.enable&&L.config.every((n=>{if(t<=n.maxWidth)return e=n.baseSize,!0}));const n=t/1920,r=e*Math.min(n,2);if(document.documentElement.style.fontSize=`${r}px`,t<=1024){let e=document.querySelector('meta[name="viewport"]');e.setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0")}}document.documentElement.style.minWidth=`${T}px`,M(),window.addEventListener("resize",M),j.afterEach(((e,t)=>{M()})),(0,r.ri)(E).use(q).use(j).mount("#app")},2094:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(2578),i=n(4870),o=n(3396);const a=(0,r.Q_)("user",(()=>{const e=(0,i.qj)({name:"jackie",age:18}),t=(0,i.iH)(0),n=(0,o.Fl)((()=>t.value)),r=(0,o.Fl)((()=>`年龄：${e.age}-${e.age}岁`)),a=t=>e.name=t,u=t=>e.age+=t,c=e=>t.value+=e;return{...(0,i.BK)(e),merit:t,Age:r,getMerit:n,setName:a,setAge:u,setMerit:c}}),{persist:{enabled:!0,storage:sessionStorage,paths:[]}})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{114:"56b95e3b",706:"d7beb564",941:"a0d358d4"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{114:"85fb40d7",706:"cf68cdf9",941:"5a616c30"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wooden-fish-vue-web:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[i];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Wooden-Fish-Vue-Web/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode&&o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return i();e(r,u,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={114:1,706:1,941:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkwooden_fish_vue_web"]=self["webpackChunkwooden_fish_vue_web"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7530)}));r=n.O(r)})();
//# sourceMappingURL=app.76f4d448.js.map