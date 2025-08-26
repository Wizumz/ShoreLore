import{r as Y,a as Rp,R as Od}from"./vendor-b1791c80.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ld={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=Y,Cp=Symbol.for("react.element"),xp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Dp=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Fd(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Np.call(e,n)&&!Vp.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Cp,type:r,key:i,ref:o,props:s,_owner:Dp.current}}Mo.Fragment=xp;Mo.jsx=Fd;Mo.jsxs=Fd;Ld.exports=Mo;var w=Ld.exports,Qa={},Du=Rp;Qa.createRoot=Du.createRoot,Qa.hydrateRoot=Du.hydrateRoot;const kp=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let p=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(p=64)),n.push(t[f],t[g],t[p],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ud(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Mp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new Op;const p=i<<2|c>>4;if(n.push(p),h!==64){const R=c<<4&240|h>>2;if(n.push(R),g!==64){const x=h<<6&192|g;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lp=function(r){const e=Ud(r);return Bd.encodeByteArray(e,!0)},io=function(r){return Lp(r).replace(/\./g,"")},jd=function(r){try{return Bd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=()=>qd().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Bp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&jd(r[1]);return e&&JSON.parse(e)},Oo=()=>{try{return kp()||Fp()||Up()||Bp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},$d=r=>{var e,t;return(t=(e=Oo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},jp=r=>{const e=$d(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},zd=()=>{var r;return(r=Oo())==null?void 0:r.config},Gd=r=>{var e;return(e=Oo())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r},c="";return[io(JSON.stringify(t)),io(JSON.stringify(o)),c].join(".")}const As={};function zp(){const r={prod:[],emulator:[]};for(const e of Object.keys(As))As[e]?r.emulator.push(e):r.prod.push(e);return r}function Gp(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Vu=!1;function Hd(r,e){if(typeof window>"u"||typeof document>"u"||!jr(window.location.host)||As[r]===e||As[r]||Vu)return;As[r]=e;function t(p){return`__firebase__banner__${p}`}const n="__firebase__banner",i=zp().prod.length>0;function o(){const p=document.getElementById(n);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,R){p.setAttribute("width","24"),p.setAttribute("id",R),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Vu=!0,o()},p}function f(p,R){p.setAttribute("id",R),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function g(){const p=Gp(n),R=t("text"),x=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),M=t("preprendIcon"),j=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const O=p.element;c(O),f(N,D);const z=h();l(j,M),O.append(j,x,N,z),document.body.appendChild(O)}i?(x.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Wd(){var e;const r=(e=Oo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jp(){const r=Se();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Qd(){return!Wd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jd(){return!Wd()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Yd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="FirebaseError";class kt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Xp,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zp(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new kt(s,c,n)}}function Zp(r,e){return r.replace(e_,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const e_=/\{\$([^}]+)}/g;function t_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(ku(i)&&ku(o)){if(!Fn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ku(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function n_(r,e){const t=new r_(r,e);return t.subscribe.bind(t)}class r_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");s_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Da),s.error===void 0&&(s.error=Da),s.complete===void 0&&(s.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(r){return r&&r._delegate?r._delegate:r}class Un{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a_(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:o_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o_(r){return r===An?void 0:r}function a_(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ne||(ne={}));const l_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},u_=ne.INFO,h_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},d_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=h_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=u_,this._logHandler=d_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const f_=(r,e)=>e.some(t=>r instanceof t);let Mu,Ou;function m_(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g_(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xd=new WeakMap,Ja=new WeakMap,Zd=new WeakMap,Va=new WeakMap,Dc=new WeakMap;function p_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Zt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xd.set(t,r)}).catch(()=>{}),Dc.set(e,r),e}function __(r){if(Ja.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ja.set(r,e)}let Ya={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ja.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function y_(r){Ya=r(Ya)}function I_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ka(this),e,...t);return Zd.set(n,e.sort?e.sort():[e]),Zt(n)}:g_().includes(r)?function(...e){return r.apply(ka(this),e),Zt(Xd.get(this))}:function(...e){return Zt(r.apply(ka(this),e))}}function E_(r){return typeof r=="function"?I_(r):(r instanceof IDBTransaction&&__(r),f_(r,m_())?new Proxy(r,Ya):r)}function Zt(r){if(r instanceof IDBRequest)return p_(r);if(Va.has(r))return Va.get(r);const e=E_(r);return e!==r&&(Va.set(r,e),Dc.set(e,r)),e}const ka=r=>Dc.get(r);function w_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Zt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const T_=["get","getKey","getAll","getAllKeys","count"],v_=["put","add","delete","clear"],Ma=new Map;function Lu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=v_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||T_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Ma.set(e,i),i}y_(r=>({...r,get:(e,t,n)=>Lu(e,t)||r.get(e,t,n),has:(e,t)=>!!Lu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(b_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function b_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Fu="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Nc("@firebase/app"),S_="@firebase/app-compat",R_="@firebase/analytics-compat",P_="@firebase/analytics",C_="@firebase/app-check-compat",x_="@firebase/app-check",N_="@firebase/auth",D_="@firebase/auth-compat",V_="@firebase/database",k_="@firebase/data-connect",M_="@firebase/database-compat",O_="@firebase/functions",L_="@firebase/functions-compat",F_="@firebase/installations",U_="@firebase/installations-compat",B_="@firebase/messaging",j_="@firebase/messaging-compat",q_="@firebase/performance",$_="@firebase/performance-compat",z_="@firebase/remote-config",G_="@firebase/remote-config-compat",K_="@firebase/storage",H_="@firebase/storage-compat",W_="@firebase/firestore",Q_="@firebase/ai",J_="@firebase/firestore-compat",Y_="firebase",X_="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",Z_={[Xa]:"fire-core",[S_]:"fire-core-compat",[P_]:"fire-analytics",[R_]:"fire-analytics-compat",[x_]:"fire-app-check",[C_]:"fire-app-check-compat",[N_]:"fire-auth",[D_]:"fire-auth-compat",[V_]:"fire-rtdb",[k_]:"fire-data-connect",[M_]:"fire-rtdb-compat",[O_]:"fire-fn",[L_]:"fire-fn-compat",[F_]:"fire-iid",[U_]:"fire-iid-compat",[B_]:"fire-fcm",[j_]:"fire-fcm-compat",[q_]:"fire-perf",[$_]:"fire-perf-compat",[z_]:"fire-rc",[G_]:"fire-rc-compat",[K_]:"fire-gcs",[H_]:"fire-gcs-compat",[W_]:"fire-fst",[J_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[Y_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map,ey=new Map,ec=new Map;function Uu(r,e){try{r.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function vr(r){const e=r.name;if(ec.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,r);for(const t of oo.values())Uu(t,r);for(const t of ey.values())Uu(t,r);return!0}function Vc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function at(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Qs("app","Firebase",ty);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=X_;function ef(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Za,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=zd()),!t)throw en.create("no-options");const i=oo.get(s);if(i){if(Fn(t,i.options)&&Fn(n,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new c_(s);for(const l of ec.values())o.addComponent(l);const c=new ny(t,n,o);return oo.set(s,c),c}function tf(r=Za){const e=oo.get(r);if(!e&&r===Za&&zd())return ef();if(!e)throw en.create("no-app",{appName:r});return e}function tn(r,e,t){let n=Z_[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(o.join(" "));return}vr(new Un(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firebase-heartbeat-database",sy=1,ks="firebase-heartbeat-store";let Oa=null;function nf(){return Oa||(Oa=w_(ry,sy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ks)}catch(t){console.warn(t)}}}}).catch(r=>{throw en.create("idb-open",{originalErrorMessage:r.message})})),Oa}async function iy(r){try{const t=(await nf()).transaction(ks),n=await t.objectStore(ks).get(rf(r));return await t.done,n}catch(e){if(e instanceof kt)Ct.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function Bu(r,e){try{const n=(await nf()).transaction(ks,"readwrite");await n.objectStore(ks).put(e,rf(r)),await n.done}catch(t){if(t instanceof kt)Ct.warn(t.message);else{const n=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(n.message)}}}function rf(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=1024,ay=30;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ay){const o=hy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ct.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ju(),{heartbeatsToSend:n,unsentEntries:s}=ly(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ct.warn(t),""}}}function ju(){return new Date().toISOString().substring(0,10)}function ly(r,e=oy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class uy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yd()?Yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Bu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Bu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function qu(r){return io(JSON.stringify({version:2,heartbeats:r})).length}function hy(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r){vr(new Un("platform-logger",e=>new A_(e),"PRIVATE")),vr(new Un("heartbeat",e=>new cy(e),"PRIVATE")),tn(Xa,Fu,r),tn(Xa,Fu,"esm2020"),tn("fire-js","")}dy("");var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,sf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,b){for(var y=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)y[rt-2]=arguments[rt];return _.prototype[v].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)T[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],v=E.g[2];var b=E.g[3],y=_+(b^I&(v^b))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+T[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+T[2]+606105819&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+T[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+T[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+T[6]+2821735955&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+T[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+T[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+T[10]+4294925233&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+T[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+T[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+T[14]+2792965006&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+T[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^b&(I^v))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+T[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+T[11]+643717713&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+T[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+T[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+T[15]+3634488961&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+T[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+T[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+T[3]+4107603335&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+T[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+T[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+T[7]+1735328473&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+T[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^b)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+T[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+T[11]+1839030562&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+T[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+T[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+T[7]+4139469664&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+T[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+T[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+T[3]+3572445317&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+T[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+T[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+T[15]+530742520&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+T[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~b))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+T[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+T[14]+2878612391&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+T[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+T[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+T[10]+4293915773&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+T[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+T[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+T[6]+2734768916&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+T[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+T[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+T[2]+718787259&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,T=this.B,v=this.h,b=0;b<_;){if(v==0)for(;b<=I;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<_;)if(T[v++]=E.charCodeAt(b++),v==this.blockSize){s(this,T),v=0;break}}else for(;b<_;)if(T[v++]=E[b++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)E[I++]=this.g[_]>>>T&255;return E};function i(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var b=E[v]|0;T&&b==_||(I[v]=b,T=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return N(h(-E));for(var _=[],I=1,T=0;E>=I;T++)_[T]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=g,v=0;v<E.length;v+=8){var b=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+b),_);8>b?(b=h(Math.pow(_,b)),T=T.j(b).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var g=l(0),p=l(1),R=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-N(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(D(this))return"-"+N(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,T="";;){var v=z(I,_).g;I=M(I,v.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,x(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=M(this,E),D(E)?-1:x(E)?0:1};function N(E){for(var _=E.g.length,I=[],T=0;T<_;T++)I[T]=~E.g[T];return new o(I,~E.h).add(p)}r.abs=function(){return D(this)?N(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=_;v++){var b=T+(this.i(v)&65535)+(E.i(v)&65535),y=(b>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=y>>>16,b&=65535,y&=65535,I[v]=y<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function M(E,_){return E.add(N(_))}r.j=function(E){if(x(this)||x(E))return g;if(D(this))return D(E)?N(this).j(N(E)):N(N(this).j(E));if(D(E))return N(this.j(N(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var b=this.i(T)>>>16,y=this.i(T)&65535,rt=E.i(v)>>>16,gn=E.i(v)&65535;I[2*T+2*v]+=y*gn,j(I,2*T+2*v),I[2*T+2*v+1]+=b*gn,j(I,2*T+2*v+1),I[2*T+2*v+1]+=y*rt,j(I,2*T+2*v+1),I[2*T+2*v+2]+=b*rt,j(I,2*T+2*v+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function j(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function O(E,_){this.g=E,this.h=_}function z(E,_){if(x(_))throw Error("division by zero");if(x(E))return new O(g,g);if(D(E))return _=z(N(E),_),new O(N(_.g),N(_.h));if(D(_))return _=z(E,N(_)),new O(N(_.g),_.h);if(30<E.g.length){if(D(E)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,T=_;0>=T.l(E);)I=se(I),T=se(T);var v=te(I,1),b=te(T,1);for(T=te(T,2),I=te(I,2);!x(T);){var y=b.add(T);0>=y.l(E)&&(v=v.add(I),b=y),T=te(T,1),I=te(I,1)}return _=M(E,v.j(_)),new O(v,_)}for(v=g;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),y=b.j(_);D(y)||0<y.l(E);)I-=T,b=h(I),y=b.j(_);x(b)&&(b=p),v=v.add(b),E=M(E,y)}return new O(v,E)}r.A=function(E){return z(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&E.i(T);return new o(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|E.i(T);return new o(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^E.i(T);return new o(I,this.h^E.h)};function se(E){for(var _=E.g.length+1,I=[],T=0;T<_;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(I,E.h)}function te(E,_){var I=_>>5;_%=32;for(var T=E.g.length-I,v=[],b=0;b<T;b++)v[b]=0<_?E.i(b+I)>>>_|E.i(b+I+1)<<32-_:E.i(b+I);return new o(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,nn=o}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var of,ys,af,$i,tc,cf,lf,uf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function g(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function p(a,u,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,p.apply(null,arguments)}function R(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,P){for(var L=Array(arguments.length-2),de=2;de<arguments.length;de++)L[de-2]=arguments[de];return u.prototype[A].apply(m,L)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,P=m.length||0;a.length=A+P;for(let L=0;L<P;L++)a[A+L]=m[L]}else a.push(m)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var se=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function te(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function v(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Jr;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,d){const m=gn.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var gn=new M(()=>new da,a=>a.reset());class da{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let pn,_n=!1,Jr=new rt,hi=()=>{const a=c.Promise.resolve(void 0);pn=()=>{a.then(fa)}};var fa=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var u=gn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_n=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Tt(a,u){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(se){e:{try{z(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tt.aa.h.call(this)}}x(Tt,Pe);var dt={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),Yn=0;function ma(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++Yn,this.da=this.fa=!1}function Xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Zn(a){this.src=a,this.g={},this.h=0}Zn.prototype.add=function(a,u,d,m,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var L=Xr(a,u,m,A);return-1<L?(u=a[L],d||(u.fa=!1)):(u=new ma(u,this.src,P,!!m,A),u.fa=d,a.push(u)),u};function Yr(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Xn(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Xr(a,u,d,m){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return A}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),st={};function di(a,u,d,m,A){if(m&&m.once)return mi(a,u,d,m,A);if(Array.isArray(u)){for(var P=0;P<u.length;P++)di(a,u[P],d,m,A);return null}return d=H(d),a&&a[ft]?a.K(u,d,h(m)?!!m.capture:!!m,A):fi(a,u,d,!1,m,A)}function fi(a,u,d,m,A,P){if(!u)throw Error("Invalid event type");var L=h(A)?!!A.capture:!!A,de=Z(a);if(de||(a[Zr]=de=new Zn(a)),d=de.add(u,d,m,L,P),d.proxy)return d;if(m=ga(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)yn||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(es(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ga(){function a(d){return u.call(a.src,a.listener,d)}const u=$;return a}function mi(a,u,d,m,A){if(Array.isArray(u)){for(var P=0;P<u.length;P++)mi(a,u[P],d,m,A);return null}return d=H(d),a&&a[ft]?a.L(u,d,h(m)?!!m.capture:!!m,A):fi(a,u,d,!0,m,A)}function gi(a,u,d,m,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)gi(a,u[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=H(d),a&&a[ft]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=Xr(P,d,m,A),-1<d&&(Xn(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=Z(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Xr(u,d,m,A)),(d=-1<a?u[a]:null)&&Ft(d))}function Ft(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ft])Yr(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(es(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Z(u))?(Yr(d,a),d.h==0&&(d.src=null,u[Zr]=null)):Xn(a)}}}function es(a){return a in st?st[a]:st[a]="on"+a}function $(a,u){if(a.da)a=!0;else{u=new Tt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ft(a),a=d.call(m,u)}return a}function Z(a){return a=a[Zr],a instanceof Zn?a:null}var B="__closure_events_fn_"+(1e9*Math.random()>>>0);function H(a){return typeof a=="function"?a:(a[B]||(a[B]=function(u){return a.handleEvent(u)}),a[B])}function U(){ht.call(this),this.i=new Zn(this),this.M=this,this.F=null}x(U,ht),U.prototype[ft]=!0,U.prototype.removeEventListener=function(a,u,d,m){gi(this,a,u,d,m)};function J(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Pe(u,a);else if(u instanceof Pe)u.target=u.target||a;else{var A=u;u=new Pe(m,a),T(u,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var L=u.g=d[P];A=pe(L,m,!0,u)&&A}if(L=u.g=a,A=pe(L,m,!0,u)&&A,A=pe(L,m,!1,u)&&A,d)for(P=0;P<d.length;P++)L=u.g=d[P],A=pe(L,m,!1,u)&&A}U.prototype.N=function(){if(U.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Xn(d[m]);delete a.g[u],a.h--}}this.F=null},U.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},U.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function pe(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,P=0;P<u.length;++P){var L=u[P];if(L&&!L.da&&L.capture==d){var de=L.listener,xe=L.ha||L.src;L.fa&&Yr(a.i,L),A=de.call(xe,m)!==!1&&A}}return A&&!m.defaultPrevented}function ye(a,u,d){if(typeof a=="function")d&&(a=p(a,d));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function be(a){a.g=ye(()=>{a.g=null,a.i&&(a.i=!1,be(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class He extends ht{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(a){ht.call(this),this.h=a,this.g={}}x(he,ht);var Xe=[];function vt(a){te(a.g,function(u,d){this.g.hasOwnProperty(d)&&Ft(u)},a),a.g={}}he.prototype.N=function(){he.aa.N.call(this),vt(this)},he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pa=c.JSON.stringify,np=c.JSON.parse,rp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function _a(){}_a.prototype.h=null;function jl(a){return a.h||(a.h=a.i())}function ql(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){Pe.call(this,"d")}x(ya,Pe);function Ia(){Pe.call(this,"c")}x(Ia,Pe);var In={},$l=null;function pi(){return $l=$l||new U}In.La="serverreachability";function zl(a){Pe.call(this,In.La,a)}x(zl,Pe);function ns(a){const u=pi();J(u,new zl(u))}In.STAT_EVENT="statevent";function Gl(a,u){Pe.call(this,In.STAT_EVENT,a),this.stat=u}x(Gl,Pe);function $e(a){const u=pi();J(u,new Gl(u,a))}In.Ma="timingevent";function Kl(a,u){Pe.call(this,In.Ma,a),this.size=u}x(Kl,Pe);function rs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function sp(a,u,d,m,A,P){a.info(function(){if(a.g)if(P)for(var L="",de=P.split("&"),xe=0;xe<de.length;xe++){var oe=de[xe].split("=");if(1<oe.length){var Me=oe[0];oe=oe[1];var Oe=Me.split("_");L=2<=Oe.length&&Oe[1]=="type"?L+(Me+"="+oe+"&"):L+(Me+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+L})}function ip(a,u,d,m,A,P,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+L})}function er(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ap(a,d)+(m?" "+m:"")})}function op(a,u){a.info(function(){return"TIMEOUT: "+u})}ss.prototype.info=function(){};function ap(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return pa(d)}catch{return u}}var _i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ea;function yi(){}x(yi,_a),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},Ea=new yi;function Ut(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new he(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Ql={},wa={};function Ta(a,u,d){a.L=1,a.v=Ti(At(u)),a.m=d,a.P=!0,Jl(a,null)}function Jl(a,u){a.F=Date.now(),Ii(a),a.A=At(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),uu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Wl,a.g=Pu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new He(p(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Xe[0]=A.toString()),A=Xe);for(var P=0;P<A.length;P++){var L=di(d,A[P],m||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ns(),sp(a.i,a.u,a.A,a.l,a.R,a.m)}Ut.prototype.ca=function(a){a=a.target;const u=this.M;u&&bt(a)==3?u.j():this.Y(a)},Ut.prototype.Y=function(a){try{if(a==this.g)e:{const Oe=bt(this.g);var u=this.g.Ba();const rr=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||_u(this.g)))){this.J||Oe!=4||u==7||(u==8||0>=rr?ns(3):ns(2)),va(this);var d=this.g.Z();this.X=d;t:if(Yl(this)){var m=_u(this.g);a="";var A=m.length,P=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),is(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,ip(this.i,this.u,this.A,this.l,this.R,Oe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,xe=this.g;if((de=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(de)){var oe=de;break t}}oe=null}if(d=oe)er(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,d);else{this.o=!1,this.s=3,$e(12),En(this),is(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<L.length;)if(it=cp(this,L),it==wa){Oe==4&&(this.s=4,$e(14),d=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Ql){this.s=4,$e(15),er(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else er(this.i,this.l,it,null),Aa(this,it);if(Yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||L.length!=0||this.h.h||(this.s=1,$e(16),d=!1),this.o=this.o&&d,!d)er(this.i,this.l,L,"[Invalid Chunked Response]"),En(this),is(this);else if(0<L.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),xa(Me),Me.M=!0,$e(11))}}else er(this.i,this.l,L,null),Aa(this,L);Oe==4&&En(this),this.o&&!this.J&&(Oe==4?Au(this.j,this):(this.o=!1,Ii(this)))}else bp(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),En(this),is(this)}}}catch{}finally{}};function Yl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cp(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?wa:(d=Number(u.substring(d,m)),isNaN(d)?Ql:(m+=1,m+d>u.length?wa:(u=u.slice(m,m+d),a.C=m+d,u)))}Ut.prototype.cancel=function(){this.J=!0,En(this)};function Ii(a){a.S=Date.now()+a.I,Xl(a,a.I)}function Xl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=rs(p(a.ba,a),u)}function va(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ut.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(op(this.i,this.A),this.L!=2&&(ns(),$e(17)),En(this),this.s=2,is(this)):Xl(this,this.S-a)};function is(a){a.j.G==0||a.J||Au(a.j,a)}function En(a){va(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,vt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Aa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ba(d.h,a))){if(!a.K&&ba(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Pi(d),Si(d);else break e;Ca(d),$e(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=rs(p(d.Za,d),6e3));if(1>=tu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Tn(d,11)}else if((a.K||d.g==a)&&Pi(d),!j(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let oe=A[u];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Me=oe[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Oe=oe[4];Oe!=null&&(d.Aa=Oe,d.j.info("SVER="+d.Aa));const rr=oe[5];rr!=null&&typeof rr=="number"&&0<rr&&(m=1.5*rr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const it=a.g;if(it){const xi=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var P=m.h;P.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Sa(P,P.h),P.h=null))}if(m.D){const Na=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Na&&(m.ya=Na,fe(m.I,m.D,Na))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var L=a;if(m.qa=Ru(m,m.J?m.ia:null,m.W),L.K){nu(m.h,L);var de=L,xe=m.L;xe&&(de.I=xe),de.B&&(va(de),Ii(de)),m.g=L}else Tu(m);0<d.i.length&&Ri(d)}else oe[0]!="stop"&&oe[0]!="close"||Tn(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Tn(d,7):Pa(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}ns(4)}catch{}}var lp=class{constructor(a,u){this.g=a,this.map=u}};function Zl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tu(a){return a.h?1:a.g?a.g.size:0}function ba(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Sa(a,u){a.g?a.g.add(u):a.h=u}function nu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Zl.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ru(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function up(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function hp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function su(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=hp(a),m=up(a),A=m.length,P=0;P<A;P++)u.call(void 0,m[P],d&&d[P],a)}var iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dp(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var P=a[d].substring(0,m);A=a[d].substring(m+1)}else P=a[d];u(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wn){this.h=a.h,Ei(this,a.j),this.o=a.o,this.g=a.g,wi(this,a.s),this.l=a.l;var u=a.i,d=new cs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ou(this,d),this.m=a.m}else a&&(u=String(a).match(iu))?(this.h=!1,Ei(this,u[1]||"",!0),this.o=os(u[2]||""),this.g=os(u[3]||"",!0),wi(this,u[4]),this.l=os(u[5]||"",!0),ou(this,u[6]||"",!0),this.m=os(u[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}wn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(as(u,au,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(as(u,au,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(as(d,d.charAt(0)=="/"?gp:mp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",as(d,_p)),a.join("")};function At(a){return new wn(a)}function Ei(a,u,d){a.j=d?os(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function wi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ou(a,u,d){u instanceof cs?(a.i=u,yp(a.i,a.h)):(d||(u=as(u,pp)),a.i=new cs(u,a.h))}function fe(a,u,d){a.i.set(u,d)}function Ti(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function os(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function as(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,fp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var au=/[#\/\?@]/g,mp=/[#\?:]/g,gp=/[#\?]/g,pp=/[#\?@]/g,_p=/#/g;function cs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Bt(a){a.g||(a.g=new Map,a.h=0,a.i&&dp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=cs.prototype,r.add=function(a,u){Bt(this),this.i=null,a=tr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function cu(a,u){Bt(a),u=tr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function lu(a,u){return Bt(a),u=tr(a,u),a.g.has(u)}r.forEach=function(a,u){Bt(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){Bt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let P=0;P<A.length;P++)d.push(u[m])}return d},r.V=function(a){Bt(this);let u=[];if(typeof a=="string")lu(this,a)&&(u=u.concat(this.g.get(tr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Bt(this),this.i=null,a=tr(this,a),lu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function uu(a,u,d){cu(a,u),0<d.length&&(a.i=null,a.g.set(tr(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var A=P;L[m]!==""&&(A+="="+encodeURIComponent(String(L[m]))),a.push(A)}}return this.i=a.join("&")};function tr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function yp(a,u){u&&!a.j&&(Bt(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(cu(this,m),uu(this,A,d))},a)),a.j=u}function Ip(a,u){const d=new ss;if(c.Image){const m=new Image;m.onload=R(jt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=R(jt,d,"TestLoadImage: error",!1,u,m),m.onabort=R(jt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(jt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Ep(a,u){const d=new ss,m=new AbortController,A=setTimeout(()=>{m.abort(),jt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?jt(d,"TestPingServer: ok",!0,u):jt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),jt(d,"TestPingServer: error",!1,u)})}function jt(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function wp(){this.g=new rp}function Tp(a,u,d){const m=d||"";try{su(a,function(A,P){let L=A;h(A)&&(L=pa(A)),u.push(m+P+"="+encodeURIComponent(L))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function vi(a){this.l=a.Ub||null,this.j=a.eb||!1}x(vi,_a),vi.prototype.g=function(){return new Ai(this.l,this.j)},vi.prototype.i=function(a){return function(){return a}}({});function Ai(a,u){U.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ai,U),r=Ai.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,us(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ls(this):us(this),this.readyState==3&&hu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},r.Qa=function(a){this.g&&(this.response=a,ls(this))},r.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,us(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function du(a){let u="";return te(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ra(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=du(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,u,d))}function Ie(a){U.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ie,U);var vp=/^https?$/i,Ap=["POST","PUT"];r=Ie.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ea.g(),this.v=this.o?jl(this.o):jl(Ea),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){fu(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ap,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of d)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){fu(this,P)}};function fu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,mu(a),bi(a)}function mu(a){a.A||(a.A=!0,J(a,"complete"),J(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,J(this,"complete"),J(this,"abort"),bi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),Ie.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?gu(this):this.bb())},r.bb=function(){gu(this)};function gu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bt(a)!=4||a.Z()!=2)){if(a.u&&bt(a)==4)ye(a.Ea,0,a);else if(J(a,"readystatechange"),bt(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=L===0){var A=String(a.D).match(iu)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!vp.test(A?A.toLowerCase():"")}d=m}if(d)J(a,"complete"),J(a,"success");else{a.m=6;try{var P=2<bt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",mu(a)}}finally{bi(a)}}}}function bi(a,u){if(a.g){pu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||J(a,"ready");try{d.onreadystatechange=m}catch{}}}function pu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),np(u)}};function _u(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bp(a){const u={};a=(a.g&&2<=bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var d=v(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function yu(a){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,a),this.cb=hs("retryDelaySeedMs",1e4,a),this.Wa=hs("forwardChannelMaxRetries",2,a),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zl(a&&a.concurrentRequestLimit),this.Da=new wp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=yu.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){$e(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Ru(this,null,this.W),Ri(this)};function Pa(a){if(Iu(a),a.G==3){var u=a.U++,d=At(a.I);if(fe(d,"SID",a.K),fe(d,"RID",u),fe(d,"TYPE","terminate"),ds(a,d),u=new Ut(a,a.j,u),u.L=2,u.v=Ti(At(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Pu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}Su(a)}function Si(a){a.g&&(xa(a),a.g.cancel(),a.g=null)}function Iu(a){Si(a),a.u&&(c.clearTimeout(a.u),a.u=null),Pi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ri(a){if(!eu(a.h)&&!a.s){a.s=!0;var u=a.Ga;pn||hi(),_n||(pn(),_n=!0),Jr.add(u,a),a.B=0}}function Sp(a,u){return tu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=rs(p(a.Ga,a,u),bu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Ut(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=wu(this,A,u),d=At(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),ds(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(du(P)))+"&"+u:this.m&&Ra(d,this.m,P)),Sa(this.h,A),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",u),fe(d,"SID","null"),A.T=!0,Ta(A,d,null)):Ta(A,d,u),this.G=2}}else this.G==3&&(a?Eu(this,a):this.i.length==0||eu(this.h)||Eu(this))};function Eu(a,u){var d;u?d=u.l:d=a.U++;const m=At(a.I);fe(m,"SID",a.K),fe(m,"RID",d),fe(m,"AID",a.T),ds(a,m),a.m&&a.o&&Ra(m,a.m,a.o),d=new Ut(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=wu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sa(a.h,d),Ta(d,m,u)}function ds(a,u){a.H&&te(a.H,function(d,m){fe(u,m,d)}),a.l&&su({},function(d,m){fe(u,m,d)})}function wu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?p(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const L=["count="+d];P==-1?0<d?(P=A[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let de=!0;for(let xe=0;xe<d;xe++){let oe=A[xe].g;const Me=A[xe].map;if(oe-=P,0>oe)P=Math.max(0,A[xe].g-100),de=!1;else try{Tp(Me,L,"req"+oe+"_")}catch{m&&m(Me)}}if(de){m=L.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Tu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;pn||hi(),_n||(pn(),_n=!0),Jr.add(u,a),a.v=0}}function Ca(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=rs(p(a.Fa,a),bu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=rs(p(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),Si(this),vu(this))};function xa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function vu(a){a.g=new Ut(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=At(a.qa);fe(u,"RID","rpc"),fe(u,"SID",a.K),fe(u,"AID",a.T),fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(u,"TO",a.ja),fe(u,"TYPE","xmlhttp"),ds(a,u),a.m&&a.o&&Ra(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ti(At(u)),d.m=null,d.P=!0,Jl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Si(this),Ca(this),$e(19))};function Pi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Au(a,u){var d=null;if(a.g==u){Pi(a),xa(a),a.g=null;var m=2}else if(ba(a.h,u))d=u.D,nu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=pi(),J(m,new Kl(m,d)),Ri(a)}else Tu(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&Sp(a,u)||m==2&&Ca(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:Tn(a,5);break;case 4:Tn(a,10);break;case 3:Tn(a,6);break;default:Tn(a,2)}}}function bu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Tn(a,u){if(a.j.info("Error code "+u),u==2){var d=p(a.fb,a),m=a.Xa;const A=!m;m=new wn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ei(m,"https"),Ti(m),A?Ip(m.toString(),d):Ep(m.toString(),d)}else $e(2);a.G=0,a.l&&a.l.sa(u),Su(a),Iu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Su(a){if(a.G=0,a.ka=[],a.l){const u=ru(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Ru(a,u,d){var m=d instanceof wn?At(d):new wn(d);if(m.g!="")u&&(m.g=u+"."+m.g),wi(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var P=new wn(null);m&&Ei(P,m),u&&(P.g=u),A&&wi(P,A),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&fe(m,d,u),fe(m,"VER",a.la),ds(a,m),m}function Pu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ie(new vi({eb:d})):new Ie(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}r=Cu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ci(){}Ci.prototype.g=function(a,u){return new We(a,u)};function We(a,u){U.call(this),this.g=new yu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new nr(this)}x(We,U),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Pa(this.g)},We.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=pa(a),a=d);u.i.push(new lp(u.Ya++,a)),u.G==3&&Ri(u)},We.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,We.aa.N.call(this)};function xu(a){ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(xu,ya);function Nu(){Ia.call(this),this.status=1}x(Nu,Ia);function nr(a){this.g=a}x(nr,Cu),nr.prototype.ua=function(){J(this.g,"a")},nr.prototype.ta=function(a){J(this.g,new xu(a))},nr.prototype.sa=function(a){J(this.g,new Nu)},nr.prototype.ra=function(){J(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,uf=function(){return new Ci},lf=function(){return pi()},cf=In,tc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,$i=_i,Hl.COMPLETE="complete",af=Hl,ql.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",U.prototype.listen=U.prototype.K,ys=ql,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,of=Ie}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const zu="@firebase/firestore",Gu="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Nc("@firebase/firestore");function hr(){return Bn.logLevel}function V(r,...e){if(Bn.logLevel<=ne.DEBUG){const t=e.map(kc);Bn.debug(`Firestore (${$r}): ${r}`,...t)}}function ze(r,...e){if(Bn.logLevel<=ne.ERROR){const t=e.map(kc);Bn.error(`Firestore (${$r}): ${r}`,...t)}}function jn(r,...e){if(Bn.logLevel<=ne.WARN){const t=e.map(kc);Bn.warn(`Firestore (${$r}): ${r}`,...t)}}function kc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,hf(r,n,t)}function hf(r,e,t){let n=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ze(n),new Error(n)}function G(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||hf(e,s,n)}function Q(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class my{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gy{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _t,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _t)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new df(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class py{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _y{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new py(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ku{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ku(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ku(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Iy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function X(r,e){return r<e?-1:r>e?1:0}function nc(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return La(s)===La(i)?X(s,i):La(s)?1:-1}return X(r.length,e.length)}const Ey=55296,wy=57343;function La(r){const e=r.charCodeAt(0);return e>=Ey&&e<=wy}function Ar(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function ff(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="__name__";class mt{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&q(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mt?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=mt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const n=mt.isNumericId(e),s=mt.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?mt.extractNumericId(e).compare(mt.extractNumericId(t)):nc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class ae extends mt{construct(e,t,n){return new ae(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const Ty=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends mt{construct(e,t,n){return new _e(e,t,n)}static isValidIdentifier(e){return Ty.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hu}static keyField(){return new _e([Hu])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ae.fromString(e))}static fromName(e){return new F(ae.fromString(e).popFirst(5))}static empty(){return new F(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r,e,t){if(!t)throw new k(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vy(r,e,t,n){if(e===!0&&n===!0)throw new k(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Wu(r){if(!F.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Qu(r){if(F.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Lo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q(12329,{type:typeof r})}function ke(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lo(r);throw new k(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Ay(r,e){if(e<=0)throw new k(C.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ys(r,e){if(!gf(r))throw new k(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new k(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=-62135596800,Yu=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Yu);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ju)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yu}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ys(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ju;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:ve("string",ce._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new ce(0,0))}static max(){return new K(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=-1;class ao{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function rc(r){return r.fields.find(e=>e.kind===2)}function bn(r){return r.fields.filter(e=>e.kind!==2)}ao.UNKNOWN_ID=-1;class zi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Os{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Os(0,Ye.min())}}function by(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=K.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new Ye(s,F.empty(),e)}function pf(r){return new Ye(r.readTime,r.key,Ms)}class Ye{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ye(K.min(),F.empty(),Ms)}static max(){return new Ye(K.max(),F.empty(),Ms)}}function Oc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(r.documentKey,e.documentKey),t!==0?t:X(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==_f)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(s=>s?S.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new S((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new S((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="SimpleDb";class Fo{static open(e,t,n,s){try{return new Fo(t,e.transaction(s,n))}catch(i){throw new bs(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new _t,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new bs(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Lc(n.target.error);this.S.reject(new bs(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Qe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ry(t)}}class rn{static delete(e){return V(Qe,"Removing database:",e),Rn(qd().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Yd())return!1;if(rn.F())return!0;const e=Se(),t=rn.M(e),n=0<t&&t<10,s=If(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,rn.M(Se())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(V(Qe,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new bs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new k(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new k(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new bs(e,o))},s.onupgradeneeded=i=>{V(Qe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{V(Qe,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Fo.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V(Qe,"Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function If(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Sy{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Rn(this.U.delete())}}class bs extends k{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function fn(r){return r.name==="IndexedDbTransactionError"}class Ry{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Qe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Qe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Rn(n)}add(e){return V(Qe,"ADD",this.store.name,e,e),Rn(this.store.add(e))}get(e){return Rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V(Qe,"GET",this.store.name,e,t),t))}delete(e){return V(Qe,"DELETE",this.store.name,e),Rn(this.store.delete(e))}count(){return V(Qe,"COUNT",this.store.name),Rn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.H(i,(c,l)=>{o.push(l)}).next(()=>o)}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}Z(e,t){V(Qe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const s=this.cursor(n);return this.H(s,(i,o,c)=>c.delete())}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new S((n,s)=>{t.onerror=i=>{const o=Lc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}H(e,t){const n=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Sy(c),h=t(c.primaryKey,c.value,l);if(h instanceof S){const f=h.catch(g=>(l.done(),S.reject(g)));n.push(f)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}}).next(()=>S.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rn(r){return new S((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Lc(n.target.error);t(s)}})}let Xu=!1;function Lc(r){const e=rn.M(Se());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xu||(Xu=!0,setTimeout(()=>{throw n},0)),n}}return r}const Ss="IndexBackfiller";class Py{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){V(Ss,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ne.ie();V(Ss,`Documents written: ${t}`)}catch(t){fn(t)?V(Ss,"Ignoring IndexedDB error during index backfill: ",t):await Qn(t)}await this.re(6e4)})}}class Cy{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const n=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V(Ss,`Processing collection: ${o}`),this.oe(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(c=>(V(Ss,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=pf(i);Oc(o,n)>0&&(n=o)}),new Ye(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}et.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=-1;function Uo(r){return r==null}function Ls(r){return r===0&&1/r==-1/0}function xy(r){return typeof r=="number"&&Number.isInteger(r)&&!Ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="";function je(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Zu(e)),e=Ny(r.get(t),e);return Zu(e)}function Ny(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case co:t+="";break;default:t+=i}}return t}function Zu(r){return r+co+""}function gt(r){const e=r.length;if(G(e>=2,64408,{path:r}),e===2)return G(r.charAt(0)===co&&r.charAt(1)==="",56145,{path:r}),ae.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(co,i);switch((o<0||o>t)&&q(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:q(61167,{path:r})}i=o+2}return new ae(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="remoteDocuments",Xs="owner",sr="owner",Fs="mutationQueues",Dy="userId",ot="mutations",eh="batchId",Nn="userMutationsIndex",th=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(r,e){return[r,je(e)]}function Ef(r,e,t){return[r,je(e),t]}const Vy={},br="documentMutations",lo="remoteDocumentsV14",ky=["prefixPath","collectionGroup","readTime","documentId"],Ki="documentKeyIndex",My=["prefixPath","collectionGroup","documentId"],wf="collectionGroupIndex",Oy=["collectionGroup","readTime","prefixPath","documentId"],Us="remoteDocumentGlobal",sc="remoteDocumentGlobalKey",Sr="targets",Tf="queryTargetsIndex",Ly=["canonicalId","targetId"],Rr="targetDocuments",Fy=["targetId","path"],Fc="documentTargetsIndex",Uy=["path","targetId"],uo="targetGlobalKey",Vn="targetGlobal",Bs="collectionParents",By=["collectionId","parent"],Pr="clientMetadata",jy="clientId",Bo="bundles",qy="bundleId",jo="namedQueries",$y="name",Uc="indexConfiguration",zy="indexId",ic="collectionGroupIndex",Gy="collectionGroup",Rs="indexState",Ky=["indexId","uid"],vf="sequenceNumberIndex",Hy=["uid","sequenceNumber"],Ps="indexEntries",Wy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Af="documentKeyIndex",Qy=["indexId","uid","orderedDocumentKey"],qo="documentOverlays",Jy=["userId","collectionPath","documentId"],oc="collectionPathOverlayIndex",Yy=["userId","collectionPath","largestBatchId"],bf="collectionGroupOverlayIndex",Xy=["userId","collectionGroup","largestBatchId"],Bc="globals",Zy="name",Sf=[Fs,ot,br,Sn,Sr,Xs,Vn,Rr,Pr,Us,Bs,Bo,jo],eI=[...Sf,qo],Rf=[Fs,ot,br,lo,Sr,Xs,Vn,Rr,Pr,Us,Bs,Bo,jo,qo],Pf=Rf,jc=[...Pf,Uc,Rs,Ps],tI=jc,Cf=[...jc,Bc],nI=Cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends yf{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Re(r,e){const t=Q(r);return rn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function mn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function xf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??De.RED,this.left=s??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new De(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rh(this.data.getIterator())}getIteratorFrom(e){return new rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ir(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new ue(_e.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nf("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const rI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(r){if(G(!!r,39018),typeof r=="string"){let e=0;const t=rI.exec(r);if(G(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Nt(r){return typeof r=="string"?Ae.fromBase64String(r):Ae.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="server_timestamp",Vf="__type__",kf="__previous_value__",Mf="__local_write_time__";function qc(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Vf])==null?void 0:n.stringValue)===Df}function $o(r){const e=r.mapValue.fields[kf];return qc(e)?$o(e):e}function js(r){const e=xt(r.mapValue.fields[Mf].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,n,s,i,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const ho="(default)";class qn{constructor(e,t){this.projectId=e,this.database=t||ho}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database===ho}isEqual(e){return e instanceof qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="__type__",Of="__max__",Yt={mapValue:{fields:{__type__:{stringValue:Of}}}},zc="__vector__",Cr="value",Hi={nullValue:"NULL_VALUE"};function an(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?qc(r)?4:Lf(r)?9007199254740991:zo(r)?10:11:q(28295,{value:r})}function wt(r,e){if(r===e)return!0;const t=an(r);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return js(r).isEqual(js(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xt(s.timestampValue),c=xt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Nt(s.bytesValue).isEqual(Nt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),c=me(i.doubleValue);return o===c?Ls(o)===Ls(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Ar(r.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nh(o)!==nh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!wt(o[l],c[l])))return!1;return!0}(r,e);default:return q(52216,{left:r})}}function qs(r,e){return(r.values||[]).find(t=>wt(t,e))!==void 0}function cn(r,e){if(r===e)return 0;const t=an(r),n=an(e);if(t!==n)return X(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return sh(r.timestampValue,e.timestampValue);case 4:return sh(js(r),js(e));case 5:return nc(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Nt(i),l=Nt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=X(c[h],l[h]);if(f!==0)return f}return X(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=X(me(i.latitude),me(o.latitude));return c!==0?c:X(me(i.longitude),me(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ih(r.arrayValue,e.arrayValue);case 10:return function(i,o){var p,R,x,D;const c=i.fields||{},l=o.fields||{},h=(p=c[Cr])==null?void 0:p.arrayValue,f=(R=l[Cr])==null?void 0:R.arrayValue,g=X(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return g!==0?g:ih(h,f)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yt.mapValue&&o===Yt.mapValue)return 0;if(i===Yt.mapValue)return 1;if(o===Yt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const p=nc(l[g],f[g]);if(p!==0)return p;const R=cn(c[l[g]],h[f[g]]);if(R!==0)return R}return X(l.length,f.length)}(r.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function sh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return X(r,e);const t=xt(r),n=xt(e),s=X(t.seconds,n.seconds);return s!==0?s:X(t.nanos,n.nanos)}function ih(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=cn(t[s],n[s]);if(i)return i}return X(t.length,n.length)}function xr(r){return cc(r)}function cc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=xt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Nt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return F.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=cc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${cc(t.fields[o])}`;return s+"}"}(r.mapValue):q(61005,{value:r})}function Wi(r){switch(an(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$o(r);return e?16+Wi(e):16;case 5:return 2*r.stringValue.length;case 6:return Nt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Wi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return mn(n.fields,(i,o)=>{s+=i.length+Wi(o)}),s}(r.mapValue);default:throw q(13486,{value:r})}}function $s(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function lc(r){return!!r&&"integerValue"in r}function zs(r){return!!r&&"arrayValue"in r}function oh(r){return!!r&&"nullValue"in r}function ah(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qi(r){return!!r&&"mapValue"in r}function zo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[$c])==null?void 0:n.stringValue)===zc}function Cs(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return mn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Cs(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cs(r.arrayValue.values[t]);return e}return{...r}}function Lf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Of}const Ff={mapValue:{fields:{[$c]:{stringValue:zc},[Cr]:{arrayValue:{}}}}};function iI(r){return"nullValue"in r?Hi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?$s(qn.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?zo(r)?Ff:{mapValue:{}}:q(35942,{value:r})}function oI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?$s(qn.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ff:"mapValue"in r?zo(r)?{mapValue:{}}:Yt:q(61959,{value:r})}function ch(r,e){const t=cn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function lh(r,e){const t=cn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(t)}setAll(e){let t=_e.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Cs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){mn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ue(Cs(this.value))}}function Uf(r){const e=[];return mn(r.fields,(t,n)=>{const s=new _e([t]);if(Qi(n)){const i=Uf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,K.min(),K.min(),K.min(),Ue.empty(),0)}static newFoundDocument(e,t,n,s){return new Ee(e,1,t,K.min(),n,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,K.min(),K.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,K.min(),K.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.position=e,this.inclusive=t}}function uh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(o.referenceValue),t.key):n=cn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function hh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!wt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t="asc"){this.field=e,this.dir=t}}function aI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{}class re extends Bf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new cI(e,t,n):t==="array-contains"?new hI(e,n):t==="in"?new Kf(e,n):t==="not-in"?new dI(e,n):t==="array-contains-any"?new fI(e,n):new re(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new lI(e,n):new uI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Bf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new le(e,t)}matches(e){return Dr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dr(r){return r.op==="and"}function uc(r){return r.op==="or"}function Gc(r){return jf(r)&&Dr(r)}function jf(r){for(const e of r.filters)if(e instanceof le)return!1;return!0}function hc(r){if(r instanceof re)return r.field.canonicalString()+r.op.toString()+xr(r.value);if(Gc(r))return r.filters.map(e=>hc(e)).join(",");{const e=r.filters.map(t=>hc(t)).join(",");return`${r.op}(${e})`}}function qf(r,e){return r instanceof re?function(n,s){return s instanceof re&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(r,e):r instanceof le?function(n,s){return s instanceof le&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&qf(o,s.filters[c]),!0):!1}(r,e):void q(19439)}function $f(r,e){const t=r.filters.concat(e);return le.create(t,r.op)}function zf(r){return r instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${xr(t.value)}`}(r):r instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(zf).join(" ,")+"}"}(r):"Filter"}class cI extends re{constructor(e,t,n){super(e,t,n),this.key=F.fromName(n.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class lI extends re{constructor(e,t){super(e,"in",t),this.keys=Gf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uI extends re{constructor(e,t){super(e,"not-in",t),this.keys=Gf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gf(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>F.fromName(n.referenceValue))}class hI extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zs(t)&&qs(t.arrayValue,this.value)}}class Kf extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class dI extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class fI extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>qs(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function dc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new mI(r,e,t,n,s,i,o)}function $n(r){const e=Q(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>hc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>xr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>xr(n)).join(",")),e.Te=t}return e.Te}function Zs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!aI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!qf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!hh(r.startAt,e.startAt)&&hh(r.endAt,e.endAt)}function fo(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function mo(r,e){return r.filters.filter(t=>t instanceof re&&t.field.isEqual(e))}function dh(r,e,t){let n=Hi,s=!0;for(const i of mo(r,e)){let o=Hi,c=!0;switch(i.op){case"<":case"<=":o=iI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Hi}ch({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];ch({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function fh(r,e,t){let n=Yt,s=!0;for(const i of mo(r,e)){let o=Yt,c=!0;switch(i.op){case">=":case">":o=oI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Yt}lh({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];lh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function gI(r,e,t,n,s,i,o,c){return new zr(r,e,t,n,s,i,o,c)}function ei(r){return new zr(r)}function mh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Hf(r){return r.collectionGroup!==null}function xs(r){const e=Q(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ue(_e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Gs(i,n))}),t.has(_e.keyField().canonicalString())||e.Ie.push(new Gs(_e.keyField(),n))}return e.Ie}function tt(r){const e=Q(r);return e.Ee||(e.Ee=pI(e,xs(r))),e.Ee}function pI(r,e){if(r.limitType==="F")return dc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gs(s.field,i)});const t=r.endAt?new Nr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Nr(r.startAt.position,r.startAt.inclusive):null;return dc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function fc(r,e){const t=r.filters.concat([e]);return new zr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function go(r,e,t){return new zr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Go(r,e){return Zs(tt(r),tt(e))&&r.limitType===e.limitType}function Wf(r){return`${$n(tt(r))}|lt:${r.limitType}`}function dr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>zf(s)).join(", ")}]`),Uo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xr(s)).join(",")),`Target(${n})`}(tt(r))}; limitType=${r.limitType})`}function ti(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of xs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=uh(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,xs(n),s)||n.endAt&&!function(o,c,l){const h=uh(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,xs(n),s))}(r,e)}function _I(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Qf(r){return(e,t)=>{let n=!1;for(const s of xs(r)){const i=yI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function yI(r,e,t){const n=r.field.isKeyField()?F.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?cn(l,h):q(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return xf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new ge(F.comparator);function Je(){return II}const Jf=new ge(F.comparator);function Is(...r){let e=Jf;for(const t of r)e=e.insert(t.key,t);return e}function Yf(r){let e=Jf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function pt(){return Ns()}function Xf(){return Ns()}function Ns(){return new Mt(r=>r.toString(),(r,e)=>r.isEqual(e))}const EI=new ge(F.comparator),wI=new ue(F.comparator);function ee(...r){let e=wI;for(const t of r)e=e.add(t);return e}const TI=new ue(X);function vI(){return TI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function Zf(r){return{integerValue:""+r}}function em(r,e){return xy(e)?Zf(e):Kc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this._=void 0}}function AI(r,e,t){return r instanceof Vr?function(s,i){const o={fields:{[Vf]:{stringValue:Df},[Mf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qc(i)&&(i=$o(i)),i&&(o.fields[kf]=i),{mapValue:o}}(t,e):r instanceof kr?nm(r,e):r instanceof Mr?rm(r,e):function(s,i){const o=tm(s,i),c=gh(o)+gh(s.Ae);return lc(o)&&lc(s.Ae)?Zf(c):Kc(s.serializer,c)}(r,e)}function bI(r,e,t){return r instanceof kr?nm(r,e):r instanceof Mr?rm(r,e):t}function tm(r,e){return r instanceof Or?function(n){return lc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Vr extends Ko{}class kr extends Ko{constructor(e){super(),this.elements=e}}function nm(r,e){const t=sm(e);for(const n of r.elements)t.some(s=>wt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Mr extends Ko{constructor(e){super(),this.elements=e}}function rm(r,e){let t=sm(e);for(const n of r.elements)t=t.filter(s=>!wt(s,n));return{arrayValue:{values:t}}}class Or extends Ko{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function gh(r){return me(r.integerValue||r.doubleValue)}function sm(r){return zs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.field=e,this.transform=t}}function SI(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof kr&&s instanceof kr||n instanceof Mr&&s instanceof Mr?Ar(n.elements,s.elements,wt):n instanceof Or&&s instanceof Or?wt(n.Ae,s.Ae):n instanceof Vr&&s instanceof Vr}(r.transform,e.transform)}class RI{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ho{}function im(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Wo(r.key,Be.none()):new Gr(r.key,r.data,Be.none());{const t=r.data,n=Ue.empty();let s=new ue(_e.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Ot(r.key,n,new Ke(s.toArray()),Be.none())}}function PI(r,e,t){r instanceof Gr?function(s,i,o){const c=s.value.clone(),l=_h(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Ot?function(s,i,o){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=_h(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(om(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ds(r,e,t,n){return r instanceof Gr?function(i,o,c,l){if(!Ji(i.precondition,o))return c;const h=i.value.clone(),f=yh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ot?function(i,o,c,l){if(!Ji(i.precondition,o))return c;const h=yh(i.fieldTransforms,l,o),f=o.data;return f.setAll(om(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,o,c){return Ji(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function CI(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=tm(n.transform,s||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(n.field,i))}return t||null}function ph(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ar(n,s,(i,o)=>SI(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Gr extends Ho{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ot extends Ho{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function om(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function _h(r,e,t){const n=new Map;G(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,bI(o,c,t[s]))}return n}function yh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,AI(i,o,e))}return n}class Wo extends Ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class am extends Ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PI(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ds(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ds(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Xf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=im(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(t,n)=>ph(t,n))&&Ar(this.baseMutations,e.baseMutations,(t,n)=>ph(t,n))}}class Qc{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return EI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Qc(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ie;function NI(r){switch(r){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:r})}}function cm(r){if(r===void 0)return ze("GRPC error has no .code"),C.UNKNOWN;switch(r){case Te.OK:return C.OK;case Te.CANCELLED:return C.CANCELLED;case Te.UNKNOWN:return C.UNKNOWN;case Te.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Te.INTERNAL:return C.INTERNAL;case Te.UNAVAILABLE:return C.UNAVAILABLE;case Te.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Te.NOT_FOUND:return C.NOT_FOUND;case Te.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Te.ABORTED:return C.ABORTED;case Te.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Te.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:r})}}(ie=Te||(Te={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new nn([4294967295,4294967295],0);function Ih(r){const e=DI().encode(r),t=new sf;return t.update(e),new Uint8Array(t.digest())}function Eh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,n],0),new nn([s,i],0)]}class Yc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Es(`Invalid padding: ${t}`);if(n<0)throw new Es(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Es(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=nn.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(nn.fromNumber(n)));return s.compare(VI)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ih(e),[n,s]=Eh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=Ih(e),[n,s]=Eh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Qo(K.min(),s,new ge(X),Je(),ee())}}class ni{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ni(n,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class lm{constructor(e,t){this.targetId=e,this.Ce=t}}class um{constructor(e,t,n=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class wh{constructor(){this.ve=0,this.Fe=Th(),this.Me=Ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),n=ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:q(38017,{changeType:i})}}),new ni(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Th()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Je(),this.Je=Vi(),this.He=Vi(),this.Ye=new ge(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(fo(i))if(n===0){const o=new F(i.path);this.et(t,o,Ee.newNoDocument(o,K.min()))}else G(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Nt(n).toUint8Array()}catch(l){if(l instanceof Nf)return jn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Yc(o,s,i)}catch(l){return jn(l instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&fo(c.target)){const l=new F(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ee.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let n=ee();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Qo(e,t,this.Ye,this.je,n);return this.je=Je(),this.Je=Vi(),this.He=Vi(),this.Ye=new ge(X),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new wh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ue(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ue(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Vi(){return new ge(F.comparator)}function Th(){return new ge(F.comparator)}const MI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LI=(()=>({and:"AND",or:"OR"}))();class FI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mc(r,e){return r.useProto3Json||Uo(e)?e:{value:e}}function Lr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function UI(r,e){return Lr(r,e.toTimestamp())}function Ge(r){return G(!!r,49232),K.fromTimestamp(function(t){const n=xt(t);return new ce(n.seconds,n.nanos)}(r))}function Xc(r,e){return gc(r,e).canonicalString()}function gc(r,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function dm(r){const e=ae.fromString(r);return G(wm(e),10190,{key:e.toString()}),e}function po(r,e){return Xc(r.databaseId,e.path)}function kn(r,e){const t=dm(e);if(t.get(1)!==r.databaseId.projectId)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new F(gm(t))}function fm(r,e){return Xc(r.databaseId,e)}function mm(r){const e=dm(r);return e.length===4?ae.emptyPath():gm(e)}function pc(r){return new ae(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gm(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vh(r,e,t){return{name:po(r,e),fields:t.value.mapValue.fields}}function BI(r,e,t){const n=kn(r,e.name),s=Ge(e.updateTime),i=e.createTime?Ge(e.createTime):K.min(),o=new Ue({mapValue:{fields:e.fields}}),c=Ee.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function jI(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string",58123),Ae.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ae.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:cm(h.code);return new k(f,h.message||"")}(o);t=new um(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=kn(r,n.document.name),i=Ge(n.document.updateTime),o=n.document.createTime?Ge(n.document.createTime):K.min(),c=new Ue({mapValue:{fields:n.document.fields}}),l=Ee.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Yi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=kn(r,n.document),i=n.readTime?Ge(n.readTime):K.min(),o=Ee.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Yi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=kn(r,n.document),i=n.removedTargetIds||[];t=new Yi([],i,s,null)}else{if(!("filter"in e))return q(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new xI(s,i),c=n.targetId;t=new lm(c,o)}}return t}function _o(r,e){let t;if(e instanceof Gr)t={update:vh(r,e.key,e.value)};else if(e instanceof Wo)t={delete:po(r,e.key)};else if(e instanceof Ot)t={update:vh(r,e.key,e.data),updateMask:HI(e.fieldMask)};else{if(!(e instanceof am))return q(16599,{Vt:e.type});t={verify:po(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Vr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof kr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Or)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(r,e.precondition)),t}function _c(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(Ge(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Vr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new kr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Mr(f)}else"increment"in c?l=new Or(o,c.increment):q(16584,{proto:c});const h=_e.fromServerFormat(c.fieldPath);return new Hc(h,l)}(r,s)):[];if(e.update){e.update.name;const s=kn(r,e.update.name),i=new Ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Ke(h.map(f=>_e.fromServerFormat(f)))}(e.updateMask);return new Ot(s,i,o,t,n)}return new Gr(s,i,t,n)}if(e.delete){const s=kn(r,e.delete);return new Wo(s,t)}if(e.verify){const s=kn(r,e.verify);return new am(s,t)}return q(1463,{proto:e})}function qI(r,e){return r&&r.length>0?(G(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Ge(s.updateTime):Ge(i);return o.isEqual(K.min())&&(o=Ge(i)),new RI(o,s.transformResults||[])}(t,e))):[]}function pm(r,e){return{documents:[fm(r,e.path)]}}function _m(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=fm(r,s);const i=function(h){if(h.length!==0)return Em(le.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:fr(p.field),direction:zI(p.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=mc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function ym(r){let e=mm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const p=Im(g);return p instanceof le&&Gc(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(p=>function(x){return new Gs(mr(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(t.orderBy));let c=null;t.limit&&(c=function(g){let p;return p=typeof g=="object"?g.value:g,Uo(p)?null:p}(t.limit));let l=null;t.startAt&&(l=function(g){const p=!!g.before,R=g.values||[];return new Nr(R,p)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const p=!g.before,R=g.values||[];return new Nr(R,p)}(t.endAt)),gI(e,s,o,i,c,"F",l,h)}function $I(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Im(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=mr(t.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(r):r.fieldFilter!==void 0?function(t){return re.create(mr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(n=>Im(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(r):q(30097,{filter:r})}function zI(r){return MI[r]}function GI(r){return OI[r]}function KI(r){return LI[r]}function fr(r){return{fieldPath:r.canonicalString()}}function mr(r){return _e.fromServerFormat(r.fieldPath)}function Em(r){return r instanceof re?function(t){if(t.op==="=="){if(ah(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NAN"}};if(oh(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ah(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NAN"}};if(oh(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(t.field),op:GI(t.op),value:t.value}}}(r):r instanceof le?function(t){const n=t.getFilters().map(s=>Em(s));return n.length===1?n[0]:{compositeFilter:{op:KI(t.op),filters:n}}}(r):q(54877,{filter:r})}function HI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,n,s,i=K.min(),o=K.min(),c=Ae.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.yt=e}}function WI(r,e){let t;if(e.document)t=BI(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=F.fromSegments(e.noDocument.path),s=Gn(e.noDocument.readTime);t=Ee.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q(56709);{const n=F.fromSegments(e.unknownDocument.path),s=Gn(e.unknownDocument.version);t=Ee.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ce(s[0],s[1]);return K.fromTimestamp(i)}(e.readTime)),t}function Ah(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:yo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:po(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Lr(i,o.version.toTimestamp()),createTime:Lr(i,o.createTime.toTimestamp())}}(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:zn(e.version)};else{if(!e.isUnknownDocument())return q(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:zn(e.version)}}return n}function yo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function zn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Gn(r){const e=new ce(r.seconds,r.nanoseconds);return K.fromTimestamp(e)}function Pn(r,e){const t=(e.baseMutations||[]).map(i=>_c(r.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>_c(r.yt,i)),s=ce.fromMillis(e.localWriteTimeMs);return new Wc(e.batchId,s,t,n)}function ws(r){const e=Gn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Gn(r.lastLimboFreeSnapshotVersion):K.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return G(o===1,1966,{count:o}),tt(ei(mm(i.documents[0])))}(r.query):function(i){return tt(ym(i))}(r.query),new St(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Ae.fromBase64String(r.resumeToken))}function vm(r,e){const t=zn(e.snapshotVersion),n=zn(e.lastLimboFreeSnapshotVersion);let s;s=fo(e.target)?pm(r.yt,e.target):_m(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$n(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Am(r){const e=ym({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?go(e,e.limit,"L"):e}function Fa(r,e){return new Jc(e.largestBatchId,_c(r.yt,e.overlayMutation))}function bh(r,e){const t=e.path.lastSegment();return[r,je(e.path.popLast()),t]}function Sh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:zn(n.readTime),documentKey:je(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{getBundleMetadata(e,t){return Rh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Gn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Rh(e).put(function(s){return{bundleId:s.id,createTime:zn(Ge(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ph(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Am(i.bundledQuery),readTime:Gn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Ph(e).put(function(s){return{name:s.name,readTime:zn(Ge(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Rh(r){return Re(r,Bo)}function Ph(r){return Re(r,jo)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Jo(e,n)}getOverlay(e,t){return fs(e).get(bh(this.userId,t)).next(n=>n?Fa(this.serializer,n):null)}getOverlays(e,t){const n=pt();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Jc(t,o);s.push(this.St(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(je(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(fs(e).Z(oc,c))}),S.waitFor(i)}getOverlaysForCollection(e,t,n){const s=pt(),i=je(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return fs(e).J(oc,o).next(c=>{for(const l of c){const h=Fa(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=pt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fs(e).ee({index:bf,range:c},(l,h,f)=>{const g=Fa(this.serializer,h);i.size()<s||g.largestBatchId===o?(i.set(g.getKey(),g),o=g.largestBatchId):f.done()}).next(()=>i)}St(e,t){return fs(e).put(function(s,i,o){const[c,l,h]=bh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:_o(s.yt,o.mutation)}}(this.serializer,this.userId,t))}}function fs(r){return Re(r,qo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{bt(e){return Re(e,Bc)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Ae.fromUint8Array(n):Ae.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(me(e.integerValue));else if("doubleValue"in e){const n=me(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Ls(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=xt(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Nt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Lf(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):zo(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):q(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){var o,c;const n=e.fields||{};this.Ft(t,53);const s=Cr,i=((c=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(me(i)),this.Ot(s,t),this.Ct(n[s],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),F.fromName(e).path.forEach(n=>{this.Ft(t,60),this.Ut(n,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Cn.Kt=new Cn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=255;function YI(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Ch(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=YI(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class XI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),n=Ch(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=Ch(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(or),this.sn(255)}_n(){this.an(or),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===or?(this.sn(or),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===or?(this.an(or),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class ZI{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class eE{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class ms{constructor(){this.cn=new XI,this.ln=new ZI(this.cn),this.hn=new eE(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,n,s){this.Tn=e,this.In=t,this.En=n,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new xn(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Xi(this.En),directionalValue:Xi(this.dn),orderedDocumentKey:Xi(t),documentKey:n.path.toArray()}}Vn(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function qt(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=xh(r.En,e.En),t!==0?t:(t=xh(r.dn,e.dn),t!==0?t:F.comparator(r.In,e.In)))}function xh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Xi(r){return Jd()?function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n}(r):r}function Nh(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(r)}class Dh{constructor(e){this.mn=new ue((t,n)=>_e.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(G(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=rc(e);if(t!==void 0&&!this.wn(t))return!1;const n=bn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.Sn(c,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.fn.length||!this.bn(this.fn[o++],c))return!1}return!0}Dn(){if(this.pn)return null;let e=new ue(_e.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new zi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new zi(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new zi(n.field,n.dir==="asc"?0:1)));return new ao(ao.UNKNOWN_ID,this.collectionId,t,Os.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(r){var t,n;if(G(r instanceof re||r instanceof le,20012),r instanceof re){if(r instanceof Kf){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map(i=>re.create(r.field,"==",i)))||[];return le.create(s,"or")}return r}const e=r.filters.map(s=>bm(s));return le.create(e,r.op)}function tE(r){if(r.getFilters().length===0)return[];const e=Ec(bm(r));return G(Sm(e),7391),yc(e)||Ic(e)?[e]:e.getFilters()}function yc(r){return r instanceof re}function Ic(r){return r instanceof le&&Gc(r)}function Sm(r){return yc(r)||Ic(r)||function(t){if(t instanceof le&&uc(t)){for(const n of t.getFilters())if(!yc(n)&&!Ic(n))return!1;return!0}return!1}(r)}function Ec(r){if(G(r instanceof re||r instanceof le,34018),r instanceof re)return r;if(r.filters.length===1)return Ec(r.filters[0]);const e=r.filters.map(n=>Ec(n));let t=le.create(e,r.op);return t=Io(t),Sm(t)?t:(G(t instanceof le,64498),G(Dr(t),40251),G(t.filters.length>1,57927),t.filters.reduce((n,s)=>Zc(n,s)))}function Zc(r,e){let t;return G(r instanceof re||r instanceof le,38388),G(e instanceof re||e instanceof le,25473),t=r instanceof re?e instanceof re?function(s,i){return le.create([s,i],"and")}(r,e):Vh(r,e):e instanceof re?Vh(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0,48005),Dr(s)&&Dr(i))return $f(s,i.getFilters());const o=uc(s)?s:i,c=uc(s)?i:s,l=o.filters.map(h=>Zc(h,c));return le.create(l,"or")}(r,e),Io(t)}function Vh(r,e){if(Dr(e))return $f(e,r.getFilters());{const t=e.filters.map(n=>Zc(r,n));return le.create(t,"or")}}function Io(r){if(G(r instanceof re||r instanceof le,11850),r instanceof re)return r;const e=r.getFilters();if(e.length===1)return Io(e[0]);if(jf(r))return r;const t=e.map(s=>Io(s)),n=[];return t.forEach(s=>{s instanceof re?n.push(s):s instanceof le&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:le.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.Cn=new el}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Ye.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class el{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ue(ae.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ue(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="IndexedDbIndexManager",ki=new Uint8Array(0);class rE{constructor(e,t){this.databaseId=t,this.vn=new el,this.Fn=new Mt(n=>$n(n),(n,s)=>Zs(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const i={collectionId:n,parent:je(s)};return Mh(e).put(i)}return S.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[ff(t),""],!1,!0);return Mh(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(gt(o.parent))}return n})}addFieldIndex(e,t){const n=gs(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=cr(e);return i.next(c=>{o.put(Sh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=gs(e),s=cr(e),i=ar(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=gs(e),n=ar(e),s=cr(e);return t.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(e,t){return S.forEach(this.Mn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Dh(n).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=ar(e);let s=!0;const i=new Map;return S.forEach(this.Mn(t),o=>this.xn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=ee();const c=[];return S.forEach(i,(l,h)=>{V(kh,`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(l)} to execute ${$n(t)}`);const f=function(O,z){const se=rc(z);if(se===void 0)return null;for(const te of mo(O,se.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null}(h,l),g=function(O,z){const se=new Map;for(const te of bn(z))for(const E of mo(O,te.fieldPath))switch(E.op){case"==":case"in":se.set(te.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return se.set(te.fieldPath.canonicalString(),E.value),Array.from(se.values())}return null}(h,l),p=function(O,z){const se=[];let te=!0;for(const E of bn(z)){const _=E.kind===0?dh(O,E.fieldPath,O.startAt):fh(O,E.fieldPath,O.startAt);se.push(_.value),te&&(te=_.inclusive)}return new Nr(se,te)}(h,l),R=function(O,z){const se=[];let te=!0;for(const E of bn(z)){const _=E.kind===0?fh(O,E.fieldPath,O.endAt):dh(O,E.fieldPath,O.endAt);se.push(_.value),te&&(te=_.inclusive)}return new Nr(se,te)}(h,l),x=this.On(l,h,p),D=this.On(l,h,R),N=this.Nn(l,h,g),M=this.Bn(l.indexId,f,x,p.inclusive,D,R.inclusive,N);return S.forEach(M,j=>n.Y(j,t.limit).next(O=>{O.forEach(z=>{const se=F.fromSegments(z.documentKey);o.has(se)||(o=o.add(se),c.push(se))})}))}).next(()=>c)}return S.resolve(null)})}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=tE(le.create(e.filters,"and")).map(n=>dc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,t),t)}Bn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let g=0;g<l;++g){const p=t?this.Ln(t[g/h]):ki,R=this.kn(e,p,n[g%h],s),x=this.qn(e,p,i[g%h],o),D=c.map(N=>this.kn(e,p,N,!0));f.push(...this.createRange(R,x,D))}return f}kn(e,t,n,s){const i=new xn(e,F.empty(),t,n);return s?i:i.An()}qn(e,t,n,s){const i=new xn(e,F.empty(),t,n);return s?i.An():i}xn(e,t){const n=new Dh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.yn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Mn(t);return S.forEach(s,i=>this.xn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ue(_e.comparator),f=!1;for(const g of l.filters)for(const p of g.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const g of l.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Qn(e,t){const n=new ms;for(const s of bn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Pn(s.kind);Cn.Kt.Dt(i,o)}return n.un()}Ln(e){const t=new ms;return Cn.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new ms;return Cn.Kt.Dt($s(this.databaseId,t),n.Pn(function(i){const o=bn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.un()}Nn(e,t,n){if(n===null)return[];let s=[];s.push(new ms);let i=0;for(const o of bn(e)){const c=n[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&zs(c))s=this.Kn(s,o,c);else{const h=l.Pn(o.kind);Cn.Kt.Dt(c,h)}}return this.Wn(s)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new ms;l.seed(c.un()),Cn.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find(n=>n instanceof re&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=gs(e),s=cr(e);return(t?n.J(ic,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,g){const p=g?new Os(g.sequenceNumber,new Ye(Gn(g.readTime),new F(gt(g.documentKey)),g.largestBatchId)):Os.empty(),R=f.fields.map(([x,D])=>new zi(_e.fromServerFormat(x),D));return new ao(f.indexId,f.collectionGroup,R,p)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:X(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=gs(e),i=cr(e);return this.Gn(e).next(o=>s.J(ic,IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(Sh(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),S.forEach(c,l=>this.zn(e,s,l).next(h=>{const f=this.jn(i,l);return h.isEqual(f)?S.resolve():this.Jn(e,i,l,h,f)}))))})}Hn(e,t,n,s){return ar(e).put(s.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,s){return ar(e).delete(s.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const s=ar(e);let i=new ue(qt);return s.ee({index:Af,range:IDBKeyRange.only([n.indexId,this.uid,Xi(this.$n(n,t))])},(o,c)=>{i=i.add(new xn(n.indexId,t,Nh(c.arrayValue),Nh(c.directionalValue)))}).next(()=>i)}jn(e,t){let n=new ue(qt);const s=this.Qn(t,e);if(s==null)return n;const i=rc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(zs(o))for(const c of o.arrayValue.values||[])n=n.add(new xn(t.indexId,e.key,this.Ln(c),s))}else n=n.add(new xn(t.indexId,e.key,ki,s));return n}Jn(e,t,n,s,i){V(kh,"Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,g,p){const R=l.getIterator(),x=h.getIterator();let D=ir(R),N=ir(x);for(;D||N;){let M=!1,j=!1;if(D&&N){const O=f(D,N);O<0?j=!0:O>0&&(M=!0)}else D!=null?j=!0:M=!0;M?(g(N),N=ir(x)):j?(p(D),D=ir(R)):(D=ir(R),N=ir(x))}}(s,i,qt,c=>{o.push(this.Hn(e,t,n,c))},c=>{o.push(this.Yn(e,t,n,c))}),S.waitFor(o)}Gn(e){let t=1;return cr(e).ee({index:vf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>qt(o,c)).filter((o,c,l)=>!c||qt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=qt(o,e),l=qt(o,t);if(c===0)s[0]=e.An();else if(c>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const c=s[o].Vn(this.uid,ki,F.empty()),l=s[o+1].Vn(this.uid,ki,F.empty());i.push(IDBKeyRange.bound(c,l))}return i}Zn(e,t){return qt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Oh)}getMinOffset(e,t){return S.mapArray(this.Mn(t),n=>this.xn(e,n).next(s=>s||q(44426))).next(Oh)}}function Mh(r){return Re(r,Bs)}function ar(r){return Re(r,Ps)}function gs(r){return Re(r,Uc)}function cr(r){return Re(r,Rs)}function Oh(r){G(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Oc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ye(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rm=41943040;class Fe{static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(r,e,t){const n=r.store(ot),s=r.store(br),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.ee({range:o},(f,g,p)=>(c++,p.delete()));i.push(l.next(()=>{G(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const g=Ef(e,f.key.path,t.batchId);i.push(s.delete(g)),h.push(f.key)}return S.waitFor(i).next(()=>h)}function Eo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(Rm,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class Yo{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(e,t,n,s){G(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Yo(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $t(e).ee({index:Nn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=gr(e),o=$t(e);return o.add({}).next(c=>{G(typeof c=="number",49019);const l=new Wc(c,t,n,s),h=function(R,x,D){const N=D.baseMutations.map(j=>_o(R.yt,j)),M=D.mutations.map(j=>_o(R.yt,j));return{userId:x,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:N,mutations:M}}(this.serializer,this.userId,l),f=[];let g=new ue((p,R)=>X(p.canonicalString(),R.canonicalString()));for(const p of s){const R=Ef(this.userId,p.key.path,c);g=g.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(R,Vy))}return g.forEach(p=>{f.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Xn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return $t(e).get(t).next(n=>n?(G(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Pn(this.serializer,n)):null)}er(e,t){return this.Xn[t]?S.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return $t(e).ee({index:Nn,range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n,47524,{tr:n}),i=Pn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Dn;return $t(e).ee({index:Nn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Dn],[this.userId,Number.POSITIVE_INFINITY]);return $t(e).J(Nn,t).next(n=>n.map(s=>Pn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Gi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return gr(e).ee({range:s},(o,c,l)=>{const[h,f,g]=o,p=gt(f);if(h===this.userId&&t.path.isEqual(p))return $t(e).get(g).next(R=>{if(!R)throw q(61480,{nr:o,batchId:g});G(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(Pn(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(X);const s=[];return t.forEach(i=>{const o=Gi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=gr(e).ee({range:c},(h,f,g)=>{const[p,R,x]=h,D=gt(R);p===this.userId&&i.path.isEqual(D)?n=n.add(x):g.done()});s.push(l)}),S.waitFor(s).next(()=>this.rr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Gi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ue(X);return gr(e).ee({range:o},(l,h,f)=>{const[g,p,R]=l,x=gt(p);g===this.userId&&n.isPrefixOf(x)?x.length===s&&(c=c.add(R)):f.done()}).next(()=>this.rr(e,c))}rr(e,t){const n=[],s=[];return t.forEach(i=>{s.push($t(e).get(i).next(o=>{if(o===null)throw q(35274,{batchId:i});G(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Pn(this.serializer,o))}))}),S.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Pm(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ir(t.batchId)}),S.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return gr(e).ee({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=gt(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Cm(e,this.userId,t)}_r(e){return xm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Dn,lastStreamToken:""})}}function Cm(r,e,t){const n=Gi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return gr(r).ee({range:i,X:!0},(c,l,h)=>{const[f,g,p]=c;f===e&&g===s&&(o=!0),h.done()}).next(()=>o)}function $t(r){return Re(r,ot)}function gr(r){return Re(r,br)}function xm(r){return Re(r,Fs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Kn(0)}static cr(){return new Kn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next(t=>{const n=new Kn(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(t=>K.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.lr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s)))}addTargetData(e,t){return this.Pr(e,t).next(()=>this.lr(e).next(n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>lr(e).delete(t.targetId)).next(()=>this.lr(e)).next(n=>(G(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return lr(e).ee((o,c)=>{const l=ws(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return lr(e).ee((n,s)=>{const i=ws(s);t(i)})}lr(e){return Fh(e).get(uo).next(t=>(G(t!==null,2888),t))}hr(e,t){return Fh(e).put(uo,t)}Pr(e,t){return lr(e).put(vm(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=$n(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return lr(e).ee({range:s,index:Tf},(o,c,l)=>{const h=ws(c);Zs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Kt(e);return t.forEach(o=>{const c=je(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),S.waitFor(s)}removeMatchingKeys(e,t,n){const s=Kt(e);return S.forEach(t,i=>{const o=je(i.path);return S.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Kt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Kt(e);let i=ee();return s.ee({range:n,X:!0},(o,c,l)=>{const h=gt(o[1]),f=new F(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=je(t.path),s=IDBKeyRange.bound([n],[ff(n)],!1,!0);let i=0;return Kt(e).ee({index:Fc,X:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}At(e,t){return lr(e).get(t).next(n=>n?ws(n):null)}}function lr(r){return Re(r,Sr)}function Fh(r){return Re(r,Vn)}function Kt(r){return Re(r,Rr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="LruGarbageCollector",iE=1048576;function Bh([r,e],[t,n]){const s=X(r,t);return s===0?X(e,n):s}class oE{constructor(e){this.Ir=e,this.buffer=new ue(Bh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Bh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Nm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Uh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fn(t)?V(Uh,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.Vr(3e5)})}}class aE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(et.ce);const n=new oE(t);return this.mr.forEachTarget(e,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Lh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,c=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(h=Date.now(),hr()<=ne.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Dm(r,e){return new aE(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t){this.db=e,this.garbageCollector=Dm(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,(n,s)=>t(s))}addReference(e,t,n){return Mi(e,n)}removeReference(e,t,n){return Mi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Mi(e,t)}br(e,t){return function(s,i){let o=!1;return xm(s).te(c=>Cm(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,(o,c)=>{if(c<=t){const l=this.br(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,K.min()),Kt(e).delete(function(g){return[0,je(g.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Mi(e,t)}Sr(e,t){const n=Kt(e);let s,i=et.ce;return n.ee({index:Fc},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==et.ce&&t(new F(gt(s)),i),i=h,s=l):i=et.ce}).next(()=>{i!==et.ce&&t(new F(gt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Mi(r,e){return Kt(r).put(function(n,s){return{targetId:0,path:je(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.changes=new Mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return vn(e).put(n)}removeEntry(e,t,n){return vn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],yo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Dr(e,n)))}getEntry(e,t){let n=Ee.newInvalidDocument(t);return vn(e).ee({index:Ki,range:IDBKeyRange.only(ps(t))},(s,i)=>{n=this.Cr(t,i)}).next(()=>n)}vr(e,t){let n={size:0,document:Ee.newInvalidDocument(t)};return vn(e).ee({index:Ki,range:IDBKeyRange.only(ps(t))},(s,i)=>{n={document:this.Cr(t,i),size:Eo(i)}}).next(()=>n)}getEntries(e,t){let n=Je();return this.Fr(e,t,(s,i)=>{const o=this.Cr(s,i);n=n.insert(s,o)}).next(()=>n)}Mr(e,t){let n=Je(),s=new ge(F.comparator);return this.Fr(e,t,(i,o)=>{const c=this.Cr(i,o);n=n.insert(i,c),s=s.insert(i,Eo(o))}).next(()=>({documents:n,Or:s}))}Fr(e,t,n){if(t.isEmpty())return S.resolve();let s=new ue($h);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ps(s.first()),ps(s.last())),o=s.getIterator();let c=o.getNext();return vn(e).ee({index:Ki,range:i},(l,h,f)=>{const g=F.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&$h(c,g)<0;)n(c,null),c=o.getNext();c&&c.isEqual(g)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.j(ps(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),yo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vn(e).J(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Je();for(const g of h){const p=this.Cr(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);p.isFoundDocument()&&(ti(t,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Je();const o=qh(t,n),c=qh(t,Ye.max());return vn(e).ee({index:wf,range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const g=this.Cr(F.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new uE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jh(e).get(sc).next(t=>(G(!!t,20021),t))}Dr(e,t){return jh(e).put(sc,t)}Cr(e,t){if(t){const n=WI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(K.min())))return n}return Ee.newInvalidDocument(e)}}function km(r){return new lE(r)}class uE extends Vm{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Mt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ue((i,o)=>X(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Ah(this.Nr.serializer,o);s=s.add(i.path.popLast());const h=Eo(l);n+=h-c.size,t.push(this.Nr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Ah(this.Nr.serializer,o.convertToNoDocument(K.min()));t.push(this.Nr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Nr.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next(n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next(({documents:n,Or:s})=>(s.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function jh(r){return Re(r,Us)}function vn(r){return Re(r,lo)}function ps(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qh(r,e){const t=e.documentKey.path.toArray();return[r,yo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function $h(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=X(t[i],n[i]),s)return s;return s=X(t.length,n.length),s||(s=X(t[t.length-2],n[n.length-2]),s||X(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Ds(n.mutation,s,Ke.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ee()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ee()){const s=pt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Is();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=pt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ee()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Je();const o=Ns(),c=function(){return Ns()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ot)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ds(f.mutation,h,f.mutation.getFieldMask(),ce.now())):o.set(h.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>c.set(h,new hE(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const n=Ns();let s=new ge((o,c)=>o-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||Ke.empty();f=c.applyToLocalView(h,f),n.set(l,f);const g=(s.get(c.batchId)||ee()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=Xf();f.forEach(p=>{if(!i.has(p)){const R=im(t.get(p),n.get(p));R!==null&&g.set(p,R),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return S.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):S.resolve(pt());let c=Ms,l=i;return o.next(h=>S.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ee())).next(f=>({batchId:c,changes:Yf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(n=>{let s=Is();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const h=function(g,p){return new zr(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((g,p)=>{o=o.insert(g,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ee.newInvalidDocument(f)))});let c=Is();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Ds(f.mutation,h,Ke.empty(),ce.now()),ti(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ge(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Am(s.bundledQuery),readTime:Ge(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.overlays=new ge(F.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=pt();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const s=pt(),i=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ge((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=pt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=pt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return S.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Jc(t,n));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.Qr=new ue(Ce.$r),this.Ur=new ue(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Ce(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new F(new ae([])),n=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Ur.forEachInRange([n,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new F(new ae([])),n=new Ce(t,e),s=new Ce(t,e+1);let i=ee();return this.Ur.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ce(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return F.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ue(Ce.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wc(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Dn:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(X);return t.forEach(s=>{const i=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{n=n.add(c.Yr)})}),S.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const o=new Ce(new F(i),0);let c=new ue(X);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),S.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(n=>{const s=this.Xr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return S.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Ce(t,0),s=this.Zr.firstAfterOrEqual(n);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.ri=e,this.docs=function(){return new ge(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Je();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Je();const o=t.path,c=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Oc(pf(f),n)<=0||(s.has(f.key)||ti(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,n,s){q(9500)}ii(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _E(this)}getSize(e){return S.resolve(this.size)}}class _E extends Vm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.persistence=e,this.si=new Mt(t=>$n(t),Zs),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new tl,this.targetCount=0,this.ai=Kn.ur()}forEachTarget(e,t){return this.si.forEach((n,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),S.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.ui={},this.overlays={},this.ci=new et(0),this.li=!1,this.li=!0,this.hi=new mE,this.referenceDelegate=e(this),this.Pi=new yE(this),this.indexManager=new nE,this.remoteDocumentCache=function(s){return new pE(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Tm(t),this.Ii=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new gE(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new IE(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return S.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class IE extends yf{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.Ri=new tl,this.Vi=null}static mi(e){return new Xo(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,n=>{const s=F.fromPath(n);return this.gi(e,s).next(i=>{i||t.removeEntry(s,K.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class wo{constructor(e,t){this.persistence=e,this.pi=new Mt(n=>je(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Dm(this,t)}static mi(e,t){return new wo(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return S.forEach(this.pi,(n,s)=>this.br(e,n,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(c=>{c||(n++,i.removeEntry(o,K.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),S.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wi(e.data.value)),t}br(e,t,n){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return S.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Fo("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore(Xs)}(e),function(l){l.createObjectStore(Fs,{keyPath:Dy}),l.createObjectStore(ot,{keyPath:eh,autoIncrement:!0}).createIndex(Nn,th,{unique:!0}),l.createObjectStore(br)}(e),zh(e),function(l){l.createObjectStore(Sn)}(e));let o=S.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Rr),l.deleteObjectStore(Sr),l.deleteObjectStore(Vn)}(e),zh(e)),o=o.next(()=>function(l){const h=l.store(Vn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return h.put(uo,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store(ot).J().next(g=>{l.deleteObjectStore(ot),l.createObjectStore(ot,{keyPath:eh,autoIncrement:!0}).createIndex(Nn,th,{unique:!0});const p=h.store(ot),R=g.map(x=>p.put(x));return S.waitFor(R)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Pr,{keyPath:jy})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.yi(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(Us)}(e),this.wi(i)))),n<7&&s>=7&&(o=o.next(()=>this.Si(i))),n<8&&s>=8&&(o=o.next(()=>this.bi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.Di(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Bo,{keyPath:qy})})(e),function(l){l.createObjectStore(jo,{keyPath:$y})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore(qo,{keyPath:Jy});h.createIndex(oc,Yy,{unique:!1}),h.createIndex(bf,Xy,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore(lo,{keyPath:ky});h.createIndex(Ki,My),h.createIndex(wf,Oy)}(e)).next(()=>this.Ci(e,i)).next(()=>e.deleteObjectStore(Sn))),n<14&&s>=14&&(o=o.next(()=>this.Fi(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Uc,{keyPath:zy,autoIncrement:!0}).createIndex(ic,Gy,{unique:!1}),l.createObjectStore(Rs,{keyPath:Ky}).createIndex(vf,Hy,{unique:!1}),l.createObjectStore(Ps,{keyPath:Wy}).createIndex(Af,Qy,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(Rs).clear()}).next(()=>{t.objectStore(Ps).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Bc,{keyPath:Zy})})(e)})),n<18&&s>=18&&Jd()&&(o=o.next(()=>{t.objectStore(Rs).clear()}).next(()=>{t.objectStore(Ps).clear()})),o}wi(e){let t=0;return e.store(Sn).ee((n,s)=>{t+=Eo(s)}).next(()=>{const n={byteSize:t};return e.store(Us).put(sc,n)})}yi(e){const t=e.store(Fs),n=e.store(ot);return t.J().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Dn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Nn,o).next(c=>S.forEach(c,l=>{G(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const h=Pn(this.serializer,l);return Pm(e,i.userId,h).next(()=>{})}))}))}Si(e){const t=e.store(Rr),n=e.store(Sn);return e.store(Vn).get(uo).next(s=>{const i=[];return n.ee((o,c)=>{const l=new ae(o),h=function(g){return[0,je(g)]}(l);i.push(t.get(h).next(f=>f?S.resolve():(g=>t.put({targetId:0,path:je(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}bi(e,t){e.createObjectStore(Bs,{keyPath:By});const n=t.store(Bs),s=new el,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:je(l)})}};return t.store(Sn).ee({X:!0},(o,c)=>{const l=new ae(o);return i(l.popLast())}).next(()=>t.store(br).ee({X:!0},([o,c,l],h)=>{const f=gt(c);return i(f.popLast())}))}Di(e){const t=e.store(Sr);return t.ee((n,s)=>{const i=ws(s),o=vm(this.serializer,i);return t.put(o)})}Ci(e,t){const n=t.store(Sn),s=[];return n.ee((i,o)=>{const c=t.store(lo),l=function(g){return g.document?new F(ae.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):q(36783)}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>S.waitFor(s))}Fi(e,t){const n=t.store(ot),s=km(this.serializer),i=new nl(Xo.mi,this.serializer.yt);return n.J().next(o=>{const c=new Map;return o.forEach(l=>{let h=c.get(l.userId)??ee();Pn(this.serializer,l).keys().forEach(f=>h=h.add(f)),c.set(l.userId,h)}),S.forEach(c,(l,h)=>{const f=new Ne(h),g=Jo.wt(this.serializer,f),p=i.getIndexManager(f),R=Yo.wt(f,this.serializer,p,i.referenceDelegate);return new Mm(s,R,g,p).recalculateAndSaveOverlaysForDocumentKeys(new ac(t,et.ce),l).next()})})}}function zh(r){r.createObjectStore(Rr,{keyPath:Fy}).createIndex(Fc,Uy,{unique:!0}),r.createObjectStore(Sr,{keyPath:"targetId"}).createIndex(Tf,Ly,{unique:!0}),r.createObjectStore(Vn)}const zt="IndexedDbPersistence",Ua=18e5,Ba=5e3,ja="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",wE="main";class rl{constructor(e,t,n,s,i,o,c,l,h,f,g=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=o,this.document=c,this.xi=h,this.Oi=f,this.Ni=g,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=p=>Promise.resolve(),!rl.v())throw new k(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cE(this,s),this.$i=t+wE,this.serializer=new Tm(l),this.Ui=new rn(this.$i,this.Ni,new EE(this.serializer)),this.hi=new JI,this.Pi=new sE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=km(this.serializer),this.Ii=new QI,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&ze(zt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(C.FAILED_PRECONDITION,ja);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new et(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Oi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(t=>this.isPrimary&&!t?this.Zi(e).next(()=>!1):!!t&&this.Xi(e).next(()=>!0))).catch(e=>{if(fn(e))return V(zt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(zt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return _s(e).get(sr).next(t=>S.resolve(this.es(t)))}ts(e){return Oi(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Ua)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Re(t,Pr);return n.J().next(s=>{const i=this.ss(s,Ua),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?S.resolve(!0):_s(e).get(sr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Ba)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new k(C.FAILED_PRECONDITION,ja);return!1}}return!(!this.networkEnabled||!this.inForeground)||Oi(e).J().next(n=>this.ss(n,Ba).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V(zt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Xs,Pr],e=>{const t=new ac(e,et.ce);return this.Zi(t).next(()=>this.ts(t))}),this.Ui.close(),this.Ps()}ss(e,t){return e.filter(n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>Oi(e).J().next(t=>this.ss(t,Ua).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Yo.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rE(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Jo.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){V(zt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===18?nI:l===17?Cf:l===16?tI:l===15?jc:l===14?Pf:l===13?Rf:l===12?eI:l===11?Sf:void q(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,s,i,c=>(o=new ac(c,this.ci?this.ci.next():et.ce),t==="readwrite-primary"?this.Hi(o).next(l=>!!l||this.Yi(o)).next(l=>{if(!l)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new k(C.FAILED_PRECONDITION,_f);return n(o)}).next(l=>this.Xi(o).next(()=>l)):this.Is(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Is(e){return _s(e).get(sr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Ba)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(C.FAILED_PRECONDITION,ja)})}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _s(e).put(sr,t)}static v(){return rn.v()}Zi(e){const t=_s(e);return t.get(sr).next(n=>this.es(n)?(V(zt,"Releasing primary lease."),t.delete(sr)):S.resolve())}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ze(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Qd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return V(zt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ze(zt,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _s(r){return Re(r,Xs)}function Oi(r){return Re(r,Pr)}function TE(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sl(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Qd()?8:If(Se())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vE;return this.Ss(e,t,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)})}).next(()=>i.result)}bs(e,t,n,s){return n.documentReadCount<this.fs?(hr()<=ne.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(hr()<=ne.DEBUG&&V("QueryEngine","Query:",dr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(hr()<=ne.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):S.resolve())}ys(e,t){if(mh(t))return S.resolve(null);let n=tt(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=go(t,null,"F"),n=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=ee(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.Ds(t,c);return this.Cs(t,h,o,l.readTime)?this.ys(e,go(t,null,"F")):this.vs(e,h,t,l)}))})))}ws(e,t,n,s){return mh(t)||s.isEqual(K.min())?S.resolve(null):this.ps.getDocuments(e,n).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,s)?S.resolve(null):(hr()<=ne.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dr(t)),this.vs(e,o,t,by(s,Ms)).next(c=>c))})}Ds(e,t){let n=new ue(Qf(e));return t.forEach((s,i)=>{ti(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return hr()<=ne.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dr(t)),this.ps.getDocumentsMatchingQuery(e,t,Ye.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="LocalStore",AE=3e8;class bE{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ge(X),this.xs=new Mt(i=>$n(i),Zs),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Lm(r,e,t,n){return new bE(r,e,t,n)}async function Fm(r,e){const t=Q(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=ee();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function SE(r,e){const t=Q(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,p=g.keys();let R=S.resolve();return p.forEach(x=>{R=R.next(()=>f.getEntry(l,x)).next(D=>{const N=h.docVersions.get(x);G(N!==null,48541),D.version.compareTo(N)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Um(r){const e=Q(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function RE(r,e){const t=Q(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,g)=>{const p=s.get(g);if(!p)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,g)));let R=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(g,R),function(D,N,M){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=AE?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(p,R,f)&&c.push(t.Pi.updateTargetData(i,R))});let l=Je(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(PE(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!n.isEqual(K.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ms=s,i))}function PE(r,e,t){let n=ee(),s=ee();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Je();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(il,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function CE(r,e){const t=Q(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Dn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function xE(r,e){const t=Q(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Pi.getTargetData(n,e).next(i=>i?(s=i,S.resolve(s)):t.Pi.allocateTargetId(n).next(o=>(s=new St(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function wc(r,e,t){const n=Q(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fn(o))throw o;V(il,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Gh(r,e,t){const n=Q(r);let s=K.min(),i=ee();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const g=Q(l),p=g.xs.get(f);return p!==void 0?S.resolve(g.Ms.get(p)):g.Pi.getTargetData(h,f)}(n,o,tt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:K.min(),t?i:ee())).next(c=>(NE(n,_I(e),c),{documents:c,Qs:i})))}function NE(r,e,t){let n=r.Os.get(e)||K.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(e,n)}class Kh{constructor(){this.activeTargetIds=vI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bm{constructor(){this.Mo=new Kh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Kh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="ConnectivityMonitor";class Wh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Hh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Hh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li=null;function Tc(){return Li===null?Li=function(){return 268435456+Math.round(2147483648*Math.random())}():Li++,"0x"+Li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="RestConnection",VE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===ho?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const o=Tc(),c=this.zo(e,t.toUriEncodedString());V(qa,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=jr(h);return this.Jo(e,c,l,n,f).then(g=>(V(qa,`Received RPC '${e}' ${o}: `,g),g),g=>{throw jn(qa,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",n),g})}Ho(e,t,n,s,i,o){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$r}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const n=VE[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class OE extends kE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const o=Tc();return new Promise((c,l)=>{const h=new of;h.setWithCredentials(!0),h.listenOnce(af.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $i.NO_ERROR:const g=h.getResponseJson();V(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case $i.TIMEOUT:V(Le,`RPC '${e}' ${o} timed out`),l(new k(C.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const p=h.getStatus();if(V(Le,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const D=function(M){const j=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(x.status);l(new k(D,x.message))}else l(new k(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new k(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{V(Le,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);V(Le,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)})}T_(e,t,n){const s=Tc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uf(),c=lf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Le,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=o.createWebChannel(f,l);this.I_(g);let p=!1,R=!1;const x=new ME({Yo:N=>{R?V(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(V(Le,`Opening RPC '${e}' stream ${s} transport.`),g.open(),p=!0),V(Le,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Zo:()=>g.close()}),D=(N,M,j)=>{N.listen(M,O=>{try{j(O)}catch(z){setTimeout(()=>{throw z},0)}})};return D(g,ys.EventType.OPEN,()=>{R||(V(Le,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),D(g,ys.EventType.CLOSE,()=>{R||(R=!0,V(Le,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(g))}),D(g,ys.EventType.ERROR,N=>{R||(R=!0,jn(Le,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),x.a_(new k(C.UNAVAILABLE,"The operation could not be completed")))}),D(g,ys.EventType.MESSAGE,N=>{var M;if(!R){const j=N.data[0];G(!!j,16349);const O=j,z=(O==null?void 0:O.error)||((M=O[0])==null?void 0:M.error);if(z){V(Le,`RPC '${e}' stream ${s} received error:`,z);const se=z.status;let te=function(I){const T=Te[I];if(T!==void 0)return cm(T)}(se),E=z.message;te===void 0&&(te=C.INTERNAL,E="Unknown error status: "+se+" with message "+z.message),R=!0,x.a_(new k(te,E)),g.close()}else V(Le,`RPC '${e}' stream ${s} received:`,j),x.u_(j)}}),D(c,cf.STAT_EVENT,N=>{N.stat===tc.PROXY?V(Le,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===tc.NOPROXY&&V(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){return typeof window<"u"?window:null}function Zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(r){return new FI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="PersistentStream";class qm{constructor(e,t,n,s,i,o,c,l){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new k(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(Qh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(V(Qh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FE extends qm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jI(this.serializer,e),n=function(i){if(!("targetChange"in i))return K.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Ge(o.readTime):K.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=pc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=fo(l)?{documents:pm(i,l)}:{query:_m(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hm(i,o.resumeToken);const h=mc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=Lr(i,o.snapshotVersion.toTimestamp());const h=mc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=$I(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=pc(this.serializer),t.removeTarget=e,this.q_(t)}}class UE extends qm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=qI(e.writeResults,e.commitTime),n=Ge(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=pc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>_o(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class jE extends BE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,gc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(C.UNKNOWN,i.toString())})}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,gc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ze(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="RemoteStore";class $E{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{Jn(this)&&(V(Hn,"Restarting streams for network reachability change."),await async function(l){const h=Q(l);h.Ea.add(4),await Kr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ri(h)}(this))})}),this.Ra=new qE(n,s)}}async function ri(r){if(Jn(r))for(const e of r.da)await e(!0)}async function Kr(r){for(const e of r.da)await e(!1)}function $m(r,e){const t=Q(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ll(t)?cl(t):Hr(t).O_()&&al(t,e))}function ol(r,e){const t=Q(r),n=Hr(t);t.Ia.delete(e),n.O_()&&zm(t,e),t.Ia.size===0&&(n.O_()?n.L_():Jn(t)&&t.Ra.set("Unknown"))}function al(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hr(r).Y_(e)}function zm(r,e){r.Va.Ue(e),Hr(r).Z_(e)}function cl(r){r.Va=new kI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Hr(r).start(),r.Ra.ua()}function ll(r){return Jn(r)&&!Hr(r).x_()&&r.Ia.size>0}function Jn(r){return Q(r).Ea.size===0}function Gm(r){r.Va=void 0}async function zE(r){r.Ra.set("Online")}async function GE(r){r.Ia.forEach((e,t)=>{al(r,e)})}async function KE(r,e){Gm(r),ll(r)?(r.Ra.ha(e),cl(r)):r.Ra.set("Unknown")}async function HE(r,e,t){if(r.Ra.set("Online"),e instanceof um&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(r,e)}catch(n){V(Hn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await To(r,n)}else if(e instanceof Yi?r.Va.Ze(e):e instanceof lm?r.Va.st(e):r.Va.tt(e),!t.isEqual(K.min()))try{const n=await Um(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(Ae.EMPTY_BYTE_STRING,f.snapshotVersion)),zm(i,l);const g=new St(f.target,l,h,f.sequenceNumber);al(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V(Hn,"Failed to raise snapshot:",n),await To(r,n)}}async function To(r,e,t){if(!fn(e))throw e;r.Ea.add(1),await Kr(r),r.Ra.set("Offline"),t||(t=()=>Um(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(Hn,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await ri(r)})}function Km(r,e){return e().catch(t=>To(r,t,e))}async function si(r){const e=Q(r),t=ln(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dn;for(;WE(e);)try{const s=await CE(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,QE(e,s)}catch(s){await To(e,s)}Hm(e)&&Wm(e)}function WE(r){return Jn(r)&&r.Ta.length<10}function QE(r,e){r.Ta.push(e);const t=ln(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Hm(r){return Jn(r)&&!ln(r).x_()&&r.Ta.length>0}function Wm(r){ln(r).start()}async function JE(r){ln(r).ra()}async function YE(r){const e=ln(r);for(const t of r.Ta)e.ea(t.mutations)}async function XE(r,e,t){const n=r.Ta.shift(),s=Qc.from(n,e,t);await Km(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await si(r)}async function ZE(r,e){e&&ln(r).X_&&await async function(n,s){if(function(o){return NI(o)&&o!==C.ABORTED}(s.code)){const i=n.Ta.shift();ln(n).B_(),await Km(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await si(n)}}(r,e),Hm(r)&&Wm(r)}async function Jh(r,e){const t=Q(r);t.asyncQueue.verifyOperationInProgress(),V(Hn,"RemoteStore received new credentials");const n=Jn(t);t.Ea.add(3),await Kr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ri(t)}async function ew(r,e){const t=Q(r);e?(t.Ea.delete(2),await ri(t)):e||(t.Ea.add(2),await Kr(t),t.Ra.set("Unknown"))}function Hr(r){return r.ma||(r.ma=function(t,n,s){const i=Q(t);return i.sa(),new FE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:zE.bind(null,r),t_:GE.bind(null,r),r_:KE.bind(null,r),H_:HE.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ll(r)?cl(r):r.Ra.set("Unknown")):(await r.ma.stop(),Gm(r))})),r.ma}function ln(r){return r.fa||(r.fa=function(t,n,s){const i=Q(t);return i.sa(),new UE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:JE.bind(null,r),r_:ZE.bind(null,r),ta:YE.bind(null,r),na:XE.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await si(r)):(await r.fa.stop(),r.Ta.length>0&&(V(Hn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new ul(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hl(r,e){if(ze("AsyncQueue",`${e}: ${r}`),fn(r))return new k(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static emptySet(e){return new yr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||F.comparator(t.key,n.key):(t,n)=>F.comparator(t.key,n.key),this.keyedMap=Is(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new yr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.ga=new ge(F.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Fr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Fr(e,t,yr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nw{constructor(){this.queries=Xh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=Q(t),i=s.queries;s.queries=Xh(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(n)})})(this,new k(C.ABORTED,"Firestore shutting down"))}}function Xh(){return new Mt(r=>Wf(r),Go)}async function dl(r,e){const t=Q(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new tw,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=hl(o,`Initialization of query '${dr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ml(t)}async function fl(r,e){const t=Q(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function rw(r,e){const t=Q(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(n=!0);o.wa=s}}n&&ml(t)}function sw(r,e,t){const n=Q(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function ml(r){r.Ca.forEach(e=>{e.next()})}var vc,Zh;(Zh=vc||(vc={})).Ma="default",Zh.Cache="cache";class gl{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Fr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.key=e}}class Jm{constructor(e){this.key=e}}class iw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=Qf(e),this.tu=new yr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Yh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const p=s.get(f),R=ti(this.query,g)?g:null,x=!!p&&this.mutatedKeys.has(p.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;p&&R?p.data.isEqual(R.data)?x!==D&&(n.track({type:3,doc:R}),N=!0):this.su(p,R)||(n.track({type:2,doc:R}),N=!0,(l&&this.eu(R,l)>0||h&&this.eu(R,h)<0)&&(c=!0)):!p&&R?(n.track({type:0,doc:R}),N=!0):p&&!R&&(n.track({type:1,doc:p}),N=!0,(l||h)&&(c=!0)),N&&(R?(o=o.add(R),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(R,x){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:N})}};return D(R)-D(x)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(n),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Fr(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Jm(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Qm(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Fr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pl="SyncEngine";class ow{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class aw{constructor(e){this.key=e,this.hu=!1}}class cw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Mt(c=>Wf(c),Go),this.Iu=new Map,this.Eu=new Set,this.du=new ge(F.comparator),this.Au=new Map,this.Ru=new tl,this.Vu={},this.mu=new Map,this.fu=Kn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lw(r,e,t=!0){const n=ng(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ym(n,e,t,!0),s}async function uw(r,e){const t=ng(r);await Ym(t,e,!0,!1)}async function Ym(r,e,t,n){const s=await xE(r.localStore,tt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await hw(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&$m(r.remoteStore,s),c}async function hw(r,e,t,n,s){r.pu=(g,p,R)=>async function(D,N,M,j){let O=N.view.ru(M);O.Cs&&(O=await Gh(D.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,O)));const z=j&&j.targetChanges.get(N.targetId),se=j&&j.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(O,D.isPrimaryClient,z,se);return td(D,N.targetId,te.au),te.snapshot}(r,g,p,R);const i=await Gh(r.localStore,e,!0),o=new iw(e,i.Qs),c=o.ru(i.documents),l=ni.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);td(r,t,h.au);const f=new ow(e,t,o);return r.Tu.set(e,f),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),h.snapshot}async function dw(r,e,t){const n=Q(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(o=>!Go(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ol(n.remoteStore,s.targetId),Ac(n,s.targetId)}).catch(Qn)):(Ac(n,s.targetId),await wc(n.localStore,s.targetId,!0))}async function fw(r,e){const t=Q(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ol(t.remoteStore,n.targetId))}async function mw(r,e,t){const n=rg(r);try{const s=await function(o,c){const l=Q(o),h=ce.now(),f=c.reduce((R,x)=>R.add(x.key),ee());let g,p;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=Je(),D=ee();return l.Ns.getEntries(R,f).next(N=>{x=N,x.forEach((M,j)=>{j.isValidDocument()||(D=D.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,x)).next(N=>{g=N;const M=[];for(const j of c){const O=CI(j,g.get(j.key).overlayedDocument);O!=null&&M.push(new Ot(j.key,O,Uf(O.value.mapValue),Be.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,M,c)}).next(N=>{p=N;const M=N.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(R,N.batchId,M)})}).then(()=>({batchId:p.batchId,changes:Yf(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new ge(X)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(n,s.batchId,t),await ii(n,s.changes),await si(n.remoteStore)}catch(s){const i=hl(s,"Failed to persist write");t.reject(i)}}async function Xm(r,e){const t=Q(r);try{const n=await RE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?G(o.hu,14607):s.removedDocuments.size>0&&(G(o.hu,42227),o.hu=!1))}),await ii(t,n,e)}catch(n){await Qn(n)}}function ed(r,e,t){const n=Q(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Q(o);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const p of g.Sa)p.va(c)&&(h=!0)}),h&&ml(l)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function gw(r,e,t){const n=Q(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new ge(F.comparator);o=o.insert(i,Ee.newNoDocument(i,K.min()));const c=ee().add(i),l=new Qo(K.min(),new Map,new ge(X),o,c);await Xm(n,l),n.du=n.du.remove(i),n.Au.delete(e),_l(n)}else await wc(n.localStore,e,!1).then(()=>Ac(n,e,t)).catch(Qn)}async function pw(r,e){const t=Q(r),n=e.batch.batchId;try{const s=await SE(t.localStore,e);eg(t,n,null),Zm(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ii(t,s)}catch(s){await Qn(s)}}async function _w(r,e,t){const n=Q(r);try{const s=await function(o,c){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(G(g!==null,37113),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);eg(n,e,t),Zm(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ii(n,s)}catch(s){await Qn(s)}}function Zm(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function eg(r,e,t){const n=Q(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function Ac(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||tg(r,n)})}function tg(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ol(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),_l(r))}function td(r,e,t){for(const n of t)n instanceof Qm?(r.Ru.addReference(n.key,e),yw(r,n)):n instanceof Jm?(V(pl,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||tg(r,n.key)):q(19791,{wu:n})}function yw(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(V(pl,"New document in limbo: "+t),r.Eu.add(n),_l(r))}function _l(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new F(ae.fromString(e)),n=r.fu.next();r.Au.set(n,new aw(t)),r.du=r.du.insert(t,n),$m(r.remoteStore,new St(tt(ei(t.path)),n,"TargetPurposeLimboResolution",et.ce))}}async function ii(r,e,t){const n=Q(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((c,l)=>{o.push(n.pu(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=sl.As(l.targetId,h);i.push(g)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(l,h){const f=Q(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>S.forEach(h,p=>S.forEach(p.Es,R=>f.persistence.referenceDelegate.addReference(g,p.targetId,R)).next(()=>S.forEach(p.ds,R=>f.persistence.referenceDelegate.removeReference(g,p.targetId,R)))))}catch(g){if(!fn(g))throw g;V(il,"Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const R=f.Ms.get(p),x=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(p,D)}}}(n.localStore,i))}async function Iw(r,e){const t=Q(r);if(!t.currentUser.isEqual(e)){V(pl,"User change. New user:",e.toKey());const n=await Fm(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new k(C.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ii(t,n.Ls)}}function Ew(r,e){const t=Q(r),n=t.Au.get(e);if(n&&n.hu)return ee().add(n.key);{let s=ee();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ng(r){const e=Q(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ew.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gw.bind(null,e),e.Pu.H_=rw.bind(null,e.eventManager),e.Pu.yu=sw.bind(null,e.eventManager),e}function rg(r){const e=Q(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_w.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Lm(this.persistence,new Om,e.initialUser,this.serializer)}Cu(e){return new nl(Xo.mi,this.serializer)}Du(e){return new Bm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class ww extends Ks{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof wo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Nm(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new nl(n=>wo.mi(n,t),this.serializer)}}class Tw extends Ks{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await rg(this.xu.syncEngine),await si(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Lm(this.persistence,new Om,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Nm(n,e.asyncQueue,t)}Mu(e,t){const n=new Cy(t,this.persistence);return new Py(e.asyncQueue,n)}Cu(e){const t=TE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new rl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,LE(),Zi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Bm}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ed(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iw.bind(null,this.syncEngine),await ew(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nw}()}createDatastore(e){const t=Zo(e.databaseInfo.databaseId),n=function(i){return new OE(i)}(e.databaseInfo);return function(i,o,c,l){return new jE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new $E(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ed(this.syncEngine,t,0),function(){return Wh.v()?new Wh:new DE}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const g=new cw(s,i,o,c,l,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Q(s);V(Hn,"RemoteStore shutting down."),i.Ea.add(5),await Kr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class vw{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=Mc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{V(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function $a(r,e){r.asyncQueue.verifyOperationInProgress(),V(un,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Fm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function nd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await sg(r);V(un,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Jh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Jh(e.remoteStore,s)),r._onlineComponents=e}async function sg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(un,"Using user provided OfflineComponentProvider");try{await $a(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;jn("Error using user provided cache. Falling back to memory cache: "+t),await $a(r,new Ks)}}else V(un,"Using default OfflineComponentProvider"),await $a(r,new ww(void 0));return r._offlineComponents}async function Il(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(un,"Using user provided OnlineComponentProvider"),await nd(r,r._uninitializedComponentsProvider._online)):(V(un,"Using default OnlineComponentProvider"),await nd(r,new vo))),r._onlineComponents}function ig(r){return sg(r).then(e=>e.persistence)}function og(r){return Il(r).then(e=>e.remoteStore)}function Aw(r){return Il(r).then(e=>e.syncEngine)}async function Ao(r){const e=await Il(r),t=e.eventManager;return t.onListen=lw.bind(null,e.syncEngine),t.onUnlisten=dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fw.bind(null,e.syncEngine),t}function bw(r){return r.asyncQueue.enqueue(async()=>{const e=await ig(r),t=await og(r);return e.setNetworkEnabled(!0),function(s){const i=Q(s);return i.Ea.delete(0),ri(i)}(t)})}function Sw(r){return r.asyncQueue.enqueue(async()=>{const e=await ig(r),t=await og(r);return e.setNetworkEnabled(!1),async function(s){const i=Q(s);i.Ea.add(0),await Kr(i),i.Ra.set("Offline")}(t)})}function Rw(r,e,t={}){const n=new _t;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new yl({next:p=>{f.Nu(),o.enqueueAndForget(()=>fl(i,g));const R=p.docs.has(c);!R&&p.fromCache?h.reject(new k(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&p.fromCache&&l&&l.source==="server"?h.reject(new k(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new gl(ei(c.path),f,{includeMetadataChanges:!0,qa:!0});return dl(i,g)}(await Ao(r),r.asyncQueue,e,t,n)),n.promise}function Pw(r,e,t={}){const n=new _t;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new yl({next:p=>{f.Nu(),o.enqueueAndForget(()=>fl(i,g)),p.fromCache&&l.source==="server"?h.reject(new k(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new gl(c,f,{includeMetadataChanges:!0,qa:!0});return dl(i,g)}(await Ao(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="firestore.googleapis.com",sd=!0;class id{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cg,this.ssl=sd}else this.host=e.host,this.ssl=e.ssl??sd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iE)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ag(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ea{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new id({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new id(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fy;switch(n.type){case"firstParty":return new _y(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=rd.get(t);n&&(V("ComponentProvider","Removing Datastore"),rd.delete(t),n.terminate())}(this),Promise.resolve()}}function Cw(r,e,t,n={}){var h;r=ke(r,ea);const s=jr(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},c=`${e}:${t}`;s&&(Kd(`https://${c}`),Hd("Firestore",!0)),i.host!==cg&&i.host!==c&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:n};if(!Fn(l,o)&&(r._setSettings(l),n.mockUserToken)){let f,g;if(typeof n.mockUserToken=="string")f=n.mockUserToken,g=Ne.MOCK_USER;else{f=$p(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ne(p)}r._authCredentials=new my(new df(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class we{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ys(t,we._jsonSchema))return new we(e,n||null,new F(ae.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:ve("string",we._jsonSchemaVersion),referencePath:ve("string")};class sn extends Lt{constructor(e,t,n){super(e,t,ei(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new F(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function Mn(r,e,...t){if(r=qe(r),mf("collection","path",e),r instanceof ea){const n=ae.fromString(e,...t);return Qu(n),new sn(r,null,n)}{if(!(r instanceof we||r instanceof sn))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return Qu(n),new sn(r.firestore,null,n)}}function hn(r,e,...t){if(r=qe(r),arguments.length===1&&(e=Mc.newId()),mf("doc","path",e),r instanceof ea){const n=ae.fromString(e,...t);return Wu(n),new we(r,null,new F(n))}{if(!(r instanceof we||r instanceof sn))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return Wu(n),new we(r.firestore,r instanceof sn?r.converter:null,new F(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="AsyncQueue";class ad{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jm(this,"async_queue_retry"),this._c=()=>{const n=Zi();n&&V(od,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new _t;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fn(e))throw e;V(od,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,ze("INTERNAL UNHANDLED ERROR: ",cd(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ul.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:cd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function cd(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class nt extends ea{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ad,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ad(e),this._firestoreClient=void 0,await e}}}function xw(r,e){const t=typeof r=="object"?r:tf(),n=typeof r=="string"?r:e||ho,s=Vc(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=jp("firestore");i&&Cw(s,...i)}return s}function Wr(r){if(r._terminated)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||lg(r),r._firestoreClient}function lg(r){var n,s,i;const e=r._freezeSettings(),t=function(c,l,h,f){return new sI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ag(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new vw(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function Nw(r,e){jn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Dw(r,vo.provider,{build:n=>new Tw(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function Dw(r,e,t){if((r=ke(r,nt))._firestoreClient||r._terminated)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new k(C.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},lg(r)}function Vw(r){return bw(Wr(r=ke(r,nt)))}function kw(r){return Sw(Wr(r=ke(r,nt)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(Ae.fromBase64String(e))}catch(t){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ys(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:ve("string",Ze._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lt._jsonSchemaVersion}}static fromJSON(e){if(Ys(e,lt._jsonSchema))return new lt(e.latitude,e.longitude)}}lt._jsonSchemaVersion="firestore/geoPoint/1.0",lt._jsonSchema={type:ve("string",lt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ys(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new k(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:ve("string",yt._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=/^__.*__$/;class Ow{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gr(e,this.data,t,this.fieldTransforms)}}class ug{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:r})}}class El{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new El({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(hg(this.Ac)&&Mw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Lw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Zo(e)}Cc(e,t,n,s=!1){return new El({Ac:e,methodName:t,Dc:n,path:_e.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function na(r){const e=r._freezeSettings(),t=Zo(r._databaseId);return new Lw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function dg(r,e,t,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);vl("Data must be an object, but it was:",o,n);const c=fg(n,o);let l,h;if(i.merge)l=new Ke(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const p=bc(e,g,t);if(!o.contains(p))throw new k(C.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gg(f,p)||f.push(p)}l=new Ke(f),h=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=o.fieldTransforms;return new Ow(new Ue(c),l,h)}class ra extends oi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}class wl extends oi{_toFieldTransform(e){return new Hc(e.path,new Vr)}isEqual(e){return e instanceof wl}}class Tl extends oi{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Or(e.serializer,em(e.serializer,this.Fc));return new Hc(e.path,t)}isEqual(e){return e instanceof Tl&&this.Fc===e.Fc}}function Fw(r,e,t,n){const s=r.Cc(1,e,t);vl("Data must be an object, but it was:",s,n);const i=[],o=Ue.empty();mn(n,(l,h)=>{const f=Al(e,l,t);h=qe(h);const g=s.yc(f);if(h instanceof ra)i.push(f);else{const p=ai(h,g);p!=null&&(i.push(f),o.set(f,p))}});const c=new Ke(i);return new ug(o,c,s.fieldTransforms)}function Uw(r,e,t,n,s,i){const o=r.Cc(1,e,t),c=[bc(e,n,t)],l=[s];if(i.length%2!=0)throw new k(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)c.push(bc(e,i[p])),l.push(i[p+1]);const h=[],f=Ue.empty();for(let p=c.length-1;p>=0;--p)if(!gg(h,c[p])){const R=c[p];let x=l[p];x=qe(x);const D=o.yc(R);if(x instanceof ra)h.push(R);else{const N=ai(x,D);N!=null&&(h.push(R),f.set(R,N))}}const g=new Ke(h);return new ug(f,g,o.fieldTransforms)}function Bw(r,e,t,n=!1){return ai(t,r.Cc(n?4:3,e))}function ai(r,e){if(mg(r=qe(r)))return vl("Unsupported field value:",e,r),fg(r,e);if(r instanceof oi)return function(n,s){if(!hg(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=ai(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return em(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:Lr(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,i)}}if(n instanceof lt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ze)return{bytesValue:hm(s.serializer,n._byteString)};if(n instanceof we){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof yt)return function(o,c){return{mapValue:{fields:{[$c]:{stringValue:zc},[Cr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Kc(c.serializer,h)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${Lo(n)}`)}(r,e)}function fg(r,e){const t={};return xf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(r,(n,s)=>{const i=ai(s,e.mc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function mg(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof lt||r instanceof Ze||r instanceof we||r instanceof oi||r instanceof yt)}function vl(r,e,t){if(!mg(t)||!gf(t)){const n=Lo(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function bc(r,e,t){if((e=qe(e))instanceof ta)return e._internalPath;if(typeof e=="string")return Al(r,e);throw bo("Field path arguments must be of type string or ",r,!1,void 0,t)}const jw=new RegExp("[~\\*/\\[\\]]");function Al(r,e,t){if(e.search(jw)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ta(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function bo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new k(C.INVALID_ARGUMENT,c+r+l)}function gg(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qw extends pg{data(){return super.data()}}function sa(r,e){return typeof e=="string"?Al(r,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bl{}class Sl extends bl{}function pr(r,e,...t){let n=[];e instanceof bl&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Rl).length,c=i.filter(l=>l instanceof ia).length;if(o>1||o>0&&c>0)throw new k(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class ia extends Sl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ia(e,t,n)}_apply(e){const t=this._parse(e);return Ig(e._query,t),new Lt(e.firestore,e.converter,fc(e._query,t))}_parse(e){const t=na(e.firestore);return function(i,o,c,l,h,f,g){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hd(g,f);const x=[];for(const D of g)x.push(ud(l,i,D));p={arrayValue:{values:x}}}else p=ud(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hd(g,f),p=Bw(c,o,g,f==="in"||f==="not-in");return re.create(h,f,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yg(r,e,t){const n=e,s=sa("where",r);return ia._create(s,n,t)}class Rl extends bl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ig(o,l),o=fc(o,l)}(e._query,t),new Lt(e.firestore,e.converter,fc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pl extends Sl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pl(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gs(i,o)}(e._query,this._field,this._direction);return new Lt(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Ts(r,e="asc"){const t=e,n=sa("orderBy",r);return Pl._create(n,t)}class Cl extends Sl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Cl(e,t,n)}_apply(e){return new Lt(e.firestore,e.converter,go(e._query,this._limit,this._limitType))}}function Fi(r){return Ay("limit",r),Cl._create("limit",r,"F")}function ud(r,e,t){if(typeof(t=qe(t))=="string"){if(t==="")throw new k(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hf(e)&&t.indexOf("/")!==-1)throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ae.fromString(t));if(!F.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return $s(r,new F(n))}if(t instanceof we)return $s(r,t._key);throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lo(t)}.`)}function hd(r,e){if(!Array.isArray(r)||r.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ig(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $w{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return mn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Cr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>me(o.doubleValue));return new yt(t)}convertGeoPoint(e){return new lt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=$o(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=xt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ae.fromString(e);G(wm(n),9688,{name:e});const s=new qn(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(t)||ze(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class vs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class On extends pg{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=On._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}On._jsonSchemaVersion="firestore/documentSnapshot/1.0",On._jsonSchema={type:ve("string",On._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class eo extends On{data(e={}){return super.data(e)}}class Ln{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vs(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new eo(this._firestore,this._userDataWriter,n.key,n,new vs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:zw(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(r){r=ke(r,we);const e=ke(r.firestore,nt);return Rw(Wr(e),r._key).then(t=>Tg(e,r,t))}Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:ve("string",Ln._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};class xl extends $w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function Nl(r){r=ke(r,Lt);const e=ke(r.firestore,nt),t=Wr(e),n=new xl(e);return _g(r._query),Pw(t,r._query).then(s=>new Ln(e,n,r,s))}function wg(r,e,t){r=ke(r,we);const n=ke(r.firestore,nt),s=Eg(r.converter,e,t);return aa(n,[dg(na(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Be.none())])}function oa(r,e,t,...n){r=ke(r,we);const s=ke(r.firestore,nt),i=na(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof ta?Uw(i,"updateDoc",r._key,e,t,n):Fw(i,"updateDoc",r._key,e),aa(s,[o.toMutation(r._key,Be.exists(!0))])}function Gw(r){return aa(ke(r.firestore,nt),[new Wo(r._key,Be.none())])}function Dl(r,e){const t=ke(r.firestore,nt),n=hn(r),s=Eg(r.converter,e);return aa(t,[dg(na(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Be.exists(!1))]).then(()=>n)}function Kw(r,...e){var l,h,f;r=qe(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||ld(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ld(e[n])){const g=e[n];e[n]=(l=g.next)==null?void 0:l.bind(g),e[n+1]=(h=g.error)==null?void 0:h.bind(g),e[n+2]=(f=g.complete)==null?void 0:f.bind(g)}let i,o,c;if(r instanceof we)o=ke(r.firestore,nt),c=ei(r._key.path),i={next:g=>{e[n]&&e[n](Tg(o,r,g))},error:e[n+1],complete:e[n+2]};else{const g=ke(r,Lt);o=ke(g.firestore,nt),c=g._query;const p=new xl(o);i={next:R=>{e[n]&&e[n](new Ln(o,p,g,R))},error:e[n+1],complete:e[n+2]},_g(r._query)}return function(p,R,x,D){const N=new yl(D),M=new gl(R,N,x);return p.asyncQueue.enqueueAndForget(async()=>dl(await Ao(p),M)),()=>{N.Nu(),p.asyncQueue.enqueueAndForget(async()=>fl(await Ao(p),M))}}(Wr(o),c,s,i)}function aa(r,e){return function(n,s){const i=new _t;return n.asyncQueue.enqueueAndForget(async()=>mw(await Aw(n),s,i)),i.promise}(Wr(r),e)}function Tg(r,e,t){const n=t.docs.get(e._key),s=new xl(r);return new On(r,s,e._key,n,new vs(t.hasPendingWrites,t.fromCache),e.converter)}function ut(){return new wl("serverTimestamp")}function Xt(r){return new Tl("increment",r)}(function(e,t=!0){(function(s){$r=s})(qr),vr(new Un("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new nt(new gy(n.getProvider("auth-internal")),new yy(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tn(zu,Gu,e),tn(zu,Gu,"esm2020")})();var Hw="firebase",Ww="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(Hw,Ww,"app");function vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=vg,Ag=new Qs("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Nc("@firebase/auth");function Jw(r,...e){Ro.logLevel<=ne.WARN&&Ro.warn(`Auth (${qr}): ${r}`,...e)}function to(r,...e){Ro.logLevel<=ne.ERROR&&Ro.error(`Auth (${qr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r,...e){throw Vl(r,...e)}function It(r,...e){return Vl(r,...e)}function bg(r,e,t){const n={...Qw(),[e]:t};return new Qs("auth","Firebase",n).create(e,{appName:r.name})}function on(r){return bg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ag.create(r,...e)}function W(r,e,...t){if(!r)throw Vl(e,...t)}function Rt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw to(e),new Error(e)}function Vt(r,e){r||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Yw(){return dd()==="http:"||dd()==="https:"}function dd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yw()||Wp()||"connection"in navigator)?navigator.onLine:!0}function Zw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||Qp()}get(){return Xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r,e){Vt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nT=new ci(3e4,6e4);function ca(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Qr(r,e,t,n,s={}){return Rg(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Js({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h={method:e,headers:l,...i};return Hp()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&jr(r.emulatorConfig.host)&&(h.credentials="include"),Sg.fetch()(await Cg(r,r.config.apiHost,t,c),h)})}async function Rg(r,e,t){r._canInitEmulator=!1;const n={...eT,...e};try{const s=new rT(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ui(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ui(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ui(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bg(r,f,h);Dt(r,f)}}catch(s){if(s instanceof kt)throw s;Dt(r,"network-request-failed",{message:String(s)})}}async function Pg(r,e,t,n,s={}){const i=await Qr(r,e,t,n,s);return"mfaPendingCredential"in i&&Dt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Cg(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?kl(r.config,s):`${r.config.apiScheme}://${s}`;return tT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class rT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(It(this.auth,"network-request-failed")),nT.get())})}}function Ui(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=It(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(r,e){return Qr(r,"POST","/v1/accounts:delete",e)}async function Po(r,e){return Qr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iT(r,e=!1){const t=qe(r),n=await t.getIdToken(e),s=Ml(n);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Vs(za(s.auth_time)),issuedAtTime:Vs(za(s.iat)),expirationTime:Vs(za(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function za(r){return Number(r)*1e3}function Ml(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const s=jd(t);return s?JSON.parse(s):(to("Failed to decode base64 JWT payload"),null)}catch(s){return to("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fd(r){const e=Ml(r);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof kt&&oT(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function oT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r){var g;const e=r.auth,t=await r.getIdToken(),n=await Hs(r,Po(e,{idToken:t}));W(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?xg(s.providerUserInfo):[],o=lT(r.providerData,i),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function cT(r){const e=qe(r);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lT(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function xg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(r,e){const t=await Rg(r,{},async()=>{const n=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Cg(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return r.emulatorConfig&&jr(r.emulatorConfig.host)&&(l.credentials="include"),Sg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hT(r,e){return Qr(r,"POST","/v2/accounts:revokeToken",ca(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=fd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await uT(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Ir;return n&&(W(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(r,e){W(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iT(this,e)}reload(){return cT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Co(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await Hs(this,sT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:p,isAnonymous:R,providerData:x,stsTokenManager:D}=t;W(g&&D,e,"internal-error");const N=Ir.fromJSON(this.name,D);W(typeof g=="string",e,"internal-error"),Gt(n,e.name),Gt(s,e.name),W(typeof p=="boolean",e,"internal-error"),W(typeof R=="boolean",e,"internal-error"),Gt(i,e.name),Gt(o,e.name),Gt(c,e.name),Gt(l,e.name),Gt(h,e.name),Gt(f,e.name);const M=new ct({uid:g,auth:e,email:s,emailVerified:p,displayName:n,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(M.providerData=x.map(j=>({...j}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,t,n=!1){const s=new Ir;s.updateFromServerResponse(t);const i=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Co(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ir;c.updateFromIdToken(n);const l=new ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Map;function Pt(r){Vt(r instanceof Function,"Expected a class definition");let e=md.get(r);return e?(Vt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,md.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ng.type="NONE";const gd=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r,e,t){return`firebase:${r}:${e}:${t}`}class Er{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=no(this.userKey,s.apiKey,i),this.fullPersistenceKey=no("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?ct._fromGetAccountInfoResponse(this.auth,t,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Er(Pt(gd),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pt(gd);const o=no(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const p=await Po(e,{idToken:f}).catch(()=>{});if(!p)break;g=await ct._fromGetAccountInfoResponse(e,p,f)}else g=ct._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Er(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Er(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Fg(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Dg(r=Se()){return/firefox\//i.test(r)}function Vg(r=Se()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(r=Se()){return/crios\//i.test(r)}function Mg(r=Se()){return/iemobile/i.test(r)}function Og(r=Se()){return/android/i.test(r)}function Lg(r=Se()){return/blackberry/i.test(r)}function Fg(r=Se()){return/webos/i.test(r)}function Ol(r=Se()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function dT(r=Se()){var e;return Ol(r)&&!!((e=window.navigator)!=null&&e.standalone)}function fT(){return Jp()&&document.documentMode===10}function Ug(r=Se()){return Ol(r)||Og(r)||Fg(r)||Lg(r)||/windows phone/i.test(r)||Mg(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(r,e=[]){let t;switch(r){case"Browser":t=pd(Se());break;case"Worker":t=`${pd(Se())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(r,e={}){return Qr(r,"GET","/v2/passwordPolicy",ca(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=6;class _T{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new mT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),n=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(on(this));const t=e?qe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gT(this),t=new _T(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await hT(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Jw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function la(r){return qe(r)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=n_(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IT(r){Ll=r}function ET(r){return Ll.loadJS(r)}function wT(){return Ll.gapiScript}function TT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(r,e){const t=Vc(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Fn(i,e??{}))return s;Dt(s,"already-initialized")}return t.initialize({options:e})}function AT(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function bT(r,e,t){const n=la(r);W(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=jg(e),{host:o,port:c}=ST(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){W(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),W(Fn(h,n.config.emulator)&&Fn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,jr(o)?(Kd(`${i}//${o}${l}`),Hd("Auth",!0)):s||RT()}function jg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ST(r){const e=jg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:yd(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:yd(o)}}}function yd(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function RT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(r,e){return Pg(r,"POST","/v1/accounts:signInWithIdp",ca(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="http://localhost";class Wn extends qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Wn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:PT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Js(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends $g{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends li{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Wt.credential(t,n)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends li{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends li{constructor(){super("twitter.com")}static credential(e,t){return Wn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Jt.credential(t,n)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(r,e){return Pg(r,"POST","/v1/accounts:signUp",ca(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ct._fromIdTokenResponse(e,n,s),o=Id(n);return new dn({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Id(n);return new dn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Id(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(r){var s;if(at(r.app))return Promise.reject(on(r));const e=la(r);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new dn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await CT(e,{returnSecureToken:!0}),n=await dn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends kt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new xo(e,t,n,s)}}function zg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(r,i,e,n):i})}async function NT(r,e,t=!1){const n=await Hs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return dn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(r,e,t=!1){const{auth:n}=r;if(at(n.app))return Promise.reject(on(n));const s="reauthenticate";try{const i=await Hs(r,zg(n,s,e,r),t);W(i.idToken,n,"internal-error");const o=Ml(i.idToken);W(o,n,"internal-error");const{sub:c}=o;return W(r.uid===c,n,"user-mismatch"),dn._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(r,e,t=!1){if(at(r.app))return Promise.reject(on(r));const n="signIn",s=await zg(r,n,e),i=await dn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function kT(r,e,t,n){return qe(r).onIdTokenChanged(e,t,n)}function MT(r,e,t){return qe(r).beforeAuthStateChanged(e,t)}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=1e3,LT=10;class Kg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);fT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LT):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const FT=Kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hg.type="SESSION";const Wg=Hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ua(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await UT(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Fl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function jT(r){Et().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $T(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function zT(){return Qg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="firebaseLocalStorageDb",GT=1,Do="firebaseLocalStorage",Yg="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(r,e){return r.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function KT(){const r=indexedDB.deleteDatabase(Jg);return new ui(r).toPromise()}function Pc(){const r=indexedDB.open(Jg,GT);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Do,{keyPath:Yg})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Do)?e(n):(n.close(),await KT(),e(await Pc()))})})}async function Ed(r,e,t){const n=ha(r,!0).put({[Yg]:e,value:t});return new ui(n).toPromise()}async function HT(r,e){const t=ha(r,!1).get(e),n=await new ui(t).toPromise();return n===void 0?null:n.value}function wd(r,e){const t=ha(r,!0).delete(e);return new ui(t).toPromise()}const WT=800,QT=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>QT)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(zT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new BT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$T()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await Ed(e,No,"1"),await wd(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>HT(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const JT=Xg;new ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(r,e){return e?Pt(e):(W(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function XT(r){return VT(r.auth,new Ul(r),r.bypassAuthState)}function ZT(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),DT(t,new Ul(r),r.bypassAuthState)}async function ev(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),NT(t,new Ul(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XT;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return ZT;default:Dt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new ci(2e3,1e4);class _r extends Zg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="pendingRedirect",ro=new Map;class rv extends Zg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const n=await sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sv(r,e){const t=av(e),n=ov(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function iv(r,e){ro.set(r._key(),e)}function ov(r){return Pt(r._redirectPersistence)}function av(r){return no(nv,r.config.apiKey,r.name)}async function cv(r,e,t=!1){if(at(r.app))return Promise.reject(on(r));const n=la(r),s=YT(n,e),o=await new rv(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=10*60*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ep(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(It(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ep({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(r,e={}){return Qr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function gv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await dv(r);for(const t of e)try{if(pv(t))return}catch{}Dt(r,"unauthorized-domain")}function pv(r){const e=Sc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!mv.test(t))return!1;if(fv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new ci(3e4,6e4);function vd(){const r=Et().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function yv(r){return new Promise((e,t)=>{var s,i,o;function n(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),t(It(r,"network-request-failed"))},timeout:_v.get()})}if((i=(s=Et().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Et().gapi)!=null&&o.load)n();else{const c=TT("iframefcb");return Et()[c]=()=>{gapi.load?n():t(It(r,"network-request-failed"))},ET(`${wT()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw so=null,e})}let so=null;function Iv(r){return so=so||yv(r),so}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new ci(5e3,15e3),wv="__/auth/iframe",Tv="emulator/auth/iframe",vv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(r){const e=r.config;W(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?kl(e,Tv):`https://${r.config.authDomain}/${wv}`,n={apiKey:e.apiKey,appName:r.name,v:qr},s=Av.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Js(n).slice(1)}`}async function Sv(r){const e=await Iv(r),t=Et().gapi;return W(t,r,"internal-error"),e.open({where:document.body,url:bv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=It(r,"network-request-failed"),c=Et().setTimeout(()=>{i(o)},Ev.get());function l(){Et().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pv=500,Cv=600,xv="_blank",Nv="http://localhost";class Ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dv(r,e,t,n=Pv,s=Cv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...Rv,width:n.toString(),height:s.toString(),top:i,left:o},h=Se().toLowerCase();t&&(c=kg(h)?xv:t),Dg(h)&&(e=e||Nv,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[R,x])=>`${p}${R}=${x},`,"");if(dT(h)&&c!=="_self")return Vv(e||"",c),new Ad(null);const g=window.open(e||"",c,f);W(g,r,"popup-blocked");try{g.focus()}catch{}return new Ad(g)}function Vv(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="__/auth/handler",Mv="emulator/auth/handler",Ov=encodeURIComponent("fac");async function bd(r,e,t,n,s,i){W(r.config.authDomain,r,"auth-domain-config-required"),W(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:qr,eventId:s};if(e instanceof $g){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",t_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(i||{}))o[f]=g}if(e instanceof li){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${Ov}=${encodeURIComponent(l)}`:"";return`${Lv(r)}?${Js(c).slice(1)}${h}`}function Lv({config:r}){return r.emulator?kl(r,Mv):`https://${r.authDomain}/${kv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class Fv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=cv,this._overrideRedirectResult=iv}async _openPopup(e,t,n,s){var o;Vt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bd(e,t,n,Sc(),s);return Dv(e,i,Fl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await bd(e,t,n,Sc(),s);return jT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Sv(e),n=new uv(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ga];i!==void 0&&t(!!i),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ug()||Vg()||Ol()}}const Uv=Fv;var Sd="@firebase/auth",Rd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qv(r){vr(new Un("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bg(r)},h=new yT(n,s,i,l);return AT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),vr(new Un("auth-internal",e=>{const t=la(e.getProvider("auth").getImmediate());return(n=>new Bv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Sd,Rd,jv(r)),tn(Sd,Rd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=5*60,zv=Gd("authIdTokenMaxAge")||$v;let Pd=null;const Gv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>zv)return;const s=t==null?void 0:t.token;Pd!==s&&(Pd=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kv(r=tf()){const e=Vc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vT(r,{popupRedirectResolver:Uv,persistence:[JT,FT,Wg]}),n=Gd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Gv(i.toString());MT(t,o,()=>o(t.currentUser)),kT(t,c=>o(c))}}const s=$d("auth");return s&&bT(t,`http://${s}`),t}function Hv(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}IT({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=It("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Hv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qv("Browser");const Wv=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],Vo=Wv.filter(r=>!{VITE_FIREBASE_API_KEY:"AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",VITE_FIREBASE_AUTH_DOMAIN:"riprap-c725e.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"riprap-c725e",VITE_FIREBASE_STORAGE_BUCKET:"riprap-c725e.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"995615030562",VITE_FIREBASE_APP_ID:"1:995615030562:web:5194ca1ed7659de1cd797b",VITE_FIREBASE_MEASUREMENT_ID:"G-6MDLTVXSTF",VITE_FIREBASE_USE_EMULATOR:"false",VITE_API_BASE_URL:"/.netlify/functions/api",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}[r]),Qv=Vo.length>0?{apiKey:"demo-api-key",authDomain:"demo-project.firebaseapp.com",projectId:"demo-project",storageBucket:"demo-project.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:demo-app-id",measurementId:"G-DEMO-ID"}:{apiKey:"AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",authDomain:"riprap-c725e.firebaseapp.com",projectId:"riprap-c725e",storageBucket:"riprap-c725e.firebasestorage.app",messagingSenderId:"995615030562",appId:"1:995615030562:web:5194ca1ed7659de1cd797b",measurementId:"G-6MDLTVXSTF"};Vo.length>0?(console.warn("Firebase environment variables not found, using fallback configuration:",Vo),console.warn("Firebase features will be limited. Set up environment variables for full functionality.")):console.log("Firebase configuration loaded from environment variables");const tp=ef(Qv),Ve=xw(tp),Ka=Kv(tp),Ur=Vo.length>0;let Jv=!1;async function Yv(){try{if(Ur){console.warn("Demo mode: Skipping Firebase persistence initialization");return}await Nw(Ve),Jv=!0,console.log("Firebase offline persistence enabled")}catch(r){console.warn("Firebase persistence failed:",r.code),r.code==="failed-precondition"?console.warn("Firebase persistence failed: Multiple tabs open"):r.code==="unimplemented"&&console.warn("Firebase persistence failed: Browser not supported")}}Ur||Yv();async function Xv(){try{if(Ur)return console.warn("Demo mode: Returning mock anonymous user"),{uid:"demo-user-"+Date.now(),isAnonymous:!0,providerData:[]};if(!Ka.currentUser){const r=await xT(Ka);return console.log("Signed in anonymously:",r.user.uid),r.user}return Ka.currentUser}catch(r){if(console.error("Anonymous authentication failed:",r),r.code==="auth/network-request-failed"||r.message.includes("network")||r.message.includes("CSP"))return console.warn("Network/CSP error detected, falling back to mock user"),{uid:"offline-user-"+Date.now(),isAnonymous:!0,providerData:[],isOfflineMode:!0};throw r}}function Ha(r,e,t,n){const i=(t-r)*Math.PI/180,o=(n-e)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function Zv(r){return r*.621371}function e0(){let r=localStorage.getItem("riprap_device_id");if(!r){const e=document.createElement("canvas"),t=e.getContext("2d");t.textBaseline="top",t.font="14px Arial",t.fillText("RipRap device fingerprint",2,2);const n=[e.toDataURL(),navigator.userAgent,navigator.language,screen.width+"x"+screen.height,new Date().getTimezoneOffset(),navigator.platform].join("|");let s=0;for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);s=(s<<5)-s+o,s=s&s}r=`device_${Math.abs(s)}_${Date.now()}`,localStorage.setItem("riprap_device_id",r)}return r}const Br={async getOrCreateUser(r=null,e=null){try{if(Ur)return console.warn("Demo mode: Returning mock user profile"),{id:"demo-user-"+Date.now(),screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:new Date,postsCount:0,commentsCount:0,votesCount:0,isDemoMode:!0};const t=await Xv(),n=e0(),s=`${t.uid}_${n}`,i=hn(Ve,"users",s),o=await So(i);if(o.exists())return{id:s,...o.data()};const c={deviceId:n,firebaseUid:t.uid,screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:ut(),postsCount:0,commentsCount:0,votesCount:0,lastActive:ut()};return await wg(i,c),{id:s,...c}}catch(t){if(console.error("Error getting/creating user:",t),t.code==="auth/network-request-failed"||t.message.includes("network")||t.message.includes("CSP")||t.message.includes("firestore"))return console.warn("Firebase error detected, falling back to offline user profile"),{id:"offline-user-"+Date.now(),screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:new Date,postsCount:0,commentsCount:0,votesCount:0,isOfflineMode:!0};throw t}},async updateUser(r,e){try{const t=hn(Ve,"users",r);await oa(t,{...e,lastActive:ut()})}catch(t){throw console.error("Error updating user:",t),t}},generateScreenName(){const r=["Angler","Reel","Deep","Shore","Cast","Hook","Tide","Wave"],e=["Fisher","Master","Hunter","Catcher","Seeker","Captain","Admiral"],t=r[Math.floor(Math.random()*r.length)],n=e[Math.floor(Math.random()*e.length)],s=Math.floor(Math.random()*999)+1;return`${t}${n}${s}`}},Bi={async createPost(r,e,t){try{if(Ur)return console.warn("Demo mode: Post creation simulated (no actual Firebase connection)"),{id:"demo-post-"+Date.now(),success:!0,message:"Post created in demo mode"};const n=Mn(Ve,"posts"),s={content:r.trim(),authorId:t.id,authorName:t.screenName,authorColor:t.color,location:e?new lt(e.lat,e.lng):null,nearestCity:(e==null?void 0:e.nearestCity)||null,upvotes:0,downvotes:0,score:0,commentsCount:0,reportsCount:0,createdAt:ut(),updatedAt:ut()},i=await Dl(n,s);return await Br.updateUser(t.id,{postsCount:Xt(1),lastActive:ut()}),{id:i.id,...s}}catch(n){throw console.error("Error creating post:",n),n}},async getPosts(r=null,e=16,t=20,n="hot"){try{if(Ur)return console.warn("Demo mode: Returning empty posts array (no actual Firebase connection)"),[];const s=Mn(Ve,"posts");let i;switch(n){case"new":i=pr(s,Ts("createdAt","desc"),Fi(t));break;case"top":i=pr(s,Ts("score","desc"),Fi(t));break;case"hot":default:i=pr(s,Ts("updatedAt","desc"),Fi(t));break}const o=await Nl(i);let c=[];return o.forEach(l=>{var f,g,p,R;const h=l.data();c.push({id:l.id,...h,createdAt:((g=(f=h.createdAt)==null?void 0:f.toDate())==null?void 0:g.toISOString())||new Date().toISOString(),updatedAt:((R=(p=h.updatedAt)==null?void 0:p.toDate())==null?void 0:R.toISOString())||new Date().toISOString(),location:h.location?{lat:h.location.latitude,lng:h.location.longitude}:null})}),r&&r.lat&&r.lng&&(c=c.filter(l=>l.location?Ha(r.lat,r.lng,l.location.lat,l.location.lng)<=e:!1),c=c.map(l=>({...l,distance:l.location?Zv(Ha(r.lat,r.lng,l.location.lat,l.location.lng)):null}))),c=c.filter(l=>l.score>-5),c}catch(s){throw console.error("Error getting posts:",s),s}},async getPost(r){var e,t,n,s;try{const i=hn(Ve,"posts",r),o=await So(i);if(!o.exists())throw new Error("Post not found");const c=o.data(),l=await Cc.getComments(r);return{id:o.id,...c,comments:l,createdAt:((t=(e=c.createdAt)==null?void 0:e.toDate())==null?void 0:t.toISOString())||new Date().toISOString(),updatedAt:((s=(n=c.updatedAt)==null?void 0:n.toDate())==null?void 0:s.toISOString())||new Date().toISOString(),location:c.location?{lat:c.location.latitude,lng:c.location.longitude}:null}}catch(i){throw console.error("Error getting post:",i),i}},subscribeToPosts(r,e=null,t=16,n=20){const s=Mn(Ve,"posts"),i=pr(s,Ts("updatedAt","desc"),Fi(n));return Kw(i,o=>{let c=[];o.forEach(l=>{var f,g,p,R;const h=l.data();c.push({id:l.id,...h,createdAt:((g=(f=h.createdAt)==null?void 0:f.toDate())==null?void 0:g.toISOString())||new Date().toISOString(),updatedAt:((R=(p=h.updatedAt)==null?void 0:p.toDate())==null?void 0:R.toISOString())||new Date().toISOString(),location:h.location?{lat:h.location.latitude,lng:h.location.longitude}:null})}),e&&e.lat&&e.lng&&(c=c.filter(l=>l.location?Ha(e.lat,e.lng,l.location.lat,l.location.lng)<=t:!1)),c=c.filter(l=>l.score>-5),r(c)})}},Cd={async castVote(r,e,t){try{const n=hn(Ve,"votes",`${e}_${r}`),s=hn(Ve,"posts",r),[i,o]=await Promise.all([So(n),So(s)]);if(!o.exists())throw new Error("Post not found");const c=o.data(),l=i.exists()?i.data():null;let h=0,f=0,g=0;return l&&(l.type==="upvote"?(h-=1,g-=1):(f-=1,g+=1)),!l||l.type!==t?(t==="upvote"?(h+=1,g+=1):(f+=1,g-=1),await wg(n,{userId:e,postId:r,type:t,createdAt:ut()})):await Gw(n),await oa(s,{upvotes:Xt(h),downvotes:Xt(f),score:Xt(g),updatedAt:ut()}),await Br.updateUser(e,{votesCount:Xt(1)}),{success:!0}}catch(n){throw console.error("Error casting vote:",n),n}},async getUserVotes(r,e){try{const t={},n=Mn(Ve,"votes"),s=pr(n,yg("userId","==",r));return(await Nl(s)).forEach(o=>{const c=o.data();e.includes(c.postId)&&(t[c.postId]=c.type)}),t}catch(t){throw console.error("Error getting user votes:",t),t}}},Cc={async createComment(r,e,t){try{const n=Mn(Ve,"comments"),s={postId:r,content:e.trim(),authorId:t.id,authorName:t.screenName,authorColor:t.color,createdAt:ut()},i=await Dl(n,s),o=hn(Ve,"posts",r);return await oa(o,{commentsCount:Xt(1),updatedAt:ut()}),await Br.updateUser(t.id,{commentsCount:Xt(1)}),{id:i.id,...s}}catch(n){throw console.error("Error creating comment:",n),n}},async getComments(r){try{const e=Mn(Ve,"comments"),t=pr(e,yg("postId","==",r),Ts("createdAt","asc")),n=await Nl(t),s=[];return n.forEach(i=>{var c,l;const o=i.data();s.push({id:i.id,...o,createdAt:((l=(c=o.createdAt)==null?void 0:c.toDate())==null?void 0:l.toISOString())||new Date().toISOString()})}),s}catch(e){throw console.error("Error getting comments:",e),e}}},t0={async reportPost(r,e,t){try{const n=Mn(Ve,"reports"),s={postId:r,userId:e,reason:t.trim(),createdAt:ut()};await Dl(n,s);const i=hn(Ve,"posts",r);return await oa(i,{reportsCount:Xt(1)}),{success:!0}}catch(n){throw console.error("Error reporting post:",n),n}}},xd={async goOffline(){await kw(Ve)},async goOnline(){await Vw(Ve)}},ur={getUserIdentity:Br.getOrCreateUser,updateUserProfile:Br.updateUser,createPost:Bi.createPost,getPosts:Bi.getPosts,getPost:Bi.getPost,subscribeToPostsUpdates:Bi.subscribeToPosts,castVote:Cd.castVote,getUserVotes:Cd.getUserVotes,createComment:Cc.createComment,getComments:Cc.getComments,reportPost:t0.reportPost,goOffline:xd.goOffline,goOnline:xd.goOnline};class n0 extends Od.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("React Error Boundary caught an error:",e,t);const n={message:e.message,stack:e.stack,componentStack:t.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href};try{localStorage.setItem("riprap_last_error",JSON.stringify(n))}catch(i){console.warn("Failed to save error report:",i)}(e.message.includes("Firebase")||e.message.includes("firestore")||e.message.includes("auth/"))&&console.warn("Firebase error detected, app may recover after restart")}render(){return this.state.hasError?w.jsx("div",{className:"min-h-screen bg-navy-900 flex items-center justify-center p-4",children:w.jsxs("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 text-center",children:[w.jsx("div",{className:"text-red-600 text-6xl mb-4",children:"⚠️"}),w.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:"Something went wrong"}),w.jsx("p",{className:"text-gray-600 mb-4",children:"The app encountered an error and needs to restart."}),w.jsx("button",{onClick:()=>window.location.reload(),className:"bg-navy-600 text-white px-4 py-2 rounded hover:bg-navy-700 transition-colors",children:"Restart App"})]})}):this.props.children}}const Ws={"montauk-point-ny":{lat:41.0362,lng:-71.8562,name:"Montauk Point, NY",state:"NY"},"cape-cod-ma":{lat:41.6688,lng:-70.2962,name:"Cape Cod, MA",state:"MA"},"block-island-ri":{lat:41.1775,lng:-71.5773,name:"Block Island, RI",state:"RI"},"chesapeake-bay-md":{lat:38.9784,lng:-76.4951,name:"Chesapeake Bay, MD",state:"MD"},"sandy-hook-nj":{lat:40.4168,lng:-74.0018,name:"Sandy Hook, NJ",state:"NJ"},"orient-point-ny":{lat:41.1615,lng:-72.2351,name:"Orient Point, NY",state:"NY"},"race-point-ma":{lat:42.0654,lng:-70.2457,name:"Race Point, MA",state:"MA"},"watch-hill-ri":{lat:41.3079,lng:-71.8565,name:"Watch Hill, RI",state:"RI"},"martha-vineyard-ma":{lat:41.3888,lng:-70.642,name:"Martha's Vineyard, MA",state:"MA"},"nantucket-ma":{lat:41.2835,lng:-70.0995,name:"Nantucket, MA",state:"MA"},"long-island-sound-ct":{lat:41.1015,lng:-72.6732,name:"Long Island Sound, CT",state:"CT"},"rhode-island-sound-ri":{lat:41.4221,lng:-71.4774,name:"Rhode Island Sound, RI",state:"RI"},"buzzards-bay-ma":{lat:41.5389,lng:-70.9481,name:"Buzzards Bay, MA",state:"MA"},"delaware-bay-de":{lat:38.9108,lng:-75.1818,name:"Delaware Bay, DE",state:"DE"},"hudson-river-ny":{lat:41.7658,lng:-73.9776,name:"Hudson River, NY",state:"NY"}},Bl=[{name:"Boston",state:"MA",lat:42.3601,lng:-71.0589},{name:"Cambridge",state:"MA",lat:42.3736,lng:-71.1097},{name:"Worcester",state:"MA",lat:42.2626,lng:-71.8023},{name:"Springfield",state:"MA",lat:42.1015,lng:-72.5898},{name:"Lowell",state:"MA",lat:42.6334,lng:-71.3162},{name:"Brockton",state:"MA",lat:42.0834,lng:-71.0184},{name:"New Bedford",state:"MA",lat:41.6362,lng:-70.9342},{name:"Quincy",state:"MA",lat:42.2529,lng:-71.0023},{name:"Lynn",state:"MA",lat:42.4668,lng:-70.9495},{name:"Fall River",state:"MA",lat:41.7015,lng:-71.155},{name:"Newton",state:"MA",lat:42.337,lng:-71.2092},{name:"Somerville",state:"MA",lat:42.3876,lng:-71.0995},{name:"Lawrence",state:"MA",lat:42.707,lng:-71.1631},{name:"Framingham",state:"MA",lat:42.3793,lng:-71.4162},{name:"Haverhill",state:"MA",lat:42.7762,lng:-71.0773},{name:"Waltham",state:"MA",lat:42.3765,lng:-71.2356},{name:"Malden",state:"MA",lat:42.4251,lng:-71.0662},{name:"Brookline",state:"MA",lat:42.3317,lng:-71.1211},{name:"Plymouth",state:"MA",lat:41.9584,lng:-70.6673},{name:"Medford",state:"MA",lat:42.4184,lng:-71.1061},{name:"Taunton",state:"MA",lat:41.9001,lng:-71.0897},{name:"Chicopee",state:"MA",lat:42.1487,lng:-72.6078},{name:"Weymouth",state:"MA",lat:42.218,lng:-70.9395},{name:"Revere",state:"MA",lat:42.4084,lng:-71.012},{name:"Peabody",state:"MA",lat:42.5279,lng:-70.9286},{name:"Methuen",state:"MA",lat:42.7262,lng:-71.1909},{name:"Barnstable",state:"MA",lat:41.7003,lng:-70.3002},{name:"Pittsfield",state:"MA",lat:42.4501,lng:-73.2454},{name:"Attleboro",state:"MA",lat:41.9443,lng:-71.2856},{name:"Everett",state:"MA",lat:42.4084,lng:-71.0537},{name:"Salem",state:"MA",lat:42.5195,lng:-70.8967},{name:"Westfield",state:"MA",lat:42.1251,lng:-72.7495},{name:"Leominster",state:"MA",lat:42.5251,lng:-71.7595},{name:"Fitchburg",state:"MA",lat:42.5834,lng:-71.8023},{name:"Beverly",state:"MA",lat:42.5584,lng:-70.88},{name:"Holyoke",state:"MA",lat:42.2043,lng:-72.6162},{name:"Marlborough",state:"MA",lat:42.3459,lng:-71.5523},{name:"Woburn",state:"MA",lat:42.4792,lng:-71.1523},{name:"Chelsea",state:"MA",lat:42.3918,lng:-71.0328},{name:"Gloucester",state:"MA",lat:42.6142,lng:-70.6631},{name:"New York City",state:"NY",lat:40.7128,lng:-74.006},{name:"Buffalo",state:"NY",lat:42.8864,lng:-78.8784},{name:"Rochester",state:"NY",lat:43.1566,lng:-77.6088},{name:"Yonkers",state:"NY",lat:40.9312,lng:-73.8987},{name:"Syracuse",state:"NY",lat:43.0481,lng:-76.1474},{name:"Albany",state:"NY",lat:42.6526,lng:-73.7562},{name:"New Rochelle",state:"NY",lat:40.9115,lng:-73.7823},{name:"Mount Vernon",state:"NY",lat:40.9126,lng:-73.837},{name:"Schenectady",state:"NY",lat:42.8142,lng:-73.9396},{name:"Utica",state:"NY",lat:43.1009,lng:-75.2327},{name:"White Plains",state:"NY",lat:41.034,lng:-73.7629},{name:"Hempstead",state:"NY",lat:40.7062,lng:-73.6187},{name:"Troy",state:"NY",lat:42.7284,lng:-73.6918},{name:"Niagara Falls",state:"NY",lat:43.0962,lng:-79.0377},{name:"Binghamton",state:"NY",lat:42.0987,lng:-75.918},{name:"Freeport",state:"NY",lat:40.6576,lng:-73.5832},{name:"Valley Stream",state:"NY",lat:40.6642,lng:-73.7084},{name:"Long Beach",state:"NY",lat:40.5885,lng:-73.6579},{name:"Watertown",state:"NY",lat:43.9747,lng:-75.9107},{name:"Jamestown",state:"NY",lat:42.097,lng:-79.2353},{name:"New York",state:"NY",lat:40.7128,lng:-74.006},{name:"Bronx",state:"NY",lat:40.8448,lng:-73.8648},{name:"Brooklyn",state:"NY",lat:40.6782,lng:-73.9442},{name:"Queens",state:"NY",lat:40.7282,lng:-73.7949},{name:"Staten Island",state:"NY",lat:40.5795,lng:-74.1502},{name:"Manhattan",state:"NY",lat:40.7831,lng:-73.9712},{name:"Elmira",state:"NY",lat:42.0898,lng:-76.8077},{name:"Tonawanda",state:"NY",lat:43.0126,lng:-78.8803},{name:"Poughkeepsie",state:"NY",lat:41.7004,lng:-73.9209},{name:"Newburgh",state:"NY",lat:41.5034,lng:-74.0104},{name:"Middletown",state:"NY",lat:41.4459,lng:-74.4226},{name:"Bridgeport",state:"CT",lat:41.1865,lng:-73.1952},{name:"New Haven",state:"CT",lat:41.3083,lng:-72.9279},{name:"Hartford",state:"CT",lat:41.7658,lng:-72.6734},{name:"Stamford",state:"CT",lat:41.0534,lng:-73.5387},{name:"Waterbury",state:"CT",lat:41.5581,lng:-73.0515},{name:"Norwalk",state:"CT",lat:41.1175,lng:-73.4079},{name:"Danbury",state:"CT",lat:41.3948,lng:-73.454},{name:"New Britain",state:"CT",lat:41.6612,lng:-72.7795},{name:"West Haven",state:"CT",lat:41.2707,lng:-72.947},{name:"Greenwich",state:"CT",lat:41.0262,lng:-73.6284},{name:"Hamden",state:"CT",lat:41.3959,lng:-72.9248},{name:"Meriden",state:"CT",lat:41.5382,lng:-72.807},{name:"Bristol",state:"CT",lat:41.6712,lng:-72.9493},{name:"West Hartford",state:"CT",lat:41.762,lng:-72.742},{name:"Milford",state:"CT",lat:41.2223,lng:-73.0565},{name:"Middletown",state:"CT",lat:41.5623,lng:-72.6506},{name:"Norwich",state:"CT",lat:41.5242,lng:-72.0759},{name:"New London",state:"CT",lat:41.3556,lng:-72.0995},{name:"Torrington",state:"CT",lat:41.8007,lng:-73.1212},{name:"Fairfield",state:"CT",lat:41.1612,lng:-73.2615},{name:"Providence",state:"RI",lat:41.824,lng:-71.4128},{name:"Cranston",state:"RI",lat:41.7798,lng:-71.4371},{name:"Warwick",state:"RI",lat:41.7001,lng:-71.4162},{name:"Pawtucket",state:"RI",lat:41.8787,lng:-71.3826},{name:"East Providence",state:"RI",lat:41.8137,lng:-71.3701},{name:"Woonsocket",state:"RI",lat:42.0029,lng:-71.5147},{name:"Newport",state:"RI",lat:41.4901,lng:-71.3128},{name:"Central Falls",state:"RI",lat:41.8904,lng:-71.3926},{name:"Westerly",state:"RI",lat:41.3776,lng:-71.827},{name:"Cumberland",state:"RI",lat:41.9665,lng:-71.4326},{name:"Portland",state:"ME",lat:43.6591,lng:-70.2568},{name:"Lewiston",state:"ME",lat:44.1004,lng:-70.2148},{name:"Bangor",state:"ME",lat:44.8016,lng:-68.7712},{name:"South Portland",state:"ME",lat:43.6415,lng:-70.2409},{name:"Auburn",state:"ME",lat:44.0979,lng:-70.2311},{name:"Biddeford",state:"ME",lat:43.4926,lng:-70.4533},{name:"Sanford",state:"ME",lat:43.439,lng:-70.774},{name:"Saco",state:"ME",lat:43.5009,lng:-70.4428},{name:"Augusta",state:"ME",lat:44.3106,lng:-69.7795},{name:"Westbrook",state:"ME",lat:43.677,lng:-70.3712},{name:"Waterville",state:"ME",lat:44.5323,lng:-69.6317},{name:"Presque Isle",state:"ME",lat:46.6811,lng:-68.0161},{name:"Bar Harbor",state:"ME",lat:44.3876,lng:-68.2039},{name:"Calais",state:"ME",lat:45.1737,lng:-67.2741},{name:"Ellsworth",state:"ME",lat:44.5434,lng:-68.4198},{name:"Manchester",state:"NH",lat:42.9956,lng:-71.4548},{name:"Nashua",state:"NH",lat:42.7654,lng:-71.4676},{name:"Concord",state:"NH",lat:43.2081,lng:-71.5376},{name:"Derry",state:"NH",lat:42.8804,lng:-71.3273},{name:"Dover",state:"NH",lat:43.1979,lng:-70.8737},{name:"Rochester",state:"NH",lat:43.3042,lng:-70.9759},{name:"Salem",state:"NH",lat:42.7876,lng:-71.2009},{name:"Merrimack",state:"NH",lat:42.8659,lng:-71.4995},{name:"Hudson",state:"NH",lat:42.7659,lng:-71.4342},{name:"Londonderry",state:"NH",lat:42.8653,lng:-71.3739},{name:"Keene",state:"NH",lat:42.9342,lng:-72.2815},{name:"Portsmouth",state:"NH",lat:43.0718,lng:-70.7626},{name:"Laconia",state:"NH",lat:43.5276,lng:-71.4703},{name:"Hampton",state:"NH",lat:42.9373,lng:-70.8187},{name:"Burlington",state:"VT",lat:44.4759,lng:-73.2121},{name:"Essex",state:"VT",lat:44.4906,lng:-73.1129},{name:"South Burlington",state:"VT",lat:44.4669,lng:-73.1709},{name:"Colchester",state:"VT",lat:44.5434,lng:-73.1317},{name:"Rutland",state:"VT",lat:43.6106,lng:-72.9726},{name:"Bennington",state:"VT",lat:42.8781,lng:-73.1968},{name:"Brattleboro",state:"VT",lat:42.8509,lng:-72.5579},{name:"Milton",state:"VT",lat:44.6365,lng:-73.1151},{name:"Hartford",state:"VT",lat:43.6506,lng:-72.319},{name:"Williston",state:"VT",lat:44.4434,lng:-73.0934},{name:"Middlebury",state:"VT",lat:44.0154,lng:-73.1673},{name:"Montpelier",state:"VT",lat:44.2601,lng:-72.5806},{name:"Philadelphia",state:"PA",lat:39.9526,lng:-75.1652},{name:"Pittsburgh",state:"PA",lat:40.4406,lng:-79.9959},{name:"Allentown",state:"PA",lat:40.6084,lng:-75.4901},{name:"Erie",state:"PA",lat:42.1292,lng:-80.0851},{name:"Reading",state:"PA",lat:40.3356,lng:-75.9269},{name:"Scranton",state:"PA",lat:41.409,lng:-75.6624},{name:"Bethlehem",state:"PA",lat:40.6259,lng:-75.3704},{name:"Lancaster",state:"PA",lat:40.0379,lng:-76.3055},{name:"Harrisburg",state:"PA",lat:40.2732,lng:-76.8839},{name:"York",state:"PA",lat:39.9626,lng:-76.7277},{name:"Altoona",state:"PA",lat:40.5187,lng:-78.3947},{name:"Wilkes-Barre",state:"PA",lat:41.2459,lng:-75.8813},{name:"Newark",state:"NJ",lat:40.7357,lng:-74.1724},{name:"Jersey City",state:"NJ",lat:40.7178,lng:-74.0431},{name:"Paterson",state:"NJ",lat:40.9168,lng:-74.1718},{name:"Elizabeth",state:"NJ",lat:40.664,lng:-74.2107},{name:"Edison",state:"NJ",lat:40.5187,lng:-74.4121},{name:"Woodbridge",state:"NJ",lat:40.5576,lng:-74.2846},{name:"Lakewood",state:"NJ",lat:40.0979,lng:-74.2179},{name:"Toms River",state:"NJ",lat:39.9537,lng:-74.1979},{name:"Hamilton",state:"NJ",lat:40.229,lng:-74.6598},{name:"Trenton",state:"NJ",lat:40.2206,lng:-74.7565},{name:"Camden",state:"NJ",lat:39.9259,lng:-75.1196},{name:"Clifton",state:"NJ",lat:40.8584,lng:-74.1638},{name:"Brick",state:"NJ",lat:40.0473,lng:-74.1354},{name:"Cherry Hill",state:"NJ",lat:39.9348,lng:-75.0307},{name:"Passaic",state:"NJ",lat:40.8568,lng:-74.1279},{name:"Union City",state:"NJ",lat:40.7662,lng:-74.0243},{name:"Bayonne",state:"NJ",lat:40.6687,lng:-74.1143},{name:"East Orange",state:"NJ",lat:40.7668,lng:-74.2049},{name:"Vineland",state:"NJ",lat:39.4864,lng:-75.026},{name:"New Brunswick",state:"NJ",lat:40.4862,lng:-74.4518},{name:"Hoboken",state:"NJ",lat:40.7439,lng:-74.0324},{name:"Plainfield",state:"NJ",lat:40.6337,lng:-74.4071},{name:"West New York",state:"NJ",lat:40.7878,lng:-74.0143},{name:"Hackensack",state:"NJ",lat:40.8859,lng:-74.0437},{name:"Sayreville",state:"NJ",lat:40.4595,lng:-74.3612},{name:"Kearny",state:"NJ",lat:40.7684,lng:-74.1454},{name:"Linden",state:"NJ",lat:40.622,lng:-74.2446},{name:"Atlantic City",state:"NJ",lat:39.3643,lng:-74.4229},{name:"Baltimore",state:"MD",lat:39.2904,lng:-76.6122},{name:"Columbia",state:"MD",lat:39.2037,lng:-76.861},{name:"Germantown",state:"MD",lat:39.1731,lng:-77.2717},{name:"Silver Spring",state:"MD",lat:38.9912,lng:-77.0261},{name:"Waldorf",state:"MD",lat:38.6206,lng:-76.9391},{name:"Glen Burnie",state:"MD",lat:39.1626,lng:-76.6247},{name:"Ellicott City",state:"MD",lat:39.2673,lng:-76.7983},{name:"Frederick",state:"MD",lat:39.4143,lng:-77.4105},{name:"Dundalk",state:"MD",lat:39.2709,lng:-76.5219},{name:"Rockville",state:"MD",lat:39.084,lng:-77.1528},{name:"Bethesda",state:"MD",lat:38.9807,lng:-77.102},{name:"Gaithersburg",state:"MD",lat:39.1434,lng:-77.2014},{name:"Annapolis",state:"MD",lat:38.9717,lng:-76.501},{name:"Bowie",state:"MD",lat:38.9426,lng:-76.7302},{name:"Hagerstown",state:"MD",lat:39.6418,lng:-77.72},{name:"Cumberland",state:"MD",lat:39.6526,lng:-78.7625},{name:"Salisbury",state:"MD",lat:38.3607,lng:-75.5994},{name:"Ocean City",state:"MD",lat:38.3365,lng:-75.0849},{name:"Washington",state:"DC",lat:38.9072,lng:-77.0369},{name:"Wilmington",state:"DE",lat:39.7391,lng:-75.5398},{name:"Dover",state:"DE",lat:39.1612,lng:-75.5264},{name:"Newark",state:"DE",lat:39.6837,lng:-75.7497},{name:"Middletown",state:"DE",lat:39.4495,lng:-75.7163},{name:"Smyrna",state:"DE",lat:39.2998,lng:-75.6046},{name:"Milford",state:"DE",lat:38.9129,lng:-75.4277},{name:"Seaford",state:"DE",lat:38.6412,lng:-75.611},{name:"Georgetown",state:"DE",lat:38.6901,lng:-75.3855},{name:"Elsmere",state:"DE",lat:39.7379,lng:-75.5924},{name:"New Castle",state:"DE",lat:39.662,lng:-75.5664},{name:"Chicago",state:"IL",lat:41.8781,lng:-87.6298},{name:"Los Angeles",state:"CA",lat:34.0522,lng:-118.2437},{name:"Houston",state:"TX",lat:29.7604,lng:-95.3698},{name:"Phoenix",state:"AZ",lat:33.4484,lng:-112.074},{name:"San Antonio",state:"TX",lat:29.4241,lng:-98.4936},{name:"San Diego",state:"CA",lat:32.7157,lng:-117.1611},{name:"Dallas",state:"TX",lat:32.7767,lng:-96.797},{name:"San Jose",state:"CA",lat:37.3382,lng:-121.8863},{name:"Austin",state:"TX",lat:30.2672,lng:-97.7431},{name:"Jacksonville",state:"FL",lat:30.3322,lng:-81.6557},{name:"Fort Worth",state:"TX",lat:32.7555,lng:-97.3308},{name:"Columbus",state:"OH",lat:39.9612,lng:-82.9988},{name:"San Francisco",state:"CA",lat:37.7749,lng:-122.4194},{name:"Charlotte",state:"NC",lat:35.2271,lng:-80.8431},{name:"Indianapolis",state:"IN",lat:39.7684,lng:-86.1581},{name:"Seattle",state:"WA",lat:47.6062,lng:-122.3321},{name:"Denver",state:"CO",lat:39.7392,lng:-104.9903},{name:"Detroit",state:"MI",lat:42.3314,lng:-83.0458},{name:"Nashville",state:"TN",lat:36.1627,lng:-86.7816},{name:"Memphis",state:"TN",lat:35.1495,lng:-90.049},{name:"Portland",state:"OR",lat:45.5152,lng:-122.6784},{name:"Oklahoma City",state:"OK",lat:35.4676,lng:-97.5164},{name:"Las Vegas",state:"NV",lat:36.1699,lng:-115.1398},{name:"Louisville",state:"KY",lat:38.2527,lng:-85.7585},{name:"Milwaukee",state:"WI",lat:43.0389,lng:-87.9065},{name:"Albuquerque",state:"NM",lat:35.0844,lng:-106.6504},{name:"Tucson",state:"AZ",lat:32.2226,lng:-110.9747},{name:"Fresno",state:"CA",lat:36.7378,lng:-119.7871},{name:"Sacramento",state:"CA",lat:38.5816,lng:-121.4944},{name:"Kansas City",state:"MO",lat:39.0997,lng:-94.5786},{name:"Mesa",state:"AZ",lat:33.4152,lng:-111.8315},{name:"Virginia Beach",state:"VA",lat:36.8529,lng:-75.978},{name:"Atlanta",state:"GA",lat:33.749,lng:-84.388},{name:"Colorado Springs",state:"CO",lat:38.8339,lng:-104.8214},{name:"Omaha",state:"NE",lat:41.2565,lng:-95.9345},{name:"Raleigh",state:"NC",lat:35.7796,lng:-78.6382},{name:"Miami",state:"FL",lat:25.7617,lng:-80.1918},{name:"Long Beach",state:"CA",lat:33.7701,lng:-118.1937},{name:"Virginia Beach",state:"VA",lat:36.8529,lng:-75.978},{name:"Oakland",state:"CA",lat:37.8044,lng:-122.2712},{name:"Minneapolis",state:"MN",lat:44.9778,lng:-93.265},{name:"Tulsa",state:"OK",lat:36.154,lng:-95.9928},{name:"Arlington",state:"TX",lat:32.7357,lng:-97.1081},{name:"Tampa",state:"FL",lat:27.9506,lng:-82.4572},{name:"New Orleans",state:"LA",lat:29.9511,lng:-90.0715},{name:"Wichita",state:"KS",lat:37.6872,lng:-97.3301},{name:"Cleveland",state:"OH",lat:41.4993,lng:-81.6944},{name:"Bakersfield",state:"CA",lat:35.3733,lng:-119.0187},{name:"Aurora",state:"CO",lat:39.7294,lng:-104.8319},{name:"Anaheim",state:"CA",lat:33.8366,lng:-117.9143},{name:"Honolulu",state:"HI",lat:21.3099,lng:-157.8581},{name:"Santa Ana",state:"CA",lat:33.7455,lng:-117.8677},{name:"Corpus Christi",state:"TX",lat:27.8006,lng:-97.3964},{name:"Riverside",state:"CA",lat:33.9533,lng:-117.3962},{name:"Lexington",state:"KY",lat:38.0406,lng:-84.5037},{name:"Stockton",state:"CA",lat:37.9577,lng:-121.2908},{name:"St. Paul",state:"MN",lat:44.9537,lng:-93.09},{name:"St. Louis",state:"MO",lat:38.627,lng:-90.1994},{name:"Pittsburgh",state:"PA",lat:40.4406,lng:-79.9959},{name:"Anchorage",state:"AK",lat:61.2181,lng:-149.9003},{name:"Cincinnati",state:"OH",lat:39.1031,lng:-84.512},{name:"Henderson",state:"NV",lat:36.0395,lng:-114.9817},{name:"Greensboro",state:"NC",lat:36.0726,lng:-79.792},{name:"Plano",state:"TX",lat:33.0198,lng:-96.6989},{name:"Newark",state:"NJ",lat:40.7357,lng:-74.1724},{name:"Lincoln",state:"NE",lat:40.8136,lng:-96.7026},{name:"Toledo",state:"OH",lat:41.6528,lng:-83.5379},{name:"Orlando",state:"FL",lat:28.5383,lng:-81.3792},{name:"Chula Vista",state:"CA",lat:32.6401,lng:-117.0842},{name:"Jersey City",state:"NJ",lat:40.7178,lng:-74.0431},{name:"Chandler",state:"AZ",lat:33.3062,lng:-111.8413},{name:"Laredo",state:"TX",lat:27.5306,lng:-99.4803},{name:"Madison",state:"WI",lat:43.0731,lng:-89.4012},{name:"Lubbock",state:"TX",lat:33.5779,lng:-101.8552},{name:"Winston-Salem",state:"NC",lat:36.0999,lng:-80.2442},{name:"Garland",state:"TX",lat:32.9126,lng:-96.6389},{name:"Glendale",state:"AZ",lat:33.5387,lng:-112.186},{name:"Hialeah",state:"FL",lat:25.8576,lng:-80.2781},{name:"Reno",state:"NV",lat:39.5296,lng:-119.8138},{name:"Baton Rouge",state:"LA",lat:30.4515,lng:-91.1871},{name:"Irvine",state:"CA",lat:33.6846,lng:-117.8265},{name:"Chesapeake",state:"VA",lat:36.7682,lng:-76.2875},{name:"Irving",state:"TX",lat:32.814,lng:-96.9489},{name:"Scottsdale",state:"AZ",lat:33.4942,lng:-111.9261},{name:"North Las Vegas",state:"NV",lat:36.1989,lng:-115.1175},{name:"Fremont",state:"CA",lat:37.5485,lng:-121.9886},{name:"Gilbert",state:"AZ",lat:33.3528,lng:-111.789},{name:"San Bernardino",state:"CA",lat:34.1083,lng:-117.2898},{name:"Boise",state:"ID",lat:43.615,lng:-116.2023},{name:"Birmingham",state:"AL",lat:33.5207,lng:-86.8025}],Nd=r=>{if(!r||r.length<1)return[];const e=r.toLowerCase().trim();return Bl.map(n=>{const s=n.name.toLowerCase(),i=n.state.toLowerCase(),o=`${n.name}, ${n.state}`.toLowerCase();let c=0;return s===e&&(c+=100),o===e&&(c+=95),s.startsWith(e)&&(c+=50),i.startsWith(e)&&(c+=30),s.includes(e)&&(c+=20),i.includes(e)&&(c+=10),o.includes(e)&&(c+=15),{...n,score:c}}).filter(n=>n.score>0).sort((n,s)=>s.score-n.score).slice(0,15)},r0=async r=>{try{const t=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&limit=5&q=${encodeURIComponent(r)}`)).json();if(t&&t.length>0)return t.map(n=>{var s;return{name:n.display_name.split(",")[0],state:((s=n.display_name.split(",")[1])==null?void 0:s.trim())||"Unknown",lat:parseFloat(n.lat),lng:parseFloat(n.lon)}})}catch(e){console.error("Geocoding API error:",e)}return[]},xc=()=>{const r=["REEL","BIG","DEEP","LUCKY","MASTER","PRO","BASS","CATCH","FISHER","ANGLER"],e=["FISHER","CASTER","HUNTER","MASTER","CAPTAIN","ADMIRAL","SAILOR","KEEPER","LEGEND","HERO"],t=Math.floor(Math.random()*999)+1,n=r[Math.floor(Math.random()*r.length)],s=e[Math.floor(Math.random()*e.length)];return`${n}${s}${t}`},ko=[{name:"Navy",value:"#1e3a8a",textClass:"text-blue-800"},{name:"Purple",value:"#7c3aed",textClass:"text-purple-600"},{name:"Green",value:"#059669",textClass:"text-emerald-600"},{name:"Orange",value:"#ea580c",textClass:"text-orange-600"},{name:"Red",value:"#dc2626",textClass:"text-red-600"},{name:"Teal",value:"#0d9488",textClass:"text-teal-600"},{name:"Pink",value:"#db2777",textClass:"text-pink-600"},{name:"Indigo",value:"#4338ca",textClass:"text-indigo-600"}],Dd=async(r=null,e=null)=>{try{const t=ko[0],n=await Br.getOrCreateUser(r||null,e||t);return localStorage.setItem("riprap_user",JSON.stringify(n)),n}catch(t){console.error("Failed to get user identity:",t);let n=localStorage.getItem("riprap_user");if(!n||r){const s=ko[0];n={id:crypto.randomUUID(),screenName:r||xc(),color:e||s,hasChangedName:!!r,createdAt:new Date().toISOString()},localStorage.setItem("riprap_user",JSON.stringify(n))}else n=JSON.parse(n);return n}},Wa=(r,e)=>{const t={customLocation:r,locationRadius:e,savedAt:new Date().toISOString()};localStorage.setItem("riprap_location_settings",JSON.stringify(t))},Vd=()=>{const r=localStorage.getItem("riprap_location_settings");return r?JSON.parse(r):{customLocation:null,locationRadius:10}},Tr=(r,e,t,n)=>{const i=(t-r)*Math.PI/180,o=(n-e)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 3959*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},ji={POST_COOLDOWN:3e4,VOTE_COOLDOWN:1e3,MAX_POSTS_PER_HOUR:10,MAX_VOTES_PER_MINUTE:30},kd=(r,e,t,n,s)=>{const o=Date.now()-r;return o<e?{allowed:!1,remainingTime:Math.ceil((e-o)/1e3)}:t>=n?{allowed:!1,remainingTime:Math.ceil(s/1e3)}:{allowed:!0,remainingTime:0}},s0=["spam","scam","fake","bot","hack","cheat","exploit","idiot","stupid","hate","kill","die","suicide","buy now","click here","make money","get rich","free money"],i0=[/(.)\1{4,}/g,/[A-Z]{10,}/g,/https?:\/\/[^\s]+/g,/\d{10,}/g,/[!@#$%^&*]{3,}/g],o0=r=>{const e=r.toLowerCase(),t=[],n=s0.filter(c=>e.includes(c));n.length>0&&t.push(`Contains inappropriate words: ${n.join(", ")}`),i0.forEach(c=>{c.test(r)&&t.push("Contains suspicious patterns")}),r.length<3&&t.push("Content too short");const s=r.split(/\s+/),i={};return s.forEach(c=>{const l=c.toLowerCase().replace(/[^a-z]/g,"");l.length>2&&(i[l]=(i[l]||0)+1)}),Math.max(...Object.values(i))>3&&t.push("Excessive word repetition detected"),{allowed:t.length===0,issues:t,severity:t.length>2?"high":t.length>0?"medium":"low"}},Md=(r,e)=>{let t=null,n=1/0;return Object.entries(Ws).forEach(([s,i])=>{const o=Tr(r,e,i.lat,i.lng);o<n&&(n=o,t=i)}),t?n<=25?t.name:`${Math.round(n)} miles from ${t.name}`:"Unknown Area"},qi=(r,e)=>{let t=null,n=1/0;if(Bl.forEach(i=>{const o=Tr(r,e,i.lat,i.lng);o<n&&(n=o,t=i)}),t&&n<=50)return`${t.name}, ${t.state}`;let s=null;return n=1/0,Object.entries(Ws).forEach(([i,o])=>{const c=Tr(r,e,o.lat,o.lng);c<n&&(n=c,s=o)}),s?s.name:"Unknown Location"},a0=`
    o                 o
     \\               /
      \\             /
  ~~~~~~\\~~~~~~~~~~~/~~~~~~
         \\         /
          \\       /
           \\     /
            \\   /
             \\_/
              |
         ____/ \\____
        /           \\
       |   RIPRAP   |
        \\___________/
`,c0=({onUsernameSet:r})=>{const[e,t]=Y.useState(xc()),[n,s]=Y.useState(ko[0]),i=()=>{if(e.trim().length<3){alert("Username must be at least 3 characters");return}if(e.trim().length>20){alert("Username must be 20 characters or less");return}r(e.trim().toUpperCase(),n)},o=()=>{t(xc())};return w.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4 terminal-text",children:w.jsxs("div",{className:"w-full max-w-md mx-auto terminal-card p-6",children:[w.jsxs("div",{className:"text-center space-y-4",children:[w.jsx("div",{className:"ascii-art text-xs terminal-accent",children:a0}),w.jsx("div",{className:"text-xl font-bold terminal-text",children:"Welcome to RipRap"}),w.jsx("div",{className:"text-sm terminal-text",children:"Choose your angler name to get started"})]}),w.jsxs("div",{className:"space-y-4 mt-6",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Your angler name:"}),w.jsx("input",{type:"text",value:e,onChange:c=>t(c.target.value.toUpperCase()),placeholder:"Enter username",className:"w-full h-10 px-3 py-2 terminal-input text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-700",maxLength:20}),w.jsxs("div",{className:"text-xs terminal-accent",children:[e.length,"/20 characters"]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Choose your color:"}),w.jsx("div",{className:"grid grid-cols-4 gap-2",children:ko.map(c=>w.jsx("button",{onClick:()=>s(c),className:`h-10 rounded border-2 ${n.name===c.name?"border-navy-700 ring-2 ring-navy-300":"border-gray-300 hover:border-gray-400"} focus:outline-none focus:ring-2 focus:ring-navy-700`,style:{backgroundColor:c.value},title:c.name},c.name))}),w.jsxs("div",{className:"text-xs terminal-accent",children:["Preview: ",w.jsx("span",{className:n.textClass,style:{fontWeight:"bold"},children:e})]})]}),w.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-3 text-xs terminal-text",children:["⚠️ ",w.jsx("strong",{children:"Note:"})," You cannot change your username or color after creating your account. Choose carefully!"]}),w.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[w.jsx("button",{onClick:o,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Generate New"}),w.jsx("button",{onClick:i,disabled:!e.trim()||e.trim().length<3,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Start Fishing"})]}),w.jsxs("div",{className:"text-center text-xs terminal-text mt-4 space-y-1",children:[w.jsx("div",{children:"• Anonymous fishing community"}),w.jsx("div",{children:"• Location-based posts"}),w.jsx("div",{children:"• Share catches, spots, and tips"})]})]})]})})},l0=({isOpen:r,onClose:e,user:t,userStats:n})=>{var s;return r?w.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"w-full max-w-md terminal-card p-6 max-h-[80vh] overflow-y-auto",children:[w.jsxs("div",{className:"text-center mb-4",children:[w.jsx("div",{className:"text-lg font-bold terminal-text",children:"My Account"}),w.jsx("div",{className:"text-xs terminal-accent mt-1",children:"Device-based account"})]}),w.jsxs("div",{className:"space-y-4",children:[w.jsx("div",{className:"bg-navy-50 p-4 rounded border",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"text-lg font-bold",style:{color:((s=t==null?void 0:t.color)==null?void 0:s.value)||"#1e3a8a"},children:t==null?void 0:t.screenName}),w.jsxs("div",{className:"text-xs terminal-accent mt-1",children:["Angler since ",new Date((t==null?void 0:t.createdAt)||Date.now()).toLocaleDateString()]})]})}),w.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[w.jsxs("div",{className:"bg-gray-50 p-3 rounded text-center",children:[w.jsx("div",{className:"text-lg font-bold terminal-text",children:n.posts.length}),w.jsx("div",{className:"text-xs terminal-accent",children:"Posts"})]}),w.jsxs("div",{className:"bg-gray-50 p-3 rounded text-center",children:[w.jsx("div",{className:"text-lg font-bold terminal-text",children:n.comments.length}),w.jsx("div",{className:"text-xs terminal-accent",children:"Comments"})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("div",{className:"text-sm font-bold terminal-text",children:"Recent Posts"}),w.jsxs("div",{className:"max-h-40 overflow-y-auto space-y-2",children:[n.posts.slice(0,5).map((i,o)=>w.jsxs("div",{className:"bg-gray-50 p-2 rounded text-xs",children:[w.jsx("div",{className:"font-mono",children:i.content}),w.jsxs("div",{className:"text-gray-500 mt-1",children:["▲ ",i.upvotes||0," ▼ ",i.downvotes||0]})]},o)),n.posts.length===0&&w.jsx("div",{className:"text-xs terminal-accent text-center py-4",children:"No posts yet. Start sharing your catches!"})]})]}),w.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-3 text-xs",children:[w.jsx("div",{className:"font-bold text-yellow-800 mb-2",children:"Account Persistence"}),w.jsxs("div",{className:"text-yellow-700 space-y-1",children:[w.jsx("div",{children:"• Account saved to this device"}),w.jsx("div",{children:"• Clear cache = lose account"}),w.jsx("div",{children:"• Different device = new account"})]})]}),w.jsx("div",{className:"pt-2",children:w.jsx("button",{onClick:e,className:"w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Close"})})]})]})}):null},u0=({isOpen:r,onClose:e,onLocationSet:t,currentLocation:n})=>{const[s,i]=Y.useState("");Y.useState("");const[o,c]=Y.useState(!1),[l,h]=Y.useState([]),[f,g]=Y.useState(!1);if(!r)return null;const p=M=>{if(i(M),M.length>=1){const j=Nd(M);h(j),g(j.length>0)}else h([]),g(!1)},R=M=>{i(`${M.name}, ${M.state}`),h([]),g(!1),t({lat:M.lat,lng:M.lng,name:`${M.name}, ${M.state}`}),e()},x=async()=>{if(!s.trim()){alert("Please enter a city name");return}c(!0);const M=Bl.find(O=>`${O.name}, ${O.state}`.toLowerCase()===s.toLowerCase()||O.name.toLowerCase()===s.toLowerCase());if(M){t({lat:M.lat,lng:M.lng,name:`${M.name}, ${M.state}`}),e(),c(!1);return}const j=Nd(s);if(j.length>0&&j[0].score>50){const O=j[0];t({lat:O.lat,lng:O.lng,name:`${O.name}, ${O.state}`}),e(),c(!1);return}try{const O=await r0(s);if(O.length>0){const z=O[0];t({lat:z.lat,lng:z.lng,name:`${z.name}, ${z.state}`}),e(),c(!1);return}}catch(O){console.error("API geocoding failed:",O)}c(!1),alert("City not found. Please check spelling or select from autocomplete suggestions.")},D=[{id:"current",name:"Use Current Location",coords:null},...Object.entries(Ws).map(([M,j])=>({id:M,name:j.name,coords:j}))],N=M=>{M.id==="current"?t(null):t(M.coords),e()};return w.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsxs("div",{className:"w-full max-w-md terminal-card p-6",children:[w.jsxs("div",{className:"text-center mb-4",children:[w.jsx("div",{className:"text-lg font-bold terminal-text",children:"Set Location"}),w.jsx("div",{className:"text-xs terminal-accent mt-1",children:"Choose where to view fishing posts"})]}),w.jsxs("div",{className:"space-y-4",children:[w.jsx("div",{className:"text-center text-xs terminal-accent",children:"Select a location:"}),w.jsxs("div",{className:"space-y-2 relative",children:[w.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Enter City, State:"}),w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("input",{type:"text",value:s,onChange:M=>p(M.target.value),placeholder:"Boston, MA",className:"flex-1 h-10 px-3 py-2 terminal-input text-sm focus:outline-none focus:ring-2 focus:ring-navy-700",onFocus:()=>s.length>=1&&g(l.length>0),onBlur:()=>setTimeout(()=>g(!1),200),onKeyPress:M=>M.key==="Enter"&&x()}),w.jsx("button",{onClick:x,disabled:!s.trim()||o,className:"px-4 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:opacity-50",children:o?"...":"Set"})]}),f&&l.length>0&&w.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto",children:l.map((M,j)=>w.jsxs("button",{onClick:()=>R(M),className:"w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border-b border-gray-100 last:border-b-0",children:[M.name,", ",M.state]},j))})]}),w.jsx("div",{className:"text-center text-xs terminal-accent",children:"or choose a fishing hotspot:"}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Northeast Striped Bass Locations:"}),w.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:D.map(M=>w.jsx("button",{onClick:()=>N(M),className:"w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border border-gray-300 hover:border-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-700",children:M.name},M.id))})]}),w.jsx("div",{className:"pt-2",children:w.jsx("button",{onClick:e,className:"w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Cancel"})})]})]})})},h0=({isOpen:r,onClose:e,onSubmit:t,newPostContent:n,setNewPostContent:s,isOnline:i})=>{if(!r)return null;const o=()=>{n.trim()&&(t(),e())};return w.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:w.jsx("div",{className:"w-full max-w-md terminal-card p-6",children:w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsx("textarea",{value:n,onChange:c=>s(c.target.value),placeholder:"Post your weather and/or fishing reports, questions from the water, callouts of bad behavior...",className:"w-full h-24 px-3 py-2 terminal-input text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-navy-700",maxLength:200,autoFocus:!0}),w.jsxs("div",{className:"text-xs terminal-accent",children:[n.length,"/200 characters"]})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[w.jsx("button",{onClick:e,className:"h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Cancel"}),w.jsx("button",{onClick:o,disabled:!n.trim()||!i,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Post"})]})]})})})},d0=({post:r,onVote:e,onComment:t,onReport:n,userVotes:s,comments:i,showLocation:o=!1})=>{var O;const[c,l]=Y.useState(!1),[h,f]=Y.useState(""),[g,p]=Y.useState(!1),R=s.find(z=>z.postId===r.id),x=i.filter(z=>z.postId===r.id),D=z=>{e(r.id,z)},N=()=>{h.trim()&&h.length<=200&&(t(r.id,h.trim()),f(""))},M=()=>{n(r.id),p(!0),setTimeout(()=>p(!1),3e3)},j=z=>{const se=new Date,te=new Date(z),E=Math.floor((se-te)/1e3);return E<60?"NOW":E<3600?`${Math.floor(E/60)}M`:E<86400?`${Math.floor(E/3600)}H`:`${Math.floor(E/86400)}D`};return r.score<=-5?null:w.jsxs("div",{className:"py-4 border-b border-gray-300 last:border-b-0",children:[w.jsxs("div",{className:"flex justify-between items-start mb-3",children:[w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx("div",{className:"w-8 h-8 bg-navy-700 text-white flex items-center justify-center text-xs font-bold",children:(r.authorName||r.author||"A").charAt(0)}),w.jsxs("div",{children:[w.jsx("div",{className:"flex items-center space-x-2",children:w.jsx("div",{className:"font-bold text-sm",style:{color:((O=r.authorColor)==null?void 0:O.value)||"#1e3a8a"},children:r.authorName||r.author||"Anonymous"})}),w.jsx("div",{className:"text-xs terminal-accent",children:o&&r.location.name?w.jsxs(w.Fragment,{children:["📍 ",r.location.name]}):r.location.nearestCity?w.jsxs(w.Fragment,{children:["📍 ",r.location.nearestCity]}):w.jsxs(w.Fragment,{children:[r.location.distance,"mi away"]})})]})]}),w.jsx("button",{onClick:M,className:`text-xs px-2 py-1 ${g?"text-gray-500":"text-red-600 hover:text-red-700"} focus:outline-none`,disabled:g,children:g?"✓":"🚩"})]}),w.jsx("div",{className:"mb-3 p-3 bg-white border-2 border-navy-700",children:w.jsx("div",{className:"terminal-text text-sm font-mono",children:r.content})}),w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsxs("button",{onClick:()=>D("up"),className:`px-2 py-1 text-sm ${(R==null?void 0:R.type)==="up"?"text-green-600 font-bold":"text-gray-600 hover:text-green-600"} focus:outline-none`,children:["▲ ",r.upvotes]}),w.jsxs("button",{onClick:()=>D("down"),className:`px-2 py-1 text-sm ${(R==null?void 0:R.type)==="down"?"text-red-600 font-bold":"text-gray-600 hover:text-red-600"} focus:outline-none`,children:["▼ ",r.downvotes]}),w.jsxs("div",{className:`px-2 py-1 text-xs font-bold ${r.score>0?"text-green-600":r.score<0?"text-red-600":"text-gray-600"}`,children:[r.score>0?"+":"",r.score]})]}),w.jsxs("button",{onClick:()=>l(!c),className:"px-2 py-1 text-sm text-gray-600 hover:text-navy-700 focus:outline-none",children:["💬 ",x.length]})]}),c&&w.jsxs("div",{className:"mt-4 space-y-3 border-t-2 border-navy-700 pt-4",children:[x.map(z=>{var se;return w.jsxs("div",{className:"bg-gray-100 border-2 border-navy-700 p-2",children:[w.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[w.jsx("div",{className:"w-4 h-4 bg-navy-700 text-white flex items-center justify-center text-xs font-bold",children:(z.authorName||z.author||"A").charAt(0)}),w.jsx("span",{className:"font-bold text-xs",style:{color:((se=z.authorColor)==null?void 0:se.value)||"#1e3a8a"},children:z.authorName||z.author||"Anonymous"}),w.jsx("span",{className:"text-xs terminal-accent",children:j(z.createdAt||z.timestamp)})]}),w.jsx("div",{className:"terminal-text text-xs font-mono pl-6",children:z.content})]},z.id)}),w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("textarea",{value:h,onChange:z=>f(z.target.value),placeholder:"Add a comment...",className:"flex-1 h-16 px-2 py-1 terminal-input text-xs font-mono focus:outline-none focus:ring-2 focus:ring-navy-700 resize-none",maxLength:200}),w.jsx("button",{onClick:N,disabled:!h.trim(),className:"px-3 py-1 terminal-button text-xs font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Send"})]}),w.jsxs("div",{className:"text-xs terminal-accent",children:[h.length,"/200 characters"]})]})]})},f0=()=>{var es;const[r,e]=Y.useState([]),[t,n]=Y.useState([]),[s,i]=Y.useState([]),[o,c]=Y.useState(""),[l,h]=Y.useState(null),[f,g]=Y.useState(null),[p,R]=Y.useState(navigator.onLine);Y.useState(null);const[x,D]=Y.useState(!1),[N,M]=Y.useState("hot"),[j,O]=Y.useState(""),[z,se]=Y.useState(!1),[te,E]=Y.useState(!1),[_,I]=Y.useState(null),[T,v]=Y.useState(!1),[b,y]=Y.useState(10),[rt,gn]=Y.useState({posts:[],comments:[]});Y.useState(Date.now()),Y.useRef(null);const[da,pn]=Y.useState(0),[_n,Jr]=Y.useState(0),[hi,fa]=Y.useState(0),[ht,Pe]=Y.useState(0),[yn,Tt]=Y.useState(20),[dt,ft]=Y.useState(!1),[Yn,ma]=Y.useState(!0);Y.useRef(null),Y.useEffect(()=>{const Z=Xn(()=>{if(N==="coastwide"||dt||!Yn)return;const B=window.innerHeight+window.scrollY,H=document.documentElement.scrollHeight;B>=H-200&&Zn()},200);return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[N,dt,Yn]);const Xn=($,Z)=>{let B;return function(){const H=arguments,U=this;B||($.apply(U,H),B=!0,setTimeout(()=>B=!1,Z))}},Zn=async()=>{if(dt||!Yn||!l)return;ft(!0);const $=yn+10;Tt($);try{await st(l.id,f)}catch(Z){console.error("Failed to load more posts:",Z)}finally{ft(!1)}};Y.useEffect(()=>{let $=!0;(async()=>{try{const B=localStorage.getItem("riprap_user");if(!B)$&&D(!0);else try{const H=await Dd();$&&h(H)}catch(H){console.warn("Firebase user service failed, falling back to local mode:",H);try{const U=JSON.parse(B);if(U&&U.id&&U.screenName)$&&h(U),console.log("Successfully loaded user from localStorage");else throw new Error("Invalid user data structure")}catch(U){console.error("Failed to parse localStorage user data:",U),localStorage.removeItem("riprap_user"),$&&D(!0)}}}catch(B){console.error("Failed to initialize user:",B),$&&D(!0)}})();try{const B=Vd();$&&(y(B.locationRadius),B.customLocation&&(I(B.customLocation),O(B.customLocation.name)))}catch(B){console.error("Failed to load location settings:",B)}return()=>{$=!1}},[]),Y.useEffect(()=>{if(!l)return;(async()=>{try{const H=Vd();let U=null;if(H.customLocation)U=H.customLocation,g(H.customLocation),O(H.customLocation.name),console.log("Using saved custom location:",H.customLocation);else{const pe=await(()=>new Promise(ye=>{if(!navigator.geolocation){console.warn("Geolocation not supported"),ye(null);return}navigator.geolocation.getCurrentPosition(be=>{console.log("GPS location acquired"),ye({lat:be.coords.latitude,lng:be.coords.longitude})},be=>{console.warn("Geolocation failed:",be.message),ye(null)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5})}))();if(pe)U=pe,g(pe),O(Md(pe.lat,pe.lng)),console.log("GPS location acquired:",pe);else{const ye=Ws["cape-cod-ma"];U=ye,g(ye),O(`${ye.name} (Default)`)}}U?await st(l.id,U):(console.warn("No location available, loading data without location filter"),await st(l.id,null))}catch(H){console.error("Failed to initialize app:",H);const U=Ws["cape-cod-ma"];g(U),O(`${U.name} (Default)`);try{await st(l.id,U)}catch(J){console.error("Failed to load data with fallback location:",J),e([]),n([]),i([])}}})();const Z=()=>R(!0),B=()=>R(!1);return window.addEventListener("online",Z),window.addEventListener("offline",B),()=>{window.removeEventListener("online",Z),window.removeEventListener("offline",B)}},[l]),Y.useEffect(()=>{l&&r&&t&&Xr()},[r,t,l,s]),Y.useEffect(()=>{b!==10&&Wa(_,b)},[b,_]),Y.useEffect(()=>{const $=()=>{if(N==="coastwide")return;const Z=window.pageYOffset||document.documentElement.scrollTop,B=document.documentElement.scrollHeight,H=window.innerHeight;Z+H>=B-1e3&&!dt&&(ft(!0),setTimeout(()=>{Tt(U=>U+10),ft(!1)},500))};return window.addEventListener("scroll",$),()=>window.removeEventListener("scroll",$)},[N,dt]),Y.useEffect(()=>{Tt(20)},[N]);const Yr=async($,Z)=>{try{const B=await Dd($,Z);h(B),D(!1)}catch(B){console.error("Failed to set username:",B)}},Xr=()=>{if(!l||!r||!t)return;const $=r.filter(B=>B.authorId===l.id),Z=t.filter(B=>B.authorId===l.id);gn({posts:$,comments:Z})},Zr=async $=>{$?(g($),I($),O($.name),Wa($,b)):"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(Z=>{const B={lat:Z.coords.latitude,lng:Z.coords.longitude};g(B),I(null);const H=Md(B.lat,B.lng);O(H),Wa(null,b)},()=>{console.error("Failed to get current location"),I(null)})},st=async($,Z=null)=>{var B;try{const H=Z||f,U=b*1.609344,J=await ur.getPosts(H,U,yn,N),pe=J.map(he=>he.id),ye=await ur.getUserVotes($,pe),be=Object.entries(ye).map(([he,Xe])=>({postId:he,userId:$,type:Xe})),He=[];for(const he of J)if(he.commentsCount>0)try{const Xe=await ur.getComments(he.id);He.push(...Xe)}catch(Xe){console.warn(`Failed to load comments for post ${he.id}:`,Xe)}console.log(`Loaded ${(J==null?void 0:J.length)||0} posts, ${(He==null?void 0:He.length)||0} comments, ${(be==null?void 0:be.length)||0} votes`),console.log("Sample post vote counts:",(B=J==null?void 0:J.slice(0,3))==null?void 0:B.map(he=>({id:he.id,upvotes:he.upvotes,downvotes:he.downvotes,score:he.score}))),e(J||[]),n(He||[]),i(be||[]),ma(J&&J.length>=yn)}catch(H){console.error("Failed to load data:",H),e([]),n([]),i([])}},di=()=>{if(N==="coastwide")return r.map(U=>{var J,pe,ye,be,He,he,Xe,vt;return{...U,location:{...U.location,distance:f!=null&&f.lat&&(f!=null&&f.lng)&&((J=U.location)!=null&&J.lat)&&((pe=U.location)!=null&&pe.lng)?Math.round(Tr(f.lat,f.lng,U.location.lat,U.location.lng)*10)/10:0,nearestCity:((ye=U.location)==null?void 0:ye.nearestCity)||((be=U.location)!=null&&be.lat&&((He=U.location)!=null&&He.lng)?qi(U.location.lat,U.location.lng):"Unknown Location"),name:((he=U.location)==null?void 0:he.nearestCity)||((Xe=U.location)!=null&&Xe.lat&&((vt=U.location)!=null&&vt.lng)?qi(U.location.lat,U.location.lng):"Unknown Location")}}}).filter(U=>{var J;return((J=U.location)==null?void 0:J.lng)&&U.location.lng>-82&&U.location.lng<-66}).sort((U,J)=>{const pe=t.filter(vt=>vt.postId===U.id).length,ye=t.filter(vt=>vt.postId===J.id).length,be=(Date.now()-new Date(U.timestamp))/(1e3*60*60),He=(Date.now()-new Date(J.timestamp))/(1e3*60*60),he=U.score+pe*3-be*.05;return J.score+ye*3-He*.05-he}).slice(0,3);if(!f)return r.slice(0,yn);const $=_||f;let Z=r.filter(B=>{var H,U;return(H=B.location)!=null&&H.lat&&((U=B.location)!=null&&U.lng)&&($!=null&&$.lat)&&($!=null&&$.lng)?Tr($.lat,$.lng,B.location.lat,B.location.lng)<=b:!0});return Z=Z.map(B=>{var H,U,J,pe,ye;return{...B,location:{...B.location,distance:$!=null&&$.lat&&($!=null&&$.lng)&&((H=B.location)!=null&&H.lat)&&((U=B.location)!=null&&U.lng)?Math.round(Tr($.lat,$.lng,B.location.lat,B.location.lng)*10)/10:null,nearestCity:((J=B.location)==null?void 0:J.nearestCity)||((pe=B.location)!=null&&pe.lat&&((ye=B.location)!=null&&ye.lng)?qi(B.location.lat,B.location.lng):"Unknown Location")}}}),N==="hot"?Z.sort((B,H)=>{const U=t.filter(he=>he.postId===B.id).length,J=t.filter(he=>he.postId===H.id).length,pe=(Date.now()-new Date(B.timestamp))/(1e3*60*60),ye=(Date.now()-new Date(H.timestamp))/(1e3*60*60),be=B.score+U*2-pe*.1;return H.score+J*2-ye*.1-be}):Z.sort((B,H)=>new Date(H.timestamp)-new Date(B.timestamp)),Z.slice(0,yn)},fi=async()=>{if(!o.trim()||!l||!f)return;const $=kd(da,ji.POST_COOLDOWN,hi,ji.MAX_POSTS_PER_HOUR,36e5);if(!$.allowed){alert(`Please wait ${$.remainingTime} seconds before posting again.`);return}const Z=o0(o.trim());if(!Z.allowed){alert(`Post blocked: ${Z.issues.join(", ")}`);return}const B={lat:f.lat,lng:f.lng,nearestCity:qi(f.lat,f.lng)};try{await ur.createPost(o.trim(),B,l),await st(l.id,f),c(""),pn(Date.now()),fa(H=>H+1)}catch(H){console.error("Failed to create post:",H),alert("Failed to create post. Please try again.")}},ga=async($,Z)=>{if(!l)return;const B=kd(_n,ji.VOTE_COOLDOWN,ht,ji.MAX_VOTES_PER_MINUTE,6e4);if(!B.allowed){console.log(`Vote rate limited: ${B.remainingTime}s remaining`);return}try{const H=Z==="up"?"upvote":"downvote";console.log(`Casting ${H} for post ${$}`),await ur.castVote($,l.id,H),console.log("Vote cast successfully, waiting before refresh..."),await new Promise(U=>setTimeout(U,500)),await st(l.id,f),console.log("Data refresh completed"),Jr(Date.now()),Pe(U=>U+1)}catch(H){console.error("Failed to vote:",H)}},mi=async($,Z)=>{if(l)try{await ur.createComment($,Z,l),await st(l.id,f)}catch(B){console.error("Failed to comment:",B)}},gi=$=>{console.log("Post reported:",$)},Ft=di();return x?w.jsx(c0,{onUsernameSet:Yr}):w.jsxs("div",{className:"min-h-screen bg-gray-50 terminal-text overflow-x-hidden",children:[w.jsx(l0,{isOpen:T,onClose:()=>v(!1),user:l,userStats:rt}),w.jsx(u0,{isOpen:te,onClose:()=>E(!1),onLocationSet:Zr,currentLocation:f}),w.jsx(h0,{isOpen:z,onClose:()=>se(!1),onSubmit:fi,newPostContent:o,setNewPostContent:c,isOnline:p}),w.jsx("button",{onClick:()=>se(!0),className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 flex items-center justify-center text-xl sm:text-2xl z-40",style:{maxWidth:"calc(100vw - 2rem)"},title:"Create new post",children:"+"}),w.jsxs("div",{className:"max-w-2xl mx-auto px-2 sm:px-0",children:[w.jsx("div",{className:"terminal-header sticky top-0 z-40 p-3 sm:p-4",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-white tracking-wider",children:"RIPRAP"}),w.jsx("div",{className:"hidden sm:block",children:w.jsx("div",{className:"text-xs",children:"Share the Shore, Spill the Lore"})})]}),w.jsx("div",{className:"flex items-center space-x-1 sm:space-x-2",children:w.jsx("button",{onClick:()=>v(!0),className:"flex items-center space-x-1 text-xs sm:text-sm font-bold px-3 py-2 bg-white border-2 border-navy-600 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-navy-300 shadow-sm",style:{color:((es=l==null?void 0:l.color)==null?void 0:es.value)||"#1e3a8a"},children:w.jsx("span",{children:l==null?void 0:l.screenName})})})]})}),w.jsxs("div",{className:"p-3 sm:p-4 space-y-3 sm:space-y-4",children:[w.jsx("div",{className:"p-3 terminal-card",children:w.jsxs("div",{className:"space-y-3",children:[w.jsxs("button",{onClick:()=>E(!0),className:"w-full text-left hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-300 rounded p-2",children:[w.jsx("div",{className:"text-sm font-bold terminal-text mb-1",children:"📍 Local Area:"}),w.jsx("div",{className:"text-xs terminal-accent",children:j}),w.jsx("div",{className:"text-xs text-navy-600 mt-1",children:"Click to change location"})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs("label",{className:"text-sm font-bold terminal-text block",children:["Search Radius: ",b," miles"]}),w.jsx("input",{type:"range",min:"5",max:"100",step:"5",value:b,onChange:$=>y(parseInt($.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-navy"}),w.jsxs("div",{className:"flex justify-between text-xs terminal-accent",children:[w.jsx("span",{children:"5 mi"}),w.jsxs("span",{children:["Show posts within ",b," miles"]}),w.jsx("span",{children:"100 mi"})]})]})]})}),w.jsxs("div",{className:"terminal-card p-3",children:[w.jsx("div",{className:"text-sm font-bold terminal-text mb-2",children:"Sort by:"}),w.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[w.jsx("button",{onClick:()=>M("hot"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="hot"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"🔥 Hot"}),w.jsx("button",{onClick:()=>M("new"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="new"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"⭐ New"}),w.jsx("button",{onClick:()=>M("coastwide"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="coastwide"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"🌊 Coastwide"})]}),N==="coastwide"&&w.jsx("div",{className:"text-xs terminal-accent mt-2",children:"Top 3 posts from across the East Coast"})]})]}),w.jsx("div",{className:"p-4",children:Ft.length===0?w.jsxs("div",{className:"p-8 text-center",children:[w.jsx("div",{className:"text-4xl mb-4",children:"🎣"}),w.jsx("div",{className:"text-sm font-bold terminal-text mb-2",children:N==="coastwide"?"No trending posts found":"No posts in your area"}),w.jsx("div",{className:"text-xs terminal-accent",children:N==="coastwide"?"Check back later for trending discussions!":"Be the first to share what's happening on the water!"})]}):w.jsxs(w.Fragment,{children:[Ft.map(($,Z)=>w.jsxs("div",{children:[w.jsx(d0,{post:$,onVote:ga,onComment:mi,onReport:gi,userVotes:s,comments:t,showLocation:N==="coastwide"}),N==="coastwide"&&Z<Ft.length-1&&w.jsx("div",{className:"border-t-2 border-navy-300 my-4"})]},$.id)),(dt||!Yn&&Ft.length>0)&&N!=="coastwide"&&w.jsx("div",{className:"text-center py-6",children:w.jsxs("div",{className:"inline-flex items-center space-x-2",children:[w.jsx("div",{className:`text-2xl ${dt?"animate-spin":""}`,children:"⚓"}),dt&&w.jsx("span",{className:"text-sm terminal-accent font-mono",children:"Loading more posts..."})]})})]})}),w.jsxs("div",{className:"p-4 text-center text-xs terminal-accent bg-gray-100 border-t-2 border-navy-700",children:[w.jsx("div",{children:"🎣 Share the Shore, Spill the Lore"}),w.jsx("div",{children:"Anonymous • Location-based • Your Local Fishing and Boating Community"})]})]})]})},m0=()=>w.jsx(n0,{children:w.jsx(f0,{})});window.addEventListener("unhandledrejection",function(r){var e,t,n,s,i,o;if(console.error("Unhandled promise rejection:",r.reason),(t=(e=r.reason)==null?void 0:e.code)!=null&&t.startsWith("auth/")||(s=(n=r.reason)==null?void 0:n.code)!=null&&s.startsWith("firestore/")||(o=(i=r.reason)==null?void 0:i.message)!=null&&o.includes("Firebase")){console.warn("Firebase operation failed, app will continue in offline mode"),r.preventDefault();return}console.error("Critical unhandled rejection:",r.reason)});window.addEventListener("error",function(r){var e;console.error("Global JavaScript error:",r.error),(e=r.error)!=null&&e.stack&&console.error("Stack trace:",r.error.stack)});Qa.createRoot(document.getElementById("root")).render(w.jsx(Od.StrictMode,{children:w.jsx(m0,{})}));
//# sourceMappingURL=index-fb208c13.js.map
