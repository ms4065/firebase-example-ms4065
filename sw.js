if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>n(e,o),d={module:{uri:o},exports:t,require:f};i[o]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.8ed963de.js",revision:null},{url:"index.html",revision:"54a05160b385591820960ad1cefb2e73"},{url:"registerSW.js",revision:"5b81f2a0ca2035f6f78684d0bbd3e442"},{url:"favicon.ico",revision:"09a468b0e5d0161dec84466518d99e97"},{url:"apple-touch-icon.png",revision:"ffc167ca824e7f598a9047abf06142d9"},{url:"pwa-512x512.png",revision:"f5f78048b90f389d8083f858a65df5ce"},{url:"manifest.webmanifest",revision:"46b7c4f09e2dbdcf9eb7ba112f712641"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));