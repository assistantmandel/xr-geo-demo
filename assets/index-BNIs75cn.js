(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function cc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},Ar=[],Xn=()=>{},qf=()=>!1,Uo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),uc=n=>n.startsWith("onUpdate:"),Ut=Object.assign,fc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},up=Object.prototype.hasOwnProperty,lt=(n,e)=>up.call(n,e),Ye=Array.isArray,Cr=n=>No(n)==="[object Map]",Yf=n=>No(n)==="[object Set]",Ke=n=>typeof n=="function",Ct=n=>typeof n=="string",Fi=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",jf=n=>(St(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),Kf=Object.prototype.toString,No=n=>Kf.call(n),fp=n=>No(n).slice(8,-1),$f=n=>No(n)==="[object Object]",Fo=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,os=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},dp=/-\w/g,Li=Oo(n=>n.replace(dp,e=>e.slice(1).toUpperCase())),hp=/\B([A-Z])/g,rr=Oo(n=>n.replace(hp,"-$1").toLowerCase()),Zf=Oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ra=Oo(n=>n?`on${Zf(n)}`:""),Ii=(n,e)=>!Object.is(n,e),sa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},pp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Kc;const Bo=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dc(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ct(i)?vp(i):dc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(n)||St(n))return n}const mp=/;(?![^(]*\))/g,gp=/:([^]+)/,_p=/\/\*[^]*?\*\//g;function vp(n){const e={};return n.replace(_p,"").split(mp).forEach(t=>{if(t){const i=t.split(gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function hc(n){let e="";if(Ct(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=hc(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mp=cc(xp);function Qf(n){return!!n||n===""}const ed=n=>!!(n&&n.__v_isRef===!0),td=n=>Ct(n)?n:n==null?"":Ye(n)||St(n)&&(n.toString===Kf||!Ke(n.toString))?ed(n)?td(n.value):JSON.stringify(n,nd,2):String(n),nd=(n,e)=>ed(e)?nd(n,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[oa(i,s)+" =>"]=r,t),{})}:Yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>oa(t))}:Fi(e)?oa(e):St(e)&&!Ye(e)&&!$f(e)?String(e):e,oa=(n,e="")=>{var t;return Fi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Bt;class Sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function id(){return Bt}function yp(n,e=!1){Bt&&Bt.cleanups.push(n)}let _t;const aa=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,aa.has(this)&&(aa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$c(this),ad(this);const e=_t,t=Pn;_t=this,Pn=!0;try{return this.fn()}finally{ld(this),_t=e,Pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gc(e);this.deps=this.depsTail=void 0,$c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?aa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sl(this)&&this.run()}get dirty(){return sl(this)}}let sd=0,as,ls;function od(n,e=!1){if(n.flags|=8,e){n.next=ls,ls=n;return}n.next=as,as=n}function pc(){sd++}function mc(){if(--sd>0)return;if(ls){let e=ls;for(ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;as;){let e=as;for(as=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ld(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),gc(i),bp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function sl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_s)||(n.globalVersion=_s,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!sl(n))))return;n.flags|=2;const e=n.dep,t=_t,i=Pn;_t=n,Pn=!0;try{ad(n);const r=n.fn(n._value);(e.version===0||Ii(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{_t=t,Pn=i,ld(n),n.flags&=-3}}function gc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)gc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pn=!0;const ud=[];function fi(){ud.push(Pn),Pn=!1}function di(){const n=ud.pop();Pn=n===void 0?!0:n}function $c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let _s=0;class Ep{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Pn||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new Ep(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,_s++,this.notify(e)}notify(e){pc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{mc()}}}function fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mo=new WeakMap,Ji=Symbol(""),ol=Symbol(""),vs=Symbol("");function zt(n,e,t){if(Pn&&_t){let i=Mo.get(n);i||Mo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new _c),r.map=i,r.key=t),r.track()}}function oi(n,e,t,i,r,s){const o=Mo.get(n);if(!o){_s++;return}const a=l=>{l&&l.trigger()};if(pc(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&Fo(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,g)=>{(g==="length"||g===vs||!Fi(g)&&g>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(vs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ji)),Cr(n)&&a(o.get(ol)));break;case"delete":l||(a(o.get(Ji)),Cr(n)&&a(o.get(ol)));break;case"set":Cr(n)&&a(o.get(Ji));break}}mc()}function Tp(n,e){const t=Mo.get(n);return t&&t.get(e)}function lr(n){const e=at(n);return e===n?e:(zt(e,"iterate",vs),gn(n)?e:e.map(In))}function zo(n){return zt(n=at(n),"iterate",vs),n}function Ei(n,e){return hi(n)?Nr(Qi(n)?In(e):e):In(e)}const wp={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,n=>Ei(this,n))},concat(...n){return lr(this).concat(...n.map(e=>Ye(e)?lr(e):e))},entries(){return la(this,"entries",n=>(n[1]=Ei(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>Ei(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>Ei(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>Ei(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ca(this,"includes",n)},indexOf(...n){return ca(this,"indexOf",n)},join(n){return lr(this).join(n)},lastIndexOf(...n){return ca(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return jr(this,"pop")},push(...n){return jr(this,"push",n)},reduce(n,...e){return Zc(this,"reduce",n,e)},reduceRight(n,...e){return Zc(this,"reduceRight",n,e)},shift(){return jr(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return jr(this,"splice",n)},toReversed(){return lr(this).toReversed()},toSorted(n){return lr(this).toSorted(n)},toSpliced(...n){return lr(this).toSpliced(...n)},unshift(...n){return jr(this,"unshift",n)},values(){return la(this,"values",n=>Ei(this,n))}};function la(n,e,t){const i=zo(n),r=i[e]();return i!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ap=Array.prototype;function Zn(n,e,t,i,r,s){const o=zo(n),a=o!==n&&!gn(n),l=o[e];if(l!==Ap[e]){const f=l.apply(n,s);return a?In(f):f}let c=t;o!==n&&(a?c=function(f,g){return t.call(this,Ei(n,f),g,n)}:t.length>2&&(c=function(f,g){return t.call(this,f,g,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Zc(n,e,t,i){const r=zo(n);let s=t;return r!==n&&(gn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ei(n,a),l,n)}),r[e](s,...i)}function ca(n,e,t){const i=at(n);zt(i,"iterate",vs);const r=i[e](...t);return(r===-1||r===!1)&&ko(t[0])?(t[0]=at(t[0]),i[e](...t)):r}function jr(n,e,t=[]){fi(),pc();const i=at(n)[e].apply(n,t);return mc(),di(),i}const Cp=cc("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fi));function Rp(n){Fi(n)||(n=String(n));const e=at(this);return zt(e,"has",n),e.hasOwnProperty(n)}class hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xd:vd:s?_d:gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=wp[t]))return l;if(t==="hasOwnProperty")return Rp}const a=Reflect.get(e,t,It(e)?e:i);if((Fi(t)?dd.has(t):Cp(t))||(r||zt(e,"get",t),s))return a;if(It(a)){const l=o&&Fo(t)?a:a.value;return r&&St(l)?tr(l):l}return St(a)?r?tr(a):Ho(a):a}}class pd extends hd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ye(e)&&Fo(t);if(!this._isShallow){const c=hi(s);if(!gn(i)&&!hi(i)&&(s=at(s),i=at(i)),!o&&It(s)&&!It(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:lt(e,t),l=Reflect.set(e,t,i,It(e)?e:r);return e===at(r)&&(a?Ii(i,s)&&oi(e,"set",t,i):oi(e,"add",t,i)),l}deleteProperty(e,t){const i=lt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&oi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fi(t)||!dd.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Ye(e)?"length":Ji),Reflect.ownKeys(e)}}class md extends hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Pp=new pd,Dp=new md,Ip=new pd(!0),Lp=new md(!0),al=n=>n,Ns=n=>Reflect.getPrototypeOf(n);function Up(n,e,t){return function(...i){const r=this.__v_raw,s=at(r),o=Cr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?al:e?Nr:In;return!e&&zt(s,"iterate",l?ol:Ji),Ut(Object.create(c),{next(){const{value:f,done:g}=c.next();return g?{value:f,done:g}:{value:a?[u(f[0]),u(f[1])]:u(f),done:g}}})}}function Fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Np(n,e){const t={get(r){const s=this.__v_raw,o=at(s),a=at(r);n||(Ii(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=Ns(o),c=e?al:n?Nr:In;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(at(r),"iterate",Ji),r.size},has(r){const s=this.__v_raw,o=at(s),a=at(r);return n||(Ii(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?al:n?Nr:In;return!n&&zt(l,"iterate",Ji),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(t,n?{add:Fs("add"),set:Fs("set"),delete:Fs("delete"),clear:Fs("clear")}:{add(r){!e&&!gn(r)&&!hi(r)&&(r=at(r));const s=at(this);return Ns(s).has.call(s,r)||(s.add(r),oi(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!hi(s)&&(s=at(s));const o=at(this),{has:a,get:l}=Ns(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ii(s,u)&&oi(o,"set",r,s):oi(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=Ns(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&oi(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&oi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Up(r,n,e)}),t}function Vo(n,e){const t=Np(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(lt(t,r)&&r in i?t:i,r,s)}const Fp={get:Vo(!1,!1)},Op={get:Vo(!1,!0)},Bp={get:Vo(!0,!1)},zp={get:Vo(!0,!0)},gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,xd=new WeakMap;function Vp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hp(n){return n.__v_skip||!Object.isExtensible(n)?0:Vp(fp(n))}function Ho(n){return hi(n)?n:Go(n,!1,Pp,Fp,gd)}function Gp(n){return Go(n,!1,Ip,Op,_d)}function tr(n){return Go(n,!0,Dp,Bp,vd)}function Md(n){return Go(n,!0,Lp,zp,xd)}function Go(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Hp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Qi(n){return hi(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function hi(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function ko(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function kp(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&Jf(n,"__v_skip",!0),n}const In=n=>St(n)?Ho(n):n,Nr=n=>St(n)?tr(n):n;function It(n){return n?n.__v_isRef===!0:!1}function pn(n){return Sd(n,!1)}function rn(n){return Sd(n,!0)}function Sd(n,e){return It(n)?n:new Wp(n,e)}class Wp{constructor(e,t){this.dep=new _c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||hi(e);e=i?e:at(e),Ii(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function Je(n){return It(n)?n.value:n}function mt(n){return Ke(n)?n():Je(n)}const Xp={get:(n,e,t)=>e==="__v_raw"?n:Je(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return It(r)&&!It(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function yd(n){return Qi(n)?n:new Proxy(n,Xp)}function qp(n){const e=Ye(n)?new Array(n.length):{};for(const t in n)e[t]=jp(n,t);return e}class Yp{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=at(e);let r=!0,s=e;if(!Ye(e)||!Fo(String(t)))do r=!ko(s)||gn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Je(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&It(this._raw[this._key])){const t=this._object[this._key];if(It(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Tp(this._raw,this._key)}}function jp(n,e,t){return new Yp(n,e,t)}class Kp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new _c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return cd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $p(n,e,t=!1){let i,r;return Ke(n)?i=n:(i=n.get,r=n.set),new Kp(i,r,t)}const Os={},So=new WeakMap;let Yi;function Zp(n,e=!1,t=Yi){if(t){let i=So.get(t);i||So.set(t,i=[]),i.push(n)}}function Jp(n,e,t=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:gn(E)||r===!1||r===0?Ci(E,1):Ci(E);let u,f,g,_,v=!1,y=!1;if(It(n)?(f=()=>n.value,v=gn(n)):Qi(n)?(f=()=>c(n),v=!0):Ye(n)?(y=!0,v=n.some(E=>Qi(E)||gn(E)),f=()=>n.map(E=>{if(It(E))return E.value;if(Qi(E))return c(E);if(Ke(E))return l?l(E,2):E()})):Ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(g){fi();try{g()}finally{di()}}const E=Yi;Yi=u;try{return l?l(n,3,[_]):n(_)}finally{Yi=E}}:f=Xn,e&&r){const E=f,N=r===!0?1/0:r;f=()=>Ci(E(),N)}const m=id(),p=()=>{u.stop(),m&&m.active&&fc(m.effects,u)};if(s&&e){const E=e;e=(...N)=>{E(...N),p()}}let A=y?new Array(n.length).fill(Os):Os;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const N=u.run();if(r||v||(y?N.some((M,R)=>Ii(M,A[R])):Ii(N,A))){g&&g();const M=Yi;Yi=u;try{const R=[N,A===Os?void 0:y&&A[0]===Os?[]:A,_];A=N,l?l(e,3,R):e(...R)}finally{Yi=M}}}else u.run()};return a&&a(T),u=new rd(f),u.scheduler=o?()=>o(T,!1):T,_=E=>Zp(E,!1,u),g=u.onStop=()=>{const E=So.get(u);if(E){if(l)l(E,4);else for(const N of E)N();So.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ci(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,It(n))Ci(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)Ci(n[i],e,t);else if(Yf(n)||Cr(n))n.forEach(i=>{Ci(i,e,t)});else if($f(n)){for(const i in n)Ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ci(n[i],e,t)}return n}function As(n,e,t,i){try{return i?n(...i):n()}catch(r){Wo(r,e,t)}}function Kn(n,e,t,i){if(Ke(n)){const r=As(n,e,t,i);return r&&jf(r)&&r.catch(s=>{Wo(s,e,t)}),r}if(Ye(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Kn(n[s],e,t,i));return r}}function Wo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){fi(),As(s,null,10,[n,l,c]),di();return}}Qp(n,t,r,i,o)}function Qp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let On=-1;const Rr=[];let Ti=null,wr=0;const bd=Promise.resolve();let yo=null;function Xo(n){const e=yo||bd;return n?e.then(this?n.bind(this):n):e}function em(n){let e=On+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=xs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function vc(n){if(!(n.flags&1)){const e=xs(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=xs(t)?qt.push(n):qt.splice(em(e),0,n),n.flags|=1,Ed()}}function Ed(){yo||(yo=bd.then(wd))}function tm(n){Ye(n)?Rr.push(...n):Ti&&n.id===-1?Ti.splice(wr+1,0,n):n.flags&1||(Rr.push(n),n.flags|=1),Ed()}function Jc(n,e,t=On+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Td(n){if(Rr.length){const e=[...new Set(Rr)].sort((t,i)=>xs(t)-xs(i));if(Rr.length=0,Ti){Ti.push(...e);return}for(Ti=e,wr=0;wr<Ti.length;wr++){const t=Ti[wr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,wr=0}}const xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wd(n){try{for(On=0;On<qt.length;On++){const e=qt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),As(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<qt.length;On++){const e=qt[On];e&&(e.flags&=-2)}On=-1,qt.length=0,Td(),yo=null,(qt.length||Rr.length)&&wd()}}let Gn=null,Ad=null;function bo(n){const e=Gn;return Gn=n,Ad=n&&n.type.__scopeId||null,e}function nm(n,e=Gn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&lu(-1);const s=bo(e);let o;try{o=n(...r)}finally{bo(s),i._d&&lu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(fi(),Kn(l,t,8,[n.el,a,n,e]),di())}}function Cd(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function cs(n,e,t=!1){const i=kr();if(i||er){let r=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}function Rd(){return!!(kr()||er)}const im=Symbol.for("v-scx"),rm=()=>cs(im);function Bn(n,e){return xc(n,null,e)}function qn(n,e,t){return xc(n,e,t)}function xc(n,e,t=vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ut({},t),l=e&&i||!e&&s!=="post";let c;if(Ss){if(s==="sync"){const _=rm();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Xn,_.resume=Xn,_.pause=Xn,_}}const u=Yt;a.call=(_,v,y)=>Kn(_,u,v,y);let f=!1;s==="post"?a.scheduler=_=>{fn(_,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(_,v)=>{v?_():vc(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const g=Jp(n,e,a);return Ss&&(c?c.push(g):l&&g()),g}function sm(n,e,t){const i=this.proxy,r=Ct(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let s;Ke(e)?s=e:(s=e.handler,t=e);const o=Rs(this),a=xc(r,s.bind(i),t);return o(),a}function Pd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const om=Symbol("_vte"),am=n=>n.__isTeleport,lm=Symbol("_leaveCb");function Mc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Mc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Cs(n,e){return Ke(n)?Ut({name:n.name},e,{setup:n}):n}function Dd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Eo=new WeakMap;function us(n,e,t,i,r=!1){if(Ye(n)){n.forEach((v,y)=>us(v,e&&(Ye(e)?e[y]:e),t,i,r));return}if(fs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&us(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Tc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,g=at(f),_=f===vt?qf:v=>lt(g,v);if(c!=null&&c!==l){if(Qc(e),Ct(c))u[c]=null,_(c)&&(f[c]=null);else if(It(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(Ke(l))As(l,a,12,[o,u]);else{const v=Ct(l),y=It(l);if(v||y){const m=()=>{if(n.f){const p=v?_(l)?f[l]:u[l]:l.value;if(r)Ye(p)&&fc(p,s);else if(Ye(p))p.includes(s)||p.push(s);else if(v)u[l]=[s],_(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else v?(u[l]=o,_(l)&&(f[l]=o)):y&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),Eo.delete(n)};p.id=-1,Eo.set(n,p),fn(p,t)}else Qc(n),m()}}}function Qc(n){const e=Eo.get(n);e&&(e.flags|=8,Eo.delete(n))}Bo().requestIdleCallback;Bo().cancelIdleCallback;const fs=n=>!!n.type.__asyncLoader,Id=n=>n.type.__isKeepAlive;function cm(n,e){Ld(n,"a",e)}function um(n,e){Ld(n,"da",e)}function Ld(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Id(r.parent.vnode)&&fm(i,e,t,r),r=r.parent}}function fm(n,e,t,i){const r=qo(e,n,i,!0);nr(()=>{fc(i[e],r)},t)}function qo(n,e,t=Yt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{fi();const a=Rs(t),l=Kn(e,t,n,o);return a(),di(),l});return i?r.unshift(s):r.push(s),s}}const _i=n=>(e,t=Yt)=>{(!Ss||n==="sp")&&qo(n,(...i)=>e(...i),t)},dm=_i("bm"),Yo=_i("m"),hm=_i("bu"),pm=_i("u"),mm=_i("bum"),nr=_i("um"),gm=_i("sp"),_m=_i("rtg"),vm=_i("rtc");function xm(n,e=Yt){qo("ec",n,e)}const Mm=Symbol.for("v-ndc");function Sm(n,e,t,i){let r;const s=t,o=Ye(n);if(o||Ct(n)){const a=o&&Qi(n);let l=!1,c=!1;a&&(l=!gn(n),c=hi(n),n=zo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Nr(In(n[u])):In(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ll=n=>n?Qd(n)?Tc(n):ll(n.parent):null,ds=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ll(n.parent),$root:n=>ll(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nd(n),$forceUpdate:n=>n.f||(n.f=()=>{vc(n.update)}),$nextTick:n=>n.n||(n.n=Xo.bind(n.proxy)),$watch:n=>sm.bind(n)}),ua=(n,e)=>n!==vt&&!n.__isScriptSetup&&lt(n,e),ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ua(i,e))return o[e]=1,i[e];if(r!==vt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(t!==vt&&lt(t,e))return o[e]=4,t[e];cl&&(o[e]=0)}}const c=ds[e];let u,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&lt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ua(r,e)?(r[e]=t,!0):i!==vt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&lt(n,a)||ua(e,a)||lt(s,a)||lt(i,a)||lt(ds,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function eu(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cl=!0;function bm(n){const e=Nd(n),t=n.proxy,i=n.ctx;cl=!1,e.beforeCreate&&tu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:g,beforeUpdate:_,updated:v,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:E,render:N,renderTracked:M,renderTriggered:R,errorCaptured:S,serverPrefetch:h,expose:d,inheritAttrs:b,components:D,directives:k,filters:Y}=e;if(c&&Em(c,i,null),o)for(const W in o){const J=o[W];Ke(J)&&(i[W]=J.bind(t))}if(r){const W=r.call(t,t);St(W)&&(n.data=Ho(W))}if(cl=!0,s)for(const W in s){const J=s[W],he=Ke(J)?J.bind(t,t):Ke(J.get)?J.get.bind(t,t):Xn,de=!Ke(J)&&Ke(J.set)?J.set.bind(t):Xn,xe=sn({get:he,set:de});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Ne=>xe.value=Ne})}if(a)for(const W in a)Ud(a[W],i,t,W);if(l){const W=Ke(l)?l.call(t):l;Reflect.ownKeys(W).forEach(J=>{Cd(J,W[J])})}u&&tu(u,n,"c");function H(W,J){Ye(J)?J.forEach(he=>W(he.bind(t))):J&&W(J.bind(t))}if(H(dm,f),H(Yo,g),H(hm,_),H(pm,v),H(cm,y),H(um,m),H(xm,S),H(vm,M),H(_m,R),H(mm,A),H(nr,E),H(gm,h),Ye(d))if(d.length){const W=n.exposed||(n.exposed={});d.forEach(J=>{Object.defineProperty(W,J,{get:()=>t[J],set:he=>t[J]=he,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===Xn&&(n.render=N),b!=null&&(n.inheritAttrs=b),D&&(n.components=D),k&&(n.directives=k),h&&Dd(n)}function Em(n,e,t=Xn){Ye(n)&&(n=ul(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=cs(r.from||i,r.default,!0):s=cs(r.from||i):s=cs(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function tu(n,e,t){Kn(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ud(n,e,t,i){let r=i.includes(".")?Pd(t,i):()=>t[i];if(Ct(n)){const s=e[n];Ke(s)&&qn(r,s)}else if(Ke(n))qn(r,n.bind(t));else if(St(n))if(Ye(n))n.forEach(s=>Ud(s,e,t,i));else{const s=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(s)&&qn(r,s,n)}}function Nd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>To(l,c,o,!0)),To(l,e,o)),St(e)&&s.set(e,l),l}function To(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&To(n,s,t,!0),r&&r.forEach(o=>To(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Tm={data:nu,props:iu,emits:iu,methods:is,computed:is,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:is,directives:is,watch:Am,provide:nu,inject:wm};function nu(n,e){return e?n?function(){return Ut(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function wm(n,e){return is(ul(n),ul(e))}function ul(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function is(n,e){return n?Ut(Object.create(null),n,e):e}function iu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:Ut(Object.create(null),eu(n),eu(e??{})):e}function Am(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function Fd(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Rm(n,e){return function(i,r=null){Ke(i)||(i=Ut({},i)),r!=null&&!St(r)&&(r=null);const s=Fd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ag,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...f)):Ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,g){if(!l){const _=c._ceVNode||Dn(i,r);return _.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),n(_,u,g),l=!0,c._container=u,u.__vue_app__=c,Tc(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=er;er=c;try{return u()}finally{er=f}}};return c}}let er=null;const Pm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Li(e)}Modifiers`]||n[`${rr(e)}Modifiers`];function Dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let r=t;const s=e.startsWith("update:"),o=s&&Pm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ct(u)?u.trim():u)),o.number&&(r=t.map(pp)));let a,l=i[a=ra(e)]||i[a=ra(Li(e))];!l&&s&&(l=i[a=ra(rr(e))]),l&&Kn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Kn(c,n,6,r)}}const Im=new WeakMap;function Od(n,e,t=!1){const i=t?Im:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(St(n)&&i.set(n,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Ut(o,s),St(n)&&i.set(n,o),o)}function jo(n,e){return!n||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,rr(e))||lt(n,e))}function ru(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:g,setupState:_,ctx:v,inheritAttrs:y}=n,m=bo(n);let p,A;try{if(t.shapeFlag&4){const E=r||i,N=E;p=zn(c.call(N,E,u,f,_,g,v)),A=a}else{const E=e;p=zn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),A=e.props?a:Lm(a)}}catch(E){hs.length=0,Wo(E,n,1),p=Dn(Ui)}let T=p;if(A&&y!==!1){const E=Object.keys(A),{shapeFlag:N}=T;E.length&&N&7&&(s&&E.some(uc)&&(A=Um(A,s)),T=Fr(T,A,!1,!0))}return t.dirs&&(T=Fr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Mc(T,t.transition),p=T,bo(m),p}const Lm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Uo(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const i in n)(!uc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(o[g]!==i[g]&&!jo(c,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!jo(t,s))return!0}return!1}function Fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bd={},zd=()=>Object.create(Bd),Vd=n=>Object.getPrototypeOf(n)===Bd;function Om(n,e,t,i=!1){const r={},s=zd();n.propsDefaults=Object.create(null),Hd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Gp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=at(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(jo(n.emitsOptions,g))continue;const _=e[g];if(l)if(lt(s,g))_!==s[g]&&(s[g]=_,c=!0);else{const v=Li(g);r[v]=fl(l,a,v,_,n,!1)}else _!==s[g]&&(s[g]=_,c=!0)}}}else{Hd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=rr(f))===f||!lt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=fl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&oi(n.attrs,"set","")}function Hd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;r&&lt(r,u=Li(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:jo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(t),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=fl(r,l,f,c[f],n,!lt(c,f))}}return o}function fl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Rs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rr(t))&&(i=!0))}return i}const zm=new WeakMap;function Gd(n,e,t=!1){const i=t?zm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ke(n)){const u=f=>{l=!0;const[g,_]=Gd(f,e,!0);Ut(o,g),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,Ar),Ar;if(Ye(s))for(let u=0;u<s.length;u++){const f=Li(s[u]);ou(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Li(u);if(ou(f)){const g=s[u],_=o[f]=Ye(g)||Ke(g)?{type:g}:Ut({},g),v=_.type;let y=!1,m=!0;if(Ye(v))for(let p=0;p<v.length;++p){const A=v[p],T=Ke(A)&&A.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(m=!1)}else y=Ke(v)&&v.name==="Boolean";_[0]=y,_[1]=m,(y||lt(_,"default"))&&a.push(f)}}const c=[o,a];return St(n)&&i.set(n,c),c}function ou(n){return n[0]!=="$"&&!os(n)}const Sc=n=>n==="_"||n==="_ctx"||n==="$stable",yc=n=>Ye(n)?n.map(zn):[zn(n)],Vm=(n,e,t)=>{if(e._n)return e;const i=nm((...r)=>yc(e(...r)),t);return i._c=!1,i},kd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Sc(r))continue;const s=n[r];if(Ke(s))e[r]=Vm(r,s,i);else if(s!=null){const o=yc(s);e[r]=()=>o}}},Wd=(n,e)=>{const t=yc(e);n.slots.default=()=>t},Xd=(n,e,t)=>{for(const i in e)(t||!Sc(i))&&(n[i]=e[i])},Hm=(n,e,t)=>{const i=n.slots=zd();if(n.vnode.shapeFlag&32){const r=e._;r?(Xd(i,e,t),t&&Jf(i,"_",r,!0)):kd(e,i)}else e&&Wd(n,e)},Gm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Xd(r,e,t):(s=!e.$stable,kd(e,r)),o=e}else e&&(Wd(n,e),o={default:1});if(s)for(const a in r)!Sc(a)&&o[a]==null&&delete r[a]},fn=Ym;function km(n){return Wm(n)}function Wm(n,e){const t=Bo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:g,setScopeId:_=Xn,insertStaticContent:v}=n,y=(P,L,B,$=null,K=null,se=null,U=void 0,fe=null,ce=!!L.dynamicChildren)=>{if(P===L)return;P&&!Kr(P,L)&&($=me(P),Ne(P,K,se,!0),P=null),L.patchFlag===-2&&(ce=!1,L.dynamicChildren=null);const{type:ne,ref:le,shapeFlag:C}=L;switch(ne){case Ko:m(P,L,B,$);break;case Ui:p(P,L,B,$);break;case da:P==null&&A(L,B,$,U);break;case dn:D(P,L,B,$,K,se,U,fe,ce);break;default:C&1?N(P,L,B,$,K,se,U,fe,ce):C&6?k(P,L,B,$,K,se,U,fe,ce):(C&64||C&128)&&ne.process(P,L,B,$,K,se,U,fe,ce,F)}le!=null&&K?us(le,P&&P.ref,se,L||P,!L):le==null&&P&&P.ref!=null&&us(P.ref,null,se,P,!0)},m=(P,L,B,$)=>{if(P==null)i(L.el=a(L.children),B,$);else{const K=L.el=P.el;L.children!==P.children&&c(K,L.children)}},p=(P,L,B,$)=>{P==null?i(L.el=l(L.children||""),B,$):L.el=P.el},A=(P,L,B,$)=>{[P.el,P.anchor]=v(P.children,L,B,$,P.el,P.anchor)},T=({el:P,anchor:L},B,$)=>{let K;for(;P&&P!==L;)K=g(P),i(P,B,$),P=K;i(L,B,$)},E=({el:P,anchor:L})=>{let B;for(;P&&P!==L;)B=g(P),r(P),P=B;r(L)},N=(P,L,B,$,K,se,U,fe,ce)=>{if(L.type==="svg"?U="svg":L.type==="math"&&(U="mathml"),P==null)M(L,B,$,K,se,U,fe,ce);else{const ne=P.el&&P.el._isVueCE?P.el:null;try{ne&&ne._beginPatch(),h(P,L,K,se,U,fe,ce)}finally{ne&&ne._endPatch()}}},M=(P,L,B,$,K,se,U,fe)=>{let ce,ne;const{props:le,shapeFlag:C,transition:x,dirs:z}=P;if(ce=P.el=o(P.type,se,le&&le.is,le),C&8?u(ce,P.children):C&16&&S(P.children,ce,null,$,K,fa(P,se),U,fe),z&&zi(P,null,$,"created"),R(ce,P,P.scopeId,U,$),le){for(const ae in le)ae!=="value"&&!os(ae)&&s(ce,ae,null,le[ae],se,$);"value"in le&&s(ce,"value",null,le.value,se),(ne=le.onVnodeBeforeMount)&&Nn(ne,$,P)}z&&zi(P,null,$,"beforeMount");const te=Xm(K,x);te&&x.beforeEnter(ce),i(ce,L,B),((ne=le&&le.onVnodeMounted)||te||z)&&fn(()=>{ne&&Nn(ne,$,P),te&&x.enter(ce),z&&zi(P,null,$,"mounted")},K)},R=(P,L,B,$,K)=>{if(B&&_(P,B),$)for(let se=0;se<$.length;se++)_(P,$[se]);if(K){let se=K.subTree;if(L===se||Kd(se.type)&&(se.ssContent===L||se.ssFallback===L)){const U=K.vnode;R(P,U,U.scopeId,U.slotScopeIds,K.parent)}}},S=(P,L,B,$,K,se,U,fe,ce=0)=>{for(let ne=ce;ne<P.length;ne++){const le=P[ne]=fe?wi(P[ne]):zn(P[ne]);y(null,le,L,B,$,K,se,U,fe)}},h=(P,L,B,$,K,se,U)=>{const fe=L.el=P.el;let{patchFlag:ce,dynamicChildren:ne,dirs:le}=L;ce|=P.patchFlag&16;const C=P.props||vt,x=L.props||vt;let z;if(B&&Vi(B,!1),(z=x.onVnodeBeforeUpdate)&&Nn(z,B,L,P),le&&zi(L,P,B,"beforeUpdate"),B&&Vi(B,!0),(C.innerHTML&&x.innerHTML==null||C.textContent&&x.textContent==null)&&u(fe,""),ne?d(P.dynamicChildren,ne,fe,B,$,fa(L,K),se):U||J(P,L,fe,null,B,$,fa(L,K),se,!1),ce>0){if(ce&16)b(fe,C,x,B,K);else if(ce&2&&C.class!==x.class&&s(fe,"class",null,x.class,K),ce&4&&s(fe,"style",C.style,x.style,K),ce&8){const te=L.dynamicProps;for(let ae=0;ae<te.length;ae++){const Z=te[ae],Ce=C[Z],ve=x[Z];(ve!==Ce||Z==="value")&&s(fe,Z,Ce,ve,K,B)}}ce&1&&P.children!==L.children&&u(fe,L.children)}else!U&&ne==null&&b(fe,C,x,B,K);((z=x.onVnodeUpdated)||le)&&fn(()=>{z&&Nn(z,B,L,P),le&&zi(L,P,B,"updated")},$)},d=(P,L,B,$,K,se,U)=>{for(let fe=0;fe<L.length;fe++){const ce=P[fe],ne=L[fe],le=ce.el&&(ce.type===dn||!Kr(ce,ne)||ce.shapeFlag&198)?f(ce.el):B;y(ce,ne,le,null,$,K,se,U,!0)}},b=(P,L,B,$,K)=>{if(L!==B){if(L!==vt)for(const se in L)!os(se)&&!(se in B)&&s(P,se,L[se],null,K,$);for(const se in B){if(os(se))continue;const U=B[se],fe=L[se];U!==fe&&se!=="value"&&s(P,se,fe,U,K,$)}"value"in B&&s(P,"value",L.value,B.value,K)}},D=(P,L,B,$,K,se,U,fe,ce)=>{const ne=L.el=P?P.el:a(""),le=L.anchor=P?P.anchor:a("");let{patchFlag:C,dynamicChildren:x,slotScopeIds:z}=L;z&&(fe=fe?fe.concat(z):z),P==null?(i(ne,B,$),i(le,B,$),S(L.children||[],B,le,K,se,U,fe,ce)):C>0&&C&64&&x&&P.dynamicChildren&&P.dynamicChildren.length===x.length?(d(P.dynamicChildren,x,B,K,se,U,fe),(L.key!=null||K&&L===K.subTree)&&qd(P,L,!0)):J(P,L,B,le,K,se,U,fe,ce)},k=(P,L,B,$,K,se,U,fe,ce)=>{L.slotScopeIds=fe,P==null?L.shapeFlag&512?K.ctx.activate(L,B,$,U,ce):Y(L,B,$,K,se,U,ce):j(P,L,ce)},Y=(P,L,B,$,K,se,U)=>{const fe=P.component=tg(P,$,K);if(Id(P)&&(fe.ctx.renderer=F),ng(fe,!1,U),fe.asyncDep){if(K&&K.registerDep(fe,H,U),!P.el){const ce=fe.subTree=Dn(Ui);p(null,ce,L,B),P.placeholder=ce.el}}else H(fe,P,L,B,K,se,U)},j=(P,L,B)=>{const $=L.component=P.component;if(Nm(P,L,B))if($.asyncDep&&!$.asyncResolved){W($,L,B);return}else $.next=L,$.update();else L.el=P.el,$.vnode=L},H=(P,L,B,$,K,se,U)=>{const fe=()=>{if(P.isMounted){let{next:C,bu:x,u:z,parent:te,vnode:ae}=P;{const Ue=Yd(P);if(Ue){C&&(C.el=ae.el,W(P,C,U)),Ue.asyncDep.then(()=>{P.isUnmounted||fe()});return}}let Z=C,Ce;Vi(P,!1),C?(C.el=ae.el,W(P,C,U)):C=ae,x&&sa(x),(Ce=C.props&&C.props.onVnodeBeforeUpdate)&&Nn(Ce,te,C,ae),Vi(P,!0);const ve=ru(P),Pe=P.subTree;P.subTree=ve,y(Pe,ve,f(Pe.el),me(Pe),P,K,se),C.el=ve.el,Z===null&&Fm(P,ve.el),z&&fn(z,K),(Ce=C.props&&C.props.onVnodeUpdated)&&fn(()=>Nn(Ce,te,C,ae),K)}else{let C;const{el:x,props:z}=L,{bm:te,m:ae,parent:Z,root:Ce,type:ve}=P,Pe=fs(L);Vi(P,!1),te&&sa(te),!Pe&&(C=z&&z.onVnodeBeforeMount)&&Nn(C,Z,L),Vi(P,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(ve);const Ue=P.subTree=ru(P);y(null,Ue,B,$,P,K,se),L.el=Ue.el}if(ae&&fn(ae,K),!Pe&&(C=z&&z.onVnodeMounted)){const Ue=L;fn(()=>Nn(C,Z,Ue),K)}(L.shapeFlag&256||Z&&fs(Z.vnode)&&Z.vnode.shapeFlag&256)&&P.a&&fn(P.a,K),P.isMounted=!0,L=B=$=null}};P.scope.on();const ce=P.effect=new rd(fe);P.scope.off();const ne=P.update=ce.run.bind(ce),le=P.job=ce.runIfDirty.bind(ce);le.i=P,le.id=P.uid,ce.scheduler=()=>vc(le),Vi(P,!0),ne()},W=(P,L,B)=>{L.component=P;const $=P.vnode.props;P.vnode=L,P.next=null,Bm(P,L.props,$,B),Gm(P,L.children,B),fi(),Jc(P),di()},J=(P,L,B,$,K,se,U,fe,ce=!1)=>{const ne=P&&P.children,le=P?P.shapeFlag:0,C=L.children,{patchFlag:x,shapeFlag:z}=L;if(x>0){if(x&128){de(ne,C,B,$,K,se,U,fe,ce);return}else if(x&256){he(ne,C,B,$,K,se,U,fe,ce);return}}z&8?(le&16&&ue(ne,K,se),C!==ne&&u(B,C)):le&16?z&16?de(ne,C,B,$,K,se,U,fe,ce):ue(ne,K,se,!0):(le&8&&u(B,""),z&16&&S(C,B,$,K,se,U,fe,ce))},he=(P,L,B,$,K,se,U,fe,ce)=>{P=P||Ar,L=L||Ar;const ne=P.length,le=L.length,C=Math.min(ne,le);let x;for(x=0;x<C;x++){const z=L[x]=ce?wi(L[x]):zn(L[x]);y(P[x],z,B,null,K,se,U,fe,ce)}ne>le?ue(P,K,se,!0,!1,C):S(L,B,$,K,se,U,fe,ce,C)},de=(P,L,B,$,K,se,U,fe,ce)=>{let ne=0;const le=L.length;let C=P.length-1,x=le-1;for(;ne<=C&&ne<=x;){const z=P[ne],te=L[ne]=ce?wi(L[ne]):zn(L[ne]);if(Kr(z,te))y(z,te,B,null,K,se,U,fe,ce);else break;ne++}for(;ne<=C&&ne<=x;){const z=P[C],te=L[x]=ce?wi(L[x]):zn(L[x]);if(Kr(z,te))y(z,te,B,null,K,se,U,fe,ce);else break;C--,x--}if(ne>C){if(ne<=x){const z=x+1,te=z<le?L[z].el:$;for(;ne<=x;)y(null,L[ne]=ce?wi(L[ne]):zn(L[ne]),B,te,K,se,U,fe,ce),ne++}}else if(ne>x)for(;ne<=C;)Ne(P[ne],K,se,!0),ne++;else{const z=ne,te=ne,ae=new Map;for(ne=te;ne<=x;ne++){const Te=L[ne]=ce?wi(L[ne]):zn(L[ne]);Te.key!=null&&ae.set(Te.key,ne)}let Z,Ce=0;const ve=x-te+1;let Pe=!1,Ue=0;const ge=new Array(ve);for(ne=0;ne<ve;ne++)ge[ne]=0;for(ne=z;ne<=C;ne++){const Te=P[ne];if(Ce>=ve){Ne(Te,K,se,!0);continue}let O;if(Te.key!=null)O=ae.get(Te.key);else for(Z=te;Z<=x;Z++)if(ge[Z-te]===0&&Kr(Te,L[Z])){O=Z;break}O===void 0?Ne(Te,K,se,!0):(ge[O-te]=ne+1,O>=Ue?Ue=O:Pe=!0,y(Te,L[O],B,null,K,se,U,fe,ce),Ce++)}const Ee=Pe?qm(ge):Ar;for(Z=Ee.length-1,ne=ve-1;ne>=0;ne--){const Te=te+ne,O=L[Te],Q=L[Te+1],ye=Te+1<le?Q.el||jd(Q):$;ge[ne]===0?y(null,O,B,ye,K,se,U,fe,ce):Pe&&(Z<0||ne!==Ee[Z]?xe(O,B,ye,2):Z--)}}},xe=(P,L,B,$,K=null)=>{const{el:se,type:U,transition:fe,children:ce,shapeFlag:ne}=P;if(ne&6){xe(P.component.subTree,L,B,$);return}if(ne&128){P.suspense.move(L,B,$);return}if(ne&64){U.move(P,L,B,F);return}if(U===dn){i(se,L,B);for(let C=0;C<ce.length;C++)xe(ce[C],L,B,$);i(P.anchor,L,B);return}if(U===da){T(P,L,B);return}if($!==2&&ne&1&&fe)if($===0)fe.beforeEnter(se),i(se,L,B),fn(()=>fe.enter(se),K);else{const{leave:C,delayLeave:x,afterLeave:z}=fe,te=()=>{P.ctx.isUnmounted?r(se):i(se,L,B)},ae=()=>{se._isLeaving&&se[lm](!0),C(se,()=>{te(),z&&z()})};x?x(se,te,ae):ae()}else i(se,L,B)},Ne=(P,L,B,$=!1,K=!1)=>{const{type:se,props:U,ref:fe,children:ce,dynamicChildren:ne,shapeFlag:le,patchFlag:C,dirs:x,cacheIndex:z}=P;if(C===-2&&(K=!1),fe!=null&&(fi(),us(fe,null,B,P,!0),di()),z!=null&&(L.renderCache[z]=void 0),le&256){L.ctx.deactivate(P);return}const te=le&1&&x,ae=!fs(P);let Z;if(ae&&(Z=U&&U.onVnodeBeforeUnmount)&&Nn(Z,L,P),le&6)et(P.component,B,$);else{if(le&128){P.suspense.unmount(B,$);return}te&&zi(P,null,L,"beforeUnmount"),le&64?P.type.remove(P,L,B,F,$):ne&&!ne.hasOnce&&(se!==dn||C>0&&C&64)?ue(ne,L,B,!1,!0):(se===dn&&C&384||!K&&le&16)&&ue(ce,L,B),$&&Oe(P)}(ae&&(Z=U&&U.onVnodeUnmounted)||te)&&fn(()=>{Z&&Nn(Z,L,P),te&&zi(P,null,L,"unmounted")},B)},Oe=P=>{const{type:L,el:B,anchor:$,transition:K}=P;if(L===dn){je(B,$);return}if(L===da){E(P);return}const se=()=>{r(B),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(P.shapeFlag&1&&K&&!K.persisted){const{leave:U,delayLeave:fe}=K,ce=()=>U(B,se);fe?fe(P.el,se,ce):ce()}else se()},je=(P,L)=>{let B;for(;P!==L;)B=g(P),r(P),P=B;r(L)},et=(P,L,B)=>{const{bum:$,scope:K,job:se,subTree:U,um:fe,m:ce,a:ne}=P;au(ce),au(ne),$&&sa($),K.stop(),se&&(se.flags|=8,Ne(U,P,L,B)),fe&&fn(fe,L),fn(()=>{P.isUnmounted=!0},L)},ue=(P,L,B,$=!1,K=!1,se=0)=>{for(let U=se;U<P.length;U++)Ne(P[U],L,B,$,K)},me=P=>{if(P.shapeFlag&6)return me(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const L=g(P.anchor||P.el),B=L&&L[om];return B?g(B):L};let ie=!1;const w=(P,L,B)=>{let $;P==null?L._vnode&&(Ne(L._vnode,null,null,!0),$=L._vnode.component):y(L._vnode||null,P,L,null,null,null,B),L._vnode=P,ie||(ie=!0,Jc($),Td(),ie=!1)},F={p:y,um:Ne,m:xe,r:Oe,mt:Y,mc:S,pc:J,pbc:d,n:me,o:n};return{render:w,hydrate:void 0,createApp:Rm(w)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qd(n,e,t=!1){const i=n.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=wi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&qd(o,a)),a.type===Ko&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===dn?1:0)),a.type===Ui&&!a.el&&(a.el=o.el)}}function qm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Yd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yd(e)}function au(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function jd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?jd(e.subTree):null}const Kd=n=>n.__isSuspense;function Ym(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):tm(n)}const dn=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),hs=[];let mn=null;function yt(n=!1){hs.push(mn=n?null:[])}function jm(){hs.pop(),mn=hs[hs.length-1]||null}let Ms=1;function lu(n,e=!1){Ms+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function $d(n){return n.dynamicChildren=Ms>0?mn||Ar:null,jm(),Ms>0&&mn&&mn.push(n),n}function At(n,e,t,i,r,s){return $d(Mt(n,e,t,i,r,s,!0))}function bc(n,e,t,i,r){return $d(Dn(n,e,t,i,r,!0))}function Zd(n){return n?n.__v_isVNode===!0:!1}function Kr(n,e){return n.type===e.type&&n.key===e.key}const Jd=({key:n})=>n??null,co=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||It(n)||Ke(n)?{i:Gn,r:n,k:e,f:!!t}:n:null);function Mt(n,e=null,t=null,i=0,r=null,s=n===dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jd(e),ref:e&&co(e),scopeId:Ad,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gn};return a?(Ec(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),Ms>0&&!o&&mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mn.push(l),l}const Dn=Km;function Km(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Mm)&&(n=Ui),Zd(n)){const a=Fr(n,e,!0);return t&&Ec(a,t),Ms>0&&!s&&mn&&(a.shapeFlag&6?mn[mn.indexOf(n)]=a:mn.push(a)),a.patchFlag=-2,a}if(og(n)&&(n=n.__vccOpts),e){e=$m(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=hc(a)),St(l)&&(ko(l)&&!Ye(l)&&(l=Ut({},l)),e.style=dc(l))}const o=Ct(n)?1:Kd(n)?128:am(n)?64:St(n)?4:Ke(n)?2:0;return Mt(n,e,t,i,r,o,s,!0)}function $m(n){return n?ko(n)||Vd(n)?Ut({},n):n:null}function Fr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Jm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Jd(c),ref:e&&e.ref?t&&s?Ye(s)?s.concat(co(e)):[s,co(e)]:co(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fr(n.ssContent),ssFallback:n.ssFallback&&Fr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Mc(u,l.clone(u)),u}function Zm(n=" ",e=0){return Dn(Ko,null,n,e)}function ii(n="",e=!1){return e?(yt(),bc(Ui,null,n)):Dn(Ui,null,n)}function zn(n){return n==null||typeof n=="boolean"?Dn(Ui):Ye(n)?Dn(dn,null,n.slice()):Zd(n)?wi(n):Dn(Ko,null,String(n))}function wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fr(n)}function Ec(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ec(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Vd(e)?e._ctx=Gn:r===3&&Gn&&(Gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:Gn},t=32):(e=String(e),i&64?(t=16,e=[Zm(e)]):t=8);n.children=e,n.shapeFlag|=t}function Jm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=hc([e.class,i.class]));else if(r==="style")e.style=dc([e.style,i.style]);else if(Uo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Nn(n,e,t,i=null){Kn(n,e,7,[t,i])}const Qm=Fd();let eg=0;function tg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Qm,s={uid:eg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(i,r),emitsOptions:Od(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dm.bind(null,s),n.ce&&n.ce(s),s}let Yt=null;const kr=()=>Yt||Gn;let wo,dl;{const n=Bo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wo=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),dl=e("__VUE_SSR_SETTERS__",t=>Ss=t)}const Rs=n=>{const e=Yt;return wo(n),n.scope.on(),()=>{n.scope.off(),wo(e)}},cu=()=>{Yt&&Yt.scope.off(),wo(null)};function Qd(n){return n.vnode.shapeFlag&4}let Ss=!1;function ng(n,e=!1,t=!1){e&&dl(e);const{props:i,children:r}=n.vnode,s=Qd(n);Om(n,i,s,e),Hm(n,r,t||e);const o=s?ig(n,e):void 0;return e&&dl(!1),o}function ig(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ym);const{setup:i}=t;if(i){fi();const r=n.setupContext=i.length>1?sg(n):null,s=Rs(n),o=As(i,n,0,[n.props,r]),a=jf(o);if(di(),s(),(a||n.sp)&&!fs(n)&&Dd(n),a){if(o.then(cu,cu),e)return o.then(l=>{uu(n,l)}).catch(l=>{Wo(l,n,0)});n.asyncDep=o}else uu(n,o)}else eh(n)}function uu(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=yd(e)),eh(n)}function eh(n,e,t){const i=n.type;n.render||(n.render=i.render||Xn);{const r=Rs(n);fi();try{bm(n)}finally{di(),r()}}}const rg={get(n,e){return zt(n,"get",""),n[e]}};function sg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,rg),slots:n.slots,emit:n.emit,expose:e}}function Tc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yd(kp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ds)return ds[t](n)},has(e,t){return t in e||t in ds}})):n.proxy}function og(n){return Ke(n)&&"__vccOpts"in n}const sn=(n,e)=>$p(n,e,Ss),ag="3.5.27";let hl;const fu=typeof window<"u"&&window.trustedTypes;if(fu)try{hl=fu.createPolicy("vue",{createHTML:n=>n})}catch{}const th=hl?n=>hl.createHTML(n):n=>n,lg="http://www.w3.org/2000/svg",cg="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,du=ri&&ri.createElement("template"),ug={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ri.createElementNS(lg,n):e==="mathml"?ri.createElementNS(cg,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{du.innerHTML=th(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=du.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fg=Symbol("_vtc");function dg(n,e,t){const i=n[fg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const hu=Symbol("_vod"),hg=Symbol("_vsh"),pg=Symbol(""),mg=/(?:^|;)\s*display\s*:/;function gg(n,e,t){const i=n.style,r=Ct(t);let s=!1;if(t&&!r){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&uo(i,a,"")}else for(const o in e)t[o]==null&&uo(i,o,"");for(const o in t)o==="display"&&(s=!0),uo(i,o,t[o])}else if(r){if(e!==t){const o=i[pg];o&&(t+=";"+o),i.cssText=t,s=mg.test(t)}}else e&&n.removeAttribute("style");hu in n&&(n[hu]=s?i.display:"",n[hg]&&(i.display="none"))}const pu=/\s*!important$/;function uo(n,e,t){if(Ye(t))t.forEach(i=>uo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_g(n,e);pu.test(t)?n.setProperty(rr(i),t.replace(pu,""),"important"):n[i]=t}}const mu=["Webkit","Moz","ms"],ha={};function _g(n,e){const t=ha[e];if(t)return t;let i=Li(e);if(i!=="filter"&&i in n)return ha[e]=i;i=Zf(i);for(let r=0;r<mu.length;r++){const s=mu[r]+i;if(s in n)return ha[e]=s}return e}const gu="http://www.w3.org/1999/xlink";function _u(n,e,t,i,r,s=Mp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(gu,e.slice(6,e.length)):n.setAttributeNS(gu,e,t):t==null||s&&!Qf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fi(t)?String(t):t)}function vu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?th(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Qf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function vg(n,e,t,i){n.addEventListener(e,t,i)}function xg(n,e,t,i){n.removeEventListener(e,t,i)}const xu=Symbol("_vei");function Mg(n,e,t,i,r=null){const s=n[xu]||(n[xu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Sg(e);if(i){const c=s[e]=Eg(i,r);vg(n,a,c,l)}else o&&(xg(n,a,o,l),s[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function Sg(n){let e;if(Mu.test(n)){e={};let i;for(;i=n.match(Mu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rr(n.slice(2)),e]}let pa=0;const yg=Promise.resolve(),bg=()=>pa||(yg.then(()=>pa=0),pa=Date.now());function Eg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Kn(Tg(i,t.value),e,5,[i])};return t.value=n,t.attached=bg(),t}function Tg(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?dg(n,i,o):e==="style"?gg(n,t,i):Uo(e)?uc(e)||Mg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ag(n,e,i,o))?(vu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_u(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?vu(n,Li(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),_u(n,e,i,o))};function Ag(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Su(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Su(e)&&Ct(t)?!1:e in n}const Cg=Ut({patchProp:wg},ug);let yu;function Rg(){return yu||(yu=km(Cg))}const Pg=((...n)=>{const e=Rg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ig(i);if(!r)return;const s=e._component;!Ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Dg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Dg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ig(n){return Ct(n)?document.querySelector(n):n}const wc="182",si={ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lg=0,bu=1,Ug=2,fo=1,Ng=2,rs=3,Ni=0,on=1,Hn=2,li=0,Pr=1,Eu=2,Tu=3,wu=4,Fg=5,ji=100,Og=101,Bg=102,zg=103,Vg=104,Hg=200,Gg=201,kg=202,Wg=203,pl=204,ml=205,Xg=206,qg=207,Yg=208,jg=209,Kg=210,$g=211,Zg=212,Jg=213,Qg=214,gl=0,_l=1,vl=2,Or=3,xl=4,Ml=5,Sl=6,yl=7,nh=0,e_=1,t_=2,Yn=0,ih=1,rh=2,sh=3,oh=4,ah=5,lh=6,ch=7,uh=300,ir=301,Br=302,bl=303,El=304,$o=306,Tl=1e3,ai=1001,wl=1002,Lt=1003,n_=1004,Bs=1005,Vt=1006,ma=1007,$i=1008,Sn=1009,fh=1010,dh=1011,ys=1012,Ac=1013,$n=1014,kn=1015,pi=1016,Cc=1017,Rc=1018,bs=1020,hh=35902,ph=35899,mh=1021,gh=1022,Rn=1023,mi=1026,Zi=1027,_h=1028,Pc=1029,zr=1030,Dc=1031,Ic=1033,ho=33776,po=33777,mo=33778,go=33779,Al=35840,Cl=35841,Rl=35842,Pl=35843,Dl=36196,Il=37492,Ll=37496,Ul=37488,Nl=37489,Fl=37490,Ol=37491,Bl=37808,zl=37809,Vl=37810,Hl=37811,Gl=37812,kl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,Kl=37819,$l=37820,Zl=37821,Jl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,ic=36285,rc=36286,i_=3200,r_=0,s_=1,Ri="",xn="srgb",Vr="srgb-linear",Ao="linear",ut="srgb",cr=7680,Au=519,o_=512,a_=513,l_=514,Lc=515,c_=516,u_=517,Uc=518,f_=519,sc=35044,Cu="300 es",Wn=2e3,Co=2001;function vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){const n=Ro("canvas");return n.style.display="block",n}const Ru={};function Po(...n){const e="THREE."+n.shift();console.log(e,...n)}function Xe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function nt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Es(...n){const e=n.join(" ");e in Ru||(Ru[e]=!0,Xe(...n))}function h_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}let Wr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pu=1234567;const ps=Math.PI/180,Ts=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Nc(n,e){return(n%e+e)%e}function p_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function m_(n,e,t){return n!==e?(t-n)/(e-n):0}function ms(n,e,t){return(1-t)*n+t*e}function g_(n,e,t,i){return ms(n,e,1-Math.exp(-t*i))}function __(n,e=1){return e-Math.abs(Nc(n,e*2)-e)}function v_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function x_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function M_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function S_(n,e){return n+Math.random()*(e-n)}function y_(n){return n*(.5-Math.random())}function b_(n){n!==void 0&&(Pu=n);let e=Pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E_(n){return n*ps}function T_(n){return n*Ts}function w_(n){return(n&n-1)===0&&n!==0}function A_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function C_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function R_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),g=o((e-i)/2),_=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*g,a*c);break;case"YZY":n.set(l*g,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*g,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*_,a*c);break;case"YXY":n.set(l*_,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*_,a*u,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xh={DEG2RAD:ps,RAD2DEG:Ts,generateUUID:ci,clamp:qe,euclideanModulo:Nc,mapLinear:p_,inverseLerp:m_,lerp:ms,damp:g_,pingpong:__,smoothstep:v_,smootherstep:x_,randInt:M_,randFloat:S_,randFloatSpread:y_,seededRandom:b_,degToRad:E_,radToDeg:T_,isPowerOfTwo:w_,ceilPowerOfTwo:A_,floorPowerOfTwo:C_,setQuaternionFromProperEuler:R_,normalize:ft,denormalize:Cn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],g=s[o+0],_=s[o+1],v=s[o+2],y=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=g,e[t+1]=_,e[t+2]=v,e[t+3]=y;return}if(f!==y||l!==g||c!==_||u!==v){let m=l*g+c*_+u*v+f*y;m<0&&(g=-g,_=-_,v=-v,y=-y,m=-m);let p=1-a;if(m<.9995){const A=Math.acos(m),T=Math.sin(A);p=Math.sin(p*A)/T,a=Math.sin(a*A)/T,l=l*p+g*a,c=c*p+_*a,u=u*p+v*a,f=f*p+y*a}else{l=l*p+g*a,c=c*p+_*a,u=u*p+v*a,f=f*p+y*a;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],g=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*_-c*g,e[t+1]=l*v+u*g+c*f-a*_,e[t+2]=c*v+u*_+a*g-l*f,e[t+3]=u*v-a*f-l*g-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),g=l(i/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=g*u*f+c*_*v,this._y=c*_*f-g*u*v,this._z=c*u*v+g*_*f,this._w=c*u*f-g*_*v;break;case"YXZ":this._x=g*u*f+c*_*v,this._y=c*_*f-g*u*v,this._z=c*u*v-g*_*f,this._w=c*u*f+g*_*v;break;case"ZXY":this._x=g*u*f-c*_*v,this._y=c*_*f+g*u*v,this._z=c*u*v+g*_*f,this._w=c*u*f-g*_*v;break;case"ZYX":this._x=g*u*f-c*_*v,this._y=c*_*f+g*u*v,this._z=c*u*v-g*_*f,this._w=c*u*f+g*_*v;break;case"YZX":this._x=g*u*f+c*_*v,this._y=c*_*f+g*u*v,this._z=c*u*v-g*_*f,this._w=c*u*f-g*_*v;break;case"XZY":this._x=g*u*f-c*_*v,this._y=c*_*f-g*u*v,this._z=c*u*v+g*_*f,this._w=c*u*f+g*_*v;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],g=i+a+f;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>f){const _=2*Math.sqrt(1+i-a-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>f){const _=2*Math.sqrt(1+a-i-f);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new X,Du=new gi;class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],g=i[2],_=i[5],v=i[8],y=r[0],m=r[3],p=r[6],A=r[1],T=r[4],E=r[7],N=r[2],M=r[5],R=r[8];return s[0]=o*y+a*A+l*N,s[3]=o*m+a*T+l*M,s[6]=o*p+a*E+l*R,s[1]=c*y+u*A+f*N,s[4]=c*m+u*T+f*M,s[7]=c*p+u*E+f*R,s[2]=g*y+_*A+v*N,s[5]=g*m+_*T+v*M,s[8]=g*p+_*E+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,g=a*l-u*s,_=c*s-o*l,v=t*f+i*g+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=g*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=_*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new $e,Iu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P_(){const n={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Dr(r.r),r.g=Dr(r.g),r.b=Dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vr]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),n}const it=P_();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ur;class D_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Ro("canvas")),ur.width=e.width,ur.height=e.height;const r=ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I_=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?D_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let L_=0;const xa=new X;class jt extends Wr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=ai,r=ai,s=Vt,o=$i,a=Rn,l=Sn,c=jt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ci(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=uh;jt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],g=l[1],_=l[5],v=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-g)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+g)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(_+1)/2,N=(p+1)/2,M=(u+g)/4,R=(f+y)/4,S=(v+m)/4;return T>E&&T>N?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=M/i,s=R/i):E>N?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=S/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=S/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(g-u)*(g-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-y)/A,this.z=(g-u)/A,this.w=Math.acos((c+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends Wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new jt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends U_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mh extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N_ extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Vs.subVectors(this.max,$r),fr.subVectors(e.a,$r),dr.subVectors(e.b,$r),hr.subVectors(e.c,$r),vi.subVectors(dr,fr),xi.subVectors(hr,dr),Hi.subVectors(fr,hr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Hi.z,Hi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Hi.z,0,-Hi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Hi.y,Hi.x,0];return!Ma(t,fr,dr,hr,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,fr,dr,hr,Vs))?!1:(Hs.crossVectors(vi,xi),t=[Hs.x,Hs.y,Hs.z],Ma(t,fr,dr,hr,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new X,new X,new X,new X,new X,new X,new X,new X],Tn=new X,zs=new Ps,fr=new X,dr=new X,hr=new X,vi=new X,xi=new X,Hi=new X,$r=new X,Vs=new X,Hs=new X,Gi=new X;function Ma(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gi.fromArray(n,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const F_=new Ps,Zr=new X,Sa=new X;class Zo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):F_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Sa)),this.expandByPoint(Zr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new X,ya=new X,Gs=new X,Mi=new X,ba=new X,ks=new X,Ea=new X;class Hr{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ya.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=Mi.dot(this.direction),l=-Mi.dot(Gs),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,g,_,v;if(u>0)if(f=o*l-a,g=o*a-l,v=s*u,f>=0)if(g>=-v)if(g<=v){const y=1/u;f*=y,g*=y,_=f*(f+o*g+2*a)+g*(o*f+g+2*l)+c}else g=s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*l)+c;else g=-s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*l)+c;else g<=-v?(f=Math.max(0,-(-o*s+a)),g=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+g*(g+2*l)+c):g<=v?(f=0,g=Math.min(Math.max(-s,-l),s),_=g*(g+2*l)+c):(f=Math.max(0,-(o*s+a)),g=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+g*(g+2*l)+c);else g=o>0?-s:s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ya).addScaledVector(Gs,g),_}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,g=this.origin;return c>=0?(i=(e.min.x-g.x)*c,r=(e.max.x-g.x)*c):(i=(e.max.x-g.x)*c,r=(e.min.x-g.x)*c),u>=0?(s=(e.min.y-g.y)*u,o=(e.max.y-g.y)*u):(s=(e.max.y-g.y)*u,o=(e.min.y-g.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-g.z)*f,l=(e.max.z-g.z)*f):(a=(e.max.z-g.z)*f,l=(e.min.z-g.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){ba.subVectors(t,e),ks.subVectors(i,e),Ea.crossVectors(ba,ks);let o=this.direction.dot(Ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(Mi,ks));if(l<0)return null;const c=a*this.direction.dot(ba.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ea);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,l,c,u,f,g,_,v,y,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,g,_,v,y,m)}set(e,t,i,r,s,o,a,l,c,u,f,g,_,v,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=g,p[3]=_,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const g=o*u,_=o*f,v=a*u,y=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=g-y*c,t[9]=-a*l,t[2]=y-g*c,t[6]=v+_*c,t[10]=o*l}else if(e.order==="YXZ"){const g=l*u,_=l*f,v=c*u,y=c*f;t[0]=g+y*a,t[4]=v*a-_,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-v,t[6]=y+g*a,t[10]=o*l}else if(e.order==="ZXY"){const g=l*u,_=l*f,v=c*u,y=c*f;t[0]=g-y*a,t[4]=-o*f,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*u,t[9]=y-g*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const g=o*u,_=o*f,v=a*u,y=a*f;t[0]=l*u,t[4]=v*c-_,t[8]=g*c+y,t[1]=l*f,t[5]=y*c+g,t[9]=_*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const g=o*l,_=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=y-g*f,t[8]=v*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=_*f+v,t[10]=g-y*f}else if(e.order==="XZY"){const g=o*l,_=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=g*f+y,t[5]=o*u,t[9]=_*f-v,t[2]=v*f-_,t[6]=a*u,t[10]=y*f+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Si.crossVectors(i,cn),Si.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Si.crossVectors(i,cn)),Si.normalize(),Ws.crossVectors(cn,Si),r[0]=Si.x,r[4]=Ws.x,r[8]=cn.x,r[1]=Si.y,r[5]=Ws.y,r[9]=cn.y,r[2]=Si.z,r[6]=Ws.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],g=i[9],_=i[13],v=i[2],y=i[6],m=i[10],p=i[14],A=i[3],T=i[7],E=i[11],N=i[15],M=r[0],R=r[4],S=r[8],h=r[12],d=r[1],b=r[5],D=r[9],k=r[13],Y=r[2],j=r[6],H=r[10],W=r[14],J=r[3],he=r[7],de=r[11],xe=r[15];return s[0]=o*M+a*d+l*Y+c*J,s[4]=o*R+a*b+l*j+c*he,s[8]=o*S+a*D+l*H+c*de,s[12]=o*h+a*k+l*W+c*xe,s[1]=u*M+f*d+g*Y+_*J,s[5]=u*R+f*b+g*j+_*he,s[9]=u*S+f*D+g*H+_*de,s[13]=u*h+f*k+g*W+_*xe,s[2]=v*M+y*d+m*Y+p*J,s[6]=v*R+y*b+m*j+p*he,s[10]=v*S+y*D+m*H+p*de,s[14]=v*h+y*k+m*W+p*xe,s[3]=A*M+T*d+E*Y+N*J,s[7]=A*R+T*b+E*j+N*he,s[11]=A*S+T*D+E*H+N*de,s[15]=A*h+T*k+E*W+N*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],g=e[10],_=e[14],v=e[3],y=e[7],m=e[11],p=e[15],A=l*_-c*g,T=a*_-c*f,E=a*g-l*f,N=o*_-c*u,M=o*g-l*u,R=o*f-a*u;return t*(y*A-m*T+p*E)-i*(v*A-m*N+p*M)+r*(v*T-y*N+p*R)-s*(v*E-y*M+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],g=e[10],_=e[11],v=e[12],y=e[13],m=e[14],p=e[15],A=f*m*c-y*g*c+y*l*_-a*m*_-f*l*p+a*g*p,T=v*g*c-u*m*c-v*l*_+o*m*_+u*l*p-o*g*p,E=u*y*c-v*f*c+v*a*_-o*y*_-u*a*p+o*f*p,N=v*f*l-u*y*l-v*a*g+o*y*g+u*a*m-o*f*m,M=t*A+i*T+r*E+s*N;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=A*R,e[1]=(y*g*s-f*m*s-y*r*_+i*m*_+f*r*p-i*g*p)*R,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*g*s-f*r*c+i*g*c+a*r*_-i*l*_)*R,e[4]=T*R,e[5]=(u*m*s-v*g*s+v*r*_-t*m*_-u*r*p+t*g*p)*R,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*g*s-u*l*s+u*r*c-t*g*c-o*r*_+t*l*_)*R,e[8]=E*R,e[9]=(v*f*s-u*y*s-v*i*_+t*y*_+u*i*p-t*f*p)*R,e[10]=(o*y*s-v*a*s+v*i*c-t*y*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*_-t*a*_)*R,e[12]=N*R,e[13]=(u*y*r-v*f*r+v*i*g-t*y*g-u*i*m+t*f*m)*R,e[14]=(v*a*r-o*y*r-v*i*l+t*y*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*g+t*a*g)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,g=s*c,_=s*u,v=s*f,y=o*u,m=o*f,p=a*f,A=l*c,T=l*u,E=l*f,N=i.x,M=i.y,R=i.z;return r[0]=(1-(y+p))*N,r[1]=(_+E)*N,r[2]=(v-T)*N,r[3]=0,r[4]=(_-E)*M,r[5]=(1-(g+p))*M,r[6]=(m+A)*M,r[7]=0,r[8]=(v+T)*R,r[9]=(m-A)*R,r[10]=(1-(g+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),wn.copy(this);const c=1/s,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),g=(t+e)/(t-e),_=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Wn)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Co)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=f,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),g=-(t+e)/(t-e),_=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Wn)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===Co)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=f,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pr=new X,wn=new xt,O_=new X(0,0,0),B_=new X(1,1,1),Si=new X,Ws=new X,cn=new X,Uu=new xt,Nu=new gi;class sr{constructor(e=0,t=0,i=0,r=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],g=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z_=0;const Fu=new X,mr=new gi,ei=new xt,Xs=new X,Jr=new X,V_=new X,H_=new gi,Ou=new X(1,0,0),Bu=new X(0,1,0),zu=new X(0,0,1),Vu={type:"added"},G_={type:"removed"},gr={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Kt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new X,t=new sr,i=new gi,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Jr,Xs,this.up):ei.lookAt(Xs,Jr,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(ei),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),gr.child=e,this.dispatchEvent(gr),gr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),g=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),g.length>0&&(i.skeletons=g),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new X(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new X,ti=new X,wa=new X,ni=new X,_r=new X,vr=new X,Hu=new X,Aa=new X,Ca=new X,Ra=new X,Pa=new Tt,Da=new Tt,Ia=new Tt;class hn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),An.subVectors(e,t),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){An.subVectors(r,t),ti.subVectors(i,t),wa.subVectors(e,t);const o=An.dot(An),a=An.dot(ti),l=An.dot(wa),c=ti.dot(ti),u=ti.dot(wa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const g=1/f,_=(c*l-a*u)*g,v=(o*u-a*l)*g;return s.set(1-_-v,v,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Pa.setScalar(0),Da.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),Ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pa,s.x),o.addScaledVector(Da,s.y),o.addScaledVector(Ia,s.z),o}static isFrontFacing(e,t,i,r){return An.subVectors(i,t),ti.subVectors(e,t),An.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),An.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_r.subVectors(r,i),vr.subVectors(s,i),Aa.subVectors(e,i);const l=_r.dot(Aa),c=vr.dot(Aa);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,r);const u=_r.dot(Ca),f=vr.dot(Ca);if(u>=0&&f<=u)return t.copy(r);const g=l*f-u*c;if(g<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_r,o);Ra.subVectors(e,s);const _=_r.dot(Ra),v=vr.dot(Ra);if(v>=0&&_<=v)return t.copy(s);const y=_*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(vr,a);const m=u*v-_*f;if(m<=0&&f-u>=0&&_-v>=0)return Hu.subVectors(s,r),a=(f-u)/(f-u+(_-v)),t.copy(r).addScaledVector(Hu,a);const p=1/(m+y+g);return o=y*p,a=g*p,t.copy(i).addScaledVector(_r,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Nc(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=La(o,s,e+1/3),this.g=La(o,s,e),this.b=La(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=xn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const i=Sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return it.workingToColorSpace(Ot.copy(this),e),Math.round(qe(Ot.r*255,0,255))*65536+Math.round(qe(Ot.g*255,0,255))*256+Math.round(qe(Ot.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=xn){it.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(qs);const i=ms(yi.h,qs.h,t),r=ms(yi.s,qs.s,t),s=ms(yi.l,qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ot;ot.NAMES=Sh;let k_=0;class Ds extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Pr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pl&&(i.blendSrc=this.blendSrc),this.blendDst!==ml&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yh extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new X,Ys=new ke;let W_=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class bh extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eh extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let X_=0;const vn=new xt,Ua=new Kt,xr=new X,un=new Ps,Qr=new Ps,Dt=new X;class Un extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Eh:bh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(un.min,Qr.min),un.expandByPoint(Dt),Dt.addVectors(un.max,Qr.max),un.expandByPoint(Dt)):(un.expandByPoint(Qr.min),un.expandByPoint(Qr.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(e,c),Dt.add(xr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new X,l[S]=new X;const c=new X,u=new X,f=new X,g=new ke,_=new ke,v=new ke,y=new X,m=new X;function p(S,h,d){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,h),f.fromBufferAttribute(i,d),g.fromBufferAttribute(s,S),_.fromBufferAttribute(s,h),v.fromBufferAttribute(s,d),u.sub(c),f.sub(c),_.sub(g),v.sub(g);const b=1/(_.x*v.y-v.x*_.y);isFinite(b)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(b),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(b),a[S].add(y),a[h].add(y),a[d].add(y),l[S].add(m),l[h].add(m),l[d].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let S=0,h=A.length;S<h;++S){const d=A[S],b=d.start,D=d.count;for(let k=b,Y=b+D;k<Y;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new X,E=new X,N=new X,M=new X;function R(S){N.fromBufferAttribute(r,S),M.copy(N);const h=a[S];T.copy(h),T.sub(N.multiplyScalar(N.dot(h))).normalize(),E.crossVectors(M,h);const b=E.dot(l[S])<0?-1:1;o.setXYZW(S,T.x,T.y,T.z,b)}for(let S=0,h=A.length;S<h;++S){const d=A[S],b=d.start,D=d.count;for(let k=b,Y=b+D;k<Y;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,_=i.count;g<_;g++)i.setXYZ(g,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let g=0,_=e.count;g<_;g+=3){const v=e.getX(g+0),y=e.getX(g+1),m=e.getX(g+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let g=0,_=t.count;g<_;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(g+0,u.x,u.y,u.z),i.setXYZ(g+1,u.x,u.y,u.z),i.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,g=new c.constructor(l.length*u);let _=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?_=l[y]*a.data.stride+a.offset:_=l[y]*u;for(let p=0;p<u;p++)g[v++]=c[_++]}return new yn(g,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const g=c[u],_=e(g,i);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,g=c.length;f<g;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let g=0,_=f.length;g<_;g++)u.push(f[g].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new xt,ki=new Hr,js=new Zo,ku=new X,Ks=new X,$s=new X,Zs=new X,Na=new X,Js=new X,Wu=new X,Qs=new X;class En extends Kt{constructor(e=new Un,t=new yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Na.fromBufferAttribute(f,e),o?Js.addScaledVector(Na,u):Js.addScaledVector(Na.sub(t),u))}t.add(Js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(js.containsPoint(ki.origin)===!1&&(ki.intersectSphere(js,ku)===null||ki.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Gu.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,g=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=g.length;v<y;v++){const m=g[v],p=o[m.materialIndex],A=Math.max(m.start,_.start),T=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let E=A,N=T;E<N;E+=3){const M=a.getX(E),R=a.getX(E+1),S=a.getX(E+2);r=eo(this,p,e,i,c,u,f,M,R,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let m=v,p=y;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=eo(this,o,e,i,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=g.length;v<y;v++){const m=g[v],p=o[m.materialIndex],A=Math.max(m.start,_.start),T=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let E=A,N=T;E<N;E+=3){const M=E,R=E+1,S=E+2;r=eo(this,p,e,i,c,u,f,M,R,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let m=v,p=y;m<p;m+=3){const A=m,T=m+1,E=m+2;r=eo(this,o,e,i,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function q_(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function eo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ks),n.getVertexPosition(l,$s),n.getVertexPosition(c,Zs);const u=q_(n,e,t,i,Ks,$s,Zs,Wu);if(u){const f=new X;hn.getBarycoord(Wu,Ks,$s,Zs,f),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const g={a,b:l,c,normal:new X,materialIndex:0};hn.getNormal(Ks,$s,Zs,g.normal),u.face=g,u.barycoord=f}return u}class Is extends Un{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let g=0,_=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function v(y,m,p,A,T,E,N,M,R,S,h){const d=E/R,b=N/S,D=E/2,k=N/2,Y=M/2,j=R+1,H=S+1;let W=0,J=0;const he=new X;for(let de=0;de<H;de++){const xe=de*b-k;for(let Ne=0;Ne<j;Ne++){const Oe=Ne*d-D;he[y]=Oe*A,he[m]=xe*T,he[p]=Y,c.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[p]=M>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ne/R),f.push(1-de/S),W+=1}}for(let de=0;de<S;de++)for(let xe=0;xe<R;xe++){const Ne=g+xe+j*de,Oe=g+xe+j*(de+1),je=g+(xe+1)+j*(de+1),et=g+(xe+1)+j*de;l.push(Ne,Oe,et),l.push(Oe,je,et),J+=6}a.addGroup(_,J,h),_+=J,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Gr(n[t]);for(const r in i)e[r]=i[r]}return e}function Y_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const wh={clone:Gr,merge:Wt};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ah extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new X,Xu=new ke,qu=new ke;class nn extends Ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,Sr=1;class $_ extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Mr,Sr,e,t);r.layers=this.layers,this.add(r);const s=new nn(Mr,Sr,e,t);s.layers=this.layers,this.add(s);const o=new nn(Mr,Sr,e,t);o.layers=this.layers,this.add(o);const a=new nn(Mr,Sr,e,t);a.layers=this.layers,this.add(a);const l=new nn(Mr,Sr,e,t);l.layers=this.layers,this.add(l);const c=new nn(Mr,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,g,_),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ch extends jt{constructor(e=[],t=ir,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rh extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ch(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:li});s.uniforms.tEquirect.value=t;const o=new En(r,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=Vt),new $_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class to extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],g=u.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&g>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new to;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class J_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new X;class Do{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Do(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Q_ extends jt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Lt,u=Lt,f,g){super(null,o,a,l,c,u,r,s,f,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oa=new X,e0=new X,t0=new $e;class Mn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oa.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t0.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Zo,n0=new ke(.5,.5),no=new X;class Ph{constructor(e=new Mn,t=new Mn,i=new Mn,r=new Mn,s=new Mn,o=new Mn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],g=s[6],_=s[7],v=s[8],y=s[9],m=s[10],p=s[11],A=s[12],T=s[13],E=s[14],N=s[15];if(r[0].setComponents(c-o,_-u,p-v,N-A).normalize(),r[1].setComponents(c+o,_+u,p+v,N+A).normalize(),r[2].setComponents(c+a,_+f,p+y,N+T).normalize(),r[3].setComponents(c-a,_-f,p-y,N-T).normalize(),i)r[4].setComponents(l,g,m,E).normalize(),r[5].setComponents(c-l,_-g,p-m,N-E).normalize();else if(r[4].setComponents(c-l,_-g,p-m,N-E).normalize(),t===Wn)r[5].setComponents(c+l,_+g,p+m,N+E).normalize();else if(t===Co)r[5].setComponents(l,g,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=n0.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ws extends jt{constructor(e,t,i=$n,r,s,o,a=Lt,l=Lt,c,u=mi,f=1){if(u!==mi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:f};super(g,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i0 extends ws{constructor(e,t=$n,i=ir,r,s,o=Lt,a=Lt,l,c=mi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dh extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,g=t/l,_=[],v=[],y=[],m=[];for(let p=0;p<u;p++){const A=p*g-o;for(let T=0;T<c;T++){const E=T*f-s;v.push(E,-A,0),y.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const T=A+c*p,E=A+c*(p+1),N=A+1+c*(p+1),M=A+1+c*p;_.push(T,E,M),_.push(E,N,M)}this.setIndex(_),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bc extends Un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,g=new X,_=[],v=[],y=[],m=[];for(let p=0;p<=i;p++){const A=[],T=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let N=0;N<=t;N++){const M=N/t;f.x=-e*Math.cos(r+M*s)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(r+M*s)*Math.sin(o+T*a),v.push(f.x,f.y,f.z),g.copy(f).normalize(),y.push(g.x,g.y,g.z),m.push(M+E,1-T),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const T=u[p][A+1],E=u[p][A],N=u[p+1][A],M=u[p+1][A+1];(p!==0||o>0)&&_.push(T,E,M),(p!==i-1||l<Math.PI)&&_.push(E,N,M)}this.setIndex(_),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class r0 extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class s0 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gs extends Ah{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a0 extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class l0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Yu=new xt;class c0{constructor(e,t,i=0,r=1/0){this.ray=new Hr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(e,t=!0,i=[]){return oc(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)oc(e[r],this,i,t);return i.sort(ju),i}}function ju(n,e){return n.distance-e.distance}function oc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)oc(s[o],e,t,!0)}}class Ku{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $u=new X,io=new X,yr=new X,br=new X,Ba=new X,u0=new X,f0=new X;class d0{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){$u.subVectors(e,this.start),io.subVectors(this.end,this.start);const i=io.dot(io);let s=io.dot($u)/i;return t&&(s=qe(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=u0,i=f0){const r=10000000000000001e-32;let s,o;const a=this.start,l=e.start,c=this.end,u=e.end;yr.subVectors(c,a),br.subVectors(u,l),Ba.subVectors(a,l);const f=yr.dot(yr),g=br.dot(br),_=br.dot(Ba);if(f<=r&&g<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,o=_/g,o=qe(o,0,1);else{const v=yr.dot(Ba);if(g<=r)o=0,s=qe(-v/f,0,1);else{const y=yr.dot(br),m=f*g-y*y;m!==0?s=qe((y*_-v*g)/m,0,1):s=0,o=(y*s+_)/g,o<0?(o=0,s=qe(-v/f,0,1)):o>1&&(o=1,s=qe((y-v)/f,0,1))}}return t.copy(a).add(yr.multiplyScalar(s)),i.copy(l).add(br.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Zu(n,e,t,i){const r=h0(i);switch(t){case mh:return n*e;case _h:return n*e/r.components*r.byteLength;case Pc:return n*e/r.components*r.byteLength;case zr:return n*e*2/r.components*r.byteLength;case Dc:return n*e*2/r.components*r.byteLength;case gh:return n*e*3/r.components*r.byteLength;case Rn:return n*e*4/r.components*r.byteLength;case Ic:return n*e*4/r.components*r.byteLength;case ho:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Pl:return Math.max(n,16)*Math.max(e,8)/4;case Al:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Dl:case Il:case Ul:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h0(n){switch(n){case Sn:case fh:return{byteLength:1,components:1};case ys:case dh:case pi:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case $n:case Ac:case kn:return{byteLength:4,components:1};case hh:case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function Ih(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function p0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,g=n.createBuffer();n.bindBuffer(l,g),n.bufferData(l,c,u),a.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((_,v)=>_.start-v.start);let g=0;for(let _=1;_<f.length;_++){const v=f[g],y=f[_];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++g,f[g]=y)}f.length=g+1;for(let _=0,v=f.length;_<v;_++){const y=f[_];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#endif`,av=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,Bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,Sx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ix=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Bx=`#define STANDARD
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
}`,zx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Vx=`#define TOON
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
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Gx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:_0,alphamap_pars_fragment:v0,alphatest_fragment:x0,alphatest_pars_fragment:M0,aomap_fragment:S0,aomap_pars_fragment:y0,batching_pars_vertex:b0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:C0,bumpmap_pars_fragment:R0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:U0,color_pars_fragment:N0,color_pars_vertex:F0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:V0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:k0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:j0,envmap_pars_fragment:K0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:av,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:Q0,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:ov,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:uv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:hv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:xv,logdepthbuf_vertex:Mv,map_fragment:Sv,map_pars_fragment:yv,map_particle_fragment:bv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:wv,morphinstance_vertex:Av,morphcolor_vertex:Cv,morphnormal_vertex:Rv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Dv,normal_fragment_begin:Iv,normal_fragment_maps:Lv,normal_pars_fragment:Uv,normal_pars_vertex:Nv,normal_vertex:Fv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:Bv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Hv,opaque_fragment:Gv,packing:kv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:jv,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:Zv,shadowmap_vertex:Jv,shadowmask_pars_fragment:Qv,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:fx,uv_vertex:dx,worldpos_vertex:hx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:vx,cube_frag:xx,depth_vert:Mx,depth_frag:Sx,distance_vert:yx,distance_frag:bx,equirect_vert:Ex,equirect_frag:Tx,linedashed_vert:wx,linedashed_frag:Ax,meshbasic_vert:Cx,meshbasic_frag:Rx,meshlambert_vert:Px,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Lx,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:zx,meshtoon_vert:Vx,meshtoon_frag:Hx,points_vert:Gx,points_frag:kx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},Re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Vn={basic:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wt([Re.points,Re.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wt([Re.common,Re.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wt([Re.sprite,Re.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Wt([Re.common,Re.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Wt([Re.lights,Re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Vn.physical={uniforms:Wt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ro={r:0,b:0,g:0},Xi=new sr,jx=new xt;function Kx(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,f=null,g=0,_=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function y(T){let E=!1;const N=v(T);N===null?p(a,l):N&&N.isColor&&(p(N,1),E=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const N=v(E);N&&(N.isCubeTexture||N.mapping===$o)?(u===void 0&&(u=new En(new Is(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Gr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xi.copy(E.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Xi)),u.material.toneMapped=it.getTransfer(N.colorSpace)!==ut,(f!==N||g!==N.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,f=N,g=N.version,_=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new En(new Jo(2,2),new Ln({name:"BackgroundMaterial",uniforms:Gr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=it.getTransfer(N.colorSpace)!==ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||g!==N.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,f=N,g=N.version,_=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(ro,Th(n)),i.buffers.color.setClear(ro.r,ro.g,ro.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:y,addToRenderList:m,dispose:A}}function $x(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=g(null);let s=r,o=!1;function a(d,b,D,k,Y){let j=!1;const H=f(k,D,b);s!==H&&(s=H,c(s.object)),j=_(d,k,D,Y),j&&v(d,k,D,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,E(d,b,D,k),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(d){return n.bindVertexArray(d)}function u(d){return n.deleteVertexArray(d)}function f(d,b,D){const k=D.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let j=Y[b.id];j===void 0&&(j={},Y[b.id]=j);let H=j[k];return H===void 0&&(H=g(l()),j[k]=H),H}function g(d){const b=[],D=[],k=[];for(let Y=0;Y<t;Y++)b[Y]=0,D[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:k,object:d,attributes:{},index:null}}function _(d,b,D,k){const Y=s.attributes,j=b.attributes;let H=0;const W=D.getAttributes();for(const J in W)if(W[J].location>=0){const de=Y[J];let xe=j[J];if(xe===void 0&&(J==="instanceMatrix"&&d.instanceMatrix&&(xe=d.instanceMatrix),J==="instanceColor"&&d.instanceColor&&(xe=d.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function v(d,b,D,k){const Y={},j=b.attributes;let H=0;const W=D.getAttributes();for(const J in W)if(W[J].location>=0){let de=j[J];de===void 0&&(J==="instanceMatrix"&&d.instanceMatrix&&(de=d.instanceMatrix),J==="instanceColor"&&d.instanceColor&&(de=d.instanceColor));const xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),Y[J]=xe,H++}s.attributes=Y,s.attributesNum=H,s.index=k}function y(){const d=s.newAttributes;for(let b=0,D=d.length;b<D;b++)d[b]=0}function m(d){p(d,0)}function p(d,b){const D=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;D[d]=1,k[d]===0&&(n.enableVertexAttribArray(d),k[d]=1),Y[d]!==b&&(n.vertexAttribDivisor(d,b),Y[d]=b)}function A(){const d=s.newAttributes,b=s.enabledAttributes;for(let D=0,k=b.length;D<k;D++)b[D]!==d[D]&&(n.disableVertexAttribArray(D),b[D]=0)}function T(d,b,D,k,Y,j,H){H===!0?n.vertexAttribIPointer(d,b,D,Y,j):n.vertexAttribPointer(d,b,D,k,Y,j)}function E(d,b,D,k){y();const Y=k.attributes,j=D.getAttributes(),H=b.defaultAttributeValues;for(const W in j){const J=j[W];if(J.location>=0){let he=Y[W];if(he===void 0&&(W==="instanceMatrix"&&d.instanceMatrix&&(he=d.instanceMatrix),W==="instanceColor"&&d.instanceColor&&(he=d.instanceColor)),he!==void 0){const de=he.normalized,xe=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;const Oe=Ne.buffer,je=Ne.type,et=Ne.bytesPerElement,ue=je===n.INT||je===n.UNSIGNED_INT||he.gpuType===Ac;if(he.isInterleavedBufferAttribute){const me=he.data,ie=me.stride,w=he.offset;if(me.isInstancedInterleavedBuffer){for(let F=0;F<J.locationSize;F++)p(J.location+F,me.meshPerAttribute);d.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let F=0;F<J.locationSize;F++)m(J.location+F);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let F=0;F<J.locationSize;F++)T(J.location+F,xe/J.locationSize,je,de,ie*et,(w+xe/J.locationSize*F)*et,ue)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<J.locationSize;me++)p(J.location+me,he.meshPerAttribute);d.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<J.locationSize;me++)m(J.location+me);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let me=0;me<J.locationSize;me++)T(J.location+me,xe/J.locationSize,je,de,xe*et,xe/J.locationSize*me*et,ue)}}else if(H!==void 0){const de=H[W];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(J.location,de);break;case 3:n.vertexAttrib3fv(J.location,de);break;case 4:n.vertexAttrib4fv(J.location,de);break;default:n.vertexAttrib1fv(J.location,de)}}}}A()}function N(){S();for(const d in i){const b=i[d];for(const D in b){const k=b[D];for(const Y in k)u(k[Y].object),delete k[Y];delete b[D]}delete i[d]}}function M(d){if(i[d.id]===void 0)return;const b=i[d.id];for(const D in b){const k=b[D];for(const Y in k)u(k[Y].object),delete k[Y];delete b[D]}delete i[d.id]}function R(d){for(const b in i){const D=i[b];if(D[d.id]===void 0)continue;const k=D[d.id];for(const Y in k)u(k[Y].object),delete k[Y];delete D[d.id]}}function S(){h(),o=!0,s!==r&&(s=r,c(s.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:h,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Zx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,i,1)}function l(c,u,f,g){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)o(c[v],u[v],g[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,u,0,g,0,f);let v=0;for(let y=0;y<f;y++)v+=u[y]*g[y];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!S)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,maxSamples:N,samples:M}}function Qx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const _=f.length!==0||g||i!==0||r;return r=g,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,g){t=u(f,g,0)},this.setState=function(f,g,_){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let E=p.clippingState||null;l.value=E,E=u(v,g,T,_);for(let N=0;N!==T;++N)E[N]=t[N];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,g,_,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const p=_+y*4,A=g.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=_;T!==y;++T,E+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function eM(n){let e=new WeakMap;function t(o,a){return a===bl?o.mapping=ir:a===El&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Pi=4,Ju=[.125,.215,.35,.446,.526,.582],Ki=20,tM=256,es=new gs,Qu=new ot;let za=null,Va=0,Ha=0,Ga=!1;const nM=new X;class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=nM}=s;za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Va,Ha),this._renderer.xr.enabled=Ga,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:pi,format:Rn,colorSpace:Vr,depthBuffer:!1},r=tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iM(s)),this._blurMaterial=sM(s,e,t),this._ggxMaterial=rM(s,e,t)}return r}_compileMaterial(e){const t=new En(new Un,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,i,r,s){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,_=f.toneMapping;f.getClearColor(Qu),f.toneMapping=Yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new Is,new yh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(Qu),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const N=this._cubeSize;Er(r,E*N,T>2?N:0,N,N),f.setRenderTarget(r),p&&f.render(y,l),f.render(e,l)}f.toneMapping=_,f.autoClear=g,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ir||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),g=0+c*1.25,_=f*g,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Pi?i-v+Pi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=_,l.mipInt.value=v-t,Er(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,es),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Er(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(a,es)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const g=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ki-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Ki;m>Ki&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let A=0;for(let R=0;R<Ki;++R){const S=R/y,h=Math.exp(-S*S/2);p.push(h),R===0?A+=h:R<m&&(A+=2*h)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;g.envMap.value=e.texture,g.samples.value=m,g.weights.value=p,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:T}=this;g.dTheta.value=v,g.mipInt.value=T-i;const E=this._sizeLods[r],N=3*E*(r>T-Pi?r-T+Pi:0),M=4*(this._cubeSize-E);Er(t,N,M,3*E,2*E),l.setRenderTarget(t),l.render(f,es)}}function iM(n){const e=[],t=[],i=[];let r=n;const s=n-Pi+1+Ju.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Pi?l=Ju[o-n+Pi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,g=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,y=3,m=2,p=1,A=new Float32Array(y*v*_),T=new Float32Array(m*v*_),E=new Float32Array(p*v*_);for(let M=0;M<_;M++){const R=M%3*2/3-1,S=M>2?0:-1,h=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];A.set(h,y*v*M),T.set(g,m*v*M);const d=[M,M,M,M,M,M];E.set(d,p*v*M)}const N=new Un;N.setAttribute("position",new yn(A,y)),N.setAttribute("uv",new yn(T,m)),N.setAttribute("faceIndex",new yn(E,p)),i.push(new En(N,null)),r>Pi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tf(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rM(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function sM(n,e,t){const i=new Float32Array(Ki),r=new X(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function nf(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function rf(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function oM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bl||l===El,u=l===ir||l===Br;if(c||u){let f=e.get(a);const g=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return c&&_&&_.height>0||u&&_&&r(_)?(t===null&&(t=new ef(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function aM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function lM(n,e,t,i){const r={},s=new WeakMap;function o(f){const g=f.target;g.index!==null&&e.remove(g.index);for(const v in g.attributes)e.remove(g.attributes[v]);g.removeEventListener("dispose",o),delete r[g.id];const _=s.get(g);_&&(e.remove(_),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(f,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function l(f){const g=f.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function c(f){const g=[],_=f.index,v=f.attributes.position;let y=0;if(_!==null){const A=_.array;y=_.version;for(let T=0,E=A.length;T<E;T+=3){const N=A[T+0],M=A[T+1],R=A[T+2];g.push(N,M,M,R,R,N)}}else if(v!==void 0){const A=v.array;y=v.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const N=T+0,M=T+1,R=T+2;g.push(N,M,M,R,R,N)}}else return;const m=new(vh(g)?Eh:bh)(g,1);m.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const g=s.get(f);if(g){const _=f.index;_!==null&&g.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cM(n,e,t){let i;function r(g){i=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function l(g,_){n.drawElements(i,_,s,g*o),t.update(_,i,1)}function c(g,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,g*o,v),t.update(_,i,v))}function u(g,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,g,0,v);let m=0;for(let p=0;p<v;p++)m+=_[p];t.update(m,i,1)}function f(g,_,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g.length;p++)c(g[p]/o,_[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,g,0,y,0,v);let p=0;for(let A=0;A<v;A++)p+=_[A]*y[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fM(n,e,t){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let g=i.get(a);if(g===void 0||g.count!==f){let d=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",d)};var _=d;g!==void 0&&g.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let N=a.attributes.position.count*E,M=1;N>e.maxTextureSize&&(M=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const R=new Float32Array(N*M*4*f),S=new Mh(R,N,M,f);S.type=kn,S.needsUpdate=!0;const h=E*4;for(let b=0;b<f;b++){const D=p[b],k=A[b],Y=T[b],j=N*M*4*b;for(let H=0;H<D.count;H++){const W=H*h;v===!0&&(r.fromBufferAttribute(D,H),R[j+W+0]=r.x,R[j+W+1]=r.y,R[j+W+2]=r.z,R[j+W+3]=0),y===!0&&(r.fromBufferAttribute(k,H),R[j+W+4]=r.x,R[j+W+5]=r.y,R[j+W+6]=r.z,R[j+W+7]=0),m===!0&&(r.fromBufferAttribute(Y,H),R[j+W+8]=r.x,R[j+W+9]=r.y,R[j+W+10]=r.z,R[j+W+11]=Y.itemSize===4?r.w:1)}}g={count:f,texture:S,size:new ke(N,M)},i.set(a,g),a.addEventListener("dispose",d)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:s}}function dM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==c&&(g.update(),r.set(g,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hM={[ih]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[ch]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function pM(n,e,t,i,r){const s=new jn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new jn(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),a=new Un;a.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new bn([0,2,0,0,2,0],2));const l=new r0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new En(a,l),u=new gs(-1,1,1,-1,0,1);let f=null,g=null,_=!1,v,y=null,m=[],p=!1;this.setSize=function(A,T){s.setSize(A,T),o.setSize(A,T);for(let E=0;E<m.length;E++){const N=m[E];N.setSize&&N.setSize(A,T)}},this.setEffects=function(A){m=A,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,E=s.height;for(let N=0;N<m.length;N++){const M=m[N];M.setSize&&M.setSize(T,E)}},this.begin=function(A,T){if(_||A.toneMapping===Yn&&m.length===0)return!1;if(y=T,T!==null){const E=T.width,N=T.height;(s.width!==E||s.height!==N)&&this.setSize(E,N)}return p===!1&&A.setRenderTarget(s),v=A.toneMapping,A.toneMapping=Yn,!0},this.hasRenderPass=function(){return p},this.end=function(A,T){A.toneMapping=v,_=!0;let E=s,N=o;for(let M=0;M<m.length;M++){const R=m[M];if(R.enabled!==!1&&(R.render(A,N,E,T),R.needsSwap!==!1)){const S=E;E=N,N=S}}if(f!==A.outputColorSpace||g!==A.toneMapping){f=A.outputColorSpace,g=A.toneMapping,l.defines={},it.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const M=hM[g];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,A.setRenderTarget(y),A.render(c,u),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Lh=new jt,ac=new ws(1,1),Uh=new Mh,Nh=new N_,Fh=new Ch,sf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function Xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sf[r];if(s===void 0&&(s=new Float32Array(r),sf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Pt(t,i)}}function MM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Pt(t,i)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Pt(t,i)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function wM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function PM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ac.compareFunction=t.isReversedDepthBuffer()?Uc:Lc,s=ac):s=Lh,t.setTexture2D(e||s,r)}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nh,r)}function IM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fh,r)}function LM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uh,r)}function UM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return yM;case 35667:case 35671:return bM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return LM}}function NM(n,e){n.uniform1fv(this.addr,e)}function FM(n,e){const t=Xr(e,this.size,2);n.uniform2fv(this.addr,t)}function OM(n,e){const t=Xr(e,this.size,3);n.uniform3fv(this.addr,t)}function BM(n,e){const t=Xr(e,this.size,4);n.uniform4fv(this.addr,t)}function zM(n,e){const t=Xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VM(n,e){const t=Xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HM(n,e){const t=Xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GM(n,e){n.uniform1iv(this.addr,e)}function kM(n,e){n.uniform2iv(this.addr,e)}function WM(n,e){n.uniform3iv(this.addr,e)}function XM(n,e){n.uniform4iv(this.addr,e)}function qM(n,e){n.uniform1uiv(this.addr,e)}function YM(n,e){n.uniform2uiv(this.addr,e)}function jM(n,e){n.uniform3uiv(this.addr,e)}function KM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ac:o=Lh;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function ZM(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nh,s[o])}function JM(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fh,s[o])}function QM(n,e,t){const i=this.cache,r=e.length,s=ea(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uh,s[o])}function eS(n){switch(n){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return BM;case 35674:return zM;case 35675:return VM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return kM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return jM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class tS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UM(t.type)}}class nS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function uf(n,e){n.seq.push(e),n.map[e.id]=e}function rS(n,e,t){const i=n.name,r=i.length;for(ka.lastIndex=0;;){const s=ka.exec(i),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){uf(t,c===void 0?new tS(a,n,e):new nS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iS(a),uf(t,f)),t=f}}}class _o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);rS(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ff(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sS=37297;let oS=0;function aS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const df=new $e;function lS(n){it._getMatrix(df,it.workingColorSpace,n);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ao:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+aS(n.getShaderSource(e),a)}else return s}function cS(n,e){const t=lS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uS={[ih]:"Linear",[rh]:"Reinhard",[sh]:"Cineon",[oh]:"ACESFilmic",[lh]:"AgX",[ch]:"Neutral",[ah]:"Custom"};function fS(n,e){const t=uS[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new X;function dS(){it.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function pS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function pf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(gS,vS)}const _S=new Map;function vS(n,e){let t=Ze[e];if(t===void 0){const i=_S.get(e);if(i!==void 0)t=Ze[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(xS,MS)}function MS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _f(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SS={[fo]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function yS(n){return SS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bS={[ir]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function ES(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const TS={[Br]:"ENVMAP_MODE_REFRACTION"};function wS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":TS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AS={[nh]:"ENVMAP_BLENDING_MULTIPLY",[e_]:"ENVMAP_BLENDING_MIX",[t_]:"ENVMAP_BLENDING_ADD"};function CS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":AS[n.combine]||"ENVMAP_BLENDING_NONE"}function RS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yS(t),c=ES(t),u=wS(t),f=CS(t),g=RS(t),_=hS(t),v=pS(s),y=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Yn?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=lc(o),o=pf(o,t),o=mf(o,t),a=lc(a),a=pf(a,t),a=mf(a,t),o=gf(o),a=gf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,E=A+p+a,N=ff(r,r.VERTEX_SHADER,T),M=ff(r,r.FRAGMENT_SHADER,E);r.attachShader(y,N),r.attachShader(y,M),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(b){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(y)||"",k=r.getShaderInfoLog(N)||"",Y=r.getShaderInfoLog(M)||"",j=D.trim(),H=k.trim(),W=Y.trim();let J=!0,he=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,M);else{const de=hf(r,N,"vertex"),xe=hf(r,M,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+de+`
`+xe)}else j!==""?Xe("WebGLProgram: Program Info Log:",j):(H===""||W==="")&&(he=!1);he&&(b.diagnostics={runnable:J,programLog:j,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(N),r.deleteShader(M),S=new _o(r,y),h=mS(r,y)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let h;this.getAttributes=function(){return h===void 0&&R(this),h};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=r.getProgramParameter(y,sS)),d},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=M,this}let DS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LS(e),t.set(e,i)),i}}class LS{constructor(e){this.id=DS++,this.code=e,this.usedTimes=0}}function US(n,e,t,i,r,s,o){const a=new Oc,l=new IS,c=new Set,u=[],f=new Map,g=r.logarithmicDepthBuffer;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(h){return c.add(h),h===0?"uv":`uv${h}`}function m(h,d,b,D,k){const Y=D.fog,j=k.geometry,H=h.isMeshStandardMaterial?D.environment:null,W=(h.isMeshStandardMaterial?t:e).get(h.envMap||H),J=W&&W.mapping===$o?W.image.height:null,he=v[h.type];h.precision!==null&&(_=r.getMaxPrecision(h.precision),_!==h.precision&&Xe("WebGLProgram.getParameters:",h.precision,"not supported, using",_,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xe=de!==void 0?de.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let Oe,je,et,ue;if(he){const tt=Vn[he];Oe=tt.vertexShader,je=tt.fragmentShader}else Oe=h.vertexShader,je=h.fragmentShader,l.update(h),et=l.getVertexShaderID(h),ue=l.getFragmentShaderID(h);const me=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),w=k.isInstancedMesh===!0,F=k.isBatchedMesh===!0,G=!!h.map,P=!!h.matcap,L=!!W,B=!!h.aoMap,$=!!h.lightMap,K=!!h.bumpMap,se=!!h.normalMap,U=!!h.displacementMap,fe=!!h.emissiveMap,ce=!!h.metalnessMap,ne=!!h.roughnessMap,le=h.anisotropy>0,C=h.clearcoat>0,x=h.dispersion>0,z=h.iridescence>0,te=h.sheen>0,ae=h.transmission>0,Z=le&&!!h.anisotropyMap,Ce=C&&!!h.clearcoatMap,ve=C&&!!h.clearcoatNormalMap,Pe=C&&!!h.clearcoatRoughnessMap,Ue=z&&!!h.iridescenceMap,ge=z&&!!h.iridescenceThicknessMap,Ee=te&&!!h.sheenColorMap,Te=te&&!!h.sheenRoughnessMap,O=!!h.specularMap,Q=!!h.specularColorMap,ye=!!h.specularIntensityMap,V=ae&&!!h.transmissionMap,Se=ae&&!!h.thicknessMap,_e=!!h.gradientMap,we=!!h.alphaMap,Me=h.alphaTest>0,pe=!!h.alphaHash,be=!!h.extensions;let Be=Yn;h.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Be=n.toneMapping);const rt={shaderID:he,shaderType:h.type,shaderName:h.name,vertexShader:Oe,fragmentShader:je,defines:h.defines,customVertexShaderID:et,customFragmentShaderID:ue,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:_,batching:F,batchingColor:F&&k._colorsTexture!==null,instancing:w,instancingColor:w&&k.instanceColor!==null,instancingMorph:w&&k.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Vr,alphaToCoverage:!!h.alphaToCoverage,map:G,matcap:P,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:J,aoMap:B,lightMap:$,bumpMap:K,normalMap:se,displacementMap:U,emissiveMap:fe,normalMapObjectSpace:se&&h.normalMapType===s_,normalMapTangentSpace:se&&h.normalMapType===r_,metalnessMap:ce,roughnessMap:ne,anisotropy:le,anisotropyMap:Z,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:ve,clearcoatRoughnessMap:Pe,dispersion:x,iridescence:z,iridescenceMap:Ue,iridescenceThicknessMap:ge,sheen:te,sheenColorMap:Ee,sheenRoughnessMap:Te,specularMap:O,specularColorMap:Q,specularIntensityMap:ye,transmission:ae,transmissionMap:V,thicknessMap:Se,gradientMap:_e,opaque:h.transparent===!1&&h.blending===Pr&&h.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:pe,combine:h.combine,mapUv:G&&y(h.map.channel),aoMapUv:B&&y(h.aoMap.channel),lightMapUv:$&&y(h.lightMap.channel),bumpMapUv:K&&y(h.bumpMap.channel),normalMapUv:se&&y(h.normalMap.channel),displacementMapUv:U&&y(h.displacementMap.channel),emissiveMapUv:fe&&y(h.emissiveMap.channel),metalnessMapUv:ce&&y(h.metalnessMap.channel),roughnessMapUv:ne&&y(h.roughnessMap.channel),anisotropyMapUv:Z&&y(h.anisotropyMap.channel),clearcoatMapUv:Ce&&y(h.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&y(h.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&y(h.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&y(h.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&y(h.sheenColorMap.channel),sheenRoughnessMapUv:Te&&y(h.sheenRoughnessMap.channel),specularMapUv:O&&y(h.specularMap.channel),specularColorMapUv:Q&&y(h.specularColorMap.channel),specularIntensityMapUv:ye&&y(h.specularIntensityMap.channel),transmissionMapUv:V&&y(h.transmissionMap.channel),thicknessMapUv:Se&&y(h.thicknessMap.channel),alphaMapUv:we&&y(h.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(se||le),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(G||we),fog:!!Y,useFog:h.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:h.flatShading===!0&&h.wireframe===!1,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:h.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:G&&h.map.isVideoTexture===!0&&it.getTransfer(h.map.colorSpace)===ut,decodeVideoTextureEmissive:fe&&h.emissiveMap.isVideoTexture===!0&&it.getTransfer(h.emissiveMap.colorSpace)===ut,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Hn,flipSided:h.side===on,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:be&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&h.extensions.multiDraw===!0||F)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(h){const d=[];if(h.shaderID?d.push(h.shaderID):(d.push(h.customVertexShaderID),d.push(h.customFragmentShaderID)),h.defines!==void 0)for(const b in h.defines)d.push(b),d.push(h.defines[b]);return h.isRawShaderMaterial===!1&&(A(d,h),T(d,h),d.push(n.outputColorSpace)),d.push(h.customProgramCacheKey),d.join()}function A(h,d){h.push(d.precision),h.push(d.outputColorSpace),h.push(d.envMapMode),h.push(d.envMapCubeUVHeight),h.push(d.mapUv),h.push(d.alphaMapUv),h.push(d.lightMapUv),h.push(d.aoMapUv),h.push(d.bumpMapUv),h.push(d.normalMapUv),h.push(d.displacementMapUv),h.push(d.emissiveMapUv),h.push(d.metalnessMapUv),h.push(d.roughnessMapUv),h.push(d.anisotropyMapUv),h.push(d.clearcoatMapUv),h.push(d.clearcoatNormalMapUv),h.push(d.clearcoatRoughnessMapUv),h.push(d.iridescenceMapUv),h.push(d.iridescenceThicknessMapUv),h.push(d.sheenColorMapUv),h.push(d.sheenRoughnessMapUv),h.push(d.specularMapUv),h.push(d.specularColorMapUv),h.push(d.specularIntensityMapUv),h.push(d.transmissionMapUv),h.push(d.thicknessMapUv),h.push(d.combine),h.push(d.fogExp2),h.push(d.sizeAttenuation),h.push(d.morphTargetsCount),h.push(d.morphAttributeCount),h.push(d.numDirLights),h.push(d.numPointLights),h.push(d.numSpotLights),h.push(d.numSpotLightMaps),h.push(d.numHemiLights),h.push(d.numRectAreaLights),h.push(d.numDirLightShadows),h.push(d.numPointLightShadows),h.push(d.numSpotLightShadows),h.push(d.numSpotLightShadowsWithMaps),h.push(d.numLightProbes),h.push(d.shadowMapType),h.push(d.toneMapping),h.push(d.numClippingPlanes),h.push(d.numClipIntersection),h.push(d.depthPacking)}function T(h,d){a.disableAll(),d.instancing&&a.enable(0),d.instancingColor&&a.enable(1),d.instancingMorph&&a.enable(2),d.matcap&&a.enable(3),d.envMap&&a.enable(4),d.normalMapObjectSpace&&a.enable(5),d.normalMapTangentSpace&&a.enable(6),d.clearcoat&&a.enable(7),d.iridescence&&a.enable(8),d.alphaTest&&a.enable(9),d.vertexColors&&a.enable(10),d.vertexAlphas&&a.enable(11),d.vertexUv1s&&a.enable(12),d.vertexUv2s&&a.enable(13),d.vertexUv3s&&a.enable(14),d.vertexTangents&&a.enable(15),d.anisotropy&&a.enable(16),d.alphaHash&&a.enable(17),d.batching&&a.enable(18),d.dispersion&&a.enable(19),d.batchingColor&&a.enable(20),d.gradientMap&&a.enable(21),h.push(a.mask),a.disableAll(),d.fog&&a.enable(0),d.useFog&&a.enable(1),d.flatShading&&a.enable(2),d.logarithmicDepthBuffer&&a.enable(3),d.reversedDepthBuffer&&a.enable(4),d.skinning&&a.enable(5),d.morphTargets&&a.enable(6),d.morphNormals&&a.enable(7),d.morphColors&&a.enable(8),d.premultipliedAlpha&&a.enable(9),d.shadowMapEnabled&&a.enable(10),d.doubleSided&&a.enable(11),d.flipSided&&a.enable(12),d.useDepthPacking&&a.enable(13),d.dithering&&a.enable(14),d.transmission&&a.enable(15),d.sheen&&a.enable(16),d.opaque&&a.enable(17),d.pointsUvs&&a.enable(18),d.decodeVideoTexture&&a.enable(19),d.decodeVideoTextureEmissive&&a.enable(20),d.alphaToCoverage&&a.enable(21),h.push(a.mask)}function E(h){const d=v[h.type];let b;if(d){const D=Vn[d];b=wh.clone(D.uniforms)}else b=h.uniforms;return b}function N(h,d){let b=f.get(d);return b!==void 0?++b.usedTimes:(b=new PS(n,d,h,s),u.push(b),f.set(d,b)),b}function M(h){if(--h.usedTimes===0){const d=u.indexOf(h);u[d]=u[u.length-1],u.pop(),f.delete(h.cacheKey),h.destroy()}}function R(h){l.remove(h)}function S(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:N,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:S}}function NS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,g,_,v,y,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:g,material:_,groupOrder:v,renderOrder:f.renderOrder,z:y,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=g,p.material=_,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=y,p.group=m),e++,p}function a(f,g,_,v,y,m){const p=o(f,g,_,v,y,m);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):t.push(p)}function l(f,g,_,v,y,m){const p=o(f,g,_,v,y,m);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,g){t.length>1&&t.sort(f||FS),i.length>1&&i.sort(g||vf),r.length>1&&r.sort(g||vf)}function u(){for(let f=e,g=n.length;f<g;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function OS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new xf,n.set(i,[o])):r>=s.length?(o=new xf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function zS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VS=0;function HS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GS(n){const e=new BS,t=zS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new xt,o=new xt;function a(c){let u=0,f=0,g=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let _=0,v=0,y=0,m=0,p=0,A=0,T=0,E=0,N=0,M=0,R=0;c.sort(HS);for(let h=0,d=c.length;h<d;h++){const b=c[h],D=b.color,k=b.intensity,Y=b.distance;let j=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===zr?j=b.shadow.map.texture:j=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=D.r*k,f+=D.g*k,g+=D.b*k;else if(b.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],k);R++}else if(b.isDirectionalLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const W=b.shadow,J=t.get(b);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=b.shadow.matrix,A++}i.directional[_]=H,_++}else if(b.isSpotLight){const H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(D).multiplyScalar(k),H.distance=Y,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[y]=H;const W=b.shadow;if(b.map&&(i.spotLightMap[N]=b.map,N++,W.updateMatrices(b),b.castShadow&&M++),i.spotLightMatrix[y]=W.matrix,b.castShadow){const J=t.get(b);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=j,E++}y++}else if(b.isRectAreaLight){const H=e.get(b);H.color.copy(D).multiplyScalar(k),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=H,m++}else if(b.isPointLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const W=b.shadow,J=t.get(b);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=b.shadow.matrix,T++}i.point[v]=H,v++}else if(b.isHemisphereLight){const H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(k),H.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==y||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==A||S.numPointShadows!==T||S.numSpotShadows!==E||S.numSpotMaps!==N||S.numLightProbes!==R)&&(i.directional.length=_,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+N-M,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,S.directionalLength=_,S.pointLength=v,S.spotLength=y,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=A,S.numPointShadows=T,S.numSpotShadows=E,S.numSpotMaps=N,S.numLightProbes=R,i.version=VS++)}function l(c,u){let f=0,g=0,_=0,v=0,y=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const E=i.point[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),g++}else if(T.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Mf(n){const e=new GS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Mf(n),e.set(r,[a])):s>=o.length?(a=new Mf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],YS=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Sf=new xt,ts=new X,Wa=new X;function jS(n,e,t){let i=new Ph;const r=new ke,s=new ke,o=new Tt,a=new s0,l=new o0,c={},u=t.maxTextureSize,f={[Ni]:on,[on]:Ni,[Hn]:Hn},g=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new En(v,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let p=this.type;this.render=function(M,R,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;M.type===Ng&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),M.type=fo);const h=n.getRenderTarget(),d=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),D=n.state;D.setBlending(li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(j=>j.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,j=M.length;Y<j;Y++){const H=M[Y],W=H.shadow;if(W===void 0){Xe("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const J=W.getFrameExtents();if(r.multiply(J),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,W.mapSize.y=s.y)),W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===rs){if(H.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new jn(r.x,r.y,{format:zr,type:pi,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new ws(r.x,r.y,kn),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=mi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt}else{H.isPointLight?(W.map=new Rh(r.x),W.map.depthTexture=new i0(r.x,$n)):(W.map=new jn(r.x,r.y),W.map.depthTexture=new ws(r.x,r.y,$n)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=mi;const de=n.state.buffers.depth.getReversed();this.type===fo?(W.map.depthTexture.compareFunction=de?Uc:Lc,W.map.depthTexture.minFilter=Vt,W.map.depthTexture.magFilter=Vt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt)}W.camera.updateProjectionMatrix()}const he=W.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<he;de++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,de),n.clear();else{de===0&&(n.setRenderTarget(W.map),n.clear());const xe=W.getViewport(de);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),D.viewport(o)}if(H.isPointLight){const xe=W.camera,Ne=W.matrix,Oe=H.distance||xe.far;Oe!==xe.far&&(xe.far=Oe,xe.updateProjectionMatrix()),ts.setFromMatrixPosition(H.matrixWorld),xe.position.copy(ts),Wa.copy(xe.position),Wa.add(qS[de]),xe.up.copy(YS[de]),xe.lookAt(Wa),xe.updateMatrixWorld(),Ne.makeTranslation(-ts.x,-ts.y,-ts.z),Sf.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Sf,xe.coordinateSystem,xe.reversedDepth)}else W.updateMatrices(H);i=W.getFrustum(),E(R,S,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===rs&&A(W,S),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(h,d,b)};function A(M,R){const S=e.update(y);g.defines.VSM_SAMPLES!==M.blurSamples&&(g.defines.VSM_SAMPLES=M.blurSamples,_.defines.VSM_SAMPLES=M.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new jn(r.x,r.y,{format:zr,type:pi})),g.uniforms.shadow_pass.value=M.map.depthTexture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,S,g,y,null),_.uniforms.shadow_pass.value=M.mapPass.texture,_.uniforms.resolution.value=M.mapSize,_.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,S,_,y,null)}function T(M,R,S,h){let d=null;const b=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)d=b;else if(d=S.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=d.uuid,k=R.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let j=Y[k];j===void 0&&(j=d.clone(),Y[k]=j,R.addEventListener("dispose",N)),d=j}if(d.visible=R.visible,d.wireframe=R.wireframe,h===rs?d.side=R.shadowSide!==null?R.shadowSide:R.side:d.side=R.shadowSide!==null?R.shadowSide:f[R.side],d.alphaMap=R.alphaMap,d.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,d.map=R.map,d.clipShadows=R.clipShadows,d.clippingPlanes=R.clippingPlanes,d.clipIntersection=R.clipIntersection,d.displacementMap=R.displacementMap,d.displacementScale=R.displacementScale,d.displacementBias=R.displacementBias,d.wireframeLinewidth=R.wireframeLinewidth,d.linewidth=R.linewidth,S.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const D=n.properties.get(d);D.light=S}return d}function E(M,R,S,h,d){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&d===rs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const k=e.update(M),Y=M.material;if(Array.isArray(Y)){const j=k.groups;for(let H=0,W=j.length;H<W;H++){const J=j[H],he=Y[J.materialIndex];if(he&&he.visible){const de=T(M,he,h,d);M.onBeforeShadow(n,M,R,S,k,de,J),n.renderBufferDirect(S,null,k,de,M,J),M.onAfterShadow(n,M,R,S,k,de,J)}}}else if(Y.visible){const j=T(M,Y,h,d);M.onBeforeShadow(n,M,R,S,k,j,null),n.renderBufferDirect(S,null,k,j,M,null),M.onAfterShadow(n,M,R,S,k,j,null)}}const D=M.children;for(let k=0,Y=D.length;k<Y;k++)E(D[k],R,S,h,d)}function N(M){M.target.removeEventListener("dispose",N);for(const S in c){const h=c[S],d=M.target.uuid;d in h&&(h[d].dispose(),delete h[d])}}}const KS={[gl]:_l,[vl]:Sl,[xl]:yl,[Or]:Ml,[_l]:gl,[Sl]:vl,[yl]:xl,[Ml]:Or};function $S(n,e){function t(){let V=!1;const Se=new Tt;let _e=null;const we=new Tt(0,0,0,0);return{setMask:function(Me){_e!==Me&&!V&&(n.colorMask(Me,Me,Me,Me),_e=Me)},setLocked:function(Me){V=Me},setClear:function(Me,pe,be,Be,rt){rt===!0&&(Me*=Be,pe*=Be,be*=Be),Se.set(Me,pe,be,Be),we.equals(Se)===!1&&(n.clearColor(Me,pe,be,Be),we.copy(Se))},reset:function(){V=!1,_e=null,we.set(-1,0,0,0)}}}function i(){let V=!1,Se=!1,_e=null,we=null,Me=null;return{setReversed:function(pe){if(Se!==pe){const be=e.get("EXT_clip_control");pe?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Se=pe;const Be=Me;Me=null,this.setClear(Be)}},getReversed:function(){return Se},setTest:function(pe){pe?me(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(pe){_e!==pe&&!V&&(n.depthMask(pe),_e=pe)},setFunc:function(pe){if(Se&&(pe=KS[pe]),we!==pe){switch(pe){case gl:n.depthFunc(n.NEVER);break;case _l:n.depthFunc(n.ALWAYS);break;case vl:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=pe}},setLocked:function(pe){V=pe},setClear:function(pe){Me!==pe&&(Se&&(pe=1-pe),n.clearDepth(pe),Me=pe)},reset:function(){V=!1,_e=null,we=null,Me=null,Se=!1}}}function r(){let V=!1,Se=null,_e=null,we=null,Me=null,pe=null,be=null,Be=null,rt=null;return{setTest:function(tt){V||(tt?me(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!V&&(n.stencilMask(tt),Se=tt)},setFunc:function(tt,Nt,$t){(_e!==tt||we!==Nt||Me!==$t)&&(n.stencilFunc(tt,Nt,$t),_e=tt,we=Nt,Me=$t)},setOp:function(tt,Nt,$t){(pe!==tt||be!==Nt||Be!==$t)&&(n.stencilOp(tt,Nt,$t),pe=tt,be=Nt,Be=$t)},setLocked:function(tt){V=tt},setClear:function(tt){rt!==tt&&(n.clearStencil(tt),rt=tt)},reset:function(){V=!1,Se=null,_e=null,we=null,Me=null,pe=null,be=null,Be=null,rt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},g=new WeakMap,_=[],v=null,y=!1,m=null,p=null,A=null,T=null,E=null,N=null,M=null,R=new ot(0,0,0),S=0,h=!1,d=null,b=null,D=null,k=null,Y=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=W>=2);let he=null,de={};const xe=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Oe=new Tt().fromArray(xe),je=new Tt().fromArray(Ne);function et(V,Se,_e,we){const Me=new Uint8Array(4),pe=n.createTexture();n.bindTexture(V,pe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<_e;be++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Se+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return pe}const ue={};ue[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Or),K(!1),se(bu),me(n.CULL_FACE),B(li);function me(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function ie(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function w(V,Se){return f[V]!==Se?(n.bindFramebuffer(V,Se),f[V]=Se,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function F(V,Se){let _e=_,we=!1;if(V){_e=g.get(Se),_e===void 0&&(_e=[],g.set(Se,_e));const Me=V.textures;if(_e.length!==Me.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,be=Me.length;pe<be;pe++)_e[pe]=n.COLOR_ATTACHMENT0+pe;_e.length=Me.length,we=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,we=!0);we&&n.drawBuffers(_e)}function G(V){return v!==V?(n.useProgram(V),v=V,!0):!1}const P={[ji]:n.FUNC_ADD,[Og]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};P[zg]=n.MIN,P[Vg]=n.MAX;const L={[Hg]:n.ZERO,[Gg]:n.ONE,[kg]:n.SRC_COLOR,[pl]:n.SRC_ALPHA,[Kg]:n.SRC_ALPHA_SATURATE,[Yg]:n.DST_COLOR,[Xg]:n.DST_ALPHA,[Wg]:n.ONE_MINUS_SRC_COLOR,[ml]:n.ONE_MINUS_SRC_ALPHA,[jg]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[$g]:n.CONSTANT_COLOR,[Zg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function B(V,Se,_e,we,Me,pe,be,Be,rt,tt){if(V===li){y===!0&&(ie(n.BLEND),y=!1);return}if(y===!1&&(me(n.BLEND),y=!0),V!==Fg){if(V!==m||tt!==h){if((p!==ji||E!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,E=ji),tt)switch(V){case Pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",V);break}else switch(V){case Pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tu:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",V);break}A=null,T=null,N=null,M=null,R.set(0,0,0),S=0,m=V,h=tt}return}Me=Me||Se,pe=pe||_e,be=be||we,(Se!==p||Me!==E)&&(n.blendEquationSeparate(P[Se],P[Me]),p=Se,E=Me),(_e!==A||we!==T||pe!==N||be!==M)&&(n.blendFuncSeparate(L[_e],L[we],L[pe],L[be]),A=_e,T=we,N=pe,M=be),(Be.equals(R)===!1||rt!==S)&&(n.blendColor(Be.r,Be.g,Be.b,rt),R.copy(Be),S=rt),m=V,h=!1}function $(V,Se){V.side===Hn?ie(n.CULL_FACE):me(n.CULL_FACE);let _e=V.side===on;Se&&(_e=!_e),K(_e),V.blending===Pr&&V.transparent===!1?B(li):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const we=V.stencilWrite;a.setTest(we),we&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(V){d!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),d=V)}function se(V){V!==Lg?(me(n.CULL_FACE),V!==b&&(V===bu?n.cullFace(n.BACK):V===Ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),b=V}function U(V){V!==D&&(H&&n.lineWidth(V),D=V)}function fe(V,Se,_e){V?(me(n.POLYGON_OFFSET_FILL),(k!==Se||Y!==_e)&&(n.polygonOffset(Se,_e),k=Se,Y=_e)):ie(n.POLYGON_OFFSET_FILL)}function ce(V){V?me(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function ne(V){V===void 0&&(V=n.TEXTURE0+j-1),he!==V&&(n.activeTexture(V),he=V)}function le(V,Se,_e){_e===void 0&&(he===null?_e=n.TEXTURE0+j-1:_e=he);let we=de[_e];we===void 0&&(we={type:void 0,texture:void 0},de[_e]=we),(we.type!==V||we.texture!==Se)&&(he!==_e&&(n.activeTexture(_e),he=_e),n.bindTexture(V,Se||ue[V]),we.type=V,we.texture=Se)}function C(){const V=de[he];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function te(){try{n.texSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ve(){try{n.texStorage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Pe(){try{n.texStorage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ue(){try{n.texImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function ge(){try{n.texImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ee(V){Oe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function Te(V){je.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),je.copy(V))}function O(V,Se){let _e=c.get(Se);_e===void 0&&(_e=new WeakMap,c.set(Se,_e));let we=_e.get(V);we===void 0&&(we=n.getUniformBlockIndex(Se,V.name),_e.set(V,we))}function Q(V,Se){const we=c.get(Se).get(V);l.get(Se)!==we&&(n.uniformBlockBinding(Se,we,V.__bindingPointIndex),l.set(Se,we))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,de={},f={},g=new WeakMap,_=[],v=null,y=!1,m=null,p=null,A=null,T=null,E=null,N=null,M=null,R=new ot(0,0,0),S=0,h=!1,d=null,b=null,D=null,k=null,Y=null,Oe.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:ie,bindFramebuffer:w,drawBuffers:F,useProgram:G,setBlending:B,setMaterial:$,setFlipSided:K,setCullFace:se,setLineWidth:U,setPolygonOffset:fe,setScissorTest:ce,activeTexture:ne,bindTexture:le,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Ue,texImage3D:ge,updateUBOMapping:O,uniformBlockBinding:Q,texStorage2D:ve,texStorage3D:Pe,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ce,scissor:Ee,viewport:Te,reset:ye}}function ZS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return _?new OffscreenCanvas(C,x):Ro("canvas")}function y(C,x,z){let te=1;const ae=le(C);if((ae.width>z||ae.height>z)&&(te=z/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(te*ae.width),Ce=Math.floor(te*ae.height);f===void 0&&(f=v(Z,Ce));const ve=x?v(Z,Ce):f;return ve.width=Z,ve.height=Ce,ve.getContext("2d").drawImage(C,0,0,Z,Ce),Xe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Z+"x"+Ce+")."),ve}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,x,z,te,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=x;if(x===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){const Ce=ae?Ao:it.getTransfer(te);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=Ce===ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(C,x){let z;return C?x===null||x===$n||x===bs?z=n.DEPTH24_STENCIL8:x===kn?z=n.DEPTH32F_STENCIL8:x===ys&&(z=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===bs?z=n.DEPTH_COMPONENT24:x===kn?z=n.DEPTH_COMPONENT32F:x===ys&&(z=n.DEPTH_COMPONENT16),z}function N(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function M(C){const x=C.target;x.removeEventListener("dispose",M),S(x),x.isVideoTexture&&u.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),d(x)}function S(C){const x=i.get(C);if(x.__webglInit===void 0)return;const z=C.source,te=g.get(z);if(te){const ae=te[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&h(C),Object.keys(te).length===0&&g.delete(z)}i.remove(C)}function h(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const z=C.source,te=g.get(z);delete te[x.__cacheKey],o.memory.textures--}function d(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ae=0;ae<x.__webglFramebuffer[te].length;ae++)n.deleteFramebuffer(x.__webglFramebuffer[te][ae]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=C.textures;for(let te=0,ae=z.length;te<ae;te++){const Z=i.get(z[te]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[te])}i.remove(C)}let b=0;function D(){b=0}function k(){const C=b;return C>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),b+=1,C}function Y(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function j(C,x){const z=i.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const te=C.image;if(te===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,C,x);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function H(C,x){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ue(z,C,x);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function W(C,x){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ue(z,C,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function J(C,x){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){me(z,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const he={[Tl]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[wl]:n.MIRRORED_REPEAT},de={[Lt]:n.NEAREST,[n_]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},xe={[o_]:n.NEVER,[f_]:n.ALWAYS,[a_]:n.LESS,[Lc]:n.LEQUAL,[l_]:n.EQUAL,[Uc]:n.GEQUAL,[c_]:n.GREATER,[u_]:n.NOTEQUAL};function Ne(C,x){if(x.type===kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===ma||x.magFilter===Bs||x.magFilter===$i||x.minFilter===Vt||x.minFilter===ma||x.minFilter===Bs||x.minFilter===$i)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,he[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Lt||x.minFilter!==Bs&&x.minFilter!==$i||x.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",M));const te=x.source;let ae=g.get(te);ae===void 0&&(ae={},g.set(te,ae));const Z=Y(x);if(Z!==C.__cacheKey){ae[Z]===void 0&&(ae[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ae[Z].usedTimes++;const Ce=ae[C.__cacheKey];Ce!==void 0&&(ae[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&h(x)),C.__cacheKey=Z,C.__webglTexture=ae[Z].texture}return z}function je(C,x,z){return Math.floor(Math.floor(C/z)/x)}function et(C,x,z,te){const Z=C.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,te,x.data);else{Z.sort((ge,Ee)=>ge.start-Ee.start);let Ce=0;for(let ge=1;ge<Z.length;ge++){const Ee=Z[Ce],Te=Z[ge],O=Ee.start+Ee.count,Q=je(Te.start,x.width,4),ye=je(Ee.start,x.width,4);Te.start<=O+1&&Q===ye&&je(Te.start+Te.count-1,x.width,4)===Q?Ee.count=Math.max(Ee.count,Te.start+Te.count-Ee.start):(++Ce,Z[Ce]=Te)}Z.length=Ce+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ge=0,Ee=Z.length;ge<Ee;ge++){const Te=Z[ge],O=Math.floor(Te.start/4),Q=Math.ceil(Te.count/4),ye=O%x.width,V=Math.floor(O/x.width),Se=Q,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ye,V,Se,_e,z,te,x.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function ue(C,x,z){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);const ae=Oe(C,x),Z=x.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+z);const Ce=i.get(Z);if(Z.version!==Ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+z);const ve=it.getPrimaries(it.workingColorSpace),Pe=x.colorSpace===Ri?null:it.getPrimaries(x.colorSpace),Ue=x.colorSpace===Ri||ve===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ge=y(x.image,!1,r.maxTextureSize);ge=ne(x,ge);const Ee=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let O=T(x.internalFormat,Ee,Te,x.colorSpace,x.isVideoTexture);Ne(te,x);let Q;const ye=x.mipmaps,V=x.isVideoTexture!==!0,Se=Ce.__version===void 0||ae===!0,_e=Z.dataReady,we=N(x,ge);if(x.isDepthTexture)O=E(x.format===Zi,x.type),Se&&(V?t.texStorage2D(n.TEXTURE_2D,1,O,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,O,ge.width,ge.height,0,Ee,Te,null));else if(x.isDataTexture)if(ye.length>0){V&&Se&&t.texStorage2D(n.TEXTURE_2D,we,O,ye[0].width,ye[0].height);for(let Me=0,pe=ye.length;Me<pe;Me++)Q=ye[Me],V?_e&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Q.width,Q.height,Ee,Te,Q.data):t.texImage2D(n.TEXTURE_2D,Me,O,Q.width,Q.height,0,Ee,Te,Q.data);x.generateMipmaps=!1}else V?(Se&&t.texStorage2D(n.TEXTURE_2D,we,O,ge.width,ge.height),_e&&et(x,ge,Ee,Te)):t.texImage2D(n.TEXTURE_2D,0,O,ge.width,ge.height,0,Ee,Te,ge.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,O,ye[0].width,ye[0].height,ge.depth);for(let Me=0,pe=ye.length;Me<pe;Me++)if(Q=ye[Me],x.format!==Rn)if(Ee!==null)if(V){if(_e)if(x.layerUpdates.size>0){const be=Zu(Q.width,Q.height,x.format,x.type);for(const Be of x.layerUpdates){const rt=Q.data.subarray(Be*be/Q.data.BYTES_PER_ELEMENT,(Be+1)*be/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Be,Q.width,Q.height,1,Ee,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,ge.depth,Ee,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,O,Q.width,Q.height,ge.depth,0,Q.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,ge.depth,Ee,Te,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,O,Q.width,Q.height,ge.depth,0,Ee,Te,Q.data)}else{V&&Se&&t.texStorage2D(n.TEXTURE_2D,we,O,ye[0].width,ye[0].height);for(let Me=0,pe=ye.length;Me<pe;Me++)Q=ye[Me],x.format!==Rn?Ee!==null?V?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Q.width,Q.height,Ee,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,O,Q.width,Q.height,0,Q.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?_e&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Q.width,Q.height,Ee,Te,Q.data):t.texImage2D(n.TEXTURE_2D,Me,O,Q.width,Q.height,0,Ee,Te,Q.data)}else if(x.isDataArrayTexture)if(V){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,O,ge.width,ge.height,ge.depth),_e)if(x.layerUpdates.size>0){const Me=Zu(ge.width,ge.height,x.format,x.type);for(const pe of x.layerUpdates){const be=ge.data.subarray(pe*Me/ge.data.BYTES_PER_ELEMENT,(pe+1)*Me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ge.width,ge.height,1,Ee,Te,be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Te,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,O,ge.width,ge.height,ge.depth,0,Ee,Te,ge.data);else if(x.isData3DTexture)V?(Se&&t.texStorage3D(n.TEXTURE_3D,we,O,ge.width,ge.height,ge.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Te,ge.data)):t.texImage3D(n.TEXTURE_3D,0,O,ge.width,ge.height,ge.depth,0,Ee,Te,ge.data);else if(x.isFramebufferTexture){if(Se)if(V)t.texStorage2D(n.TEXTURE_2D,we,O,ge.width,ge.height);else{let Me=ge.width,pe=ge.height;for(let be=0;be<we;be++)t.texImage2D(n.TEXTURE_2D,be,O,Me,pe,0,Ee,Te,null),Me>>=1,pe>>=1}}else if(ye.length>0){if(V&&Se){const Me=le(ye[0]);t.texStorage2D(n.TEXTURE_2D,we,O,Me.width,Me.height)}for(let Me=0,pe=ye.length;Me<pe;Me++)Q=ye[Me],V?_e&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ee,Te,Q):t.texImage2D(n.TEXTURE_2D,Me,O,Ee,Te,Q);x.generateMipmaps=!1}else if(V){if(Se){const Me=le(ge);t.texStorage2D(n.TEXTURE_2D,we,O,Me.width,Me.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Te,ge)}else t.texImage2D(n.TEXTURE_2D,0,O,Ee,Te,ge);m(x)&&p(te),Ce.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function me(C,x,z){if(x.image.length!==6)return;const te=Oe(C,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const Z=i.get(ae);if(ae.version!==Z.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const Ce=it.getPrimaries(it.workingColorSpace),ve=x.colorSpace===Ri?null:it.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ri||Ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let pe=0;pe<6;pe++)!Ue&&!ge?Ee[pe]=y(x.image[pe],!0,r.maxCubemapSize):Ee[pe]=ge?x.image[pe].image:x.image[pe],Ee[pe]=ne(x,Ee[pe]);const Te=Ee[0],O=s.convert(x.format,x.colorSpace),Q=s.convert(x.type),ye=T(x.internalFormat,O,Q,x.colorSpace),V=x.isVideoTexture!==!0,Se=Z.__version===void 0||te===!0,_e=ae.dataReady;let we=N(x,Te);Ne(n.TEXTURE_CUBE_MAP,x);let Me;if(Ue){V&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ye,Te.width,Te.height);for(let pe=0;pe<6;pe++){Me=Ee[pe].mipmaps;for(let be=0;be<Me.length;be++){const Be=Me[be];x.format!==Rn?O!==null?V?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,Be.width,Be.height,O,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ye,Be.width,Be.height,0,Be.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,Be.width,Be.height,O,Q,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ye,Be.width,Be.height,0,O,Q,Be.data)}}}else{if(Me=x.mipmaps,V&&Se){Me.length>0&&we++;const pe=le(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,ye,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){V?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee[pe].width,Ee[pe].height,O,Q,Ee[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,Ee[pe].width,Ee[pe].height,0,O,Q,Ee[pe].data);for(let be=0;be<Me.length;be++){const rt=Me[be].image[pe].image;V?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,rt.width,rt.height,O,Q,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ye,rt.width,rt.height,0,O,Q,rt.data)}}else{V?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,O,Q,Ee[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,O,Q,Ee[pe]);for(let be=0;be<Me.length;be++){const Be=Me[be];V?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,O,Q,Be.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ye,O,Q,Be.image[pe])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ie(C,x,z,te,ae,Z){const Ce=s.convert(z.format,z.colorSpace),ve=s.convert(z.type),Pe=T(z.internalFormat,Ce,ve,z.colorSpace),Ue=i.get(x),ge=i.get(z);if(ge.__renderTarget=x,!Ue.__hasExternalTextures){const Ee=Math.max(1,x.width>>Z),Te=Math.max(1,x.height>>Z);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,Z,Pe,Ee,Te,x.depth,0,Ce,ve,null):t.texImage2D(ae,Z,Pe,Ee,Te,0,Ce,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ae,ge.__webglTexture,0,U(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ae,ge.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(C,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const te=x.depthTexture,ae=te&&te.isDepthTexture?te.type:null,Z=E(x.stencilBuffer,ae),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(x),Z,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,C)}else{const te=x.textures;for(let ae=0;ae<te.length;ae++){const Z=te[ae],Ce=s.convert(Z.format,Z.colorSpace),ve=s.convert(Z.type),Pe=T(Z.internalFormat,Ce,ve,Z.colorSpace);fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(x),Pe,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(x),Pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(C,x,z){const te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",M)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ue=s.convert(x.depthTexture.format),ge=s.convert(x.depthTexture.type);let Ee;x.depthTexture.format===mi?Ee=n.DEPTH_COMPONENT24:x.depthTexture.format===Zi&&(Ee=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ee,x.width,x.height,0,Ue,ge,null)}}else j(x.depthTexture,0);const Z=ae.__webglTexture,Ce=U(x),ve=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,Pe=x.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===mi)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ve,Z,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ve,Z,0);else if(x.depthTexture.format===Zi)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ve,Z,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ve,Z,0);else throw new Error("Unknown depthTexture format")}function G(C){const x=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=te}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)F(x.__webglFramebuffer[te],C,te);else{const te=C.texture.mipmaps;te&&te.length>0?F(x.__webglFramebuffer[0],C,0):F(x.__webglFramebuffer,C,0)}else if(z){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=n.createRenderbuffer(),w(x.__webglDepthbuffer[te],C,!1);else{const ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Z)}}else{const te=C.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),w(x.__webglDepthbuffer,C,!1);else{const ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(C,x,z){const te=i.get(C);x!==void 0&&ie(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&G(C)}function L(C){const x=C.texture,z=i.get(C),te=i.get(x);C.addEventListener("dispose",R);const ae=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)z.__webglFramebuffer[ve][Pe]=n.createFramebuffer()}else z.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)z.__webglFramebuffer[ve]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ve=0,Pe=ae.length;ve<Pe;ve++){const Ue=i.get(ae[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&fe(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Pe=ae[ve];z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Ue=s.convert(Pe.format,Pe.colorSpace),ge=s.convert(Pe.type),Ee=T(Pe.internalFormat,Ue,ge,Pe.colorSpace,C.isXRRenderTarget===!0),Te=U(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),w(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)ie(z.__webglFramebuffer[ve][Pe],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Pe);else ie(z.__webglFramebuffer[ve],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ve=0,Pe=ae.length;ve<Pe;ve++){const Ue=ae[ve],ge=i.get(Ue);let Ee=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ee=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ge.__webglTexture),Ne(Ee,Ue),ie(z.__webglFramebuffer,C,Ue,n.COLOR_ATTACHMENT0+ve,Ee,0),m(Ue)&&p(Ee)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,te.__webglTexture),Ne(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)ie(z.__webglFramebuffer[Pe],C,x,n.COLOR_ATTACHMENT0,ve,Pe);else ie(z.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),t.unbindTexture()}C.depthBuffer&&G(C)}function B(C){const x=C.textures;for(let z=0,te=x.length;z<te;z++){const ae=x[z];if(m(ae)){const Z=A(C),Ce=i.get(ae).__webglTexture;t.bindTexture(Z,Ce),p(Z),t.unbindTexture()}}}const $=[],K=[];function se(C){if(C.samples>0){if(fe(C)===!1){const x=C.textures,z=C.width,te=C.height;let ae=n.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(C),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Pe=C.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ue]);const ge=i.get(x[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,z,te,0,0,z,te,ae,n.NEAREST),l===!0&&($.length=0,K.length=0,$.push(n.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&($.push(Z),K.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ue]);const ge=i.get(x[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function U(C){return Math.min(r.maxSamples,C.samples)}function fe(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ne(C,x){const z=C.colorSpace,te=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Vr&&z!==Ri&&(it.getTransfer(z)===ut?(te!==Rn||ae!==Sn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",z)),x}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=P,this.setupRenderTarget=L,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(n,e){function t(i,r=Ri){let s;const o=it.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fh)return n.BYTE;if(i===dh)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Ac)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Rn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===_h)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===zr)return n.RG;if(i===Dc)return n.RG_INTEGER;if(i===Ic)return n.RGBA_INTEGER;if(i===ho||i===po||i===mo||i===go)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Cl||i===Rl||i===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Il||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dl||i===Il)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return s.COMPRESSED_R11_EAC;if(i===Nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fl)return s.COMPRESSED_RG11_EAC;if(i===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bl||i===zl||i===Vl||i===Hl||i===Gl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===Kl||i===$l||i===Zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Ql||i===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===nc||i===ic||i===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`;class ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:QS,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,g=null,_=null,v=null;const y=typeof XRWebGLBinding<"u",m=new ty,p={},A=t.getContextAttributes();let T=null,E=null;const N=[],M=[],R=new ke;let S=null;const h=new nn;h.viewport=new Tt;const d=new nn;d.viewport=new Tt;const b=[h,d],D=new a0;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let me=N[ue];return me===void 0&&(me=new Fa,N[ue]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ue){let me=N[ue];return me===void 0&&(me=new Fa,N[ue]=me),me.getGripSpace()},this.getHand=function(ue){let me=N[ue];return me===void 0&&(me=new Fa,N[ue]=me),me.getHandSpace()};function j(ue){const me=M.indexOf(ue.inputSource);if(me===-1)return;const ie=N[me];ie!==void 0&&(ie.update(ue.inputSource,ue.frame,c||o),ie.dispatchEvent({type:ue.type,data:ue.inputSource}))}function H(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",W);for(let ue=0;ue<N.length;ue++){const me=M[ue];me!==null&&(M[ue]=null,N[ue].disconnect(me))}k=null,Y=null,m.reset();for(const ue in p)delete p[ue];e.setRenderTarget(T),_=null,g=null,f=null,r=null,E=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ue){c=ue},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ue){if(r=ue,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",H),r.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,w=null,F=null;A.depth&&(F=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=A.stencil?Zi:mi,w=A.stencil?bs:$n);const G={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:s};f=this.getBinding(),g=f.createProjectionLayer(G),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),E=new jn(g.textureWidth,g.textureHeight,{format:Rn,type:Sn,depthTexture:new ws(g.textureWidth,g.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ie={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new jn(_.framebufferWidth,_.framebufferHeight,{format:Rn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(ue){for(let me=0;me<ue.removed.length;me++){const ie=ue.removed[me],w=M.indexOf(ie);w>=0&&(M[w]=null,N[w].disconnect(ie))}for(let me=0;me<ue.added.length;me++){const ie=ue.added[me];let w=M.indexOf(ie);if(w===-1){for(let G=0;G<N.length;G++)if(G>=M.length){M.push(ie),w=G;break}else if(M[G]===null){M[G]=ie,w=G;break}if(w===-1)break}const F=N[w];F&&F.connect(ie)}}const J=new X,he=new X;function de(ue,me,ie){J.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(ie.matrixWorld);const w=J.distanceTo(he),F=me.projectionMatrix.elements,G=ie.projectionMatrix.elements,P=F[14]/(F[10]-1),L=F[14]/(F[10]+1),B=(F[9]+1)/F[5],$=(F[9]-1)/F[5],K=(F[8]-1)/F[0],se=(G[8]+1)/G[0],U=P*K,fe=P*se,ce=w/(-K+se),ne=ce*-K;if(me.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(ne),ue.translateZ(ce),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),F[10]===-1)ue.projectionMatrix.copy(me.projectionMatrix),ue.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const le=P+ce,C=L+ce,x=U-ne,z=fe+(w-ne),te=B*L/C*le,ae=$*L/C*le;ue.projectionMatrix.makePerspective(x,z,te,ae,le,C),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function xe(ue,me){me===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(me.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(r===null)return;let me=ue.near,ie=ue.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=d.near=h.near=me,D.far=d.far=h.far=ie,(k!==D.near||Y!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,Y=D.far),D.layers.mask=ue.layers.mask|6,h.layers.mask=D.layers.mask&3,d.layers.mask=D.layers.mask&5;const w=ue.parent,F=D.cameras;xe(D,w);for(let G=0;G<F.length;G++)xe(F[G],w);F.length===2?de(D,h,d):D.projectionMatrix.copy(h.projectionMatrix),Ne(ue,D,w)};function Ne(ue,me,ie){ie===null?ue.matrix.copy(me.matrixWorld):(ue.matrix.copy(ie.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(me.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(me.projectionMatrix),ue.projectionMatrixInverse.copy(me.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Ts*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(g===null&&_===null))return l},this.setFoveation=function(ue){l=ue,g!==null&&(g.fixedFoveation=ue),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ue)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(ue){return p[ue]};let Oe=null;function je(ue,me){if(u=me.getViewerPose(c||o),v=me,u!==null){const ie=u.views;_!==null&&(e.setRenderTargetFramebuffer(E,_.framebuffer),e.setRenderTarget(E));let w=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,w=!0);for(let L=0;L<ie.length;L++){const B=ie[L];let $=null;if(_!==null)$=_.getViewport(B);else{const se=f.getViewSubImage(g,B);$=se.viewport,L===0&&(e.setRenderTargetTextures(E,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(E))}let K=b[L];K===void 0&&(K=new nn,K.layers.enable(L),K.viewport=new Tt,b[L]=K),K.matrix.fromArray(B.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(B.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),L===0&&(D.matrix.copy(K.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),w===!0&&D.cameras.push(K)}const F=r.enabledFeatures;if(F&&F.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const L=f.getDepthInformation(ie[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(F&&F.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let L=0;L<ie.length;L++){const B=ie[L].camera;if(B){let $=p[B];$||($=new Dh,p[B]=$);const K=f.getCameraImage(B);$.sourceTexture=K}}}}for(let ie=0;ie<N.length;ie++){const w=M[ie],F=N[ie];w!==null&&F!==void 0&&F.update(w,me,c||o)}Oe&&Oe(ue,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const et=new Ih;et.setAnimationLoop(je),this.setAnimationLoop=function(ue){Oe=ue},this.dispose=function(){}}}const qi=new sr,iy=new xt;function ry(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Th(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),g(m,p),p.isMeshPhysicalMaterial&&_(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,qi.copy(E),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(qi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function g(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function c(A,T){let E=r[A.id];E===void 0&&(v(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const N=T.program;i.updateUBOMapping(A,N);const M=e.render.frame;s[A.id]!==M&&(g(A),s[A.id]=M)}function u(A){const T=f();A.__bindingPointIndex=T;const E=n.createBuffer(),N=A.__size,M=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const T=r[A.id],E=A.uniforms,N=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,R=E.length;M<R;M++){const S=Array.isArray(E[M])?E[M]:[E[M]];for(let h=0,d=S.length;h<d;h++){const b=S[h];if(_(b,M,h,N)===!0){const D=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let j=0;j<k.length;j++){const H=k[j],W=y(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+Y,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(A,T,E,N){const M=A.value,R=T+"_"+E;if(N[R]===void 0)return typeof M=="number"||typeof M=="boolean"?N[R]=M:N[R]=M.clone(),!0;{const S=N[R];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return N[R]=M,!0}else if(S.equals(M)===!1)return S.copy(M),!0}return!1}function v(A){const T=A.uniforms;let E=0;const N=16;for(let R=0,S=T.length;R<S;R++){const h=Array.isArray(T[R])?T[R]:[T[R]];for(let d=0,b=h.length;d<b;d++){const D=h[d],k=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,j=k.length;Y<j;Y++){const H=k[Y],W=y(H),J=E%N,he=J%W.boundary,de=J+he;E+=he,de!==0&&N-de<W.storage&&(E+=N-de),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}const M=E%N;return M>0&&(E+=N-M),A.__size=E,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function ay(){return Fn===null&&(Fn=new Q_(oy,16,16,zr,pi),Fn.name="DFG_LUT",Fn.minFilter=Vt,Fn.magFilter=Vt,Fn.wrapS=ai,Fn.wrapT=ai,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class ly{constructor(e={}){const{canvas:t=d_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Sn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=_,m=new Set([Ic,Dc,Pc]),p=new Set([Sn,$n,ys,bs,Cc,Rc]),A=new Uint32Array(4),T=new Int32Array(4);let E=null,N=null;const M=[],R=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const h=this;let d=!1;this._outputColorSpace=xn;let b=0,D=0,k=null,Y=-1,j=null;const H=new Tt,W=new Tt;let J=null;const he=new ot(0);let de=0,xe=t.width,Ne=t.height,Oe=1,je=null,et=null;const ue=new Tt(0,0,xe,Ne),me=new Tt(0,0,xe,Ne);let ie=!1;const w=new Ph;let F=!1,G=!1;const P=new xt,L=new X,B=new Tt,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function se(){return k===null?Oe:1}let U=i;function fe(I,q){return t.getContext(I,q)}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",tt,!1),U===null){const q="webgl2";if(U=fe(q,I),U===null)throw fe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw nt("WebGLRenderer: "+I.message),I}let ce,ne,le,C,x,z,te,ae,Z,Ce,ve,Pe,Ue,ge,Ee,Te,O,Q,ye,V,Se,_e,we,Me;function pe(){ce=new aM(U),ce.init(),_e=new JS(U,ce),ne=new Jx(U,ce,e,_e),le=new $S(U,ce),ne.reversedDepthBuffer&&g&&le.buffers.depth.setReversed(!0),C=new uM(U),x=new NS,z=new ZS(U,ce,le,x,ne,_e,C),te=new eM(h),ae=new oM(h),Z=new p0(U),we=new $x(U,Z),Ce=new lM(U,Z,C,we),ve=new dM(U,Ce,Z,C),ye=new fM(U,ne,z),Te=new Qx(x),Pe=new US(h,te,ae,ce,ne,we,Te),Ue=new ry(h,x),ge=new OS,Ee=new kS(ce),Q=new Kx(h,te,ae,le,ve,v,l),O=new jS(h,ve,ne),Me=new sy(U,C,ne,le),V=new Zx(U,ce,C),Se=new cM(U,ce,C),C.programs=Pe.programs,h.capabilities=ne,h.extensions=ce,h.properties=x,h.renderLists=ge,h.shadowMap=O,h.state=le,h.info=C}pe(),y!==Sn&&(S=new pM(y,t.width,t.height,r,s));const be=new ny(h,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const I=ce.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ce.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(I){I!==void 0&&(Oe=I,this.setSize(xe,Ne,!1))},this.getSize=function(I){return I.set(xe,Ne)},this.setSize=function(I,q,oe=!0){if(be.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=I,Ne=q,t.width=Math.floor(I*Oe),t.height=Math.floor(q*Oe),oe===!0&&(t.style.width=I+"px",t.style.height=q+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(xe*Oe,Ne*Oe).floor()},this.setDrawingBufferSize=function(I,q,oe){xe=I,Ne=q,Oe=oe,t.width=Math.floor(I*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,I,q)},this.setEffects=function(I){if(y===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let q=0;q<I.length;q++)if(I[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,q,oe,re){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,q,oe,re),le.viewport(H.copy(ue).multiplyScalar(Oe).round())},this.getScissor=function(I){return I.copy(me)},this.setScissor=function(I,q,oe,re){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,q,oe,re),le.scissor(W.copy(me).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(I){le.setScissorTest(ie=I)},this.setOpaqueSort=function(I){je=I},this.setTransparentSort=function(I){et=I},this.getClearColor=function(I){return I.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(I=!0,q=!0,oe=!0){let re=0;if(I){let ee=!1;if(k!==null){const Ae=k.texture.format;ee=m.has(Ae)}if(ee){const Ae=k.texture.type,Ie=p.has(Ae),De=Q.getClearColor(),Le=Q.getClearAlpha(),Fe=De.r,Ge=De.g,ze=De.b;Ie?(A[0]=Fe,A[1]=Ge,A[2]=ze,A[3]=Le,U.clearBufferuiv(U.COLOR,0,A)):(T[0]=Fe,T[1]=Ge,T[2]=ze,T[3]=Le,U.clearBufferiv(U.COLOR,0,T))}else re|=U.COLOR_BUFFER_BIT}q&&(re|=U.DEPTH_BUFFER_BIT),oe&&(re|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),Q.dispose(),ge.dispose(),Ee.dispose(),x.dispose(),te.dispose(),ae.dispose(),ve.dispose(),we.dispose(),Me.dispose(),Pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Gc),be.removeEventListener("sessionend",kc),Oi.stop()};function Be(I){I.preventDefault(),Po("WebGLRenderer: Context Lost."),d=!0}function rt(){Po("WebGLRenderer: Context Restored."),d=!1;const I=C.autoReset,q=O.enabled,oe=O.autoUpdate,re=O.needsUpdate,ee=O.type;pe(),C.autoReset=I,O.enabled=q,O.autoUpdate=oe,O.needsUpdate=re,O.type=ee}function tt(I){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Nt(I){const q=I.target;q.removeEventListener("dispose",Nt),$t(q)}function $t(I){np(I),x.remove(I)}function np(I){const q=x.get(I).programs;q!==void 0&&(q.forEach(function(oe){Pe.releaseProgram(oe)}),I.isShaderMaterial&&Pe.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,oe,re,ee,Ae){q===null&&(q=$);const Ie=ee.isMesh&&ee.matrixWorld.determinant()<0,De=rp(I,q,oe,re,ee);le.setMaterial(re,Ie);let Le=oe.index,Fe=1;if(re.wireframe===!0){if(Le=Ce.getWireframeAttribute(oe),Le===void 0)return;Fe=2}const Ge=oe.drawRange,ze=oe.attributes.position;let Qe=Ge.start*Fe,dt=(Ge.start+Ge.count)*Fe;Ae!==null&&(Qe=Math.max(Qe,Ae.start*Fe),dt=Math.min(dt,(Ae.start+Ae.count)*Fe)),Le!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Le.count)):ze!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,ze.count));const bt=dt-Qe;if(bt<0||bt===1/0)return;we.setup(ee,re,De,oe,Le);let Et,pt=V;if(Le!==null&&(Et=Z.get(Le),pt=Se,pt.setIndex(Et)),ee.isMesh)re.wireframe===!0?(le.setLineWidth(re.wireframeLinewidth*se()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(ee.isLine){let Ve=re.linewidth;Ve===void 0&&(Ve=1),le.setLineWidth(Ve*se()),ee.isLineSegments?pt.setMode(U.LINES):ee.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else ee.isPoints?pt.setMode(U.POINTS):ee.isSprite&&pt.setMode(U.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ve=ee._multiDrawStarts,ct=ee._multiDrawCounts,st=ee._multiDrawCount,an=Le?Z.get(Le).bytesPerElement:1,ar=x.get(re).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)ar.setValue(U,"_gl_DrawID",ln),pt.render(Ve[ln]/an,ct[ln])}else if(ee.isInstancedMesh)pt.renderInstances(Qe,bt,ee.count);else if(oe.isInstancedBufferGeometry){const Ve=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ct=Math.min(oe.instanceCount,Ve);pt.renderInstances(Qe,bt,ct)}else pt.render(Qe,bt)};function Hc(I,q,oe){I.transparent===!0&&I.side===Hn&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,Us(I,q,oe),I.side=Ni,I.needsUpdate=!0,Us(I,q,oe),I.side=Hn):Us(I,q,oe)}this.compile=function(I,q,oe=null){oe===null&&(oe=I),N=Ee.get(oe),N.init(q),R.push(N),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),I!==oe&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const re=new Set;return I.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const De=Ae[Ie];Hc(De,oe,ee),re.add(De)}else Hc(Ae,oe,ee),re.add(Ae)}),N=R.pop(),re},this.compileAsync=function(I,q,oe=null){const re=this.compile(I,q,oe);return new Promise(ee=>{function Ae(){if(re.forEach(function(Ie){x.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){ee(I);return}setTimeout(Ae,10)}ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ta=null;function ip(I){ta&&ta(I)}function Gc(){Oi.stop()}function kc(){Oi.start()}const Oi=new Ih;Oi.setAnimationLoop(ip),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(I){ta=I,be.setAnimationLoop(I),I===null?Oi.stop():Oi.start()},be.addEventListener("sessionstart",Gc),be.addEventListener("sessionend",kc),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;const oe=be.enabled===!0&&be.isPresenting===!0,re=S!==null&&(k===null||oe)&&S.begin(h,k);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),I.isScene===!0&&I.onBeforeRender(h,I,q,k),N=Ee.get(I,R.length),N.init(q),R.push(N),P.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),w.setFromProjectionMatrix(P,Wn,q.reversedDepth),G=this.localClippingEnabled,F=Te.init(this.clippingPlanes,G),E=ge.get(I,M.length),E.init(),M.push(E),be.enabled===!0&&be.isPresenting===!0){const Ie=h.xr.getDepthSensingMesh();Ie!==null&&na(Ie,q,-1/0,h.sortObjects)}na(I,q,0,h.sortObjects),E.finish(),h.sortObjects===!0&&E.sort(je,et),K=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,K&&Q.addToRenderList(E,I),this.info.render.frame++,F===!0&&Te.beginShadows();const ee=N.state.shadowsArray;if(O.render(ee,I,q),F===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&S.hasRenderPass())===!1){const Ie=E.opaque,De=E.transmissive;if(N.setupLights(),q.isArrayCamera){const Le=q.cameras;if(De.length>0)for(let Fe=0,Ge=Le.length;Fe<Ge;Fe++){const ze=Le[Fe];Xc(Ie,De,I,ze)}K&&Q.render(I);for(let Fe=0,Ge=Le.length;Fe<Ge;Fe++){const ze=Le[Fe];Wc(E,I,ze,ze.viewport)}}else De.length>0&&Xc(Ie,De,I,q),K&&Q.render(I),Wc(E,I,q)}k!==null&&D===0&&(z.updateMultisampleRenderTarget(k),z.updateRenderTargetMipmap(k)),re&&S.end(h),I.isScene===!0&&I.onAfterRender(h,I,q),we.resetDefaultState(),Y=-1,j=null,R.pop(),R.length>0?(N=R[R.length-1],F===!0&&Te.setGlobalState(h.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?E=M[M.length-1]:E=null};function na(I,q,oe,re){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)N.pushLight(I),I.castShadow&&N.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||w.intersectsSprite(I)){re&&B.setFromMatrixPosition(I.matrixWorld).applyMatrix4(P);const Ie=ve.update(I),De=I.material;De.visible&&E.push(I,Ie,De,oe,B.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||w.intersectsObject(I))){const Ie=ve.update(I),De=I.material;if(re&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),B.copy(I.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),B.copy(Ie.boundingSphere.center)),B.applyMatrix4(I.matrixWorld).applyMatrix4(P)),Array.isArray(De)){const Le=Ie.groups;for(let Fe=0,Ge=Le.length;Fe<Ge;Fe++){const ze=Le[Fe],Qe=De[ze.materialIndex];Qe&&Qe.visible&&E.push(I,Ie,Qe,oe,B.z,ze)}}else De.visible&&E.push(I,Ie,De,oe,B.z,null)}}const Ae=I.children;for(let Ie=0,De=Ae.length;Ie<De;Ie++)na(Ae[Ie],q,oe,re)}function Wc(I,q,oe,re){const{opaque:ee,transmissive:Ae,transparent:Ie}=I;N.setupLightsView(oe),F===!0&&Te.setGlobalState(h.clippingPlanes,oe),re&&le.viewport(H.copy(re)),ee.length>0&&Ls(ee,q,oe),Ae.length>0&&Ls(Ae,q,oe),Ie.length>0&&Ls(Ie,q,oe),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Xc(I,q,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const Qe=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new jn(1,1,{generateMipmaps:!0,type:Qe?pi:Sn,minFilter:$i,samples:ne.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Ae=N.state.transmissionRenderTarget[re.id],Ie=re.viewport||H;Ae.setSize(Ie.z*h.transmissionResolutionScale,Ie.w*h.transmissionResolutionScale);const De=h.getRenderTarget(),Le=h.getActiveCubeFace(),Fe=h.getActiveMipmapLevel();h.setRenderTarget(Ae),h.getClearColor(he),de=h.getClearAlpha(),de<1&&h.setClearColor(16777215,.5),h.clear(),K&&Q.render(oe);const Ge=h.toneMapping;h.toneMapping=Yn;const ze=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),F===!0&&Te.setGlobalState(h.clippingPlanes,re),Ls(I,oe,re),z.updateMultisampleRenderTarget(Ae),z.updateRenderTargetMipmap(Ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,bt=q.length;dt<bt;dt++){const Et=q[dt],{object:pt,geometry:Ve,material:ct,group:st}=Et;if(ct.side===Hn&&pt.layers.test(re.layers)){const an=ct.side;ct.side=on,ct.needsUpdate=!0,qc(pt,oe,re,Ve,ct,st),ct.side=an,ct.needsUpdate=!0,Qe=!0}}Qe===!0&&(z.updateMultisampleRenderTarget(Ae),z.updateRenderTargetMipmap(Ae))}h.setRenderTarget(De,Le,Fe),h.setClearColor(he,de),ze!==void 0&&(re.viewport=ze),h.toneMapping=Ge}function Ls(I,q,oe){const re=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Ae=I.length;ee<Ae;ee++){const Ie=I[ee],{object:De,geometry:Le,group:Fe}=Ie;let Ge=Ie.material;Ge.allowOverride===!0&&re!==null&&(Ge=re),De.layers.test(oe.layers)&&qc(De,q,oe,Le,Ge,Fe)}}function qc(I,q,oe,re,ee,Ae){I.onBeforeRender(h,q,oe,re,ee,Ae),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.onBeforeRender(h,q,oe,re,I,Ae),ee.transparent===!0&&ee.side===Hn&&ee.forceSinglePass===!1?(ee.side=on,ee.needsUpdate=!0,h.renderBufferDirect(oe,q,re,ee,I,Ae),ee.side=Ni,ee.needsUpdate=!0,h.renderBufferDirect(oe,q,re,ee,I,Ae),ee.side=Hn):h.renderBufferDirect(oe,q,re,ee,I,Ae),I.onAfterRender(h,q,oe,re,ee,Ae)}function Us(I,q,oe){q.isScene!==!0&&(q=$);const re=x.get(I),ee=N.state.lights,Ae=N.state.shadowsArray,Ie=ee.state.version,De=Pe.getParameters(I,ee.state,Ae,q,oe),Le=Pe.getProgramCacheKey(De);let Fe=re.programs;re.environment=I.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(I.isMeshStandardMaterial?ae:te).get(I.envMap||re.environment),re.envMapRotation=re.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,Fe===void 0&&(I.addEventListener("dispose",Nt),Fe=new Map,re.programs=Fe);let Ge=Fe.get(Le);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Ie)return jc(I,De),Ge}else De.uniforms=Pe.getUniforms(I),I.onBeforeCompile(De,h),Ge=Pe.acquireProgram(De,Le),Fe.set(Le,Ge),re.uniforms=De.uniforms;const ze=re.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ze.clippingPlanes=Te.uniform),jc(I,De),re.needsLights=op(I),re.lightsStateVersion=Ie,re.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.directionalShadowMap.value=ee.state.directionalShadowMap,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotShadowMap.value=ee.state.spotShadowMap,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMap.value=ee.state.pointShadowMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function Yc(I){if(I.uniformsList===null){const q=I.currentProgram.getUniforms();I.uniformsList=_o.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function jc(I,q){const oe=x.get(I);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function rp(I,q,oe,re,ee){q.isScene!==!0&&(q=$),z.resetTextureUnits();const Ae=q.fog,Ie=re.isMeshStandardMaterial?q.environment:null,De=k===null?h.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vr,Le=(re.isMeshStandardMaterial?ae:te).get(re.envMap||Ie),Fe=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ge=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ze=!!oe.morphAttributes.position,Qe=!!oe.morphAttributes.normal,dt=!!oe.morphAttributes.color;let bt=Yn;re.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(bt=h.toneMapping);const Et=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pt=Et!==void 0?Et.length:0,Ve=x.get(re),ct=N.state.lights;if(F===!0&&(G===!0||I!==j)){const Ht=I===j&&re.id===Y;Te.setState(re,I,Ht)}let st=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ct.state.version||Ve.outputColorSpace!==De||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Le||re.fog===!0&&Ve.fog!==Ae||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Te.numPlanes||Ve.numIntersection!==Te.numIntersection)||Ve.vertexAlphas!==Fe||Ve.vertexTangents!==Ge||Ve.morphTargets!==ze||Ve.morphNormals!==Qe||Ve.morphColors!==dt||Ve.toneMapping!==bt||Ve.morphTargetsCount!==pt)&&(st=!0):(st=!0,Ve.__version=re.version);let an=Ve.currentProgram;st===!0&&(an=Us(re,q,ee));let ar=!1,ln=!1,Yr=!1;const gt=an.getUniforms(),Zt=Ve.uniforms;if(le.useProgram(an.program)&&(ar=!0,ln=!0,Yr=!0),re.id!==Y&&(Y=re.id,ln=!0),ar||j!==I){le.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),gt.setValue(U,"projectionMatrix",I.projectionMatrix),gt.setValue(U,"viewMatrix",I.matrixWorldInverse);const Jt=gt.map.cameraPosition;Jt!==void 0&&Jt.setValue(U,L.setFromMatrixPosition(I.matrixWorld)),ne.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&gt.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),j!==I&&(j=I,ln=!0,Yr=!0)}if(Ve.needsLights&&(ct.state.directionalShadowMap.length>0&&gt.setValue(U,"directionalShadowMap",ct.state.directionalShadowMap,z),ct.state.spotShadowMap.length>0&&gt.setValue(U,"spotShadowMap",ct.state.spotShadowMap,z),ct.state.pointShadowMap.length>0&&gt.setValue(U,"pointShadowMap",ct.state.pointShadowMap,z)),ee.isSkinnedMesh){gt.setOptional(U,ee,"bindMatrix"),gt.setOptional(U,ee,"bindMatrixInverse");const Ht=ee.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),gt.setValue(U,"boneTexture",Ht.boneTexture,z))}ee.isBatchedMesh&&(gt.setOptional(U,ee,"batchingTexture"),gt.setValue(U,"batchingTexture",ee._matricesTexture,z),gt.setOptional(U,ee,"batchingIdTexture"),gt.setValue(U,"batchingIdTexture",ee._indirectTexture,z),gt.setOptional(U,ee,"batchingColorTexture"),ee._colorsTexture!==null&&gt.setValue(U,"batchingColorTexture",ee._colorsTexture,z));const _n=oe.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ye.update(ee,oe,an),(ln||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,gt.setValue(U,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Zt.envMap.value=Le,Zt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Zt.envMapIntensity.value=q.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=ay()),ln&&(gt.setValue(U,"toneMappingExposure",h.toneMappingExposure),Ve.needsLights&&sp(Zt,Yr),Ae&&re.fog===!0&&Ue.refreshFogUniforms(Zt,Ae),Ue.refreshMaterialUniforms(Zt,re,Oe,Ne,N.state.transmissionRenderTarget[I.id]),_o.upload(U,Yc(Ve),Zt,z)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(_o.upload(U,Yc(Ve),Zt,z),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&gt.setValue(U,"center",ee.center),gt.setValue(U,"modelViewMatrix",ee.modelViewMatrix),gt.setValue(U,"normalMatrix",ee.normalMatrix),gt.setValue(U,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Ht=re.uniformsGroups;for(let Jt=0,ia=Ht.length;Jt<ia;Jt++){const Bi=Ht[Jt];Me.update(Bi,an),Me.bind(Bi,an)}}return an}function sp(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function op(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,q,oe){const re=x.get(I);re.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),x.get(I.texture).__webglTexture=q,x.get(I.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:oe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,q){const oe=x.get(I);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const ap=U.createFramebuffer();this.setRenderTarget=function(I,q=0,oe=0){k=I,b=q,D=oe;let re=null,ee=!1,Ae=!1;if(I){const De=x.get(I);if(De.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(U.FRAMEBUFFER,De.__webglFramebuffer),H.copy(I.viewport),W.copy(I.scissor),J=I.scissorTest,le.viewport(H),le.scissor(W),le.setScissorTest(J),Y=-1;return}else if(De.__webglFramebuffer===void 0)z.setupRenderTarget(I);else if(De.__hasExternalTextures)z.rebindTextures(I,x.get(I.texture).__webglTexture,x.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ge=I.depthTexture;if(De.__boundDepthTexture!==Ge){if(Ge!==null&&x.has(Ge)&&(I.width!==Ge.image.width||I.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(I)}}const Le=I.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);const Fe=x.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Fe[q])?re=Fe[q][oe]:re=Fe[q],ee=!0):I.samples>0&&z.useMultisampledRTT(I)===!1?re=x.get(I).__webglMultisampledFramebuffer:Array.isArray(Fe)?re=Fe[oe]:re=Fe,H.copy(I.viewport),W.copy(I.scissor),J=I.scissorTest}else H.copy(ue).multiplyScalar(Oe).floor(),W.copy(me).multiplyScalar(Oe).floor(),J=ie;if(oe!==0&&(re=ap),le.bindFramebuffer(U.FRAMEBUFFER,re)&&le.drawBuffers(I,re),le.viewport(H),le.scissor(W),le.setScissorTest(J),ee){const De=x.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,oe)}else if(Ae){const De=q;for(let Le=0;Le<I.textures.length;Le++){const Fe=x.get(I.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,oe,De)}}else if(I!==null&&oe!==0){const De=x.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,oe)}Y=-1},this.readRenderTargetPixels=function(I,q,oe,re,ee,Ae,Ie,De=0){if(!(I&&I.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=x.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){le.bindFramebuffer(U.FRAMEBUFFER,Le);try{const Fe=I.textures[De],Ge=Fe.format,ze=Fe.type;if(!ne.textureFormatReadable(Ge)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ze)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-re&&oe>=0&&oe<=I.height-ee&&(I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),U.readPixels(q,oe,re,ee,_e.convert(Ge),_e.convert(ze),Ae))}finally{const Fe=k!==null?x.get(k).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(I,q,oe,re,ee,Ae,Ie,De=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=x.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(q>=0&&q<=I.width-re&&oe>=0&&oe<=I.height-ee){le.bindFramebuffer(U.FRAMEBUFFER,Le);const Fe=I.textures[De],Ge=Fe.format,ze=Fe.type;if(!ne.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qe),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De),U.readPixels(q,oe,re,ee,_e.convert(Ge),_e.convert(ze),0);const dt=k!==null?x.get(k).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,dt);const bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await h_(U,bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.deleteBuffer(Qe),U.deleteSync(bt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,q=null,oe=0){const re=Math.pow(2,-oe),ee=Math.floor(I.image.width*re),Ae=Math.floor(I.image.height*re),Ie=q!==null?q.x:0,De=q!==null?q.y:0;z.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,oe,0,0,Ie,De,ee,Ae),le.unbindTexture()};const lp=U.createFramebuffer(),cp=U.createFramebuffer();this.copyTextureToTexture=function(I,q,oe=null,re=null,ee=0,Ae=null){Ae===null&&(ee!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=ee,ee=0):Ae=0);let Ie,De,Le,Fe,Ge,ze,Qe,dt,bt;const Et=I.isCompressedTexture?I.mipmaps[Ae]:I.image;if(oe!==null)Ie=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,Le=oe.isBox3?oe.max.z-oe.min.z:1,Fe=oe.min.x,Ge=oe.min.y,ze=oe.isBox3?oe.min.z:0;else{const _n=Math.pow(2,-ee);Ie=Math.floor(Et.width*_n),De=Math.floor(Et.height*_n),I.isDataArrayTexture?Le=Et.depth:I.isData3DTexture?Le=Math.floor(Et.depth*_n):Le=1,Fe=0,Ge=0,ze=0}re!==null?(Qe=re.x,dt=re.y,bt=re.z):(Qe=0,dt=0,bt=0);const pt=_e.convert(q.format),Ve=_e.convert(q.type);let ct;q.isData3DTexture?(z.setTexture3D(q,0),ct=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(z.setTexture2DArray(q,0),ct=U.TEXTURE_2D_ARRAY):(z.setTexture2D(q,0),ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const st=U.getParameter(U.UNPACK_ROW_LENGTH),an=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ar=U.getParameter(U.UNPACK_SKIP_PIXELS),ln=U.getParameter(U.UNPACK_SKIP_ROWS),Yr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze);const gt=I.isDataArrayTexture||I.isData3DTexture,Zt=q.isDataArrayTexture||q.isData3DTexture;if(I.isDepthTexture){const _n=x.get(I),Ht=x.get(q),Jt=x.get(_n.__renderTarget),ia=x.get(Ht.__renderTarget);le.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Bi=0;Bi<Le;Bi++)gt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,x.get(I).__webglTexture,ee,ze+Bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,x.get(q).__webglTexture,Ae,bt+Bi)),U.blitFramebuffer(Fe,Ge,Ie,De,Qe,dt,Ie,De,U.DEPTH_BUFFER_BIT,U.NEAREST);le.bindFramebuffer(U.READ_FRAMEBUFFER,null),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ee!==0||I.isRenderTargetTexture||x.has(I)){const _n=x.get(I),Ht=x.get(q);le.bindFramebuffer(U.READ_FRAMEBUFFER,lp),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,cp);for(let Jt=0;Jt<Le;Jt++)gt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_n.__webglTexture,ee,ze+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_n.__webglTexture,ee),Zt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.__webglTexture,Ae,bt+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ht.__webglTexture,Ae),ee!==0?U.blitFramebuffer(Fe,Ge,Ie,De,Qe,dt,Ie,De,U.COLOR_BUFFER_BIT,U.NEAREST):Zt?U.copyTexSubImage3D(ct,Ae,Qe,dt,bt+Jt,Fe,Ge,Ie,De):U.copyTexSubImage2D(ct,Ae,Qe,dt,Fe,Ge,Ie,De);le.bindFramebuffer(U.READ_FRAMEBUFFER,null),le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Zt?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(ct,Ae,Qe,dt,bt,Ie,De,Le,pt,Ve,Et.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(ct,Ae,Qe,dt,bt,Ie,De,Le,pt,Et.data):U.texSubImage3D(ct,Ae,Qe,dt,bt,Ie,De,Le,pt,Ve,Et):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Qe,dt,Ie,De,pt,Ve,Et.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Qe,dt,Et.width,Et.height,pt,Et.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Qe,dt,Ie,De,pt,Ve,Et);U.pixelStorei(U.UNPACK_ROW_LENGTH,st),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,an),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ar),U.pixelStorei(U.UNPACK_SKIP_ROWS,ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yr),Ae===0&&q.generateMipmaps&&U.generateMipmap(ct),le.unbindTexture()},this.initRenderTarget=function(I){x.get(I).__webglFramebuffer===void 0&&z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?z.setTextureCube(I,0):I.isData3DTexture?z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?z.setTexture2DArray(I,0):z.setTexture2D(I,0),le.unbindTexture()},this.resetState=function(){b=0,D=0,k=null,le.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function qr(n){return id()?(yp(n),!0):!1}function Ir(){const n=new Set,e=s=>{n.delete(s)};return{on:s=>{n.add(s);const o=()=>e(s);return qr(o),{off:o}},off:e,trigger:(...s)=>Promise.all(Array.from(n).map(o=>o(...s))),clear:()=>{n.clear()}}}const Lr=new WeakMap,Oh=(...n)=>{var e;const t=n[0],i=(e=kr())==null?void 0:e.proxy;if(i==null&&!Rd())throw new Error("injectLocal must be called in setup");return i&&Lr.has(i)&&t in Lr.get(i)?Lr.get(i)[t]:cs(...n)};function cy(n,e){var t;const i=(t=kr())==null?void 0:t.proxy;if(i==null)throw new Error("provideLocal must be called in setup");Lr.has(i)||Lr.set(i,Object.create(null));const r=Lr.get(i);return r[n]=e,Cd(n,e)}function uy(n,e){const t=e?.injectionKey||Symbol(n.name||"InjectionState"),i=e?.defaultValue;return[(...o)=>{const a=n(...o);return cy(t,a),a},()=>Oh(t,i)]}const Bh=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const fy=Object.prototype.toString,dy=n=>fy.call(n)==="[object Object]",Io=()=>{};function hy(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}function py(n,e={}){let t,i,r=Io;const s=l=>{clearTimeout(l),r(),r=Io};let o;return l=>{const c=mt(n),u=mt(e.maxWait);return t&&s(t),c<=0||u!==void 0&&u<=0?(i&&(s(i),i=void 0),Promise.resolve(l())):new Promise((f,g)=>{r=e.rejectOnCancel?g:f,o=l,u&&!i&&(i=setTimeout(()=>{t&&s(t),i=void 0,f(o())},u)),t=setTimeout(()=>{i&&s(i),i=void 0,f(l())},c)})}}function yf(n){return n.endsWith("rem")?Number.parseFloat(n)*16:Number.parseFloat(n)}function vo(n){return Array.isArray(n)?n:[n]}function my(n){return kr()}function gy(n,e=200,t={}){return hy(py(e,t),n)}function bf(n,e=200,t={}){const i=pn(mt(n)),r=gy(()=>{i.value=n.value},e,t);return qn(n,()=>r()),Md(i)}function zh(n,e=!0,t){my()?Yo(n,t):e?n():Xo(n)}function _y(n,e,t={}){const{immediate:i=!0,immediateCallback:r=!1}=t,s=rn(!1);let o;function a(){o&&(clearTimeout(o),o=void 0)}function l(){s.value=!1,a()}function c(...u){r&&n(),a(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=void 0,n(...u)},mt(e))}return i&&(s.value=!0,Bh&&c()),qr(l),{isPending:Md(s),start:c,stop:l}}function vy(n=1e3,e={}){const{controls:t=!1,callback:i}=e,r=_y(i??Io,n,e),s=sn(()=>!r.isPending.value);return t?{ready:s,...r}:s}function Vh(n,e,t){return qn(n,e,{...t,immediate:!0})}const or=Bh?window:void 0;function Di(n){var e;const t=mt(n);return(e=t?.$el)!=null?e:t}function Ur(...n){const e=[],t=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=sn(()=>{const a=vo(mt(n[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=Vh(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>Di(c)))!=null?l:[or].filter(c=>c!=null),vo(mt(r.value?n[1]:n[0])),vo(Je(r.value?n[2]:n[1])),mt(r.value?n[3]:n[2])]},([a,l,c,u])=>{if(t(),!a?.length||!l?.length||!c?.length)return;const f=dy(u)?{...u}:u;e.push(...a.flatMap(g=>l.flatMap(_=>c.map(v=>i(g,_,v,f)))))},{flush:"post"}),o=()=>{s(),t()};return qr(t),o}function xy(){const n=rn(!1),e=kr();return e&&Yo(()=>{n.value=!0},e),n}function Hh(n){const e=xy();return sn(()=>(e.value,!!n()))}function My(n,e={}){const{immediate:t=!0,fpsLimit:i=void 0,window:r=or,once:s=!1}=e,o=rn(!1),a=sn(()=>i?1e3/mt(i):null);let l=0,c=null;function u(_){if(!o.value||!r)return;l||(l=_);const v=_-l;if(a.value&&v<a.value){c=r.requestAnimationFrame(u);return}if(l=_,n({delta:v,timestamp:_}),s){o.value=!1,c=null;return}c=r.requestAnimationFrame(u)}function f(){!o.value&&r&&(o.value=!0,l=0,c=r.requestAnimationFrame(u))}function g(){o.value=!1,c!=null&&r&&(r.cancelAnimationFrame(c),c=null)}return t&&f(),qr(g),{isActive:tr(o),pause:g,resume:f}}const Sy=Symbol("vueuse-ssr-width");function yy(){const n=Rd()?Oh(Sy,null):null;return typeof n=="number"?n:void 0}function Gh(n,e={}){const{window:t=or,ssrWidth:i=yy()}=e,r=Hh(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),s=rn(typeof i=="number"),o=rn(),a=rn(!1),l=c=>{a.value=c.matches};return Bn(()=>{if(s.value){s.value=!r.value;const c=mt(n).split(",");a.value=c.some(u=>{const f=u.includes("not all"),g=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),_=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let v=!!(g||_);return g&&v&&(v=i>=yf(g[1])),_&&v&&(v=i<=yf(_[1])),f?!v:v});return}r.value&&(o.value=t.matchMedia(mt(n)),a.value=o.value.matches)}),Ur(o,"change",l,{passive:!0}),sn(()=>a.value)}function by(n={}){const{window:e=or}=n,t=rn(1),i=Gh(()=>`(resolution: ${t.value}dppx)`,n);let r=Io;return e&&(r=Vh(i,()=>t.value=e.devicePixelRatio)),{pixelRatio:tr(t),stop:r}}function Ey(n,e,t={}){const{window:i=or,...r}=t;let s;const o=Hh(()=>i&&"ResizeObserver"in i),a=()=>{s&&(s.disconnect(),s=void 0)},l=sn(()=>{const f=mt(n);return Array.isArray(f)?f.map(g=>Di(g)):[Di(f)]}),c=qn(l,f=>{if(a(),o.value&&i){s=new ResizeObserver(e);for(const g of f)g&&s.observe(g,r)}},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return qr(u),{isSupported:o,stop:u}}function Ty(n,e={width:0,height:0},t={}){const{window:i=or,box:r="content-box"}=t,s=sn(()=>{var f,g;return(g=(f=Di(n))==null?void 0:f.namespaceURI)==null?void 0:g.includes("svg")}),o=rn(e.width),a=rn(e.height),{stop:l}=Ey(n,([f])=>{const g=r==="border-box"?f.borderBoxSize:r==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(i&&s.value){const _=Di(n);if(_){const v=_.getBoundingClientRect();o.value=v.width,a.value=v.height}}else if(g){const _=vo(g);o.value=_.reduce((v,{inlineSize:y})=>v+y,0),a.value=_.reduce((v,{blockSize:y})=>v+y,0)}else o.value=f.contentRect.width,a.value=f.contentRect.height},t);zh(()=>{const f=Di(n);f&&(o.value="offsetWidth"in f?f.offsetWidth:e.width,a.value="offsetHeight"in f?f.offsetHeight:e.height)});const c=qn(()=>Di(n),f=>{o.value=f?e.width:0,a.value=f?e.height:0});function u(){l(),c()}return{width:o,height:a,stop:u}}function wy(n={}){const{window:e=or,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:o="inner"}=n,a=rn(t),l=rn(i),c=()=>{if(e)if(o==="outer")a.value=e.outerWidth,l.value=e.outerHeight;else if(o==="visual"&&e.visualViewport){const{width:f,height:g,scale:_}=e.visualViewport;a.value=Math.round(f*_),l.value=Math.round(g*_)}else s?(a.value=e.innerWidth,l.value=e.innerHeight):(a.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),zh(c);const u={passive:!0};if(Ur("resize",c,u),e&&o==="visual"&&e.visualViewport&&Ur(e.visualViewport,"resize",c,u),r){const f=Gh("(orientation: portrait)");qn(f,()=>c())}return{width:a,height:l}}function kh(n){return typeof n=="function"}function Ay(n){return typeof n=="number"&&!Number.isNaN(n)}function Wh(n){return Cy(n,"[object Object]")}function Cy(n,e){return Object.prototype.toString.call(n)===e}class Ry{nativeEvent;NONE=0;CAPTURING_PHASE=1;AT_TARGET=2;BUBBLING_PHASE=3;relatedTarget=null;get altKey(){return this.getFromNative("altKey",!1)}get button(){return this.getFromNative("button",0)}get buttons(){return this.getFromNative("buttons",0)}get clientX(){return this.getFromNative("clientX",0)}get clientY(){return this.getFromNative("clientY",0)}get ctrlKey(){return this.getFromNative("ctrlKey",!1)}get layerX(){return this.getFromNative("layerX",0)}get layerY(){return this.getFromNative("layerY",0)}get metaKey(){return this.getFromNative("metaKey",!1)}get movementX(){return this.getFromNative("movementX",0)}get movementY(){return this.getFromNative("movementY",0)}get offsetX(){return this.getFromNative("offsetX",0)}get offsetY(){return this.getFromNative("offsetY",0)}get pageX(){return this.getFromNative("pageX",0)}get pageY(){return this.getFromNative("pageY",0)}get screenX(){return this.getFromNative("screenX",0)}get screenY(){return this.getFromNative("screenY",0)}get shiftKey(){return this.getFromNative("shiftKey",!1)}get x(){return this.getFromNative("x",0)}get y(){return this.getFromNative("y",0)}get detail(){return this.getFromNative("detail",0)}get view(){return this.getFromNative("view",null)}get which(){return this.getFromNative("which",0)}get cancelBubble(){return this.getFromNative("cancelBubble",!1)}get composed(){return this.getFromNative("composed",!1)}get eventPhase(){return this.getFromNative("eventPhase",0)}get isTrusted(){return this.getFromNative("isTrusted",!1)}get returnValue(){return this.getFromNative("returnValue",!1)}get timeStamp(){return this.getFromNative("timeStamp",0)}get cancelable(){return this.getFromNative("cancelable",!1)}get defaultPrevented(){return this.getFromNative("defaultPrevented",!1)}constructor(e){this.nativeEvent=e}getFromNative(e,t){return e in this.nativeEvent?this.nativeEvent[e]:t}}const Xa=new X;class Xt extends Ry{type;bubbles;internalPointer;intersection;camera;currentObject;object;propagationState;get pointerId(){return this.internalPointer.id}get pointerType(){return this.internalPointer.type}get pointerState(){return this.internalPointer.state}get distance(){return this.intersection.distance}get distanceToRay(){return this.intersection.distanceToRay}get point(){return this.intersection.point}get index(){return this.intersection.index}get face(){return this.intersection.face}get faceIndex(){return this.intersection.faceIndex}get uv(){return this.intersection.uv}get uv1(){return this.intersection.uv1}get normal(){return this.intersection.normal}get instanceId(){return this.intersection.instanceId}get pointOnLine(){return this.intersection.pointOnLine}get batchId(){return this.intersection.batchId}get pointerPosition(){return this.intersection.pointerPosition}get pointerQuaternion(){return this.intersection.pointerQuaternion}get pointOnFace(){return this.intersection.pointOnFace}get localPoint(){return this.intersection.localPoint}get details(){return this.intersection.details}get target(){return this.object}get currentTarget(){return this.currentObject}get eventObject(){return this.currentObject}get srcElement(){return this.currentObject}_pointer;get pointer(){return this._pointer==null&&(Xa.copy(this.intersection.point).project(this.camera),this._pointer=new ke(Xa.x,Xa.y)),this._pointer}_ray;get ray(){if(this._ray!=null)return this._ray;switch(this.intersection.details.type){case"screen-ray":case"ray":case"sphere":return this._ray=new Hr(this.intersection.pointerPosition,new X(0,0,-1).applyQuaternion(this.intersection.pointerQuaternion));case"lines":return this._ray=new Hr(this.intersection.details.line.start,this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize())}}_intersections=[];get intersections(){return this._intersections==null&&(this._intersections=[{...this.intersection,eventObject:this.currentObject}]),this._intersections}_unprojectedPoint;get unprojectedPoint(){if(this._unprojectedPoint==null){const e=this.pointer;this._unprojectedPoint=new X(e.x,e.y,0).unproject(this.camera)}return this._unprojectedPoint}get stopped(){return this.propagationState.stoppedImmediate||this.propagationState.stopped}get stoppedImmediate(){return this.propagationState.stoppedImmediate}get delta(){throw new Error("not supported")}constructor(e,t,i,r,s,o,a=s.object,l=a,c={stopped:!t,stoppedImmediate:!1}){super(i),this.type=e,this.bubbles=t,this.internalPointer=r,this.intersection=s,this.camera=o,this.currentObject=a,this.object=l,this.propagationState=c}stopPropagation(){this.propagationState.stopped=!0}stopImmediatePropagation(){this.propagationState.stoppedImmediate=!0}retarget(e){return new Xt(this.type,this.bubbles,this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target,this.propagationState)}}class Lo extends Xt{get deltaX(){return this.nativeEvent.deltaX}get deltaY(){return this.nativeEvent.deltaY}get deltaZ(){return this.nativeEvent.deltaZ}constructor(e,t,i,r,s,o){super("wheel",!0,e,t,i,r,s,o)}retarget(e){return new Lo(this.nativeEvent,this.internalPointer,this.intersection,this.camera,e,this.target)}}function Qt(n){Xh(n,n.currentObject)}function Xh(n,e){if(e==null)return;const t=Dy(e,n.type);if(t!=null&&t.length>0){const i=n.retarget(e),r=t.length;for(let s=0;s<r&&!i.stoppedImmediate;s++)t[s](i)}n.stopped||Xh(n,e.parent)}const qh={click:"onClick",contextmenu:"onContextMenu",dblclick:"onDoubleClick",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",pointerup:"onPointerUp",wheel:"onWheel"},Py=Object.keys(qh);function Dy(n,e){if(n._listeners!=null&&e in n._listeners)return n._listeners[e];let t;if(n.isVoidObject&&e==="click"&&n.parent?.__r3f!=null&&(t=n.parent.__r3f.root.getState().onPointerMissed),n.__r3f!=null&&(t=n.__r3f.handlers[qh[e]]),t!=null)return[t]}const Iy=1e10,Ly=new Bc(Iy),Ef=new Map;function Yh(n){let e=Ef.get(n);return e==null&&(e=new En(Ly),e.isVoidObject=!0,e.parent=n,e.pointerEventsOrder=-1/0,Ef.set(n,e)),e}function Uy(n,e,t){const i=e.normal??e.face?.normal;return i==null?!1:(n.setFromNormalAndCoplanarPoint(i,e.localPoint),n.applyMatrix4(t),!0)}function Ny(n,e,t){if(e==="none"||e==="listener"&&!n)return!1;if(t==="all")return!0;if(typeof t=="function")return({id:s,type:o,state:a})=>t(s,o,a);let i,r;return"deny"in t?(r=!0,i=t.deny):(r=!1,i=t.allow),Array.isArray(i)?s=>Tf(i.includes(s.type),r):s=>Tf(i===s.type,r)}function Tf(n,e){return e?!n:n}function jh(n,e,t,i=!1,r,s,o){const a=i||Fy(n,e),l=e.pointerEvents??r,c=l??e.defaultPointerEvents??"listener",u=e.pointerEventsType??s??"all",f=e.pointerEventsOrder??o??0,g=Ny(a,c,u),_=t.length;if(_===1)(g===!0||typeof g=="function"&&g(t[0]))&&qa(t[0],e,c,u,f);else if(g===!0)for(let m=0;m<_;m++)qa(t[m],e,c,u,f);else if(typeof g=="function")for(let m=0;m<_;m++){const p=t[m];g(p)&&qa(p,e,c,u,f)}if(e.children.length===0||e.intersectChildren===!1)return;const v=e.interactableDescendants??e.children,y=v.length;for(let m=0;m<y;m++)jh(n,v[m],t,a,l,u,f)}function Fy(n,e){if(e.ancestorsHaveListeners||n==="pointer"&&e.ancestorsHavePointerListeners||n==="wheel"&&e.ancestorsHaveWheelListeners||e.__r3f!=null&&e.__r3f?.eventCount>0&&(n==="wheel"&&e.__r3f.handlers.onWheel!=null||n==="pointer"&&Object.keys(e.__r3f.handlers).some(r=>r!="onWheel")))return!0;if(e._listeners==null)return!1;if(n==="wheel"){const r=e._listeners.wheel;return r!=null&&r.length>0}const t=Object.entries(e._listeners),i=t.length;for(let r=0;r<i;r++){const s=t[r];if(s[0]!=="wheel"&&Py.includes(s[0])&&s[1]!=null&&s[1].length>0)return!0}return!1}function qa({intersector:n,options:e},t,i,r,s){e.filter?.(t,i,r,s)!==!1&&n.executeIntersection(t,s)}function Oy(n,e,{customSort:t=By}={},i){let r,s,o;const a=n.length;for(let l=0;l<a;l++){const c=n[l],u=e?.[l];(r==null||t(c,u,r,s)<0)&&(o=l,r=c,s=u)}return o}function By(n,e=0,t,i=0){return e!=i?i-e:n.distance-t.distance}const wf=1e7;function zy(n,e,t,i,r,s=0){const o=e.direction.clone().multiplyScalar(wf),a=wf;return{distance:a+s,object:Yh(n),point:o,normal:e.origin.clone().sub(o).normalize(),details:t(o,a),pointerPosition:i,pointerQuaternion:r,pointOnFace:o,localPoint:o}}function Vy(n,e,t){for(;t>0;)n.push(e),--t}const Ya=Symbol("buttonsDownTime"),Hy=Symbol("buttonsClickTime");globalThis.pointerEventspointerMap??=new Map;Kt.prototype.setPointerCapture=function(n){zc(n)?.setCapture(this)};Kt.prototype.releasePointerCapture=function(n){const e=zc(n);e==null||!e.hasCaptured(this)||e.setCapture(void 0)};Kt.prototype.hasPointerCapture=function(n){return zc(n)?.hasCaptured(this)??!1};function zc(n){return globalThis.pointerEventspointerMap?.get(n)}class Gy{id;type;state;intersector;getCamera;onMoveCommited;parentSetPointerCapture;parentReleasePointerCapture;options;prevIntersection;intersection;prevEnabled=!0;enabled=!0;wheelIntersection;pointerEntered=[];pointerEnteredHelper=[];pointerCapture;buttonsDownTime=new Map;buttonsDown=new Set;wasMoved=!1;onFirstMove=[];constructor(e,t,i,r,s,o,a,l,c={}){this.id=e,this.type=t,this.state=i,this.intersector=r,this.getCamera=s,this.onMoveCommited=o,this.parentSetPointerCapture=a,this.parentReleasePointerCapture=l,this.options=c,globalThis.pointerEventspointerMap?.set(e,this)}getPointerCapture(){return this.pointerCapture}hasCaptured(e){return this.pointerCapture?.object===e}setCapture(e){this.pointerCapture?.object!==e&&(this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0),e!=null&&this.intersection!=null&&(this.pointerCapture={object:e,intersection:this.intersection},this.parentSetPointerCapture?.()))}getButtonsDown(){return this.buttonsDown}getIntersection(){return this.intersection}getEnabled(){return this.enabled}setEnabled(e,t,i=!0){this.enabled!==e&&(!e&&this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0),this.enabled=e,i&&this.commit(t,!1))}computeIntersection(e,t,i){return this.pointerCapture!=null?this.intersector.intersectPointerCapture(this.pointerCapture,i):(this.intersector.startIntersection(i),jh(e,t,[this]),this.intersector.finalizeIntersection(t))}setIntersection(e){this.intersection=e}commit(e,t){const i=this.getCamera(),r=this.prevEnabled?this.prevIntersection:void 0,s=this.enabled?this.intersection:void 0;r!=null&&r.object!=s?.object&&Qt(new Xt("pointerout",!0,e,this,r,i));const o=this.pointerEntered;this.pointerEntered=[],this.pointerEnteredHelper.length=0,Kh(s?.object,this.pointerEntered,o,this.pointerEnteredHelper);const a=o.length;for(let l=0;l<a;l++){const c=o[l];Qt(new Xt("pointerleave",!1,e,this,r,i,c))}s!=null&&r?.object!=s.object&&Qt(new Xt("pointerover",!0,e,this,s,i));for(let l=this.pointerEnteredHelper.length-1;l>=0;l--){const c=this.pointerEnteredHelper[l];Qt(new Xt("pointerenter",!1,e,this,s,i,c))}if(t&&s!=null&&Qt(new Xt("pointermove",!0,e,this,s,i)),this.prevIntersection=this.intersection,this.prevEnabled=this.enabled,!this.wasMoved&&this.intersector.isReady()){this.wasMoved=!0;const l=this.onFirstMove.length;for(let c=0;c<l;c++)this.onFirstMove[c](i);this.onFirstMove.length=0}this.onMoveCommited?.(this)}move(e,t){this.intersection=this.computeIntersection("pointer",e,t),this.commit(t,!0)}over(e,t){this.wasMoved||(this.intersection=this.computeIntersection("pointer",e,t),this.commit(t,!1))}emitMove(e){this.intersection!=null&&Qt(new Xt("pointermove",!0,e,this,this.intersection,this.getCamera()))}down(e){if(this.buttonsDown.add(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.down.bind(this,e));return}if(this.intersection==null)return;Qt(new Xt("pointerdown",!0,e,this,this.intersection,this.getCamera()));const{object:t}=this.intersection;t[Ya]??=new Map,t[Ya].set(e.button,e.timeStamp),this.buttonsDownTime.set(e.button,e.timeStamp)}up(e){if(this.buttonsDown.delete(e.button),!this.enabled)return;if(!this.wasMoved){this.onFirstMove.push(this.up.bind(this,e));return}if(this.intersection==null)return;const{clickThesholdMs:t,contextMenuButton:i=2,dblClickThresholdMs:r=500,clickThresholdMs:s=t??300}=this.options;this.pointerCapture=void 0;const o=ky(this.buttonsDownTime,this.intersection.object[Ya],e.button,e.timeStamp,s),a=this.getCamera();if(o&&e.button===i&&Qt(new Xt("contextmenu",!0,e,this,this.intersection,a)),Qt(new Xt("pointerup",!0,e,this,this.intersection,a)),!o||e.button===i)return;Qt(new Xt("click",!0,e,this,this.intersection,a));const{object:l}=this.intersection,c=l[Hy]??=new Map,u=c.get(e.button);if(u==null||e.timeStamp-u>r){c.set(e.button,e.timeStamp);return}Qt(new Xt("dblclick",!0,e,this,this.intersection,a)),c.delete(e.button)}cancel(e){if(this.enabled){if(!this.wasMoved){this.onFirstMove.push(this.cancel.bind(this,e));return}this.intersection!=null&&Qt(new Xt("pointercancel",!0,e,this,this.intersection,this.getCamera()))}}wheel(e,t,i=!1){if(!this.enabled)return;if(!this.wasMoved&&i){this.onFirstMove.push(this.wheel.bind(this,e,t,i));return}i||(this.wheelIntersection=this.computeIntersection("wheel",e,t));const r=i?this.intersection:this.wheelIntersection;r!=null&&Qt(new Lo(t,this,r,this.getCamera()))}emitWheel(e,t=!1){if(!this.enabled)return;if(!this.wasMoved&&t){this.onFirstMove.push(this.emitWheel.bind(this,e,t));return}const i=t?this.intersection:this.wheelIntersection;i!=null&&Qt(new Lo(e,this,i,this.getCamera()))}exit(e){this.wasMoved&&(this.pointerCapture!=null&&(this.parentReleasePointerCapture?.(),this.pointerCapture=void 0),this.intersection=void 0,this.commit(e,!1)),this.onFirstMove.length=0,this.wasMoved=!1}}function Kh(n,e,t,i){if(n==null)return;const r=t.indexOf(n);r!=-1?t.splice(r,1):i.push(n),e.push(n),Kh(n.parent,e,t,i)}function ky(n,e,t,i,r){if(e==null)return!1;const s=e.get(t);return!(s==null||i-s>r||s!=n.get(t))}const ns=new hn,ja=new hn,Af=new ke,Cf=new ke,Rf=new ke,Ka=new X,Wy=new xt,oo=new X;function Xy(n,e,t){oo.copy(e).applyMatrix4(Wy.copy(t.matrixWorld).invert());const i=t.geometry.attributes.uv;if(i==null||!(i instanceof yn))return!1;let r;return qy(t,(s,o,a)=>{t.getVertexPosition(s,ns.a),t.getVertexPosition(o,ns.b),t.getVertexPosition(a,ns.c);const l=ns.closestPointToPoint(oo,Ka).distanceTo(oo);r!=null&&l>=r||(r=l,ja.copy(ns),Af.fromBufferAttribute(i,s),Cf.fromBufferAttribute(i,o),Rf.fromBufferAttribute(i,a))}),r==null?!1:(ja.closestPointToPoint(oo,Ka),ja.getInterpolation(Ka,Af,Cf,Rf,n),!0)}function qy(n,e){const t=n.geometry.drawRange;if(n.geometry.index!=null){const o=n.geometry.index,a=Math.max(0,t.start),l=Math.min(o.count,t.start+t.count);for(let c=a;c<l;c+=3)e(o.getX(c),o.getX(c+1),o.getX(c+2));return}const i=n.geometry.attributes.position;if(i==null)return;const r=Math.max(0,t.start),s=Math.min(i.count,t.start+t.count);for(let o=r;o<s;o+=3)e(o,o+1,o+2)}new xt;new d0;new X;new Mn;new Hr;new ke;new X(0,0,0),new X(0,0,1);const Pf=new xt,Yy=new X;new X(0,0,-1);new Mn;const Df=new ke,jy=new X;class Ky{prepareTransformation;options;raycaster=new c0;cameraQuaternion=new gi;fromPosition=new X;fromQuaternion=new gi;coords=new ke;viewPlane=new Mn;intersects=[];pointerEventsOrders=[];constructor(e,t){this.prepareTransformation=e,this.options=t}isReady(){return!0}intersectPointerCapture({intersection:e,object:t},i){const r=e.details;if(r.type!="screen-ray")throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a camera ray intersector`);if(!this.startIntersection(i))return e;this.viewPlane.constant-=r.distanceViewPlane;const s=this.raycaster.ray.intersectPlane(this.viewPlane,new X);if(s==null)return e;e.object.updateWorldMatrix(!0,!1),Uy(this.viewPlane,e,e.object.matrixWorld);let o=e.uv;return e.object instanceof En&&Xy(Df,s,e.object)&&(o=Df.clone()),{...e,details:{...r,direction:this.raycaster.ray.direction.clone(),screenPoint:this.coords.clone()},uv:o,object:t,point:s,pointOnFace:s,pointerPosition:this.raycaster.ray.origin.clone(),pointerQuaternion:this.cameraQuaternion.clone()}}startIntersection(e){const t=this.prepareTransformation(e,this.coords);return t==null?!1:(t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(this.fromPosition,this.fromQuaternion,Yy),this.raycaster.setFromCamera(this.coords,t),this.viewPlane.setFromNormalAndCoplanarPoint(t.getWorldDirection(jy),this.raycaster.ray.origin),!0)}executeIntersection(e,t){const i=this.intersects.length;e.raycast(this.raycaster,this.intersects),Vy(this.pointerEventsOrders,t,this.intersects.length-i)}finalizeIntersection(e){const t=this.fromPosition.clone(),i=this.cameraQuaternion.clone(),r=this.raycaster.ray.direction.clone(),s=Oy(this.intersects,this.pointerEventsOrders,this.options),o=s==null?void 0:this.intersects[s];return this.intersects.length=0,this.pointerEventsOrders.length=0,o==null?zy(e,this.raycaster.ray,(a,l)=>({type:"screen-ray",distanceViewPlane:l,screenPoint:this.coords.clone(),direction:r}),t,i):(o.object.updateWorldMatrix(!0,!1),Pf.copy(o.object.matrixWorld).invert(),Object.assign(o,{details:{type:"screen-ray",distanceViewPlane:this.viewPlane.distanceToPoint(o.point),screenPoint:this.coords.clone(),direction:r},pointOnFace:o.point,pointerPosition:t,pointerQuaternion:i,localPoint:o.point.clone().applyMatrix4(Pf)}))}}new X;new ke;new xt;new X;new Mn;new Zo;new X;new X;new X;new X(1e-4,1e-4,1e-4);new xt;let $y=23412;function Zy(){return $y++}function Jy(n,e,t){if(!(e instanceof globalThis.MouseEvent))return t.set(0,0);const{width:i,height:r,top:s,left:o}=n.getBoundingClientRect(),a=e.clientX-o,l=e.clientY-s;return t.set(a/i*2-1,-(l/r)*2+1)}function Qy(n,e,t,i){return eb(n,typeof e=="function"?e:()=>e,t,Jy.bind(null,n),n.setPointerCapture.bind(n),r=>{n.hasPointerCapture(r)&&n.releasePointerCapture(r)},{pointerTypePrefix:"screen-",...i})}function eb(n,e,t,i,r,s,o={}){const a=o?.forwardPointerCapture??!0,l=new Map,c=o.pointerTypePrefix??"forward-",u=(S,h)=>{let d=l.get(S.pointerId);return d!=null||(d=new Gy(Zy(),`${c}${S.pointerType}`,S.pointerState,new Ky((b,D)=>(i(b,D),e()),o),e,void 0,a?r.bind(null,S.pointerId):void 0,a?s.bind(null,S.pointerId):void 0,o),h!="move"&&h!="wheel"&&(d.setIntersection(d.computeIntersection("pointer",t,S)),d.commit(S,!1)),l.set(S.pointerId,d)),d},f=new Map,g=new Map,_=[],v=[],y=(S,h,d)=>{switch(S){case"move":d.move(t,h);return;case"over":d.move(t,h);return;case"wheel":d.wheel(t,h);return;case"cancel":d.cancel(h);return;case"down":if(!If(h))return;d.down(h);return;case"up":if(!If(h))return;d.up(h);return;case"exit":g.delete(d),f.delete(d),d.exit(h);return}},m=(S,h)=>{const d=u(h,S);S==="move"&&g.set(d,h),S==="wheel"&&f.set(d,h),o.batchEvents??!0?v.push({type:S,event:h}):y(S,h,d)},p=m.bind(null,"move"),A=m.bind(null,"over"),T=m.bind(null,"cancel"),E=m.bind(null,"down"),N=m.bind(null,"up"),M=m.bind(null,"wheel"),R=m.bind(null,"exit");return n.addEventListener("pointermove",p),n.addEventListener("pointerover",A),n.addEventListener("pointercancel",T),n.addEventListener("pointerdown",E),n.addEventListener("pointerup",N),n.addEventListener("wheel",M),n.addEventListener("pointerleave",R),{destroy(){n.removeEventListener("pointermove",p),n.removeEventListener("pointerover",A),n.removeEventListener("pointercancel",T),n.removeEventListener("pointerdown",E),n.removeEventListener("pointerup",N),n.removeEventListener("wheel",M),n.removeEventListener("pointerleave",R),g.clear(),f.clear()},update(){const S=v.length;for(let h=0;h<S;h++){const{type:d,event:b}=v[h],D=u(b,d);if(d==="move"&&(_.push(D),g.get(D)!=b)){D.emitMove(b);continue}if(d==="wheel"&&f.get(D)!=b){D.emitWheel(b);continue}y(d,b,D)}if(v.length=0,o.intersectEveryFrame??!1)for(const[h,d]of g.entries())_.includes(h)||h.move(t,d);_.length=0}}}function If(n){return n.button!=null}var tb={};const $h=n=>e=>Wh(e)&&n in e&&!!e[n],nb=$h("isCamera"),ib=$h("isPerspectiveCamera");function rb(){try{const n="production";if(n)return n}catch{}return"production"}rb();const Lf="[TresJS ▲ ■ ●] ";function sb(...n){typeof n[0]=="string"?n[0]=Lf+n[0]:n.unshift(Lf),console.warn(...n)}const ob=({sizes:n})=>{const e=pn([]),t=sn(()=>e.value[0]),i=o=>{const a=nb(o)?o:e.value.find(l=>l.uuid===o);a&&(e.value=[a,...e.value.filter(({uuid:l})=>l!==a.uuid)])},r=(o,a=!1)=>{e.value.some(({uuid:l})=>l===o.uuid)||(e.value.push(o),a&&i(o.uuid))},s=o=>{e.value=e.value.filter(({uuid:a})=>a!==o.uuid)};return Bn(()=>{n.aspectRatio.value&&e.value.forEach(o=>{ib(o)&&(o.aspect=n.aspectRatio.value,o.updateProjectionMatrix())})}),{activeCamera:t,cameras:e,registerCamera:r,deregisterCamera:s,setActiveCamera:i}};function Uf(){const n=new Map,e=new Set;let t=0,i=!1;const r=()=>{const c=Array.from(n.entries()).sort((u,f)=>{const g=u[1].priority-f[1].priority;return g===0?u[1].addI-f[1].addI:g});e.clear(),c.forEach(u=>e.add(u[0]))},s=c=>{n.delete(c),e.delete(c)};return{on:(c,u=0)=>{n.set(c,{priority:u,addI:t++});const f=()=>s(c);return qr(f),i=!0,{off:f}},off:s,trigger:(...c)=>(i&&(r(),i=!1),Promise.all(Array.from(e).map(u=>u(...c)))),dispose:()=>{n.clear(),e.clear()},get count(){return n.size}}}const ab=pn({}),lb=n=>Object.assign(ab.value,n),cb=(n,e,t)=>{if(!kh(n.setPixelRatio))return;let i=0;if(t&&Array.isArray(t)&&t.length>=2){const[r,s]=t;i=xh.clamp(e,r,s)}else Ay(t)?i=t:i=e;i!==n.getPixelRatio?.()&&n.setPixelRatio(i)},ub=n=>{const e=new l0,t={before:Ir(),after:Ir()},{pause:i,resume:r,isActive:s}=My(()=>{const l=()=>({delta:e.getDelta(),elapsed:e.elapsedTime});t.before.trigger(l()),n(),t.after.trigger(l())},{immediate:!1});return{start:()=>{e.start(),r()},stop:()=>{e.stop(),i()},isActive:s,onBeforeLoop:t.before.on,onLoop:t.after.on}};var fb=class extends Error{name="TresRendererError";constructor(n,e,t){super(n,t),this.code=e}};function db({scene:n,canvas:e,options:t,contextParts:{sizes:i,camera:r}}){const o=kh(t.renderer)?t.renderer({sizes:i,scene:n,camera:r,canvas:e}):new ly({...t,canvas:Di(e)}),a=pn(mt(t.renderMode)==="manual"?0:1),l=60,c=sn(()=>mt(t.renderMode)==="on-demand"&&a.value===0),u=()=>n.value.traverse(D=>{D instanceof En&&D.material instanceof Ds&&(D.material.needsUpdate=!0)}),f=(D=1)=>{c.value&&(a.value=Math.min(l,a.value+D))},g=()=>{if(mt(t.renderMode)!=="manual")throw new Error("advance can only be called in manual render mode.");a.value=1},_=()=>{mt(t.renderMode)==="on-demand"&&f()},v=sn(()=>mt(t.renderMode)==="always"),y=D=>Wh(D)&&"isRenderer"in D&&!!D.isRenderer,m=Ir(),p=Ir();let A=!1;const T=pn(!1),E=pn(null);(async()=>{try{y(o)&&await o.init(),T.value=!0}catch(D){const k=new fb(D instanceof Error?D.message:"Unknown error","INITIALIZATION_FAILED",{cause:D instanceof Error?D:void 0});E.value=k,console.error(`[TresJS] Renderer initialization failed. This may occur if:
  - WebGPU is not supported by your browser
  - GPU is not available or lacks required features
  - GPU drivers are outdated
Error details: ${k.message}`,k),p.trigger(k)}})();const M=Ir(),R=()=>{a.value=v.value?1:Math.max(0,a.value-1),M.trigger(o)};let S=D=>{r.activeCamera.value&&(o.render(n.value,r.activeCamera.value),D())};const h=D=>{S=D},d=ub(()=>{a.value&&S(R)});m.on(()=>{T.value&&d.start()}),qn([i.width,i.height,T],()=>{T.value&&(o.setSize(i.width.value,i.height.value),!A&&o.domElement.width&&o.domElement.height&&(A=!0,Xo(()=>{m.trigger(o)})),_())},{immediate:!0}),Bn(()=>{T.value&&cb(o,i.pixelRatio.value,mt(t.dpr))}),mt(t.renderMode)==="on-demand"&&f(),mt(t.renderMode)==="manual"&&vy(100,{callback:g});const b=sn(()=>{const D=mt(t.clearColor),k=mt(t.clearAlpha),Y=typeof D=="string"&&D.length===9&&D.startsWith("#");return Y&&k!==void 0&&sb(`clearColor with alpha (e.g. ${D}) and clearAlpha cannot both be set, using clearColor as source of truth`),Y?{alpha:Number.parseInt(D.slice(7,9),16)/255,color:D.slice(0,7)}:{alpha:k,color:D}});return Bn(()=>{if(!T.value)return;const D=b.value;D.color===void 0||D.alpha===void 0||o.setClearColor(D.color,D.alpha)}),Bn(()=>{if(!T.value)return;const D=t.toneMapping;D&&(o.toneMapping=D)}),Bn(()=>{if(!T.value)return;const D=t.toneMappingExposure;D&&(o.toneMappingExposure=D)}),Bn(()=>{if(!T.value)return;const D=t.outputColorSpace;D&&(o.outputColorSpace=D)}),Bn(()=>{if(!T.value)return;const D=t.shadows;D!==void 0&&(o.shadowMap.enabled=D,u())}),Bn(()=>{if(!T.value)return;const D=t.shadowMapType;D!==void 0&&(o.shadowMap.type=D,u())}),nr(()=>{o.dispose(),"forceContextLoss"in o&&o.forceContextLoss()}),{loop:d,instance:o,advance:g,onReady:m.on,onRender:M.on,onError:p.on,invalidate:f,canBeInvalidated:c,mode:mt(t.renderMode),replaceRenderFunction:h,isInitialized:T,error:E}}function hb(n,e,t=10){const{pixelRatio:i}=by(),r=mt(n)?wy():Ty(sn(()=>mt(e).parentElement)),s=tr(bf(r.width,t)),o=tr(bf(r.height,t));return{width:s,height:o,pixelRatio:i,aspectRatio:sn(()=>s.value/o.value)}}function pb({canvas:n,contextParts:{scene:e,camera:t,renderer:i}}){const{update:r,destroy:s}=Qy(mt(n),()=>mt(t.activeCamera),e.value),{off:o}=i.loop.onLoop(r);nr(s),nr(o);const a=Yh(e.value),l=Ir();return a.addEventListener("click",l.trigger),{onPointerMissed:l.on}}const[cE,mb]=uy(({scene:n,canvas:e,windowSize:t,rendererOptions:i})=>{const r=rn(n),s=hb(t,e),o=ob({sizes:s}),a=db({scene:r,canvas:e,options:i,contextParts:{sizes:s,camera:o}}),l=pb({canvas:e,contextParts:{scene:r,camera:o,renderer:a}}),c={sizes:s,scene:r,camera:o,renderer:a,controls:pn(null),extend:lb,events:l};return c.scene.value.__tres={root:c},c},{injectionKey:"useTres"}),Vc=()=>{const n=mb();if(!n)throw new Error(`useTresContext must be used together with useTresContextProvider.
 You probably tried to use it above or on the same level as a TresCanvas component.
 It should be used in child components of a TresCanvas instance.`);return n};function Zh(){const{scene:n,renderer:e,camera:t,sizes:i,controls:r,extend:s,events:o}=Vc();return{scene:n,renderer:e.instance,camera:t.activeCamera,sizes:i,controls:r,extend:s,events:o,invalidate:e.invalidate,advance:e.advance}}const Jh=()=>{const n=Zh(),{renderer:e}=Vc(),t=Uf(),i=Uf();e.loop.onBeforeLoop(s=>{t.trigger({...n,...s})}),e.loop.onLoop(s=>{i.trigger({...n,...s})});const r=e.replaceRenderFunction;return{stop:e.loop.stop,start:e.loop.start,isActive:e.loop.isActive,onBeforeRender:t.on,onRender:i.on,render:r}};var gb=Object.defineProperty,_b=(n,e,t)=>e in n?gb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,vb=(n,e,t)=>(_b(n,e+"",t),t);class xb{constructor(){vb(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}var Mb=Object.defineProperty,Sb=(n,e,t)=>e in n?Mb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,He=(n,e,t)=>(Sb(n,typeof e!="symbol"?e+"":e,t),t);const ao=new Hr,Nf=new Mn,yb=Math.cos(70*(Math.PI/180)),Ff=(n,e)=>(n%e+e)%e;class bb extends xb{constructor(e,t){super(),He(this,"object"),He(this,"domElement"),He(this,"enabled",!0),He(this,"target",new X),He(this,"minDistance",0),He(this,"maxDistance",1/0),He(this,"minZoom",0),He(this,"maxZoom",1/0),He(this,"minPolarAngle",0),He(this,"maxPolarAngle",Math.PI),He(this,"minAzimuthAngle",-1/0),He(this,"maxAzimuthAngle",1/0),He(this,"enableDamping",!1),He(this,"dampingFactor",.05),He(this,"enableZoom",!0),He(this,"zoomSpeed",1),He(this,"enableRotate",!0),He(this,"rotateSpeed",1),He(this,"enablePan",!0),He(this,"panSpeed",1),He(this,"screenSpacePanning",!0),He(this,"keyPanSpeed",7),He(this,"zoomToCursor",!1),He(this,"autoRotate",!1),He(this,"autoRotateSpeed",2),He(this,"reverseOrbit",!1),He(this,"reverseHorizontalOrbit",!1),He(this,"reverseVerticalOrbit",!1),He(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),He(this,"mouseButtons",{LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN}),He(this,"touches",{ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN}),He(this,"target0"),He(this,"position0"),He(this,"zoom0"),He(this,"_domElementKeyEvents",null),He(this,"getPolarAngle"),He(this,"getAzimuthalAngle"),He(this,"setPolarAngle"),He(this,"setAzimuthalAngle"),He(this,"getDistance"),He(this,"getZoomScale"),He(this,"listenToKeyEvents"),He(this,"stopListenToKeyEvents"),He(this,"saveState"),He(this,"reset"),He(this,"update"),He(this,"connect"),He(this,"dispose"),He(this,"dollyIn"),He(this,"dollyOut"),He(this,"getScale"),He(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=O=>{let Q=Ff(O,2*Math.PI),ye=u.phi;ye<0&&(ye+=2*Math.PI),Q<0&&(Q+=2*Math.PI);let V=Math.abs(Q-ye);2*Math.PI-V<V&&(Q<ye?Q+=2*Math.PI:ye+=2*Math.PI),f.phi=Q-ye,i.update()},this.setAzimuthalAngle=O=>{let Q=Ff(O,2*Math.PI),ye=u.theta;ye<0&&(ye+=2*Math.PI),Q<0&&(Q+=2*Math.PI);let V=Math.abs(Q-ye);2*Math.PI-V<V&&(Q<ye?Q+=2*Math.PI:ye+=2*Math.PI),f.theta=Q-ye,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=O=>{O.addEventListener("keydown",Z),this._domElementKeyEvents=O},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Z),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=a.NONE},this.update=(()=>{const O=new X,Q=new X(0,1,0),ye=new gi().setFromUnitVectors(e.up,Q),V=ye.clone().invert(),Se=new X,_e=new gi,we=2*Math.PI;return function(){const pe=i.object.position;ye.setFromUnitVectors(e.up,Q),V.copy(ye).invert(),O.copy(pe).sub(i.target),O.applyQuaternion(ye),u.setFromVector3(O),i.autoRotate&&l===a.NONE&&Y(D()),i.enableDamping?(u.theta+=f.theta*i.dampingFactor,u.phi+=f.phi*i.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let be=i.minAzimuthAngle,Be=i.maxAzimuthAngle;isFinite(be)&&isFinite(Be)&&(be<-Math.PI?be+=we:be>Math.PI&&(be-=we),Be<-Math.PI?Be+=we:Be>Math.PI&&(Be-=we),be<=Be?u.theta=Math.max(be,Math.min(Be,u.theta)):u.theta=u.theta>(be+Be)/2?Math.max(be,u.theta):Math.min(Be,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(_,i.dampingFactor):i.target.add(_),i.zoomToCursor&&h||i.object.isOrthographicCamera?u.radius=Oe(u.radius):u.radius=Oe(u.radius*g),O.setFromSpherical(u),O.applyQuaternion(V),pe.copy(i.target).add(O),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,_.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),_.set(0,0,0));let rt=!1;if(i.zoomToCursor&&h){let tt=null;if(i.object instanceof nn&&i.object.isPerspectiveCamera){const Nt=O.length();tt=Oe(Nt*g);const $t=Nt-tt;i.object.position.addScaledVector(R,$t),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Nt=new X(S.x,S.y,0);Nt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/g)),i.object.updateProjectionMatrix(),rt=!0;const $t=new X(S.x,S.y,0);$t.unproject(i.object),i.object.position.sub($t).add(Nt),i.object.updateMatrixWorld(),tt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;tt!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(tt).add(i.object.position):(ao.origin.copy(i.object.position),ao.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ao.direction))<yb?e.lookAt(i.target):(Nf.setFromNormalAndCoplanarPoint(i.object.up,i.target),ao.intersectPlane(Nf,i.target))))}else i.object instanceof gs&&i.object.isOrthographicCamera&&(rt=g!==1,rt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/g)),i.object.updateProjectionMatrix()));return g=1,h=!1,rt||Se.distanceToSquared(i.object.position)>c||8*(1-_e.dot(i.object.quaternion))>c?(i.dispatchEvent(r),Se.copy(i.object.position),_e.copy(i.object.quaternion),rt=!1,!0):!1}})(),this.connect=O=>{i.domElement=O,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",Pe),i.domElement.addEventListener("pointerdown",le),i.domElement.addEventListener("pointercancel",x),i.domElement.addEventListener("wheel",ae)},this.dispose=()=>{var O,Q,ye,V,Se,_e;i.domElement&&(i.domElement.style.touchAction="auto"),(O=i.domElement)==null||O.removeEventListener("contextmenu",Pe),(Q=i.domElement)==null||Q.removeEventListener("pointerdown",le),(ye=i.domElement)==null||ye.removeEventListener("pointercancel",x),(V=i.domElement)==null||V.removeEventListener("wheel",ae),(Se=i.domElement)==null||Se.ownerDocument.removeEventListener("pointermove",C),(_e=i.domElement)==null||_e.ownerDocument.removeEventListener("pointerup",x),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Z)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new Ku,f=new Ku;let g=1;const _=new X,v=new ke,y=new ke,m=new ke,p=new ke,A=new ke,T=new ke,E=new ke,N=new ke,M=new ke,R=new X,S=new ke;let h=!1;const d=[],b={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function Y(O){i.reverseOrbit||i.reverseHorizontalOrbit?f.theta+=O:f.theta-=O}function j(O){i.reverseOrbit||i.reverseVerticalOrbit?f.phi+=O:f.phi-=O}const H=(()=>{const O=new X;return function(ye,V){O.setFromMatrixColumn(V,0),O.multiplyScalar(-ye),_.add(O)}})(),W=(()=>{const O=new X;return function(ye,V){i.screenSpacePanning===!0?O.setFromMatrixColumn(V,1):(O.setFromMatrixColumn(V,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(ye),_.add(O)}})(),J=(()=>{const O=new X;return function(ye,V){const Se=i.domElement;if(Se&&i.object instanceof nn&&i.object.isPerspectiveCamera){const _e=i.object.position;O.copy(_e).sub(i.target);let we=O.length();we*=Math.tan(i.object.fov/2*Math.PI/180),H(2*ye*we/Se.clientHeight,i.object.matrix),W(2*V*we/Se.clientHeight,i.object.matrix)}else Se&&i.object instanceof gs&&i.object.isOrthographicCamera?(H(ye*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),W(V*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function he(O){i.object instanceof nn&&i.object.isPerspectiveCamera||i.object instanceof gs&&i.object.isOrthographicCamera?g=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function de(O){he(g/O)}function xe(O){he(g*O)}function Ne(O){if(!i.zoomToCursor||!i.domElement)return;h=!0;const Q=i.domElement.getBoundingClientRect(),ye=O.clientX-Q.left,V=O.clientY-Q.top,Se=Q.width,_e=Q.height;S.x=ye/Se*2-1,S.y=-(V/_e)*2+1,R.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function Oe(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function je(O){v.set(O.clientX,O.clientY)}function et(O){Ne(O),E.set(O.clientX,O.clientY)}function ue(O){p.set(O.clientX,O.clientY)}function me(O){y.set(O.clientX,O.clientY),m.subVectors(y,v).multiplyScalar(i.rotateSpeed);const Q=i.domElement;Q&&(Y(2*Math.PI*m.x/Q.clientHeight),j(2*Math.PI*m.y/Q.clientHeight)),v.copy(y),i.update()}function ie(O){N.set(O.clientX,O.clientY),M.subVectors(N,E),M.y>0?de(k()):M.y<0&&xe(k()),E.copy(N),i.update()}function w(O){A.set(O.clientX,O.clientY),T.subVectors(A,p).multiplyScalar(i.panSpeed),J(T.x,T.y),p.copy(A),i.update()}function F(O){Ne(O),O.deltaY<0?xe(k()):O.deltaY>0&&de(k()),i.update()}function G(O){let Q=!1;switch(O.code){case i.keys.UP:J(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:J(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:J(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:J(-i.keyPanSpeed,0),Q=!0;break}Q&&(O.preventDefault(),i.update())}function P(){if(d.length==1)v.set(d[0].pageX,d[0].pageY);else{const O=.5*(d[0].pageX+d[1].pageX),Q=.5*(d[0].pageY+d[1].pageY);v.set(O,Q)}}function L(){if(d.length==1)p.set(d[0].pageX,d[0].pageY);else{const O=.5*(d[0].pageX+d[1].pageX),Q=.5*(d[0].pageY+d[1].pageY);p.set(O,Q)}}function B(){const O=d[0].pageX-d[1].pageX,Q=d[0].pageY-d[1].pageY,ye=Math.sqrt(O*O+Q*Q);E.set(0,ye)}function $(){i.enableZoom&&B(),i.enablePan&&L()}function K(){i.enableZoom&&B(),i.enableRotate&&P()}function se(O){if(d.length==1)y.set(O.pageX,O.pageY);else{const ye=Te(O),V=.5*(O.pageX+ye.x),Se=.5*(O.pageY+ye.y);y.set(V,Se)}m.subVectors(y,v).multiplyScalar(i.rotateSpeed);const Q=i.domElement;Q&&(Y(2*Math.PI*m.x/Q.clientHeight),j(2*Math.PI*m.y/Q.clientHeight)),v.copy(y)}function U(O){if(d.length==1)A.set(O.pageX,O.pageY);else{const Q=Te(O),ye=.5*(O.pageX+Q.x),V=.5*(O.pageY+Q.y);A.set(ye,V)}T.subVectors(A,p).multiplyScalar(i.panSpeed),J(T.x,T.y),p.copy(A)}function fe(O){const Q=Te(O),ye=O.pageX-Q.x,V=O.pageY-Q.y,Se=Math.sqrt(ye*ye+V*V);N.set(0,Se),M.set(0,Math.pow(N.y/E.y,i.zoomSpeed)),de(M.y),E.copy(N)}function ce(O){i.enableZoom&&fe(O),i.enablePan&&U(O)}function ne(O){i.enableZoom&&fe(O),i.enableRotate&&se(O)}function le(O){var Q,ye;i.enabled!==!1&&(d.length===0&&((Q=i.domElement)==null||Q.ownerDocument.addEventListener("pointermove",C),(ye=i.domElement)==null||ye.ownerDocument.addEventListener("pointerup",x)),Ue(O),O.pointerType==="touch"?Ce(O):z(O))}function C(O){i.enabled!==!1&&(O.pointerType==="touch"?ve(O):te(O))}function x(O){var Q,ye,V;ge(O),d.length===0&&((Q=i.domElement)==null||Q.releasePointerCapture(O.pointerId),(ye=i.domElement)==null||ye.ownerDocument.removeEventListener("pointermove",C),(V=i.domElement)==null||V.ownerDocument.removeEventListener("pointerup",x)),i.dispatchEvent(o),l=a.NONE}function z(O){let Q;switch(O.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case si.DOLLY:if(i.enableZoom===!1)return;et(O),l=a.DOLLY;break;case si.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;ue(O),l=a.PAN}else{if(i.enableRotate===!1)return;je(O),l=a.ROTATE}break;case si.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;je(O),l=a.ROTATE}else{if(i.enablePan===!1)return;ue(O),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function te(O){if(i.enabled!==!1)switch(l){case a.ROTATE:if(i.enableRotate===!1)return;me(O);break;case a.DOLLY:if(i.enableZoom===!1)return;ie(O);break;case a.PAN:if(i.enablePan===!1)return;w(O);break}}function ae(O){i.enabled===!1||i.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(O.preventDefault(),i.dispatchEvent(s),F(O),i.dispatchEvent(o))}function Z(O){i.enabled===!1||i.enablePan===!1||G(O)}function Ce(O){switch(Ee(O),d.length){case 1:switch(i.touches.ONE){case Ai.ROTATE:if(i.enableRotate===!1)return;P(),l=a.TOUCH_ROTATE;break;case Ai.PAN:if(i.enablePan===!1)return;L(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case Ai.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(),l=a.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;K(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function ve(O){switch(Ee(O),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;se(O),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;U(O),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ce(O),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ne(O),i.update();break;default:l=a.NONE}}function Pe(O){i.enabled!==!1&&O.preventDefault()}function Ue(O){d.push(O)}function ge(O){delete b[O.pointerId];for(let Q=0;Q<d.length;Q++)if(d[Q].pointerId==O.pointerId){d.splice(Q,1);return}}function Ee(O){let Q=b[O.pointerId];Q===void 0&&(Q=new ke,b[O.pointerId]=Q),Q.set(O.pageX,O.pageY)}function Te(O){const Q=O.pointerId===d[0].pointerId?d[1]:d[0];return b[Q.pointerId]}this.dollyIn=(O=k())=>{xe(O),i.update()},this.dollyOut=(O=k())=>{de(O),i.update()},this.getScale=()=>g,this.setScale=O=>{he(O),i.update()},this.getZoomScale=()=>k(),t!==void 0&&this.connect(t),this.update()}}var $a;/Mac/.test(($a=globalThis?.navigator)===null||$a===void 0?void 0:$a.platform);function lo(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Za={exports:{}},Of;function Eb(){return Of||(Of=1,(function(n,e){(function(t){n.exports=t()})(function(){return(function t(i,r,s){function o(c,u){if(!r[c]){if(!i[c]){var f=typeof lo=="function"&&lo;if(!u&&f)return f(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=r[c]={exports:{}},i[c][0].call(u.exports,function(g){var _=i[c][1][g];return o(_||g)},u,u.exports,t,i,r,s)}return r[c].exports}for(var a=typeof lo=="function"&&lo,l=0;l<s.length;l++)o(s[l]);return o})({1:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){var v=t("crypto");function y(M,R){R=A(M,R);var S;return(S=R.algorithm!=="passthrough"?v.createHash(R.algorithm):new N).write===void 0&&(S.write=S.update,S.end=S.update),E(R,S).dispatch(M),S.update||S.end(""),S.digest?S.digest(R.encoding==="buffer"?void 0:R.encoding):(M=S.read(),R.encoding!=="buffer"?M.toString(R.encoding):M)}(r=i.exports=y).sha1=function(M){return y(M)},r.keys=function(M){return y(M,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(M){return y(M,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(M){return y(M,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var m=v.getHashes?v.getHashes().slice():["sha1","md5"],p=(m.push("passthrough"),["buffer","hex","binary","base64"]);function A(M,R){var S={};if(S.algorithm=(R=R||{}).algorithm||"sha1",S.encoding=R.encoding||"hex",S.excludeValues=!!R.excludeValues,S.algorithm=S.algorithm.toLowerCase(),S.encoding=S.encoding.toLowerCase(),S.ignoreUnknown=R.ignoreUnknown===!0,S.respectType=R.respectType!==!1,S.respectFunctionNames=R.respectFunctionNames!==!1,S.respectFunctionProperties=R.respectFunctionProperties!==!1,S.unorderedArrays=R.unorderedArrays===!0,S.unorderedSets=R.unorderedSets!==!1,S.unorderedObjects=R.unorderedObjects!==!1,S.replacer=R.replacer||void 0,S.excludeKeys=R.excludeKeys||void 0,M===void 0)throw new Error("Object argument required.");for(var h=0;h<m.length;++h)m[h].toLowerCase()===S.algorithm.toLowerCase()&&(S.algorithm=m[h]);if(m.indexOf(S.algorithm)===-1)throw new Error('Algorithm "'+S.algorithm+'"  not supported. supported values: '+m.join(", "));if(p.indexOf(S.encoding)===-1&&S.algorithm!=="passthrough")throw new Error('Encoding "'+S.encoding+'"  not supported. supported values: '+p.join(", "));return S}function T(M){if(typeof M=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(M))!=null}function E(M,R,S){S=S||[];function h(d){return R.update?R.update(d,"utf8"):R.write(d,"utf8")}return{dispatch:function(d){return this["_"+((d=M.replacer?M.replacer(d):d)===null?"null":typeof d)](d)},_object:function(d){var b,D=Object.prototype.toString.call(d),k=/\[object (.*)\]/i.exec(D);if(k=(k=k?k[1]:"unknown:["+D+"]").toLowerCase(),0<=(D=S.indexOf(d)))return this.dispatch("[CIRCULAR:"+D+"]");if(S.push(d),a!==void 0&&a.isBuffer&&a.isBuffer(d))return h("buffer:"),h(d);if(k==="object"||k==="function"||k==="asyncfunction")return D=Object.keys(d),M.unorderedObjects&&(D=D.sort()),M.respectType===!1||T(d)||D.splice(0,0,"prototype","__proto__","constructor"),M.excludeKeys&&(D=D.filter(function(Y){return!M.excludeKeys(Y)})),h("object:"+D.length+":"),b=this,D.forEach(function(Y){b.dispatch(Y),h(":"),M.excludeValues||b.dispatch(d[Y]),h(",")});if(!this["_"+k]){if(M.ignoreUnknown)return h("["+k+"]");throw new Error('Unknown object type "'+k+'"')}this["_"+k](d)},_array:function(d,Y){Y=Y!==void 0?Y:M.unorderedArrays!==!1;var D=this;if(h("array:"+d.length+":"),!Y||d.length<=1)return d.forEach(function(j){return D.dispatch(j)});var k=[],Y=d.map(function(j){var H=new N,W=S.slice();return E(M,H,W).dispatch(j),k=k.concat(W.slice(S.length)),H.read().toString()});return S=S.concat(k),Y.sort(),this._array(Y,!1)},_date:function(d){return h("date:"+d.toJSON())},_symbol:function(d){return h("symbol:"+d.toString())},_error:function(d){return h("error:"+d.toString())},_boolean:function(d){return h("bool:"+d.toString())},_string:function(d){h("string:"+d.length+":"),h(d.toString())},_function:function(d){h("fn:"),T(d)?this.dispatch("[native]"):this.dispatch(d.toString()),M.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(d.name)),M.respectFunctionProperties&&this._object(d)},_number:function(d){return h("number:"+d.toString())},_xml:function(d){return h("xml:"+d.toString())},_null:function(){return h("Null")},_undefined:function(){return h("Undefined")},_regexp:function(d){return h("regex:"+d.toString())},_uint8array:function(d){return h("uint8array:"),this.dispatch(Array.prototype.slice.call(d))},_uint8clampedarray:function(d){return h("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(d))},_int8array:function(d){return h("int8array:"),this.dispatch(Array.prototype.slice.call(d))},_uint16array:function(d){return h("uint16array:"),this.dispatch(Array.prototype.slice.call(d))},_int16array:function(d){return h("int16array:"),this.dispatch(Array.prototype.slice.call(d))},_uint32array:function(d){return h("uint32array:"),this.dispatch(Array.prototype.slice.call(d))},_int32array:function(d){return h("int32array:"),this.dispatch(Array.prototype.slice.call(d))},_float32array:function(d){return h("float32array:"),this.dispatch(Array.prototype.slice.call(d))},_float64array:function(d){return h("float64array:"),this.dispatch(Array.prototype.slice.call(d))},_arraybuffer:function(d){return h("arraybuffer:"),this.dispatch(new Uint8Array(d))},_url:function(d){return h("url:"+d.toString())},_map:function(d){return h("map:"),d=Array.from(d),this._array(d,M.unorderedSets!==!1)},_set:function(d){return h("set:"),d=Array.from(d),this._array(d,M.unorderedSets!==!1)},_file:function(d){return h("file:"),this.dispatch([d.name,d.size,d.type,d.lastModfied])},_blob:function(){if(M.ignoreUnknown)return h("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return h("domwindow")},_bigint:function(d){return h("bigint:"+d.toString())},_process:function(){return h("process")},_timer:function(){return h("timer")},_pipe:function(){return h("pipe")},_tcp:function(){return h("tcp")},_udp:function(){return h("udp")},_tty:function(){return h("tty")},_statwatcher:function(){return h("statwatcher")},_securecontext:function(){return h("securecontext")},_connection:function(){return h("connection")},_zlib:function(){return h("zlib")},_context:function(){return h("context")},_nodescript:function(){return h("nodescript")},_httpparser:function(){return h("httpparser")},_dataview:function(){return h("dataview")},_signal:function(){return h("signal")},_fsevent:function(){return h("fsevent")},_tlswrap:function(){return h("tlswrap")}}}function N(){return{buf:"",write:function(M){this.buf+=M},end:function(M){this.buf+=M},read:function(){return this.buf}}}r.writeToStream=function(M,R,S){return S===void 0&&(S=R,R={}),E(R=A(M,R),S).dispatch(M)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){(function(v){var y=typeof Uint8Array<"u"?Uint8Array:Array,m=43,p=47,A=48,T=97,E=65,N=45,M=95;function R(S){return S=S.charCodeAt(0),S===m||S===N?62:S===p||S===M?63:S<A?-1:S<A+10?S-A+26+26:S<E+26?S-E:S<T+26?S-T+26:void 0}v.toByteArray=function(S){var h,d;if(0<S.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var b=S.length,b=S.charAt(b-2)==="="?2:S.charAt(b-1)==="="?1:0,D=new y(3*S.length/4-b),k=0<b?S.length-4:S.length,Y=0;function j(H){D[Y++]=H}for(h=0;h<k;h+=4,0)j((16711680&(d=R(S.charAt(h))<<18|R(S.charAt(h+1))<<12|R(S.charAt(h+2))<<6|R(S.charAt(h+3))))>>16),j((65280&d)>>8),j(255&d);return b==2?j(255&(d=R(S.charAt(h))<<2|R(S.charAt(h+1))>>4)):b==1&&(j((d=R(S.charAt(h))<<10|R(S.charAt(h+1))<<4|R(S.charAt(h+2))>>2)>>8&255),j(255&d)),D},v.fromByteArray=function(S){var h,d,b,D,k=S.length%3,Y="";function j(H){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(H)}for(h=0,b=S.length-k;h<b;h+=3)d=(S[h]<<16)+(S[h+1]<<8)+S[h+2],Y+=j((D=d)>>18&63)+j(D>>12&63)+j(D>>6&63)+j(63&D);switch(k){case 1:Y=(Y+=j((d=S[S.length-1])>>2))+j(d<<4&63)+"==";break;case 2:Y=(Y=(Y+=j((d=(S[S.length-2]<<8)+S[S.length-1])>>10))+j(d>>4&63))+j(d<<2&63)+"="}return Y}})(r===void 0?this.base64js={}:r)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,i,r){(function(s,o,m,l,c,u,f,g,_){var v=t("base64-js"),y=t("ieee754");function m(w,F,G){if(!(this instanceof m))return new m(w,F,G);var P,L,B,$,K=typeof w;if(F==="base64"&&K=="string")for(w=($=w).trim?$.trim():$.replace(/^\s+|\s+$/g,"");w.length%4!=0;)w+="=";if(K=="number")P=J(w);else if(K=="string")P=m.byteLength(w,F);else{if(K!="object")throw new Error("First argument needs to be a number, array or string.");P=J(w.length)}if(m._useTypedArrays?L=m._augment(new Uint8Array(P)):((L=this).length=P,L._isBuffer=!0),m._useTypedArrays&&typeof w.byteLength=="number")L._set(w);else if(he($=w)||m.isBuffer($)||$&&typeof $=="object"&&typeof $.length=="number")for(B=0;B<P;B++)m.isBuffer(w)?L[B]=w.readUInt8(B):L[B]=w[B];else if(K=="string")L.write(w,0,F);else if(K=="number"&&!m._useTypedArrays&&!G)for(B=0;B<P;B++)L[B]=0;return L}function p(w,F,G,P){return m._charsWritten=Oe((function(L){for(var B=[],$=0;$<L.length;$++)B.push(255&L.charCodeAt($));return B})(F),w,G,P)}function A(w,F,G,P){return m._charsWritten=Oe((function(L){for(var B,$,K=[],se=0;se<L.length;se++)$=L.charCodeAt(se),B=$>>8,$=$%256,K.push($),K.push(B);return K})(F),w,G,P)}function T(w,F,G){var P="";G=Math.min(w.length,G);for(var L=F;L<G;L++)P+=String.fromCharCode(w[L]);return P}function E(w,F,G,B){B||(ie(typeof G=="boolean","missing or invalid endian"),ie(F!=null,"missing offset"),ie(F+1<w.length,"Trying to read beyond buffer length"));var L,B=w.length;if(!(B<=F))return G?(L=w[F],F+1<B&&(L|=w[F+1]<<8)):(L=w[F]<<8,F+1<B&&(L|=w[F+1])),L}function N(w,F,G,B){B||(ie(typeof G=="boolean","missing or invalid endian"),ie(F!=null,"missing offset"),ie(F+3<w.length,"Trying to read beyond buffer length"));var L,B=w.length;if(!(B<=F))return G?(F+2<B&&(L=w[F+2]<<16),F+1<B&&(L|=w[F+1]<<8),L|=w[F],F+3<B&&(L+=w[F+3]<<24>>>0)):(F+1<B&&(L=w[F+1]<<16),F+2<B&&(L|=w[F+2]<<8),F+3<B&&(L|=w[F+3]),L+=w[F]<<24>>>0),L}function M(w,F,G,P){if(P||(ie(typeof G=="boolean","missing or invalid endian"),ie(F!=null,"missing offset"),ie(F+1<w.length,"Trying to read beyond buffer length")),!(w.length<=F))return P=E(w,F,G,!0),32768&P?-1*(65535-P+1):P}function R(w,F,G,P){if(P||(ie(typeof G=="boolean","missing or invalid endian"),ie(F!=null,"missing offset"),ie(F+3<w.length,"Trying to read beyond buffer length")),!(w.length<=F))return P=N(w,F,G,!0),2147483648&P?-1*(4294967295-P+1):P}function S(w,F,G,P){return P||(ie(typeof G=="boolean","missing or invalid endian"),ie(F+3<w.length,"Trying to read beyond buffer length")),y.read(w,F,G,23,4)}function h(w,F,G,P){return P||(ie(typeof G=="boolean","missing or invalid endian"),ie(F+7<w.length,"Trying to read beyond buffer length")),y.read(w,F,G,52,8)}function d(w,F,G,P,L){if(L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+1<w.length,"trying to write beyond buffer length"),et(F,65535)),L=w.length,!(L<=G))for(var B=0,$=Math.min(L-G,2);B<$;B++)w[G+B]=(F&255<<8*(P?B:1-B))>>>8*(P?B:1-B)}function b(w,F,G,P,L){if(L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+3<w.length,"trying to write beyond buffer length"),et(F,4294967295)),L=w.length,!(L<=G))for(var B=0,$=Math.min(L-G,4);B<$;B++)w[G+B]=F>>>8*(P?B:3-B)&255}function D(w,F,G,P,L){L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+1<w.length,"Trying to write beyond buffer length"),ue(F,32767,-32768)),w.length<=G||d(w,0<=F?F:65535+F+1,G,P,L)}function k(w,F,G,P,L){L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+3<w.length,"Trying to write beyond buffer length"),ue(F,2147483647,-2147483648)),w.length<=G||b(w,0<=F?F:4294967295+F+1,G,P,L)}function Y(w,F,G,P,L){L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+3<w.length,"Trying to write beyond buffer length"),me(F,34028234663852886e22,-34028234663852886e22)),w.length<=G||y.write(w,F,G,P,23,4)}function j(w,F,G,P,L){L||(ie(F!=null,"missing value"),ie(typeof P=="boolean","missing or invalid endian"),ie(G!=null,"missing offset"),ie(G+7<w.length,"Trying to write beyond buffer length"),me(F,17976931348623157e292,-17976931348623157e292)),w.length<=G||y.write(w,F,G,P,52,8)}r.Buffer=m,r.SlowBuffer=m,r.INSPECT_MAX_BYTES=50,m.poolSize=8192,m._useTypedArrays=(function(){try{var w=new ArrayBuffer(0),F=new Uint8Array(w);return F.foo=function(){return 42},F.foo()===42&&typeof F.subarray=="function"}catch{return!1}})(),m.isEncoding=function(w){switch(String(w).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},m.isBuffer=function(w){return!(w==null||!w._isBuffer)},m.byteLength=function(w,F){var G;switch(w+="",F||"utf8"){case"hex":G=w.length/2;break;case"utf8":case"utf-8":G=xe(w).length;break;case"ascii":case"binary":case"raw":G=w.length;break;case"base64":G=Ne(w).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":G=2*w.length;break;default:throw new Error("Unknown encoding")}return G},m.concat=function(w,F){if(ie(he(w),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),w.length===0)return new m(0);if(w.length===1)return w[0];if(typeof F!="number")for(L=F=0;L<w.length;L++)F+=w[L].length;for(var G=new m(F),P=0,L=0;L<w.length;L++){var B=w[L];B.copy(G,P),P+=B.length}return G},m.prototype.write=function(w,F,G,P){isFinite(F)?isFinite(G)||(P=G,G=void 0):(se=P,P=F,F=G,G=se),F=Number(F)||0;var L,B,$,K,se=this.length-F;switch((!G||se<(G=Number(G)))&&(G=se),P=String(P||"utf8").toLowerCase()){case"hex":L=(function(U,fe,ce,ne){ce=Number(ce)||0;var le=U.length-ce;(!ne||le<(ne=Number(ne)))&&(ne=le),ie((le=fe.length)%2==0,"Invalid hex string"),le/2<ne&&(ne=le/2);for(var C=0;C<ne;C++){var x=parseInt(fe.substr(2*C,2),16);ie(!isNaN(x),"Invalid hex string"),U[ce+C]=x}return m._charsWritten=2*C,C})(this,w,F,G);break;case"utf8":case"utf-8":B=this,$=F,K=G,L=m._charsWritten=Oe(xe(w),B,$,K);break;case"ascii":case"binary":L=p(this,w,F,G);break;case"base64":B=this,$=F,K=G,L=m._charsWritten=Oe(Ne(w),B,$,K);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=A(this,w,F,G);break;default:throw new Error("Unknown encoding")}return L},m.prototype.toString=function(w,F,G){var P,L,B,$,K=this;if(w=String(w||"utf8").toLowerCase(),F=Number(F)||0,(G=G!==void 0?Number(G):K.length)===F)return"";switch(w){case"hex":P=(function(se,U,fe){var ce=se.length;(!U||U<0)&&(U=0),(!fe||fe<0||ce<fe)&&(fe=ce);for(var ne="",le=U;le<fe;le++)ne+=de(se[le]);return ne})(K,F,G);break;case"utf8":case"utf-8":P=(function(se,U,fe){var ce="",ne="";fe=Math.min(se.length,fe);for(var le=U;le<fe;le++)se[le]<=127?(ce+=je(ne)+String.fromCharCode(se[le]),ne=""):ne+="%"+se[le].toString(16);return ce+je(ne)})(K,F,G);break;case"ascii":case"binary":P=T(K,F,G);break;case"base64":L=K,$=G,P=(B=F)===0&&$===L.length?v.fromByteArray(L):v.fromByteArray(L.slice(B,$));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":P=(function(se,U,fe){for(var ce=se.slice(U,fe),ne="",le=0;le<ce.length;le+=2)ne+=String.fromCharCode(ce[le]+256*ce[le+1]);return ne})(K,F,G);break;default:throw new Error("Unknown encoding")}return P},m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},m.prototype.copy=function(w,F,G,P){if(F=F||0,(P=P||P===0?P:this.length)!==(G=G||0)&&w.length!==0&&this.length!==0){ie(G<=P,"sourceEnd < sourceStart"),ie(0<=F&&F<w.length,"targetStart out of bounds"),ie(0<=G&&G<this.length,"sourceStart out of bounds"),ie(0<=P&&P<=this.length,"sourceEnd out of bounds"),P>this.length&&(P=this.length);var L=(P=w.length-F<P-G?w.length-F+G:P)-G;if(L<100||!m._useTypedArrays)for(var B=0;B<L;B++)w[B+F]=this[B+G];else w._set(this.subarray(G,G+L),F)}},m.prototype.slice=function(w,F){var G=this.length;if(w=W(w,G,0),F=W(F,G,G),m._useTypedArrays)return m._augment(this.subarray(w,F));for(var P=F-w,L=new m(P,void 0,!0),B=0;B<P;B++)L[B]=this[B+w];return L},m.prototype.get=function(w){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(w)},m.prototype.set=function(w,F){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(w,F)},m.prototype.readUInt8=function(w,F){if(F||(ie(w!=null,"missing offset"),ie(w<this.length,"Trying to read beyond buffer length")),!(w>=this.length))return this[w]},m.prototype.readUInt16LE=function(w,F){return E(this,w,!0,F)},m.prototype.readUInt16BE=function(w,F){return E(this,w,!1,F)},m.prototype.readUInt32LE=function(w,F){return N(this,w,!0,F)},m.prototype.readUInt32BE=function(w,F){return N(this,w,!1,F)},m.prototype.readInt8=function(w,F){if(F||(ie(w!=null,"missing offset"),ie(w<this.length,"Trying to read beyond buffer length")),!(w>=this.length))return 128&this[w]?-1*(255-this[w]+1):this[w]},m.prototype.readInt16LE=function(w,F){return M(this,w,!0,F)},m.prototype.readInt16BE=function(w,F){return M(this,w,!1,F)},m.prototype.readInt32LE=function(w,F){return R(this,w,!0,F)},m.prototype.readInt32BE=function(w,F){return R(this,w,!1,F)},m.prototype.readFloatLE=function(w,F){return S(this,w,!0,F)},m.prototype.readFloatBE=function(w,F){return S(this,w,!1,F)},m.prototype.readDoubleLE=function(w,F){return h(this,w,!0,F)},m.prototype.readDoubleBE=function(w,F){return h(this,w,!1,F)},m.prototype.writeUInt8=function(w,F,G){G||(ie(w!=null,"missing value"),ie(F!=null,"missing offset"),ie(F<this.length,"trying to write beyond buffer length"),et(w,255)),F>=this.length||(this[F]=w)},m.prototype.writeUInt16LE=function(w,F,G){d(this,w,F,!0,G)},m.prototype.writeUInt16BE=function(w,F,G){d(this,w,F,!1,G)},m.prototype.writeUInt32LE=function(w,F,G){b(this,w,F,!0,G)},m.prototype.writeUInt32BE=function(w,F,G){b(this,w,F,!1,G)},m.prototype.writeInt8=function(w,F,G){G||(ie(w!=null,"missing value"),ie(F!=null,"missing offset"),ie(F<this.length,"Trying to write beyond buffer length"),ue(w,127,-128)),F>=this.length||(0<=w?this.writeUInt8(w,F,G):this.writeUInt8(255+w+1,F,G))},m.prototype.writeInt16LE=function(w,F,G){D(this,w,F,!0,G)},m.prototype.writeInt16BE=function(w,F,G){D(this,w,F,!1,G)},m.prototype.writeInt32LE=function(w,F,G){k(this,w,F,!0,G)},m.prototype.writeInt32BE=function(w,F,G){k(this,w,F,!1,G)},m.prototype.writeFloatLE=function(w,F,G){Y(this,w,F,!0,G)},m.prototype.writeFloatBE=function(w,F,G){Y(this,w,F,!1,G)},m.prototype.writeDoubleLE=function(w,F,G){j(this,w,F,!0,G)},m.prototype.writeDoubleBE=function(w,F,G){j(this,w,F,!1,G)},m.prototype.fill=function(w,F,G){if(F=F||0,G=G||this.length,ie(typeof(w=typeof(w=w||0)=="string"?w.charCodeAt(0):w)=="number"&&!isNaN(w),"value is not a number"),ie(F<=G,"end < start"),G!==F&&this.length!==0){ie(0<=F&&F<this.length,"start out of bounds"),ie(0<=G&&G<=this.length,"end out of bounds");for(var P=F;P<G;P++)this[P]=w}},m.prototype.inspect=function(){for(var w=[],F=this.length,G=0;G<F;G++)if(w[G]=de(this[G]),G===r.INSPECT_MAX_BYTES){w[G+1]="...";break}return"<Buffer "+w.join(" ")+">"},m.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(m._useTypedArrays)return new m(this).buffer;for(var w=new Uint8Array(this.length),F=0,G=w.length;F<G;F+=1)w[F]=this[F];return w.buffer};var H=m.prototype;function W(w,F,G){return typeof w!="number"?G:F<=(w=~~w)?F:0<=w||0<=(w+=F)?w:0}function J(w){return(w=~~Math.ceil(+w))<0?0:w}function he(w){return(Array.isArray||function(F){return Object.prototype.toString.call(F)==="[object Array]"})(w)}function de(w){return w<16?"0"+w.toString(16):w.toString(16)}function xe(w){for(var F=[],G=0;G<w.length;G++){var P=w.charCodeAt(G);if(P<=127)F.push(w.charCodeAt(G));else for(var L=G,B=(55296<=P&&P<=57343&&G++,encodeURIComponent(w.slice(L,G+1)).substr(1).split("%")),$=0;$<B.length;$++)F.push(parseInt(B[$],16))}return F}function Ne(w){return v.toByteArray(w)}function Oe(w,F,G,P){for(var L=0;L<P&&!(L+G>=F.length||L>=w.length);L++)F[L+G]=w[L];return L}function je(w){try{return decodeURIComponent(w)}catch{return"�"}}function et(w,F){ie(typeof w=="number","cannot write a non-number as a number"),ie(0<=w,"specified a negative value for writing an unsigned value"),ie(w<=F,"value is larger than maximum value for type"),ie(Math.floor(w)===w,"value has a fractional component")}function ue(w,F,G){ie(typeof w=="number","cannot write a non-number as a number"),ie(w<=F,"value larger than maximum allowed value"),ie(G<=w,"value smaller than minimum allowed value"),ie(Math.floor(w)===w,"value has a fractional component")}function me(w,F,G){ie(typeof w=="number","cannot write a non-number as a number"),ie(w<=F,"value larger than maximum allowed value"),ie(G<=w,"value smaller than minimum allowed value")}function ie(w,F){if(!w)throw new Error(F||"Failed assertion")}m._augment=function(w){return w._isBuffer=!0,w._get=w.get,w._set=w.set,w.get=H.get,w.set=H.set,w.write=H.write,w.toString=H.toString,w.toLocaleString=H.toString,w.toJSON=H.toJSON,w.copy=H.copy,w.slice=H.slice,w.readUInt8=H.readUInt8,w.readUInt16LE=H.readUInt16LE,w.readUInt16BE=H.readUInt16BE,w.readUInt32LE=H.readUInt32LE,w.readUInt32BE=H.readUInt32BE,w.readInt8=H.readInt8,w.readInt16LE=H.readInt16LE,w.readInt16BE=H.readInt16BE,w.readInt32LE=H.readInt32LE,w.readInt32BE=H.readInt32BE,w.readFloatLE=H.readFloatLE,w.readFloatBE=H.readFloatBE,w.readDoubleLE=H.readDoubleLE,w.readDoubleBE=H.readDoubleBE,w.writeUInt8=H.writeUInt8,w.writeUInt16LE=H.writeUInt16LE,w.writeUInt16BE=H.writeUInt16BE,w.writeUInt32LE=H.writeUInt32LE,w.writeUInt32BE=H.writeUInt32BE,w.writeInt8=H.writeInt8,w.writeInt16LE=H.writeInt16LE,w.writeInt16BE=H.writeInt16BE,w.writeInt32LE=H.writeInt32LE,w.writeInt32BE=H.writeInt32BE,w.writeFloatLE=H.writeFloatLE,w.writeFloatBE=H.writeFloatBE,w.writeDoubleLE=H.writeDoubleLE,w.writeDoubleBE=H.writeDoubleBE,w.fill=H.fill,w.inspect=H.inspect,w.toArrayBuffer=H.toArrayBuffer,w}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,i,r){(function(s,o,v,l,c,u,f,g,_){var v=t("buffer").Buffer,y=4,m=new v(y);m.fill(0),i.exports={hash:function(p,A,T,E){for(var N=A((function(d,b){d.length%y!=0&&(D=d.length+(y-d.length%y),d=v.concat([d,m],D));for(var D,k=[],Y=b?d.readInt32BE:d.readInt32LE,j=0;j<d.length;j+=y)k.push(Y.call(d,j));return k})(p=v.isBuffer(p)?p:new v(p),E),8*p.length),A=E,M=new v(T),R=A?M.writeInt32BE:M.writeInt32LE,S=0;S<N.length;S++)R.call(M,N[S],4*S,!0);return M}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,i,r){(function(s,o,v,l,c,u,f,g,_){var v=t("buffer").Buffer,y=t("./sha"),m=t("./sha256"),p=t("./rng"),A={sha1:y,sha256:m,md5:t("./md5")},T=64,E=new v(T);function N(d,b){var D=A[d=d||"sha1"],k=[];return D||M("algorithm:",d,"is not yet supported"),{update:function(Y){return v.isBuffer(Y)||(Y=new v(Y)),k.push(Y),Y.length,this},digest:function(Y){var j=v.concat(k),j=b?(function(H,W,J){v.isBuffer(W)||(W=new v(W)),v.isBuffer(J)||(J=new v(J)),W.length>T?W=H(W):W.length<T&&(W=v.concat([W,E],T));for(var he=new v(T),de=new v(T),xe=0;xe<T;xe++)he[xe]=54^W[xe],de[xe]=92^W[xe];return J=H(v.concat([he,J])),H(v.concat([de,J]))})(D,b,j):D(j);return k=null,Y?j.toString(Y):j}}}function M(){var d=[].slice.call(arguments).join(" ");throw new Error([d,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}E.fill(0),r.createHash=function(d){return N(d)},r.createHmac=N,r.randomBytes=function(d,b){if(!b||!b.call)return new v(p(d));try{b.call(this,void 0,new v(p(d)))}catch(D){b(D)}};var R,S=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],h=function(d){r[d]=function(){M("sorry,",d,"is not implemented yet")}};for(R in S)h(S[R])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){var v=t("./helpers");function y(M,R){M[R>>5]|=128<<R%32,M[14+(R+64>>>9<<4)]=R;for(var S=1732584193,h=-271733879,d=-1732584194,b=271733878,D=0;D<M.length;D+=16){var k=S,Y=h,j=d,H=b,S=p(S,h,d,b,M[D+0],7,-680876936),b=p(b,S,h,d,M[D+1],12,-389564586),d=p(d,b,S,h,M[D+2],17,606105819),h=p(h,d,b,S,M[D+3],22,-1044525330);S=p(S,h,d,b,M[D+4],7,-176418897),b=p(b,S,h,d,M[D+5],12,1200080426),d=p(d,b,S,h,M[D+6],17,-1473231341),h=p(h,d,b,S,M[D+7],22,-45705983),S=p(S,h,d,b,M[D+8],7,1770035416),b=p(b,S,h,d,M[D+9],12,-1958414417),d=p(d,b,S,h,M[D+10],17,-42063),h=p(h,d,b,S,M[D+11],22,-1990404162),S=p(S,h,d,b,M[D+12],7,1804603682),b=p(b,S,h,d,M[D+13],12,-40341101),d=p(d,b,S,h,M[D+14],17,-1502002290),S=A(S,h=p(h,d,b,S,M[D+15],22,1236535329),d,b,M[D+1],5,-165796510),b=A(b,S,h,d,M[D+6],9,-1069501632),d=A(d,b,S,h,M[D+11],14,643717713),h=A(h,d,b,S,M[D+0],20,-373897302),S=A(S,h,d,b,M[D+5],5,-701558691),b=A(b,S,h,d,M[D+10],9,38016083),d=A(d,b,S,h,M[D+15],14,-660478335),h=A(h,d,b,S,M[D+4],20,-405537848),S=A(S,h,d,b,M[D+9],5,568446438),b=A(b,S,h,d,M[D+14],9,-1019803690),d=A(d,b,S,h,M[D+3],14,-187363961),h=A(h,d,b,S,M[D+8],20,1163531501),S=A(S,h,d,b,M[D+13],5,-1444681467),b=A(b,S,h,d,M[D+2],9,-51403784),d=A(d,b,S,h,M[D+7],14,1735328473),S=T(S,h=A(h,d,b,S,M[D+12],20,-1926607734),d,b,M[D+5],4,-378558),b=T(b,S,h,d,M[D+8],11,-2022574463),d=T(d,b,S,h,M[D+11],16,1839030562),h=T(h,d,b,S,M[D+14],23,-35309556),S=T(S,h,d,b,M[D+1],4,-1530992060),b=T(b,S,h,d,M[D+4],11,1272893353),d=T(d,b,S,h,M[D+7],16,-155497632),h=T(h,d,b,S,M[D+10],23,-1094730640),S=T(S,h,d,b,M[D+13],4,681279174),b=T(b,S,h,d,M[D+0],11,-358537222),d=T(d,b,S,h,M[D+3],16,-722521979),h=T(h,d,b,S,M[D+6],23,76029189),S=T(S,h,d,b,M[D+9],4,-640364487),b=T(b,S,h,d,M[D+12],11,-421815835),d=T(d,b,S,h,M[D+15],16,530742520),S=E(S,h=T(h,d,b,S,M[D+2],23,-995338651),d,b,M[D+0],6,-198630844),b=E(b,S,h,d,M[D+7],10,1126891415),d=E(d,b,S,h,M[D+14],15,-1416354905),h=E(h,d,b,S,M[D+5],21,-57434055),S=E(S,h,d,b,M[D+12],6,1700485571),b=E(b,S,h,d,M[D+3],10,-1894986606),d=E(d,b,S,h,M[D+10],15,-1051523),h=E(h,d,b,S,M[D+1],21,-2054922799),S=E(S,h,d,b,M[D+8],6,1873313359),b=E(b,S,h,d,M[D+15],10,-30611744),d=E(d,b,S,h,M[D+6],15,-1560198380),h=E(h,d,b,S,M[D+13],21,1309151649),S=E(S,h,d,b,M[D+4],6,-145523070),b=E(b,S,h,d,M[D+11],10,-1120210379),d=E(d,b,S,h,M[D+2],15,718787259),h=E(h,d,b,S,M[D+9],21,-343485551),S=N(S,k),h=N(h,Y),d=N(d,j),b=N(b,H)}return Array(S,h,d,b)}function m(M,R,S,h,d,b){return N((R=N(N(R,M),N(h,b)))<<d|R>>>32-d,S)}function p(M,R,S,h,d,b,D){return m(R&S|~R&h,M,R,d,b,D)}function A(M,R,S,h,d,b,D){return m(R&h|S&~h,M,R,d,b,D)}function T(M,R,S,h,d,b,D){return m(R^S^h,M,R,d,b,D)}function E(M,R,S,h,d,b,D){return m(S^(R|~h),M,R,d,b,D)}function N(M,R){var S=(65535&M)+(65535&R);return(M>>16)+(R>>16)+(S>>16)<<16|65535&S}i.exports=function(M){return v.hash(M,y,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){i.exports=function(v){for(var y,m=new Array(v),p=0;p<v;p++)(3&p)==0&&(y=4294967296*Math.random()),m[p]=y>>>((3&p)<<3)&255;return m}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){var v=t("./helpers");function y(A,T){A[T>>5]|=128<<24-T%32,A[15+(T+64>>9<<4)]=T;for(var E,N,M,R=Array(80),S=1732584193,h=-271733879,d=-1732584194,b=271733878,D=-1009589776,k=0;k<A.length;k+=16){for(var Y=S,j=h,H=d,W=b,J=D,he=0;he<80;he++){R[he]=he<16?A[k+he]:p(R[he-3]^R[he-8]^R[he-14]^R[he-16],1);var de=m(m(p(S,5),(de=h,N=d,M=b,(E=he)<20?de&N|~de&M:!(E<40)&&E<60?de&N|de&M|N&M:de^N^M)),m(m(D,R[he]),(E=he)<20?1518500249:E<40?1859775393:E<60?-1894007588:-899497514)),D=b,b=d,d=p(h,30),h=S,S=de}S=m(S,Y),h=m(h,j),d=m(d,H),b=m(b,W),D=m(D,J)}return Array(S,h,d,b,D)}function m(A,T){var E=(65535&A)+(65535&T);return(A>>16)+(T>>16)+(E>>16)<<16|65535&E}function p(A,T){return A<<T|A>>>32-T}i.exports=function(A){return v.hash(A,y,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){function v(T,E){var N=(65535&T)+(65535&E);return(T>>16)+(E>>16)+(N>>16)<<16|65535&N}function y(T,E){var N,M=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),R=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),S=new Array(64);T[E>>5]|=128<<24-E%32,T[15+(E+64>>9<<4)]=E;for(var h,d,b=0;b<T.length;b+=16){for(var D=R[0],k=R[1],Y=R[2],j=R[3],H=R[4],W=R[5],J=R[6],he=R[7],de=0;de<64;de++)S[de]=de<16?T[de+b]:v(v(v((d=S[de-2],p(d,17)^p(d,19)^A(d,10)),S[de-7]),(d=S[de-15],p(d,7)^p(d,18)^A(d,3))),S[de-16]),N=v(v(v(v(he,p(d=H,6)^p(d,11)^p(d,25)),H&W^~H&J),M[de]),S[de]),h=v(p(h=D,2)^p(h,13)^p(h,22),D&k^D&Y^k&Y),he=J,J=W,W=H,H=v(j,N),j=Y,Y=k,k=D,D=v(N,h);R[0]=v(D,R[0]),R[1]=v(k,R[1]),R[2]=v(Y,R[2]),R[3]=v(j,R[3]),R[4]=v(H,R[4]),R[5]=v(W,R[5]),R[6]=v(J,R[6]),R[7]=v(he,R[7])}return R}var m=t("./helpers"),p=function(T,E){return T>>>E|T<<32-E},A=function(T,E){return T>>>E};i.exports=function(T){return m.hash(T,y,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){r.read=function(v,y,m,p,b){var T,E,N=8*b-p-1,M=(1<<N)-1,R=M>>1,S=-7,h=m?b-1:0,d=m?-1:1,b=v[y+h];for(h+=d,T=b&(1<<-S)-1,b>>=-S,S+=N;0<S;T=256*T+v[y+h],h+=d,S-=8);for(E=T&(1<<-S)-1,T>>=-S,S+=p;0<S;E=256*E+v[y+h],h+=d,S-=8);if(T===0)T=1-R;else{if(T===M)return E?NaN:1/0*(b?-1:1);E+=Math.pow(2,p),T-=R}return(b?-1:1)*E*Math.pow(2,T-p)},r.write=function(v,y,m,p,A,D){var E,N,M=8*D-A-1,R=(1<<M)-1,S=R>>1,h=A===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=p?0:D-1,b=p?1:-1,D=y<0||y===0&&1/y<0?1:0;for(y=Math.abs(y),isNaN(y)||y===1/0?(N=isNaN(y)?1:0,E=R):(E=Math.floor(Math.log(y)/Math.LN2),y*(p=Math.pow(2,-E))<1&&(E--,p*=2),2<=(y+=1<=E+S?h/p:h*Math.pow(2,1-S))*p&&(E++,p/=2),R<=E+S?(N=0,E=R):1<=E+S?(N=(y*p-1)*Math.pow(2,A),E+=S):(N=y*Math.pow(2,S-1)*Math.pow(2,A),E=0));8<=A;v[m+d]=255&N,d+=b,N/=256,A-=8);for(E=E<<A|N,M+=A;0<M;v[m+d]=255&E,d+=b,E/=256,M-=8);v[m+d-b]|=128*D}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,i,r){(function(s,o,a,l,c,u,f,g,_){var v,y,m;function p(){}(s=i.exports={}).nextTick=(y=typeof window<"u"&&window.setImmediate,m=typeof window<"u"&&window.postMessage&&window.addEventListener,y?function(A){return window.setImmediate(A)}:m?(v=[],window.addEventListener("message",function(A){var T=A.source;T!==window&&T!==null||A.data!=="process-tick"||(A.stopPropagation(),0<v.length&&v.shift()())},!0),function(A){v.push(A),window.postMessage("process-tick","*")}):function(A){setTimeout(A,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.binding=function(A){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(A){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Za)),Za.exports}Eb();var Ja,Bf;function Qh(){return Bf||(Bf=1,Ja=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]),Ja}var Qa,zf;function Tb(){return zf||(zf=1,Qa=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]),Qa}var el,Vf;function ep(){return Vf||(Vf=1,el=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]),el}var tl,Hf;function wb(){if(Hf)return tl;Hf=1;var n=Qh();return tl=n.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),tl}var nl,Gf;function Ab(){if(Gf)return nl;Gf=1;var n=ep();return n=n.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),nl=n.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),nl}var il,kf;function Cb(){if(kf)return il;kf=1,il=E;var n=Qh(),e=Tb(),t=ep(),i=wb(),r=Ab(),s=999,o=9999,a=0,l=1,c=2,u=3,f=4,g=5,_=6,v=7,y=8,m=9,p=10,A=11,T=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(N){var M=0,R=0,S=s,h,d,b=[],D=[],k=1,Y=0,j=0,H=!1,W=!1,J="",he;N=N||{};var de=t,xe=n;N.version==="300 es"&&(de=r,xe=i);for(var Ne={},Oe={},M=0;M<de.length;M++)Ne[de[M]]=!0;for(var M=0;M<xe.length;M++)Oe[xe[M]]=!0;return function(U){return D=[],U!==null?et(U):ue()};function je(U){U.length&&D.push({type:T[S],data:U,position:j,line:k,column:Y})}function et(U){M=0,U.toString&&(U=U.toString()),J+=U.replace(/\r\n/g,`
`),he=J.length;for(var fe;h=J[M],M<he;){switch(fe=M,S){case a:M=G();break;case l:M=F();break;case c:M=w();break;case u:M=P();break;case f:M=$();break;case A:M=B();break;case g:M=K();break;case o:M=se();break;case m:M=ie();break;case s:M=me();break}fe!==M&&(J[fe]===`
`?(Y=0,++k):++Y)}return R+=M,J=J.slice(M),D}function ue(U){return b.length&&je(b.join("")),S=p,je("(eof)"),D}function me(){return b=b.length?[]:b,d==="/"&&h==="*"?(j=R+M-1,S=a,d=h,M+1):d==="/"&&h==="/"?(j=R+M-1,S=l,d=h,M+1):h==="#"?(S=c,j=R+M,M):/\s/.test(h)?(S=m,j=R+M,M):(H=/\d/.test(h),W=/[^\w_]/.test(h),j=R+M,S=H?f:W?u:o,M)}function ie(){return/[^\s]/g.test(h)?(je(b.join("")),S=s,M):(b.push(h),d=h,M+1)}function w(){return(h==="\r"||h===`
`)&&d!=="\\"?(je(b.join("")),S=s,M):(b.push(h),d=h,M+1)}function F(){return w()}function G(){return h==="/"&&d==="*"?(b.push(h),je(b.join("")),S=s,M+1):(b.push(h),d=h,M+1)}function P(){if(d==="."&&/\d/.test(h))return S=g,M;if(d==="/"&&h==="*")return S=a,M;if(d==="/"&&h==="/")return S=l,M;if(h==="."&&b.length){for(;L(b););return S=g,M}if(h===";"||h===")"||h==="("){if(b.length)for(;L(b););return je(h),S=s,M+1}var U=b.length===2&&h!=="=";if(/[\w_\d\s]/.test(h)||U){for(;L(b););return S=s,M}return b.push(h),d=h,M+1}function L(U){var fe=0,ce,ne;do{if(ce=e.indexOf(U.slice(0,U.length+fe).join("")),ne=e[ce],ce===-1){if(fe--+U.length>0)continue;ne=U.slice(0,1).join("")}return je(ne),j+=ne.length,b=b.slice(ne.length),b.length}while(!0)}function B(){return/[^a-fA-F0-9]/.test(h)?(je(b.join("")),S=s,M):(b.push(h),d=h,M+1)}function $(){return h==="."||/[eE]/.test(h)?(b.push(h),S=g,d=h,M+1):h==="x"&&b.length===1&&b[0]==="0"?(S=A,b.push(h),d=h,M+1):/[^\d]/.test(h)?(je(b.join("")),S=s,M):(b.push(h),d=h,M+1)}function K(){return h==="f"&&(b.push(h),d=h,M+=1),/[eE]/.test(h)||(h==="-"||h==="+")&&/[eE]/.test(d)?(b.push(h),d=h,M+1):/[^\d]/.test(h)?(je(b.join("")),S=s,M):(b.push(h),d=h,M+1)}function se(){if(/[^\d\w_]/.test(h)){var U=b.join("");return Oe[U]?S=y:Ne[U]?S=v:S=_,je(b.join("")),S=s,M}return b.push(h),d=h,M+1}}return il}var rl,Wf;function Rb(){if(Wf)return rl;Wf=1;var n=Cb();rl=e;function e(t,i){var r=n(i),s=[];return s=s.concat(r(t)),s=s.concat(r(null)),s}return rl}Rb();function Pb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Db(n){var e=Pb(n,"string");return typeof e=="symbol"?e:String(e)}function ht(n,e,t){return e=Db(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var We={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},en,Tr;en={},ht(en,"".concat(We.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(We.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),ht(en,"".concat(We.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(We.position,`;
  `)}),ht(en,"".concat(We.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(We.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),ht(en,"".concat(We.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(We.pointSize,`;
    `)}),ht(en,"".concat(We.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(We.diffuseColor,`;
  `)}),ht(en,"".concat(We.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(We.fragColor,`;
  `)}),ht(en,"".concat(We.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(We.emissive,`;
    `)}),ht(en,"".concat(We.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(We.roughness,`;
    `)}),ht(en,"".concat(We.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(We.metalness,`;
    `)}),ht(en,"".concat(We.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(We.ao,`;
    `)}),ht(en,"".concat(We.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(We.bump," - (dot(").concat(We.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),ht(en,"".concat(We.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(We.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(We.depthAlpha,`;
    `)});Tr={},ht(Tr,"".concat(We.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(We.position,`, 1.0 );
  `)}),ht(Tr,"".concat(We.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(We.position,`;
  `)}),ht(Tr,"".concat(We.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(We.diffuseColor,`;
  `)}),ht(Tr,"".concat(We.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(We.fragColor,`;
  `)});var tn;tn={},ht(tn,"".concat(We.position),"*"),ht(tn,"".concat(We.positionRaw),"*"),ht(tn,"".concat(We.normal),"*"),ht(tn,"".concat(We.pointSize),["PointsMaterial"]),ht(tn,"".concat(We.diffuseColor),"*"),ht(tn,"".concat(We.fragColor),"*"),ht(tn,"".concat(We.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),ht(tn,"".concat(We.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),ht(tn,"".concat(We.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),ht(tn,"".concat(We.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),ht(tn,"".concat(We.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),ht(tn,"".concat(We.depthAlpha),"*");var xo={exports:{}},Ib=xo.exports,Xf;function Lb(){return Xf||(Xf=1,(function(n,e){(function(t,i){n.exports=i()})(Ib,function(){var t=function(){function i(_){return o.appendChild(_.dom),_}function r(_){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===_?"block":"none";s=_}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(_){_.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=i(new t.Panel("FPS","#0ff","#002")),f=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var g=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){c++;var _=(performance||Date).now();if(f.update(_-a,200),_>l+1e3&&(u.update(1e3*c/(_-l),100),l=_,c=0,g)){var v=performance.memory;g.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return _},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,g=3*c,_=2*c,v=3*c,y=15*c,m=74*c,p=30*c,A=document.createElement("canvas");A.width=u,A.height=f,A.style.cssText="width:80px;height:48px";var T=A.getContext("2d");return T.font="bold "+9*c+"px Helvetica,Arial,sans-serif",T.textBaseline="top",T.fillStyle=s,T.fillRect(0,0,u,f),T.fillStyle=r,T.fillText(i,g,_),T.fillRect(v,y,m,p),T.fillStyle=s,T.globalAlpha=.9,T.fillRect(v,y,m,p),{dom:A,update:function(E,N){o=Math.min(o,E),a=Math.max(a,E),T.fillStyle=s,T.globalAlpha=1,T.fillRect(0,0,u,y),T.fillStyle=r,T.fillText(l(E)+" "+i+" ("+l(o)+"-"+l(a)+")",g,_),T.drawImage(A,v+c,y,m-c,p,v,y,m-c,p),T.fillRect(v+m-c,y,c,p),T.fillStyle=s,T.globalAlpha=.9,T.fillRect(v+m-c,y,c,l((1-E/N)*p))}}},t})})(xo)),xo.exports}Lb();function tp(n,e,t,i){const r=class extends Ln{key="";constructor(s={}){const o=Object.entries(n);super({uniforms:o.reduce((a,[l,c])=>{const u=wh.clone({[l]:{value:c}});return{...a,...u}},{}),vertexShader:e,fragmentShader:t}),o.forEach(([a])=>Object.defineProperty(this,a,{get:()=>this.uniforms[a].value,set:l=>this.uniforms[a].value=l})),Object.assign(this,s)}};return r.key=xh.generateUUID(),r}(function(){const n=new Un,e=new J_(new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new Do(e,3,0,!1)),n.setAttribute("uv",new Do(e,2,3,!1)),n})();new ot("black"),new ke(1,1);new X;new X;new X;const Ub=["target","auto-rotate","auto-rotate-speed","enable-damping","damping-factor","enable-pan","key-pan-speed","keys","max-azimuth-angle","min-azimuth-angle","max-polar-angle","min-polar-angle","min-distance","max-distance","min-zoom","max-zoom","touches","enable-zoom","zoom-speed","enable-rotate","rotate-speed","mouse-buttons","args"];var Nb=Cs({__name:"OrbitControls",props:{makeDefault:{type:Boolean,required:!1,default:!1},camera:{type:Object,required:!1},domElement:{type:null,required:!1},target:{type:null,required:!1,default:()=>[0,0,0]},enableDamping:{type:Boolean,required:!1,default:!0},dampingFactor:{type:Number,required:!1,default:.05},autoRotate:{type:Boolean,required:!1,default:!1},autoRotateSpeed:{type:Number,required:!1,default:2},enablePan:{type:Boolean,required:!1,default:!0},keyPanSpeed:{type:Number,required:!1,default:7},keys:{type:Object,required:!1},maxAzimuthAngle:{type:Number,required:!1,default:Number.POSITIVE_INFINITY},minAzimuthAngle:{type:Number,required:!1,default:Number.NEGATIVE_INFINITY},maxPolarAngle:{type:Number,required:!1,default:Math.PI},minPolarAngle:{type:Number,required:!1,default:0},minDistance:{type:Number,required:!1,default:0},maxDistance:{type:Number,required:!1,default:Number.POSITIVE_INFINITY},minZoom:{type:Number,required:!1,default:0},maxZoom:{type:Number,required:!1,default:Number.POSITIVE_INFINITY},touches:{type:Object,required:!1,default:()=>({ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN})},enableZoom:{type:Boolean,required:!1,default:!0},zoomSpeed:{type:Number,required:!1,default:1},enableRotate:{type:Boolean,required:!1,default:!0},rotateSpeed:{type:Number,required:!1,default:1},mouseButtons:{type:Object,required:!1,default:()=>({LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN})}},emits:["change","start","end"],setup(n,{expose:e,emit:t}){const i=n,r=t,{makeDefault:s,autoRotate:o,autoRotateSpeed:a,enableDamping:l,dampingFactor:c,enablePan:u,keyPanSpeed:f,maxAzimuthAngle:g,minAzimuthAngle:_,maxPolarAngle:v,minPolarAngle:y,minDistance:m,maxDistance:p,minZoom:A,maxZoom:T,enableZoom:E,zoomSpeed:N,enableRotate:M,touches:R,rotateSpeed:S,target:h,mouseButtons:d}=qp(i),{camera:b,renderer:D,extend:k,controls:Y,invalidate:j}=Zh(),H=rn(null);k({OrbitControls:bb}),qn(H,he=>{W(),he&&s.value?Y.value=he:Y.value=null});function W(){Ur(H.value,"change",()=>{r("change",H.value),j()}),Ur(H.value,"start",()=>r("start",H.value)),Ur(H.value,"end",()=>r("end",H.value))}const{onBeforeRender:J}=Jh();return J(()=>{H.value&&(l.value||o.value)&&(H.value.update(),o.value)}),nr(()=>{H.value&&H.value.dispose()}),e({instance:H}),(he,de)=>(n.camera||Je(b))&&(n.domElement||Je(D).domElement)?(yt(),At("TresOrbitControls",{ref_key:"controlsRef",ref:H,key:(n.camera||Je(b))?.uuid,target:Je(h),"auto-rotate":Je(o),"auto-rotate-speed":Je(a),"enable-damping":Je(l),"damping-factor":Je(c),"enable-pan":Je(u),"key-pan-speed":Je(f),keys:n.keys,"max-azimuth-angle":Je(g),"min-azimuth-angle":Je(_),"max-polar-angle":Je(v),"min-polar-angle":Je(y),"min-distance":Je(m),"max-distance":Je(p),"min-zoom":Je(A),"max-zoom":Je(T),touches:Je(R),"enable-zoom":Je(E),"zoom-speed":Je(N),"enable-rotate":Je(M),"rotate-speed":Je(S),"mouse-buttons":Je(d),args:[n.camera||Je(b),n.domElement||Je(D).domElement]},null,8,Ub)):ii("v-if",!0)}}),Fb=Nb;new X(0,0,0);new X(0,0,0);new X(0,0,0);new ot;const Ob={key:0,args:[0,1,64]},Bb={key:1,args:[.5,1,64]},zb={key:2},Vb=["tone-mapped","map","side","color"];new ot(16777215);function Hb(){const n=pn(!1),e=pn(!1),t=pn(null),i=pn(null),r=async()=>{if("xr"in navigator)try{n.value=await navigator.xr.isSessionSupported("immersive-ar")}catch(a){console.warn("WebXR support check failed:",a),n.value=!1}},s=async a=>{if(!n.value||e.value)return null;try{const l=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["hit-test","dom-overlay"]});return t.value=l,e.value=!0,await a.xr.setSession(l),i.value=await l.requestReferenceSpace("local-floor"),l.addEventListener("end",()=>{e.value=!1,t.value=null,i.value=null}),l}catch(l){return console.error("Failed to start AR session:",l),null}},o=async()=>{t.value&&await t.value.end()};return Yo(()=>{r()}),nr(()=>{o()}),{isSupported:n,isSessionActive:e,xrSession:t,xrRefSpace:i,startSession:s,endSession:o}}const Gb=Cs({__name:"AnimationController",setup(n){const{scene:e}=Vc(),{onBeforeRender:t}=Jh();let i=0;return t(({delta:r})=>{i+=r;const s=e.value;s&&s.traverse(o=>{if(o.isMesh){const a=o;a.geometry?.type==="BoxGeometry"?(a.rotation.y+=r*.5,a.position.y=.1+Math.sin(i*2)*.02):a.geometry?.type==="SphereGeometry"?a.position.y=.1+Math.sin(i*2+1)*.02:a.geometry?.type==="ConeGeometry"&&(a.rotation.y-=r*.3,a.position.y=.1+Math.sin(i*2+2)*.02)}})}),(r,s)=>null}}),kb={class:"ar-container"},Wb={class:"controls"},Xb={key:1,class:"not-supported"},qb=["position"],Yb=["color"],jb=["position"],Kb=["color"],$b=["position"],Zb=["color"],Jb=["rotation"],Qb={key:2,args:[10,20,"#444","#333"]},eE={key:0,class:"status"},tE={key:1,class:"instructions"},nE={class:"object-count"},iE=Cs({__name:"ARScene",setup(n){const e=rn(null),{isSupported:t,isSessionActive:i,startSession:r,endSession:s}=Hb();let o=1;const a=Ho([{type:"cube",position:[-.5,.1,-1],color:"#ef4444",id:o++},{type:"sphere",position:[0,.1,-1],color:"#3b82f6",id:o++},{type:"cone",position:[.5,.1,-1],color:"#22c55e",id:o++}]),l=_=>{_?.renderer?.instance?e.value=_.renderer.instance:_?.renderer&&(e.value=_.renderer)},c=async()=>{if(!e.value){console.warn("Renderer not ready");return}await r(e.value)},u=()=>{s()},f=()=>{const _=["cube","sphere","cone"],v=["#f59e0b","#8b5cf6","#ec4899","#14b8a6","#f97316"],y=Math.floor(Math.random()*_.length),m=Math.floor(Math.random()*v.length);a.push({type:_[y]??"cube",position:[(Math.random()-.5)*2,.1,-1-Math.random()],color:v[m]??"#f59e0b",id:o++})},g=()=>{a.length=0,Xo(()=>{a.push({type:"cube",position:[-.5,.1,-1],color:"#ef4444",id:o++},{type:"sphere",position:[0,.1,-1],color:"#3b82f6",id:o++},{type:"cone",position:[.5,.1,-1],color:"#22c55e",id:o++})})};return(_,v)=>(yt(),At("div",kb,[Mt("div",Wb,[Je(t)?(yt(),At(dn,{key:0},[Je(i)?(yt(),At("button",{key:1,onClick:u,class:"ar-button stop"}," ✕ Exit AR ")):(yt(),At("button",{key:0,onClick:c,class:"ar-button"}," 🥽 Start AR "))],64)):(yt(),At("div",Xb,[...v[0]||(v[0]=[Mt("p",null,"⚠️ WebXR AR not supported",-1),Mt("p",{class:"hint"},"Try on Android Chrome or use the 3D preview below",-1)])]))]),Mt("div",{class:"object-controls"},[Mt("button",{onClick:f,class:"control-btn"}," ➕ Add Object "),Mt("button",{onClick:g,class:"control-btn secondary"}," 🔄 Reset ")]),Mt("TresCanvas",{alpha:!0,antialias:!0,class:"tres-canvas",onReady:l},[v[5]||(v[5]=Mt("TresPerspectiveCamera",{position:[0,1.6,3]},null,-1)),Je(i)?ii("",!0):(yt(),bc(Je(Fb),{key:0,"enable-damping":!0,"damping-factor":.05,"max-polar-angle":Math.PI/2,"make-default":""},null,8,["max-polar-angle"])),Dn(Gb),v[6]||(v[6]=Mt("TresAmbientLight",{intensity:.6},null,-1)),v[7]||(v[7]=Mt("TresDirectionalLight",{position:[5,5,5],intensity:1,"cast-shadow":!0},null,-1)),v[8]||(v[8]=Mt("TresPointLight",{position:[0,2,0],intensity:.3,color:"#ffffff"},null,-1)),(yt(!0),At(dn,null,Sm(a,y=>(yt(),At(dn,{key:y.id},[y.type==="cube"?(yt(),At("TresMesh",{key:0,position:y.position,"cast-shadow":!0},[v[1]||(v[1]=Mt("TresBoxGeometry",{args:[.15,.15,.15]},null,-1)),Mt("TresMeshStandardMaterial",{color:y.color,metalness:.3,roughness:.4},null,8,Yb)],8,qb)):ii("",!0),y.type==="sphere"?(yt(),At("TresMesh",{key:1,position:y.position,"cast-shadow":!0},[v[2]||(v[2]=Mt("TresSphereGeometry",{args:[.1,32,32]},null,-1)),Mt("TresMeshStandardMaterial",{color:y.color,metalness:.5,roughness:.2},null,8,Kb)],8,jb)):ii("",!0),y.type==="cone"?(yt(),At("TresMesh",{key:2,position:y.position,"cast-shadow":!0},[v[3]||(v[3]=Mt("TresConeGeometry",{args:[.08,.2,32]},null,-1)),Mt("TresMeshStandardMaterial",{color:y.color,metalness:.3,roughness:.5},null,8,Zb)],8,$b)):ii("",!0)],64))),128)),Je(i)?ii("",!0):(yt(),At("TresMesh",{key:1,rotation:[-Math.PI/2,0,0],position:[0,0,0],"receive-shadow":!0},[...v[4]||(v[4]=[Mt("TresPlaneGeometry",{args:[10,10]},null,-1),Mt("TresMeshStandardMaterial",{color:"#2a2a2a",roughness:.8},null,-1)])],8,Jb)),Je(i)?ii("",!0):(yt(),At("TresGridHelper",Qb))],32),Je(i)?(yt(),At("div",eE," 🔴 AR Session Active • Move around to see objects ")):ii("",!0),!Je(i)&&!Je(t)?(yt(),At("div",tE,[...v[9]||(v[9]=[Mt("p",null,"🖱️ Drag to rotate • Scroll to zoom",-1)])])):ii("",!0),Mt("div",nE,td(a.length)+" objects ",1)]))}}),rE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},sE=rE(iE,[["__scopeId","data-v-95886c0b"]]),oE={id:"app"},aE=Cs({__name:"App",setup(n){return(e,t)=>(yt(),At("div",oE,[Dn(sE)]))}});Pg(aE).mount("#app");
