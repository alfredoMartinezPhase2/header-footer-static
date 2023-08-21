function t(t,e,i,n){for(var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n,s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(i,t,n)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var n;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.1");const b=window,w=b.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,C="?"+k,$=`<${C}>`,L=document,M=()=>L.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,Z="[ \t\n\f\r]",A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,T=/>/g,B=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,O=/^(?:script|style|textarea|title)$/i,E=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),_=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),U=new WeakMap,I=L.createTreeWalker(L,129,null,!1),R=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",a=A;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===A?"!--"===l[1]?a=V:void 0!==l[1]?a=T:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=B):void 0!==l[3]&&(a=B):a===B?">"===l[0]?(a=null!=o?o:A,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?B:'"'===l[3]?H:j):a===H||a===j?a=B:a===V||a===T?a=A:(a=B,o=void 0);const d=a===B&&t[e+1].startsWith("/>")?" ":"";r+=a===A?i+$:c>=0?(n.push(s),i.slice(0,c)+y+i.slice(c)+k+d):i+k+(-2===c?(n.push(void 0),e):d)}const s=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(s):s,n]};class F{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=R(t,e);if(this.el=F.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=I.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(y)||e.startsWith(k)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+y).split(k),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?q:"@"===e[1]?X:J})}else s.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(O.test(n.tagName)){const t=n.textContent.split(k),e=t.length-1;if(e>0){n.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],M()),I.nextNode(),s.push({type:2,index:++o});n.append(t[e],M())}}}else if(8===n.nodeType)if(n.data===C)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(k,t+1));)s.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function N(t,e,i=t,n){var o,r,a,s;if(e===_)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=N(t,l._$AS(t,e.values),l,n)),e}class P{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:L).importNode(i,!0);I.currentNode=o;let r=I.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Y(r,this,t)),this.u.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(r=I.nextNode(),a++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,n){var o;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),S(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==_&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==D&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=F.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new P(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new F(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new W(this.S(M()),this.S(M()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,n,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=N(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=N(this,n[i+a],e,a),s===_&&(s=this._$AH[a]),r||(r=!S(s)||s!==this._$AH[a]),s===D?t=D:t!==D&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const K=w?w.emptyScript:"";class q extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class X extends J{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:D)===_)return;const n=this._$AH,o=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==D&&(n===D||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(F,W),(null!==(g=b.litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.7.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=r._$litPart$;if(void 0===a){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new W(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return _}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function st(t){return at({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;let ht=class extends it{};ht=t([ot("outline-element")],ht);var dt,ut=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
.pulse{max-height:100%;max-width:var(--max-size);position:absolute}.top-right{right:0;top:0;transform:rotate(0deg)}.bottom-right{bottom:0;right:0;transform:rotate(90deg)}.bottom-left{bottom:0;left:0;transform:rotate(180deg)}.top-left{left:0;top:0;transform:rotate(270deg)}@media (prefers-reduced-motion:no-preference){.pulse{--scale-speed:0.15}.arc-1,.arc-2,.arc-3,.arc-4{transform-origin:top right}.pulse:hover .arc-1{--scale:1.5;animation:calc(var(--scale-speed)*1s) ease-in 0s 2 alternate animating-multiple-properties}.pulse:hover .arc-2{--scale:1.3;animation:calc(var(--scale-speed)*1s) ease-in .1s 2 alternate animating-multiple-properties}.pulse:hover .arc-3{--scale:1.1;animation:calc(var(--scale-speed)*1s) ease-in .2s 2 alternate animating-multiple-properties}.pulse:hover .arc-4{--scale:1.05;animation:calc(var(--scale-speed)*1s) ease-in .3s 2 alternate animating-multiple-properties}@keyframes animating-multiple-properties{0%{transform:scale(1)}to{transform:scale(var(--scale))}}}`;!function(t){t[t["top-right"]=0]="top-right",t[t["bottom-right"]=1]="bottom-right",t[t["bottom-left"]=2]="bottom-left",t[t["top-left"]=3]="top-left"}(dt||(dt={}));let vt=class extends ht{constructor(){super(...arguments),this.maxSize="650px",this.pulseTopAlignment=!1}render(){return E`
      ${this.maxSize?E` <style>
            .pulse {
              --max-size: ${this.maxSize};
            }
          </style>`:null}
      ${this.pulseSVG()}
    `}pulseSVG(){return E`
      <svg
        class="pulse ${this.orientation} ${this.pulseTopAlignment}"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
      >
        <circle
          class="arc-4"
          cx="100%"
          cy="0%"
          r="90%"
          fill="var(--dark-blue)"
        />
        <circle
          class="arc-3"
          cx="100%"
          cy="0%"
          r="67.5%"
          fill="var(--medium-blue)"
        />
        <circle
          class="arc-2"
          cx="100%"
          cy="0%"
          r="45%"
          fill="var(--core-blue)"
        />
        <circle
          class="arc-1"
          cx="100%"
          cy="0%"
          r="22.5%"
          fill="var(--light-blue)"
        />
      </svg>
    `}};vt.styles=[ut],t([at({type:String,reflect:!0,attribute:"orientation",converter:t=>(t&&!(t in dt)&&(t="top-right"),t)})],vt.prototype,"orientation",void 0),t([at({type:String,reflect:!0,attribute:"max-size"})],vt.prototype,"maxSize",void 0),t([at({type:String,reflect:!0,attribute:"pulse-top-alignment"})],vt.prototype,"pulseTopAlignment",void 0),vt=t([ot("tufts-pulse")],vt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=t=>null!=t?t:D;var mt=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
nav{font-family:var(--ff-body)}nav.header-utility-menu.mobile ul{display:flex;flex-direction:column;gap:1rem;list-style:none;margin:0;padding:0}nav.header-utility-menu.mobile a{color:var(--white);text-decoration:none}nav.header-utility-menu.mobile a:hover{text-decoration:underline}nav.header-utility-menu.mobile li:last-child a:before{-webkit-margin-end:.67rem;color:var(--white);content:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='11' fill='none'%3E%3Cpath fill='%23fff' d='M6 5.5A2.666 2.666 0 1 0 6 .167 2.666 2.666 0 1 0 6 5.5Zm0 1.333C4.22 6.833.667 7.727.667 9.5v1.333h10.667V9.5c0-1.773-3.554-2.667-5.334-2.667Z'/%3E%3C/svg%3E");margin-inline-end:.67rem}nav.header-utility-menu:not(.mobile) ul{display:flex;flex-wrap:wrap;gap:2rem;justify-content:end;list-style:none;margin:0;padding:0}nav.header-utility-menu:not(.mobile) li:nth-child(2):before{color:var(--white);content:"|";padding-right:calc(2rem - 4px)}nav.header-utility-menu:not(.mobile) li:last-child a:before{color:var(--white);content:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='11' fill='none'%3E%3Cpath fill='%23fff' d='M6 5.5A2.666 2.666 0 1 0 6 .167 2.666 2.666 0 1 0 6 5.5Zm0 1.333C4.22 6.833.667 7.727.667 9.5v1.333h10.667V9.5c0-1.773-3.554-2.667-5.334-2.667Z'/%3E%3C/svg%3E");margin:0 .67rem}nav.header-utility-menu:not(.mobile) a{color:var(--white);font-size:var(--fs-h6);font-weight:var(--fw-bold);text-decoration:none}nav.header-utility-menu:not(.mobile) a:hover{text-decoration:underline}nav.main-menu.mobile ul{color:#fff;display:flex;flex-direction:column;font-weight:var(--fw-semibold);list-style-type:none;margin:0;padding:0}nav.main-menu.mobile ul:not(.menu--level-1){-webkit-padding-start:1rem;gap:1rem;padding-block:1rem;padding-inline-start:1rem}nav.main-menu.mobile li.menu--level-1{display:grid;grid-template-areas:"link button" "children children";justify-content:space-between}nav.main-menu.mobile a{align-self:center;color:#fff;min-width:160px;padding:.5rem;text-decoration:none}nav.main-menu.mobile [aria-expanded=false]+ul{display:none}nav.main-menu.mobile .dropdown-button{background-color:initial;border:none;color:#fff;cursor:pointer;padding:1rem}nav.main-menu.mobile .dropdown-button[aria-expanded=true] .dropdown-icon{transform:rotate(180deg)}nav.main-menu.mobile .with-title{align-items:center;display:flex;font-family:var(--ff-body);font-size:var(--fs-lg);font-weight:var(--fw-semibold);grid-area:link/link/button/button;justify-content:space-between}nav.main-menu.mobile .dropdown-icon{display:flex}@media (prefers-reduced-motion:no-preference){nav.main-menu.mobile .dropdown-icon{transition-duration:.3s}}nav.main-menu:not(.mobile) ul{display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}nav.main-menu:not(.mobile) li{position:relative}nav.main-menu:not(.mobile) li:not(:has(button)){margin-right:2rem}nav.main-menu:not(.mobile) ul.menu--level-2,nav.main-menu:not(.mobile) ul.menu--level-3{background-color:var(--black-100);border-radius:0 0 16px 16px;border-top:2px solid var(--dark-green);box-shadow:3px 3px 11px rgba(0,0,0,.05),8px 10px 26px rgba(0,0,0,.19);display:flex;flex-direction:column;gap:1rem;left:0;min-width:-moz-max-content;min-width:max-content;padding:1.5rem;position:absolute;top:2.5rem;z-index:1}nav.main-menu:not(.mobile) li.menu--level-1{-webkit-padding-after:1rem;align-items:center;display:flex;padding-block-end:1rem}nav.main-menu:not(.mobile) li.menu--level-1 .dropdown-button{background:transparent;border:none;color:var(--chevron-color--light-mode);color:var(--chevron-color--dark-mode,var(--chevron-color--light-mode));cursor:pointer;margin-inline:2px .5rem;padding-block:.5rem;padding-inline:calc(.5rem - 2px) 1.5rem}nav.main-menu:not(.mobile) li.menu--level-1 .dropdown-button[aria-expanded=true] .dropdown-icon{transform:rotate(180deg)}nav.main-menu:not(.mobile) li.menu--level-1 .with-title{align-items:center;color:var(--text-color--light-mode);color:var(--text-color--dark-mode,var(--text-color--light-mode));display:flex;font-family:var(--ff-body);font-size:var(--fs-lg);font-weight:var(--fw-semibold)}nav.main-menu:not(.mobile) li.menu--level-1 .with-title .dropdown-icon{margin-left:.5rem}nav.main-menu:not(.mobile) li.menu--level-1 a{color:var(--text-color--light-mode);color:var(--text-color--dark-mode,var(--text-color--light-mode));font-weight:var(--fw-semibold);outline-offset:3px;text-decoration-thickness:2px;text-underline-offset:.5rem}nav.main-menu:not(.mobile) li.menu--level-1 a:hover{color:var(--link-hover-color--light-mode);color:var(
          --link-hover-color--dark-mode,var(--link-hover-color--light-mode)
        )}nav.main-menu:not(.mobile) .dropdown-icon{display:flex}@media (prefers-reduced-motion:no-preference){nav.main-menu:not(.mobile) .dropdown-icon{transition-duration:.3s}}nav.main-menu:not(.mobile) li.menu--level-2 a{color:var(--medium-blue);font-weight:400;text-decoration-thickness:1px}nav.main-menu:not(.mobile) li.menu--level-2 a:hover{color:var(--medium-blue)}nav.main-menu:not(.mobile) [aria-expanded=false]+ul{display:none}nav.main-menu:not(.mobile) ul.menu--level-2:has(ul){-moz-column-gap:3rem;column-gap:3rem;flex-direction:row}nav.main-menu:not(.mobile) ul.menu--level-3{-webkit-margin-before:1rem;background-color:revert;border-top:revert;box-shadow:revert;flex-direction:column;margin-block-start:1rem;padding:0;position:static}nav.main-menu:not(.mobile) a{text-decoration:none}nav.main-menu:not(.mobile) a:hover{text-decoration:underline}nav.feature-links-menu ul{color:var(--white);list-style-type:none;margin:0;padding:0}nav.feature-links-menu ul.menu--level-1{margin-top:2rem}nav.feature-links-menu li{margin-top:.75rem}nav.feature-links-menu a{color:#fff;font-size:var(--fs-2xl);font-weight:var(--fw-semibold);outline-offset:3px;text-decoration:none;text-decoration-thickness:2px;text-underline-offset:.5rem}nav.feature-links-menu a:hover{text-decoration:underline}nav.header-menu-menu ul{color:var(--white);display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}nav.header-menu-menu ul.menu--level-1{-moz-column-gap:4rem;column-gap:4rem;margin-top:3.5rem}nav.header-menu-menu li.menu--level-1{color:var(--light-blue-25)}nav.header-menu-menu li.menu--level-1 a{color:var(--white);font-size:var(--fs-lg);font-weight:var(--fw-semibold);text-decoration:none}nav.header-menu-menu li.menu--level-1 a:hover{text-decoration:underline}nav.header-menu-menu li.menu--level-1 a.menu--level-1{color:var(--light-blue-25);display:flex;font-size:var(--fs-h6);font-weight:var(--fw-semibold);line-height:var(--lh-h6);text-transform:uppercase}nav.header-menu-menu ul.menu--level-2{flex-direction:column}nav.header-menu-menu li.menu--level-2{margin-top:.5rem;text-transform:none}nav.header-menu-menu li.menu--level-2 a{color:var(--white);font-size:18px;font-weight:var(--fw-semibold);text-decoration:none}nav.header-menu-menu li.menu--level-2 a:hover{text-decoration:underline}nav.header-menu-menu button{display:none}nav.header-menu-menu li.menu--level-3{margin-top:.5rem}nav.footer-menu{max-width:max(320px,60vw)}nav.footer-menu ul{display:flex;flex-wrap:wrap;gap:5rem;list-style:none;padding:0}nav.footer-menu ul.menu--level-2{flex-direction:column;gap:1.5rem;margin-top:1.5rem}nav.footer-menu li.menu--level-2{flex-shrink:0}nav.footer-menu tufts-heading{color:#fff}nav.footer-menu a{color:var(--light-blue-25)}nav.footer-menu a.menu--level-1{color:var(--white);font-family:var(--ff-display);font-size:var(--fs-h5);font-weight:var(--fw-normal);font-weight:var(--fw-extrabold);letter-spacing:var(--ls-h5);line-height:var(--lh-h5);text-decoration:none}nav.footer-menu a.menu--level-1:hover{text-decoration:underline}nav.footer-menu button{display:none}`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const ft=1,gt=2,bt=t=>(...e)=>({_$litDirective$:t,values:e});class wt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=bt(class extends wt{constructor(t){var e;if(super(t),t.type!==ft||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach((t=>{t in e||(o.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)))}return _}});var yt=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
:host svg{display:flex;height:inherit;width:inherit}`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;class kt extends wt{constructor(t){if(super(t),this.it=D,t.type!==gt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||null==t)return this._t=void 0,this.it=t;if(t===_)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}kt.directiveName="unsafeHTML",kt.resultType=1;const Ct=bt(kt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t extends kt{}$t.directiveName="unsafeSVG",$t.resultType=2;const Lt=bt($t);function Mt(t,e,i){const n=new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return t.dispatchEvent(n),n}function St(t,e){const i=Object.assign({waitUntilFirstUpdate:!1},e);return(e,n)=>{const{update:o}=e;if(t in e){const r=t;e.update=function(t){if(t.has(r)){const e=t.get(r),o=this[r];e!==o&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[n](e,o))}o.call(this,t)}}}}const zt={"check-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">\n      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">\n      <path fill="currentColor" d="M8.06 10.87a.83.83 0 0 1-.6-.24l-4.2-4.2a.8.8 0 0 1 0-1.17.8.8 0 0 1 1.18 0l3.62 3.59 3.6-3.6a.8.8 0 0 1 1.17 0 .8.8 0 0 1 0 1.19l-4.2 4.2a.81.81 0 0 1-.57.23Z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-up":'\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n  </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  ',"right-arrow":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" viewBox="0 0 16 17" fill="none">\n      <path d="M6.11959e-07 9.5L12.17 9.5L6.58 15.09L8 16.5L16 8.5L8 0.499999L6.59 1.91L12.17 7.5L7.86805e-07 7.5L6.11959e-07 9.5Z" fill="currentColor"/>\n    </svg>\n  ',"right-arrow-pager":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" >\n    <path d="M19 12.875L8.35125 12.875L13.2425 17.7662L12 19L5 12L12 5L13.2337 6.23375L8.35125 11.125L19 11.125L19 12.875Z" fill="currentColor"/>\n    </svg>\n  ',"left-arrow-pager":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n      <path d="M19 12.875L8.35125 12.875L13.2425 17.7662L12 19L5 12L12 5L13.2337 6.23375L8.35125 11.125L19 11.125L19 12.875Z" fill="currentColor"/>\n    </svg>\n  ',"right-double-arrow":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n      <path d="M3 12.875L13.6488 12.875L8.7575 17.7662L10 19L17 12L10 5L8.76625 6.23375L13.6488 11.125L3 11.125L3 12.875Z" fill="currentColor"/>\n      <path d="M12.9997 17.7662L18.7422 12L13.0084 6.23375L14.2422 5L21.2422 12L14.2422 19L12.9997 17.7662Z" fill="currentColor"/>\n    </svg>\n  ',"left-double-arrow":'\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M21.2422 12.875L10.5934 12.875L15.4847 17.7662L14.2422 19L7.24219 12L14.2422 5L15.4759 6.23375L10.5934 11.125L21.2422 11.125L21.2422 12.875Z" fill="currentColor"/>\n      <path d="M11.2425 17.7662L5.5 12L11.2337 6.23375L10 5L3 12L10 19L11.2425 17.7662Z" fill="currentColor"/>\n    </svg>\n  ',player:'\n    <svg viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M18 12.5L8.062e-07 24.1913L1.82829e-06 0.808657L18 12.5Z" fill="currentColor"/>\n    </svg>\n  ',"player-stroked":'\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12.4999L1.90735e-06 0.808593L8.85259e-07 24.1913L18 12.4999ZM14.3283 12.4999L2 4.49248L2 20.5074L14.3283 12.4999Z" fill="currentColor"/>\n    </svg>\n  ',search:'\n    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M20.6719 19.9434L15.1758 14.4473C16.3652 13.0117 17.0215 11.166 17.0215 9.15625C17.0215 4.48047 13.166 0.625 8.49023 0.625C3.77344 0.625 0 4.48047 0 9.15625C0 13.873 3.81445 17.6875 8.49023 17.6875C10.459 17.6875 12.3047 17.0312 13.7812 15.8418L19.2773 21.3379C19.4824 21.543 19.7285 21.625 20.0156 21.625C20.2617 21.625 20.5078 21.543 20.6719 21.3379C21.082 20.9688 21.082 20.3535 20.6719 19.9434ZM1.96875 9.15625C1.96875 5.54688 4.88086 2.59375 8.53125 2.59375C12.1406 2.59375 15.0938 5.54688 15.0938 9.15625C15.0938 12.8066 12.1406 15.7188 8.53125 15.7188C4.88086 15.7188 1.96875 12.8066 1.96875 9.15625Z" fill="currentColor"/>\n    </svg>\n  ',"hamburger-menu":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">\n      <path fill="#0047C7" d="M3.7 18h18v-2h-18v2Zm0-5h18v-2h-18v2Zm0-7v2h18V6h-18Z"/>\n    </svg>\n  ',close:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n      <path fill="currentColor" d="M19 6.41 17.59 5l-5.6 5.59L6.42 5 5 6.41 10.59 12l-5.6 5.59L6.42 19l5.59-5.59L17.59 19l1.4-1.41L13.42 12l5.59-5.59H19Z"/>\n    </svg>\n  ',"magnifying-glass":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n      <path stroke="currentColor" stroke-width="2" d="M13.49 13.93a6 6 0 1 0-8.03-8.92 6 6 0 0 0 8.03 8.92ZM13.64 13.72l7 7"/>\n    </svg>\n  ',"new-window":'\n  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M5.77778 20C5.28889 20 4.87022 19.8261 4.52178 19.4782C4.17393 19.1298 4 18.7111 4 18.2222V5.77778C4 5.28889 4.17393 4.87022 4.52178 4.52178C4.87022 4.17393 5.28889 4 5.77778 4H12V5.77778H5.77778V18.2222H18.2222V12H20V18.2222C20 18.7111 19.8261 19.1298 19.4782 19.4782C19.1298 19.8261 18.7111 20 18.2222 20H5.77778ZM9.95556 15.2889L8.71111 14.0444L16.9778 5.77778H13.7778V4H20V10.2222H18.2222V7.02222L9.95556 15.2889Z" fill="currentColor"/>\n  </svg>\n',"fab-facebook":'\n  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 44 44" width="16" height="16" fill="none">\n    <path fill="#fff" d="M22 44c12.1503 0 22-9.8497 22-22C44 9.84974 34.1503 0 22 0 9.84974 0 0 9.84974 0 22c0 12.1503 9.84974 22 22 22Z"/>\n    <path fill="currentColor" d="M18.7598 35.125h4.5898V23.9434h3.5645L27.5 19.5h-4.1504v-3.0762c0-.6836.0977-1.2207.3906-1.5625.293-.3906.9278-.5859 1.8067-.5859h2.3437v-3.9551c-.8789-.0976-2.0508-.1953-3.4179-.1953-1.7579 0-3.125.5371-4.1504 1.5625-1.0743 1.0254-1.5625 2.4414-1.5625 4.2969V19.5H15v4.4434h3.7598V35.125Z"/>\n  </svg>\n',"fab-youtube":'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="16" height="16" fill="none">\n    <path fill="#fff" d="M22 44c12.1503 0 22-9.8497 22-22C44 9.84974 34.1503 0 22 0 9.84974 0 0 9.84974 0 22c0 12.1503 9.84974 22 22 22Z"/>\n    <path fill="currentColor" d="M34.8555 16.1797c.1953.8789.3906 2.2461.4883 4.0039l.0488 2.4414-.0488 2.4414c-.0977 1.8555-.293 3.1738-.4883 4.0527-.1953.586-.4883 1.0743-.8789 1.4649-.4395.4394-.9278.7324-1.5137.8789-.8789.2441-2.832.3906-5.957.4883L22.0625 32l-4.4434-.0488c-3.125-.0977-5.1269-.2442-5.957-.4883-.5859-.1465-1.123-.4395-1.5137-.8789-.43941-.3906-.73241-.8789-.87891-1.4649-.2441-.8789-.3906-2.1972-.4883-4.0527l-.0488-2.4414c0-.6836 0-1.5137.0488-2.4414.0977-1.7578.2442-3.125.4883-4.0039.1465-.5859.4395-1.0742.87891-1.5137.3907-.3906.9278-.6836 1.5137-.8789.8301-.1953 2.832-.3906 5.957-.4883l4.4434-.0488 4.4434.0488c3.125.0977 5.0781.293 5.957.4883.5859.1953 1.0742.4883 1.5137.8789.3906.4395.6836.9278.8789 1.5137ZM19.3281 26.6289l6.9824-4.0039-6.9824-3.9551v7.959Z"/>\n  </svg>\n',"fab-linkedin":'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="16" height="16" fill="none">\n    <path fill="#fff" d="M22 44c12.1503 0 22-9.8497 22-22C44 9.84974 34.1503 0 22 0 9.84974 0 0 9.84974 0 22c0 12.1503 9.84974 22 22 22Z"/>\n    <path fill="currentColor" d="M16.883 30.5625V15.9629h-4.541v14.5996h4.541Zm-2.246-16.6016c.683 0 1.318-.2441 1.855-.7812.488-.4883.781-1.1231.781-1.8555 0-.6836-.293-1.3183-.781-1.85545-.537-.48828-1.172-.78125-1.855-.78125-.733 0-1.367.29297-1.856.78125-.537.53715-.781 1.17185-.781 1.85545 0 .7324.244 1.3672.781 1.8555.489.5371 1.123.7812 1.856.7812Zm19.238 16.6016v-8.0078c0-2.2461-.342-3.9063-.977-4.9805-.878-1.3183-2.343-2.0019-4.443-2.0019-1.074 0-1.953.2929-2.734.7812-.733.4395-1.27.9766-1.563 1.6113h-.049v-2.0019h-4.345v14.5996h4.492v-7.2266c0-1.123.146-2.0019.488-2.5879.391-.7812 1.123-1.1718 2.197-1.1718 1.026 0 1.709.4394 2.1 1.3183.195.5371.293 1.3672.293 2.5391v7.1289h4.541Z"/>\n  </svg>\n',"fab-twitter":'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="16" height="16" fill="none">\n  <path fill="#fff" d="M22 44c12.1503 0 22-9.8497 22-22C44 9.84974 34.1503 0 22 0 9.84974 0 0 9.84974 0 22c0 12.1503 9.84974 22 22 22Z"/>\n  <path fill="currentColor" d="M32.412 17.5469c.977-.7324 1.856-1.6114 2.588-2.6856-.977.4395-1.953.7325-2.93.8301 1.075-.6836 1.856-1.6113 2.246-2.832-1.025.5859-2.099 1.0254-3.271 1.2207-.488-.4883-1.074-.8789-1.709-1.1719-.635-.293-1.318-.4394-2.051-.4394-.928 0-1.758.2441-2.539.6835-.781.4883-1.416 1.1231-1.855 1.9043-.489.7813-.684 1.6602-.684 2.5391 0 .3906 0 .7813.098 1.1719-2.1-.0977-4.053-.586-5.909-1.5625-1.855-.9278-3.369-2.1973-4.638-3.8086-.488.8301-.733 1.709-.733 2.5879 0 .8789.196 1.709.635 2.4414.391.7812.977 1.3672 1.66 1.8554-.83 0-1.611-.2441-2.295-.6835v.0976c0 1.2207.391 2.2949 1.172 3.2227.782.9765 1.758 1.5625 2.93 1.8066-.488.0977-.928.1465-1.367.1465-.293 0-.635 0-.928-.0488.293 1.0254.879 1.8554 1.758 2.539.879.6836 1.855.9766 3.027.9766-1.904 1.4648-4.053 2.1973-6.396 2.1973-.489 0-.879 0-1.221-.0489 2.344 1.5625 4.98 2.2949 7.861 2.2949 2.979 0 5.616-.7324 7.959-2.2949 2.1-1.3672 3.76-3.1738 4.932-5.5175 1.123-2.1485 1.709-4.4434 1.709-6.7872 0-.2929-.049-.4882-.049-.6347Z"/>\n  </svg>\n',login:'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">\n    <path fill="#00308C" d="M21.22 8.1A9.96 9.96 0 0 0 6.49 3.69 10.13 10.13 0 0 0 2.8 8.1 9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 10-10c0-1.38-.25-2.68-.77-3.9ZM14.5 19.62c-.78.24-1.62.38-2.5.38-1.67 0-3.3-.52-4.64-1.5A7.7 7.7 0 0 1 12 17c1.67 0 3.3.52 4.66 1.5-.66.48-1.38.84-2.16 1.1v.02Zm5.01-4.85a7.79 7.79 0 0 1-1.35 2.32c-.86-.65-1.8-1.15-2.86-1.54a9.86 9.86 0 0 0-6.6 0c-1.04.39-2 .89-2.84 1.54A7.7 7.7 0 0 1 4 12c0-2.22.78-4.1 2.34-5.65A7.72 7.72 0 0 1 12 4c2.2 0 4.1.78 5.66 2.34A7.72 7.72 0 0 1 20 11.99a7.9 7.9 0 0 1-.49 2.78Z"/>\n    <path fill="#428FEC" d="M14.48 7A3.4 3.4 0 0 0 12 6a3.42 3.42 0 0 0-3.5 3.5A3.44 3.44 0 0 0 12 13c.98 0 1.8-.34 2.48-1.01A3.39 3.39 0 0 0 15.5 9.5c0-1-.34-1.8-1.02-2.5Zm-1.4 3.57c-.28.28-.64.42-1.08.42a1.43 1.43 0 0 1-1.5-1.5c0-.44.14-.79.42-1.08.28-.29.64-.42 1.08-.42.44 0 .8.15 1.08.42.28.28.42.64.42 1.08 0 .45-.14.8-.42 1.08Z"/>\n  </svg>\n  ',"duo-menu":'\n  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1 16H19V14H1V16ZM1 4V6H19V4H1Z" fill="#00308C"/>\n    <path d="M19 11H1V9H19V11Z" fill="#428FEC"/>\n  </svg>\n  ',locations:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">\n    <path fill="#428FEC" d="M10 10c.46 0 .85-.17 1.17-.5.33-.32.5-.7.5-1.17 0-.45-.17-.85-.5-1.17a1.6 1.6 0 0 0-1.17-.5c-.46 0-.85.17-1.18.5-.32.32-.49.72-.49 1.17 0 .46.17.85.5 1.18.32.32.71.49 1.17.49Zm0 0c.46 0 .85-.17 1.17-.5.33-.32.5-.7.5-1.17 0-.45-.17-.85-.5-1.17a1.6 1.6 0 0 0-1.17-.5c-.46 0-.85.17-1.18.5-.32.32-.49.72-.49 1.17 0 .46.17.85.5 1.18.32.32.71.49 1.17.49Zm0 0c.46 0 .85-.17 1.17-.5.33-.32.5-.7.5-1.17 0-.45-.17-.85-.5-1.17a1.6 1.6 0 0 0-1.17-.5c-.46 0-.85.17-1.18.5-.32.32-.49.72-.49 1.17 0 .46.17.85.5 1.18.32.32.71.49 1.17.49Z"/>\n    <path fill="#00308C" d="m10 18.38-1.12-1.03a23.93 23.93 0 0 1-4.05-4.57A7.96 7.96 0 0 1 3.34 8.5 6.63 6.63 0 0 1 10 1.67c1.86 0 3.44.65 4.73 1.93a6.67 6.67 0 0 1 1.94 4.9c0 1.33-.5 2.73-1.5 4.3-.9 1.4-2.22 2.9-4.04 4.56l-1.12 1.03Zm0-2.25a22.85 22.85 0 0 0 3.77-4.25A6.5 6.5 0 0 0 15 8.5c0-1.5-.48-2.76-1.45-3.72A4.87 4.87 0 0 0 10 3.33c-1.39 0-2.59.49-3.55 1.45A5.06 5.06 0 0 0 5 8.5c0 .98.42 2.12 1.23 3.38.82 1.27 2.09 2.7 3.77 4.25Z"/>\n  </svg>\n  ',doctors:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">\n    <path fill="#00308C" fill-rule="evenodd" d="M9.17 1.25h2.4a.83.83 0 1 1 0 1.67h-.74v3.33c0 .92.75 1.67 1.67 1.67h3.33c.92 0 1.67-.75 1.67-1.67V2.92h-.73a.83.83 0 1 1 0-1.67h2.4v5c0 1.84-1.5 3.33-3.34 3.33H12.5a3.33 3.33 0 0 1-3.33-3.33v-5Z" clip-rule="evenodd"/>\n    <path fill="#00308C" fill-rule="evenodd" d="M14.17 8.75c.46 0 .83.37.83.83v4.17a5 5 0 0 1-5 5H8.33a5 5 0 0 1-5-5v-1.12a.83.83 0 1 1 1.67 0v1.12c0 1.84 1.5 3.33 3.33 3.33H10c1.84 0 3.33-1.49 3.33-3.33V9.58c0-.46.38-.83.84-.83Z" clip-rule="evenodd"/>\n    <path fill="#428FEC" d="m4.17 10.42-.43-.36c-.49-.41-.9-.77-1.21-1.07-.32-.3-.58-.57-.77-.8a2.52 2.52 0 0 1-.4-.66c-.07-.2-.11-.4-.11-.61 0-.43.15-.79.46-1.07.3-.29.69-.43 1.14-.43a1.78 1.78 0 0 1 1.32.57 1.78 1.78 0 0 1 1.31-.57c.46 0 .84.14 1.14.43.31.28.46.64.46 1.07 0 .2-.03.4-.11.6-.07.2-.2.43-.4.67-.19.23-.44.5-.76.8-.32.3-.73.66-1.22 1.07l-.42.36Z"/>\n  </svg>\n  ',"duo-search":'\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">\n    <path fill="#00308C" d="M5.94 0a5.94 5.94 0 0 1 4.52 9.81l-.65.65A5.96 5.96 0 0 1 0 5.94 5.94 5.94 0 0 1 5.94 0Zm0 1.83a4.1 4.1 0 0 0-4.11 4.11 4.1 4.1 0 0 0 4.11 4.12 4.1 4.1 0 0 0 4.12-4.12 4.1 4.1 0 0 0-4.12-4.11Z"/>\n    <path fill="#428FEC" d="m10.46 9.81.25.25h.72L16 14.63 14.63 16l-4.57-4.57v-.72l-.25-.25.65-.65Z"/>\n  </svg>\n  ',"close-mobile":'\n  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">\n    <path fill="#00308C" d="M2.29 1 19 17.71 17.71 19 1 2.29 2.29 1Z"/>\n    <path fill="#00308C" d="M1 17.71 17.71 1 19 2.29 2.29 19 1 17.71Z"/>\n  </svg>\n  ',"search-suggestion":'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n    <path fill="currentColor" d="M20.75 20.45 15 14.7a5.6 5.6 0 0 1-1.78.98 6.36 6.36 0 0 1-4.02 0c-.63-.2-1.22-.5-1.75-.88l1.45-1.45a4.18 4.18 0 0 0 2.3.65c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 15.7 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 11.2 5a4.51 4.51 0 0 0-4.45 4.05L8 7.8l1.4 1.4-3.7 3.7L2 9.2l1.4-1.4 1.35 1.3a6.3 6.3 0 0 1 2-4.34A6.22 6.22 0 0 1 11.2 3c1.82 0 3.35.63 4.61 1.89A6.28 6.28 0 0 1 17.7 9.5c0 .7-.1 1.38-.32 2.05a5 5 0 0 1-.98 1.75l5.75 5.75-1.4 1.4Z"/>\n  </svg>\n  ',monitor:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" fill="none" class="date-svg" viewBox="0 0 32 29">\n  <path fill="currentColor" d="M10.46 28.6v-2.08h3.46v-3.75H2.79c-.72 0-1.34-.26-1.85-.77a2.53 2.53 0 0 1-.77-1.86V2.9c0-.72.25-1.34.77-1.85A2.53 2.53 0 0 1 2.79.27h26.42c.72 0 1.34.25 1.85.77.52.51.77 1.13.77 1.85v17.25c0 .72-.25 1.34-.77 1.86-.51.51-1.13.77-1.85.77H18.08v3.75h3.46v2.08H10.46Zm-7.67-7.92h26.42c.14 0 .26-.05.37-.16a.52.52 0 0 0 .17-.38V2.9a.52.52 0 0 0-.17-.37.52.52 0 0 0-.37-.17H2.79a.52.52 0 0 0-.37.17.52.52 0 0 0-.17.37v17.25c0 .14.06.27.17.38.1.1.23.16.37.16Z"/>\n  </svg>\n  ',target:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">\n  <path fill="currentColor" d="M12.005 16.492a4.001 4.001 0 0 0 4-4.002 4.001 4.001 0 0 0-4.009-3.994 4.001 4.001 0 0 0-4 4.002 4.001 4.001 0 0 0 4.009 3.994Z"/>\n  <path fill="currentColor" d="M20.943 11.495a8.998 8.998 0 0 0-7.942-7.941V1.5h-2.002v2.065a8.998 8.998 0 0 0-7.942 7.941H1v1.999h2.057a8.998 8.998 0 0 0 7.942 7.941v2.065h2.002v-2.065a8.998 8.998 0 0 0 7.942-7.941H23v-1.999h-2.057v-.011ZM12 19.491a6.99 6.99 0 0 1-6.996-6.996A6.99 6.99 0 0 1 12 5.498a6.99 6.99 0 0 1 6.996 6.997A6.997 6.997 0 0 1 12 19.49Z"/>\n  </svg>\n  ',information:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n  <path fill="#008C3C" fill-rule="evenodd" d="M12 23.62A11.75 11.75 0 0 0 23.62 12 11.75 11.75 0 0 0 12 .37 11.75 11.75 0 0 0 .37 12 11.75 11.75 0 0 0 12 23.62Zm0-1.5a10.13 10.13 0 1 1 0-20.25 10.13 10.13 0 0 1 0 20.25ZM13.69 18c.15 0 .29-.05.4-.16.1-.11.16-.25.16-.4v-.38a.54.54 0 0 0-.16-.4.54.54 0 0 0-.4-.16h-.56V9.94a.54.54 0 0 0-.17-.4.54.54 0 0 0-.4-.17h-2.25a.54.54 0 0 0-.4.17c-.1.1-.16.24-.16.4v.37c0 .16.05.3.16.4.11.11.25.16.4.16h.56v5.63h-.56a.54.54 0 0 0-.4.16c-.1.11-.16.25-.16.4v.38c0 .15.05.29.16.4.11.1.25.16.4.16h3.38ZM12 8.25c.4 0 .76-.15 1.05-.45.3-.3.45-.64.45-1.05 0-.4-.15-.76-.45-1.05-.3-.3-.64-.45-1.05-.45-.4 0-.76.15-1.05.45-.3.3-.45.64-.45 1.05 0 .4.15.76.45 1.05.3.3.64.45 1.05.45Z" clip-rule="evenodd"/>\n  </svg>\n  ',alert:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n  <path fill="#C53030" fill-rule="evenodd" d="M12 23.63A11.75 11.75 0 0 0 23.62 12 11.75 11.75 0 0 0 12 .38 11.75 11.75 0 0 0 .37 12 11.75 11.75 0 0 0 12 23.63Zm0-1.5a10.13 10.13 0 1 1 0-20.25 10.13 10.13 0 0 1 0 20.25Zm0-3.57a1.27 1.27 0 0 0 1.31-1.31A1.27 1.27 0 0 0 12 15.94a1.27 1.27 0 0 0-1.31 1.31A1.27 1.27 0 0 0 12 18.56Zm.19-3.56c.15 0 .29-.05.4-.16.1-.11.16-.25.16-.4l.33-7.88a.42.42 0 0 0-.12-.4.6.6 0 0 0-.44-.16h-1.04a.6.6 0 0 0-.44.16c-.11.11-.15.25-.12.4l.33 7.92c0 .13.05.25.16.36.11.1.25.16.4.16h.38Z" clip-rule="evenodd"/>\n  </svg>\n  ',training:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none"><path fill="#9CCDFB" d="M52.027 11.559v-4.85c0-2.465 1.96-4.458 4.379-4.458 2.418 0 4.373 1.999 4.373 4.458v4.85h-8.752Z"/><path fill="#9CCDFB" d="M61.999 12.804H50.805V6.703c0-3.144 2.51-5.703 5.6-5.703s5.594 2.559 5.594 5.703v6.101Zm-8.752-2.49h6.309V6.708c0-1.774-1.417-3.213-3.151-3.213-1.735 0-3.158 1.445-3.158 3.213v3.604Z"/><path fill="#fff" d="M52.029 6.703V56.58h-.013l.013.748c0 2.29-1.704 4.17-3.878 4.426-1.191 0-38.785-.006-40.733 0 2.18-.255 3.866-2.142 3.866-4.426v-1.015h.018V6.703c0-2.291 1.685-4.172 3.866-4.427 1.19 0 38.784.006 40.726 0-2.174.255-3.865 2.142-3.865 4.427Z"/><path fill="#00308C" d="M48.218 63H7.424l-.147-2.484c1.588-.187 2.785-1.556 2.785-3.194l.018-50.62c0-2.894 2.126-5.328 4.947-5.665h29.71c5.9 0 10.504 0 11.151-.006l.147 2.484c-1.588.187-2.785 1.556-2.785 3.194v51.118h-.025c-.238 2.683-2.277 4.85-4.934 5.167h-.067l-.006.006Zm-29.643-2.484h29.496c1.564-.212 2.736-1.569 2.736-3.181l-.037-1.992h.037V6.703a5.8 5.8 0 0 1 .947-3.182H15.247c-1.557.212-2.718 1.57-2.718 3.182v50.85h-.018a5.774 5.774 0 0 1-.947 2.95h7.023l-.012.013Z"/><path fill="#9CCDFB" d="M43.95 55.087v2.242c0 2.29 1.691 4.17 3.865 4.426-1.942-.006-39.536 0-40.727 0-2.18-.255-3.865-2.142-3.865-4.426v-2.242h40.726Z"/><path fill="#9CCDFB" d="M7.087 63h-.14C4.125 62.658 2 60.224 2 57.329v-3.487h43.17v3.487c0 1.63 1.196 3 2.784 3.193l-.146 2.484H7.087V63Zm-2.644-6.667v.996c0 1.612 1.166 2.97 2.723 3.18h36.507a5.8 5.8 0 0 1-.946-3.18v-.996H4.443Z"/><path fill="#00308C" d="M61.999 12.947h-2.443V6.703c0-1.775-1.417-3.213-3.151-3.213-1.735 0-3.158 1.445-3.158 3.213h-2.442c0-3.144 2.51-5.703 5.6-5.703s5.594 2.559 5.594 5.703V12.947ZM48.07 63c-2.846 0-5.343-2.652-5.343-5.671v-3.611h2.442v3.61c0 1.607 1.435 3.182 2.901 3.182V63Z"/><path fill="#428FEC" d="m43.227 50.842-3.084-2.173-3.084 2.173V42.2h6.168v8.64Z"/><path fill="#9CCDFB" d="M46.347 41.086c0 .324-.574.592-.623.903-.049.317.416.753.318 1.052-.098.305-.727.38-.867.66s.165.847-.019 1.102c-.183.255-.806.13-1.026.355-.22.224-.097.859-.348 1.046-.25.186-.806-.125-1.08.018-.276.143-.349.785-.648.884-.293.1-.72-.373-1.032-.323-.305.05-.568.635-.886.635-.317 0-.58-.586-.885-.635-.311-.05-.739.423-1.032.323-.3-.1-.373-.74-.647-.884-.281-.143-.831.168-1.081-.018-.25-.187-.129-.822-.348-1.046-.22-.224-.843-.1-1.026-.355-.184-.255.122-.822-.019-1.102-.14-.28-.77-.355-.867-.66-.098-.299.366-.735.318-1.052-.05-.311-.623-.579-.623-.903 0-.323.574-.591.623-.902.048-.318-.416-.754-.318-1.053.098-.305.727-.38.867-.66.14-.286-.165-.846.019-1.101.183-.256.806-.131 1.026-.355.22-.224.097-.86.348-1.046.25-.187.806.124 1.08-.019.275-.143.355-.784.648-.884.293-.1.72.374 1.032.324.305-.05.568-.635.886-.635.317 0 .58.585.885.635.311.05.739-.423 1.032-.324.3.1.372.741.647.884.275.143.83-.168 1.081.019.25.187.129.822.348 1.046.22.224.843.1 1.026.355.184.255-.122.821.019 1.102.14.28.77.354.867.66.097.298-.367.734-.318 1.052.05.31.623.579.623.902Z"/><path fill="#fff" d="M42.878 41.086c0 1.538-1.227 2.79-2.736 2.79-1.508 0-2.736-1.252-2.736-2.79s1.228-2.789 2.736-2.789c1.508 0 2.736 1.251 2.736 2.79Z"/><path fill="#428FEC" d="M38.651 10.033H22.914v2.49h15.737v-2.49Z"/><path fill="#00308C" d="M44.045 16.29h-26.51v2.49h26.51v-2.49ZM44.045 22.447h-26.51v2.49h26.51v-2.49ZM44.045 28.604h-26.51v2.49h26.51v-2.49ZM33.29 34.761H17.536v2.49h15.756v-2.49Z"/><path fill="#428FEC" d="M27.996 40.918h-10.46v2.49h10.46v-2.49Z"/></svg>',certification:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" fill="none"><path fill="#00308C" d="m32.5 63.82-.39-.13C17 58.44 6.84 44.16 6.84 28.16V12.93h1.18c6.38 0 11.57-5.19 11.57-11.57V.18h25.82v1.18c0 6.38 5.19 11.57 11.57 11.57h1.18v15.23c0 16-10.16 30.28-25.27 35.52l-.39.13v.01ZM9.19 15.23v12.92c0 14.86 9.35 28.14 23.3 33.16 13.96-5.03 23.3-18.3 23.3-33.16V15.23c-6.74-.57-12.13-5.96-12.7-12.7H21.9c-.57 6.74-5.96 12.13-12.7 12.7h-.01Z"/><path fill="#9CCDFB" d="M40.53 5.59H24.47c-1.54 5.97-6.25 10.68-12.22 12.21v10.35c0 13.2 8.07 25.03 20.24 29.89 12.17-4.86 20.24-16.69 20.24-29.89V17.8c-5.97-1.54-10.67-6.25-12.21-12.21h.01Zm-8.03 34.7c-5.46 0-9.89-4.43-9.89-9.89 0-5.46 4.43-9.89 9.89-9.89 5.46 0 9.89 4.43 9.89 9.89 0 5.46-4.43 9.89-9.89 9.89Z"/><path fill="#00308C" d="m31.201 35.37-4.83-4.82 1.67-1.67 3.16 3.16 5.76-5.76 1.66 1.67-7.42 7.42Z"/><path fill="#00308C" d="M32.5 41.47c-6.1 0-11.07-4.96-11.07-11.07s4.96-11.07 11.07-11.07 11.07 4.96 11.07 11.07-4.96 11.07-11.07 11.07Zm0-19.78c-4.8 0-8.71 3.91-8.71 8.71 0 4.8 3.91 8.71 8.71 8.71 4.8 0 8.71-3.91 8.71-8.71 0-4.8-3.91-8.71-8.71-8.71Z"/></svg>',external:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M5.77778 20.5C5.28889 20.5 4.87022 20.3261 4.52178 19.9782C4.17393 19.6298 4 19.2111 4 18.7222V6.27778C4 5.78889 4.17393 5.37022 4.52178 5.02178C4.87022 4.67393 5.28889 4.5 5.77778 4.5H12V6.27778H5.77778V18.7222H18.2222V12.5H20V18.7222C20 19.2111 19.8261 19.6298 19.4782 19.9782C19.1298 20.3261 18.7111 20.5 18.2222 20.5H5.77778ZM9.95556 15.7889L8.71111 14.5444L16.9778 6.27778H13.7778V4.5H20V10.7222H18.2222V7.52222L9.95556 15.7889Z" fill="#00308C"/>\n  </svg>\n  ',download:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20H6ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V15H6V18H18V15H20V18" fill="#00308C"/>\n    <path d="M7 11L12 16L17 11L15.6 9.55L13 12.15V4H11V12.15L8.4 9.55L7 11Z" fill="#428FEC"/>\n  </svg>\n  ',profile:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21.21 8.6C20.69 7.38 19.97 6.33 19.07 5.43C18.17 4.53 17.11 3.82 15.9 3.29C14.68 2.77 13.38 2.5 12 2.5C10.62 2.5 9.32 2.76 8.1 3.29C6.88 3.82 5.83 4.53 4.93 5.43C4.03 6.33 3.32 7.39 2.79 8.6C2.26 9.82 2 11.12 2 12.5C2 13.88 2.26 15.18 2.79 16.4C3.31 17.62 4.03 18.67 4.93 19.57C5.83 20.47 6.89 21.18 8.1 21.71C9.32 22.24 10.62 22.5 12 22.5C13.38 22.5 14.68 22.24 15.9 21.71C17.12 21.19 18.17 20.47 19.07 19.57C19.97 18.67 20.68 17.61 21.21 16.4C21.74 15.18 22 13.88 22 12.5C22 11.12 21.74 9.82 21.21 8.6ZM14.5 20.11C13.72 20.37 12.88 20.5 12 20.5C11.12 20.5 10.28 20.37 9.5 20.11C8.72 19.85 8 19.48 7.35 19C8 18.52 8.72 18.15 9.5 17.89C10.28 17.63 11.12 17.5 12 17.5C12.88 17.5 13.72 17.63 14.5 17.89C15.28 18.15 16 18.52 16.65 19C16 19.48 15.28 19.85 14.5 20.11ZM19.51 15.27C19.18 16.14 18.73 16.91 18.15 17.59C17.3 16.94 16.35 16.43 15.3 16.05C14.25 15.68 13.15 15.49 12 15.49C10.85 15.49 9.75 15.68 8.7 16.05C7.65 16.43 6.7 16.94 5.85 17.59C5.27 16.91 4.81 16.13 4.49 15.27C4.16 14.4 4 13.48 4 12.49C4 10.27 4.78 8.39 6.34 6.83C7.9 5.27 9.79 4.49 12 4.49C14.21 4.49 16.1 5.27 17.66 6.83C19.22 8.39 20 10.28 20 12.49C20 13.47 19.84 14.4 19.51 15.27Z" fill="#00308C"/>\n    <path d="M14.49 7.51C13.81 6.84 12.99 6.5 12 6.5C11.01 6.5 10.19 6.84 9.51 7.51C8.84 8.19 8.5 9.01 8.5 10C8.5 10.99 8.84 11.81 9.51 12.49C10.19 13.16 11.01 13.5 12 13.5C12.99 13.5 13.81 13.16 14.49 12.49C15.16 11.81 15.5 10.99 15.5 10C15.5 9.01 15.16 8.19 14.49 7.51ZM13.08 11.07C12.8 11.35 12.44 11.49 12 11.49C11.56 11.49 11.21 11.35 10.92 11.07C10.63 10.79 10.5 10.43 10.5 9.99C10.5 9.55 10.64 9.2 10.92 8.91C11.2 8.62 11.56 8.49 12 8.49C12.44 8.49 12.79 8.63 13.08 8.91C13.36 9.19 13.5 9.55 13.5 9.99C13.5 10.43 13.36 10.78 13.08 11.07Z" fill="#428FEC"/>\n  </svg>\n  ',snowflake:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M9.99818 22.5C9.71484 22.5 9.47751 22.404 9.28618 22.212C9.09418 22.0207 8.99818 21.7833 8.99818 21.5V17.7L5.69818 19.6C5.46484 19.7333 5.21484 19.7627 4.94818 19.688C4.68151 19.6127 4.48151 19.4583 4.34818 19.225L2.34818 15.775C2.21484 15.5417 2.18151 15.2873 2.24818 15.012C2.31484 14.7373 2.46484 14.5333 2.69818 14.4L5.99818 12.5L2.69818 10.6C2.46484 10.4667 2.31484 10.2623 2.24818 9.987C2.18151 9.71233 2.21484 9.45833 2.34818 9.225L4.34818 5.775C4.48151 5.54167 4.68151 5.38733 4.94818 5.312C5.21484 5.23733 5.46484 5.26667 5.69818 5.4L8.99818 7.3V3.5C8.99818 3.21667 9.09418 2.979 9.28618 2.787C9.47751 2.59567 9.71484 2.5 9.99818 2.5H13.9982C14.2815 2.5 14.5192 2.59567 14.7112 2.787C14.9025 2.979 14.9982 3.21667 14.9982 3.5V7.3L18.2982 5.4C18.5315 5.26667 18.7815 5.23733 19.0482 5.312C19.3148 5.38733 19.5148 5.54167 19.6482 5.775L21.6482 9.225C21.7815 9.45833 21.8148 9.71233 21.7482 9.987C21.6815 10.2623 21.5315 10.4667 21.2982 10.6L17.9982 12.5L21.2982 14.4C21.5315 14.5333 21.6815 14.7373 21.7482 15.012C21.8148 15.2873 21.7815 15.5417 21.6482 15.775L19.6482 19.225C19.5148 19.4583 19.3148 19.6127 19.0482 19.688C18.7815 19.7627 18.5315 19.7333 18.2982 19.6L14.9982 17.7V21.5C14.9982 21.7833 14.9025 22.0207 14.7112 22.212C14.5192 22.404 14.2815 22.5 13.9982 22.5H9.99818ZM10.9982 20.5H12.9982V15.1C12.9982 14.9 13.0815 14.754 13.2482 14.662C13.4148 14.5707 13.5815 14.575 13.7482 14.675L18.4232 17.375L19.4232 15.625L14.7482 12.925C14.5815 12.825 14.4982 12.679 14.4982 12.487C14.4982 12.2957 14.5815 12.15 14.7482 12.05L19.4232 9.35L18.4232 7.625L13.7482 10.325C13.5815 10.425 13.4148 10.429 13.2482 10.337C13.0815 10.2457 12.9982 10.1 12.9982 9.9V4.5H10.9982V9.9C10.9982 10.0833 10.9188 10.225 10.7602 10.325C10.6022 10.425 10.4315 10.4333 10.2482 10.35L5.57318 7.65L4.57318 9.375L9.24818 12.075C9.41484 12.175 9.49818 12.3207 9.49818 12.512C9.49818 12.704 9.41484 12.85 9.24818 12.95L4.57318 15.65L5.57318 17.375L10.2482 14.675C10.4148 14.575 10.5815 14.5707 10.7482 14.662C10.9148 14.754 10.9982 14.9 10.9982 15.1V20.5Z" fill="#00308C"/>\n  </svg>\n  ',information2:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M13 11.5H11V17.5H13V11.5Z" fill="#428FEC"/>\n    <path d="M12 9.5C12.28 9.5 12.52 9.4 12.71 9.21C12.9 9.02 13 8.78 13 8.5C13 8.22 12.9 7.98 12.71 7.79C12.52 7.6 12.28 7.5 12 7.5C11.72 7.5 11.48 7.6 11.29 7.79C11.1 7.98 11 8.22 11 8.5C11 8.78 11.1 9.02 11.29 9.21C11.48 9.4 11.72 9.5 12 9.5Z" fill="#428FEC"/>\n    <path d="M21.21 8.6C20.69 7.38 19.97 6.33 19.07 5.43C18.17 4.53 17.11 3.82 15.9 3.29C14.68 2.77 13.38 2.5 12 2.5C10.62 2.5 9.32 2.76 8.1 3.29C6.88 3.82 5.83 4.53 4.93 5.43C4.03 6.33 3.32 7.39 2.79 8.6C2.26 9.82 2 11.12 2 12.5C2 13.88 2.26 15.18 2.79 16.4C3.31 17.62 4.03 18.68 4.93 19.57C5.83 20.46 6.89 21.18 8.1 21.71C9.32 22.24 10.62 22.5 12 22.5C13.38 22.5 14.68 22.24 15.9 21.71C17.12 21.19 18.17 20.47 19.07 19.57C19.97 18.67 20.68 17.61 21.21 16.4C21.74 15.18 22 13.88 22 12.5C22 11.12 21.74 9.82 21.21 8.6ZM17.67 18.18C16.12 19.73 14.23 20.5 12 20.5C9.77 20.5 7.88 19.73 6.33 18.18C4.78 16.63 4 14.74 4 12.5C4 10.26 4.78 8.38 6.33 6.83C7.88 5.28 9.77 4.5 12 4.5C14.23 4.5 16.12 5.28 17.67 6.83C19.22 8.38 20 10.27 20 12.5C20 14.73 19.23 16.62 17.67 18.18Z" fill="#00308C"/>\n  </svg>\n  ',calendar:'\n  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M12.07 20H5C4.45 20 3.98 19.8 3.59 19.41C3.2 19.02 3 18.55 3 18V7C3 6.45 3.2 5.98 3.59 5.59C3.98 5.2 4.45 5 5 5H6V3H8V5H14V3H16V5H17C17.55 5 18.02 5.2 18.41 5.59C18.8 5.98 19 6.45 19 7V13.07C18.83 13.04 18.67 13.02 18.51 13.01C18.35 13.01 18.18 13 18 13C17.82 13 17.65 13 17.49 13.01C17.33 13.01 17.17 13.04 17 13.07V10H5V18H12.07C12.04 18.17 12.02 18.33 12.01 18.49C12.01 18.65 12 18.82 12 19C12 19.18 12 19.35 12.01 19.51C12.01 19.67 12.04 19.83 12.07 20Z" fill="#00308C"/>\n    <path d="M17 23V20H14V18H17V15H19V18H22V20H19V23H17Z" fill="#428FEC"/>\n  </svg>\n  ',"magnifying-map-pin":'\n  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">\n  <path d="M36.6488 14.0579C33.3683 10.7787 29.0226 8.9683 24.4043 8.97684C19.7775 8.97684 15.4148 10.7872 12.1427 14.0835C8.88775 17.3712 7.08984 21.7179 7.08984 26.3378C7.08984 35.9107 14.8609 43.6988 24.4128 43.6903C29.0482 43.6903 33.4024 41.8713 36.6829 38.575C39.9464 35.2958 41.7358 30.9407 41.7358 26.3293C41.7358 21.7179 39.9294 17.3371 36.6574 14.0579H36.6488Z" fill="white"/>\n  <path d="M24.3966 44.7748C14.2568 44.7748 6 36.5085 6 26.3378C6 21.4361 7.90868 16.8077 11.3682 13.3235C14.8447 9.82228 19.4715 7.89233 24.3881 7.89233C29.3047 7.89233 33.9315 9.81374 37.408 13.2979C40.8931 16.782 42.8103 21.4105 42.8103 26.3378C42.8103 31.2652 40.9016 35.868 37.4421 39.3522C33.9571 42.8534 29.3302 44.7833 24.4051 44.7833L24.3881 43.6988V42.6143C28.7423 42.6143 32.8238 40.9149 35.8998 37.8236C38.9503 34.7493 40.6375 30.676 40.6375 26.3464C40.6375 22.0168 38.9503 17.9178 35.8743 14.8436C32.8068 11.7693 28.7338 10.0785 24.4051 10.0785C20.0765 10.0785 15.9695 11.7778 12.9019 14.8692C9.84293 17.952 8.16431 22.0254 8.16431 26.3549C8.16431 35.3215 15.4497 42.6228 24.3881 42.6228V44.8004L24.3966 44.7748Z" fill="#00308C"/>\n  <path d="M34.1278 36.0217C31.5289 38.6349 28.0779 40.078 24.414 40.078C16.8474 40.078 10.6953 33.921 10.6953 26.3378C10.6953 22.6829 12.1183 19.2414 14.7001 16.6369C17.299 14.0238 20.7415 12.5891 24.4054 12.5891C28.0694 12.5891 31.5119 14.0152 34.1022 16.6198C36.7011 19.2158 38.1241 22.6744 38.1241 26.3378C38.1241 29.9928 36.7096 33.4342 34.1193 36.0303L34.1278 36.0217Z" fill="#9CCDFB"/>\n  <path d="M43.3268 38.783L36.8438 45.2803L50.9728 59.4403L57.4559 52.943L43.3268 38.783Z" fill="#428FEC"/>\n  <path d="M53.3307 53.0155L45.5 45.1676L53.3307 53.0155Z" fill="white"/>\n  <path d="M46.2708 44.3978L44.7344 45.9376L52.5611 53.7815L54.0975 52.2417L46.2708 44.3978Z" fill="white"/>\n  <path d="M42.5703 39.5322L37.5703 44.5449L40.023 47.0021L45.023 41.9894L42.5703 39.5322Z" fill="white"/>\n  <path d="M40.0308 48.5408L36.043 44.5442L42.5785 37.9944L46.5578 41.9909L40.0222 48.5408H40.0308ZM39.119 44.5442L40.0308 45.4665L43.4988 41.9909L42.587 41.0772L39.119 44.5528V44.5442Z" fill="#00308C"/>\n  <path d="M57.9181 54.9028C57.9181 57.6696 55.6771 59.9155 52.9163 59.9155C52.5158 59.5142 52.1153 59.1128 51.7148 58.7115C53.3849 57.0377 55.0465 55.3725 56.7166 53.6987C57.1171 54.1001 57.5176 54.5015 57.9181 54.9028Z" fill="white"/>\n  <path d="M52.4633 61.0001L50.1797 58.7029L50.9466 57.9344C52.6167 56.2606 54.2782 54.5954 55.9483 52.9216L56.7152 52.1531L57.4821 52.9216C57.8826 53.323 58.2831 53.7244 58.6835 54.1257L58.9988 54.4417V54.8943C58.9988 58.2589 56.2721 60.9915 52.9149 60.9915H52.4633V61.0001ZM53.2472 58.7115L53.3409 58.8054C55.1644 58.609 56.613 57.1573 56.8089 55.3298C56.7749 55.2956 56.7493 55.27 56.7152 55.2359C55.5564 56.3973 54.4061 57.5501 53.2472 58.7115Z" fill="#00308C"/>\n  <path d="M37.5791 40.5697L36.043 42.1097L38.1401 44.2107L39.6763 42.6707L37.5791 40.5697Z" fill="#00308C"/>\n  <path d="M38.7981 36.6309L37.2617 38.1707L39.9731 40.8879L41.5095 39.3481L38.7981 36.6309Z" fill="#00308C"/>\n  <path d="M24.5655 3.08447C17.7403 3.08447 12.2188 8.62666 12.2188 15.4583C12.2188 22.29 24.5655 32.8535 24.5655 32.8535C24.5655 32.8535 36.9123 22.2985 36.9123 15.4583C36.9123 8.61812 31.3908 3.08447 24.5655 3.08447Z" fill="#428FEC"/>\n  <path d="M24.5664 34.2796L23.8591 33.6819C23.3394 33.2378 11.1289 22.717 11.1289 15.4584C11.1289 8.19974 17.1617 2 24.5664 2C31.971 2 38.0038 8.03749 38.0038 15.4584C38.0038 22.8793 25.7934 33.2378 25.2736 33.6819L24.5664 34.2796ZM24.5664 4.16905C18.3546 4.16905 13.3017 9.23303 13.3017 15.4584C13.3017 20.326 20.8683 28.097 24.5664 31.4103C28.2644 28.097 35.831 20.326 35.831 15.4584C35.831 9.23303 30.7781 4.16905 24.5664 4.16905Z" fill="#00308C"/>\n  <path d="M24.5675 22.0167C20.9546 22.0167 18.0234 19.0876 18.0234 15.4669C18.0234 11.8461 20.9546 8.91699 24.5675 8.91699C28.1804 8.91699 31.103 11.8461 31.103 15.4669C31.103 19.0876 28.1804 22.0167 24.5675 22.0167Z" fill="white"/>\n  <path d="M24.5649 22.6914C20.5856 22.6914 17.3477 19.4464 17.3477 15.4584C17.3477 11.4704 20.5856 8.22534 24.5649 8.22534C28.5441 8.22534 31.7735 11.4704 31.7735 15.4584C31.7735 19.4464 28.5356 22.6914 24.5649 22.6914ZM24.5649 10.4029C21.7785 10.4029 19.512 12.6745 19.512 15.4584C19.512 18.2423 21.7785 20.5138 24.5649 20.5138C27.3512 20.5138 29.6092 18.2423 29.6092 15.4584C29.6092 12.6745 27.3512 10.4029 24.5649 10.4029Z" fill="#00308C"/>\n  </svg>'};let Zt=[{name:"system",resolver:t=>t in zt?`data:image/svg+xml,${encodeURIComponent(zt[t])}`:""},{name:"bootstrap",resolver:t=>`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${t}.svg`},{name:"boxicons",resolver:t=>{let e="regular";return"bxs-"===t.substring(0,4)&&(e="solid"),"bxl-"===t.substring(0,4)&&(e="logos"),`https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${e}/${t}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},{name:"lucide",resolver:t=>`https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${t}.svg`},{name:"heroicons",resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${t}.svg`,mutator:t=>{t.setAttribute("width","16px"),t.setAttribute("height","16px")}},{name:"iconoir",resolver:t=>`https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${t}.svg`},{name:"ionicons",resolver:t=>`https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${t}.svg`,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor"),[...t.querySelectorAll(".ionicon-fill-none")].map((t=>t.setAttribute("fill","none"))),[...t.querySelectorAll(".ionicon-stroke-width")].map((t=>t.setAttribute("stroke-width","32px")))}},{name:"jam",resolver:t=>`https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")},{name:"fa",resolver:t=>{const e=t.replace(/^fa[rbs]-/,"");let i="regular";return"fas-"===t.substring(0,4)&&(i="solid"),"fab-"===t.substring(0,4)&&(i="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${i}/${e}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},{name:"material",resolver:t=>{const e=t.match(/^(.*?)(_(round|sharp))?$/);return`https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${e[1]}/${e[3]||"outline"}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},{name:"remix",resolver:t=>{const e=t.match(/^(.*?)\/(.*?)?$/);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${e[1]}/${e[2]}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},{name:"unicons",resolver:t=>{const e=t.match(/^(.*?)(-s)?$/);return`https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${"-s"===e[2]?"solid":"line"}/${e[1]}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},{name:"custom",resolver:t=>`./dist/assets/svg/custom/${t}.svg`}],At=[];function Vt(t){return Zt.find((e=>e.name===t))}const Tt=new Map;const Bt=new Map;async function jt(t){if(Bt.has(t))return Bt.get(t);const e=await function(t,e="cors"){if(Tt.has(t))return Tt.get(t);const i=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return Tt.set(t,i),i}(t),i={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const n=t.firstElementChild;i.svg="svg"===(null==n?void 0:n.tagName.toLowerCase())?n.outerHTML:""}return Bt.set(t,i),i}var Ht={libraries:{bootstrap:!0,boxicons:!0,fontawesome:!0,heroicons:!0,iconoir:!0,ionicons:!0,jam:!0,lucide:!0,material:!0,remix:!0,unicons:!0},defaults:{library:"bootstrap",size:"16px",icon:"chevron-right"}};const Ot=new DOMParser;let Et=class extends ht{constructor(){super(...arguments),this.svg="",this.label=!1,this.library=Ht.defaults.library,this.size=Ht.defaults.size}connectedCallback(){var t;super.connectedCallback(),t=this,At.push(t)}firstUpdated(){this.setIcon(),this.sizeIcon()}updated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,At=At.filter((e=>e!==t))}sizeIcon(){var t;if(this.size&&"string"==typeof this.size&&this.size!==Ht.defaults.size){const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".icon");null==e||e.style.setProperty("width",this.size),null==e||e.style.setProperty("height",this.size)}}getUrl(){const t=Vt(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=Vt(this.library),i=this.getUrl();if(i)try{const n=await jt(i);if(i!==this.getUrl())return;if(n.ok){const i=Ot.parseFromString(n.svg,"text/html").body.querySelector("svg");null!==i?(null===(t=null==e?void 0:e.mutator)||void 0===t||t.call(e,i),this.svg=i.outerHTML,Mt(this,"outline-load")):(this.svg="",Mt(this,"outline-error",{detail:{status:n.status}}))}else this.svg="",Mt(this,"outline-error",{detail:{status:n.status}})}catch(t){Mt(this,"outline-error",{detail:{status:-1}})}else this.svg.length>0&&(this.svg="")}render(){const t="string"==typeof this.label&&this.label.length>0,e={icon:!0,[`icon-library--${this.library}`]:this.library};return E` <div
      part="base"
      class="${xt(e)}"
      role=${pt(t?"img":void 0)}
      aria-label=${pt(t?this.label:void 0)}
    >
      ${Lt(this.svg)}
    </div>`}};Et.styles=[yt],t([st()],Et.prototype,"svg",void 0),t([at({type:String,reflect:!0,attribute:"name"})],Et.prototype,"name",void 0),t([at({type:String,attribute:"src"})],Et.prototype,"src",void 0),t([at({attribute:"label"})],Et.prototype,"label",void 0),t([at({type:String,attribute:"library"})],Et.prototype,"library",void 0),t([at({attribute:"size"})],Et.prototype,"size",void 0),t([St("name"),St("src"),St("library")],Et.prototype,"setIcon",null),Et=t([ot("outline-icon")],Et);var _t=Et;let Dt=class extends _t{};Dt.styles=[yt],Dt=t([ot("tufts-icon")],Dt);var Ut=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
.lg,.md,.sm,.xl,.xs,.xxl{display:block;line-height:1.1;margin:0}.lg a,.md a,.sm a,.xl a,.xs a,.xxl a{color:var(--medium-blue);color:var(--color-font-content,var(--medium-blue));text-decoration:none}.lg a:hover,.md a:hover,.sm a:hover,.xl a:hover,.xs a:hover,.xxl a:hover{text-decoration:underline}.lg h1,.lg h2,.lg h3,.lg h4,.lg h5,.lg h6,.md h1,.md h2,.md h3,.md h4,.md h5,.md h6,.sm h1,.sm h2,.sm h3,.sm h4,.sm h5,.sm h6,.xl h1,.xl h2,.xl h3,.xl h4,.xl h5,.xl h6,.xs h1,.xs h2,.xs h3,.xs h4,.xs h5,.xs h6,.xxl h1,.xxl h2,.xxl h3,.xxl h4,.xxl h5,.xxl h6{all:unset;font-size:inherit}.clickable-card h1 a:hover,.clickable-card h2 a:hover,.clickable-card h3 a:hover,.clickable-card h4 a:hover,.clickable-card h5 a:hover,.clickable-card h6 a:hover{text-decoration:none}.clickable-card h1 a:after,.clickable-card h2 a:after,.clickable-card h3 a:after,.clickable-card h4 a:after,.clickable-card h5 a:after,.clickable-card h6 a:after{content:"";inset:0;position:absolute}.heading-color a{color:var(--heading-color)}.lg,.md,.sm,.xl,.xxl{font-family:var(--ff-display);font-weight:var(--fw-normal)}.page-headings{font-family:var(--ff-body);font-size:var(--fs-ph);font-weight:var(--fw-semibold);letter-spacing:var(--ls-ph);line-height:var(--lh-ph)}.xxl{font-size:var(--fs-h1);letter-spacing:var(--ls-h1);line-height:var(--lh-h1)}.xl{font-size:var(--fs-h2);letter-spacing:var(--ls-h2);line-height:var(--lh-h2)}.lg{font-size:var(--fs-h3);letter-spacing:var(--ls-h3);line-height:var(--lh-h3)}.md{font-size:var(--fs-h4);letter-spacing:var(--ls-h4);line-height:var(--lh-h4)}.sm{font-size:var(--fs-h5);letter-spacing:var(--ls-h5);line-height:var(--lh-h5)}.xs{font-family:var(--ff-body);font-size:var(--fs-h6);font-weight:var(--fw-bold);letter-spacing:var(--ls-h6);line-height:var(--lh-h6);text-transform:uppercase}tufts-heading a{text-decoration:none}.special-heading{color:var(--black-800);font-family:var(--ff-body);font-size:var(--fs-h5);font-style:normal;font-weight:var(--fw-semibold);line-height:var(--lh-h5)}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const It=Symbol.for(""),Rt=t=>{if((null==t?void 0:t.r)===It)return null==t?void 0:t._$litStatic$},Ft=new Map,Nt=(t=>(e,...i)=>{const n=i.length;let o,r;const a=[],s=[];let l,c=0,h=!1;for(;c<n;){for(l=e[c];c<n&&void 0!==(r=i[c],o=Rt(r));)l+=o+e[++c],h=!0;s.push(r),a.push(l),c++}if(c===n&&a.push(e[n]),h){const t=a.join("$$lit$$");void 0===(e=Ft.get(t))&&(a.raw=a,Ft.set(t,e=a)),i=s}return t(e,...i)})(E);class Pt{constructor(t){this._mutationObserver=new MutationObserver(this._handleMutation.bind(this)),this.host=t,t.addController(this)}hostConnected(){}_handleMutation(){this._mutationObserver.disconnect(),this.host.requestUpdate()}getSlottedNodes(t=null){let e=[];return e=""===t||null===t?Array.from(this.host.childNodes).filter((t=>this.isDefaultSlotText(t)||this.isDefaultSlotElement(t))):Array.from(this.host.querySelectorAll(`[slot=${t}]`)),e}count(t=null){return this.getSlottedNodes(t).length}exist(t=null){return Boolean(this.getSlottedNodes(t).length)}isDefaultSlotText(t){return t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim()}isDefaultSlotElement(t){return t.nodeType===t.ELEMENT_NODE&&null===t.getAttribute("slot")}addAnnotations(t,e){var i;const n=e.cloneNode(!0),o="slotsController cloned this "+(""===t?"default-slot":`named-slot '${t}'`)+" into the shadow DOM";if(Array.from(this.host.childNodes).some((t=>t.nodeValue===o))||e.before(document.createComment(o)),""!==t)return n.setAttribute("cloned-slot-type","named-slot"),n.setAttribute("cloned-slot-name",t),n.removeAttribute("slot"),n;if(this.isDefaultSlotElement(e))return n.setAttribute("cloned-slot-type","default-slot--element"),n.setAttribute("cloned-slot-name","default"),n.removeAttribute("slot"),n;{const t=document.createElement("cloned-slot");return null===(i=n.parentNode)||void 0===i||i.insertBefore(t,n),t.appendChild(n),t.setAttribute("cloned-slot-type","default-slot--text"),t.setAttribute("cloned-slot-name","default"),t}}dispatchEventsToLightDom(t,e){t.forEach((t=>{e.addEventListener(t,(e=>{if(e.target){const i=this.getElementPathInShadowDom(e),n=this.getElementPathInLightDom(i);n&&n.dispatchEvent(new Event(t)),setTimeout((()=>{const t=this.getElementPathInLightDom(i,!0);t&&t.focus()}),0)}}))}))}renderInShadow(t="",e=null,i=[],n=!0){const o=this.getSlottedNodes(t);if(o){const r=o.map((o=>{const r=o;let a;if(a=n?this.addAnnotations(t,r):r.cloneNode(!0),this.dispatchEventsToLightDom(i,a),e){const t=document.createElement(e);return t.appendChild(a),t}return a}));return setTimeout((()=>{this._mutationObserver.observe(this.host,{subtree:!0,childList:!0,attributes:!0,characterData:!0})}),0),r}return null}getElementPathInShadowDom(t){const e=t.composedPath(),i=[];let n=!1;for(let t=0;!n&&t<e.length;t++){const o=e[t];if("#document-fragment"===o.nodeName)n=!0;else{const t=this.getSelectorForSingleElement(o);t&&i.push(t)}}return i.reverse()}getSelectorForSingleElement(t){if(!t.parentElement)return null;const e=Array.from(t.classList).join("."),i=`${t.localName}${""!==e?"."+e:""}`;return{name:i,index:Array.from(t.parentElement.querySelectorAll(i)).indexOf(t)}}getElementPathInLightDom(t,e=!1){let i=e?this.host.shadowRoot:this.host;if(!i)return null;for(let e=0;e<t.length;e++)i=i.querySelectorAll(t[e].name)[t[e].index];return i}printExtraAttributes(t){return(t=>({_$litStatic$:t,r:It}))(t.map((t=>`${t.name}=${t.value}`)).join(" "))}conditionalNGSlot(t,e=!0,i=null,n=[]){const o=""===t||null===t,r={"default-slot":o,[`${t}`]:!o,[`${i}`]:null!=i&&i};return this.exist(t)?Nt` <div
        class="${pt(xt(r))}"
        ${this.printExtraAttributes(n)}
      >
        ${e?Nt`${this.renderInShadow(t)}`:Nt`<slot name=${t}></slot> `}
      </div>`:null}}let Wt=class extends ht{constructor(){super(...arguments),this.ngSlot=new Pt(this),this.pageHeadings=!1,this.clickableCard=!1}render(){const t={[`${this.levelSize}`]:!!this.levelSize,[`${this.textColor}`]:!!this.textColor,"page-headings":!!this.pageHeadings,"clickable-card":!!this.clickableCard};return Nt`
      <div class="${xt(t)}">${this.ngSlot.renderInShadow()}</div>
    `}};Wt.styles=[Ut],t([at({type:String,reflect:!0,attribute:"level-size"})],Wt.prototype,"levelSize",void 0),t([at({type:String,reflect:!0,attribute:"text-color"})],Wt.prototype,"textColor",void 0),t([at({type:Boolean,reflect:!0,attribute:"page-headings"})],Wt.prototype,"pageHeadings",void 0),t([at({type:Boolean,reflect:!0,attribute:"clickable-card"})],Wt.prototype,"clickableCard",void 0),Wt=t([ot("tufts-heading")],Wt);var Jt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Gt={},Kt={},qt={},Xt={},Yt=Jt&&Jt.i||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]])}return i};Object.defineProperty(Xt,"l",{value:!0}),Xt.Linkset=void 0;class Qt{constructor(t){this.elements=t,this.size=t.length}hasLinkTo(t){return this.elements.some((e=>e.rel===t))}linkTo(t){return this.elements.find((e=>e.rel===t))}linksTo(t){return new Qt(this.elements.filter((e=>e.rel===t)))}linksFrom(t){return new Qt(this.elements.filter((e=>e.anchor===t)))}linksWithAttribute(t){return new Qt(this.elements.filter((e=>Object.prototype.hasOwnProperty.call(e.attributes,t))))}linksWithAttributeValue(t,e){return new Qt(this.linksWithAttribute(t).elements.filter((i=>(Array.isArray(i.attributes[t])?i.attributes[t]:[i.attributes[t]]).some((t=>function(t,e){if(typeof t!=typeof e)return!1;if("string"==typeof t&&"string"==typeof e)return t===e;return t.value==t.value&&t.language==t.language}(t,e))))))}[Symbol.iterator](){const t=this.elements;let e=0;return{next:()=>e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}normalize(){const t={};return this.elements.forEach((e=>{var{anchor:i,rel:n}=e,o=Yt(e,["anchor","rel"]);Object.hasOwnProperty.call(t,i)||(t[i]={}),Object.hasOwnProperty.call(t[i],n)||(t[i][n]=[]);const{href:r,attributes:a}=o,s=Object.assign({href:r},a);t[i][n].push(s)})),{linkset:Object.entries(t).reduce(((t,[e,i])=>[...t,Object.assign({anchor:e},i)]),[])}}}Xt.Linkset=Qt;var te={},ee=Jt&&Jt.i||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]])}return i};Object.defineProperty(te,"l",{value:!0}),te.Link=void 0;te.Link=class{constructor(t){const{anchor:e,rel:i,href:n}=t,o=ee(t,["anchor","rel","href"]);this.anchor=e,this.rel=i,this.href=n,this.attributes=o}};var ie=Jt&&Jt.i||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]])}return i};Object.defineProperty(qt,"l",{value:!0}),qt.denormalize=qt.parse=void 0;const ne=Xt,oe=te;function re(t){const e=[];return t.linkset.forEach((t=>{const{anchor:i}=t,n=ie(t,["anchor"]);Object.keys(n).forEach((n=>{t[n].forEach((t=>{e.push(new oe.Link(Object.assign({anchor:i,rel:n},t)))}))}))})),new ne.Linkset(e)}qt.denormalize=re,qt.parse=function(t){return re(JSON.parse(t))};var ae={};Object.defineProperty(ae,"l",{value:!0}),ae.buildTree=ae.hierarchyCompare=ae.MenuElement=void 0;class se{constructor(t,e=[]){this.link=t,this.children=ce([...e])}get title(){return this.link.attributes.title}}function le(t,e){return 0===t.length&&0===e.length?0:0===t.length&&e.length>0?-1:t.length>0&&0===e.length?1:1===t.length&&1===e.length?parseInt(t[0])-parseInt(e[0]):t[0]===e[0]?le(t.slice(1),e.slice(1)):parseInt(t[0])-parseInt(e[0])}function ce(t){if(t.length<2)return t.length?[new se(t.shift())]:[];t.sort(((t,e)=>le(t.attributes.hierarchy,e.attributes.hierarchy)));const e=[];let i,n=[];do{const o=t.shift();i?o.attributes.hierarchy.length>i.attributes.hierarchy.length?n.push(o):(e.push(new se(i,n)),i=o,n=[]):i=o}while(t.length);return e.push(new se(i,n)),e}ae.MenuElement=se,ae.hierarchyCompare=le,ae.buildTree=ce,Object.defineProperty(Kt,"l",{value:!0}),Kt.Menu=void 0;const he=qt,de=ae;class ue{constructor(t,e){this.id=t,this.linkset=e,this.elements=this.linkset.elements,this.size=this.linkset.size,this.tree=(0,de.buildTree)([...this.elements])}[Symbol.iterator](){const t=this.elements;let e=0;return{next:()=>e<t.length?{value:t[e++],done:!1}:{value:void 0,done:!0}}}hasLinkTo(t){return this.linkset.hasLinkTo(t)}linkTo(t){return this.linkset.linkTo(t)}linksTo(t){return new ue(this.id,this.linkset.linksTo(t))}linksFrom(t){return new ue(this.id,this.linkset.linksTo(t))}linksWithAttribute(t){return new ue(this.id,this.linkset.linksWithAttribute(t))}linksWithAttributeValue(t,e){return new ue(this.id,this.linkset.linksWithAttributeValue(t,e))}static from(t,e){const i=(0,he.denormalize)(t),n=[];e?n.push(e):i.linksWithAttribute("machine-name").elements.forEach((t=>{n.includes(t.attributes["machine-name"][0])||n.push(t.attributes["machine-name"][0])}));const o=n.map((t=>new ue(t,i.linksWithAttributeValue("machine-name",t))));return e?o.shift():o}}Kt.Menu=ue,Object.defineProperty(Gt,"l",{value:!0});var ve=Gt.denormalize=Gt.parse=void 0;const pe=Kt;function me(t,e){return pe.Menu.from(t,e)}var fe;ve=Gt.denormalize=me,Gt.parse=function(t,e){return me(JSON.parse(t),e)};let ge=fe=class extends ht{constructor(){super(...arguments),this.mobileStyle="none",this.isLoading=!1,this.loadingMessage="Loading...",this.topMenuNoLink=!1,this.menuItemAsHeader=!1,this.menuId="main",this.menuLang="",this.menuType="menu",this.menuHeadingSize="xs",this.isMobile=!1,this.colorMode="light",this.mobileTrigger=!1,this.initialMenuDepth=void 0,this.keepBaseItem=null,this.maxMenuDepth=null,this.manualMode=void 0}connectedCallback(){super.connectedCallback(),this.checkIfDesktopNavigationWraps=this.checkIfDesktopNavigationWraps.bind(this),this.menuId&&this.fetchData()}closeMenuOnBlur(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("button ~ ul");null==e||e.forEach((t=>{const e=t.querySelectorAll("a");e[e.length-1].addEventListener("blur",this.closeBlurMenu)}))}closeBlurMenu(t){var e;let i=!1,n=t.target;for(;!i&&!n.classList.contains("menu--level-2");){const t=null===(e=n.parentElement)||void 0===e?void 0:e.closest("ul"),o=null==t?void 0:t.previousElementSibling;o instanceof HTMLButtonElement?(o.setAttribute("aria-expanded","false"),i=!0):t&&(n=t)}}closeMenu(t){const e=t.target.querySelector("button");null==e||e.setAttribute("aria-expanded","false")}static openMenu(t){const e=t.target;if(e.classList.contains("is-touch-event"))return void e.classList.remove("is-touch-event");e.classList.contains("menu--level-1")&&fe.closeAllMenusEvent(t);const i=e.querySelector("button");null==i||i.setAttribute("aria-expanded","true")}_handleTouchStart(t){var e;null===(e=t.target.closest("li"))||void 0===e||e.classList.add("is-touch-event")}menuReady(){this.requestUpdate(),this.mobileTrigger&&setTimeout((()=>{var t;this.mobileTriggerMenu=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`#${this.menuId}-menu`),this.mobileTriggerMenu&&(this.resizeObserver=new ResizeObserver(this.checkIfDesktopNavigationWraps),this.resizeObserver.observe(this.mobileTriggerMenu)),this.closeMenuOnBlur()}),0)}disconnectedCallback(){this.mobileTriggerMenu&&this.resizeObserver.unobserve(this.mobileTriggerMenu)}sliceMenu(){if(!this.initialMenuDepth||!this.activePage||!this.currentMenu.linkset[0])return;const t=this.currentMenu.linkset[0].item,e=t.findIndex((t=>JSON.stringify(t.href)===JSON.stringify(this.activePage)));if(-1===e)return void(this.currentMenu.linkset[0].item=[]);const i=t.findIndex((i=>JSON.stringify(i.hierarchy)===JSON.stringify(t[e].hierarchy.slice(0,this.initialMenuDepth)))),n=t[i],o=t[i].hierarchy.length,r=t.filter(((t,e)=>!(e===i&&!this.keepBaseItem)&&n.hierarchy.every(((e,i)=>e===t.hierarchy[i])))).map((t=>(t.hierarchy=t.hierarchy.slice(o),t)));this.currentMenu.linkset[0].item=r}limitMenuDepth(){if(!this.maxMenuDepth||!this.currentMenu.linkset[0])return;const t=this.currentMenu.linkset[0].item,e=this.maxMenuDepth-(this.initialMenuDepth&&this.keepBaseItem?1:0);this.currentMenu.linkset[0].item=t.filter((t=>t.hierarchy.length<=e))}static menuLevelTemplate(t,e){return E`<ul class="menu--level-${e}">
      ${t}
    </ul>`}buttonTemplate(t,e,i){return E`<button
      class=${t}
      type="button"
      @click="${fe.toggleMenu}"
      aria-expanded="false"
      aria-haspopup="true"
    >
      ${e?E`<span>${i}</span>`:E`<span class="visually-hidden">${i} sub-navigation</span>`}
      <span class="dropdown-icon">
        <tufts-icon
          name="chevron-down"
          library="system"
          size="1rem"
        ></tufts-icon>
      </span>
    </button>`}menuLinkAndParentTemplate(t,e,i,n){const o=this.manualMode||this.isMobile,r=`no-title dropdown-button menu--level-${n} menu-link--level-${n}`;return E`<li
      class="menu--level-${n} menu-item--level-${n}"
      @mouseenter="${pt(o?void 0:fe.openMenu)}"
      @mouseleave="${pt(o?void 0:this.closeMenu)}"
      @touchstart="${this._handleTouchStart}"
    >
      <a
        href=${e}
        class="menu--level-${n} menu-link--level-${n}"
        >${t}</a
      >
      ${this.buttonTemplate(r,!1,t)}
      ${this.renderMenuLevel(i)}
    </li>`}menuParentTemplate(t,e,i){const n=this.manualMode||this.isMobile;return E`<li
      class="menu--level-${i} menu-item--level-${i}"
      @mouseenter="${pt(n?void 0:fe.openMenu)}"
      @mouseleave="${pt(n?void 0:this.closeMenu)}"
      @touchstart="${this._handleTouchStart}"
    >
      ${this.menuItemAsHeader?E`
            <tufts-heading level-size="${this.menuHeadingSize}"
              ><h3>${t}</h3></tufts-heading
            >
          `:this.buttonTemplate("with-title dropdown-button",!0,t)}
      ${this.renderMenuLevel(e)}
    </li>`}static menuLinkTemplate(t,e,i){return E`<li
      class="menu--level-${i} menu-link--level-${i}"
    >
      <a href="${e}">${t}</a>
    </li>`}static menuItemTemplate(t,e){return E`<li
      class="menu--level-${e} menu-item--level-${e}"
    >
      ${t}
    </li>`}renderMenuLevel(t){const e=t.map((t=>{let e=0;return Array.isArray(t.link.attributes.hierarchy)&&(e=t.link.attributes.hierarchy.length),this.renderMenuItem(t,e)}));return fe.menuLevelTemplate(e,e[0].values[0])}renderMenuItem(t,e){const i=t.link.attributes.title,n=t.link.href,o=t.children;return!this.topMenuNoLink&&n&&o&&o.length?this.menuLinkAndParentTemplate(i,n,o,e):o&&o.length?this.menuParentTemplate(i,o,e):n?fe.menuLinkTemplate(i,n,e):fe.menuItemTemplate(i,e)}getDebugMenu(){return"./dist/assets/menu-debug/"+this.menuId+"-menu.json"}getDrupalMenu(){return location.protocol+"//"+location.host+(this.menuLang?"/"+this.menuLang:"")+`/system/${this.menuType}/${this.menuId}/linkset`}async fetchData(){this.isLoading=!0,this.jsonMenuURL=this.debugMenu?this.getDebugMenu():this.getDrupalMenu();const t=await fetch(this.jsonMenuURL);if(!t.ok){const e=`Unable to fetch ${this.jsonMenuURL}. ${t.status} ${t.statusText}`;throw new Error(e)}this.currentMenu=await t.json(),this.sliceMenu(),this.limitMenuDepth();const e=ve(this.currentMenu,this.menuId);Array.isArray(e)||(this.tree=e.tree,this.isLoading=!1,this.menuReady())}static closeAllMenusEvent(t){fe.closeAllMenus(t.target)}static closeAllMenus(t){var e;const i=document.querySelector("tufts-header"),n=null===(e=null==i?void 0:i.shadowRoot)||void 0===e?void 0:e.querySelectorAll("tufts-menu");n&&[...n].forEach((e=>{var i;const n=null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelectorAll("button");n&&[...n].forEach((e=>{e!==t&&e.setAttribute("aria-expanded","false")}))}))}static toggleMenu(t){const e=t.target.closest("button");if(e){"true"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","false"):(e.setAttribute("aria-expanded","true"),fe.closeAllMenus(e))}}_dispatchMenuMode(t){const e={detail:{menuId:this.menuId,mode:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("menuMode",e))}render(){return this.isLoading||0===this.tree.length?null:E`
      <nav
        class="${this.isMobile?"mobile":""} ${this.colorMode} ${this.justify} ${this.menuId}-menu"
        id="${this.menuId}-menu"
        aria-labelledby="${this.menuId}-menu-title"
      >
        <h2 class="visually-hidden" id="${this.menuId}-menu-title">
          ${this.menuName}
        </h2>
        ${this.renderMenuLevel(this.tree)}
      </nav>
    `}transitionToDesktopNavigation(){this._dispatchMenuMode("desktop")}checkIfDesktopNavigationWraps(t){const e=t[0].target.querySelector("li");if(e&&t[0].contentRect.height>e.clientHeight){const t=window.matchMedia(`(max-width: ${window.innerWidth+15}px)`);this._dispatchMenuMode("mobile"),t.addEventListener("change",(()=>{this.transitionToDesktopNavigation()}),{once:!0})}}};ge.styles=[mt],t([at({type:Boolean,reflect:!0,attribute:"debug-menu"})],ge.prototype,"debugMenu",void 0),t([at({type:Boolean,reflect:!0,attribute:"top-menu-no-link"})],ge.prototype,"topMenuNoLink",void 0),t([at({type:Boolean,reflect:!0,attribute:"menu-item-as-header"})],ge.prototype,"menuItemAsHeader",void 0),t([at({type:String,reflect:!0,attribute:"menu-id"})],ge.prototype,"menuId",void 0),t([at({type:String,reflect:!0,attribute:"menu-name"})],ge.prototype,"menuName",void 0),t([at({type:String,reflect:!0,attribute:"menu-lang"})],ge.prototype,"menuLang",void 0),t([at({type:String,reflect:!0,attribute:"menu-type"})],ge.prototype,"menuType",void 0),t([at({type:String,reflect:!0,attribute:"menu-heading-size"})],ge.prototype,"menuHeadingSize",void 0),t([at({type:Boolean,reflect:!0,attribute:"mobile"})],ge.prototype,"isMobile",void 0),t([at({type:String,reflect:!0,attribute:"color-mode"})],ge.prototype,"colorMode",void 0),t([at({type:String,reflect:!0,attribute:"justify"})],ge.prototype,"justify",void 0),t([at({type:Boolean,reflect:!0,attribute:"mobile-trigger"})],ge.prototype,"mobileTrigger",void 0),t([at({type:Number,reflect:!0,attribute:"initial-menu-depth"})],ge.prototype,"initialMenuDepth",void 0),t([at({type:String,reflect:!0,attribute:"keep-base-item"})],ge.prototype,"keepBaseItem",void 0),t([at({type:Number,reflect:!0,attribute:"depth"})],ge.prototype,"maxMenuDepth",void 0),t([at({type:Boolean,reflect:!0,attribute:"manual-mode"})],ge.prototype,"manualMode",void 0),t([at({type:String,reflect:!0,attribute:"active-page"})],ge.prototype,"activePage",void 0),ge=fe=t([ot("tufts-menu")],ge);var be=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
.container,.container-wrapper{position:relative}.container{--container-padding:var(--space-s-4xl);display:flex;flex-direction:column;gap:var(--tufts-container-space-between-elements);margin-left:auto;margin-right:auto;max-width:calc(var(--container-max-content-width) + var(--container-padding)*2);padding-left:var(--container-padding);padding-right:var(--container-padding);width:100%}.wide{--container-max-content-width:1660px}.medium{--container-max-content-width:1088px}.narrow{--container-max-content-width:864px}.full{--container-padding:0;max-width:2000px}.justify-end{justify-content:flex-end}.blue,.blue_dark,.green,.purple,.purple_dark{--color-font-content:var(--white);--color-font-link:var(--white);--background-color-text-wrapper-quote:var(--white);--color-font-quote:var(--black-800)}.blue_dark{--tufts-form-outline-color-hover-select:#9ccdfb}@media (prefers-reduced-motion:no-preference){.revealing{animation:revealing 1s ease-in-out}.drop-in{animation:drop-in 1s}.fade-in{animation:fade-in 2s}}@keyframes revealing{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes drop-in{0%{opacity:0;transform:rotate(30deg) translateY(-100%)}to{opacity:1;transform:rotate(0deg) translateY(0)}}`;class we{constructor(t,e={}){this.breakpointsRangeArray=[];const i={debounce:0,breakpoints:[768],elementToRerender:t},n=Object.fromEntries(Object.entries(e).filter((([t,e])=>void 0!==e)));this.options=Object.assign(Object.assign({},i),n),this.host=t,this.host.addController(this),this.initializeBreakpointsRangeType()}initializeBreakpointsRangeType(){var t,e;null===(t=this.options.breakpoints)||void 0===t||t.push(1e5);let i=0;null===(e=this.options.breakpoints)||void 0===e||e.forEach((t=>{const e={min:i,max:t-1};i=t,this.breakpointsRangeArray.push(e)}))}hostConnected(){this.host.style.display||this.host.style.setProperty("display","var(--style-added-by-resize-controller, block)"),this.resizeObserver=new ResizeObserver((t=>{((t,e,i=!1)=>{let n;return function(...o){const r=()=>t(...o);clearTimeout(n),i&&void 0===n&&r(),n=setTimeout(r,e)}})(this.onElementResize.bind(this),this.options.debounce)(t)})),this.elementToObserve=this.host,this.resizeObserver.observe(this.elementToObserve)}hostDisconnected(){this.resizeObserver.disconnect()}onElementResize(t){this.currentComponentWidth=t[0].contentRect.width,this.currentComponentWidth&&this.calculateNewBreakpointRange()}calculateNewBreakpointRange(){let t=this.currentBreakpointRange;this.breakpointsRangeArray.forEach(((e,i)=>{this.currentComponentWidth>=e.min&&this.currentComponentWidth<=e.max&&(t=i)})),t!==this.currentBreakpointRange&&(this.currentBreakpointRange=t,this.options.elementToRerender.requestUpdate())}}class xe{constructor(t,e){this.options=e,this.options={triggerSelector:e.triggerSelector,revealClass:e.revealClass,retrigger:e.retrigger||!1},this.host=t,this.host.addController(this)}hostConnected(){this.setRevealClasses(this.host,this.options)}setRevealClasses(t,e){setTimeout((()=>{var i;const n=null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelectorAll(e.triggerSelector),o=new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio>0?t.target.classList.add(e.revealClass):e.retrigger&&t.target.classList.remove(e.revealClass)}))}));null==n||n.forEach((t=>{o.observe(t)}))}),0)}}let ye=class extends ht{constructor(){super(...arguments),this.padding="space-l",this.justifyEnd=!1,this.containerWidth="wide",this.backgroundColor="white",this.maxPulseSize="650px",this.gap="0px",this.displayPulseWidth=1080,this.pulseMobile=null}connectedCallback(){super.connectedCallback(),this.pulseOrientation&&(this.resizeController=new we(this,{breakpoints:[this.displayPulseWidth]}))}firstUpdated(){this.animationType&&(this.revealTrigger=new xe(this,{triggerSelector:".animation",revealClass:this.animationType}))}displayPulse(){return!!this.pulseOrientation&&(void 0!==this.resizeController.currentBreakpointRange&&("true"===this.pulseMobile||0!==this.resizeController.currentBreakpointRange))}pulseTemplate(){return E`
      ${this.displayPulse()?E`<tufts-pulse
            orientation="${pt(this.pulseOrientation)}"
            max-size="${pt(this.maxPulseSize)}"
            pulse-top-alignment="${pt(this.pulseTopAlignment)}"
          ></tufts-pulse>`:null}
    `}render(){const t=this.containerWidth;let e="0";this.pulseOrientation&&0!==this.resizeController.currentBreakpointRange&&(e=`min(25rem, ${this.maxPulseSize})`);const i={container:!0,[t]:!0,justifyEnd:this.justifyEnd,[this.backgroundColor]:this.backgroundColor},n={"container-wrapper":!0,animation:!!this.animationType};return E`
      ${this.topMargin||this.bottomMargin||this.backgroundColor?E` <style>
            .container-wrapper {
              background-color: var(--bg-color--${this.backgroundColor});
              padding-block: var(--${this.padding});
              min-height: ${e};
            }
            .container {
              margin-top: var(--${this.topMargin});
              margin-bottom: var(--${this.bottomMargin});
              --tufts-container-space-between-elements: ${this.gap};
            }
          </style>`:""}
      <div class="${xt(n)}">
        ${this.pulseTemplate()}
        <div class="${xt(i)}">
          <slot></slot>
        </div>
      </div>
    `}};ye.styles=[be],t([at({type:String,reflect:!0,attribute:"top-margin"})],ye.prototype,"topMargin",void 0),t([at({type:String,reflect:!0,attribute:"bottom-margin"})],ye.prototype,"bottomMargin",void 0),t([at({type:String,reflect:!0,attribute:"padding"})],ye.prototype,"padding",void 0),t([at({type:String,reflect:!0,attribute:"pulse-orientation"})],ye.prototype,"pulseOrientation",void 0),t([at({type:String,reflect:!0,attribute:"pulse-top-alignment"})],ye.prototype,"pulseTopAlignment",void 0),t([at({type:Boolean,reflect:!0,attribute:"justify-end"})],ye.prototype,"justifyEnd",void 0),t([at({type:String,reflect:!0,attribute:"container-width"})],ye.prototype,"containerWidth",void 0),t([at({type:String,reflect:!0,attribute:"background-color"})],ye.prototype,"backgroundColor",void 0),t([at({type:String,reflect:!0,attribute:"max-pulse-size"})],ye.prototype,"maxPulseSize",void 0),t([at({type:String,reflect:!0,attribute:"gap"})],ye.prototype,"gap",void 0),t([at({type:String,reflect:!0,converter:Number,attribute:"display-pulse-width"})],ye.prototype,"displayPulseWidth",void 0),t([at({type:String,reflect:!0,attribute:"pulse-mobile"})],ye.prototype,"pulseMobile",void 0),t([at({type:String,reflect:!0,attribute:"animation-type"})],ye.prototype,"animationType",void 0),ye=t([ot("tufts-container")],ye);var ke=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
