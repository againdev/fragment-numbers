"use strict";(self.webpackChunk_tonkeeper_extension=self.webpackChunk_tonkeeper_extension||[]).push([[976],{9356:(t,e,r)=>{r.d(e,{A:()=>a});var s=r(11707);function a(t,e){if(t&&t===e)return!0;try{return!!e&&("string"===typeof t&&(t=s.Address.parse(t)),"string"===typeof e&&(e=s.Address.parse(e)),t.equals(e))}catch(r){return!1}}},53006:(t,e,r)=>{r.d(e,{DC:()=>T,Fu:()=>m,K4:()=>S,MT:()=>A,RM:()=>C,dN:()=>b,g7:()=>w,vB:()=>f,xP:()=>y,y:()=>Z});var s=r(1849),a=r(48544),n=r(34692),o=r(72119),i=r(41235),c=r(97957),u=r(60793),d=r(57443),l=r(94216),p=r(72791),h=r(9356);const y=(0,o.cn)(s.Ct),f=(0,o.cn)(s.FS),v=(0,o.cn)(new n.Z(1)),w=()=>{const[t,e]=(0,o.KO)(y),[r,s]=(0,o.KO)(f);return[t,(0,p.useCallback)((t=>{(0,h.A)(t.address,f.value.address)&&s(y.value),e(t)}),[e,s])]},b=()=>{const[t,e]=(0,o.KO)(f),[r,s]=(0,o.KO)(y);return[t,(0,p.useCallback)((t=>{(0,h.A)(t.address,y.value.address)&&s(f.value),e(t)}),[e,s])]},Z=()=>(0,o.KO)(v),m=()=>{const{data:t,isError:e}=E(),[r]=w(),a=(0,u.h)(r);return(0,i.useQuery)({queryKey:[c.S8.swapMaxValue,t,r.id,null===a||void 0===a?void 0:a.toFixed(0)],queryFn:async()=>{if(e)return a;if(a&&t){if(r.id===s.Ct.id){const e=new n.Z(t.dedust.tonToJetton),r=new n.Z(t.stonfi.tonToJetton),s=a.minus(n.Z.max(e,r)).minus(1e6);return s.lt(0)?new n.Z(0):s}return a}},enabled:(!!t||e)&&void 0!==a})},E=()=>{const{swapService:t}=(0,l.W)();return(0,i.useQuery)({queryKey:[c.S8.swapGasConfig],queryFn:async()=>t.swapGas()})},g=(0,o.cn)(void 0),S=()=>(0,o.KO)(g),A=()=>{const[t]=w(),[e]=b(),[r]=S(),{data:s,isLoading:o}=(0,d.UJ)((0,a.J)(t.address)),{data:i,isLoading:c}=(0,d.UJ)((0,a.J)(e.address)),u=null===r||void 0===r?void 0:r.trade;if(!u||c||o)return;if(null===s||void 0===s||!s.prices||null===i||void 0===i||!i.prices)return null;const l=new n.Z(u.from.relativeAmount).multipliedBy(s.prices),p=new n.Z(u.to.relativeAmount).multipliedBy(i.prices);return l.isEqualTo(p)?new n.Z(0):l.minus(p).dividedBy(l)},T=t=>t?t.isGreaterThan(.05)?"high":t.isGreaterThan(.01)?"medium":"low":"unknown",C=()=>{const[t]=Z();return!t||t.isZero()}},35976:(t,e,r)=>{r.d(e,{J:()=>h});var s=r(72119),a=r(72791),n=r(94216),o=r(23098),i=r(53006),c=r(87594),u=r(48544);const d=(t,e,r,s)=>{const a=new URL("https://app.ston.fi/swap");return a.searchParams.append("ft",l(t)),a.searchParams.append("tt",l(e)),a.searchParams.append("referral_address",s||""),a.searchParams.append("utm_source","tokeeper-".concat(r)),a.searchParams.append("utm_medium","organic"),a.searchParams.append("utm_campaign","swap_button"),a.searchParams.append("utm_content","TODO"),a.toString()},l=t=>(0,u.kC)(t)?"ton":t.toString({urlSafe:!0}),p=(0,s.cn)(!1),h=()=>{const[t,e]=(0,s.KO)(p),{isSwapsEnabled:r}=(0,n.W)(),u=(0,o._H)(),{tonendpoint:l,env:h}=(0,c.bp)();return[t,(0,a.useCallback)((t=>{if(t&&!r){const t=d(i.xP.value.address,i.vB.value.address,l.targetEnv,null===h||void 0===h?void 0:h.stonfiReferralAddress);u.openPage(t)}else e(t)}),[e,r,u,l.targetEnv,null===h||void 0===h?void 0:h.stonfiReferralAddress])]}},94216:(t,e,r)=>{r.d(e,{W:()=>_});var s=r(87594),a=r(21902),n=r(86033),o=r(13092);let i;class c extends Error{constructor(t){super(t),this.name="CancelError"}get isCancelled(){return!0}}var u=new WeakMap,d=new WeakMap,l=new WeakMap,p=new WeakMap,h=new WeakMap,y=new WeakMap,f=new WeakMap;i=Symbol.toStringTag;class v{constructor(t){(0,a.Z)(this,u,{writable:!0,value:void 0}),(0,a.Z)(this,d,{writable:!0,value:void 0}),(0,a.Z)(this,l,{writable:!0,value:void 0}),(0,a.Z)(this,p,{writable:!0,value:void 0}),(0,a.Z)(this,h,{writable:!0,value:void 0}),(0,a.Z)(this,y,{writable:!0,value:void 0}),(0,a.Z)(this,f,{writable:!0,value:void 0}),(0,o.Z)(this,u,!1),(0,o.Z)(this,d,!1),(0,o.Z)(this,l,!1),(0,o.Z)(this,p,[]),(0,o.Z)(this,h,new Promise(((e,r)=>{(0,o.Z)(this,y,e),(0,o.Z)(this,f,r);const s=t=>{(0,n.Z)(this,u)||(0,n.Z)(this,d)||(0,n.Z)(this,l)||(0,n.Z)(this,p).push(t)};return Object.defineProperty(s,"isResolved",{get:()=>(0,n.Z)(this,u)}),Object.defineProperty(s,"isRejected",{get:()=>(0,n.Z)(this,d)}),Object.defineProperty(s,"isCancelled",{get:()=>(0,n.Z)(this,l)}),t((t=>{(0,n.Z)(this,u)||(0,n.Z)(this,d)||(0,n.Z)(this,l)||((0,o.Z)(this,u,!0),(0,n.Z)(this,y)&&(0,n.Z)(this,y).call(this,t))}),(t=>{(0,n.Z)(this,u)||(0,n.Z)(this,d)||(0,n.Z)(this,l)||((0,o.Z)(this,d,!0),(0,n.Z)(this,f)&&(0,n.Z)(this,f).call(this,t))}),s)})))}get[i](){return"Cancellable Promise"}then(t,e){return(0,n.Z)(this,h).then(t,e)}catch(t){return(0,n.Z)(this,h).catch(t)}finally(t){return(0,n.Z)(this,h).finally(t)}cancel(){if(!((0,n.Z)(this,u)||(0,n.Z)(this,d)||(0,n.Z)(this,l))){if((0,o.Z)(this,l,!0),(0,n.Z)(this,p).length)try{for(const t of(0,n.Z)(this,p))t()}catch(t){return void console.warn("Cancellation threw an error",t)}(0,n.Z)(this,p).length=0,(0,n.Z)(this,f)&&(0,n.Z)(this,f).call(this,new c("Request aborted"))}}get isCancelled(){return(0,n.Z)(this,l)}}const w={BASE:"",VERSION:"1.0.0",WITH_CREDENTIALS:!1,CREDENTIALS:"include",TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0};var b=r(64572);class Z extends Error{constructor(t,e,r){super(r),(0,b.Z)(this,"url",void 0),(0,b.Z)(this,"status",void 0),(0,b.Z)(this,"statusText",void 0),(0,b.Z)(this,"body",void 0),(0,b.Z)(this,"request",void 0),this.name="ApiError",this.url=e.url,this.status=e.status,this.statusText=e.statusText,this.body=e.body,this.request=t}}var m=r(37388).Buffer;const E=t=>void 0!==t&&null!==t,g=t=>"string"===typeof t,S=t=>g(t)&&""!==t,A=t=>"object"===typeof t&&"string"===typeof t.type&&"function"===typeof t.stream&&"function"===typeof t.arrayBuffer&&"function"===typeof t.constructor&&"string"===typeof t.constructor.name&&/^(Blob|File)$/.test(t.constructor.name)&&/^(Blob|File)$/.test(t[Symbol.toStringTag]),T=t=>t instanceof FormData,C=t=>{const e=[],r=(t,s)=>{E(s)&&(Array.isArray(s)?s.forEach((e=>{r(t,e)})):"object"===typeof s?Object.entries(s).forEach((e=>{let[s,a]=e;r("".concat(t,"[").concat(s,"]"),a)})):((t,r)=>{e.push("".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r))))})(t,s))};return Object.entries(t).forEach((t=>{let[e,s]=t;r(e,s)})),e.length>0?"?".concat(e.join("&")):""},O=async(t,e)=>"function"===typeof e?e(t):e,R=async(t,e)=>{const[r,s,a,n]=await Promise.all([O(e,t.TOKEN),O(e,t.USERNAME),O(e,t.PASSWORD),O(e,t.HEADERS)]),o=Object.entries({Accept:"application/json",...n,...e.headers}).filter((t=>{let[e,r]=t;return E(r)})).reduce(((t,e)=>{let[r,s]=e;return{...t,[r]:String(s)}}),{});if(S(r)&&(o.Authorization="Bearer ".concat(r)),S(s)&&S(a)){const t=(t=>{try{return btoa(t)}catch(e){return m.from(t).toString("base64")}})("".concat(s,":").concat(a));o.Authorization="Basic ".concat(t)}return void 0!==e.body&&(e.mediaType?o["Content-Type"]=e.mediaType:A(e.body)?o["Content-Type"]=e.body.type||"application/octet-stream":g(e.body)?o["Content-Type"]="text/plain":T(e.body)||(o["Content-Type"]="application/json")),new Headers(o)},k=(t,e)=>new v((async(r,s,a)=>{try{const s=((t,e)=>{const r=t.ENCODE_PATH||encodeURI,s=e.url.replace("{api-version}",t.VERSION).replace(/{(.*?)}/g,((t,s)=>{var a;return null!==(a=e.path)&&void 0!==a&&a.hasOwnProperty(s)?r(String(e.path[s])):t})),a="".concat(t.BASE).concat(s);return e.query?"".concat(a).concat(C(e.query)):a})(t,e),n=(t=>{if(t.formData){const e=new FormData,r=(t,r)=>{g(r)||A(r)?e.append(t,r):e.append(t,JSON.stringify(r))};return Object.entries(t.formData).filter((t=>{let[e,r]=t;return E(r)})).forEach((t=>{let[e,s]=t;Array.isArray(s)?s.forEach((t=>r(e,t))):r(e,s)})),e}})(e),o=(t=>{var e;if(void 0!==t.body)return null!==(e=t.mediaType)&&void 0!==e&&e.includes("/json")?JSON.stringify(t.body):g(t.body)||A(t.body)||T(t.body)?t.body:JSON.stringify(t.body)})(e),i=await R(t,e);if(!a.isCancelled){const c=await(async(t,e,r,s,a,n,o)=>{const i=new AbortController,c={headers:n,body:null!==s&&void 0!==s?s:a,method:e.method,signal:i.signal};return t.WITH_CREDENTIALS&&(c.credentials=t.CREDENTIALS),o((()=>i.abort())),await fetch(r,c)})(t,e,s,o,n,i,a),u=await(async t=>{if(204!==t.status)try{const e=t.headers.get("Content-Type");if(e)return["application/json","application/problem+json"].some((t=>e.toLowerCase().startsWith(t)))?await t.json():await t.text()}catch(e){console.error(e)}})(c),d=((t,e)=>{if(e){const r=t.headers.get(e);if(g(r))return r}})(c,e.responseHeader),l={url:s,ok:c.ok,status:c.status,statusText:c.statusText,body:null!==d&&void 0!==d?d:u};((t,e)=>{const r={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",...t.errors}[e.status];if(r)throw new Z(t,e,r);if(!e.ok){var s,a;const r=null!==(s=e.status)&&void 0!==s?s:"unknown",n=null!==(a=e.statusText)&&void 0!==a?a:"unknown",o=(()=>{try{return JSON.stringify(e.body,null,2)}catch(t){return}})();throw new Z(t,e,"Generic Error: status: ".concat(r,"; status text: ").concat(n,"; body: ").concat(o))}})(e,l),r(l.body)}}catch(n){s(n)}}));class P{static calculateSwap(t,e,r,s,a){return k(w,{method:"GET",url:"/v2/swap/calculate",query:{fromAsset:t,toAsset:e,fromAmount:r,referral:a,provider:s},errors:{500:"Default Response"}})}static encodeSwap(t){return k(w,{method:"POST",url:"/v2/swap/encode",body:t,mediaType:"application/json",errors:{500:"Default Response"}})}static swapGas(){return k(w,{method:"GET",url:"/v2/swap/gas",errors:{500:"Default Response"}})}static swapAssets(){return k(w,{method:"GET",url:"/v2/swap/assets",errors:{500:"Default Response"}})}}const _=()=>{const{config:t}=(0,s.bp)();return w.BASE=t.web_swaps_url,{swapService:P,referralAddress:t.web_swaps_referral_address,isSwapsEnabled:!!t.web_swaps_url}}}}]);
//# sourceMappingURL=976.3a5b60c7.chunk.js.map