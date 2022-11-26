let coepCredentialless=!1;"undefined"==typeof window?(self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(e=>e.waitUntil(self.clients.claim()))),self.addEventListener("message",(e=>{e.data&&("deregister"===e.data.type?self.registration.unregister().then((()=>self.clients.matchAll())).then((e=>{e.forEach((e=>e.navigate(e.url)))})):"coepCredentialless"===e.data.type&&(coepCredentialless=e.data.value))})),self.addEventListener("fetch",(function(e){const r=e.request;if("only-if-cached"===r.cache&&"same-origin"!==r.mode)return;const t=coepCredentialless&&"no-cors"===r.mode?new Request(r,{credentials:"omit"}):r;e.respondWith(fetch(t).then((e=>{if(0===e.status)return e;const r=new Headers(e.headers);return r.set("Cross-Origin-Embedder-Policy","require-corp"),r.set("Cross-Origin-Opener-Policy","same-origin"),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r})})).catch((e=>console.error(e))))}))):(()=>{const e={shouldRegister:()=>!0,shouldDeregister:()=>!1,coepCredentialless:()=>!1,doReload:()=>window.location.reload(),quiet:!1,...window.coi},r=navigator;r.serviceWorker&&r.serviceWorker.controller&&(r.serviceWorker.controller.postMessage({type:"coepCredentialless",value:e.coepCredentialless()}),e.shouldDeregister()&&r.serviceWorker.controller.postMessage({type:"deregister"})),!1===window.crossOriginIsolated&&e.shouldRegister()&&(window.isSecureContext?r.serviceWorker&&r.serviceWorker.register(window.document.currentScript.src).then((t=>{!e.quiet&&console.log("COOP/COEP Service Worker registered",t.scope),t.addEventListener("updatefound",(()=>{!e.quiet&&console.log("Reloading page to make use of updated COOP/COEP Service Worker."),e.doReload()})),t.active&&!r.serviceWorker.controller&&(!e.quiet&&console.log("Reloading page to make use of COOP/COEP Service Worker."),e.doReload())}),(r=>{!e.quiet&&console.error("COOP/COEP Service Worker failed to register:",r)})):!e.quiet&&console.log("COOP/COEP Service Worker not registered, a secure context is required."))})();