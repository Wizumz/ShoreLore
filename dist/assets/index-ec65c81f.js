import{r as J,a as Rp,R as Md}from"./vendor-b1791c80.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Od={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=J,Cp=Symbol.for("react.element"),xp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Dp=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Ld(r,e,t){var n,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)Np.call(e,n)&&!Vp.hasOwnProperty(n)&&(s[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:Cp,type:r,key:i,ref:o,props:s,_owner:Dp.current}}Do.Fragment=xp;Do.jsx=Ld;Do.jsxs=Ld;Od.exports=Do;var T=Od.exports,Ka={},Nu=Rp;Ka.createRoot=Nu.createRoot,Ka.hydrateRoot=Nu.hydrateRoot;const kp=()=>{};/**
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
 */const Fd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let p=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(p=64)),n.push(t[f],t[g],t[p],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Fd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Mp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new Op;const p=i<<2|c>>4;if(n.push(p),h!==64){const R=c<<4&240|h>>2;if(n.push(R),g!==64){const x=h<<6&192|g;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lp=function(r){const e=Fd(r);return Ud.encodeByteArray(e,!0)},no=function(r){return Lp(r).replace(/\./g,"")},Bd=function(r){try{return Ud.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fp=()=>jd().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Bp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Bd(r[1]);return e&&JSON.parse(e)},Vo=()=>{try{return kp()||Fp()||Up()||Bp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qd=r=>{var e,t;return(t=(e=Vo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},jp=r=>{const e=qd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},$d=()=>{var r;return(r=Vo())==null?void 0:r.config},zd=r=>{var e;return(e=Vo())==null?void 0:e[`_${r}`]};/**
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
 */function Ur(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gd(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function $p(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r},c="";return[no(JSON.stringify(t)),no(JSON.stringify(o)),c].join(".")}const vs={};function zp(){const r={prod:[],emulator:[]};for(const e of Object.keys(vs))vs[e]?r.emulator.push(e):r.prod.push(e);return r}function Gp(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Du=!1;function Kd(r,e){if(typeof window>"u"||typeof document>"u"||!Ur(window.location.host)||vs[r]===e||vs[r]||Du)return;vs[r]=e;function t(p){return`__firebase__banner__${p}`}const n="__firebase__banner",i=zp().prod.length>0;function o(){const p=document.getElementById(n);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,R){p.setAttribute("width","24"),p.setAttribute("id",R),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Du=!0,o()},p}function f(p,R){p.setAttribute("id",R),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function g(){const p=Gp(n),R=t("text"),x=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),M=t("preprendIcon"),U=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const O=p.element;c(O),f(N,D);const G=h();l(U,M),O.append(U,x,N,G),document.body.appendChild(O)}i?(x.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Hd(){var e;const r=(e=Vo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jp(){const r=Re();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Wd(){return!Hd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qd(){return!Hd()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xp="FirebaseError";class xt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Xp,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zp(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xt(s,c,n)}}function Zp(r,e){return r.replace(e_,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const e_=/\{\$([^}]+)}/g;function t_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Vu(i)&&Vu(o)){if(!Mn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Vu(r){return r!==null&&typeof r=="object"}/**
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
 */function Qs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function n_(r,e){const t=new r_(r,e);return t.subscribe.bind(t)}class r_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");s_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ca),s.error===void 0&&(s.error=Ca),s.complete===void 0&&(s.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ca(){}/**
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
 */function $e(r){return r&&r._delegate?r._delegate:r}class On{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class i_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a_(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:o_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o_(r){return r===Tn?void 0:r}function a_(r){return r.instantiationMode==="EAGER"}/**
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
 */var ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ee||(ee={}));const l_={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},u_=ee.INFO,h_={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},d_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=h_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=u_,this._logHandler=d_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const f_=(r,e)=>e.some(t=>r instanceof t);let ku,Mu;function m_(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g_(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yd=new WeakMap,Ha=new WeakMap,Xd=new WeakMap,xa=new WeakMap,Cc=new WeakMap;function p_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Jt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yd.set(t,r)}).catch(()=>{}),Cc.set(e,r),e}function __(r){if(Ha.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ha.set(r,e)}let Wa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ha.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Xd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function y_(r){Wa=r(Wa)}function I_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Na(this),e,...t);return Xd.set(n,e.sort?e.sort():[e]),Jt(n)}:g_().includes(r)?function(...e){return r.apply(Na(this),e),Jt(Yd.get(this))}:function(...e){return Jt(r.apply(Na(this),e))}}function E_(r){return typeof r=="function"?I_(r):(r instanceof IDBTransaction&&__(r),f_(r,m_())?new Proxy(r,Wa):r)}function Jt(r){if(r instanceof IDBRequest)return p_(r);if(xa.has(r))return xa.get(r);const e=E_(r);return e!==r&&(xa.set(r,e),Cc.set(e,r)),e}const Na=r=>Cc.get(r);function T_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Jt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const w_=["get","getKey","getAll","getAllKeys","count"],v_=["put","add","delete","clear"],Da=new Map;function Ou(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=v_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||w_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Da.set(e,i),i}y_(r=>({...r,get:(e,t,n)=>Ou(e,t)||r.get(e,t,n),has:(e,t)=>!!Ou(e,t)||r.has(e,t)}));/**
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
 */class A_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(b_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function b_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",Lu="0.14.1";/**
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
 */const bt=new Pc("@firebase/app"),S_="@firebase/app-compat",R_="@firebase/analytics-compat",P_="@firebase/analytics",C_="@firebase/app-check-compat",x_="@firebase/app-check",N_="@firebase/auth",D_="@firebase/auth-compat",V_="@firebase/database",k_="@firebase/data-connect",M_="@firebase/database-compat",O_="@firebase/functions",L_="@firebase/functions-compat",F_="@firebase/installations",U_="@firebase/installations-compat",B_="@firebase/messaging",j_="@firebase/messaging-compat",q_="@firebase/performance",$_="@firebase/performance-compat",z_="@firebase/remote-config",G_="@firebase/remote-config-compat",K_="@firebase/storage",H_="@firebase/storage-compat",W_="@firebase/firestore",Q_="@firebase/ai",J_="@firebase/firestore-compat",Y_="firebase",X_="12.1.0";/**
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
 */const Ja="[DEFAULT]",Z_={[Qa]:"fire-core",[S_]:"fire-core-compat",[P_]:"fire-analytics",[R_]:"fire-analytics-compat",[x_]:"fire-app-check",[C_]:"fire-app-check-compat",[N_]:"fire-auth",[D_]:"fire-auth-compat",[V_]:"fire-rtdb",[k_]:"fire-data-connect",[M_]:"fire-rtdb-compat",[O_]:"fire-fn",[L_]:"fire-fn-compat",[F_]:"fire-iid",[U_]:"fire-iid-compat",[B_]:"fire-fcm",[j_]:"fire-fcm-compat",[q_]:"fire-perf",[$_]:"fire-perf-compat",[z_]:"fire-rc",[G_]:"fire-rc-compat",[K_]:"fire-gcs",[H_]:"fire-gcs-compat",[W_]:"fire-fst",[J_]:"fire-fst-compat",[Q_]:"fire-vertex","fire-js":"fire-js",[Y_]:"fire-js-all"};/**
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
 */const ro=new Map,ey=new Map,Ya=new Map;function Fu(r,e){try{r.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Tr(r){const e=r.name;if(Ya.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Ya.set(e,r);for(const t of ro.values())Fu(t,r);for(const t of ey.values())Fu(t,r);return!0}function xc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ot(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Ws("app","Firebase",ty);/**
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
 */class ny{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=X_;function Zd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Ja,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(t||(t=$d()),!t)throw Yt.create("no-options");const i=ro.get(s);if(i){if(Mn(t,i.options)&&Mn(n,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new c_(s);for(const l of Ya.values())o.addComponent(l);const c=new ny(t,n,o);return ro.set(s,c),c}function ef(r=Ja){const e=ro.get(r);if(!e&&r===Ja&&$d())return Zd();if(!e)throw Yt.create("no-app",{appName:r});return e}function Xt(r,e,t){let n=Z_[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}Tr(new On(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const ry="firebase-heartbeat-database",sy=1,Vs="firebase-heartbeat-store";let Va=null;function tf(){return Va||(Va=T_(ry,sy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Vs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Yt.create("idb-open",{originalErrorMessage:r.message})})),Va}async function iy(r){try{const t=(await tf()).transaction(Vs),n=await t.objectStore(Vs).get(nf(r));return await t.done,n}catch(e){if(e instanceof xt)bt.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function Uu(r,e){try{const n=(await tf()).transaction(Vs,"readwrite");await n.objectStore(Vs).put(e,nf(r)),await n.done}catch(t){if(t instanceof xt)bt.warn(t.message);else{const n=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}function nf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const oy=1024,ay=30;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ay){const o=hy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){bt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bu(),{heartbeatsToSend:n,unsentEntries:s}=ly(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function ly(r,e=oy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ju(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class uy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Uu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ju(r){return no(JSON.stringify({version:2,heartbeats:r})).length}function hy(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function dy(r){Tr(new On("platform-logger",e=>new A_(e),"PRIVATE")),Tr(new On("heartbeat",e=>new cy(e),"PRIVATE")),Xt(Qa,Lu,r),Xt(Qa,Lu,"esm2020"),Xt("fire-js","")}dy("");var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,rf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(w,v,b){for(var y=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)y[nt-2]=arguments[nt];return _.prototype[v].apply(w,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);var w=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)w[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;16>v;++v)w[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],v=E.g[2];var b=E.g[3],y=_+(b^I&(v^b))+w[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+w[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+w[2]+606105819&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+w[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+w[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+w[6]+2821735955&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+w[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+w[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+w[10]+4294925233&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+w[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(b^I&(v^b))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(v^_&(I^v))+w[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=v+(I^b&(_^I))+w[14]+2792965006&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(_^v&(b^_))+w[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^b&(I^v))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+w[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+w[11]+643717713&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+w[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+w[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+w[15]+3634488961&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+w[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+w[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+w[3]+4107603335&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+w[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^b&(I^v))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(_^I))+w[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(b^_))+w[7]+1735328473&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(v^b))+w[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^b)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+w[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+w[11]+1839030562&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+w[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+w[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+w[7]+4139469664&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+w[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+w[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+w[3]+3572445317&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+w[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^b)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^v)+w[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=v+(b^_^I)+w[15]+530742520&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^_)+w[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~b))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+w[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+w[14]+2878612391&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+w[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+w[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+w[10]+4293915773&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+w[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+w[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+w[6]+2734768916&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+w[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~b))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~v))+w[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=v+(_^(b|~I))+w[2]+718787259&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,w=this.B,v=this.h,b=0;b<_;){if(v==0)for(;b<=I;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<_;)if(w[v++]=E.charCodeAt(b++),v==this.blockSize){s(this,w),v=0;break}}else for(;b<_;)if(w[v++]=E[b++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var w=0;32>w;w+=8)E[I++]=this.g[_]>>>w&255;return E};function i(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],w=!0,v=E.length-1;0<=v;v--){var b=E[v]|0;w&&b==_||(I[v]=b,w=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return N(h(-E));for(var _=[],I=1,w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),w=g,v=0;v<E.length;v+=8){var b=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+b),_);8>b?(b=h(Math.pow(_,b)),w=w.j(b).add(h(y))):(w=w.j(I),w=w.add(h(y)))}return w}var g=l(0),p=l(1),R=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-N(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var w=this.i(I);E+=(0<=w?w:4294967296+w)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(D(this))return"-"+N(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,w="";;){var v=G(I,_).g;I=M(I,v.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,x(I))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=M(this,E),D(E)?-1:x(E)?0:1};function N(E){for(var _=E.g.length,I=[],w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(p)}r.abs=function(){return D(this)?N(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0,v=0;v<=_;v++){var b=w+(this.i(v)&65535)+(E.i(v)&65535),y=(b>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);w=y>>>16,b&=65535,y&=65535,I[v]=y<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function M(E,_){return E.add(N(_))}r.j=function(E){if(x(this)||x(E))return g;if(D(this))return D(E)?N(this).j(N(E)):N(N(this).j(E));if(D(E))return N(this.j(N(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(var v=0;v<E.g.length;v++){var b=this.i(w)>>>16,y=this.i(w)&65535,nt=E.i(v)>>>16,dn=E.i(v)&65535;I[2*w+2*v]+=y*dn,U(I,2*w+2*v),I[2*w+2*v+1]+=b*dn,U(I,2*w+2*v+1),I[2*w+2*v+1]+=y*nt,U(I,2*w+2*v+1),I[2*w+2*v+2]+=b*nt,U(I,2*w+2*v+2)}for(w=0;w<_;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=_;w<2*_;w++)I[w]=0;return new o(I,0)};function U(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function O(E,_){this.g=E,this.h=_}function G(E,_){if(x(_))throw Error("division by zero");if(x(E))return new O(g,g);if(D(E))return _=G(N(E),_),new O(N(_.g),N(_.h));if(D(_))return _=G(E,N(_)),new O(N(_.g),_.h);if(30<E.g.length){if(D(E)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,w=_;0>=w.l(E);)I=ne(I),w=ne(w);var v=Z(I,1),b=Z(w,1);for(w=Z(w,2),I=Z(I,2);!x(w);){var y=b.add(w);0>=y.l(E)&&(v=v.add(I),b=y),w=Z(w,1),I=Z(I,1)}return _=M(E,v.j(_)),new O(v,_)}for(v=g;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(I),y=b.j(_);D(y)||0<y.l(E);)I-=w,b=h(I),y=b.j(_);x(b)&&(b=p),v=v.add(b),E=M(E,y)}return new O(v,E)}r.A=function(E){return G(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function ne(E){for(var _=E.g.length+1,I=[],w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function Z(E,_){var I=_>>5;_%=32;for(var w=E.g.length-I,v=[],b=0;b<w;b++)v[b]=0<_?E.i(b+I)>>>_|E.i(b+I+1)<<32-_:E.i(b+I);return new o(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,rf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Zt=o}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sf,_s,of,Bi,Xa,af,cf,lf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function g(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function p(a,u,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,p.apply(null,arguments)}function R(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,P){for(var L=Array(arguments.length-2),de=2;de<arguments.length;de++)L[de-2]=arguments[de];return u.prototype[A].apply(m,L)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,P=m.length||0;a.length=A+P;for(let L=0;L<P;L++)a[A+L]=m[L]}else a.push(m)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function G(a){return G[" "](a),a}G[" "]=function(){};var ne=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function Z(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function v(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Wr;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class nt{constructor(){this.h=this.g=null}add(u,d){const m=dn.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var dn=new M(()=>new la,a=>a.reset());class la{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,mn=!1,Wr=new nt,ui=()=>{const a=c.Promise.resolve(void 0);fn=()=>{a.then(ua)}};var ua=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var u=dn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}mn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Wn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function kt(a,u){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{G(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Qn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&kt.aa.h.call(this)}}x(kt,Ce);var Qn={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),ha=0;function da(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++ha,this.da=this.fa=!1}function Jn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rt(a){this.src=a,this.g={},this.h=0}rt.prototype.add=function(a,u,d,m,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var L=Jr(a,u,m,A);return-1<L?(u=a[L],d||(u.fa=!1)):(u=new da(u,this.src,P,!!m,A),u.fa=d,a.push(u)),u};function Qr(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Jn(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Jr(a,u,d,m){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return A}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),Xr={};function hi(a,u,d,m,A){if(m&&m.once)return $(a,u,d,m,A);if(Array.isArray(u)){for(var P=0;P<u.length;P++)hi(a,u[P],d,m,A);return null}return d=_e(d),a&&a[Mt]?a.K(u,d,h(m)?!!m.capture:!!m,A):gn(a,u,d,!1,m,A)}function gn(a,u,d,m,A,P){if(!u)throw Error("Invalid event type");var L=h(A)?!!A.capture:!!A,de=me(a);if(de||(a[Yr]=de=new rt(a)),d=de.add(u,d,m,L,P),d.proxy)return d;if(m=di(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Wn||(A=L),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Y(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function di(){function a(d){return u.call(a.src,a.listener,d)}const u=q;return a}function $(a,u,d,m,A){if(Array.isArray(u)){for(var P=0;P<u.length;P++)$(a,u[P],d,m,A);return null}return d=_e(d),a&&a[Mt]?a.L(u,d,h(m)?!!m.capture:!!m,A):gn(a,u,d,!0,m,A)}function se(a,u,d,m,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)se(a,u[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=_e(d),a&&a[Mt]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=Jr(P,d,m,A),-1<d&&(Jn(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=me(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Jr(u,d,m,A)),(d=-1<a?u[a]:null)&&B(d))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Mt])Qr(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Y(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=me(u))?(Qr(d,a),d.h==0&&(d.src=null,u[Yr]=null)):Jn(a)}}}function Y(a){return a in Xr?Xr[a]:Xr[a]="on"+a}function q(a,u){if(a.da)a=!0;else{u=new kt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&B(a),a=d.call(m,u)}return a}function me(a){return a=a[Yr],a instanceof rt?a:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(a){return typeof a=="function"?a:(a[Ie]||(a[Ie]=function(u){return a.handleEvent(u)}),a[Ie])}function oe(){ut.call(this),this.i=new rt(this),this.M=this,this.F=null}x(oe,ut),oe.prototype[Mt]=!0,oe.prototype.removeEventListener=function(a,u,d,m){se(this,a,u,d,m)};function ce(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ce(u,a);else if(u instanceof Ce)u.target=u.target||a;else{var A=u;u=new Ce(m,a),w(u,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var L=u.g=d[P];A=Se(L,m,!0,u)&&A}if(L=u.g=a,A=Se(L,m,!0,u)&&A,A=Se(L,m,!1,u)&&A,d)for(P=0;P<d.length;P++)L=u.g=d[P],A=Se(L,m,!1,u)&&A}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Jn(d[m]);delete a.g[u],a.h--}}this.F=null},oe.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},oe.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Se(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,P=0;P<u.length;++P){var L=u[P];if(L&&!L.da&&L.capture==d){var de=L.listener,Ne=L.ha||L.src;L.fa&&Qr(a.i,L),A=de.call(Ne,m)!==!1&&A}}return A&&!m.defaultPrevented}function Yn(a,u,d){if(typeof a=="function")d&&(a=p(a,d));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function It(a){a.g=Yn(()=>{a.g=null,a.i&&(a.i=!1,It(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class tp extends ut{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(a){ut.call(this),this.h=a,this.g={}}x(Zr,ut);var Fl=[];function Ul(a){Z(a.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},a),a.g={}}Zr.prototype.N=function(){Zr.aa.N.call(this),Ul(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=c.JSON.stringify,np=c.JSON.parse,rp=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ma(){}ma.prototype.h=null;function Bl(a){return a.h||(a.h=a.i())}function jl(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ga(){Ce.call(this,"d")}x(ga,Ce);function pa(){Ce.call(this,"c")}x(pa,Ce);var pn={},ql=null;function fi(){return ql=ql||new oe}pn.La="serverreachability";function $l(a){Ce.call(this,pn.La,a)}x($l,Ce);function ts(a){const u=fi();ce(u,new $l(u))}pn.STAT_EVENT="statevent";function zl(a,u){Ce.call(this,pn.STAT_EVENT,a),this.stat=u}x(zl,Ce);function ze(a){const u=fi();ce(u,new zl(u,a))}pn.Ma="timingevent";function Gl(a,u){Ce.call(this,pn.Ma,a),this.size=u}x(Gl,Ce);function ns(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function sp(a,u,d,m,A,P){a.info(function(){if(a.g)if(P)for(var L="",de=P.split("&"),Ne=0;Ne<de.length;Ne++){var ie=de[Ne].split("=");if(1<ie.length){var Oe=ie[0];ie=ie[1];var Le=Oe.split("_");L=2<=Le.length&&Le[1]=="type"?L+(Oe+"="+ie+"&"):L+(Oe+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+L})}function ip(a,u,d,m,A,P,L){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+L})}function Xn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ap(a,d)+(m?" "+m:"")})}function op(a,u){a.info(function(){return"TIMEOUT: "+u})}rs.prototype.info=function(){};function ap(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return fa(d)}catch{return u}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_a;function gi(){}x(gi,ma),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},_a=new gi;function Ot(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var Wl={},ya={};function Ia(a,u,d){a.L=1,a.v=Ii(Et(u)),a.m=d,a.P=!0,Ql(a,null)}function Ql(a,u){a.F=Date.now(),pi(a),a.A=Et(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),lu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Hl,a.g=Ru(a.j,d?u:null,!a.m),0<a.O&&(a.M=new tp(p(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Fl[0]=A.toString()),A=Fl);for(var P=0;P<A.length;P++){var L=hi(d,A[P],m||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ts(),sp(a.i,a.u,a.A,a.l,a.R,a.m)}Ot.prototype.ca=function(a){a=a.target;const u=this.M;u&&Tt(a)==3?u.j():this.Y(a)},Ot.prototype.Y=function(a){try{if(a==this.g)e:{const Le=Tt(this.g);var u=this.g.Ba();const tr=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||Le!=4||u==7||(u==8||0>=tr?ts(3):ts(2)),Ea(this);var d=this.g.Z();this.X=d;t:if(Jl(this)){var m=pu(this.g);a="";var A=m.length,P=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),ss(this);var L="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,ip(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Ne=this.g;if((de=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(de)){var ie=de;break t}}ie=null}if(d=ie)Xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,d);else{this.o=!1,this.s=3,ze(12),_n(this),ss(this);break e}}if(this.P){d=!0;let st;for(;!this.J&&this.C<L.length;)if(st=cp(this,L),st==ya){Le==4&&(this.s=4,ze(14),d=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==Wl){this.s=4,ze(15),Xn(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else Xn(this.i,this.l,st,null),Ta(this,st);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||L.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)Xn(this.i,this.l,L,"[Invalid Chunked Response]"),_n(this),ss(this);else if(0<L.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Ra(Oe),Oe.M=!0,ze(11))}}else Xn(this.i,this.l,L,null),Ta(this,L);Le==4&&_n(this),this.o&&!this.J&&(Le==4?vu(this.j,this):(this.o=!1,pi(this)))}else bp(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),_n(this),ss(this)}}}catch{}finally{}};function Jl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cp(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?ya:(d=Number(u.substring(d,m)),isNaN(d)?Wl:(m+=1,m+d>u.length?ya:(u=u.slice(m,m+d),a.C=m+d,u)))}Ot.prototype.cancel=function(){this.J=!0,_n(this)};function pi(a){a.S=Date.now()+a.I,Yl(a,a.I)}function Yl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ns(p(a.ba,a),u)}function Ea(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ot.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(op(this.i,this.A),this.L!=2&&(ts(),ze(17)),_n(this),this.s=2,ss(this)):Yl(this,this.S-a)};function ss(a){a.j.G==0||a.J||vu(a.j,a)}function _n(a){Ea(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ul(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ta(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||wa(d.h,a))){if(!a.K&&wa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)bi(d),vi(d);else break e;Sa(d),ze(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=ns(p(d.Za,d),6e3));if(1>=eu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else In(d,11)}else if((a.K||d.g==a)&&bi(d),!U(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let ie=A[u];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Oe=ie[3];Oe!=null&&(d.la=Oe,d.j.info("VER="+d.la));const Le=ie[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const tr=ie[5];tr!=null&&typeof tr=="number"&&0<tr&&(m=1.5*tr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const st=a.g;if(st){const Ri=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var P=m.h;P.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(va(P,P.h),P.h=null))}if(m.D){const Pa=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(m.ya=Pa,fe(m.I,m.D,Pa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var L=a;if(m.qa=Su(m,m.J?m.ia:null,m.W),L.K){tu(m.h,L);var de=L,Ne=m.L;Ne&&(de.I=Ne),de.B&&(Ea(de),pi(de)),m.g=L}else Tu(m);0<d.i.length&&Ai(d)}else ie[0]!="stop"&&ie[0]!="close"||In(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?In(d,7):ba(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}ts(4)}catch{}}var lp=class{constructor(a,u){this.g=a,this.map=u}};function Xl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eu(a){return a.h?1:a.g?a.g.size:0}function wa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function va(a,u){a.g?a.g.add(u):a.h=u}function tu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xl.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function up(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function hp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function ru(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=hp(a),m=up(a),A=m.length,P=0;P<A;P++)u.call(void 0,m[P],d&&d[P],a)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dp(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var P=a[d].substring(0,m);A=a[d].substring(m+1)}else P=a[d];u(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function yn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yn){this.h=a.h,_i(this,a.j),this.o=a.o,this.g=a.g,yi(this,a.s),this.l=a.l;var u=a.i,d=new as;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),iu(this,d),this.m=a.m}else a&&(u=String(a).match(su))?(this.h=!1,_i(this,u[1]||"",!0),this.o=is(u[2]||""),this.g=is(u[3]||"",!0),yi(this,u[4]),this.l=is(u[5]||"",!0),iu(this,u[6]||"",!0),this.m=is(u[7]||"")):(this.h=!1,this.i=new as(null,this.h))}yn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(os(u,ou,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(os(u,ou,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(os(d,d.charAt(0)=="/"?gp:mp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",os(d,_p)),a.join("")};function Et(a){return new yn(a)}function _i(a,u,d){a.j=d?is(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function yi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function iu(a,u,d){u instanceof as?(a.i=u,yp(a.i,a.h)):(d||(u=os(u,pp)),a.i=new as(u,a.h))}function fe(a,u,d){a.i.set(u,d)}function Ii(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function is(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,fp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ou=/[#\/\?@]/g,mp=/[#\?:]/g,gp=/[#\?]/g,pp=/[#\?@]/g,_p=/#/g;function as(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Lt(a){a.g||(a.g=new Map,a.h=0,a.i&&dp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=as.prototype,r.add=function(a,u){Lt(this),this.i=null,a=Zn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function au(a,u){Lt(a),u=Zn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function cu(a,u){return Lt(a),u=Zn(a,u),a.g.has(u)}r.forEach=function(a,u){Lt(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){Lt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let P=0;P<A.length;P++)d.push(u[m])}return d},r.V=function(a){Lt(this);let u=[];if(typeof a=="string")cu(this,a)&&(u=u.concat(this.g.get(Zn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Lt(this),this.i=null,a=Zn(this,a),cu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function lu(a,u,d){au(a,u),0<d.length&&(a.i=null,a.g.set(Zn(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),L=this.V(m);for(m=0;m<L.length;m++){var A=P;L[m]!==""&&(A+="="+encodeURIComponent(String(L[m]))),a.push(A)}}return this.i=a.join("&")};function Zn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function yp(a,u){u&&!a.j&&(Lt(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(au(this,m),lu(this,A,d))},a)),a.j=u}function Ip(a,u){const d=new rs;if(c.Image){const m=new Image;m.onload=R(Ft,d,"TestLoadImage: loaded",!0,u,m),m.onerror=R(Ft,d,"TestLoadImage: error",!1,u,m),m.onabort=R(Ft,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(Ft,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Ep(a,u){const d=new rs,m=new AbortController,A=setTimeout(()=>{m.abort(),Ft(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Ft(d,"TestPingServer: ok",!0,u):Ft(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Ft(d,"TestPingServer: error",!1,u)})}function Ft(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Tp(){this.g=new rp}function wp(a,u,d){const m=d||"";try{ru(a,function(A,P){let L=A;h(A)&&(L=fa(A)),u.push(m+P+"="+encodeURIComponent(L))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Ei(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Ei,ma),Ei.prototype.g=function(){return new Ti(this.l,this.j)},Ei.prototype.i=function(a){return function(){return a}}({});function Ti(a,u){oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ti,oe),r=Ti.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ls(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?cs(this):ls(this),this.readyState==3&&uu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,cs(this))},r.Qa=function(a){this.g&&(this.response=a,cs(this))},r.ga=function(){this.g&&cs(this)};function cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ls(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hu(a){let u="";return Z(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Aa(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=hu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,u,d))}function Ee(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ee,oe);var vp=/^https?$/i,Ap=["POST","PUT"];r=Ee.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_a.g(),this.v=this.o?Bl(this.o):Bl(_a),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){du(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ap,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of d)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){du(this,P)}};function du(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,fu(a),wi(a)}function fu(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),wi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),Ee.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?mu(this):this.bb())},r.bb=function(){mu(this)};function mu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tt(a)!=4||a.Z()!=2)){if(a.u&&Tt(a)==4)Yn(a.Ea,0,a);else if(ce(a,"readystatechange"),Tt(a)==4){a.h=!1;try{const L=a.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=L===0){var A=String(a.D).match(su)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!vp.test(A?A.toLowerCase():"")}d=m}if(d)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var P=2<Tt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",fu(a)}}finally{wi(a)}}}}function wi(a,u){if(a.g){gu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ce(a,"ready");try{d.onreadystatechange=m}catch{}}}function gu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Tt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),np(u)}};function pu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bp(a){const u={};a=(a.g&&2<=Tt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=v(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _u(a){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,a),this.cb=us("retryDelaySeedMs",1e4,a),this.Wa=us("forwardChannelMaxRetries",2,a),this.wa=us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xl(a&&a.concurrentRequestLimit),this.Da=new Tp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_u.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){ze(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Su(this,null,this.W),Ai(this)};function ba(a){if(yu(a),a.G==3){var u=a.U++,d=Et(a.I);if(fe(d,"SID",a.K),fe(d,"RID",u),fe(d,"TYPE","terminate"),hs(a,d),u=new Ot(a,a.j,u),u.L=2,u.v=Ii(Et(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ru(u.j,null),u.g.ea(u.v)),u.F=Date.now(),pi(u)}bu(a)}function vi(a){a.g&&(Ra(a),a.g.cancel(),a.g=null)}function yu(a){vi(a),a.u&&(c.clearTimeout(a.u),a.u=null),bi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ai(a){if(!Zl(a.h)&&!a.s){a.s=!0;var u=a.Ga;fn||ui(),mn||(fn(),mn=!0),Wr.add(u,a),a.B=0}}function Sp(a,u){return eu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ns(p(a.Ga,a,u),Au(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Ot(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Eu(this,A,u),d=Et(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),hs(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(hu(P)))+"&"+u:this.m&&Aa(d,this.m,P)),va(this.h,A),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",u),fe(d,"SID","null"),A.T=!0,Ia(A,d,null)):Ia(A,d,u),this.G=2}}else this.G==3&&(a?Iu(this,a):this.i.length==0||Zl(this.h)||Iu(this))};function Iu(a,u){var d;u?d=u.l:d=a.U++;const m=Et(a.I);fe(m,"SID",a.K),fe(m,"RID",d),fe(m,"AID",a.T),hs(a,m),a.m&&a.o&&Aa(m,a.m,a.o),d=new Ot(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Eu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),va(a.h,d),Ia(d,m,u)}function hs(a,u){a.H&&Z(a.H,function(d,m){fe(u,m,d)}),a.l&&ru({},function(d,m){fe(u,m,d)})}function Eu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?p(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const L=["count="+d];P==-1?0<d?(P=A[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let de=!0;for(let Ne=0;Ne<d;Ne++){let ie=A[Ne].g;const Oe=A[Ne].map;if(ie-=P,0>ie)P=Math.max(0,A[Ne].g-100),de=!1;else try{wp(Oe,L,"req"+ie+"_")}catch{m&&m(Oe)}}if(de){m=L.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Tu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;fn||ui(),mn||(fn(),mn=!0),Wr.add(u,a),a.v=0}}function Sa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ns(p(a.Fa,a),Au(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ns(p(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),vi(this),wu(this))};function Ra(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function wu(a){a.g=new Ot(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Et(a.qa);fe(u,"RID","rpc"),fe(u,"SID",a.K),fe(u,"AID",a.T),fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(u,"TO",a.ja),fe(u,"TYPE","xmlhttp"),hs(a,u),a.m&&a.o&&Aa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ii(Et(u)),d.m=null,d.P=!0,Ql(d,a)}r.Za=function(){this.C!=null&&(this.C=null,vi(this),Sa(this),ze(19))};function bi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function vu(a,u){var d=null;if(a.g==u){bi(a),Ra(a),a.g=null;var m=2}else if(wa(a.h,u))d=u.D,tu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=fi(),ce(m,new Gl(m,d)),Ai(a)}else Tu(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&Sp(a,u)||m==2&&Sa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:In(a,5);break;case 4:In(a,10);break;case 3:In(a,6);break;default:In(a,2)}}}function Au(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function In(a,u){if(a.j.info("Error code "+u),u==2){var d=p(a.fb,a),m=a.Xa;const A=!m;m=new yn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||_i(m,"https"),Ii(m),A?Ip(m.toString(),d):Ep(m.toString(),d)}else ze(2);a.G=0,a.l&&a.l.sa(u),bu(a),yu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function bu(a){if(a.G=0,a.ka=[],a.l){const u=nu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Su(a,u,d){var m=d instanceof yn?Et(d):new yn(d);if(m.g!="")u&&(m.g=u+"."+m.g),yi(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var P=new yn(null);m&&_i(P,m),u&&(P.g=u),A&&yi(P,A),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&fe(m,d,u),fe(m,"VER",a.la),hs(a,m),m}function Ru(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ee(new Ei({eb:d})):new Ee(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pu(){}r=Pu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Si(){}Si.prototype.g=function(a,u){return new We(a,u)};function We(a,u){oe.call(this),this.g=new _u(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new er(this)}x(We,oe),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){ba(this.g)},We.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=fa(a),a=d);u.i.push(new lp(u.Ya++,a)),u.G==3&&Ai(u)},We.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,We.aa.N.call(this)};function Cu(a){ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(Cu,ga);function xu(){pa.call(this),this.status=1}x(xu,pa);function er(a){this.g=a}x(er,Pu),er.prototype.ua=function(){ce(this.g,"a")},er.prototype.ta=function(a){ce(this.g,new Cu(a))},er.prototype.sa=function(a){ce(this.g,new xu)},er.prototype.ra=function(){ce(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,lf=function(){return new Si},cf=function(){return fi()},af=pn,Xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Bi=mi,Kl.COMPLETE="complete",of=Kl,jl.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",oe.prototype.listen=oe.prototype.K,_s=jl,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,sf=Ee}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});const $u="@firebase/firestore",zu="4.9.0";/**
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
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let jr="12.0.0";/**
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
 */const Ln=new Pc("@firebase/firestore");function lr(){return Ln.logLevel}function V(r,...e){if(Ln.logLevel<=ee.DEBUG){const t=e.map(Nc);Ln.debug(`Firestore (${jr}): ${r}`,...t)}}function Ge(r,...e){if(Ln.logLevel<=ee.ERROR){const t=e.map(Nc);Ln.error(`Firestore (${jr}): ${r}`,...t)}}function Fn(r,...e){if(Ln.logLevel<=ee.WARN){const t=e.map(Nc);Ln.warn(`Firestore (${jr}): ${r}`,...t)}}function Nc(r){if(typeof r=="string")return r;try{/**
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
 */function j(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,uf(r,n,t)}function uf(r,e,t){let n=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Ge(n),new Error(n)}function z(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||uf(e,s,n)}function W(r,e){return r}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class my{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gy{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){z(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{l:n}),new hf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class py{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=De.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _y{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new py(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){z(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Dc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Iy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function Q(r,e){return r<e?-1:r>e?1:0}function Za(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return ka(s)===ka(i)?Q(s,i):ka(s)?1:-1}return Q(r.length,e.length)}const Ey=55296,Ty=57343;function ka(r){const e=r.charCodeAt(0);return e>=Ey&&e<=Ty}function wr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function df(r){return r+"\0"}/**
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
 */const Ku="__name__";class ht{constructor(e,t,n){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&j(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const n=ht.isNumericId(e),s=ht.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?ht.extractNumericId(e).compare(ht.extractNumericId(t)):Za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zt.fromString(e.substring(4,e.length-2))}}class ae extends ht{construct(e,t,n){return new ae(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const wy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends ht{construct(e,t,n){return new ye(e,t,n)}static isValidIdentifier(e){return wy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ku}static keyField(){return new ye([Ku])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
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
 */function ff(r,e,t){if(!t)throw new k(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vy(r,e,t,n){if(e===!0&&n===!0)throw new k(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Hu(r){if(!F.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wu(r){if(F.isDocumentKey(r))throw new k(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function mf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ko(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":j(12329,{type:typeof r})}function Me(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ko(r);throw new k(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Ay(r,e){if(e<=0)throw new k(C.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ae(r,e){const t={typeString:r};return e&&(t.value=e),t}function Js(r,e){if(!mf(r))throw new k(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new k(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const Qu=-62135596800,Ju=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Ju);return new le(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qu)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ju}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Js(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ae("string",le._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new le(0,0))}static max(){return new K(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ks=-1;class so{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ec(r){return r.fields.find(e=>e.kind===2)}function wn(r){return r.fields.filter(e=>e.kind!==2)}so.UNKNOWN_ID=-1;class ji{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ms{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ms(0,Ye.min())}}function by(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=K.fromTimestamp(n===1e9?new le(t+1,0):new le(t,n));return new Ye(s,F.empty(),e)}function gf(r){return new Ye(r.readTime,r.key,ks)}class Ye{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ye(K.min(),F.empty(),ks)}static max(){return new Ye(K.max(),F.empty(),ks)}}function Vc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(r.documentKey,e.documentKey),t!==0?t:Q(r.largestBatchId,e.largestBatchId))}/**
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
 */const pf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==pf)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(s=>s?S.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new S((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new S((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const Qe="SimpleDb";class Mo{static open(e,t,n,s){try{return new Mo(t,e.transaction(s,n))}catch(i){throw new As(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new mt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new As(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=kc(n.target.error);this.S.reject(new As(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Qe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ry(t)}}class en{static delete(e){return V(Qe,"Removing database:",e),An(jd().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Jd())return!1;if(en.F())return!0;const e=Re(),t=en.M(e),n=0<t&&t<10,s=yf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,en.M(Re())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(V(Qe,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new As(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new k(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new k(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new As(e,o))},s.onupgradeneeded=i=>{V(Qe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{V(Qe,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Mo.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V(Qe,"Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function yf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Sy{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return An(this.U.delete())}}class As extends k{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function un(r){return r.name==="IndexedDbTransactionError"}class Ry{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Qe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Qe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),An(n)}add(e){return V(Qe,"ADD",this.store.name,e,e),An(this.store.add(e))}get(e){return An(this.store.get(e)).next(t=>(t===void 0&&(t=null),V(Qe,"GET",this.store.name,e,t),t))}delete(e){return V(Qe,"DELETE",this.store.name,e),An(this.store.delete(e))}count(){return V(Qe,"COUNT",this.store.name),An(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.H(i,(c,l)=>{o.push(l)}).next(()=>o)}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}Z(e,t){V(Qe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const s=this.cursor(n);return this.H(s,(i,o,c)=>c.delete())}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new S((n,s)=>{t.onerror=i=>{const o=kc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}H(e,t){const n=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Sy(c),h=t(c.primaryKey,c.value,l);if(h instanceof S){const f=h.catch(g=>(l.done(),S.reject(g)));n.push(f)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}}).next(()=>S.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function An(r){return new S((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=kc(n.target.error);t(s)}})}let Yu=!1;function kc(r){const e=en.M(Re());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yu||(Yu=!0,setTimeout(()=>{throw n},0)),n}}return r}const bs="IndexBackfiller";class Py{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){V(bs,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ne.ie();V(bs,`Documents written: ${t}`)}catch(t){un(t)?V(bs,"Ignoring IndexedDB error during index backfill: ",t):await Kn(t)}await this.re(6e4)})}}class Cy{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const n=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V(bs,`Processing collection: ${o}`),this.oe(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(c=>(V(bs,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=gf(i);Vc(o,n)>0&&(n=o)}),new Ye(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ze{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ze.ce=-1;/**
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
 */const Cn=-1;function Oo(r){return r==null}function Os(r){return r===0&&1/r==-1/0}function xy(r){return typeof r=="number"&&Number.isInteger(r)&&!Os(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const io="";function qe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Xu(e)),e=Ny(r.get(t),e);return Xu(e)}function Ny(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case io:t+="";break;default:t+=i}}return t}function Xu(r){return r+io+""}function dt(r){const e=r.length;if(z(e>=2,64408,{path:r}),e===2)return z(r.charAt(0)===io&&r.charAt(1)==="",56145,{path:r}),ae.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(io,i);switch((o<0||o>t)&&j(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:j(61167,{path:r})}i=o+2}return new ae(n)}/**
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
 */const vn="remoteDocuments",Ys="owner",nr="owner",Ls="mutationQueues",Dy="userId",it="mutations",Zu="batchId",Pn="userMutationsIndex",eh=["userId","batchId"];/**
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
 */function qi(r,e){return[r,qe(e)]}function If(r,e,t){return[r,qe(e),t]}const Vy={},vr="documentMutations",oo="remoteDocumentsV14",ky=["prefixPath","collectionGroup","readTime","documentId"],$i="documentKeyIndex",My=["prefixPath","collectionGroup","documentId"],Ef="collectionGroupIndex",Oy=["collectionGroup","readTime","prefixPath","documentId"],Fs="remoteDocumentGlobal",tc="remoteDocumentGlobalKey",Ar="targets",Tf="queryTargetsIndex",Ly=["canonicalId","targetId"],br="targetDocuments",Fy=["targetId","path"],Mc="documentTargetsIndex",Uy=["path","targetId"],ao="targetGlobalKey",xn="targetGlobal",Us="collectionParents",By=["collectionId","parent"],Sr="clientMetadata",jy="clientId",Lo="bundles",qy="bundleId",Fo="namedQueries",$y="name",Oc="indexConfiguration",zy="indexId",nc="collectionGroupIndex",Gy="collectionGroup",Ss="indexState",Ky=["indexId","uid"],wf="sequenceNumberIndex",Hy=["uid","sequenceNumber"],Rs="indexEntries",Wy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vf="documentKeyIndex",Qy=["indexId","uid","orderedDocumentKey"],Uo="documentOverlays",Jy=["userId","collectionPath","documentId"],rc="collectionPathOverlayIndex",Yy=["userId","collectionPath","largestBatchId"],Af="collectionGroupOverlayIndex",Xy=["userId","collectionGroup","largestBatchId"],Lc="globals",Zy="name",bf=[Ls,it,vr,vn,Ar,Ys,xn,br,Sr,Fs,Us,Lo,Fo],eI=[...bf,Uo],Sf=[Ls,it,vr,oo,Ar,Ys,xn,br,Sr,Fs,Us,Lo,Fo,Uo],Rf=Sf,Fc=[...Rf,Oc,Ss,Rs],tI=Fc,Pf=[...Fc,Lc],nI=Pf;/**
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
 */class sc extends _f{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Pe(r,e){const t=W(r);return en.O(t.le,e)}/**
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
 */function th(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function hn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Cf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ve(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nh(this.data.getIterator())}getIteratorFrom(e){return new nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function rr(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class He{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new He([])}unionWith(e){let t=new he(ye.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class xf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xf("Invalid base64 string: "+i):i}}(e);return new be(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const rI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(r){if(z(!!r,39018),typeof r=="string"){let e=0;const t=rI.exec(r);if(z(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ge(r.seconds),nanos:ge(r.nanos)}}function ge(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Rt(r){return typeof r=="string"?be.fromBase64String(r):be.fromUint8Array(r)}/**
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
 */const Nf="server_timestamp",Df="__type__",Vf="__previous_value__",kf="__local_write_time__";function Uc(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Df])==null?void 0:n.stringValue)===Nf}function Bo(r){const e=r.mapValue.fields[Vf];return Uc(e)?Bo(e):e}function Bs(r){const e=St(r.mapValue.fields[kf].timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class sI{constructor(e,t,n,s,i,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const co="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||co}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===co}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bc="__type__",Mf="__max__",Wt={mapValue:{fields:{__type__:{stringValue:Mf}}}},jc="__vector__",Rr="value",zi={nullValue:"NULL_VALUE"};function rn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Uc(r)?4:Of(r)?9007199254740991:jo(r)?10:11:j(28295,{value:r})}function yt(r,e){if(r===e)return!0;const t=rn(r);if(t!==rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Bs(r).isEqual(Bs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=St(s.timestampValue),c=St(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Rt(s.bytesValue).isEqual(Rt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ge(s.doubleValue),c=ge(i.doubleValue);return o===c?Os(o)===Os(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return wr(r.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(th(o)!==th(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yt(o[l],c[l])))return!1;return!0}(r,e);default:return j(52216,{left:r})}}function js(r,e){return(r.values||[]).find(t=>yt(t,e))!==void 0}function sn(r,e){if(r===e)return 0;const t=rn(r),n=rn(e);if(t!==n)return Q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ge(i.integerValue||i.doubleValue),l=ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return rh(r.timestampValue,e.timestampValue);case 4:return rh(Bs(r),Bs(e));case 5:return Za(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Rt(i),l=Rt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Q(c[h],l[h]);if(f!==0)return f}return Q(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Q(ge(i.latitude),ge(o.latitude));return c!==0?c:Q(ge(i.longitude),ge(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return sh(r.arrayValue,e.arrayValue);case 10:return function(i,o){var p,R,x,D;const c=i.fields||{},l=o.fields||{},h=(p=c[Rr])==null?void 0:p.arrayValue,f=(R=l[Rr])==null?void 0:R.arrayValue,g=Q(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return g!==0?g:sh(h,f)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wt.mapValue&&o===Wt.mapValue)return 0;if(i===Wt.mapValue)return 1;if(o===Wt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const p=Za(l[g],f[g]);if(p!==0)return p;const R=sn(c[l[g]],h[f[g]]);if(R!==0)return R}return Q(l.length,f.length)}(r.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function rh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Q(r,e);const t=St(r),n=St(e),s=Q(t.seconds,n.seconds);return s!==0?s:Q(t.nanos,n.nanos)}function sh(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=sn(t[s],n[s]);if(i)return i}return Q(t.length,n.length)}function Pr(r){return ic(r)}function ic(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=St(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Rt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return F.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ic(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ic(t.fields[o])}`;return s+"}"}(r.mapValue):j(61005,{value:r})}function Gi(r){switch(rn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bo(r);return e?16+Gi(e):16;case 5:return 2*r.stringValue.length;case 6:return Rt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Gi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return hn(n.fields,(i,o)=>{s+=i.length+Gi(o)}),s}(r.mapValue);default:throw j(13486,{value:r})}}function qs(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function oc(r){return!!r&&"integerValue"in r}function $s(r){return!!r&&"arrayValue"in r}function ih(r){return!!r&&"nullValue"in r}function oh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ki(r){return!!r&&"mapValue"in r}function jo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Bc])==null?void 0:n.stringValue)===jc}function Ps(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return hn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ps(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(r.arrayValue.values[t]);return e}return{...r}}function Of(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Mf}const Lf={mapValue:{fields:{[Bc]:{stringValue:jc},[Rr]:{arrayValue:{}}}}};function iI(r){return"nullValue"in r?zi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?qs(Un.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?jo(r)?Lf:{mapValue:{}}:j(35942,{value:r})}function oI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?qs(Un.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Lf:"mapValue"in r?jo(r)?{mapValue:{}}:Wt:j(61959,{value:r})}function ah(r,e){const t=sn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function ch(r,e){const t=sn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=ye.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Ps(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){hn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Be(Ps(this.value))}}function Ff(r){const e=[];return hn(r.fields,(t,n)=>{const s=new ye([t]);if(Ki(n)){const i=Ff(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new He(e)}/**
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
 */class Te{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,K.min(),K.min(),K.min(),Be.empty(),0)}static newFoundDocument(e,t,n,s){return new Te(e,1,t,K.min(),n,s,0)}static newNoDocument(e,t){return new Te(e,2,t,K.min(),K.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,K.min(),K.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cr{constructor(e,t){this.position=e,this.inclusive=t}}function lh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(o.referenceValue),t.key):n=sn(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function uh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!yt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function aI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Uf{}class te extends Uf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new cI(e,t,n):t==="array-contains"?new hI(e,n):t==="in"?new Gf(e,n):t==="not-in"?new dI(e,n):t==="array-contains-any"?new fI(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new lI(e,n):new uI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(sn(t,this.value)):t!==null&&rn(this.value)===rn(t)&&this.matchesComparison(sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends Uf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ue(e,t)}matches(e){return xr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xr(r){return r.op==="and"}function ac(r){return r.op==="or"}function qc(r){return Bf(r)&&xr(r)}function Bf(r){for(const e of r.filters)if(e instanceof ue)return!1;return!0}function cc(r){if(r instanceof te)return r.field.canonicalString()+r.op.toString()+Pr(r.value);if(qc(r))return r.filters.map(e=>cc(e)).join(",");{const e=r.filters.map(t=>cc(t)).join(",");return`${r.op}(${e})`}}function jf(r,e){return r instanceof te?function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(r,e):r instanceof ue?function(n,s){return s instanceof ue&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&jf(o,s.filters[c]),!0):!1}(r,e):void j(19439)}function qf(r,e){const t=r.filters.concat(e);return ue.create(t,r.op)}function $f(r){return r instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Pr(t.value)}`}(r):r instanceof ue?function(t){return t.op.toString()+" {"+t.getFilters().map($f).join(" ,")+"}"}(r):"Filter"}class cI extends te{constructor(e,t,n){super(e,t,n),this.key=F.fromName(n.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class lI extends te{constructor(e,t){super(e,"in",t),this.keys=zf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uI extends te{constructor(e,t){super(e,"not-in",t),this.keys=zf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zf(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>F.fromName(n.referenceValue))}class hI extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $s(t)&&js(t.arrayValue,this.value)}}class Gf extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&js(this.value.arrayValue,t)}}class dI extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!js(this.value.arrayValue,t)}}class fI extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$s(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>js(this.value.arrayValue,n))}}/**
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
 */class mI{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function lc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new mI(r,e,t,n,s,i,o)}function Bn(r){const e=W(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>cc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Pr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Pr(n)).join(",")),e.Te=t}return e.Te}function Xs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!aI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!jf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!uh(r.startAt,e.startAt)&&uh(r.endAt,e.endAt)}function lo(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function uo(r,e){return r.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function hh(r,e,t){let n=zi,s=!0;for(const i of uo(r,e)){let o=zi,c=!0;switch(i.op){case"<":case"<=":o=iI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=zi}ah({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];ah({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function dh(r,e,t){let n=Wt,s=!0;for(const i of uo(r,e)){let o=Wt,c=!0;switch(i.op){case">=":case">":o=oI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Wt}ch({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];ch({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class qr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function gI(r,e,t,n,s,i,o,c){return new qr(r,e,t,n,s,i,o,c)}function Zs(r){return new qr(r)}function fh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Kf(r){return r.collectionGroup!==null}function Cs(r){const e=W(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new he(ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zs(i,n))}),t.has(ye.keyField().canonicalString())||e.Ie.push(new zs(ye.keyField(),n))}return e.Ie}function et(r){const e=W(r);return e.Ee||(e.Ee=pI(e,Cs(r))),e.Ee}function pI(r,e){if(r.limitType==="F")return lc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zs(s.field,i)});const t=r.endAt?new Cr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Cr(r.startAt.position,r.startAt.inclusive):null;return lc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function uc(r,e){const t=r.filters.concat([e]);return new qr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ho(r,e,t){return new qr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function qo(r,e){return Xs(et(r),et(e))&&r.limitType===e.limitType}function Hf(r){return`${Bn(et(r))}|lt:${r.limitType}`}function ur(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>$f(s)).join(", ")}]`),Oo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Pr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Pr(s)).join(",")),`Target(${n})`}(et(r))}; limitType=${r.limitType})`}function ei(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Cs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=lh(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Cs(n),s)||n.endAt&&!function(o,c,l){const h=lh(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Cs(n),s))}(r,e)}function _I(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Wf(r){return(e,t)=>{let n=!1;for(const s of Cs(r)){const i=yI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function yI(r,e,t){const n=r.field.isKeyField()?F.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?sn(l,h):j(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:r.dir})}}/**
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
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Cf(this.inner)}size(){return this.innerSize}}/**
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
 */const II=new pe(F.comparator);function Je(){return II}const Qf=new pe(F.comparator);function ys(...r){let e=Qf;for(const t of r)e=e.insert(t.key,t);return e}function Jf(r){let e=Qf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ft(){return xs()}function Yf(){return xs()}function xs(){return new Nt(r=>r.toString(),(r,e)=>r.isEqual(e))}const EI=new pe(F.comparator),TI=new he(F.comparator);function X(...r){let e=TI;for(const t of r)e=e.add(t);return e}const wI=new he(Q);function vI(){return wI}/**
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
 */function $c(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function Xf(r){return{integerValue:""+r}}function Zf(r,e){return xy(e)?Xf(e):$c(r,e)}/**
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
 */class $o{constructor(){this._=void 0}}function AI(r,e,t){return r instanceof Nr?function(s,i){const o={fields:{[Df]:{stringValue:Nf},[kf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uc(i)&&(i=Bo(i)),i&&(o.fields[Vf]=i),{mapValue:o}}(t,e):r instanceof Dr?tm(r,e):r instanceof Vr?nm(r,e):function(s,i){const o=em(s,i),c=mh(o)+mh(s.Ae);return oc(o)&&oc(s.Ae)?Xf(c):$c(s.serializer,c)}(r,e)}function bI(r,e,t){return r instanceof Dr?tm(r,e):r instanceof Vr?nm(r,e):t}function em(r,e){return r instanceof kr?function(n){return oc(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Nr extends $o{}class Dr extends $o{constructor(e){super(),this.elements=e}}function tm(r,e){const t=rm(e);for(const n of r.elements)t.some(s=>yt(s,n))||t.push(n);return{arrayValue:{values:t}}}class Vr extends $o{constructor(e){super(),this.elements=e}}function nm(r,e){let t=rm(e);for(const n of r.elements)t=t.filter(s=>!yt(s,n));return{arrayValue:{values:t}}}class kr extends $o{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function mh(r){return ge(r.integerValue||r.doubleValue)}function rm(r){return $s(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class zc{constructor(e,t){this.field=e,this.transform=t}}function SI(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Dr&&s instanceof Dr||n instanceof Vr&&s instanceof Vr?wr(n.elements,s.elements,yt):n instanceof kr&&s instanceof kr?yt(n.Ae,s.Ae):n instanceof Nr&&s instanceof Nr}(r.transform,e.transform)}class RI{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zo{}function sm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Go(r.key,je.none()):new $r(r.key,r.data,je.none());{const t=r.data,n=Be.empty();let s=new he(ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Dt(r.key,n,new He(s.toArray()),je.none())}}function PI(r,e,t){r instanceof $r?function(s,i,o){const c=s.value.clone(),l=ph(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Dt?function(s,i,o){if(!Hi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ph(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(im(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ns(r,e,t,n){return r instanceof $r?function(i,o,c,l){if(!Hi(i.precondition,o))return c;const h=i.value.clone(),f=_h(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Dt?function(i,o,c,l){if(!Hi(i.precondition,o))return c;const h=_h(i.fieldTransforms,l,o),f=o.data;return f.setAll(im(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,o,c){return Hi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function CI(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=em(n.transform,s||null);i!=null&&(t===null&&(t=Be.empty()),t.set(n.field,i))}return t||null}function gh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wr(n,s,(i,o)=>SI(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class $r extends zo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dt extends zo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ph(r,e,t){const n=new Map;z(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,bI(o,c,t[s]))}return n}function _h(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,AI(i,o,e))}return n}class Go extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class om extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gc{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PI(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ns(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ns(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Yf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=sm(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(t,n)=>gh(t,n))&&wr(this.baseMutations,e.baseMutations,(t,n)=>gh(t,n))}}class Kc{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){z(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return EI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Kc(e,t,n,s)}}/**
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
 */class Hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ve,re;function NI(r){switch(r){case C.OK:return j(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return j(15467,{code:r})}}function am(r){if(r===void 0)return Ge("GRPC error has no .code"),C.UNKNOWN;switch(r){case ve.OK:return C.OK;case ve.CANCELLED:return C.CANCELLED;case ve.UNKNOWN:return C.UNKNOWN;case ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ve.INTERNAL:return C.INTERNAL;case ve.UNAVAILABLE:return C.UNAVAILABLE;case ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ve.NOT_FOUND:return C.NOT_FOUND;case ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ve.ABORTED:return C.ABORTED;case ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ve.DATA_LOSS:return C.DATA_LOSS;default:return j(39323,{code:r})}}(re=ve||(ve={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const VI=new Zt([4294967295,4294967295],0);function yh(r){const e=DI().encode(r),t=new rf;return t.update(e),new Uint8Array(t.digest())}function Ih(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zt([t,n],0),new Zt([s,i],0)]}class Wc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(n<0)throw new Is(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Zt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Zt.fromNumber(n)));return s.compare(VI)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=yh(e),[n,s]=Ih(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=yh(e),[n,s]=Ih(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ko{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko(K.min(),s,new pe(Q),Je(),X())}}class ti{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ti(n,t,X(),X(),X())}}/**
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
 */class Wi{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class cm{constructor(e,t){this.targetId=e,this.Ce=t}}class lm{constructor(e,t,n=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Eh{constructor(){this.ve=0,this.Fe=Th(),this.Me=be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),n=X();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:j(38017,{changeType:i})}}),new ti(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Th()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Je(),this.Je=xi(),this.He=xi(),this.Ye=new pe(Q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(lo(i))if(n===0){const o=new F(i.path);this.et(t,o,Te.newNoDocument(o,K.min()))}else z(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Rt(n).toUint8Array()}catch(l){if(l instanceof xf)return Fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wc(o,s,i)}catch(l){return Fn(l instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&lo(c.target)){const l=new F(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Te.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let n=X();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ko(e,t,this.Ye,this.je,n);return this.je=Je(),this.Je=xi(),this.He=xi(),this.Ye=new pe(Q),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Eh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he(Q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Eh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function xi(){return new pe(F.comparator)}function Th(){return new pe(F.comparator)}const MI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LI=(()=>({and:"AND",or:"OR"}))();class FI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hc(r,e){return r.useProto3Json||Oo(e)?e:{value:e}}function Mr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function UI(r,e){return Mr(r,e.toTimestamp())}function Ke(r){return z(!!r,49232),K.fromTimestamp(function(t){const n=St(t);return new le(n.seconds,n.nanos)}(r))}function Qc(r,e){return dc(r,e).canonicalString()}function dc(r,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function hm(r){const e=ae.fromString(r);return z(Em(e),10190,{key:e.toString()}),e}function fo(r,e){return Qc(r.databaseId,e.path)}function Nn(r,e){const t=hm(e);if(t.get(1)!==r.databaseId.projectId)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new F(mm(t))}function dm(r,e){return Qc(r.databaseId,e)}function fm(r){const e=hm(r);return e.length===4?ae.emptyPath():mm(e)}function fc(r){return new ae(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mm(r){return z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function wh(r,e,t){return{name:fo(r,e),fields:t.value.mapValue.fields}}function BI(r,e,t){const n=Nn(r,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):K.min(),o=new Be({mapValue:{fields:e.fields}}),c=Te.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function jI(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:j(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(z(f===void 0||typeof f=="string",58123),be.fromBase64String(f||"")):(z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),be.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:am(h.code);return new k(f,h.message||"")}(o);t=new lm(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Nn(r,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):K.min(),c=new Be({mapValue:{fields:n.document.fields}}),l=Te.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Wi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Nn(r,n.document),i=n.readTime?Ke(n.readTime):K.min(),o=Te.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Wi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Nn(r,n.document),i=n.removedTargetIds||[];t=new Wi([],i,s,null)}else{if(!("filter"in e))return j(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new xI(s,i),c=n.targetId;t=new cm(c,o)}}return t}function mo(r,e){let t;if(e instanceof $r)t={update:wh(r,e.key,e.value)};else if(e instanceof Go)t={delete:fo(r,e.key)};else if(e instanceof Dt)t={update:wh(r,e.key,e.data),updateMask:HI(e.fieldMask)};else{if(!(e instanceof om))return j(16599,{Vt:e.type});t={verify:fo(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Dr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw j(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(r,e.precondition)),t}function mc(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?je.updateTime(Ke(i.updateTime)):i.exists!==void 0?je.exists(i.exists):je.none()}(e.currentDocument):je.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)z(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Nr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Dr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Vr(f)}else"increment"in c?l=new kr(o,c.increment):j(16584,{proto:c});const h=ye.fromServerFormat(c.fieldPath);return new zc(h,l)}(r,s)):[];if(e.update){e.update.name;const s=Nn(r,e.update.name),i=new Be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new He(h.map(f=>ye.fromServerFormat(f)))}(e.updateMask);return new Dt(s,i,o,t,n)}return new $r(s,i,t,n)}if(e.delete){const s=Nn(r,e.delete);return new Go(s,t)}if(e.verify){const s=Nn(r,e.verify);return new om(s,t)}return j(1463,{proto:e})}function qI(r,e){return r&&r.length>0?(z(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(K.min())&&(o=Ke(i)),new RI(o,s.transformResults||[])}(t,e))):[]}function gm(r,e){return{documents:[dm(r,e.path)]}}function pm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=dm(r,s);const i=function(h){if(h.length!==0)return Im(ue.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:hr(p.field),direction:zI(p.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=hc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function _m(r){let e=fm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){z(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const p=ym(g);return p instanceof ue&&qc(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(p=>function(x){return new zs(dr(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(t.orderBy));let c=null;t.limit&&(c=function(g){let p;return p=typeof g=="object"?g.value:g,Oo(p)?null:p}(t.limit));let l=null;t.startAt&&(l=function(g){const p=!!g.before,R=g.values||[];return new Cr(R,p)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const p=!g.before,R=g.values||[];return new Cr(R,p)}(t.endAt)),gI(e,s,o,i,c,"F",l,h)}function $I(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ym(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=dr(t.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=dr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=dr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(r):r.fieldFilter!==void 0?function(t){return te.create(dr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ue.create(t.compositeFilter.filters.map(n=>ym(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(r):j(30097,{filter:r})}function zI(r){return MI[r]}function GI(r){return OI[r]}function KI(r){return LI[r]}function hr(r){return{fieldPath:r.canonicalString()}}function dr(r){return ye.fromServerFormat(r.fieldPath)}function Im(r){return r instanceof te?function(t){if(t.op==="=="){if(oh(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NAN"}};if(ih(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(oh(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NOT_NAN"}};if(ih(t.value))return{unaryFilter:{field:hr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(t.field),op:GI(t.op),value:t.value}}}(r):r instanceof ue?function(t){const n=t.getFilters().map(s=>Im(s));return n.length===1?n[0]:{compositeFilter:{op:KI(t.op),filters:n}}}(r):j(54877,{filter:r})}function HI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Em(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class wt{constructor(e,t,n,s,i=K.min(),o=K.min(),c=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Tm{constructor(e){this.yt=e}}function WI(r,e){let t;if(e.document)t=BI(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=F.fromSegments(e.noDocument.path),s=qn(e.noDocument.readTime);t=Te.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return j(56709);{const n=F.fromSegments(e.unknownDocument.path),s=qn(e.unknownDocument.version);t=Te.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new le(s[0],s[1]);return K.fromTimestamp(i)}(e.readTime)),t}function vh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:go(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:fo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Mr(i,o.version.toTimestamp()),createTime:Mr(i,o.createTime.toTimestamp())}}(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:jn(e.version)};else{if(!e.isUnknownDocument())return j(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:jn(e.version)}}return n}function go(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function jn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function qn(r){const e=new le(r.seconds,r.nanoseconds);return K.fromTimestamp(e)}function bn(r,e){const t=(e.baseMutations||[]).map(i=>mc(r.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>mc(r.yt,i)),s=le.fromMillis(e.localWriteTimeMs);return new Gc(e.batchId,s,t,n)}function Es(r){const e=qn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?qn(r.lastLimboFreeSnapshotVersion):K.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return z(o===1,1966,{count:o}),et(Zs(fm(i.documents[0])))}(r.query):function(i){return et(_m(i))}(r.query),new wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,be.fromBase64String(r.resumeToken))}function wm(r,e){const t=jn(e.snapshotVersion),n=jn(e.lastLimboFreeSnapshotVersion);let s;s=lo(e.target)?gm(r.yt,e.target):pm(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function vm(r){const e=_m({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ho(e,e.limit,"L"):e}function Ma(r,e){return new Hc(e.largestBatchId,mc(r.yt,e.overlayMutation))}function Ah(r,e){const t=e.path.lastSegment();return[r,qe(e.path.popLast()),t]}function bh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:jn(n.readTime),documentKey:qe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class QI{getBundleMetadata(e,t){return Sh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:qn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Sh(e).put(function(s){return{bundleId:s.id,createTime:jn(Ke(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Rh(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:vm(i.bundledQuery),readTime:qn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Rh(e).put(function(s){return{name:s.name,readTime:jn(Ke(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Sh(r){return Pe(r,Lo)}function Rh(r){return Pe(r,Fo)}/**
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
 */class Ho{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Ho(e,n)}getOverlay(e,t){return ds(e).get(Ah(this.userId,t)).next(n=>n?Ma(this.serializer,n):null)}getOverlays(e,t){const n=ft();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Hc(t,o);s.push(this.St(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(qe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(ds(e).Z(rc,c))}),S.waitFor(i)}getOverlaysForCollection(e,t,n){const s=ft(),i=qe(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ds(e).J(rc,o).next(c=>{for(const l of c){const h=Ma(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=ft();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ds(e).ee({index:Af,range:c},(l,h,f)=>{const g=Ma(this.serializer,h);i.size()<s||g.largestBatchId===o?(i.set(g.getKey(),g),o=g.largestBatchId):f.done()}).next(()=>i)}St(e,t){return ds(e).put(function(s,i,o){const[c,l,h]=Ah(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:mo(s.yt,o.mutation)}}(this.serializer,this.userId,t))}}function ds(r){return Pe(r,Uo)}/**
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
 */class JI{bt(e){return Pe(e,Lc)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?be.fromUint8Array(n):be.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Sn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ge(e.integerValue));else if("doubleValue"in e){const n=ge(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Os(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=St(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Rt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Of(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):jo(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):j(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){var o,c;const n=e.fields||{};this.Ft(t,53);const s=Rr,i=((c=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(ge(i)),this.Ot(s,t),this.Ct(n[s],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),F.fromName(e).path.forEach(n=>{this.Ft(t,60),this.Ut(n,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Sn.Kt=new Sn;/**
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
 */const sr=255;function YI(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Ph(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=YI(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class XI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),n=Ph(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=Ph(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(sr),this.sn(255)}_n(){this.an(sr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===sr?(this.sn(sr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===sr?(this.an(sr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class ZI{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class eE{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class fs{constructor(){this.cn=new XI,this.ln=new ZI(this.cn),this.hn=new eE(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Rn{constructor(e,t,n,s){this.Tn=e,this.In=t,this.En=n,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Rn(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Qi(this.En),directionalValue:Qi(this.dn),orderedDocumentKey:Qi(t),documentKey:n.path.toArray()}}Vn(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Ut(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=Ch(r.En,e.En),t!==0?t:(t=Ch(r.dn,e.dn),t!==0?t:F.comparator(r.In,e.In)))}function Ch(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Qi(r){return Qd()?function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n}(r):r}function xh(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(r)}class Nh{constructor(e){this.mn=new he((t,n)=>ye.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(z(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=ec(e);if(t!==void 0&&!this.wn(t))return!1;const n=wn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.Sn(c,l)||!this.bn(this.fn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.fn.length||!this.bn(this.fn[o++],c))return!1}return!0}Dn(){if(this.pn)return null;let e=new he(ye.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ji(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ji(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ji(n.field,n.dir==="asc"?0:1)));return new so(so.UNKNOWN_ID,this.collectionId,t,Ms.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Am(r){var t,n;if(z(r instanceof te||r instanceof ue,20012),r instanceof te){if(r instanceof Gf){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map(i=>te.create(r.field,"==",i)))||[];return ue.create(s,"or")}return r}const e=r.filters.map(s=>Am(s));return ue.create(e,r.op)}function tE(r){if(r.getFilters().length===0)return[];const e=_c(Am(r));return z(bm(e),7391),gc(e)||pc(e)?[e]:e.getFilters()}function gc(r){return r instanceof te}function pc(r){return r instanceof ue&&qc(r)}function bm(r){return gc(r)||pc(r)||function(t){if(t instanceof ue&&ac(t)){for(const n of t.getFilters())if(!gc(n)&&!pc(n))return!1;return!0}return!1}(r)}function _c(r){if(z(r instanceof te||r instanceof ue,34018),r instanceof te)return r;if(r.filters.length===1)return _c(r.filters[0]);const e=r.filters.map(n=>_c(n));let t=ue.create(e,r.op);return t=po(t),bm(t)?t:(z(t instanceof ue,64498),z(xr(t),40251),z(t.filters.length>1,57927),t.filters.reduce((n,s)=>Jc(n,s)))}function Jc(r,e){let t;return z(r instanceof te||r instanceof ue,38388),z(e instanceof te||e instanceof ue,25473),t=r instanceof te?e instanceof te?function(s,i){return ue.create([s,i],"and")}(r,e):Dh(r,e):e instanceof te?Dh(e,r):function(s,i){if(z(s.filters.length>0&&i.filters.length>0,48005),xr(s)&&xr(i))return qf(s,i.getFilters());const o=ac(s)?s:i,c=ac(s)?i:s,l=o.filters.map(h=>Jc(h,c));return ue.create(l,"or")}(r,e),po(t)}function Dh(r,e){if(xr(e))return qf(e,r.getFilters());{const t=e.filters.map(n=>Jc(r,n));return ue.create(t,"or")}}function po(r){if(z(r instanceof te||r instanceof ue,11850),r instanceof te)return r;const e=r.getFilters();if(e.length===1)return po(e[0]);if(Bf(r))return r;const t=e.map(s=>po(s)),n=[];return t.forEach(s=>{s instanceof te?n.push(s):s instanceof ue&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:ue.create(n,r.op)}/**
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
 */class nE{constructor(){this.Cn=new Yc}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Ye.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Yc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new he(ae.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new he(ae.comparator)).toArray()}}/**
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
 */const Vh="IndexedDbIndexManager",Ni=new Uint8Array(0);class rE{constructor(e,t){this.databaseId=t,this.vn=new Yc,this.Fn=new Nt(n=>Bn(n),(n,s)=>Xs(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const i={collectionId:n,parent:qe(s)};return kh(e).put(i)}return S.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[df(t),""],!1,!0);return kh(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(dt(o.parent))}return n})}addFieldIndex(e,t){const n=ms(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=or(e);return i.next(c=>{o.put(bh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=ms(e),s=or(e),i=ir(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ms(e),n=ir(e),s=or(e);return t.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(e,t){return S.forEach(this.Mn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Nh(n).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=ir(e);let s=!0;const i=new Map;return S.forEach(this.Mn(t),o=>this.xn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=X();const c=[];return S.forEach(i,(l,h)=>{V(Vh,`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(G=>`${G.fieldPath}:${G.kind}`).join(",")}`}(l)} to execute ${Bn(t)}`);const f=function(O,G){const ne=ec(G);if(ne===void 0)return null;for(const Z of uo(O,ne.fieldPath))switch(Z.op){case"array-contains-any":return Z.value.arrayValue.values||[];case"array-contains":return[Z.value]}return null}(h,l),g=function(O,G){const ne=new Map;for(const Z of wn(G))for(const E of uo(O,Z.fieldPath))switch(E.op){case"==":case"in":ne.set(Z.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return ne.set(Z.fieldPath.canonicalString(),E.value),Array.from(ne.values())}return null}(h,l),p=function(O,G){const ne=[];let Z=!0;for(const E of wn(G)){const _=E.kind===0?hh(O,E.fieldPath,O.startAt):dh(O,E.fieldPath,O.startAt);ne.push(_.value),Z&&(Z=_.inclusive)}return new Cr(ne,Z)}(h,l),R=function(O,G){const ne=[];let Z=!0;for(const E of wn(G)){const _=E.kind===0?dh(O,E.fieldPath,O.endAt):hh(O,E.fieldPath,O.endAt);ne.push(_.value),Z&&(Z=_.inclusive)}return new Cr(ne,Z)}(h,l),x=this.On(l,h,p),D=this.On(l,h,R),N=this.Nn(l,h,g),M=this.Bn(l.indexId,f,x,p.inclusive,D,R.inclusive,N);return S.forEach(M,U=>n.Y(U,t.limit).next(O=>{O.forEach(G=>{const ne=F.fromSegments(G.documentKey);o.has(ne)||(o=o.add(ne),c.push(ne))})}))}).next(()=>c)}return S.resolve(null)})}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=tE(ue.create(e.filters,"and")).map(n=>lc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,t),t)}Bn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let g=0;g<l;++g){const p=t?this.Ln(t[g/h]):Ni,R=this.kn(e,p,n[g%h],s),x=this.qn(e,p,i[g%h],o),D=c.map(N=>this.kn(e,p,N,!0));f.push(...this.createRange(R,x,D))}return f}kn(e,t,n,s){const i=new Rn(e,F.empty(),t,n);return s?i:i.An()}qn(e,t,n,s){const i=new Rn(e,F.empty(),t,n);return s?i.An():i}xn(e,t){const n=new Nh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.yn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Mn(t);return S.forEach(s,i=>this.xn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new he(ye.comparator),f=!1;for(const g of l.filters)for(const p of g.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const g of l.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Qn(e,t){const n=new fs;for(const s of wn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Pn(s.kind);Sn.Kt.Dt(i,o)}return n.un()}Ln(e){const t=new fs;return Sn.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new fs;return Sn.Kt.Dt(qs(this.databaseId,t),n.Pn(function(i){const o=wn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.un()}Nn(e,t,n){if(n===null)return[];let s=[];s.push(new fs);let i=0;for(const o of wn(e)){const c=n[i++];for(const l of s)if(this.Un(t,o.fieldPath)&&$s(c))s=this.Kn(s,o,c);else{const h=l.Pn(o.kind);Sn.Kt.Dt(c,h)}}return this.Wn(s)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new fs;l.seed(c.un()),Sn.Kt.Dt(o,l.Pn(t.kind)),i.push(l)}return i}Un(e,t){return!!e.filters.find(n=>n instanceof te&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=ms(e),s=or(e);return(t?n.J(nc,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,g){const p=g?new Ms(g.sequenceNumber,new Ye(qn(g.readTime),new F(dt(g.documentKey)),g.largestBatchId)):Ms.empty(),R=f.fields.map(([x,D])=>new ji(ye.fromServerFormat(x),D));return new so(f.indexId,f.collectionGroup,R,p)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Q(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=ms(e),i=or(e);return this.Gn(e).next(o=>s.J(nc,IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(bh(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),S.forEach(c,l=>this.zn(e,s,l).next(h=>{const f=this.jn(i,l);return h.isEqual(f)?S.resolve():this.Jn(e,i,l,h,f)}))))})}Hn(e,t,n,s){return ir(e).put(s.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,s){return ir(e).delete(s.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const s=ir(e);let i=new he(Ut);return s.ee({index:vf,range:IDBKeyRange.only([n.indexId,this.uid,Qi(this.$n(n,t))])},(o,c)=>{i=i.add(new Rn(n.indexId,t,xh(c.arrayValue),xh(c.directionalValue)))}).next(()=>i)}jn(e,t){let n=new he(Ut);const s=this.Qn(t,e);if(s==null)return n;const i=ec(t);if(i!=null){const o=e.data.field(i.fieldPath);if($s(o))for(const c of o.arrayValue.values||[])n=n.add(new Rn(t.indexId,e.key,this.Ln(c),s))}else n=n.add(new Rn(t.indexId,e.key,Ni,s));return n}Jn(e,t,n,s,i){V(Vh,"Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,g,p){const R=l.getIterator(),x=h.getIterator();let D=rr(R),N=rr(x);for(;D||N;){let M=!1,U=!1;if(D&&N){const O=f(D,N);O<0?U=!0:O>0&&(M=!0)}else D!=null?U=!0:M=!0;M?(g(N),N=rr(x)):U?(p(D),D=rr(R)):(D=rr(R),N=rr(x))}}(s,i,Ut,c=>{o.push(this.Hn(e,t,n,c))},c=>{o.push(this.Yn(e,t,n,c))}),S.waitFor(o)}Gn(e){let t=1;return or(e).ee({index:wf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Ut(o,c)).filter((o,c,l)=>!c||Ut(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=Ut(o,e),l=Ut(o,t);if(c===0)s[0]=e.An();else if(c>0&&l<0)s.push(o),s.push(o.An());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Zn(s[o],s[o+1]))return[];const c=s[o].Vn(this.uid,Ni,F.empty()),l=s[o+1].Vn(this.uid,Ni,F.empty());i.push(IDBKeyRange.bound(c,l))}return i}Zn(e,t){return Ut(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Mh)}getMinOffset(e,t){return S.mapArray(this.Mn(t),n=>this.xn(e,n).next(s=>s||j(44426))).next(Mh)}}function kh(r){return Pe(r,Us)}function ir(r){return Pe(r,Rs)}function ms(r){return Pe(r,Oc)}function or(r){return Pe(r,Ss)}function Mh(r){z(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Vc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ye(e.readTime,e.documentKey,t)}/**
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
 */const Oh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sm=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Rm(r,e,t){const n=r.store(it),s=r.store(vr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.ee({range:o},(f,g,p)=>(c++,p.delete()));i.push(l.next(()=>{z(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const g=If(e,f.key.path,t.batchId);i.push(s.delete(g)),h.push(f.key)}return S.waitFor(i).next(()=>h)}function _o(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw j(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(Sm,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);class Wo{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(e,t,n,s){z(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Wo(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).ee({index:Pn,range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=fr(e),o=Bt(e);return o.add({}).next(c=>{z(typeof c=="number",49019);const l=new Gc(c,t,n,s),h=function(R,x,D){const N=D.baseMutations.map(U=>mo(R.yt,U)),M=D.mutations.map(U=>mo(R.yt,U));return{userId:x,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:N,mutations:M}}(this.serializer,this.userId,l),f=[];let g=new he((p,R)=>Q(p.canonicalString(),R.canonicalString()));for(const p of s){const R=If(this.userId,p.key.path,c);g=g.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(R,Vy))}return g.forEach(p=>{f.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Xn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Bt(e).get(t).next(n=>n?(z(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),bn(this.serializer,n)):null)}er(e,t){return this.Xn[t]?S.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Bt(e).ee({index:Pn,range:s},(o,c,l)=>{c.userId===this.userId&&(z(c.batchId>=n,47524,{tr:n}),i=bn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Cn;return Bt(e).ee({index:Pn,range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Cn],[this.userId,Number.POSITIVE_INFINITY]);return Bt(e).J(Pn,t).next(n=>n.map(s=>bn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=qi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return fr(e).ee({range:s},(o,c,l)=>{const[h,f,g]=o,p=dt(f);if(h===this.userId&&t.path.isEqual(p))return Bt(e).get(g).next(R=>{if(!R)throw j(61480,{nr:o,batchId:g});z(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(bn(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(Q);const s=[];return t.forEach(i=>{const o=qi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=fr(e).ee({range:c},(h,f,g)=>{const[p,R,x]=h,D=dt(R);p===this.userId&&i.path.isEqual(D)?n=n.add(x):g.done()});s.push(l)}),S.waitFor(s).next(()=>this.rr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=qi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new he(Q);return fr(e).ee({range:o},(l,h,f)=>{const[g,p,R]=l,x=dt(p);g===this.userId&&n.isPrefixOf(x)?x.length===s&&(c=c.add(R)):f.done()}).next(()=>this.rr(e,c))}rr(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Bt(e).get(i).next(o=>{if(o===null)throw j(35274,{batchId:i});z(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(bn(this.serializer,o))}))}),S.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Rm(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ir(t.batchId)}),S.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return fr(e).ee({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=dt(i[1]);s.push(l)}else c.done()}).next(()=>{z(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Pm(e,this.userId,t)}_r(e){return Cm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Cn,lastStreamToken:""})}}function Pm(r,e,t){const n=qi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return fr(r).ee({range:i,X:!0},(c,l,h)=>{const[f,g,p]=c;f===e&&g===s&&(o=!0),h.done()}).next(()=>o)}function Bt(r){return Pe(r,it)}function fr(r){return Pe(r,vr)}function Cm(r){return Pe(r,Ls)}/**
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
 */class $n{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $n(0)}static cr(){return new $n(-1)}}/**
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
 */class sE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next(t=>{const n=new $n(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(t=>K.fromTimestamp(new le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.lr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s)))}addTargetData(e,t){return this.Pr(e,t).next(()=>this.lr(e).next(n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ar(e).delete(t.targetId)).next(()=>this.lr(e)).next(n=>(z(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return ar(e).ee((o,c)=>{const l=Es(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ar(e).ee((n,s)=>{const i=Es(s);t(i)})}lr(e){return Lh(e).get(ao).next(t=>(z(t!==null,2888),t))}hr(e,t){return Lh(e).put(ao,t)}Pr(e,t){return ar(e).put(wm(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Bn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ar(e).ee({range:s,index:Tf},(o,c,l)=>{const h=Es(c);Xs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=$t(e);return t.forEach(o=>{const c=qe(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),S.waitFor(s)}removeMatchingKeys(e,t,n){const s=$t(e);return S.forEach(t,i=>{const o=qe(i.path);return S.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=$t(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=$t(e);let i=X();return s.ee({range:n,X:!0},(o,c,l)=>{const h=dt(o[1]),f=new F(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=qe(t.path),s=IDBKeyRange.bound([n],[df(n)],!1,!0);let i=0;return $t(e).ee({index:Mc,X:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}At(e,t){return ar(e).get(t).next(n=>n?Es(n):null)}}function ar(r){return Pe(r,Ar)}function Lh(r){return Pe(r,xn)}function $t(r){return Pe(r,br)}/**
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
 */const Fh="LruGarbageCollector",iE=1048576;function Uh([r,e],[t,n]){const s=Q(r,t);return s===0?Q(e,n):s}class oE{constructor(e){this.Ir=e,this.buffer=new he(Uh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Uh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Fh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?V(Fh,"Ignoring IndexedDB error during garbage collection: ",t):await Kn(t)}await this.Vr(3e5)})}}class aE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ze.ce);const n=new oE(t);return this.mr.forEachTarget(e,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Oh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,c=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(h=Date.now(),lr()<=ee.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Nm(r,e){return new aE(r,e)}/**
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
 */class cE{constructor(e,t){this.db=e,this.garbageCollector=Nm(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,(n,s)=>t(s))}addReference(e,t,n){return Di(e,n)}removeReference(e,t,n){return Di(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Di(e,t)}br(e,t){return function(s,i){let o=!1;return Cm(s).te(c=>Pm(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,(o,c)=>{if(c<=t){const l=this.br(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,K.min()),$t(e).delete(function(g){return[0,qe(g.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Di(e,t)}Sr(e,t){const n=$t(e);let s,i=Ze.ce;return n.ee({index:Mc},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Ze.ce&&t(new F(dt(s)),i),i=h,s=l):i=Ze.ce}).next(()=>{i!==Ze.ce&&t(new F(dt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Di(r,e){return $t(r).put(function(n,s){return{targetId:0,path:qe(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Dm{constructor(){this.changes=new Nt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return En(e).put(n)}removeEntry(e,t,n){return En(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],go(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Dr(e,n)))}getEntry(e,t){let n=Te.newInvalidDocument(t);return En(e).ee({index:$i,range:IDBKeyRange.only(gs(t))},(s,i)=>{n=this.Cr(t,i)}).next(()=>n)}vr(e,t){let n={size:0,document:Te.newInvalidDocument(t)};return En(e).ee({index:$i,range:IDBKeyRange.only(gs(t))},(s,i)=>{n={document:this.Cr(t,i),size:_o(i)}}).next(()=>n)}getEntries(e,t){let n=Je();return this.Fr(e,t,(s,i)=>{const o=this.Cr(s,i);n=n.insert(s,o)}).next(()=>n)}Mr(e,t){let n=Je(),s=new pe(F.comparator);return this.Fr(e,t,(i,o)=>{const c=this.Cr(i,o);n=n.insert(i,c),s=s.insert(i,_o(o))}).next(()=>({documents:n,Or:s}))}Fr(e,t,n){if(t.isEmpty())return S.resolve();let s=new he(qh);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(gs(s.first()),gs(s.last())),o=s.getIterator();let c=o.getNext();return En(e).ee({index:$i,range:i},(l,h,f)=>{const g=F.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&qh(c,g)<0;)n(c,null),c=o.getNext();c&&c.isEqual(g)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.j(gs(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),go(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return En(e).J(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Je();for(const g of h){const p=this.Cr(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);p.isFoundDocument()&&(ei(t,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Je();const o=jh(t,n),c=jh(t,Ye.max());return En(e).ee({index:Ef,range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const g=this.Cr(F.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new uE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Bh(e).get(tc).next(t=>(z(!!t,20021),t))}Dr(e,t){return Bh(e).put(tc,t)}Cr(e,t){if(t){const n=WI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(K.min())))return n}return Te.newInvalidDocument(e)}}function Vm(r){return new lE(r)}class uE extends Dm{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Nt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new he((i,o)=>Q(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=vh(this.Nr.serializer,o);s=s.add(i.path.popLast());const h=_o(l);n+=h-c.size,t.push(this.Nr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=vh(this.Nr.serializer,o.convertToNoDocument(K.min()));t.push(this.Nr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Nr.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next(n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next(({documents:n,Or:s})=>(s.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Bh(r){return Pe(r,Fs)}function En(r){return Pe(r,oo)}function gs(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jh(r,e){const t=e.documentKey.path.toArray();return[r,go(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function qh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=Q(t[i],n[i]),s)return s;return s=Q(t.length,n.length),s||(s=Q(t[t.length-2],n[n.length-2]),s||Q(t[t.length-1],n[n.length-1]))}/**
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
 */class km{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Ns(n.mutation,s,He.empty(),le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,X()).next(()=>n))}getLocalViewOfDocuments(e,t,n=X()){const s=ft();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=ys();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=ft();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,X()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Je();const o=xs(),c=function(){return xs()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Dt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ns(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,He.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>c.set(h,new hE(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const n=xs();let s=new pe((o,c)=>o-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||He.empty();f=c.applyToLocalView(h,f),n.set(l,f);const g=(s.get(c.batchId)||X()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=Yf();f.forEach(p=>{if(!i.has(p)){const R=sm(t.get(p),n.get(p));R!==null&&g.set(p,R),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return S.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):S.resolve(ft());let c=ks,l=i;return o.next(h=>S.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,X())).next(f=>({batchId:c,changes:Jf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(n=>{let s=ys();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=ys();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const h=function(g,p){return new qr(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((g,p)=>{o=o.insert(g,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Te.newInvalidDocument(f)))});let c=ys();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Ns(f.mutation,h,He.empty(),le.now()),ei(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class dE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return S.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:vm(s.bundledQuery),readTime:Ke(s.readTime)}}(t)),S.resolve()}}/**
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
 */class fE{constructor(){this.overlays=new pe(F.comparator),this.qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ft();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const s=ft(),i=t.length+1,o=new F(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=ft(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ft(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return S.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Hc(t,n));let i=this.qr.get(t);i===void 0&&(i=X(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
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
 */class mE{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class Xc{constructor(){this.Qr=new he(xe.$r),this.Ur=new he(xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new xe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new xe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new F(new ae([])),n=new xe(t,e),s=new xe(t,e+1),i=[];return this.Ur.forEachInRange([n,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new F(new ae([])),n=new xe(t,e),s=new xe(t,e+1);let i=X();return this.Ur.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new xe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class xe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return F.comparator(e.key,t.key)||Q(e.Yr,t.Yr)}static Kr(e,t){return Q(e.Yr,t.Yr)||F.comparator(e.key,t.key)}}/**
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
 */class gE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(xe.$r)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gc(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Cn:this.tr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(Q);return t.forEach(s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{n=n.add(c.Yr)})}),S.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const o=new xe(new F(i),0);let c=new he(Q);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),S.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(n=>{const s=this.Xr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return S.forEach(t.mutations,s=>{const i=new xe(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new xe(t,0),s=this.Zr.firstAfterOrEqual(n);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pE{constructor(e){this.ri=e,this.docs=function(){return new pe(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=Je();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Te.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Je();const o=t.path,c=new F(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Vc(gf(f),n)<=0||(s.has(f.key)||ei(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,n,s){j(9500)}ii(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _E(this)}getSize(e){return S.resolve(this.size)}}class _E extends Dm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class yE{constructor(e){this.persistence=e,this.si=new Nt(t=>Bn(t),Xs),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new Xc,this.targetCount=0,this.ai=$n.ur()}forEachTarget(e,t){return this.si.forEach((n,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),S.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Pr(t),S.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),S.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this._i.containsKey(t))}}/**
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
 */class Zc{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ze(0),this.li=!1,this.li=!0,this.hi=new mE,this.referenceDelegate=e(this),this.Pi=new yE(this),this.indexManager=new nE,this.remoteDocumentCache=function(s){return new pE(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Tm(t),this.Ii=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new gE(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new IE(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return S.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class IE extends _f{constructor(e){super(),this.currentSequenceNumber=e}}class Qo{constructor(e){this.persistence=e,this.Ri=new Xc,this.Vi=null}static mi(e){return new Qo(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,n=>{const s=F.fromPath(n);return this.gi(e,s).next(i=>{i||t.removeEntry(s,K.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.pi=new Nt(n=>qe(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Nm(this,t)}static mi(e,t){return new yo(e,t)}Ei(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return S.forEach(this.pi,(n,s)=>this.br(e,n,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(c=>{c||(n++,i.removeEntry(o,K.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),S.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),S.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gi(e.data.value)),t}br(e,t,n){return S.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return S.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class EE{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Mo("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore(Ys)}(e),function(l){l.createObjectStore(Ls,{keyPath:Dy}),l.createObjectStore(it,{keyPath:Zu,autoIncrement:!0}).createIndex(Pn,eh,{unique:!0}),l.createObjectStore(vr)}(e),$h(e),function(l){l.createObjectStore(vn)}(e));let o=S.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(br),l.deleteObjectStore(Ar),l.deleteObjectStore(xn)}(e),$h(e)),o=o.next(()=>function(l){const h=l.store(xn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return h.put(ao,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store(it).J().next(g=>{l.deleteObjectStore(it),l.createObjectStore(it,{keyPath:Zu,autoIncrement:!0}).createIndex(Pn,eh,{unique:!0});const p=h.store(it),R=g.map(x=>p.put(x));return S.waitFor(R)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Sr,{keyPath:jy})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.yi(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(Fs)}(e),this.wi(i)))),n<7&&s>=7&&(o=o.next(()=>this.Si(i))),n<8&&s>=8&&(o=o.next(()=>this.bi(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.Di(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Lo,{keyPath:qy})})(e),function(l){l.createObjectStore(Fo,{keyPath:$y})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore(Uo,{keyPath:Jy});h.createIndex(rc,Yy,{unique:!1}),h.createIndex(Af,Xy,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore(oo,{keyPath:ky});h.createIndex($i,My),h.createIndex(Ef,Oy)}(e)).next(()=>this.Ci(e,i)).next(()=>e.deleteObjectStore(vn))),n<14&&s>=14&&(o=o.next(()=>this.Fi(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Oc,{keyPath:zy,autoIncrement:!0}).createIndex(nc,Gy,{unique:!1}),l.createObjectStore(Ss,{keyPath:Ky}).createIndex(wf,Hy,{unique:!1}),l.createObjectStore(Rs,{keyPath:Wy}).createIndex(vf,Qy,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore(Ss).clear()}).next(()=>{t.objectStore(Rs).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Lc,{keyPath:Zy})})(e)})),n<18&&s>=18&&Qd()&&(o=o.next(()=>{t.objectStore(Ss).clear()}).next(()=>{t.objectStore(Rs).clear()})),o}wi(e){let t=0;return e.store(vn).ee((n,s)=>{t+=_o(s)}).next(()=>{const n={byteSize:t};return e.store(Fs).put(tc,n)})}yi(e){const t=e.store(Ls),n=e.store(it);return t.J().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Cn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Pn,o).next(c=>S.forEach(c,l=>{z(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const h=bn(this.serializer,l);return Rm(e,i.userId,h).next(()=>{})}))}))}Si(e){const t=e.store(br),n=e.store(vn);return e.store(xn).get(ao).next(s=>{const i=[];return n.ee((o,c)=>{const l=new ae(o),h=function(g){return[0,qe(g)]}(l);i.push(t.get(h).next(f=>f?S.resolve():(g=>t.put({targetId:0,path:qe(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}bi(e,t){e.createObjectStore(Us,{keyPath:By});const n=t.store(Us),s=new Yc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:qe(l)})}};return t.store(vn).ee({X:!0},(o,c)=>{const l=new ae(o);return i(l.popLast())}).next(()=>t.store(vr).ee({X:!0},([o,c,l],h)=>{const f=dt(c);return i(f.popLast())}))}Di(e){const t=e.store(Ar);return t.ee((n,s)=>{const i=Es(s),o=wm(this.serializer,i);return t.put(o)})}Ci(e,t){const n=t.store(vn),s=[];return n.ee((i,o)=>{const c=t.store(oo),l=function(g){return g.document?new F(ae.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):j(36783)}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>S.waitFor(s))}Fi(e,t){const n=t.store(it),s=Vm(this.serializer),i=new Zc(Qo.mi,this.serializer.yt);return n.J().next(o=>{const c=new Map;return o.forEach(l=>{let h=c.get(l.userId)??X();bn(this.serializer,l).keys().forEach(f=>h=h.add(f)),c.set(l.userId,h)}),S.forEach(c,(l,h)=>{const f=new De(h),g=Ho.wt(this.serializer,f),p=i.getIndexManager(f),R=Wo.wt(f,this.serializer,p,i.referenceDelegate);return new km(s,R,g,p).recalculateAndSaveOverlaysForDocumentKeys(new sc(t,Ze.ce),l).next()})})}}function $h(r){r.createObjectStore(br,{keyPath:Fy}).createIndex(Mc,Uy,{unique:!0}),r.createObjectStore(Ar,{keyPath:"targetId"}).createIndex(Tf,Ly,{unique:!0}),r.createObjectStore(xn)}const jt="IndexedDbPersistence",Oa=18e5,La=5e3,Fa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",TE="main";class el{constructor(e,t,n,s,i,o,c,l,h,f,g=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=o,this.document=c,this.xi=h,this.Oi=f,this.Ni=g,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=p=>Promise.resolve(),!el.v())throw new k(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cE(this,s),this.$i=t+TE,this.serializer=new Tm(l),this.Ui=new en(this.$i,this.Ni,new EE(this.serializer)),this.hi=new JI,this.Pi=new sE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Vm(this.serializer),this.Ii=new QI,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&Ge(jt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(C.FAILED_PRECONDITION,Fa);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new Ze(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Vi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(t=>this.isPrimary&&!t?this.Zi(e).next(()=>!1):!!t&&this.Xi(e).next(()=>!0))).catch(e=>{if(un(e))return V(jt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(jt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return ps(e).get(nr).next(t=>S.resolve(this.es(t)))}ts(e){return Vi(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Oa)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Pe(t,Sr);return n.J().next(s=>{const i=this.ss(s,Oa),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?S.resolve(!0):ps(e).get(nr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,La)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new k(C.FAILED_PRECONDITION,Fa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vi(e).J().next(n=>this.ss(n,La).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V(jt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Ys,Sr],e=>{const t=new sc(e,Ze.ce);return this.Zi(t).next(()=>this.ts(t))}),this.Ui.close(),this.Ps()}ss(e,t){return e.filter(n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>Vi(e).J().next(t=>this.ss(t,Oa).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Wo.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rE(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Ho.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){V(jt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===18?nI:l===17?Pf:l===16?tI:l===15?Fc:l===14?Rf:l===13?Sf:l===12?eI:l===11?bf:void j(60245)}(this.Ni);let o;return this.Ui.runTransaction(e,s,i,c=>(o=new sc(c,this.ci?this.ci.next():Ze.ce),t==="readwrite-primary"?this.Hi(o).next(l=>!!l||this.Yi(o)).next(l=>{if(!l)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new k(C.FAILED_PRECONDITION,pf);return n(o)}).next(l=>this.Xi(o).next(()=>l)):this.Is(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Is(e){return ps(e).get(nr).next(t=>{if(t!==null&&this.rs(t.leaseTimestampMs,La)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(C.FAILED_PRECONDITION,Fa)})}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ps(e).put(nr,t)}static v(){return en.v()}Zi(e){const t=ps(e);return t.get(nr).next(n=>this.es(n)?(V(jt,"Releasing primary lease."),t.delete(nr)):S.resolve())}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ge(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Wd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return V(jt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ge(jt,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ps(r){return Pe(r,Ys)}function Vi(r){return Pe(r,Sr)}function wE(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class tl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new tl(e,t.fromCache,n,s)}}/**
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
 */class Mm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Wd()?8:yf(Re())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vE;return this.Ss(e,t,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)})}).next(()=>i.result)}bs(e,t,n,s){return n.documentReadCount<this.fs?(lr()<=ee.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(lr()<=ee.DEBUG&&V("QueryEngine","Query:",ur(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(lr()<=ee.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):S.resolve())}ys(e,t){if(fh(t))return S.resolve(null);let n=et(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ho(t,null,"F"),n=et(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=X(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.Ds(t,c);return this.Cs(t,h,o,l.readTime)?this.ys(e,ho(t,null,"F")):this.vs(e,h,t,l)}))})))}ws(e,t,n,s){return fh(t)||s.isEqual(K.min())?S.resolve(null):this.ps.getDocuments(e,n).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,s)?S.resolve(null):(lr()<=ee.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ur(t)),this.vs(e,o,t,by(s,ks)).next(c=>c))})}Ds(e,t){let n=new he(Wf(e));return t.forEach((s,i)=>{ei(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return lr()<=ee.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ur(t)),this.ps.getDocumentsMatchingQuery(e,t,Ye.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const nl="LocalStore",AE=3e8;class bE{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new pe(Q),this.xs=new Nt(i=>Bn(i),Xs),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new km(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Om(r,e,t,n){return new bE(r,e,t,n)}async function Lm(r,e){const t=W(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function SE(r,e){const t=W(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,p=g.keys();let R=S.resolve();return p.forEach(x=>{R=R.next(()=>f.getEntry(l,x)).next(D=>{const N=h.docVersions.get(x);z(N!==null,48541),D.version.compareTo(N)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Fm(r){const e=W(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function RE(r,e){const t=W(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,g)=>{const p=s.get(g);if(!p)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,g)));let R=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(be.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(g,R),function(D,N,M){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=AE?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(p,R,f)&&c.push(t.Pi.updateTargetData(i,R))});let l=Je(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(PE(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!n.isEqual(K.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ms=s,i))}function PE(r,e,t){let n=X(),s=X();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Je();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(nl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function CE(r,e){const t=W(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Cn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function xE(r,e){const t=W(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Pi.getTargetData(n,e).next(i=>i?(s=i,S.resolve(s)):t.Pi.allocateTargetId(n).next(o=>(s=new wt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function yc(r,e,t){const n=W(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!un(o))throw o;V(nl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function zh(r,e,t){const n=W(r);let s=K.min(),i=X();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const g=W(l),p=g.xs.get(f);return p!==void 0?S.resolve(g.Ms.get(p)):g.Pi.getTargetData(h,f)}(n,o,et(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:K.min(),t?i:X())).next(c=>(NE(n,_I(e),c),{documents:c,Qs:i})))}function NE(r,e,t){let n=r.Os.get(e)||K.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(e,n)}class Gh{constructor(){this.activeTargetIds=vI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Um{constructor(){this.Mo=new Gh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Gh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const Kh="ConnectivityMonitor";class Hh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Kh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Kh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ki=null;function Ic(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
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
 */const Ua="RestConnection",VE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===co?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const o=Ic(),c=this.zo(e,t.toUriEncodedString());V(Ua,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Ur(h);return this.Jo(e,c,l,n,f).then(g=>(V(Ua,`Received RPC '${e}' ${o}: `,g),g),g=>{throw Fn(Ua,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",n),g})}Ho(e,t,n,s,i,o){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const n=VE[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */const Fe="WebChannelConnection";class OE extends kE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const o=Ic();return new Promise((c,l)=>{const h=new sf;h.setWithCredentials(!0),h.listenOnce(of.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bi.NO_ERROR:const g=h.getResponseJson();V(Fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Bi.TIMEOUT:V(Fe,`RPC '${e}' ${o} timed out`),l(new k(C.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const p=h.getStatus();if(V(Fe,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const D=function(M){const U=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN}(x.status);l(new k(D,x.message))}else l(new k(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new k(C.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{V(Fe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);V(Fe,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)})}T_(e,t,n){const s=Ic(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lf(),c=cf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Fe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=o.createWebChannel(f,l);this.I_(g);let p=!1,R=!1;const x=new ME({Yo:N=>{R?V(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(V(Fe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),p=!0),V(Fe,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Zo:()=>g.close()}),D=(N,M,U)=>{N.listen(M,O=>{try{U(O)}catch(G){setTimeout(()=>{throw G},0)}})};return D(g,_s.EventType.OPEN,()=>{R||(V(Fe,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),D(g,_s.EventType.CLOSE,()=>{R||(R=!0,V(Fe,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(g))}),D(g,_s.EventType.ERROR,N=>{R||(R=!0,Fn(Fe,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),x.a_(new k(C.UNAVAILABLE,"The operation could not be completed")))}),D(g,_s.EventType.MESSAGE,N=>{var M;if(!R){const U=N.data[0];z(!!U,16349);const O=U,G=(O==null?void 0:O.error)||((M=O[0])==null?void 0:M.error);if(G){V(Fe,`RPC '${e}' stream ${s} received error:`,G);const ne=G.status;let Z=function(I){const w=ve[I];if(w!==void 0)return am(w)}(ne),E=G.message;Z===void 0&&(Z=C.INTERNAL,E="Unknown error status: "+ne+" with message "+G.message),R=!0,x.a_(new k(Z,E)),g.close()}else V(Fe,`RPC '${e}' stream ${s} received:`,U),x.u_(U)}}),D(c,af.STAT_EVENT,N=>{N.stat===Xa.PROXY?V(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Xa.NOPROXY&&V(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}/**
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
 */function LE(){return typeof window<"u"?window:null}function Ji(){return typeof document<"u"?document:null}/**
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
 */function Jo(r){return new FI(r,!0)}/**
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
 */class Bm{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wh="PersistentStream";class jm{constructor(e,t,n,s,i,o,c,l){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Bm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new k(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(Wh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(V(Wh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FE extends jm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jI(this.serializer,e),n=function(i){if(!("targetChange"in i))return K.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Ke(o.readTime):K.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=fc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=lo(l)?{documents:gm(i,l)}:{query:pm(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=um(i,o.resumeToken);const h=hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=Mr(i,o.snapshotVersion.toTimestamp());const h=hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=$I(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=fc(this.serializer),t.removeTarget=e,this.q_(t)}}class UE extends jm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=qI(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=fc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>mo(this.serializer,n))};this.q_(t)}}/**
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
 */class BE{}class jE extends BE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,dc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(C.UNKNOWN,i.toString())})}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,dc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ge(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zn="RemoteStore";class $E{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{Hn(this)&&(V(zn,"Restarting streams for network reachability change."),await async function(l){const h=W(l);h.Ea.add(4),await zr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ni(h)}(this))})}),this.Ra=new qE(n,s)}}async function ni(r){if(Hn(r))for(const e of r.da)await e(!0)}async function zr(r){for(const e of r.da)await e(!1)}function qm(r,e){const t=W(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ol(t)?il(t):Gr(t).O_()&&sl(t,e))}function rl(r,e){const t=W(r),n=Gr(t);t.Ia.delete(e),n.O_()&&$m(t,e),t.Ia.size===0&&(n.O_()?n.L_():Hn(t)&&t.Ra.set("Unknown"))}function sl(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Gr(r).Y_(e)}function $m(r,e){r.Va.Ue(e),Gr(r).Z_(e)}function il(r){r.Va=new kI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Gr(r).start(),r.Ra.ua()}function ol(r){return Hn(r)&&!Gr(r).x_()&&r.Ia.size>0}function Hn(r){return W(r).Ea.size===0}function zm(r){r.Va=void 0}async function zE(r){r.Ra.set("Online")}async function GE(r){r.Ia.forEach((e,t)=>{sl(r,e)})}async function KE(r,e){zm(r),ol(r)?(r.Ra.ha(e),il(r)):r.Ra.set("Unknown")}async function HE(r,e,t){if(r.Ra.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(r,e)}catch(n){V(zn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Io(r,n)}else if(e instanceof Wi?r.Va.Ze(e):e instanceof cm?r.Va.st(e):r.Va.tt(e),!t.isEqual(K.min()))try{const n=await Fm(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(be.EMPTY_BYTE_STRING,f.snapshotVersion)),$m(i,l);const g=new wt(f.target,l,h,f.sequenceNumber);sl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V(zn,"Failed to raise snapshot:",n),await Io(r,n)}}async function Io(r,e,t){if(!un(e))throw e;r.Ea.add(1),await zr(r),r.Ra.set("Offline"),t||(t=()=>Fm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(zn,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await ni(r)})}function Gm(r,e){return e().catch(t=>Io(r,t,e))}async function ri(r){const e=W(r),t=on(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cn;for(;WE(e);)try{const s=await CE(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,QE(e,s)}catch(s){await Io(e,s)}Km(e)&&Hm(e)}function WE(r){return Hn(r)&&r.Ta.length<10}function QE(r,e){r.Ta.push(e);const t=on(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Km(r){return Hn(r)&&!on(r).x_()&&r.Ta.length>0}function Hm(r){on(r).start()}async function JE(r){on(r).ra()}async function YE(r){const e=on(r);for(const t of r.Ta)e.ea(t.mutations)}async function XE(r,e,t){const n=r.Ta.shift(),s=Kc.from(n,e,t);await Gm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ri(r)}async function ZE(r,e){e&&on(r).X_&&await async function(n,s){if(function(o){return NI(o)&&o!==C.ABORTED}(s.code)){const i=n.Ta.shift();on(n).B_(),await Gm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ri(n)}}(r,e),Km(r)&&Hm(r)}async function Qh(r,e){const t=W(r);t.asyncQueue.verifyOperationInProgress(),V(zn,"RemoteStore received new credentials");const n=Hn(t);t.Ea.add(3),await zr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ni(t)}async function eT(r,e){const t=W(r);e?(t.Ea.delete(2),await ni(t)):e||(t.Ea.add(2),await zr(t),t.Ra.set("Unknown"))}function Gr(r){return r.ma||(r.ma=function(t,n,s){const i=W(t);return i.sa(),new FE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:zE.bind(null,r),t_:GE.bind(null,r),r_:KE.bind(null,r),H_:HE.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ol(r)?il(r):r.Ra.set("Unknown")):(await r.ma.stop(),zm(r))})),r.ma}function on(r){return r.fa||(r.fa=function(t,n,s){const i=W(t);return i.sa(),new UE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:JE.bind(null,r),r_:ZE.bind(null,r),ta:YE.bind(null,r),na:XE.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await ri(r)):(await r.fa.stop(),r.Ta.length>0&&(V(zn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class al{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new al(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cl(r,e){if(Ge("AsyncQueue",`${e}: ${r}`),un(r))return new k(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class pr{static emptySet(e){return new pr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||F.comparator(t.key,n.key):(t,n)=>F.comparator(t.key,n.key),this.keyedMap=ys(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new pr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Jh{constructor(){this.ga=new pe(F.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Or{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Or(e,t,pr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class tT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nT{constructor(){this.queries=Yh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=W(t),i=s.queries;s.queries=Yh(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(n)})})(this,new k(C.ABORTED,"Firestore shutting down"))}}function Yh(){return new Nt(r=>Hf(r),qo)}async function ll(r,e){const t=W(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new tT,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=cl(o,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&hl(t)}async function ul(r,e){const t=W(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function rT(r,e){const t=W(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(n=!0);o.wa=s}}n&&hl(t)}function sT(r,e,t){const n=W(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function hl(r){r.Ca.forEach(e=>{e.next()})}var Ec,Xh;(Xh=Ec||(Ec={})).Ma="default",Xh.Cache="cache";class dl{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Or(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ec.Cache}}/**
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
 */class Wm{constructor(e){this.key=e}}class Qm{constructor(e){this.key=e}}class iT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Wf(e),this.tu=new pr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Jh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const p=s.get(f),R=ei(this.query,g)?g:null,x=!!p&&this.mutatedKeys.has(p.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;p&&R?p.data.isEqual(R.data)?x!==D&&(n.track({type:3,doc:R}),N=!0):this.su(p,R)||(n.track({type:2,doc:R}),N=!0,(l&&this.eu(R,l)>0||h&&this.eu(R,h)<0)&&(c=!0)):!p&&R?(n.track({type:0,doc:R}),N=!0):p&&!R&&(n.track({type:1,doc:p}),N=!0,(l||h)&&(c=!0)),N&&(R?(o=o.add(R),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(R,x){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:N})}};return D(R)-D(x)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(n),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Or(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=X(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Qm(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Wm(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Or.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fl="SyncEngine";class oT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class aT{constructor(e){this.key=e,this.hu=!1}}class cT{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Nt(c=>Hf(c),qo),this.Iu=new Map,this.Eu=new Set,this.du=new pe(F.comparator),this.Au=new Map,this.Ru=new Xc,this.Vu={},this.mu=new Map,this.fu=$n.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lT(r,e,t=!0){const n=tg(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Jm(n,e,t,!0),s}async function uT(r,e){const t=tg(r);await Jm(t,e,!0,!1)}async function Jm(r,e,t,n){const s=await xE(r.localStore,et(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await hT(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&qm(r.remoteStore,s),c}async function hT(r,e,t,n,s){r.pu=(g,p,R)=>async function(D,N,M,U){let O=N.view.ru(M);O.Cs&&(O=await zh(D.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,O)));const G=U&&U.targetChanges.get(N.targetId),ne=U&&U.targetMismatches.get(N.targetId)!=null,Z=N.view.applyChanges(O,D.isPrimaryClient,G,ne);return ed(D,N.targetId,Z.au),Z.snapshot}(r,g,p,R);const i=await zh(r.localStore,e,!0),o=new iT(e,i.Qs),c=o.ru(i.documents),l=ti.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);ed(r,t,h.au);const f=new oT(e,t,o);return r.Tu.set(e,f),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),h.snapshot}async function dT(r,e,t){const n=W(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(o=>!qo(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&rl(n.remoteStore,s.targetId),Tc(n,s.targetId)}).catch(Kn)):(Tc(n,s.targetId),await yc(n.localStore,s.targetId,!0))}async function fT(r,e){const t=W(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),rl(t.remoteStore,n.targetId))}async function mT(r,e,t){const n=ng(r);try{const s=await function(o,c){const l=W(o),h=le.now(),f=c.reduce((R,x)=>R.add(x.key),X());let g,p;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=Je(),D=X();return l.Ns.getEntries(R,f).next(N=>{x=N,x.forEach((M,U)=>{U.isValidDocument()||(D=D.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,x)).next(N=>{g=N;const M=[];for(const U of c){const O=CI(U,g.get(U.key).overlayedDocument);O!=null&&M.push(new Dt(U.key,O,Ff(O.value.mapValue),je.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,M,c)}).next(N=>{p=N;const M=N.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(R,N.batchId,M)})}).then(()=>({batchId:p.batchId,changes:Jf(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new pe(Q)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(n,s.batchId,t),await si(n,s.changes),await ri(n.remoteStore)}catch(s){const i=cl(s,"Failed to persist write");t.reject(i)}}async function Ym(r,e){const t=W(r);try{const n=await RE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?z(o.hu,14607):s.removedDocuments.size>0&&(z(o.hu,42227),o.hu=!1))}),await si(t,n,e)}catch(n){await Kn(n)}}function Zh(r,e,t){const n=W(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=W(o);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const p of g.Sa)p.va(c)&&(h=!0)}),h&&hl(l)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function gT(r,e,t){const n=W(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new pe(F.comparator);o=o.insert(i,Te.newNoDocument(i,K.min()));const c=X().add(i),l=new Ko(K.min(),new Map,new pe(Q),o,c);await Ym(n,l),n.du=n.du.remove(i),n.Au.delete(e),ml(n)}else await yc(n.localStore,e,!1).then(()=>Tc(n,e,t)).catch(Kn)}async function pT(r,e){const t=W(r),n=e.batch.batchId;try{const s=await SE(t.localStore,e);Zm(t,n,null),Xm(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await si(t,s)}catch(s){await Kn(s)}}async function _T(r,e,t){const n=W(r);try{const s=await function(o,c){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(z(g!==null,37113),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);Zm(n,e,t),Xm(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await si(n,s)}catch(s){await Kn(s)}}function Xm(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Zm(r,e,t){const n=W(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function Tc(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||eg(r,n)})}function eg(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(rl(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),ml(r))}function ed(r,e,t){for(const n of t)n instanceof Wm?(r.Ru.addReference(n.key,e),yT(r,n)):n instanceof Qm?(V(fl,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||eg(r,n.key)):j(19791,{wu:n})}function yT(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(V(fl,"New document in limbo: "+t),r.Eu.add(n),ml(r))}function ml(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new F(ae.fromString(e)),n=r.fu.next();r.Au.set(n,new aT(t)),r.du=r.du.insert(t,n),qm(r.remoteStore,new wt(et(Zs(t.path)),n,"TargetPurposeLimboResolution",Ze.ce))}}async function si(r,e,t){const n=W(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((c,l)=>{o.push(n.pu(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=tl.As(l.targetId,h);i.push(g)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(l,h){const f=W(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>S.forEach(h,p=>S.forEach(p.Es,R=>f.persistence.referenceDelegate.addReference(g,p.targetId,R)).next(()=>S.forEach(p.ds,R=>f.persistence.referenceDelegate.removeReference(g,p.targetId,R)))))}catch(g){if(!un(g))throw g;V(nl,"Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const R=f.Ms.get(p),x=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(p,D)}}}(n.localStore,i))}async function IT(r,e){const t=W(r);if(!t.currentUser.isEqual(e)){V(fl,"User change. New user:",e.toKey());const n=await Lm(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new k(C.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await si(t,n.Ls)}}function ET(r,e){const t=W(r),n=t.Au.get(e);if(n&&n.hu)return X().add(n.key);{let s=X();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function tg(r){const e=W(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ET.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gT.bind(null,e),e.Pu.H_=rT.bind(null,e.eventManager),e.Pu.yu=sT.bind(null,e.eventManager),e}function ng(r){const e=W(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_T.bind(null,e),e}class Gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Om(this.persistence,new Mm,e.initialUser,this.serializer)}Cu(e){return new Zc(Qo.mi,this.serializer)}Du(e){return new Um}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gs.provider={build:()=>new Gs};class TT extends Gs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){z(this.persistence.referenceDelegate instanceof yo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new xm(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Zc(n=>yo.mi(n,t),this.serializer)}}class wT extends Gs{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await ng(this.xu.syncEngine),await ri(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Om(this.persistence,new Mm,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new xm(n,e.asyncQueue,t)}Mu(e,t){const n=new Cy(t,this.persistence);return new Py(e.asyncQueue,n)}Cu(e){const t=wE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new el(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,LE(),Ji(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Um}}class Eo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Zh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=IT.bind(null,this.syncEngine),await eT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nT}()}createDatastore(e){const t=Jo(e.databaseInfo.databaseId),n=function(i){return new OE(i)}(e.databaseInfo);return function(i,o,c,l){return new jE(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new $E(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zh(this.syncEngine,t,0),function(){return Hh.v()?new Hh:new DE}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const g=new cT(s,i,o,c,l,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=W(s);V(zn,"RemoteStore shutting down."),i.Ea.add(5),await zr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Eo.provider={build:()=>new Eo};/**
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
 */class gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const an="FirestoreClient";class vT{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=De.UNAUTHENTICATED,this.clientId=Dc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{V(an,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V(an,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=cl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ba(r,e){r.asyncQueue.verifyOperationInProgress(),V(an,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Lm(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function td(r,e){r.asyncQueue.verifyOperationInProgress();const t=await rg(r);V(an,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Qh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Qh(e.remoteStore,s)),r._onlineComponents=e}async function rg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(an,"Using user provided OfflineComponentProvider");try{await Ba(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Fn("Error using user provided cache. Falling back to memory cache: "+t),await Ba(r,new Gs)}}else V(an,"Using default OfflineComponentProvider"),await Ba(r,new TT(void 0));return r._offlineComponents}async function pl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(an,"Using user provided OnlineComponentProvider"),await td(r,r._uninitializedComponentsProvider._online)):(V(an,"Using default OnlineComponentProvider"),await td(r,new Eo))),r._onlineComponents}function sg(r){return rg(r).then(e=>e.persistence)}function ig(r){return pl(r).then(e=>e.remoteStore)}function AT(r){return pl(r).then(e=>e.syncEngine)}async function To(r){const e=await pl(r),t=e.eventManager;return t.onListen=lT.bind(null,e.syncEngine),t.onUnlisten=dT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fT.bind(null,e.syncEngine),t}function bT(r){return r.asyncQueue.enqueue(async()=>{const e=await sg(r),t=await ig(r);return e.setNetworkEnabled(!0),function(s){const i=W(s);return i.Ea.delete(0),ni(i)}(t)})}function ST(r){return r.asyncQueue.enqueue(async()=>{const e=await sg(r),t=await ig(r);return e.setNetworkEnabled(!1),async function(s){const i=W(s);i.Ea.add(0),await zr(i),i.Ra.set("Offline")}(t)})}function RT(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new gl({next:p=>{f.Nu(),o.enqueueAndForget(()=>ul(i,g));const R=p.docs.has(c);!R&&p.fromCache?h.reject(new k(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&p.fromCache&&l&&l.source==="server"?h.reject(new k(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new dl(Zs(c.path),f,{includeMetadataChanges:!0,qa:!0});return ll(i,g)}(await To(r),r.asyncQueue,e,t,n)),n.promise}function PT(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new gl({next:p=>{f.Nu(),o.enqueueAndForget(()=>ul(i,g)),p.fromCache&&l.source==="server"?h.reject(new k(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new dl(c,f,{includeMetadataChanges:!0,qa:!0});return ll(i,g)}(await To(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function og(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const nd=new Map;/**
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
 */const ag="firestore.googleapis.com",rd=!0;class sd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ag,this.ssl=rd}else this.host=e.host,this.ssl=e.ssl??rd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iE)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=og(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yo{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fy;switch(n.type){case"firstParty":return new _y(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=nd.get(t);n&&(V("ComponentProvider","Removing Datastore"),nd.delete(t),n.terminate())}(this),Promise.resolve()}}function CT(r,e,t,n={}){var h;r=Me(r,Yo);const s=Ur(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},c=`${e}:${t}`;s&&(Gd(`https://${c}`),Kd("Firestore",!0)),i.host!==ag&&i.host!==c&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:n};if(!Mn(l,o)&&(r._setSettings(l),n.mockUserToken)){let f,g;if(typeof n.mockUserToken=="string")f=n.mockUserToken,g=De.MOCK_USER;else{f=$p(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new De(p)}r._authCredentials=new my(new hf(f,g))}}/**
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
 */class Vt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vt(this.firestore,e,this._query)}}class we{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Js(t,we._jsonSchema))return new we(e,n||null,new F(ae.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Ae("string",we._jsonSchemaVersion),referencePath:Ae("string")};class tn extends Vt{constructor(e,t,n){super(e,t,Zs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new F(e))}withConverter(e){return new tn(this.firestore,e,this._path)}}function Dn(r,e,...t){if(r=$e(r),ff("collection","path",e),r instanceof Yo){const n=ae.fromString(e,...t);return Wu(n),new tn(r,null,n)}{if(!(r instanceof we||r instanceof tn))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return Wu(n),new tn(r.firestore,null,n)}}function cn(r,e,...t){if(r=$e(r),arguments.length===1&&(e=Dc.newId()),ff("doc","path",e),r instanceof Yo){const n=ae.fromString(e,...t);return Hu(n),new we(r,null,new F(n))}{if(!(r instanceof we||r instanceof tn))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ae.fromString(e,...t));return Hu(n),new we(r.firestore,r instanceof tn?r.converter:null,new F(n))}}/**
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
 */const id="AsyncQueue";class od{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Bm(this,"async_queue_retry"),this._c=()=>{const n=Ji();n&&V(id,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new mt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!un(e))throw e;V(id,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Ge("INTERNAL UNHANDLED ERROR: ",ad(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=al.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:ad(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ad(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function cd(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class tt extends Yo{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new od,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new od(e),this._firestoreClient=void 0,await e}}}function xT(r,e){const t=typeof r=="object"?r:ef(),n=typeof r=="string"?r:e||co,s=xc(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=jp("firestore");i&&CT(s,...i)}return s}function Kr(r){if(r._terminated)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||cg(r),r._firestoreClient}function cg(r){var n,s,i;const e=r._freezeSettings(),t=function(c,l,h,f){return new sI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,og(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new vT(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function NT(r,e){Fn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return DT(r,Eo.provider,{build:n=>new wT(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function DT(r,e,t){if((r=Me(r,tt))._firestoreClient||r._terminated)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new k(C.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},cg(r)}function VT(r){return bT(Kr(r=Me(r,tt)))}function kT(r){return ST(Kr(r=Me(r,tt)))}/**
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
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(be.fromBase64String(e))}catch(t){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Js(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:Ae("string",Xe._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class Xo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ii{constructor(e){this._methodName=e}}/**
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
 */class ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ct._jsonSchemaVersion}}static fromJSON(e){if(Js(e,ct._jsonSchema))return new ct(e.latitude,e.longitude)}}ct._jsonSchemaVersion="firestore/geoPoint/1.0",ct._jsonSchema={type:Ae("string",ct._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class gt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Js(e,gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new gt(e.vectorValues);throw new k(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gt._jsonSchemaVersion="firestore/vectorValue/1.0",gt._jsonSchema={type:Ae("string",gt._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const MT=/^__.*__$/;class OT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}class lg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ug(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:r})}}class _l{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _l({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ug(this.Ac)&&MT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class LT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Jo(e)}Cc(e,t,n,s=!1){return new _l({Ac:e,methodName:t,Dc:n,path:ye.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zo(r){const e=r._freezeSettings(),t=Jo(r._databaseId);return new LT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function hg(r,e,t,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);El("Data must be an object, but it was:",o,n);const c=dg(n,o);let l,h;if(i.merge)l=new He(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const p=wc(e,g,t);if(!o.contains(p))throw new k(C.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mg(f,p)||f.push(p)}l=new He(f),h=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=o.fieldTransforms;return new OT(new Be(c),l,h)}class ea extends ii{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ea}}class yl extends ii{_toFieldTransform(e){return new zc(e.path,new Nr)}isEqual(e){return e instanceof yl}}class Il extends ii{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new kr(e.serializer,Zf(e.serializer,this.Fc));return new zc(e.path,t)}isEqual(e){return e instanceof Il&&this.Fc===e.Fc}}function FT(r,e,t,n){const s=r.Cc(1,e,t);El("Data must be an object, but it was:",s,n);const i=[],o=Be.empty();hn(n,(l,h)=>{const f=Tl(e,l,t);h=$e(h);const g=s.yc(f);if(h instanceof ea)i.push(f);else{const p=oi(h,g);p!=null&&(i.push(f),o.set(f,p))}});const c=new He(i);return new lg(o,c,s.fieldTransforms)}function UT(r,e,t,n,s,i){const o=r.Cc(1,e,t),c=[wc(e,n,t)],l=[s];if(i.length%2!=0)throw new k(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)c.push(wc(e,i[p])),l.push(i[p+1]);const h=[],f=Be.empty();for(let p=c.length-1;p>=0;--p)if(!mg(h,c[p])){const R=c[p];let x=l[p];x=$e(x);const D=o.yc(R);if(x instanceof ea)h.push(R);else{const N=oi(x,D);N!=null&&(h.push(R),f.set(R,N))}}const g=new He(h);return new lg(f,g,o.fieldTransforms)}function BT(r,e,t,n=!1){return oi(t,r.Cc(n?4:3,e))}function oi(r,e){if(fg(r=$e(r)))return El("Unsupported field value:",e,r),dg(r,e);if(r instanceof ii)return function(n,s){if(!ug(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=oi(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zf(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=le.fromDate(n);return{timestampValue:Mr(s.serializer,i)}}if(n instanceof le){const i=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mr(s.serializer,i)}}if(n instanceof ct)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xe)return{bytesValue:um(s.serializer,n._byteString)};if(n instanceof we){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof gt)return function(o,c){return{mapValue:{fields:{[Bc]:{stringValue:jc},[Rr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return $c(c.serializer,h)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${ko(n)}`)}(r,e)}function dg(r,e){const t={};return Cf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(r,(n,s)=>{const i=oi(s,e.mc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function fg(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof le||r instanceof ct||r instanceof Xe||r instanceof we||r instanceof ii||r instanceof gt)}function El(r,e,t){if(!fg(t)||!mf(t)){const n=ko(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function wc(r,e,t){if((e=$e(e))instanceof Xo)return e._internalPath;if(typeof e=="string")return Tl(r,e);throw wo("Field path arguments must be of type string or ",r,!1,void 0,t)}const jT=new RegExp("[~\\*/\\[\\]]");function Tl(r,e,t){if(e.search(jT)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Xo(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function wo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new k(C.INVALID_ARGUMENT,c+r+l)}function mg(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class gg{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qT extends gg{data(){return super.data()}}function ta(r,e){return typeof e=="string"?Tl(r,e):e instanceof Xo?e._internalPath:e._delegate._internalPath}/**
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
 */function pg(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wl{}class vl extends wl{}function mr(r,e,...t){let n=[];e instanceof wl&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Al).length,c=i.filter(l=>l instanceof na).length;if(o>1||o>0&&c>0)throw new k(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class na extends vl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new na(e,t,n)}_apply(e){const t=this._parse(e);return yg(e._query,t),new Vt(e.firestore,e.converter,uc(e._query,t))}_parse(e){const t=Zo(e.firestore);return function(i,o,c,l,h,f,g){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ud(g,f);const x=[];for(const D of g)x.push(ld(l,i,D));p={arrayValue:{values:x}}}else p=ld(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ud(g,f),p=BT(c,o,g,f==="in"||f==="not-in");return te.create(h,f,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _g(r,e,t){const n=e,s=ta("where",r);return na._create(s,n,t)}class Al extends wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Al(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)yg(o,l),o=uc(o,l)}(e._query,t),new Vt(e.firestore,e.converter,uc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bl extends vl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bl(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zs(i,o)}(e._query,this._field,this._direction);return new Vt(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new qr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Ts(r,e="asc"){const t=e,n=ta("orderBy",r);return bl._create(n,t)}class Sl extends vl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Sl(e,t,n)}_apply(e){return new Vt(e.firestore,e.converter,ho(e._query,this._limit,this._limitType))}}function Mi(r){return Ay("limit",r),Sl._create("limit",r,"F")}function ld(r,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new k(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kf(e)&&t.indexOf("/")!==-1)throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ae.fromString(t));if(!F.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return qs(r,new F(n))}if(t instanceof we)return qs(r,t._key);throw new k(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(t)}.`)}function ud(r,e){if(!Array.isArray(r)||r.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yg(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $T{convertValue(e,t="none"){switch(rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return hn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Rr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ge(o.doubleValue));return new gt(t)}convertGeoPoint(e){return new ct(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Bo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const t=St(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ae.fromString(e);z(Em(n),9688,{name:e});const s=new Un(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(t)||Ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Ig(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vn extends gg{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ta("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:Ae("string",Vn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Yi extends Vn{data(e={}){return super.data(e)}}class kn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Yi(this._firestore,this._userDataWriter,n.key,n,new ws(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:zT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:r})}}/**
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
 */function vo(r){r=Me(r,we);const e=Me(r.firestore,tt);return RT(Kr(e),r._key).then(t=>Tg(e,r,t))}kn._jsonSchemaVersion="firestore/querySnapshot/1.0",kn._jsonSchema={type:Ae("string",kn._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Rl extends $T{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function Pl(r){r=Me(r,Vt);const e=Me(r.firestore,tt),t=Kr(e),n=new Rl(e);return pg(r._query),PT(t,r._query).then(s=>new kn(e,n,r,s))}function Eg(r,e,t){r=Me(r,we);const n=Me(r.firestore,tt),s=Ig(r.converter,e,t);return sa(n,[hg(Zo(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,je.none())])}function ra(r,e,t,...n){r=Me(r,we);const s=Me(r.firestore,tt),i=Zo(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Xo?UT(i,"updateDoc",r._key,e,t,n):FT(i,"updateDoc",r._key,e),sa(s,[o.toMutation(r._key,je.exists(!0))])}function GT(r){return sa(Me(r.firestore,tt),[new Go(r._key,je.none())])}function Cl(r,e){const t=Me(r.firestore,tt),n=cn(r),s=Ig(r.converter,e);return sa(t,[hg(Zo(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,je.exists(!1))]).then(()=>n)}function KT(r,...e){var l,h,f;r=$e(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||cd(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(cd(e[n])){const g=e[n];e[n]=(l=g.next)==null?void 0:l.bind(g),e[n+1]=(h=g.error)==null?void 0:h.bind(g),e[n+2]=(f=g.complete)==null?void 0:f.bind(g)}let i,o,c;if(r instanceof we)o=Me(r.firestore,tt),c=Zs(r._key.path),i={next:g=>{e[n]&&e[n](Tg(o,r,g))},error:e[n+1],complete:e[n+2]};else{const g=Me(r,Vt);o=Me(g.firestore,tt),c=g._query;const p=new Rl(o);i={next:R=>{e[n]&&e[n](new kn(o,p,g,R))},error:e[n+1],complete:e[n+2]},pg(r._query)}return function(p,R,x,D){const N=new gl(D),M=new dl(R,N,x);return p.asyncQueue.enqueueAndForget(async()=>ll(await To(p),M)),()=>{N.Nu(),p.asyncQueue.enqueueAndForget(async()=>ul(await To(p),M))}}(Kr(o),c,s,i)}function sa(r,e){return function(n,s){const i=new mt;return n.asyncQueue.enqueueAndForget(async()=>mT(await AT(n),s,i)),i.promise}(Kr(r),e)}function Tg(r,e,t){const n=t.docs.get(e._key),s=new Rl(r);return new Vn(r,s,e._key,n,new ws(t.hasPendingWrites,t.fromCache),e.converter)}function lt(){return new yl("serverTimestamp")}function Qt(r){return new Il("increment",r)}(function(e,t=!0){(function(s){jr=s})(Br),Tr(new On("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new tt(new gy(n.getProvider("auth-internal")),new yy(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Xt($u,zu,e),Xt($u,zu,"esm2020")})();var HT="firebase",WT="12.1.0";/**
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
 */Xt(HT,WT,"app");function wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QT=wg,vg=new Ws("auth","Firebase",wg());/**
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
 */const Ao=new Pc("@firebase/auth");function JT(r,...e){Ao.logLevel<=ee.WARN&&Ao.warn(`Auth (${Br}): ${r}`,...e)}function Xi(r,...e){Ao.logLevel<=ee.ERROR&&Ao.error(`Auth (${Br}): ${r}`,...e)}/**
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
 */function Pt(r,...e){throw xl(r,...e)}function pt(r,...e){return xl(r,...e)}function Ag(r,e,t){const n={...QT(),[e]:t};return new Ws("auth","Firebase",n).create(e,{appName:r.name})}function nn(r){return Ag(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return vg.create(r,...e)}function H(r,e,...t){if(!r)throw xl(e,...t)}function vt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Xi(e),new Error(e)}function Ct(r,e){r||vt(e)}/**
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
 */function vc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function YT(){return hd()==="http:"||hd()==="https:"}function hd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function XT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YT()||Wp()||"connection"in navigator)?navigator.onLine:!0}function ZT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||Qp()}get(){return XT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nl(r,e){Ct(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ew={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nw=new ai(3e4,6e4);function ia(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Hr(r,e,t,n,s={}){return Sg(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Qs({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h={method:e,headers:l,...i};return Hp()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&Ur(r.emulatorConfig.host)&&(h.credentials="include"),bg.fetch()(await Pg(r,r.config.apiHost,t,c),h)})}async function Sg(r,e,t){r._canInitEmulator=!1;const n={...ew,...e};try{const s=new rw(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ag(r,f,h);Pt(r,f)}}catch(s){if(s instanceof xt)throw s;Pt(r,"network-request-failed",{message:String(s)})}}async function Rg(r,e,t,n,s={}){const i=await Hr(r,e,t,n,s);return"mfaPendingCredential"in i&&Pt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pg(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?Nl(r.config,s):`${r.config.apiScheme}://${s}`;return tw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class rw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(pt(this.auth,"network-request-failed")),nw.get())})}}function Oi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=pt(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function sw(r,e){return Hr(r,"POST","/v1/accounts:delete",e)}async function bo(r,e){return Hr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ds(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(r,e=!1){const t=$e(r),n=await t.getIdToken(e),s=Dl(n);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Ds(ja(s.auth_time)),issuedAtTime:Ds(ja(s.iat)),expirationTime:Ds(ja(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(r){return Number(r)*1e3}function Dl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bd(t);return s?JSON.parse(s):(Xi("Failed to decode base64 JWT payload"),null)}catch(s){return Xi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dd(r){const e=Dl(r);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ks(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof xt&&ow(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function ow({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ac{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(r){var g;const e=r.auth,t=await r.getIdToken(),n=await Ks(r,bo(e,{idToken:t}));H(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?Cg(s.providerUserInfo):[],o=lw(r.providerData,i),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ac(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function cw(r){const e=$e(r);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lw(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Cg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function uw(r,e){const t=await Sg(r,{},async()=>{const n=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Pg(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return r.emulatorConfig&&Ur(r.emulatorConfig.host)&&(l.credentials="include"),bg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hw(r,e){return Hr(r,"POST","/v2/accounts:revokeToken",ia(r,e))}/**
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
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=dd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await uw(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new _r;return n&&(H(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function qt(r,e){H(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class at{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ac(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iw(this,e)}reload(){return cw(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await Ks(this,sw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:p,isAnonymous:R,providerData:x,stsTokenManager:D}=t;H(g&&D,e,"internal-error");const N=_r.fromJSON(this.name,D);H(typeof g=="string",e,"internal-error"),qt(n,e.name),qt(s,e.name),H(typeof p=="boolean",e,"internal-error"),H(typeof R=="boolean",e,"internal-error"),qt(i,e.name),qt(o,e.name),qt(c,e.name),qt(l,e.name),qt(h,e.name),qt(f,e.name);const M=new at({uid:g,auth:e,email:s,emailVerified:p,displayName:n,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(M.providerData=x.map(U=>({...U}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,t,n=!1){const s=new _r;s.updateFromServerResponse(t);const i=new at({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await So(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new _r;c.updateFromIdToken(n);const l=new at({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ac(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const fd=new Map;function At(r){Ct(r instanceof Function,"Expected a class definition");let e=fd.get(r);return e?(Ct(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fd.set(r,e),e)}/**
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
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xg.type="NONE";const md=xg;/**
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
 */function Zi(r,e,t){return`firebase:${r}:${e}:${t}`}class yr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bo(this.auth,{idToken:e}).catch(()=>{});return t?at._fromGetAccountInfoResponse(this.auth,t,e):null}return at._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yr(At(md),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||At(md);const o=Zi(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const p=await bo(e,{idToken:f}).catch(()=>{});if(!p)break;g=await at._fromGetAccountInfoResponse(e,p,f)}else g=at._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new yr(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new yr(i,e,n))}}/**
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
 */function gd(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Lg(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||Vg(e))&&!e.includes("edge/"))return"Chrome";if(Mg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ng(r=Re()){return/firefox\//i.test(r)}function Dg(r=Re()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vg(r=Re()){return/crios\//i.test(r)}function kg(r=Re()){return/iemobile/i.test(r)}function Mg(r=Re()){return/android/i.test(r)}function Og(r=Re()){return/blackberry/i.test(r)}function Lg(r=Re()){return/webos/i.test(r)}function Vl(r=Re()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function dw(r=Re()){var e;return Vl(r)&&!!((e=window.navigator)!=null&&e.standalone)}function fw(){return Jp()&&document.documentMode===10}function Fg(r=Re()){return Vl(r)||Mg(r)||Lg(r)||Og(r)||/windows phone/i.test(r)||kg(r)}/**
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
 */function Ug(r,e=[]){let t;switch(r){case"Browser":t=gd(Re());break;case"Worker":t=`${gd(Re())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Br}/${n}`}/**
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
 */class mw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function gw(r,e={}){return Hr(r,"GET","/v2/passwordPolicy",ia(r,e))}/**
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
 */const pw=6;class _w{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yw{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pd(this),this.idTokenSubscription=new pd(this),this.beforeStateQueue=new mw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bo(this,{idToken:e}),n=await at._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(nn(this));const t=e?$e(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gw(this),t=new _w(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await hw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&JT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oa(r){return $e(r)}class pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=n_(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Iw(r){kl=r}function Ew(r){return kl.loadJS(r)}function Tw(){return kl.gapiScript}function ww(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vw(r,e){const t=xc(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Mn(i,e??{}))return s;Pt(s,"already-initialized")}return t.initialize({options:e})}function Aw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function bw(r,e,t){const n=oa(r);H(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Bg(e),{host:o,port:c}=Sw(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){H(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),H(Mn(h,n.config.emulator)&&Mn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,Ur(o)?(Gd(`${i}//${o}${l}`),Kd("Auth",!0)):s||Rw()}function Bg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Sw(r){const e=Bg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:_d(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:_d(o)}}}function _d(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Rw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class jg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}/**
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
 */async function Ir(r,e){return Rg(r,"POST","/v1/accounts:signInWithIdp",ia(r,e))}/**
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
 */const Pw="http://localhost";class Gn extends jg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new Gn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ir(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ir(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ir(e,t)}buildRequest(){const e={requestUri:Pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
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
 */class qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends ci{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gt.credential(t,n)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class Kt extends ci{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
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
 */class Ht extends ci{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ht.credential(t,n)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Cw(r,e){return Rg(r,"POST","/v1/accounts:signUp",ia(r,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await at._fromIdTokenResponse(e,n,s),o=yd(n);return new ln({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=yd(n);return new ln({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function yd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function xw(r){var s;if(ot(r.app))return Promise.reject(nn(r));const e=oa(r);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new ln({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Cw(e,{returnSecureToken:!0}),n=await ln._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class Ro extends xt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Ro(e,t,n,s)}}function $g(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(r,i,e,n):i})}async function Nw(r,e,t=!1){const n=await Ks(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ln._forOperation(r,"link",n)}/**
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
 */async function Dw(r,e,t=!1){const{auth:n}=r;if(ot(n.app))return Promise.reject(nn(n));const s="reauthenticate";try{const i=await Ks(r,$g(n,s,e,r),t);H(i.idToken,n,"internal-error");const o=Dl(i.idToken);H(o,n,"internal-error");const{sub:c}=o;return H(r.uid===c,n,"user-mismatch"),ln._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(n,"user-mismatch"),i}}/**
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
 */async function Vw(r,e,t=!1){if(ot(r.app))return Promise.reject(nn(r));const n="signIn",s=await $g(r,n,e),i=await ln._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function kw(r,e,t,n){return $e(r).onIdTokenChanged(e,t,n)}function Mw(r,e,t){return $e(r).beforeAuthStateChanged(e,t)}const Po="__sak";/**
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
 */class zg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ow=1e3,Lw=10;class Gg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);fw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lw):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gg.type="LOCAL";const Fw=Gg;/**
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
 */class Kg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kg.type="SESSION";const Hg=Kg;/**
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
 */function Uw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new aa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await Uw(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
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
 */function Ml(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ml("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function jw(r){_t().location.href=r}/**
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
 */function Wg(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function qw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $w(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function zw(){return Wg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",Gw=1,Co="firebaseLocalStorage",Jg="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ca(r,e){return r.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function Kw(){const r=indexedDB.deleteDatabase(Qg);return new li(r).toPromise()}function bc(){const r=indexedDB.open(Qg,Gw);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Co,{keyPath:Jg})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Co)?e(n):(n.close(),await Kw(),e(await bc()))})})}async function Id(r,e,t){const n=ca(r,!0).put({[Jg]:e,value:t});return new li(n).toPromise()}async function Hw(r,e){const t=ca(r,!1).get(e),n=await new li(t).toPromise();return n===void 0?null:n.value}function Ed(r,e){const t=ca(r,!0).delete(e);return new li(t).toPromise()}const Ww=800,Qw=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Qw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(zw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await qw(),!this.activeServiceWorker)return;this.sender=new Bw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Id(e,Po,"1"),await Ed(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Id(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Hw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ed(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ca(s,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const Jw=Yg;new ai(3e4,6e4);/**
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
 */function Yw(r,e){return e?At(e):(H(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ol extends jg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xw(r){return Vw(r.auth,new Ol(r),r.bypassAuthState)}function Zw(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),Dw(t,new Ol(r),r.bypassAuthState)}async function ev(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),Nw(t,new Ol(r),r.bypassAuthState)}/**
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
 */class Xg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xw;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return Zw;default:Pt(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tv=new ai(2e3,1e4);class gr extends Xg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}gr.currentPopupAction=null;/**
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
 */const nv="pendingRedirect",eo=new Map;class rv extends Xg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=eo.get(this.auth._key());if(!e){try{const n=await sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}eo.set(this.auth._key(),e)}return this.bypassAuthState||eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sv(r,e){const t=av(e),n=ov(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function iv(r,e){eo.set(r._key(),e)}function ov(r){return At(r._redirectPersistence)}function av(r){return Zi(nv,r.config.apiKey,r.name)}async function cv(r,e,t=!1){if(ot(r.app))return Promise.reject(nn(r));const n=oa(r),s=Yw(n,e),o=await new rv(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const lv=10*60*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zg(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Zg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(r);default:return!1}}/**
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
 */async function dv(r,e={}){return Hr(r,"GET","/v1/projects",e)}/**
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
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function gv(r){if(r.config.emulator)return;const{authorizedDomains:e}=await dv(r);for(const t of e)try{if(pv(t))return}catch{}Pt(r,"unauthorized-domain")}function pv(r){const e=vc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!mv.test(t))return!1;if(fv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const _v=new ai(3e4,6e4);function wd(){const r=_t().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function yv(r){return new Promise((e,t)=>{var s,i,o;function n(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),t(pt(r,"network-request-failed"))},timeout:_v.get()})}if((i=(s=_t().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=_t().gapi)!=null&&o.load)n();else{const c=ww("iframefcb");return _t()[c]=()=>{gapi.load?n():t(pt(r,"network-request-failed"))},Ew(`${Tw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw to=null,e})}let to=null;function Iv(r){return to=to||yv(r),to}/**
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
 */const Ev=new ai(5e3,15e3),Tv="__/auth/iframe",wv="emulator/auth/iframe",vv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(r){const e=r.config;H(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Nl(e,wv):`https://${r.config.authDomain}/${Tv}`,n={apiKey:e.apiKey,appName:r.name,v:Br},s=Av.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Qs(n).slice(1)}`}async function Sv(r){const e=await Iv(r),t=_t().gapi;return H(t,r,"internal-error"),e.open({where:document.body,url:bv(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vv,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=pt(r,"network-request-failed"),c=_t().setTimeout(()=>{i(o)},Ev.get());function l(){_t().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Rv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pv=500,Cv=600,xv="_blank",Nv="http://localhost";class vd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dv(r,e,t,n=Pv,s=Cv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...Rv,width:n.toString(),height:s.toString(),top:i,left:o},h=Re().toLowerCase();t&&(c=Vg(h)?xv:t),Ng(h)&&(e=e||Nv,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[R,x])=>`${p}${R}=${x},`,"");if(dw(h)&&c!=="_self")return Vv(e||"",c),new vd(null);const g=window.open(e||"",c,f);H(g,r,"popup-blocked");try{g.focus()}catch{}return new vd(g)}function Vv(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const kv="__/auth/handler",Mv="emulator/auth/handler",Ov=encodeURIComponent("fac");async function Ad(r,e,t,n,s,i){H(r.config.authDomain,r,"auth-domain-config-required"),H(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Br,eventId:s};if(e instanceof qg){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",t_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(i||{}))o[f]=g}if(e instanceof ci){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${Ov}=${encodeURIComponent(l)}`:"";return`${Lv(r)}?${Qs(c).slice(1)}${h}`}function Lv({config:r}){return r.emulator?Nl(r,Mv):`https://${r.authDomain}/${kv}`}/**
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
 */const qa="webStorageSupport";class Fv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hg,this._completeRedirectFn=cv,this._overrideRedirectResult=iv}async _openPopup(e,t,n,s){var o;Ct((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ad(e,t,n,vc(),s);return Dv(e,i,Ml())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Ad(e,t,n,vc(),s);return jw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Sv(e),n=new uv(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qa,{type:qa},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[qa];i!==void 0&&t(!!i),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fg()||Dg()||Vl()}}const Uv=Fv;var bd="@firebase/auth",Sd="1.11.0";/**
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
 */class Bv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jv(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qv(r){Tr(new On("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(r)},h=new yw(n,s,i,l);return Aw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Tr(new On("auth-internal",e=>{const t=oa(e.getProvider("auth").getImmediate());return(n=>new Bv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(bd,Sd,jv(r)),Xt(bd,Sd,"esm2020")}/**
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
 */const $v=5*60,zv=zd("authIdTokenMaxAge")||$v;let Rd=null;const Gv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>zv)return;const s=t==null?void 0:t.token;Rd!==s&&(Rd=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kv(r=ef()){const e=xc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=vw(r,{popupRedirectResolver:Uv,persistence:[Jw,Fw,Hg]}),n=zd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Gv(i.toString());Mw(t,o,()=>o(t.currentUser)),kw(t,c=>o(c))}}const s=qd("auth");return s&&bw(t,`http://${s}`),t}function Hv(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Iw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=pt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Hv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qv("Browser");const Wv=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],xo=Wv.filter(r=>!{VITE_FIREBASE_API_KEY:"AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",VITE_FIREBASE_AUTH_DOMAIN:"riprap-c725e.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"riprap-c725e",VITE_FIREBASE_STORAGE_BUCKET:"riprap-c725e.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"995615030562",VITE_FIREBASE_APP_ID:"1:995615030562:web:5194ca1ed7659de1cd797b",VITE_FIREBASE_MEASUREMENT_ID:"G-6MDLTVXSTF",VITE_FIREBASE_USE_EMULATOR:"false",VITE_API_BASE_URL:"/.netlify/functions/api",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}[r]),Qv=xo.length>0?{apiKey:"demo-api-key",authDomain:"demo-project.firebaseapp.com",projectId:"demo-project",storageBucket:"demo-project.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:demo-app-id",measurementId:"G-DEMO-ID"}:{apiKey:"AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",authDomain:"riprap-c725e.firebaseapp.com",projectId:"riprap-c725e",storageBucket:"riprap-c725e.firebasestorage.app",messagingSenderId:"995615030562",appId:"1:995615030562:web:5194ca1ed7659de1cd797b",measurementId:"G-6MDLTVXSTF"};xo.length>0?(console.warn("Firebase environment variables not found, using fallback configuration:",xo),console.warn("Firebase features will be limited. Set up environment variables for full functionality.")):console.log("Firebase configuration loaded from environment variables");const ep=Zd(Qv),ke=xT(ep),$a=Kv(ep),Lr=xo.length>0;let Jv=!1;async function Yv(){try{if(Lr){console.warn("Demo mode: Skipping Firebase persistence initialization");return}await NT(ke),Jv=!0,console.log("Firebase offline persistence enabled")}catch(r){console.warn("Firebase persistence failed:",r.code),r.code==="failed-precondition"?console.warn("Firebase persistence failed: Multiple tabs open"):r.code==="unimplemented"&&console.warn("Firebase persistence failed: Browser not supported")}}Lr||Yv();async function Xv(){try{if(Lr)return console.warn("Demo mode: Returning mock anonymous user"),{uid:"demo-user-"+Date.now(),isAnonymous:!0,providerData:[]};if(!$a.currentUser){const r=await xw($a);return console.log("Signed in anonymously:",r.user.uid),r.user}return $a.currentUser}catch(r){if(console.error("Anonymous authentication failed:",r),r.code==="auth/network-request-failed"||r.message.includes("network")||r.message.includes("CSP"))return console.warn("Network/CSP error detected, falling back to mock user"),{uid:"offline-user-"+Date.now(),isAnonymous:!0,providerData:[],isOfflineMode:!0};throw r}}function za(r,e,t,n){const i=(t-r)*Math.PI/180,o=(n-e)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function Zv(r){return r*.621371}function e0(){let r=localStorage.getItem("riprap_device_id");if(!r){const e=document.createElement("canvas"),t=e.getContext("2d");t.textBaseline="top",t.font="14px Arial",t.fillText("RipRap device fingerprint",2,2);const n=[e.toDataURL(),navigator.userAgent,navigator.language,screen.width+"x"+screen.height,new Date().getTimezoneOffset(),navigator.platform].join("|");let s=0;for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);s=(s<<5)-s+o,s=s&s}r=`device_${Math.abs(s)}_${Date.now()}`,localStorage.setItem("riprap_device_id",r)}return r}const Fr={async getOrCreateUser(r=null,e=null){try{if(Lr)return console.warn("Demo mode: Returning mock user profile"),{id:"demo-user-"+Date.now(),screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:new Date,postsCount:0,commentsCount:0,votesCount:0,isDemoMode:!0};const t=await Xv(),n=e0(),s=`${t.uid}_${n}`,i=cn(ke,"users",s),o=await vo(i);if(o.exists())return{id:s,...o.data()};const c={deviceId:n,firebaseUid:t.uid,screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:lt(),postsCount:0,commentsCount:0,votesCount:0,lastActive:lt()};return await Eg(i,c),{id:s,...c}}catch(t){if(console.error("Error getting/creating user:",t),t.code==="auth/network-request-failed"||t.message.includes("network")||t.message.includes("CSP")||t.message.includes("firestore"))return console.warn("Firebase error detected, falling back to offline user profile"),{id:"offline-user-"+Date.now(),screenName:r||this.generateScreenName(),color:e||{name:"Navy",value:"#1e40af"},createdAt:new Date,postsCount:0,commentsCount:0,votesCount:0,isOfflineMode:!0};throw t}},async updateUser(r,e){try{const t=cn(ke,"users",r);await ra(t,{...e,lastActive:lt()})}catch(t){throw console.error("Error updating user:",t),t}},generateScreenName(){const r=["Angler","Reel","Deep","Shore","Cast","Hook","Tide","Wave"],e=["Fisher","Master","Hunter","Catcher","Seeker","Captain","Admiral"],t=r[Math.floor(Math.random()*r.length)],n=e[Math.floor(Math.random()*e.length)],s=Math.floor(Math.random()*999)+1;return`${t}${n}${s}`}},Li={async createPost(r,e,t){try{if(Lr)return console.warn("Demo mode: Post creation simulated (no actual Firebase connection)"),{id:"demo-post-"+Date.now(),success:!0,message:"Post created in demo mode"};const n=Dn(ke,"posts"),s={content:r.trim(),authorId:t.id,authorName:t.screenName,authorColor:t.color,location:e?new ct(e.lat,e.lng):null,nearestCity:(e==null?void 0:e.nearestCity)||null,upvotes:0,downvotes:0,score:0,commentsCount:0,reportsCount:0,createdAt:lt(),updatedAt:lt()},i=await Cl(n,s);return await Fr.updateUser(t.id,{postsCount:Qt(1),lastActive:lt()}),{id:i.id,...s}}catch(n){throw console.error("Error creating post:",n),n}},async getPosts(r=null,e=16,t=20,n="hot"){try{if(Lr)return console.warn("Demo mode: Returning empty posts array (no actual Firebase connection)"),[];const s=Dn(ke,"posts");let i;switch(n){case"new":i=mr(s,Ts("createdAt","desc"),Mi(t));break;case"top":i=mr(s,Ts("score","desc"),Mi(t));break;case"hot":default:i=mr(s,Ts("updatedAt","desc"),Mi(t));break}const o=await Pl(i);let c=[];return o.forEach(l=>{var f,g,p,R;const h=l.data();c.push({id:l.id,...h,createdAt:((g=(f=h.createdAt)==null?void 0:f.toDate())==null?void 0:g.toISOString())||new Date().toISOString(),updatedAt:((R=(p=h.updatedAt)==null?void 0:p.toDate())==null?void 0:R.toISOString())||new Date().toISOString(),location:h.location?{lat:h.location.latitude,lng:h.location.longitude}:null})}),r&&r.lat&&r.lng&&(c=c.filter(l=>l.location?za(r.lat,r.lng,l.location.lat,l.location.lng)<=e:!1),c=c.map(l=>({...l,distance:l.location?Zv(za(r.lat,r.lng,l.location.lat,l.location.lng)):null}))),c=c.filter(l=>l.score>-5),c}catch(s){throw console.error("Error getting posts:",s),s}},async getPost(r){var e,t,n,s;try{const i=cn(ke,"posts",r),o=await vo(i);if(!o.exists())throw new Error("Post not found");const c=o.data(),l=await Sc.getComments(r);return{id:o.id,...c,comments:l,createdAt:((t=(e=c.createdAt)==null?void 0:e.toDate())==null?void 0:t.toISOString())||new Date().toISOString(),updatedAt:((s=(n=c.updatedAt)==null?void 0:n.toDate())==null?void 0:s.toISOString())||new Date().toISOString(),location:c.location?{lat:c.location.latitude,lng:c.location.longitude}:null}}catch(i){throw console.error("Error getting post:",i),i}},subscribeToPosts(r,e=null,t=16,n=20){const s=Dn(ke,"posts"),i=mr(s,Ts("updatedAt","desc"),Mi(n));return KT(i,o=>{let c=[];o.forEach(l=>{var f,g,p,R;const h=l.data();c.push({id:l.id,...h,createdAt:((g=(f=h.createdAt)==null?void 0:f.toDate())==null?void 0:g.toISOString())||new Date().toISOString(),updatedAt:((R=(p=h.updatedAt)==null?void 0:p.toDate())==null?void 0:R.toISOString())||new Date().toISOString(),location:h.location?{lat:h.location.latitude,lng:h.location.longitude}:null})}),e&&e.lat&&e.lng&&(c=c.filter(l=>l.location?za(e.lat,e.lng,l.location.lat,l.location.lng)<=t:!1)),c=c.filter(l=>l.score>-5),r(c)})}},Pd={async castVote(r,e,t){try{const n=cn(ke,"votes",`${e}_${r}`),s=cn(ke,"posts",r),[i,o]=await Promise.all([vo(n),vo(s)]);if(!o.exists())throw new Error("Post not found");const c=o.data(),l=i.exists()?i.data():null;let h=0,f=0,g=0;return l&&(l.type==="upvote"?(h-=1,g-=1):(f-=1,g+=1)),!l||l.type!==t?(t==="upvote"?(h+=1,g+=1):(f+=1,g-=1),await Eg(n,{userId:e,postId:r,type:t,createdAt:lt()})):await GT(n),await ra(s,{upvotes:Qt(h),downvotes:Qt(f),score:Qt(g),updatedAt:lt()}),await Fr.updateUser(e,{votesCount:Qt(1)}),{success:!0}}catch(n){throw console.error("Error casting vote:",n),n}},async getUserVotes(r,e){try{const t={},n=Dn(ke,"votes"),s=mr(n,_g("userId","==",r));return(await Pl(s)).forEach(o=>{const c=o.data();e.includes(c.postId)&&(t[c.postId]=c.type)}),t}catch(t){throw console.error("Error getting user votes:",t),t}}},Sc={async createComment(r,e,t){try{const n=Dn(ke,"comments"),s={postId:r,content:e.trim(),authorId:t.id,authorName:t.screenName,authorColor:t.color,createdAt:lt()},i=await Cl(n,s),o=cn(ke,"posts",r);return await ra(o,{commentsCount:Qt(1),updatedAt:lt()}),await Fr.updateUser(t.id,{commentsCount:Qt(1)}),{id:i.id,...s}}catch(n){throw console.error("Error creating comment:",n),n}},async getComments(r){try{const e=Dn(ke,"comments"),t=mr(e,_g("postId","==",r),Ts("createdAt","asc")),n=await Pl(t),s=[];return n.forEach(i=>{var c,l;const o=i.data();s.push({id:i.id,...o,createdAt:((l=(c=o.createdAt)==null?void 0:c.toDate())==null?void 0:l.toISOString())||new Date().toISOString()})}),s}catch(e){throw console.error("Error getting comments:",e),e}}},t0={async reportPost(r,e,t){try{const n=Dn(ke,"reports"),s={postId:r,userId:e,reason:t.trim(),createdAt:lt()};await Cl(n,s);const i=cn(ke,"posts",r);return await ra(i,{reportsCount:Qt(1)}),{success:!0}}catch(n){throw console.error("Error reporting post:",n),n}}},Cd={async goOffline(){await kT(ke)},async goOnline(){await VT(ke)}},cr={getUserIdentity:Fr.getOrCreateUser,updateUserProfile:Fr.updateUser,createPost:Li.createPost,getPosts:Li.getPosts,getPost:Li.getPost,subscribeToPostsUpdates:Li.subscribeToPosts,castVote:Pd.castVote,getUserVotes:Pd.getUserVotes,createComment:Sc.createComment,getComments:Sc.getComments,reportPost:t0.reportPost,goOffline:Cd.goOffline,goOnline:Cd.goOnline};class n0 extends Md.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("React Error Boundary caught an error:",e,t);const n={message:e.message,stack:e.stack,componentStack:t.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href};try{localStorage.setItem("riprap_last_error",JSON.stringify(n))}catch(i){console.warn("Failed to save error report:",i)}(e.message.includes("Firebase")||e.message.includes("firestore")||e.message.includes("auth/"))&&console.warn("Firebase error detected, app may recover after restart")}render(){return this.state.hasError?T.jsx("div",{className:"min-h-screen bg-navy-900 flex items-center justify-center p-4",children:T.jsxs("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 text-center",children:[T.jsx("div",{className:"text-red-600 text-6xl mb-4",children:"⚠️"}),T.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-2",children:"Something went wrong"}),T.jsx("p",{className:"text-gray-600 mb-4",children:"The app encountered an error and needs to restart."}),T.jsx("button",{onClick:()=>window.location.reload(),className:"bg-navy-600 text-white px-4 py-2 rounded hover:bg-navy-700 transition-colors",children:"Restart App"})]})}):this.props.children}}const Hs={"montauk-point-ny":{lat:41.0362,lng:-71.8562,name:"Montauk Point, NY",state:"NY"},"cape-cod-ma":{lat:41.6688,lng:-70.2962,name:"Cape Cod, MA",state:"MA"},"block-island-ri":{lat:41.1775,lng:-71.5773,name:"Block Island, RI",state:"RI"},"chesapeake-bay-md":{lat:38.9784,lng:-76.4951,name:"Chesapeake Bay, MD",state:"MD"},"sandy-hook-nj":{lat:40.4168,lng:-74.0018,name:"Sandy Hook, NJ",state:"NJ"},"orient-point-ny":{lat:41.1615,lng:-72.2351,name:"Orient Point, NY",state:"NY"},"race-point-ma":{lat:42.0654,lng:-70.2457,name:"Race Point, MA",state:"MA"},"watch-hill-ri":{lat:41.3079,lng:-71.8565,name:"Watch Hill, RI",state:"RI"},"martha-vineyard-ma":{lat:41.3888,lng:-70.642,name:"Martha's Vineyard, MA",state:"MA"},"nantucket-ma":{lat:41.2835,lng:-70.0995,name:"Nantucket, MA",state:"MA"},"long-island-sound-ct":{lat:41.1015,lng:-72.6732,name:"Long Island Sound, CT",state:"CT"},"rhode-island-sound-ri":{lat:41.4221,lng:-71.4774,name:"Rhode Island Sound, RI",state:"RI"},"buzzards-bay-ma":{lat:41.5389,lng:-70.9481,name:"Buzzards Bay, MA",state:"MA"},"delaware-bay-de":{lat:38.9108,lng:-75.1818,name:"Delaware Bay, DE",state:"DE"},"hudson-river-ny":{lat:41.7658,lng:-73.9776,name:"Hudson River, NY",state:"NY"}},Ll=[{name:"Boston",state:"MA",lat:42.3601,lng:-71.0589},{name:"Cambridge",state:"MA",lat:42.3736,lng:-71.1097},{name:"Worcester",state:"MA",lat:42.2626,lng:-71.8023},{name:"Springfield",state:"MA",lat:42.1015,lng:-72.5898},{name:"Lowell",state:"MA",lat:42.6334,lng:-71.3162},{name:"Brockton",state:"MA",lat:42.0834,lng:-71.0184},{name:"New Bedford",state:"MA",lat:41.6362,lng:-70.9342},{name:"Quincy",state:"MA",lat:42.2529,lng:-71.0023},{name:"Lynn",state:"MA",lat:42.4668,lng:-70.9495},{name:"Fall River",state:"MA",lat:41.7015,lng:-71.155},{name:"Newton",state:"MA",lat:42.337,lng:-71.2092},{name:"Somerville",state:"MA",lat:42.3876,lng:-71.0995},{name:"Lawrence",state:"MA",lat:42.707,lng:-71.1631},{name:"Framingham",state:"MA",lat:42.3793,lng:-71.4162},{name:"Haverhill",state:"MA",lat:42.7762,lng:-71.0773},{name:"Waltham",state:"MA",lat:42.3765,lng:-71.2356},{name:"Malden",state:"MA",lat:42.4251,lng:-71.0662},{name:"Brookline",state:"MA",lat:42.3317,lng:-71.1211},{name:"Plymouth",state:"MA",lat:41.9584,lng:-70.6673},{name:"Medford",state:"MA",lat:42.4184,lng:-71.1061},{name:"Taunton",state:"MA",lat:41.9001,lng:-71.0897},{name:"Chicopee",state:"MA",lat:42.1487,lng:-72.6078},{name:"Weymouth",state:"MA",lat:42.218,lng:-70.9395},{name:"Revere",state:"MA",lat:42.4084,lng:-71.012},{name:"Peabody",state:"MA",lat:42.5279,lng:-70.9286},{name:"Methuen",state:"MA",lat:42.7262,lng:-71.1909},{name:"Barnstable",state:"MA",lat:41.7003,lng:-70.3002},{name:"Pittsfield",state:"MA",lat:42.4501,lng:-73.2454},{name:"Attleboro",state:"MA",lat:41.9443,lng:-71.2856},{name:"Everett",state:"MA",lat:42.4084,lng:-71.0537},{name:"Salem",state:"MA",lat:42.5195,lng:-70.8967},{name:"Westfield",state:"MA",lat:42.1251,lng:-72.7495},{name:"Leominster",state:"MA",lat:42.5251,lng:-71.7595},{name:"Fitchburg",state:"MA",lat:42.5834,lng:-71.8023},{name:"Beverly",state:"MA",lat:42.5584,lng:-70.88},{name:"Holyoke",state:"MA",lat:42.2043,lng:-72.6162},{name:"Marlborough",state:"MA",lat:42.3459,lng:-71.5523},{name:"Woburn",state:"MA",lat:42.4792,lng:-71.1523},{name:"Chelsea",state:"MA",lat:42.3918,lng:-71.0328},{name:"Gloucester",state:"MA",lat:42.6142,lng:-70.6631},{name:"New York City",state:"NY",lat:40.7128,lng:-74.006},{name:"Buffalo",state:"NY",lat:42.8864,lng:-78.8784},{name:"Rochester",state:"NY",lat:43.1566,lng:-77.6088},{name:"Yonkers",state:"NY",lat:40.9312,lng:-73.8987},{name:"Syracuse",state:"NY",lat:43.0481,lng:-76.1474},{name:"Albany",state:"NY",lat:42.6526,lng:-73.7562},{name:"New Rochelle",state:"NY",lat:40.9115,lng:-73.7823},{name:"Mount Vernon",state:"NY",lat:40.9126,lng:-73.837},{name:"Schenectady",state:"NY",lat:42.8142,lng:-73.9396},{name:"Utica",state:"NY",lat:43.1009,lng:-75.2327},{name:"White Plains",state:"NY",lat:41.034,lng:-73.7629},{name:"Hempstead",state:"NY",lat:40.7062,lng:-73.6187},{name:"Troy",state:"NY",lat:42.7284,lng:-73.6918},{name:"Niagara Falls",state:"NY",lat:43.0962,lng:-79.0377},{name:"Binghamton",state:"NY",lat:42.0987,lng:-75.918},{name:"Freeport",state:"NY",lat:40.6576,lng:-73.5832},{name:"Valley Stream",state:"NY",lat:40.6642,lng:-73.7084},{name:"Long Beach",state:"NY",lat:40.5885,lng:-73.6579},{name:"Watertown",state:"NY",lat:43.9747,lng:-75.9107},{name:"Jamestown",state:"NY",lat:42.097,lng:-79.2353},{name:"New York",state:"NY",lat:40.7128,lng:-74.006},{name:"Bronx",state:"NY",lat:40.8448,lng:-73.8648},{name:"Brooklyn",state:"NY",lat:40.6782,lng:-73.9442},{name:"Queens",state:"NY",lat:40.7282,lng:-73.7949},{name:"Staten Island",state:"NY",lat:40.5795,lng:-74.1502},{name:"Manhattan",state:"NY",lat:40.7831,lng:-73.9712},{name:"Elmira",state:"NY",lat:42.0898,lng:-76.8077},{name:"Tonawanda",state:"NY",lat:43.0126,lng:-78.8803},{name:"Poughkeepsie",state:"NY",lat:41.7004,lng:-73.9209},{name:"Newburgh",state:"NY",lat:41.5034,lng:-74.0104},{name:"Middletown",state:"NY",lat:41.4459,lng:-74.4226},{name:"Bridgeport",state:"CT",lat:41.1865,lng:-73.1952},{name:"New Haven",state:"CT",lat:41.3083,lng:-72.9279},{name:"Hartford",state:"CT",lat:41.7658,lng:-72.6734},{name:"Stamford",state:"CT",lat:41.0534,lng:-73.5387},{name:"Waterbury",state:"CT",lat:41.5581,lng:-73.0515},{name:"Norwalk",state:"CT",lat:41.1175,lng:-73.4079},{name:"Danbury",state:"CT",lat:41.3948,lng:-73.454},{name:"New Britain",state:"CT",lat:41.6612,lng:-72.7795},{name:"West Haven",state:"CT",lat:41.2707,lng:-72.947},{name:"Greenwich",state:"CT",lat:41.0262,lng:-73.6284},{name:"Hamden",state:"CT",lat:41.3959,lng:-72.9248},{name:"Meriden",state:"CT",lat:41.5382,lng:-72.807},{name:"Bristol",state:"CT",lat:41.6712,lng:-72.9493},{name:"West Hartford",state:"CT",lat:41.762,lng:-72.742},{name:"Milford",state:"CT",lat:41.2223,lng:-73.0565},{name:"Middletown",state:"CT",lat:41.5623,lng:-72.6506},{name:"Norwich",state:"CT",lat:41.5242,lng:-72.0759},{name:"New London",state:"CT",lat:41.3556,lng:-72.0995},{name:"Torrington",state:"CT",lat:41.8007,lng:-73.1212},{name:"Fairfield",state:"CT",lat:41.1612,lng:-73.2615},{name:"Providence",state:"RI",lat:41.824,lng:-71.4128},{name:"Cranston",state:"RI",lat:41.7798,lng:-71.4371},{name:"Warwick",state:"RI",lat:41.7001,lng:-71.4162},{name:"Pawtucket",state:"RI",lat:41.8787,lng:-71.3826},{name:"East Providence",state:"RI",lat:41.8137,lng:-71.3701},{name:"Woonsocket",state:"RI",lat:42.0029,lng:-71.5147},{name:"Newport",state:"RI",lat:41.4901,lng:-71.3128},{name:"Central Falls",state:"RI",lat:41.8904,lng:-71.3926},{name:"Westerly",state:"RI",lat:41.3776,lng:-71.827},{name:"Cumberland",state:"RI",lat:41.9665,lng:-71.4326},{name:"Portland",state:"ME",lat:43.6591,lng:-70.2568},{name:"Lewiston",state:"ME",lat:44.1004,lng:-70.2148},{name:"Bangor",state:"ME",lat:44.8016,lng:-68.7712},{name:"South Portland",state:"ME",lat:43.6415,lng:-70.2409},{name:"Auburn",state:"ME",lat:44.0979,lng:-70.2311},{name:"Biddeford",state:"ME",lat:43.4926,lng:-70.4533},{name:"Sanford",state:"ME",lat:43.439,lng:-70.774},{name:"Saco",state:"ME",lat:43.5009,lng:-70.4428},{name:"Augusta",state:"ME",lat:44.3106,lng:-69.7795},{name:"Westbrook",state:"ME",lat:43.677,lng:-70.3712},{name:"Waterville",state:"ME",lat:44.5323,lng:-69.6317},{name:"Presque Isle",state:"ME",lat:46.6811,lng:-68.0161},{name:"Bar Harbor",state:"ME",lat:44.3876,lng:-68.2039},{name:"Calais",state:"ME",lat:45.1737,lng:-67.2741},{name:"Ellsworth",state:"ME",lat:44.5434,lng:-68.4198},{name:"Manchester",state:"NH",lat:42.9956,lng:-71.4548},{name:"Nashua",state:"NH",lat:42.7654,lng:-71.4676},{name:"Concord",state:"NH",lat:43.2081,lng:-71.5376},{name:"Derry",state:"NH",lat:42.8804,lng:-71.3273},{name:"Dover",state:"NH",lat:43.1979,lng:-70.8737},{name:"Rochester",state:"NH",lat:43.3042,lng:-70.9759},{name:"Salem",state:"NH",lat:42.7876,lng:-71.2009},{name:"Merrimack",state:"NH",lat:42.8659,lng:-71.4995},{name:"Hudson",state:"NH",lat:42.7659,lng:-71.4342},{name:"Londonderry",state:"NH",lat:42.8653,lng:-71.3739},{name:"Keene",state:"NH",lat:42.9342,lng:-72.2815},{name:"Portsmouth",state:"NH",lat:43.0718,lng:-70.7626},{name:"Laconia",state:"NH",lat:43.5276,lng:-71.4703},{name:"Hampton",state:"NH",lat:42.9373,lng:-70.8187},{name:"Burlington",state:"VT",lat:44.4759,lng:-73.2121},{name:"Essex",state:"VT",lat:44.4906,lng:-73.1129},{name:"South Burlington",state:"VT",lat:44.4669,lng:-73.1709},{name:"Colchester",state:"VT",lat:44.5434,lng:-73.1317},{name:"Rutland",state:"VT",lat:43.6106,lng:-72.9726},{name:"Bennington",state:"VT",lat:42.8781,lng:-73.1968},{name:"Brattleboro",state:"VT",lat:42.8509,lng:-72.5579},{name:"Milton",state:"VT",lat:44.6365,lng:-73.1151},{name:"Hartford",state:"VT",lat:43.6506,lng:-72.319},{name:"Williston",state:"VT",lat:44.4434,lng:-73.0934},{name:"Middlebury",state:"VT",lat:44.0154,lng:-73.1673},{name:"Montpelier",state:"VT",lat:44.2601,lng:-72.5806},{name:"Philadelphia",state:"PA",lat:39.9526,lng:-75.1652},{name:"Pittsburgh",state:"PA",lat:40.4406,lng:-79.9959},{name:"Allentown",state:"PA",lat:40.6084,lng:-75.4901},{name:"Erie",state:"PA",lat:42.1292,lng:-80.0851},{name:"Reading",state:"PA",lat:40.3356,lng:-75.9269},{name:"Scranton",state:"PA",lat:41.409,lng:-75.6624},{name:"Bethlehem",state:"PA",lat:40.6259,lng:-75.3704},{name:"Lancaster",state:"PA",lat:40.0379,lng:-76.3055},{name:"Harrisburg",state:"PA",lat:40.2732,lng:-76.8839},{name:"York",state:"PA",lat:39.9626,lng:-76.7277},{name:"Altoona",state:"PA",lat:40.5187,lng:-78.3947},{name:"Wilkes-Barre",state:"PA",lat:41.2459,lng:-75.8813},{name:"Newark",state:"NJ",lat:40.7357,lng:-74.1724},{name:"Jersey City",state:"NJ",lat:40.7178,lng:-74.0431},{name:"Paterson",state:"NJ",lat:40.9168,lng:-74.1718},{name:"Elizabeth",state:"NJ",lat:40.664,lng:-74.2107},{name:"Edison",state:"NJ",lat:40.5187,lng:-74.4121},{name:"Woodbridge",state:"NJ",lat:40.5576,lng:-74.2846},{name:"Lakewood",state:"NJ",lat:40.0979,lng:-74.2179},{name:"Toms River",state:"NJ",lat:39.9537,lng:-74.1979},{name:"Hamilton",state:"NJ",lat:40.229,lng:-74.6598},{name:"Trenton",state:"NJ",lat:40.2206,lng:-74.7565},{name:"Camden",state:"NJ",lat:39.9259,lng:-75.1196},{name:"Clifton",state:"NJ",lat:40.8584,lng:-74.1638},{name:"Brick",state:"NJ",lat:40.0473,lng:-74.1354},{name:"Cherry Hill",state:"NJ",lat:39.9348,lng:-75.0307},{name:"Passaic",state:"NJ",lat:40.8568,lng:-74.1279},{name:"Union City",state:"NJ",lat:40.7662,lng:-74.0243},{name:"Bayonne",state:"NJ",lat:40.6687,lng:-74.1143},{name:"East Orange",state:"NJ",lat:40.7668,lng:-74.2049},{name:"Vineland",state:"NJ",lat:39.4864,lng:-75.026},{name:"New Brunswick",state:"NJ",lat:40.4862,lng:-74.4518},{name:"Hoboken",state:"NJ",lat:40.7439,lng:-74.0324},{name:"Plainfield",state:"NJ",lat:40.6337,lng:-74.4071},{name:"West New York",state:"NJ",lat:40.7878,lng:-74.0143},{name:"Hackensack",state:"NJ",lat:40.8859,lng:-74.0437},{name:"Sayreville",state:"NJ",lat:40.4595,lng:-74.3612},{name:"Kearny",state:"NJ",lat:40.7684,lng:-74.1454},{name:"Linden",state:"NJ",lat:40.622,lng:-74.2446},{name:"Atlantic City",state:"NJ",lat:39.3643,lng:-74.4229},{name:"Baltimore",state:"MD",lat:39.2904,lng:-76.6122},{name:"Columbia",state:"MD",lat:39.2037,lng:-76.861},{name:"Germantown",state:"MD",lat:39.1731,lng:-77.2717},{name:"Silver Spring",state:"MD",lat:38.9912,lng:-77.0261},{name:"Waldorf",state:"MD",lat:38.6206,lng:-76.9391},{name:"Glen Burnie",state:"MD",lat:39.1626,lng:-76.6247},{name:"Ellicott City",state:"MD",lat:39.2673,lng:-76.7983},{name:"Frederick",state:"MD",lat:39.4143,lng:-77.4105},{name:"Dundalk",state:"MD",lat:39.2709,lng:-76.5219},{name:"Rockville",state:"MD",lat:39.084,lng:-77.1528},{name:"Bethesda",state:"MD",lat:38.9807,lng:-77.102},{name:"Gaithersburg",state:"MD",lat:39.1434,lng:-77.2014},{name:"Annapolis",state:"MD",lat:38.9717,lng:-76.501},{name:"Bowie",state:"MD",lat:38.9426,lng:-76.7302},{name:"Hagerstown",state:"MD",lat:39.6418,lng:-77.72},{name:"Cumberland",state:"MD",lat:39.6526,lng:-78.7625},{name:"Salisbury",state:"MD",lat:38.3607,lng:-75.5994},{name:"Ocean City",state:"MD",lat:38.3365,lng:-75.0849},{name:"Washington",state:"DC",lat:38.9072,lng:-77.0369},{name:"Wilmington",state:"DE",lat:39.7391,lng:-75.5398},{name:"Dover",state:"DE",lat:39.1612,lng:-75.5264},{name:"Newark",state:"DE",lat:39.6837,lng:-75.7497},{name:"Middletown",state:"DE",lat:39.4495,lng:-75.7163},{name:"Smyrna",state:"DE",lat:39.2998,lng:-75.6046},{name:"Milford",state:"DE",lat:38.9129,lng:-75.4277},{name:"Seaford",state:"DE",lat:38.6412,lng:-75.611},{name:"Georgetown",state:"DE",lat:38.6901,lng:-75.3855},{name:"Elsmere",state:"DE",lat:39.7379,lng:-75.5924},{name:"New Castle",state:"DE",lat:39.662,lng:-75.5664},{name:"Chicago",state:"IL",lat:41.8781,lng:-87.6298},{name:"Los Angeles",state:"CA",lat:34.0522,lng:-118.2437},{name:"Houston",state:"TX",lat:29.7604,lng:-95.3698},{name:"Phoenix",state:"AZ",lat:33.4484,lng:-112.074},{name:"San Antonio",state:"TX",lat:29.4241,lng:-98.4936},{name:"San Diego",state:"CA",lat:32.7157,lng:-117.1611},{name:"Dallas",state:"TX",lat:32.7767,lng:-96.797},{name:"San Jose",state:"CA",lat:37.3382,lng:-121.8863},{name:"Austin",state:"TX",lat:30.2672,lng:-97.7431},{name:"Jacksonville",state:"FL",lat:30.3322,lng:-81.6557},{name:"Fort Worth",state:"TX",lat:32.7555,lng:-97.3308},{name:"Columbus",state:"OH",lat:39.9612,lng:-82.9988},{name:"San Francisco",state:"CA",lat:37.7749,lng:-122.4194},{name:"Charlotte",state:"NC",lat:35.2271,lng:-80.8431},{name:"Indianapolis",state:"IN",lat:39.7684,lng:-86.1581},{name:"Seattle",state:"WA",lat:47.6062,lng:-122.3321},{name:"Denver",state:"CO",lat:39.7392,lng:-104.9903},{name:"Detroit",state:"MI",lat:42.3314,lng:-83.0458},{name:"Nashville",state:"TN",lat:36.1627,lng:-86.7816},{name:"Memphis",state:"TN",lat:35.1495,lng:-90.049},{name:"Portland",state:"OR",lat:45.5152,lng:-122.6784},{name:"Oklahoma City",state:"OK",lat:35.4676,lng:-97.5164},{name:"Las Vegas",state:"NV",lat:36.1699,lng:-115.1398},{name:"Louisville",state:"KY",lat:38.2527,lng:-85.7585},{name:"Milwaukee",state:"WI",lat:43.0389,lng:-87.9065},{name:"Albuquerque",state:"NM",lat:35.0844,lng:-106.6504},{name:"Tucson",state:"AZ",lat:32.2226,lng:-110.9747},{name:"Fresno",state:"CA",lat:36.7378,lng:-119.7871},{name:"Sacramento",state:"CA",lat:38.5816,lng:-121.4944},{name:"Kansas City",state:"MO",lat:39.0997,lng:-94.5786},{name:"Mesa",state:"AZ",lat:33.4152,lng:-111.8315},{name:"Virginia Beach",state:"VA",lat:36.8529,lng:-75.978},{name:"Atlanta",state:"GA",lat:33.749,lng:-84.388},{name:"Colorado Springs",state:"CO",lat:38.8339,lng:-104.8214},{name:"Omaha",state:"NE",lat:41.2565,lng:-95.9345},{name:"Raleigh",state:"NC",lat:35.7796,lng:-78.6382},{name:"Miami",state:"FL",lat:25.7617,lng:-80.1918},{name:"Long Beach",state:"CA",lat:33.7701,lng:-118.1937},{name:"Virginia Beach",state:"VA",lat:36.8529,lng:-75.978},{name:"Oakland",state:"CA",lat:37.8044,lng:-122.2712},{name:"Minneapolis",state:"MN",lat:44.9778,lng:-93.265},{name:"Tulsa",state:"OK",lat:36.154,lng:-95.9928},{name:"Arlington",state:"TX",lat:32.7357,lng:-97.1081},{name:"Tampa",state:"FL",lat:27.9506,lng:-82.4572},{name:"New Orleans",state:"LA",lat:29.9511,lng:-90.0715},{name:"Wichita",state:"KS",lat:37.6872,lng:-97.3301},{name:"Cleveland",state:"OH",lat:41.4993,lng:-81.6944},{name:"Bakersfield",state:"CA",lat:35.3733,lng:-119.0187},{name:"Aurora",state:"CO",lat:39.7294,lng:-104.8319},{name:"Anaheim",state:"CA",lat:33.8366,lng:-117.9143},{name:"Honolulu",state:"HI",lat:21.3099,lng:-157.8581},{name:"Santa Ana",state:"CA",lat:33.7455,lng:-117.8677},{name:"Corpus Christi",state:"TX",lat:27.8006,lng:-97.3964},{name:"Riverside",state:"CA",lat:33.9533,lng:-117.3962},{name:"Lexington",state:"KY",lat:38.0406,lng:-84.5037},{name:"Stockton",state:"CA",lat:37.9577,lng:-121.2908},{name:"St. Paul",state:"MN",lat:44.9537,lng:-93.09},{name:"St. Louis",state:"MO",lat:38.627,lng:-90.1994},{name:"Pittsburgh",state:"PA",lat:40.4406,lng:-79.9959},{name:"Anchorage",state:"AK",lat:61.2181,lng:-149.9003},{name:"Cincinnati",state:"OH",lat:39.1031,lng:-84.512},{name:"Henderson",state:"NV",lat:36.0395,lng:-114.9817},{name:"Greensboro",state:"NC",lat:36.0726,lng:-79.792},{name:"Plano",state:"TX",lat:33.0198,lng:-96.6989},{name:"Newark",state:"NJ",lat:40.7357,lng:-74.1724},{name:"Lincoln",state:"NE",lat:40.8136,lng:-96.7026},{name:"Toledo",state:"OH",lat:41.6528,lng:-83.5379},{name:"Orlando",state:"FL",lat:28.5383,lng:-81.3792},{name:"Chula Vista",state:"CA",lat:32.6401,lng:-117.0842},{name:"Jersey City",state:"NJ",lat:40.7178,lng:-74.0431},{name:"Chandler",state:"AZ",lat:33.3062,lng:-111.8413},{name:"Laredo",state:"TX",lat:27.5306,lng:-99.4803},{name:"Madison",state:"WI",lat:43.0731,lng:-89.4012},{name:"Lubbock",state:"TX",lat:33.5779,lng:-101.8552},{name:"Winston-Salem",state:"NC",lat:36.0999,lng:-80.2442},{name:"Garland",state:"TX",lat:32.9126,lng:-96.6389},{name:"Glendale",state:"AZ",lat:33.5387,lng:-112.186},{name:"Hialeah",state:"FL",lat:25.8576,lng:-80.2781},{name:"Reno",state:"NV",lat:39.5296,lng:-119.8138},{name:"Baton Rouge",state:"LA",lat:30.4515,lng:-91.1871},{name:"Irvine",state:"CA",lat:33.6846,lng:-117.8265},{name:"Chesapeake",state:"VA",lat:36.7682,lng:-76.2875},{name:"Irving",state:"TX",lat:32.814,lng:-96.9489},{name:"Scottsdale",state:"AZ",lat:33.4942,lng:-111.9261},{name:"North Las Vegas",state:"NV",lat:36.1989,lng:-115.1175},{name:"Fremont",state:"CA",lat:37.5485,lng:-121.9886},{name:"Gilbert",state:"AZ",lat:33.3528,lng:-111.789},{name:"San Bernardino",state:"CA",lat:34.1083,lng:-117.2898},{name:"Boise",state:"ID",lat:43.615,lng:-116.2023},{name:"Birmingham",state:"AL",lat:33.5207,lng:-86.8025}],xd=r=>{if(!r||r.length<1)return[];const e=r.toLowerCase().trim();return Ll.map(n=>{const s=n.name.toLowerCase(),i=n.state.toLowerCase(),o=`${n.name}, ${n.state}`.toLowerCase();let c=0;return s===e&&(c+=100),o===e&&(c+=95),s.startsWith(e)&&(c+=50),i.startsWith(e)&&(c+=30),s.includes(e)&&(c+=20),i.includes(e)&&(c+=10),o.includes(e)&&(c+=15),{...n,score:c}}).filter(n=>n.score>0).sort((n,s)=>s.score-n.score).slice(0,15)},r0=async r=>{try{const t=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&limit=5&q=${encodeURIComponent(r)}`)).json();if(t&&t.length>0)return t.map(n=>{var s;return{name:n.display_name.split(",")[0],state:((s=n.display_name.split(",")[1])==null?void 0:s.trim())||"Unknown",lat:parseFloat(n.lat),lng:parseFloat(n.lon)}})}catch(e){console.error("Geocoding API error:",e)}return[]},Rc=()=>{const r=["REEL","BIG","DEEP","LUCKY","MASTER","PRO","BASS","CATCH","FISHER","ANGLER"],e=["FISHER","CASTER","HUNTER","MASTER","CAPTAIN","ADMIRAL","SAILOR","KEEPER","LEGEND","HERO"],t=Math.floor(Math.random()*999)+1,n=r[Math.floor(Math.random()*r.length)],s=e[Math.floor(Math.random()*e.length)];return`${n}${s}${t}`},No=[{name:"Navy",value:"#1e3a8a",textClass:"text-blue-800"},{name:"Purple",value:"#7c3aed",textClass:"text-purple-600"},{name:"Green",value:"#059669",textClass:"text-emerald-600"},{name:"Orange",value:"#ea580c",textClass:"text-orange-600"},{name:"Red",value:"#dc2626",textClass:"text-red-600"},{name:"Teal",value:"#0d9488",textClass:"text-teal-600"},{name:"Pink",value:"#db2777",textClass:"text-pink-600"},{name:"Indigo",value:"#4338ca",textClass:"text-indigo-600"}],Nd=async(r=null,e=null)=>{try{const t=No[0],n=await Fr.getOrCreateUser(r||null,e||t);return localStorage.setItem("riprap_user",JSON.stringify(n)),n}catch(t){console.error("Failed to get user identity:",t);let n=localStorage.getItem("riprap_user");if(!n||r){const s=No[0];n={id:crypto.randomUUID(),screenName:r||Rc(),color:e||s,hasChangedName:!!r,createdAt:new Date().toISOString()},localStorage.setItem("riprap_user",JSON.stringify(n))}else n=JSON.parse(n);return n}},Ga=(r,e)=>{const t={customLocation:r,locationRadius:e,savedAt:new Date().toISOString()};localStorage.setItem("riprap_location_settings",JSON.stringify(t))},Dd=()=>{const r=localStorage.getItem("riprap_location_settings");return r?JSON.parse(r):{customLocation:null,locationRadius:10}},Er=(r,e,t,n)=>{const i=(t-r)*Math.PI/180,o=(n-e)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 3959*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},Fi={POST_COOLDOWN:3e4,VOTE_COOLDOWN:1e3,MAX_POSTS_PER_HOUR:10,MAX_VOTES_PER_MINUTE:30},Vd=(r,e,t,n,s)=>{const o=Date.now()-r;return o<e?{allowed:!1,remainingTime:Math.ceil((e-o)/1e3)}:t>=n?{allowed:!1,remainingTime:Math.ceil(s/1e3)}:{allowed:!0,remainingTime:0}},s0=["spam","scam","fake","bot","hack","cheat","exploit","idiot","stupid","hate","kill","die","suicide","buy now","click here","make money","get rich","free money"],i0=[/(.)\1{4,}/g,/[A-Z]{10,}/g,/https?:\/\/[^\s]+/g,/\d{10,}/g,/[!@#$%^&*]{3,}/g],o0=r=>{const e=r.toLowerCase(),t=[],n=s0.filter(c=>e.includes(c));n.length>0&&t.push(`Contains inappropriate words: ${n.join(", ")}`),i0.forEach(c=>{c.test(r)&&t.push("Contains suspicious patterns")}),r.length<3&&t.push("Content too short");const s=r.split(/\s+/),i={};return s.forEach(c=>{const l=c.toLowerCase().replace(/[^a-z]/g,"");l.length>2&&(i[l]=(i[l]||0)+1)}),Math.max(...Object.values(i))>3&&t.push("Excessive word repetition detected"),{allowed:t.length===0,issues:t,severity:t.length>2?"high":t.length>0?"medium":"low"}},kd=(r,e)=>{let t=null,n=1/0;return Object.entries(Hs).forEach(([s,i])=>{const o=Er(r,e,i.lat,i.lng);o<n&&(n=o,t=i)}),t?n<=25?t.name:`${Math.round(n)} miles from ${t.name}`:"Unknown Area"},Ui=(r,e)=>{let t=null,n=1/0;if(Ll.forEach(i=>{const o=Er(r,e,i.lat,i.lng);o<n&&(n=o,t=i)}),t&&n<=50)return`${t.name}, ${t.state}`;let s=null;return n=1/0,Object.entries(Hs).forEach(([i,o])=>{const c=Er(r,e,o.lat,o.lng);c<n&&(n=c,s=o)}),s?s.name:"Unknown Location"},a0=`
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
`,c0=({onUsernameSet:r})=>{const[e,t]=J.useState(Rc()),[n,s]=J.useState(No[0]),i=()=>{if(e.trim().length<3){alert("Username must be at least 3 characters");return}if(e.trim().length>20){alert("Username must be 20 characters or less");return}r(e.trim().toUpperCase(),n)},o=()=>{t(Rc())};return T.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4 terminal-text",children:T.jsxs("div",{className:"w-full max-w-md mx-auto terminal-card p-6",children:[T.jsxs("div",{className:"text-center space-y-4",children:[T.jsx("div",{className:"ascii-art text-xs terminal-accent",children:a0}),T.jsx("div",{className:"text-xl font-bold terminal-text",children:"Welcome to RipRap"}),T.jsx("div",{className:"text-sm terminal-text",children:"Choose your angler name to get started"})]}),T.jsxs("div",{className:"space-y-4 mt-6",children:[T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Your angler name:"}),T.jsx("input",{type:"text",value:e,onChange:c=>t(c.target.value.toUpperCase()),placeholder:"Enter username",className:"w-full h-10 px-3 py-2 terminal-input text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-700",maxLength:20}),T.jsxs("div",{className:"text-xs terminal-accent",children:[e.length,"/20 characters"]})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Choose your color:"}),T.jsx("div",{className:"grid grid-cols-4 gap-2",children:No.map(c=>T.jsx("button",{onClick:()=>s(c),className:`h-10 rounded border-2 ${n.name===c.name?"border-navy-700 ring-2 ring-navy-300":"border-gray-300 hover:border-gray-400"} focus:outline-none focus:ring-2 focus:ring-navy-700`,style:{backgroundColor:c.value},title:c.name},c.name))}),T.jsxs("div",{className:"text-xs terminal-accent",children:["Preview: ",T.jsx("span",{className:n.textClass,style:{fontWeight:"bold"},children:e})]})]}),T.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-3 text-xs terminal-text",children:["⚠️ ",T.jsx("strong",{children:"Note:"})," You cannot change your username or color after creating your account. Choose carefully!"]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsx("button",{onClick:o,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Generate New"}),T.jsx("button",{onClick:i,disabled:!e.trim()||e.trim().length<3,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Start Fishing"})]}),T.jsxs("div",{className:"text-center text-xs terminal-text mt-4 space-y-1",children:[T.jsx("div",{children:"• Anonymous fishing community"}),T.jsx("div",{children:"• Location-based posts"}),T.jsx("div",{children:"• Share catches, spots, and tips"})]})]})]})})},l0=({isOpen:r,onClose:e,user:t,userStats:n})=>{var s;return r?T.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:T.jsxs("div",{className:"w-full max-w-md terminal-card p-6 max-h-[80vh] overflow-y-auto",children:[T.jsxs("div",{className:"text-center mb-4",children:[T.jsx("div",{className:"text-lg font-bold terminal-text",children:"My Account"}),T.jsx("div",{className:"text-xs terminal-accent mt-1",children:"Device-based account"})]}),T.jsxs("div",{className:"space-y-4",children:[T.jsx("div",{className:"bg-navy-50 p-4 rounded border",children:T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-lg font-bold",style:{color:((s=t==null?void 0:t.color)==null?void 0:s.value)||"#1e3a8a"},children:t==null?void 0:t.screenName}),T.jsxs("div",{className:"text-xs terminal-accent mt-1",children:["Angler since ",new Date((t==null?void 0:t.createdAt)||Date.now()).toLocaleDateString()]})]})}),T.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[T.jsxs("div",{className:"bg-gray-50 p-3 rounded text-center",children:[T.jsx("div",{className:"text-lg font-bold terminal-text",children:n.posts.length}),T.jsx("div",{className:"text-xs terminal-accent",children:"Posts"})]}),T.jsxs("div",{className:"bg-gray-50 p-3 rounded text-center",children:[T.jsx("div",{className:"text-lg font-bold terminal-text",children:n.comments.length}),T.jsx("div",{className:"text-xs terminal-accent",children:"Comments"})]})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("div",{className:"text-sm font-bold terminal-text",children:"Recent Posts"}),T.jsxs("div",{className:"max-h-40 overflow-y-auto space-y-2",children:[n.posts.slice(0,5).map((i,o)=>T.jsxs("div",{className:"bg-gray-50 p-2 rounded text-xs",children:[T.jsx("div",{className:"font-mono",children:i.content}),T.jsxs("div",{className:"text-gray-500 mt-1",children:["▲ ",i.upvotes||0," ▼ ",i.downvotes||0]})]},o)),n.posts.length===0&&T.jsx("div",{className:"text-xs terminal-accent text-center py-4",children:"No posts yet. Start sharing your catches!"})]})]}),T.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-3 text-xs",children:[T.jsx("div",{className:"font-bold text-yellow-800 mb-2",children:"Account Persistence"}),T.jsxs("div",{className:"text-yellow-700 space-y-1",children:[T.jsx("div",{children:"• Account saved to this device"}),T.jsx("div",{children:"• Clear cache = lose account"}),T.jsx("div",{children:"• Different device = new account"})]})]}),T.jsx("div",{className:"pt-2",children:T.jsx("button",{onClick:e,className:"w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Close"})})]})]})}):null},u0=({isOpen:r,onClose:e,onLocationSet:t,currentLocation:n})=>{const[s,i]=J.useState("");J.useState("");const[o,c]=J.useState(!1),[l,h]=J.useState([]),[f,g]=J.useState(!1);if(!r)return null;const p=M=>{if(i(M),M.length>=1){const U=xd(M);h(U),g(U.length>0)}else h([]),g(!1)},R=M=>{i(`${M.name}, ${M.state}`),h([]),g(!1),t({lat:M.lat,lng:M.lng,name:`${M.name}, ${M.state}`}),e()},x=async()=>{if(!s.trim()){alert("Please enter a city name");return}c(!0);const M=Ll.find(O=>`${O.name}, ${O.state}`.toLowerCase()===s.toLowerCase()||O.name.toLowerCase()===s.toLowerCase());if(M){t({lat:M.lat,lng:M.lng,name:`${M.name}, ${M.state}`}),e(),c(!1);return}const U=xd(s);if(U.length>0&&U[0].score>50){const O=U[0];t({lat:O.lat,lng:O.lng,name:`${O.name}, ${O.state}`}),e(),c(!1);return}try{const O=await r0(s);if(O.length>0){const G=O[0];t({lat:G.lat,lng:G.lng,name:`${G.name}, ${G.state}`}),e(),c(!1);return}}catch(O){console.error("API geocoding failed:",O)}c(!1),alert("City not found. Please check spelling or select from autocomplete suggestions.")},D=[{id:"current",name:"Use Current Location",coords:null},...Object.entries(Hs).map(([M,U])=>({id:M,name:U.name,coords:U}))],N=M=>{M.id==="current"?t(null):t(M.coords),e()};return T.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:T.jsxs("div",{className:"w-full max-w-md terminal-card p-6",children:[T.jsxs("div",{className:"text-center mb-4",children:[T.jsx("div",{className:"text-lg font-bold terminal-text",children:"Set Location"}),T.jsx("div",{className:"text-xs terminal-accent mt-1",children:"Choose where to view fishing posts"})]}),T.jsxs("div",{className:"space-y-4",children:[T.jsx("div",{className:"text-center text-xs terminal-accent",children:"Select a location:"}),T.jsxs("div",{className:"space-y-2 relative",children:[T.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Enter City, State:"}),T.jsxs("div",{className:"flex space-x-2",children:[T.jsx("input",{type:"text",value:s,onChange:M=>p(M.target.value),placeholder:"Boston, MA",className:"flex-1 h-10 px-3 py-2 terminal-input text-sm focus:outline-none focus:ring-2 focus:ring-navy-700",onFocus:()=>s.length>=1&&g(l.length>0),onBlur:()=>setTimeout(()=>g(!1),200),onKeyPress:M=>M.key==="Enter"&&x()}),T.jsx("button",{onClick:x,disabled:!s.trim()||o,className:"px-4 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:opacity-50",children:o?"...":"Set"})]}),f&&l.length>0&&T.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto",children:l.map((M,U)=>T.jsxs("button",{onClick:()=>R(M),className:"w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border-b border-gray-100 last:border-b-0",children:[M.name,", ",M.state]},U))})]}),T.jsx("div",{className:"text-center text-xs terminal-accent",children:"or choose a fishing hotspot:"}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("label",{className:"text-sm font-bold terminal-text block",children:"Northeast Striped Bass Locations:"}),T.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:D.map(M=>T.jsx("button",{onClick:()=>N(M),className:"w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border border-gray-300 hover:border-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-700",children:M.name},M.id))})]}),T.jsx("div",{className:"pt-2",children:T.jsx("button",{onClick:e,className:"w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Cancel"})})]})]})})},h0=({isOpen:r,onClose:e,onSubmit:t,newPostContent:n,setNewPostContent:s,isOnline:i})=>{if(!r)return null;const o=()=>{n.trim()&&(t(),e())};return T.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:T.jsx("div",{className:"w-full max-w-md terminal-card p-6",children:T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{className:"space-y-2",children:[T.jsx("textarea",{value:n,onChange:c=>s(c.target.value),placeholder:"Post your weather and/or fishing reports, questions from the water, callouts of bad behavior...",className:"w-full h-24 px-3 py-2 terminal-input text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-navy-700",maxLength:200,autoFocus:!0}),T.jsxs("div",{className:"text-xs terminal-accent",children:[n.length,"/200 characters"]})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsx("button",{onClick:e,className:"h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700",children:"Cancel"}),T.jsx("button",{onClick:o,disabled:!n.trim()||!i,className:"h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Post"})]})]})})})},d0=({post:r,onVote:e,onComment:t,onReport:n,userVotes:s,comments:i,showLocation:o=!1})=>{var O;const[c,l]=J.useState(!1),[h,f]=J.useState(""),[g,p]=J.useState(!1),R=s.find(G=>G.postId===r.id),x=i.filter(G=>G.postId===r.id),D=G=>{e(r.id,G)},N=()=>{h.trim()&&h.length<=200&&(t(r.id,h.trim()),f(""))},M=()=>{n(r.id),p(!0),setTimeout(()=>p(!1),3e3)},U=G=>{const ne=new Date,Z=new Date(G),E=Math.floor((ne-Z)/1e3);return E<60?"NOW":E<3600?`${Math.floor(E/60)}M`:E<86400?`${Math.floor(E/3600)}H`:`${Math.floor(E/86400)}D`};return r.score<=-5?null:T.jsxs("div",{className:"py-4 border-b border-gray-300 last:border-b-0",children:[T.jsxs("div",{className:"flex justify-between items-start mb-3",children:[T.jsxs("div",{className:"flex items-center space-x-3",children:[T.jsx("div",{className:"w-8 h-8 bg-navy-700 text-white flex items-center justify-center text-xs font-bold",children:(r.authorName||r.author||"A").charAt(0)}),T.jsxs("div",{children:[T.jsx("div",{className:"flex items-center space-x-2",children:T.jsx("div",{className:"font-bold text-sm",style:{color:((O=r.authorColor)==null?void 0:O.value)||"#1e3a8a"},children:r.authorName||r.author||"Anonymous"})}),T.jsx("div",{className:"text-xs terminal-accent",children:o&&r.location.name?T.jsxs(T.Fragment,{children:["📍 ",r.location.name]}):r.location.nearestCity?T.jsxs(T.Fragment,{children:["📍 ",r.location.nearestCity]}):T.jsxs(T.Fragment,{children:[r.location.distance,"mi away"]})})]})]}),T.jsx("button",{onClick:M,className:`text-xs px-2 py-1 ${g?"text-gray-500":"text-red-600 hover:text-red-700"} focus:outline-none`,disabled:g,children:g?"✓":"🚩"})]}),T.jsx("div",{className:"mb-3 p-3 bg-white border-2 border-navy-700",children:T.jsx("div",{className:"terminal-text text-sm font-mono",children:r.content})}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsxs("button",{onClick:()=>D("up"),className:`px-2 py-1 text-sm ${(R==null?void 0:R.type)==="up"?"text-green-600 font-bold":"text-gray-600 hover:text-green-600"} focus:outline-none`,children:["▲ ",r.upvotes]}),T.jsxs("button",{onClick:()=>D("down"),className:`px-2 py-1 text-sm ${(R==null?void 0:R.type)==="down"?"text-red-600 font-bold":"text-gray-600 hover:text-red-600"} focus:outline-none`,children:["▼ ",r.downvotes]}),T.jsxs("div",{className:`px-2 py-1 text-xs font-bold ${r.score>0?"text-green-600":r.score<0?"text-red-600":"text-gray-600"}`,children:[r.score>0?"+":"",r.score]})]}),T.jsxs("button",{onClick:()=>l(!c),className:"px-2 py-1 text-sm text-gray-600 hover:text-navy-700 focus:outline-none",children:["💬 ",x.length]})]}),c&&T.jsxs("div",{className:"mt-4 space-y-3 border-t-2 border-navy-700 pt-4",children:[x.map(G=>{var ne;return T.jsxs("div",{className:"bg-gray-100 border-2 border-navy-700 p-2",children:[T.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[T.jsx("div",{className:"w-4 h-4 bg-navy-700 text-white flex items-center justify-center text-xs font-bold",children:G.author.charAt(0)}),T.jsx("span",{className:"font-bold text-xs",style:{color:((ne=G.authorColor)==null?void 0:ne.value)||"#1e3a8a"},children:G.author}),T.jsx("span",{className:"text-xs terminal-accent",children:U(G.timestamp)})]}),T.jsx("div",{className:"terminal-text text-xs font-mono pl-6",children:G.content})]},G.id)}),T.jsxs("div",{className:"flex space-x-2",children:[T.jsx("textarea",{value:h,onChange:G=>f(G.target.value),placeholder:"Add a comment...",className:"flex-1 h-16 px-2 py-1 terminal-input text-xs font-mono focus:outline-none focus:ring-2 focus:ring-navy-700 resize-none",maxLength:200}),T.jsx("button",{onClick:N,disabled:!h.trim(),className:"px-3 py-1 terminal-button text-xs font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled",children:"Send"})]}),T.jsxs("div",{className:"text-xs terminal-accent",children:[h.length,"/200 characters"]})]})]})},f0=()=>{var di;const[r,e]=J.useState([]),[t,n]=J.useState([]),[s,i]=J.useState([]),[o,c]=J.useState(""),[l,h]=J.useState(null),[f,g]=J.useState(null),[p,R]=J.useState(navigator.onLine);J.useState(null);const[x,D]=J.useState(!1),[N,M]=J.useState("hot"),[U,O]=J.useState(""),[G,ne]=J.useState(!1),[Z,E]=J.useState(!1),[_,I]=J.useState(null),[w,v]=J.useState(!1),[b,y]=J.useState(10),[nt,dn]=J.useState({posts:[],comments:[]});J.useState(Date.now()),J.useRef(null);const[la,fn]=J.useState(0),[mn,Wr]=J.useState(0),[ui,ua]=J.useState(0),[ut,Ce]=J.useState(0),[Wn,kt]=J.useState(20),[Qn,Mt]=J.useState(!1);J.useRef(null),J.useEffect(()=>{let $=!0;(async()=>{try{const B=localStorage.getItem("riprap_user");if(!B)$&&D(!0);else try{const Y=await Nd();$&&h(Y)}catch(Y){console.warn("Firebase user service failed, falling back to local mode:",Y);try{const q=JSON.parse(B);if(q&&q.id&&q.screenName)$&&h(q),console.log("Successfully loaded user from localStorage");else throw new Error("Invalid user data structure")}catch(q){console.error("Failed to parse localStorage user data:",q),localStorage.removeItem("riprap_user"),$&&D(!0)}}}catch(B){console.error("Failed to initialize user:",B),$&&D(!0)}})();try{const B=Dd();$&&(y(B.locationRadius),B.customLocation&&(I(B.customLocation),O(B.customLocation.name)))}catch(B){console.error("Failed to load location settings:",B)}return()=>{$=!1}},[]),J.useEffect(()=>{if(!l)return;(async()=>{try{const Y=Dd();let q=null;if(Y.customLocation)q=Y.customLocation,g(Y.customLocation),O(Y.customLocation.name),console.log("Using saved custom location:",Y.customLocation);else{const Ie=await(()=>new Promise(_e=>{if(!navigator.geolocation){console.warn("Geolocation not supported"),_e(null);return}navigator.geolocation.getCurrentPosition(oe=>{console.log("GPS location acquired"),_e({lat:oe.coords.latitude,lng:oe.coords.longitude})},oe=>{console.warn("Geolocation failed:",oe.message),_e(null)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5})}))();if(Ie)q=Ie,g(Ie),O(kd(Ie.lat,Ie.lng)),console.log("GPS location acquired:",Ie);else{const _e=Hs["cape-cod-ma"];q=_e,g(_e),O(`${_e.name} (Default)`)}}q?await rt(l.id,q):(console.warn("No location available, loading data without location filter"),await rt(l.id,null))}catch(Y){console.error("Failed to initialize app:",Y);const q=Hs["cape-cod-ma"];g(q),O(`${q.name} (Default)`);try{await rt(l.id,q)}catch(me){console.error("Failed to load data with fallback location:",me),e([]),n([]),i([])}}})();const se=()=>R(!0),B=()=>R(!1);return window.addEventListener("online",se),window.addEventListener("offline",B),()=>{window.removeEventListener("online",se),window.removeEventListener("offline",B)}},[l]),J.useEffect(()=>{l&&r&&t&&da()},[r,t,l,s]),J.useEffect(()=>{b!==10&&Ga(_,b)},[b,_]),J.useEffect(()=>{const $=()=>{if(N==="coastwide")return;const se=window.pageYOffset||document.documentElement.scrollTop,B=document.documentElement.scrollHeight,Y=window.innerHeight;se+Y>=B-1e3&&!Qn&&(Mt(!0),setTimeout(()=>{kt(q=>q+10),Mt(!1)},500))};return window.addEventListener("scroll",$),()=>window.removeEventListener("scroll",$)},[N,Qn]),J.useEffect(()=>{kt(20)},[N]);const ha=async($,se)=>{try{const B=await Nd($,se);h(B),D(!1)}catch(B){console.error("Failed to set username:",B)}},da=()=>{if(!l||!r||!t)return;const $=r.filter(B=>B.authorId===l.id),se=t.filter(B=>B.authorId===l.id);dn({posts:$,comments:se})},Jn=async $=>{$?(g($),I($),O($.name),Ga($,b)):"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(se=>{const B={lat:se.coords.latitude,lng:se.coords.longitude};g(B),I(null);const Y=kd(B.lat,B.lng);O(Y),Ga(null,b)},()=>{console.error("Failed to get current location"),I(null)})},rt=async($,se=null)=>{try{const B=se||f,Y=b*1.609344,q=await cr.getPosts(B,Y,Wn,N),me=q.map(ce=>ce.id),Ie=await cr.getUserVotes($,me),_e=Object.entries(Ie).map(([ce,Se])=>({postId:ce,userId:$,type:Se})),oe=[];for(const ce of q)if(ce.commentsCount>0)try{const Se=await cr.getComments(ce.id);oe.push(...Se)}catch(Se){console.warn(`Failed to load comments for post ${ce.id}:`,Se)}e(q||[]),n(oe||[]),i(_e||[])}catch(B){console.error("Failed to load data:",B),e([]),n([]),i([])}},Qr=()=>{if(N==="coastwide")return r.map(q=>{var me,Ie,_e,oe,ce,Se,Yn,It;return{...q,location:{...q.location,distance:f!=null&&f.lat&&(f!=null&&f.lng)&&((me=q.location)!=null&&me.lat)&&((Ie=q.location)!=null&&Ie.lng)?Math.round(Er(f.lat,f.lng,q.location.lat,q.location.lng)*10)/10:0,nearestCity:((_e=q.location)==null?void 0:_e.nearestCity)||((oe=q.location)!=null&&oe.lat&&((ce=q.location)!=null&&ce.lng)?Ui(q.location.lat,q.location.lng):"Unknown Location"),name:((Se=q.location)==null?void 0:Se.nearestCity)||((Yn=q.location)!=null&&Yn.lat&&((It=q.location)!=null&&It.lng)?Ui(q.location.lat,q.location.lng):"Unknown Location")}}}).filter(q=>{var me;return((me=q.location)==null?void 0:me.lng)&&q.location.lng>-82&&q.location.lng<-66}).sort((q,me)=>{const Ie=t.filter(It=>It.postId===q.id).length,_e=t.filter(It=>It.postId===me.id).length,oe=(Date.now()-new Date(q.timestamp))/(1e3*60*60),ce=(Date.now()-new Date(me.timestamp))/(1e3*60*60),Se=q.score+Ie*3-oe*.05;return me.score+_e*3-ce*.05-Se}).slice(0,3);if(!f)return r.slice(0,Wn);const $=_||f;let se=r.filter(B=>{var Y,q;return(Y=B.location)!=null&&Y.lat&&((q=B.location)!=null&&q.lng)&&($!=null&&$.lat)&&($!=null&&$.lng)?Er($.lat,$.lng,B.location.lat,B.location.lng)<=b:!0});return se=se.map(B=>{var Y,q,me,Ie,_e;return{...B,location:{...B.location,distance:$!=null&&$.lat&&($!=null&&$.lng)&&((Y=B.location)!=null&&Y.lat)&&((q=B.location)!=null&&q.lng)?Math.round(Er($.lat,$.lng,B.location.lat,B.location.lng)*10)/10:null,nearestCity:((me=B.location)==null?void 0:me.nearestCity)||((Ie=B.location)!=null&&Ie.lat&&((_e=B.location)!=null&&_e.lng)?Ui(B.location.lat,B.location.lng):"Unknown Location")}}}),N==="hot"?se.sort((B,Y)=>{const q=t.filter(Se=>Se.postId===B.id).length,me=t.filter(Se=>Se.postId===Y.id).length,Ie=(Date.now()-new Date(B.timestamp))/(1e3*60*60),_e=(Date.now()-new Date(Y.timestamp))/(1e3*60*60),oe=B.score+q*2-Ie*.1;return Y.score+me*2-_e*.1-oe}):se.sort((B,Y)=>new Date(Y.timestamp)-new Date(B.timestamp)),se.slice(0,Wn)},Jr=async()=>{if(!o.trim()||!l||!f)return;const $=Vd(la,Fi.POST_COOLDOWN,ui,Fi.MAX_POSTS_PER_HOUR,36e5);if(!$.allowed){alert(`Please wait ${$.remainingTime} seconds before posting again.`);return}const se=o0(o.trim());if(!se.allowed){alert(`Post blocked: ${se.issues.join(", ")}`);return}const B={lat:f.lat,lng:f.lng,nearestCity:Ui(f.lat,f.lng)};try{await cr.createPost(o.trim(),B,l),await rt(l.id,f),c(""),fn(Date.now()),ua(Y=>Y+1)}catch(Y){console.error("Failed to create post:",Y),alert("Failed to create post. Please try again.")}},Yr=async($,se)=>{if(!l)return;const B=Vd(mn,Fi.VOTE_COOLDOWN,ut,Fi.MAX_VOTES_PER_MINUTE,6e4);if(!B.allowed){console.log(`Vote rate limited: ${B.remainingTime}s remaining`);return}try{const Y=se==="up"?"upvote":"downvote";await cr.castVote($,l.id,Y),await rt(l.id),Wr(Date.now()),Ce(q=>q+1)}catch(Y){console.error("Failed to vote:",Y)}},Xr=async($,se)=>{if(l)try{await cr.createComment($,se,l),await rt(l.id)}catch(B){console.error("Failed to comment:",B)}},hi=$=>{console.log("Post reported:",$)},gn=Qr();return x?T.jsx(c0,{onUsernameSet:ha}):T.jsxs("div",{className:"min-h-screen bg-gray-50 terminal-text overflow-x-hidden",children:[T.jsx(l0,{isOpen:w,onClose:()=>v(!1),user:l,userStats:nt}),T.jsx(u0,{isOpen:Z,onClose:()=>E(!1),onLocationSet:Jn,currentLocation:f}),T.jsx(h0,{isOpen:G,onClose:()=>ne(!1),onSubmit:Jr,newPostContent:o,setNewPostContent:c,isOnline:p}),T.jsx("button",{onClick:()=>ne(!0),className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 flex items-center justify-center text-xl sm:text-2xl z-40",style:{maxWidth:"calc(100vw - 2rem)"},title:"Create new post",children:"+"}),T.jsxs("div",{className:"max-w-2xl mx-auto px-2 sm:px-0",children:[T.jsx("div",{className:"terminal-header sticky top-0 z-40 p-3 sm:p-4",children:T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-white tracking-wider",children:"RIPRAP"}),T.jsx("div",{className:"hidden sm:block",children:T.jsx("div",{className:"text-xs",children:"Share the Shore, Spill the Lore"})})]}),T.jsx("div",{className:"flex items-center space-x-1 sm:space-x-2",children:T.jsx("button",{onClick:()=>v(!0),className:"flex items-center space-x-1 text-xs sm:text-sm font-bold px-3 py-2 bg-white border-2 border-navy-600 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-navy-300 shadow-sm",style:{color:((di=l==null?void 0:l.color)==null?void 0:di.value)||"#1e3a8a"},children:T.jsx("span",{children:l==null?void 0:l.screenName})})})]})}),T.jsxs("div",{className:"p-3 sm:p-4 space-y-3 sm:space-y-4",children:[T.jsx("div",{className:"p-3 terminal-card",children:T.jsxs("div",{className:"space-y-3",children:[T.jsxs("button",{onClick:()=>E(!0),className:"w-full text-left hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-300 rounded p-2",children:[T.jsx("div",{className:"text-sm font-bold terminal-text mb-1",children:"📍 Local Area:"}),T.jsx("div",{className:"text-xs terminal-accent",children:U}),T.jsx("div",{className:"text-xs text-navy-600 mt-1",children:"Click to change location"})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsxs("label",{className:"text-sm font-bold terminal-text block",children:["Search Radius: ",b," miles"]}),T.jsx("input",{type:"range",min:"5",max:"100",step:"5",value:b,onChange:$=>y(parseInt($.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-navy"}),T.jsxs("div",{className:"flex justify-between text-xs terminal-accent",children:[T.jsx("span",{children:"5 mi"}),T.jsxs("span",{children:["Show posts within ",b," miles"]}),T.jsx("span",{children:"100 mi"})]})]})]})}),T.jsxs("div",{className:"terminal-card p-3",children:[T.jsx("div",{className:"text-sm font-bold terminal-text mb-2",children:"Sort by:"}),T.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[T.jsx("button",{onClick:()=>M("hot"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="hot"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"🔥 Hot"}),T.jsx("button",{onClick:()=>M("new"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="new"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"⭐ New"}),T.jsx("button",{onClick:()=>M("coastwide"),className:`px-3 py-2 text-sm font-bold border-2 ${N==="coastwide"?"terminal-button":"border-navy-600 bg-white text-navy-600 hover:bg-navy-50"} focus:outline-none focus:ring-2 focus:ring-navy-600`,children:"🌊 Coastwide"})]}),N==="coastwide"&&T.jsx("div",{className:"text-xs terminal-accent mt-2",children:"Top 3 posts from across the East Coast"})]})]}),T.jsx("div",{className:"p-4",children:gn.length===0?T.jsxs("div",{className:"p-8 text-center",children:[T.jsx("div",{className:"text-4xl mb-4",children:"🎣"}),T.jsx("div",{className:"text-sm font-bold terminal-text mb-2",children:N==="coastwide"?"No trending posts found":"No posts in your area"}),T.jsx("div",{className:"text-xs terminal-accent",children:N==="coastwide"?"Check back later for trending discussions!":"Be the first to share what's happening on the water!"})]}):T.jsxs(T.Fragment,{children:[gn.map(($,se)=>T.jsxs("div",{children:[T.jsx(d0,{post:$,onVote:Yr,onComment:Xr,onReport:hi,userVotes:s,comments:t,showLocation:N==="coastwide"}),N==="coastwide"&&se<gn.length-1&&T.jsx("div",{className:"border-t-2 border-navy-300 my-4"})]},$.id)),Qn&&N!=="coastwide"&&T.jsx("div",{className:"text-center py-4",children:T.jsx("div",{className:"text-sm terminal-accent",children:"Loading more posts..."})}),!Qn&&N!=="coastwide"&&gn.length>=Wn&&T.jsx("div",{className:"text-center py-4",children:T.jsx("div",{className:"text-xs terminal-accent",children:"Scroll down for more posts"})})]})}),T.jsxs("div",{className:"p-4 text-center text-xs terminal-accent bg-gray-100 border-t-2 border-navy-700",children:[T.jsx("div",{children:"🎣 Share the Shore, Spill the Lore"}),T.jsx("div",{children:"Anonymous • Location-based • Your Local Fishing and Boating Community"})]})]})]})},m0=()=>T.jsx(n0,{children:T.jsx(f0,{})});window.addEventListener("unhandledrejection",function(r){var e,t,n,s,i,o;if(console.error("Unhandled promise rejection:",r.reason),(t=(e=r.reason)==null?void 0:e.code)!=null&&t.startsWith("auth/")||(s=(n=r.reason)==null?void 0:n.code)!=null&&s.startsWith("firestore/")||(o=(i=r.reason)==null?void 0:i.message)!=null&&o.includes("Firebase")){console.warn("Firebase operation failed, app will continue in offline mode"),r.preventDefault();return}console.error("Critical unhandled rejection:",r.reason)});window.addEventListener("error",function(r){var e;console.error("Global JavaScript error:",r.error),(e=r.error)!=null&&e.stack&&console.error("Stack trace:",r.error.stack)});Ka.createRoot(document.getElementById("root")).render(T.jsx(Md.StrictMode,{children:T.jsx(m0,{})}));
//# sourceMappingURL=index-ec65c81f.js.map
