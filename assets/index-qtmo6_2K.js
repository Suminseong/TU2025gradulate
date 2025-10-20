(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function M_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var up={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function tT(){if(sx)return Ol;sx=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ol.Fragment=t,Ol.jsx=i,Ol.jsxs=i,Ol}var ox;function eT(){return ox||(ox=1,up.exports=tT()),up.exports}var y=eT(),cp={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function nT(){if(lx)return Dt;lx=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,z={};function P(k,at,ct){this.props=k,this.context=at,this.refs=z,this.updater=ct||R}P.prototype.isReactComponent={},P.prototype.setState=function(k,at){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,at,"setState")},P.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function H(){}H.prototype=P.prototype;function F(k,at,ct){this.props=k,this.context=at,this.refs=z,this.updater=ct||R}var Z=F.prototype=new H;Z.constructor=F,M(Z,P.prototype),Z.isPureReactComponent=!0;var ot=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},ut=Object.prototype.hasOwnProperty;function I(k,at,ct,ht,gt,Ct){return ct=Ct.ref,{$$typeof:n,type:k,key:at,ref:ct!==void 0?ct:null,props:Ct}}function j(k,at){return I(k.type,at,void 0,void 0,void 0,k.props)}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function O(k){var at={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ct){return at[ct]})}var V=/\/+/g;function L(k,at){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):at.toString(36)}function N(){}function ue(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(N,N):(k.status="pending",k.then(function(at){k.status==="pending"&&(k.status="fulfilled",k.value=at)},function(at){k.status==="pending"&&(k.status="rejected",k.reason=at)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function ne(k,at,ct,ht,gt){var Ct=typeof k;(Ct==="undefined"||Ct==="boolean")&&(k=null);var _t=!1;if(k===null)_t=!0;else switch(Ct){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(k.$$typeof){case n:case t:_t=!0;break;case v:return _t=k._init,ne(_t(k._payload),at,ct,ht,gt)}}if(_t)return gt=gt(k),_t=ht===""?"."+L(k,0):ht,ot(gt)?(ct="",_t!=null&&(ct=_t.replace(V,"$&/")+"/"),ne(gt,at,ct,"",function(Me){return Me})):gt!=null&&(C(gt)&&(gt=j(gt,ct+(gt.key==null||k&&k.key===gt.key?"":(""+gt.key).replace(V,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ht===""?".":ht+":";if(ot(k))for(var zt=0;zt<k.length;zt++)ht=k[zt],Ct=ge+L(ht,zt),_t+=ne(ht,at,ct,Ct,gt);else if(zt=T(k),typeof zt=="function")for(k=zt.call(k),zt=0;!(ht=k.next()).done;)ht=ht.value,Ct=ge+L(ht,zt++),_t+=ne(ht,at,ct,Ct,gt);else if(Ct==="object"){if(typeof k.then=="function")return ne(ue(k),at,ct,ht,gt);throw at=String(k),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function tt(k,at,ct){if(k==null)return k;var ht=[],gt=0;return ne(k,ht,"","",function(Ct){return at.call(ct,Ct,gt++)}),ht}function dt(k){if(k._status===-1){var at=k._result;at=at(),at.then(function(ct){(k._status===0||k._status===-1)&&(k._status=1,k._result=ct)},function(ct){(k._status===0||k._status===-1)&&(k._status=2,k._result=ct)}),k._status===-1&&(k._status=0,k._result=at)}if(k._status===1)return k._result.default;throw k._result}var yt=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function jt(){}return Dt.Children={map:tt,forEach:function(k,at,ct){tt(k,function(){at.apply(this,arguments)},ct)},count:function(k){var at=0;return tt(k,function(){at++}),at},toArray:function(k){return tt(k,function(at){return at})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Dt.Component=P,Dt.Fragment=i,Dt.Profiler=o,Dt.PureComponent=F,Dt.StrictMode=a,Dt.Suspense=m,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(k){return W.H.useMemoCache(k)}},Dt.cache=function(k){return function(){return k.apply(null,arguments)}},Dt.cloneElement=function(k,at,ct){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ht=M({},k.props),gt=k.key,Ct=void 0;if(at!=null)for(_t in at.ref!==void 0&&(Ct=void 0),at.key!==void 0&&(gt=""+at.key),at)!ut.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ht[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ht.children=ct;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];ht.children=ge}return I(k.type,gt,void 0,void 0,Ct,ht)},Dt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},Dt.createElement=function(k,at,ct){var ht,gt={},Ct=null;if(at!=null)for(ht in at.key!==void 0&&(Ct=""+at.key),at)ut.call(at,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(gt[ht]=at[ht]);var _t=arguments.length-2;if(_t===1)gt.children=ct;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];gt.children=ge}if(k&&k.defaultProps)for(ht in _t=k.defaultProps,_t)gt[ht]===void 0&&(gt[ht]=_t[ht]);return I(k,Ct,void 0,void 0,null,gt)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(k){return{$$typeof:p,render:k}},Dt.isValidElement=C,Dt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:dt}},Dt.memo=function(k,at){return{$$typeof:g,type:k,compare:at===void 0?null:at}},Dt.startTransition=function(k){var at=W.T,ct={};W.T=ct;try{var ht=k(),gt=W.S;gt!==null&&gt(ct,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(jt,yt)}catch(Ct){yt(Ct)}finally{W.T=at}},Dt.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Dt.use=function(k){return W.H.use(k)},Dt.useActionState=function(k,at,ct){return W.H.useActionState(k,at,ct)},Dt.useCallback=function(k,at){return W.H.useCallback(k,at)},Dt.useContext=function(k){return W.H.useContext(k)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(k,at){return W.H.useDeferredValue(k,at)},Dt.useEffect=function(k,at,ct){var ht=W.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(k,at)},Dt.useId=function(){return W.H.useId()},Dt.useImperativeHandle=function(k,at,ct){return W.H.useImperativeHandle(k,at,ct)},Dt.useInsertionEffect=function(k,at){return W.H.useInsertionEffect(k,at)},Dt.useLayoutEffect=function(k,at){return W.H.useLayoutEffect(k,at)},Dt.useMemo=function(k,at){return W.H.useMemo(k,at)},Dt.useOptimistic=function(k,at){return W.H.useOptimistic(k,at)},Dt.useReducer=function(k,at,ct){return W.H.useReducer(k,at,ct)},Dt.useRef=function(k){return W.H.useRef(k)},Dt.useState=function(k){return W.H.useState(k)},Dt.useSyncExternalStore=function(k,at,ct){return W.H.useSyncExternalStore(k,at,ct)},Dt.useTransition=function(){return W.H.useTransition()},Dt.version="19.1.1",Dt}var ux;function Vm(){return ux||(ux=1,cp.exports=nT()),cp.exports}var B=Vm();const At=M_(B);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var cx="popstate";function iT(n={}){function t(a,o){let{pathname:u,search:d,hash:p}=a.location;return Xp("",{pathname:u,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Zl(o)}return aT(t,i,null,n)}function de(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ri(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rT(){return Math.random().toString(36).substring(2,10)}function hx(n,t){return{usr:n.state,key:n.key,idx:t}}function Xp(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?xo(t):t,state:i,key:t&&t.key||a||rT()}}function Zl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function xo(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function aT(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function w(){p="POP";let P=v(),H=P==null?null:P-g;g=P,m&&m({action:p,location:z.location,delta:H})}function T(P,H){p="PUSH";let F=Xp(z.location,P,H);g=v()+1;let Z=hx(F,g),ot=z.createHref(F);try{d.pushState(Z,"",ot)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;o.location.assign(ot)}u&&m&&m({action:p,location:z.location,delta:1})}function R(P,H){p="REPLACE";let F=Xp(z.location,P,H);g=v();let Z=hx(F,g),ot=z.createHref(F);d.replaceState(Z,"",ot),u&&m&&m({action:p,location:z.location,delta:0})}function M(P){return sT(P)}let z={get action(){return p},get location(){return n(o,d)},listen(P){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(cx,w),m=P,()=>{o.removeEventListener(cx,w),m=null}},createHref(P){return t(o,P)},createURL:M,encodeLocation(P){let H=M(P);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:T,replace:R,go(P){return d.go(P)}};return z}function sT(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),de(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Zl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function O_(n,t,i="/"){return oT(n,t,i,!1)}function oT(n,t,i,a){let o=typeof t=="string"?xo(t):t,u=sr(o.pathname||"/",i);if(u==null)return null;let d=V_(n);lT(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=vT(u);p=yT(d[m],g,a)}return p}function V_(n,t=[],i=[],a="",o=!1){let u=(d,p,m=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;de(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=ir([a,v.relativePath]),T=i.concat(v);d.children&&d.children.length>0&&(de(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),V_(d.children,t,T,w,m)),!(d.path==null&&!d.index)&&t.push({path:w,score:mT(w,d.index),routesMeta:T})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of k_(d.path))u(d,p,!0,m)}),t}function k_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=k_(a.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function lT(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:gT(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var uT=/^:[\w-]+$/,cT=3,hT=2,dT=1,fT=10,pT=-2,dx=n=>n==="*";function mT(n,t){let i=n.split("/"),a=i.length;return i.some(dx)&&(a+=pT),t&&(a+=hT),i.filter(o=>!dx(o)).reduce((o,u)=>o+(uT.test(u)?cT:u===""?dT:fT),a)}function gT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function yT(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=vh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),T=m.route;if(!w&&g&&i&&!a[a.length-1].route.index&&(w=vh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),d.push({params:o,pathname:ir([u,w.pathname]),pathnameBase:bT(ir([u,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(u=ir([u,w.pathnameBase]))}return d}function vh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=xT(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},T)=>{if(v==="*"){let M=p[T]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const R=p[T];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function xT(n,t=!1,i=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function vT(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function sr(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function _T(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?xo(n):n;return{pathname:i?i.startsWith("/")?i:ET(i,t):t,search:TT(a),hash:ST(o)}}function ET(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function hp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wT(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function km(n){let t=wT(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Um(n,t,i,a=!1){let o;typeof n=="string"?o=xo(n):(o={...n},de(!o.pathname||!o.pathname.includes("?"),hp("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),hp("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),hp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,p;if(d==null)p=i;else{let w=t.length-1;if(!a&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),w-=1;o.pathname=T.join("/")}p=w>=0?t[w]:"/"}let m=_T(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var ir=n=>n.join("/").replace(/\/\/+/g,"/"),bT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),TT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ST=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function AT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var U_=["POST","PUT","PATCH","DELETE"];new Set(U_);var RT=["GET",...U_];new Set(RT);var vo=B.createContext(null);vo.displayName="DataRouter";var Ph=B.createContext(null);Ph.displayName="DataRouterState";B.createContext(!1);var P_=B.createContext({isTransitioning:!1});P_.displayName="ViewTransition";var IT=B.createContext(new Map);IT.displayName="Fetchers";var jT=B.createContext(null);jT.displayName="Await";var si=B.createContext(null);si.displayName="Navigation";var _o=B.createContext(null);_o.displayName="Location";var qn=B.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName="Route";var Pm=B.createContext(null);Pm.displayName="RouteError";function CT(n,{relative:t}={}){de(Eo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=B.useContext(si),{hash:o,pathname:u,search:d}=fu(n,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:ir([i,u])),a.createHref({pathname:p,search:d,hash:o})}function Eo(){return B.useContext(_o)!=null}function Di(){return de(Eo(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(_o).location}function DT(){return B.useContext(_o).navigationType}var z_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function L_(n){B.useContext(si).static||B.useLayoutEffect(n)}function zm(){let{isDataRoute:n}=B.useContext(qn);return n?GT():NT()}function NT(){de(Eo(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(vo),{basename:t,navigator:i}=B.useContext(si),{matches:a}=B.useContext(qn),{pathname:o}=Di(),u=JSON.stringify(km(a)),d=B.useRef(!1);return L_(()=>{d.current=!0}),B.useCallback((m,g={})=>{if(ri(d.current,z_),!d.current)return;if(typeof m=="number"){i.go(m);return}let v=Um(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:ir([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var MT=B.createContext(null);function OT(n){let t=B.useContext(qn).outlet;return t&&B.createElement(MT.Provider,{value:n},t)}function VT(){let{matches:n}=B.useContext(qn),t=n[n.length-1];return t?t.params:{}}function fu(n,{relative:t}={}){let{matches:i}=B.useContext(qn),{pathname:a}=Di(),o=JSON.stringify(km(i));return B.useMemo(()=>Um(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function kT(n,t){return $_(n,t)}function $_(n,t,i,a,o){de(Eo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=B.useContext(si),{matches:d}=B.useContext(qn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",w=p&&p.route;{let F=w&&w.path||"";B_(g,!w||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let T=Di(),R;if(t){let F=typeof t=="string"?xo(t):t;de(v==="/"||F.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${F.pathname}" was given in the \`location\` prop.`),R=F}else R=T;let M=R.pathname||"/",z=M;if(v!=="/"){let F=v.replace(/^\//,"").split("/");z="/"+M.replace(/^\//,"").split("/").slice(F.length).join("/")}let P=O_(n,{pathname:z});ri(w||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ri(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=$T(P&&P.map(F=>Object.assign({},F,{params:Object.assign({},m,F.params),pathname:ir([v,u.encodeLocation?u.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?v:ir([v,u.encodeLocation?u.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),d,i,a,o);return t&&H?B.createElement(_o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},H):H}function UT(){let n=HT(),t=AT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:u},"ErrorBoundary")," or"," ",B.createElement("code",{style:u},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},t),i?B.createElement("pre",{style:o},i):null,d)}var PT=B.createElement(UT,null),zT=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?B.createElement(qn.Provider,{value:this.props.routeContext},B.createElement(Pm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function LT({routeContext:n,match:t,children:i}){let a=B.useContext(vo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(qn.Provider,{value:n},i)}function $T(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);de(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:w,errors:T}=i,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!T||T[v.route.id]===void 0);if(v.route.lazy||R){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let T,R=!1,M=null,z=null;i&&(T=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||PT,p&&(m<0&&w===0?(B_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,z=null):m===w&&(R=!0,z=v.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,w+1)),H=()=>{let F;return T?F=M:R?F=z:v.route.Component?F=B.createElement(v.route.Component,null):v.route.element?F=v.route.element:F=g,B.createElement(LT,{match:v,routeContext:{outlet:g,matches:P,isDataRoute:i!=null},children:F})};return i&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?B.createElement(zT,{location:i.location,revalidation:i.revalidation,component:M,error:T,children:H(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):H()},null)}function Lm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BT(n){let t=B.useContext(vo);return de(t,Lm(n)),t}function FT(n){let t=B.useContext(Ph);return de(t,Lm(n)),t}function KT(n){let t=B.useContext(qn);return de(t,Lm(n)),t}function $m(n){let t=KT(n),i=t.matches[t.matches.length-1];return de(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function qT(){return $m("useRouteId")}function HT(){let n=B.useContext(Pm),t=FT("useRouteError"),i=$m("useRouteError");return n!==void 0?n:t.errors?.[i]}function GT(){let{router:n}=BT("useNavigate"),t=$m("useNavigate"),i=B.useRef(!1);return L_(()=>{i.current=!0}),B.useCallback(async(o,u={})=>{ri(i.current,z_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var fx={};function B_(n,t,i){!t&&!fx[n]&&(fx[n]=!0,ri(!1,i))}B.memo(YT);function YT({routes:n,future:t,state:i,unstable_onError:a}){return $_(n,void 0,i,a,t)}function QT({to:n,replace:t,state:i,relative:a}){de(Eo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(si);ri(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=B.useContext(qn),{pathname:d}=Di(),p=zm(),m=Um(n,km(u),d,a==="path"),g=JSON.stringify(m);return B.useEffect(()=>{p(JSON.parse(g),{replace:t,state:i,relative:a})},[p,g,a,t,i]),null}function XT(n){return OT(n.context)}function wi(n){de(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WT({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){de(!Eo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=B.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=xo(i));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:T="default"}=i,R=B.useMemo(()=>{let M=sr(m,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:w,key:T},navigationType:a}},[d,m,g,v,w,T,a]);return ri(R!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:B.createElement(si.Provider,{value:p},B.createElement(_o.Provider,{children:t,value:R}))}function ZT({children:n,location:t}){return kT(Wp(n),t)}function Wp(n,t=[]){let i=[];return B.Children.forEach(n,(a,o)=>{if(!B.isValidElement(a))return;let u=[...t,o];if(a.type===B.Fragment){i.push.apply(i,Wp(a.props.children,u));return}de(a.type===wi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),de(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Wp(a.props.children,u)),i.push(d)}),i}var nh="get",ih="application/x-www-form-urlencoded";function zh(n){return n!=null&&typeof n.tagName=="string"}function JT(n){return zh(n)&&n.tagName.toLowerCase()==="button"}function tS(n){return zh(n)&&n.tagName.toLowerCase()==="form"}function eS(n){return zh(n)&&n.tagName.toLowerCase()==="input"}function nS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function iS(n,t){return n.button===0&&(!t||t==="_self")&&!nS(n)}var Fc=null;function rS(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var aS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dp(n){return n!=null&&!aS.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ih}"`),null):n}function sS(n,t){let i,a,o,u,d;if(tS(n)){let p=n.getAttribute("action");a=p?sr(p,t):null,i=n.getAttribute("method")||nh,o=dp(n.getAttribute("enctype"))||ih,u=new FormData(n)}else if(JT(n)||eS(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?sr(m,t):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||nh,o=dp(n.getAttribute("formenctype"))||dp(p.getAttribute("enctype"))||ih,u=new FormData(p,n),!rS()){let{name:g,type:v,value:w}=n;if(v==="image"){let T=g?`${g}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else g&&u.append(g,w)}}else{if(zh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=nh,a=null,o=ih,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function oS(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&sr(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function lS(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function cS(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await lS(u,i);return d.links?d.links():[]}return[]}));return pS(a.flat(1).filter(uS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function px(n,t,i,a,o,u){let d=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,p=(m,g)=>i[g].pathname!==m.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,g)=>d(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function hS(n,t,{includeHydrateFallback:i}={}){return dS(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function dS(n){return[...new Set(n)]}function fS(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function pS(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(fS(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function F_(){let n=B.useContext(vo);return Bm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function mS(){let n=B.useContext(Ph);return Bm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Fm=B.createContext(void 0);Fm.displayName="FrameworkContext";function K_(){let n=B.useContext(Fm);return Bm(n,"You must render this element inside a <HydratedRouter> element"),n}function gS(n,t){let i=B.useContext(Fm),[a,o]=B.useState(!1),[u,d]=B.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,T=B.useRef(null);B.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let z=H=>{H.forEach(F=>{d(F.isIntersecting)})},P=new IntersectionObserver(z,{threshold:.5});return T.current&&P.observe(T.current),()=>{P.disconnect()}}},[n]),B.useEffect(()=>{if(a){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[a]);let R=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,T,{}]:[u,T,{onFocus:Vl(p,R),onBlur:Vl(m,M),onMouseEnter:Vl(g,R),onMouseLeave:Vl(v,M),onTouchStart:Vl(w,R)}]:[!1,T,{}]}function Vl(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function yS({page:n,...t}){let{router:i}=F_(),a=B.useMemo(()=>O_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?B.createElement(vS,{page:n,matches:a,...t}):null}function xS(n){let{manifest:t,routeModules:i}=K_(),[a,o]=B.useState([]);return B.useEffect(()=>{let u=!1;return cS(n,t,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,i]),a}function vS({page:n,matches:t,...i}){let a=Di(),{manifest:o,routeModules:u}=K_(),{basename:d}=F_(),{loaderData:p,matches:m}=mS(),g=B.useMemo(()=>px(n,t,m,o,a,"data"),[n,t,m,o,a]),v=B.useMemo(()=>px(n,t,m,o,a,"assets"),[n,t,m,o,a]),w=B.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,z=!1;if(t.forEach(H=>{let F=o.routes[H.route.id];!F||!F.hasLoader||(!g.some(Z=>Z.route.id===H.route.id)&&H.route.id in p&&u[H.route.id]?.shouldRevalidate||F.hasClientLoader?z=!0:M.add(H.route.id))}),M.size===0)return[];let P=oS(n,d,"data");return z&&M.size>0&&P.searchParams.set("_routes",t.filter(H=>M.has(H.route.id)).map(H=>H.route.id).join(",")),[P.pathname+P.search]},[d,p,a,o,g,t,n,u]),T=B.useMemo(()=>hS(v,o),[v,o]),R=xS(v);return B.createElement(B.Fragment,null,w.map(M=>B.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),T.map(M=>B.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),R.map(({key:M,link:z})=>B.createElement("link",{key:M,nonce:i.nonce,...z})))}function _S(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{q_&&(window.__reactRouterVersion="7.9.1")}catch{}function ES({basename:n,children:t,window:i}){let a=B.useRef();a.current==null&&(a.current=iT({window:i,v5Compat:!0}));let o=a.current,[u,d]=B.useState({action:o.action,location:o.location}),p=B.useCallback(m=>{B.startTransition(()=>d(m))},[d]);return B.useLayoutEffect(()=>o.listen(p),[o,p]),B.createElement(WT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var H_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ns=B.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:w,...T},R){let{basename:M}=B.useContext(si),z=typeof g=="string"&&H_.test(g),P,H=!1;if(typeof g=="string"&&z&&(P=g,q_))try{let C=new URL(window.location.href),O=g.startsWith("//")?new URL(C.protocol+g):new URL(g),V=sr(O.pathname,M);O.origin===C.origin&&V!=null?g=V+O.search+O.hash:H=!0}catch{ri(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let F=CT(g,{relative:o}),[Z,ot,W]=gS(a,T),ut=SS(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:w});function I(C){t&&t(C),C.defaultPrevented||ut(C)}let j=B.createElement("a",{...T,...W,href:P||F,onClick:H||u?t:I,ref:_S(R,ot),target:m,"data-discover":!z&&i==="render"?"true":void 0});return Z&&!z?B.createElement(B.Fragment,null,j,B.createElement(yS,{page:F})):j});ns.displayName="Link";var wS=B.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:p,children:m,...g},v){let w=fu(d,{relative:g.relative}),T=Di(),R=B.useContext(Ph),{navigator:M,basename:z}=B.useContext(si),P=R!=null&&CS(w)&&p===!0,H=M.encodeLocation?M.encodeLocation(w).pathname:w.pathname,F=T.pathname,Z=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(F=F.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&z&&(Z=sr(Z,z)||Z);const ot=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let W=F===H||!o&&F.startsWith(H)&&F.charAt(ot)==="/",ut=Z!=null&&(Z===H||!o&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),I={isActive:W,isPending:ut,isTransitioning:P},j=W?t:void 0,C;typeof a=="function"?C=a(I):C=[a,W?"active":null,ut?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(I):u;return B.createElement(ns,{...g,"aria-current":j,className:C,ref:v,style:O,to:d,viewTransition:p},typeof m=="function"?m(I):m)});wS.displayName="NavLink";var bS=B.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:d=nh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:w,...T},R)=>{let M=IS(),z=jS(p,{relative:g}),P=d.toLowerCase()==="get"?"get":"post",H=typeof p=="string"&&H_.test(p),F=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let ot=Z.nativeEvent.submitter,W=ot?.getAttribute("formmethod")||d;M(ot||Z.currentTarget,{fetcherKey:t,method:W,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return B.createElement("form",{ref:R,method:P,action:z,onSubmit:a?m:F,...T,"data-discover":!H&&n==="render"?"true":void 0})});bS.displayName="Form";function TS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G_(n){let t=B.useContext(vo);return de(t,TS(n)),t}function SS(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let p=zm(),m=Di(),g=fu(n,{relative:u});return B.useCallback(v=>{if(iS(v,t)){v.preventDefault();let w=i!==void 0?i:Zl(m)===Zl(g);p(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[m,p,g,i,a,t,n,o,u,d])}var AS=0,RS=()=>`__${String(++AS)}__`;function IS(){let{router:n}=G_("useSubmit"),{basename:t}=B.useContext(si),i=qT();return B.useCallback(async(a,o={})=>{let{action:u,method:d,encType:p,formData:m,body:g}=sS(a,t);if(o.navigate===!1){let v=o.fetcherKey||RS();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function jS(n,{relative:t}={}){let{basename:i}=B.useContext(si),a=B.useContext(qn);de(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...fu(n||".",{relative:t})},d=Di();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ir([i,u.pathname])),Zl(u)}function CS(n,{relative:t}={}){let i=B.useContext(P_);de(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=G_("useViewTransitionState"),o=fu(n,{relative:t});if(!i.isTransitioning)return!1;let u=sr(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=sr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return vh(o.pathname,d)!=null||vh(o.pathname,u)!=null}var fp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function DS(){if(mx)return nn;mx=1;var n=Vm();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,v)},nn.flushSync=function(m){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=g,a.p=v,a.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:R}):v==="script"&&a.d.X(m,{crossOrigin:w,integrity:T,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},nn.requestFormReset=function(m){a.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var gx;function NS(){if(gx)return fp.exports;gx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),fp.exports=DS(),fp.exports}var pp={exports:{}},mp,yx;function MS(){if(yx)return mp;yx=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return mp=n,mp}var gp,xx;function OS(){if(xx)return gp;xx=1;var n=MS();function t(){}function i(){}return i.resetWarningCache=t,gp=function(){function a(d,p,m,g,v,w){if(w!==n){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},gp}var vx;function VS(){return vx||(vx=1,pp.exports=OS()()),pp.exports}var kS=VS();const J=M_(kS);var vn=function(){return vn=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},vn.apply(this,arguments)};function Jl(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var oe="-ms-",Fl="-moz-",Ht="-webkit-",Y_="comm",Lh="rule",Km="decl",US="@import",Q_="@keyframes",PS="@layer",X_=Math.abs,qm=String.fromCharCode,Zp=Object.assign;function zS(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function W_(n){return n.trim()}function nr(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,i){return n.replace(t,i)}function rh(n,t,i){return n.indexOf(t,i)}function qe(n,t){return n.charCodeAt(t)|0}function ao(n,t,i){return n.slice(t,i)}function Ti(n){return n.length}function Z_(n){return n.length}function Pl(n,t){return t.push(n),n}function LS(n,t){return n.map(t).join("")}function _x(n,t){return n.filter(function(i){return!nr(i,t)})}var $h=1,so=1,J_=0,Kn=0,Ce=0,wo="";function Bh(n,t,i,a,o,u,d,p){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:$h,column:so,length:d,return:"",siblings:p}}function Xr(n,t){return Zp(Bh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Qs(n){for(;n.root;)n=Xr(n.root,{children:[n]});Pl(n,n.siblings)}function $S(){return Ce}function BS(){return Ce=Kn>0?qe(wo,--Kn):0,so--,Ce===10&&(so=1,$h--),Ce}function ii(){return Ce=Kn<J_?qe(wo,Kn++):0,so++,Ce===10&&(so=1,$h++),Ce}function Xa(){return qe(wo,Kn)}function ah(){return Kn}function Fh(n,t){return ao(wo,n,t)}function Jp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function FS(n){return $h=so=1,J_=Ti(wo=n),Kn=0,[]}function KS(n){return wo="",n}function yp(n){return W_(Fh(Kn-1,tm(n===91?n+2:n===40?n+1:n)))}function qS(n){for(;(Ce=Xa())&&Ce<33;)ii();return Jp(n)>2||Jp(Ce)>3?"":" "}function HS(n,t){for(;--t&&ii()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Fh(n,ah()+(t<6&&Xa()==32&&ii()==32))}function tm(n){for(;ii();)switch(Ce){case n:return Kn;case 34:case 39:n!==34&&n!==39&&tm(Ce);break;case 40:n===41&&tm(n);break;case 92:ii();break}return Kn}function GS(n,t){for(;ii()&&n+Ce!==57;)if(n+Ce===84&&Xa()===47)break;return"/*"+Fh(t,Kn-1)+"*"+qm(n===47?n:ii())}function YS(n){for(;!Jp(Xa());)ii();return Fh(n,Kn)}function QS(n){return KS(sh("",null,null,null,[""],n=FS(n),0,[0],n))}function sh(n,t,i,a,o,u,d,p,m){for(var g=0,v=0,w=d,T=0,R=0,M=0,z=1,P=1,H=1,F=0,Z="",ot=o,W=u,ut=a,I=Z;P;)switch(M=F,F=ii()){case 40:if(M!=108&&qe(I,w-1)==58){rh(I+=Nt(yp(F),"&","&\f"),"&\f",X_(g?p[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:I+=yp(F);break;case 9:case 10:case 13:case 32:I+=qS(M);break;case 92:I+=HS(ah()-1,7);continue;case 47:switch(Xa()){case 42:case 47:Pl(XS(GS(ii(),ah()),t,i,m),m);break;default:I+="/"}break;case 123*z:p[g++]=Ti(I)*H;case 125*z:case 59:case 0:switch(F){case 0:case 125:P=0;case 59+v:H==-1&&(I=Nt(I,/\f/g,"")),R>0&&Ti(I)-w&&Pl(R>32?wx(I+";",a,i,w-1,m):wx(Nt(I," ","")+";",a,i,w-2,m),m);break;case 59:I+=";";default:if(Pl(ut=Ex(I,t,i,g,v,o,p,Z,ot=[],W=[],w,u),u),F===123)if(v===0)sh(I,t,ut,ut,ot,u,w,p,W);else switch(T===99&&qe(I,3)===110?100:T){case 100:case 108:case 109:case 115:sh(n,ut,ut,a&&Pl(Ex(n,ut,ut,0,0,o,p,Z,o,ot=[],w,W),W),o,W,w,p,a?ot:W);break;default:sh(I,ut,ut,ut,[""],W,0,p,W)}}g=v=R=0,z=H=1,Z=I="",w=d;break;case 58:w=1+Ti(I),R=M;default:if(z<1){if(F==123)--z;else if(F==125&&z++==0&&BS()==125)continue}switch(I+=qm(F),F*z){case 38:H=v>0?1:(I+="\f",-1);break;case 44:p[g++]=(Ti(I)-1)*H,H=1;break;case 64:Xa()===45&&(I+=yp(ii())),T=Xa(),v=w=Ti(Z=I+=YS(ah())),F++;break;case 45:M===45&&Ti(I)==2&&(z=0)}}return u}function Ex(n,t,i,a,o,u,d,p,m,g,v,w){for(var T=o-1,R=o===0?u:[""],M=Z_(R),z=0,P=0,H=0;z<a;++z)for(var F=0,Z=ao(n,T+1,T=X_(P=d[z])),ot=n;F<M;++F)(ot=W_(P>0?R[F]+" "+Z:Nt(Z,/&\f/g,R[F])))&&(m[H++]=ot);return Bh(n,t,i,o===0?Lh:p,m,g,v,w)}function XS(n,t,i,a){return Bh(n,t,i,Y_,qm($S()),ao(n,2,-2),0,a)}function wx(n,t,i,a,o){return Bh(n,t,i,Km,ao(n,0,a),ao(n,a+1,-1),a,o)}function t2(n,t,i){switch(zS(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return Fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+Fl+n+oe+n+n;case 5936:switch(qe(n,t+11)){case 114:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+oe+n+n;case 6165:return Ht+n+oe+"flex-"+n+n;case 5187:return Ht+n+Nt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+oe+"flex-$1$2")+n;case 5443:return Ht+n+oe+"flex-item-"+Nt(n,/flex-|-self/g,"")+(nr(n,/flex-|baseline/)?"":oe+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+oe+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+oe+Nt(n,"shrink","negative")+n;case 5292:return Ht+n+oe+Nt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Nt(n,"-grow","")+Ht+n+oe+Nt(n,"grow","positive")+n;case 4554:return Ht+Nt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!nr(n,/flex-|baseline/))return oe+"grid-column-align"+ao(n,t)+n;break;case 2592:case 3360:return oe+Nt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,nr(a.props,/grid-\w+-end/)})?~rh(n+(i=i[t].value),"span",0)?n:oe+Nt(n,"-start","")+n+oe+"grid-row-span:"+(~rh(i,"span",0)?nr(i,/\d+/):+nr(i,/\d+/)-+nr(n,/\d+/))+";":oe+Nt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return nr(a.props,/grid-\w+-start/)})?n:oe+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ti(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+Fl+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~rh(n,"stretch",0)?t2(Nt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,p,m,g){return oe+o+":"+u+g+(d?oe+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Nt(n,":",":"+Ht)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(qe(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+oe+"$2box$3")+n;case 100:return Nt(n,":",":"+oe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function _h(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function WS(n,t,i,a){switch(n.type){case PS:if(n.children.length)break;case US:case Km:return n.return=n.return||n.value;case Y_:return"";case Q_:return n.return=n.value+"{"+_h(n.children,a)+"}";case Lh:if(!Ti(n.value=n.props.join(",")))return""}return Ti(i=_h(n.children,a))?n.return=n.value+"{"+i+"}":""}function ZS(n){var t=Z_(n);return function(i,a,o,u){for(var d="",p=0;p<t;p++)d+=n[p](i,a,o,u)||"";return d}}function JS(n){return function(t){t.root||(t=t.return)&&n(t)}}function t4(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case Km:n.return=t2(n.value,n.length,i);return;case Q_:return _h([Xr(n,{value:Nt(n.value,"@","@"+Ht)})],a);case Lh:if(n.length)return LS(i=n.props,function(o){switch(nr(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qs(Xr(n,{props:[Nt(o,/:(read-\w+)/,":"+Fl+"$1")]})),Qs(Xr(n,{props:[o]})),Zp(n,{props:_x(i,a)});break;case"::placeholder":Qs(Xr(n,{props:[Nt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),Qs(Xr(n,{props:[Nt(o,/:(plac\w+)/,":"+Fl+"$1")]})),Qs(Xr(n,{props:[Nt(o,/:(plac\w+)/,oe+"input-$1")]})),Qs(Xr(n,{props:[o]})),Zp(n,{props:_x(i,a)});break}return""})}}var e4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},In={},oo=typeof process<"u"&&In!==void 0&&(In.REACT_APP_SC_ATTR||In.SC_ATTR)||"data-styled",e2="active",n2="data-styled-version",Kh="6.1.19",Hm=`/*!sc*/
`,Eh=typeof window<"u"&&typeof document<"u",n4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==""?In.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&In.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.SC_DISABLE_SPEEDY!==void 0&&In.SC_DISABLE_SPEEDY!==""&&In.SC_DISABLE_SPEEDY!=="false"&&In.SC_DISABLE_SPEEDY),qh=Object.freeze([]),lo=Object.freeze({});function i4(n,t,i){return i===void 0&&(i=lo),n.theme!==i.theme&&n.theme||t||i.theme}var i2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),r4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a4=/(^-|-$)/g;function bx(n){return n.replace(r4,"-").replace(a4,"")}var s4=/(a)(d)/gi,Kc=52,Tx=function(n){return String.fromCharCode(n+(n>25?39:97))};function em(n){var t,i="";for(t=Math.abs(n);t>Kc;t=t/Kc|0)i=Tx(t%Kc)+i;return(Tx(t%Kc)+i).replace(s4,"$1-$2")}var xp,r2=5381,eo=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},a2=function(n){return eo(r2,n)};function s2(n){return em(a2(n)>>>0)}function o4(n){return n.displayName||n.name||"Component"}function vp(n){return typeof n=="string"&&!0}var o2=typeof Symbol=="function"&&Symbol.for,l2=o2?Symbol.for("react.memo"):60115,l4=o2?Symbol.for("react.forward_ref"):60112,u4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h4=((xp={})[l4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xp[l2]=u2,xp);function Sx(n){return("type"in(t=n)&&t.type.$$typeof)===l2?u2:"$$typeof"in n?h4[n.$$typeof]:u4;var t}var d4=Object.defineProperty,f4=Object.getOwnPropertyNames,Ax=Object.getOwnPropertySymbols,p4=Object.getOwnPropertyDescriptor,m4=Object.getPrototypeOf,Rx=Object.prototype;function c2(n,t,i){if(typeof t!="string"){if(Rx){var a=m4(t);a&&a!==Rx&&c2(n,a,i)}var o=f4(t);Ax&&(o=o.concat(Ax(t)));for(var u=Sx(n),d=Sx(t),p=0;p<o.length;++p){var m=o[p];if(!(m in c4||i&&i[m]||d&&m in d||u&&m in u)){var g=p4(t,m);try{d4(n,m,g)}catch{}}}}return n}function uo(n){return typeof n=="function"}function Gm(n){return typeof n=="object"&&"styledComponentId"in n}function Ya(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function nm(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function tu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function im(n,t,i){if(i===void 0&&(i=!1),!i&&!tu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=im(n[a],t[a]);else if(tu(t))for(var a in t)n[a]=im(n[a],t[a]);return n}function Ym(n,t){Object.defineProperty(n,"toString",{value:t})}function pu(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var g4=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw pu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(t+1),m=(d=0,i.length);d<m;d++)this.tag.insertRule(p,i[d])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Hm);return i},n})(),oh=new Map,wh=new Map,lh=1,qc=function(n){if(oh.has(n))return oh.get(n);for(;wh.has(lh);)lh++;var t=lh++;return oh.set(n,t),wh.set(t,n),t},y4=function(n,t){lh=t+1,oh.set(n,t),wh.set(t,n)},x4="style[".concat(oo,"][").concat(n2,'="').concat(Kh,'"]'),v4=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_4=function(n,t,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},E4=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Hm),o=[],u=0,d=a.length;u<d;u++){var p=a[u].trim();if(p){var m=p.match(v4);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(y4(v,g),_4(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},Ix=function(n){for(var t=document.querySelectorAll(x4),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(oo)!==e2&&(E4(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function w4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var h2=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(oo,"]")));return m[m.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(oo,e2),a.setAttribute(n2,Kh);var d=w4();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},b4=(function(){function n(t){this.element=h2(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw pu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),T4=(function(){function n(t){this.element=h2(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),S4=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),jx=Eh,A4={isServer:!Eh,useCSSOMInjection:!n4},d2=(function(){function n(t,i,a){t===void 0&&(t=lo),i===void 0&&(i={});var o=this;this.options=vn(vn({},A4),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Eh&&jx&&(jx=!1,Ix(this)),Ym(this,function(){return(function(u){for(var d=u.getTag(),p=d.length,m="",g=function(w){var T=(function(H){return wh.get(H)})(w);if(T===void 0)return"continue";var R=u.names.get(T),M=d.getGroup(w);if(R===void 0||!R.size||M.length===0)return"continue";var z="".concat(oo,".g").concat(w,'[id="').concat(T,'"]'),P="";R!==void 0&&R.forEach(function(H){H.length>0&&(P+="".concat(H,","))}),m+="".concat(M).concat(z,'{content:"').concat(P,'"}').concat(Hm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(t){return qc(t)},n.prototype.rehydrate=function(){!this.server&&Eh&&Ix(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(vn(vn({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new S4(o):a?new b4(o):new T4(o)})(this.options),new g4(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(qc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(qc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(qc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),R4=/&/g,I4=/^\s*\/\/.*$/gm;function f2(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=f2(i.children,t)),i})}function j4(n){var t,i,a,o=lo,u=o.options,d=u===void 0?lo:u,p=o.plugins,m=p===void 0?qh:p,g=function(T,R,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(t):T},v=m.slice();v.push(function(T){T.type===Lh&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(R4,i).replace(a,g))}),d.prefix&&v.push(t4),v.push(WS);var w=function(T,R,M,z){R===void 0&&(R=""),M===void 0&&(M=""),z===void 0&&(z="&"),t=z,i=R,a=new RegExp("\\".concat(i,"\\b"),"g");var P=T.replace(I4,""),H=QS(M||R?"".concat(M," ").concat(R," { ").concat(P," }"):P);d.namespace&&(H=f2(H,d.namespace));var F=[];return _h(H,ZS(v.concat(JS(function(Z){return F.push(Z)})))),F};return w.hash=m.length?m.reduce(function(T,R){return R.name||pu(15),eo(T,R.name)},r2).toString():"",w}var C4=new d2,rm=j4(),p2=At.createContext({shouldForwardProp:void 0,styleSheet:C4,stylis:rm});p2.Consumer;At.createContext(void 0);function Cx(){return B.useContext(p2)}var m2=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=rm);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Ym(this,function(){throw pu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=rm),this.name+t.hash},n})(),D4=function(n){return n>="A"&&n<="Z"};function Dx(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;D4(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var g2=function(n){return n==null||n===!1||n===""},y2=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!g2(u)&&(Array.isArray(u)&&u.isCss||uo(u)?a.push("".concat(Dx(o),":"),u,";"):tu(u)?a.push.apply(a,Jl(Jl(["".concat(o," {")],y2(u),!1),["}"],!1)):a.push("".concat(Dx(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in e4||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Wa(n,t,i,a){if(g2(n))return[];if(Gm(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Wa(o,t,i,a)}var u;return n instanceof m2?i?(n.inject(i,a),[n.getName(a)]):[n]:tu(n)?y2(n):Array.isArray(n)?Array.prototype.concat.apply(qh,n.map(function(d){return Wa(d,t,i,a)})):[n.toString()]}function N4(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(uo(i)&&!Gm(i))return!1}return!0}var M4=a2(Kh),O4=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&N4(t),this.componentId=i,this.baseHash=eo(M4,i),this.baseStyle=a,d2.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ya(o,this.staticRulesId);else{var u=nm(Wa(this.rules,t,i,a)),d=em(eo(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var p=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,p)}o=Ya(o,d),this.staticRulesId=d}else{for(var m=eo(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var T=nm(Wa(w,t,i,a));m=eo(m,T+v),g+=T}}if(g){var R=em(m>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ya(o,R)}}return o},n})(),x2=At.createContext(void 0);x2.Consumer;var _p={};function V4(n,t,i){var a=Gm(n),o=n,u=!vp(n),d=t.attrs,p=d===void 0?qh:d,m=t.componentId,g=m===void 0?(function(ot,W){var ut=typeof ot!="string"?"sc":bx(ot);_p[ut]=(_p[ut]||0)+1;var I="".concat(ut,"-").concat(s2(Kh+ut+_p[ut]));return W?"".concat(W,"-").concat(I):I})(t.displayName,t.parentComponentId):m,v=t.displayName,w=v===void 0?(function(ot){return vp(ot)?"styled.".concat(ot):"Styled(".concat(o4(ot),")")})(n):v,T=t.displayName&&t.componentId?"".concat(bx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,M=t.shouldForwardProp;if(a&&o.shouldForwardProp){var z=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;M=function(ot,W){return z(ot,W)&&P(ot,W)}}else M=z}var H=new O4(i,T,a?o.componentStyle:void 0);function F(ot,W){return(function(ut,I,j){var C=ut.attrs,O=ut.componentStyle,V=ut.defaultProps,L=ut.foldedComponentIds,N=ut.styledComponentId,ue=ut.target,ne=At.useContext(x2),tt=Cx(),dt=ut.shouldForwardProp||tt.shouldForwardProp,yt=i4(I,ne,V)||lo,jt=(function(Ct,_t,ge){for(var zt,Me=vn(vn({},_t),{className:void 0,theme:ge}),Mi=0;Mi<Ct.length;Mi+=1){var Hn=uo(zt=Ct[Mi])?zt(Me):zt;for(var on in Hn)Me[on]=on==="className"?Ya(Me[on],Hn[on]):on==="style"?vn(vn({},Me[on]),Hn[on]):Hn[on]}return _t.className&&(Me.className=Ya(Me.className,_t.className)),Me})(C,I,yt),k=jt.as||ue,at={};for(var ct in jt)jt[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&jt.theme===yt||(ct==="forwardedAs"?at.as=jt.forwardedAs:dt&&!dt(ct,k)||(at[ct]=jt[ct]));var ht=(function(Ct,_t){var ge=Cx(),zt=Ct.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return zt})(O,jt),gt=Ya(L,N);return ht&&(gt+=" "+ht),jt.className&&(gt+=" "+jt.className),at[vp(k)&&!i2.has(k)?"class":"className"]=gt,j&&(at.ref=j),B.createElement(k,at)})(Z,ot,W)}F.displayName=w;var Z=At.forwardRef(F);return Z.attrs=R,Z.componentStyle=H,Z.displayName=w,Z.shouldForwardProp=M,Z.foldedComponentIds=a?Ya(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=T,Z.target=a?o.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ot){this._foldedDefaultProps=a?(function(W){for(var ut=[],I=1;I<arguments.length;I++)ut[I-1]=arguments[I];for(var j=0,C=ut;j<C.length;j++)im(W,C[j],!0);return W})({},o.defaultProps,ot):ot}}),Ym(Z,function(){return".".concat(Z.styledComponentId)}),u&&c2(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Nx(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var Mx=function(n){return Object.assign(n,{isCss:!0})};function Qm(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(uo(n)||tu(n))return Mx(Wa(Nx(qh,Jl([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Wa(a):Mx(Wa(Nx(a,t)))}function am(n,t,i){if(i===void 0&&(i=lo),!t)throw pu(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,i,Qm.apply(void 0,Jl([o],u,!1)))};return a.attrs=function(o){return am(n,t,vn(vn({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return am(n,t,vn(vn({},i),o))},a}var v2=function(n){return am(V4,n)},S=v2;i2.forEach(function(n){S[n]=v2(n)});function k4(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=nm(Qm.apply(void 0,Jl([n],t,!1))),o=s2(a);return new m2(o,a)}const Ep=S.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.24px;
  font-weight: ${n=>n.$active?700:400};
  color: inherit;
  text-decoration: none;
  display: inline-grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  /* width: 100px; */
  cursor: pointer;
  outline: none;
  transition: all 120ms ease;
  position: relative;
  z-index: 0;
  &::after {
    content: attr(data-label);
    height: 0;
    font-weight: 700;
    font-family: inherit;
    letter-spacing: 0.24px;
    line-height: 19.2px;
    white-space: nowrap;
    visibility: hidden;
    pointer-events: none;
    display: block;
  }
  & > .navbtn-text { grid-area: 1 / 1; }
  &:hover, &:focus {
    font-weight: 700;
  }
`;function Xm({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const p="/TU2025gradulate/",m=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!m&&t&&(t.startsWith(p)?(g="/"+t.slice(p.length).replace(/^\/+/,""),v=!0):t.startsWith("/")&&(g=t,v=!0),t===p&&(g="/",v=!0));const T={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:i};return v?y.jsx(Ep,{as:ns,to:g,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):t?y.jsx(Ep,{href:t,target:u,rel:d,...T,children:y.jsx("span",{className:"navbtn-text",children:n})}):y.jsx(Ep,{as:"button",type:"button",...T,style:{background:"none",border:0,...o},children:y.jsx("span",{className:"navbtn-text",children:n})})}Xm.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const U4=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),y.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return y.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[y.jsx("rect",{x:0,y:u-d-p/2,width:t,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u-p/2,width:t,height:p,rx:m,fill:i}),y.jsx("rect",{x:0,y:u+d-p/2,width:t,height:p,rx:m,fill:i})]})},he=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),P4=S.header`
  position: ${n=>n.$overlay?"fixed":n.$sticky?"sticky":"relative"};
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 1000;
  transition: color 0.75s ease;
  background: ${n=>n.$baseColor};
  color: ${n=>n.$textColor};
  box-shadow: ${n=>n.$boxShadow||"none"};
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${n=>n.$gradient||"none"};
    opacity: ${n=>n.$showGradient?1:0};
    transition: opacity 0.75s ease;
    pointer-events: none;
  }
  @media (max-width: 640px) {
    width: 100vw;
    min-width: 0;
    left: 0;
    right: 0;
  }
`,z4=S.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: 0;
  max-width: ${n=>n.$maxWidth?n.$maxWidth:"none"};
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    gap: 6px;
    max-width: 100vw;
  }
`,L4=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,$4=S.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,B4=S.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,F4=S.button`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 6px;
    margin-right: 2px;
    cursor: pointer;
    z-index: 1300;
  }
`,K4=S.div`
  display: none;
  @media (max-width: 1450px) {
    opacity: ${n=>n.$open?1:0};
    pointer-events: ${n=>n.$open?"auto":"none"};
    transition: opacity 0.2s ease; 
    display: flex;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1200;
    background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0.7) 60%, rgba(18,18,18,0.2) 100%);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 48px;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,q4=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,H4=S(Xm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,G4=S.div`
  width: 49.48px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  @media (max-width: 640px) {
    width: 32px;
    height: 28px;
  }
`,Y4=S.div`
  width: 38.33px;
  height: 32px;
  position: relative;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 640px) {
    width: 28px;
    height: 24px;  
 }
`;function _2({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:p,overlay:m=!1}){const[g,v]=B.useState(!1),[w,T]=B.useState(he.GRADIENT),R=typeof i=="string",M=R?i:w,z=B.useRef(R?i:w);B.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(z.current=i)},[i,R,u]),B.useEffect(()=>{if(!o)return;const O=()=>{const V=window.scrollY||document.documentElement.scrollTop||0,L=z.current||he.GRADIENT_DARK,N=V>u?he.DARK:L;R||T(N),a&&a(N)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,R,a,u]);const{baseColor:P,gradient:H,textColor:F,boxShadow:Z,showGradient:ot}=B.useMemo(()=>{switch(M){case he.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case he.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case he.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),I=M===he.DARK||M===he.GRADIENT_DARK||g,j=I?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",C=n.filter(O=>O.label!=="SHOWROOM");return B.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),y.jsxs(P4,{role:"banner",$sticky:d,$overlay:m,$baseColor:P,$gradient:H,$showGradient:ot,$textColor:F,$boxShadow:Z,children:[y.jsx(z4,{$maxWidth:p,children:y.jsxs(L4,{children:[y.jsxs($4,{children:[y.jsx(ns,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:y.jsx(G4,{"aria-hidden":!0,children:y.jsx(Y4,{children:y.jsx("div",{style:{backgroundImage:`url(${j})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),y.jsx(B4,{"aria-label":"주 메뉴",children:n.map(O=>y.jsx(Xm,{label:O.label,href:O.href,active:O.key===t},O.key))})]}),y.jsx(F4,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:y.jsx(U4,{isOpen:g,size:24,color:I?"#fff":"#000"})})]})}),y.jsx(K4,{$open:g,onClick:()=>v(!1),children:y.jsx(q4,{onClick:O=>O.stopPropagation(),children:C.map(O=>y.jsx(H4,{label:O.label,href:O.href,active:O.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}_2.propTypes={items:J.arrayOf(J.shape({key:J.string.isRequired,label:J.string.isRequired,href:J.string})),activeKey:J.string,mode:J.oneOf([he.GRADIENT,he.LIGHT,he.DARK,he.GRADIENT_DARK]),onModeChange:J.func,autoOnScroll:J.bool,scrollThreshold:J.number,sticky:J.bool,overlay:J.bool,maxWidth:J.oneOfType([J.string,J.number])};const Wm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",Q4=S.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,X4=S.div`
  margin: 0 auto;
  padding-left: ${n=>n.$sidePadding}px;
  padding-right: ${n=>n.$sidePadding}px;
  padding-top: 52px;
  padding-bottom: 52px;
  max-width: ${n=>`calc(${n.$maxWidth}px + ${n.$sidePadding*2}px)`};
  position: relative;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`,W4=S.div`
  font-family: ${Wm};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
    @media (max-width: 393px) {
    font-size: 12px;
  }
`,Z4=S.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${Wm};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    gap: 16px;
    font-size: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
  }
  @media (max-width: 393px) {
    font-size: 10px;
  }
`,Ox=S.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,J4=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${Wm};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
    align-items: center;
  }
  @media (max-width: 393px) {
    font-size: 8px;
  }
`,tA=S.div`
  position: absolute;
  right: ${n=>n.$sidePadding}px;
  top: 164px; /* 52 + 112 */
  display: flex;
  gap: 20px;
  @media (max-width: 640px) {
    position: static;
    right: 0;
    top: auto;
    gap: 10px;
    margin-top: 12px;
  }
`,Vx=S.a`
  width: 48px;
  height: 48px;
  background: #151515;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 393px) {
    width: 24px;
    height: 24px;
  }
`;function E2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return y.jsx(Q4,{role:"contentinfo",children:y.jsxs(X4,{$sidePadding:u,$maxWidth:o,children:[y.jsx(W4,{children:n}),y.jsx(Z4,{"aria-label":"푸터 메뉴",children:t.map(d=>{const p=d.href||"#",m=/^https?:\/\//i.test(p),g="/TU2025gradulate/";let v=p;return m||(p===g?v="/":p.startsWith(g)&&(v="/"+p.slice(g.length).replace(/^\/+/,""))),m?y.jsx(Ox,{href:p,children:d.label},d.label):y.jsx(Ox,{as:ns,to:v,children:d.label},d.label)})}),y.jsx(J4,{children:i.map((d,p)=>y.jsx("div",{children:d},p))}),y.jsxs(tA,{$sidePadding:u,children:[a?.youtube?.href&&y.jsx(Vx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:y.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:y.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&y.jsx(Vx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}E2.propTypes={title:J.string,nav:J.arrayOf(J.shape({label:J.string.isRequired,href:J.string.isRequired})),copyright:J.arrayOf(J.string),social:J.shape({youtube:J.shape({href:J.string,label:J.string}),instagram:J.shape({href:J.string,label:J.string})}),maxWidth:J.number,sidePadding:J.number};const Ni="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",eA=S.div`
  position: relative; background: #fff;
`,nA=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function kx({children:n}){return y.jsx(eA,{children:y.jsx(nA,{children:n})})}const iA=S.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Ni}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 98px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,rA=S.div`
  font-family: ${Ni}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1220px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 11px;
    margin-top: 24px;
    width: calc(100vw - 32px);
    margin-bottom: 8px;
  }
`;function aA(){return y.jsxs(y.Fragment,{children:[y.jsx(iA,{children:"CREDITS"}),y.jsx(rA,{children:"잔향 : 기억의 향기"})]})}const sA=S.p`
  max-width: 374px;
  font-family: ${Ni};
  font-size: 16px;
  font-weight: 300;
  line-height: 140%;
  color: #000;
  text-align: justify;
  top: 0;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: calc(100vw - 32px);
    margin-top: 8px;
  }
`,oA=S.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,lA=S.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 100vw;
  height: 1px;
  background-color: #E0E0E0;
  margin-bottom: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      top: 0px;
  }
`,uA=S.div`
  position: absolute;
  right: 0;
  top: 89px;
  width: 100vw;
  height: 1px;
  background-color: #E0E0E0;
  margin-bottom: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      top: 44px;
  }
`,cA=S.div`
  position: absolute;
  left: -20px;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #E0E0E0;
  margin-right: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      left: -8px;
  }
`,w2=S.div`
  position: absolute;
  left: -20px;
  top: 0;
  width: 1px;
  height: 100vh;
  background-color: #E0E0E0;
  margin-right: 12px;
  z-index: 20;
  @media (max-width: 640px) {
    left: -8px;
    height: 200vh;
  }
`;function hA({text:n}){return y.jsxs(oA,{children:[y.jsx(w2,{}),y.jsx(lA,{}),y.jsx(sA,{dangerouslySetInnerHTML:{__html:n}})]})}const dA=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 46px;
  overflow: visible;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`,fA=S.div`
  width: 800px; height: 450px; background: #FFF4ED; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,pA=S.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${Ni};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;function mA({children:n}){return y.jsx(fA,{children:y.jsx(pA,{children:n})})}const gA=S.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,yA=S.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,xA=S.div`
  font-family: ${Ni}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,vA=S.p`
  font-family: ${Ni}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function _A({blocks:n}){return y.jsxs(gA,{children:[y.jsx(w2,{}),n.map(t=>y.jsxs(yA,{children:[y.jsx(xA,{children:t.title}),y.jsx(vA,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const EA=S.div`
  border-bottom: ${n=>n.$last?"none":"1px #E0E0E0 solid"};
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  margin-top: 20px;
  align-items: flex-start;
  @media (max-width: 640px) {
    margin-top: 0px;
    gap: 18px;
    padding-bottom: 0px;
  }
`,wA=S.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,bA=S.div`
  font-family: ${Ni}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,TA=S.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function SA({title:n,rows:t,last:i=!1}){return y.jsxs(EA,{$last:i,children:[y.jsx(wA,{children:y.jsx(bA,{children:n})}),y.jsx(TA,{children:t.map((a,o)=>y.jsx(DA,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const AA=S.div`
  padding-top: 22px;
  padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px #E0E0E0 solid":"none"};
  display: flex;
  gap: 20px;
  align-items: flex-start;
  @media (max-width: 640px) {
    padding-top: 12px;
    padding-bottom: 18px;
    gap: 0px;
  }
`,RA=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,IA=S.div`
  font-family: ${Ni};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,jA=S.div`
  display: flex; align-items: center;
`,CA=S.div`
  font-family: ${Ni};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function DA({ko:n,en:t,divider:i=!1}){return y.jsxs(AA,{$divider:i,children:[y.jsx(RA,{children:y.jsx(IA,{children:n})}),y.jsx(jA,{children:y.jsx(CA,{children:t})})]})}const NA=S.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
  margin-bottom: 100px;
  min-width: 1220px;
  @media (max-width: 640px) {
    margin-top: 80px;
    margin-bottom: 40px;
    width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
    min-width: unset;
  }
`,MA=S.div`
  display: flex;
  position: relative;
  font-family: ${Ni};
  font-size: 28px;
  font-weight: 600;
  color: #101010;
  margin-bottom: 45px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 18px;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
`;function OA(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"2025년 졸업전시 잔향의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준 입니다. 25년 5월부터 컨셉이 정해진 이래 150일에 걸쳐 개발한 사이트가 이렇게 완성되어 무척 감격스럽습니다. 이하생략 이이 졸려 이제 잘테다 히히 아무도 나를 막을 수 업다!!"}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soyi"},{ko:"문나라",en:"Moon Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return y.jsxs("div",{style:{position:"relative"},children:[y.jsxs(kx,{children:[y.jsx(aA,{}),y.jsxs(dA,{children:[y.jsx(hA,{text:n}),y.jsx(mA,{children:"단체사진 1장"})]})]}),y.jsxs(kx,{children:[y.jsx(_A,{blocks:t}),y.jsxs(NA,{children:[y.jsx(cA,{}),y.jsxs(MA,{children:[y.jsx(uA,{}),"2025 잔향",y.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>y.jsx(SA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const VA=S.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  letter-spacing: 0.24px;
  color: #202020;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  cursor: pointer;
  width: 445px;
  height: 393px;
  border-radius: 16px;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
    border-radius: 4px;
 }  
  @media (max-width: 393px) {
    width: 164px;
    height: 130px;
  }
   @media (max-width: 374px) {
    width: 136px;
    height: 112px;
  }
`,kA=S.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,UA=S.img`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 0 0 auto;
  z-index: 1;
  border: none;
  margin: 0;
  padding: 0;
`,PA=S.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,zA=S.div`
  width: 45%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 2;
  font-size: 13px;
  font-weight: 400;
  background: #f6f6f6;
  right: 0;
  padding: 50px 0 50px 15px;
  @media (max-width: 640px) {
    padding: 16px 0 16px 8px;   
    font-size: 8px;
 }
   @media (max-width: 393px) {
    padding: 12px 0 12px 14px;
  }
`,Ux=S.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,LA=S.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
 @media (max-width: 640px) {
    font-size: 16px;
 }
   @media (max-width: 393px) {
    font-size: 14px;
  }
     @media (max-width: 374px) {
    font-size: 12px;
  }
`,uh=S.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,$A=S(uh)`
 @media (max-width: 640px) {
    display: none;
 }`;function Zm({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return y.jsxs(VA,{children:[y.jsxs(kA,{children:[y.jsx(UA,{src:u,alt:d}),y.jsx(PA,{})]}),y.jsxs(zA,{children:[y.jsxs(Ux,{style:{top:"50px"},children:[y.jsx(LA,{children:n}),y.jsx(uh,{children:t})]}),y.jsxs(Ux,{children:[y.jsx(uh,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?y.jsx(uh,{children:a}):Array.isArray(a)&&a.length>0?y.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>y.jsx("span",{style:{wordBreak:"break-all"},children:p.handle||p.url},`${p.platform}-${m}`))}):"-",y.jsx($A,{children:o?y.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Zm.defaultProps={sns:[]};Zm.propTypes={nameKor:J.string.isRequired,nameEng:J.string,role:J.string,sns:J.arrayOf(J.shape({platform:J.string.isRequired,url:J.string.isRequired})),eMail:J.string,imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};const BA=S.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: #F0F0F0;
  cursor: pointer;
  padding: 2px;
  position: relative;
  @media (max-width: 1600px) {
    width: 100px;
    height: 34px;
  }
  @media (max-width: 640px) {
    width: 56px;
    height: auto;  
    border-radius: 10px;
    padding: 1px;
 }
`,FA=S.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease-in-out;
  width: 56px;
  height: 36px;
  border-radius: 18px;
  background-color: #0e0e0e;
  z-index: 1;
  left: ${n=>n.$active?"4px":"64px"};
  @media (max-width: 1600px) {
    width: 48px;
    height: 30px;
    left: ${n=>n.$active?"4px":"52px"};  
  }
  @media (max-width: 640px) {
    width: 28px;
    height: 18px;
    left: ${n=>n.$active?"1px":"31px"};  
 }
`,b2=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 16px;
  color: #Fafafa;
  z-index: 2;
  transition: left 0.3s ease-in-out;
  margin-left: 16px;
  color: ${n=>n.$active?"#Fafafa":"#909090"};
  font-weight: ${n=>n.$active?"700":"400"};
  @media (max-width: 1600px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 8px;
  }
`,KA=S(b2)`
  margin-left: 32px;
  color: ${n=>n.$active?"#909090":"#Fafafa"};
  font-weight: ${n=>n.$active?"400":"700"};
  @media (max-width: 1600px) {
    font-size: 14px;
    margin-left: 22px;
  }
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function sm({path:n="student",isActive:t=!1,onClick:i}){return y.jsxs(BA,{onClick:i,children:[y.jsx(b2,{$active:t,children:"교수"}),y.jsx(KA,{$active:t,children:"학생"}),y.jsx(FA,{$active:t})]})}sm.propTypes={path:J.oneOf(["student","professor"]),isActive:J.bool,onClick:J.func};const Px=S.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 0.24px;
  font-weight: ${n=>n.$active?700:400};
  color: ${n=>n.$active?"#000":"#bababa"};
  text-decoration: none;
  display: inline-grid;
  position: relative;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease;

  &:hover {
  font-weight: 700;
  color: #000;
  }
    &::after {
    content: attr(data-label);
    top: 0;
    height: 0;
    font-weight: 700;
    font-family: inherit;
    letter-spacing: 0.24px;
    /* line-height: 28.8px; */
    white-space: nowrap;
    visibility: hidden;
    pointer-events: none;
    display: block;
    }
    & > .navbtn-text { grid-area: 1 / 1; }
    &:hover, &:focus {
        font-weight: 700;
    }

  @media (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
    &::after {
        font-size: 20px;
        line-height: 24px;
    }
  }
`,zx=S.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;function ch({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const m={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return t?y.jsx(Px,{href:t,target:u,rel:d,...m,children:y.jsx(zx,{className:"navbtn-text",children:n})}):y.jsx(Px,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:y.jsx(zx,{className:"navbtn-text",children:n})})}ch.propTypes={label:J.string.isRequired,href:J.string,active:J.bool,onClick:J.func,style:J.object,target:J.string,rel:J.string};const T2=S.div`
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 640px) {
   width: auto;
   height: 14px; 
  }
`,qA=S(T2)`
  justify-content: flex-start;
`,Lx=S.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  @media (max-width: 640px) {
    width: 14px;
    height: 14px;
  }
`,S2=S.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 1500px) {
   font-size: 16px;  
  }
  @media (max-width: 640px) {
   font-size: 13px;  
 }
`,HA=S(S2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function Jm({label:n,style:t,mode:i}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return i==="category"?y.jsxs(qA,{style:t,children:[y.jsx(HA,{children:n}),y.jsx(Lx,{children:y.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):y.jsxs(T2,{style:t,children:[y.jsx(S2,{children:n}),y.jsx(Lx,{children:y.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Jm.propTypes={label:J.string.isRequired,style:J.object};const GA=S.div`
  /* display: ${n=>n.$open?"flex":"none"}; */
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: auto;
  height: auto;
  padding: 10px 25px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  gap: 10px;
  z-index: 10;

  // 애니메이션
  opacity: ${n=>n.$open?1:0};
  transform: ${n=>n.$open?"translateY(0)":"translateY(-10px)"};
  visibility: ${n=>n.$open?"visible":"hidden"};
  pointer-events: ${n=>n.$open?"auto":"none"};
  max-height: ${n=>n.$open?"600px":"0"};
  overflow: hidden;
  transition:
  opacity 220ms ease,
  transform 220ms ease,
  max-height 240ms ease,
  visibility 0ms linear ${n=>n.$open?"0ms":"220ms"};
  will-change: opacity, transform;
  transform-origin: top right;
  @media (max-width: 640px) {
     padding: 10px 16px;
 }
`,YA=S.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,QA=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${n=>n.$selected?500:300};
  color: ${n=>n.$selected?"#191919":"#5e5e5e"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;function A2({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return y.jsx(GA,{style:i,$open:a,children:n.map((d,p)=>y.jsx(YA,{onClick:()=>t(d),children:y.jsx(QA,{$selected:d===u,children:d})},p))})}A2.propTypes={options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,isOpen:J.bool,position:J.any,selected:J.string};const XA=S.div`
  position: relative;
`;function tg({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[d,p]=At.useState(!1),[m,g]=At.useState({top:0,left:0}),v=At.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}p(R=>!R)},T=R=>{i&&i(R),p(!1)};return y.jsxs(XA,{ref:v,style:a,children:[y.jsx("div",{onClick:w,children:y.jsx(Jm,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),y.jsx(A2,{options:t,onSelect:T,style:{},isOpen:d,position:m,selected:n})]})}tg.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,filter:J.string};tg.defaultProps={style:{},filter:""};const WA=S.div`
    /* display: ${n=>n.$open?"flex":"none"}; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(6px);
    z-index: 10;

    // 애니메이션
    opacity: ${n=>n.$open?1:0};
    transform: ${n=>n.$open?"translateY(0)":"translateY(-10px)"};
    visibility: ${n=>n.$open?"visible":"hidden"};
    pointer-events: ${n=>n.$open?"auto":"none"};
    transition:
    opacity 220ms ease,
    transform 220ms ease,
    visibility 0ms linear ${n=>n.$open?"0ms":"220ms"};
    will-change: opacity, transform;
    transform-origin: top left;
    @media (max-width: 1500px) {
        padding: 20px 40px;
        left: -40px;
        width: calc(100vw - 80px);
    }
    @media (max-width: 640px) {
        padding: 20px 16px;
        left: -16px;
        width: calc(100vw - 32px);
    }
`,ZA=S.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;

    // 애니메이션
    transform: ${n=>n.$open?"scaleY(1)":"scaleY(0.96)"};
    transform-origin: top left;
    transition: transform 220ms ease;
`,JA=S.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 24px;
    color: ${n=>n.$selected?"#000":"#909090"};
    cursor: pointer;
    @media (max-width: 640px) {
        font-size: 14px;
    }
    @media (max-width: 393px) {
        font-size: 12px;
  }
`;function R2({options:n,isOpen:t,onSelect:i,selected:a}){return y.jsx(WA,{$open:t,children:y.jsx(ZA,{$open:t,children:n.map((o,u)=>y.jsx(JA,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}R2.propTypes={options:J.arrayOf(J.string).isRequired,isOpen:J.bool.isRequired,onSelect:J.func.isRequired,selected:J.oneOfType([J.string,J.number])};const tR=S.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Kl({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,d]=At.useState(!1),p=At.useRef(null),m=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return y.jsxs(tR,{ref:p,style:a,children:[y.jsx("div",{onClick:m,children:y.jsx(Jm,{label:n,mode:o})}),y.jsx(R2,{options:t,onSelect:g,isOpen:u,selected:n})]})}Kl.propTypes={label:J.string.isRequired,options:J.arrayOf(J.string).isRequired,onSelect:J.func.isRequired,style:J.object,mode:J.string};Kl.defaultProps={style:{},mode:"category"};const wp=S.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 88px;
  @media (max-width: 640px) {
    height: auto;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
  }
`,bp=S.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,Tp=S.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Sp=S.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function I2({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,p]=At.useState(!1),m=()=>p(W=>{const ut=!W;return t&&t(ut),ut}),[g,v]=At.useState("전체"),[w,T]=At.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],z=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[H,F]=At.useState("이름순"),Z=o||H,ot=W=>{F(W),a&&a(W)};return B.useEffect(()=>{v(d?M[0]:R[0])},[d]),u.type==="project"?y.jsxs(wp,{children:[y.jsx(bp,{}),y.jsx(Tp,{children:z.map(W=>y.jsx(ch,{label:W,active:w===W,onClick:()=>{T(W),n&&n(W)}},W))}),y.jsx(Sp,{children:y.jsx(Kl,{mode:"category",label:w,options:z,onSelect:W=>{T(W),n&&n(W)}})}),y.jsx(tg,{label:Z,options:P,onSelect:ot})]}):d?y.jsxs(wp,{children:[y.jsx(bp,{}),y.jsx(Tp,{children:M.map(W=>y.jsx(ch,{label:W,active:g===W,onClick:()=>{v(W),n&&n(W)}},W))}),y.jsx(Sp,{children:y.jsx(Kl,{mode:"category",label:g,options:M,onSelect:W=>{v(W),n&&n(W)}})}),y.jsx(sm,{path:d?"professor":"student",isActive:d,onClick:m})]}):y.jsxs(wp,{children:[y.jsx(bp,{}),y.jsx(Tp,{children:R.map(W=>y.jsx(ch,{label:W,active:g===W,onClick:()=>{v(W),n&&n(W)}},W))}),y.jsx(Sp,{children:y.jsx(Kl,{mode:"category",label:g,options:R,onSelect:W=>{v(W),n&&n(W)}})}),y.jsx(sm,{path:d?"professor":"student",isActive:d,onClick:m})]})}const eR=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 100px;
  @media (max-width: 640px) {
    margin-top: 20px;   
 }
`,nR=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  width: auto;
  height: auto;
  margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 0;  
    gap: 16px;
 }
`,iR=S.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 332px;
  border: 1px solid #d0d0d0;
  object-fit: cover;
  @media (max-width: 1600px) {
    width: 200px;
    height: 276px;
  }
  @media (max-width: 1200px) {
    width: 180px;
    height: 252px;
  }
  @media (max-width: 640px) {
    width: 78px;
    height: 108px;
 }
`,rR=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 20px;
  width: 983px;
  height: auto;
  @media (max-width: 1600px) {
    width: 680px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;  
    margin: 0 16px;
 }
`,aR=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: 32px;
  color: #212121;
  margin: 0 0 12px 0;
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
 }
   @media (max-width: 393px) {
    font-size: 16px;
  }
`,Hc=S.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 22px 0 40px 0;
  margin: 0;
  border-top: 1px solid #e0e0e0;
  @media (max-width: 640px) {
    padding: 6px 0 12px 0;
 }
  @media (max-width: 393px) {
    padding: 4px 0 8px 0;
  }
`,Gc=S.p`
  font-weight: 500;
  margin: 0;
  font-size: 20px;
  line-height: 22.4px;
  color: #606060;
  width: 135px;
  @media (max-width: 1600px) {
    font-size: 16px;
    width: 110px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    width: 75px;
 }
  @media (max-width: 393px) {
    font-size: 8px;
    width: 60px;
  }
`,$x=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Yc=S.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 1600px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    line-height: 18px;
 }
   @media (max-width: 393px) {
    font-size: 8px;
    line-height: 14px;
  }
`;function eg({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const p=m=>Array.isArray(m)?y.jsx($x,{children:m.map((g,v)=>y.jsx(Yc,{children:g},v))}):typeof m=="string"&&m?y.jsx($x,{children:y.jsx(Yc,{children:m})}):null;return y.jsx(eR,{children:y.jsxs(nR,{children:[y.jsx(iR,{src:u,alt:d}),y.jsxs(rR,{children:[y.jsx(aR,{children:n}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"직위(직급)"}),y.jsx(Yc,{children:t})]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"이메일"}),y.jsx(Yc,{children:i})]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"약력"}),p(a)]}),y.jsxs(Hc,{children:[y.jsx(Gc,{children:"전문 분야"}),p(o)]})]})]})})}eg.propTypes={nameKor:J.string.isRequired,rank:J.string.isRequired,eMail:J.string.isRequired,education:J.oneOfType([J.string,J.arrayOf(J.string)]),field:J.oneOfType([J.string,J.arrayOf(J.string)]),imgSrc:J.string.isRequired,imgAlt:J.string.isRequired};eg.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const ng=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"UX/UI, Front-End","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Web 3D/XR Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Front Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"@username","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),sR=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["㈜키메이커스 대표이사","㈜삼성전자 디자인경영센터 UX연구소 그룹장","㈜LG전자 디자인종합연구소 가전제품팀 연구원","서울 성북구청, 용인시 디자인위원","ESK / KOSES / KADI 이사, 서비스디자인학회 사업부회장","2016 대한민국 ICT INNOVATION 대상 미래부장관 유공자 표창"],field:["UX 기반 제품/서비스 디자인 기획 및 양산화 개발","제품 인터페이스 UI 분석 및 UI 설계","제품디자인, 설계 및 양산용 제품 개발","사용자의 감성을 자극하는 밸류 체인(Value Chain) 요인 연구"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["서울특별시 서울디자인위원회 심의위원","국립공원관리공단 디자인 분야 자문위원","'디자인코리아 2003'국제회의 패널리스트","㈜현대 리바트 가구 디자인아웃소싱 프로젝트"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],eu=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"1128686899"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Bx=40;function j2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const oR={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Fx=["전체","산업디자인공학","미디어디자인공학"],lR={산업디자인공학:0,미디어디자인공학:1},Kx=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,Ap=ng,kl=sR,uR=S.div`
  position: relative; background: #fff;
`,cR=S.div`
  padding-left: ${Bx}px; padding-right: ${Bx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function hR({children:n}){return y.jsx(uR,{children:y.jsx(cR,{children:n})})}const dR=S.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 100px; 
  margin-bottom: 120px; 
  row-gap: 32px; 
  column-gap: 14px; 
  width: 100%;
  @media (max-width: 640px) {
    margin-top: 20px;
    margin-bottom: 60px;
    row-gap: 18px;  
 }
`,fR=S.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 1450px) {
    display: flex;
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 21px;
  }
`,pR=S.div`
  text-decoration: none; cursor: pointer;
`,mR=S.div`position: relative;`;function gR({people:n}){const t=zm();return y.jsx(dR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,p=u?`${oR[i.category]||"A"}${String(d).padStart(3,"0")}`:null,m=y.jsx(Zm,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:j2(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?y.jsx(pR,{role:"link",tabIndex:0,onClick:()=>t(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${p}`)},"aria-label":`${i.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function yR(){const[n,t]=At.useState(!1),[i,a]=At.useState(Fx[0]),o=At.useMemo(()=>{const p=new Map;return(eu||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);At.useEffect(()=>{a(n?kl[0]?.id||"":Fx[0])},[n]);const u=At.useMemo(()=>{if(!n){if(i==="전체")return Ap;let m=lR[i];return m===void 0&&(m=Kx(i)),Ap.filter(g=>Kx(g.department)===m)}const p=kl.some(m=>m.id===i)?i:kl.find(m=>m.nameKor===i)?.id||"";return Ap.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(eu||[]).find(w=>w.category===m.category&&w.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[i,n,o]),d=At.useMemo(()=>n&&(kl.find(m=>m.id===i)||kl.find(m=>m.nameKor===i))||null,[n,i]);return y.jsxs(mR,{children:[y.jsx(fR,{children:"Peoples"}),y.jsx(I2,{type:"people",onCategoryChange:a,onToggleChange:t}),y.jsxs(hR,{children:[n&&d&&y.jsx(eg,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:j2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),y.jsx(gR,{people:u})]})]})}const qx=S.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,xR=S.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
    border-radius: 8px;
 }
  @media (max-width: 393px) {
    width: 164px;
    height: 130px;
  }
  @media (max-width: 374px) {
    width: 136px;
    height: 108px;
  }
`,Hx=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 445px;
  height: 385px;
  background-color: #FFFFFF;
  @media (max-width: 640px) {
    width: 173px;
    height: 151px;
 }
 @media (max-width: 393px) {
    width: 164px;
    height: 145px;
  }
    @media (max-width: 374px) {
    width: 136px;
    height: 122px;
  }
`,vR=S.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
      border-radius: 8px;
  }
  @media (max-width: 393px) {
    width: 164px;
    height: 130px;
  }
    @media (max-width: 374px) {
    width: 136px;
    height: 108px;
  }
`,_R=S.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
      border-radius: 6px;
 }
 @media (max-width: 393px) {
    width: 164px;
    height: 130px;
  }
    @media (max-width: 374px) {
    width: 136px;
    height: 108px;
  }
`,ER=S.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  position: absolute;
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
    opacity: 1;
    backdrop-filter: none;
    background: linear-gradient(180deg, rgba(102, 102, 102, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
      border-radius: 8px;
  }
  @media (max-width: 393px) {
    width: 164px;
    height: 130px;
  }
    @media (max-width: 374px) {
    width: 136px;
    height: 108px;
  }
`,wR=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  bottom: 22px;
  left: 20px;
  width: auto;
  height: 46px;
  @media (max-width: 640px) {
   bottom: 4px;
   left: 12px;
   gap: 2px;
 }
`,bR=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 12px;
  }
    @media (max-width: 374px) {
    font-size: 10px;
  }
`,TR=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 6px;
    letter-spacing: -0.1px;
    width: 52%;
    min-width: 110px;
  }
`,SR=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 445px;
  height: 32px;
  @media (max-width: 640px) {
    width: 173px;
    height: 14px;
    padding-top: 4px;
 }
 @media (max-width: 393px) {
    width: 164px;
  }
    @media (max-width: 374px) {
    width: 136px;
  }
`,AR=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: auto;
  height: 20px;
  @media (max-width: 640px) {
    width: auto;
    height: 12px;  
 }
   @media (max-width: 374px) {
    height: 10px;
  }
`,RR=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
   @media (max-width: 374px) {
    font-size: 8px;
  }
`,IR=S.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
   @media (max-width: 374px) {
    height: 10px;
  }
`,jR=S.img`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  object-fit: cover;
  border: 1px solid #FFFFFF;
  z-index: ${n=>n.$z||3};
  margin-left: ${n=>n.$ml?"-12px":"0"};
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
    margin-left: ${n=>n.$ml?"-8px":"0"};  
 }
   @media (max-width: 374px) {
    width: 10px;
    height: 10px;
    margin-left: ${n=>n.$ml?"-6px":"0"};  
  }
`,CR=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 90px;
  height: 20px;
  @media (max-width: 640px) {
    width: 34px;
    height: 12px;
    gap: 4px;  
 }
   @media (max-width: 374px) {
    width: 26px;
    height: 10px;
    gap: 2px;

  }
`,Gx=S.div`
  display: flex;
  width: auto;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
  @media (max-width: 640px) {
    height: 12px;
 }
   @media (max-width: 374px) {
    height: 10px;
  }
`,Yx=S.div`
  width: 16px;
  height: 16px;
  background-image: url(${n=>n.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 640px) {
    width: 8px;
    height: 8px;  
 }
   @media (max-width: 374px) {
    width: 6px;
    height: 6px;
  }
`,Qx=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
   @media (max-width: 374px) {
    font-size: 6px;
  }
`;function Xx(n){return typeof n=="number"&&n>999?"999+":n}function ig({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,w=P=>{const H=P.currentTarget.querySelector(".card-hover");H&&(H.style.opacity=1)},T=P=>{const H=P.currentTarget.querySelector(".card-hover");H&&(H.style.opacity=0)},R="/TU2025gradulate/",M=/^https?:\/\//i.test(u),z=y.jsxs(y.Fragment,{children:[y.jsx(xR,{children:y.jsxs(vR,{onMouseEnter:w,onMouseLeave:T,children:[y.jsx(ER,{className:"card-hover",children:y.jsxs(wR,{children:[y.jsx(TR,{children:n}),y.jsx(bR,{children:t})]})}),y.jsx(_R,{src:d,alt:"Project"})]})}),y.jsxs(SR,{children:[y.jsxs(AR,{children:[y.jsx(IR,{children:p.map((P,H)=>y.jsx(jR,{src:P,alt:`Profile${H+1}`,$z:3-H,$ml:H>0},H))}),y.jsx(RR,{children:i})]}),y.jsxs(CR,{children:[y.jsxs(Gx,{children:[y.jsx(Yx,{src:`${R}icons/likeIcon.svg`}),y.jsx(Qx,{children:Xx(g)})]}),y.jsxs(Gx,{children:[y.jsx(Yx,{src:`${R}icons/viewIcon.svg`}),y.jsx(Qx,{children:Xx(v)})]})]})]})]});return M?y.jsx(qx,{children:y.jsx(Hx,{as:"a",href:u,style:{textDecoration:"none"},children:z})}):y.jsx(qx,{children:y.jsx(Hx,{as:ns,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:z})})}ig.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,nameKor:J.string.isRequired,view:J.number,like:J.number,src:J.string.isRequired,href:J.string.isRequired,profileImgs:J.arrayOf(J.string).isRequired,docId:J.oneOfType([J.string,J.number]),collection:J.string};ig.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const DR=()=>{};var Wx={};/**
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
 */const C2=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},NR=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],p=n[i++],m=((o&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[i++],d=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},D2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,p=d?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,w=(u&3)<<4|p>>4;let T=(p&15)<<2|g>>6,R=g&63;m||(R=64,d||(T=64)),a.push(i[v],i[w],i[T],i[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(C2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):NR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const w=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new MR;const T=u<<2|p>>4;if(a.push(T),g!==64){const R=p<<4&240|g>>2;if(a.push(R),w!==64){const M=g<<6&192|w;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OR=function(n){const t=C2(n);return D2.encodeByteArray(t,!0)},bh=function(n){return OR(n).replace(/\./g,"")},VR=function(n){try{return D2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function kR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UR=()=>kR().__FIREBASE_DEFAULTS__,PR=()=>{if(typeof process>"u"||typeof Wx>"u")return;const n=Wx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&VR(n[1]);return t&&JSON.parse(t)},rg=()=>{try{return DR()||UR()||PR()||zR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},LR=n=>rg()?.emulatorHosts?.[n],$R=n=>{const t=LR(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},N2=()=>rg()?.config;/**
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
 */class BR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function ag(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function FR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function KR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bh(JSON.stringify(i)),bh(JSON.stringify(d)),""].join(".")}const ql={};function qR(){const n={prod:[],emulator:[]};for(const t of Object.keys(ql))ql[t]?n.emulator.push(t):n.prod.push(t);return n}function HR(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Zx=!1;function GR(n,t){if(typeof window>"u"||typeof document>"u"||!ag(window.location.host)||ql[n]===t||ql[n]||Zx)return;ql[n]=t;function i(T){return`__firebase__banner__${T}`}const a="__firebase__banner",u=qR().prod.length>0;function d(){const T=document.getElementById(a);T&&T.remove()}function p(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function m(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Zx=!0,d()},T}function v(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=HR(a),R=i("text"),M=document.getElementById(R)||document.createElement("span"),z=i("learnmore"),P=document.getElementById(z)||document.createElement("a"),H=i("preprendIcon"),F=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;p(Z),v(P,z);const ot=g();m(F,H),Z.append(F,M,P,ot),document.body.appendChild(Z)}u?(M.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function YR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QR(){const n=rg()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XR(){return!QR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WR(){try{return typeof indexedDB=="object"}catch{return!1}}function ZR(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
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
 */const JR="FirebaseError";class bo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=JR,Object.setPrototypeOf(this,bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M2.prototype.create)}}class M2{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?t6(u,a):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new bo(o,p,a)}}function t6(n,t){return n.replace(e6,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const e6=/\{\$([^}]+)}/g;function Th(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=t[o];if(Jx(u)&&Jx(d)){if(!Th(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function Jx(n){return n!==null&&typeof n=="object"}/**
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
 */function or(n){return n&&n._delegate?n._delegate:n}class nu{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ga="[DEFAULT]";/**
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
 */class n6{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new BR;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(r6(t))try{this.getOrInitializeService({instanceIdentifier:Ga})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ga){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ga){return this.instances.has(t)}getOptions(t=Ga){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&d.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:i6(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ga){return this.component?this.component.multipleInstances?t:Ga:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i6(n){return n===Ga?void 0:n}function r6(n){return n.instantiationMode==="EAGER"}/**
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
 */class a6{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new n6(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Bt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Bt||(Bt={}));const s6={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},o6=Bt.INFO,l6={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},u6=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=l6[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class O2{constructor(t){this.name=t,this._logLevel=o6,this._logHandler=u6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s6[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const c6=(n,t)=>t.some(i=>n instanceof i);let tv,ev;function h6(){return tv||(tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d6(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V2=new WeakMap,om=new WeakMap,k2=new WeakMap,Rp=new WeakMap,sg=new WeakMap;function f6(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Zr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&V2.set(i,n)}).catch(()=>{}),sg.set(t,n),t}function p6(n){if(om.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});om.set(n,t)}let lm={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return om.get(n);if(t==="objectStoreNames")return n.objectStoreNames||k2.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Zr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function m6(n){lm=n(lm)}function g6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(Ip(this),t,...i);return k2.set(a,t.sort?t.sort():[t]),Zr(a)}:d6().includes(n)?function(...t){return n.apply(Ip(this),t),Zr(V2.get(this))}:function(...t){return Zr(n.apply(Ip(this),t))}}function y6(n){return typeof n=="function"?g6(n):(n instanceof IDBTransaction&&p6(n),c6(n,h6())?new Proxy(n,lm):n)}function Zr(n){if(n instanceof IDBRequest)return f6(n);if(Rp.has(n))return Rp.get(n);const t=y6(n);return t!==n&&(Rp.set(n,t),sg.set(t,n)),t}const Ip=n=>sg.get(n);function x6(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),p=Zr(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Zr(d.result),m.oldVersion,m.newVersion,Zr(d.transaction),m)}),i&&d.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const v6=["get","getKey","getAll","getAllKeys","count"],_6=["put","add","delete","clear"],jp=new Map;function nv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(jp.get(t))return jp.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=_6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||v6.includes(i)))return;const u=async function(d,...p){const m=this.transaction(d,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),o&&m.done]))[0]};return jp.set(t,u),u}m6(n=>({...n,get:(t,i,a)=>nv(t,i)||n.get(t,i,a),has:(t,i)=>!!nv(t,i)||n.has(t,i)}));/**
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
 */class E6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(w6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function w6(n){return n.getComponent()?.type==="VERSION"}const um="@firebase/app",iv="0.14.4";/**
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
 */const lr=new O2("@firebase/app"),b6="@firebase/app-compat",T6="@firebase/analytics-compat",S6="@firebase/analytics",A6="@firebase/app-check-compat",R6="@firebase/app-check",I6="@firebase/auth",j6="@firebase/auth-compat",C6="@firebase/database",D6="@firebase/data-connect",N6="@firebase/database-compat",M6="@firebase/functions",O6="@firebase/functions-compat",V6="@firebase/installations",k6="@firebase/installations-compat",U6="@firebase/messaging",P6="@firebase/messaging-compat",z6="@firebase/performance",L6="@firebase/performance-compat",$6="@firebase/remote-config",B6="@firebase/remote-config-compat",F6="@firebase/storage",K6="@firebase/storage-compat",q6="@firebase/firestore",H6="@firebase/ai",G6="@firebase/firestore-compat",Y6="firebase",Q6="12.4.0";/**
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
 */const cm="[DEFAULT]",X6={[um]:"fire-core",[b6]:"fire-core-compat",[S6]:"fire-analytics",[T6]:"fire-analytics-compat",[R6]:"fire-app-check",[A6]:"fire-app-check-compat",[I6]:"fire-auth",[j6]:"fire-auth-compat",[C6]:"fire-rtdb",[D6]:"fire-data-connect",[N6]:"fire-rtdb-compat",[M6]:"fire-fn",[O6]:"fire-fn-compat",[V6]:"fire-iid",[k6]:"fire-iid-compat",[U6]:"fire-fcm",[P6]:"fire-fcm-compat",[z6]:"fire-perf",[L6]:"fire-perf-compat",[$6]:"fire-rc",[B6]:"fire-rc-compat",[F6]:"fire-gcs",[K6]:"fire-gcs-compat",[q6]:"fire-fst",[G6]:"fire-fst-compat",[H6]:"fire-vertex","fire-js":"fire-js",[Y6]:"fire-js-all"};/**
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
 */const iu=new Map,W6=new Map,hm=new Map;function rv(n,t){try{n.container.addComponent(t)}catch(i){lr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Sh(n){const t=n.name;if(hm.has(t))return lr.debug(`There were multiple attempts to register component ${t}.`),!1;hm.set(t,n);for(const i of iu.values())rv(i,n);for(const i of W6.values())rv(i,n);return!0}function Z6(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function J6(n){return n==null?!1:n.settings!==void 0}/**
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
 */const tI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new M2("app","Firebase",tI);/**
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
 */class eI{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new nu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const nI=Q6;function og(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:cm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Jr.create("bad-app-name",{appName:String(o)});if(i||(i=N2()),!i)throw Jr.create("no-options");const u=iu.get(o);if(u){if(Th(i,u.options)&&Th(a,u.config))return u;throw Jr.create("duplicate-app",{appName:o})}const d=new a6(o);for(const m of hm.values())d.addComponent(m);const p=new eI(i,a,d);return iu.set(o,p),p}function iI(n=cm){const t=iu.get(n);if(!t&&n===cm&&N2())return og();if(!t)throw Jr.create("no-app",{appName:n});return t}function av(){return Array.from(iu.values())}function no(n,t,i){let a=X6[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lr.warn(d.join(" "));return}Sh(new nu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const rI="firebase-heartbeat-database",aI=1,ru="firebase-heartbeat-store";let Cp=null;function U2(){return Cp||(Cp=x6(rI,aI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ru)}catch(i){console.warn(i)}}}}).catch(n=>{throw Jr.create("idb-open",{originalErrorMessage:n.message})})),Cp}async function sI(n){try{const i=(await U2()).transaction(ru),a=await i.objectStore(ru).get(P2(n));return await i.done,a}catch(t){if(t instanceof bo)lr.warn(t.message);else{const i=Jr.create("idb-get",{originalErrorMessage:t?.message});lr.warn(i.message)}}}async function sv(n,t){try{const a=(await U2()).transaction(ru,"readwrite");await a.objectStore(ru).put(t,P2(n)),await a.done}catch(i){if(i instanceof bo)lr.warn(i.message);else{const a=Jr.create("idb-set",{originalErrorMessage:i?.message});lr.warn(a.message)}}}function P2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oI=1024,lI=30;class uI{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new hI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ov();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>lI){const o=dI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){lr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ov(),{heartbeatsToSend:i,unsentEntries:a}=cI(this._heartbeatsCache.heartbeats),o=bh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return lr.warn(t),""}}}function ov(){return new Date().toISOString().substring(0,10)}function cI(n,t=oI){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),lv(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),lv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class hI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WR()?ZR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await sI(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return sv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return sv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function lv(n){return bh(JSON.stringify({version:2,heartbeats:n})).length}function dI(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function fI(n){Sh(new nu("platform-logger",t=>new E6(t),"PRIVATE")),Sh(new nu("heartbeat",t=>new uI(t),"PRIVATE")),no(um,iv,n),no(um,iv,"esm2020"),no("fire-js","")}fI("");var pI="firebase",mI="12.4.0";/**
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
 */no(pI,mI,"app");var uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,z2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,j){function C(){}C.prototype=j.prototype,I.F=j.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(O,V,L){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return j.prototype[V].apply(O,N)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,j,C){C||(C=0);const O=Array(16);if(typeof j=="string")for(var V=0;V<16;++V)O[V]=j.charCodeAt(C++)|j.charCodeAt(C++)<<8|j.charCodeAt(C++)<<16|j.charCodeAt(C++)<<24;else for(V=0;V<16;++V)O[V]=j[C++]|j[C++]<<8|j[C++]<<16|j[C++]<<24;j=I.g[0],C=I.g[1],V=I.g[2];let L=I.g[3],N;N=j+(L^C&(V^L))+O[0]+3614090360&4294967295,j=C+(N<<7&4294967295|N>>>25),N=L+(V^j&(C^V))+O[1]+3905402710&4294967295,L=j+(N<<12&4294967295|N>>>20),N=V+(C^L&(j^C))+O[2]+606105819&4294967295,V=L+(N<<17&4294967295|N>>>15),N=C+(j^V&(L^j))+O[3]+3250441966&4294967295,C=V+(N<<22&4294967295|N>>>10),N=j+(L^C&(V^L))+O[4]+4118548399&4294967295,j=C+(N<<7&4294967295|N>>>25),N=L+(V^j&(C^V))+O[5]+1200080426&4294967295,L=j+(N<<12&4294967295|N>>>20),N=V+(C^L&(j^C))+O[6]+2821735955&4294967295,V=L+(N<<17&4294967295|N>>>15),N=C+(j^V&(L^j))+O[7]+4249261313&4294967295,C=V+(N<<22&4294967295|N>>>10),N=j+(L^C&(V^L))+O[8]+1770035416&4294967295,j=C+(N<<7&4294967295|N>>>25),N=L+(V^j&(C^V))+O[9]+2336552879&4294967295,L=j+(N<<12&4294967295|N>>>20),N=V+(C^L&(j^C))+O[10]+4294925233&4294967295,V=L+(N<<17&4294967295|N>>>15),N=C+(j^V&(L^j))+O[11]+2304563134&4294967295,C=V+(N<<22&4294967295|N>>>10),N=j+(L^C&(V^L))+O[12]+1804603682&4294967295,j=C+(N<<7&4294967295|N>>>25),N=L+(V^j&(C^V))+O[13]+4254626195&4294967295,L=j+(N<<12&4294967295|N>>>20),N=V+(C^L&(j^C))+O[14]+2792965006&4294967295,V=L+(N<<17&4294967295|N>>>15),N=C+(j^V&(L^j))+O[15]+1236535329&4294967295,C=V+(N<<22&4294967295|N>>>10),N=j+(V^L&(C^V))+O[1]+4129170786&4294967295,j=C+(N<<5&4294967295|N>>>27),N=L+(C^V&(j^C))+O[6]+3225465664&4294967295,L=j+(N<<9&4294967295|N>>>23),N=V+(j^C&(L^j))+O[11]+643717713&4294967295,V=L+(N<<14&4294967295|N>>>18),N=C+(L^j&(V^L))+O[0]+3921069994&4294967295,C=V+(N<<20&4294967295|N>>>12),N=j+(V^L&(C^V))+O[5]+3593408605&4294967295,j=C+(N<<5&4294967295|N>>>27),N=L+(C^V&(j^C))+O[10]+38016083&4294967295,L=j+(N<<9&4294967295|N>>>23),N=V+(j^C&(L^j))+O[15]+3634488961&4294967295,V=L+(N<<14&4294967295|N>>>18),N=C+(L^j&(V^L))+O[4]+3889429448&4294967295,C=V+(N<<20&4294967295|N>>>12),N=j+(V^L&(C^V))+O[9]+568446438&4294967295,j=C+(N<<5&4294967295|N>>>27),N=L+(C^V&(j^C))+O[14]+3275163606&4294967295,L=j+(N<<9&4294967295|N>>>23),N=V+(j^C&(L^j))+O[3]+4107603335&4294967295,V=L+(N<<14&4294967295|N>>>18),N=C+(L^j&(V^L))+O[8]+1163531501&4294967295,C=V+(N<<20&4294967295|N>>>12),N=j+(V^L&(C^V))+O[13]+2850285829&4294967295,j=C+(N<<5&4294967295|N>>>27),N=L+(C^V&(j^C))+O[2]+4243563512&4294967295,L=j+(N<<9&4294967295|N>>>23),N=V+(j^C&(L^j))+O[7]+1735328473&4294967295,V=L+(N<<14&4294967295|N>>>18),N=C+(L^j&(V^L))+O[12]+2368359562&4294967295,C=V+(N<<20&4294967295|N>>>12),N=j+(C^V^L)+O[5]+4294588738&4294967295,j=C+(N<<4&4294967295|N>>>28),N=L+(j^C^V)+O[8]+2272392833&4294967295,L=j+(N<<11&4294967295|N>>>21),N=V+(L^j^C)+O[11]+1839030562&4294967295,V=L+(N<<16&4294967295|N>>>16),N=C+(V^L^j)+O[14]+4259657740&4294967295,C=V+(N<<23&4294967295|N>>>9),N=j+(C^V^L)+O[1]+2763975236&4294967295,j=C+(N<<4&4294967295|N>>>28),N=L+(j^C^V)+O[4]+1272893353&4294967295,L=j+(N<<11&4294967295|N>>>21),N=V+(L^j^C)+O[7]+4139469664&4294967295,V=L+(N<<16&4294967295|N>>>16),N=C+(V^L^j)+O[10]+3200236656&4294967295,C=V+(N<<23&4294967295|N>>>9),N=j+(C^V^L)+O[13]+681279174&4294967295,j=C+(N<<4&4294967295|N>>>28),N=L+(j^C^V)+O[0]+3936430074&4294967295,L=j+(N<<11&4294967295|N>>>21),N=V+(L^j^C)+O[3]+3572445317&4294967295,V=L+(N<<16&4294967295|N>>>16),N=C+(V^L^j)+O[6]+76029189&4294967295,C=V+(N<<23&4294967295|N>>>9),N=j+(C^V^L)+O[9]+3654602809&4294967295,j=C+(N<<4&4294967295|N>>>28),N=L+(j^C^V)+O[12]+3873151461&4294967295,L=j+(N<<11&4294967295|N>>>21),N=V+(L^j^C)+O[15]+530742520&4294967295,V=L+(N<<16&4294967295|N>>>16),N=C+(V^L^j)+O[2]+3299628645&4294967295,C=V+(N<<23&4294967295|N>>>9),N=j+(V^(C|~L))+O[0]+4096336452&4294967295,j=C+(N<<6&4294967295|N>>>26),N=L+(C^(j|~V))+O[7]+1126891415&4294967295,L=j+(N<<10&4294967295|N>>>22),N=V+(j^(L|~C))+O[14]+2878612391&4294967295,V=L+(N<<15&4294967295|N>>>17),N=C+(L^(V|~j))+O[5]+4237533241&4294967295,C=V+(N<<21&4294967295|N>>>11),N=j+(V^(C|~L))+O[12]+1700485571&4294967295,j=C+(N<<6&4294967295|N>>>26),N=L+(C^(j|~V))+O[3]+2399980690&4294967295,L=j+(N<<10&4294967295|N>>>22),N=V+(j^(L|~C))+O[10]+4293915773&4294967295,V=L+(N<<15&4294967295|N>>>17),N=C+(L^(V|~j))+O[1]+2240044497&4294967295,C=V+(N<<21&4294967295|N>>>11),N=j+(V^(C|~L))+O[8]+1873313359&4294967295,j=C+(N<<6&4294967295|N>>>26),N=L+(C^(j|~V))+O[15]+4264355552&4294967295,L=j+(N<<10&4294967295|N>>>22),N=V+(j^(L|~C))+O[6]+2734768916&4294967295,V=L+(N<<15&4294967295|N>>>17),N=C+(L^(V|~j))+O[13]+1309151649&4294967295,C=V+(N<<21&4294967295|N>>>11),N=j+(V^(C|~L))+O[4]+4149444226&4294967295,j=C+(N<<6&4294967295|N>>>26),N=L+(C^(j|~V))+O[11]+3174756917&4294967295,L=j+(N<<10&4294967295|N>>>22),N=V+(j^(L|~C))+O[2]+718787259&4294967295,V=L+(N<<15&4294967295|N>>>17),N=C+(L^(V|~j))+O[9]+3951481745&4294967295,I.g[0]=I.g[0]+j&4294967295,I.g[1]=I.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,I.g[2]=I.g[2]+V&4294967295,I.g[3]=I.g[3]+L&4294967295}a.prototype.v=function(I,j){j===void 0&&(j=I.length);const C=j-this.blockSize,O=this.C;let V=this.h,L=0;for(;L<j;){if(V==0)for(;L<=C;)o(this,I,L),L+=this.blockSize;if(typeof I=="string"){for(;L<j;)if(O[V++]=I.charCodeAt(L++),V==this.blockSize){o(this,O),V=0;break}}else for(;L<j;)if(O[V++]=I[L++],V==this.blockSize){o(this,O),V=0;break}}this.h=V,this.o+=j},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var j=1;j<I.length-8;++j)I[j]=0;j=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=j&255,j/=256;for(this.v(I),I=Array(16),j=0,C=0;C<4;++C)for(let O=0;O<32;O+=8)I[j++]=this.g[C]>>>O&255;return I};function u(I,j){var C=p;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=j(I)}function d(I,j){this.h=j;const C=[];let O=!0;for(let V=I.length-1;V>=0;V--){const L=I[V]|0;O&&L==j||(C[V]=L,O=!1)}this.g=C}var p={};function m(I){return-128<=I&&I<128?u(I,function(j){return new d([j|0],j<0?-1:0)}):new d([I|0],I<0?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return w;if(I<0)return P(g(-I));const j=[];let C=1;for(let O=0;I>=C;O++)j[O]=I/C|0,C*=4294967296;return new d(j,0)}function v(I,j){if(I.length==0)throw Error("number format error: empty string");if(j=j||10,j<2||36<j)throw Error("radix out of range: "+j);if(I.charAt(0)=="-")return P(v(I.substring(1),j));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(j,8));let O=w;for(let L=0;L<I.length;L+=8){var V=Math.min(8,I.length-L);const N=parseInt(I.substring(L,L+V),j);V<8?(V=g(Math.pow(j,V)),O=O.j(V).add(g(N))):(O=O.j(C),O=O.add(g(N)))}return O}var w=m(0),T=m(1),R=m(16777216);n=d.prototype,n.m=function(){if(z(this))return-P(this).m();let I=0,j=1;for(let C=0;C<this.g.length;C++){const O=this.i(C);I+=(O>=0?O:4294967296+O)*j,j*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(z(this))return"-"+P(this).toString(I);const j=g(Math.pow(I,6));var C=this;let O="";for(;;){const V=ot(C,j).g;C=H(C,V.j(j));let L=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=V,M(C))return L+O;for(;L.length<6;)L="0"+L;O=L+O}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(let j=0;j<I.g.length;j++)if(I.g[j]!=0)return!1;return!0}function z(I){return I.h==-1}n.l=function(I){return I=H(this,I),z(I)?-1:M(I)?0:1};function P(I){const j=I.g.length,C=[];for(let O=0;O<j;O++)C[O]=~I.g[O];return new d(C,~I.h).add(T)}n.abs=function(){return z(this)?P(this):this},n.add=function(I){const j=Math.max(this.g.length,I.g.length),C=[];let O=0;for(let V=0;V<=j;V++){let L=O+(this.i(V)&65535)+(I.i(V)&65535),N=(L>>>16)+(this.i(V)>>>16)+(I.i(V)>>>16);O=N>>>16,L&=65535,N&=65535,C[V]=N<<16|L}return new d(C,C[C.length-1]&-2147483648?-1:0)};function H(I,j){return I.add(P(j))}n.j=function(I){if(M(this)||M(I))return w;if(z(this))return z(I)?P(this).j(P(I)):P(P(this).j(I));if(z(I))return P(this.j(P(I)));if(this.l(R)<0&&I.l(R)<0)return g(this.m()*I.m());const j=this.g.length+I.g.length,C=[];for(var O=0;O<2*j;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(let V=0;V<I.g.length;V++){const L=this.i(O)>>>16,N=this.i(O)&65535,ue=I.i(V)>>>16,ne=I.i(V)&65535;C[2*O+2*V]+=N*ne,F(C,2*O+2*V),C[2*O+2*V+1]+=L*ne,F(C,2*O+2*V+1),C[2*O+2*V+1]+=N*ue,F(C,2*O+2*V+1),C[2*O+2*V+2]+=L*ue,F(C,2*O+2*V+2)}for(I=0;I<j;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=j;I<2*j;I++)C[I]=0;return new d(C,0)};function F(I,j){for(;(I[j]&65535)!=I[j];)I[j+1]+=I[j]>>>16,I[j]&=65535,j++}function Z(I,j){this.g=I,this.h=j}function ot(I,j){if(M(j))throw Error("division by zero");if(M(I))return new Z(w,w);if(z(I))return j=ot(P(I),j),new Z(P(j.g),P(j.h));if(z(j))return j=ot(I,P(j)),new Z(P(j.g),j.h);if(I.g.length>30){if(z(I)||z(j))throw Error("slowDivide_ only works with positive integers.");for(var C=T,O=j;O.l(I)<=0;)C=W(C),O=W(O);var V=ut(C,1),L=ut(O,1);for(O=ut(O,2),C=ut(C,2);!M(O);){var N=L.add(O);N.l(I)<=0&&(V=V.add(C),L=N),O=ut(O,1),C=ut(C,1)}return j=H(I,V.j(j)),new Z(V,j)}for(V=w;I.l(j)>=0;){for(C=Math.max(1,Math.floor(I.m()/j.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),L=g(C),N=L.j(j);z(N)||N.l(I)>0;)C-=O,L=g(C),N=L.j(j);M(L)&&(L=T),V=V.add(L),I=H(I,N)}return new Z(V,I)}n.B=function(I){return ot(this,I).h},n.and=function(I){const j=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<j;O++)C[O]=this.i(O)&I.i(O);return new d(C,this.h&I.h)},n.or=function(I){const j=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<j;O++)C[O]=this.i(O)|I.i(O);return new d(C,this.h|I.h)},n.xor=function(I){const j=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<j;O++)C[O]=this.i(O)^I.i(O);return new d(C,this.h^I.h)};function W(I){const j=I.g.length+1,C=[];for(let O=0;O<j;O++)C[O]=I.i(O)<<1|I.i(O-1)>>>31;return new d(C,I.h)}function ut(I,j){const C=j>>5;j%=32;const O=I.g.length-C,V=[];for(let L=0;L<O;L++)V[L]=j>0?I.i(L+C)>>>j|I.i(L+C+1)<<32-j:I.i(L+C);return new d(V,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,z2=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,ta=d}).apply(typeof uv<"u"?uv:typeof self<"u"?self:typeof window<"u"?window:{});var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L2,zl,$2,hh,dm,B2,F2,K2;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qc=="object"&&Qc];for(var x=0;x<c.length;++x){var _=c[x];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,x){if(x)t:{var _=a;c=c.split(".");for(var A=0;A<c.length-1;A++){var q=c[A];if(!(q in _))break t;_=_[q]}c=c[c.length-1],A=_[c],x=x(A),x!=A&&x!=null&&t(_,c,{configurable:!0,writable:!0,value:x})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(x){var _=[],A;for(A in x)Object.prototype.hasOwnProperty.call(x,A)&&_.push([A,x[A]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var x=typeof c;return x=="object"&&c!=null||x=="function"}function m(c,x,_){return c.call.apply(c.bind,arguments)}function g(c,x,_){return g=m,g.apply(null,arguments)}function v(c,x){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function w(c,x){function _(){}_.prototype=x.prototype,c.Z=x.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(A,q,X){for(var lt=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)lt[Rt-2]=arguments[Rt];return x.prototype[q].apply(A,lt)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const x=c.length;if(x>0){const _=Array(x);for(let A=0;A<x;A++)_[A]=c[A];return _}return[]}function M(c,x){for(let A=1;A<arguments.length;A++){const q=arguments[A];var _=typeof q;if(_=_!="object"?_:q?Array.isArray(q)?"array":_:"null",_=="array"||_=="object"&&typeof q.length=="number"){_=c.length||0;const X=q.length||0;c.length=_+X;for(let lt=0;lt<X;lt++)c[_+lt]=q[lt]}else c.push(q)}}class z{constructor(x,_){this.i=x,this.j=_,this.h=0,this.g=null}get(){let x;return this.h>0?(this.h--,x=this.g,this.g=x.next,x.next=null):x=this.i(),x}}function P(c){d.setTimeout(()=>{throw c},0)}function H(){var c=I;let x=null;return c.g&&(x=c.g,c.g=c.g.next,c.g||(c.h=null),x.next=null),x}class F{constructor(){this.h=this.g=null}add(x,_){const A=Z.get();A.set(x,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Z=new z(()=>new ot,c=>c.reset());class ot{constructor(){this.next=this.g=this.h=null}set(x,_){this.h=x,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let W,ut=!1,I=new F,j=()=>{const c=Promise.resolve(void 0);W=()=>{c.then(C)}};function C(){for(var c;c=H();){try{c.h.call(c.g)}catch(_){P(_)}var x=Z;x.j(c),x.h<100&&(x.h++,c.next=x.g,x.g=c)}ut=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(c,x){this.type=c,this.g=this.target=x,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,x=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,x),d.removeEventListener("test",_,x)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,x){V.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,x)}w(ue,V),ue.prototype.init=function(c,x){const _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=x,x=c.relatedTarget,x||(_=="mouseover"?x=c.fromElement:_=="mouseout"&&(x=c.toElement)),this.relatedTarget=x,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),tt=0;function dt(c,x,_,A,q){this.listener=c,this.proxy=null,this.src=x,this.type=_,this.capture=!!A,this.ha=q,this.key=++tt,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function jt(c,x,_){for(const A in c)x.call(_,c[A],A,c)}function k(c,x){for(const _ in c)x.call(void 0,c[_],_,c)}function at(c){const x={};for(const _ in c)x[_]=c[_];return x}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(c,x){let _,A;for(let q=1;q<arguments.length;q++){A=arguments[q];for(_ in A)c[_]=A[_];for(let X=0;X<ct.length;X++)_=ct[X],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,x,_,A,q){const X=c.toString();c=this.g[X],c||(c=this.g[X]=[],this.h++);const lt=_t(c,x,A,q);return lt>-1?(x=c[lt],_||(x.fa=!1)):(x=new dt(x,this.src,X,!!A,q),x.fa=_,c.push(x)),x};function Ct(c,x){const _=x.type;if(_ in c.g){var A=c.g[_],q=Array.prototype.indexOf.call(A,x,void 0),X;(X=q>=0)&&Array.prototype.splice.call(A,q,1),X&&(yt(x),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,x,_,A){for(let q=0;q<c.length;++q){const X=c[q];if(!X.da&&X.listener==x&&X.capture==!!_&&X.ha==A)return q}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),zt={};function Me(c,x,_,A,q){if(Array.isArray(x)){for(let X=0;X<x.length;X++)Me(c,x[X],_,A,q);return null}return _=Tu(_),c&&c[ne]?c.J(x,_,p(A)?!!A.capture:!1,q):Mi(c,x,_,!1,A,q)}function Mi(c,x,_,A,q,X){if(!x)throw Error("Invalid event type");const lt=p(q)?!!q.capture:!!q;let Rt=jo(c);if(Rt||(c[ge]=Rt=new gt(c)),_=Rt.add(x,_,A,lt,X),_.proxy)return _;if(A=Hn(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)L||(q=lt),q===void 0&&(q=!1),c.addEventListener(x.toString(),A,q);else if(c.attachEvent)c.attachEvent(ss(x.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Hn(){function c(_){return x.call(c.src,c.listener,_)}const x=ud;return c}function on(c,x,_,A,q){if(Array.isArray(x))for(var X=0;X<x.length;X++)on(c,x[X],_,A,q);else A=p(A)?!!A.capture:!!A,_=Tu(_),c&&c[ne]?(c=c.i,X=String(x).toString(),X in c.g&&(x=c.g[X],_=_t(x,_,A,q),_>-1&&(yt(x[_]),Array.prototype.splice.call(x,_,1),x.length==0&&(delete c.g[X],c.h--)))):c&&(c=jo(c))&&(x=c.g[x.toString()],c=-1,x&&(c=_t(x,_,A,q)),(_=c>-1?x[c]:null)&&ca(_))}function ca(c){if(typeof c!="number"&&c&&!c.da){var x=c.src;if(x&&x[ne])Ct(x.i,c);else{var _=c.type,A=c.proxy;x.removeEventListener?x.removeEventListener(_,A,c.capture):x.detachEvent?x.detachEvent(ss(_),A):x.addListener&&x.removeListener&&x.removeListener(A),(_=jo(x))?(Ct(_,c),_.h==0&&(_.src=null,x[ge]=null)):yt(c)}}}function ss(c){return c in zt?zt[c]:zt[c]="on"+c}function ud(c,x){if(c.da)c=!0;else{x=new ue(x,this);const _=c.listener,A=c.ha||c.src;c.fa&&ca(c),c=_.call(A,x)}return c}function jo(c){return c=c[ge],c instanceof gt?c:null}var fn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Tu(c){return typeof c=="function"?c:(c[fn]||(c[fn]=function(x){return c.handleEvent(x)}),c[fn])}function Oe(){O.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,O),Oe.prototype[ne]=!0,Oe.prototype.removeEventListener=function(c,x,_,A){on(this,c,x,_,A)};function ze(c,x){var _,A=c.G;if(A)for(_=[];A;A=A.G)_.push(A);if(c=c.M,A=x.type||x,typeof x=="string")x=new V(x,c);else if(x instanceof V)x.target=x.target||c;else{var q=x;x=new V(A,c),ht(x,q)}q=!0;let X,lt;if(_)for(lt=_.length-1;lt>=0;lt--)X=x.g=_[lt],q=Oi(X,A,!0,x)&&q;if(X=x.g=c,q=Oi(X,A,!0,x)&&q,q=Oi(X,A,!1,x)&&q,_)for(lt=0;lt<_.length;lt++)X=x.g=_[lt],q=Oi(X,A,!1,x)&&q}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const x in c.g){const _=c.g[x];for(let A=0;A<_.length;A++)yt(_[A]);delete c.g[x],c.h--}}this.G=null},Oe.prototype.J=function(c,x,_,A){return this.i.add(String(c),x,!1,_,A)},Oe.prototype.K=function(c,x,_,A){return this.i.add(String(c),x,!0,_,A)};function Oi(c,x,_,A){if(x=c.i.g[String(x)],!x)return!0;x=x.concat();let q=!0;for(let X=0;X<x.length;++X){const lt=x[X];if(lt&&!lt.da&&lt.capture==_){const Rt=lt.listener,se=lt.ha||lt.src;lt.fa&&Ct(c.i,lt),q=Rt.call(se,A)!==!1&&q}}return q&&!A.defaultPrevented}function cd(c,x){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(x)>2147483647?-1:d.setTimeout(c,x||0)}function Co(c){c.g=cd(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const x=c.h;c.h=null,c.m.apply(null,x)}class hd extends O{constructor(x,_){super(),this.m=x,this.l=_,this.h=null,this.i=!1,this.g=null}j(x){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ha(c){O.call(this),this.h=c,this.g={}}w(ha,O);var dr=[];function Je(c){jt(c.g,function(x,_){this.g.hasOwnProperty(_)&&ca(x)},c),c.g={}}ha.prototype.N=function(){ha.Z.N.call(this),Je(this)},ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cn=d.JSON.stringify,ln=d.JSON.parse,dd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Su(){}function Au(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fr(){V.call(this,"d")}w(fr,V);function Gn(){V.call(this,"c")}w(Gn,V);var Dn={},pr=null;function os(){return pr=pr||new Oe}Dn.Ia="serverreachability";function Do(c){V.call(this,Dn.Ia,c)}w(Do,V);function mr(c){const x=os();ze(x,new Do(x))}Dn.STAT_EVENT="statevent";function ls(c,x){V.call(this,Dn.STAT_EVENT,c),this.stat=x}w(ls,V);function ve(c){const x=os();ze(x,new ls(x,c))}Dn.Ja="timingevent";function Ru(c,x){V.call(this,Dn.Ja,c),this.size=x}w(Ru,V);function gr(c,x){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},x)}function yr(){this.g=!0}yr.prototype.ua=function(){this.g=!1};function No(c,x,_,A,q,X){c.info(function(){if(c.g)if(X){var lt="",Rt=X.split("&");for(let Yt=0;Yt<Rt.length;Yt++){var se=Rt[Yt].split("=");if(se.length>1){const we=se[0];se=se[1];const _n=we.split("_");lt=_n.length>=2&&_n[1]=="type"?lt+(we+"="+se+"&"):lt+(we+"=redacted&")}}}else lt=null;else lt=X;return"XMLHTTP REQ ("+A+") [attempt "+q+"]: "+x+`
`+_+`
`+lt})}function Mo(c,x,_,A,q,X,lt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+q+"]: "+x+`
`+_+`
`+X+" "+lt})}function Vi(c,x,_,A){c.info(function(){return"XMLHTTP TEXT ("+x+"): "+li(c,_)+(A?" "+A:"")})}function fd(c,x){c.info(function(){return"TIMEOUT: "+x})}yr.prototype.info=function(){};function li(c,x){if(!c.g)return x;if(!x)return null;try{const X=JSON.parse(x);if(X){for(c=0;c<X.length;c++)if(Array.isArray(X[c])){var _=X[c];if(!(_.length<2)){var A=_[1];if(Array.isArray(A)&&!(A.length<1)){var q=A[0];if(q!="noop"&&q!="stop"&&q!="close")for(let lt=1;lt<A.length;lt++)A[lt]=""}}}}return Cn(X)}catch{return x}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ki;function da(){}w(da,Su),da.prototype.g=function(){return new XMLHttpRequest},ki=new da;function fa(c){return encodeURIComponent(String(c))}function pd(c){var x=1;c=c.split(":");const _=[];for(;x>0&&c.length;)_.push(c.shift()),x--;return c.length&&_.push(c.join(":")),_}function Yn(c,x,_,A){this.j=c,this.i=x,this.l=_,this.S=A||1,this.V=new ha(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xr}function xr(){this.i=null,this.g="",this.h=!1}var us={},ui={};function ci(c,x,_){c.M=1,c.A=Pi(fe(x)),c.u=_,c.R=!0,vr(c,null)}function vr(c,x){c.F=Date.now(),pa(c),c.B=fe(c.A);var _=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),Du(_.i,"t",A),c.C=0,_=c.j.L,c.h=new xr,c.g=vs(c.j,_?x:null,!c.u),c.P>0&&(c.O=new hd(g(c.Y,c,c.g),c.P)),x=c.V,_=c.g,A=c.ba;var q="readystatechange";Array.isArray(q)||(q&&(dr[0]=q.toString()),q=dr);for(let X=0;X<q.length;X++){const lt=Me(_,q[X],A||x.handleEvent,!1,x.h||x);if(!lt)break;x.g[lt.key]=lt}x=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),x["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,x)):(c.v="GET",c.g.ea(c.B,c.v,null,x)),mr(),No(c.i,c.v,c.B,c.l,c.S,c.u)}Yn.prototype.ba=function(c){c=c.target;const x=this.O;x&&tn(c)==3?x.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=tn(this.g),se=this.g.ya(),Yt=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||Sa(this.g)))){this.K||Rt!=4||se==7||(se==8||Yt<=0?mr(3):mr(2)),di(this);var x=this.g.ca();this.X=x;var _=_r(this);if(this.o=x==200,Mo(this.i,this.v,this.B,this.l,this.S,Rt,x),this.o){if(this.U&&!this.L){e:{if(this.g){var A,q=this.g;if((A=q.g?q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(A)){var X=A;break e}}X=null}if(c=X)Vi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cs(this,c);else{this.o=!1,this.m=3,ve(12),fi(this),ma(this);break t}}if(this.R){c=!0;let we;for(;!this.K&&this.C<_.length;)if(we=Iu(this,_),we==ui){Rt==4&&(this.m=4,ve(14),c=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(we==us){this.m=4,ve(15),Vi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Vi(this.i,this.l,we,null),cs(this,we);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Vi(this.i,this.l,_,"[Invalid Chunked Response]"),fi(this),ma(this);else if(_.length>0&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.aa&&!lt.P&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Fo(lt),lt.P=!0,ve(11))}}else Vi(this.i,this.l,_,null),cs(this,_);Rt==4&&fi(this),this.o&&!this.K&&(Rt==4?Ko(this.j,this):(this.o=!1,pa(this)))}else Aa(this.g),x==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),fi(this),ma(this)}}}catch{}finally{}};function _r(c){if(!Ee(c))return c.g.la();const x=Sa(c.g);if(x==="")return"";let _="";const A=x.length,q=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return fi(c),ma(c),"";c.h.i=new d.TextDecoder}for(let X=0;X<A;X++)c.h.h=!0,_+=c.h.i.decode(x[X],{stream:!(q&&X==A-1)});return x.length=0,c.h.g+=_,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Iu(c,x){var _=c.C,A=x.indexOf(`
`,_);return A==-1?ui:(_=Number(x.substring(_,A)),isNaN(_)?us:(A+=1,A+_>x.length?ui:(x=x.slice(A,A+_),c.C=A+_,x)))}Yn.prototype.cancel=function(){this.K=!0,fi(this)};function pa(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,x){if(c.D!=null)throw Error("WatchDog timer not null");c.D=gr(g(c.aa,c),x)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Yn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(fd(this.i,this.B),this.M!=2&&(mr(),ve(17)),fi(this),this.m=2,ma(this)):hi(this,this.T-c)};function ma(c){c.j.I==0||c.K||Ko(c.j,c)}function fi(c){di(c);var x=c.O;x&&typeof x.dispose=="function"&&x.dispose(),c.O=null,Je(c.V),c.g&&(x=c.g,c.g=null,x.abort(),x.dispose())}function cs(c,x){try{var _=c.j;if(_.I!=0&&(_.g==c||xa(_.h,c))){if(!c.L&&xa(_.h,c)&&_.I==3){try{var A=_.Ba.g.parse(x)}catch{A=null}if(Array.isArray(A)&&A.length==3){var q=A;if(q[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)xs(_),pi(_);else break t;Bo(_),ve(18)}}else _.xa=q[1],0<_.xa-_.K&&q[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=gr(g(_.Va,_),6e3));Nn(_.h)<=1&&_.ta&&(_.ta=void 0)}else $i(_,11)}else if((c.L||_.g==c)&&xs(_),!N(x))for(q=_.Ba.g.parse(x),x=0;x<q.length;x++){let Yt=q[x];const we=Yt[0];if(!(we<=_.K))if(_.K=we,Yt=Yt[1],_.I==2)if(Yt[0]=="c"){_.M=Yt[1],_.ba=Yt[2];const _n=Yt[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const mi=Yt[4];mi!=null&&(_.za=mi,_.j.info("SVER="+_.za));const Wn=Yt[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(A=1.5*Wn,_.O=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Zn=c.g;if(Zn){const Jn=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var X=A.h;X.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(hs(X,X.h),X.h=null))}if(A.G){const Ho=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(A.wa=Ho,Wt(A.J,A.G,Ho))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),A=_;var lt=c;if(A.na=Lu(A,A.L?A.ba:null,A.W),lt.L){Ui(A.h,lt);var Rt=lt,se=A.O;se&&(Rt.H=se),Rt.D&&(di(Rt),pa(Rt)),A.g=lt}else ku(A);_.i.length>0&&Ca(_)}else Yt[0]!="stop"&&Yt[0]!="close"||$i(_,7);else _.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?$i(_,7):Ia(_):Yt[0]!="noop"&&_.l&&_.l.qa(Yt),_.A=0)}}mr(4)}catch{}}var md=class{constructor(c,x){this.g=c,this.map=x}};function ga(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ya(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function xa(c,x){return c.h?c.h==x:c.g?c.g.has(x):!1}function hs(c,x){c.g?c.g.add(x):c.h=x}function Ui(c,x){c.h&&c.h==x?c.h=null:c.g&&c.g.has(x)&&c.g.delete(x)}ga.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ds(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let x=c.i;for(const _ of c.g.values())x=x.concat(_.G);return x}return R(c.i)}var fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gd(c,x){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const A=c[_].indexOf("=");let q,X=null;A>=0?(q=c[_].substring(0,A),X=c[_].substring(A+1)):q=c[_],x(q,X?decodeURIComponent(X.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let x;c instanceof Qn?(this.l=c.l,Er(this,c.j),this.o=c.o,this.g=c.g,va(this,c.u),this.h=c.h,wr(this,Nu(c.i)),this.m=c.m):c&&(x=String(c).match(fs))?(this.l=!1,Er(this,x[1]||"",!0),this.o=_a(x[2]||""),this.g=_a(x[3]||"",!0),va(this,x[4]),this.h=_a(x[5]||"",!0),wr(this,x[6]||"",!0),this.m=_a(x[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Qn.prototype.toString=function(){const c=[];var x=this.j;x&&c.push(Le(x,Vo,!0),":");var _=this.g;return(_||x=="file")&&(c.push("//"),(x=this.o)&&c.push(Le(x,Vo,!0),"@"),c.push(fa(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Le(_,_.charAt(0)=="/"?br:ko,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Le(_,Cu)),c.join("")},Qn.prototype.resolve=function(c){const x=fe(this);let _=!!c.j;_?Er(x,c.j):_=!!c.o,_?x.o=c.o:_=!!c.g,_?x.g=c.g:_=c.u!=null;var A=c.h;if(_)va(x,c.u);else if(_=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var q=x.h.lastIndexOf("/");q!=-1&&(A=x.h.slice(0,q+1)+A)}if(q=A,q==".."||q==".")A="";else if(q.indexOf("./")!=-1||q.indexOf("/.")!=-1){A=q.lastIndexOf("/",0)==0,q=q.split("/");const X=[];for(let lt=0;lt<q.length;){const Rt=q[lt++];Rt=="."?A&&lt==q.length&&X.push(""):Rt==".."?((X.length>1||X.length==1&&X[0]!="")&&X.pop(),A&&lt==q.length&&X.push("")):(X.push(Rt),A=!0)}A=X.join("/")}else A=q}return _?x.h=A:_=c.i.toString()!=="",_?wr(x,Nu(c.i)):_=!!c.m,_&&(x.m=c.m),x};function fe(c){return new Qn(c)}function Er(c,x,_){c.j=_?_a(x,!0):x,c.j&&(c.j=c.j.replace(/:$/,""))}function va(c,x){if(x){if(x=Number(x),isNaN(x)||x<0)throw Error("Bad port number "+x);c.u=x}else c.u=null}function wr(c,x,_){x instanceof Mn?(c.i=x,zo(c.i,c.l)):(_||(x=Le(x,ju)),c.i=new Mn(x,c.l))}function Wt(c,x,_){c.i.set(x,_)}function Pi(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function _a(c,x){return c?x?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Le(c,x,_){return typeof c=="string"?(c=encodeURI(c).replace(x,Oo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Oo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,ko=/[#\?:]/g,br=/[#\?]/g,ju=/[#\?@]/g,Cu=/#/g;function Mn(c,x){this.h=this.g=null,this.i=c||null,this.j=!!x}function zi(c){c.g||(c.g=new Map,c.h=0,c.i&&gd(c.i,function(x,_){c.add(decodeURIComponent(x.replace(/\+/g," ")),_)}))}n=Mn.prototype,n.add=function(c,x){zi(this),this.i=null,c=Xn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(x),this.h+=1,this};function Uo(c,x){zi(c),x=Xn(c,x),c.g.has(x)&&(c.i=null,c.h-=c.g.get(x).length,c.g.delete(x))}function Po(c,x){return zi(c),x=Xn(c,x),c.g.has(x)}n.forEach=function(c,x){zi(this),this.g.forEach(function(_,A){_.forEach(function(q){c.call(x,q,A,this)},this)},this)};function ps(c,x){zi(c);let _=[];if(typeof x=="string")Po(c,x)&&(_=_.concat(c.g.get(Xn(c,x))));else for(c=Array.from(c.g.values()),x=0;x<c.length;x++)_=_.concat(c[x]);return _}n.set=function(c,x){return zi(this),this.i=null,c=Xn(this,c),Po(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[x]),this.h+=1,this},n.get=function(c,x){return c?(c=ps(this,c),c.length>0?String(c[0]):x):x};function Du(c,x,_){Uo(c,x),_.length>0&&(c.i=null,c.g.set(Xn(c,x),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],x=Array.from(this.g.keys());for(let A=0;A<x.length;A++){var _=x[A];const q=fa(_);_=ps(this,_);for(let X=0;X<_.length;X++){let lt=q;_[X]!==""&&(lt+="="+fa(_[X])),c.push(lt)}}return this.i=c.join("&")};function Nu(c){const x=new Mn;return x.i=c.i,c.g&&(x.g=new Map(c.g),x.h=c.h),x}function Xn(c,x){return x=String(x),c.j&&(x=x.toLowerCase()),x}function zo(c,x){x&&!c.j&&(zi(c),c.i=null,c.g.forEach(function(_,A){const q=A.toLowerCase();A!=q&&(Uo(this,A),Du(this,q,_))},c)),c.j=x}function Lo(c,x){const _=new yr;if(d.Image){const A=new Image;A.onload=v(un,_,"TestLoadImage: loaded",!0,x,A),A.onerror=v(un,_,"TestLoadImage: error",!1,x,A),A.onabort=v(un,_,"TestLoadImage: abort",!1,x,A),A.ontimeout=v(un,_,"TestLoadImage: timeout",!1,x,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else x(!1)}function Tr(c,x){const _=new yr,A=new AbortController,q=setTimeout(()=>{A.abort(),un(_,"TestPingServer: timeout",!1,x)},1e4);fetch(c,{signal:A.signal}).then(X=>{clearTimeout(q),X.ok?un(_,"TestPingServer: ok",!0,x):un(_,"TestPingServer: server error",!1,x)}).catch(()=>{clearTimeout(q),un(_,"TestPingServer: error",!1,x)})}function un(c,x,_,A,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),A(_)}catch{}}function Mu(){this.g=new dd}function Ea(c){this.i=c.Sb||null,this.h=c.ab||!1}w(Ea,Su),Ea.prototype.g=function(){return new wa(this.i,this.h)};function wa(c,x){Oe.call(this),this.H=c,this.o=x,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(wa,Oe),n=wa.prototype,n.open=function(c,x){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=x,this.readyState=1,Li(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const x={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(x.body=c),(this.H||d).fetch(new Request(this.D,x)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sr(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sr(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var x=c.value?c.value:new Uint8Array(0);(x=this.B.decode(x,{stream:!c.done}))&&(this.response=this.responseText+=x)}c.done?cn(this):Li(this),this.readyState==3&&Sr(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Li(c)}n.setRequestHeader=function(c,x){this.A.append(c,x)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],x=this.h.entries();for(var _=x.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=x.next();return c.join(`\r
`)};function Li(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ar(c){let x="";return jt(c,function(_,A){x+=A,x+=":",x+=_,x+=`\r
`}),x}function On(c,x,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Ar(_),typeof c=="string"?_!=null&&fa(_):Wt(c,x,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var ms=/^https?$/i,Ou=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,x,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);x=x?x.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ki.g(),this.g.onreadystatechange=T(g(this.Ca,this));try{this.B=!0,this.g.open(x,String(c),!0),this.B=!1}catch(X){ba(this,X);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var q in A)_.set(q,A[q]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const X of A.keys())_.set(X,A.get(X));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(X=>X.toLowerCase()=="content-type"),q=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Ou,x,void 0)>=0)||A||q||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,lt]of _)this.g.setRequestHeader(X,lt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(X){ba(this,X)}};function ba(c,x){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=x,c.o=5,Ta(c),Ve(c)}function Ta(c){c.A||(c.A=!0,ze(c,"complete"),ze(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ze(this,"complete"),ze(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$o(this):this.Xa())},n.Xa=function(){$o(this)};function $o(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(ze(c,"readystatechange"),tn(c)==4){c.h=!1;try{const X=c.ca();t:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var x=!0;break t;default:x=!1}var _;if(!(_=x)){var A;if(A=X===0){let lt=String(c.D).match(fs)[1]||null;!lt&&d.self&&d.self.location&&(lt=d.self.location.protocol.slice(0,-1)),A=!ms.test(lt?lt.toLowerCase():"")}_=A}if(_)ze(c,"complete"),ze(c,"success");else{c.o=6;try{var q=tn(c)>2?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.ca()+"]",Ta(c)}}finally{Ve(c)}}}}function Ve(c,x){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,x||ze(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var x=this.g.responseText;return c&&x.indexOf(c)==0&&(x=x.substring(c.length)),ln(x)}};function Sa(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Aa(c){const x={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(N(c[A]))continue;var _=pd(c[A]);const q=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const X=x[q]||[];x[q]=X,X.push(_)}k(x,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ra(c,x,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||x}function gs(c){this.za=0,this.i=[],this.j=new yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ra("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ra("baseRetryDelayMs",5e3,c),this.Za=Ra("retryDelaySeedMs",1e4,c),this.Ta=Ra("forwardChannelMaxRetries",2,c),this.va=Ra("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ga(c&&c.concurrentRequestLimit),this.Ba=new Mu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=gs.prototype,n.ka=8,n.I=1,n.connect=function(c,x,_,A){ve(0),this.W=c,this.H=x||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.J=Lu(this,null,this.W),Ca(this)};function Ia(c){if(ja(c),c.I==3){var x=c.V++,_=fe(c.J);if(Wt(_,"SID",c.M),Wt(_,"RID",x),Wt(_,"TYPE","terminate"),Da(c,_),x=new Yn(c,c.j,x),x.M=2,x.A=Pi(fe(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(x.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=x.A,_=!0),_||(x.g=vs(x.j,null),x.g.ea(x.A)),x.F=Date.now(),pa(x)}zu(c)}function pi(c){c.g&&(Fo(c),c.g.cancel(),c.g=null)}function ja(c){pi(c),c.v&&(d.clearTimeout(c.v),c.v=null),xs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ca(c){if(!ya(c.h)&&!c.m){c.m=!0;var x=c.Ea;W||j(),ut||(W(),ut=!0),I.add(x,c),c.D=0}}function yd(c,x){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=x.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=gr(g(c.Ea,c,x),Pu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const q=new Yn(this,this.j,c);let X=this.o;if(this.U&&(X?(X=at(X),ht(X,this.U)):X=this.U),this.u!==null||this.R||(q.J=X,X=null),this.S)t:{for(var x=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(x+=A,x>4096){x=_;break t}if(x===4096||_===this.i.length-1){x=_+1;break t}}x=1e3}else x=1e3;x=ys(this,q,x),_=fe(this.J),Wt(_,"RID",c),Wt(_,"CVER",22),this.G&&Wt(_,"X-HTTP-Session-Id",this.G),Da(this,_),X&&(this.R?x="headers="+fa(Ar(X))+"&"+x:this.u&&On(_,this.u,X)),hs(this.h,q),this.Ra&&Wt(_,"TYPE","init"),this.S?(Wt(_,"$req",x),Wt(_,"SID","null"),q.U=!0,ci(q,_,null)):ci(q,_,x),this.I=2}}else this.I==3&&(c?Vu(this,c):this.i.length==0||ya(this.h)||Vu(this))};function Vu(c,x){var _;x?_=x.l:_=c.V++;const A=fe(c.J);Wt(A,"SID",c.M),Wt(A,"RID",_),Wt(A,"AID",c.K),Da(c,A),c.u&&c.o&&On(A,c.u,c.o),_=new Yn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),x&&(c.i=x.G.concat(c.i)),x=ys(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),hs(c.h,_),ci(_,A,x)}function Da(c,x){c.H&&jt(c.H,function(_,A){Wt(x,A,_)}),c.l&&jt({},function(_,A){Wt(x,A,_)})}function ys(c,x,_){_=Math.min(c.i.length,_);const A=c.l?g(c.l.Ka,c.l,c):null;t:{var q=c.i;let Rt=-1;for(;;){const se=["count="+_];Rt==-1?_>0?(Rt=q[0].g,se.push("ofs="+Rt)):Rt=0:se.push("ofs="+Rt);let Yt=!0;for(let we=0;we<_;we++){var X=q[we].g;const _n=q[we].map;if(X-=Rt,X<0)Rt=Math.max(0,q[we].g-100),Yt=!1;else try{X="req"+X+"_"||"";try{var lt=_n instanceof Map?_n:Object.entries(_n);for(const[mi,Wn]of lt){let Zn=Wn;p(Wn)&&(Zn=Cn(Wn)),se.push(X+mi+"="+encodeURIComponent(Zn))}}catch(mi){throw se.push(X+"type="+encodeURIComponent("_badmap")),mi}}catch{A&&A(_n)}}if(Yt){lt=se.join("&");break t}}lt=void 0}return c=c.i.splice(0,_),x.G=c,lt}function ku(c){if(!c.g&&!c.v){c.Y=1;var x=c.Da;W||j(),ut||(W(),ut=!0),I.add(x,c),c.A=0}}function Bo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=gr(g(c.Da,c),Pu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Uu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=gr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),pi(this),Uu(this))};function Fo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Uu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var x=fe(c.na);Wt(x,"RID","rpc"),Wt(x,"SID",c.M),Wt(x,"AID",c.K),Wt(x,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(x,"TO",c.ia),Wt(x,"TYPE","xmlhttp"),Da(c,x),c.u&&c.o&&On(x,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(fe(x)),_.u=null,_.R=!0,vr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,pi(this),Bo(this),ve(19))};function xs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Ko(c,x){var _=null;if(c.g==x){xs(c),Fo(c),c.g=null;var A=2}else if(xa(c.h,x))_=x.G,Ui(c.h,x),A=1;else return;if(c.I!=0){if(x.o)if(A==1){_=x.u?x.u.length:0,x=Date.now()-x.F;var q=c.D;A=os(),ze(A,new Ru(A,_)),Ca(c)}else ku(c);else if(q=x.m,q==3||q==0&&x.X>0||!(A==1&&yd(c,x)||A==2&&Bo(c)))switch(_&&_.length>0&&(x=c.h,x.i=x.i.concat(_)),q){case 1:$i(c,5);break;case 4:$i(c,10);break;case 3:$i(c,6);break;default:$i(c,2)}}}function Pu(c,x){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*x}function $i(c,x){if(c.j.info("Error code "+x),x==2){var _=g(c.bb,c),A=c.Ua;const q=!A;A=new Qn(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Er(A,"https"),Pi(A),q?Lo(A.toString(),_):Tr(A.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(x),zu(c),ja(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function zu(c){if(c.I=0,c.ja=[],c.l){const x=ds(c.h);(x.length!=0||c.i.length!=0)&&(M(c.ja,x),M(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Lu(c,x,_){var A=_ instanceof Qn?fe(_):new Qn(_);if(A.g!="")x&&(A.g=x+"."+A.g),va(A,A.u);else{var q=d.location;A=q.protocol,x=x?x+"."+q.hostname:q.hostname,q=+q.port;const X=new Qn(null);A&&Er(X,A),x&&(X.g=x),q&&va(X,q),_&&(X.h=_),A=X}return _=c.G,x=c.wa,_&&x&&Wt(A,_,x),Wt(A,"VER",c.ka),Da(c,A),A}function vs(c,x,_){if(x&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return x=c.Aa&&!c.ma?new ie(new Ea({ab:_})):new ie(c.ma),x.Fa(c.L),x}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}n=$u.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function _s(){}_s.prototype.g=function(c,x){return new hn(c,x)};function hn(c,x){Oe.call(this),this.g=new gs(x),this.l=c,this.h=x&&x.messageUrlParams||null,c=x&&x.messageHeaders||null,x&&x.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=x&&x.initMessageHeaders||null,x&&x.messageContentType&&(c?c["X-WebChannel-Content-Type"]=x.messageContentType:c={"X-WebChannel-Content-Type":x.messageContentType}),x&&x.sa&&(c?c["X-WebChannel-Client-Profile"]=x.sa:c={"X-WebChannel-Client-Profile":x.sa}),this.g.U=c,(c=x&&x.Qb)&&!N(c)&&(this.g.u=c),this.A=x&&x.supportsCrossDomainXhr||!1,this.v=x&&x.sendRawJson||!1,(x=x&&x.httpSessionIdParam)&&!N(x)&&(this.g.G=x,c=this.h,c!==null&&x in c&&(c=this.h,x in c&&delete c[x])),this.j=new Rr(this)}w(hn,Oe),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Ia(this.g)},hn.prototype.o=function(c){var x=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Cn(c),c=_);x.i.push(new md(x.Ya++,c)),x.I==3&&Ca(x)},hn.prototype.N=function(){this.g.l=null,delete this.j,Ia(this.g),delete this.g,hn.Z.N.call(this)};function qo(c){fr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var x=c.__sm__;if(x){t:{for(const _ in x){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,x=x!==null&&c in x?x[c]:void 0),this.data=x}else this.data=c}w(qo,fr);function Bu(){Gn.call(this),this.status=1}w(Bu,Gn);function Rr(c){this.g=c}w(Rr,$u),Rr.prototype.ra=function(){ze(this.g,"a")},Rr.prototype.qa=function(c){ze(this.g,new qo(c))},Rr.prototype.pa=function(c){ze(this.g,new Bu)},Rr.prototype.oa=function(){ze(this.g,"b")},_s.prototype.createWebChannel=_s.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,K2=function(){return new _s},F2=function(){return os()},B2=Dn,dm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,hh=_e,He.COMPLETE="complete",$2=He,Au.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,zl=Au,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,L2=ie}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});const cv="@firebase/firestore",hv="4.9.2";/**
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
 */class an{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
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
 */let To="12.3.0";/**
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
 */const Ja=new O2("@firebase/firestore");function Ws(){return Ja.logLevel}function pt(n,...t){if(Ja.logLevel<=Bt.DEBUG){const i=t.map(lg);Ja.debug(`Firestore (${To}): ${n}`,...i)}}function ur(n,...t){if(Ja.logLevel<=Bt.ERROR){const i=t.map(lg);Ja.error(`Firestore (${To}): ${n}`,...i)}}function co(n,...t){if(Ja.logLevel<=Bt.WARN){const i=t.map(lg);Ja.warn(`Firestore (${To}): ${n}`,...i)}}function lg(n){if(typeof n=="string")return n;try{/**
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
*/return(function(i){return JSON.stringify(i)})(n)}catch{return n}}/**
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
 */function bt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,q2(n,a,i)}function q2(n,t,i){let a=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw ur(a),new Error(a)}function Gt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||q2(t,o,a)}function It(n,t){return n}/**
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
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends bo{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
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
 */class H2{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(an.UNAUTHENTICATED)))}shutdown(){}}class yI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class xI{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Gt(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,i(m)):Promise.resolve();let u=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new rr,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const m=u;t.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new rr)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new H2(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class vI{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _I{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new vI(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EI{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,J6(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Gt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new dv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class ug{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=wI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function fm(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Dp(o)===Dp(u)?Ut(o,u):Dp(o)?1:-1}return Ut(n.length,t.length)}const bI=55296,TI=57343;function Dp(n){const t=n.charCodeAt(0);return t>=bI&&t<=TI}function ho(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
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
 */const fv="__name__";class bi{constructor(t,i,a){i===void 0?i=0:i>t.length&&bt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&bt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return bi.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof bi?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=bi.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Ut(t.length,i.length)}static compareSegments(t,i){const a=bi.isNumericId(t),o=bi.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?bi.extractNumericId(t).compare(bi.extractNumericId(i)):fm(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ta.fromString(t.substring(4,t.length-2))}}class ae extends bi{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ft(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const SI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends bi{construct(t,i,a){return new We(t,i,a)}static isValidIdentifier(t){return SI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fv}static keyField(){return new We([fv])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new ft(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ft(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=m,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(a+=p,o++):(u(),o++)}if(u(),d)throw new ft(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(i)}static emptyPath(){return new We([])}}/**
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
 */class vt{constructor(t){this.path=t}static fromPath(t){return new vt(ae.fromString(t))}static fromName(t){return new vt(ae.fromString(t).popFirst(5))}static empty(){return new vt(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ae.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ae.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vt(new ae(t.slice()))}}/**
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
 */function G2(n,t,i){if(!i)throw new ft(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function AI(n,t,i,a){if(t===!0&&a===!0)throw new ft(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function pv(n){if(!vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mv(n){if(vt.isDocumentKey(n))throw new ft(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Y2(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":bt(12329,{type:typeof n})}function cr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ft(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Hh(n);throw new ft(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function mu(n,t){if(!Y2(n))throw new ft(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new ft(it.INVALID_ARGUMENT,i);return!0}/**
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
 */const gv=-62135596800,yv=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*yv);return new le(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ft(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<gv)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ft(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yv}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mu(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-gv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ne("string",le._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new le(0,0))}static max(){return new St(new le(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const au=-1;function RI(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(i+1,0):new le(i,a));return new na(o,vt.empty(),t)}function II(n){return new na(n.readTime,n.key,au)}class na{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new na(St.min(),vt.empty(),au)}static max(){return new na(St.max(),vt.empty(),au)}}function jI(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const CI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function So(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==CI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&bt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,d=!1;t.forEach((p=>{++o,p.next((()=>{++u,d&&u===o&&i()}),(m=>a(m)))})),d=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,d=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;i(t[g]).next((v=>{d[g]=v,++p,p===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function NI(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Ao(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Gh.ce=-1;/**
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
 */const cg=-1;function Yh(n){return n==null}function Ah(n){return n===0&&1/n==-1/0}function MI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ah(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q2="";function OI(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=xv(t)),t=VI(n.get(i),t);return xv(t)}function VI(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case Q2:i+="";break;default:i+=u}}return i}function xv(n){return n+Q2+""}/**
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
 */function vv(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function la(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function X2(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class me{constructor(t,i){this.comparator=t,this.root=i||Xe.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xc(this.root,t,this.comparator,!0)}}class Xc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new Xe(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw bt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw bt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw bt(57766)}get value(){throw bt(16141)}get color(){throw bt(16727)}get left(){throw bt(29726)}get right(){throw bt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new Xe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(t){return new _v(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Pe(this.comparator);return i.data=t,i}}class _v{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new jn([])}unionWith(t){let i=new Pe(We.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new jn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ho(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class W2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new W2("Invalid base64 string: "+u):u}})(t);return new Ze(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Ze(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ia(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const i=kI.exec(n);if(Gt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ra(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const Z2="server_timestamp",J2="__type__",tE="__previous_value__",eE="__local_write_time__";function hg(n){return(n?.mapValue?.fields||{})[J2]?.stringValue===Z2}function Qh(n){const t=n.mapValue.fields[tE];return hg(t)?Qh(t):t}function su(n){const t=ia(n.mapValue.fields[eE].timestampValue);return new le(t.seconds,t.nanos)}/**
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
 */class UI{constructor(t,i,a,o,u,d,p,m,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Rh="(default)";class ou{constructor(t,i){this.projectId=t,this.database=i||Rh}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(t){return t instanceof ou&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const nE="__type__",PI="__max__",Wc={mapValue:{}},iE="__vector__",Ih="value";function aa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hg(n)?4:LI(n)?9007199254740991:zI(n)?10:11:bt(28295,{value:n})}function Ci(n,t){if(n===t)return!0;const i=aa(n);if(i!==aa(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return su(n).isEqual(su(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=ia(o.timestampValue),p=ia(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ra(o.bytesValue).isEqual(ra(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Se(o.doubleValue),p=Se(u.doubleValue);return d===p?Ah(d)===Ah(p):isNaN(d)&&isNaN(p)}return!1})(n,t);case 9:return ho(n.arrayValue.values||[],t.arrayValue.values||[],Ci);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},p=u.mapValue.fields||{};if(vv(d)!==vv(p))return!1;for(const m in d)if(d.hasOwnProperty(m)&&(p[m]===void 0||!Ci(d[m],p[m])))return!1;return!0})(n,t);default:return bt(52216,{left:n})}}function lu(n,t){return(n.values||[]).find((i=>Ci(i,t)))!==void 0}function fo(n,t){if(n===t)return 0;const i=aa(n),a=aa(t);if(i!==a)return Ut(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const p=Se(u.integerValue||u.doubleValue),m=Se(d.integerValue||d.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return Ev(n.timestampValue,t.timestampValue);case 4:return Ev(su(n),su(t));case 5:return fm(n.stringValue,t.stringValue);case 6:return(function(u,d){const p=ra(u),m=ra(d);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const p=u.split("/"),m=d.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ut(p[g],m[g]);if(v!==0)return v}return Ut(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const p=Ut(Se(u.latitude),Se(d.latitude));return p!==0?p:Ut(Se(u.longitude),Se(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return wv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const p=u.fields||{},m=d.fields||{},g=p[Ih]?.arrayValue,v=m[Ih]?.arrayValue,w=Ut(g?.values?.length||0,v?.values?.length||0);return w!==0?w:wv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Wc.mapValue&&d===Wc.mapValue)return 0;if(u===Wc.mapValue)return 1;if(d===Wc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=d.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let w=0;w<m.length&&w<v.length;++w){const T=fm(m[w],v[w]);if(T!==0)return T;const R=fo(p[m[w]],g[v[w]]);if(R!==0)return R}return Ut(m.length,v.length)})(n.mapValue,t.mapValue);default:throw bt(23264,{he:i})}}function Ev(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const i=ia(n),a=ia(t),o=Ut(i.seconds,a.seconds);return o!==0?o:Ut(i.nanos,a.nanos)}function wv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=fo(i[o],a[o]);if(u)return u}return Ut(i.length,a.length)}function po(n){return pm(n)}function pm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=ia(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return ra(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=pm(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${pm(i.fields[d])}`;return o+"}"})(n.mapValue):bt(61005,{value:n})}function dh(n){switch(aa(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qh(n);return t?16+dh(t):16;case 5:return 2*n.stringValue.length;case 6:return ra(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+dh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return la(a.fields,((u,d)=>{o+=u.length+dh(d)})),o})(n.mapValue);default:throw bt(13486,{value:n})}}function bv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function mm(n){return!!n&&"integerValue"in n}function dg(n){return!!n&&"arrayValue"in n}function Tv(n){return!!n&&"nullValue"in n}function Sv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fh(n){return!!n&&"mapValue"in n}function zI(n){return(n?.mapValue?.fields||{})[nE]?.stringValue===iE}function Hl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return la(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=Hl(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Hl(n.arrayValue.values[i]);return t}return{...n}}function LI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===PI}/**
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
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!fh(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hl(i)}setAll(t){let i=We.emptyPath(),a={},o=[];t.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,a,o),a={},o=[],i=p.popLast()}d?a[p.lastSegment()]=Hl(d):o.push(p.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());fh(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ci(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];fh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){la(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new xn(Hl(this.value))}}function rE(n){const t=[];return la(n.fields,((i,a)=>{const o=new We([i]);if(fh(a)){const u=rE(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new jn(t)}/**
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
 */class sn{constructor(t,i,a,o,u,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=o,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(t){return new sn(t,0,St.min(),St.min(),St.min(),xn.empty(),0)}static newFoundDocument(t,i,a,o){return new sn(t,1,i,St.min(),a,o,0)}static newNoDocument(t,i){return new sn(t,2,i,St.min(),St.min(),xn.empty(),0)}static newUnknownDocument(t,i){return new sn(t,3,i,St.min(),St.min(),xn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jh{constructor(t,i){this.position=t,this.inclusive=i}}function Av(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=fo(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Rv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ci(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class uu{constructor(t,i="asc"){this.field=t,this.dir=i}}function $I(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class aE{}class De extends aE{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new FI(t,i,a):i==="array-contains"?new HI(t,a):i==="in"?new GI(t,a):i==="not-in"?new YI(t,a):i==="array-contains-any"?new QI(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new KI(t,a):new qI(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(fo(i,this.value)):i!==null&&aa(this.value)===aa(i)&&this.matchesComparison(fo(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return bt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends aE{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ai(t,i)}matches(t){return sE(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sE(n){return n.op==="and"}function oE(n){return BI(n)&&sE(n)}function BI(n){for(const t of n.filters)if(t instanceof ai)return!1;return!0}function gm(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+po(n.value);if(oE(n))return n.filters.map((t=>gm(t))).join(",");{const t=n.filters.map((i=>gm(i))).join(",");return`${n.op}(${t})`}}function lE(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ci(a.value,o.value)})(n,t):n instanceof ai?(function(a,o){return o instanceof ai&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,p)=>u&&lE(d,o.filters[p])),!0):!1})(n,t):void bt(19439)}function uE(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${po(i.value)}`})(n):n instanceof ai?(function(i){return i.op.toString()+" {"+i.getFilters().map(uE).join(" ,")+"}"})(n):"Filter"}class FI extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class KI extends De{constructor(t,i){super(t,"in",i),this.keys=cE("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class qI extends De{constructor(t,i){super(t,"not-in",i),this.keys=cE("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function cE(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class HI extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return dg(i)&&lu(i.arrayValue,this.value)}}class GI extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&lu(this.value.arrayValue,i)}}class YI extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!lu(this.value.arrayValue,i)}}class QI extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!dg(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>lu(this.value.arrayValue,a)))}}/**
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
 */class XI{constructor(t,i=null,a=[],o=[],u=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function Iv(n,t=null,i=[],a=[],o=null,u=null,d=null){return new XI(n,t,i,a,o,u,d)}function fg(n){const t=It(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>gm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Yh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>po(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>po(a))).join(",")),t.Te=i}return t.Te}function pg(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!$I(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!lE(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rv(n.startAt,t.startAt)&&Rv(n.endAt,t.endAt)}function ym(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ro{constructor(t,i=null,a=[],o=[],u=null,d="F",p=null,m=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WI(n,t,i,a,o,u,d,p){return new Ro(n,t,i,a,o,u,d,p)}function mg(n){return new Ro(n)}function jv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hE(n){return n.collectionGroup!==null}function Gl(n){const t=It(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Pe(We.comparator);return d.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new uu(u,a))})),i.has(We.keyField().canonicalString())||t.Ie.push(new uu(We.keyField(),a))}return t.Ie}function Si(n){const t=It(n);return t.Ee||(t.Ee=ZI(t,Gl(n))),t.Ee}function ZI(n,t){if(n.limitType==="F")return Iv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new uu(o.field,u)}));const i=n.endAt?new jh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new jh(n.startAt.position,n.startAt.inclusive):null;return Iv(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function xm(n,t){const i=n.filters.concat([t]);return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function vm(n,t,i){return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function Xh(n,t){return pg(Si(n),Si(t))&&n.limitType===t.limitType}function dE(n){return`${fg(Si(n))}|lt:${n.limitType}`}function Zs(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>uE(o))).join(", ")}]`),Yh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>po(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>po(o))).join(",")),`Target(${a})`})(Si(n))}; limitType=${n.limitType})`}function Wh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Gl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,p,m){const g=Av(d,p,m);return d.inclusive?g<=0:g<0})(a.startAt,Gl(a),o)||a.endAt&&!(function(d,p,m){const g=Av(d,p,m);return d.inclusive?g>=0:g>0})(a.endAt,Gl(a),o))})(n,t)}function JI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fE(n){return(t,i)=>{let a=!1;for(const o of Gl(n)){const u=t3(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function t3(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,d,p){const m=d.data.field(u),g=p.data.field(u);return m!==null&&g!==null?fo(m,g):bt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return bt(19790,{direction:n.dir})}}/**
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
 */class is{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){la(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return X2(this.inner)}size(){return this.innerSize}}/**
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
 */const e3=new me(vt.comparator);function hr(){return e3}const pE=new me(vt.comparator);function Ll(...n){let t=pE;for(const i of n)t=t.insert(i.key,i);return t}function mE(n){let t=pE;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Qa(){return Yl()}function gE(){return Yl()}function Yl(){return new is((n=>n.toString()),((n,t)=>n.isEqual(t)))}const n3=new me(vt.comparator),i3=new Pe(vt.comparator);function Pt(...n){let t=i3;for(const i of n)t=t.add(i);return t}const r3=new Pe(Ut);function a3(){return r3}/**
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
 */function gg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ah(t)?"-0":t}}function yE(n){return{integerValue:""+n}}function xE(n,t){return MI(t)?yE(t):gg(n,t)}/**
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
 */class Zh{constructor(){this._=void 0}}function s3(n,t,i){return n instanceof Ch?(function(o,u){const d={fields:{[J2]:{stringValue:Z2},[eE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&hg(u)&&(u=Qh(u)),u&&(d.fields[tE]=u),{mapValue:d}})(i,t):n instanceof cu?_E(n,t):n instanceof hu?EE(n,t):(function(o,u){const d=vE(o,u),p=Cv(d)+Cv(o.Ae);return mm(d)&&mm(o.Ae)?yE(p):gg(o.serializer,p)})(n,t)}function o3(n,t,i){return n instanceof cu?_E(n,t):n instanceof hu?EE(n,t):i}function vE(n,t){return n instanceof du?(function(a){return mm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Ch extends Zh{}class cu extends Zh{constructor(t){super(),this.elements=t}}function _E(n,t){const i=wE(t);for(const a of n.elements)i.some((o=>Ci(o,a)))||i.push(a);return{arrayValue:{values:i}}}class hu extends Zh{constructor(t){super(),this.elements=t}}function EE(n,t){let i=wE(t);for(const a of n.elements)i=i.filter((o=>!Ci(o,a)));return{arrayValue:{values:i}}}class du extends Zh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Cv(n){return Se(n.integerValue||n.doubleValue)}function wE(n){return dg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class l3{constructor(t,i){this.field=t,this.transform=i}}function u3(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof cu&&o instanceof cu||a instanceof hu&&o instanceof hu?ho(a.elements,o.elements,Ci):a instanceof du&&o instanceof du?Ci(a.Ae,o.Ae):a instanceof Ch&&o instanceof Ch})(n.transform,t.transform)}class c3{constructor(t,i){this.version=t,this.transformResults=i}}class Ai{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ai}static exists(t){return new Ai(void 0,t)}static updateTime(t){return new Ai(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ph(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jh{}function bE(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new SE(n.key,Ai.none()):new gu(n.key,n.data,Ai.none());{const i=n.data,a=xn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new ua(n.key,a,new jn(o.toArray()),Ai.none())}}function h3(n,t,i){n instanceof gu?(function(o,u,d){const p=o.value.clone(),m=Nv(o.fieldTransforms,u,d.transformResults);p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,i):n instanceof ua?(function(o,u,d){if(!ph(o.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Nv(o.fieldTransforms,u,d.transformResults),m=u.data;m.setAll(TE(o)),m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Ql(n,t,i,a){return n instanceof gu?(function(u,d,p,m){if(!ph(u.precondition,d))return p;const g=u.value.clone(),v=Mv(u.fieldTransforms,m,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof ua?(function(u,d,p,m){if(!ph(u.precondition,d))return p;const g=Mv(u.fieldTransforms,m,d),v=d.data;return v.setAll(TE(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,i,a):(function(u,d,p){return ph(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(n,t,i)}function d3(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=vE(a.transform,o||null);u!=null&&(i===null&&(i=xn.empty()),i.set(a.field,u))}return i||null}function Dv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ho(a,o,((u,d)=>u3(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gu extends Jh{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ua extends Jh{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function TE(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function Nv(n,t,i){const a=new Map;Gt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,p=t.data.field(u.field);a.set(u.field,o3(d,p,i[o]))}return a}function Mv(n,t,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,s3(u,d,t))}return a}class SE extends Jh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f3 extends Jh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class p3{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&h3(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Ql(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=gE();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=i.has(o.key)?null:p;const m=bE(d,p);m!==null&&a.set(o.key,m),d.isValidDocument()||d.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&ho(this.mutations,t.mutations,((i,a)=>Dv(i,a)))&&ho(this.baseMutations,t.baseMutations,((i,a)=>Dv(i,a)))}}class yg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return n3})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new yg(t,i,a,o)}}/**
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
 */let m3=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class g3{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var je,$t;function y3(n){switch(n){case it.OK:return bt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return bt(15467,{code:n})}}function AE(n){if(n===void 0)return ur("GRPC error has no .code"),it.UNKNOWN;switch(n){case je.OK:return it.OK;case je.CANCELLED:return it.CANCELLED;case je.UNKNOWN:return it.UNKNOWN;case je.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case je.INTERNAL:return it.INTERNAL;case je.UNAVAILABLE:return it.UNAVAILABLE;case je.UNAUTHENTICATED:return it.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case je.NOT_FOUND:return it.NOT_FOUND;case je.ALREADY_EXISTS:return it.ALREADY_EXISTS;case je.PERMISSION_DENIED:return it.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case je.ABORTED:return it.ABORTED;case je.OUT_OF_RANGE:return it.OUT_OF_RANGE;case je.UNIMPLEMENTED:return it.UNIMPLEMENTED;case je.DATA_LOSS:return it.DATA_LOSS;default:return bt(39323,{code:n})}}($t=je||(je={}))[$t.OK=0]="OK",$t[$t.CANCELLED=1]="CANCELLED",$t[$t.UNKNOWN=2]="UNKNOWN",$t[$t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$t[$t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$t[$t.NOT_FOUND=5]="NOT_FOUND",$t[$t.ALREADY_EXISTS=6]="ALREADY_EXISTS",$t[$t.PERMISSION_DENIED=7]="PERMISSION_DENIED",$t[$t.UNAUTHENTICATED=16]="UNAUTHENTICATED",$t[$t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$t[$t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$t[$t.ABORTED=10]="ABORTED",$t[$t.OUT_OF_RANGE=11]="OUT_OF_RANGE",$t[$t.UNIMPLEMENTED=12]="UNIMPLEMENTED",$t[$t.INTERNAL=13]="INTERNAL",$t[$t.UNAVAILABLE=14]="UNAVAILABLE",$t[$t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function x3(){return new TextEncoder}/**
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
 */const v3=new ta([4294967295,4294967295],0);function Ov(n){const t=x3().encode(n),i=new z2;return i.update(t),new Uint8Array(i.digest())}function Vv(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new ta([i,a],0),new ta([o,u],0)]}class xg{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new $l(`Invalid padding: ${i}`);if(a<0)throw new $l(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new $l(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new $l(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=ta.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(ta.fromNumber(a)));return o.compare(v3)===1&&(o=new ta([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Ov(t),[a,o]=Vv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new xg(u,o,i);return a.forEach((p=>d.insert(p))),d}insert(t){if(this.ge===0)return;const i=Ov(t),[a,o]=Vv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class $l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class td{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,yu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new td(St.min(),o,new me(Ut),hr(),Pt())}}class yu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new yu(a,i,Pt(),Pt(),Pt())}}/**
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
 */class mh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class RE{constructor(t,i){this.targetId=t,this.Ce=i}}class IE{constructor(t,i,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class kv{constructor(){this.ve=0,this.Fe=Uv(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),i=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:bt(38017,{changeType:u})}})),new yu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Uv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class _3{constructor(t){this.Ge=t,this.ze=new Map,this.je=hr(),this.Je=Zc(),this.He=Zc(),this.Ye=new me(Ut)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:bt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(ym(u))if(a===0){const d=new vt(u.path);this.et(i,d,sn.newNoDocument(d,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const p=this.ut(t),m=p?this.ct(p,t,d):1;if(m!==0){this.it(i);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,p;try{d=ra(a).toUint8Array()}catch(m){if(m instanceof W2)return co("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new xg(d,o,u)}catch(m){return co(m instanceof $l?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&ym(p.target)){const m=new vt(p.target.path);this.It(m).has(d)||this.Et(d,m)||this.et(d,m,sn.newNoDocument(m,t))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new td(t,i,this.Ye,this.je,a);return this.je=hr(),this.Je=Zc(),this.He=Zc(),this.Ye=new me(Ut),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new kv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Pe(Ut),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Pe(Ut),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new kv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Zc(){return new me(vt.comparator)}function Uv(){return new me(vt.comparator)}const E3={asc:"ASCENDING",desc:"DESCENDING"},w3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b3={and:"AND",or:"OR"};class T3{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function _m(n,t){return n.useProto3Json||Yh(t)?t:{value:t}}function Dh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function S3(n,t){return Dh(n,t.toTimestamp())}function Ri(n){return Gt(!!n,49232),St.fromTimestamp((function(i){const a=ia(i);return new le(a.seconds,a.nanos)})(n))}function vg(n,t){return Em(n,t).canonicalString()}function Em(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function CE(n){const t=ae.fromString(n);return Gt(VE(t),10190,{key:t.toString()}),t}function wm(n,t){return vg(n.databaseId,t.path)}function Np(n,t){const i=CE(t);if(i.get(1)!==n.databaseId.projectId)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new ft(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(NE(i))}function DE(n,t){return vg(n.databaseId,t)}function A3(n){const t=CE(n);return t.length===4?ae.emptyPath():NE(t)}function bm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function NE(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pv(n,t,i){return{name:wm(n,t),fields:i.value.mapValue.fields}}function R3(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:bt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Gt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Gt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:AE(g.code);return new ft(v,g.message||"")})(d);i=new IE(a,o,u,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Np(n,a.document.name),u=Ri(a.document.updateTime),d=a.document.createTime?Ri(a.document.createTime):St.min(),p=new xn({mapValue:{fields:a.document.fields}}),m=sn.newFoundDocument(o,u,d,p),g=a.targetIds||[],v=a.removedTargetIds||[];i=new mh(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Np(n,a.document),u=a.readTime?Ri(a.readTime):St.min(),d=sn.newNoDocument(o,u),p=a.removedTargetIds||[];i=new mh([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Np(n,a.document),u=a.removedTargetIds||[];i=new mh([],u,o,null)}else{if(!("filter"in t))return bt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new g3(o,u),p=a.targetId;i=new RE(p,d)}}return i}function I3(n,t){let i;if(t instanceof gu)i={update:Pv(n,t.key,t.value)};else if(t instanceof SE)i={delete:wm(n,t.key)};else if(t instanceof ua)i={update:Pv(n,t.key,t.data),updateMask:U3(t.fieldMask)};else{if(!(t instanceof f3))return bt(16599,{Vt:t.type});i={verify:wm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const p=d.transform;if(p instanceof Ch)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof cu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof hu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof du)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw bt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:S3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:bt(27497)})(n,t.precondition)),i}function j3(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Ri(o.updateTime):Ri(u);return d.isEqual(St.min())&&(d=Ri(u)),new c3(d,o.transformResults||[])})(i,t)))):[]}function C3(n,t){return{documents:[DE(n,t.path)]}}function D3(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=DE(n,o);const u=(function(g){if(g.length!==0)return OE(ai.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Js(T.field),direction:O3(T.dir)}})(v)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const p=_m(n,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function N3(n){let t=A3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(w){const T=ME(w);return T instanceof ai&&oE(T)?T.getFilters():[T]})(i.where));let d=[];i.orderBy&&(d=(function(w){return w.map((T=>(function(M){return new uu(to(M.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(i.orderBy));let p=null;i.limit&&(p=(function(w){let T;return T=typeof w=="object"?w.value:w,Yh(T)?null:T})(i.limit));let m=null;i.startAt&&(m=(function(w){const T=!!w.before,R=w.values||[];return new jh(R,T)})(i.startAt));let g=null;return i.endAt&&(g=(function(w){const T=!w.before,R=w.values||[];return new jh(R,T)})(i.endAt)),WI(t,o,d,u,p,"F",m,g)}function M3(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function ME(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=to(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=to(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=to(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=to(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return bt(61313);default:return bt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(to(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return bt(58110);default:return bt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ai.create(i.compositeFilter.filters.map((a=>ME(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return bt(1026)}})(i.compositeFilter.op))})(n):bt(30097,{filter:n})}function O3(n){return E3[n]}function V3(n){return w3[n]}function k3(n){return b3[n]}function Js(n){return{fieldPath:n.canonicalString()}}function to(n){return We.fromServerFormat(n.fieldPath)}function OE(n){return n instanceof De?(function(i){if(i.op==="=="){if(Sv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NAN"}};if(Tv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Sv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NOT_NAN"}};if(Tv(i.value))return{unaryFilter:{field:Js(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(i.field),op:V3(i.op),value:i.value}}})(n):n instanceof ai?(function(i){const a=i.getFilters().map((o=>OE(o)));return a.length===1?a[0]:{compositeFilter:{op:k3(i.op),filters:a}}})(n):bt(54877,{filter:n})}function U3(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function VE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wr{constructor(t,i,a,o,u=St.min(),d=St.min(),p=Ze.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class P3{constructor(t){this.yt=t}}function z3(n){const t=N3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vm(t,t.limit,"L"):t}/**
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
 */class L3{constructor(){this.Cn=new $3}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(na.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(na.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class $3{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new Pe(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(ae.comparator)).toArray()}}/**
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
 */const zv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kE=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(kE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
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
 */class mo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new mo(0)}static cr(){return new mo(-1)}}/**
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
 */const Lv="LruGarbageCollector",B3=1048576;function $v([n,t],[i,a]){const o=Ut(n,i);return o===0?Ut(t,a):o}class F3{constructor(t){this.Ir=t,this.buffer=new Pe($v),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();$v(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class K3{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(Lv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Ao(i)?pt(Lv,"Ignoring IndexedDB error during garbage collection: ",i):await So(i)}await this.Vr(3e5)}))}}class q3{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Gh.ce);const a=new F3(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(zv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,d,p,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,d=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,p=Date.now(),this.removeTargets(t,a,i)))).next((w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Ws()<=Bt.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function H3(n,t){return new q3(n,t)}/**
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
 */class G3{constructor(){this.changes=new is((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Y3{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class Q3{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Ql(a.mutation,o,jn.empty(),le.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Pt()){const o=Qa();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let d=Ll();return u.forEach(((p,m)=>{d=d.insert(p,m.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Qa();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Pt())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(t,i,a,o){let u=hr();const d=Yl(),p=(function(){return Yl()})();return i.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof ua)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Ql(v.mutation,g,v.mutation.getFieldMask(),le.now())):d.set(g.key,jn.empty())})),this.recalculateAndSaveOverlays(t,u).next((m=>(m.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>p.set(g,new Y3(v,d.get(g)??null)))),p)))}recalculateAndSaveOverlays(t,i){const a=Yl();let o=new me(((d,p)=>d-p)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const p of d)p.keys().forEach((m=>{const g=i.get(m);if(g===null)return;let v=a.get(m)||jn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const w=(o.get(p.batchId)||Pt()).add(m);o=o.insert(p.batchId,w)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,w=gE();v.forEach((T=>{if(!u.has(T)){const R=bE(i.get(T),a.get(T));R!==null&&w.set(T,R),u=u.add(T)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):hE(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Qa());let p=au,m=u;return d.next((g=>st.forEach(g,((v,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((T=>{m=m.insert(v,T)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,m,g,Pt()))).next((v=>({batchId:p,changes:mE(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=Ll();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let d=Ll();return this.indexManager.getCollectionParents(t,u).next((p=>st.forEach(p,(m=>{const g=(function(w,T){return new Ro(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(i,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,T)=>{d=d.insert(w,T)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((d=>{u.forEach(((m,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,sn.newInvalidDocument(v)))}));let p=Ll();return d.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Ql(v.mutation,g,jn.empty(),le.now()),Wh(i,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class X3{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Ri(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:z3(o.bundledQuery),readTime:Ri(o.readTime)}})(i)),st.resolve()}}/**
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
 */class W3{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Qa();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Qa(),u=i.length+1,d=new vt(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Qa(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Qa(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return st.resolve(p)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new m3(i,a));let u=this.qr.get(i);u===void 0&&(u=Pt(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class Z3{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
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
 */class _g{constructor(){this.Qr=new Pe(Ke.$r),this.Ur=new Pe(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Ke(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Ke(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const i=new Ke(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ke{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Ut(t.Yr,i.Yr)}static Kr(t,i){return Ut(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
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
 */class J3{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ke.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new p3(u,i,a,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new Ke(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?cg:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const p=this.Xr(d.Yr);u.push(p)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Pe(Ut);return i.forEach((o=>{const u=new Ke(o,0),d=new Ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(p=>{a=a.add(p.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new Ke(new vt(u),0);let p=new Pe(Ut);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),d),st.resolve(this.ti(p))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Gt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new Ke(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Ke(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class tj{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(i))}getEntries(t,i){let a=hr();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=hr();const d=i.path,p=new vt(d.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||jI(II(v),a)<=0||(o.has(v.key)||Wh(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){bt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new ej(this)}getSize(t){return st.resolve(this.size)}}class ej extends G3{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
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
 */class nj{constructor(t){this.persistence=t,this.si=new is((i=>fg(i)),pg),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new _g,this.targetCount=0,this.ai=mo.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new mo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
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
 */class UE{constructor(t,i){this.ui={},this.overlays={},this.ci=new Gh(0),this.li=!1,this.li=!0,this.hi=new Z3,this.referenceDelegate=t(this),this.Pi=new nj(this),this.indexManager=new L3,this.remoteDocumentCache=(function(o){return new tj(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new P3(i),this.Ii=new X3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new W3,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new J3(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new ij(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class ij extends DI{constructor(t){super(),this.currentSequenceNumber=t}}class Eg{constructor(t){this.persistence=t,this.Ri=new _g,this.Vi=null}static mi(t){return new Eg(t)}get fi(){if(this.Vi)return this.Vi;throw bt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Nh{constructor(t,i){this.persistence=t,this.pi=new is((a=>OI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=H3(this,i)}static mi(t,i){return new Nh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,i).next((p=>{p||(a++,u.removeEntry(d,St.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=dh(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class wg{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Pt(),o=Pt();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new wg(t,i.fromCache,a,o)}}/**
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
 */class rj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class aj{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return XR()?8:NI(YR())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new rj;return this.Ss(t,i,d).next((p=>{if(u.result=p,this.Vs)return this.bs(t,i,d,p.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Ws()<=Bt.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Zs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Ws()<=Bt.DEBUG&&pt("QueryEngine","Query:",Zs(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Ws()<=Bt.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Zs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Si(i))):st.resolve())}ys(t,i){if(jv(i))return st.resolve(null);let a=Si(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=vm(i,null,"F"),a=Si(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Pt(...u);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((m=>{const g=this.Ds(i,p);return this.Cs(i,g,d,m.readTime)?this.ys(t,vm(i,null,"F")):this.vs(t,g,i,m)}))))})))))}ws(t,i,a,o){return jv(i)||o.isEqual(St.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?st.resolve(null):(Ws()<=Bt.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Zs(i)),this.vs(t,d,i,RI(o,au)).next((p=>p)))}))}Ds(t,i){let a=new Pe(fE(t));return i.forEach(((o,u)=>{Wh(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Ws()<=Bt.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Zs(i)),this.ps.getDocumentsMatchingQuery(t,i,na.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const bg="LocalStore",sj=3e8;class oj{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Ut),this.xs=new is((u=>fg(u)),pg),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Q3(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function lj(n,t,i,a){return new oj(n,t,i,a)}async function PE(n,t){const i=It(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],p=[];let m=Pt();for(const g of o){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return i.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:p})))}))}))}function uj(n,t){const i=It(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const w=g.batch,T=w.keys();let R=st.resolve();return T.forEach((M=>{R=R.next((()=>v.getEntry(m,M))).next((z=>{const P=g.docVersions.get(M);Gt(P!==null,48541),z.version.compareTo(P)<0&&(w.applyToRemoteDocument(z,g),z.isValidDocument()&&(z.setReadTime(g.commitVersion),v.addEntry(z)))}))})),R.next((()=>p.mutationQueue.removeMutationBatch(m,w)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Pt();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function zE(n){const t=It(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function cj(n,t){const i=It(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const p=[];t.targetChanges.forEach(((v,w)=>{const T=o.get(w);if(!T)return;p.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=T.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(z,P,H){return z.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=sj?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(T,R,v)&&p.push(i.Pi.updateTargetData(u,R))}));let m=hr(),g=Pt();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(hj(u,d,t.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(St.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((w=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return st.waitFor(p).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(i.Ms=o,u)))}function hj(n,t,i){let a=Pt(),o=Pt();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=hr();return i.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(St.min())?(t.removeEntry(p,m.readTime),d=d.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),d=d.insert(p,m)):pt(bg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:d,qs:o}}))}function dj(n,t){const i=It(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=cg),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function fj(n,t){const i=It(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Wr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function Tm(n,t,i){const a=It(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!Ao(d))throw d;pt(bg,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function Bv(n,t,i){const a=It(n);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(m,g,v){const w=It(m),T=w.xs.get(v);return T!==void 0?st.resolve(w.Ms.get(T)):w.Pi.getTargetData(g,v)})(a,d,Si(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?o:St.min(),i?u:Pt()))).next((p=>(pj(a,JI(t),p),{documents:p,Qs:u})))))}function pj(n,t,i){let a=n.Os.get(t)||St.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Fv{constructor(){this.activeTargetIds=a3()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mj{constructor(){this.Mo=new Fv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Fv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gj{Oo(t){}shutdown(){}}/**
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
 */const Kv="ConnectivityMonitor";class qv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Kv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Kv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jc=null;function Sm(){return Jc===null?Jc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Jc++,"0x"+Jc.toString(16)}/**
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
 */const Mp="RestConnection",yj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xj{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Rh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const d=Sm(),p=this.zo(t,i.toUriEncodedString());pt(Mp,`Sending RPC '${t}' ${d}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=ag(g);return this.Jo(t,p,m,a,v).then((w=>(pt(Mp,`Received RPC '${t}' ${d}: `,w),w)),(w=>{throw co(Mp,`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",a),w}))}Ho(t,i,a,o,u,d){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=yj[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
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
 */class vj{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const rn="WebChannelConnection";class _j extends xj{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const d=Sm();return new Promise(((p,m)=>{const g=new L2;g.setWithCredentials(!0),g.listenOnce($2.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case hh.NO_ERROR:const w=g.getResponseJson();pt(rn,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(w)),p(w);break;case hh.TIMEOUT:pt(rn,`RPC '${t}' ${d} timed out`),m(new ft(it.DEADLINE_EXCEEDED,"Request time out"));break;case hh.HTTP_ERROR:const T=g.getStatus();if(pt(rn,`RPC '${t}' ${d} failed with status:`,T,"response text:",g.getResponseText()),T>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R?.error;if(M&&M.status&&M.message){const z=(function(H){const F=H.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(F)>=0?F:it.UNKNOWN})(M.status);m(new ft(z,M.message))}else m(new ft(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ft(it.UNAVAILABLE,"Connection failed."));break;default:bt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(rn,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(rn,`RPC '${t}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=Sm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=K2(),p=F2(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,i,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pt(rn,`Creating RPC '${t}' stream ${o}: ${v}`,m);const w=d.createWebChannel(v,m);this.I_(w);let T=!1,R=!1;const M=new vj({Yo:P=>{R?pt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(T||(pt(rn,`Opening RPC '${t}' stream ${o} transport.`),w.open(),T=!0),pt(rn,`RPC '${t}' stream ${o} sending:`,P),w.send(P))},Zo:()=>w.close()}),z=(P,H,F)=>{P.listen(H,(Z=>{try{F(Z)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return z(w,zl.EventType.OPEN,(()=>{R||(pt(rn,`RPC '${t}' stream ${o} transport opened.`),M.o_())})),z(w,zl.EventType.CLOSE,(()=>{R||(R=!0,pt(rn,`RPC '${t}' stream ${o} transport closed`),M.a_(),this.E_(w))})),z(w,zl.EventType.ERROR,(P=>{R||(R=!0,co(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),M.a_(new ft(it.UNAVAILABLE,"The operation could not be completed")))})),z(w,zl.EventType.MESSAGE,(P=>{if(!R){const H=P.data[0];Gt(!!H,16349);const F=H,Z=F?.error||F[0]?.error;if(Z){pt(rn,`RPC '${t}' stream ${o} received error:`,Z);const ot=Z.status;let W=(function(j){const C=je[j];if(C!==void 0)return AE(C)})(ot),ut=Z.message;W===void 0&&(W=it.INTERNAL,ut="Unknown error status: "+ot+" with message "+Z.message),R=!0,M.a_(new ft(W,ut)),w.close()}else pt(rn,`RPC '${t}' stream ${o} received:`,H),M.u_(H)}})),z(p,B2.STAT_EVENT,(P=>{P.stat===dm.PROXY?pt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===dm.NOPROXY&&pt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Op(){return typeof document<"u"?document:null}/**
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
 */function ed(n){return new T3(n,!0)}/**
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
 */class LE{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Hv="PersistentStream";class $E{constructor(t,i,a,o,u,d,p,m){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LE(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(ur(i.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new ft(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Hv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Hv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ej extends $E{constructor(t,i,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=R3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return St.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?St.min():d.readTime?Ri(d.readTime):St.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=bm(this.serializer),i.addTarget=(function(u,d){let p;const m=d.target;if(p=ym(m)?{documents:C3(u,m)}:{query:D3(u,m).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=jE(u,d.resumeToken);const g=_m(u,d.expectedCount);g!==null&&(p.expectedCount=g)}else if(d.snapshotVersion.compareTo(St.min())>0){p.readTime=Dh(u,d.snapshotVersion.toTimestamp());const g=_m(u,d.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,t);const a=M3(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=bm(this.serializer),i.removeTarget=t,this.q_(i)}}class wj extends $E{constructor(t,i,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=j3(t.writeResults,t.commitTime),a=Ri(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=bm(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>I3(this.serializer,a)))};this.q_(i)}}/**
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
 */class bj{}class Tj extends bj{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,Em(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ft(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,Em(i,a),o,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ft(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sj{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(i),this.aa=!1):pt("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ts="RemoteStore";class Aj{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{rs(this)&&(pt(ts,"Restarting streams for network reachability change."),await(async function(m){const g=It(m);g.Ea.add(4),await xu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await nd(g)})(this))}))})),this.Ra=new Sj(a,o)}}async function nd(n){if(rs(n))for(const t of n.da)await t(!0)}async function xu(n){for(const t of n.da)await t(!1)}function BE(n,t){const i=It(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),Rg(i)?Ag(i):Io(i).O_()&&Sg(i,t))}function Tg(n,t){const i=It(n),a=Io(i);i.Ia.delete(t),a.O_()&&FE(i,t),i.Ia.size===0&&(a.O_()?a.L_():rs(i)&&i.Ra.set("Unknown"))}function Sg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Io(n).Y_(t)}function FE(n,t){n.Va.Ue(t),Io(n).Z_(t)}function Ag(n){n.Va=new _3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Io(n).start(),n.Ra.ua()}function Rg(n){return rs(n)&&!Io(n).x_()&&n.Ia.size>0}function rs(n){return It(n).Ea.size===0}function KE(n){n.Va=void 0}async function Rj(n){n.Ra.set("Online")}async function Ij(n){n.Ia.forEach(((t,i)=>{Sg(n,t)}))}async function jj(n,t){KE(n),Rg(n)?(n.Ra.ha(t),Ag(n)):n.Ra.set("Unknown")}async function Cj(n,t,i){if(n.Ra.set("Online"),t instanceof IE&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(n,t)}catch(a){pt(ts,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Mh(n,a)}else if(t instanceof mh?n.Va.Ze(t):t instanceof RE?n.Va.st(t):n.Va.tt(t),!i.isEqual(St.min()))try{const a=await zE(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const p=u.Va.Tt(d);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,d))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),FE(u,m);const w=new Wr(v.target,m,g,v.sequenceNumber);Sg(u,w)})),u.remoteSyncer.applyRemoteEvent(p)})(n,i)}catch(a){pt(ts,"Failed to raise snapshot:",a),await Mh(n,a)}}async function Mh(n,t,i){if(!Ao(t))throw t;n.Ea.add(1),await xu(n),n.Ra.set("Offline"),i||(i=()=>zE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(ts,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await nd(n)}))}function qE(n,t){return t().catch((i=>Mh(n,i,t)))}async function id(n){const t=It(n),i=sa(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:cg;for(;Dj(t);)try{const o=await dj(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,Nj(t,o)}catch(o){await Mh(t,o)}HE(t)&&GE(t)}function Dj(n){return rs(n)&&n.Ta.length<10}function Nj(n,t){n.Ta.push(t);const i=sa(n);i.O_()&&i.X_&&i.ea(t.mutations)}function HE(n){return rs(n)&&!sa(n).x_()&&n.Ta.length>0}function GE(n){sa(n).start()}async function Mj(n){sa(n).ra()}async function Oj(n){const t=sa(n);for(const i of n.Ta)t.ea(i.mutations)}async function Vj(n,t,i){const a=n.Ta.shift(),o=yg.from(a,t,i);await qE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await id(n)}async function kj(n,t){t&&sa(n).X_&&await(async function(a,o){if((function(d){return y3(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();sa(a).B_(),await qE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await id(a)}})(n,t),HE(n)&&GE(n)}async function Gv(n,t){const i=It(n);i.asyncQueue.verifyOperationInProgress(),pt(ts,"RemoteStore received new credentials");const a=rs(i);i.Ea.add(3),await xu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await nd(i)}async function Uj(n,t){const i=It(n);t?(i.Ea.delete(2),await nd(i)):t||(i.Ea.add(2),await xu(i),i.Ra.set("Unknown"))}function Io(n){return n.ma||(n.ma=(function(i,a,o){const u=It(i);return u.sa(),new Ej(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:Rj.bind(null,n),t_:Ij.bind(null,n),r_:jj.bind(null,n),H_:Cj.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Rg(n)?Ag(n):n.Ra.set("Unknown")):(await n.ma.stop(),KE(n))}))),n.ma}function sa(n){return n.fa||(n.fa=(function(i,a,o){const u=It(i);return u.sa(),new wj(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Mj.bind(null,n),r_:kj.bind(null,n),ta:Oj.bind(null,n),na:Vj.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await id(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(ts,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ig{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const d=Date.now()+a,p=new Ig(t,i,d,o,u);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jg(n,t){if(ur("AsyncQueue",`${t}: ${n}`),Ao(n))return new ft(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class io{static emptySet(t){return new io(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=Ll(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof io)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new io;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
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
 */class Yv{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):bt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class go{constructor(t,i,a,o,u,d,p,m,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new go(t,i,io.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
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
 */class Pj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class zj{constructor(){this.queries=Qv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=It(i),u=o.queries;o.queries=Qv(),u.forEach(((d,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new ft(it.ABORTED,"Firestore shutting down"))}}function Qv(){return new is((n=>dE(n)),Xh)}async function YE(n,t){const i=It(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new Pj,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const p=jg(d,`Initialization of query '${Zs(t.query)}' failed`);return void t.onError(p)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&Cg(i)}async function QE(n,t){const i=It(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function Lj(n,t){const i=It(n);let a=!1;for(const o of t){const u=o.query,d=i.queries.get(u);if(d){for(const p of d.Sa)p.Fa(o)&&(a=!0);d.wa=o}}a&&Cg(i)}function $j(n,t,i){const a=It(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function Cg(n){n.Ca.forEach((t=>{t.next()}))}var Am,Xv;(Xv=Am||(Am={})).Ma="default",Xv.Cache="cache";class XE{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new go(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Am.Cache}}/**
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
 */class WE{constructor(t){this.key=t}}class ZE{constructor(t){this.key=t}}class Bj{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=fE(t),this.tu=new io(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new Yv,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const T=o.get(v),R=Wh(this.query,w)?w:null,M=!!T&&this.mutatedKeys.has(T.key),z=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;T&&R?T.data.isEqual(R.data)?M!==z&&(a.track({type:3,doc:R}),P=!0):this.su(T,R)||(a.track({type:2,doc:R}),P=!0,(m&&this.eu(R,m)>0||g&&this.eu(R,g)<0)&&(p=!0)):!T&&R?(a.track({type:0,doc:R}),P=!0):T&&!R&&(a.track({type:1,doc:T}),P=!0,(m||g)&&(p=!0)),P&&(R?(d=d.add(R),u=z?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:p,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,w)=>(function(R,M){const z=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bt(20277,{Rt:P})}};return z(R)-z(M)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const p=i&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,d.length!==0||g?{snapshot:new go(this.query,t.tu,u,d,t.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new ZE(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new WE(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Pt();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Dg="SyncEngine";class Fj{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class Kj{constructor(t){this.key=t,this.hu=!1}}class qj{constructor(t,i,a,o,u,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new is((p=>dE(p)),Xh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new _g,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Hj(n,t,i=!0){const a=rw(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await JE(a,t,i,!0),o}async function Gj(n,t){const i=rw(n);await JE(i,t,!0,!1)}async function JE(n,t,i,a){const o=await fj(n.localStore,Si(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let p;return a&&(p=await Yj(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&BE(n.remoteStore,o),p}async function Yj(n,t,i,a,o){n.pu=(w,T,R)=>(async function(z,P,H,F){let Z=P.view.ru(H);Z.Cs&&(Z=await Bv(z.localStore,P.query,!1).then((({documents:I})=>P.view.ru(I,Z))));const ot=F&&F.targetChanges.get(P.targetId),W=F&&F.targetMismatches.get(P.targetId)!=null,ut=P.view.applyChanges(Z,z.isPrimaryClient,ot,W);return Zv(z,P.targetId,ut.au),ut.snapshot})(n,w,T,R);const u=await Bv(n.localStore,t,!0),d=new Bj(t,u.Qs),p=d.ru(u.documents),m=yu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(p,n.isPrimaryClient,m);Zv(n,i,g.au);const v=new Fj(t,i,d);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function Qj(n,t,i){const a=It(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!Xh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Tm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&Tg(a.remoteStore,o.targetId),Rm(a,o.targetId)})).catch(So)):(Rm(a,o.targetId),await Tm(a.localStore,o.targetId,!0))}async function Xj(n,t){const i=It(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),Tg(i.remoteStore,a.targetId))}async function Wj(n,t,i){const a=rC(n);try{const o=await(function(d,p){const m=It(d),g=le.now(),v=p.reduce(((R,M)=>R.add(M.key)),Pt());let w,T;return m.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let M=hr(),z=Pt();return m.Ns.getEntries(R,v).next((P=>{M=P,M.forEach(((H,F)=>{F.isValidDocument()||(z=z.add(H))}))})).next((()=>m.localDocuments.getOverlayedDocuments(R,M))).next((P=>{w=P;const H=[];for(const F of p){const Z=d3(F,w.get(F.key).overlayedDocument);Z!=null&&H.push(new ua(F.key,Z,rE(Z.value.mapValue),Ai.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,H,p)})).next((P=>{T=P;const H=P.applyToLocalDocumentSet(w,z);return m.documentOverlayCache.saveOverlays(R,P.batchId,H)}))})).then((()=>({batchId:T.batchId,changes:mE(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,p,m){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(p,m),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await vu(a,o.changes),await id(a.remoteStore)}catch(o){const u=jg(o,"Failed to persist write");i.reject(u)}}async function tw(n,t){const i=It(n);try{const a=await cj(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Gt(d.hu,14607):o.removedDocuments.size>0&&(Gt(d.hu,42227),d.hu=!1))})),await vu(i,a,t)}catch(a){await So(a)}}function Wv(n,t,i){const a=It(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const p=d.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const m=It(d);m.onlineState=p;let g=!1;m.queries.forEach(((v,w)=>{for(const T of w.Sa)T.va(p)&&(g=!0)})),g&&Cg(m)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Zj(n,t,i){const a=It(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,sn.newNoDocument(u,St.min()));const p=Pt().add(u),m=new td(St.min(),new Map,new me(Ut),d,p);await tw(a,m),a.du=a.du.remove(u),a.Au.delete(t),Ng(a)}else await Tm(a.localStore,t,!1).then((()=>Rm(a,t,i))).catch(So)}async function Jj(n,t){const i=It(n),a=t.batch.batchId;try{const o=await uj(i.localStore,t);nw(i,a,null),ew(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await vu(i,o)}catch(o){await So(o)}}async function tC(n,t,i){const a=It(n);try{const o=await(function(d,p){const m=It(d);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((w=>(Gt(w!==null,37113),v=w.keys(),m.mutationQueue.removeMutationBatch(g,w)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);nw(a,t,i),ew(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await vu(a,o)}catch(o){await So(o)}}function ew(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function nw(n,t,i){const a=It(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function Rm(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||iw(n,a)}))}function iw(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(Tg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Ng(n))}function Zv(n,t,i){for(const a of i)a instanceof WE?(n.Ru.addReference(a.key,t),eC(n,a)):a instanceof ZE?(pt(Dg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||iw(n,a.key)):bt(19791,{wu:a})}function eC(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(Dg,"New document in limbo: "+i),n.Eu.add(a),Ng(n))}function Ng(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new Kj(i)),n.du=n.du.insert(i,a),BE(n.remoteStore,new Wr(Si(mg(i.path)),a,"TargetPurposeLimboResolution",Gh.ce))}}async function vu(n,t,i){const a=It(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{d.push(a.pu(m,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=wg.As(m.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(m,g){const v=It(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(T=>st.forEach(T.Es,(R=>v.persistence.referenceDelegate.addReference(w,T.targetId,R))).next((()=>st.forEach(T.ds,(R=>v.persistence.referenceDelegate.removeReference(w,T.targetId,R)))))))))}catch(w){if(!Ao(w))throw w;pt(bg,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const R=v.Ms.get(T),M=R.snapshotVersion,z=R.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(T,z)}}})(a.localStore,u))}async function nC(n,t){const i=It(n);if(!i.currentUser.isEqual(t)){pt(Dg,"User change. New user:",t.toKey());const a=await PE(i.localStore,t);i.currentUser=t,(function(u,d){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new ft(it.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await vu(i,a.Ls)}}function iC(n,t){const i=It(n),a=i.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=i.Iu.get(t);if(!u)return o;for(const d of u){const p=i.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function rw(n){const t=It(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zj.bind(null,t),t.Pu.H_=Lj.bind(null,t.eventManager),t.Pu.yu=$j.bind(null,t.eventManager),t}function rC(n){const t=It(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tC.bind(null,t),t}class Oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ed(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return lj(this.persistence,new aj,t.initialUser,this.serializer)}Cu(t){return new UE(Eg.mi,this.serializer)}Du(t){return new mj}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oh.provider={build:()=>new Oh};class aC extends Oh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Gt(this.persistence.referenceDelegate instanceof Nh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new K3(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new UE((a=>Nh.mi(a,i)),this.serializer)}}class Im{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Wv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=nC.bind(null,this.syncEngine),await Uj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new zj})()}createDatastore(t){const i=ed(t.databaseInfo.databaseId),a=(function(u){return new _j(u)})(t.databaseInfo);return(function(u,d,p,m){return new Tj(u,d,p,m)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,d,p){return new Aj(a,o,u,d,p)})(this.localStore,this.datastore,t.asyncQueue,(i=>Wv(this.syncEngine,i,0)),(function(){return qv.v()?new qv:new gj})())}createSyncEngine(t,i){return(function(o,u,d,p,m,g,v){const w=new qj(o,u,d,p,m,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=It(i);pt(ts,"RemoteStore shutting down."),a.Ea.add(5),await xu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Im.provider={build:()=>new Im};/**
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
 */class aw{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ur("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
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
 */const oa="FirestoreClient";class sC{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(oa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(oa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=jg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Vp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(oa,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await PE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Jv(n,t){n.asyncQueue.verifyOperationInProgress();const i=await oC(n);pt(oa,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Gv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Gv(t.remoteStore,o))),n._onlineComponents=t}async function oC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(oa,"Using user provided OfflineComponentProvider");try{await Vp(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;co("Error using user provided cache. Falling back to memory cache: "+i),await Vp(n,new Oh)}}else pt(oa,"Using default OfflineComponentProvider"),await Vp(n,new aC(void 0));return n._offlineComponents}async function sw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(oa,"Using user provided OnlineComponentProvider"),await Jv(n,n._uninitializedComponentsProvider._online)):(pt(oa,"Using default OnlineComponentProvider"),await Jv(n,new Im))),n._onlineComponents}function lC(n){return sw(n).then((t=>t.syncEngine))}async function ow(n){const t=await sw(n),i=t.eventManager;return i.onListen=Hj.bind(null,t.syncEngine),i.onUnlisten=Qj.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=Gj.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=Xj.bind(null,t.syncEngine),i}function uC(n,t,i={}){const a=new rr;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new aw({next:T=>{v.Nu(),d.enqueueAndForget((()=>QE(u,w)));const R=T.docs.has(p);!R&&T.fromCache?g.reject(new ft(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&m&&m.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new XE(mg(p.path),v,{includeMetadataChanges:!0,qa:!0});return YE(u,w)})(await ow(n),n.asyncQueue,t,i,a))),a.promise}function cC(n,t,i={}){const a=new rr;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new aw({next:T=>{v.Nu(),d.enqueueAndForget((()=>QE(u,w))),T.fromCache&&m.source==="server"?g.reject(new ft(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new XE(p,v,{includeMetadataChanges:!0,qa:!0});return YE(u,w)})(await ow(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function lw(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const t_=new Map;/**
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
 */const uw="firestore.googleapis.com",e_=!0;class n_{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ft(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uw,this.ssl=e_}else this.host=t.host,this.ssl=t.ssl??e_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=kE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<B3)throw new ft(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}AI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lw(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ft(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rd{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ft(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new gI;switch(a.type){case"firstParty":return new _I(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=t_.get(i);a&&(pt("ComponentProvider","Removing Datastore"),t_.delete(i),a.terminate())})(this),Promise.resolve()}}function hC(n,t,i,a={}){n=cr(n,rd);const o=ag(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${i}`;o&&(FR(`https://${p}`),GR("Firestore",!0)),u.host!==uw&&u.host!==p&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!Th(m,d)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=an.MOCK_USER;else{g=KR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new ft(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new an(w)}n._authCredentials=new yI(new H2(g,v))}}/**
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
 */class as{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new as(this.firestore,t,this._query)}}class Ae{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(mu(i,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(i.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class ea extends as{constructor(t,i,a){super(t,i,mg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new ea(this.firestore,t,this._path)}}function gh(n,t,...i){if(n=or(n),G2("collection","path",t),n instanceof rd){const a=ae.fromString(t,...i);return mv(a),new ea(n,null,a)}{if(!(n instanceof Ae||n instanceof ea))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return mv(a),new ea(n.firestore,null,a)}}function Xl(n,t,...i){if(n=or(n),arguments.length===1&&(t=ug.newId()),G2("doc","path",t),n instanceof rd){const a=ae.fromString(t,...i);return pv(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof ea))throw new ft(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return pv(a),new Ae(n.firestore,n instanceof ea?n.converter:null,new vt(a))}}/**
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
 */const i_="AsyncQueue";class r_{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LE(this,"async_queue_retry"),this._c=()=>{const a=Op();a&&pt(i_,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Op();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Op();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new rr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ao(t))throw t;pt(i_,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",a_(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=Ig.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&bt(47125,{Pc:a_(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function a_(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class _u extends rd{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new r_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new r_(t),this._firestoreClient=void 0,await t}}}function cw(n,t){const i=typeof n=="object"?n:iI(),a=typeof n=="string"?n:Rh,o=Z6(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=$R("firestore");u&&hC(o,...u)}return o}function Mg(n){if(n._terminated)throw new ft(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dC(n),n._firestoreClient}function dC(n){const t=n._freezeSettings(),i=(function(o,u,d,p){return new UI(o,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lw(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new sC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(Ze.fromBase64String(t))}catch(i){throw new ft(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Fn(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mu(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Ne("string",Fn._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class ad{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ft(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class sd{constructor(t){this._methodName=t}}/**
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
 */class Ii{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ft(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ft(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ii._jsonSchemaVersion}}static fromJSON(t){if(mu(t,Ii._jsonSchema))return new Ii(t.latitude,t.longitude)}}Ii._jsonSchemaVersion="firestore/geoPoint/1.0",Ii._jsonSchema={type:Ne("string",Ii._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class ji{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ji._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mu(t,ji._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new ji(t.vectorValues);throw new ft(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ji._jsonSchemaVersion="firestore/vectorValue/1.0",ji._jsonSchema={type:Ne("string",ji._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const fC=/^__.*__$/;class pC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new ua(t,this.data,this.fieldMask,i,this.fieldTransforms):new gu(t,this.data,i,this.fieldTransforms)}}class hw{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new ua(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function dw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bt(40011,{Ac:n})}}class Og{constructor(t,i,a,o,u,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Og({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Vh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(dw(this.Ac)&&fC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class mC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||ed(t)}Cc(t,i,a,o=!1){return new Og({Ac:t,methodName:i,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vg(n){const t=n._freezeSettings(),i=ed(n._databaseId);return new mC(n._databaseId,!!t.ignoreUndefinedProperties,i)}function gC(n,t,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);Ug("Data must be an object, but it was:",d,a);const p=fw(a,d);let m,g;if(u.merge)m=new jn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const T=jm(t,w,i);if(!d.contains(T))throw new ft(it.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);mw(v,T)||v.push(T)}m=new jn(v),g=d.fieldTransforms.filter((w=>m.covers(w.field)))}else m=null,g=d.fieldTransforms;return new pC(new xn(p),m,g)}class od extends sd{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof od}}class kg extends sd{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new du(t.serializer,xE(t.serializer,this.Fc));return new l3(t.path,i)}isEqual(t){return t instanceof kg&&this.Fc===t.Fc}}function yC(n,t,i,a){const o=n.Cc(1,t,i);Ug("Data must be an object, but it was:",o,a);const u=[],d=xn.empty();la(a,((m,g)=>{const v=Pg(t,m,i);g=or(g);const w=o.yc(v);if(g instanceof od)u.push(v);else{const T=Eu(g,w);T!=null&&(u.push(v),d.set(v,T))}}));const p=new jn(u);return new hw(d,p,o.fieldTransforms)}function xC(n,t,i,a,o,u){const d=n.Cc(1,t,i),p=[jm(t,a,i)],m=[o];if(u.length%2!=0)throw new ft(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<u.length;T+=2)p.push(jm(t,u[T])),m.push(u[T+1]);const g=[],v=xn.empty();for(let T=p.length-1;T>=0;--T)if(!mw(g,p[T])){const R=p[T];let M=m[T];M=or(M);const z=d.yc(R);if(M instanceof od)g.push(R);else{const P=Eu(M,z);P!=null&&(g.push(R),v.set(R,P))}}const w=new jn(g);return new hw(v,w,d.fieldTransforms)}function vC(n,t,i,a=!1){return Eu(i,n.Cc(a?4:3,t))}function Eu(n,t){if(pw(n=or(n)))return Ug("Unsupported field value:",t,n),fw(n,t);if(n instanceof sd)return(function(a,o){if(!dw(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const p of a){let m=Eu(p,o.wc(d));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=or(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return xE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Dh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Dh(o.serializer,u)}}if(a instanceof Ii)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:jE(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:vg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof ji)return(function(d,p){return{mapValue:{fields:{[nE]:{stringValue:iE},[Ih]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return gg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${Hh(a)}`)})(n,t)}function fw(n,t){const i={};return X2(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):la(n,((a,o)=>{const u=Eu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function pw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Ii||n instanceof Fn||n instanceof Ae||n instanceof sd||n instanceof ji)}function Ug(n,t,i){if(!pw(i)||!Y2(i)){const a=Hh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function jm(n,t,i){if((t=or(t))instanceof ad)return t._internalPath;if(typeof t=="string")return Pg(n,t);throw Vh("Field path arguments must be of type string or ",n,!1,void 0,i)}const _C=new RegExp("[~\\*/\\[\\]]");function Pg(n,t,i){if(t.search(_C)>=0)throw Vh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new ad(...t.split("."))._internalPath}catch{throw Vh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Vh(n,t,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||d)&&(m+=" (found",u&&(m+=` in field ${a}`),d&&(m+=` in document ${o}`),m+=")"),new ft(it.INVALID_ARGUMENT,p+n+m)}function mw(n,t){return n.some((i=>i.isEqual(t)))}/**
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
 */class gw{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new EC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(zg("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class EC extends gw{data(){return super.data()}}function zg(n,t){return typeof t=="string"?Pg(n,t):t instanceof ad?t._internalPath:t._delegate._internalPath}/**
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
 */function wC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ft(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lg{}class yw extends Lg{}function s_(n,t,...i){let a=[];t instanceof Lg&&a.push(t),a=a.concat(i),(function(u){const d=u.filter((m=>m instanceof Bg)).length,p=u.filter((m=>m instanceof $g)).length;if(d>1||d>0&&p>0)throw new ft(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class $g extends yw{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new $g(t,i,a)}_apply(t){const i=this._parse(t);return xw(t._query,i),new as(t.firestore,t.converter,xm(t._query,i))}_parse(t){const i=Vg(t.firestore);return(function(u,d,p,m,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ft(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){u_(w,v);const M=[];for(const z of w)M.push(l_(m,u,z));T={arrayValue:{values:M}}}else T=l_(m,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||u_(w,v),T=vC(p,d,w,v==="in"||v==="not-in");return De.create(g,v,T)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Bg extends Lg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Bg(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ai.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let d=o;const p=u.getFlattenedFilters();for(const m of p)xw(d,m),d=xm(d,m)})(t._query,i),new as(t.firestore,t.converter,xm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fg extends yw{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new Fg(t,i)}_apply(t){const i=(function(o,u,d){if(o.startAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ft(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(u,d)})(t._query,this._field,this._direction);return new as(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ro(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function o_(n,t="asc"){const i=t,a=zg("orderBy",n);return Fg._create(a,i)}function l_(n,t,i){if(typeof(i=or(i))=="string"){if(i==="")throw new ft(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hE(t)&&i.indexOf("/")!==-1)throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return bv(n,new vt(a))}if(i instanceof Ae)return bv(n,i._key);throw new ft(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(i)}.`)}function u_(n,t){if(!Array.isArray(n)||n.length===0)throw new ft(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xw(n,t){const i=(function(o,u){for(const d of o)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ft(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class bC{convertValue(t,i="none"){switch(aa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ra(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw bt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return la(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[Ih].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new ji(i)}convertGeoPoint(t){return new Ii(Se(t.latitude),Se(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Qh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(su(t));default:return null}}convertTimestamp(t){const i=ia(t);return new le(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Gt(VE(a),9688,{name:t});const o=new ou(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||ur(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
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
 */function TC(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Bl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Za extends gw{constructor(t,i,a,o,u,d){super(t,i,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(zg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Za._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Za._jsonSchemaVersion="firestore/documentSnapshot/1.0",Za._jsonSchema={type:Ne("string",Za._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class yh extends Za{data(t={}){return super.data(t)}}class ro{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new yh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ft(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const m=new yh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new yh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),v=d.indexOf(p.doc.key)),{type:SC(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ft(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ro._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function SC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bt(61501,{type:n})}}/**
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
 */function xh(n){n=cr(n,Ae);const t=cr(n.firestore,_u);return uC(Mg(t),n._key).then((i=>AC(t,n,i)))}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:Ne("string",ro._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class vw extends bC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fn(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,i)}}function Cm(n){n=cr(n,as);const t=cr(n.firestore,_u),i=Mg(t),a=new vw(t);return wC(n._query),cC(i,n._query).then((o=>new ro(t,a,n,o)))}function Kg(n,t,i){n=cr(n,Ae);const a=cr(n.firestore,_u),o=TC(n.converter,t,i);return _w(a,[gC(Vg(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Ai.none())])}function kh(n,t,i,...a){n=cr(n,Ae);const o=cr(n.firestore,_u),u=Vg(o);let d;return d=typeof(t=or(t))=="string"||t instanceof ad?xC(u,"updateDoc",n._key,t,i,a):yC(u,"updateDoc",n._key,t),_w(o,[d.toMutation(n._key,Ai.exists(!0))])}function _w(n,t){return(function(a,o){const u=new rr;return a.asyncQueue.enqueueAndForget((async()=>Wj(await lC(a),o,u))),u.promise})(Mg(n),t)}function AC(n,t,i){const a=i.docs.get(t._key),o=new vw(n);return new Za(n,o,t._key,a,new Bl(i.hasPendingWrites,i.fromCache),t.converter)}function Uh(n){return new kg("increment",n)}(function(t,i=!0){(function(o){To=o})(nI),Sh(new nu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),p=new _u(new xI(a.getProvider("auth-internal")),new EI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ft(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),no(cv,hv,t),no(cv,hv,"esm2020")})();const RC={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},IC=av().length?av()[0]:og(RC),Wl=cw(IC),c_=40;function Ew(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const jC=S.div`
  position: relative; background: #fff;
`,CC=S.div`
  padding-left: ${c_}px; padding-right: ${c_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function DC({children:n}){return y.jsx(jC,{children:y.jsx(CC,{children:n})})}const NC=S.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,MC=S.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 100px; 
  margin-bottom: 120px; 
  row-gap: 32px; 
  column-gap: 14px; 
  width: 100%;
  flex-basis: 50%;
  /* display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-columns: repeat(2, auto);
  row-gap: 32px;
  column-gap: 14px; */
  
  @media (max-width: 640px) {
    margin-top: 20px;
    margin-bottom: 60px;
    row-gap: 18px;  
    /* width: 393px; */
 }
`,OC=S.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 1450px) {
    display: flex;
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 21px;
  }
`,h_=eu,ww=ng,VC={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Dm(n){return n.members.map(t=>{const i=ww.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function kC(n){return n.members.map(t=>{const i=ww.find(a=>a.num===t);return i?Ew(i.imgUrl):""}).filter(Boolean)}function UC({list:n,statsById:t}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return y.jsx(MC,{children:n.map((a,o)=>{const u=Dm(a),d=kC(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${p}`,v=a.projectNum??a.num;return y.jsx(ig,{titleKor:a.titleKor,titleEng:a.titleEng,src:Ew(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function PC(){const[n,t]=At.useState("All Projects"),[i,a]=At.useState("이름순"),[o,u]=At.useState({});At.useEffect(()=>{let m=!0;return(async()=>{try{const g=await Cm(gh(Wl,"works"));if(!m)return;const v={};g.forEach(w=>{const T=w.data()||{};v[String(w.id)]={like:typeof T.like=="number"?T.like:0,view:typeof T.view=="number"?T.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const d=At.useMemo(()=>{const m=VC[n]||null;return m?h_.filter(g=>g.category===m):h_},[n]),p=At.useMemo(()=>{const m=[...d];switch(i){case"이름순":m.sort((g,v)=>Dm(g).localeCompare(Dm(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),T=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[T]?.like??0)-R});break;case"조회수순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),T=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[T]?.view??0)-R});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[d,i,o]);return y.jsxs(NC,{children:[y.jsx(OC,{children:"Projects"}),y.jsx(I2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),y.jsx(DC,{children:y.jsx(UC,{list:p,statsById:o})})]})}const zC=S.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function qg({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return y.jsx(zC,{position:n,from:t,to:i,height:a,z:o,style:u})}const ar={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},LC=S.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`,$C=S.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,BC=S.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,FC=S.video`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.2); /* slight scale so edges stay filled after blur */
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  filter: blur(28px) brightness(0.7) saturate(1.1);
  will-change: transform, filter;
`,KC=S.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vw;
  aspect-ratio: 1 / 1; /* width defines the square size now */
  transform: translate(-50%, -50%);
  overflow: hidden;
  @media (max-width: 640px) {
    width: 177vh; // 모바일에서 세로 모드 꽉 채우기
    min-height: 220px;
  }
`,qC=S.video`
  width: 100%;
  height: 100%;
  display: block;
`,HC=S.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,GC=S.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  opacity: ${n=>n.$visible?1:0};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${n=>n.$visible?"auto":"none"};
  @media (max-width: 640px) {
    left: 16px;
    bottom: 241px;
    max-width: 90vw;
    gap: 4px;
  }
`,d_=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,YC=S.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,QC=S(ns)`
  position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px;
  width: 240px; height: 52px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba(0,0,0,0.05); 
  border: 1px solid #FFFFFF; 
  color: #FFFFFF; text-decoration: none;
  font-family: Pretendard, system-ui; font-weight: 700; cursor: pointer;
  //hover시 배경 불투명도 증가
  &:hover { background: rgba(0,0,0,0.3);}
  transition: all 200ms ease-in-out;

  @media (max-width: 640px) {
    width: 140px;
    height: 36px;
    font-size: 14px;
    bottom: 165px;
    left: 16px;
    transform: none;
  }
`;function XC(){const[n,t]=At.useState(!1),i=At.useRef(null),a="/TU2025gradulate/";return At.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),y.jsxs(LC,{"aria-label":"Hero",children:[y.jsxs($C,{children:[y.jsx(BC,{"aria-hidden":!0,children:y.jsx(FC,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"})})}),y.jsx(KC,{"aria-label":"Hero background video",children:y.jsxs(qC,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>t(!0),15500)},children:[y.jsx("source",{src:`${a}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),y.jsx(HC,{})]}),y.jsxs(GC,{$visible:n,children:[y.jsxs(d_,{children:["25. 10. 24. FRI~26. SUN",y.jsx("br",{}),"Hongdae Art Center B2"]}),y.jsx(d_,{children:"Department of Design Engineering"}),y.jsxs(YC,{children:["Tech University of Korea",y.jsx("br",{}),"20th Grad Exhibition"]})]}),y.jsx(QC,{to:"showroom","aria-label":"View More",children:"View More"}),y.jsx(qg,{position:"bottom",from:ar.heroToWhite.from,to:ar.heroToWhite.to,height:ar.heroToWhite.h,z:0})]})}const f_="/TU2025gradulate/",WC=S.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,ZC=S.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,JC=S.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,t5=S.div`
  width: 1220px;
  display: flex;
  flex-direction: row;
  gap: 72px;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 24px;
    padding: 0px 12px;
    width: calc(100vw - 24px);
  }
`,e5=S.h2`
  font-family: Pretendard, system-ui;
  font-size: 40px;
  line-height: 64px;
  color: #000;
  font-weight: 700;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.3;
  }
`,n5=S.div`
  width: 1220px;
  color: #202020;
  font-family: Pretendard, system-ui;
  font-size: 24px;
  font-weight: 300;
  line-height: 38.4px;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 10px;
    line-height: 1.6;
    padding: 0 2px;
    box-sizing: border-box;
    text-align: center;
  }
`,i5=S.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,r5=S.div`
  width: 1220px;
  height: 234px;
  margin: 120px auto 0;
  background: #F9F9F9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: calc(100vw - 32px);
    max-width: 100%;
    height: 80px;
    margin: 32px auto 0;
    padding: 0 8px;
    box-sizing: border-box;
    overflow-x: auto;
  }
`;function a5(){return y.jsxs(WC,{"aria-labelledby":"brand-title",children:[y.jsxs(ZC,{children:[y.jsxs(JC,{children:[y.jsx(e5,{id:"brand-title",children:"Brand Concept"}),y.jsxs(t5,{children:[y.jsxs(n5,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",y.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",y.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",y.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",y.jsx("br",{}),y.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",y.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",y.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",y.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",y.jsx("br",{}),y.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",y.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),y.jsx(i5,{children:y.jsx("img",{src:`${f_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),y.jsx(r5,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:y.jsx("img",{src:`${f_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),y.jsx(qg,{position:"bottom",from:ar.whiteToBlack.from,to:ar.whiteToBlack.to,height:ar.whiteToBlack.h,z:0})]})}const s5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',o5=S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${s5};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,l5=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function ld({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[w,T]=At.useState(d),R=v?u:w;At.useCallback(()=>{if(v){p&&p(!u);return}T(z=>{const P=!z;return p&&p(P),P})},[v,p,u]);const M={onClick:m,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return y.jsxs(o5,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,R?y.jsx(l5,{"aria-hidden":!0}):null]})}const Bn="/TU2025gradulate/",u5=S.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,c5=S.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,h5=S.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,Ei=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,d5=S.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,f5=S.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,p5=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,kp=S.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`,er=S.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  @media (max-width: 640px) {
    width: 46vw;
    height: 46vw;
    min-width: 140px;
    min-height: 140px;
    max-width: 100vw;
    max-height: 100vw;
  }
`,Up=S.div`
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 100%);
  color: #fff;
  font-family: Pretendard, system-ui;
  font-size: 14px;
  line-height: 22.4px;
  text-align: center;
  opacity: 0;
  transition: opacity .2s;
`,m5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,g5=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,y5=S.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,x5=S.div`
  display: flex;
  gap: 8px;
`,p_=S.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function v5(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:`${Bn}sq5.png`,cap:""},{src:`${Bn}sq2.png`,cap:""},{src:"https://placehold.co/727x445",cap:""},{src:`${Bn}sq6.png`,cap:""},{src:`${Bn}sq4.png`,cap:""},{src:"https://placehold.co/987x555",cap:""},{src:`${Bn}sq3.png`,cap:""},{src:`${Bn}sq1.png`,cap:""}];return y.jsxs(u5,{"aria-label":"Gallery",children:[y.jsx(qg,{position:"top",from:ar.blackToBlackSoft.from,to:ar.blackToBlackSoft.to,height:ar.blackToBlackSoft.h,z:0}),y.jsxs(c5,{children:[y.jsxs(h5,{children:[y.jsx(Ei,{src:"https://placehold.co/1840x1000",alt:"featured"}),y.jsx(d5,{"aria-hidden":!0,children:y.jsx(f5,{})})]}),y.jsxs(p5,{className:"gallery-desktop",children:[y.jsxs(kp,{children:[y.jsx(er,{$w:910,$h:445,children:y.jsx(Ei,{src:"https://placehold.co/910x512",alt:""})}),y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq5.png`,alt:""})}),y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq6.png`,alt:""})})]}),y.jsxs(kp,{children:[y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq4.png`,alt:""})}),y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq2.png`,alt:""})}),y.jsx(er,{$w:910,$h:445,children:y.jsx(Ei,{src:"https://placehold.co/910x517",alt:""})})]}),y.jsxs(kp,{children:[y.jsx(er,{$w:910,$h:445,children:y.jsx(Ei,{src:"https://placehold.co/987x555",alt:""})}),y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq3.png`,alt:""})}),y.jsx(er,{$w:445,$h:445,children:y.jsx(Ei,{src:`${Bn}sq1.png`,alt:""})})]})]}),y.jsx(m5,{children:y.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((t,i)=>{const a=i*3,o=n[a],u=n[a+1],d=n[a+2];return y.jsxs(g5,{children:[o&&y.jsxs(y5,{children:[y.jsx("img",{src:o.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),o.cap&&y.jsx(Up,{style:{opacity:1},children:o.cap})]}),y.jsxs(x5,{children:[u&&y.jsxs(p_,{children:[y.jsx("img",{src:u.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),u.cap&&y.jsx(Up,{style:{opacity:1},children:u.cap})]}),d&&y.jsxs(p_,{children:[y.jsx("img",{src:d.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&y.jsx(Up,{style:{opacity:1},children:d.cap})]})]})]},i)})})}),y.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:y.jsx(ld,{label:"View More"})})]})]})}const _5=S.section`
  padding: 0;
`,E5=S.div`
  position: relative; height: 1045px; overflow: hidden;
`,w5=S.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,b5=S.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,T5=S.img`
  width: 100%; height: 100%; object-fit: cover;
`,S5=S.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,A5=S.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,R5=S.div`
  position: absolute; left: 860px; top: 935px;
`;function I5(){return y.jsx(_5,{"aria-labelledby":"online-title",children:y.jsxs(E5,{children:[y.jsx(w5,{id:"online-title",children:"Online Exhibition"}),y.jsx(b5,{children:y.jsx(T5,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),y.jsx(S5,{"aria-hidden":!0}),y.jsx(A5,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),y.jsx(R5,{children:y.jsx(ld,{label:"View More"})})]})})}const j5=S.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,C5=S.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,D5=S.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function N5({durationVh:n=300,center:t=!0,centerOffsetPx:i=0,children:a,style:o}){const u=At.useRef(null),[d,p]=At.useState(0);return At.useEffect(()=>{const m=u.current;if(!m)return;let g=0,v=!0;const w=()=>{if(!v)return;const T=m.getBoundingClientRect(),R=window.innerHeight,M=n/100*R-R,z=Math.min(Math.max(-T.top,0),M);p(M>0?z/M:0),g=requestAnimationFrame(w)};return g=requestAnimationFrame(w),()=>{v=!1,cancelAnimationFrame(g)}},[n]),y.jsx(j5,{ref:u,style:o,$durationVh:n,children:y.jsx(C5,{$center:t,children:y.jsx(D5,{$offset:i,children:typeof a=="function"?a(d):a})})})}const m_=[{id:"w1",artistKr:"송지원, 허지유",dept:"Industrial Design Engineering",titleSmall:"한국산업기술진흥원장상 수상",titleStrong:"BIND",rightMeta1:"Precision and efficency beyond human limits.",rightMeta2:"BIND, 흩어진 시간을 하나로 잇다.",image:"1127032149"},{id:"w2",artistKr:"이채연",dept:"Media Design Engineering",titleSmall:"총동문회장상 수상",titleStrong:"MUSE",rightMeta1:"디자인 논문을 쉽게 활용할 수 있도록 돕는",rightMeta2:"AI 인사이트 제공 서비스",image:"1127403683"},{id:"w3",artistKr:"정혜원, 신주혜",dept:"Industrial Design Engineering",titleSmall:"한국공학대학교총장상 수상",titleStrong:"ENDY",rightMeta1:"감정을 이해하고 반응하는 학습 파트너,",rightMeta2:"자기주도학습의 새로운 동반자 ENDY",image:"1126889031"}],M5=S.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,O5=S.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,V5=S.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;S.img`
  width: 100%;
  height: auto;
  display: block;
`;const k5=S.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,U5=S.div`
  position: relative;
  height: 979px;
  background: #121212;
  @media (max-width: 640px) {
    height: auto;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 24px 0;
  }
`,P5=S.div`
  margin: 400px auto 0 auto;
  text-align: center;
  color: #fff;
  font-family: Pretendard, system-ui;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  @media (max-width: 640px) {
    position: static;
    font-size: 20px;
    line-height: 1.3;
    margin: 16px 0 8px 0;
  }
`,z5=S.div`
  /* position: absolute; */
  margin-top: 140px;
  margin: 0 auto;
  border-radius: 3.55px;
  overflow: hidden;
  @media (max-width: 640px) {
    position: static;
    width: 90vw;
    height: auto;
    min-height: 160px;
    margin: 0 auto 12px auto;
    border-radius: 10px;
    transform: none;
  }
`,wu=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`,L5=S.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  /* transform and opacity are applied inline for performance */
  ${wu}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,$5=S.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  /* transform and opacity are applied inline for performance */
  ${wu}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,B5=S.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${wu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    font-size: 12px;
    text-align: left;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,F5=S.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${wu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    font-size: 15px;
    text-align: left;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,K5=S.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  /* transform and opacity are applied inline for performance */
  ${wu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,q5=S.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,H5=S.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,G5=S.iframe`
  width: 1280px;
  height: 720px;
  border: none;
  display: block;
  margin: 0 auto;
  opacity: 0.75;
`,Y5=S.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
`,Q5=(n,t=0,i=1)=>Math.max(t,Math.min(i,n)),Xs=(n,t,i)=>n+(t-n)*i,X5=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function W5({work:n,progress:t,videoId:i}){String(i||"").trim();const a=`https://player.vimeo.com/video/${n.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`,o=X5(Q5(t,0,1)),u=Xs(0,-120,o),d=Xs(0,-360,o),p=Xs(0,-280,o),m=Xs(0,-220,o),g=Xs(0,-260,o),v=Xs(0,-180,o),w=.55,R=o<w?1:1-Math.max(0,Math.min(1,(o-w)/(.9-w))),M={transform:`translate3d(0, ${u}px, 0)`,willChange:"transform"},z=H=>({transform:`translate3d(0, ${H}px, 0)`,opacity:R,willChange:"transform, opacity"}),P={transform:`translate3d(0, ${v}px, 0)`,opacity:R,willChange:"transform, opacity"};return y.jsxs(M5,{children:[y.jsx(P5,{children:"TU-EXPO Works"}),y.jsxs(U5,{children:[y.jsx(z5,{style:M,children:y.jsx(G5,{src:a,frameBorder:"0"})}),y.jsx(L5,{style:z(d),children:n.artistKr}),y.jsx($5,{style:z(p),children:n.dept}),y.jsx(B5,{style:z(m),children:n.rightMeta1}),y.jsx(F5,{style:z(g),children:n.rightMeta2}),y.jsxs(K5,{style:P,children:[y.jsx(q5,{children:n.titleSmall}),y.jsx(H5,{children:n.titleStrong})]})]})]})}function Z5(){return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),y.jsx("div",{className:"expo-works-desktop",children:m_.slice(0,3).map(n=>y.jsx(N5,{durationVh:320,center:!0,centerOffsetPx:-40,children:t=>y.jsx(W5,{work:n,progress:t})},n.id))}),y.jsx(O5,{className:"expo-works-mobile",children:m_.map(n=>y.jsxs(V5,{children:[y.jsx(Y5,{src:`https://player.vimeo.com/video/${n.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}),y.jsxs(k5,{children:[y.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),y.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),y.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const J5="/TU2025gradulate/",tD=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 160px;
  @media (max-width: 640px) {
    padding-top: 12px;
}
`,eD=S.div`
  position: relative; 
  height: auto;
`,nD=S.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,iD=S.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
}
`,rD=S.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,aD=S.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,sD=S.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function oD(){return y.jsx(tD,{"aria-labelledby":"insta-title",children:y.jsx(eD,{children:y.jsxs(nD,{children:[y.jsx(iD,{children:y.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[y.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),y.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),y.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),y.jsx(rD,{id:"insta-title",children:"@tukd_grad"}),y.jsxs(aD,{children:[y.jsx(sD,{children:y.jsx("img",{src:`${J5}insta-qr.png`,alt:"Instagram preview"})}),y.jsx(ld,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const bu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,g_=350,lD=S.section`
  padding: 120px 0 0 0; background: #121212;
`,uD=S.div`
  position: relative; background: #121212;
`,cD=S.div`
  /* padding-left: ${g_}px; padding-right: ${g_}px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px 200px 40px;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100vw;
    box-sizing: border-box;
    gap: 40px
  }
`,hD=({children:n})=>y.jsx(uD,{children:y.jsx(cD,{children:n})}),dD=S.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,fD=S.div`
  font-family: ${bu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function pD({title:n}){return y.jsx(dD,{children:y.jsx(fD,{children:n})})}const mD=S.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,gD=S.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,yD=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,xD=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,vD=S.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Qr({k:n,children:t,divider:i=!0}){return y.jsxs(gD,{$divider:i,children:[y.jsx(yD,{children:y.jsx(xD,{children:n})}),y.jsx(vD,{children:t})]})}const _D=S.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function y_({title:n,children:t,last:i=!1}){return y.jsxs(mD,{$last:i,children:[y.jsx(pD,{title:n}),y.jsx(_D,{children:t})]})}const ED=S.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,wD=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=S.div`
  font-family: ${bu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,th=S(qt)`
  font-weight: 500;
`,bD=S(qt)`
  font-size: 13px;
`;S(qt)`
  margin-top: 24px;
`;const TD=S.a`
  font-family: ${bu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function SD(){return y.jsx(lD,{"aria-label":"Venue & Access",children:y.jsxs(hD,{children:[y.jsxs(y_,{title:"Venew Details",children:[y.jsx(ED,{children:y.jsx(wD,{children:"잔향 : 기억의 향기"})}),y.jsx(Qr,{k:"Term",children:y.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),y.jsxs(Qr,{k:"Hours",children:[y.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),y.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),y.jsxs(Qr,{k:"Schedule",children:[y.jsx(th,{children:"10.24.FRI"}),y.jsx(qt,{children:"13:00    자유관람"}),y.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),y.jsx(qt,{children:"16:00    개회식"}),y.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),y.jsx(qt,{children:"16:30    자유관람"}),y.jsxs(th,{children:[y.jsx("br",{}),"10.25.SAT"]}),y.jsx(qt,{children:"10:00    자유관람"}),y.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),y.jsxs(th,{children:[y.jsx("br",{}),"10.26.SUN"]}),y.jsx(qt,{children:"10:00    자유관람"})]}),y.jsxs(Qr,{k:"Website",divider:!1,children:[y.jsx(qt,{children:"Hongik Art Center"}),y.jsx(TD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),y.jsxs(y_,{title:"Access",children:[y.jsxs(Qr,{k:"Address",children:[y.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관 3",y.jsx("br",{}),"서울시 종로구 대학로 57"]}),y.jsxs(qt,{children:["Hongik Art Center B2 Gallery 3",y.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),y.jsx("div",{style:{marginTop:24},children:y.jsx(ld,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),y.jsxs(Qr,{k:"Parking",children:[y.jsx(qt,{children:"B3F ~ B6F"}),y.jsxs(qt,{children:[y.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),y.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),y.jsx(th,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),y.jsx(bD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),y.jsxs(Qr,{k:"By Subway",children:[y.jsx(qt,{children:"[1호선 종로5가역]"}),y.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[4호선 혜화역]"]}),y.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),y.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),y.jsxs(Qr,{k:"By Bus",divider:!1,children:[y.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),y.jsx(qt,{children:"마을버스 종로 08번"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),y.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),y.jsxs(qt,{children:[y.jsx("br",{}),"[이화장(01-223) 하차]"]}),y.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}const AD=S.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;function RD(){const n=[y.jsx(XC,{},"hero"),y.jsx(a5,{},"brand"),y.jsx(v5,{},"gallery"),y.jsx(AD,{children:y.jsx(I5,{})},"online"),y.jsx(Z5,{},"works"),y.jsx(oD,{},"insta"),y.jsx(SD,{},"venue")];return y.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const ID="/TU2025gradulate/",Hg="Pretendard, system-ui",jD=S.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    min-height: 216px;
    border-radius: 4px;
  }
`,CD=S.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${ID}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateZ(0);
  @media (max-width: 640px) {
    width: 117px;
    height: 95px;
    left: 4px;
    top: 118px;
    border-radius: 6px;
  }
`,DD=S.div` 
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 8px;
  width: calc(${n=>n.$w}px - 40px);
  height: calc(${n=>n.$h}px - 60px);
  left: 20px;
  top: 30px;
  @media (max-width: 640px) {
    width: calc(100% - 28px);
    height: calc(216px - 40px);
    left: 14px;
    top: 16px;
  }
`,ND=S.div`
  /* position: absolute; */
  font-family: ${Hg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,MD=S.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${Hg};
  font-weight: 300;
  font-size: 18px;
  line-height: 125%;
  overflow: hidden; 
  color: #333;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    max-height: 108px;
  }
`,OD=S.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${Hg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function VD({to:n,from:t,message:i}){return y.jsxs(jD,{$w:yo,$h:es,children:[y.jsx(CD,{}),y.jsxs(DD,{$w:yo,$h:es,children:[y.jsx(ND,{children:`To. ${n}`}),y.jsx(MD,{children:i}),y.jsx(OD,{children:`From. ${t}`})]})]})}const kD=S.div`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,UD=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function PD({src:n}){return y.jsx(kD,{$w:yo,$h:es,children:y.jsx(UD,{src:n,alt:"포토 카드"})})}const zD=S.button`
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  border-radius: 8px;
  /* background: linear-gradient(157deg, #AEAEAE 0%, #848484 100%); */
  outline: 1px rgba(255,255,255,.5) solid;
  outline-offset: -1px;
  display: grid;
  place-items: center;
  position: relative; 
  cursor: pointer;
  border: none;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,LD=S.div`
  position: absolute;
  width: ${n=>n.$w}px;
  height: ${n=>n.$h}px;
  top: 0;
  left: 0;
  background: linear-gradient(157deg, #AEAEAE 0%, #848484 100%);
  border-radius: 8px;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`,$D=S.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,BD=S.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,FD=S.span`
  position: absolute;
  left: 14px;
  top: 1px;
  width: 4px;
  height: 30px;
  background: #fff;
  border-radius: 4px;
  @media (max-width: 640px) {
    left: 11px;
    height: 24px;
    width: 3px;
  }
`,KD=S.span`
  position: absolute;
  left: 1px;
  top: 14px;
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 4px;
  @media (max-width: 640px) {
    top: 11px;
    width: 24px;
    height: 3px;
  }
`;function qD({onClick:n}){return y.jsxs(zD,{onClick:n,"aria-label":"방명록 작성",$w:yo,$h:es,children:[y.jsx(LD,{$w:yo,$h:es}),y.jsx($D,{children:y.jsxs(BD,{children:[y.jsx(FD,{}),y.jsx(KD,{})]})})]})}const yo=270,es=337,HD=30,bw=20,GD=210,YD=60,Tw=173,Sw=216,QD=16,XD=16,Nm=16,WD=S.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,ZD=S.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,JD=S.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,tN=S.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${YD}px 0 ${GD}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,eN=S.div`
  display: flex;
  gap: ${HD}px;
  align-items: flex-start;
  min-height: ${es*2+bw}px;

  @media (max-width: 640px) {
    gap: ${QD}px;
    min-height: initial;
  }
`,nN=S.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Nm}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,iN=S.div`
  width: calc((100% - ${Nm}px) / 2);
  height: ${Sw}px;
  flex: 0 0 calc((100% - ${Nm}px) / 2);
`,rN=S.div`
  @media (max-width: 640px) { display: none; }
`,aN=S.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,sN=S.div`
  display: flex;
  flex-direction: column;
  gap: ${bw}px;
  @media (max-width: 640px) {
    width: ${Tw}px;
    gap: ${XD}px;
  }
`,Aw=S.div`
  width: ${yo}px;
  height: ${es}px;
  @media (max-width: 640px) {
    width: ${Tw}px;
    height: ${Sw}px;
  }
`,x_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return i.forEach((o,u)=>{if(t.length>o.min+a){const d=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(d,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},oN=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function lN({onOpenModal:n,items:t}){const i=B.useRef(null),[a,o]=B.useState({width:0,trackW:0}),[u,d]=B.useState(()=>x_(t)),[p,m]=B.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);B.useEffect(()=>{d(x_(t))},[t]);const g=oN(u);B.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),M=z=>m(z.matches);return R.addEventListener?R.addEventListener("change",M):R.addListener(M),()=>{R.removeEventListener?R.removeEventListener("change",M):R.removeListener(M)}},[]),B.useEffect(()=>{if(p)return;const R=i.current;if(!R)return;const M=z=>{Math.abs(z.deltaY)>Math.abs(z.deltaX)&&(R.scrollLeft+=z.deltaY,z.preventDefault())};return R.addEventListener("wheel",M,{passive:!1}),()=>R.removeEventListener("wheel",M)},[p]);const v=B.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');B.useEffect(()=>{if(p)return;const R=i.current;if(!R)return;const M=H=>{H.button===0&&(w(H.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=H.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(H.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},z=H=>{if(!v.current.on)return;const F=H.clientX-v.current.startX;Math.abs(F)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-F},P=H=>{v.current.on&&(R.releasePointerCapture?.(H.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(H.preventDefault(),H.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",M),window.addEventListener("pointermove",z),window.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),()=>{R.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P)}},[p]);const T=B.useCallback(()=>{const R=i.current;if(!R)return;const M=R.clientWidth,z=R.scrollWidth,P=R.scrollLeft,F=R.parentElement?.clientWidth||M,Z=Math.max(1,z-M),ot=Math.min(1,Math.max(0,P/Z)),W=Math.round(F*ot);o({width:W,trackW:F})},[]);return B.useEffect(()=>{if(p)return;T();const R=i.current;if(!R)return;const M=()=>requestAnimationFrame(T),z=()=>requestAnimationFrame(T);return R.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",z),()=>{R.removeEventListener("scroll",M),window.removeEventListener("resize",z)}},[T,p]),y.jsxs(y.Fragment,{children:[y.jsxs(rN,{children:[y.jsx(WD,{children:y.jsx(ZD,{children:y.jsx(JD,{$w:a.width})})}),y.jsx(tN,{ref:i,children:y.jsx(eN,{children:g.map((R,M)=>y.jsxs(sN,{children:[y.jsx(Pp,{data:R[0],onOpenModal:n}),R[1]?y.jsx(Pp,{data:R[1],onOpenModal:n}):y.jsx(Aw,{})]},`col-${M}`))})})]}),y.jsx(aN,{children:y.jsx(nN,{children:u.map(R=>y.jsx(iN,{children:y.jsx(Pp,{data:R,onOpenModal:n})},R.id))})})]})}function Pp({data:n,onOpenModal:t}){return n?n.type==="add"?y.jsx(qD,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?y.jsx(PD,{src:n.src}):y.jsx(VD,{to:n.to,from:n.from,message:n.message}):y.jsx(Aw,{})}const uN="/TU2025gradulate/",cN=S.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,hN=S.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,dN=S.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,fN=S.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,pN=S.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,mN=S.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${uN}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,gN=S.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,yN=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,xN=S.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 220px;
  @media (max-width: 640px) {
    font-size: 18px;
    min-width: 90px; max-width: 150px;
  }
`,vN=S.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,_N=S.textarea`
  width: 100%; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
  @media (max-width: 640px) {
    min-height: 120px; border-radius: 10px; padding: 10px 12px;
    font-size: 14px; line-height: 21px;
  }
`,EN=S.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,wN=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,bN=S.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 20px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 180px;
  @media (max-width: 640px) {
    font-size: 16px;
    min-width: 90px; max-width: 140px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    min-width: 90px; max-width: 120px;
    text-align: right;
  }
`,TN=S.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,SN=S.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,AN=S.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,RN=S.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,IN=S.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,jN=S.div`
  width: 32px; height: 32px; position: relative;
`,v_=S.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function CN({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o=""}){const[u,d]=B.useState(a),[p,m]=B.useState(o),[g,v]=B.useState(""),w=B.useRef(null);if(B.useEffect(()=>{const M=z=>{z.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[n,t]),!n)return null;const T=M=>{M.target===w.current&&t?.()},R=()=>{const M={to:(u||"").trim(),from:(p||"").trim(),message:(g||"").trim()};M.message&&i?.(M)};return y.jsx(cN,{ref:w,onMouseDown:T,children:y.jsxs(hN,{onMouseDown:M=>M.stopPropagation(),children:[y.jsx(dN,{children:y.jsxs(fN,{children:[y.jsxs(pN,{children:[y.jsx(mN,{}),y.jsxs(gN,{children:[y.jsx(yN,{children:"To."}),y.jsx(xN,{value:u,onChange:M=>d(M.target.value),placeholder:"받는 사람"})]}),y.jsx(vN,{children:y.jsx(_N,{placeholder:"내용을 입력해 주세요.",value:g,onChange:M=>v(M.target.value)})}),y.jsxs(EN,{children:[y.jsx(wN,{children:"From."}),y.jsx(bN,{value:p,onChange:M=>m(M.target.value),placeholder:"보내는 사람"})]})]}),y.jsx(TN,{children:y.jsx(SN,{type:"button",onClick:R,"aria-label":"send",children:y.jsx(AN,{})})})]})}),y.jsx(RN,{children:y.jsx(IN,{type:"button",onClick:t,"aria-label":"close",children:y.jsxs(jN,{children:[y.jsx(v_,{$deg:45}),y.jsx(v_,{$deg:-45})]})})})]})})}const DN={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},NN=og(DN),zp=cw(NN),MN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',ON=S.div`
  background: #121212; min-height: 100vh;
`,VN=S.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,kN=S.h1`
  font-family: ${MN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,UN=S.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,PN=S.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function zN(){const[n,t]=At.useState(!1),[i,a]=At.useState([]);At.useEffect(()=>{let d=!0;return(async()=>{try{const p=s_(gh(zp,"guest"),o_("time","desc")),m=await Cm(p);if(!d)return;const g=[];m.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)}catch(p){console.error("Failed to load guestbook items:",p)}})(),()=>{d=!1}},[]);const o=async({to:d,from:p,message:m})=>{try{const g=String(Date.now());await Kg(Xl(gh(zp,"guest"),g),{to:d||"",from:p||"",message:m||"",time:g});try{const v=s_(gh(zp,"guest"),o_("time","desc")),w=await Cm(v),T=[];w.forEach(R=>{const M=R.data();T.push({id:R.id,to:M.to||"",from:M.from||"",message:M.message||"",type:"text"})}),a(T)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return y.jsxs(ON,{children:[y.jsxs(VN,{children:[y.jsx(kN,{children:"Guest Book"}),y.jsx(UN,{children:y.jsxs(PN,{className:"gb-wrap",children:[y.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),y.jsx(lN,{onOpenModal:()=>t(!0),items:i})]})})]}),y.jsx(CN,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const Mm="/TU2025gradulate/",LN=S.div`
  display: flex;
  position: sticky;
  top: 80px;
  bottom: 0px;
  left: 0;
  width: 350px;
  height: 100%;
  background-color: #121212;
  padding: 60px 40px;
  box-sizing: border-box;
  z-index: 100;
  transform: translateX(${n=>n.$open?"0":"-350px"});
  transition: transform 500ms ease-out;
  pointer-events: ${n=>n.$open?"auto":"none"};
  @media (max-width: 640px) {
    width: 100vw;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding: 20px 16px 40px 16px;
}
`,$N=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,BN=S.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
  @media (max-width: 640px) {
    /* flex-direction: row; */
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
}
`,FN=S.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,KN=S.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
}
`,qN=S.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  line-height: 125%;
  @media (max-width: 640px) {
    font-size: 20px;
}
   @media (max-width: 393px) {
    font-size: 18px;
  }
`,HN=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #F0F0F0;
  margin: 0;
  padding: 0;
  line-height: 150%;
  @media (max-width: 640px) {
    font-size: 13px;
}
   @media (max-width: 393px) {
    font-size: 12px;
  }
`,GN=S.div`
  display: none;
  width: calc(100vw - 32px);
  height: calc((100vw - 32px) * 0.75);
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  @media (max-width: 640px) {
    display: flex;
}
`,YN=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  @media (max-width: 640px) {
    width: 100%;
    height: 38px;
}
`,QN=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  height: 32px;
  cursor: pointer;
  @media (max-width: 640px) {
    height: 20px;
}
`,XN=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,WN=S.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,ZN=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,JN=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,t9=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  line-height: auto;
  margin-bottom: 12px;
  @media (max-width: 640px) {
    font-size: 12px;
    margin-bottom: 5px;
}
`,e9=S.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${Mm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function Om({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:p="works"}){const[m,g]=B.useState(0),[v,w]=B.useState(!1);B.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const z=Xl(Wl,p,String(d)),P=await xh(z);if(!M)return;if(P.exists()){const H=P.data();g(typeof H.like=="number"?H.like:0)}else g(0)}catch(z){console.error("Firestore getDoc error:",z),M&&g(0)}})(),()=>{M=!1}},[d,p]);const T=async()=>{try{const M=Xl(Wl,p,String(d)),z=await xh(M);if(z.exists()){const P=z.data();g(typeof P.like=="number"?P.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},R=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}w(!0);const M=Xl(Wl,p,String(d));try{await kh(M,{like:Uh(1)}),g(z=>z+1),await T()}catch(z){if(z.code==="not-found"||/No document/i.test(String(z)))try{(await xh(M)).exists()?await kh(M,{like:Uh(1)}):await Kg(M,{like:1},{merge:!0}),await T()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",z)}finally{w(!1)}};return y.jsx(LN,{$open:!!a,children:y.jsxs($N,{children:[y.jsxs(BN,{children:[y.jsx(FN,{onClick:()=>{typeof o=="function"&&o()},children:y.jsx("img",{src:`${Mm}icons/closeIcon.svg`,alt:"Close Icon"})}),y.jsxs(KN,{children:[y.jsx(GN,{$src:u}),y.jsx(qN,{children:n}),y.jsx(HN,{children:i})]})]}),y.jsxs(YN,{children:[y.jsx(QN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:y.jsxs(XN,{children:[y.jsx(WN,{$src:`${Mm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),y.jsx(ZN,{children:m})]})}),y.jsxs(JN,{onClick:()=>{const z=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,H=Math.max(0,z-269);window.scrollTo({top:H,behavior:"smooth"})},children:[y.jsx(t9,{children:"Designer Info"}),y.jsx(e9,{})]})]})]})})}Om.propTypes={titleKor:J.string.isRequired,titleEng:J.string.isRequired,context:J.string.isRequired,isOpen:J.bool,onClose:J.func,docId:J.oneOfType([J.string,J.number]).isRequired,collection:J.string};const n9=S.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  letter-spacing: 0.24px;
  color: #202020;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: auto;
  height: 387px;
  gap: 40px;
  @media (max-width: 640px) {
    height: 231px;
    gap: 16px;
}
  @media (max-width: 364px) {
    height: 220px;
    gap: 12px;
  }
`,i9=S.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 173px;
    height: 231px;
    border-radius: 4px;
}
  @media (max-width: 364px) {
    width: 164px;
    height: 220px;
  }
`,r9=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,a9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,s9=S.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,o9=S.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 20px;
}
  @media (max-width: 364px) {
    font-size: 18px;
  }
`,l9=S.h2`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
}
`,u9=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,c9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90px;
  height: 84px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    width: 38px;
    height: 38px;
}
  @media (max-width: 364px) {
      width: 30px;
      height: 38px;
  }
`,Lp=S.h3`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 19.2px;
  color: #404040;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
    line-height: 7.68px;
  }
  @media (max-width: 364px) {
    font-size: 7px;
    line-height: 6.72px;
  }
`,h9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 84px;
  line-height: 19.2px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    height: 38px;
}
`,$p=S.p`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
    line-height: 7.68px;
} 
  @media (max-width: 364px) {
    font-size: 7px;
    line-height: 6.72px;
  }
`;function Gg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return y.jsxs(n9,{children:[y.jsx(i9,{children:y.jsx(r9,{src:u,alt:d})}),y.jsxs(a9,{children:[y.jsxs(s9,{children:[y.jsx(o9,{children:n}),y.jsx(l9,{children:t})]}),y.jsxs(u9,{children:[y.jsxs(c9,{children:[y.jsx(Lp,{children:"Part"}),y.jsx(Lp,{children:"SNS"}),y.jsx(Lp,{children:"E-mail"})]}),y.jsxs(h9,{children:[y.jsx($p,{children:i}),y.jsx($p,{children:a}),y.jsx($p,{children:o})]})]})]})]})}Gg.propTypes={nameKor:J.string.isRequired,nameEng:J.string.isRequired,part:J.string,sns:J.string,eMail:J.string,imgUrl:J.string.isRequired,imgAlt:J.string.isRequired};Gg.defaultProps={sns:"N/A",eMail:"N/A"};const d9=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 775px;
  height: auto;
  min-height: 700px;
  gap: 20px;
  margin: 140px 0 120px 77px;
  @media (max-width: 640px) {
    width: calc(100vw - 32px);
    height: auto;
    min-height: 400px;
    margin: 100px 0px 100px 16px;
}
`,f9=S.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,p9=S.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 80px;
  font-weight: 600;
  color: #202020;
  margin: 0;
  padding: 0;
  height: 95px;
  width: auto;
  @media (max-width: 640px) {
    font-size: 32px;
    height: 38px;
}
`;function __({designers:n}){return y.jsxs(d9,{children:[y.jsx(p9,{children:"Designer"}),y.jsx(f9,{children:n.map((t,i)=>y.jsx(Gg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const m9=S.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,g9=S.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,y9=S.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function x9({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return y.jsx(m9,{$isInfoOpen:t,children:y.jsx(g9,{children:y.jsx(y9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const v9="/TU2025gradulate/",_9=S.div`
    display: ${n=>n.$visible?"flex":"none"};
    position: fixed;
    top: 125px;
    left: 0;
    z-index: 1001;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: #121212;
    cursor: pointer;
    transform: translateX(${n=>n.$active?"0":"-100px"});
    transition: transform 500ms ease;
    @media (max-width: 640px) {
        display: none;
}
`,E9=S.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function w9({isOpen:n=!1,onClick:t}){const[i,a]=B.useState(!1);return B.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),y.jsx(_9,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:y.jsx(E9,{children:y.jsx("img",{src:`${v9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function eh(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const b9=S.img`
  width: 100%;
  /* max-width: 1800px; */
  /* padding: 0px 100px; */
  /* padding-right: 100px; */
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`,Bp=n=>y.jsx(b9,{loading:"lazy",...n}),T9=S.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,S9=S.div`
  padding-right: 140px;
  padding-left: ${n=>n.$isInfoOpen?0:140}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  /* transition: all 500ms ease; */
  @media (max-width: 1450px) {
    width: calc(100% - 350px);
    padding-right: 80px;
    padding-left: ${n=>n.$isInfoOpen?0:80}px;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 20px 0px 0px 0px;
}
`,A9=S.div`
  display: ${n=>n.$visible?"flex":"none"};
  position: sticky;
  /* transform: translateX(-350px); */
  top: 80px;
  left: 0;
  width: 350px;
  height: calc(100vh - 80px);
  @media (max-width: 640px) {
    display: flex;
    position: relative;
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    padding: 0;
}
`,E_=S.div`
  display: flex;
  position: relative;
  width: 100%;
`,R9=S.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,I9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function j9(){const{pid:n}=VT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=B.useState(!0),[o,u]=B.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(t){const[,H,F]=t,Z=I9[H]||null,ot=Math.max(0,parseInt(F,10)-1);m=eu.find(W=>W.projectNum===ot&&(!Z||W.category===Z)),m||(m=eu.find(W=>W.projectNum==ot))}if(!m)return y.jsx(E_,{children:y.jsxs(PageContainer,{children:[y.jsx(Om,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),y.jsx(Bp,{src:"https://placehold.co/1530x4000",alt:"featured"}),y.jsx(__,{children:"  "})]})});const g=(m.members||[]).map(H=>{const F=ng.find(Z=>Z.num===H);return F?{nameKor:F.nameKor,nameEng:F.nameEng,role:F.role||"Designer",sns:F.sns||"-",eMail:F.eMail||"",imgUrl:eh(F.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",T=m.projectNum??m.num,R=String(T).padStart(3,"0"),M=`/projects/${T}`,[z,P]=B.useState([]);return B.useEffect(()=>{let H=!1;const F=["jpg"],Z=30,ot=2,W=I=>!I||!I.ok?!1:(I.headers.get("content-type")||"").startsWith("image/"),ut=async I=>{try{const j=await fetch(I,{method:"GET",cache:"no-store"});return W(j)}catch{return!1}};return(async()=>{const I=[];let j=0;for(let C=0;C<Z;C++){let O=!1;for(const V of F){const L=eh(`${M}/gallery/${C}.${V}`);if(await ut(L)){I.push(L),O=!0,j=0;break}}if(!O&&(I.length===0||(j+=1,j>=ot)))break}H||P(I)})(),()=>{H=!0}},[M]),B.useEffect(()=>{const H=m?.projectNum??m?.num;if(H==null)return;const Z=Xl(Wl,"works",String(H));(async()=>{try{await kh(Z,{view:Uh(1)})}catch(ot){if(ot.code==="not-found"||/No document/i.test(String(ot)))try{(await xh(Z)).exists()?await kh(Z,{view:Uh(1)}):await Kg(Z,{view:1},{merge:!0})}catch(W){console.error("Firestore view fallback error:",W)}else console.error("Firestore view error:",ot)}})()},[m?.projectNum,m?.num]),y.jsx(E_,{children:y.jsxs(T9,{children:[y.jsx(w9,{isOpen:i,onClick:p}),y.jsx(A9,{$visible:o,children:y.jsx(Om,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:i,onClose:d,src:eh(`/projects/${T}/thumb.jpg`),docId:T})}),y.jsxs(S9,{$isInfoOpen:i,children:[z.length>0?z.map((H,F)=>y.jsx(Bp,{src:H,alt:`project-${w}${R}-img-${F+1}`},F)):y.jsx(Bp,{src:eh("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),y.jsx(x9,{videoId:m.videoId,isInfoOpen:i}),y.jsx(R9,{children:y.jsx(__,{designers:g})})]})]})})}const w_="/TU2025gradulate/",C9=k4`
  0%   { transform: translateY(calc(var(--amp, 8px) * -1)); }
  100% { transform: translateY(var(--amp, 8px)); }
`,D9=S.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 80px;
    height: 110px;
    padding: 20px 20px 10px 20px;
    background-color: rgba(160, 160, 160, 0.6);
    border-radius: 8px;
    pointer-events: none;
    z-index: 4;
    // 컴포넌트 화면 중앙 정렬
    top: calc(50vh - 80px);
    left: 50%;
    transform: translate(-50%, -50%) translateY(0);

    opacity: ${({$visible:n})=>n?1:0};
    transition:
    opacity ${({$fadeMs:n})=>n??800}ms ease,
    transform ${({$fadeMs:n})=>n??800}ms ease;
    ${({$visible:n})=>n?"":"transform: translate(-50%, -50%) translateY(6px);"}
`,N9=S.div`
    animation: ${({$visible:n,$floatDur:t})=>n?Qm`${C9} ${t??1800}ms ease-in-out infinite alternate`:"none"};
    will-change: transform;
`,b_=S.div`
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${n=>n.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;function M9({visible:n=!0,fadeMs:t=800,floatDur:i=1800,amp:a=6}={}){return y.jsxs(D9,{$visible:n,$fadeMs:t,"aria-hidden":!n,children:[y.jsx(b_,{src:`${w_}icons/showIndicatorMouse.svg`}),y.jsx(N9,{$visible:n,$floatDur:i,style:{"--amp":`${a}px`},children:y.jsx(b_,{src:`${w_}icons/showIndicatorDown.svg`})})]})}const Fp=S.div`
    z-index: 5;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;

    top: ${({$top:n})=>n||"0"};
    left: ${({$left:n})=>n!==void 0?n:"auto"};
    right: ${({$right:n})=>n!==void 0?n:"auto"};
    bottom: ${({$bottom:n})=>n!==void 0?n:"auto"};
`,T_=S.div`
    display: flex;
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    opacity: ${({$shown:n})=>n?1:0};
    transform: ${({$shown:n})=>n?"scale(1)":"scale(0.8)"};
    transition:
    opacity ${({$cDur:n})=>n}ms ${({$ease:n})=>n} ${({$cDelay:n})=>n}ms,
    transform ${({$cDur:n})=>n}ms ${({$ease:n})=>n} ${({$cDelay:n})=>n}ms;
`,S_=S.div`
    display: flex;
    width: 14px;
    height: 14px;
    background-color: #333;
    border-radius: 50%;

    opacity: ${({$shown:n})=>n?1:0};
    transform: ${({$shown:n})=>n?"scale(1)":"scale(0.8)"};
    transition:
    opacity ${({$cDur:n})=>n}ms ${({$ease:n})=>n} ${({$cDelay:n})=>n}ms,
    transform ${({$cDur:n})=>n}ms ${({$ease:n})=>n} ${({$cDelay:n})=>n}ms;
`,A_=S.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({$shown:n,$lineWidth:t})=>n?t||"72px":"0px"};
    transition:
    width ${({$lDur:n})=>n}ms ${({$ease:n})=>n} ${({$lDelay:n})=>n}ms;
`,R_=S.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`,O9=S.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    background-color: rgba(242, 245, 245, 0.5);
    border-radius: 4px;
    padding: 4px;
    backdrop-filter: blur(8px);

    width: ${({$textWidth:n})=>n||"300px"};
    height: ${({$textHeight:n})=>n||"auto"};
    opacity: ${({$shown:n})=>n?1:0};
    transform: ${({$shown:n})=>n?"translateY(0)":"translateY(8px)"};
    transition:
    opacity ${({$tDur:n})=>n}ms ${({$ease:n})=>n} ${({$tDelay:n})=>n}ms,
    transform ${({$tDur:n})=>n}ms ${({$ease:n})=>n} ${({$tDelay:n})=>n}ms;
`,V9=S.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;function Kp({children:n,textWidth:t,textHeight:i,shown:a,tDur:o,tDelay:u,ease:d}){return y.jsx(O9,{$textWidth:t,$textHeight:i,$shown:a,$tDur:o,$tDelay:u,$ease:d,children:y.jsx(V9,{children:n})})}function k9({top:n,left:t,right:i="auto",bottom:a,lineWidth:o,textWidth:u,textHeight:d,children:p,position:m="left",isActive:g,section:v,currentSection:w,anim:T={circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}}}){const[R,M]=B.useState(!1),z=T?.circle?.easing||T?.line?.easing||T?.text?.easing||"cubic-bezier(0.22,1,0.36,1)",P=T?.circle?.duration??250,H=T?.circle?.delay??120,F=T?.line?.duration??500,Z=H+P+(T?.line?.delay??120),ot=T?.text?.duration??280,W=Z+F+(T?.text?.delay??80),I=g||R&&w===v;if(B.useEffect(()=>{g&&!R&&M(!0)},[g,R]),m==="right")return y.jsxs(Fp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsx(Kp,{textWidth:u,textHeight:d,shown:I,tDur:ot,tDelay:W,ease:z,children:p}),y.jsxs(R_,{children:[y.jsx(A_,{$lineWidth:o,$shown:I,$lDur:F,$lDelay:Z,$ease:z}),y.jsx(T_,{$shown:I,$cDur:P,$cDelay:H,$ease:z,children:y.jsx(S_,{$shown:I,$cDur:P,$cDelay:H,$ease:z})})]})]});if(m==="left")return y.jsxs(Fp,{$top:n,$left:t,$right:i,$bottom:a,children:[y.jsxs(R_,{children:[y.jsx(T_,{$shown:I,$cDur:P,$cDelay:H,$ease:z,children:y.jsx(S_,{$shown:I,$cDur:P,$cDelay:H,$ease:z})}),y.jsx(A_,{$lineWidth:o,$shown:I,$lDur:F,$lDelay:Z,$ease:z})]}),y.jsx(Kp,{textWidth:u,textHeight:d,shown:I,tDur:ot,tDelay:W,ease:z,children:p})]});if(m==="no-line")return y.jsx(Fp,{$top:n,$left:t,$right:i,$bottom:a,children:y.jsx(Kp,{textWidth:u,textHeight:d,shown:I,tDur:ot,tDelay:W,ease:z,children:p})})}const qp="/TU2025gradulate/",U9=S.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`,P9=S.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 500vh;
    background-color: #FFF;
    background-color: transparent;
    isolation: isolate;
`,Hp=S.img`
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    object-fit: cover;
    opacity: ${({$opacity:n})=>n!==void 0?n:.3};
    z-index: 1;
    top: 80px;
    left: 0;
    position: fixed;

    transition: opacity 1000ms ease-out;
    will-change: opacity;
`,z9=S.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`;function L9(){const n=B.useRef(null),[t,i]=B.useState(0),a=B.useRef(0),o=B.useRef(!1),u=B.useRef(null),[d,p]=B.useState(0),[m,g]=B.useState(!1),[v,w]=B.useState(!0),T=B.useRef(!1),R=B.useRef(null),M=[{top:"130vh",left:"15vw",textWidth:"300px",textHeight:"auto",position:"left",section:1,info:"모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다."},{top:"220vh",right:"53vw",textWidth:"300px",textHeight:"auto",position:"right",section:2,info:"시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다."},{top:"355vh",right:"15vw",textWidth:"300px",textHeight:"auto",position:"right",section:3,info:"향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다."},{top:"420vh",left:"25vw",textWidth:"300px",textHeight:"auto",position:"no-line",section:4,info:"결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다."}],z=t===1||t===4?1:.3,P=t===2||t===4?1:.3,H=t===3||t===4?1:.3;return B.useEffect(()=>{const F=()=>{if(!n.current)return;const Z=n.current.getBoundingClientRect().top+window.scrollY,W=Math.max(0,Math.min(window.scrollY-Z,4*window.innerHeight))/window.innerHeight*100;let ut=0;W>=350?ut=4:W>=270?ut=3:W>=170?ut=2:W>=70?ut=1:ut=0,i(I=>I===ut?I:ut)};return window.addEventListener("scroll",F,{passive:!0}),F(),()=>window.removeEventListener("scroll",F)},[]),B.useEffect(()=>{const F=Z=>{if(w(!1),T.current=!0,clearTimeout(R.current),g(!1),!n.current)return;const ot=n.current.getBoundingClientRect().top+window.scrollY,W=ot,ut=ot+4*window.innerHeight,I=window.scrollY;if(I<W-20||I>ut+20)return;if(o.current){Z.preventDefault();return}const j=Z.deltaY,C=Math.sign(j);if(C===0)return;const V=Math.max(0,Math.min(4,a.current+C));if(V===a.current){Z.preventDefault();return}o.current=!0,a.current=V;const L=ot+V*window.innerHeight;window.scrollTo({top:L,behavior:"smooth"}),clearTimeout(u.current),u.current=setTimeout(()=>{o.current=!1,g(!0),p(V)},3300),Z.preventDefault()};return window.addEventListener("wheel",F,{passive:!1}),()=>{window.removeEventListener("wheel",F),clearTimeout(u.current)}},[]),B.useEffect(()=>{const F=Z=>{const ot=[" ","PageDown","ArrowDown"],W=["PageUp","ArrowUp"];w(!1),T.current=!0,clearTimeout(R.current),ot.includes(Z.key)?(Z.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:100}))):W.includes(Z.key)&&(Z.preventDefault(),window.dispatchEvent(new WheelEvent("wheel",{deltaY:-100})))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[]),B.useEffect(()=>(T.current||(w(!0),clearTimeout(R.current),R.current=setTimeout(()=>{w(!1),T.current=!0},5e3)),()=>clearTimeout(R.current)),[]),B.useEffect(()=>{},[m,d]),y.jsxs(U9,{children:[y.jsx(M9,{visible:v,fadeMs:700,floatDur:1900,amp:8}),y.jsxs(P9,{ref:n,children:[M.map((F,Z)=>y.jsx(k9,{top:F.top,left:F.left,right:F.right,textWidth:F.textWidth,textHeight:F.textHeight,position:F.position,isActive:m&&d===F.section,anim:{circle:{duration:250,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},line:{duration:500,delay:120,easing:"cubic-bezier(0.22,1,0.36,1)"},text:{duration:280,delay:80,easing:"cubic-bezier(0.22,1,0.36,1)"}},section:F.section,currentSection:d,children:F.info},Z)),y.jsx(Hp,{src:`${qp}showroom/showRight.png`,alt:"Showroom Right",$opacity:H}),y.jsx(Hp,{src:`${qp}showroom/showCenter.png`,alt:"Showroom Center",$opacity:P}),y.jsx(Hp,{src:`${qp}showroom/showLeft.png`,alt:"Showroom Left",$opacity:z})]}),y.jsx(z9,{})]})}var Gp={exports:{}},Ul={},Yp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function $9(){return I_||(I_=1,(function(n){function t(tt,dt){var yt=tt.length;tt.push(dt);t:for(;0<yt;){var jt=yt-1>>>1,k=tt[jt];if(0<o(k,dt))tt[jt]=dt,tt[yt]=k,yt=jt;else break t}}function i(tt){return tt.length===0?null:tt[0]}function a(tt){if(tt.length===0)return null;var dt=tt[0],yt=tt.pop();if(yt!==dt){tt[0]=yt;t:for(var jt=0,k=tt.length,at=k>>>1;jt<at;){var ct=2*(jt+1)-1,ht=tt[ct],gt=ct+1,Ct=tt[gt];if(0>o(ht,yt))gt<k&&0>o(Ct,ht)?(tt[jt]=Ct,tt[gt]=yt,jt=gt):(tt[jt]=ht,tt[ct]=yt,jt=ct);else if(gt<k&&0>o(Ct,yt))tt[jt]=Ct,tt[gt]=yt,jt=gt;else break t}}return dt}function o(tt,dt){var yt=tt.sortIndex-dt.sortIndex;return yt!==0?yt:tt.id-dt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,w=null,T=3,R=!1,M=!1,z=!1,P=!1,H=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ot(tt){for(var dt=i(g);dt!==null;){if(dt.callback===null)a(g);else if(dt.startTime<=tt)a(g),dt.sortIndex=dt.expirationTime,t(m,dt);else break;dt=i(g)}}function W(tt){if(z=!1,ot(tt),!M)if(i(m)!==null)M=!0,ut||(ut=!0,L());else{var dt=i(g);dt!==null&&ne(W,dt.startTime-tt)}}var ut=!1,I=-1,j=5,C=-1;function O(){return P?!0:!(n.unstable_now()-C<j)}function V(){if(P=!1,ut){var tt=n.unstable_now();C=tt;var dt=!0;try{t:{M=!1,z&&(z=!1,F(I),I=-1),R=!0;var yt=T;try{e:{for(ot(tt),w=i(m);w!==null&&!(w.expirationTime>tt&&O());){var jt=w.callback;if(typeof jt=="function"){w.callback=null,T=w.priorityLevel;var k=jt(w.expirationTime<=tt);if(tt=n.unstable_now(),typeof k=="function"){w.callback=k,ot(tt),dt=!0;break e}w===i(m)&&a(m),ot(tt)}else a(m);w=i(m)}if(w!==null)dt=!0;else{var at=i(g);at!==null&&ne(W,at.startTime-tt),dt=!1}}break t}finally{w=null,T=yt,R=!1}dt=void 0}}finally{dt?L():ut=!1}}}var L;if(typeof Z=="function")L=function(){Z(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=V,L=function(){ue.postMessage(null)}}else L=function(){H(V,0)};function ne(tt,dt){I=H(function(){tt(n.unstable_now())},dt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(tt){tt.callback=null},n.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<tt?Math.floor(1e3/tt):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(tt){switch(T){case 1:case 2:case 3:var dt=3;break;default:dt=T}var yt=T;T=dt;try{return tt()}finally{T=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(tt,dt){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var yt=T;T=tt;try{return dt()}finally{T=yt}},n.unstable_scheduleCallback=function(tt,dt,yt){var jt=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?jt+yt:jt):yt=jt,tt){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=yt+k,tt={id:v++,callback:dt,priorityLevel:tt,startTime:yt,expirationTime:k,sortIndex:-1},yt>jt?(tt.sortIndex=yt,t(g,tt),i(m)===null&&tt===i(g)&&(z?(F(I),I=-1):z=!0,ne(W,yt-jt))):(tt.sortIndex=k,t(m,tt),M||R||(M=!0,ut||(ut=!0,L()))),tt},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(tt){var dt=T;return function(){var yt=T;T=dt;try{return tt.apply(this,arguments)}finally{T=yt}}}})(Qp)),Qp}var j_;function B9(){return j_||(j_=1,Yp.exports=$9()),Yp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function F9(){if(C_)return Ul;C_=1;var n=B9(),t=Vm(),i=NS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function d(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return p(h),e;if(f===l)return p(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=f;break}if(b===l){E=!0,l=h,s=f;break}b=b.sibling}if(!E){for(b=f.child;b;){if(b===s){E=!0,s=f,l=h;break}if(b===l){E=!0,l=f,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case P:return"Profiler";case z:return"StrictMode";case W:return"Suspense";case ut:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case ot:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return r=e.displayName||null,r!==null?r:ue(e.type)||"Memo";case j:r=e._payload,e=e._init;try{return ue(e(r))}catch{}}return null}var ne=Array.isArray,tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},jt=[],k=-1;function at(e){return{current:e}}function ct(e){0>k||(e.current=jt[k],jt[k]=null,k--)}function ht(e,r){k++,jt[k]=e.current,e.current=r}var gt=at(null),Ct=at(null),_t=at(null),ge=at(null);function zt(e,r){switch(ht(_t,r),ht(Ct,e),ht(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?O1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=O1(r),e=V1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(gt),ht(gt,e)}function Me(){ct(gt),ct(Ct),ct(_t)}function Mi(e){e.memoizedState!==null&&ht(ge,e);var r=gt.current,s=V1(r,e.type);r!==s&&(ht(Ct,e),ht(gt,s))}function Hn(e){Ct.current===e&&(ct(gt),ct(Ct)),ge.current===e&&(ct(ge),jl._currentValue=yt)}var on=Object.prototype.hasOwnProperty,ca=n.unstable_scheduleCallback,ss=n.unstable_cancelCallback,ud=n.unstable_shouldYield,jo=n.unstable_requestPaint,fn=n.unstable_now,Tu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,Oi=n.unstable_NormalPriority,cd=n.unstable_LowPriority,Co=n.unstable_IdlePriority,hd=n.log,ha=n.unstable_setDisableYieldValue,dr=null,Je=null;function Cn(e){if(typeof hd=="function"&&ha(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(dr,e)}catch{}}var ln=Math.clz32?Math.clz32:Au,dd=Math.log,Su=Math.LN2;function Au(e){return e>>>=0,e===0?32:31-(dd(e)/Su|0)|0}var oi=256,fr=4194304;function Gn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Gn(l):(E&=b,E!==0?h=Gn(E):s||(s=b&~e,s!==0&&(h=Gn(s))))):(b=l&~f,b!==0?h=Gn(b):E!==0?h=Gn(E):s||(s=l&~e,s!==0&&(h=Gn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function pr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function os(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Do(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function mr(){var e=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),e}function ls(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function ve(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ru(e,r,s,l,h,f){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,D=e.expirationTimes,G=e.hiddenUpdates;for(s=E&~s;0<s;){var et=31-ln(s),rt=1<<et;b[et]=0,D[et]=-1;var Y=G[et];if(Y!==null)for(G[et]=null,et=0;et<Y.length;et++){var Q=Y[et];Q!==null&&(Q.lane&=-536870913)}s&=~rt}l!==0&&gr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(E&~r))}function gr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-ln(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function yr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function No(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vi(){var e=dt.p;return e!==0?e:(e=window.event,e===void 0?32:tx(e.type))}function fd(e,r){var s=dt.p;try{return dt.p=e,r()}finally{dt.p=s}}var li=Math.random().toString(36).slice(2),_e="__reactFiber$"+li,He="__reactProps$"+li,ki="__reactContainer$"+li,da="__reactEvents$"+li,fa="__reactListeners$"+li,pd="__reactHandles$"+li,Yn="__reactResources$"+li,xr="__reactMarker$"+li;function us(e){delete e[_e],delete e[He],delete e[da],delete e[fa],delete e[pd]}function ui(e){var r=e[_e];if(r)return r;for(var s=e.parentNode;s;){if(r=s[ki]||s[_e]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=z1(e);e!==null;){if(s=e[_e])return s;e=z1(e)}return r}e=s,s=e.parentNode}return null}function ci(e){if(e=e[_e]||e[ki]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function vr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function _r(e){var r=e[Yn];return r||(r=e[Yn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ee(e){e[xr]=!0}var Iu=new Set,pa={};function hi(e,r){di(e,r),di(e+"Capture",r)}function di(e,r){for(pa[e]=r,e=0;e<r.length;e++)Iu.add(r[e])}var ma=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fi={},cs={};function md(e){return on.call(cs,e)?!0:on.call(fi,e)?!1:ma.test(e)?cs[e]=!0:(fi[e]=!0,!1)}function ga(e,r,s){if(md(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ya(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Nn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var xa,hs;function Ui(e){if(xa===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);xa=r&&r[1]||"",hs=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xa+e+hs}var ds=!1;function fs(e,r){if(!e||ds)return"";ds=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Q){var Y=Q}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Q){Y=Q}e.call(rt.prototype)}}else{try{throw Error()}catch(Q){Y=Q}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Q){if(Q&&Y&&typeof Q.stack=="string")return[Q.stack,Y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),E=f[0],b=f[1];if(E&&b){var D=E.split(`
`),G=b.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<G.length&&!G[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===G.length)for(l=D.length-1,h=G.length-1;1<=l&&0<=h&&D[l]!==G[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==G[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==G[h]){var et=`
`+D[l].replace(" at new "," at ");return e.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",e.displayName)),et}while(1<=l&&0<=h);break}}}finally{ds=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ui(s):""}function gd(e){switch(e.tag){case 26:case 27:case 5:return Ui(e.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 15:return fs(e.type,!1);case 11:return fs(e.type.render,!1);case 1:return fs(e.type,!0);case 31:return Ui("Activity");default:return""}}function Qn(e){try{var r="";do r+=gd(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Er(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function va(e){var r=Er(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function wr(e){e._valueTracker||(e._valueTracker=va(e))}function Wt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=Er(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _a=/[\n"\\]/g;function Le(e){return e.replace(_a,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Oo(e,r,s,l,h,f,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),r!=null?E==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+fe(r)):e.value!==""+fe(r)&&(e.value=""+fe(r)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),r!=null?ko(e,E,fe(r)):s!=null?ko(e,E,fe(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function Vo(e,r,s,l,h,f,E,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+fe(s):"",r=r!=null?""+fe(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function ko(e,r,s){r==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function br(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function ju(e,r,s){if(r!=null&&(r=""+fe(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+fe(s):""}function Cu(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=fe(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||zi.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Po(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&Uo(e,h,l)}else for(var f in r)r.hasOwnProperty(f)&&Uo(e,f,r[f])}function ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return Nu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zo=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,un=null;function Mu(e){var r=ci(e);if(r&&(e=r.stateNode)){var s=e[He]||null;t:switch(e=r.stateNode,r.type){case"input":if(Oo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Le(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));Oo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Wt(l)}break t;case"textarea":ju(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&br(e,!!s.multiple,r,!1)}}}var Ea=!1;function wa(e,r,s){if(Ea)return e(r,s);Ea=!0;try{var l=e(r);return l}finally{if(Ea=!1,(Tr!==null||un!==null)&&(wc(),Tr&&(r=Tr,e=un,un=Tr=null,Mu(r),e)))for(r=0;r<e.length;r++)Mu(e[r])}}function Sr(e,r){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(cn)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Li=!1}var On=null,ie=null,ms=null;function Ou(){if(ms)return ms;var e,r=ie,s=r.length,l,h="value"in On?On.value:On.textContent,f=h.length;for(e=0;e<s&&r[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&r[s-l]===h[f-l];l++);return ms=h.slice(e,1<l?1-l:void 0)}function ba(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ta(){return!0}function $o(){return!1}function Ve(e){function r(s,l,h,f,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ta:$o,this.isPropagationStopped=$o,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Ve(tn),Aa=v({},tn,{view:0,detail:0}),Ra=Ve(Aa),gs,Ia,pi,ja=v({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(gs=e.screenX-pi.screenX,Ia=e.screenY-pi.screenY):Ia=gs=0,pi=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:Ia}}),Ca=Ve(ja),yd=v({},ja,{dataTransfer:0}),Vu=Ve(yd),Da=v({},Aa,{relatedTarget:0}),ys=Ve(Da),ku=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bo=Ve(ku),Fo=v({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uu=Ve(Fo),xs=v({},tn,{data:0}),Ko=Ve(xs),Pu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=zu[e])?!!r[e]:!1}function vs(){return Lu}var $u=v({},Aa,{key:function(e){if(e.key){var r=Pu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$i[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_s=Ve($u),hn=v({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ve(hn),Bu=v({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),Rr=Ve(Bu),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),x=Ve(c),_=v({},ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=Ve(_),q=v({},tn,{newState:0,oldState:0}),X=Ve(q),lt=[9,13,27,32],Rt=cn&&"CompositionEvent"in window,se=null;cn&&"documentMode"in document&&(se=document.documentMode);var Yt=cn&&"TextEvent"in window&&!se,we=cn&&(!Rt||se&&8<se&&11>=se),_n=" ",mi=!1;function Wn(e,r){switch(e){case"keyup":return lt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ho(e,r){switch(e){case"compositionend":return Zn(r);case"keypress":return r.which!==32?null:(mi=!0,_n);case"textInput":return e=r.data,e===_n&&mi?null:e;default:return null}}function Rw(e,r){if(Jn)return e==="compositionend"||!Rt&&Wn(e,r)?(e=Ou(),ms=ie=On=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return we&&r.locale!=="ko"?null:r.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Iw[e.type]:r==="textarea"}function Qg(e,r,s,l){Tr?un?un.push(l):un=[l]:Tr=l,r=Ic(r,"onChange"),0<r.length&&(s=new Sa("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var Go=null,Yo=null;function jw(e){j1(e,0)}function Fu(e){var r=vr(e);if(Wt(r))return e}function Xg(e,r){if(e==="change")return r}var Wg=!1;if(cn){var xd;if(cn){var vd="oninput"in document;if(!vd){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),vd=typeof Zg.oninput=="function"}xd=vd}else xd=!1;Wg=xd&&(!document.documentMode||9<document.documentMode)}function Jg(){Go&&(Go.detachEvent("onpropertychange",t0),Yo=Go=null)}function t0(e){if(e.propertyName==="value"&&Fu(Yo)){var r=[];Qg(r,Yo,e,Lo(e)),wa(jw,r)}}function Cw(e,r,s){e==="focusin"?(Jg(),Go=r,Yo=s,Go.attachEvent("onpropertychange",t0)):e==="focusout"&&Jg()}function Dw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fu(Yo)}function Nw(e,r){if(e==="click")return Fu(r)}function Mw(e,r){if(e==="input"||e==="change")return Fu(r)}function Ow(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var En=typeof Object.is=="function"?Object.is:Ow;function Qo(e,r){if(En(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(r,h)||!En(e[h],r[h]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,r){var s=e0(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=e0(s)}}function i0(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?i0(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function r0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=Pi(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=Pi(e.document)}return r}function _d(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var Vw=cn&&"documentMode"in document&&11>=document.documentMode,Es=null,Ed=null,Xo=null,wd=!1;function a0(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wd||Es==null||Es!==Pi(l)||(l=Es,"selectionStart"in l&&_d(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&Qo(Xo,l)||(Xo=l,l=Ic(Ed,"onSelect"),0<l.length&&(r=new Sa("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=Es)))}function Na(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var ws={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},bd={},s0={};cn&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ma(e){if(bd[e])return bd[e];if(!ws[e])return e;var r=ws[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in s0)return bd[e]=r[s];return e}var o0=Ma("animationend"),l0=Ma("animationiteration"),u0=Ma("animationstart"),kw=Ma("transitionrun"),Uw=Ma("transitionstart"),Pw=Ma("transitioncancel"),c0=Ma("transitionend"),h0=new Map,Td="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Td.push("scrollEnd");function ti(e,r){h0.set(e,r),hi(r,[e])}var d0=new WeakMap;function Vn(e,r){if(typeof e=="object"&&e!==null){var s=d0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Qn(r)},d0.set(e,r),r)}return{value:e,source:r,stack:Qn(r)}}var kn=[],bs=0,Sd=0;function Ku(){for(var e=bs,r=Sd=bs=0;r<e;){var s=kn[r];kn[r++]=null;var l=kn[r];kn[r++]=null;var h=kn[r];kn[r++]=null;var f=kn[r];if(kn[r++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}f!==0&&f0(s,h,f)}}function qu(e,r,s,l){kn[bs++]=e,kn[bs++]=r,kn[bs++]=s,kn[bs++]=l,Sd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ad(e,r,s,l){return qu(e,r,s,l),Hu(e)}function Ts(e,r){return qu(e,null,null,r),Hu(e)}function f0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&r!==null&&(h=31-ln(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Hu(e){if(50<El)throw El=0,Mf=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Ss={};function zw(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,r,s,l){return new zw(e,r,s,l)}function Rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,r){var s=e.alternate;return s===null?(s=wn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function p0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Gu(e,r,s,l,h,f){var E=0;if(l=e,typeof e=="function")Rd(e)&&(E=1);else if(typeof e=="string")E=$b(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=wn(31,s,r,h),e.elementType=C,e.lanes=f,e;case M:return Oa(s.children,h,f,r);case z:E=8,h|=24;break;case P:return e=wn(12,s,r,h|2),e.elementType=P,e.lanes=f,e;case W:return e=wn(13,s,r,h),e.elementType=W,e.lanes=f,e;case ut:return e=wn(19,s,r,h),e.elementType=ut,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case Z:E=10;break t;case F:E=9;break t;case ot:E=11;break t;case I:E=14;break t;case j:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=wn(E,s,r,h),r.elementType=e,r.type=l,r.lanes=f,r}function Oa(e,r,s,l){return e=wn(7,e,l,r),e.lanes=s,e}function Id(e,r,s){return e=wn(6,e,null,r),e.lanes=s,e}function jd(e,r,s){return r=wn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var As=[],Rs=0,Yu=null,Qu=0,Un=[],Pn=0,Va=null,Fi=1,Ki="";function ka(e,r){As[Rs++]=Qu,As[Rs++]=Yu,Yu=e,Qu=r}function m0(e,r,s){Un[Pn++]=Fi,Un[Pn++]=Ki,Un[Pn++]=Va,Va=e;var l=Fi;e=Ki;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var f=32-ln(r)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Fi=1<<32-ln(r)+h|s<<h|l,Ki=f+e}else Fi=1<<f|s<<h|l,Ki=e}function Cd(e){e.return!==null&&(ka(e,1),m0(e,1,0))}function Dd(e){for(;e===Yu;)Yu=As[--Rs],As[Rs]=null,Qu=As[--Rs],As[Rs]=null;for(;e===Va;)Va=Un[--Pn],Un[Pn]=null,Ki=Un[--Pn],Un[Pn]=null,Fi=Un[--Pn],Un[Pn]=null}var dn=null,ye=null,Kt=!1,Ua=null,gi=!1,Nd=Error(a(519));function Pa(e){var r=Error(a(418,""));throw Jo(Vn(r,e)),Nd}function g0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[_e]=e,r[He]=l,s){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(s=0;s<bl.length;s++)kt(bl[s],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),Vo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),wr(r);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),Cu(r,l.value,l.defaultValue,l.children),wr(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||M1(r.textContent,s)?(l.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),l.onScroll!=null&&kt("scroll",r),l.onScrollEnd!=null&&kt("scrollend",r),l.onClick!=null&&(r.onclick=jc),r=!0):r=!1,r||Pa(e)}function y0(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:dn=dn.return}}function Wo(e){if(e!==dn)return!1;if(!Kt)return y0(e),Kt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Qf(e.type,e.memoizedProps)),s=!s),s&&ye&&Pa(e),y0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ni(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,Fr(e.type)?(e=Jf,Jf=null,ye=e):ye=r):ye=dn?ni(e.stateNode.nextSibling):null;return!0}function Zo(){ye=dn=null,Kt=!1}function x0(){var e=Ua;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Ua=null),e}function Jo(e){Ua===null?Ua=[e]:Ua.push(e)}var Md=at(null),za=null,qi=null;function Ir(e,r,s){ht(Md,r._currentValue),r._currentValue=s}function Hi(e){e._currentValue=Md.current,ct(Md)}function Od(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function Vd(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var E=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var D=0;D<r.length;D++)if(b.context===r[D]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),Od(f.return,s,e),l||(E=null);break t}f=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,f=E.alternate,f!==null&&(f.lanes|=s),Od(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function tl(e,r,s,l){e=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}h=h.return}e!==null&&Vd(r,e,s,l),r.flags|=262144}function Xu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){za=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return v0(za,e)}function Wu(e,r){return za===null&&La(e),v0(e,r)}function v0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},qi===null){if(e===null)throw Error(a(308));qi=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else qi=qi.next=r;return s}var Lw=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},$w=n.unstable_scheduleCallback,Bw=n.unstable_NormalPriority,ke={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new Lw,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&$w(Bw,function(){e.controller.abort()})}var nl=null,Ud=0,Is=0,js=null;function Fw(e,r){if(nl===null){var s=nl=[];Ud=0,Is=Lf(),js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ud++,r.then(_0,_0),r}function _0(){if(--Ud===0&&nl!==null){js!==null&&(js.status="fulfilled");var e=nl;nl=null,Is=0,js=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function Kw(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var E0=tt.S;tt.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Fw(e,r),E0!==null&&E0(e,r)};var $a=at(null);function Pd(){var e=$a.current;return e!==null?e:re.pooledCache}function Zu(e,r){r===null?ht($a,$a.current):ht($a,r.pool)}function w0(){var e=Pd();return e===null?null:{parent:ke._currentValue,pool:e}}var il=Error(a(460)),b0=Error(a(474)),Ju=Error(a(542)),zd={then:function(){}};function T0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tc(){}function S0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(tc,tc),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,R0(e),e;default:if(typeof r.status=="string")r.then(tc,tc);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,R0(e),e}throw rl=r,il}}var rl=null;function A0(){if(rl===null)throw Error(a(459));var e=rl;return rl=null,e}function R0(e){if(e===il||e===Ju)throw Error(a(483))}var jr=!1;function Ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $d(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Hu(e),f0(e,null,s),r}return qu(e,l,r,s),Hu(e)}function al(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,yr(e,s)}}function Bd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=E:f=f.next=E,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var Fd=!1;function sl(){if(Fd){var e=js;if(e!==null)throw e}}function ol(e,r,s,l){Fd=!1;var h=e.updateQueue;jr=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var D=b,G=D.next;D.next=null,E===null?f=G:E.next=G,E=D;var et=e.alternate;et!==null&&(et=et.updateQueue,b=et.lastBaseUpdate,b!==E&&(b===null?et.firstBaseUpdate=G:b.next=G,et.lastBaseUpdate=D))}if(f!==null){var rt=h.baseState;E=0,et=G=D=null,b=f;do{var Y=b.lane&-536870913,Q=Y!==b.lane;if(Q?(Lt&Y)===Y:(l&Y)===Y){Y!==0&&Y===Is&&(Fd=!0),et!==null&&(et=et.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;Y=r;var te=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(te,rt,Y);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,Y=typeof Tt=="function"?Tt.call(te,rt,Y):Tt,Y==null)break t;rt=v({},rt,Y);break t;case 2:jr=!0}}Y=b.callback,Y!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=h.callbacks,Q===null?h.callbacks=[Y]:Q.push(Y))}else Q={lane:Y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},et===null?(G=et=Q,D=rt):et=et.next=Q,E|=Y;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Q=b,b=Q.next,Q.next=null,h.lastBaseUpdate=Q,h.shared.pending=null}}while(!0);et===null&&(D=rt),h.baseState=D,h.firstBaseUpdate=G,h.lastBaseUpdate=et,f===null&&(h.shared.lanes=0),zr|=E,e.lanes=E,e.memoizedState=rt}}function I0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function j0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)I0(s[e],r)}var Cs=at(null),ec=at(0);function C0(e,r){e=Ji,ht(ec,e),ht(Cs,r),Ji=e|r.baseLanes}function Kd(){ht(ec,Ji),ht(Cs,Cs.current)}function qd(){Ji=ec.current,ct(Cs),ct(ec)}var Nr=0,Mt=null,Zt=null,Re=null,nc=!1,Ds=!1,Ba=!1,ic=0,ll=0,Ns=null,qw=0;function be(){throw Error(a(321))}function Hd(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!En(e[s],r[s]))return!1;return!0}function Gd(e,r,s,l,h,f){return Nr=f,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,tt.H=e===null||e.memoizedState===null?fy:py,Ba=!1,f=s(l,h),Ba=!1,Ds&&(f=N0(r,s,l,h)),D0(e),f}function D0(e){tt.H=uc;var r=Zt!==null&&Zt.next!==null;if(Nr=0,Re=Zt=Mt=null,nc=!1,ll=0,Ns=null,r)throw Error(a(300));e===null||$e||(e=e.dependencies,e!==null&&Xu(e)&&($e=!0))}function N0(e,r,s,l){Mt=e;var h=0;do{if(Ds&&(Ns=null),ll=0,Ds=!1,25<=h)throw Error(a(301));if(h+=1,Re=Zt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}tt.H=Zw,f=r(s,l)}while(Ds);return f}function Hw(){var e=tt.H,r=e.useState()[0];return r=typeof r.then=="function"?ul(r):r,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Mt.flags|=1024),r}function Yd(){var e=ic!==0;return ic=0,e}function Qd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Xd(e){if(nc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}nc=!1}Nr=0,Re=Zt=Mt=null,Ds=!1,ll=ic=0,Ns=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Zt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var r=Re===null?Mt.memoizedState:Re.next;if(r!==null)Re=r,Zt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Wd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var r=ll;return ll+=1,Ns===null&&(Ns=[]),e=S0(Ns,e,r),r=Mt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,tt.H=r===null||r.memoizedState===null?fy:py),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===Z)return en(e)}throw Error(a(438,String(e)))}function Zd(e){var r=null,s=Mt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Wd(),Mt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=O;return r.index++,s}function Gi(e,r){return typeof r=="function"?r(e):r}function ac(e){var r=Ie();return Jd(r,Zt,e)}function Jd(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}r.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{r=h.next;var b=E=null,D=null,G=r,et=!1;do{var rt=G.lane&-536870913;if(rt!==G.lane?(Lt&rt)===rt:(Nr&rt)===rt){var Y=G.revertLane;if(Y===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),rt===Is&&(et=!0);else if((Nr&Y)===Y){G=G.next,Y===Is&&(et=!0);continue}else rt={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(b=D=rt,E=f):D=D.next=rt,Mt.lanes|=Y,zr|=Y;rt=G.action,Ba&&s(f,rt),f=G.hasEagerState?G.eagerState:s(f,rt)}else Y={lane:rt,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(b=D=Y,E=f):D=D.next=Y,Mt.lanes|=rt,zr|=rt;G=G.next}while(G!==null&&G!==r);if(D===null?E=f:D.next=b,!En(f,e.memoizedState)&&($e=!0,et&&(s=js,s!==null)))throw s;e.memoizedState=f,e.baseState=E,e.baseQueue=D,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function tf(e){var r=Ie(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do f=e(f,E.action),E=E.next;while(E!==h);En(f,r.memoizedState)||($e=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function M0(e,r,s){var l=Mt,h=Ie(),f=Kt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,$e=!0),h=h.queue;var b=k0.bind(null,l,h,e);if(cl(2048,8,b,[e]),h.getSnapshot!==r||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ms(9,sc(),V0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));f||(Nr&124)!==0||O0(l,r,s)}return s}function O0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Mt.updateQueue,r===null?(r=Wd(),Mt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function V0(e,r,s,l){r.value=s,r.getSnapshot=l,U0(r)&&P0(e)}function k0(e,r,s){return s(function(){U0(r)&&P0(e)})}function U0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!En(e,s)}catch{return!0}}function P0(e){var r=Ts(e,2);r!==null&&Rn(r,e,2)}function ef(e){var r=pn();if(typeof e=="function"){var s=e;if(e=s(),Ba){Cn(!0);try{s()}finally{Cn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},r}function z0(e,r,s,l){return e.baseState=s,Jd(e,Zt,typeof l=="function"?l:Gi)}function Gw(e,r,s,l,h){if(lc(e))throw Error(a(485));if(e=r.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};tt.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,L0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function L0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var f=tt.T,E={};tt.T=E;try{var b=s(h,l),D=tt.S;D!==null&&D(E,b),$0(e,r,b)}catch(G){nf(e,r,G)}finally{tt.T=f}}else try{f=s(h,l),$0(e,r,f)}catch(G){nf(e,r,G)}}function $0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){B0(e,r,l)},function(l){return nf(e,r,l)}):B0(e,r,s)}function B0(e,r,s){r.status="fulfilled",r.value=s,F0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,L0(e,s)))}function nf(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,F0(r),r=r.next;while(r!==l)}e.action=null}function F0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function K0(e,r){return r}function q0(e,r){if(Kt){var s=re.formState;if(s!==null){t:{var l=Mt;if(Kt){if(ye){e:{for(var h=ye,f=gi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ni(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ni(h.nextSibling),l=h.data==="F!";break t}}Pa(l)}l=!1}l&&(r=s[0])}}return s=pn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:r},s.queue=l,s=cy.bind(null,Mt,l),l.dispatch=s,l=ef(!1),f=lf.bind(null,Mt,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=Gw.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function H0(e){var r=Ie();return G0(r,Zt,e)}function G0(e,r,s){if(r=Jd(e,r,K0)[0],e=ac(Gi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ul(r)}catch(E){throw E===il?Ju:E}else l=r;r=Ie();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Mt.flags|=2048,Ms(9,sc(),Yw.bind(null,h,s),null)),[l,f,e]}function Yw(e,r){e.action=r}function Y0(e){var r=Ie(),s=Zt;if(s!==null)return G0(r,s,e);Ie(),r=r.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ms(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Mt.updateQueue,r===null&&(r=Wd(),Mt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function sc(){return{destroy:void 0,resource:void 0}}function Q0(){return Ie().memoizedState}function oc(e,r,s,l){var h=pn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Ms(1|r,sc(),s,l)}function cl(e,r,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Zt!==null&&l!==null&&Hd(l,Zt.memoizedState.deps)?h.memoizedState=Ms(r,f,s,l):(Mt.flags|=e,h.memoizedState=Ms(1|r,f,s,l))}function X0(e,r){oc(8390656,8,e,r)}function W0(e,r){cl(2048,8,e,r)}function Z0(e,r){return cl(4,2,e,r)}function J0(e,r){return cl(4,4,e,r)}function ty(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ey(e,r,s){s=s!=null?s.concat([e]):null,cl(4,4,ty.bind(null,r,e),s)}function rf(){}function ny(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Hd(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function iy(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Hd(r,l[1]))return l[0];if(l=e(),Ba){Cn(!0);try{e()}finally{Cn(!1)}}return s.memoizedState=[l,r],l}function af(e,r,s){return s===void 0||(Nr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=s1(),Mt.lanes|=e,zr|=e,s)}function ry(e,r,s,l){return En(s,r)?s:Cs.current!==null?(e=af(e,s,l),En(e,r)||($e=!0),e):(Nr&42)===0?($e=!0,e.memoizedState=s):(e=s1(),Mt.lanes|=e,zr|=e,r)}function ay(e,r,s,l,h){var f=dt.p;dt.p=f!==0&&8>f?f:8;var E=tt.T,b={};tt.T=b,lf(e,!1,r,s);try{var D=h(),G=tt.S;if(G!==null&&G(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var et=Kw(D,l);hl(e,r,et,An(e))}else hl(e,r,l,An(e))}catch(rt){hl(e,r,{then:function(){},status:"rejected",reason:rt},An())}finally{dt.p=f,tt.T=E}}function Qw(){}function sf(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=sy(e).queue;ay(e,h,r,yt,s===null?Qw:function(){return oy(e),s(l)})}function sy(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function oy(e){var r=sy(e).next.queue;hl(e,r,{},An())}function of(){return en(jl)}function ly(){return Ie().memoizedState}function uy(){return Ie().memoizedState}function Xw(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=An();e=Cr(s);var l=Dr(r,e,s);l!==null&&(Rn(l,r,s),al(l,r,s)),r={cache:kd()},e.payload=r;return}r=r.return}}function Ww(e,r,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},lc(e)?hy(r,s):(s=Ad(e,r,s,l),s!==null&&(Rn(s,e,l),dy(s,r,l)))}function cy(e,r,s){var l=An();hl(e,r,s,l)}function hl(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(lc(e))hy(r,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var E=r.lastRenderedState,b=f(E,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,E))return qu(e,r,h,0),re===null&&Ku(),!1}catch{}finally{}if(s=Ad(e,r,h,l),s!==null)return Rn(s,e,l),dy(s,r,l),!0}return!1}function lf(e,r,s,l){if(l={lane:2,revertLane:Lf(),action:l,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(r)throw Error(a(479))}else r=Ad(e,s,l,2),r!==null&&Rn(r,e,2)}function lc(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function hy(e,r){Ds=nc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function dy(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,yr(e,s)}}var uc={readContext:en,use:rc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},fy={readContext:en,use:rc,useCallback:function(e,r){return pn().memoizedState=[e,r===void 0?null:r],e},useContext:en,useEffect:X0,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,oc(4194308,4,ty.bind(null,r,e),s)},useLayoutEffect:function(e,r){return oc(4194308,4,e,r)},useInsertionEffect:function(e,r){oc(4,2,e,r)},useMemo:function(e,r){var s=pn();r=r===void 0?null:r;var l=e();if(Ba){Cn(!0);try{e()}finally{Cn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=pn();if(s!==void 0){var h=s(r);if(Ba){Cn(!0);try{s(r)}finally{Cn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Ww.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var r=pn();return e={current:e},r.memoizedState=e},useState:function(e){e=ef(e);var r=e.queue,s=cy.bind(null,Mt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:rf,useDeferredValue:function(e,r){var s=pn();return af(s,e,r)},useTransition:function(){var e=ef(!1);return e=ay.bind(null,Mt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Mt,h=pn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(Lt&124)!==0||O0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,X0(k0.bind(null,l,f,e),[e]),l.flags|=2048,Ms(9,sc(),V0.bind(null,l,f,s,r),null),s},useId:function(){var e=pn(),r=re.identifierPrefix;if(Kt){var s=Ki,l=Fi;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=ic++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=qw++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:of,useFormState:q0,useActionState:q0,useOptimistic:function(e){var r=pn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=lf.bind(null,Mt,!0,s),s.dispatch=r,[e,r]},useMemoCache:Zd,useCacheRefresh:function(){return pn().memoizedState=Xw.bind(null,Mt)}},py={readContext:en,use:rc,useCallback:ny,useContext:en,useEffect:W0,useImperativeHandle:ey,useInsertionEffect:Z0,useLayoutEffect:J0,useMemo:iy,useReducer:ac,useRef:Q0,useState:function(){return ac(Gi)},useDebugValue:rf,useDeferredValue:function(e,r){var s=Ie();return ry(s,Zt.memoizedState,e,r)},useTransition:function(){var e=ac(Gi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ul(e),r]},useSyncExternalStore:M0,useId:ly,useHostTransitionStatus:of,useFormState:H0,useActionState:H0,useOptimistic:function(e,r){var s=Ie();return z0(s,Zt,e,r)},useMemoCache:Zd,useCacheRefresh:uy},Zw={readContext:en,use:rc,useCallback:ny,useContext:en,useEffect:W0,useImperativeHandle:ey,useInsertionEffect:Z0,useLayoutEffect:J0,useMemo:iy,useReducer:tf,useRef:Q0,useState:function(){return tf(Gi)},useDebugValue:rf,useDeferredValue:function(e,r){var s=Ie();return Zt===null?af(s,e,r):ry(s,Zt.memoizedState,e,r)},useTransition:function(){var e=tf(Gi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ul(e),r]},useSyncExternalStore:M0,useId:ly,useHostTransitionStatus:of,useFormState:Y0,useActionState:Y0,useOptimistic:function(e,r){var s=Ie();return Zt!==null?z0(s,Zt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Zd,useCacheRefresh:uy},Os=null,dl=0;function cc(e){var r=dl;return dl+=1,Os===null&&(Os=[]),S0(Os,e,r)}function fl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function hc(e,r){throw r.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function my(e){var r=e._init;return r(e._payload)}function gy(e){function r($,U){if(e){var K=$.deletions;K===null?($.deletions=[U],$.flags|=16):K.push(U)}}function s($,U){if(!e)return null;for(;U!==null;)r($,U),U=U.sibling;return null}function l($){for(var U=new Map;$!==null;)$.key!==null?U.set($.key,$):U.set($.index,$),$=$.sibling;return U}function h($,U){return $=Bi($,U),$.index=0,$.sibling=null,$}function f($,U,K){return $.index=K,e?(K=$.alternate,K!==null?(K=K.index,K<U?($.flags|=67108866,U):K):($.flags|=67108866,U)):($.flags|=1048576,U)}function E($){return e&&$.alternate===null&&($.flags|=67108866),$}function b($,U,K,nt){return U===null||U.tag!==6?(U=Id(K,$.mode,nt),U.return=$,U):(U=h(U,K),U.return=$,U)}function D($,U,K,nt){var mt=K.type;return mt===M?et($,U,K.props.children,nt,K.key):U!==null&&(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===j&&my(mt)===U.type)?(U=h(U,K.props),fl(U,K),U.return=$,U):(U=Gu(K.type,K.key,K.props,null,$.mode,nt),fl(U,K),U.return=$,U)}function G($,U,K,nt){return U===null||U.tag!==4||U.stateNode.containerInfo!==K.containerInfo||U.stateNode.implementation!==K.implementation?(U=jd(K,$.mode,nt),U.return=$,U):(U=h(U,K.children||[]),U.return=$,U)}function et($,U,K,nt,mt){return U===null||U.tag!==7?(U=Oa(K,$.mode,nt,mt),U.return=$,U):(U=h(U,K),U.return=$,U)}function rt($,U,K){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Id(""+U,$.mode,K),U.return=$,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case T:return K=Gu(U.type,U.key,U.props,null,$.mode,K),fl(K,U),K.return=$,K;case R:return U=jd(U,$.mode,K),U.return=$,U;case j:var nt=U._init;return U=nt(U._payload),rt($,U,K)}if(ne(U)||L(U))return U=Oa(U,$.mode,K,null),U.return=$,U;if(typeof U.then=="function")return rt($,cc(U),K);if(U.$$typeof===Z)return rt($,Wu($,U),K);hc($,U)}return null}function Y($,U,K,nt){var mt=U!==null?U.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return mt!==null?null:b($,U,""+K,nt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case T:return K.key===mt?D($,U,K,nt):null;case R:return K.key===mt?G($,U,K,nt):null;case j:return mt=K._init,K=mt(K._payload),Y($,U,K,nt)}if(ne(K)||L(K))return mt!==null?null:et($,U,K,nt,null);if(typeof K.then=="function")return Y($,U,cc(K),nt);if(K.$$typeof===Z)return Y($,U,Wu($,K),nt);hc($,K)}return null}function Q($,U,K,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return $=$.get(K)||null,b(U,$,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case T:return $=$.get(nt.key===null?K:nt.key)||null,D(U,$,nt,mt);case R:return $=$.get(nt.key===null?K:nt.key)||null,G(U,$,nt,mt);case j:var Ot=nt._init;return nt=Ot(nt._payload),Q($,U,K,nt,mt)}if(ne(nt)||L(nt))return $=$.get(K)||null,et(U,$,nt,mt,null);if(typeof nt.then=="function")return Q($,U,K,cc(nt),mt);if(nt.$$typeof===Z)return Q($,U,K,Wu(U,nt),mt);hc(U,nt)}return null}function Tt($,U,K,nt){for(var mt=null,Ot=null,xt=U,wt=U=0,Fe=null;xt!==null&&wt<K.length;wt++){xt.index>wt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=Y($,xt,K[wt],nt);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&r($,xt),U=f(Ft,U,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Fe}if(wt===K.length)return s($,xt),Kt&&ka($,wt),mt;if(xt===null){for(;wt<K.length;wt++)xt=rt($,K[wt],nt),xt!==null&&(U=f(xt,U,wt),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Kt&&ka($,wt),mt}for(xt=l(xt);wt<K.length;wt++)Fe=Q(xt,$,wt,K[wt],nt),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?wt:Fe.key),U=f(Fe,U,wt),Ot===null?mt=Fe:Ot.sibling=Fe,Ot=Fe);return e&&xt.forEach(function(Yr){return r($,Yr)}),Kt&&ka($,wt),mt}function Et($,U,K,nt){if(K==null)throw Error(a(151));for(var mt=null,Ot=null,xt=U,wt=U=0,Fe=null,Ft=K.next();xt!==null&&!Ft.done;wt++,Ft=K.next()){xt.index>wt?(Fe=xt,xt=null):Fe=xt.sibling;var Yr=Y($,xt,Ft.value,nt);if(Yr===null){xt===null&&(xt=Fe);break}e&&xt&&Yr.alternate===null&&r($,xt),U=f(Yr,U,wt),Ot===null?mt=Yr:Ot.sibling=Yr,Ot=Yr,xt=Fe}if(Ft.done)return s($,xt),Kt&&ka($,wt),mt;if(xt===null){for(;!Ft.done;wt++,Ft=K.next())Ft=rt($,Ft.value,nt),Ft!==null&&(U=f(Ft,U,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Kt&&ka($,wt),mt}for(xt=l(xt);!Ft.done;wt++,Ft=K.next())Ft=Q(xt,$,wt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?wt:Ft.key),U=f(Ft,U,wt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(Jb){return r($,Jb)}),Kt&&ka($,wt),mt}function te($,U,K,nt){if(typeof K=="object"&&K!==null&&K.type===M&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case T:t:{for(var mt=K.key;U!==null;){if(U.key===mt){if(mt=K.type,mt===M){if(U.tag===7){s($,U.sibling),nt=h(U,K.props.children),nt.return=$,$=nt;break t}}else if(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===j&&my(mt)===U.type){s($,U.sibling),nt=h(U,K.props),fl(nt,K),nt.return=$,$=nt;break t}s($,U);break}else r($,U);U=U.sibling}K.type===M?(nt=Oa(K.props.children,$.mode,nt,K.key),nt.return=$,$=nt):(nt=Gu(K.type,K.key,K.props,null,$.mode,nt),fl(nt,K),nt.return=$,$=nt)}return E($);case R:t:{for(mt=K.key;U!==null;){if(U.key===mt)if(U.tag===4&&U.stateNode.containerInfo===K.containerInfo&&U.stateNode.implementation===K.implementation){s($,U.sibling),nt=h(U,K.children||[]),nt.return=$,$=nt;break t}else{s($,U);break}else r($,U);U=U.sibling}nt=jd(K,$.mode,nt),nt.return=$,$=nt}return E($);case j:return mt=K._init,K=mt(K._payload),te($,U,K,nt)}if(ne(K))return Tt($,U,K,nt);if(L(K)){if(mt=L(K),typeof mt!="function")throw Error(a(150));return K=mt.call(K),Et($,U,K,nt)}if(typeof K.then=="function")return te($,U,cc(K),nt);if(K.$$typeof===Z)return te($,U,Wu($,K),nt);hc($,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,U!==null&&U.tag===6?(s($,U.sibling),nt=h(U,K),nt.return=$,$=nt):(s($,U),nt=Id(K,$.mode,nt),nt.return=$,$=nt),E($)):s($,U)}return function($,U,K,nt){try{dl=0;var mt=te($,U,K,nt);return Os=null,mt}catch(xt){if(xt===il||xt===Ju)throw xt;var Ot=wn(29,xt,null,$.mode);return Ot.lanes=nt,Ot.return=$,Ot}finally{}}}var Vs=gy(!0),yy=gy(!1),zn=at(null),yi=null;function Mr(e){var r=e.alternate;ht(Ue,Ue.current&1),ht(zn,e),yi===null&&(r===null||Cs.current!==null||r.memoizedState!==null)&&(yi=e)}function xy(e){if(e.tag===22){if(ht(Ue,Ue.current),ht(zn,e),yi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(yi=e)}}else Or()}function Or(){ht(Ue,Ue.current),ht(zn,zn.current)}function Yi(e){ct(zn),yi===e&&(yi=null),ct(Ue)}var Ue=at(0);function dc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Zf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function uf(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var cf={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=An(),h=Cr(l);h.payload=r,s!=null&&(h.callback=s),r=Dr(e,h,l),r!==null&&(Rn(r,e,l),al(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=An(),h=Cr(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Dr(e,h,l),r!==null&&(Rn(r,e,l),al(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=An(),l=Cr(s);l.tag=2,r!=null&&(l.callback=r),r=Dr(e,l,s),r!==null&&(Rn(r,e,s),al(r,e,s))}};function vy(e,r,s,l,h,f,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,E):r.prototype&&r.prototype.isPureReactComponent?!Qo(s,l)||!Qo(h,f):!0}function _y(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&cf.enqueueReplaceState(r,r.state,null)}function Fa(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ey(e){fc(e)}function wy(e){console.error(e)}function by(e){fc(e)}function pc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Ty(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function hf(e,r,s){return s=Cr(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(e,r)},s}function Sy(e){return e=Cr(e),e.tag=3,e}function Ay(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){Ty(r,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Ty(r,s,l),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Jw(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&tl(r,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return yi===null?Vf():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===zd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),Uf(e,l,h)),!1;case 22:return s.flags|=65536,l===zd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),Uf(e,l,h)),!1}throw Error(a(435,s.tag))}return Uf(e,l,h),Vf(),!1}if(Kt)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Nd&&(e=Error(a(422),{cause:l}),Jo(Vn(e,s)))):(l!==Nd&&(r=Error(a(423),{cause:l}),Jo(Vn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=hf(e.stateNode,l,h),Bd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=Vn(f,s),_l===null?_l=[f]:_l.push(f),xe!==4&&(xe=2),r===null)return!0;l=Vn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=hf(s.stateNode,l,e),Bd(s,e),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Sy(h),Ay(h,e,s,l),Bd(s,h),!1}s=s.return}while(s!==null);return!1}var Ry=Error(a(461)),$e=!1;function Ge(e,r,s,l){r.child=e===null?yy(r,null,s,l):Vs(r,e.child,s,l)}function Iy(e,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return La(r),l=Gd(e,r,s,E,f,h),b=Yd(),e!==null&&!$e?(Qd(e,r,h),Qi(e,r,h)):(Kt&&b&&Cd(r),r.flags|=1,Ge(e,r,l,h),r.child)}function jy(e,r,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!Rd(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,Cy(e,r,f,l,h)):(e=Gu(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!vf(e,h)){var E=f.memoizedProps;if(s=s.compare,s=s!==null?s:Qo,s(E,l)&&e.ref===r.ref)return Qi(e,r,h)}return r.flags|=1,e=Bi(f,l),e.ref=r.ref,e.return=r,r.child=e}function Cy(e,r,s,l,h){if(e!==null){var f=e.memoizedProps;if(Qo(f,l)&&e.ref===r.ref)if($e=!1,r.pendingProps=l=f,vf(e,h))(e.flags&131072)!==0&&($e=!0);else return r.lanes=e.lanes,Qi(e,r,h)}return df(e,r,s,l,h)}function Dy(e,r,s){var l=r.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=r.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return Ny(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zu(r,f!==null?f.cachePool:null),f!==null?C0(r,f):Kd(),xy(r);else return r.lanes=r.childLanes=536870912,Ny(e,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Zu(r,f.cachePool),C0(r,f),Or(),r.memoizedState=null):(e!==null&&Zu(r,null),Kd(),Or());return Ge(e,r,h,s),r.child}function Ny(e,r,s,l){var h=Pd();return h=h===null?null:{parent:ke._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Zu(r,null),Kd(),xy(r),e!==null&&tl(e,r,l,!0),null}function mc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function df(e,r,s,l,h){return La(r),s=Gd(e,r,s,l,void 0,h),l=Yd(),e!==null&&!$e?(Qd(e,r,h),Qi(e,r,h)):(Kt&&l&&Cd(r),r.flags|=1,Ge(e,r,s,h),r.child)}function My(e,r,s,l,h,f){return La(r),r.updateQueue=null,s=N0(r,l,s,h),D0(e),l=Yd(),e!==null&&!$e?(Qd(e,r,f),Qi(e,r,f)):(Kt&&l&&Cd(r),r.flags|=1,Ge(e,r,s,f),r.child)}function Oy(e,r,s,l,h){if(La(r),r.stateNode===null){var f=Ss,E=s.contextType;typeof E=="object"&&E!==null&&(f=en(E)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},Ld(r),E=s.contextType,f.context=typeof E=="object"&&E!==null?en(E):Ss,f.state=r.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(uf(r,s,E,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&cf.enqueueReplaceState(f,f.state,null),ol(r,l,f,h),sl(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){f=r.stateNode;var b=r.memoizedProps,D=Fa(s,b);f.props=D;var G=f.context,et=s.contextType;E=Ss,typeof et=="object"&&et!==null&&(E=en(et));var rt=s.getDerivedStateFromProps;et=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,et||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||G!==E)&&_y(r,f,l,E),jr=!1;var Y=r.memoizedState;f.state=Y,ol(r,l,f,h),sl(),G=r.memoizedState,b||Y!==G||jr?(typeof rt=="function"&&(uf(r,s,rt,l),G=r.memoizedState),(D=jr||vy(r,s,D,l,Y,G,E))?(et||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=G),f.props=l,f.state=G,f.context=E,l=D):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,$d(e,r),E=r.memoizedProps,et=Fa(s,E),f.props=et,rt=r.pendingProps,Y=f.context,G=s.contextType,D=Ss,typeof G=="object"&&G!==null&&(D=en(G)),b=s.getDerivedStateFromProps,(G=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==rt||Y!==D)&&_y(r,f,l,D),jr=!1,Y=r.memoizedState,f.state=Y,ol(r,l,f,h),sl();var Q=r.memoizedState;E!==rt||Y!==Q||jr||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof b=="function"&&(uf(r,s,b,l),Q=r.memoizedState),(et=jr||vy(r,s,et,l,Y,Q,D)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?(G||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Q,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Q,D)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=Q),f.props=l,f.state=Q,f.context=D,l=et):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),l=!1)}return f=l,mc(e,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,e!==null&&l?(r.child=Vs(r,e.child,null,h),r.child=Vs(r,null,s,h)):Ge(e,r,s,h),r.memoizedState=f.state,e=r.child):e=Qi(e,r,h),e}function Vy(e,r,s,l){return Zo(),r.flags|=256,Ge(e,r,s,l),r.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(e){return{baseLanes:e,cachePool:w0()}}function mf(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=Ln),e}function ky(e,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,e===null){if(Kt){if(h?Mr(r):Or(),Kt){var b=ye,D;if(D=b){t:{for(D=b,b=gi;D.nodeType!==8;){if(!b){b=null;break t}if(D=ni(D.nextSibling),D===null){b=null;break t}}b=D}b!==null?(r.memoizedState={dehydrated:b,treeContext:Va!==null?{id:Fi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},D=wn(18,null,null,0),D.stateNode=b,D.return=r,r.child=D,dn=r,ye=null,D=!0):D=!1}D||Pa(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Zf(b)?r.lanes=32:r.lanes=536870912,null;Yi(r)}return b=l.children,l=l.fallback,h?(Or(),h=r.mode,b=gc({mode:"hidden",children:b},h),l=Oa(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=pf(s),h.childLanes=mf(e,E,s),r.memoizedState=ff,l):(Mr(r),gf(r,b))}if(D=e.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(f)r.flags&256?(Mr(r),r.flags&=-257,r=yf(e,r,s)):r.memoizedState!==null?(Or(),r.child=e.child,r.flags|=128,r=null):(Or(),h=l.fallback,b=r.mode,l=gc({mode:"visible",children:l.children},b),h=Oa(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Vs(r,e.child,null,s),l=r.child,l.memoizedState=pf(s),l.childLanes=mf(e,E,s),r.memoizedState=ff,r=h);else if(Mr(r),Zf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var G=E.dgst;E=G,l=Error(a(419)),l.stack="",l.digest=E,Jo({value:l,source:null,stack:null}),r=yf(e,r,s)}else if($e||tl(e,r,s,!1),E=(s&e.childLanes)!==0,$e||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:No(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,Ts(e,l),Rn(E,e,l),Ry;b.data==="$?"||Vf(),r=yf(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=D.treeContext,ye=ni(b.nextSibling),dn=r,Kt=!0,Ua=null,gi=!1,e!==null&&(Un[Pn++]=Fi,Un[Pn++]=Ki,Un[Pn++]=Va,Fi=e.id,Ki=e.overflow,Va=r),r=gf(r,l.children),r.flags|=4096);return r}return h?(Or(),h=l.fallback,b=r.mode,D=e.child,G=D.sibling,l=Bi(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,G!==null?h=Bi(G,h):(h=Oa(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=pf(s):(D=b.cachePool,D!==null?(G=ke._currentValue,D=D.parent!==G?{parent:G,pool:G}:D):D=w0(),b={baseLanes:b.baseLanes|s,cachePool:D}),h.memoizedState=b,h.childLanes=mf(e,E,s),r.memoizedState=ff,l):(Mr(r),s=e.child,e=s.sibling,s=Bi(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(E=r.deletions,E===null?(r.deletions=[e],r.flags|=16):E.push(e)),r.child=s,r.memoizedState=null,s)}function gf(e,r){return r=gc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function gc(e,r){return e=wn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function yf(e,r,s){return Vs(r,e.child,null,s),e=gf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Uy(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Od(e.return,r,s)}function xf(e,r,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Py(e,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Ge(e,r,l.children,s),l=Ue.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uy(e,s,r);else if(e.tag===19)Uy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ht(Ue,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&dc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),xf(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&dc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}xf(r,!0,s,null,f);break;case"together":xf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),zr|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(tl(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Bi(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Bi(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function vf(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function tb(e,r,s){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),Ir(r,ke,e.memoizedState.cache),Zo();break;case 27:case 5:Mi(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:Ir(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Mr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?ky(e,r,s):(Mr(r),e=Qi(e,r,s),e!==null?e.sibling:null);Mr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(tl(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Py(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(Ue,Ue.current),l)break;return null;case 22:case 23:return r.lanes=0,Dy(e,r,s);case 24:Ir(r,ke,e.memoizedState.cache)}return Qi(e,r,s)}function zy(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)$e=!0;else{if(!vf(e,s)&&(r.flags&128)===0)return $e=!1,tb(e,r,s);$e=(e.flags&131072)!==0}else $e=!1,Kt&&(r.flags&1048576)!==0&&m0(r,Qu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Rd(l)?(e=Fa(l,e),r.tag=1,r=Oy(null,r,l,e,s)):(r.tag=0,r=df(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ot){r.tag=11,r=Iy(null,r,l,e,s);break t}else if(h===I){r.tag=14,r=jy(null,r,l,e,s);break t}}throw r=ue(l)||l,Error(a(306,r,""))}}return r;case 0:return df(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=Fa(l,r.pendingProps),Oy(e,r,l,h,s);case 3:t:{if(zt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,$d(e,r),ol(r,l,null,s);var E=r.memoizedState;if(l=E.cache,Ir(r,ke,l),l!==f.cache&&Vd(r,[ke],s,!0),sl(),l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=Vy(e,r,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),r),Jo(h),r=Vy(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ni(e.firstChild),dn=r,Kt=!0,Ua=null,gi=!0,s=yy(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Zo(),l===h){r=Qi(e,r,s);break t}Ge(e,r,l,s)}r=r.child}return r;case 26:return mc(e,r),e===null?(s=F1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Kt||(s=r.type,e=r.pendingProps,l=Cc(_t.current).createElement(s),l[_e]=r,l[He]=e,Qe(l,s,e),Ee(l),r.stateNode=l):r.memoizedState=F1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Mi(r),e===null&&Kt&&(l=r.stateNode=L1(r.type,r.pendingProps,_t.current),dn=r,gi=!0,h=ye,Fr(r.type)?(Jf=h,ye=ni(l.firstChild)):ye=h),Ge(e,r,r.pendingProps.children,s),mc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=Ib(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,dn=r,ye=ni(l.firstChild),gi=!1,h=!0):h=!1),h||Pa(r)),Mi(r),h=r.type,f=r.pendingProps,E=e!==null?e.memoizedProps:null,l=f.children,Qf(h,f)?l=null:E!==null&&Qf(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Gd(e,r,Hw,null,null,s),jl._currentValue=h),mc(e,r),Ge(e,r,l,s),r.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=jb(s,r.pendingProps,gi),s!==null?(r.stateNode=s,dn=r,ye=null,e=!0):e=!1),e||Pa(r)),null;case 13:return ky(e,r,s);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Vs(r,null,l,s):Ge(e,r,l,s),r.child;case 11:return Iy(e,r,r.type,r.pendingProps,s);case 7:return Ge(e,r,r.pendingProps,s),r.child;case 8:return Ge(e,r,r.pendingProps.children,s),r.child;case 12:return Ge(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Ir(r,r.type,l.value),Ge(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,La(r),h=en(h),l=l(h),r.flags|=1,Ge(e,r,l,s),r.child;case 14:return jy(e,r,r.type,r.pendingProps,s);case 15:return Cy(e,r,r.type,r.pendingProps,s);case 19:return Py(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=gc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Bi(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Dy(e,r,s);case 24:return La(r),l=en(ke),e===null?(h=Pd(),h===null&&(h=re,f=kd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},Ld(r),Ir(r,ke,h)):((e.lanes&s)!==0&&($d(e,r),ol(r,null,null,s),sl()),h=e.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ir(r,ke,l)):(l=f.cache,Ir(r,ke,l),l!==h.cache&&Vd(r,[ke],s,!0))),Ge(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Xi(e){e.flags|=4}function Ly(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Y1(r)){if(r=zn.current,r!==null&&((Lt&4194048)===Lt?yi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||r!==yi))throw rl=zd,b0;e.flags|=8192}}function yc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?mr():536870912,e.lanes|=r,zs|=r)}function pl(e,r){if(!Kt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function eb(e,r,s){var l=r.pendingProps;switch(Dd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(r),null;case 1:return pe(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Hi(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Wo(r)?Xi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,x0())),pe(r),null;case 26:return s=r.memoizedState,e===null?(Xi(r),s!==null?(pe(r),Ly(r,s)):(pe(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Xi(r),pe(r),Ly(r,s)):(pe(r),r.flags&=-16777217):(e.memoizedProps!==l&&Xi(r),pe(r),r.flags&=-16777217),null;case 27:Hn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Xi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}e=gt.current,Wo(r)?g0(r):(e=L1(h,l,s),r.stateNode=e,Xi(r))}return pe(r),null;case 5:if(Hn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Xi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return pe(r),null}if(e=gt.current,Wo(r))g0(r);else{switch(h=Cc(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=r,e[He]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(r)}}return pe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Xi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Wo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=dn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||M1(e.nodeValue,s)),e||Pa(r)}else e=Cc(e).createTextNode(l),e[_e]=r,r.stateNode=e}return pe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Wo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=r}else Zo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pe(r),h=!1}else h=x0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Yi(r),r):(Yi(r),null)}if(Yi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),yc(r,r.updateQueue),pe(r),null;case 4:return Me(),e===null&&Kf(r.stateNode.containerInfo),pe(r),null;case 10:return Hi(r.type),pe(r),null;case 19:if(ct(Ue),h=r.memoizedState,h===null)return pe(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)pl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(f=dc(e),f!==null){for(r.flags|=128,pl(h,!1),e=f.updateQueue,r.updateQueue=e,yc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)p0(s,e),s=s.sibling;return ht(Ue,Ue.current&1|2),r.child}e=e.sibling}h.tail!==null&&fn()>_c&&(r.flags|=128,l=!0,pl(h,!1),r.lanes=4194304)}else{if(!l)if(e=dc(f),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,yc(r,e),pl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Kt)return pe(r),null}else 2*fn()-h.renderingStartTime>_c&&s!==536870912&&(r.flags|=128,l=!0,pl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(e=h.last,e!==null?e.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=fn(),r.sibling=null,e=Ue.current,ht(Ue,l?e&1|2:e&1),r):(pe(r),null);case 22:case 23:return Yi(r),qd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(pe(r),r.subtreeFlags&6&&(r.flags|=8192)):pe(r),s=r.updateQueue,s!==null&&yc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&ct($a),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Hi(ke),pe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function nb(e,r){switch(Dd(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Hi(ke),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return Hn(r),null;case 13:if(Yi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Zo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ct(Ue),null;case 4:return Me(),null;case 10:return Hi(r.type),null;case 22:case 23:return Yi(r),qd(),e!==null&&ct($a),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Hi(ke),null;case 25:return null;default:return null}}function $y(e,r){switch(Dd(r),r.tag){case 3:Hi(ke),Me();break;case 26:case 27:case 5:Hn(r);break;case 4:Me();break;case 13:Yi(r);break;case 19:ct(Ue);break;case 10:Hi(r.type);break;case 22:case 23:Yi(r),qd(),e!==null&&ct($a);break;case 24:Hi(ke)}}function ml(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,E=s.inst;l=f(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ee(r,r.return,b)}}function Vr(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=r;var D=s,G=b;try{G()}catch(et){ee(h,D,et)}}}l=l.next}while(l!==f)}}catch(et){ee(r,r.return,et)}}function By(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{j0(r,s)}catch(l){ee(e,e.return,l)}}}function Fy(e,r,s){s.props=Fa(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,r,l)}}function gl(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,r,h)}}function xi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,r,h)}else s.current=null}function Ky(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function _f(e,r,s){try{var l=e.stateNode;bb(l,e.type,s,r),l[He]=r}catch(h){ee(e,e.return,h)}}function qy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fr(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=jc));else if(l!==4&&(l===27&&Fr(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(wf(e,r,s),e=e.sibling;e!==null;)wf(e,r,s),e=e.sibling}function xc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&Fr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(xc(e,r,s),e=e.sibling;e!==null;)xc(e,r,s),e=e.sibling}function Hy(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Qe(r,l,s),r[_e]=e,r[He]=s}catch(f){ee(e,e.return,f)}}var Wi=!1,Te=!1,bf=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ib(e,r){if(e=e.containerInfo,Gf=kc,e=r0(e),_d(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var E=0,b=-1,D=-1,G=0,et=0,rt=e,Y=null;e:for(;;){for(var Q;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==f||l!==0&&rt.nodeType!==3||(D=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(Q=rt.firstChild)!==null;)Y=rt,rt=Q;for(;;){if(rt===e)break e;if(Y===s&&++G===h&&(b=E),Y===f&&++et===l&&(D=E),(Q=rt.nextSibling)!==null)break;rt=Y,Y=rt.parentNode}rt=Q}s=b===-1||D===-1?null:{start:b,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yf={focusedElem:e,selectionRange:s},kc=!1,Be=r;Be!==null;)if(r=Be,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,Be=e;else for(;Be!==null;){switch(r=Be,f=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Tt=Fa(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Wf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Be=e;break}Be=r.return}}function Yy(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:kr(e,s),l&4&&ml(5,s);break;case 1:if(kr(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=Fa(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&By(s),l&512&&gl(s,s.return);break;case 3:if(kr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{j0(e,r)}catch(E){ee(s,s.return,E)}}break;case 27:r===null&&l&4&&Hy(s);case 26:case 5:kr(e,s),r===null&&l&4&&Ky(s),l&512&&gl(s,s.return);break;case 12:kr(e,s);break;case 13:kr(e,s),l&4&&Wy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=db.bind(null,s),Cb(e,s))));break;case 22:if(l=s.memoizedState!==null||Wi,!l){r=r!==null&&r.memoizedState!==null||Te,h=Wi;var f=Te;Wi=l,(Te=r)&&!f?Ur(e,s,(s.subtreeFlags&8772)!==0):kr(e,s),Wi=h,Te=f}break;case 30:break;default:kr(e,s)}}function Qy(e){var r=e.alternate;r!==null&&(e.alternate=null,Qy(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&us(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Zi(e,r,s){for(s=s.child;s!==null;)Xy(e,r,s),s=s.sibling}function Xy(e,r,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(dr,s)}catch{}switch(s.tag){case 26:Te||xi(s,r),Zi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||xi(s,r);var l=ce,h=mn;Fr(s.type)&&(ce=s.stateNode,mn=!1),Zi(e,r,s),Sl(s.stateNode),ce=l,mn=h;break;case 5:Te||xi(s,r);case 6:if(l=ce,h=mn,ce=null,Zi(e,r,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ee(s,r,f)}else try{ce.removeChild(s.stateNode)}catch(f){ee(s,r,f)}break;case 18:ce!==null&&(mn?(e=ce,P1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ml(e)):P1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Zi(e,r,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Te||Vr(2,s,r),Te||Vr(4,s,r),Zi(e,r,s);break;case 1:Te||(xi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Fy(s,r,l)),Zi(e,r,s);break;case 21:Zi(e,r,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Zi(e,r,s),Te=l;break;default:Zi(e,r,s)}}function Wy(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(s){ee(r,r.return,s)}}function rb(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Gy),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Gy),r;default:throw Error(a(435,e.tag))}}function Tf(e,r){var s=rb(e);r.forEach(function(l){var h=fb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function bn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,E=r,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(Fr(b.type)){ce=b.stateNode,mn=!1;break t}break;case 5:ce=b.stateNode,mn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,mn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));Xy(f,E,h),ce=null,mn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Zy(r,e),r=r.sibling}var ei=null;function Zy(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(r,e),Tn(e),l&4&&(Vr(3,e,e.return),ml(3,e),Vr(5,e,e.return));break;case 1:bn(r,e),Tn(e),l&512&&(Te||s===null||xi(s,s.return)),l&64&&Wi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ei;if(bn(r,e),Tn(e),l&512&&(Te||s===null||xi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[xr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Qe(f,l,s),f[_e]=e,Ee(f),l=f;break t;case"link":var E=H1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(f=E[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;case"meta":if(E=H1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(f=E[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,Ee(f),l=f}e.stateNode=l}else G1(h,e.type,e.stateNode);else e.stateNode=q1(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?G1(h,e.type,e.stateNode):q1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&_f(e,e.memoizedProps,s.memoizedProps)}break;case 27:bn(r,e),Tn(e),l&512&&(Te||s===null||xi(s,s.return)),s!==null&&l&4&&_f(e,e.memoizedProps,s.memoizedProps);break;case 5:if(bn(r,e),Tn(e),l&512&&(Te||s===null||xi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Q){ee(e,e.return,Q)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,_f(e,h,s!==null?s.memoizedProps:h)),l&1024&&(bf=!0);break;case 6:if(bn(r,e),Tn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Q){ee(e,e.return,Q)}}break;case 3:if(Mc=null,h=ei,ei=Dc(r.containerInfo),bn(r,e),ei=h,Tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ml(r.containerInfo)}catch(Q){ee(e,e.return,Q)}bf&&(bf=!1,Jy(e));break;case 4:l=ei,ei=Dc(e.stateNode.containerInfo),bn(r,e),Tn(e),ei=l;break;case 12:bn(r,e),Tn(e);break;case 13:bn(r,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cf=fn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tf(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,G=Wi,et=Te;if(Wi=G||h,Te=et||D,bn(r,e),Te=et,Wi=G,Tn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||D||Wi||Te||Ka(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){D=s=r;try{if(f=D.stateNode,h)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=D.stateNode;var rt=D.memoizedProps.style,Y=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(Q){ee(D,D.return,Q)}}}else if(r.tag===6){if(s===null){D=r;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(Q){ee(D,D.return,Q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tf(e,s))));break;case 19:bn(r,e),Tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tf(e,l)));break;case 30:break;case 21:break;default:bn(r,e),Tn(e)}}function Tn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(qy(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=Ef(e);xc(e,f,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var b=Ef(e);xc(e,b,E);break;case 3:case 4:var D=s.stateNode.containerInfo,G=Ef(e);wf(e,G,D);break;default:throw Error(a(161))}}catch(et){ee(e,e.return,et)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Jy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Jy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function kr(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Yy(e,r.alternate,r),r=r.sibling}function Ka(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Vr(4,r,r.return),Ka(r);break;case 1:xi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Fy(r,r.return,s),Ka(r);break;case 27:Sl(r.stateNode);case 26:case 5:xi(r,r.return),Ka(r);break;case 22:r.memoizedState===null&&Ka(r);break;case 30:Ka(r);break;default:Ka(r)}e=e.sibling}}function Ur(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,f=r,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ur(h,f,s),ml(4,f);break;case 1:if(Ur(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(G){ee(l,l.return,G)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)I0(D[h],b)}catch(G){ee(l,l.return,G)}}s&&E&64&&By(f),gl(f,f.return);break;case 27:Hy(f);case 26:case 5:Ur(h,f,s),s&&l===null&&E&4&&Ky(f),gl(f,f.return);break;case 12:Ur(h,f,s);break;case 13:Ur(h,f,s),s&&E&4&&Wy(h,f);break;case 22:f.memoizedState===null&&Ur(h,f,s),gl(f,f.return);break;case 30:break;default:Ur(h,f,s)}r=r.sibling}}function Sf(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&el(s))}function Af(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&el(e))}function vi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)t1(e,r,s,l),r=r.sibling}function t1(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:vi(e,r,s,l),h&2048&&ml(9,r);break;case 1:vi(e,r,s,l);break;case 3:vi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&el(e)));break;case 12:if(h&2048){vi(e,r,s,l),e=r.stateNode;try{var f=r.memoizedProps,E=f.id,b=f.onPostCommit;typeof b=="function"&&b(E,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(r,r.return,D)}}else vi(e,r,s,l);break;case 13:vi(e,r,s,l);break;case 23:break;case 22:f=r.stateNode,E=r.alternate,r.memoizedState!==null?f._visibility&2?vi(e,r,s,l):yl(e,r):f._visibility&2?vi(e,r,s,l):(f._visibility|=2,ks(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Sf(E,r);break;case 24:vi(e,r,s,l),h&2048&&Af(r.alternate,r);break;default:vi(e,r,s,l)}}function ks(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=e,E=r,b=s,D=l,G=E.flags;switch(E.tag){case 0:case 11:case 15:ks(f,E,b,D,h),ml(8,E);break;case 23:break;case 22:var et=E.stateNode;E.memoizedState!==null?et._visibility&2?ks(f,E,b,D,h):yl(f,E):(et._visibility|=2,ks(f,E,b,D,h)),h&&G&2048&&Sf(E.alternate,E);break;case 24:ks(f,E,b,D,h),h&&G&2048&&Af(E.alternate,E);break;default:ks(f,E,b,D,h)}r=r.sibling}}function yl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:yl(s,l),h&2048&&Sf(l.alternate,l);break;case 24:yl(s,l),h&2048&&Af(l.alternate,l);break;default:yl(s,l)}r=r.sibling}}var xl=8192;function Us(e){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)e1(e),e=e.sibling}function e1(e){switch(e.tag){case 26:Us(e),e.flags&xl&&e.memoizedState!==null&&Fb(ei,e.memoizedState,e.memoizedProps);break;case 5:Us(e);break;case 3:case 4:var r=ei;ei=Dc(e.stateNode.containerInfo),Us(e),ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Us(e),xl=r):Us(e));break;default:Us(e)}}function n1(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function vl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Be=l,r1(l,e)}n1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i1(e),e=e.sibling}function i1(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&Vr(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,vc(e)):vl(e);break;default:vl(e)}}function vc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Be=l,r1(l,e)}n1(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Vr(8,r,r.return),vc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,vc(r));break;default:vc(r)}e=e.sibling}}function r1(e,r){for(;Be!==null;){var s=Be;switch(s.tag){case 0:case 11:case 15:Vr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Be=l;else t:for(s=e;Be!==null;){l=Be;var h=l.sibling,f=l.return;if(Qy(l),l===s){Be=null;break t}if(h!==null){h.return=f,Be=h;break t}Be=f}}}var ab={getCacheForType:function(e){var r=en(ke),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},sb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Vt=null,Lt=0,Xt=0,Sn=null,Pr=!1,Ps=!1,Rf=!1,Ji=0,xe=0,zr=0,qa=0,If=0,Ln=0,zs=0,_l=null,gn=null,jf=!1,Cf=0,_c=1/0,Ec=null,Lr=null,Ye=0,$r=null,Ls=null,$s=0,Df=0,Nf=null,a1=null,El=0,Mf=null;function An(){if((Qt&2)!==0&&Lt!==0)return Lt&-Lt;if(tt.T!==null){var e=Is;return e!==0?e:Lf()}return Vi()}function s1(){Ln===0&&(Ln=(Lt&536870912)===0||Kt?Do():536870912);var e=zn.current;return e!==null&&(e.flags|=32),Ln}function Rn(e,r,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Bs(e,0),Br(e,Lt,Ln,!1)),ve(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&(qa|=s),xe===4&&Br(e,Lt,Ln,!1)),_i(e))}function o1(e,r,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||pr(e,r),h=l?ub(e,r):kf(e,r,!0),f=l;do{if(h===0){Ps&&!l&&Br(e,r,0,!1);break}else{if(s=e.current.alternate,f&&!ob(s)){h=kf(e,r,!1),f=!1;continue}if(h===2){if(f=r,e.errorRecoveryDisabledLanes&f)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var b=e;h=_l;var D=b.current.memoizedState.isDehydrated;if(D&&(Bs(b,E).flags|=256),E=kf(b,E,!1),E!==2){if(Rf&&!D){b.errorRecoveryDisabledLanes|=f,qa|=f,h=4;break t}f=gn,gn=h,f!==null&&(gn===null?gn=f:gn.push.apply(gn,f))}h=E}if(f=!1,h!==2)continue}}if(h===1){Bs(e,0),Br(e,r,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Br(l,r,Ln,!Pr);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Cf+300-fn(),10<h)){if(Br(l,r,Ln,!Pr),Dn(l,0,!0)!==0)break t;l.timeoutHandle=k1(l1.bind(null,l,s,gn,Ec,jf,r,Ln,qa,zs,Pr,f,2,-0,0),h);break t}l1(l,s,gn,Ec,jf,r,Ln,qa,zs,Pr,f,0,-0,0)}}break}while(!0);_i(e)}function l1(e,r,s,l,h,f,E,b,D,G,et,rt,Y,Q){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:Bb},e1(r),rt=Kb(),rt!==null)){e.cancelPendingCommit=rt(m1.bind(null,e,r,f,s,l,h,E,b,D,et,1,Y,Q)),Br(e,f,E,!G);return}m1(e,r,f,s,l,h,E,b,D)}function ob(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Br(e,r,s,l){r&=~If,r&=~qa,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var f=31-ln(h),E=1<<f;l[f]=-1,h&=~E}s!==0&&gr(e,s,r)}function wc(){return(Qt&6)===0?(wl(0),!1):!0}function Of(){if(Vt!==null){if(Xt===0)var e=Vt.return;else e=Vt,qi=za=null,Xd(e),Os=null,dl=0,e=Vt;for(;e!==null;)$y(e.alternate,e),e=e.return;Vt=null}}function Bs(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Sb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Of(),re=e,Vt=s=Bi(e.current,null),Lt=r,Xt=0,Sn=null,Pr=!1,Ps=pr(e,r),Rf=!1,zs=Ln=If=qa=zr=xe=0,gn=_l=null,jf=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-ln(l),f=1<<h;r|=e[h],l&=~f}return Ji=r,Ku(),s}function u1(e,r){Mt=null,tt.H=uc,r===il||r===Ju?(r=A0(),Xt=3):r===b0?(r=A0(),Xt=4):Xt=r===Ry?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Sn=r,Vt===null&&(xe=1,pc(e,Vn(r,e.current)))}function c1(){var e=tt.H;return tt.H=uc,e===null?uc:e}function h1(){var e=tt.A;return tt.A=ab,e}function Vf(){xe=4,Pr||(Lt&4194048)!==Lt&&zn.current!==null||(Ps=!0),(zr&134217727)===0&&(qa&134217727)===0||re===null||Br(re,Lt,Ln,!1)}function kf(e,r,s){var l=Qt;Qt|=2;var h=c1(),f=h1();(re!==e||Lt!==r)&&(Ec=null,Bs(e,r)),r=!1;var E=xe;t:do try{if(Xt!==0&&Vt!==null){var b=Vt,D=Sn;switch(Xt){case 8:Of(),E=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var G=Xt;if(Xt=0,Sn=null,Fs(e,b,D,G),s&&Ps){E=0;break t}break;default:G=Xt,Xt=0,Sn=null,Fs(e,b,D,G)}}lb(),E=xe;break}catch(et){u1(e,et)}while(!0);return r&&e.shellSuspendCounter++,qi=za=null,Qt=l,tt.H=h,tt.A=f,Vt===null&&(re=null,Lt=0,Ku()),E}function lb(){for(;Vt!==null;)d1(Vt)}function ub(e,r){var s=Qt;Qt|=2;var l=c1(),h=h1();re!==e||Lt!==r?(Ec=null,_c=fn()+500,Bs(e,r)):Ps=pr(e,r);t:do try{if(Xt!==0&&Vt!==null){r=Vt;var f=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Fs(e,r,f,1);break;case 2:case 9:if(T0(f)){Xt=0,Sn=null,f1(r);break}r=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),_i(e)},f.then(r,r);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:T0(f)?(Xt=0,Sn=null,f1(r)):(Xt=0,Sn=null,Fs(e,r,f,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||Y1(E)){Xt=0,Sn=null;var D=b.sibling;if(D!==null)Vt=D;else{var G=b.return;G!==null?(Vt=G,bc(G)):Vt=null}break e}}Xt=0,Sn=null,Fs(e,r,f,5);break;case 6:Xt=0,Sn=null,Fs(e,r,f,6);break;case 8:Of(),xe=6;break t;default:throw Error(a(462))}}cb();break}catch(et){u1(e,et)}while(!0);return qi=za=null,tt.H=l,tt.A=h,Qt=s,Vt!==null?0:(re=null,Lt=0,Ku(),xe)}function cb(){for(;Vt!==null&&!ud();)d1(Vt)}function d1(e){var r=zy(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,r===null?bc(e):Vt=r}function f1(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=My(s,r,r.pendingProps,r.type,void 0,Lt);break;case 11:r=My(s,r,r.pendingProps,r.type.render,r.ref,Lt);break;case 5:Xd(r);default:$y(s,r),r=Vt=p0(r,Ji),r=zy(s,r,Ji)}e.memoizedProps=e.pendingProps,r===null?bc(e):Vt=r}function Fs(e,r,s,l){qi=za=null,Xd(r),Os=null,dl=0;var h=r.return;try{if(Jw(e,h,r,s,Lt)){xe=1,pc(e,Vn(s,e.current)),Vt=null;return}}catch(f){if(h!==null)throw Vt=h,f;xe=1,pc(e,Vn(s,e.current)),Vt=null;return}r.flags&32768?(Kt||l===1?e=!0:Ps||(Lt&536870912)!==0?e=!1:(Pr=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),p1(r,e)):bc(r)}function bc(e){var r=e;do{if((r.flags&32768)!==0){p1(r,Pr);return}e=r.return;var s=eb(r.alternate,r,Ji);if(s!==null){Vt=s;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);xe===0&&(xe=5)}function p1(e,r){do{var s=nb(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function m1(e,r,s,l,h,f,E,b,D){e.cancelPendingCommit=null;do Tc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Sd,Ru(e,s,f,E,b,D),e===re&&(Vt=re=null,Lt=0),Ls=r,$r=e,$s=s,Df=f,Nf=h,a1=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pb(Oi,function(){return _1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=tt.T,tt.T=null,h=dt.p,dt.p=2,E=Qt,Qt|=4;try{ib(e,r,s)}finally{Qt=E,dt.p=h,tt.T=l}}Ye=1,g1(),y1(),x1()}}function g1(){if(Ye===1){Ye=0;var e=$r,r=Ls,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null;var l=dt.p;dt.p=2;var h=Qt;Qt|=4;try{Zy(r,e);var f=Yf,E=r0(e.containerInfo),b=f.focusedElem,D=f.selectionRange;if(E!==b&&b&&b.ownerDocument&&i0(b.ownerDocument.documentElement,b)){if(D!==null&&_d(b)){var G=D.start,et=D.end;if(et===void 0&&(et=G),"selectionStart"in b)b.selectionStart=G,b.selectionEnd=Math.min(et,b.value.length);else{var rt=b.ownerDocument||document,Y=rt&&rt.defaultView||window;if(Y.getSelection){var Q=Y.getSelection(),Tt=b.textContent.length,Et=Math.min(D.start,Tt),te=D.end===void 0?Et:Math.min(D.end,Tt);!Q.extend&&Et>te&&(E=te,te=Et,Et=E);var $=n0(b,Et),U=n0(b,te);if($&&U&&(Q.rangeCount!==1||Q.anchorNode!==$.node||Q.anchorOffset!==$.offset||Q.focusNode!==U.node||Q.focusOffset!==U.offset)){var K=rt.createRange();K.setStart($.node,$.offset),Q.removeAllRanges(),Et>te?(Q.addRange(K),Q.extend(U.node,U.offset)):(K.setEnd(U.node,U.offset),Q.addRange(K))}}}}for(rt=[],Q=b;Q=Q.parentNode;)Q.nodeType===1&&rt.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}kc=!!Gf,Yf=Gf=null}finally{Qt=h,dt.p=l,tt.T=s}}e.current=r,Ye=2}}function y1(){if(Ye===2){Ye=0;var e=$r,r=Ls,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=tt.T,tt.T=null;var l=dt.p;dt.p=2;var h=Qt;Qt|=4;try{Yy(e,r.alternate,r)}finally{Qt=h,dt.p=l,tt.T=s}}Ye=3}}function x1(){if(Ye===4||Ye===3){Ye=0,jo();var e=$r,r=Ls,s=$s,l=a1;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ye=5:(Ye=0,Ls=$r=null,v1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Lr=null),Mo(s),r=r.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(dr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=tt.T,h=dt.p,dt.p=2,tt.T=null;try{for(var f=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];f(b.value,{componentStack:b.stack})}}finally{tt.T=r,dt.p=h}}($s&3)!==0&&Tc(),_i(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Mf?El++:(El=0,Mf=e):El=0,wl(0)}}function v1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,el(r)))}function Tc(e){return g1(),y1(),x1(),_1()}function _1(){if(Ye!==5)return!1;var e=$r,r=Df;Df=0;var s=Mo($s),l=tt.T,h=dt.p;try{dt.p=32>s?32:s,tt.T=null,s=Nf,Nf=null;var f=$r,E=$s;if(Ye=0,Ls=$r=null,$s=0,(Qt&6)!==0)throw Error(a(331));var b=Qt;if(Qt|=4,i1(f.current),t1(f,f.current,E,s),Qt=b,wl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(dr,f)}catch{}return!0}finally{dt.p=h,tt.T=l,v1(e,r)}}function E1(e,r,s){r=Vn(s,r),r=hf(e.stateNode,r,2),e=Dr(e,r,2),e!==null&&(ve(e,2),_i(e))}function ee(e,r,s){if(e.tag===3)E1(e,e,s);else for(;r!==null;){if(r.tag===3){E1(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Lr===null||!Lr.has(l))){e=Vn(s,e),s=Sy(2),l=Dr(r,s,2),l!==null&&(Ay(s,l,r,e),ve(l,2),_i(l));break}}r=r.return}}function Uf(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new sb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Rf=!0,h.add(s),e=hb.bind(null,e,r,s),r.then(e,e))}function hb(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(Lt&s)===s&&(xe===4||xe===3&&(Lt&62914560)===Lt&&300>fn()-Cf?(Qt&2)===0&&Bs(e,0):If|=s,zs===Lt&&(zs=0)),_i(e)}function w1(e,r){r===0&&(r=mr()),e=Ts(e,r),e!==null&&(ve(e,r),_i(e))}function db(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),w1(e,s)}function fb(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),w1(e,s)}function pb(e,r){return ca(e,r)}var Sc=null,Ks=null,Pf=!1,Ac=!1,zf=!1,Ha=0;function _i(e){e!==Ks&&e.next===null&&(Ks===null?Sc=Ks=e:Ks=Ks.next=e),Ac=!0,Pf||(Pf=!0,gb())}function wl(e,r){if(!zf&&Ac){zf=!0;do for(var s=!1,l=Sc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var E=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-ln(42|e)+1)-1,f&=h&~(E&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,A1(l,f))}else f=Lt,f=Dn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||pr(l,f)||(s=!0,A1(l,f));l=l.next}while(s);zf=!1}}function mb(){b1()}function b1(){Ac=Pf=!1;var e=0;Ha!==0&&(Tb()&&(e=Ha),Ha=0);for(var r=fn(),s=null,l=Sc;l!==null;){var h=l.next,f=T1(l,r);f===0?(l.next=null,s===null?Sc=h:s.next=h,h===null&&(Ks=s)):(s=l,(e!==0||(f&3)!==0)&&(Ac=!0)),l=h}wl(e)}function T1(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var E=31-ln(f),b=1<<E,D=h[E];D===-1?((b&s)===0||(b&l)!==0)&&(h[E]=os(b,r)):D<=r&&(e.expiredLanes|=b),f&=~b}if(r=re,s=Lt,s=Dn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ss(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||pr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&ss(l),Mo(s)){case 2:case 8:s=ze;break;case 32:s=Oi;break;case 268435456:s=Co;break;default:s=Oi}return l=S1.bind(null,e),s=ca(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&ss(l),e.callbackPriority=2,e.callbackNode=null,2}function S1(e,r){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Tc()&&e.callbackNode!==s)return null;var l=Lt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(o1(e,l,r),T1(e,fn()),e.callbackNode!=null&&e.callbackNode===s?S1.bind(null,e):null)}function A1(e,r){if(Tc())return null;o1(e,r,!0)}function gb(){Ab(function(){(Qt&6)!==0?ca(Oe,mb):b1()})}function Lf(){return Ha===0&&(Ha=Do()),Ha}function R1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function I1(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function yb(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=R1((h[He]||null).action),E=l.submitter;E&&(r=(r=E[He]||null)?R1(r.formAction):E.getAttribute("formAction"),r!==null&&(f=r,E=null));var b=new Sa("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ha!==0){var D=E?I1(h,E):new FormData(h);sf(s,{pending:!0,data:D,method:h.method,action:f},null,D)}}else typeof f=="function"&&(b.preventDefault(),D=E?I1(h,E):new FormData(h),sf(s,{pending:!0,data:D,method:h.method,action:f},f,D))},currentTarget:h}]})}}for(var $f=0;$f<Td.length;$f++){var Bf=Td[$f],xb=Bf.toLowerCase(),vb=Bf[0].toUpperCase()+Bf.slice(1);ti(xb,"on"+vb)}ti(o0,"onAnimationEnd"),ti(l0,"onAnimationIteration"),ti(u0,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(kw,"onTransitionRun"),ti(Uw,"onTransitionStart"),ti(Pw,"onTransitionCancel"),ti(c0,"onTransitionEnd"),di("onMouseEnter",["mouseout","mouseover"]),di("onMouseLeave",["mouseout","mouseover"]),di("onPointerEnter",["pointerout","pointerover"]),di("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function j1(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(r)for(var E=l.length-1;0<=E;E--){var b=l[E],D=b.instance,G=b.currentTarget;if(b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=G;try{f(h)}catch(et){fc(et)}h.currentTarget=null,f=D}else for(E=0;E<l.length;E++){if(b=l[E],D=b.instance,G=b.currentTarget,b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=G;try{f(h)}catch(et){fc(et)}h.currentTarget=null,f=D}}}}function kt(e,r){var s=r[da];s===void 0&&(s=r[da]=new Set);var l=e+"__bubble";s.has(l)||(C1(r,e,2,!1),s.add(l))}function Ff(e,r,s){var l=0;r&&(l|=4),C1(s,e,l,r)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[Rc]){e[Rc]=!0,Iu.forEach(function(s){s!=="selectionchange"&&(_b.has(s)||Ff(s,!1,e),Ff(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Rc]||(r[Rc]=!0,Ff("selectionchange",!1,r))}}function C1(e,r,s,l){switch(tx(r)){case 2:var h=Gb;break;case 8:h=Yb;break;default:h=rp}s=h.bind(null,r,s,e),h=void 0,!Li||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function qf(e,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=ui(b),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=f=E;continue t}b=b.parentNode}}l=l.return}wa(function(){var G=f,et=Lo(s),rt=[];t:{var Y=h0.get(e);if(Y!==void 0){var Q=Sa,Tt=e;switch(e){case"keypress":if(ba(s)===0)break t;case"keydown":case"keyup":Q=_s;break;case"focusin":Tt="focus",Q=ys;break;case"focusout":Tt="blur",Q=ys;break;case"beforeblur":case"afterblur":Q=ys;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Rr;break;case o0:case l0:case u0:Q=Bo;break;case c0:Q=x;break;case"scroll":case"scrollend":Q=Ra;break;case"wheel":Q=A;break;case"copy":case"cut":case"paste":Q=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=qo;break;case"toggle":case"beforetoggle":Q=X}var Et=(r&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),$=Et?Y!==null?Y+"Capture":null:Y;Et=[];for(var U=G,K;U!==null;){var nt=U;if(K=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||K===null||$===null||(nt=Sr(U,$),nt!=null&&Et.push(Tl(U,nt,K))),te)break;U=U.return}0<Et.length&&(Y=new Q(Y,Tt,null,s,et),rt.push({event:Y,listeners:Et}))}}if((r&7)===0){t:{if(Y=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",Y&&s!==zo&&(Tt=s.relatedTarget||s.fromElement)&&(ui(Tt)||Tt[ki]))break t;if((Q||Y)&&(Y=et.window===et?et:(Y=et.ownerDocument)?Y.defaultView||Y.parentWindow:window,Q?(Tt=s.relatedTarget||s.toElement,Q=G,Tt=Tt?ui(Tt):null,Tt!==null&&(te=u(Tt),Et=Tt.tag,Tt!==te||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(Q=null,Tt=G),Q!==Tt)){if(Et=Ca,nt="onMouseLeave",$="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Et=qo,nt="onPointerLeave",$="onPointerEnter",U="pointer"),te=Q==null?Y:vr(Q),K=Tt==null?Y:vr(Tt),Y=new Et(nt,U+"leave",Q,s,et),Y.target=te,Y.relatedTarget=K,nt=null,ui(et)===G&&(Et=new Et($,U+"enter",Tt,s,et),Et.target=K,Et.relatedTarget=te,nt=Et),te=nt,Q&&Tt)e:{for(Et=Q,$=Tt,U=0,K=Et;K;K=qs(K))U++;for(K=0,nt=$;nt;nt=qs(nt))K++;for(;0<U-K;)Et=qs(Et),U--;for(;0<K-U;)$=qs($),K--;for(;U--;){if(Et===$||$!==null&&Et===$.alternate)break e;Et=qs(Et),$=qs($)}Et=null}else Et=null;Q!==null&&D1(rt,Y,Q,Et,!1),Tt!==null&&te!==null&&D1(rt,te,Tt,Et,!0)}}t:{if(Y=G?vr(G):window,Q=Y.nodeName&&Y.nodeName.toLowerCase(),Q==="select"||Q==="input"&&Y.type==="file")var mt=Xg;else if(Yg(Y))if(Wg)mt=Mw;else{mt=Dw;var Ot=Cw}else Q=Y.nodeName,!Q||Q.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?G&&ps(G.elementType)&&(mt=Xg):mt=Nw;if(mt&&(mt=mt(e,G))){Qg(rt,mt,s,et);break t}Ot&&Ot(e,Y,G),e==="focusout"&&G&&Y.type==="number"&&G.memoizedProps.value!=null&&ko(Y,"number",Y.value)}switch(Ot=G?vr(G):window,e){case"focusin":(Yg(Ot)||Ot.contentEditable==="true")&&(Es=Ot,Ed=G,Xo=null);break;case"focusout":Xo=Ed=Es=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,a0(rt,s,et);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":a0(rt,s,et)}var xt;if(Rt)t:{switch(e){case"compositionstart":var wt="onCompositionStart";break t;case"compositionend":wt="onCompositionEnd";break t;case"compositionupdate":wt="onCompositionUpdate";break t}wt=void 0}else Jn?Wn(e,s)&&(wt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(we&&s.locale!=="ko"&&(Jn||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Jn&&(xt=Ou()):(On=et,ie="value"in On?On.value:On.textContent,Jn=!0)),Ot=Ic(G,wt),0<Ot.length&&(wt=new Ko(wt,e,null,s,et),rt.push({event:wt,listeners:Ot}),xt?wt.data=xt:(xt=Zn(s),xt!==null&&(wt.data=xt)))),(xt=Yt?Ho(e,s):Rw(e,s))&&(wt=Ic(G,"onBeforeInput"),0<wt.length&&(Ot=new Ko("onBeforeInput","beforeinput",null,s,et),rt.push({event:Ot,listeners:wt}),Ot.data=xt)),yb(rt,e,G,s,et)}j1(rt,r)})}function Tl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Ic(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Sr(e,s),h!=null&&l.unshift(Tl(e,h,f)),h=Sr(e,r),h!=null&&l.push(Tl(e,h,f))),e.tag===3)return l;e=e.return}return[]}function qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D1(e,r,s,l,h){for(var f=r._reactName,E=[];s!==null&&s!==l;){var b=s,D=b.alternate,G=b.stateNode;if(b=b.tag,D!==null&&D===l)break;b!==5&&b!==26&&b!==27||G===null||(D=G,h?(G=Sr(s,f),G!=null&&E.unshift(Tl(s,G,D))):h||(G=Sr(s,f),G!=null&&E.push(Tl(s,G,D)))),s=s.return}E.length!==0&&e.push({event:r,listeners:E})}var Eb=/\r\n?/g,wb=/\u0000|\uFFFD/g;function N1(e){return(typeof e=="string"?e:""+e).replace(Eb,`
`).replace(wb,"")}function M1(e,r){return r=N1(r),N1(e)===r}function jc(){}function Jt(e,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Mn(e,""+l);break;case"className":ya(e,"class",l);break;case"tabIndex":ya(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ya(e,s,l);break;case"style":Po(e,l,f);break;case"data":if(r!=="object"){ya(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&Jt(e,r,"name",h.name,h,null),Jt(e,r,"formEncType",h.formEncType,h,null),Jt(e,r,"formMethod",h.formMethod,h,null),Jt(e,r,"formTarget",h.formTarget,h,null)):(Jt(e,r,"encType",h.encType,h,null),Jt(e,r,"method",h.method,h,null),Jt(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Xn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=jc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),ga(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ga(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Du.get(s)||s,ga(e,s,l))}}function Hf(e,r,s,l,h,f){switch(s){case"style":Po(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pa.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=e[He]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ga(e,s,l)}}}function Qe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var E=s[f];if(E!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,f,E,s,null)}}h&&Jt(e,r,"srcSet",s.srcSet,s,null),l&&Jt(e,r,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=f=E=h=null,D=null,G=null;for(l in s)if(s.hasOwnProperty(l)){var et=s[l];if(et!=null)switch(l){case"name":h=et;break;case"type":E=et;break;case"checked":D=et;break;case"defaultChecked":G=et;break;case"value":f=et;break;case"defaultValue":b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,r));break;default:Jt(e,r,l,et,s,null)}}Vo(e,f,b,D,G,E,h,!1),wr(e);return;case"select":kt("invalid",e),l=E=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Jt(e,r,h,b,s,null)}r=f,s=E,e.multiple=!!l,r!=null?br(e,!!l,r,!1):s!=null&&br(e,!!l,s,!0);return;case"textarea":kt("invalid",e),f=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Jt(e,r,E,b,s,null)}Cu(e,l,h,f),wr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,r,D,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<bl.length;l++)kt(bl[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,G,l,s,null)}return;default:if(ps(r)){for(et in s)s.hasOwnProperty(et)&&(l=s[et],l!==void 0&&Hf(e,r,et,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Jt(e,r,b,l,s,null))}function bb(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,E=null,b=null,D=null,G=null,et=null;for(Q in s){var rt=s[Q];if(s.hasOwnProperty(Q)&&rt!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":D=rt;default:l.hasOwnProperty(Q)||Jt(e,r,Q,null,l,rt)}}for(var Y in l){var Q=l[Y];if(rt=s[Y],l.hasOwnProperty(Y)&&(Q!=null||rt!=null))switch(Y){case"type":f=Q;break;case"name":h=Q;break;case"checked":G=Q;break;case"defaultChecked":et=Q;break;case"value":E=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:Q!==rt&&Jt(e,r,Y,Q,l,rt)}}Oo(e,E,b,D,G,et,f,h);return;case"select":Q=E=b=Y=null;for(f in s)if(D=s[f],s.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":Q=D;default:l.hasOwnProperty(f)||Jt(e,r,f,null,l,D)}for(h in l)if(f=l[h],D=s[h],l.hasOwnProperty(h)&&(f!=null||D!=null))switch(h){case"value":Y=f;break;case"defaultValue":b=f;break;case"multiple":E=f;default:f!==D&&Jt(e,r,h,f,l,D)}r=b,s=E,l=Q,Y!=null?br(e,!!s,Y,!1):!!l!=!!s&&(r!=null?br(e,!!s,r,!0):br(e,!!s,s?[]:"",!1));return;case"textarea":Q=Y=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(e,r,b,null,l,h)}for(E in l)if(h=l[E],f=s[E],l.hasOwnProperty(E)&&(h!=null||f!=null))switch(E){case"value":Y=h;break;case"defaultValue":Q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Jt(e,r,E,h,l,f)}ju(e,Y,Q);return;case"option":for(var Tt in s)if(Y=s[Tt],s.hasOwnProperty(Tt)&&Y!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jt(e,r,Tt,null,l,Y)}for(D in l)if(Y=l[D],Q=s[D],l.hasOwnProperty(D)&&Y!==Q&&(Y!=null||Q!=null))switch(D){case"selected":e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Jt(e,r,D,Y,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)Y=s[Et],s.hasOwnProperty(Et)&&Y!=null&&!l.hasOwnProperty(Et)&&Jt(e,r,Et,null,l,Y);for(G in l)if(Y=l[G],Q=s[G],l.hasOwnProperty(G)&&Y!==Q&&(Y!=null||Q!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:Jt(e,r,G,Y,l,Q)}return;default:if(ps(r)){for(var te in s)Y=s[te],s.hasOwnProperty(te)&&Y!==void 0&&!l.hasOwnProperty(te)&&Hf(e,r,te,void 0,l,Y);for(et in l)Y=l[et],Q=s[et],!l.hasOwnProperty(et)||Y===Q||Y===void 0&&Q===void 0||Hf(e,r,et,Y,l,Q);return}}for(var $ in s)Y=s[$],s.hasOwnProperty($)&&Y!=null&&!l.hasOwnProperty($)&&Jt(e,r,$,null,l,Y);for(rt in l)Y=l[rt],Q=s[rt],!l.hasOwnProperty(rt)||Y===Q||Y==null&&Q==null||Jt(e,r,rt,Y,l,Q)}var Gf=null,Yf=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function O1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Qf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xf=null;function Tb(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var k1=typeof setTimeout=="function"?setTimeout:void 0,Sb=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,Ab=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(e){return U1.resolve(null).then(e).catch(Rb)}:k1;function Rb(e){setTimeout(function(){throw e})}function Fr(e){return e==="head"}function P1(e,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Sl(E.documentElement),s&2&&Sl(E.body),s&4)for(s=E.head,Sl(s),E=s.firstChild;E;){var b=E.nextSibling,D=E.nodeName;E[xr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(f),Ml(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Ml(r)}function Wf(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Wf(s),us(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Ib(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[xr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ni(e.nextSibling),e===null)break}return null}function jb(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ni(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cb(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ni(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Jf=null;function z1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function L1(e,r,s){switch(r=Cc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Sl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);us(e)}var $n=new Map,$1=new Set;function Dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tr=dt.d;dt.d={f:Db,r:Nb,D:Mb,C:Ob,L:Vb,m:kb,X:Pb,S:Ub,M:zb};function Db(){var e=tr.f(),r=wc();return e||r}function Nb(e){var r=ci(e);r!==null&&r.tag===5&&r.type==="form"?oy(r):tr.r(e)}var Hs=typeof document>"u"?null:document;function B1(e,r,s){var l=Hs;if(l&&typeof r=="string"&&r){var h=Le(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),$1.has(h)||($1.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Qe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function Mb(e){tr.D(e),B1("dns-prefetch",e,null)}function Ob(e,r){tr.C(e,r),B1("preconnect",e,r)}function Vb(e,r,s){tr.L(e,r,s);var l=Hs;if(l&&e&&r){var h='link[rel="preload"][as="'+Le(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Le(s.imageSizes)+'"]')):h+='[href="'+Le(e)+'"]';var f=h;switch(r){case"style":f=Gs(e);break;case"script":f=Ys(e)}$n.has(f)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),$n.set(f,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Al(f))||r==="script"&&l.querySelector(Rl(f))||(r=l.createElement("link"),Qe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function kb(e,r){tr.m(e,r);var s=Hs;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Le(l)+'"][href="'+Le(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ys(e)}if(!$n.has(f)&&(e=v({rel:"modulepreload",href:e},r),$n.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Rl(f)))return}l=s.createElement("link"),Qe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function Ub(e,r,s){tr.S(e,r,s);var l=Hs;if(l&&e){var h=_r(l).hoistableStyles,f=Gs(e);r=r||"default";var E=h.get(f);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(Al(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=$n.get(f))&&tp(e,s);var D=E=l.createElement("link");Ee(D),Qe(D,"link",e),D._p=new Promise(function(G,et){D.onload=G,D.onerror=et}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nc(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(f,E)}}}function Pb(e,r){tr.X(e,r);var s=Hs;if(s&&e){var l=_r(s).hoistableScripts,h=Ys(e),f=l.get(h);f||(f=s.querySelector(Rl(h)),f||(e=v({src:e,async:!0},r),(r=$n.get(h))&&ep(e,r),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function zb(e,r){tr.M(e,r);var s=Hs;if(s&&e){var l=_r(s).hoistableScripts,h=Ys(e),f=l.get(h);f||(f=s.querySelector(Rl(h)),f||(e=v({src:e,async:!0,type:"module"},r),(r=$n.get(h))&&ep(e,r),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function F1(e,r,s,l){var h=(h=_t.current)?Dc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Gs(s.href),s=_r(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Gs(s.href);var f=_r(h).hoistableStyles,E=f.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,E),(f=h.querySelector(Al(e)))&&!f._p&&(E.instance=f,E.state.loading=5),$n.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},$n.set(e,s),f||Lb(h,e,s,E.state))),r&&l===null)throw Error(a(528,""));return E}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ys(s),s=_r(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Gs(e){return'href="'+Le(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function K1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Lb(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Qe(r,"link",s),Ee(r),e.head.appendChild(r))}function Ys(e){return'[src="'+Le(e)+'"]'}function Rl(e){return"script[async]"+e}function q1(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+Le(s.href)+'"]');if(l)return r.instance=l,Ee(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Qe(l,"style",h),Nc(l,s.precedence,e),r.instance=l;case"stylesheet":h=Gs(s.href);var f=e.querySelector(Al(h));if(f)return r.state.loading|=4,r.instance=f,Ee(f),f;l=K1(s),(h=$n.get(h))&&tp(l,h),f=(e.ownerDocument||e).createElement("link"),Ee(f);var E=f;return E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",l),r.state.loading|=4,Nc(f,s.precedence,e),r.instance=f;case"script":return f=Ys(s.src),(h=e.querySelector(Rl(f)))?(r.instance=h,Ee(h),h):(l=s,(h=$n.get(f))&&(l=v({},s),ep(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Qe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Nc(l,s.precedence,e));return r.instance}function Nc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function tp(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function ep(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Mc=null;function H1(e,r,s){if(Mc===null){var l=new Map,h=Mc=new Map;h.set(s,l)}else h=Mc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[xr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(r)||"";E=e+E;var b=l.get(E);b?b.push(f):l.set(E,[f])}}return l}function G1(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function $b(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Y1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Il=null;function Bb(){}function Fb(e,r,s){if(Il===null)throw Error(a(475));var l=Il;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Gs(s.href),f=e.querySelector(Al(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Oc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=f,Ee(f);return}f=e.ownerDocument||e,s=K1(s),(h=$n.get(h))&&tp(s,h),f=f.createElement("link"),Ee(f);var E=f;E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Oc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function Kb(){if(Il===null)throw Error(a(475));var e=Il;return e.stylesheets&&e.count===0&&np(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&np(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Oc(){if(this.count--,this.count===0){if(this.stylesheets)np(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function np(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,r.forEach(qb,e),Vc=null,Oc.call(e))}function qb(e,r){if(!(r.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var E=h[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=r.instance,E=h.getAttribute("data-precedence"),f=s.get(E)||l,f===l&&s.set(null,h),s.set(E,h),this.count++,l=Oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var jl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Hb(e,r,s,l,h,f,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Q1(e,r,s,l,h,f,E,b,D,G,et,rt){return e=new Hb(e,r,s,E,b,D,G,rt),r=1,f===!0&&(r|=24),f=wn(3,null,null,r),e.current=f,f.stateNode=e,r=kd(),r.refCount++,e.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},Ld(f),e}function X1(e){return e?(e=Ss,e):Ss}function W1(e,r,s,l,h,f){h=X1(h),l.context===null?l.context=h:l.pendingContext=h,l=Cr(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Dr(e,l,r),s!==null&&(Rn(s,e,r),al(s,e,r))}function Z1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function ip(e,r){Z1(e,r),(e=e.alternate)&&Z1(e,r)}function J1(e){if(e.tag===13){var r=Ts(e,67108864);r!==null&&Rn(r,e,67108864),ip(e,67108864)}}var kc=!0;function Gb(e,r,s,l){var h=tt.T;tt.T=null;var f=dt.p;try{dt.p=2,rp(e,r,s,l)}finally{dt.p=f,tt.T=h}}function Yb(e,r,s,l){var h=tt.T;tt.T=null;var f=dt.p;try{dt.p=8,rp(e,r,s,l)}finally{dt.p=f,tt.T=h}}function rp(e,r,s,l){if(kc){var h=ap(l);if(h===null)qf(e,r,l,Uc,s),ex(e,l);else if(Xb(h,e,r,s,l))l.stopPropagation();else if(ex(e,l),r&4&&-1<Qb.indexOf(e)){for(;h!==null;){var f=ci(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Gn(f.pendingLanes);if(E!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var D=1<<31-ln(E);b.entanglements[1]|=D,E&=~D}_i(f),(Qt&6)===0&&(_c=fn()+500,wl(0))}}break;case 13:b=Ts(f,2),b!==null&&Rn(b,f,2),wc(),ip(f,2)}if(f=ap(l),f===null&&qf(e,r,l,Uc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else qf(e,r,l,null,s)}}function ap(e){return e=Lo(e),sp(e)}var Uc=null;function sp(e){if(Uc=null,e=ui(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=d(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Uc=e,null}function tx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tu()){case Oe:return 2;case ze:return 8;case Oi:case cd:return 32;case Co:return 268435456;default:return 32}default:return 32}}var op=!1,Kr=null,qr=null,Hr=null,Cl=new Map,Dl=new Map,Gr=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(e,r){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(r.pointerId)}}function Nl(e,r,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&J1(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function Xb(e,r,s,l,h){switch(r){case"focusin":return Kr=Nl(Kr,e,r,s,l,h),!0;case"dragenter":return qr=Nl(qr,e,r,s,l,h),!0;case"mouseover":return Hr=Nl(Hr,e,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Nl(Cl.get(f)||null,e,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,Dl.set(f,Nl(Dl.get(f)||null,e,r,s,l,h)),!0}return!1}function nx(e){var r=ui(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){e.blockedOn=r,fd(e.priority,function(){if(s.tag===13){var l=An();l=No(l);var h=Ts(s,l);h!==null&&Rn(h,s,l),ip(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=ap(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);zo=l,s.target.dispatchEvent(l),zo=null}else return r=ci(s),r!==null&&J1(r),e.blockedOn=s,!1;r.shift()}return!0}function ix(e,r,s){Pc(e)&&s.delete(r)}function Wb(){op=!1,Kr!==null&&Pc(Kr)&&(Kr=null),qr!==null&&Pc(qr)&&(qr=null),Hr!==null&&Pc(Hr)&&(Hr=null),Cl.forEach(ix),Dl.forEach(ix)}function zc(e,r){e.blockedOn===r&&(e.blockedOn=null,op||(op=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Wb)))}var Lc=null;function rx(e){Lc!==e&&(Lc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(sp(l||s)===null)continue;break}var f=ci(s);f!==null&&(e.splice(r,3),r-=3,sf(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Ml(e){function r(D){return zc(D,e)}Kr!==null&&zc(Kr,e),qr!==null&&zc(qr,e),Hr!==null&&zc(Hr,e),Cl.forEach(r),Dl.forEach(r);for(var s=0;s<Gr.length;s++){var l=Gr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Gr.length&&(s=Gr[0],s.blockedOn===null);)nx(s),s.blockedOn===null&&Gr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],E=h[He]||null;if(typeof f=="function")E||rx(s);else if(E){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,E=f[He]||null)b=E.formAction;else if(sp(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),rx(s)}}}function lp(e){this._internalRoot=e}$c.prototype.render=lp.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=An();W1(s,l,e,r,null,null)},$c.prototype.unmount=lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;W1(e.current,2,null,e,null,null),wc(),r[ki]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var r=Vi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Gr.length&&r!==0&&r<Gr[s].priority;s++);Gr.splice(s,0,e),s===0&&nx(e)}};var ax=t.version;if(ax!=="19.1.1")throw Error(a(527,ax,"19.1.1"));dt.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Zb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:tt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{dr=Bc.inject(Zb),Je=Bc}catch{}}return Ul.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=Ey,f=wy,E=by,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=Q1(e,1,!1,null,null,s,l,h,f,E,b,null),e[ki]=r.current,Kf(e),new lp(r)},Ul.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=Ey,E=wy,b=by,D=null,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(G=s.formState)),r=Q1(e,1,!0,r,s??null,l,h,f,E,b,D,G),r.context=X1(null),s=r.current,l=An(),l=No(l),h=Cr(l),h.callback=null,Dr(s,h,l),s=l,r.current.lanes=s,ve(r,s),_i(r),e[ki]=r.current,Kf(e),new $c(r)},Ul.version="19.1.1",Ul}var D_;function K9(){if(D_)return Gp.exports;D_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Gp.exports=F9(),Gp.exports}var q9=K9();function H9(){const n=Di(),t=DT();return At.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const i=document.getElementById("main");i&&i.focus({preventScroll:!0})},[n,t]),null}function G9({headerMode:n,setHeaderMode:t}){const i=B.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Di(),o=B.useMemo(()=>{const d=a.pathname.replace(/^\/+/,"");if(!d)return;const p=d.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(p)?p:void 0},[a.pathname]),u=o==="showroom";return y.jsxs(y.Fragment,{children:[y.jsx(_2,{items:i,activeKey:o,mode:n,autoOnScroll:n===he.GRADIENT_DARK||n===he.DARK,scrollThreshold:8,sticky:!0,overlay:n===he.GRADIENT_DARK||n===he.DARK,maxWidth:1280,onModeChange:t}),y.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:y.jsx(XT,{})}),!u&&y.jsx(E2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function Y9({setHeaderMode:n}){return At.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(OA,{})}function Q9({setHeaderMode:n}){return At.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(yR,{})}function X9({setHeaderMode:n}){return At.useEffect(()=>{n(he.GRADIENT)},[n]),y.jsx(PC,{})}function W9({setHeaderMode:n}){return At.useEffect(()=>{n(he.GRADIENT_DARK)},[n]),y.jsx(RD,{})}function Z9({setHeaderMode:n}){return At.useEffect(()=>{n(he.DARK)},[n]),y.jsx(zN,{})}function J9({setHeaderMode:n}){return At.useEffect(()=>{n(he.LIGHT)},[n]),y.jsx(j9,{})}function tM({setHeaderMode:n}){return At.useEffect(()=>{n(he.DARK)},[n]),y.jsx(L9,{})}function eM(){const[n,t]=B.useState(he.GRADIENT);return y.jsxs(ES,{basename:"/TU2025gradulate/",children:[y.jsx(H9,{}),y.jsx(ZT,{children:y.jsxs(wi,{element:y.jsx(G9,{headerMode:n,setHeaderMode:t}),children:[y.jsx(wi,{index:!0,element:y.jsx(W9,{setHeaderMode:t})}),y.jsx(wi,{path:"projects/",element:y.jsx(X9,{setHeaderMode:t})}),y.jsx(wi,{path:"peoples/",element:y.jsx(Q9,{setHeaderMode:t})}),y.jsx(wi,{path:"guestbook/",element:y.jsx(Z9,{setHeaderMode:t})}),y.jsx(wi,{path:"work/:pid",element:y.jsx(J9,{setHeaderMode:t})}),y.jsx(wi,{path:"credits/",element:y.jsx(Y9,{setHeaderMode:t})}),y.jsx(wi,{path:"showroom/",element:y.jsx(tM,{setHeaderMode:t})}),y.jsx(wi,{path:"*",element:y.jsx(QT,{to:"/",replace:!0})})]})})]})}const N_=typeof document<"u"?document.getElementById("root"):null;N_&&q9.createRoot(N_).render(y.jsx(eM,{}));