header{--logo-color--light-mode:var(--core-blue);--text-color--light-mode:var(--black-800);--link-hover-color--light-mode:var(--medium-blue);--chevron-color--light-mode:var(--medium-blue)}header:has(.extra-menu-toggle[aria-expanded=true]){--logo-color--dark-mode:var(--white);--text-color--dark-mode:var(--white);--link-hover-color--dark-mode:var(--white);--chevron-color--light-mode:var(--white)}.mobile .logo{max-width:180px}.logo{color:var(--logo-color--light-mode);color:var(--logo-color--dark-mode,var(--logo-color--light-mode));max-width:250px}.logo svg{display:flex;width:100%}.mobile-login{align-items:center;color:var(--black-800);display:flex;flex-direction:column;font-size:var(--fs-sm);line-height:var(--lh-sm);text-decoration:none}.header-wrapper{display:flex;flex-wrap:wrap;gap:2rem}.main-menu-wrapper{-webkit-margin-start:auto;align-items:center;display:flex;margin-inline-start:auto;position:relative}.extra-menu-toggle{-webkit-margin-start:2rem;-webkit-margin-before:4px;align-items:center;align-self:start;background:none;border:none;color:var(--medium-blue);cursor:pointer;display:flex;font-size:var(--fs-base);font-weight:var(--fw-semibold);margin-block-start:4px;margin-inline-start:2rem;padding:0}.extra-menu-toggle[aria-expanded=true]{color:var(--white)}.extra-menu-toggle--icon{-webkit-padding-start:.5rem;padding-inline-start:.5rem}.extra-menu--close{display:none}.close-search-button{height:3rem;justify-content:center;outline-offset:-2px;position:absolute;right:0;top:0;width:3rem}.close-search-button,.open-search-button{align-items:center;background:none;border:none;cursor:pointer;display:flex}.open-search-button{color:var(--chevron-color--light-mode);color:var(--chevron-color--dark-mode,var(--chevron-color--light-mode));flex-direction:column;padding:0}.mobile .open-search-button{width:3.5rem}header:not(.mobile) .open-search-button{-webkit-margin-before:4px;align-self:start;margin-block-start:4px}.search-dropdown{-webkit-padding-after:1rem;padding-block-end:1rem}[aria-expanded=false]+.search-wrapper{display:none}.search-wrapper{display:flex;flex-direction:column;gap:1.5rem}header:not(.mobile) .search-wrapper{background-color:var(--black-100);border-radius:0 0 16px 16px;border-top:2px solid var(--dark-green);box-shadow:3px 3px 11px rgba(0,0,0,.05),8px 10px 26px rgba(0,0,0,.19);padding:1rem;position:absolute;right:0;top:2.5rem;z-index:1}.search-wrapper .input-wrapper{align-items:center;background-color:#fff;border:1px solid var(--black-700);border-radius:41px;display:flex;justify-content:space-between;padding:.5rem .2rem}.search-wrapper input[type=search]{-webkit-margin-start:1rem;background-color:initial;border:none;font-size:var(--fs-lg);margin-inline-start:1rem;max-width:60vw;outline-offset:3px}.search-wrapper button[type=submit]{background-color:var(--dark-green);border-radius:50%;color:#fff;display:flex;height:3rem;margin-inline:1rem 5px;outline-offset:2px;outline-style:dashed;outline-width:2px;place-content:center;place-items:center;width:3rem}.search-wrapper button[type=submit]:focus{outline-color:var(--medium-blue)}.search-wrapper ::-moz-placeholder{color:var(--black-700)!important}.search-wrapper ::placeholder{color:var(--black-700)!important}.search-suggestions{-moz-column-gap:4.5rem;column-gap:4.5rem;display:flex;flex-wrap:wrap;justify-content:center;row-gap:1.5rem}.search-suggestions ul{display:flex;flex-direction:column;gap:1rem;list-style-type:none;margin:0;padding:0}.search-suggestions .suggestion-group-label{font-weight:var(--fw-bold);text-transform:uppercase}.search-suggestions .suggestion-link{color:var(--medium-blue);display:flex;gap:.5rem;text-decoration:none}.search-suggestions .suggestion-link:hover{text-decoration:underline}.mobile .search-suggestions{color:#fff;justify-content:flex-start}.mobile .search-suggestions li:first-child{font-size:var(--fs-base)}.mobile .search-suggestions .suggestion-link{-webkit-margin-start:1rem;color:#fff;margin-inline-start:1rem}.sticky-header{align-items:center;background-color:#fff;border-top:1px solid var(--black-450);bottom:0;display:flex;gap:1rem;gap:clamp(.5rem,-3rem + 20vw,3rem);justify-content:center;padding-block:.3rem .15rem;position:fixed;width:100%;z-index:500}.menu-dropdown{background-color:initial;border:none;cursor:pointer;padding:0;width:3rem}.menu-dropdown,.sticky-mobile-item{align-items:center;display:flex;flex-direction:column;font-size:1rem}.sticky-mobile-item{color:var(--black-800);line-height:1.5;text-decoration:none}.top-header{background-color:var(--white);border-bottom:1px solid var(--black-300);display:flex;gap:1rem;height:55px;margin-bottom:.5rem;padding:1.125rem 0;place-content:space-between;place-items:center}.sliding-header,.sliding-search{background:var(--dark-blue);display:grid;grid-template-rows:auto 1fr;height:calc(100% - 50px);inset:0;opacity:0;overflow:auto;position:fixed;transform:translateX(100%);visibility:hidden;z-index:500}@media (prefers-reduced-motion:no-preference){.sliding-header,.sliding-search{transition:transform .3s 0s,opacity 0s .3s,visibility 0s .3s}}.is-active{opacity:1;transform:translateX(0);visibility:visible}@media (prefers-reduced-motion:no-preference){.is-active{transition:transform .3s 0s}}.horizontal-divider{border-color:var(--light-blue);margin-block:var(--space-s);width:100%}`;const Ce=new Event("closing"),$e=new Event("closed"),Le=new Event("opening"),Me=new Event("opened"),Se=new Event("removed"),ze=new MutationObserver((t=>{t.forEach((async t=>{var e;if("open"===t.attributeName){const i=t.target;if(!i.hasAttribute("open"))return;document.querySelector("body").style.overflow="hidden";const n=i.querySelector("[autofocus]");n?n.focus():null===(e=i.querySelector("button"))||void 0===e||e.focus(),i.dispatchEvent(Le),await Ae(i),i.dispatchEvent(Me)}}))})),Ze=new MutationObserver((t=>{t.forEach((t=>{t.removedNodes.forEach((t=>{"DIALOG"===t.nodeName&&(t.removeEventListener("click",Ve),t.removeEventListener("close",Te),t.dispatchEvent(Se))}))}))})),Ae=t=>Promise.allSettled(t.getAnimations().map((t=>t.finished))),Ve=({target:t})=>{const e=t;"DIALOG"===e.nodeName&&e.close("dismiss")},Te=async({target:t})=>{document.querySelector("body").style.overflow="revert";const e=t;e.dispatchEvent(Ce),await Ae(e),e.dispatchEvent($e)};var Be=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
:host{display:flex;vertical-align:middle}.btn{align-items:center;border:none;border-radius:60px;border-radius:var(--tufts-btn-radius,60px);cursor:pointer;display:flex;font-family:var(--ff-body);font-family:var(--tufts-btn-family,var(--ff-body));font-weight:var(--fw-bold);font-weight:var(--tufts-btn-weight,var(--fw-bold));justify-content:space-between;outline:none;padding:16px 36px;padding:var(--tufts-btn-padding,16px 36px);text-decoration-line:none;transition-duration:.1s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,outline,outline-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn[aria-disabled=true]{cursor:not-allowed;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn.primary{background-color:var(--dark-green);background-color:var(
    --tufts--button--primary-bg-color-default,var(--dark-green)
  );border:2px solid;border-color:var(--dark-green);box-shadow:none;box-shadow:var(--tufts--button--primary-ring-default,none);color:var(--white);color:var(--tufts--button--primary-text-color-default,var(--white));font-weight:700;padding:16px 32px;padding:var(
    --tufts--button--primary-padding,var(--tufts-btn-padding,16px 32px)
  )}.btn.primary:hover{background-color:var(--dark-blue);background-color:var(
      --tufts--button--primary-bg-color-hover,var(--dark-blue)
    );border-color:var(--dark-blue);box-shadow:none;box-shadow:var(--tufts--button--primary-ring-hover,none);color:var(--white);color:var(--tufts--button--primary-text-color-hover,var(--white))}.btn.primary:active,.btn.primary:focus{background-color:var(--dark-blue);background-color:var(
      --tufts--button--primary-bg-color-focus,var(--dark-blue)
    );border-color:var(--dark-blue);box-shadow:none;box-shadow:var(--tufts--button--primary-ring-focus,none);color:var(--white);color:var(--tufts--button--primary-text-color-focus,var(--white));font-weight:var(--fw-bold);font-weight:var(--tufts--button--primary-weight-focus,var(--fw-bold));outline:2px solid var(--dark-blue);outline-offset:2px}.btn.primary[aria-disabled=true]{background-color:var(--white);background-color:var(
    --tufts--button--primary--disabled-bg-color,var(--white)
  );border-color:var(--outline-gray-400);box-shadow:none;box-shadow:var(--tufts--button--primary--disabled-ring,none);color:var(--outline-gray-400);color:var(
    --tufts--button--primary--disabled-text-color,var(--outline-gray-400)
  );font-weight:var(--fw-bold);font-weight:var(--tufts--button--primary--disabled-weight,var(--fw-bold))}.btn.primary[aria-disabled=true]:focus{background-color:var(--white);background-color:var(
      --tufts--button--primary--disabled-bg-color-focus,var(--white)
    );box-shadow:none;box-shadow:var(--tufts--button--primary--disabled-ring-focus,none);color:var(--outline-gray-400);color:var(
      --tufts--button--primary--disabled-text-color-focus,var(--outline-gray-400)
    );font-weight:var(--fw-bold);font-weight:var(
      --tufts--button--primary--disabled-weight-focus,var(--fw-bold)
    );outline:none;outline-offset:none;outline-offset:var(
      --tufts-button--default--primary--disabled-ring-outline-offset,none
    )}.btn.primary.outlined{background-color:var(--white);color:var(--dark-green)}.btn.primary.outlined:focus,.btn.primary.outlined:hover{box-shadow:none;color:var(--dark-blue)}.btn.reversed{background-color:var(--white);background-color:var(
    --tufts--button--reversed-bg-color-default,var(--white)
  );border-radius:60px;border-radius:var(
    --tufts--button--reversed-radius,var(--tufts-btn-radius,60px)
  );box-shadow:none;box-shadow:var(--tufts--button--reversed-ring-default,none);color:var(--dark-green);color:var(--tufts--button--reversed-text-color-default,var(--dark-green));font-weight:var(--fw-bold);font-weight:var(--tufts--button--reversed-weight-default,var(--fw-bold));padding:16px 36px;padding:var(
    --tufts--button--reversed-padding,var(--tufts-btn-padding,16px 36px)
  )}.btn.reversed:hover{background-color:var(--dark-green);background-color:var(
      --tufts--button--reversed-bg-color-hover,var(--dark-green)
    );box-shadow:none;box-shadow:var(--tufts--button--reversed-ring-hover,none);color:var(--white);color:var(--tufts--button--reversed-text-color-hover,var(--white));font-weight:var(--fw-bold);font-weight:var(--tufts--button--reversed-weight-hover,var(--fw-bold))}.btn.reversed:active,.btn.reversed:focus{background-color:var(--white);background-color:var(
      --tufts--button--reversed-bg-color-focus,var(--white)
    );box-shadow:none;box-shadow:var(--tufts--button--reversed-ring-focus,none);color:var(--dark-blue);color:var(--tufts--button--reversed-text-color-focus,var(--dark-blue));font-weight:var(--fw-bold);font-weight:var(--tufts--button--reversed-weight-focus,var(--fw-bold));outline:2px solid var(--white);outline-offset:2px}.btn.reversed.outlined{background-color:initial;border:2px solid var(--white);color:var(--white)}.btn.reversed.outlined:hover{background-color:var(--white);box-shadow:2px solid var(--white);color:var(--dark-blue)}.btn.reversed.outlined:focus{background-color:var(--white);box-shadow:none;color:var(--dark-blue)}.btn.reversed[aria-disabled=true]{background-color:var(--white);background-color:var(
    --tufts--button--reversed--disabled-bg-color,var(--white)
  );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300);box-shadow:var(
    --tufts--button--reversed--disabled-ring,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300)
  );color:var(--outline-gray-400);color:var(
    --tufts--button--reversed--disabled-text-color,var(--outline-gray-400)
  );font-weight:var(--fw-bold);font-weight:var(--tufts--button--reversed--disabled-weight,var(--fw-bold))}.btn.reversed[aria-disabled=true]:active,.btn.reversed[aria-disabled=true]:focus{background-color:var(--white);background-color:var(
      --tufts--button--reversed--disabled-bg-color-focus,var(--white)
    );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300);box-shadow:var(
      --tufts--button--reversed--disabled-ring-focus,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300)
    );color:var(--outline-gray-400);color:var(
      --tufts--button--reversed--disabled-text-color-focus,var(--outline-gray-400)
    );font-weight:var(--fw-bold);font-weight:var(
      --tufts--button--reversed--disabled-weight-focus,var(--fw-bold)
    )}.btn.compact{background-color:var(--medium-blue);background-color:var(
    --tufts--button--compact-bg-color-default,var(--medium-blue)
  );border-radius:8px;box-shadow:none;box-shadow:var(--tufts--button--compact-ring-default,none);color:var(--white);color:var(--tufts--button--compact-text-color-default,var(--white));font-size:var(--fs-sm);font-weight:var(--fw-medium);font-weight:var(--tufts--button--compact-weight-default,var(--fw-medium));padding:11px 16px}.btn.compact:hover{box-shadow:none;box-shadow:var(--tufts--button--compact-ring-hover,none)}.btn.compact:active,.btn.compact:focus,.btn.compact:hover{background-color:var(--dark-blue);color:var(--white);font-weight:var(--fw-medium)}.btn.compact:active,.btn.compact:focus{box-shadow:none;box-shadow:var(--tufts--button--compact-ring-focus,none);outline:2px solid var(--dark-blue);outline-offset:2px}.btn.compact[aria-disabled=true]{background-color:var(--white);background-color:var(
    --tufts--button--compact--disabled-bg-color,var(--white)
  );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300);box-shadow:var(
    --tufts--button--compact--disabled-ring,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300)
  );color:var(--outline-gray-400);color:var(
    --tufts--button--compact--disabled-text-color,var(--outline-gray-400)
  );font-weight:var(--fw-medium);font-weight:var(--tufts--button--compact--disabled-weight,var(--fw-medium))}.btn.compact[aria-disabled=true]:focus{background-color:var(--white);background-color:var(
      --tufts--button--compact--disabled-bg-color-focus,var(--white)
    );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-400);box-shadow:var(
      --tufts--button--compact--disabled-ring-focus,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-400)
    );color:var(--outline-gray-400);color:var(
      --tufts--button--compact--disabled-text-color-focus,var(--outline-gray-400)
    );font-weight:var(--fw-medium);font-weight:var(
      --tufts--button--compact--disabled-weight-focus,var(--fw-medium)
    );outline:none}.btn.compact.reversed{background-color:var(--white);border:2px solid;color:var(--medium-blue);padding:10px 15px}.btn.compact.reversed:hover{background-color:var(--medium-blue);border-color:var(--medium-blue);color:var(--white)}.btn.compact.reversed:active,.btn.compact.reversed:hover{background-color:var(--white);border-color:var(--medium-blue);color:var(--medium-blue);outline:2px solid var(--medium-blue)}.btn.link{background-color:initial;background-color:var(--tufts--button--link-bg-color-default,transparent);border-radius:8px;box-shadow:none;box-shadow:var(--tufts--button--link-ring-default,none);color:var(--medium-blue);color:var(--tufts--button--link-text-color-default,var(--medium-blue));font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-default,var(--fw-bold));padding:5px 8px;padding:var(
    --tufts--button--link-padding,var(--tufts-btn-padding,5px 8px)
  );position:var(--tufts-button--link-position);-webkit-text-decoration:var(--tufts--button--link-decoration-default,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-default,none)}.btn.link:hover{background-color:initial;background-color:var(--tufts--button--link-bg-color-hover,transparent);border-bottom:2px solid;border-radius:0;box-shadow:none;box-shadow:var(--tufts--button--link-ring-hover,none);color:var(--dark-blue);color:var(--tufts--button--link-text-color-hover,var(--dark-blue));font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-hover,var(--fw-bold));margin-bottom:-2px;-webkit-text-decoration:var(--tufts--button--link-decoration-hover,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-hover,none)}.btn.link:active,.btn.link:focus{background-color:initial;background-color:var(--tufts--button--link-bg-color-focus,transparent);border:none;border-radius:8px;box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--medium-blue);box-shadow:var(
      --tufts--button--link-ring-focus,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--medium-blue)
    );color:var(--dark-blue);color:var(--tufts--button--link-text-color-focus,var(--dark-blue));font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-focus,var(--fw-bold));margin:initial;-webkit-text-decoration:var(--tufts--button--link-decoration-focus,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-focus,none)}.btn.link-reverse{background-color:initial;background-color:var(--tufts--button--link-bg-color-default,transparent);box-shadow:none;box-shadow:var(--tufts--button--link-ring-default,none);color:var(--white);font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-default,var(--fw-bold));padding:5px 8px;padding:var(
    --tufts--button--link-padding,var(--tufts-btn-padding,5px 8px)
  );position:var(--tufts-button--link-position);-webkit-text-decoration:var(--tufts--button--link-decoration-default,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-default,none)}.btn.link-reverse:hover{background-color:var(--outline-transparent);background-color:var(
      --tufts--button--link-bg-color-hover,var(--outline-transparent)
    );border-bottom:2px solid;border-radius:0;box-shadow:none;box-shadow:var(--tufts--button--link-ring-hover,none);color:var(--white);font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-hover,var(--fw-bold));margin-bottom:-2px;-webkit-text-decoration:var(--tufts--button--link-decoration-hover,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-hover,none)}.btn.link-reverse:active,.btn.link-reverse:focus{background-color:var(--outline-transparent);background-color:var(
      --tufts--button--link-bg-color-focus,var(--outline-transparent)
    );border:none;border-radius:60px;border-radius:var(
      --tufts--button--link-radius,var(--tufts-btn-radius,60px)
    );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--white);box-shadow:var(
      --tufts--button--link-ring-default,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--white)
    );color:var(--white);font-weight:var(--fw-bold);font-weight:var(--tufts--button--link-weight-focus,var(--fw-bold));margin:initial;-webkit-text-decoration:var(--tufts--button--link-decoration-focus,none);text-decoration:none;text-decoration:var(--tufts--button--link-decoration-focus,none)}.btn.link[aria-disabled=true]{background-color:var(--outline-transparent);background-color:var(
    --tufts--button--link--disabled-bg-color,var(--outline-transparent)
  );box-shadow:none;box-shadow:var(--tufts--button--link--disabled-ring,none);color:var(--outline-gray-500);color:var(
    --tufts--button--link--disabled-text-color,var(--outline-gray-500)
  );font-weight:var(--fw-bold);font-weight:var(--tufts--button--link--disabled-weight,var(--fw-bold));-webkit-text-decoration:var(--tufts--button--link--disabled-decoration,none);text-decoration:none;text-decoration:var(--tufts--button--link--disabled-decoration,none)}.btn.link[aria-disabled=true]:focus{background-color:initial;background-color:var(
      --tufts--button--link--disabled-bg-color-focus,transparent
    );box-shadow:var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-500);box-shadow:var(
      --tufts--button--link--disabled-ring-focus,var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-500)
    );color:var(--outline-gray-500);color:var(
      --tufts--button--link--disabled-text-color-focus,var(--outline-gray-500)
    );font-weight:var(--fw-bold);font-weight:var(
      --tufts--button--link--disabled-weight-focus,var(--fw-bold)
    );-webkit-text-decoration:none;-webkit-text-decoration:var(
      --tufts--button--link--disabled-decoration-focus,none
    );text-decoration:none;text-decoration:var(
      --tufts--button--link--disabled-decoration-focus,none
    )}.btn.link.large{padding:10px}.btn.player{background-color:var(--white);border:2px solid var(--white);border-radius:100%;color:var(--medium-blue);height:60px;justify-content:center;line-height:var(--tufts-button--player-line-height);padding:0;width:60px}.btn.player:hover{background-color:var(--medium-blue);color:var(--white)}.btn.player:active,.btn.player:focus{background-color:var(--white);color:var(--medium-blue);outline:2px solid var(--white);outline-offset:4px}.btn.player ::slotted(tufts-icon[slot=right]){margin-left:var(--spacing-1)}.btn.button-icon{background-color:var(--dark-green);border-radius:100%;color:var(--white);height:58px;justify-content:center;line-height:58px;padding:0;width:58px}.btn.button-icon:hover{background-color:var(--dark-blue)}.btn.button-icon:active,.btn.button-icon:focus{background-color:var(--dark-green);outline:2px solid var(--white);outline-offset:4px}.btn.small{font-size:var(--fs-sm);line-height:var(--lh-sm);padding:12px 24px}.btn.medium{font-size:var(--fs-p-base);line-height:var(--lh-base)}.btn.large{width:100%}.full-link-in-slot a{color:currentColor;text-decoration:none}div[cloned-slot-name=default]{align-self:center;display:flex;gap:.5rem}.arrow-right:after{margin-left:.5em;-webkit-mask-size:cover;-webkit-mask:url('data:image/svg+xml;utf8,<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.11959e-07 9.5L12.17 9.5L6.58 15.09L8 16.5L16 8.5L8 0.499999L6.59 1.91L12.17 7.5L7.86805e-07 7.5L6.11959e-07 9.5Z" fill="currentColor"/></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.11959e-07 9.5L12.17 9.5L6.58 15.09L8 16.5L16 8.5L8 0.499999L6.59 1.91L12.17 7.5L7.86805e-07 7.5L6.11959e-07 9.5Z" fill="currentColor"/></svg>') no-repeat 50% 50%;mask-size:cover}.arrow-right:after,.x-circle-fill-before:before{background-color:currentColor;content:"";height:1em;width:1em}.x-circle-fill-before:before{margin-right:.5em;-webkit-mask-size:cover;-webkit-mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg>') no-repeat 50% 50%;mask-size:cover}.chevron-right:after{margin-left:.5em;-webkit-mask-size:cover;-webkit-mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>') no-repeat 50% 50%;mask-size:cover}.chevron-left-before:before,.chevron-right:after{background-color:currentColor;content:"";height:1em;width:1em}.chevron-left-before:before{margin-right:.5em;-webkit-mask-size:cover;-webkit-mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>') no-repeat 50% 50%;mask-size:cover}.search:after{-webkit-mask-size:cover;-webkit-mask:url('data:image/svg+xml;utf8,<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6719 19.9434L15.1758 14.4473C16.3652 13.0117 17.0215 11.166 17.0215 9.15625C17.0215 4.48047 13.166 0.625 8.49023 0.625C3.77344 0.625 0 4.48047 0 9.15625C0 13.873 3.81445 17.6875 8.49023 17.6875C10.459 17.6875 12.3047 17.0312 13.7812 15.8418L19.2773 21.3379C19.4824 21.543 19.7285 21.625 20.0156 21.625C20.2617 21.625 20.5078 21.543 20.6719 21.3379C21.082 20.9688 21.082 20.3535 20.6719 19.9434ZM1.96875 9.15625C1.96875 5.54688 4.88086 2.59375 8.53125 2.59375C12.1406 2.59375 15.0938 5.54688 15.0938 9.15625C15.0938 12.8066 12.1406 15.7188 8.53125 15.7188C4.88086 15.7188 1.96875 12.8066 1.96875 9.15625Z" fill="currentColor"/></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6719 19.9434L15.1758 14.4473C16.3652 13.0117 17.0215 11.166 17.0215 9.15625C17.0215 4.48047 13.166 0.625 8.49023 0.625C3.77344 0.625 0 4.48047 0 9.15625C0 13.873 3.81445 17.6875 8.49023 17.6875C10.459 17.6875 12.3047 17.0312 13.7812 15.8418L19.2773 21.3379C19.4824 21.543 19.7285 21.625 20.0156 21.625C20.2617 21.625 20.5078 21.543 20.6719 21.3379C21.082 20.9688 21.082 20.3535 20.6719 19.9434ZM1.96875 9.15625C1.96875 5.54688 4.88086 2.59375 8.53125 2.59375C12.1406 2.59375 15.0938 5.54688 15.0938 9.15625C15.0938 12.8066 12.1406 15.7188 8.53125 15.7188C4.88086 15.7188 1.96875 12.8066 1.96875 9.15625Z" fill="currentColor"/></svg>') no-repeat 50% 50%;mask-size:cover}.player-stroked:after,.search:after{background-color:currentColor;content:"";height:1.5rem;width:1.5rem}.player-stroked:after{margin-left:.3em;-webkit-mask-size:auto;-webkit-mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 12.4999L1.90735e-06 0.808593L8.85259e-07 24.1913L18 12.4999ZM14.3283 12.4999L2 4.49248L2 20.5074L14.3283 12.4999Z" fill="currentColor"></path></svg>') no-repeat 50% 50%;mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 12.4999L1.90735e-06 0.808593L8.85259e-07 24.1913L18 12.4999ZM14.3283 12.4999L2 4.49248L2 20.5074L14.3283 12.4999Z" fill="currentColor"></path></svg>') no-repeat 50% 50%;mask-size:auto}`;let je=class extends ht{constructor(){super(...arguments),this.ngSlot=new Pt(this),this.iconType="arrow-right",this.buttonVariant="primary",this.buttonSize="medium",this.isDisabled=!1}isURLExternal(t){return new URL(t,window.location.href).hostname!==window.location.hostname}buttonRelRender(){return this.isURLExternal(this.buttonUrl)?"noreferrer noopener":void 0}buttonTargetRender(){return this.buttonTarget?this.buttonTarget:this.isURLExternal(this.buttonUrl)?"_blank":void 0}firstUpdated(){this.hasLeftIcon=this.ngSlot.exist("left"),this.hasRightIcon=this.ngSlot.exist("right")}buttonTemplate(){return this.buttonUrl?E` <a
          class="btn ${this.buttonVariant} ${this.buttonSize} ${this.iconType}"
          href=${this.buttonUrl}
          target="${pt(this.buttonTargetRender())}"
          rel="${pt(this.buttonRelRender())}"
          aria-label="${pt(this.buttonLabel)}"
          aria-disabled="${pt(this.isDisabled)}"
        >
          ${this.iconTemplate(this.hasLeftIcon,"left")}
          ${this.ngSlot.renderInShadow()}
          ${this.iconTemplate(this.hasRightIcon,"right")}
        </a>`:E`<button
          class="btn ${this.buttonVariant} ${this.buttonSize} ${this.iconType}"
          aria-label="${pt(this.buttonLabel)}"
          aria-disabled="${pt(this.isDisabled)}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          ${this.iconTemplate(this.hasLeftIcon,"left")}
          ${this.ngSlot.renderInShadow()}
          ${this.iconTemplate(this.hasRightIcon,"right")}
        </button> `}linkInSlotTemplate(){const t=this.querySelector("a");if(t){const e=[...this.buttonVariant.split(" "),"btn",this.buttonSize,this.iconType].filter((t=>""!==t));return t.classList.add(...e),E`
        ${this.iconTemplate(this.hasLeftIcon,"left")}
        ${this.ngSlot.renderInShadow()}
        ${this.iconTemplate(this.hasRightIcon,"right")}
      `}return E`<div
        class="btn ${this.buttonVariant} ${this.buttonSize} ${this.iconType}"
        aria-disabled="true"
      >
        ${this.ngSlot.renderInShadow()}
      </div>`}render(){return this.buttonLabel?this.buttonTemplate():this.linkInSlotTemplate()}iconTemplate(t,e){return t?E`${this.ngSlot.renderInShadow(e)}`:null}};je.styles=[Be],t([at({type:String,attribute:"icon-type"})],je.prototype,"iconType",void 0),t([at({type:String,attribute:"button-url"})],je.prototype,"buttonUrl",void 0),t([at({type:String,attribute:"button-label"})],je.prototype,"buttonLabel",void 0),t([at({type:String,attribute:"button-target"})],je.prototype,"buttonTarget",void 0),t([at({type:String,attribute:"button-variant",reflect:!0})],je.prototype,"buttonVariant",void 0),t([at({type:String,attribute:"button-size"})],je.prototype,"buttonSize",void 0),t([at({type:Boolean,attribute:"is-disabled"})],je.prototype,"isDisabled",void 0),t([at()],je.prototype,"onClick",void 0),t([at()],je.prototype,"onKeyUp",void 0),je=t([ot("tufts-button")],je);let He=class extends ht{constructor(){super(...arguments),this.ngSlot=new Pt(this),this.menuId="main",this.menuName="Main Navigation",this.menuLang="",this.menuType="menu",this.hamburgerMenuName="main menu",this.isMobile=!1,this.searchLabel="Search",this.searchURL="search",this.searchDropdownStatus=!1,this.requestsBufferMap=new Map,this.extraMenuOpen=!1,this.translateMenuOpen=!1}connectedCallback(){super.connectedCallback(),this.browserInfo=this.checkBrowser()}firstUpdated(){}checkBrowser(){const t=navigator.userAgent;let e,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE",version:e[1]||""}):"Chrome"===i[1]&&(e=t.match(/\bOPR|Edge\/(\d+)/),null!=e)?{name:"Opera",version:e[1]}:(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+\.\d+)/i))&&i.splice(1,1,e[1]),{name:i[0],version:parseFloat(i[1])})}setBodyPadding(){var t,e;const i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".sticky-header"))||void 0===e?void 0:e.clientHeight;i&&document.querySelector("body").style.setProperty("--sticky-header-height",i+"px")}processRequests(t,e){"mobile"===e?this.requestsBufferMap.set(t,!0):this.requestsBufferMap.has(t)&&this.requestsBufferMap.delete(t),this.isMobile=this.requestsBufferMap.size>0,this.setBodyPadding()}_menuModeListener(t){this.processRequests(t.detail.menuId,t.detail.mode)}_trapKeyboardMobileMenu(t){var e,i,n;if("Tab"===t.key&&!t.shiftKey){if(!(null===(n=null===(i=null===(e=document.activeElement)||void 0===e?void 0:e.shadowRoot)||void 0===i?void 0:i.activeElement)||void 0===n?void 0:n.matches("button.menu-dropdown")))return;const o=this.shadowRoot.querySelector("tufts-menu").shadowRoot.querySelectorAll("a[href], button");if(!o)return;t.preventDefault();o[0].focus()}}_trapKeyboardMobileSearch(t){var e,i,n,o,r,a;if("Tab"!==t.key)return;const s=this.shadowRoot.querySelector(".open-search-button"),l=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#search-wrapper"))||void 0===i?void 0:i.querySelectorAll("a[href], button, input");if(l){const e=l[0],i=l[l.length-1];(null===(o=null===(n=document.activeElement)||void 0===n?void 0:n.shadowRoot)||void 0===o?void 0:o.activeElement)===s?(t.preventDefault(),e.focus()):(null===(a=null===(r=document.activeElement)||void 0===r?void 0:r.shadowRoot)||void 0===a?void 0:a.activeElement)===i&&(t.preventDefault(),s.focus())}}render(){var t,e;return E`
      ${"Safari"===(null===(t=this.browserInfo)||void 0===t?void 0:t.name)&&(null===(e=this.browserInfo)||void 0===e?void 0:e.version)<15.5?E`<div class="outdated-browser-banner">
            <tufts-icon
              library="material"
              name="error"
              size="1.5rem"
            ></tufts-icon>
            ${this.warningText}
          </div>`:null}

      <header
        @menuMode=${this._menuModeListener}
        class=${xt({mobile:this.isMobile})}
      >
        <div class="tufts-main-header">
          ${this.isMobile?this.mobileTemplate():this.desktopTemplate()}
        </div>
        ${this.isMobile?this.stickyMobileTemplate():""}
      </header>
    `}toggleHamburgerMenu(){this.hamburgerMenuOpen=!this.hamburgerMenuOpen,this.hamburgerMenuOpen?(this.searchDropdownStatus=!1,document.querySelector("body").style.overflow="hidden",this._trapKeyboardMobileMenu=this._trapKeyboardMobileMenu.bind(this),document.addEventListener("keydown",this._trapKeyboardMobileMenu)):(document.querySelector("body").style.overflow="revert",document.removeEventListener("keydown",this._trapKeyboardMobileMenu))}topMobileTemplate(){return E` ${this.logoTemplate()} ${this.loginTemplate()}`}loginTemplate(){return E`
      <a class="mobile-login" href="/user">
        <tufts-icon name="login" size="1.5rem" library="system"></tufts-icon>
        Login
      </a>
    `}mobileMenuTriggerTemplate(){return E` <button
      class="menu-dropdown"
      @click="${this.toggleHamburgerMenu}"
      aria-label="Main Menu"
      aria-expanded="${this.hamburgerMenuOpen}"
      aria-controls="sliding-header"
    >
      <tufts-icon
        name="${this.hamburgerMenuOpen?"close-mobile":"duo-menu"}"
        size="1.25rem"
        library="system"
      ></tufts-icon>
      <span class="sticky-mobile-item menu-label"
        >${this.hamburgerMenuOpen?"Close":"Menu"}
      </span>
    </button>`}mobileSearchTriggerTemplate(){return E` <button
      type="button"
      class="open-search-button"
      aria-expanded="${this.searchDropdownStatus}"
      aria-controls="#search-wrapper"
      @click="${this.toggleMobileSearchDropdown}"
    >
      <tufts-icon
        name="${this.searchDropdownStatus?"close-mobile":"duo-search"}"
        size="1.25rem"
        library="system"
      ></tufts-icon>
      <span class="sticky-mobile-item search-label"
        >${this.searchDropdownStatus?"Close":this.searchLabel}
      </span>
    </button>`}stickyMobileTemplate(){return E` <div class="sticky-header">
      ${this.mobileMenuTriggerTemplate()}
      <a class="sticky-mobile-item locations-menu" href="/care/locations">
        <tufts-icon
          name="locations"
          size="1.25em"
          library="system"
        ></tufts-icon>
        Locations
      </a>
      <a class="sticky-mobile-item doctors-menu" href="/find-a-doctor">
        <tufts-icon name="doctors" size="1.25em" library="system"></tufts-icon>
        Doctors
      </a>
      ${this.mobileSearchTriggerTemplate()}
    </div>`}mobileTemplate(){return E`
      <tufts-container padding="space-0" background-color="white">
        <div class="top-header">${this.topMobileTemplate()}</div>
      </tufts-container>
      <div
        id="sliding-header"
        class="sliding-header ${this.hamburgerMenuOpen?"is-active":""}"
      >
        <tufts-container padding="space-0" background-color="white">
          <div class="top-header">${this.topMobileTemplate()}</div>
        </tufts-container>
        <div class="hamburger-dropdown">
          <tufts-container padding="space-m" background-color="transparent">
            ${this.mainMenuTemplate()}
            <hr class="horizontal-divider" />
            ${this.utilityMenuTemplate()}
          </tufts-container>
        </div>
      </div>
      <div
        id="sliding-search"
        class="sliding-search ${this.searchDropdownStatus?"is-active":""}"
      >
        <tufts-container padding="space-0" background-color="white">
          <div class="top-header">${this.topMobileTemplate()}</div>
        </tufts-container>
        <div class="search-dropdown">
          <tufts-container padding="space-m" background-color="transparent">
            <div id="search-wrapper" class="search-wrapper">
              ${this.searchFormTemplate()} ${this.searchFormSuggestionLinks()}
            </div>
          </tufts-container>
        </div>
      </div>
    `}desktopTemplate(){return E`
      <tufts-container
        background-color="blue_dark"
        container-width="wide"
        padding="space-3xs-2xs"
      >
        ${this.utilityMenuTemplate()}
      </tufts-container>

      <tufts-container
        background-color="${this.extraMenuOpen?"blue_dark":"white"}"
      >
        <div class="header-wrapper">
          ${this.logoTemplate()}
          <div class="main-menu-wrapper">
            ${this.mainMenuTemplate()} ${this.searchDropdownDesktopTemplate()}
            ${this.menuToggleTemplate()}
          </div>
        </div>
        <div
          id="extra-menu"
          class="extra-menu extra-menu--${this.extraMenuOpen?"open":"close"}"
        >
          <div class="feature-links-menu-wrapper">
            ${this.featureLinksMenuTemplate()}
          </div>
          <div class="header-menu-wrapper">${this.headerMenuTemplate()}</div>
        </div>
      </tufts-container>
    `}logoTemplate(){return E` <a href="/" title="Home" class="logo">
      ${Ct('\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 32" width="251" height="32" fill="none">\n  <path fill="currentColor" d="M.91.22h27.2V8.9h-4.3V5.2h-5.78v21.89h4.67v4.38H6.26V27.1h4.67V5.2H5.27v7.15H.9V.22ZM36.7 10.28v4.13h3.33v10.76l-.2.15c-1.46 1.12-2.85 1.69-4.12 1.69-1 0-1.74-.27-2.16-.8-.42-.53-.61-1.35-.61-2.6V10.28h-9.14v4.13h3.25v11.03c0 2.04.55 3.63 1.63 4.73 1.08 1.1 2.61 1.65 4.56 1.65a10.4 10.4 0 0 0 6.02-2.11l.77-.55v2.34h8.33v-4.1h-2.41V10.27h-9.25Zm17.79-8.09a7.99 7.99 0 0 0-1.98 5.53v2.55h-2.9v4.13h2.9v12.98h-2.91v4.11h12.24v-4.1h-3.4V14.4h3.4v-4.13h-3.4V7.33c0-2.97 1.25-3.6 2.29-3.6.92 0 1.65.7 2.16 2.07l4.06-3.26C65.55.87 63.37 0 60.4 0c-2.63 0-4.63.74-5.91 2.2h-.02Zm15.45 1.3-4.1 3.04v3.74h-2.76v4.13h2.75v12.14c0 3.6 1.65 5.29 5.19 5.29a12.78 12.78 0 0 0 4.71-.98v-3.9a6.14 6.14 0 0 1-1.69.3c-.95 0-1.56-.22-1.89-.66-.32-.44-.42-1.05-.42-2.06V14.42h3.98v-4.13h-3.97V2.17L69.9 3.51l.02-.02Zm8.2 7.86a5.57 5.57 0 0 0-1.54 1.96 5.73 5.73 0 0 0-.54 2.46 5.47 5.47 0 0 0 .56 2.52 5.3 5.3 0 0 0 1.64 1.95c1.5 1.15 4 2.02 7.45 2.6 1.74.3 2.9.61 3.51.96.31.14.57.36.75.65.19.3.28.63.28.97 0 .38-.1.74-.3 1.06a2.06 2.06 0 0 1-.77.75 5.2 5.2 0 0 1-2.81.65 5.98 5.98 0 0 1-3.5-.97 3.31 3.31 0 0 1-1-1.05 3.4 3.4 0 0 1-.48-1.4h-4.5v7.04h4.45v-1.6l.52.59c.89 1 2.6 1.51 5.07 1.51 2.68 0 4.77-.67 6.22-2a6.56 6.56 0 0 0 1.64-2.3 6.72 6.72 0 0 0 .53-2.81 6.26 6.26 0 0 0-1.14-3.76 6.34 6.34 0 0 0-3.04-2.25 39.48 39.48 0 0 0-5.94-1.4 14.05 14.05 0 0 1-3.23-.83 1.34 1.34 0 0 1-.57-.5 1.39 1.39 0 0 1-.2-.75c0-1.33 1.1-2.01 3.29-2.01 2.7 0 4.36.78 4.93 2.32h4.45V9.87h-4.34v.92l-.42-.18a13.4 13.4 0 0 0-5.35-1.06c-2.33 0-4.22.62-5.62 1.82v-.02Zm35.6 20.14 9.69-26.77v26.75h3.18V.22h-4.81L113 24.96 104.22.22H99.4v31.25h3.19V4.7l9.68 26.77 1.46.02ZM139.3 9.75c4.8 0 9.34 2.98 9.34 10.63v1.1h-15.66c.15 4.87 2.42 7.56 6.67 7.56 3.22 0 5.1-1.22 5.53-3.72h3.3c-.72 4.3-4.18 6.54-8.87 6.54-5.88 0-10.05-4.25-10.05-10.85v-.33c0-6.45 4.01-10.95 9.74-10.95v.02Zm5.96 8.97c-.32-4.41-2.53-6.17-5.96-6.17s-5.65 2.37-6.22 6.17h12.18ZM167.89.22h3.32v31.25h-3.33v-3.7a8.72 8.72 0 0 1-7.11 4.05c-5.45 0-9.39-3.96-9.39-10.62v-.33c0-6.54 3.98-11.16 9.72-11.16 3.45 0 5.6 1.74 6.8 3.8L167.87.23Zm.11 20.4c0-5.48-2.53-8.05-6.6-8.05-4.13 0-6.6 2.98-6.6 8.17v.33c0 5.4 2.83 7.97 6.34 7.97 3.85 0 6.87-2.6 6.87-8.1v-.32Zm7.22 10.85h3.3v-21.2h-3.3v21.2Zm1.65-28.46c.43 0 .85.14 1.22.38.35.25.63.6.8 1.01a2.3 2.3 0 0 1-.48 2.45 2.17 2.17 0 0 1-1.12.62c-.43.08-.87.04-1.27-.13a2.2 2.2 0 0 1-.98-.83 2.29 2.29 0 0 1-.36-1.25 2.3 2.3 0 0 1 .65-1.59c.4-.42.96-.66 1.54-.66Zm15.03 26c-4.01 0-6.8-2.77-6.8-8v-.33c0-5.03 2.9-8.13 6.68-8.13 2.87 0 5.25 1.27 5.77 4.66h3.26c-.64-5.44-4.7-7.48-9.03-7.48-5.57 0-10.1 4.41-10.1 10.95v.33c0 6.62 4.37 10.85 10.17 10.85 5.01 0 8.63-3.43 9.07-8.05h-3.06c-.36 3.47-3.02 5.2-5.97 5.2h.01Zm13.84-26c-.43 0-.86.13-1.22.38s-.64.6-.8 1a2.31 2.31 0 0 0-.13 1.3c.09.44.3.84.6 1.16a2.16 2.16 0 0 0 2.38.49c.4-.17.75-.46.99-.83.24-.37.36-.8.36-1.25a2.3 2.3 0 0 0-.64-1.58 2.18 2.18 0 0 0-1.54-.67Zm-1.65 7.27h3.31v21.2h-3.3v-21.2Zm17.3-.55c-3.42 0-5.73 1.74-6.68 3.76v-3.21h-3.3v21.2h3.3V18.51c0-3.84 2.74-5.85 5.8-5.85 3.34 0 4.9 1.68 4.9 5.44v13.36h3.29V18.36c0-6.22-3.02-8.63-7.31-8.63Zm29.35 11.72h-15.66c.16 4.86 2.42 7.56 6.68 7.56 3.22 0 5.06-1.22 5.52-3.72h3.3c-.71 4.3-4.17 6.54-8.87 6.54-5.88 0-10.06-4.25-10.06-10.85v-.33c0-6.45 4.02-10.95 9.74-10.95 4.82 0 9.35 2.98 9.35 10.63v1.12Zm-3.38-2.74c-.32-4.41-2.53-6.17-5.96-6.17-3.44 0-5.65 2.37-6.2 6.17h12.16Z"/>\n</svg>\n')}
    </a>`}mainMenuTemplate(){return E`
      <tufts-menu
        mobile=${pt(this.isMobile?"true":void 0)}"
        debug-menu="${pt(this.debugMenu)}"
        menu-id="main"
        depth="2"
        menu-name="${this.menuName}"
        menu-label="${this.mainMenuLabel}"
        menu-lang="${this.currentLanguage}"
        menu-heading-size="xs"
        mobile-trigger="true"
        color-mode="light"
        justify="right"
        top-menu-no-link
      ></tufts-menu>
    `}utilityMenuTemplate(){return E`
      <tufts-menu
        mobile=${pt(this.isMobile?"true":void 0)}"
        debug-menu="${pt(this.debugMenu)}"
        menu-id="header-utility"
        menu-name="utility"
        menu-label="Utility"
        mobile-trigger="true"
        color-mode="dark"
        justify="right"
      ></tufts-menu>
    `}toggleExtraMenu(){this.extraMenuOpen=!this.extraMenuOpen}menuToggleTemplate(){return E`
      <button
        class="extra-menu-toggle"
        @click="${this.toggleExtraMenu}"
        aria-expanded="${this.extraMenuOpen}"
        aria-controls="extra-menu"
      >
        ${this.extraMenuOpen?"Close ":"Menu "}
        <span class="extra-menu-toggle--icon">
          <tufts-icon
            name="${this.extraMenuOpen?"close":"hamburger-menu"}"
            library="system"
            size="1.5rem"
          >
          </tufts-icon>
        </span>
      </button>
    `}featureLinksMenuTemplate(){return E`
      <tufts-menu
        mobile=${pt(this.isMobile?"true":void 0)}"
        debug-menu="${pt(this.debugMenu)}"
        menu-id="feature-links"
        menu-name="feature-links"
        menu-label="Feature Links"
        menu-heading-size="xs"
        color-mode="dark"
      ></tufts-menu>
    `}headerMenuTemplate(){return E`
      <tufts-menu
        mobile=${pt(this.isMobile?"true":void 0)}"
        debug-menu="${pt(this.debugMenu)}"
        menu-id="header-menu"
        menu-name="header-menu"
        menu-label="Header menu"
        menu-heading-size="xs"
        color-mode="dark"
      ></tufts-menu>
    `}openTranslateMenu(){this.translateMenuOpen=!0}closeTranslateMenu(){this.translateMenuOpen=!1}toggleTranslateMenu(t){"Enter"===t.key&&(this.translateMenuOpen=!this.translateMenuOpen),"Escape"===t.key&&(this.translateMenuOpen=!1)}translateMenuTemplate(){return E`
      <div
        class="translate-menu-button-container"
        @mouseenter="${this.openTranslateMenu}"
        @mouseleave="${this.closeTranslateMenu}"
        @keydown="${this.toggleTranslateMenu}"
      >
        <button
          class="no-title dropdown-button"
          type="button"
          aria-expanded="${this.translateMenuOpen}"
          aria-haspopup="true"
          tabindex="0"
        >
          ${this.translateLabel}
          <span class="dropdown-icon">
            <tufts-icon
              name="chevron-down"
              library="system"
              size="1rem"
            ></tufts-icon>
          </span>
        </button>
        <div class="translate-menu">
          <ul>
            <li><a href="${this.enURL}">${this.enLabel}</a></li>
            <li><a href="${this.esURL}">${this.esLabel}</a></li>
          </ul>
          <div class="google-translate">
            ${this.ngSlot.renderInShadow("translate")}
            <div class="google-watermark">
              Powered by
              <tufts-icon
                library="system"
                name="google-logo"
                size-width="3rem"
              ></tufts-icon>
            </div>
          </div>
        </div>
      </div>
    `}searchFormTemplate(){return E`
      <form action="/search" method="get" accept-charset="UTF-8">
        <label for="search-input" class="visually-hidden"
          >${this.searchPlaceholder}</label
        >
        <div class="input-wrapper">
          <input
            type="search"
            placeholder="${this.isMobile?"":"Search by keyword or phrase"}"
            id="search-input"
            name="text"
            value=""
            size="30"
            maxlength="128"
          />

          <button type="submit" value="Search">
            <tufts-icon
              name="magnifying-glass"
              size="1.5rem"
              library="system"
            ></tufts-icon>
            <span class="visually-hidden">${this.searchLabel}</span>
          </button>
        </div>
      </form>
    `}mobileSearchTemplate(){return E`
      <tufts-container padding="space-0" background-color="white">
        <div class="top-header">${this.topMobileTemplate()}</div>
      </tufts-container>
      <div
        id="sliding-search"
        class="sliding-search ${this.hamburgerMenuOpen?"is-active":""}"
      >
        <tufts-container padding="space-0" background-color="white">
          <div class="top-header">${this.topMobileTemplate()}</div>
        </tufts-container>
        <div class="hamburger-dropdown">
          <tufts-container padding="space-m" background-color="transparent">
            ${this.mainMenuTemplate()}
            <hr class="horizontal-divider" />
            ${this.utilityMenuTemplate()}
          </tufts-container>
        </div>
      </div>
    `}suggestionLinksTemplate(t){return E`
      <li>
        <a
          class="suggestion-link"
          href="/search?text=${encodeURIComponent(t)}"
        >
          <tufts-icon
            library="system"
            name="search-suggestion"
            size="1.5rem"
          ></tufts-icon>
          ${t}
        </a>
      </li>
    `}searchFormSuggestionLinks(){return E`
      <div class="search-suggestions">
        <ul>
          <li>
            <span class="suggestion-group-label"> Common searches </span>
          </li>
          ${this.suggestionLinksTemplate("Medical records")}
          ${this.suggestionLinksTemplate("COVID-19 testing")}
          ${this.suggestionLinksTemplate("COVID-19 vaccines")}
          ${this.suggestionLinksTemplate("Clinical trials")}
        </ul>
        <ul>
          <li>
            <span class="suggestion-group-label"> Popular Services </span>
          </li>
          ${this.suggestionLinksTemplate("Primary care")}
          ${this.suggestionLinksTemplate("Dermatology")}
          ${this.suggestionLinksTemplate("Cardiology")}
          ${this.suggestionLinksTemplate("Urgent Care")}
        </ul>
      </div>
    `}searchDropdownDesktopTemplate(){return E`
      ${this.searchDropdownTriggerTemplate()}
      <div id="search-wrapper" class="search-wrapper">
        ${this.searchFormTemplate()} ${this.searchFormSuggestionLinks()}
      </div>
    `}searchDropdownMobileTemplate(){return E` ${this.searchDropdownTriggerTemplate()} `}toggleMobileSearchDropdown(){this.searchDropdownStatus=!this.searchDropdownStatus,this.searchDropdownStatus?(this.hamburgerMenuOpen=!1,document.querySelector("body").style.overflow="hidden",this._trapKeyboardMobileSearch=this._trapKeyboardMobileSearch.bind(this),document.addEventListener("keydown",this._trapKeyboardMobileSearch)):(document.querySelector("body").style.overflow="revert",document.removeEventListener("keydown",this._trapKeyboardMobileSearch))}toggleDesktopSearchDropdown(){var t,e,i;this.searchDropdownStatus=!this.searchDropdownStatus;const n=null===(i=null===(e=null===(t=document.activeElement)||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.activeElement)||void 0===i?void 0:i.nextElementSibling,o=null==n?void 0:n.querySelectorAll("input, a[href], button");if(o){const t=o[o.length-1];this.searchDropdownStatus?(this.closeBlurSearch=this.closeBlurSearch.bind(this),t.addEventListener("blur",this.closeBlurSearch)):t.removeEventListener("blur",this.closeBlurSearch)}}closeBlurSearch(t){var e;const i=t.target;i.removeEventListener("blur",this.closeBlurSearch);const n=null===(e=i.closest("#search-wrapper"))||void 0===e?void 0:e.previousElementSibling;null==n||n.setAttribute("aria-expanded","false"),this.searchDropdownStatus=!1}searchDropdownTriggerTemplate(){const t=this.searchDropdownStatus?"close":"magnifying-glass";return E`
      <button
        type="button"
        class="open-search-button"
        aria-expanded="${this.searchDropdownStatus}"
        aria-controls="#search-wrapper"
        @click="${this.toggleDesktopSearchDropdown}"
      >
        <tufts-icon
          name="${this.isMobile?"duo-search":t}"
          size="${this.isMobile?"1.25rem":"1.5rem"}"
          library="system"
        ></tufts-icon>
        <span class="search-label ${this.isMobile?null:"visually-hidden"}"
          >${this.searchLabel}</span
        >
      </button>
    `}searchDialogTemplate(){return E`
      <button
        class="open-search-button"
        data-dialog-id="search"
        @click="${this.openDialog}"
      >
        <tufts-icon
          name="${this.isMobile?"duo-search":"magnifying-glass"}"
          size="${this.isMobile?"1.25rem":"1.5rem"}"
          library="system"
        ></tufts-icon>
        <span class="search-label ${this.isMobile?null:"visually-hidden"}"
          >${this.searchLabel}</span
        >
      </button>
      <dialog id="search">
        <button
          class="close-search-button"
          type="button"
          @click="${this.closeDialog}"
        >
          <tufts-icon name="close" library="system" size="1.5rem"></tufts-icon>
        </button>

        <form method="dialog">${this.searchFormTemplate()}</form>
      </dialog>
    `}openDialog(t){var e;const i=t.currentTarget,n=i.nextElementSibling;(null===(e=i.parentElement)||void 0===e?void 0:e.querySelector("#search-input")).value="",async function(t){t.addEventListener("click",Ve),t.addEventListener("close",Te),t.addEventListener("keydown",(function(e){"Escape"===e.key&&t.close("cancel")})),ze.observe(t,{attributes:!0}),Ze.observe(document.body,{attributes:!1,subtree:!1,childList:!0}),await Ae(t),t.removeAttribute("loading")}(n),n.showModal()}closeDialog(t){t.currentTarget.closest("dialog").close("cancel")}};He.styles=[ke],t([function(t,e){return lt({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}(".mobile-menu-container")],He.prototype,"mobileMenu",void 0),t([at({type:Boolean,reflect:!0,attribute:"debug-menu"})],He.prototype,"debugMenu",void 0),t([at({type:String,reflect:!0,attribute:"menu-id"})],He.prototype,"menuId",void 0),t([at({type:String,reflect:!0,attribute:"menu-name"})],He.prototype,"menuName",void 0),t([at({type:String,reflect:!0,attribute:"menu-lang"})],He.prototype,"menuLang",void 0),t([at({type:String,reflect:!0,attribute:"menu-type"})],He.prototype,"menuType",void 0),t([at({type:Boolean,reflect:!0,attribute:"hamburger-menu-open"})],He.prototype,"hamburgerMenuOpen",void 0),t([at({type:String,reflect:!0,attribute:"hamburger-menu-name"})],He.prototype,"hamburgerMenuName",void 0),t([at({type:Boolean,reflect:!0,attribute:"mobile-mode"})],He.prototype,"isMobile",void 0),t([at({type:String,reflect:!0,attribute:"group-name-label"})],He.prototype,"groupNameLabel",void 0),t([at({type:String,reflect:!0,attribute:"group-menu-id"})],He.prototype,"groupMenuId",void 0),t([at({type:String,reflect:!0,attribute:"no-group-label"})],He.prototype,"noGroupLabel",void 0),t([at({type:String,reflect:!0,attribute:"zipcode-label"})],He.prototype,"zipcodeLabel",void 0),t([at({type:String,reflect:!0,attribute:"find-button-label"})],He.prototype,"findButtonLabel",void 0),t([at({type:String,reflect:!0,attribute:"current-language"})],He.prototype,"currentLanguage",void 0),t([at({type:String,reflect:!0,attribute:"translate-label"})],He.prototype,"translateLabel",void 0),t([at({type:String,reflect:!0,attribute:"en-url"})],He.prototype,"enURL",void 0),t([at({type:String,reflect:!0,attribute:"es-url"})],He.prototype,"esURL",void 0),t([at({type:String,reflect:!0,attribute:"main-menu-label"})],He.prototype,"mainMenuLabel",void 0),t([at({type:String,reflect:!0,attribute:"utility-menu-label"})],He.prototype,"utilityMenuLabel",void 0),t([at({type:String,reflect:!0,attribute:"account-menu-1-label"})],He.prototype,"accountMenu1Label",void 0),t([at({type:String,reflect:!0,attribute:"account-menu-1-url"})],He.prototype,"accountMenu1URL",void 0),t([at({type:String,reflect:!0,attribute:"account-menu-2-label"})],He.prototype,"accountMenu2Label",void 0),t([at({type:String,reflect:!0,attribute:"account-menu-2-url"})],He.prototype,"accountMenu2URL",void 0),t([at({type:String,reflect:!0,attribute:"donate-url"})],He.prototype,"donateURL",void 0),t([at({type:String,reflect:!0,attribute:"donate-label"})],He.prototype,"donateLabel",void 0),t([at({type:String,reflect:!0,attribute:"en-label"})],He.prototype,"enLabel",void 0),t([at({type:String,reflect:!0,attribute:"es-label"})],He.prototype,"esLabel",void 0),t([at({type:String,reflect:!0,attribute:"search-label"})],He.prototype,"searchLabel",void 0),t([at({type:String,reflect:!0,attribute:"search-url"})],He.prototype,"searchURL",void 0),t([at({type:String,reflect:!0,attribute:"search-placeholder"})],He.prototype,"searchPlaceholder",void 0),t([at({type:String,reflect:!0,attribute:"menu-label"})],He.prototype,"menuLabel",void 0),t([at({type:String,reflect:!0,attribute:"group-menu-label"})],He.prototype,"groupMenuLabel",void 0),t([at({type:String,reflect:!0,attribute:"chapter-url"})],He.prototype,"chapterUrl",void 0),t([at({type:String,reflect:!0,attribute:"warning-text"})],He.prototype,"warningText",void 0),t([at({type:Object})],He.prototype,"browserInfo",void 0),t([st()],He.prototype,"searchDropdownStatus",void 0),t([st()],He.prototype,"extraMenuOpen",void 0),t([st()],He.prototype,"translateMenuOpen",void 0),He=t([ot("tufts-header")],He);var Oe=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
.social-links-container{flex-wrap:wrap}.icons-container,.social-links-container{align-items:center;color:var(--black-600);display:flex}.text-container{align-items:center;display:flex;white-space:nowrap}.icon-container{align-items:center;display:flex;gap:.5rem}.icon-text{font-family:var(--ff-display);font-size:20px;font-weight:600}ul{align-items:center;display:flex;flex-wrap:wrap;gap:.25rem;list-style-type:none;margin:0;padding:0}ul.md{gap:1.25rem}ul.lg{gap:2rem}a{color:var(--black-600);text-decoration:none;white-space:nowrap}[cloned-slot-name=text]{font-weight:600}.separator{-webkit-margin-start:.5rem;background-color:var(--black-600);border:none;height:1px;margin:0;margin-inline-start:.5rem;width:32px}.separator.white{background-color:var(--white)}.white{color:var(--white)}.white .icon-container{color:var(--brand-primary)}.header-container{-webkit-margin-after:2rem;color:var(--brand-background-hover);font-weight:600;margin-block-end:2rem}:host([content-align=center]) .social-links-container{justify-content:center}`;let Ee=class extends ht{constructor(){super(...arguments),this.ngSlot=new Pt(this),this.linkSize="2rem"}connectedCallback(){super.connectedCallback(),this.hasText=this.ngSlot.exist("text")}renderIcon(t,e,i,n="system"){if(i=i||null,t){if("globe"===e)return E`<li>
          <a
            href="${t}"
            target="_blank"
            aria-label="${this.ariaLabelText} ${i} ${this.targetAriaLabel}"
            class="icon-container ${this.footerNoTracker?"":"social-share-icons"}"
          >
            <tufts-icon
              library=${n}
              name=${e}
              size=${this.linkSize}
            ></tufts-icon>
            ${i?E`<span class="icon-text">${i}</span>`:null}
            ${i?this.indicatorIconTemplate():null}
          </a>
        </li>`;const o=e.replace(/^fa[rbs]-/,"");return E`<li>
        <a
          href="${t}"
          target="_blank"
          aria-label="${this.ariaLabelText} ${"envelope"===o?"email":o} ${this.targetAriaLabel}"
          class="icon-container ${this.footerNoTracker?"":"social-share-icons"}"
        >
          <tufts-icon
            library=${n}
            name=${e}
            size=${this.linkSize}
          ></tufts-icon>
          ${i?E`<span class="icon-text">${i}</span>`:null}
          ${i?this.indicatorIconTemplate():null}
        </a>
      </li>`}}render(){const t={"social-links-container":!0,"has-separator":this.hasSeparator,white:this.whiteIcons},e={"icons-container":!0,white:this.whiteIcons};return E`
      ${this.headerTemplate()}
      <div class="${xt(t)}">
        ${this.textTemplate()}
        <div class="${xt(e)}">
          <ul class="${this.increasedGap}">
            ${this.shareUrl?E`${this.renderIcon("https://www.facebook.com/sharer/sharer.php?u="+this.shareUrl,"fab-facebook")}
                ${this.renderIcon("https://twitter.com/intent/tweet?url="+this.shareUrl,"fab-twitter")}
                ${this.renderIcon("https://www.linkedin.com/shareArticle?mini=true&url="+this.shareUrl,"fab-linkedin")}
                ${this.mailTo?this.renderIcon("mailto:"+this.mailTo,"fas-envelope"):null}`:E`
                  ${this.renderIcon(this.fbLink,"fab-facebook",this.facebookAccount)}
                  ${this.renderIcon(this.twLink,"fab-twitter",this.twitterAccount)}
                  ${this.renderIcon(this.liLink,"fab-linkedin",this.linkedInAccount)}
                  ${this.renderIcon(this.igLink,"fab-instagram",this.instagramAccount)}
                  ${this.renderIcon(this.ytLink,"fab-youtube",this.youtubeAccount)}
                  ${this.renderIcon(this.pstLink,"fab-pinterest",this.pinterestAccount)}
                  ${this.renderIcon(this.podCastLink,"fas-podcast",this.podcastsAccount)}
                  ${this.renderIcon(this.webLink,"globe",this.webName)}
                `}
          </ul>
        </div>
      </div>
    `}indicatorIconTemplate(){return E` <span class="indicador-icon">
      <tufts-icon library="system" name="link-out" size="1rem"></tufts-icon>
    </span>`}textTemplate(){if(!this.hasText)return null;const t={separator:!0,white:this.whiteIcons};return E`
      <div class="text-container">
        <slot name="text"></slot>
        ${this.hasSeparator?E`<hr class="${xt(t)}" />`:null}
      </div>
    `}headerTemplate(){return this.headerText?E` <div class="header-container">${this.headerText}</div> `:null}};Ee.styles=[Oe],t([at({type:Boolean,attribute:"not-track-icon-footer"})],Ee.prototype,"footerNoTracker",void 0),t([at({type:String,attribute:"fb-link"})],Ee.prototype,"fbLink",void 0),t([at({type:String,attribute:"tw-link"})],Ee.prototype,"twLink",void 0),t([at({type:String,attribute:"li-link"})],Ee.prototype,"liLink",void 0),t([at({type:String,attribute:"ig-link"})],Ee.prototype,"igLink",void 0),t([at({type:String,attribute:"yt-link"})],Ee.prototype,"ytLink",void 0),t([at({type:String,attribute:"pst-link"})],Ee.prototype,"pstLink",void 0),t([at({type:String,attribute:"pod-link"})],Ee.prototype,"podCastLink",void 0),t([at({type:String,attribute:"web-link"})],Ee.prototype,"webLink",void 0),t([at({type:String,attribute:"facebook-account"})],Ee.prototype,"facebookAccount",void 0),t([at({type:String,attribute:"twitter-account"})],Ee.prototype,"twitterAccount",void 0),t([at({type:String,attribute:"linkedin-account"})],Ee.prototype,"linkedInAccount",void 0),t([at({type:String,attribute:"youtube-account"})],Ee.prototype,"youtubeAccount",void 0),t([at({type:String,attribute:"pinterest-account"})],Ee.prototype,"pinterestAccount",void 0),t([at({type:String,attribute:"podcasts-account"})],Ee.prototype,"podcastsAccount",void 0),t([at({type:String,attribute:"instagram-account"})],Ee.prototype,"instagramAccount",void 0),t([at({type:String,attribute:"web-name"})],Ee.prototype,"webName",void 0),t([at({type:String,attribute:"share-page-url"})],Ee.prototype,"shareUrl",void 0),t([at({type:String,attribute:"screen-reader-text"})],Ee.prototype,"ariaLabelText",void 0),t([at({type:String,attribute:"header-text"})],Ee.prototype,"headerText",void 0),t([at({type:String,attribute:"link-size"})],Ee.prototype,"linkSize",void 0),t([at({type:Boolean,attribute:"has-separator"})],Ee.prototype,"hasSeparator",void 0),t([at({type:Boolean,attribute:"white-icons"})],Ee.prototype,"whiteIcons",void 0),t([at({type:String,attribute:"increased-gap"})],Ee.prototype,"increasedGap",void 0),t([at({type:String,attribute:"target-aria-label"})],Ee.prototype,"targetAriaLabel",void 0),t([at({type:String,attribute:"mail-to"})],Ee.prototype,"mailTo",void 0),t([at({type:String,reflect:!0,attribute:"content-align"})],Ee.prototype,"contentAlign",void 0),t([st()],Ee.prototype,"hasText",void 0),Ee=t([ot("tufts-social-links")],Ee);var _e=a`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
:host{display:block}.footer-container{display:flex;flex-direction:column;font-family:var(--ff-body);row-gap:7.5rem}.footer-container,.footer-container a{color:var(--white)}.footer-container a[href^=tel]{text-decoration:none}.footer-container.medium{row-gap:3rem}.footer-container.large{-moz-column-gap:12rem;column-gap:12rem;flex-direction:row;row-gap:3rem}.footer-content{display:flex;flex-direction:column;width:100%}.below-menu{-webkit-margin-before:clamp(3.75rem,12.5vw + 1.25rem,12.5rem);margin-block-start:clamp(3.75rem,12.5vw + 1.25rem,12.5rem)}.large .below-menu,.medium .below-menu{align-items:flex-end;display:flex;flex-wrap:wrap;justify-content:space-between}.address-phone{font-size:var(--fs-lg)}.phone{-webkit-margin-before:1.5rem;font-size:var(--fs-h5);margin-block-start:1.5rem}.social-wrapper{-webkit-margin-before:4rem;margin-block-start:4rem;text-align:center}.large .social-wrapper,.medium .social-wrapper{-webkit-margin-before:0;margin-block-start:0;text-align:end}.social-links{display:flex;justify-content:center}.large .social-links,.medium .social-links{justify-content:end}.copyright-terms{-webkit-margin-before:1rem;align-items:baseline;font-size:var(--fs-base);margin-block-start:1rem}.large .copyright-terms,.medium .copyright-terms{display:inline-flex;flex-wrap:wrap;gap:1rem}.terms{font-weight:var(--fw-medium)}.note{-webkit-margin-before:2rem;font-size:var(--fs-p-mini);margin-block-start:2rem;text-align:center}.large .note,.medium .note{text-align:end}`;let De=class extends ht{constructor(){super(...arguments),this.ngSlot=new Pt(this),this.resizeController=new we(this,{breakpoints:[768,1440]})}render(){const t={"footer-container":!0,mobile:0===this.resizeController.currentBreakpointRange,medium:1===this.resizeController.currentBreakpointRange,large:2===this.resizeController.currentBreakpointRange};return E`
      <tufts-container container-width="full" padding="0">
        <tufts-container
          background-color="blue_dark"
          pulse-orientation="${2===this.resizeController.currentBreakpointRange?"bottom-left":"top-right"}"
          max-pulse-size="32rem"
          pulse-mobile="true"
        >
          <div class="${xt(t)}">
            ${this.ngSlot.conditionalNGSlot("logo")}
            <div class="footer-content">
              <slot name="menu"></slot>
              <div class="below-menu">
                <div class="address-phone">
                  ${this.ngSlot.conditionalNGSlot("address")}
                  ${this.ngSlot.conditionalNGSlot("phone")}
                </div>
                <div class="social-wrapper">
                  ${this.ngSlot.conditionalNGSlot("social-links")}
                  <div class="copyright-terms">
                    ${this.ngSlot.conditionalNGSlot("copyright")}
                    ${this.ngSlot.conditionalNGSlot("terms")}
                  </div>
                </div>
              </div>
              ${this.ngSlot.conditionalNGSlot("note")}
            </div>
          </div>
        </tufts-container>
      </tufts-container>
    `}};De.styles=[_e],De=t([ot("tufts-footer")],De);export{ht as OutlineElement,ye as TuftsContainer,De as TuftsFooter,He as TuftsHeader,Dt as TuftsIcon,ge as TuftsMenu,vt as TuftsPulse,Ee as TuftsSocialLinks};
//# sourceMappingURL=header-footer.js.map
