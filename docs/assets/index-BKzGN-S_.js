(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ou(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const se={},ps=[],ri=()=>{},Rd=()=>!1,tl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),el=i=>i.startsWith("onUpdate:"),Oe=Object.assign,au=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},__=Object.prototype.hasOwnProperty,Zt=(i,t)=>__.call(i,t),Ht=Array.isArray,ms=i=>Ro(i)==="[object Map]",Cd=i=>Ro(i)==="[object Set]",Ku=i=>Ro(i)==="[object Date]",Wt=i=>typeof i=="function",ve=i=>typeof i=="string",si=i=>typeof i=="symbol",ne=i=>i!==null&&typeof i=="object",Pd=i=>(ne(i)||Wt(i))&&Wt(i.then)&&Wt(i.catch),Ld=Object.prototype.toString,Ro=i=>Ld.call(i),g_=i=>Ro(i).slice(8,-1),Dd=i=>Ro(i)==="[object Object]",lu=i=>ve(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,io=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},v_=/-\w/g,kn=nl(i=>i.replace(v_,t=>t.slice(1).toUpperCase())),x_=/\B([A-Z])/g,Or=nl(i=>i.replace(x_,"-$1").toLowerCase()),Id=nl(i=>i.charAt(0).toUpperCase()+i.slice(1)),yl=nl(i=>i?`on${Id(i)}`:""),Qn=(i,t)=>!Object.is(i,t),va=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},Ud=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},cu=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let ju;const il=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(i){if(Ht(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],r=ve(n)?E_(n):Bs(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(ve(i)||ne(i))return i}const S_=/;(?![^(]*\))/g,M_=/:([^]+)/,y_=/\/\*[^]*?\*\//g;function E_(i){const t={};return i.replace(y_,"").split(S_).forEach(e=>{if(e){const n=e.split(M_);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Co(i){let t="";if(ve(i))t=i;else if(Ht(i))for(let e=0;e<i.length;e++){const n=Co(i[e]);n&&(t+=n+" ")}else if(ne(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T_=ou(b_);function Nd(i){return!!i||i===""}function A_(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=uu(i[n],t[n]);return e}function uu(i,t){if(i===t)return!0;let e=Ku(i),n=Ku(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=si(i),n=si(t),e||n)return i===t;if(e=Ht(i),n=Ht(t),e||n)return e&&n?A_(i,t):!1;if(e=ne(i),n=ne(t),e||n){if(!e||!n)return!1;const r=Object.keys(i).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!uu(i[o],t[o]))return!1}}return String(i)===String(t)}const Od=i=>!!(i&&i.__v_isRef===!0),En=i=>ve(i)?i:i==null?"":Ht(i)||ne(i)&&(i.toString===Ld||!Wt(i.toString))?Od(i)?En(i.value):JSON.stringify(i,Fd,2):String(i),Fd=(i,t)=>Od(t)?Fd(i,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,r],s)=>(e[El(n,s)+" =>"]=r,e),{})}:Cd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>El(e))}:si(t)?El(t):ne(t)&&!Ht(t)&&!Dd(t)?String(t):t,El=(i,t="")=>{var e;return si(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class w_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function R_(){return Ie}let oe;const bl=new WeakSet;class Bd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bl.has(this)&&(bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zu(this),Hd(this);const t=oe,e=Hn;oe=this,Hn=!0;try{return this.fn()}finally{Vd(this),oe=t,Hn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)du(t);this.deps=this.depsTail=void 0,Zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let zd=0,ro,so;function kd(i,t=!1){if(i.flags|=8,t){i.next=so,so=i;return}i.next=ro,ro=i}function fu(){zd++}function hu(){if(--zd>0)return;if(so){let t=so;for(so=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;ro;){let t=ro;for(ro=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function Hd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vd(i){let t,e=i.depsTail,n=e;for(;n;){const r=n.prevDep;n.version===-1?(n===e&&(e=r),du(n),C_(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=t,i.depsTail=e}function Ec(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function Gd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===mo)||(i.globalVersion=mo,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Ec(i))))return;i.flags|=2;const t=i.dep,e=oe,n=Hn;oe=i,Hn=!0;try{Hd(i);const r=i.fn(i._value);(t.version===0||Qn(r,i._value))&&(i.flags|=128,i._value=r,t.version++)}catch(r){throw t.version++,r}finally{oe=e,Hn=n,Vd(i),i.flags&=-3}}function du(i,t=!1){const{dep:e,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)du(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function C_(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let Hn=!0;const Wd=[];function oi(){Wd.push(Hn),Hn=!1}function ai(){const i=Wd.pop();Hn=i===void 0?!0:i}function Zu(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let mo=0;class P_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!Hn||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new P_(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,Xd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=n)}return e}trigger(t){this.version++,mo++,this.notify(t)}notify(t){fu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{hu()}}}function Xd(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Xd(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const bc=new WeakMap,Rr=Symbol(""),Tc=Symbol(""),_o=Symbol("");function ze(i,t,e){if(Hn&&oe){let n=bc.get(i);n||bc.set(i,n=new Map);let r=n.get(e);r||(n.set(e,r=new pu),r.map=n,r.key=e),r.track()}}function Mi(i,t,e,n,r,s){const o=bc.get(i);if(!o){mo++;return}const a=l=>{l&&l.trigger()};if(fu(),t==="clear")o.forEach(a);else{const l=Ht(i),c=l&&lu(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===_o||!si(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(_o)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Rr)),ms(i)&&a(o.get(Tc)));break;case"delete":l||(a(o.get(Rr)),ms(i)&&a(o.get(Tc)));break;case"set":ms(i)&&a(o.get(Rr));break}}hu()}function zr(i){const t=jt(i);return t===i?t:(ze(t,"iterate",_o),Nn(i)?t:t.map(Vn))}function rl(i){return ze(i=jt(i),"iterate",_o),i}function jn(i,t){return Ti(i)?bs(Cr(i)?Vn(t):t):Vn(t)}const L_={__proto__:null,[Symbol.iterator](){return Tl(this,Symbol.iterator,i=>jn(this,i))},concat(...i){return zr(this).concat(...i.map(t=>Ht(t)?zr(t):t))},entries(){return Tl(this,"entries",i=>(i[1]=jn(this,i[1]),i))},every(i,t){return ui(this,"every",i,t,void 0,arguments)},filter(i,t){return ui(this,"filter",i,t,e=>e.map(n=>jn(this,n)),arguments)},find(i,t){return ui(this,"find",i,t,e=>jn(this,e),arguments)},findIndex(i,t){return ui(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return ui(this,"findLast",i,t,e=>jn(this,e),arguments)},findLastIndex(i,t){return ui(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return ui(this,"forEach",i,t,void 0,arguments)},includes(...i){return Al(this,"includes",i)},indexOf(...i){return Al(this,"indexOf",i)},join(i){return zr(this).join(i)},lastIndexOf(...i){return Al(this,"lastIndexOf",i)},map(i,t){return ui(this,"map",i,t,void 0,arguments)},pop(){return Vs(this,"pop")},push(...i){return Vs(this,"push",i)},reduce(i,...t){return Ju(this,"reduce",i,t)},reduceRight(i,...t){return Ju(this,"reduceRight",i,t)},shift(){return Vs(this,"shift")},some(i,t){return ui(this,"some",i,t,void 0,arguments)},splice(...i){return Vs(this,"splice",i)},toReversed(){return zr(this).toReversed()},toSorted(i){return zr(this).toSorted(i)},toSpliced(...i){return zr(this).toSpliced(...i)},unshift(...i){return Vs(this,"unshift",i)},values(){return Tl(this,"values",i=>jn(this,i))}};function Tl(i,t,e){const n=rl(i),r=n[t]();return n!==i&&!Nn(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const D_=Array.prototype;function ui(i,t,e,n,r,s){const o=rl(i),a=o!==i&&!Nn(i),l=o[t];if(l!==D_[t]){const f=l.apply(i,s);return a?Vn(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,jn(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Ju(i,t,e,n){const r=rl(i),s=r!==i&&!Nn(i);let o=e,a=!1;r!==i&&(s?(a=n.length===0,o=function(c,u,f){return a&&(a=!1,c=jn(i,c)),e.call(this,c,jn(i,u),f,i)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,i)}));const l=r[t](o,...n);return a?jn(i,l):l}function Al(i,t,e){const n=jt(i);ze(n,"iterate",_o);const r=n[t](...e);return(r===-1||r===!1)&&gu(e[0])?(e[0]=jt(e[0]),n[t](...e)):r}function Vs(i,t,e=[]){oi(),fu();const n=jt(i)[t].apply(i,e);return hu(),ai(),n}const I_=ou("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(si));function U_(i){si(i)||(i=String(i));const t=jt(this);return ze(t,"has",i),t.hasOwnProperty(i)}class qd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return n===(r?s?W_:Zd:s?jd:Kd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Ht(t);if(!r){let l;if(o&&(l=L_[e]))return l;if(e==="hasOwnProperty")return U_}const a=Reflect.get(t,e,He(t)?t:n);if((si(e)?Yd.has(e):I_(e))||(r||ze(t,"get",e),s))return a;if(He(a)){const l=o&&lu(e)?a:a.value;return r&&ne(l)?wc(l):l}return ne(a)?r?wc(a):zs(a):a}}class $d extends qd{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];const o=Ht(t)&&lu(e);if(!this._isShallow){const c=Ti(s);if(!Nn(n)&&!Ti(n)&&(s=jt(s),n=jt(n)),!o&&He(s)&&!He(n))return c||(s.value=n),!0}const a=o?Number(e)<t.length:Zt(t,e),l=Reflect.set(t,e,n,He(t)?t:r);return t===jt(r)&&l&&(a?Qn(n,s)&&Mi(t,"set",e,n):Mi(t,"add",e,n)),l}deleteProperty(t,e){const n=Zt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Mi(t,"delete",e,void 0),r}has(t,e){const n=Reflect.has(t,e);return(!si(e)||!Yd.has(e))&&ze(t,"has",e),n}ownKeys(t){return ze(t,"iterate",Ht(t)?"length":Rr),Reflect.ownKeys(t)}}class N_ extends qd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const O_=new $d,F_=new N_,B_=new $d(!0);const Ac=i=>i,Ho=i=>Reflect.getPrototypeOf(i);function z_(i,t,e){return function(...n){const r=this.__v_raw,s=jt(r),o=ms(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=e?Ac:t?bs:Vn;return!t&&ze(s,"iterate",l?Tc:Rr),Oe(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Vo(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function k_(i,t){const e={get(r){const s=this.__v_raw,o=jt(s),a=jt(r);i||(Qn(r,a)&&ze(o,"get",r),ze(o,"get",a));const{has:l}=Ho(o),c=t?Ac:i?bs:Vn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&ze(jt(r),"iterate",Rr),r.size},has(r){const s=this.__v_raw,o=jt(s),a=jt(r);return i||(Qn(r,a)&&ze(o,"has",r),ze(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=jt(a),c=t?Ac:i?bs:Vn;return!i&&ze(l,"iterate",Rr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Oe(e,i?{add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear")}:{add(r){const s=jt(this),o=Ho(s),a=jt(r),l=!t&&!Nn(r)&&!Ti(r)?a:r;return o.has.call(s,l)||Qn(r,l)&&o.has.call(s,r)||Qn(a,l)&&o.has.call(s,a)||(s.add(l),Mi(s,"add",l,l)),this},set(r,s){!t&&!Nn(s)&&!Ti(s)&&(s=jt(s));const o=jt(this),{has:a,get:l}=Ho(o);let c=a.call(o,r);c||(r=jt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Qn(s,u)&&Mi(o,"set",r,s):Mi(o,"add",r,s),this},delete(r){const s=jt(this),{has:o,get:a}=Ho(s);let l=o.call(s,r);l||(r=jt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Mi(s,"delete",r,void 0),c},clear(){const r=jt(this),s=r.size!==0,o=r.clear();return s&&Mi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=z_(r,i,t)}),e}function mu(i,t){const e=k_(i,t);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Zt(e,r)&&r in n?e:n,r,s)}const H_={get:mu(!1,!1)},V_={get:mu(!1,!0)},G_={get:mu(!0,!1)};const Kd=new WeakMap,jd=new WeakMap,Zd=new WeakMap,W_=new WeakMap;function X_(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zs(i){return Ti(i)?i:_u(i,!1,O_,H_,Kd)}function Y_(i){return _u(i,!1,B_,V_,jd)}function wc(i){return _u(i,!0,F_,G_,Zd)}function _u(i,t,e,n,r){if(!ne(i)||i.__v_raw&&!(t&&i.__v_isReactive)||i.__v_skip||!Object.isExtensible(i))return i;const s=r.get(i);if(s)return s;const o=X_(g_(i));if(o===0)return i;const a=new Proxy(i,o===2?n:e);return r.set(i,a),a}function Cr(i){return Ti(i)?Cr(i.__v_raw):!!(i&&i.__v_isReactive)}function Ti(i){return!!(i&&i.__v_isReadonly)}function Nn(i){return!!(i&&i.__v_isShallow)}function gu(i){return i?!!i.__v_raw:!1}function jt(i){const t=i&&i.__v_raw;return t?jt(t):i}function q_(i){return!Zt(i,"__v_skip")&&Object.isExtensible(i)&&Ud(i,"__v_skip",!0),i}const Vn=i=>ne(i)?zs(i):i,bs=i=>ne(i)?wc(i):i;function He(i){return i?i.__v_isRef===!0:!1}function je(i){return $_(i,!1)}function $_(i,t){return He(i)?i:new K_(i,t)}class K_{constructor(t,e){this.dep=new pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:jt(t),this._value=e?t:Vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||Nn(t)||Ti(t);t=n?t:jt(t),Qn(t,e)&&(this._rawValue=t,this._value=n?t:Vn(t),this.dep.trigger())}}function ls(i){return He(i)?i.value:i}const j_={get:(i,t,e)=>t==="__v_raw"?i:ls(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const r=i[t];return He(r)&&!He(e)?(r.value=e,!0):Reflect.set(i,t,e,n)}};function Jd(i){return Cr(i)?i:new Proxy(i,j_)}class Z_{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return kd(this,!0),!0}get value(){const t=this.dep.track();return Gd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function J_(i,t,e=!1){let n,r;return Wt(i)?n=i:(n=i.get,r=i.set),new Z_(n,r,e)}const Go={},Ca=new WeakMap;let Sr;function Q_(i,t=!1,e=Sr){if(e){let n=Ca.get(e);n||Ca.set(e,n=[]),n.push(i)}}function tg(i,t,e=se){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=y=>r?y:Nn(y)||r===!1||r===0?yi(y,1):yi(y);let u,f,h,d,g=!1,_=!1;if(He(i)?(f=()=>i.value,g=Nn(i)):Cr(i)?(f=()=>c(i),g=!0):Ht(i)?(_=!0,g=i.some(y=>Cr(y)||Nn(y)),f=()=>i.map(y=>{if(He(y))return y.value;if(Cr(y))return c(y);if(Wt(y))return l?l(y,2):y()})):Wt(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){oi();try{h()}finally{ai()}}const y=Sr;Sr=u;try{return l?l(i,3,[d]):i(d)}finally{Sr=y}}:f=ri,t&&r){const y=f,C=r===!0?1/0:r;f=()=>yi(y(),C)}const m=R_(),p=()=>{u.stop(),m&&m.active&&au(m.effects,u)};if(s&&t){const y=t;t=(...C)=>{const w=y(...C);return p(),w}}let S=_?new Array(i.length).fill(Go):Go;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const C=u.run();if(y||r||g||(_?C.some((w,T)=>Qn(w,S[T])):Qn(C,S))){h&&h();const w=Sr;Sr=u;try{const T=[C,S===Go?void 0:_&&S[0]===Go?[]:S,d];S=C,l?l(t,3,T):t(...T)}finally{Sr=w}}}else u.run()};return a&&a(v),u=new Bd(f),u.scheduler=o?()=>o(v,!1):v,d=y=>Q_(y,!1,u),h=u.onStop=()=>{const y=Ca.get(u);if(y){if(l)l(y,4);else for(const C of y)C();Ca.delete(u)}},t?n?v(!0):S=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function yi(i,t=1/0,e){if(t<=0||!ne(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,He(i))yi(i.value,t,e);else if(Ht(i))for(let n=0;n<i.length;n++)yi(i[n],t,e);else if(Cd(i)||ms(i))i.forEach(n=>{yi(n,t,e)});else if(Dd(i)){for(const n in i)yi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&yi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(i,t,e,n){try{return n?i(...n):i()}catch(r){sl(r,t,e)}}function Gn(i,t,e,n){if(Wt(i)){const r=Po(i,t,e,n);return r&&Pd(r)&&r.catch(s=>{sl(s,t,e)}),r}if(Ht(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Gn(i[s],t,e,n));return r}}function sl(i,t,e,n=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){oi(),Po(s,null,10,[i,l,c]),ai();return}}eg(i,e,r,n,o)}function eg(i,t,e,n=!0,r=!1){if(r)throw i;console.error(i)}const Ye=[];let qn=-1;const _s=[];let Hi=null,os=0;const Qd=Promise.resolve();let Pa=null;function ng(i){const t=Pa||Qd;return i?t.then(this?i.bind(this):i):t}function ig(i){let t=qn+1,e=Ye.length;for(;t<e;){const n=t+e>>>1,r=Ye[n],s=go(r);s<i||s===i&&r.flags&2?t=n+1:e=n}return t}function vu(i){if(!(i.flags&1)){const t=go(i),e=Ye[Ye.length-1];!e||!(i.flags&2)&&t>=go(e)?Ye.push(i):Ye.splice(ig(t),0,i),i.flags|=1,tp()}}function tp(){Pa||(Pa=Qd.then(np))}function rg(i){Ht(i)?_s.push(...i):Hi&&i.id===-1?Hi.splice(os+1,0,i):i.flags&1||(_s.push(i),i.flags|=1),tp()}function Qu(i,t,e=qn+1){for(;e<Ye.length;e++){const n=Ye[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Ye.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ep(i){if(_s.length){const t=[...new Set(_s)].sort((e,n)=>go(e)-go(n));if(_s.length=0,Hi){Hi.push(...t);return}for(Hi=t,os=0;os<Hi.length;os++){const e=Hi[os];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Hi=null,os=0}}const go=i=>i.id==null?i.flags&2?-1:1/0:i.id;function np(i){try{for(qn=0;qn<Ye.length;qn++){const t=Ye[qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Po(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qn<Ye.length;qn++){const t=Ye[qn];t&&(t.flags&=-2)}qn=-1,Ye.length=0,ep(),Pa=null,(Ye.length||_s.length)&&np()}}let Pn=null,ip=null;function La(i){const t=Pn;return Pn=i,ip=i&&i.type.__scopeId||null,t}function sg(i,t=Pn,e){if(!t||i._n)return i;const n=(...r)=>{n._d&&ff(-1);const s=La(t);let o;try{o=i(...r)}finally{La(s),n._d&&ff(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function xa(i,t){if(Pn===null)return i;const e=cl(Pn),n=i.dirs||(i.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=se]=t[r];s&&(Wt(s)&&(s={mounted:s,updated:s}),s.deep&&yi(o),n.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function ur(i,t,e,n){const r=i.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(oi(),Gn(l,e,8,[i.el,a,i,t]),ai())}}function og(i,t){if($e){let e=$e.provides;const n=$e.parent&&$e.parent.provides;n===e&&(e=$e.provides=Object.create(n)),e[i]=t}}function Sa(i,t,e=!1){const n=r0();if(n||gs){let r=gs?gs._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return e&&Wt(t)?t.call(n&&n.proxy):t}}const ag=Symbol.for("v-scx"),lg=()=>Sa(ag);function wl(i,t,e){return rp(i,t,e)}function rp(i,t,e=se){const{immediate:n,deep:r,flush:s,once:o}=e,a=Oe({},e),l=t&&n||!t&&s!=="post";let c;if(xo){if(s==="sync"){const d=lg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ri,d.resume=ri,d.pause=ri,d}}const u=$e;a.call=(d,g,_)=>Gn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{tn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():vu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=tg(i,t,a);return xo&&(c?c.push(h):l&&h()),h}function cg(i,t,e){const n=this.proxy,r=ve(i)?i.includes(".")?sp(n,i):()=>n[i]:i.bind(n,n);let s;Wt(t)?s=t:(s=t.handler,e=t);const o=Io(this),a=rp(r,s.bind(n),e);return o(),a}function sp(i,t){const e=t.split(".");return()=>{let n=i;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}const ug=Symbol("_vte"),fg=i=>i.__isTeleport,Rl=Symbol("_leaveCb");function xu(i,t){i.shapeFlag&6&&i.component?(i.transition=t,xu(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function Wn(i,t){return Wt(i)?Oe({name:i.name},t,{setup:i}):i}function op(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function tf(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const Da=new WeakMap;function oo(i,t,e,n,r=!1){if(Ht(i)){i.forEach((_,m)=>oo(_,t&&(Ht(t)?t[m]:t),e,n,r));return}if(ao(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&oo(i,t,e,n.component.subTree);return}const s=n.shapeFlag&4?cl(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=t&&t.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState,h=jt(f),d=f===se?Rd:_=>tf(u,_)?!1:Zt(h,_),g=(_,m)=>!(m&&tf(u,m));if(c!=null&&c!==l){if(ef(t),ve(c))u[c]=null,d(c)&&(f[c]=null);else if(He(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Wt(l)){oi();try{Po(l,a,12,[o,u])}finally{ai()}}else{const _=ve(l),m=He(l);if(_||m){const p=()=>{if(i.f){const S=_?d(l)?f[l]:u[l]:g()||!i.k?l.value:u[i.k];if(r)Ht(S)&&au(S,s);else if(Ht(S))S.includes(s)||S.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const v=[s];g(l,i.k)&&(l.value=v),i.k&&(u[i.k]=v)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const S=()=>{p(),Da.delete(i)};S.id=-1,Da.set(i,S),tn(S,e)}else ef(i),p()}}}function ef(i){const t=Da.get(i);t&&(t.flags|=8,Da.delete(i))}il().requestIdleCallback;il().cancelIdleCallback;const ao=i=>!!i.type.__asyncLoader,ap=i=>i.type.__isKeepAlive;function hg(i,t){lp(i,"a",t)}function dg(i,t){lp(i,"da",t)}function lp(i,t,e=$e){const n=i.__wdc||(i.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(ol(t,n,e),e){let r=e.parent;for(;r&&r.parent;)ap(r.parent.vnode)&&pg(n,t,e,r),r=r.parent}}function pg(i,t,e,n){const r=ol(t,i,n,!0);cp(()=>{au(n[t],r)},e)}function ol(i,t,e=$e,n=!1){if(e){const r=e[i]||(e[i]=[]),s=t.__weh||(t.__weh=(...o)=>{oi();const a=Io(e),l=Gn(t,e,i,o);return a(),ai(),l});return n?r.unshift(s):r.push(s),s}}const Ci=i=>(t,e=$e)=>{(!xo||i==="sp")&&ol(i,(...n)=>t(...n),e)},mg=Ci("bm"),Pi=Ci("m"),_g=Ci("bu"),gg=Ci("u"),Lo=Ci("bum"),cp=Ci("um"),vg=Ci("sp"),xg=Ci("rtg"),Sg=Ci("rtc");function Mg(i,t=$e){ol("ec",i,t)}const yg=Symbol.for("v-ndc");function Do(i,t,e,n){let r;const s=e,o=Ht(i);if(o||ve(i)){const a=o&&Cr(i);let l=!1,c=!1;a&&(l=!Nn(i),c=Ti(i),i=rl(i)),r=new Array(i.length);for(let u=0,f=i.length;u<f;u++)r[u]=t(l?c?bs(Vn(i[u])):Vn(i[u]):i[u],u,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=t(a+1,a,void 0,s)}else if(ne(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(i[u],u,l,s)}}else r=[];return r}const Rc=i=>i?Pp(i)?cl(i):Rc(i.parent):null,lo=Oe(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Rc(i.parent),$root:i=>Rc(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>fp(i),$forceUpdate:i=>i.f||(i.f=()=>{vu(i.update)}),$nextTick:i=>i.n||(i.n=ng.bind(i.proxy)),$watch:i=>cg.bind(i)}),Cl=(i,t)=>i!==se&&!i.__isScriptSetup&&Zt(i,t),Eg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Cl(n,t))return o[t]=1,n[t];if(r!==se&&Zt(r,t))return o[t]=2,r[t];if(Zt(s,t))return o[t]=3,s[t];if(e!==se&&Zt(e,t))return o[t]=4,e[t];Cc&&(o[t]=0)}}const c=lo[t];let u,f;if(c)return t==="$attrs"&&ze(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==se&&Zt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Zt(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:r,ctx:s}=i;return Cl(r,t)?(r[t]=e,!0):n!==se&&Zt(n,t)?(n[t]=e,!0):Zt(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(s[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||i!==se&&a[0]!=="$"&&Zt(i,a)||Cl(t,a)||Zt(s,a)||Zt(n,a)||Zt(lo,a)||Zt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:Zt(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function nf(i){return Ht(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Cc=!0;function bg(i){const t=fp(i),e=i.proxy,n=i.ctx;Cc=!1,t.beforeCreate&&rf(t.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:v,unmounted:y,render:C,renderTracked:w,renderTriggered:T,errorCaptured:L,serverPrefetch:E,expose:b,inheritAttrs:D,components:X,directives:V,filters:G}=t;if(c&&Tg(c,n,null),o)for(const F in o){const N=o[F];Wt(N)&&(n[F]=N.bind(e))}if(r){const F=r.call(e,e);ne(F)&&(i.data=zs(F))}if(Cc=!0,s)for(const F in s){const N=s[F],ft=Wt(N)?N.bind(e,e):Wt(N.get)?N.get.bind(e,e):ri,dt=!Wt(N)&&Wt(N.set)?N.set.bind(e):ri,mt=u0({get:ft,set:dt});Object.defineProperty(n,F,{enumerable:!0,configurable:!0,get:()=>mt.value,set:vt=>mt.value=vt})}if(a)for(const F in a)up(a[F],n,e,F);if(l){const F=Wt(l)?l.call(e):l;Reflect.ownKeys(F).forEach(N=>{og(N,F[N])})}u&&rf(u,i,"c");function z(F,N){Ht(N)?N.forEach(ft=>F(ft.bind(e))):N&&F(N.bind(e))}if(z(mg,f),z(Pi,h),z(_g,d),z(gg,g),z(hg,_),z(dg,m),z(Mg,L),z(Sg,w),z(xg,T),z(Lo,S),z(cp,y),z(vg,E),Ht(b))if(b.length){const F=i.exposed||(i.exposed={});b.forEach(N=>{Object.defineProperty(F,N,{get:()=>e[N],set:ft=>e[N]=ft,enumerable:!0})})}else i.exposed||(i.exposed={});C&&i.render===ri&&(i.render=C),D!=null&&(i.inheritAttrs=D),X&&(i.components=X),V&&(i.directives=V),E&&op(i)}function Tg(i,t,e=ri){Ht(i)&&(i=Pc(i));for(const n in i){const r=i[n];let s;ne(r)?"default"in r?s=Sa(r.from||n,r.default,!0):s=Sa(r.from||n):s=Sa(r),He(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[n]=s}}function rf(i,t,e){Gn(Ht(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function up(i,t,e,n){let r=n.includes(".")?sp(e,n):()=>e[n];if(ve(i)){const s=t[i];Wt(s)&&wl(r,s)}else if(Wt(i))wl(r,i.bind(e));else if(ne(i))if(Ht(i))i.forEach(s=>up(s,t,e,n));else{const s=Wt(i.handler)?i.handler.bind(e):t[i.handler];Wt(s)&&wl(r,s,i)}}function fp(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!n?l=t:(l={},r.length&&r.forEach(c=>Ia(l,c,o,!0)),Ia(l,t,o)),ne(t)&&s.set(t,l),l}function Ia(i,t,e,n=!1){const{mixins:r,extends:s}=t;s&&Ia(i,s,e,!0),r&&r.forEach(o=>Ia(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Ag[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Ag={data:sf,props:of,emits:of,methods:Js,computed:Js,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Js,directives:Js,watch:Rg,provide:sf,inject:wg};function sf(i,t){return t?i?function(){return Oe(Wt(i)?i.call(this,this):i,Wt(t)?t.call(this,this):t)}:t:i}function wg(i,t){return Js(Pc(i),Pc(t))}function Pc(i){if(Ht(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function We(i,t){return i?[...new Set([].concat(i,t))]:t}function Js(i,t){return i?Oe(Object.create(null),i,t):t}function of(i,t){return i?Ht(i)&&Ht(t)?[...new Set([...i,...t])]:Oe(Object.create(null),nf(i),nf(t??{})):t}function Rg(i,t){if(!i)return t;if(!t)return i;const e=Oe(Object.create(null),i);for(const n in t)e[n]=We(i[n],t[n]);return e}function hp(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Pg(i,t){return function(n,r=null){Wt(n)||(n=Oe({},n)),r!=null&&!ne(r)&&(r=null);const s=hp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cg++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:f0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...f)):Wt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ae(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,cl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=gs;gs=c;try{return u()}finally{gs=f}}};return c}}let gs=null;const Lg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${kn(t)}Modifiers`]||i[`${Or(t)}Modifiers`];function Dg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||se;let r=e;const s=t.startsWith("update:"),o=s&&Lg(n,t.slice(7));o&&(o.trim&&(r=e.map(u=>ve(u)?u.trim():u)),o.number&&(r=e.map(cu)));let a,l=n[a=yl(t)]||n[a=yl(kn(t))];!l&&s&&(l=n[a=yl(Or(t))]),l&&Gn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Gn(c,i,6,r)}}const Ig=new WeakMap;function dp(i,t,e=!1){const n=e?Ig:t.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Wt(i)){const l=c=>{const u=dp(c,t,!0);u&&(a=!0,Oe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ne(i)&&n.set(i,null),null):(Ht(s)?s.forEach(l=>o[l]=null):Oe(o,s),ne(i)&&n.set(i,o),o)}function al(i,t){return!i||!tl(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Zt(i,t[0].toLowerCase()+t.slice(1))||Zt(i,Or(t))||Zt(i,t))}function af(i){const{type:t,vnode:e,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=La(i);let p,S;try{if(e.shapeFlag&4){const y=r||n,C=y;p=Zn(c.call(C,y,u,f,d,h,g)),S=a}else{const y=t;p=Zn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),S=t.props?a:Ug(a)}}catch(y){co.length=0,sl(y,i,1),p=Ae(Ji)}let v=p;if(S&&_!==!1){const y=Object.keys(S),{shapeFlag:C}=v;y.length&&C&7&&(s&&y.some(el)&&(S=Ng(S,s)),v=Ts(v,S,!1,!0))}return e.dirs&&(v=Ts(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&xu(v,e.transition),p=v,La(m),p}const Ug=i=>{let t;for(const e in i)(e==="class"||e==="style"||tl(e))&&((t||(t={}))[e]=i[e]);return t},Ng=(i,t)=>{const e={};for(const n in i)(!el(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Og(i,t,e){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?lf(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(pp(o,n,h)&&!al(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?lf(n,o,c):!0:!!o;return!1}function lf(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(pp(t,i,s)&&!al(e,s))return!0}return!1}function pp(i,t,e){const n=i[e],r=t[e];return e==="style"&&ne(n)&&ne(r)?!uu(n,r):n!==r}function Fg({vnode:i,parent:t,suspense:e},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===i&&(r.suspense.vnode.el=r.el=n,i=r),r===i)(i=t.vnode).el=n,t=t.parent;else break}e&&e.activeBranch===i&&(e.vnode.el=n)}const mp={},_p=()=>Object.create(mp),gp=i=>Object.getPrototypeOf(i)===mp;function Bg(i,t,e,n=!1){const r={},s=_p();i.propsDefaults=Object.create(null),vp(i,t,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);e?i.props=n?r:Y_(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function zg(i,t,e,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=jt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(al(i.emitsOptions,h))continue;const d=t[h];if(l)if(Zt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=kn(h);r[g]=Lc(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{vp(i,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!Zt(t,f)&&((u=Or(f))===f||!Zt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Lc(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!Zt(t,f))&&(delete s[f],c=!0)}c&&Mi(i.attrs,"set","")}function vp(i,t,e,n){const[r,s]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(io(l))continue;const c=t[l];let u;r&&Zt(r,u=kn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:al(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=jt(e),c=a||se;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Lc(r,l,f,c[f],i,!Zt(c,f))}}return o}function Lc(i,t,e,n,r,s){const o=i[e];if(o!=null){const a=Zt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=r;if(e in c)n=c[e];else{const u=Io(r);n=c[e]=l.call(null,t),u()}}else n=l;r.ce&&r.ce._setProp(e,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Or(e))&&(n=!0))}return n}const kg=new WeakMap;function xp(i,t,e=!1){const n=e?kg:t.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Wt(i)){const u=f=>{l=!0;const[h,d]=xp(f,t,!0);Oe(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ne(i)&&n.set(i,ps),ps;if(Ht(s))for(let u=0;u<s.length;u++){const f=kn(s[u]);cf(f)&&(o[f]=se)}else if(s)for(const u in s){const f=kn(u);if(cf(f)){const h=s[u],d=o[f]=Ht(h)||Wt(h)?{type:h}:Oe({},h),g=d.type;let _=!1,m=!0;if(Ht(g))for(let p=0;p<g.length;++p){const S=g[p],v=Wt(S)&&S.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Wt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Zt(d,"default"))&&a.push(f)}}const c=[o,a];return ne(i)&&n.set(i,c),c}function cf(i){return i[0]!=="$"&&!io(i)}const Su=i=>i==="_"||i==="_ctx"||i==="$stable",Mu=i=>Ht(i)?i.map(Zn):[Zn(i)],Hg=(i,t,e)=>{if(t._n)return t;const n=sg((...r)=>Mu(t(...r)),e);return n._c=!1,n},Sp=(i,t,e)=>{const n=i._ctx;for(const r in i){if(Su(r))continue;const s=i[r];if(Wt(s))t[r]=Hg(r,s,n);else if(s!=null){const o=Mu(s);t[r]=()=>o}}},Mp=(i,t)=>{const e=Mu(t);i.slots.default=()=>e},yp=(i,t,e)=>{for(const n in t)(e||!Su(n))&&(i[n]=t[n])},Vg=(i,t,e)=>{const n=i.slots=_p();if(i.vnode.shapeFlag&32){const r=t._;r?(yp(n,t,e),e&&Ud(n,"_",r,!0)):Sp(t,n)}else t&&Mp(i,t)},Gg=(i,t,e)=>{const{vnode:n,slots:r}=i;let s=!0,o=se;if(n.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:yp(r,t,e):(s=!t.$stable,Sp(t,r)),o=t}else t&&(Mp(i,t),o={default:1});if(s)for(const a in r)!Su(a)&&o[a]==null&&delete r[a]},tn=$g;function Wg(i){return Xg(i)}function Xg(i,t){const e=il();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ri,insertStaticContent:g}=i,_=(P,I,q,K=null,et=null,J=null,st=void 0,lt=null,A=!!I.dynamicChildren)=>{if(P===I)return;P&&!Gs(P,I)&&(K=gt(P),vt(P,et,J,!0),P=null),I.patchFlag===-2&&(A=!1,I.dynamicChildren=null);const{type:x,ref:O,shapeFlag:k}=I;switch(x){case ll:m(P,I,q,K);break;case Ji:p(P,I,q,K);break;case Ma:P==null&&S(I,q,K,st);break;case en:X(P,I,q,K,et,J,st,lt,A);break;default:k&1?C(P,I,q,K,et,J,st,lt,A):k&6?V(P,I,q,K,et,J,st,lt,A):(k&64||k&128)&&x.process(P,I,q,K,et,J,st,lt,A,Rt)}O!=null&&et?oo(O,P&&P.ref,J,I||P,!I):O==null&&P&&P.ref!=null&&oo(P.ref,null,J,P,!0)},m=(P,I,q,K)=>{if(P==null)n(I.el=a(I.children),q,K);else{const et=I.el=P.el;I.children!==P.children&&c(et,I.children)}},p=(P,I,q,K)=>{P==null?n(I.el=l(I.children||""),q,K):I.el=P.el},S=(P,I,q,K)=>{[P.el,P.anchor]=g(P.children,I,q,K,P.el,P.anchor)},v=({el:P,anchor:I},q,K)=>{let et;for(;P&&P!==I;)et=h(P),n(P,q,K),P=et;n(I,q,K)},y=({el:P,anchor:I})=>{let q;for(;P&&P!==I;)q=h(P),r(P),P=q;r(I)},C=(P,I,q,K,et,J,st,lt,A)=>{if(I.type==="svg"?st="svg":I.type==="math"&&(st="mathml"),P==null)w(I,q,K,et,J,st,lt,A);else{const x=P.el&&P.el._isVueCE?P.el:null;try{x&&x._beginPatch(),E(P,I,et,J,st,lt,A)}finally{x&&x._endPatch()}}},w=(P,I,q,K,et,J,st,lt)=>{let A,x;const{props:O,shapeFlag:k,transition:j,dirs:Q}=P;if(A=P.el=o(P.type,J,O&&O.is,O),k&8?u(A,P.children):k&16&&L(P.children,A,null,K,et,Pl(P,J),st,lt),Q&&ur(P,null,K,"created"),T(A,P,P.scopeId,st,K),O){for(const ut in O)ut!=="value"&&!io(ut)&&s(A,ut,null,O[ut],J,K);"value"in O&&s(A,"value",null,O.value,J),(x=O.onVnodeBeforeMount)&&Yn(x,K,P)}Q&&ur(P,null,K,"beforeMount");const pt=Yg(et,j);pt&&j.beforeEnter(A),n(A,I,q),((x=O&&O.onVnodeMounted)||pt||Q)&&tn(()=>{try{x&&Yn(x,K,P),pt&&j.enter(A),Q&&ur(P,null,K,"mounted")}finally{}},et)},T=(P,I,q,K,et)=>{if(q&&d(P,q),K)for(let J=0;J<K.length;J++)d(P,K[J]);if(et){let J=et.subTree;if(I===J||Ap(J.type)&&(J.ssContent===I||J.ssFallback===I)){const st=et.vnode;T(P,st,st.scopeId,st.slotScopeIds,et.parent)}}},L=(P,I,q,K,et,J,st,lt,A=0)=>{for(let x=A;x<P.length;x++){const O=P[x]=lt?xi(P[x]):Zn(P[x]);_(null,O,I,q,K,et,J,st,lt)}},E=(P,I,q,K,et,J,st)=>{const lt=I.el=P.el;let{patchFlag:A,dynamicChildren:x,dirs:O}=I;A|=P.patchFlag&16;const k=P.props||se,j=I.props||se;let Q;if(q&&fr(q,!1),(Q=j.onVnodeBeforeUpdate)&&Yn(Q,q,I,P),O&&ur(I,P,q,"beforeUpdate"),q&&fr(q,!0),x&&(!P.dynamicChildren||P.dynamicChildren.length!==x.length)&&(A=0,st=!1,x=null),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&u(lt,""),x?b(P.dynamicChildren,x,lt,q,K,Pl(I,et),J):st||N(P,I,lt,null,q,K,Pl(I,et),J,!1),A>0){if(A&16)D(lt,k,j,q,et);else if(A&2&&k.class!==j.class&&s(lt,"class",null,j.class,et),A&4&&s(lt,"style",k.style,j.style,et),A&8){const pt=I.dynamicProps;for(let ut=0;ut<pt.length;ut++){const ot=pt[ut],Tt=k[ot],ct=j[ot];(ct!==Tt||ot==="value")&&s(lt,ot,Tt,ct,et,q)}}A&1&&P.children!==I.children&&u(lt,I.children)}else!st&&x==null&&D(lt,k,j,q,et);((Q=j.onVnodeUpdated)||O)&&tn(()=>{Q&&Yn(Q,q,I,P),O&&ur(I,P,q,"updated")},K)},b=(P,I,q,K,et,J,st)=>{for(let lt=0;lt<I.length;lt++){const A=P[lt],x=I[lt],O=A.el&&(A.type===en||!Gs(A,x)||A.shapeFlag&198)?f(A.el):q;_(A,x,O,null,K,et,J,st,!0)}},D=(P,I,q,K,et)=>{if(I!==q){if(I!==se)for(const J in I)!io(J)&&!(J in q)&&s(P,J,I[J],null,et,K);for(const J in q){if(io(J))continue;const st=q[J],lt=I[J];st!==lt&&J!=="value"&&s(P,J,lt,st,et,K)}"value"in q&&s(P,"value",I.value,q.value,et)}},X=(P,I,q,K,et,J,st,lt,A)=>{const x=I.el=P?P.el:a(""),O=I.anchor=P?P.anchor:a("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:Q}=I;Q&&(lt=lt?lt.concat(Q):Q),P==null?(n(x,q,K),n(O,q,K),L(I.children||[],q,O,et,J,st,lt,A)):k>0&&k&64&&j&&P.dynamicChildren&&P.dynamicChildren.length===j.length?(b(P.dynamicChildren,j,q,et,J,st,lt),(I.key!=null||et&&I===et.subTree)&&Ep(P,I,!0)):N(P,I,q,O,et,J,st,lt,A)},V=(P,I,q,K,et,J,st,lt,A)=>{I.slotScopeIds=lt,P==null?I.shapeFlag&512?et.ctx.activate(I,q,K,st,A):G(I,q,K,et,J,st,A):Y(P,I,A)},G=(P,I,q,K,et,J,st)=>{const lt=P.component=i0(P,K,et);if(ap(P)&&(lt.ctx.renderer=Rt),s0(lt,!1,st),lt.asyncDep){if(et&&et.registerDep(lt,z,st),!P.el){const A=lt.subTree=Ae(Ji);p(null,A,I,q),P.placeholder=A.el}}else z(lt,P,I,q,et,J,st)},Y=(P,I,q)=>{const K=I.component=P.component;if(Og(P,I,q))if(K.asyncDep&&!K.asyncResolved){F(K,I,q);return}else K.next=I,K.update();else I.el=P.el,K.vnode=I},z=(P,I,q,K,et,J,st)=>{const lt=()=>{if(P.isMounted){let{next:k,bu:j,u:Q,parent:pt,vnode:ut}=P;{const Nt=bp(P);if(Nt){k&&(k.el=ut.el,F(P,k,st)),Nt.asyncDep.then(()=>{tn(()=>{P.isUnmounted||x()},et)});return}}let ot=k,Tt;fr(P,!1),k?(k.el=ut.el,F(P,k,st)):k=ut,j&&va(j),(Tt=k.props&&k.props.onVnodeBeforeUpdate)&&Yn(Tt,pt,k,ut),fr(P,!0);const ct=af(P),Et=P.subTree;P.subTree=ct,_(Et,ct,f(Et.el),gt(Et),P,et,J),k.el=ct.el,ot===null&&Fg(P,ct.el),Q&&tn(Q,et),(Tt=k.props&&k.props.onVnodeUpdated)&&tn(()=>Yn(Tt,pt,k,ut),et)}else{let k;const{el:j,props:Q}=I,{bm:pt,m:ut,parent:ot,root:Tt,type:ct}=P,Et=ao(I);fr(P,!1),pt&&va(pt),!Et&&(k=Q&&Q.onVnodeBeforeMount)&&Yn(k,ot,I),fr(P,!0);{Tt.ce&&Tt.ce._hasShadowRoot()&&Tt.ce._injectChildStyle(ct,P.parent?P.parent.type:void 0);const Nt=P.subTree=af(P);_(null,Nt,q,K,P,et,J),I.el=Nt.el}if(ut&&tn(ut,et),!Et&&(k=Q&&Q.onVnodeMounted)){const Nt=I;tn(()=>Yn(k,ot,Nt),et)}(I.shapeFlag&256||ot&&ao(ot.vnode)&&ot.vnode.shapeFlag&256)&&P.a&&tn(P.a,et),P.isMounted=!0,I=q=K=null}};P.scope.on();const A=P.effect=new Bd(lt);P.scope.off();const x=P.update=A.run.bind(A),O=P.job=A.runIfDirty.bind(A);O.i=P,O.id=P.uid,A.scheduler=()=>vu(O),fr(P,!0),x()},F=(P,I,q)=>{I.component=P;const K=P.vnode.props;P.vnode=I,P.next=null,zg(P,I.props,K,q),Gg(P,I.children,q),oi(),Qu(P),ai()},N=(P,I,q,K,et,J,st,lt,A=!1)=>{const x=P&&P.children,O=P?P.shapeFlag:0,k=I.children,{patchFlag:j,shapeFlag:Q}=I;if(j>0){if(j&128){dt(x,k,q,K,et,J,st,lt,A);return}else if(j&256){ft(x,k,q,K,et,J,st,lt,A);return}}Q&8?(O&16&&Mt(x,et,J),k!==x&&u(q,k)):O&16?Q&16?dt(x,k,q,K,et,J,st,lt,A):Mt(x,et,J,!0):(O&8&&u(q,""),Q&16&&L(k,q,K,et,J,st,lt,A))},ft=(P,I,q,K,et,J,st,lt,A)=>{P=P||ps,I=I||ps;const x=P.length,O=I.length,k=Math.min(x,O);let j;for(j=0;j<k;j++){const Q=I[j]=A?xi(I[j]):Zn(I[j]);_(P[j],Q,q,null,et,J,st,lt,A)}x>O?Mt(P,et,J,!0,!1,k):L(I,q,K,et,J,st,lt,A,k)},dt=(P,I,q,K,et,J,st,lt,A)=>{let x=0;const O=I.length;let k=P.length-1,j=O-1;for(;x<=k&&x<=j;){const Q=P[x],pt=I[x]=A?xi(I[x]):Zn(I[x]);if(Gs(Q,pt))_(Q,pt,q,null,et,J,st,lt,A);else break;x++}for(;x<=k&&x<=j;){const Q=P[k],pt=I[j]=A?xi(I[j]):Zn(I[j]);if(Gs(Q,pt))_(Q,pt,q,null,et,J,st,lt,A);else break;k--,j--}if(x>k){if(x<=j){const Q=j+1,pt=Q<O?I[Q].el:K;for(;x<=j;)_(null,I[x]=A?xi(I[x]):Zn(I[x]),q,pt,et,J,st,lt,A),x++}}else if(x>j)for(;x<=k;)vt(P[x],et,J,!0),x++;else{const Q=x,pt=x,ut=new Map;for(x=pt;x<=j;x++){const Ct=I[x]=A?xi(I[x]):Zn(I[x]);Ct.key!=null&&ut.set(Ct.key,x)}let ot,Tt=0;const ct=j-pt+1;let Et=!1,Nt=0;const Lt=new Array(ct);for(x=0;x<ct;x++)Lt[x]=0;for(x=Q;x<=k;x++){const Ct=P[x];if(Tt>=ct){vt(Ct,et,J,!0);continue}let Dt;if(Ct.key!=null)Dt=ut.get(Ct.key);else for(ot=pt;ot<=j;ot++)if(Lt[ot-pt]===0&&Gs(Ct,I[ot])){Dt=ot;break}Dt===void 0?vt(Ct,et,J,!0):(Lt[Dt-pt]=x+1,Dt>=Nt?Nt=Dt:Et=!0,_(Ct,I[Dt],q,null,et,J,st,lt,A),Tt++)}const xt=Et?qg(Lt):ps;for(ot=xt.length-1,x=ct-1;x>=0;x--){const Ct=pt+x,Dt=I[Ct],ae=I[Ct+1],M=Ct+1<O?ae.el||Tp(ae):K;Lt[x]===0?_(null,Dt,q,M,et,J,st,lt,A):Et&&(ot<0||x!==xt[ot]?mt(Dt,q,M,2):ot--)}}},mt=(P,I,q,K,et=null)=>{const{el:J,type:st,transition:lt,children:A,shapeFlag:x}=P;if(x&6){mt(P.component.subTree,I,q,K);return}if(x&128){P.suspense.move(I,q,K);return}if(x&64){st.move(P,I,q,Rt);return}if(st===en){n(J,I,q);for(let k=0;k<A.length;k++)mt(A[k],I,q,K);n(P.anchor,I,q);return}if(st===Ma){v(P,I,q);return}if(K!==2&&x&1&&lt)if(K===0)lt.persisted&&!J[Rl]?n(J,I,q):(lt.beforeEnter(J),n(J,I,q),tn(()=>lt.enter(J),et));else{const{leave:k,delayLeave:j,afterLeave:Q}=lt,pt=()=>{P.ctx.isUnmounted?r(J):n(J,I,q)},ut=()=>{const ot=J._isLeaving||!!J[Rl];J._isLeaving&&J[Rl](!0),lt.persisted&&!ot?pt():k(J,()=>{pt(),Q&&Q()})};j?j(J,pt,ut):ut()}else n(J,I,q)},vt=(P,I,q,K=!1,et=!1)=>{const{type:J,props:st,ref:lt,children:A,dynamicChildren:x,shapeFlag:O,patchFlag:k,dirs:j,cacheIndex:Q,memo:pt}=P;if(k===-2&&(et=!1),lt!=null&&(oi(),oo(lt,null,q,P,!0),ai()),Q!=null&&(I.renderCache[Q]=void 0),O&256){I.ctx.deactivate(P);return}const ut=O&1&&j,ot=!ao(P);let Tt;if(ot&&(Tt=st&&st.onVnodeBeforeUnmount)&&Yn(Tt,I,P),O&6)at(P.component,q,K);else{if(O&128){P.suspense.unmount(q,K);return}ut&&ur(P,null,I,"beforeUnmount"),O&64?P.type.remove(P,I,q,Rt,K):x&&!x.hasOnce&&(J!==en||k>0&&k&64)?Mt(x,I,q,!1,!0):(J===en&&k&384||!et&&O&16)&&Mt(A,I,q),K&&Bt(P)}const ct=pt!=null&&Q==null;(ot&&(Tt=st&&st.onVnodeUnmounted)||ut||ct)&&tn(()=>{Tt&&Yn(Tt,I,P),ut&&ur(P,null,I,"unmounted"),ct&&(P.el=null)},q)},Bt=P=>{const{type:I,el:q,anchor:K,transition:et}=P;if(I===en){nt(q,K);return}if(I===Ma){y(P);return}const J=()=>{r(q),et&&!et.persisted&&et.afterLeave&&et.afterLeave()};if(P.shapeFlag&1&&et&&!et.persisted){const{leave:st,delayLeave:lt}=et,A=()=>st(q,J);lt?lt(P.el,J,A):A()}else J()},nt=(P,I)=>{let q;for(;P!==I;)q=h(P),r(P),P=q;r(I)},at=(P,I,q)=>{const{bum:K,scope:et,job:J,subTree:st,um:lt,m:A,a:x}=P;uf(A),uf(x),K&&va(K),et.stop(),J&&(J.flags|=8,vt(st,P,I,q)),lt&&tn(lt,I),tn(()=>{P.isUnmounted=!0},I)},Mt=(P,I,q,K=!1,et=!1,J=0)=>{for(let st=J;st<P.length;st++)vt(P[st],I,q,K,et)},gt=P=>{if(P.shapeFlag&6)return gt(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const I=h(P.anchor||P.el),q=I&&I[ug];return q?h(q):I};let zt=!1;const Ot=(P,I,q)=>{let K;P==null?I._vnode&&(vt(I._vnode,null,null,!0),K=I._vnode.component):_(I._vnode||null,P,I,null,null,null,q),I._vnode=P,zt||(zt=!0,Qu(K),ep(),zt=!1)},Rt={p:_,um:vt,m:mt,r:Bt,mt:G,mc:L,pc:N,pbc:b,n:gt,o:i};return{render:Ot,hydrate:void 0,createApp:Pg(Ot)}}function Pl({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function fr({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function Yg(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function Ep(i,t,e=!1){const n=i.children,r=t.children;if(Ht(n)&&Ht(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xi(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Ep(o,a)),a.type===ll&&(a.patchFlag===-1&&(a=r[s]=xi(a)),a.el=o.el),a.type===Ji&&!a.el&&(a.el=o.el)}}function qg(i){const t=i.slice(),e=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=e[e.length-1],i[r]<c){t[n]=r,e.push(n);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,i[e[a]]<c?s=a+1:o=a;c<i[e[s]]&&(s>0&&(t[n]=e[s-1]),e[s]=n)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function bp(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bp(t)}function uf(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function Tp(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?Tp(t.subTree):null}const Ap=i=>i.__isSuspense;function $g(i,t){t&&t.pendingBranch?Ht(i)?t.effects.push(...i):t.effects.push(i):rg(i)}const en=Symbol.for("v-fgt"),ll=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),co=[];let Sn=null;function _e(i=!1){co.push(Sn=i?null:[])}function Kg(){co.pop(),Sn=co[co.length-1]||null}let vo=1;function ff(i,t=!1){vo+=i,i<0&&Sn&&t&&(Sn.hasOnce=!0)}function wp(i){return i.dynamicChildren=vo>0?Sn||ps:null,Kg(),vo>0&&Sn&&Sn.push(i),i}function Se(i,t,e,n,r,s){return wp(yt(i,t,e,n,r,s,!0))}function jg(i,t,e,n,r){return wp(Ae(i,t,e,n,r,!0))}function Rp(i){return i?i.__v_isVNode===!0:!1}function Gs(i,t){return i.type===t.type&&i.key===t.key}const Cp=({key:i})=>i??null,ya=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?ve(i)||He(i)||Wt(i)?{i:Pn,r:i,k:t,f:!!e}:i:null);function yt(i,t=null,e=null,n=0,r=null,s=i===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Cp(t),ref:t&&ya(t),scopeId:ip,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Ua(l,e),s&128&&i.normalize(l)):e&&(l.shapeFlag|=ve(e)?8:16),vo>0&&!o&&Sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Sn.push(l),l}const Ae=Zg;function Zg(i,t=null,e=null,n=0,r=null,s=!1){if((!i||i===yg)&&(i=Ji),Rp(i)){const a=Ts(i,t,!0);return e&&Ua(a,e),vo>0&&!s&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(i)]=a:Sn.push(a)),a.patchFlag=-2,a}if(c0(i)&&(i=i.__vccOpts),t){t=Jg(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=Co(a)),ne(l)&&(gu(l)&&!Ht(l)&&(l=Oe({},l)),t.style=Bs(l))}const o=ve(i)?1:Ap(i)?128:fg(i)?64:ne(i)?4:Wt(i)?2:0;return yt(i,t,e,n,r,o,s,!0)}function Jg(i){return i?gu(i)||gp(i)?Oe({},i):i:null}function Ts(i,t,e=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=t?t0(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Cp(c),ref:t&&t.ref?e&&s?Ht(s)?s.concat(ya(t)):[s,ya(t)]:ya(t):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==en?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ts(i.ssContent),ssFallback:i.ssFallback&&Ts(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&xu(u,l.clone(u)),u}function Ea(i=" ",t=0){return Ae(ll,null,i,t)}function Qg(i,t){const e=Ae(Ma,null,i);return e.staticCount=t,e}function Dc(i="",t=!1){return t?(_e(),jg(Ji,null,i)):Ae(Ji,null,i)}function Zn(i){return i==null||typeof i=="boolean"?Ae(Ji):Ht(i)?Ae(en,null,i.slice()):Rp(i)?xi(i):Ae(ll,null,String(i))}function xi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ts(i)}function Ua(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),Ua(i,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!gp(t)?t._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else if(Wt(t)){if(n&65){Ua(i,{default:t});return}t={default:t,_ctx:Pn},e=32}else t=String(t),n&64?(e=16,t=[Ea(t)]):e=8;i.children=t,i.shapeFlag|=e}function t0(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Co([t.class,n.class]));else if(r==="style")t.style=Bs([t.style,n.style]);else if(tl(r)){const s=t[r],o=n[r];o&&s!==o&&!(Ht(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!el(r)&&(t[r]=o)}else r!==""&&(t[r]=n[r])}return t}function Yn(i,t,e,n=null){Gn(i,t,7,[e,n])}const e0=hp();let n0=0;function i0(i,t,e){const n=i.type,r=(t?t.appContext:i.appContext)||e0,s={uid:n0++,vnode:i,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new w_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xp(n,r),emitsOptions:dp(n,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:n.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Dg.bind(null,s),i.ce&&i.ce(s),s}let $e=null;const r0=()=>$e||Pn;let Na,Ic;{const i=il(),t=(e,n)=>{let r;return(r=i[e])||(r=i[e]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Na=t("__VUE_INSTANCE_SETTERS__",e=>$e=e),Ic=t("__VUE_SSR_SETTERS__",e=>xo=e)}const Io=i=>{const t=$e;return Na(i),i.scope.on(),()=>{i.scope.off(),Na(t)}},hf=()=>{$e&&$e.scope.off(),Na(null)};function Pp(i){return i.vnode.shapeFlag&4}let xo=!1;function s0(i,t=!1,e=!1){t&&Ic(t);const{props:n,children:r}=i.vnode,s=Pp(i);Bg(i,n,s,t),Vg(i,r,e||t);const o=s?o0(i,t):void 0;return t&&Ic(!1),o}function o0(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Eg);const{setup:n}=e;if(n){oi();const r=i.setupContext=n.length>1?l0(i):null,s=Io(i),o=Po(n,i,0,[i.props,r]),a=Pd(o);if(ai(),s(),(a||i.sp)&&!ao(i)&&op(i),a){if(o.then(hf,hf),t)return o.then(l=>{df(i,l)}).catch(l=>{sl(l,i,0)});i.asyncDep=o}else df(i,o)}else Lp(i)}function df(i,t,e){Wt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ne(t)&&(i.setupState=Jd(t)),Lp(i)}function Lp(i,t,e){const n=i.type;i.render||(i.render=n.render||ri);{const r=Io(i);oi();try{bg(i)}finally{ai(),r()}}}const a0={get(i,t){return ze(i,"get",""),i[t]}};function l0(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,a0),slots:i.slots,emit:i.emit,expose:t}}function cl(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Jd(q_(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in lo)return lo[e](i)},has(t,e){return e in t||e in lo}})):i.proxy}function c0(i){return Wt(i)&&"__vccOpts"in i}const u0=(i,t)=>J_(i,t,xo),f0="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Uc;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{Uc=pf.createPolicy("vue",{createHTML:i=>i})}catch{}const Dp=Uc?i=>Uc.createHTML(i):i=>i,h0="http://www.w3.org/2000/svg",d0="http://www.w3.org/1998/Math/MathML",gi=typeof document<"u"?document:null,mf=gi&&gi.createElement("template"),p0={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const r=t==="svg"?gi.createElementNS(h0,i):t==="mathml"?gi.createElementNS(d0,i):e?gi.createElement(i,{is:e}):gi.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>gi.createTextNode(i),createComment:i=>gi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>gi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{mf.innerHTML=Dp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=mf.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},m0=Symbol("_vtc");function _0(i,t,e){const n=i[m0];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Oa=Symbol("_vod"),Ip=Symbol("_vsh"),g0={name:"show",beforeMount(i,{value:t},{transition:e}){i[Oa]=i.style.display==="none"?"":i.style.display,e&&t?e.beforeEnter(i):Ws(i,t)},mounted(i,{value:t},{transition:e}){e&&t&&e.enter(i)},updated(i,{value:t,oldValue:e},{transition:n}){!t!=!e&&(n?t?(n.beforeEnter(i),Ws(i,!0),n.enter(i)):n.leave(i,()=>{Ws(i,!1)}):Ws(i,t))},beforeUnmount(i,{value:t}){Ws(i,t)}};function Ws(i,t){i.style.display=t?i[Oa]:"none",i[Ip]=!t}const v0=Symbol(""),x0=/(?:^|;)\s*display\s*:/;function S0(i,t,e){const n=i.style,r=ve(e);let s=!1;if(e&&!r){if(t)if(ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Qs(n,a,"")}else for(const o in t)e[o]==null&&Qs(n,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?y0(i,o,!ve(t)&&t?t[o]:void 0,a)||Qs(n,o,a):Qs(n,o,"")}}else if(r){if(t!==e){const o=n[v0];o&&(e+=";"+o),n.cssText=e,s=x0.test(e)}}else t&&i.removeAttribute("style");Oa in i&&(i[Oa]=s?n.display:"",i[Ip]&&(n.display="none"))}const _f=/\s*!important$/;function Qs(i,t,e){if(Ht(e))e.forEach(n=>Qs(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=M0(i,t);_f.test(e)?i.setProperty(Or(n),e.replace(_f,""),"important"):i[n]=e}}const gf=["Webkit","Moz","ms"],Ll={};function M0(i,t){const e=Ll[t];if(e)return e;let n=kn(t);if(n!=="filter"&&n in i)return Ll[t]=n;n=Id(n);for(let r=0;r<gf.length;r++){const s=gf[r]+n;if(s in i)return Ll[t]=s}return t}function y0(i,t,e,n){return i.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ve(n)&&e===n}const vf="http://www.w3.org/1999/xlink";function xf(i,t,e,n,r,s=T_(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(vf,t.slice(6,t.length)):i.setAttributeNS(vf,t,e):e==null||s&&!Nd(e)?i.removeAttribute(t):i.setAttribute(t,s?"":si(e)?String(e):e)}function Sf(i,t,e,n,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?Dp(e):e);return}const s=i.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=Nd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(r||t)}function as(i,t,e,n){i.addEventListener(t,e,n)}function E0(i,t,e,n){i.removeEventListener(t,e,n)}const Mf=Symbol("_vei");function b0(i,t,e,n,r=null){const s=i[Mf]||(i[Mf]={}),o=s[t];if(n&&o)o.value=n;else{const[a,l]=w0(t);if(n){const c=s[t]=P0(n,r);as(i,a,c,l)}else o&&(E0(i,a,o,l),s[t]=void 0)}}const T0=/(Once|Passive|Capture)$/,A0=/^on:?(?:Once|Passive|Capture)$/;function w0(i){let t,e;for(;(e=i.match(T0))&&!A0.test(i);)t||(t={}),i=i.slice(0,i.length-e[1].length),t[e[1].toLowerCase()]=!0;return[i[2]===":"?i.slice(3):Or(i.slice(2)),t]}let Dl=0;const R0=Promise.resolve(),C0=()=>Dl||(R0.then(()=>Dl=0),Dl=Date.now());function P0(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;const r=e.value;if(Ht(r)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const o=r.slice(),a=[n];for(let l=0;l<o.length&&!n._stopped;l++){const c=o[l];c&&Gn(c,t,5,a)}}else Gn(r,t,5,[n])};return e.value=i,e.attached=C0(),e}const yf=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,L0=(i,t,e,n,r,s)=>{const o=r==="svg";t==="class"?_0(i,n,o):t==="style"?S0(i,e,n):tl(t)?el(t)||b0(i,t,e,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):D0(i,t,n,o))?(Sf(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xf(i,t,n,o,s,t!=="value")):i._isVueCE&&(I0(i,t)||i._def.__asyncLoader&&(/[A-Z]/.test(t)||!ve(n)))?Sf(i,kn(t),n,s,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),xf(i,t,n,o))};function D0(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&yf(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yf(t)&&ve(e)?!1:t in i}function I0(i,t){const e=i._def.props;if(!e)return!1;const n=kn(t);return Array.isArray(e)?e.some(r=>kn(r)===n):Object.keys(e).some(r=>kn(r)===n)}const Ef=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Ht(t)?e=>va(t,e):t};function U0(i){i.target.composing=!0}function bf(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Il=Symbol("_assign");function Tf(i,t,e){return t&&(i=i.trim()),e&&(i=cu(i)),i}const Ul={created(i,{modifiers:{lazy:t,trim:e,number:n}},r){i[Il]=Ef(r);const s=n||r.props&&r.props.type==="number";as(i,t?"change":"input",o=>{o.target.composing||i[Il](Tf(i.value,e,s))}),(e||s)&&as(i,"change",()=>{i.value=Tf(i.value,e,s)}),t||(as(i,"compositionstart",U0),as(i,"compositionend",bf),as(i,"change",bf))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:r,number:s}},o){if(i[Il]=Ef(o),i.composing)return;const a=(s||i.type==="number")&&!/^0\d/.test(i.value)?cu(i.value):i.value,l=t??"";if(a===l)return;const c=i.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===i&&i.type!=="range"&&(n&&t===e||r&&i.value.trim()===l)||(i.value=l)}},N0=["ctrl","shift","alt","meta"],O0={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>N0.some(e=>i[`${e}Key`]&&!t.includes(e))},F0=(i,t)=>{if(!i)return i;const e=i._withMods||(i._withMods={}),n=t.join(".");return e[n]||(e[n]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=O0[t[o]];if(a&&a(r,t))return}return i(r,...s)})},B0=Oe({patchProp:L0},p0);let Af;function z0(){return Af||(Af=Wg(B0))}const k0=(...i)=>{const t=z0().createApp(...i),{mount:e}=t;return t.mount=n=>{const r=V0(n);if(!r)return;const s=t._component;!Wt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,H0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function H0(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function V0(i){return ve(i)?document.querySelector(i):i}var wf="1.3.25";function Up(i,t,e){return Math.max(i,Math.min(t,e))}function G0(i,t,e){return(1-e)*i+e*t}function W0(i,t,e,n){return G0(i,t,1-Math.exp(-e*n))}function X0(i,t){return(i%t+t)%t}var Y0=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const e=Up(0,this.currentTime/this.duration,1);t=e>=1;const n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=W0(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function q0(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var $0=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=i,this.content=t,e&&(this.debouncedResize=q0(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Np=class{events={};emit(i,...t){const e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}};const K0=100/6,Ii={passive:!1};function Rf(i,t){return i===1?K0:i===2?t:1}var j0=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Np;constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ii),this.element.addEventListener("touchstart",this.onTouchStart,Ii),this.element.addEventListener("touchmove",this.onTouchMove,Ii),this.element.addEventListener("touchend",this.onTouchEnd,Ii)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ii),this.element.removeEventListener("touchstart",this.onTouchStart,Ii),this.element.removeEventListener("touchmove",this.onTouchMove,Ii),this.element.removeEventListener("touchend",this.onTouchEnd,Ii)}onTouchStart=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=Rf(n,this.window.width),s=Rf(n,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Cf=i=>Math.min(1,1.001-2**(-10*i));var Z0=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Y0;emitter=new Np;dimensions;virtualScroll;constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:v=!1,anchors:y=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:L=T,stopInertiaOnNavigate:E=!1}={}){window.lenisVersion=wf,window.lenis||(window.lenis={}),window.lenis.version=wf,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Cf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:v,anchors:y,autoToggle:C,allowNestedScroll:w,naiveDimensions:L,stopInertiaOnNavigate:E},this.dimensions=new $0(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new j0(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}};onPointerDown=i=>{i.button===1&&this.reset()};isTouchOnSelectionHandle(i){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=i.targetTouches[0]??i.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-r.left,e.clientY-r.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=r&&this.options.syncTouch,d=r&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=i,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(g=h),g){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Up(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Cf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,l,c,u,f,h,d,g;if(n-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(i);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,a=f>d,l=h>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=h,r.clientWidth=d,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,S,v,y,C;if(_==="horizontal")m=Math.round(i.scrollLeft),p=f-d,S=t,v=s,y=a,C=c;else if(_==="vertical")m=Math.round(i.scrollTop),p=h-g,S=e,v=o,y=l,C=u;else return!1;return!C&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&v&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?X0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yu="165",kr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J0=0,Pf=1,Q0=2,Op=1,tv=2,_i=3,Qi=0,sn=1,Ei=2,$i=0,vs=1,cs=2,Lf=3,Df=4,ev=5,Er=100,nv=101,iv=102,rv=103,sv=104,ov=200,av=201,lv=202,cv=203,Nc=204,Oc=205,uv=206,fv=207,hv=208,dv=209,pv=210,mv=211,_v=212,gv=213,vv=214,xv=0,Sv=1,Mv=2,Fa=3,yv=4,Ev=5,bv=6,Tv=7,Fp=0,Av=1,wv=2,Ki=0,Rv=1,Cv=2,Pv=3,Lv=4,Dv=5,Iv=6,Uv=7,Bp=300,As=301,ws=302,Fc=303,Bc=304,ul=306,zc=1e3,Tr=1001,kc=1002,Ln=1003,Nv=1004,Wo=1005,zn=1006,Nl=1007,Ar=1008,tr=1009,Ov=1010,Fv=1011,Ba=1012,zp=1013,Rs=1014,Wi=1015,fl=1016,kp=1017,Hp=1018,Cs=1020,Bv=35902,zv=1021,kv=1022,ni=1023,Hv=1024,Vv=1025,xs=1026,Ps=1027,Gv=1028,Vp=1029,Wv=1030,Gp=1031,Wp=1033,Ol=33776,Fl=33777,Bl=33778,zl=33779,If=35840,Uf=35841,Nf=35842,Of=35843,Ff=36196,Bf=37492,zf=37496,kf=37808,Hf=37809,Vf=37810,Gf=37811,Wf=37812,Xf=37813,Yf=37814,qf=37815,$f=37816,Kf=37817,jf=37818,Zf=37819,Jf=37820,Qf=37821,kl=36492,th=36494,eh=36495,Xv=36283,nh=36284,ih=36285,rh=36286,Yv=3200,qv=3201,$v=0,Kv=1,Gi="",$n="srgb",sr="srgb-linear",Eu="display-p3",hl="display-p3-linear",za="linear",le="srgb",ka="rec709",Ha="p3",Vr=7680,sh=519,jv=512,Zv=513,Jv=514,Xp=515,Qv=516,tx=517,ex=518,nx=519,oh=35044,ah="300 es",bi=2e3,Va=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Hc=180/Math.PI;function Uo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function ix(i,t){return(i%t+t)%t}function Hl(i,t,e){return(1-e)*i+e*t}function Xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rx={DEG2RAD:ba};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],S=r[1],v=r[4],y=r[7],C=r[2],w=r[5],T=r[8];return s[0]=o*_+a*S+l*C,s[3]=o*m+a*v+l*w,s[6]=o*p+a*y+l*T,s[1]=c*_+u*S+f*C,s[4]=c*m+u*v+f*w,s[7]=c*p+u*y+f*T,s[2]=h*_+d*S+g*C,s[5]=h*m+d*v+g*w,s[8]=h*p+d*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vl=new Yt;function Yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sx(){const i=Ga("canvas");return i.style.display="block",i}const lh={};function qp(i){i in lh||(lh[i]=!0,console.warn(i))}function ox(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ch=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xo={[sr]:{transfer:za,primaries:ka,toReference:i=>i,fromReference:i=>i},[$n]:{transfer:le,primaries:ka,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hl]:{transfer:za,primaries:Ha,toReference:i=>i.applyMatrix3(uh),fromReference:i=>i.applyMatrix3(ch)},[Eu]:{transfer:le,primaries:Ha,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uh),fromReference:i=>i.applyMatrix3(ch).convertLinearToSRGB()}},ax=new Set([sr,hl]),te={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ax.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Xo[t].toReference,r=Xo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Xo[i].primaries},getTransfer:function(i){return i===Gi?za:Xo[i].transfer}};function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gr;class lx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gr===void 0&&(Gr=Ga("canvas")),Gr.width=t.width,Gr.height=t.height;const n=Gr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cx=0;class $p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Uo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wl(r[o].image)):s.push(Wl(r[o]))}else s=Wl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ux=0;class on extends Fr{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Tr,r=Tr,s=zn,o=Ar,a=ni,l=tr,c=on.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Uo(),this.name="",this.source=new $p(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zc:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zc:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Bp;on.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,r=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,C=(p+1)/2,w=(u+h)/4,T=(f+_)/4,L=(g+m)/4;return v>y&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=T/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=T/s,r=L/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fx extends Fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new on(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $p(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends fx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kp extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,p*S);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*S;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new H,fh=new Nr;class No{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),qo.subVectors(this.max,Ys),Wr.subVectors(t.a,Ys),Xr.subVectors(t.b,Ys),Yr.subVectors(t.c,Ys),Ui.subVectors(Xr,Wr),Ni.subVectors(Yr,Xr),hr.subVectors(Wr,Yr);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-hr.z,hr.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,hr.z,0,-hr.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-hr.y,hr.x,0];return!Yl(e,Wr,Xr,Yr,qo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Wr,Xr,Yr,qo))?!1:($o.crossVectors(Ui,Ni),e=[$o.x,$o.y,$o.z],Yl(e,Wr,Xr,Yr,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,Yo=new No,Wr=new H,Xr=new H,Yr=new H,Ui=new H,Ni=new H,hr=new H,Ys=new H,qo=new H,$o=new H,dr=new H;function Yl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){dr.fromArray(i,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=t.dot(dr),c=e.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dx=new No,qs=new H,ql=new H;class Oo{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dx.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(qs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(ql)),this.expandByPoint(qs.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new H,$l=new H,Ko=new H,Oi=new H,Kl=new H,jo=new H,jl=new H;class dl{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){$l.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub($l);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=Oi.dot(this.direction),l=-Oi.dot(Ko),c=Oi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($l).addScaledVector(Ko,h),d}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),r=hi.dot(hi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,r,s){Kl.subVectors(e,t),jo.subVectors(n,t),jl.crossVectors(Kl,jo);let o=this.direction.dot(jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);const l=a*this.direction.dot(jo.crossVectors(Oi,jo));if(l<0)return null;const c=a*this.direction.dot(Kl.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(jl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/qr.setFromMatrixColumn(t,0).length(),s=1/qr.setFromMatrixColumn(t,1).length(),o=1/qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(px,t,mx)}lookAt(t,e,n){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Fi.crossVectors(n,mn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Fi.crossVectors(n,mn)),Fi.normalize(),Zo.crossVectors(mn,Fi),r[0]=Fi.x,r[4]=Zo.x,r[8]=mn.x,r[1]=Fi.y,r[5]=Zo.y,r[9]=mn.y,r[2]=Fi.z,r[6]=Zo.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],y=n[11],C=n[15],w=r[0],T=r[4],L=r[8],E=r[12],b=r[1],D=r[5],X=r[9],V=r[13],G=r[2],Y=r[6],z=r[10],F=r[14],N=r[3],ft=r[7],dt=r[11],mt=r[15];return s[0]=o*w+a*b+l*G+c*N,s[4]=o*T+a*D+l*Y+c*ft,s[8]=o*L+a*X+l*z+c*dt,s[12]=o*E+a*V+l*F+c*mt,s[1]=u*w+f*b+h*G+d*N,s[5]=u*T+f*D+h*Y+d*ft,s[9]=u*L+f*X+h*z+d*dt,s[13]=u*E+f*V+h*F+d*mt,s[2]=g*w+_*b+m*G+p*N,s[6]=g*T+_*D+m*Y+p*ft,s[10]=g*L+_*X+m*z+p*dt,s[14]=g*E+_*V+m*F+p*mt,s[3]=S*w+v*b+y*G+C*N,s[7]=S*T+v*D+y*Y+C*ft,s[11]=S*L+v*X+y*z+C*dt,s[15]=S*E+v*V+y*F+C*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=e*S+n*v+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=S*T,t[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*T,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*T,t[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*T,t[4]=v*T,t[5]=(u*m*s-g*h*s+g*r*d-e*m*d-u*r*p+e*h*p)*T,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*T,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*T,t[8]=y*T,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*p-e*f*p)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=C*T,t[13]=(u*_*r-g*f*r+g*n*h-e*_*h-u*n*m+e*f*m)*T,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*f*r-u*a*r+u*n*l-e*f*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,v=l*u,y=l*f,C=n.x,w=n.y,T=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+y)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+p))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(g+v)*T,r[9]=(m-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Fn.copy(this);const c=1/s,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,e.setFromRotationMatrix(Fn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=bi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let d,g;if(a===bi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Va)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=bi){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(o-s),h=(e+t)*c,d=(n+r)*u;let g,_;if(a===bi)g=(o+s)*f,_=-2*f;else if(a===Va)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qr=new H,Fn=new Me,px=new H(0,0,0),mx=new H(1,1,1),Fi=new H,Zo=new H,mn=new H,hh=new Me,dh=new Nr;class Ai{constructor(t=0,e=0,n=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class jp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _x=0;const ph=new H,$r=new Nr,di=new Me,Jo=new H,$s=new H,gx=new H,vx=new Nr,mh=new H(1,0,0),_h=new H(0,1,0),gh=new H(0,0,1),vh={type:"added"},xx={type:"removed"},Kr={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Ze extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new H,e=new Ai,n=new Nr,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Yt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt($s,Jo,this.up):di.lookAt(Jo,$s,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(di),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xx),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ze.DEFAULT_UP=new H(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new H,pi=new H,Jl=new H,mi=new H,jr=new H,Zr=new H,xh=new H,Ql=new H,tc=new H,ec=new H;class ti{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Bn.subVectors(t,e),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Bn.subVectors(r,e),pi.subVectors(n,e),Jl.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(pi),l=Bn.dot(Jl),c=pi.dot(pi),u=pi.dot(Jl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(t,e,n,r){return Bn.subVectors(n,e),pi.subVectors(t,e),Bn.cross(pi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;jr.subVectors(r,n),Zr.subVectors(s,n),Ql.subVectors(t,n);const l=jr.dot(Ql),c=Zr.dot(Ql);if(l<=0&&c<=0)return e.copy(n);tc.subVectors(t,r);const u=jr.dot(tc),f=Zr.dot(tc);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(jr,o);ec.subVectors(t,s);const d=jr.dot(ec),g=Zr.dot(ec);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return xh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(xh,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(jr,o).addScaledVector(Zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=ix(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=nc(o,s,t+1/3),this.g=nc(o,s,t),this.b=nc(o,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){const n=Zp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Gl(t.r),this.g=Gl(t.g),this.b=Gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return te.fromWorkingColorSpace(Be.copy(this),t),Math.round(qe(Be.r*255,0,255))*65536+Math.round(qe(Be.g*255,0,255))*256+Math.round(qe(Be.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,s=Be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=$n){te.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Qo);const n=Hl(Bi.h,Qo.h,e),r=Hl(Bi.s,Qo.s,e),s=Hl(Bi.l,Qo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Jt;Jt.NAMES=Zp;let Sx=0;class ks extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=vs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uo extends ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new H,ta=new Gt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}}class Jp extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qp extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Je extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mx=0;const Rn=new Me,ic=new Ze,Jr=new H,_n=new No,Ks=new No,Le=new H;class Ke extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yp(t)?Qp:Jp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(_n.min,Ks.min),_n.expandByPoint(Le),Le.addVectors(_n.max,Ks.max),_n.expandByPoint(Le)):(_n.expandByPoint(Ks.min),_n.expandByPoint(Ks.max))}_n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(t,c),Le.add(Jr)),r=Math.max(r,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new H,l[L]=new H;const c=new H,u=new H,f=new H,h=new Gt,d=new Gt,g=new Gt,_=new H,m=new H;function p(L,E,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[E].add(_),a[b].add(_),l[L].add(m),l[E].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,E=S.length;L<E;++L){const b=S[L],D=b.start,X=b.count;for(let V=D,G=D+X;V<G;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const v=new H,y=new H,C=new H,w=new H;function T(L){C.fromBufferAttribute(r,L),w.copy(C);const E=a[L];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const D=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,D)}for(let L=0,E=S.length;L<E;++L){const b=S[L],D=b.start,X=b.count;for(let V=D,G=D+X;V<G;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new Me,pr=new dl,ea=new Oo,Mh=new H,Qr=new H,ts=new H,es=new H,rc=new H,na=new H,ia=new Gt,ra=new Gt,sa=new Gt,yh=new H,Eh=new H,bh=new H,oa=new H,aa=new H;class Dn extends Ze{constructor(t=new Ke,e=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(rc.fromBufferAttribute(f,t),o?na.addScaledVector(rc,u):na.addScaledVector(rc.sub(e),u))}e.add(na)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),pr.copy(t.ray).recast(t.near),!(ea.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ea,Mh)===null||pr.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(Sh.copy(s).invert(),pr.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=v;y<C;y+=3){const w=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);r=la(this,p,t,n,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=la(this,o,t,n,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=v;y<C;y+=3){const w=y,T=y+1,L=y+2;r=la(this,p,t,n,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,y=m+2;r=la(this,o,t,n,c,u,f,S,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function yx(i,t,e,n,r,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Qi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Qr),i.getVertexPosition(l,ts),i.getVertexPosition(c,es);const u=yx(i,t,e,n,Qr,ts,es,oa);if(u){r&&(ia.fromBufferAttribute(r,a),ra.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),u.uv=ti.getInterpolation(oa,Qr,ts,es,ia,ra,sa,new Gt)),s&&(ia.fromBufferAttribute(s,a),ra.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),u.uv1=ti.getInterpolation(oa,Qr,ts,es,ia,ra,sa,new Gt)),o&&(yh.fromBufferAttribute(o,a),Eh.fromBufferAttribute(o,l),bh.fromBufferAttribute(o,c),u.normal=ti.getInterpolation(oa,Qr,ts,es,yh,Eh,bh,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};ti.getNormal(Qr,ts,es,f.normal),u.face=f}return u}class Fo extends Ke{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(f,2));function g(_,m,p,S,v,y,C,w,T,L,E){const b=y/T,D=C/L,X=y/2,V=C/2,G=w/2,Y=T+1,z=L+1;let F=0,N=0;const ft=new H;for(let dt=0;dt<z;dt++){const mt=dt*D-V;for(let vt=0;vt<Y;vt++){const Bt=vt*b-X;ft[_]=Bt*S,ft[m]=mt*v,ft[p]=G,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=w>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push(vt/T),f.push(1-dt/L),F+=1}}for(let dt=0;dt<L;dt++)for(let mt=0;mt<T;mt++){const vt=h+mt+Y*dt,Bt=h+mt+Y*(dt+1),nt=h+(mt+1)+Y*(dt+1),at=h+(mt+1)+Y*dt;l.push(vt,Bt,at),l.push(Bt,nt,at),N+=6}a.addGroup(d,N,E),d+=N,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const r in n)t[r]=n[r]}return t}function Ex(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const bx={clone:Ls,merge:Xe};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Ex(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class em extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new H,Th=new Gt,Ah=new Gt;class vn extends em{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Th,Ah),e.subVectors(Ah,Th)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,is=1;class wx extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(ns,is,t,e);r.layers=this.layers,this.add(r);const s=new vn(ns,is,t,e);s.layers=this.layers,this.add(s);const o=new vn(ns,is,t,e);o.layers=this.layers,this.add(o);const a=new vn(ns,is,t,e);a.layers=this.layers,this.add(a);const l=new vn(ns,is,t,e);l.layers=this.layers,this.add(l);const c=new vn(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nm extends on{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rx extends Ur{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new nm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fo(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:$i});s.uniforms.tEquirect.value=e;const o=new Dn(r,s),a=e.minFilter;return e.minFilter===Ar&&(e.minFilter=zn),new wx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const sc=new H,Cx=new H,Px=new Yt;class Vi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=sc.subVectors(n,e).cross(Cx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Px.getNormalMatrix(t),r=this.coplanarPoint(sc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Oo,ca=new H;class im{constructor(t=new Vi,e=new Vi,n=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,h-c,m-d,y-p).normalize(),n[1].setComponents(l+s,h+c,m+d,y+p).normalize(),n[2].setComponents(l+o,h+u,m+g,y+S).normalize(),n[3].setComponents(l-o,h-u,m-g,y-S).normalize(),n[4].setComponents(l-a,h-f,m-_,y-v).normalize(),e===bi)n[5].setComponents(l+a,h+f,m+_,y+v).normalize();else if(e===Va)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ca.x=r.normal.x>0?t.max.x:t.min.x,ca.y=r.normal.y>0?t.max.y:t.min.y,ca.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Lx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class pl extends Ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,y=S+c*(p+1),C=S+1+c*(p+1),w=S+1+c*p;d.push(v,y,w),d.push(y,C,w)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ix=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,eS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ny=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Dx,alphahash_pars_fragment:Ix,alphamap_fragment:Ux,alphamap_pars_fragment:Nx,alphatest_fragment:Ox,alphatest_pars_fragment:Fx,aomap_fragment:Bx,aomap_pars_fragment:zx,batching_pars_vertex:kx,batching_vertex:Hx,begin_vertex:Vx,beginnormal_vertex:Gx,bsdfs:Wx,iridescence_fragment:Xx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:qx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:jx,color_fragment:Zx,color_pars_fragment:Jx,color_pars_vertex:Qx,color_vertex:tS,common:eS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:oS,emissivemap_pars_fragment:aS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:fS,envmap_pars_fragment:hS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:bS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:_S,fog_fragment:gS,fog_pars_fragment:vS,gradientmap_pars_fragment:xS,lightmap_pars_fragment:SS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:yS,lights_pars_begin:ES,lights_toon_fragment:TS,lights_toon_pars_fragment:AS,lights_phong_fragment:wS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:PS,lights_fragment_begin:LS,lights_fragment_maps:DS,lights_fragment_end:IS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:FS,map_fragment:BS,map_pars_fragment:zS,map_particle_fragment:kS,map_particle_pars_fragment:HS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:GS,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:YS,morphtarget_pars_vertex:qS,morphtarget_vertex:$S,normal_fragment_begin:KS,normal_fragment_maps:jS,normal_pars_fragment:ZS,normal_pars_vertex:JS,normal_vertex:QS,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:_M,skinbase_vertex:gM,skinning_pars_vertex:vM,skinning_vertex:xM,skinnormal_vertex:SM,specularmap_fragment:MM,specularmap_pars_fragment:yM,tonemapping_fragment:EM,tonemapping_pars_fragment:bM,transmission_fragment:TM,transmission_pars_fragment:AM,uv_pars_fragment:wM,uv_pars_vertex:RM,uv_vertex:CM,worldpos_vertex:PM,background_vert:LM,background_frag:DM,backgroundCube_vert:IM,backgroundCube_frag:UM,cube_vert:NM,cube_frag:OM,depth_vert:FM,depth_frag:BM,distanceRGBA_vert:zM,distanceRGBA_frag:kM,equirect_vert:HM,equirect_frag:VM,linedashed_vert:GM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:YM,meshlambert_vert:qM,meshlambert_frag:$M,meshmatcap_vert:KM,meshmatcap_frag:jM,meshnormal_vert:ZM,meshnormal_frag:JM,meshphong_vert:QM,meshphong_frag:ty,meshphysical_vert:ey,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:ry,points_vert:sy,points_frag:oy,shadow_vert:ay,shadow_frag:ly,sprite_vert:cy,sprite_frag:uy},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Jn={basic:{uniforms:Xe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Xe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Xe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Xe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Xe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Xe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Xe([St.points,St.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Xe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Xe([St.common,St.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Xe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Xe([St.sprite,St.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Xe([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Xe([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Jn.physical={uniforms:Xe([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ua={r:0,b:0,g:0},_r=new Ai,fy=new Me;function hy(i,t,e,n,r,s,o){const a=new Jt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const y=g(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===ul)?(u===void 0&&(u=new Dn(new Fo(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Ls(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(v.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fy.makeRotationFromEuler(_r)),u.material.toneMapped=te.getTransfer(y.colorSpace)!==le,(f!==y||h!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Dn(new pl(2,2),new er({name:"BackgroundMaterial",uniforms:Ls(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(ua,tm(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function dy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(b,D,X,V,G){let Y=!1;const z=f(V,X,D);s!==z&&(s=z,c(s.object)),Y=d(b,V,X,G),Y&&g(b,V,X,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(b,D,X,V),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,D,X){const V=X.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let z=Y[V];return z===void 0&&(z=h(l()),Y[V]=z),z}function h(b){const D=[],X=[],V=[];for(let G=0;G<e;G++)D[G]=0,X[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:b,attributes:{},index:null}}function d(b,D,X,V){const G=s.attributes,Y=D.attributes;let z=0;const F=X.getAttributes();for(const N in F)if(F[N].location>=0){const dt=G[N];let mt=Y[N];if(mt===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;z++}return s.attributesNum!==z||s.index!==V}function g(b,D,X,V){const G={},Y=D.attributes;let z=0;const F=X.getAttributes();for(const N in F)if(F[N].location>=0){let dt=Y[N];dt===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor));const mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),G[N]=mt,z++}s.attributes=G,s.attributesNum=z,s.index=V}function _(){const b=s.newAttributes;for(let D=0,X=b.length;D<X;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const X=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;X[b]=1,V[b]===0&&(i.enableVertexAttribArray(b),V[b]=1),G[b]!==D&&(i.vertexAttribDivisor(b,D),G[b]=D)}function S(){const b=s.newAttributes,D=s.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==b[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function v(b,D,X,V,G,Y,z){z===!0?i.vertexAttribIPointer(b,D,X,G,Y):i.vertexAttribPointer(b,D,X,V,G,Y)}function y(b,D,X,V){_();const G=V.attributes,Y=X.getAttributes(),z=D.defaultAttributeValues;for(const F in Y){const N=Y[F];if(N.location>=0){let ft=G[F];if(ft===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){const dt=ft.normalized,mt=ft.itemSize,vt=t.get(ft);if(vt===void 0)continue;const Bt=vt.buffer,nt=vt.type,at=vt.bytesPerElement,Mt=nt===i.INT||nt===i.UNSIGNED_INT||ft.gpuType===zp;if(ft.isInterleavedBufferAttribute){const gt=ft.data,zt=gt.stride,Ot=ft.offset;if(gt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<N.locationSize;Rt++)p(N.location+Rt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Rt=0;Rt<N.locationSize;Rt++)m(N.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Rt=0;Rt<N.locationSize;Rt++)v(N.location+Rt,mt/N.locationSize,nt,dt,zt*at,(Ot+mt/N.locationSize*Rt)*at,Mt)}else{if(ft.isInstancedBufferAttribute){for(let gt=0;gt<N.locationSize;gt++)p(N.location+gt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let gt=0;gt<N.locationSize;gt++)m(N.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let gt=0;gt<N.locationSize;gt++)v(N.location+gt,mt/N.locationSize,nt,dt,mt*at,mt/N.locationSize*gt*at,Mt)}}else if(z!==void 0){const dt=z[F];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(N.location,dt);break;case 3:i.vertexAttrib3fv(N.location,dt);break;case 4:i.vertexAttrib4fv(N.location,dt);break;default:i.vertexAttrib1fv(N.location,dt)}}}}S()}function C(){L();for(const b in n){const D=n[b];for(const X in D){const V=D[X];for(const G in V)u(V[G].object),delete V[G];delete D[X]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const X in D){const V=D[X];for(const G in V)u(V[G].object),delete V[G];delete D[X]}delete n[b.id]}function T(b){for(const D in n){const X=n[D];if(X[b.id]===void 0)continue;const V=X[b.id];for(const G in V)u(V[G].object),delete V[G];delete X[b.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function py(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(c[d],u[d]);else{h.multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function my(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ni&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===fl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==tr&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wi&&!T)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function _y(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Vi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,v=S*4;let y=p.clippingState||null;l.value=y,y=u(g,h,v,d);for(let C=0;C!==v;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function gy(i){let t=new WeakMap;function e(o,a){return a===Fc?o.mapping=As:a===Bc&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Bc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rx(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class vy extends em{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,wh=[.125,.215,.35,.446,.526,.582],br=20,oc=new vy,Rh=new Jt;let ac=null,lc=0,cc=0,uc=!1;const Mr=(1+Math.sqrt(5))/2,rs=1/Mr,Ch=[new H(-Mr,rs,0),new H(Mr,rs,0),new H(-rs,0,Mr),new H(rs,0,Mr),new H(0,Mr,-rs),new H(0,Mr,rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,lc,cc),this._renderer.xr.enabled=uc,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:fl,format:ni,colorSpace:sr,depthBuffer:!1},r=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xy(s)),this._blurMaterial=Sy(s,t,e)}return r}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,oc)}_sceneToCubeUV(t,e,n,r){const a=new vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rh),u.toneMapping=Ki,u.autoClear=!1;const d=new uo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Dn(new Fo,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Rh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;fa(r,S*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===As||t.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ch[(r-s-1)%Ch.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let S=0;for(let T=0;T<br;++T){const L=T/_,E=Math.exp(-L*L/2);p.push(E),T===0?S+=E:T<m&&(S+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[r],C=3*y*(r>v-us?r-v+us:0),w=4*(this._cubeSize-y);fa(e,C,w,3*y,2*y),l.setRenderTarget(e),l.render(f,oc)}}function xy(i){const t=[],e=[],n=[];let r=i;const s=i-us+1+wh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-us?l=wh[o-i+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,L=w>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(E,_*g*w),v.set(h,m*g*w);const b=[w,w,w,w,w,w];y.set(b,p*g*w)}const C=new Ke;C.setAttribute("position",new rn(S,_)),C.setAttribute("uv",new rn(v,m)),C.setAttribute("faceIndex",new rn(y,p)),t.push(C),r>us&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(i,t,e){const n=new Ur(i,t,e);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Sy(i,t,e){const n=new Float32Array(br),r=new H(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dh(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ih(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function My(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fc||l===Bc,u=l===As||l===ws;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ph(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Ph(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&qp("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ey(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,y=S.length;v<y;v+=3){const C=S[v+0],w=S[v+1],T=S[v+2];h.push(C,w,w,T,T,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const C=v+0,w=v+1,T=v+2;h.push(C,w,w,T,T,C)}}else return;const m=new(Yp(h)?Qp:Jp)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function by(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(h[m]/o,d[m]);else{_.multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<_.length;S++)e.update(p,n,_[S])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ty(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ay(i,t,e){const n=new WeakMap,r=new Ue;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*w*4*f),L=new Kp(T,C,w,f);L.type=Wi,L.needsUpdate=!0;const E=y*4;for(let D=0;D<f;D++){const X=p[D],V=S[D],G=v[D],Y=C*w*4*D;for(let z=0;z<X.count;z++){const F=z*E;g===!0&&(r.fromBufferAttribute(X,z),T[Y+F+0]=r.x,T[Y+F+1]=r.y,T[Y+F+2]=r.z,T[Y+F+3]=0),_===!0&&(r.fromBufferAttribute(V,z),T[Y+F+4]=r.x,T[Y+F+5]=r.y,T[Y+F+6]=r.z,T[Y+F+7]=0),m===!0&&(r.fromBufferAttribute(G,z),T[Y+F+8]=r.x,T[Y+F+9]=r.y,T[Y+F+10]=r.z,T[Y+F+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new Gt(C,w)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function wy(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class sm extends on{constructor(t,e,n,r,s,o,a,l,c,u=xs){if(u!==xs&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Rs),n===void 0&&u===Ps&&(n=Cs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const om=new on,am=new sm(1,1);am.compareFunction=Xp;const lm=new Kp,cm=new hx,um=new nm,Uh=[],Nh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Uh[r];if(s===void 0&&(s=new Float32Array(r),Uh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ry(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Ly(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Dy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),Ce(e,n)}}function Iy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Ce(e,n)}}function Uy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),Ce(e,n)}}function Ny(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Fy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function By(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function zy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ky(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Vy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Gy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?am:om;e.setTexture2D(t||s,r)}function Wy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||cm,r)}function Xy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||um,r)}function Yy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||lm,r)}function qy(i){switch(i){case 5126:return Ry;case 35664:return Cy;case 35665:return Py;case 35666:return Ly;case 35674:return Dy;case 35675:return Iy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return Oy;case 35668:case 35672:return Fy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}function $y(i,t){i.uniform1fv(this.addr,t)}function Ky(i,t){const e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function jy(i,t){const e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Zy(i,t){const e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Jy(i,t){const e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qy(i,t){const e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tE(i,t){const e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eE(i,t){i.uniform1iv(this.addr,t)}function nE(i,t){i.uniform2iv(this.addr,t)}function iE(i,t){i.uniform3iv(this.addr,t)}function rE(i,t){i.uniform4iv(this.addr,t)}function sE(i,t){i.uniform1uiv(this.addr,t)}function oE(i,t){i.uniform2uiv(this.addr,t)}function aE(i,t){i.uniform3uiv(this.addr,t)}function lE(i,t){i.uniform4uiv(this.addr,t)}function cE(i,t,e){const n=this.cache,r=t.length,s=ml(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||om,s[o])}function uE(i,t,e){const n=this.cache,r=t.length,s=ml(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||cm,s[o])}function fE(i,t,e){const n=this.cache,r=t.length,s=ml(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||um,s[o])}function hE(i,t,e){const n=this.cache,r=t.length,s=ml(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||lm,s[o])}function dE(i){switch(i){case 5126:return $y;case 35664:return Ky;case 35665:return jy;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return tE;case 5124:case 35670:return eE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return oE;case 36295:return aE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return hE}}class pE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qy(e.type)}}class mE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dE(e.type)}}class _E{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function zh(i,t){i.seq.push(t),i.map[t.id]=t}function gE(i,t,e){const n=i.name,r=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zh(e,c===void 0?new pE(a,i,t):new mE(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new _E(a),zh(e,f)),e=f}}}class Ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);gE(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vE=37297;let xE=0;function SE(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ME(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Ha&&e===ka?n="LinearDisplayP3ToLinearSRGB":t===ka&&e===Ha&&(n="LinearSRGBToLinearDisplayP3"),i){case sr:case hl:return[n,"LinearTransferOETF"];case $n:case Eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+SE(i.getShaderSource(t),o)}else return r}function yE(i,t){const e=ME(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function EE(i,t){let e;switch(t){case Rv:e="Linear";break;case Cv:e="Reinhard";break;case Pv:e="OptimizedCineon";break;case Lv:e="ACESFilmic";break;case Iv:e="AgX";break;case Uv:e="Neutral";break;case Dv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function TE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function AE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function Vh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(wE,CE)}const RE=new Map;function CE(i,t){let e=Xt[t];if(e===void 0){const n=RE.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(PE,LE)}function LE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function DE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Op?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function IE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case ws:t="ENVMAP_TYPE_CUBE";break;case ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function NE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fp:t="ENVMAP_BLENDING_MULTIPLY";break;case Av:t="ENVMAP_BLENDING_MIX";break;case wv:t="ENVMAP_BLENDING_ADD";break}return t}function OE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function FE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=DE(e),c=IE(e),u=UE(e),f=NE(e),h=OE(e),d=bE(e),g=TE(s),_=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?EE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,yE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=Vc(o),o=Vh(o,e),o=Gh(o,e),a=Vc(a),a=Vh(a,e),a=Gh(a,e),o=Wh(o),a=Wh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,y=S+p+a,C=kh(r,r.VERTEX_SHADER,v),w=kh(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(w).trim();let Y=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,w);else{const F=Hh(r,C,"vertex"),N=Hh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+F+`
`+N)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||G==="")&&(z=!1);z&&(D.diagnostics={runnable:Y,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(C),r.deleteShader(w),L=new Ta(r,_),E=AE(r,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,vE)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let BE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kE(t),e.set(t,n)),n}}class kE{constructor(t){this.id=BE++,this.code=t,this.usedTimes=0}}function HE(i,t,e,n,r,s,o){const a=new jp,l=new zE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,D,X,V){const G=X.fog,Y=V.geometry,z=E.isMeshStandardMaterial?X.environment:null,F=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),N=F&&F.mapping===ul?F.image.height:null,ft=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=dt!==void 0?dt.length:0;let vt=0;Y.morphAttributes.position!==void 0&&(vt=1),Y.morphAttributes.normal!==void 0&&(vt=2),Y.morphAttributes.color!==void 0&&(vt=3);let Bt,nt,at,Mt;if(ft){const $t=Jn[ft];Bt=$t.vertexShader,nt=$t.fragmentShader}else Bt=E.vertexShader,nt=E.fragmentShader,l.update(E),at=l.getVertexShaderID(E),Mt=l.getFragmentShaderID(E);const gt=i.getRenderTarget(),zt=V.isInstancedMesh===!0,Ot=V.isBatchedMesh===!0,Rt=!!E.map,U=!!E.matcap,P=!!F,I=!!E.aoMap,q=!!E.lightMap,K=!!E.bumpMap,et=!!E.normalMap,J=!!E.displacementMap,st=!!E.emissiveMap,lt=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,O=E.clearcoat>0,k=E.dispersion>0,j=E.iridescence>0,Q=E.sheen>0,pt=E.transmission>0,ut=x&&!!E.anisotropyMap,ot=O&&!!E.clearcoatMap,Tt=O&&!!E.clearcoatNormalMap,ct=O&&!!E.clearcoatRoughnessMap,Et=j&&!!E.iridescenceMap,Nt=j&&!!E.iridescenceThicknessMap,Lt=Q&&!!E.sheenColorMap,xt=Q&&!!E.sheenRoughnessMap,Ct=!!E.specularMap,Dt=!!E.specularColorMap,ae=!!E.specularIntensityMap,M=pt&&!!E.transmissionMap,it=pt&&!!E.thicknessMap,$=!!E.gradientMap,rt=!!E.alphaMap,ht=E.alphaTest>0,Pt=!!E.alphaHash,Vt=!!E.extensions;let de=Ki;E.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(de=i.toneMapping);const ye={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:Bt,fragmentShader:nt,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&V._colorsTexture!==null,instancing:zt,instancingColor:zt&&V.instanceColor!==null,instancingMorph:zt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:sr,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:U,envMap:P,envMapMode:P&&F.mapping,envMapCubeUVHeight:N,aoMap:I,lightMap:q,bumpMap:K,normalMap:et,displacementMap:h&&J,emissiveMap:st,normalMapObjectSpace:et&&E.normalMapType===Kv,normalMapTangentSpace:et&&E.normalMapType===$v,metalnessMap:lt,roughnessMap:A,anisotropy:x,anisotropyMap:ut,clearcoat:O,clearcoatMap:ot,clearcoatNormalMap:Tt,clearcoatRoughnessMap:ct,dispersion:k,iridescence:j,iridescenceMap:Et,iridescenceThicknessMap:Nt,sheen:Q,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:Ct,specularColorMap:Dt,specularIntensityMap:ae,transmission:pt,transmissionMap:M,thicknessMap:it,gradientMap:$,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Pt,combine:E.combine,mapUv:Rt&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:q&&_(E.lightMap.channel),bumpMapUv:K&&_(E.bumpMap.channel),normalMapUv:et&&_(E.normalMap.channel),displacementMapUv:J&&_(E.displacementMap.channel),emissiveMapUv:st&&_(E.emissiveMap.channel),metalnessMapUv:lt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:ot&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Ct&&_(E.specularMap.channel),specularColorMapUv:Dt&&_(E.specularColorMap.channel),specularIntensityMapUv:ae&&_(E.specularIntensityMap.channel),transmissionMapUv:M&&_(E.transmissionMap.channel),thicknessMapUv:it&&_(E.thicknessMap.channel),alphaMapUv:rt&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(et||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Rt||rt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===le,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)b.push(D),b.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(S(b,E),v(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const b=g[E.type];let D;if(b){const X=Jn[b];D=bx.clone(X.uniforms)}else D=E.uniforms;return D}function C(E,b){let D;for(let X=0,V=u.length;X<V;X++){const G=u[X];if(G.cacheKey===b){D=G,++D.usedTimes;break}}return D===void 0&&(D=new FE(i,b,E,s),u.push(D)),D}function w(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:L}}function VE(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function GE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||GE),n.length>1&&n.sort(h||Yh),r.length>1&&r.sort(h||Yh)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function WE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new qh,i.set(n,[o])):r>=s.length?(o=new qh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function XE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Jt};break;case"SpotLight":e={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function YE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qE=0;function $E(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function KE(i){const t=new XE,e=YE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,s=new Me,o=new Me;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,v=0,y=0,C=0,w=0,T=0;c.sort($E);for(let E=0,b=c.length;E<b;E++){const D=c[E],X=D.color,V=D.intensity,G=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*V,f+=X.g*V,h+=X.b*V;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],V);T++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,N=e.get(D);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=D.shadow.matrix,S++}n.directional[d]=z,d++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(X).multiplyScalar(V),z.distance=G,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const F=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,F.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,D.castShadow){const N=e.get(D);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=Y,y++}_++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(X).multiplyScalar(V),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const F=D.shadow,N=e.get(D);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(V),z.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=T,n.version=qE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function $h(i){const t=new KE(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new $h(i),t.set(r,[a])):s>=o.length?(a=new $h(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ZE extends ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JE extends ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eb(i,t,e){let n=new im;const r=new Gt,s=new Gt,o=new Ue,a=new ZE({depthPacking:qv}),l=new JE,c={},u=e.maxTextureSize,f={[Qi]:sn,[sn]:Qi,[Ei]:Ei},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:QE,fragmentShader:tb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let p=this.type;this.render=function(w,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending($i),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=p!==_i&&this.type===_i,G=p===_i&&this.type!==_i;for(let Y=0,z=w.length;Y<z;Y++){const F=w[Y],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ft=N.getFrameExtents();if(r.multiply(ft),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ft.x),r.x=s.x*ft.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ft.y),r.y=s.y*ft.y,N.mapSize.y=s.y)),N.map===null||V===!0||G===!0){const mt=this.type!==_i?{minFilter:Ln,magFilter:Ln}:{};N.map!==null&&N.map.dispose(),N.map=new Ur(r.x,r.y,mt),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const dt=N.getViewportCount();for(let mt=0;mt<dt;mt++){const vt=N.getViewport(mt);o.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),X.viewport(o),N.updateMatrices(F,mt),n=N.getFrustum(),y(T,L,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&S(N,L),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,D)};function S(w,T){const L=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,L,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,L,d,_,null)}function v(w,T,L,E){let b=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=b.uuid,V=T.uuid;let G=c[X];G===void 0&&(G={},c[X]=G);let Y=G[V];Y===void 0&&(Y=b.clone(),G[V]=Y,T.addEventListener("dispose",C)),b=Y}if(b.visible=T.visible,b.wireframe=T.wireframe,E===_i?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=i.properties.get(b);X.light=L}return b}function y(w,T,L,E,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===_i)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=t.update(w),G=w.material;if(Array.isArray(G)){const Y=V.groups;for(let z=0,F=Y.length;z<F;z++){const N=Y[z],ft=G[N.materialIndex];if(ft&&ft.visible){const dt=v(w,ft,E,b);w.onBeforeShadow(i,w,T,L,V,dt,N),i.renderBufferDirect(L,null,V,dt,w,N),w.onAfterShadow(i,w,T,L,V,dt,N)}}}else if(G.visible){const Y=v(w,G,E,b);w.onBeforeShadow(i,w,T,L,V,Y,null),i.renderBufferDirect(L,null,V,Y,w,null),w.onAfterShadow(i,w,T,L,V,Y,null)}}const X=w.children;for(let V=0,G=X.length;V<G;V++)y(X[V],T,L,E,b)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],b=w.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function nb(i){function t(){let M=!1;const it=new Ue;let $=null;const rt=new Ue(0,0,0,0);return{setMask:function(ht){$!==ht&&!M&&(i.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){M=ht},setClear:function(ht,Pt,Vt,de,ye){ye===!0&&(ht*=de,Pt*=de,Vt*=de),it.set(ht,Pt,Vt,de),rt.equals(it)===!1&&(i.clearColor(ht,Pt,Vt,de),rt.copy(it))},reset:function(){M=!1,$=null,rt.set(-1,0,0,0)}}}function e(){let M=!1,it=null,$=null,rt=null;return{setTest:function(ht){ht?Mt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(ht){it!==ht&&!M&&(i.depthMask(ht),it=ht)},setFunc:function(ht){if($!==ht){switch(ht){case xv:i.depthFunc(i.NEVER);break;case Sv:i.depthFunc(i.ALWAYS);break;case Mv:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case yv:i.depthFunc(i.EQUAL);break;case Ev:i.depthFunc(i.GEQUAL);break;case bv:i.depthFunc(i.GREATER);break;case Tv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ht}},setLocked:function(ht){M=ht},setClear:function(ht){rt!==ht&&(i.clearDepth(ht),rt=ht)},reset:function(){M=!1,it=null,$=null,rt=null}}}function n(){let M=!1,it=null,$=null,rt=null,ht=null,Pt=null,Vt=null,de=null,ye=null;return{setTest:function($t){M||($t?Mt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!M&&(i.stencilMask($t),it=$t)},setFunc:function($t,Ee,be){($!==$t||rt!==Ee||ht!==be)&&(i.stencilFunc($t,Ee,be),$=$t,rt=Ee,ht=be)},setOp:function($t,Ee,be){(Pt!==$t||Vt!==Ee||de!==be)&&(i.stencilOp($t,Ee,be),Pt=$t,Vt=Ee,de=be)},setLocked:function($t){M=$t},setClear:function($t){ye!==$t&&(i.clearStencil($t),ye=$t)},reset:function(){M=!1,it=null,$=null,rt=null,ht=null,Pt=null,Vt=null,de=null,ye=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,S=null,v=null,y=null,C=null,w=new Jt(0,0,0),T=0,L=!1,E=null,b=null,D=null,X=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,z=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=z>=2);let N=null,ft={};const dt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),vt=new Ue().fromArray(dt),Bt=new Ue().fromArray(mt);function nt(M,it,$,rt){const ht=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(M,Pt),i.texParameteri(M,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(M,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<$;Vt++)M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(it+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return Pt}const at={};at[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),s.setFunc(Fa),K(!1),et(Pf),Mt(i.CULL_FACE),I($i);function Mt(M){c[M]!==!0&&(i.enable(M),c[M]=!0)}function gt(M){c[M]!==!1&&(i.disable(M),c[M]=!1)}function zt(M,it){return u[M]!==it?(i.bindFramebuffer(M,it),u[M]=it,M===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),M===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(M,it){let $=h,rt=!1;if(M){$=f.get(it),$===void 0&&($=[],f.set(it,$));const ht=M.textures;if($.length!==ht.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Vt=ht.length;Pt<Vt;Pt++)$[Pt]=i.COLOR_ATTACHMENT0+Pt;$.length=ht.length,rt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,rt=!0);rt&&i.drawBuffers($)}function Rt(M){return d!==M?(i.useProgram(M),d=M,!0):!1}const U={[Er]:i.FUNC_ADD,[nv]:i.FUNC_SUBTRACT,[iv]:i.FUNC_REVERSE_SUBTRACT};U[rv]=i.MIN,U[sv]=i.MAX;const P={[ov]:i.ZERO,[av]:i.ONE,[lv]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[pv]:i.SRC_ALPHA_SATURATE,[hv]:i.DST_COLOR,[uv]:i.DST_ALPHA,[cv]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[dv]:i.ONE_MINUS_DST_COLOR,[fv]:i.ONE_MINUS_DST_ALPHA,[mv]:i.CONSTANT_COLOR,[_v]:i.ONE_MINUS_CONSTANT_COLOR,[gv]:i.CONSTANT_ALPHA,[vv]:i.ONE_MINUS_CONSTANT_ALPHA};function I(M,it,$,rt,ht,Pt,Vt,de,ye,$t){if(M===$i){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(Mt(i.BLEND),g=!0),M!==ev){if(M!==_||$t!==L){if((m!==Er||v!==Er)&&(i.blendEquation(i.FUNC_ADD),m=Er,v=Er),$t)switch(M){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}p=null,S=null,y=null,C=null,w.set(0,0,0),T=0,_=M,L=$t}return}ht=ht||it,Pt=Pt||$,Vt=Vt||rt,(it!==m||ht!==v)&&(i.blendEquationSeparate(U[it],U[ht]),m=it,v=ht),($!==p||rt!==S||Pt!==y||Vt!==C)&&(i.blendFuncSeparate(P[$],P[rt],P[Pt],P[Vt]),p=$,S=rt,y=Pt,C=Vt),(de.equals(w)===!1||ye!==T)&&(i.blendColor(de.r,de.g,de.b,ye),w.copy(de),T=ye),_=M,L=!1}function q(M,it){M.side===Ei?gt(i.CULL_FACE):Mt(i.CULL_FACE);let $=M.side===sn;it&&($=!$),K($),M.blending===vs&&M.transparent===!1?I($i):I(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const rt=M.stencilWrite;o.setTest(rt),rt&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),st(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(M){E!==M&&(M?i.frontFace(i.CW):i.frontFace(i.CCW),E=M)}function et(M){M!==J0?(Mt(i.CULL_FACE),M!==b&&(M===Pf?i.cullFace(i.BACK):M===Q0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),b=M}function J(M){M!==D&&(Y&&i.lineWidth(M),D=M)}function st(M,it,$){M?(Mt(i.POLYGON_OFFSET_FILL),(X!==it||V!==$)&&(i.polygonOffset(it,$),X=it,V=$)):gt(i.POLYGON_OFFSET_FILL)}function lt(M){M?Mt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function A(M){M===void 0&&(M=i.TEXTURE0+G-1),N!==M&&(i.activeTexture(M),N=M)}function x(M,it,$){$===void 0&&(N===null?$=i.TEXTURE0+G-1:$=N);let rt=ft[$];rt===void 0&&(rt={type:void 0,texture:void 0},ft[$]=rt),(rt.type!==M||rt.texture!==it)&&(N!==$&&(i.activeTexture($),N=$),i.bindTexture(M,it||at[M]),rt.type=M,rt.texture=it)}function O(){const M=ft[N];M!==void 0&&M.type!==void 0&&(i.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Lt(M){vt.equals(M)===!1&&(i.scissor(M.x,M.y,M.z,M.w),vt.copy(M))}function xt(M){Bt.equals(M)===!1&&(i.viewport(M.x,M.y,M.z,M.w),Bt.copy(M))}function Ct(M,it){let $=l.get(it);$===void 0&&($=new WeakMap,l.set(it,$));let rt=$.get(M);rt===void 0&&(rt=i.getUniformBlockIndex(it,M.name),$.set(M,rt))}function Dt(M,it){const rt=l.get(it).get(M);a.get(it)!==rt&&(i.uniformBlockBinding(it,rt,M.__bindingPointIndex),a.set(it,rt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},N=null,ft={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,S=null,v=null,y=null,C=null,w=new Jt(0,0,0),T=0,L=!1,E=null,b=null,D=null,X=null,V=null,vt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Mt,disable:gt,bindFramebuffer:zt,drawBuffers:Ot,useProgram:Rt,setBlending:I,setMaterial:q,setFlipSided:K,setCullFace:et,setLineWidth:J,setPolygonOffset:st,setScissorTest:lt,activeTexture:A,bindTexture:x,unbindTexture:O,compressedTexImage2D:k,compressedTexImage3D:j,texImage2D:Et,texImage3D:Nt,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:Tt,texStorage3D:ct,texSubImage2D:Q,texSubImage3D:pt,compressedTexSubImage2D:ut,compressedTexSubImage3D:ot,scissor:Lt,viewport:xt,reset:ae}}function ib(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):Ga("canvas")}function _(A,x,O){let k=1;const j=lt(A);if((j.width>O||j.height>O)&&(k=O/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(k*j.width),pt=Math.floor(k*j.height);f===void 0&&(f=g(Q,pt));const ut=x?g(Q,pt):f;return ut.width=Q,ut.height=pt,ut.getContext("2d").drawImage(A,0,0,Q,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+pt+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ln&&A.minFilter!==zn}function p(A){i.generateMipmap(A)}function S(A,x,O,k,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){const pt=j?za:te.getTransfer(k);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=pt===le?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,x){let O;return A?x===null||x===Rs||x===Cs?O=i.DEPTH24_STENCIL8:x===Wi?O=i.DEPTH32F_STENCIL8:x===Ba&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rs||x===Cs?O=i.DEPTH_COMPONENT24:x===Wi?O=i.DEPTH_COMPONENT32F:x===Ba&&(O=i.DEPTH_COMPONENT16),O}function y(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&u.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),E(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,k=h.get(O);if(k){const j=k[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(A),Object.keys(k).length===0&&h.delete(O)}n.remove(A)}function L(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const O=A.source,k=h.get(O);delete k[x.__cacheKey],o.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let j=0;j<x.__webglFramebuffer[k].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[k][j]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let k=0,j=O.length;k<j;k++){const Q=n.get(O[k]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(O[k])}n.remove(A)}let b=0;function D(){b=0}function X(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function G(A,x){const O=n.get(A);if(A.isVideoTexture&&J(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const k=A.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(O,A,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Y(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Bt(O,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function z(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Bt(O,A,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function F(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){nt(O,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const N={[zc]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},ft={[Ln]:i.NEAREST,[Nv]:i.NEAREST_MIPMAP_NEAREST,[Wo]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[Ar]:i.LINEAR_MIPMAP_LINEAR},dt={[jv]:i.NEVER,[nx]:i.ALWAYS,[Zv]:i.LESS,[Xp]:i.LEQUAL,[Jv]:i.EQUAL,[ex]:i.GEQUAL,[Qv]:i.GREATER,[tx]:i.NOTEQUAL};function mt(A,x){if(x.type===Wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===Nl||x.magFilter===Wo||x.magFilter===Ar||x.minFilter===zn||x.minFilter===Nl||x.minFilter===Wo||x.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,N[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,N[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,N[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ln||x.minFilter!==Wo&&x.minFilter!==Ar||x.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function vt(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const k=x.source;let j=h.get(k);j===void 0&&(j={},h.set(k,j));const Q=V(x);if(Q!==A.__cacheKey){j[Q]===void 0&&(j[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[Q].usedTimes++;const pt=j[A.__cacheKey];pt!==void 0&&(j[A.__cacheKey].usedTimes--,pt.usedTimes===0&&L(x)),A.__cacheKey=Q,A.__webglTexture=j[Q].texture}return O}function Bt(A,x,O){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);const j=vt(A,x),Q=x.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+O);const pt=n.get(Q);if(Q.version!==pt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const ut=te.getPrimaries(te.workingColorSpace),ot=x.colorSpace===Gi?null:te.getPrimaries(x.colorSpace),Tt=x.colorSpace===Gi||ut===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ct=_(x.image,!1,r.maxTextureSize);ct=st(x,ct);const Et=s.convert(x.format,x.colorSpace),Nt=s.convert(x.type);let Lt=S(x.internalFormat,Et,Nt,x.colorSpace,x.isVideoTexture);mt(k,x);let xt;const Ct=x.mipmaps,Dt=x.isVideoTexture!==!0,ae=pt.__version===void 0||j===!0,M=Q.dataReady,it=y(x,ct);if(x.isDepthTexture)Lt=v(x.format===Ps,x.type),ae&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Lt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ct.width,ct.height,0,Et,Nt,null));else if(x.isDataTexture)if(Ct.length>0){Dt&&ae&&e.texStorage2D(i.TEXTURE_2D,it,Lt,Ct[0].width,Ct[0].height);for(let $=0,rt=Ct.length;$<rt;$++)xt=Ct[$],Dt?M&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Et,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,$,Lt,xt.width,xt.height,0,Et,Nt,xt.data);x.generateMipmaps=!1}else Dt?(ae&&e.texStorage2D(i.TEXTURE_2D,it,Lt,ct.width,ct.height),M&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Et,Nt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,ct.width,ct.height,0,Et,Nt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Lt,Ct[0].width,Ct[0].height,ct.depth);for(let $=0,rt=Ct.length;$<rt;$++)if(xt=Ct[$],x.format!==ni)if(Et!==null)if(Dt){if(M)if(x.layerUpdates.size>0){for(const ht of x.layerUpdates){const Pt=xt.width*xt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ht,xt.width,xt.height,1,Et,xt.data.slice(Pt*ht,Pt*(ht+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,ct.depth,Et,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Lt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?M&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,ct.depth,Et,Nt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Lt,xt.width,xt.height,ct.depth,0,Et,Nt,xt.data)}else{Dt&&ae&&e.texStorage2D(i.TEXTURE_2D,it,Lt,Ct[0].width,Ct[0].height);for(let $=0,rt=Ct.length;$<rt;$++)xt=Ct[$],x.format!==ni?Et!==null?Dt?M&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Et,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?M&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Et,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,$,Lt,xt.width,xt.height,0,Et,Nt,xt.data)}else if(x.isDataArrayTexture)if(Dt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Lt,ct.width,ct.height,ct.depth),M)if(x.layerUpdates.size>0){let $;switch(Nt){case i.UNSIGNED_BYTE:switch(Et){case i.ALPHA:$=1;break;case i.LUMINANCE:$=1;break;case i.LUMINANCE_ALPHA:$=2;break;case i.RGB:$=3;break;case i.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${Et}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${Nt}.`)}const rt=ct.width*ct.height*$;for(const ht of x.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,ct.width,ct.height,1,Et,Nt,ct.data.slice(rt*ht,rt*(ht+1)));x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Et,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ct.width,ct.height,ct.depth,0,Et,Nt,ct.data);else if(x.isData3DTexture)Dt?(ae&&e.texStorage3D(i.TEXTURE_3D,it,Lt,ct.width,ct.height,ct.depth),M&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Et,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ct.width,ct.height,ct.depth,0,Et,Nt,ct.data);else if(x.isFramebufferTexture){if(ae)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,Lt,ct.width,ct.height);else{let $=ct.width,rt=ct.height;for(let ht=0;ht<it;ht++)e.texImage2D(i.TEXTURE_2D,ht,Lt,$,rt,0,Et,Nt,null),$>>=1,rt>>=1}}else if(Ct.length>0){if(Dt&&ae){const $=lt(Ct[0]);e.texStorage2D(i.TEXTURE_2D,it,Lt,$.width,$.height)}for(let $=0,rt=Ct.length;$<rt;$++)xt=Ct[$],Dt?M&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et,Nt,xt):e.texImage2D(i.TEXTURE_2D,$,Lt,Et,Nt,xt);x.generateMipmaps=!1}else if(Dt){if(ae){const $=lt(ct);e.texStorage2D(i.TEXTURE_2D,it,Lt,$.width,$.height)}M&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Et,Nt,ct);m(x)&&p(k),pt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function nt(A,x,O){if(x.image.length!==6)return;const k=vt(A,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const Q=n.get(j);if(j.version!==Q.__version||k===!0){e.activeTexture(i.TEXTURE0+O);const pt=te.getPrimaries(te.workingColorSpace),ut=x.colorSpace===Gi?null:te.getPrimaries(x.colorSpace),ot=x.colorSpace===Gi||pt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let rt=0;rt<6;rt++)!Tt&&!ct?Et[rt]=_(x.image[rt],!0,r.maxCubemapSize):Et[rt]=ct?x.image[rt].image:x.image[rt],Et[rt]=st(x,Et[rt]);const Nt=Et[0],Lt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),Ct=S(x.internalFormat,Lt,xt,x.colorSpace),Dt=x.isVideoTexture!==!0,ae=Q.__version===void 0||k===!0,M=j.dataReady;let it=y(x,Nt);mt(i.TEXTURE_CUBE_MAP,x);let $;if(Tt){Dt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ct,Nt.width,Nt.height);for(let rt=0;rt<6;rt++){$=Et[rt].mipmaps;for(let ht=0;ht<$.length;ht++){const Pt=$[ht];x.format!==ni?Lt!==null?Dt?M&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,Ct,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,0,0,Pt.width,Pt.height,Lt,xt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht,Ct,Pt.width,Pt.height,0,Lt,xt,Pt.data)}}}else{if($=x.mipmaps,Dt&&ae){$.length>0&&it++;const rt=lt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ct,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Dt?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Et[rt].width,Et[rt].height,Lt,xt,Et[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ct,Et[rt].width,Et[rt].height,0,Lt,xt,Et[rt].data);for(let ht=0;ht<$.length;ht++){const Vt=$[ht].image[rt].image;Dt?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,0,0,Vt.width,Vt.height,Lt,xt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,Ct,Vt.width,Vt.height,0,Lt,xt,Vt.data)}}else{Dt?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Lt,xt,Et[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ct,Lt,xt,Et[rt]);for(let ht=0;ht<$.length;ht++){const Pt=$[ht];Dt?M&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,0,0,Lt,xt,Pt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht+1,Ct,Lt,xt,Pt.image[rt])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Q.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function at(A,x,O,k,j,Q){const pt=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),ot=S(O.internalFormat,pt,ut,O.colorSpace);if(!n.get(x).__hasExternalTextures){const ct=Math.max(1,x.width>>Q),Et=Math.max(1,x.height>>Q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Q,ot,ct,Et,x.depth,0,pt,ut,null):e.texImage2D(j,Q,ot,ct,Et,0,pt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,j,n.get(O).__webglTexture,0,K(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,j,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(A,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const k=x.depthTexture,j=k&&k.isDepthTexture?k.type:null,Q=v(x.stencilBuffer,j),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=K(x);et(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{const k=x.textures;for(let j=0;j<k.length;j++){const Q=k[j],pt=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),ot=S(Q.internalFormat,pt,ut,Q.colorSpace),Tt=K(x);O&&et(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ot,x.width,x.height):et(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ot,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ot,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const k=n.get(x.depthTexture).__webglTexture,j=K(x);if(x.depthTexture.format===xs)et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(x.depthTexture.format===Ps)et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function zt(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");gt(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]=i.createRenderbuffer(),Mt(x.__webglDepthbuffer[k],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Mt(x.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,O){const k=n.get(A);x!==void 0&&at(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&zt(A)}function Rt(A){const x=A.texture,O=n.get(A),k=n.get(x);A.addEventListener("dispose",w);const j=A.textures,Q=A.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,o.memory.textures++),Q){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let ot=0;ot<x.mipmaps.length;ot++)O.__webglFramebuffer[ut][ot]=i.createFramebuffer()}else O.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)O.__webglFramebuffer[ut]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(pt)for(let ut=0,ot=j.length;ut<ot;ut++){const Tt=n.get(j[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&et(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){const ot=j[ut];O.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Tt=s.convert(ot.format,ot.colorSpace),ct=s.convert(ot.type),Et=S(ot.internalFormat,Tt,ct,ot.colorSpace,A.isXRRenderTarget===!0),Nt=K(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),mt(i.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)at(O.__webglFramebuffer[ut][ot],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ot);else at(O.__webglFramebuffer[ut],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ut=0,ot=j.length;ut<ot;ut++){const Tt=j[ut],ct=n.get(Tt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),mt(i.TEXTURE_2D,Tt),at(O.__webglFramebuffer,A,Tt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Tt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),mt(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let ot=0;ot<x.mipmaps.length;ot++)at(O.__webglFramebuffer[ot],A,x,i.COLOR_ATTACHMENT0,ut,ot);else at(O.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ut,0);m(x)&&p(ut),e.unbindTexture()}A.depthBuffer&&zt(A)}function U(A){const x=A.textures;for(let O=0,k=x.length;O<k;O++){const j=x[O];if(m(j)){const Q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(j).__webglTexture;e.bindTexture(Q,pt),p(Q),e.unbindTexture()}}}const P=[],I=[];function q(A){if(A.samples>0){if(et(A)===!1){const x=A.textures,O=A.width,k=A.height;let j=i.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),ut=x.length>1;if(ut)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ot]);const Tt=n.get(x[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,j,i.NEAREST),l===!0&&(P.length=0,I.length=0,P.push(i.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.resolveDepthBuffer===!1&&(P.push(Q),I.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ot]);const Tt=n.get(x[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function K(A){return Math.min(r.maxSamples,A.samples)}function et(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function st(A,x){const O=A.colorSpace,k=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==sr&&O!==Gi&&(te.getTransfer(O)===le?(k!==ni||j!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function lt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=Ot,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=et}function rb(i,t){function e(n,r=Gi){let s;const o=te.getTransfer(r);if(n===tr)return i.UNSIGNED_BYTE;if(n===kp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ov)return i.BYTE;if(n===Fv)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===zp)return i.INT;if(n===Rs)return i.UNSIGNED_INT;if(n===Wi)return i.FLOAT;if(n===fl)return i.HALF_FLOAT;if(n===zv)return i.ALPHA;if(n===kv)return i.RGB;if(n===ni)return i.RGBA;if(n===Hv)return i.LUMINANCE;if(n===Vv)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===Gv)return i.RED;if(n===Vp)return i.RED_INTEGER;if(n===Wv)return i.RG;if(n===Gp)return i.RG_INTEGER;if(n===Wp)return i.RGBA_INTEGER;if(n===Ol||n===Fl||n===Bl||n===zl)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===If||n===Uf||n===Nf||n===Of)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===If)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ff||n===Bf||n===zf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ff||n===Bf)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kf||n===Hf||n===Vf||n===Gf||n===Wf||n===Xf||n===Yf||n===qf||n===$f||n===Kf||n===jf||n===Zf||n===Jf||n===Qf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$f)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qf)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===th||n===eh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kl)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xv||n===nh||n===ih||n===rh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===kl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sb extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fs extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new on,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new er({vertexShader:ab,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class ub extends Fr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new cb,m=e.getContextAttributes();let p=null,S=null;const v=[],y=[],C=new Gt;let w=null;const T=new vn;T.layers.enable(1),T.viewport=new Ue;const L=new vn;L.layers.enable(2),L.viewport=new Ue;const E=[T,L],b=new sb;b.layers.enable(1),b.layers.enable(2);let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let at=v[nt];return at===void 0&&(at=new hc,v[nt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(nt){let at=v[nt];return at===void 0&&(at=new hc,v[nt]=at),at.getGripSpace()},this.getHand=function(nt){let at=v[nt];return at===void 0&&(at=new hc,v[nt]=at),at.getHandSpace()};function V(nt){const at=y.indexOf(nt.inputSource);if(at===-1)return;const Mt=v[at];Mt!==void 0&&(Mt.update(nt.inputSource,nt.frame,c||o),Mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let nt=0;nt<v.length;nt++){const at=y[nt];at!==null&&(y[nt]=null,v[nt].disconnect(at))}D=null,X=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ur(d.framebufferWidth,d.framebufferHeight,{format:ni,type:tr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Mt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Ps:xs,Mt=m.stencil?Cs:Rs);const zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(zt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Ur(h.textureWidth,h.textureHeight,{format:ni,type:tr,depthTexture:new sm(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(nt){for(let at=0;at<nt.removed.length;at++){const Mt=nt.removed[at],gt=y.indexOf(Mt);gt>=0&&(y[gt]=null,v[gt].disconnect(Mt))}for(let at=0;at<nt.added.length;at++){const Mt=nt.added[at];let gt=y.indexOf(Mt);if(gt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=y.length){y.push(Mt),gt=Ot;break}else if(y[Ot]===null){y[Ot]=Mt,gt=Ot;break}if(gt===-1)break}const zt=v[gt];zt&&zt.connect(Mt)}}const z=new H,F=new H;function N(nt,at,Mt){z.setFromMatrixPosition(at.matrixWorld),F.setFromMatrixPosition(Mt.matrixWorld);const gt=z.distanceTo(F),zt=at.projectionMatrix.elements,Ot=Mt.projectionMatrix.elements,Rt=zt[14]/(zt[10]-1),U=zt[14]/(zt[10]+1),P=(zt[9]+1)/zt[5],I=(zt[9]-1)/zt[5],q=(zt[8]-1)/zt[0],K=(Ot[8]+1)/Ot[0],et=Rt*q,J=Rt*K,st=gt/(-q+K),lt=st*-q;at.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(lt),nt.translateZ(st),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert();const A=Rt+st,x=U+st,O=et-lt,k=J+(gt-lt),j=P*U/x*A,Q=I*U/x*A;nt.projectionMatrix.makePerspective(O,k,j,Q,A,x),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}function ft(nt,at){at===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(at.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;_.texture!==null&&(nt.near=_.depthNear,nt.far=_.depthFar),b.near=L.near=T.near=nt.near,b.far=L.far=T.far=nt.far,(D!==b.near||X!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,X=b.far,T.near=D,T.far=X,L.near=D,L.far=X,T.updateProjectionMatrix(),L.updateProjectionMatrix(),nt.updateProjectionMatrix());const at=nt.parent,Mt=b.cameras;ft(b,at);for(let gt=0;gt<Mt.length;gt++)ft(Mt[gt],at);Mt.length===2?N(b,T,L):b.projectionMatrix.copy(T.projectionMatrix),dt(nt,b,at)};function dt(nt,at,Mt){Mt===null?nt.matrix.copy(at.matrixWorld):(nt.matrix.copy(Mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(at.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Hc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(nt){l=nt,h!==null&&(h.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let mt=null;function vt(nt,at){if(u=at.getViewerPose(c||o),g=at,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let gt=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,gt=!0);for(let Ot=0;Ot<Mt.length;Ot++){const Rt=Mt[Ot];let U=null;if(d!==null)U=d.getViewport(Rt);else{const I=f.getViewSubImage(h,Rt);U=I.viewport,Ot===0&&(t.setRenderTargetTextures(S,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(S))}let P=E[Ot];P===void 0&&(P=new vn,P.layers.enable(Ot),P.viewport=new Ue,E[Ot]=P),P.matrix.fromArray(Rt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Rt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(U.x,U.y,U.width,U.height),Ot===0&&(b.matrix.copy(P.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),gt===!0&&b.cameras.push(P)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ot=f.getDepthInformation(Mt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,r.renderState)}}for(let Mt=0;Mt<v.length;Mt++){const gt=y[Mt],zt=v[Mt];gt!==null&&zt!==void 0&&zt.update(gt,at,c||o)}mt&&mt(nt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Bt=new rm;Bt.setAnimationLoop(vt),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const gr=new Ai,fb=new Me;function hb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),v=S.envMap,y=S.envMapRotation;v&&(m.envMap.value=v,gr.copy(y),gr.x*=-1,gr.y*=-1,gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(gr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function db(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=r[S.id];y===void 0&&(g(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(S,C);const w=t.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const v=f();S.__bindingPointIndex=v;const y=i.createBuffer(),C=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=r[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,T=y.length;w<T;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,b=L.length;E<b;E++){const D=L[E];if(d(D,w,E,C)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let Y=0;Y<V.length;Y++){const z=V[Y],F=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,X+G,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,v,y,C){const w=S.value,T=v+"_"+y;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const L=C[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(S){const v=S.uniforms;let y=0;const C=16;for(let T=0,L=v.length;T<L;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,D=E.length;b<D;b++){const X=E[b],V=Array.isArray(X.value)?X.value:[X.value];for(let G=0,Y=V.length;G<Y;G++){const z=V[G],F=_(z),N=y%C;N!==0&&C-N<F.boundary&&(y+=C-N),X.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=F.storage}}}const w=y%C;return w>0&&(y+=C-w),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class fm{constructor(t={}){const{canvas:e=sx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let y=!1,C=0,w=0,T=null,L=-1,E=null;const b=new Ue,D=new Ue;let X=null;const V=new Jt(0);let G=0,Y=e.width,z=e.height,F=1,N=null,ft=null;const dt=new Ue(0,0,Y,z),mt=new Ue(0,0,Y,z);let vt=!1;const Bt=new im;let nt=!1,at=!1;const Mt=new Me,gt=new H,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Rt(){return T===null?F:1}let U=n;function P(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yu}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){const B="webgl2";if(U=P(B,R),U===null)throw P(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let I,q,K,et,J,st,lt,A,x,O,k,j,Q,pt,ut,ot,Tt,ct,Et,Nt,Lt,xt,Ct,Dt;function ae(){I=new yy(U),I.init(),xt=new rb(U,I),q=new my(U,I,t,xt),K=new nb(U),et=new Ty(U),J=new VE,st=new ib(U,I,K,J,q,xt,et),lt=new gy(v),A=new My(v),x=new Lx(U),Ct=new dy(U,x),O=new Ey(U,x,et,Ct),k=new wy(U,O,x,et),Et=new Ay(U,q,st),ot=new _y(J),j=new HE(v,lt,A,I,q,Ct,ot),Q=new hb(v,J),pt=new WE,ut=new jE(I),ct=new hy(v,lt,A,K,k,h,l),Tt=new eb(v,k,q),Dt=new db(U,et,q,K),Nt=new py(U,I,et),Lt=new by(U,I,et),et.programs=j.programs,v.capabilities=q,v.extensions=I,v.properties=J,v.renderLists=pt,v.shadowMap=Tt,v.state=K,v.info=et}ae();const M=new ub(v,U);this.xr=M,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=I.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=I.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(Y,z,!1))},this.getSize=function(R){return R.set(Y,z)},this.setSize=function(R,B,Z=!0){if(M.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,z=B,e.width=Math.floor(R*F),e.height=Math.floor(B*F),Z===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(Y*F,z*F).floor()},this.setDrawingBufferSize=function(R,B,Z){Y=R,z=B,F=Z,e.width=Math.floor(R*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,B,Z,tt){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,B,Z,tt),K.viewport(b.copy(dt).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,B,Z,tt){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,B,Z,tt),K.scissor(D.copy(mt).multiplyScalar(F).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){K.setScissorTest(vt=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){ft=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(R=!0,B=!0,Z=!0){let tt=0;if(R){let W=!1;if(T!==null){const _t=T.texture.format;W=_t===Wp||_t===Gp||_t===Vp}if(W){const _t=T.texture.type,bt=_t===tr||_t===Rs||_t===Ba||_t===Cs||_t===kp||_t===Hp,At=ct.getClearColor(),wt=ct.getClearAlpha(),Ft=At.r,kt=At.g,Ut=At.b;bt?(d[0]=Ft,d[1]=kt,d[2]=Ut,d[3]=wt,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=Ft,g[1]=kt,g[2]=Ut,g[3]=wt,U.clearBufferiv(U.COLOR,0,g))}else tt|=U.COLOR_BUFFER_BIT}B&&(tt|=U.DEPTH_BUFFER_BIT),Z&&(tt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),pt.dispose(),ut.dispose(),J.dispose(),lt.dispose(),A.dispose(),k.dispose(),Ct.dispose(),Dt.dispose(),j.dispose(),M.dispose(),M.removeEventListener("sessionstart",Ee),M.removeEventListener("sessionend",be),hn.stop()};function it(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=et.autoReset,B=Tt.enabled,Z=Tt.autoUpdate,tt=Tt.needsUpdate,W=Tt.type;ae(),et.autoReset=R,Tt.enabled=B,Tt.autoUpdate=Z,Tt.needsUpdate=tt,Tt.type=W}function rt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const B=R.target;B.removeEventListener("dispose",ht),Pt(B)}function Pt(R){Vt(R),J.remove(R)}function Vt(R){const B=J.get(R).programs;B!==void 0&&(B.forEach(function(Z){j.releaseProgram(Z)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Z,tt,W,_t){B===null&&(B=zt);const bt=W.isMesh&&W.matrixWorld.determinant()<0,At=h_(R,B,Z,tt,W);K.setMaterial(tt,bt);let wt=Z.index,Ft=1;if(tt.wireframe===!0){if(wt=O.getWireframeAttribute(Z),wt===void 0)return;Ft=2}const kt=Z.drawRange,Ut=Z.attributes.position;let Kt=kt.start*Ft,pe=(kt.start+kt.count)*Ft;_t!==null&&(Kt=Math.max(Kt,_t.start*Ft),pe=Math.min(pe,(_t.start+_t.count)*Ft)),wt!==null?(Kt=Math.max(Kt,0),pe=Math.min(pe,wt.count)):Ut!=null&&(Kt=Math.max(Kt,0),pe=Math.min(pe,Ut.count));const me=pe-Kt;if(me<0||me===1/0)return;Ct.setup(W,tt,At,Z,wt);let pn,Qt=Nt;if(wt!==null&&(pn=x.get(wt),Qt=Lt,Qt.setIndex(pn)),W.isMesh)tt.wireframe===!0?(K.setLineWidth(tt.wireframeLinewidth*Rt()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(W.isLine){let It=tt.linewidth;It===void 0&&(It=1),K.setLineWidth(It*Rt()),W.isLineSegments?Qt.setMode(U.LINES):W.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else W.isPoints?Qt.setMode(U.POINTS):W.isSprite&&Qt.setMode(U.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?Qt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):Qt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Qt.renderInstances(Kt,me,W.count);else if(Z.isInstancedBufferGeometry){const It=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ge=Math.min(Z.instanceCount,It);Qt.renderInstances(Kt,me,Ge)}else Qt.render(Kt,me)};function de(R,B,Z){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,zo(R,B,Z),R.side=Qi,R.needsUpdate=!0,zo(R,B,Z),R.side=Ei):zo(R,B,Z)}this.compile=function(R,B,Z=null){Z===null&&(Z=R),m=ut.get(Z),m.init(B),S.push(m),Z.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),R!==Z&&R.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const tt=new Set;return R.traverse(function(W){const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const At=_t[bt];de(At,Z,W),tt.add(At)}else de(_t,Z,W),tt.add(_t)}),S.pop(),m=null,tt},this.compileAsync=function(R,B,Z=null){const tt=this.compile(R,B,Z);return new Promise(W=>{function _t(){if(tt.forEach(function(bt){J.get(bt).currentProgram.isReady()&&tt.delete(bt)}),tt.size===0){W(R);return}setTimeout(_t,10)}I.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ye=null;function $t(R){ye&&ye(R)}function Ee(){hn.stop()}function be(){hn.start()}const hn=new rm;hn.setAnimationLoop($t),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(R){ye=R,M.setAnimationLoop(R),R===null?hn.stop():hn.start()},M.addEventListener("sessionstart",Ee),M.addEventListener("sessionend",be),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),M.enabled===!0&&M.isPresenting===!0&&(M.cameraAutoUpdate===!0&&M.updateCamera(B),B=M.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,B,T),m=ut.get(R,S.length),m.init(B),S.push(m),Mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Bt.setFromProjectionMatrix(Mt),at=this.localClippingEnabled,nt=ot.init(this.clippingPlanes,at),_=pt.get(R,p.length),_.init(),p.push(_),M.enabled===!0&&M.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&dn(_t,B,-1/0,v.sortObjects)}dn(R,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,ft),Ot=M.enabled===!1||M.isPresenting===!1||M.hasDepthSensing()===!1,Ot&&ct.addToRenderList(_,R),this.info.render.frame++,nt===!0&&ot.beginShadows();const Z=m.state.shadowsArray;Tt.render(Z,R,B),nt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=_.opaque,W=_.transmissive;if(m.setupLights(),B.isArrayCamera){const _t=B.cameras;if(W.length>0)for(let bt=0,At=_t.length;bt<At;bt++){const wt=_t[bt];ar(tt,W,R,wt)}Ot&&ct.render(R);for(let bt=0,At=_t.length;bt<At;bt++){const wt=_t[bt];Li(_,R,wt,wt.viewport)}}else W.length>0&&ar(tt,W,R,B),Ot&&ct.render(R),Li(_,R,B);T!==null&&(st.updateMultisampleRenderTarget(T),st.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,B),Ct.resetDefaultState(),L=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],nt===!0&&ot.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function dn(R,B,Z,tt){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Bt.intersectsSprite(R)){tt&&gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const bt=k.update(R),At=R.material;At.visible&&_.push(R,bt,At,Z,gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Bt.intersectsObject(R))){const bt=k.update(R),At=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),gt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),gt.copy(bt.boundingSphere.center)),gt.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(At)){const wt=bt.groups;for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Ut=wt[Ft],Kt=At[Ut.materialIndex];Kt&&Kt.visible&&_.push(R,bt,Kt,Z,gt.z,Ut)}}else At.visible&&_.push(R,bt,At,Z,gt.z,null)}}const _t=R.children;for(let bt=0,At=_t.length;bt<At;bt++)dn(_t[bt],B,Z,tt)}function Li(R,B,Z,tt){const W=R.opaque,_t=R.transmissive,bt=R.transparent;m.setupLightsView(Z),nt===!0&&ot.setGlobalState(v.clippingPlanes,Z),tt&&K.viewport(b.copy(tt)),W.length>0&&lr(W,B,Z),_t.length>0&&lr(_t,B,Z),bt.length>0&&lr(bt,B,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function ar(R,B,Z,tt){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new Ur(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?fl:tr,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const _t=m.state.transmissionRenderTarget[tt.id],bt=tt.viewport||b;_t.setSize(bt.z,bt.w);const At=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(V),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),Ot?ct.render(Z):v.clear();const wt=v.toneMapping;v.toneMapping=Ki;const Ft=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),nt===!0&&ot.setGlobalState(v.clippingPlanes,tt),lr(R,Z,tt),st.updateMultisampleRenderTarget(_t),st.updateRenderTargetMipmap(_t),I.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ut=0,Kt=B.length;Ut<Kt;Ut++){const pe=B[Ut],me=pe.object,pn=pe.geometry,Qt=pe.material,It=pe.group;if(Qt.side===Ei&&me.layers.test(tt.layers)){const Ge=Qt.side;Qt.side=sn,Qt.needsUpdate=!0,Xu(me,Z,tt,pn,Qt,It),Qt.side=Ge,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(st.updateMultisampleRenderTarget(_t),st.updateRenderTargetMipmap(_t))}v.setRenderTarget(At),v.setClearColor(V,G),Ft!==void 0&&(tt.viewport=Ft),v.toneMapping=wt}function lr(R,B,Z){const tt=B.isScene===!0?B.overrideMaterial:null;for(let W=0,_t=R.length;W<_t;W++){const bt=R[W],At=bt.object,wt=bt.geometry,Ft=tt===null?bt.material:tt,kt=bt.group;At.layers.test(Z.layers)&&Xu(At,B,Z,wt,Ft,kt)}}function Xu(R,B,Z,tt,W,_t){R.onBeforeRender(v,B,Z,tt,W,_t),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(v,B,Z,tt,R,_t),W.transparent===!0&&W.side===Ei&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,v.renderBufferDirect(Z,B,tt,W,R,_t),W.side=Qi,W.needsUpdate=!0,v.renderBufferDirect(Z,B,tt,W,R,_t),W.side=Ei):v.renderBufferDirect(Z,B,tt,W,R,_t),R.onAfterRender(v,B,Z,tt,W,_t)}function zo(R,B,Z){B.isScene!==!0&&(B=zt);const tt=J.get(R),W=m.state.lights,_t=m.state.shadowsArray,bt=W.state.version,At=j.getParameters(R,W.state,_t,B,Z),wt=j.getProgramCacheKey(At);let Ft=tt.programs;tt.environment=R.isMeshStandardMaterial?B.environment:null,tt.fog=B.fog,tt.envMap=(R.isMeshStandardMaterial?A:lt).get(R.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",ht),Ft=new Map,tt.programs=Ft);let kt=Ft.get(wt);if(kt!==void 0){if(tt.currentProgram===kt&&tt.lightsStateVersion===bt)return qu(R,At),kt}else At.uniforms=j.getUniforms(R),R.onBuild(Z,At,v),R.onBeforeCompile(At,v),kt=j.acquireProgram(At,wt),Ft.set(wt,kt),tt.uniforms=At.uniforms;const Ut=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=ot.uniform),qu(R,At),tt.needsLights=p_(R),tt.lightsStateVersion=bt,tt.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),tt.currentProgram=kt,tt.uniformsList=null,kt}function Yu(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Ta.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function qu(R,B){const Z=J.get(R);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function h_(R,B,Z,tt,W){B.isScene!==!0&&(B=zt),st.resetTextureUnits();const _t=B.fog,bt=tt.isMeshStandardMaterial?B.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sr,wt=(tt.isMeshStandardMaterial?A:lt).get(tt.envMap||bt),Ft=tt.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!Z.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ut=!!Z.morphAttributes.position,Kt=!!Z.morphAttributes.normal,pe=!!Z.morphAttributes.color;let me=Ki;tt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=v.toneMapping);const pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=pn!==void 0?pn.length:0,It=J.get(tt),Ge=m.state.lights;if(nt===!0&&(at===!0||R!==E)){const wn=R===E&&tt.id===L;ot.setState(tt,R,wn)}let ee=!1;tt.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ge.state.version||It.outputColorSpace!==At||W.isBatchedMesh&&It.batching===!1||!W.isBatchedMesh&&It.batching===!0||W.isBatchedMesh&&It.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&It.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&It.instancing===!1||!W.isInstancedMesh&&It.instancing===!0||W.isSkinnedMesh&&It.skinning===!1||!W.isSkinnedMesh&&It.skinning===!0||W.isInstancedMesh&&It.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&It.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&It.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&It.instancingMorph===!1&&W.morphTexture!==null||It.envMap!==wt||tt.fog===!0&&It.fog!==_t||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==kt||It.morphTargets!==Ut||It.morphNormals!==Kt||It.morphColors!==pe||It.toneMapping!==me||It.morphTargetsCount!==Qt)&&(ee=!0):(ee=!0,It.__version=tt.version);let ci=It.currentProgram;ee===!0&&(ci=zo(tt,B,W));let ko=!1,cr=!1,xl=!1;const Pe=ci.getUniforms(),Di=It.uniforms;if(K.useProgram(ci.program)&&(ko=!0,cr=!0,xl=!0),tt.id!==L&&(L=tt.id,cr=!0),ko||E!==R){Pe.setValue(U,"projectionMatrix",R.projectionMatrix),Pe.setValue(U,"viewMatrix",R.matrixWorldInverse);const wn=Pe.map.cameraPosition;wn!==void 0&&wn.setValue(U,gt.setFromMatrixPosition(R.matrixWorld)),q.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,cr=!0,xl=!0)}if(W.isSkinnedMesh){Pe.setOptional(U,W,"bindMatrix"),Pe.setOptional(U,W,"bindMatrixInverse");const wn=W.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Pe.setValue(U,"boneTexture",wn.boneTexture,st))}W.isBatchedMesh&&(Pe.setOptional(U,W,"batchingTexture"),Pe.setValue(U,"batchingTexture",W._matricesTexture,st),Pe.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(U,"batchingColorTexture",W._colorsTexture,st));const Sl=Z.morphAttributes;if((Sl.position!==void 0||Sl.normal!==void 0||Sl.color!==void 0)&&Et.update(W,Z,ci),(cr||It.receiveShadow!==W.receiveShadow)&&(It.receiveShadow=W.receiveShadow,Pe.setValue(U,"receiveShadow",W.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Di.envMap.value=wt,Di.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&B.environment!==null&&(Di.envMapIntensity.value=B.environmentIntensity),cr&&(Pe.setValue(U,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&d_(Di,xl),_t&&tt.fog===!0&&Q.refreshFogUniforms(Di,_t),Q.refreshMaterialUniforms(Di,tt,F,z,m.state.transmissionRenderTarget[R.id]),Ta.upload(U,Yu(It),Di,st)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ta.upload(U,Yu(It),Di,st),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Pe.setValue(U,"center",W.center),Pe.setValue(U,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(U,"normalMatrix",W.normalMatrix),Pe.setValue(U,"modelMatrix",W.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const wn=tt.uniformsGroups;for(let Ml=0,m_=wn.length;Ml<m_;Ml++){const $u=wn[Ml];Dt.update($u,ci),Dt.bind($u,ci)}}return ci}function d_(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function p_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,B,Z){J.get(R.texture).__webglTexture=B,J.get(R.depthTexture).__webglTexture=Z;const tt=J.get(R);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Z===void 0,tt.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const Z=J.get(R);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,Z=0){T=R,C=B,w=Z;let tt=!0,W=null,_t=!1,bt=!1;if(R){const wt=J.get(R);wt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(U.FRAMEBUFFER,null),tt=!1):wt.__webglFramebuffer===void 0?st.setupRenderTarget(R):wt.__hasExternalTextures&&st.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(bt=!0);const kt=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?W=kt[B][Z]:W=kt[B],_t=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?W=J.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[Z]:W=kt,b.copy(R.viewport),D.copy(R.scissor),X=R.scissorTest}else b.copy(dt).multiplyScalar(F).floor(),D.copy(mt).multiplyScalar(F).floor(),X=vt;if(K.bindFramebuffer(U.FRAMEBUFFER,W)&&tt&&K.drawBuffers(R,W),K.viewport(b),K.scissor(D),K.setScissorTest(X),_t){const wt=J.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,Z)}else if(bt){const wt=J.get(R.texture),Ft=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,Z||0,Ft)}L=-1},this.readRenderTargetPixels=function(R,B,Z,tt,W,_t,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){K.bindFramebuffer(U.FRAMEBUFFER,At);try{const wt=R.texture,Ft=wt.format,kt=wt.type;if(!q.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-tt&&Z>=0&&Z<=R.height-W&&U.readPixels(B,Z,tt,W,xt.convert(Ft),xt.convert(kt),_t)}finally{const wt=T!==null?J.get(T).__webglFramebuffer:null;K.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(R,B,Z,tt,W,_t,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){K.bindFramebuffer(U.FRAMEBUFFER,At);try{const wt=R.texture,Ft=wt.format,kt=wt.type;if(!q.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-tt&&Z>=0&&Z<=R.height-W){const Ut=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(B,Z,tt,W,xt.convert(Ft),xt.convert(kt),0),U.flush();const Kt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await ox(U,Kt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ut),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t)}finally{U.deleteBuffer(Ut),U.deleteSync(Kt)}return _t}}finally{const wt=T!==null?J.get(T).__webglFramebuffer:null;K.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(R,B=null,Z=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const tt=Math.pow(2,-Z),W=Math.floor(R.image.width*tt),_t=Math.floor(R.image.height*tt),bt=B!==null?B.x:0,At=B!==null?B.y:0;st.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,bt,At,W,_t),K.unbindTexture()},this.copyTextureToTexture=function(R,B,Z=null,tt=null,W=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,R=arguments[1],B=arguments[2],W=arguments[3]||0,Z=null);let _t,bt,At,wt,Ft,kt;Z!==null?(_t=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,At=Z.min.x,wt=Z.min.y):(_t=R.image.width,bt=R.image.height,At=0,wt=0),tt!==null?(Ft=tt.x,kt=tt.y):(Ft=0,kt=0);const Ut=xt.convert(B.format),Kt=xt.convert(B.type);st.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const pe=U.getParameter(U.UNPACK_ROW_LENGTH),me=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=U.getParameter(U.UNPACK_SKIP_PIXELS),Qt=U.getParameter(U.UNPACK_SKIP_ROWS),It=U.getParameter(U.UNPACK_SKIP_IMAGES),Ge=R.isCompressedTexture?R.mipmaps[W]:R.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Ft,kt,_t,bt,Ut,Kt,Ge.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Ft,kt,Ge.width,Ge.height,Ut,Ge.data):U.texSubImage2D(U.TEXTURE_2D,W,Ft,kt,Ut,Kt,Ge),U.pixelStorei(U.UNPACK_ROW_LENGTH,pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It),W===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(R,B,Z=null,tt=null,W=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,tt=arguments[1]||null,R=arguments[2],B=arguments[3],W=arguments[4]||0);let _t,bt,At,wt,Ft,kt,Ut,Kt,pe;const me=R.isCompressedTexture?R.mipmaps[W]:R.image;Z!==null?(_t=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,At=Z.max.z-Z.min.z,wt=Z.min.x,Ft=Z.min.y,kt=Z.min.z):(_t=me.width,bt=me.height,At=me.depth,wt=0,Ft=0,kt=0),tt!==null?(Ut=tt.x,Kt=tt.y,pe=tt.z):(Ut=0,Kt=0,pe=0);const pn=xt.convert(B.format),Qt=xt.convert(B.type);let It;if(B.isData3DTexture)st.setTexture3D(B,0),It=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)st.setTexture2DArray(B,0),It=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ge=U.getParameter(U.UNPACK_ROW_LENGTH),ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ci=U.getParameter(U.UNPACK_SKIP_PIXELS),ko=U.getParameter(U.UNPACK_SKIP_ROWS),cr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt),R.isDataTexture||R.isData3DTexture?U.texSubImage3D(It,W,Ut,Kt,pe,_t,bt,At,pn,Qt,me.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(It,W,Ut,Kt,pe,_t,bt,At,pn,me.data):U.texSubImage3D(It,W,Ut,Kt,pe,_t,bt,At,pn,Qt,me),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ge),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ci),U.pixelStorei(U.UNPACK_SKIP_ROWS,ko),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cr),W===0&&B.generateMipmaps&&U.generateMipmap(It),K.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,K.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eu?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===hl?"display-p3":"srgb"}}class hm extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gc extends ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wa=new H,Xa=new H,Kh=new Me,js=new dl,ha=new Oo,dc=new H,jh=new H;class pb extends Ze{constructor(t=new Ke,e=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Wa.fromBufferAttribute(e,r-1),Xa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ha.radius+=s,t.ray.intersectsSphere(ha)===!1)return;Kh.copy(r).invert(),js.copy(t.ray).applyMatrix4(Kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),v=da(this,t,js,l,p,S);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=da(this,t,js,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=da(this,t,js,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=da(this,t,js,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function da(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Wa.fromBufferAttribute(o,r),Xa.fromBufferAttribute(o,s),e.distanceSqToSegment(Wa,Xa,dc,jh)>n)return;dc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(dc);if(!(l<t.near||l>t.far))return{distance:l,point:jh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Zh=new H,Jh=new H;class Qh extends pb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Zh.fromBufferAttribute(e,r),Jh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zh.distanceTo(Jh);t.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wc extends ks{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const td=new Me,Xc=new dl,pa=new Oo,ma=new H;class ed extends Ze{constructor(t=new Ke,e=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,t.ray.intersectsSphere(pa)===!1)return;td.copy(r).invert(),Xc.copy(t.ray).applyMatrix4(td);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ma.fromBufferAttribute(f,m),nd(ma,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ma.fromBufferAttribute(f,g),nd(ma,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nd(i,t,e,n,r,s,o){const a=Xc.distanceSqToPoint(i);if(a<e){const l=new H;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Tu extends Ke{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new H,y=new H,C=new H;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],y),d(e[w+2],C),l(v,y,C,S)}function l(S,v,y,C){const w=C+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const E=S.clone().lerp(y,L/w),b=v.clone().lerp(y,L/w),D=w-L;for(let X=0;X<=D;X++)X===0&&L===w?T[L][X]=E:T[L][X]=E.clone().lerp(b,X/D)}for(let L=0;L<w;L++)for(let E=0;E<2*(w-L)-1;E++){const b=Math.floor(E/2);E%2===0?(h(T[L][b+1]),h(T[L+1][b]),h(T[L][b])):(h(T[L][b+1]),h(T[L+1][b+1]),h(T[L+1][b]))}}function c(S){const v=new H;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(S),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const S=new H;for(let v=0;v<s.length;v+=3){S.x=s[v+0],S.y=s[v+1],S.z=s[v+2];const y=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(y,1-C)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){const v=o[S+0],y=o[S+2],C=o[S+4],w=Math.max(v,y,C),T=Math.min(v,y,C);w>.9&&T<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,v){const y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const S=new H,v=new H,y=new H,C=new H,w=new Gt,T=new Gt,L=new Gt;for(let E=0,b=0;E<s.length;E+=9,b+=6){S.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),w.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),C.copy(S).add(v).add(y).divideScalar(3);const D=m(C);_(w,b+0,S,D),_(T,b+2,v,D),_(L,b+4,y,D)}}function _(S,v,y,C){C<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.vertices,t.indices,t.radius,t.details)}}class Ya extends Tu{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ya(t.radius,t.detail)}}class Au extends Ke{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],v=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const w=C/e;f.x=-t*Math.cos(r+w*s)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(r+w*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+y,1-v),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const v=u[p][S+1],y=u[p][S],C=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&d.push(v,y,w),(p!==n-1||l<Math.PI)&&d.push(y,C,w)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class id{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yu);const rd={type:"change"},pc={type:"start"},sd={type:"end"},_a=new dl,od=new Vi,mb=Math.cos(70*rx.DEG2RAD);class _b extends Fr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",ot),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rd),n.update(),s=r.NONE},this.update=function(){const M=new H,it=new Nr().setFromUnitVectors(t.up,new H(0,1,0)),$=it.clone().invert(),rt=new H,ht=new Nr,Pt=new H,Vt=2*Math.PI;return function(ye=null){const $t=n.object.position;M.copy($t).sub(n.target),M.applyQuaternion(it),a.setFromVector3(M),n.autoRotate&&s===r.NONE&&X(b(ye)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ee=n.minAzimuthAngle,be=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(be)&&(Ee<-Math.PI?Ee+=Vt:Ee>Math.PI&&(Ee-=Vt),be<-Math.PI?be+=Vt:be>Math.PI&&(be-=Vt),Ee<=be?a.theta=Math.max(Ee,Math.min(be,a.theta)):a.theta=a.theta>(Ee+be)/2?Math.max(Ee,a.theta):Math.min(be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let hn=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=dt(a.radius);else{const dn=a.radius;a.radius=dt(a.radius*c),hn=dn!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion($),$t.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let dn=null;if(n.object.isPerspectiveCamera){const Li=M.length();dn=dt(Li*c);const ar=Li-dn;n.object.position.addScaledVector(y,ar),n.object.updateMatrixWorld(),hn=!!ar}else if(n.object.isOrthographicCamera){const Li=new H(C.x,C.y,0);Li.unproject(n.object);const ar=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),hn=ar!==n.object.zoom;const lr=new H(C.x,C.y,0);lr.unproject(n.object),n.object.position.sub(lr).add(Li),n.object.updateMatrixWorld(),dn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;dn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(dn).add(n.object.position):(_a.origin.copy(n.object.position),_a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_a.direction))<mb?t.lookAt(n.target):(od.setFromNormalAndCoplanarPoint(n.object.up,n.target),_a.intersectPlane(od,n.target))))}else if(n.object.isOrthographicCamera){const dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),dn!==n.object.zoom&&(n.object.updateProjectionMatrix(),hn=!0)}return c=1,w=!1,hn||rt.distanceToSquared(n.object.position)>o||8*(1-ht.dot(n.object.quaternion))>o||Pt.distanceToSquared(n.target)>o?(n.dispatchEvent(rd),rt.copy(n.object.position),ht.copy(n.object.quaternion),Pt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Et),n.domElement.removeEventListener("pointerdown",lt),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",pt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ot),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new id,l=new id;let c=1;const u=new H,f=new Gt,h=new Gt,d=new Gt,g=new Gt,_=new Gt,m=new Gt,p=new Gt,S=new Gt,v=new Gt,y=new H,C=new Gt;let w=!1;const T=[],L={};let E=!1;function b(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function D(M){const it=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*it)}function X(M){l.theta-=M}function V(M){l.phi-=M}const G=function(){const M=new H;return function($,rt){M.setFromMatrixColumn(rt,0),M.multiplyScalar(-$),u.add(M)}}(),Y=function(){const M=new H;return function($,rt){n.screenSpacePanning===!0?M.setFromMatrixColumn(rt,1):(M.setFromMatrixColumn(rt,0),M.crossVectors(n.object.up,M)),M.multiplyScalar($),u.add(M)}}(),z=function(){const M=new H;return function($,rt){const ht=n.domElement;if(n.object.isPerspectiveCamera){const Pt=n.object.position;M.copy(Pt).sub(n.target);let Vt=M.length();Vt*=Math.tan(n.object.fov/2*Math.PI/180),G(2*$*Vt/ht.clientHeight,n.object.matrix),Y(2*rt*Vt/ht.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G($*(n.object.right-n.object.left)/n.object.zoom/ht.clientWidth,n.object.matrix),Y(rt*(n.object.top-n.object.bottom)/n.object.zoom/ht.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ft(M,it){if(!n.zoomToCursor)return;w=!0;const $=n.domElement.getBoundingClientRect(),rt=M-$.left,ht=it-$.top,Pt=$.width,Vt=$.height;C.x=rt/Pt*2-1,C.y=-(ht/Vt)*2+1,y.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function dt(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function mt(M){f.set(M.clientX,M.clientY)}function vt(M){ft(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function Bt(M){g.set(M.clientX,M.clientY)}function nt(M){h.set(M.clientX,M.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const it=n.domElement;X(2*Math.PI*d.x/it.clientHeight),V(2*Math.PI*d.y/it.clientHeight),f.copy(h),n.update()}function at(M){S.set(M.clientX,M.clientY),v.subVectors(S,p),v.y>0?F(D(v.y)):v.y<0&&N(D(v.y)),p.copy(S),n.update()}function Mt(M){_.set(M.clientX,M.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_),n.update()}function gt(M){ft(M.clientX,M.clientY),M.deltaY<0?N(D(M.deltaY)):M.deltaY>0&&F(D(M.deltaY)),n.update()}function zt(M){let it=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),it=!0;break}it&&(M.preventDefault(),n.update())}function Ot(M){if(T.length===1)f.set(M.pageX,M.pageY);else{const it=Dt(M),$=.5*(M.pageX+it.x),rt=.5*(M.pageY+it.y);f.set($,rt)}}function Rt(M){if(T.length===1)g.set(M.pageX,M.pageY);else{const it=Dt(M),$=.5*(M.pageX+it.x),rt=.5*(M.pageY+it.y);g.set($,rt)}}function U(M){const it=Dt(M),$=M.pageX-it.x,rt=M.pageY-it.y,ht=Math.sqrt($*$+rt*rt);p.set(0,ht)}function P(M){n.enableZoom&&U(M),n.enablePan&&Rt(M)}function I(M){n.enableZoom&&U(M),n.enableRotate&&Ot(M)}function q(M){if(T.length==1)h.set(M.pageX,M.pageY);else{const $=Dt(M),rt=.5*(M.pageX+$.x),ht=.5*(M.pageY+$.y);h.set(rt,ht)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const it=n.domElement;X(2*Math.PI*d.x/it.clientHeight),V(2*Math.PI*d.y/it.clientHeight),f.copy(h)}function K(M){if(T.length===1)_.set(M.pageX,M.pageY);else{const it=Dt(M),$=.5*(M.pageX+it.x),rt=.5*(M.pageY+it.y);_.set($,rt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_)}function et(M){const it=Dt(M),$=M.pageX-it.x,rt=M.pageY-it.y,ht=Math.sqrt($*$+rt*rt);S.set(0,ht),v.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),F(v.y),p.copy(S);const Pt=(M.pageX+it.x)*.5,Vt=(M.pageY+it.y)*.5;ft(Pt,Vt)}function J(M){n.enableZoom&&et(M),n.enablePan&&K(M)}function st(M){n.enableZoom&&et(M),n.enableRotate&&q(M)}function lt(M){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",x)),!xt(M)&&(Nt(M),M.pointerType==="touch"?Tt(M):O(M)))}function A(M){n.enabled!==!1&&(M.pointerType==="touch"?ct(M):k(M))}function x(M){switch(Lt(M),T.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(sd),s=r.NONE;break;case 1:const it=T[0],$=L[it];Tt({pointerId:it,pageX:$.x,pageY:$.y});break}}function O(M){let it;switch(M.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case kr.DOLLY:if(n.enableZoom===!1)return;vt(M),s=r.DOLLY;break;case kr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Bt(M),s=r.PAN}else{if(n.enableRotate===!1)return;mt(M),s=r.ROTATE}break;case kr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;mt(M),s=r.ROTATE}else{if(n.enablePan===!1)return;Bt(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(pc)}function k(M){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;nt(M);break;case r.DOLLY:if(n.enableZoom===!1)return;at(M);break;case r.PAN:if(n.enablePan===!1)return;Mt(M);break}}function j(M){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(M.preventDefault(),n.dispatchEvent(pc),gt(Q(M)),n.dispatchEvent(sd))}function Q(M){const it=M.deltaMode,$={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(it){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return M.ctrlKey&&!E&&($.deltaY*=10),$}function pt(M){M.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(M){M.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function ot(M){n.enabled===!1||n.enablePan===!1||zt(M)}function Tt(M){switch(Ct(M),T.length){case 1:switch(n.touches.ONE){case Hr.ROTATE:if(n.enableRotate===!1)return;Ot(M),s=r.TOUCH_ROTATE;break;case Hr.PAN:if(n.enablePan===!1)return;Rt(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(M),s=r.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(pc)}function ct(M){switch(Ct(M),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;q(M),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;K(M),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(M),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;st(M),n.update();break;default:s=r.NONE}}function Et(M){n.enabled!==!1&&M.preventDefault()}function Nt(M){T.push(M.pointerId)}function Lt(M){delete L[M.pointerId];for(let it=0;it<T.length;it++)if(T[it]==M.pointerId){T.splice(it,1);return}}function xt(M){for(let it=0;it<T.length;it++)if(T[it]==M.pointerId)return!0;return!1}function Ct(M){let it=L[M.pointerId];it===void 0&&(it=new Gt,L[M.pointerId]=it),it.set(M.pageX,M.pageY)}function Dt(M){const it=M.pointerId===T[0]?T[1]:T[0];return L[it]}n.domElement.addEventListener("contextmenu",Et),n.domElement.addEventListener("pointerdown",lt),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",j,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}const ki=1e3,ad=2.6,ld=1.8,gb=.08,vb=.28,cd=4,xb=Wn({__name:"Background3D",setup(i){const t=je(null);let e,n,r,s,o,a,l,c,u,f=0,h=!0;const d=new Float32Array(ki*3),g=new Float32Array(ki*3),_=new Float32Array(ki);let m=performance.now(),p=16,S,v,y,C=[];function w(G,Y,z,F){for(let N=0;N<z;N++){const ft=N/(z-1),dt=(G[0]+(Y[0]-G[0])*ft)*ld,mt=(G[1]+(Y[1]-G[1])*ft)*ld,vt=(Math.random()-.5)*.6;F.push({x:dt,y:mt,z:vt})}}function T(){const G=[-2.5,0],Y=[-1.1,1.1],z=[-1.1,-1.1],F=[2.5,0],N=[1.1,1.1],ft=[1.1,-1.1],dt=[.65,1.3],mt=[-.65,-1.3],vt=[],Bt=[],nt=(Rt,U,P)=>{const I=U[0]-Rt[0],q=U[1]-Rt[1],K=Math.hypot(I,q)||1,et=-q/K,J=I/K;for(let st=0;st<cd;st++){const A=(st/(cd-1)-.5)*vb,x=[Rt[0]+et*A,Rt[1]+J*A],O=[U[0]+et*A,U[1]+J*A],k=vt.length;w(x,O,P,vt),Bt.push([k,vt.length-1])}};nt(G,Y,60),nt(G,z,60),nt(F,N,60),nt(F,ft,60),nt(mt,dt,80);const at=vt.length;S=new Float32Array(at*3),v=new Float32Array(at*3),y=new Float32Array(at),vt.forEach((Rt,U)=>{S[U*3]=Rt.x,S[U*3+1]=Rt.y,S[U*3+2]=Rt.z,v[U*3]=Rt.x,v[U*3+1]=Rt.y,v[U*3+2]=Rt.z,y[U]=Math.random()*Math.PI*2}),C=[];for(const[Rt,U]of Bt)for(let P=Rt;P<U;P++)C.push([P,P+1]);const Mt=new Ke;Mt.setAttribute("position",new rn(S,3));const gt=new Wc({size:gb,color:5951974,transparent:!0,opacity:1,depthWrite:!1,blending:cs});l=new ed(Mt,gt);const zt=new Ke;zt.setAttribute("position",new rn(new Float32Array(C.length*6),3));const Ot=new Gc({color:9141494,transparent:!0,opacity:.5,blending:cs});c=new Qh(zt,Ot),u=new fs,u.add(l,c)}function L(G){for(let z=0;z<y.length;z++){const F=z*3,N=y[z];S[F]=v[F]+Math.sin(G+N)*.06,S[F+1]=v[F+1]+Math.cos(G*.9+N)*.06,S[F+2]=v[F+2]+Math.sin(G*1.1+N)*.06}l.geometry.attributes.position.needsUpdate=!0;const Y=c.geometry.attributes.position.array;C.forEach(([z,F],N)=>{Y[N*6]=S[z*3],Y[N*6+1]=S[z*3+1],Y[N*6+2]=S[z*3+2],Y[N*6+3]=S[F*3],Y[N*6+4]=S[F*3+1],Y[N*6+5]=S[F*3+2]}),c.geometry.attributes.position.needsUpdate=!0}function E(){!e||!r||(r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight))}function b(){n=new hm,r=new vn(60,window.innerWidth/window.innerHeight,.1,100),r.position.z=10,e=new fm({canvas:t.value,antialias:!0,alpha:!0}),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),s=new _b(r,e.domElement),s.target.set(0,0,0),s.enableDamping=!0,s.dampingFactor=.05,s.enablePan=!1,s.enableZoom=!1,s.rotateSpeed=.5,s.minDistance=4,s.maxDistance=20;const G=32,Y=20,z=16;for(let vt=0;vt<ki;vt++){const Bt=(Math.random()-.5)*G,nt=(Math.random()-.5)*Y,at=(Math.random()-.5)*z;d[vt*3]=Bt,d[vt*3+1]=nt,d[vt*3+2]=at,g[vt*3]=Bt,g[vt*3+1]=nt,g[vt*3+2]=at,_[vt]=Math.random()*Math.PI*2}const F=new Ke;F.setAttribute("position",new rn(d,3));const N=new Wc({size:.045,color:5951974,transparent:!0,opacity:.85,depthWrite:!1,blending:cs});o=new ed(F,N),n.add(o);const ft=new Ke,dt=ki*4;ft.setAttribute("position",new rn(new Float32Array(dt*6),3));const mt=new Gc({color:9141494,transparent:!0,opacity:.18,blending:cs});a=new Qh(ft,mt),n.add(a),T(),n.add(u)}function D(){const G=a.geometry.attributes.position.array;let Y=0;const z=G.length/6;for(let F=0;F<ki&&Y<z;F++){const N=F*3;for(let ft=F+1;ft<ki&&Y<z;ft++){const dt=ft*3,mt=d[N]-d[dt],vt=d[N+1]-d[dt+1],Bt=d[N+2]-d[dt+2];mt*mt+vt*vt+Bt*Bt<ad*ad&&(G[Y*6]=d[N],G[Y*6+1]=d[N+1],G[Y*6+2]=d[N+2],G[Y*6+3]=d[dt],G[Y*6+4]=d[dt+1],G[Y*6+5]=d[dt+2],Y++)}}for(let F=Y*6;F<G.length;F++)G[F]=0;a.geometry.attributes.position.needsUpdate=!0,a.geometry.setDrawRange(0,Y*2)}function X(){if(!h)return;f=requestAnimationFrame(X);const G=performance.now(),Y=G-m;m=G,p=p*.9+Y*.1;const z=p>28,F=G*35e-5;for(let N=0;N<ki;N++){const ft=N*3,dt=_[N];d[ft]=g[ft]+Math.sin(F+dt)*.15,d[ft+1]=g[ft+1]+Math.cos(F*.9+dt)*.15,d[ft+2]=g[ft+2]+Math.sin(F*1.1+dt)*.15}o.geometry.attributes.position.needsUpdate=!0,z||D(),L(F),n.rotation.y+=6e-4,u.rotation.y+=.002,s.update(),e.render(n,r)}function V(){h=document.visibilityState==="visible",h?(m=performance.now(),f=requestAnimationFrame(X)):cancelAnimationFrame(f)}return Pi(()=>{b(),window.addEventListener("resize",E),document.addEventListener("visibilitychange",V),f=requestAnimationFrame(X)}),Lo(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",E),document.removeEventListener("visibilitychange",V),s?.dispose(),e?.dispose()}),(G,Y)=>(_e(),Se("canvas",{ref_key:"canvasEl",ref:t,class:"bg-canvas","aria-hidden":"true"},null,512))}}),Xn=(i,t)=>{const e=i.__vccOpts||i;for(const[n,r]of t)e[n]=r;return e},Sb=Xn(xb,[["__scopeId","data-v-e8942278"]]);function Mb(){const i=je(0),t=je(0),e=je(!1);let n=0,r=0,s=0;function o(l){n=l.clientX,r=l.clientY;const c=document.elementFromPoint(l.clientX,l.clientY);e.value=!!c?.closest('[data-cursor="hover"]')}function a(){i.value+=(n-i.value)*.18,t.value+=(r-t.value)*.18,s=requestAnimationFrame(a)}return Pi(()=>{window.addEventListener("mousemove",o),s=requestAnimationFrame(a)}),Lo(()=>{window.removeEventListener("mousemove",o),cancelAnimationFrame(s)}),{x:i,y:t,hovering:e}}const yb=Wn({__name:"CursorGlow",setup(i){const{x:t,y:e,hovering:n}=Mb();return(r,s)=>(_e(),Se("div",{class:Co(["cursor-orb",{"cursor-orb--active":ls(n)}]),style:Bs({transform:`translate(${ls(t)}px, ${ls(e)}px) translate(-50%, -50%) scale(${ls(n)?1.8:1})`})},null,6))}}),Eb=Xn(yb,[["__scopeId","data-v-ee17b400"]]);function vi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function dm(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},wu,Ne,ce,In=1e8,re=1/In,Yc=Math.PI*2,bb=Yc/4,Tb=0,pm=Math.sqrt,Ab=Math.cos,wb=Math.sin,De=function(t){return typeof t=="string"},ge=function(t){return typeof t=="function"},wi=function(t){return typeof t=="number"},Ru=function(t){return typeof t>"u"},li=function(t){return typeof t=="object"},an=function(t){return t!==!1},Cu=function(){return typeof window<"u"},ga=function(t){return ge(t)||De(t)},mm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ve=Array.isArray,Rb=/random\([^)]+\)/g,Cb=/,\s*/g,ud=/(?:-?\.?\d|\.)+/gi,_m=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gm=/[+-]=-?[.\d]+/,Pb=/[^,'"\[\]\s]+/gi,Lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,Kn,qc,Pu,Tn={},qa={},vm,xm=function(t){return(qa=Ds(t,Tn))&&fn},Lu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Mo=function(t,e){return!e&&console.warn(t)},Sm=function(t,e){return t&&(Tn[t]=e)&&qa&&(qa[t]=e)||Tn},yo=function(){return 0},Db={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},Ib={suppressEvents:!0},Du={},ji=[],$c={},Mm,gn={},_c={},fd=30,wa=[],Iu="",Uu=function(t){var e=t[0],n,r;if(li(e)||ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=wa.length;r--&&!wa[r].targetTest(e););n=wa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Gm(t[r],n)))||t.splice(r,1);return t},Pr=function(t){return t._gsap||Uu(Un(t))[0]._gsap},ym=function(t,e,n){return(n=t[e])&&ge(n)?t[e]():Ru(n)&&t.getAttribute&&t.getAttribute(e)||n},ln=function(t,e){return(t=t.split(",")).forEach(e)||t},xe=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Ub=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},$a=function(){var t=ji.length,e=ji.slice(0),n,r;for($c={},ji.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Nu=function(t){return!!(t._initted||t._startAt||t.add)},Em=function(t,e,n,r){ji.length&&!Ne&&$a(),t.render(e,n,!!(Ne&&e<0&&Nu(t))),ji.length&&!Ne&&$a()},bm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pb).length<2?e:De(t)?t.trim():t},Tm=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Nb=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Ds=function(t,e){for(var n in e)t[n]=e[n];return t},hd=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=li(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Ka=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},fo=function(t){var e=t.parent||fe,n=t.keyframes?Nb(Ve(t.keyframes)):An;if(an(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ob=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Am=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},_l=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},nr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Lr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Fb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Kc=function(t,e,n,r){return t._startAt&&(Ne?t._startAt.revert(Aa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Bb=function i(t){return!t||t._ts&&i(t.parent)},dd=function(t){return t._repeat?Is(t._tTime,t=t.duration()+t._rDelay)*t:0},Is=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},ja=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},gl=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},vl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),gl(t),n._dirty||Lr(n,t)),t},wm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ja(t.rawTime(),e),(!e._dur||Bo(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),Lr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},ei=function(t,e,n,r){return e.parent&&nr(e),e._start=ue((wi(n)?n:n||t!==fe?Cn(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Am(t,e,"_first","_last",t._sort?"_start":0),jc(e)||(t._recent=e),r||wm(t,e),t._ts<0&&vl(t,t._tTime),t},Rm=function(t,e){return(Tn.ScrollTrigger||Lu("scrollTrigger",e))&&Tn.ScrollTrigger.create(e,t)},Cm=function(t,e,n,r,s){if(Fu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mm!==xn.frame)return ji.push(t),t._lazy=[s,r],1},zb=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},jc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},kb=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&zb(t)&&!(!t._initted&&jc(t))||(t._ts<0||t._dp._ts<0)&&!jc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Bo(0,t._tDur,e),u=Is(l,a),t._yoyo&&u&1&&(o=1-o),u!==Is(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ne||r||t._zTime===re||!e&&t._zTime){if(!t._initted&&Cm(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Kc(t,e,n,!0),t._onUpdate&&!n&&Mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&nr(t,1),!n&&!Ne&&(Mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Hb=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Us=function(t,e,n,r){var s=t._repeat,o=ue(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ue(o*(s+1)+t._rDelay*s):o,a>0&&!r&&vl(t,t._tTime=t._tDur*a),t.parent&&gl(t),n||Lr(t.parent,t),t},pd=function(t){return t instanceof nn?Lr(t):Us(t,t._dur)},Vb={_start:0,endTime:yo,totalDuration:yo},Cn=function i(t,e,n){var r=t.labels,s=t._recent||Vb,o=t.duration()>=In?s.endTime(!1):t._dur,a,l,c;return De(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ve(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ho=function(t,e,n){var r=wi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new we(e[0],o,e[s+1])},or=function(t,e){return t||t===0?e(t):e},Bo=function(t,e,n){return n<t?t:n>e?e:n},ke=function(t,e){return!De(t)||!(e=Lb.exec(t))?"":e[1]},Gb=function(t,e,n){return or(n,function(r){return Bo(t,e,r)})},Zc=[].slice,Pm=function(t,e){return t&&li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&li(t[0]))&&!t.nodeType&&t!==Kn},Wb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return De(r)&&!e||Pm(r,1)?(s=n).push.apply(s,Un(r)):n.push(r)})||n},Un=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):De(t)&&!n&&(qc||!Ns())?Zc.call((e||Pu).querySelectorAll(t),0):Ve(t)?Wb(t,n):Pm(t)?Zc.call(t,0):t?[t]:[]},Jc=function(t){return t=Un(t)[0]||Mo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Un(e,n.querySelectorAll?n:n===t?Mo("Invalid scope")||Pu.createElement("div"):t)}},Lm=function(t){return t.sort(function(){return .5-Math.random()})},Dm=function(t){if(ge(t))return t;var e=li(t)?t:{each:t},n=Dr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return De(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,S,v,y,C,w,T,L,E;if(!m){if(E=e.grid==="auto"?0:(e.grid||[1,In])[1],!E){for(T=-In;T<(T=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],p=l?Math.min(E,_)*u-.5:r%E,S=E===In?0:l?_*f/E-.5:r/E|0,T=0,L=In,w=0;w<_;w++)v=w%E-p,y=S-(w/E|0),m[w]=C=c?Math.abs(c==="y"?y:v):pm(v*v+y*y),C>T&&(T=C),C<L&&(L=C);r==="random"&&Lm(m),m.max=T-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ke(e.amount||e.each)||0,n=n&&_<0?iT(n):n}return _=(m[h]-m.min)/m.max||0,ue(m.b+(n?n(_):_)*m.v)+m.u}},Qc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=ue(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(wi(n)?0:ke(n))}},Im=function(t,e){var n=Ve(t),r,s;return!n&&li(t)&&(r=n=t.radius||In,t.values?(t=Un(t.values),(s=!wi(t[0]))&&(r*=r)):t=Qc(t.increment)),or(e,n?ge(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=In,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||wi(o)?u:u+ke(o)}:Qc(t))},Um=function(t,e,n,r){return or(Ve(t)?!e:n===!0?!!(n=0):!r,function(){return Ve(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Xb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},Yb=function(t,e){return function(n){return t(parseFloat(n))+(e||ke(n))}},qb=function(t,e,n){return Om(t,e,0,1,n)},Nm=function(t,e,n){return or(n,function(r){return t[~~e(r)]})},$b=function i(t,e,n){var r=e-t;return Ve(t)?Nm(t,i(0,t.length),e):or(n,function(s){return(r+(s-t)%r)%r+t})},Kb=function i(t,e,n){var r=e-t,s=r*2;return Ve(t)?Nm(t,i(0,t.length-1),e):or(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Eo=function(t){return t.replace(Rb,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Cb);return Um(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Om=function(t,e,n,r,s){var o=e-t,a=r-n;return or(s,function(l){return n+((l-t)/o*a||0)})},jb=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=De(t),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Ve(t)&&!Ve(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else r||(t=Ds(Ve(t)?[]:{},t));if(!u){for(l in e)Ou.call(a,t,l,"get",e[l]);s=function(g){return ku(g,a)||(o?t.p:t)}}}return or(n,s)},md=function(t,e,n){var r=t.labels,s=In,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(t,e,n){var r=t.vars,s=r[e],o=ce,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&ji.length&&$a(),a&&(ce=a),u=l?s.apply(c,l):s.call(c),ce=o,u},eo=function(t){return nr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&Mn(t,"onInterrupt"),t},ds,Fm=[],Bm=function(t){if(t)if(t=!t.name&&t.default||t,Cu()||t.headless){var e=t.name,n=ge(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:yo,render:ku,add:Ou,kill:dT,modifier:hT,rawVars:0},o={targetTest:0,get:0,getSetter:zu,aliases:{},register:0};if(Ns(),t!==r){if(gn[e])return;An(r,An(Ka(t,s),o)),Ds(r.prototype,Ds(s,Ka(t,o))),gn[r.prop=e]=r,t.targetTest&&(wa.push(r),Du[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Sm(e,r),t.register&&t.register(fn,r,cn)}else Fm.push(t)},ie=255,no={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},gc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ie+.5|0},zm=function(t,e,n){var r=t?wi(t)?[t>>16,t>>8&ie,t&ie]:0:no.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),no[t])r=no[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(ud),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=gc(l+1/3,s,o),r[1]=gc(l,s,o),r[2]=gc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(_m),n&&r.length<4&&(r[3]=1),r}else r=t.match(ud)||no.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/ie,o=r[1]/ie,a=r[2]/ie,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},km=function(t){var e=[],n=[],r=-1;return t.split(Zi).forEach(function(s){var o=s.match(hs)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},_d=function(t,e,n){var r="",s=(t+r).match(Zi),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=zm(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=km(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Zi,"1").split(hs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Zi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Zi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in no)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),Zb=/hsl[a]?\(/,Hm=function(t){var e=t.join(" "),n;if(Zi.lastIndex=0,Zi.test(e))return n=Zb.test(e),t[1]=_d(t[1],n),t[0]=_d(t[0],n,km(t[1])),!0},bo,xn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,S=m===!0,v,y,C,w;if((p>t||p<0)&&(n+=p-e),r+=p,C=r-n,v=C-o,(v>0||S)&&(w=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),y=1),S||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](C,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){vm&&(!qc&&Cu()&&(Kn=qc=window,Pu=Kn.document||{},Tn.gsap=fn,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(fn.version),xm(qa||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),Fm.forEach(Bm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},bo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),bo=0,c=yo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var v=p?function(y,C,w,T){m(y,C,w,T),f.remove(v)}:m;return f.remove(m),a[S?"unshift":"push"](v),Ns(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ns=function(){return!bo&&xn.wake()},qt={},Jb=/^[\d.\-M][\d.\-,\s]/,Qb=/["']/g,tT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(Qb,"").trim():+c,r=l.substr(a+1).trim();return e},eT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},nT=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[tT(e[1])]:eT(t).split(",").map(bm)):qt._CE&&Jb.test(t)?qt._CE("",t):n},iT=function(t){return function(e){return 1-t(1-e)}},Dr=function(t,e){return t&&(ge(t)?t:qt[t]||nT(t))||e},Br=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return ln(t,function(a){qt[a]=Tn[a]=s,qt[o=a.toLowerCase()]=n;for(var l in s)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=s[l]}),s},Vm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},vc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Yc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*wb((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Vm(a);return s=Yc/s,l.config=function(c,u){return i(t,c,u)},l},xc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Vm(n);return r.config=function(s){return i(t,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Br(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;Br("Elastic",vc("in"),vc("out"),vc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Br("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Br("Circ",function(i){return-(pm(1-i*i)-1)});Br("Sine",function(i){return i===1?1:-Ab(i*bb)+1});Br("Back",xc("in"),xc("out"),xc());qt.SteppedEase=qt.steps=Tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-re;return function(a){return((r*Bo(0,o,a)|0)+s)*n}}};So.ease=qt["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Iu+=i+","+i+"Params,"});var Gm=function(t,e){this.id=Tb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ym,this.set=e?e.getSetter:zu},To=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Us(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),bo||xn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vl(this,n),!s._dp||s.parent||wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Em(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Is(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(Bo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),gl(this),Fb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ue(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ei(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ib);var r=Ne;return Ne=n,Nu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ne=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,pd(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Cn(this,n),an(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,an(r)),this._dur||(this._zTime=-re),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-re)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=ge(n)?n:Tm,l=function(){var u=r.then;r.then=null,s&&s(),ge(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){eo(this)},i}();An(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var nn=function(i){dm(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),fe&&ei(n.parent||fe,vi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rm(vi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ho(0,arguments,this),this},e.from=function(r,s,o){return ho(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ho(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new we(r,s,Cn(this,o),1),this},e.call=function(r,s,o){return ei(this,we.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new we(r,o,Cn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,fo(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,fo(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ue(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,S,v,y,C,w,T;if(this!==fe&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,y=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ue(u%m),u===l?(_=this._repeat,h=c):(C=ue(u/m),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=Is(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(h=c-h,T=1),_!==C&&!this._lock){var L=w&&C&1,E=L===(w&&_&1);if(_<C&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(T?0:ue(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Hb(this,ue(a),ue(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!C&&(Mn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-re);break}}d=g}else{d=this._last;for(var b=r<0?r:h;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||Ne&&Nu(d)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-re:re);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-re)._zTime=h>=a?1:-1,this._ts))return this._start=y,gl(this),this.render(r,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&nr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(wi(s)||(s=Cn(this,s,r)),!(r instanceof To)){if(Ve(r))return r.forEach(function(a){return o.add(a,s)}),this;if(De(r))return this.addLabel(r,s);if(ge(r))r=we.delayedCall(0,r);else return this}return this!==r?ei(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-In);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof we?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return De(r)?this.removeLabel(r):ge(r)?this.killTweensOf(r):(r.parent===this&&_l(this,r),r===this._recent&&(this._recent=this._last),Lr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(xn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Cn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=we.delayedCall(0,s||yo,o);return a.data="isPause",this._hasPause=1,ei(this,a,Cn(this,r))},e.removePause=function(r){var s=this._first;for(r=Cn(this,r);s;)s._start===r&&s.data==="isPause"&&nr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Xi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Un(r),l=this._first,c=wi(s),u;l;)l instanceof we?Ub(l._targets,a)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Cn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=we.to(o,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||re,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Us(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,An({startAt:{time:Cn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),md(this,Cn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),md(this,Cn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ue(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Lr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Lr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=In,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ei(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ue(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Us(o,o===fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(fe._ts&&(Em(fe,ja(r,fe)),Mm=xn.frame),xn.frame>=fd){fd+=bn.autoSleep||120;var s=fe._first;if((!s||!s._ts)&&bn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},t}(To);An(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rT=function(t,e,n,r,s,o,a){var l=new cn(this._pt,t,e,0,1,Km,null,s),c=0,u=0,f,h,d,g,_,m,p,S;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Eo(r)),o&&(S=[n,r],o(S,t,e),n=S[0],r=S[1]),h=n.match(mc)||[];f=mc.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=mc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(gm.test(r)||p)&&(l.e=0),this._pt=l,l},Ou=function(t,e,n,r,s,o,a,l,c,u){ge(r)&&(r=r(s||0,t,o));var f=t[e],h=n!=="get"?n:ge(f)?c?t[e.indexOf("set")||!ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=ge(f)?c?cT:qm:Bu,g;if(De(r)&&(~r.indexOf("random(")&&(r=Eo(r)),r.charAt(1)==="="&&(g=Ms(h,r)+(ke(h)||0),(g||g===0)&&(r=g))),!u||h!==r||tu)return!isNaN(h*r)&&r!==""?(g=new cn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?fT:$m,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Lu(e,r),rT.call(this,t,e,h,r,d,l||bn.stringFilter,c))},sT=function(t,e,n,r,s){if(ge(t)&&(t=po(t,s,e,n,r)),!li(t)||t.style&&t.nodeType||Ve(t)||mm(t))return De(t)?po(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=po(t[a],s,e,n,r);return o},Wm=function(t,e,n,r,s,o){var a,l,c,u;if(gn[t]&&(a=new gn[t]).init(s,a.rawVars?e[t]:sT(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Xi,tu,Fu=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!wu,y=t.timeline,C=r.easeReverse||f,w,T,L,E,b,D,X,V,G,Y,z,F,N;if(y&&(!h||!s)&&(s="none"),t._ease=Dr(s,So.ease),t._rEase=C&&(Dr(C)||t._ease),t._from=!y&&!!r.runBackwards,t._from&&(t.ratio=1),!y||h&&!r.stagger){if(V=m[0]?Pr(m[0]).harness:0,F=V&&r[V.prop],w=Ka(r,Du),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Aa:Db),_._lazy=0),o){if(nr(t._startAt=we.set(m,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne||!a&&!d)&&t._startAt.revert(Aa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),L=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&an(l),immediateRender:a,stagger:0,parent:p},w),F&&(L[V.prop]=F),nr(t._startAt=we.set(m,L)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne?t._startAt.revert(Aa):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&an(l)||l&&!g,T=0;T<m.length;T++){if(b=m[T],X=b._gsap||Uu(m)[T]._gsap,t._ptLookup[T]=Y={},$c[X.id]&&ji.length&&$a(),z=S===m?T:S.indexOf(b),V&&(G=new V).init(b,F||w,t,z,S)!==!1&&(t._pt=E=new cn(t._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(ft){Y[ft]=E}),G.priority&&(D=1)),!V||F)for(L in w)gn[L]&&(G=Wm(L,w,t,z,b,S))?G.priority&&(D=1):Y[L]=E=Ou.call(t,b,L,"get",w[L],z,S,0,r.stringFilter);t._op&&t._op[T]&&t.kill(b,t._op[T]),v&&t._pt&&(Xi=t,fe.killTweensOf(b,Y,t.globalTime(e)),N=!t.parent,Xi=0),t._pt&&l&&($c[X.id]=1)}D&&jm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!N,h&&e<=0&&y.render(In,!0,!0)},oT=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return tu=1,t.vars[e]="+=0",Fu(t,a),tu=0,l?Mo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=xe(n)+ke(f.e)),f.b&&(f.b=u.s+ke(f.b))},aT=function(t,e){var n=t[0]?Pr(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Ds({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},lT=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Ve(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},po=function(t,e,n,r,s){return ge(t)?t.call(e,n,r,s):De(t)&&~t.indexOf("random(")?Eo(t):t},Xm=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ym={};ln(Xm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ym[i]=1});var we=function(i){dm(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:fo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||fe,S=(Ve(n)||mm(n)?wi(n[0]):"length"in r)?[n]:Un(n),v,y,C,w,T,L,E,b;if(a._targets=S.length?Uu(S):Mo("GSAP target "+n+" not found. https://gsap.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ga(c)||ga(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(v=a.timeline=new nn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),v.kill(),v.parent=v._dp=vi(a),v._start=0,h||ga(c)||ga(u)){if(w=S.length,E=h&&Dm(h),li(h))for(T in h)~Xm.indexOf(T)&&(b||(b={}),b[T]=h[T]);for(y=0;y<w;y++)C=Ka(r,Ym),C.stagger=0,D&&(C.easeReverse=D),b&&Ds(C,b),L=S[y],C.duration=+po(c,vi(a),y,L,S),C.delay=(+po(u,vi(a),y,L,S)||0)-a._delay,!h&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),v.to(L,C,E?E(y,L,S):0),v._ease=qt.none;v.duration()?c=u=0:a.timeline=0}else if(g){fo(An(v.vars.defaults,{ease:"none"})),v._ease=Dr(g.ease||r.ease||"none");var X=0,V,G,Y;if(Ve(g))g.forEach(function(z){return v.to(S,z,">")}),v.duration();else{C={};for(T in g)T==="ease"||T==="easeEach"||lT(T,g[T],C,g.easeEach);for(T in C)for(V=C[T].sort(function(z,F){return z.t-F.t}),X=0,y=0;y<V.length;y++)G=V[y],Y={ease:G.e,duration:(G.t-(y?V[y-1].t:0))/100*c},Y[T]=G.v,v.to(S,Y,X),X+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!wu&&(Xi=vi(a),fe.killTweensOf(S),Xi=0),ei(p,vi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===ue(p._time)&&an(f)&&Bb(vi(a))&&p.data!=="nested")&&(a._tTime=-re,a.render(Math.max(0,-u)||0)),m&&Rm(vi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-re&&!u?l:r<re?0:r,h,d,g,_,m,p,S,v;if(!c)kb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=ue(f%_),f===l?(g=this._repeat,h=c):(m=ue(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Is(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ue(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Cm(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var C=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Mn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Kc(this,r,s,o),Mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Kc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&nr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){bo||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fu(this,c),u=this._ease(c/this._dur),oT(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(vl(this,0),this.parent||Am(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Xi&&Xi.vars.overwrite!==!0)._first||eo(this),this.parent&&o!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Un(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Ob(a,l))return s==="all"&&(this._pt=0),eo(this);for(f=this._op=this._op||[],s!=="all"&&(De(s)&&(_={},ln(s,function(S){return _[S]=1}),s=_),s=aT(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_l(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&eo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ho(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ho(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return fe.killTweensOf(r,s,o)},t}(To);An(we.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(i){we[i]=function(){var t=new nn,e=Zc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Bu=function(t,e,n){return t[e]=n},qm=function(t,e,n){return t[e](n)},cT=function(t,e,n,r){return t[e](r.fp,n)},uT=function(t,e,n){return t.setAttribute(e,n)},zu=function(t,e){return ge(t[e])?qm:Ru(t[e])&&t.setAttribute?uT:Bu},$m=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Km=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},ku=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hT=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},dT=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?_l(this,e,"_pt"):e.dep||(n=1),e=r;return!n},pT=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},jm=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},cn=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||$m,this.d=l||this,this.set=c||Bu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=pT,this.m=n,this.mt=s,this.tween=r},i}();ln(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Du[i]=1});Tn.TweenMax=Tn.TweenLite=we;Tn.TimelineLite=Tn.TimelineMax=nn;fe=new nn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=Hm;var Ir=[],Ra={},mT=[],gd=0,_T=0,Sc=function(t){return(Ra[t]||mT).map(function(e){return e()})},eu=function(){var t=Date.now(),e=[];t-gd>2&&(Sc("matchMediaInit"),Ir.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Kn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Sc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),gd=t,Sc("matchMedia"))},Zm=function(){function i(e,n){this.selector=n&&Jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_T++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ge(n)&&(s=r,r=n,n=ge);var o=this,a=function(){var c=ce,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jc(s)),ce=o,f=r.apply(o,arguments),ge(f)&&o._r.push(f),ce=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=ce;ce=null,n(this),ce=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof we&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof we)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ir.length;o--;)Ir[o].id===this.id&&Ir.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),gT=function(){function i(e){this.contexts=[],this.scope=e,ce&&ce.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){li(n)||(n={matches:n});var o=new Zm(0,s||this.scope),a=o.conditions={},l,c,u;ce&&!o.selector&&(o.selector=ce.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Kn.matchMedia(n[c]),l&&(Ir.indexOf(o)<0&&Ir.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(eu):l.addEventListener("change",eu)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Za={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Bm(r)})},timeline:function(t){return new nn(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,n,r){De(t)&&(t=Un(t)[0]);var s=Pr(t||{}).get,o=n?Tm:bm;return n==="native"&&(n=""),t&&(e?o((gn[e]&&gn[e].get||s)(t,e,n,r)):function(a,l,c){return o((gn[a]&&gn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Un(t),t.length>1){var r=t.map(function(u){return fn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=gn[e],a=Pr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;ds._pt=0,f.init(t,n?u+n:u,ds,0,[t]),f.render(1,f),ds._pt&&ku(1,ds)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=fn.to(t,An((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Dr(t.ease,So.ease)),hd(So,t||{})},config:function(t){return hd(bn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gn[a]&&!Tn[a]&&Mo(e+" effect requires "+a+" plugin.")}),_c[e]=function(a,l,c){return n(Un(a),An(l||{},s),c)},o&&(nn.prototype[e]=function(a,l,c){return this.add(_c[e](a,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=Dr(e)},parseEase:function(t,e){return arguments.length?Dr(t,e):qt},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new nn(t),r,s;for(n.smoothChildTiming=an(t.smoothChildTiming),fe.remove(n),n._dp=0,n._time=n._tTime=fe._time,r=fe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof we&&r.vars.onComplete===r._targets[0]))&&ei(n,r,r._start-r._delay),r=s;return ei(fe,n,0),n},context:function(t,e){return t?new Zm(t,e):ce},matchMedia:function(t){return new gT(t)},matchMediaRefresh:function(){return Ir.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||eu()},addEventListener:function(t,e){var n=Ra[t]||(Ra[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ra[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:$b,wrapYoyo:Kb,distribute:Dm,random:Um,snap:Im,normalize:qb,getUnit:ke,clamp:Gb,splitColor:zm,toArray:Un,selector:Jc,mapRange:Om,pipe:Xb,unitize:Yb,interpolate:jb,shuffle:Lm},install:xm,effects:_c,ticker:xn,updateRoot:nn.updateRoot,plugins:gn,globalTimeline:fe,core:{PropTween:cn,globals:Sm,Tween:we,Timeline:nn,Animation:To,getCache:Pr,_removeLinkedListItem:_l,reverting:function(){return Ne},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return wu=t}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Za[i]=we[i]});xn.add(nn.updateRoot);ds=Za.to({},{duration:0});var vT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},xT=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=vT(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Mc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(De(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}xT(a,s)}}}},fn=Za.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ne?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Mc("roundProps",Qc),Mc("modifiers"),Mc("snap",Im))||Za;we.version=nn.version=fn.version="3.15.0";vm=1;Cu()&&Ns();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vd,Yi,ys,Hu,wr,xd,Vu,ST=function(){return typeof window<"u"},Ri={},yr=180/Math.PI,Es=Math.PI/180,ss=Math.atan2,Sd=1e8,Gu=/([A-Z])/g,MT=/(left|right|width|margin|padding|x)/i,yT=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ET=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},TT=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},AT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Jm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Qm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},wT=function(t,e,n){return t.style[e]=n},RT=function(t,e,n){return t.style.setProperty(e,n)},CT=function(t,e,n){return t._gsap[e]=n},PT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},LT=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},DT=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},he="transform",un=he+"Origin",IT=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in Ri&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Si(r,a)}):this.tfm[t]=o.x?o[t]:Si(r,t),t===un&&(this.tfm.zOrigin=o.zOrigin);else return ii.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=he}(s||e)&&this.props.push(t,e,s[t])},t_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},UT=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Vu(),(!s||!s.isStart)&&!n[he]&&(t_(n),r.zOrigin&&n[un]&&(n[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},e_=function(t,e){var n={target:t,props:[],revert:UT,save:IT};return t._gsap||fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},n_,iu=function(t,e){var n=Yi.createElementNS?Yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yi.createElement(t);return n&&n.style?n:Yi.createElement(t)},yn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Gu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Os(e)||e,1)||""},Md="O,Moz,ms,Ms,Webkit".split(","),Os=function(t,e,n){var r=e||wr,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Md[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Md[o]:"")+t},ru=function(){ST()&&window.document&&(vd=window,Yi=vd.document,ys=Yi.documentElement,wr=iu("div")||{style:{}},iu("div"),he=Os(he),un=he+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",n_=!!Os("perspective"),Vu=fn.core.reverting,Hu=1)},yd=function(t){var e=t.ownerSVGElement,n=iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ys.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ys.removeChild(n),s},Ed=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},i_=function(t){var e,n;try{e=t.getBBox()}catch{e=yd(t),n=1}return e&&(e.width||e.height)||n||(e=yd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ed(t,["x","cx","x1"])||0,y:+Ed(t,["y","cy","y1"])||0,width:0,height:0}:e},r_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&i_(t))},ir=function(t,e){if(e){var n=t.style,r;e in Ri&&e!==un&&(e=he),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Gu,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,r,s,o){var a=new cn(t._pt,e,n,0,1,o?Qm:Jm);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},bd={deg:1,rad:1,turn:1},NT={grid:1,flex:1},rr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wr.style,l=MT.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||bd[r]||bd[o])return s;if(o!=="px"&&!h&&(s=i(t,e,n,"px")),p=t.getCTM&&r_(t),(d||o==="%")&&(Ri[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],xe(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Yi||!_.appendChild)&&(_=Yi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===xn.time&&!m.uncache)return xe(s/m.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+r,g=t[u],S?t.style[e]=S:ir(t,e)}else(d||o==="%")&&!NT[yn(_,"display")]&&(a.position=yn(t,"position")),_===t&&(a.position="static"),_.appendChild(wr),g=wr[u],_.removeChild(wr),a.position="absolute";return l&&d&&(m=Pr(_),m.time=xn.time,m.width=_[u]),xe(h?g*s/f:g&&s?f/g*s:0)},Si=function(t,e,n,r){var s;return Hu||ru(),e in ii&&e!=="transform"&&(e=ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ri[e]&&e!=="transform"?(s=wo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Qa(yn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ja[e]&&Ja[e](t,e,n)||yn(t,e)||ym(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?rr(t,e,s,n)+n:s},OT=function(t,e,n,r){if(!n||n==="none"){var s=Os(e,t,1),o=s&&yn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=yn(t,"borderTopColor"))}var a=new cn(this._pt,t.style,e,0,1,Km),l=0,c=0,u,f,h,d,g,_,m,p,S,v,y,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=yn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=yn(t,e)||r,_?t.style[e]=_:ir(t,e)),u=[n,r],Hm(u),n=u[0],r=u[1],h=n.match(hs)||[],C=r.match(hs)||[],C.length){for(;f=hs.exec(r);)m=f[0],S=r.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ms(d,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=hs.lastIndex-v.length,v||(v=v||bn.units[e]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(d=rr(t,e,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Qm:Jm;return gm.test(r)&&(a.e=0),this._pt=a,a},Td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FT=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Td[n]||n,e[1]=Td[r]||r,e.join(" ")},BT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ri[a]&&(l=1,a=a==="transformOrigin"?un:he),ir(n,a);l&&(ir(n,he),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",wo(n,1),o.uncache=1,t_(r)))}},Ja={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new cn(t._pt,e,n,0,0,BT);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ao=[1,0,0,1,0,0],s_={},o_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ad=function(t){var e=yn(t,he);return o_(e)?Ao:e.substr(7).match(_m).map(xe)},Wu=function(t,e){var n=t._gsap||Pr(t),r=t.style,s=Ad(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ao:s):(s===Ao&&!t.offsetParent&&t!==ys&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ys.appendChild(t)),s=Ad(t),l?r.display=l:ir(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},su=function(t,e,n,r,s,o){var a=t._gsap,l=s||Wu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],v=e.split(" "),y=parseFloat(v[0])||0,C=parseFloat(v[1])||0,w,T,L,E;n?l!==Ao&&(T=d*m-g*_)&&(L=y*(m/T)+C*(-_/T)+(_*S-m*p)/T,E=y*(-g/T)+C*(d/T)-(d*S-g*p)/T,y=L,C=E):(w=i_(t),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(v[1]||v[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(p=y-c,S=C-u,a.xOffset=f+(p*d+S*_)-p,a.yOffset=h+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[un]="0px 0px",o&&(qi(o,a,"xOrigin",c,y),qi(o,a,"yOrigin",u,C),qi(o,a,"xOffset",f,a.xOffset),qi(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+C)},wo=function(t,e){var n=t._gsap||new Gm(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=yn(t,un)||"0",u,f,h,d,g,_,m,p,S,v,y,C,w,T,L,E,b,D,X,V,G,Y,z,F,N,ft,dt,mt,vt,Bt,nt,at;return u=f=h=_=m=p=S=v=y=0,d=g=1,n.svg=!!(t.getCTM&&r_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[he]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[he]!=="none"?l[he]:"")),r.scale=r.rotate=r.translate="none"),T=Wu(t,n.svg),n.svg&&(n.uncache?(N=t.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),su(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,w=n.yOrigin||0,T!==Ao&&(D=T[0],X=T[1],V=T[2],G=T[3],u=Y=T[4],f=z=T[5],T.length===6?(d=Math.sqrt(D*D+X*X),g=Math.sqrt(G*G+V*V),_=D||X?ss(X,D)*yr:0,S=V||G?ss(V,G)*yr+_:0,S&&(g*=Math.abs(Math.cos(S*Es))),n.svg&&(u-=C-(C*D+w*V),f-=w-(C*X+w*G))):(at=T[6],Bt=T[7],dt=T[8],mt=T[9],vt=T[10],nt=T[11],u=T[12],f=T[13],h=T[14],L=ss(at,vt),m=L*yr,L&&(E=Math.cos(-L),b=Math.sin(-L),F=Y*E+dt*b,N=z*E+mt*b,ft=at*E+vt*b,dt=Y*-b+dt*E,mt=z*-b+mt*E,vt=at*-b+vt*E,nt=Bt*-b+nt*E,Y=F,z=N,at=ft),L=ss(-V,vt),p=L*yr,L&&(E=Math.cos(-L),b=Math.sin(-L),F=D*E-dt*b,N=X*E-mt*b,ft=V*E-vt*b,nt=G*b+nt*E,D=F,X=N,V=ft),L=ss(X,D),_=L*yr,L&&(E=Math.cos(L),b=Math.sin(L),F=D*E+X*b,N=Y*E+z*b,X=X*E-D*b,z=z*E-Y*b,D=F,Y=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=xe(Math.sqrt(D*D+X*X+V*V)),g=xe(Math.sqrt(z*z+at*at)),L=ss(Y,z),S=Math.abs(L)>2e-4?L*yr:0,y=nt?1/(nt<0?-nt:nt):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!o_(yn(t,he)),F&&t.setAttribute("transform",F))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=xe(d),n.scaleY=xe(g),n.rotation=xe(_)+a,n.rotationX=xe(m)+a,n.rotationY=xe(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[un]=Qa(c)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?kT:n_?a_:zT,n.uncache=0,n},Qa=function(t){return(t=t.split(" "))[0]+" "+t[1]},yc=function(t,e,n){var r=ke(e);return xe(parseFloat(e)+parseFloat(rr(t,"x",n+"px",r)))+r},zT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,a_(t,e)},vr="0deg",Zs="0px",xr=") ",a_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,y="",C=p==="auto"&&t&&t!==1||p===!0;if(v&&(f!==vr||u!==vr)){var w=parseFloat(u)*Es,T=Math.sin(w),L=Math.cos(w),E;w=parseFloat(f)*Es,E=Math.cos(w),o=yc(S,o,T*E*-v),a=yc(S,a,-Math.sin(w)*-v),l=yc(S,l,L*E*-v+v)}m!==Zs&&(y+="perspective("+m+xr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Zs||a!==Zs||l!==Zs)&&(y+=l!==Zs||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==vr&&(y+="rotate("+c+xr),u!==vr&&(y+="rotateY("+u+xr),f!==vr&&(y+="rotateX("+f+xr),(h!==vr||d!==vr)&&(y+="skew("+h+", "+d+xr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+xr),S.style[he]=y||"translate(0, 0)"},kT=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),C,w,T,L,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Es,c*=Es,C=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=Es,E=Math.tan(c-u),E=Math.sqrt(1+E*E),T*=E,L*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=xe(C),w=xe(w),T=xe(T),L=xe(L)):(C=f,L=h,w=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=rr(d,"x",o,"px"),y=rr(d,"y",a,"px")),(g||_||m||p)&&(v=xe(v+g-(g*C+_*T)+m),y=xe(y+_-(g*w+_*L)+p)),(r||s)&&(E=d.getBBox(),v=xe(v+r/100*E.width),y=xe(y+s/100*E.height)),E="matrix("+C+","+w+","+T+","+L+","+v+","+y+")",d.setAttribute("transform",E),S&&(d.style[he]=E)},HT=function(t,e,n,r,s){var o=360,a=De(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Sd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Sd)%o-~~(c/o)*o)),t._pt=h=new cn(t._pt,e,n,r,c,ET),h.e=u,h.u="deg",t._props.push(n),h},wd=function(t,e){for(var n in e)t[n]=e[n];return t},VT=function(t,e,n){var r=wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[he]=e,a=wo(n,1),ir(n,he),n.setAttribute("transform",c)):(c=getComputedStyle(n)[he],o[he]=e,a=wo(n,1),o[he]=c);for(l in Ri)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=ke(c),g=ke(u),f=d!==g?rr(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new cn(t._pt,a,l,f,h-f,nu),t._pt.u=g||0,t._props.push(l));wd(a,r)};ln("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Ja[t>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Si(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var l_={name:"css",register:ru,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,S,v,y,C,w,T,L,E;Hu||ru(),this.styles=this.styles||e_(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(gn[_]&&Wm(_,e,n,r,t,s)))){if(d=typeof u,g=Ja[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Eo(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Zi.lastIndex=0,Zi.test(c)||(m=ke(c),p=ke(u),p?m!==p&&(c=rr(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],De(c)&&~c.indexOf("random(")&&(c=Eo(c)),ke(c+"")||c==="auto"||(c+=bn.units[_]||ke(Si(t,_))||""),(c+"").charAt(1)==="="&&(c=Si(t,_))):c=Si(t,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in ii&&(_==="autoAlpha"&&(h===1&&Si(t,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),qi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ri,v){if(this.styles.save(_),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=yn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=yn(t,"perspective"),b?t.style.perspective=b:ir(t,"perspective")}f=parseFloat(u)}if(y||(C=t._gsap,C.renderTransform&&!e.parseTransform||wo(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,y=this._pt=new cn(this._pt,a,he,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new cn(this._pt,C,"scaleY",C.scaleY,(S?Ms(C.scaleY,S+f):f)-C.scaleY||0,nu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(un,0,a[un]),u=FT(u),C.svg?su(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&qi(this,C,"zOrigin",C.zOrigin,p),qi(this,a,_,Qa(c),Qa(u)));continue}else if(_==="svgOrigin"){su(t,u,1,w,0,this);continue}else if(_ in s_){HT(this,C,_,h,S?Ms(h,S+u):u);continue}else if(_==="smoothOrigin"){qi(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){VT(this,u,t);continue}}else _ in a||(_=Os(_)||_);if(v||(f||f===0)&&(h||h===0)&&!yT.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=ke(u)||(_ in bn.units?bn.units[_]:m),m!==p&&(h=rr(t,_,c,p)),this._pt=new cn(this._pt,v?C:a,_,h,(S?Ms(h,S+f):f)-h,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?AT:nu),this._pt.u=p||0,v&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=TT):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=bT);else if(_ in a)OT.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,r,s);else if(_!=="parseTransform"){Lu(_,u);continue}v||(_ in a?L.push(_,0,a[_]):typeof t[_]=="function"?L.push(_,2,t[_]()):L.push(_,1,c||t[_])),o.push(_)}}T&&jm(this)},render:function(t,e){if(e.tween._time||!Vu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Si,aliases:ii,getSetter:function(t,e,n){var r=ii[e];return r&&r.indexOf(",")<0&&(e=r),e in Ri&&e!==un&&(t._gsap.x||Si(t,"x"))?n&&xd===n?e==="scale"?PT:CT:(xd=n||{})&&(e==="scale"?LT:DT):t.style&&!Ru(t.style[e])?wT:~e.indexOf("-")?RT:zu(t,e)},core:{_removeProperty:ir,_getMatrix:Wu}};fn.utils.checkPrefix=Os;fn.core.getStyleSaver=e_;(function(i,t,e,n){var r=ln(i+","+t+","+e,function(s){Ri[s]=1});ln(t,function(s){bn.units[s]="deg",s_[s]=1}),ii[r[13]]=i+","+t,ln(n,function(s){var o=s.split(":");ii[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){bn.units[i]="px"});fn.registerPlugin(l_);var Fs=fn.registerPlugin(l_)||fn;Fs.core.Tween;function c_(i,t=.35){let e=0,n=null;function r(a){if(!i.value||!n)return;const l=a.clientX-(n.left+n.width/2),c=a.clientY-(n.top+n.height/2);cancelAnimationFrame(e),e=requestAnimationFrame(()=>{i.value.style.transform=`translate(${l*t}px, ${c*t}px)`})}function s(){n=i.value?.getBoundingClientRect()??null,window.addEventListener("mousemove",r)}function o(){window.removeEventListener("mousemove",r),cancelAnimationFrame(e),i.value&&(i.value.style.transform="translate(0, 0)")}Pi(()=>{i.value?.addEventListener("mouseenter",s),i.value?.addEventListener("mouseleave",o)}),Lo(()=>{i.value?.removeEventListener("mouseenter",s),i.value?.removeEventListener("mouseleave",o),window.removeEventListener("mousemove",r)})}const GT={class:"hero section",id:"top"},WT={class:"hero__grid"},XT={class:"hero__text"},YT={class:"hero__cta"},qT={class:"hero__object"},$T=Wn({__name:"Hero",setup(i){const t=je(null),e=je(null);c_(e,.3);let n,r,s,o,a=0,l=!1,c=0,u=0,f=0,h=0,d=0,g=0;function _(w,T){r=new hm,s=new vn(45,w/T,.1,100),s.position.z=5.2,n=new fm({canvas:t.value,antialias:!0,alpha:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(w,T),o=new fs;const L=new Ya(1.6,1),E=new uo({color:5951974,wireframe:!0,transparent:!0,opacity:.55}),b=new Dn(L,E);o.add(b);const D=new Ya(.9,0),X=new uo({color:9141494,wireframe:!0,transparent:!0,opacity:.8}),V=new Dn(D,X);o.add(V);const G=new Au(.55,24,24),Y=new uo({color:16742981,transparent:!0,opacity:.15});o.add(new Dn(G,Y)),r.add(o),o.scale.set(.001,.001,.001),Fs.to(o.scale,{x:1,y:1,z:1,duration:1.4,ease:"elastic.out(1, 0.6)",delay:.3})}function m(w){l=!0,c=w.clientX,u=w.clientY,w.target.setPointerCapture(w.pointerId)}function p(w){if(!l)return;const T=w.clientX-c,L=w.clientY-u;h=T*.005,f=L*.005,c=w.clientX,u=w.clientY}function S(){l=!1}function v(){if(!t.value||!n||!s)return;const w=t.value.clientWidth,T=t.value.clientHeight;s.aspect=w/T,s.updateProjectionMatrix(),n.setSize(w,T)}function y(){a=requestAnimationFrame(y),l||(f*=.96,h*=.96,h+=6e-4),d+=f,g+=h,o.rotation.x=d,o.rotation.y=g,n.render(r,s)}function C(){document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}return Pi(()=>{const w=t.value.clientWidth,T=t.value.clientHeight;_(w,T),t.value.addEventListener("pointerdown",m),window.addEventListener("pointermove",p),window.addEventListener("pointerup",S),window.addEventListener("resize",v),a=requestAnimationFrame(y)}),Lo(()=>{cancelAnimationFrame(a),t.value?.removeEventListener("pointerdown",m),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",S),window.removeEventListener("resize",v),n?.dispose()}),(w,T)=>(_e(),Se("section",GT,[yt("div",WT,[yt("div",XT,[T[0]||(T[0]=yt("p",{class:"eyebrow"},"Systems & AI",-1)),T[1]||(T[1]=yt("h1",{class:"hero__name"},"EMAD",-1)),T[2]||(T[2]=yt("h1",{class:"hero__name"},"MODARESI",-1)),T[3]||(T[3]=yt("p",{class:"hero__role"},[Ea(" AI Engineer"),yt("br"),Ea(" Python Developer"),yt("br"),Ea(" Remote Infrastructure Architect ")],-1)),yt("div",YT,[yt("button",{ref_key:"exploreBtn",ref:e,class:"btn btn--primary","data-cursor":"hover",onClick:C}," Explore ↓ ",512)])]),yt("div",qT,[yt("canvas",{ref_key:"canvasEl",ref:t,class:"hero__canvas","data-cursor":"hover"},null,512),T[4]||(T[4]=yt("p",{class:"hero__hint"},"drag to rotate",-1))])])]))}}),KT=Xn($T,[["__scopeId","data-v-32734d94"]]),jT={class:"about section",id:"about"},ZT={class:"about__tags"},JT=Wn({__name:"About",setup(i){const t=je(null),e=["Python","Computer Vision","Backend Architecture","Remote Access Systems","Docker","Linux","Cloud"];return Pi(()=>{const n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(Fs.fromTo(t.value,{opacity:0,y:40,scale:.98},{opacity:1,y:0,scale:1,duration:.9,ease:"power3.out"}),n.disconnect())})},{threshold:.25});t.value&&n.observe(t.value)}),(n,r)=>(_e(),Se("section",jT,[r[2]||(r[2]=yt("p",{class:"eyebrow"},"01 — About",-1)),yt("div",{ref_key:"panel",ref:t,class:"about__panel glass"},[r[0]||(r[0]=yt("h2",{class:"about__title"},"Hello, I'm Emad.",-1)),r[1]||(r[1]=yt("p",{class:"about__body"}," I design and build the systems that sit underneath everything else — Python backends, computer-vision pipelines, and the remote-access infrastructure that lets teams operate machines they'll never physically touch. My work lives at the intersection of AI tooling and the unglamorous plumbing that keeps it reliable: containers, Linux, networking, and the access-control layer that decides who gets to see what. ",-1)),yt("div",ZT,[(_e(),Se(en,null,Do(e,s=>yt("span",{key:s,class:"about__tag"},En(s),1)),64))])],512)]))}}),QT=Xn(JT,[["__scopeId","data-v-5cdd46a2"]]),tA={class:"skills section",id:"skills"},eA={class:"glass skill_div"},nA={class:"skills__cloud"},iA=["onMouseenter"],rA=Wn({__name:"Skills",setup(i){const t=[{name:"Python",size:1.8},{name:"Django",size:1.2},{name:"FastAPI",size:1.4},{name:"Docker",size:1.6},{name:"Linux",size:1.7},{name:"TensorFlow",size:1.3},{name:"Vue",size:1.5},{name:"Electron",size:1.1},{name:"Rust",size:1.2},{name:"Redis",size:1.1},{name:"PostgreSQL",size:1.3},{name:"OpenCV",size:1.4}],e=je(null),n=zs({});function r(o){e.value=o,t.forEach((a,l)=>{if(l===o)return;const c=l-o,u=Math.abs(c);if(u<=2){const f=c>0?1:-1;n[l]={x:f*(14/u),y:f*(6/u)}}})}function s(){e.value=null,Object.keys(n).forEach(o=>delete n[Number(o)])}return(o,a)=>(_e(),Se("section",tA,[yt("div",eA,[a[0]||(a[0]=yt("p",{class:"eyebrow"},"02 — Skills",-1)),a[1]||(a[1]=yt("h2",{class:"skills__title"},"What I build with",-1)),yt("div",nA,[(_e(),Se(en,null,Do(t,(l,c)=>yt("button",{key:l.name,class:"skills__tag","data-cursor":"hover",style:Bs({fontSize:`${l.size}rem`,transform:e.value===c?"scale(1.15)":`scale(1) translate(${n[c]?.x??0}px, ${n[c]?.y??0}px)`}),onMouseenter:u=>r(c),onMouseleave:s},En(l.name),45,iA)),64))])])]))}}),sA=Xn(rA,[["__scopeId","data-v-a92f4149"]]),oA={class:"projects section",id:"projects"},aA={class:"projects__grid"},lA={class:"project-card__inner"},cA={class:"project-card__eyebrow"},uA={class:"project-card__name"},fA={class:"project-card__desc"},hA={class:"project-card__links"},dA=["href"],pA=["href"],mA=Wn({__name:"Projects",setup(i){const t=[{name:"Fortress PAM",tag:"Enterprise Access",desc:"A privileged access management bastion for remote infrastructure — session replay, credential vaulting, and audit-grade recording for RDP, VNC, and SSH.",demo:"#",github:"#"},{name:"Vision Pipeline",tag:"Computer Vision",desc:"Real-time detection and tracking pipeline built on OpenCV and TensorFlow, deployed behind a FastAPI service layer.",demo:"#",github:"#"},{name:"Fleet Orchestrator",tag:"Infrastructure",desc:"Docker-based orchestration for distributed Linux fleets, with a Vue control-plane UI and Redis-backed job queue.",demo:"#",github:"#"},{name:"ParaiseHub",tag:"backend",desc:"Reservatiion Platform base on python (DRF). Co-work Space reservations and more",demo:"#",github:"#"},{name:"IoT Platform",tag:"micro-controller",desc:"Designed and developed end-to-end IoT systems using ESP32 and Arduino with PlatformIO, integrating MQTT communication, Django REST APIs, Dockerized backend services, and real-time device monitoring, control, and data collection.",demo:"#",github:"#"},{name:"Smart Device Management",tag:"IoT & Edge Computing",desc:"Developed secure edge-to-cloud infrastructure for embedded devices using ESP32, MQTT, Docker, Python, and Django. ",demo:"#",github:"#"},{name:"Face Analysie",tag:"AI & Computer Vision",desc:"Develop a robust facial feature extraction system for multiple platforms, including authentication systems, PAM access control, and other security applications.",demo:"#",github:"#"},{name:"UEBA Services",tag:"AI & ML",desc:"Design a self-supervised deep neural network to detect anomalous activities on the platform using log data.",demo:"#",github:"#"}];function e(r){const s=r.currentTarget,o=s.getBoundingClientRect(),a=(r.clientX-o.left)/o.width-.5,l=(r.clientY-o.top)/o.height-.5;s.style.transform=`perspective(800px) rotateX(${l*-10}deg) rotateY(${a*10}deg) translateY(-4px)`}function n(r){const s=r.currentTarget;s.style.transform="perspective(800px) rotateX(0) rotateY(0) translateY(0)"}return(r,s)=>(_e(),Se("section",oA,[s[0]||(s[0]=yt("p",{class:"eyebrow"},"03 — Projects",-1)),s[1]||(s[1]=yt("h2",{class:"projects__title"},"Selected work",-1)),yt("div",aA,[(_e(),Se(en,null,Do(t,o=>yt("article",{key:o.name,class:"project-card glass","data-cursor":"hover",onMousemove:e,onMouseleave:n},[yt("div",lA,[yt("p",cA,En(o.tag),1),yt("h3",uA,En(o.name),1),yt("p",fA,En(o.desc),1),yt("div",hA,[o.demo?(_e(),Se("a",{key:0,href:o.demo,class:"btn",target:"_blank",rel:"noopener"},"Demo",8,dA)):Dc("",!0),o.github?(_e(),Se("a",{key:1,href:o.github,class:"btn",target:"_blank",rel:"noopener"},"GitHub",8,pA)):Dc("",!0)])])],32)),64))])]))}}),_A=Xn(mA,[["__scopeId","data-v-a3d6f9d6"]]),gA={class:"timeline section",id:"timeline"},vA={class:"timeline__line",viewBox:"0 0 800 4",preserveAspectRatio:"none"},xA={class:"timeline__points"},SA={class:"timeline__year"},MA={class:"timeline__label"},yA=Wn({__name:"Timeline",setup(i){const t=je(null),e=je(null),n=[{year:"2019",label:"Student"},{year:"2021",label:"Developer"},{year:"2023",label:"AI"},{year:"2025",label:"Infrastructure"}];return Pi(()=>{if(!e.value)return;const r=800;e.value.style.strokeDasharray=`${r}`,e.value.style.strokeDashoffset=`${r}`;const s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(Fs.to(e.value,{strokeDashoffset:0,duration:1.4,ease:"power2.inOut"}),Fs.from(".timeline__stop",{opacity:0,y:16,duration:.6,stagger:.15,ease:"power2.out",delay:.2}),s.disconnect())})},{threshold:.4});t.value&&s.observe(t.value)}),(r,s)=>(_e(),Se("section",gA,[s[2]||(s[2]=yt("p",{class:"eyebrow"},"04 — Path",-1)),s[3]||(s[3]=yt("h2",{class:"timeline__title"},"How I got here",-1)),yt("div",{ref_key:"wrap",ref:t,class:"timeline__wrap glass"},[(_e(),Se("svg",vA,[yt("line",{ref_key:"lineEl",ref:e,x1:"0",y1:"2",x2:"800",y2:"2",stroke:"url(#grad)","stroke-width":"2"},null,512),s[0]||(s[0]=yt("defs",null,[yt("linearGradient",{id:"grad",x1:"0",x2:"1"},[yt("stop",{offset:"0%","stop-color":"#5ad1e6"}),yt("stop",{offset:"100%","stop-color":"#8b7cf6"})])],-1))])),yt("div",xA,[(_e(),Se(en,null,Do(n,o=>yt("div",{key:o.year,class:"timeline__stop"},[s[1]||(s[1]=yt("span",{class:"timeline__dot"},null,-1)),yt("span",SA,En(o.year),1),yt("span",MA,En(o.label),1)])),64))])],512)]))}}),EA=Xn(yA,[["__scopeId","data-v-8706d1e7"]]),bA={class:"stats section",id:"stats"},TA={class:"stats__label"},AA=Wn({__name:"Stats",setup(i){const t=zs([{label:"Projects",value:100,suffix:"+",display:"0+"},{label:"Years Experience",value:7,suffix:"+",display:"0+"},{label:"Technologies",value:20,suffix:"+",display:"0+"},{label:"Coffee",value:null,suffix:"",display:"∞"}]),e=je(null),n=new Map;function r(s,o){s&&n.set(o,s)}return Pi(()=>{const s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(t.forEach(l=>{if(l.value===null)return;const c={n:0};Fs.to(c,{n:l.value,duration:1.6,ease:"power2.out",onUpdate:()=>{l.display=`${Math.round(c.n)}${l.suffix}`}})}),s.disconnect())})},{threshold:.5});e.value&&s.observe(e.value)}),(s,o)=>(_e(),Se("section",bA,[yt("div",{ref_key:"grid",ref:e,class:"stats__grid glass"},[(_e(!0),Se(en,null,Do(t,a=>(_e(),Se("div",{key:a.label,class:"stats__item"},[yt("span",{class:"stats__value",ref_for:!0,ref:l=>r(l,a)},En(a.display),513),yt("span",TA,En(a.label),1)]))),128))],512)]))}}),wA=Xn(AA,[["__scopeId","data-v-2e143087"]]),RA={class:"contact section",id:"contact"},CA={class:"contact__panel glass"},PA={class:"contact__field"},LA={class:"contact__field"},DA={class:"contact__field"},IA=["disabled"],UA=Wn({__name:"Contact",setup(i){const t=je(null);c_(t,.25);const e=zs({name:"",email:"",message:""}),n=je("idle");async function r(){n.value="sending",await new Promise(s=>setTimeout(s,900)),n.value="sent",setTimeout(()=>{n.value="idle",e.name="",e.email="",e.message=""},2200)}return(s,o)=>(_e(),Se("section",RA,[o[7]||(o[7]=yt("p",{class:"eyebrow"},"05 — Contact",-1)),yt("div",CA,[o[6]||(o[6]=yt("h2",{class:"contact__title"},"Let's build something.",-1)),yt("form",{class:"contact__form",onSubmit:F0(r,["prevent"])},[yt("label",PA,[o[3]||(o[3]=yt("span",null,"Name",-1)),xa(yt("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a),type:"text",required:"",autocomplete:"name"},null,512),[[Ul,e.name]])]),yt("label",LA,[o[4]||(o[4]=yt("span",null,"Email",-1)),xa(yt("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>e.email=a),type:"email",required:"",autocomplete:"email"},null,512),[[Ul,e.email]])]),yt("label",DA,[o[5]||(o[5]=yt("span",null,"Message",-1)),xa(yt("textarea",{"onUpdate:modelValue":o[2]||(o[2]=a=>e.message=a),rows:"4",required:""},null,512),[[Ul,e.message]])]),yt("button",{ref_key:"sendBtn",ref:t,type:"submit",class:"btn btn--primary","data-cursor":"hover",disabled:n.value==="sending"},En(n.value==="sending"?"Sending…":n.value==="sent"?"Sent ✓":"Send →"),9,IA)],32)])]))}}),NA=Xn(UA,[["__scopeId","data-v-3378ab0b"]]),OA={class:"footer"},FA={class:"footer__inner"},BA={class:"footer__year"},zA=Wn({__name:"Footer",setup(i){const t=new Date().getFullYear();return(e,n)=>(_e(),Se("footer",OA,[yt("div",FA,[n[0]||(n[0]=Qg('<span class="footer__mark" data-v-db17bb3a>EMAD</span><div class="footer__links" data-v-db17bb3a><a href="https://github.com/" target="_blank" rel="noopener" data-cursor="hover" data-v-db17bb3a>GitHub</a><a href="https://linkedin.com/" target="_blank" rel="noopener" data-cursor="hover" data-v-db17bb3a>LinkedIn</a><a href="mailto:hello@example.com" data-cursor="hover" data-v-db17bb3a>Email</a></div>',2)),yt("span",BA,"© "+En(ls(t)),1)])]))}}),kA=Xn(zA,[["__scopeId","data-v-db17bb3a"]]),HA={key:0,class:"loader"},VA={class:"loader__bar"},GA={class:"loader__label"},WA=Wn({__name:"App",setup(i){const t=je(!1),e=je(0);return Pi(()=>{const n=performance.now(),r=900;function s(){const o=Math.min(1,(performance.now()-n)/r);e.value=Math.round(o*100),o<1?requestAnimationFrame(s):setTimeout(()=>t.value=!0,150)}requestAnimationFrame(s)}),(n,r)=>(_e(),Se("div",{class:Co(["app",{"app--ready":t.value}])},[t.value?Dc("",!0):(_e(),Se("div",HA,[yt("span",VA,[yt("span",{class:"loader__fill",style:Bs({width:e.value+"%"})},null,4)]),yt("span",GA,En(e.value)+"%",1)])),Ae(Sb),Ae(Eb),xa(yt("main",null,[Ae(KT),Ae(QT),Ae(sA),Ae(_A),Ae(EA),Ae(wA),Ae(NA),Ae(kA)],512),[[g0,t.value]])],2))}}),XA=Xn(WA,[["__scopeId","data-v-34933e3e"]]),YA=k0(XA);YA.mount("#app");const u_=new Z0({duration:1.1,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0});function f_(i){u_.raf(i),requestAnimationFrame(f_)}requestAnimationFrame(f_);window.__lenis=u_;
