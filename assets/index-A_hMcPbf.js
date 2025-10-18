(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=r(o);fetch(o.href,u)}})();function m_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ap={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function Ow(){if(Y1)return jl;Y1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return jl.Fragment=t,jl.jsx=r,jl.jsxs=r,jl}var Q1;function Vw(){return Q1||(Q1=1,ap.exports=Ow()),ap.exports}var x=Vw(),sp={exports:{}},jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function kw(){if(X1)return jt;X1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function A(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function P(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}P.prototype.isReactComponent={},P.prototype.setState=function(V,at){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,at,"setState")},P.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function G(){}G.prototype=P.prototype;function X(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}var et=X.prototype=new G;et.constructor=X,O(et,P.prototype),et.isPureReactComponent=!0;var ct=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function C(V,at,lt,ut,gt,Ct){return lt=Ct.ref,{$$typeof:n,type:V,key:at,ref:lt!==void 0?lt:null,props:Ct}}function I(V,at){return C(V.type,at,void 0,void 0,void 0,V.props)}function j(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function M(V){var at={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(lt){return at[lt]})}var k=/\/+/g;function z(V,at){return typeof V=="object"&&V!==null&&V.key!=null?M(""+V.key):at.toString(36)}function N(){}function ue(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(N,N):(V.status="pending",V.then(function(at){V.status==="pending"&&(V.status="fulfilled",V.value=at)},function(at){V.status==="pending"&&(V.status="rejected",V.reason=at)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function ne(V,at,lt,ut,gt){var Ct=typeof V;(Ct==="undefined"||Ct==="boolean")&&(V=null);var _t=!1;if(V===null)_t=!0;else switch(Ct){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(V.$$typeof){case n:case t:_t=!0;break;case v:return _t=V._init,ne(_t(V._payload),at,lt,ut,gt)}}if(_t)return gt=gt(V),_t=ut===""?"."+z(V,0):ut,ct(gt)?(lt="",_t!=null&&(lt=_t.replace(k,"$&/")+"/"),ne(gt,at,lt,"",function(Me){return Me})):gt!=null&&(j(gt)&&(gt=I(gt,lt+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ut===""?".":ut+":";if(ct(V))for(var zt=0;zt<V.length;zt++)ut=V[zt],Ct=ge+z(ut,zt),_t+=ne(ut,at,lt,Ct,gt);else if(zt=A(V),typeof zt=="function")for(V=zt.call(V),zt=0;!(ut=V.next()).done;)ut=ut.value,Ct=ge+z(ut,zt++),_t+=ne(ut,at,lt,Ct,gt);else if(Ct==="object"){if(typeof V.then=="function")return ne(ue(V),at,lt,ut,gt);throw at=String(V),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function J(V,at,lt){if(V==null)return V;var ut=[],gt=0;return ne(V,ut,"","",function(Ct){return at.call(lt,Ct,gt++)}),ut}function ht(V){if(V._status===-1){var at=V._result;at=at(),at.then(function(lt){(V._status===0||V._status===-1)&&(V._status=1,V._result=lt)},function(lt){(V._status===0||V._status===-1)&&(V._status=2,V._result=lt)}),V._status===-1&&(V._status=0,V._result=at)}if(V._status===1)return V._result.default;throw V._result}var yt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function It(){}return jt.Children={map:J,forEach:function(V,at,lt){J(V,function(){at.apply(this,arguments)},lt)},count:function(V){var at=0;return J(V,function(){at++}),at},toArray:function(V){return J(V,function(at){return at})||[]},only:function(V){if(!j(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},jt.Component=P,jt.Fragment=r,jt.Profiler=o,jt.PureComponent=X,jt.StrictMode=a,jt.Suspense=m,jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,jt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return Z.H.useMemoCache(V)}},jt.cache=function(V){return function(){return V.apply(null,arguments)}},jt.cloneElement=function(V,at,lt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ut=O({},V.props),gt=V.key,Ct=void 0;if(at!=null)for(_t in at.ref!==void 0&&(Ct=void 0),at.key!==void 0&&(gt=""+at.key),at)!ft.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ut[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ut.children=lt;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];ut.children=ge}return C(V.type,gt,void 0,void 0,Ct,ut)},jt.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},jt.createElement=function(V,at,lt){var ut,gt={},Ct=null;if(at!=null)for(ut in at.key!==void 0&&(Ct=""+at.key),at)ft.call(at,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(gt[ut]=at[ut]);var _t=arguments.length-2;if(_t===1)gt.children=lt;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];gt.children=ge}if(V&&V.defaultProps)for(ut in _t=V.defaultProps,_t)gt[ut]===void 0&&(gt[ut]=_t[ut]);return C(V,Ct,void 0,void 0,null,gt)},jt.createRef=function(){return{current:null}},jt.forwardRef=function(V){return{$$typeof:p,render:V}},jt.isValidElement=j,jt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:ht}},jt.memo=function(V,at){return{$$typeof:g,type:V,compare:at===void 0?null:at}},jt.startTransition=function(V){var at=Z.T,lt={};Z.T=lt;try{var ut=V(),gt=Z.S;gt!==null&&gt(lt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(It,yt)}catch(Ct){yt(Ct)}finally{Z.T=at}},jt.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},jt.use=function(V){return Z.H.use(V)},jt.useActionState=function(V,at,lt){return Z.H.useActionState(V,at,lt)},jt.useCallback=function(V,at){return Z.H.useCallback(V,at)},jt.useContext=function(V){return Z.H.useContext(V)},jt.useDebugValue=function(){},jt.useDeferredValue=function(V,at){return Z.H.useDeferredValue(V,at)},jt.useEffect=function(V,at,lt){var ut=Z.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ut.useEffect(V,at)},jt.useId=function(){return Z.H.useId()},jt.useImperativeHandle=function(V,at,lt){return Z.H.useImperativeHandle(V,at,lt)},jt.useInsertionEffect=function(V,at){return Z.H.useInsertionEffect(V,at)},jt.useLayoutEffect=function(V,at){return Z.H.useLayoutEffect(V,at)},jt.useMemo=function(V,at){return Z.H.useMemo(V,at)},jt.useOptimistic=function(V,at){return Z.H.useOptimistic(V,at)},jt.useReducer=function(V,at,lt){return Z.H.useReducer(V,at,lt)},jt.useRef=function(V){return Z.H.useRef(V)},jt.useState=function(V){return Z.H.useState(V)},jt.useSyncExternalStore=function(V,at,lt){return Z.H.useSyncExternalStore(V,at,lt)},jt.useTransition=function(){return Z.H.useTransition()},jt.version="19.1.1",jt}var W1;function Tm(){return W1||(W1=1,sp.exports=kw()),sp.exports}var q=Tm();const Dt=m_(q);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Z1="popstate";function Uw(n={}){function t(a,o){let{pathname:u,search:d,hash:p}=a.location;return Lp("",{pathname:u,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:Yl(o)}return zw(t,r,null,n)}function he(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ii(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pw(){return Math.random().toString(36).substring(2,10)}function J1(n,t){return{usr:n.state,key:n.key,idx:t}}function Lp(n,t,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?fo(t):t,state:r,key:t&&t.key||a||Pw()}}function Yl({pathname:n="/",search:t="",hash:r=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function fo(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function zw(n,t,r,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function w(){p="POP";let P=v(),G=P==null?null:P-g;g=P,m&&m({action:p,location:B.location,delta:G})}function A(P,G){p="PUSH";let X=Lp(B.location,P,G);g=v()+1;let et=J1(X,g),ct=B.createHref(X);try{d.pushState(et,"",ct)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;o.location.assign(ct)}u&&m&&m({action:p,location:B.location,delta:1})}function R(P,G){p="REPLACE";let X=Lp(B.location,P,G);g=v();let et=J1(X,g),ct=B.createHref(X);d.replaceState(et,"",ct),u&&m&&m({action:p,location:B.location,delta:0})}function O(P){return Lw(P)}let B={get action(){return p},get location(){return n(o,d)},listen(P){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Z1,w),m=P,()=>{o.removeEventListener(Z1,w),m=null}},createHref(P){return t(o,P)},createURL:O,encodeLocation(P){let G=O(P);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:A,replace:R,go(P){return d.go(P)}};return B}function Lw(n,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),he(r,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Yl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function g_(n,t,r="/"){return Bw(n,t,r,!1)}function Bw(n,t,r,a){let o=typeof t=="string"?fo(t):t,u=ir(o.pathname||"/",r);if(u==null)return null;let d=y_(n);$w(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=Jw(u);p=Ww(d[m],g,a)}return p}function y_(n,t=[],r=[],a="",o=!1){let u=(d,p,m=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;he(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=tr([a,v.relativePath]),A=r.concat(v);d.children&&d.children.length>0&&(he(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),y_(d.children,t,A,w,m)),!(d.path==null&&!d.index)&&t.push({path:w,score:Qw(w,d.index),routesMeta:A})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of x_(d.path))u(d,p,!0,m)}),t}function x_(n){let t=n.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=x_(a.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function $w(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:Xw(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Fw=/^:[\w-]+$/,Kw=3,qw=2,Hw=1,Gw=10,Yw=-2,tx=n=>n==="*";function Qw(n,t){let r=n.split("/"),a=r.length;return r.some(tx)&&(a+=Yw),t&&(a+=qw),r.filter(o=>!tx(o)).reduce((o,u)=>o+(Fw.test(u)?Kw:u===""?Hw:Gw),a)}function Xw(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function Ww(n,t,r=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),A=m.route;if(!w&&g&&r&&!a[a.length-1].route.index&&(w=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),d.push({params:o,pathname:tr([u,w.pathname]),pathnameBase:iT(tr([u,w.pathnameBase])),route:A}),w.pathnameBase!=="/"&&(u=tr([u,w.pathnameBase]))}return d}function ph(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=Zw(n.path,n.caseSensitive,n.end),o=t.match(r);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},A)=>{if(v==="*"){let O=p[A]||"";d=u.slice(0,u.length-O.length).replace(/(.)\/+$/,"$1")}const R=p[A];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function Zw(n,t=!1,r=!0){ii(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Jw(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ir(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function tT(n,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof n=="string"?fo(n):n;return{pathname:r?r.startsWith("/")?r:eT(r,t):t,search:rT(a),hash:aT(o)}}function eT(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function op(n,t,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nT(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Am(n){let t=nT(n);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function Sm(n,t,r,a=!1){let o;typeof n=="string"?o=fo(n):(o={...n},he(!o.pathname||!o.pathname.includes("?"),op("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),op("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),op("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,p;if(d==null)p=r;else{let w=t.length-1;if(!a&&d.startsWith("..")){let A=d.split("/");for(;A[0]==="..";)A.shift(),w-=1;o.pathname=A.join("/")}p=w>=0?t[w]:"/"}let m=tT(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var tr=n=>n.join("/").replace(/\/\/+/g,"/"),iT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),rT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,aT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function sT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var v_=["POST","PUT","PATCH","DELETE"];new Set(v_);var oT=["GET",...v_];new Set(oT);var po=q.createContext(null);po.displayName="DataRouter";var Oh=q.createContext(null);Oh.displayName="DataRouterState";q.createContext(!1);var __=q.createContext({isTransitioning:!1});__.displayName="ViewTransition";var lT=q.createContext(new Map);lT.displayName="Fetchers";var uT=q.createContext(null);uT.displayName="Await";var ai=q.createContext(null);ai.displayName="Navigation";var mo=q.createContext(null);mo.displayName="Location";var Kn=q.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var Rm=q.createContext(null);Rm.displayName="RouteError";function cT(n,{relative:t}={}){he(go(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=q.useContext(ai),{hash:o,pathname:u,search:d}=lu(n,{relative:t}),p=u;return r!=="/"&&(p=u==="/"?r:tr([r,u])),a.createHref({pathname:p,search:d,hash:o})}function go(){return q.useContext(mo)!=null}function Ii(){return he(go(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(mo).location}function hT(){return q.useContext(mo).navigationType}var E_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function b_(n){q.useContext(ai).static||q.useLayoutEffect(n)}function Im(){let{isDataRoute:n}=q.useContext(Kn);return n?RT():dT()}function dT(){he(go(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(po),{basename:t,navigator:r}=q.useContext(ai),{matches:a}=q.useContext(Kn),{pathname:o}=Ii(),u=JSON.stringify(Am(a)),d=q.useRef(!1);return b_(()=>{d.current=!0}),q.useCallback((m,g={})=>{if(ii(d.current,E_),!d.current)return;if(typeof m=="number"){r.go(m);return}let v=Sm(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:tr([t,v.pathname])),(g.replace?r.replace:r.push)(v,g.state,g)},[t,r,u,o,n])}var fT=q.createContext(null);function pT(n){let t=q.useContext(Kn).outlet;return t&&q.createElement(fT.Provider,{value:n},t)}function mT(){let{matches:n}=q.useContext(Kn),t=n[n.length-1];return t?t.params:{}}function lu(n,{relative:t}={}){let{matches:r}=q.useContext(Kn),{pathname:a}=Ii(),o=JSON.stringify(Am(r));return q.useMemo(()=>Sm(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function gT(n,t){return w_(n,t)}function w_(n,t,r,a,o){he(go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=q.useContext(ai),{matches:d}=q.useContext(Kn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",w=p&&p.route;{let X=w&&w.path||"";T_(g,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let A=Ii(),R;if(t){let X=typeof t=="string"?fo(t):t;he(v==="/"||X.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=A;let O=R.pathname||"/",B=O;if(v!=="/"){let X=v.replace(/^\//,"").split("/");B="/"+O.replace(/^\//,"").split("/").slice(X.length).join("/")}let P=g_(n,{pathname:B});ii(w||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=ET(P&&P.map(X=>Object.assign({},X,{params:Object.assign({},m,X.params),pathname:tr([v,u.encodeLocation?u.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?v:tr([v,u.encodeLocation?u.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),d,r,a,o);return t&&G?q.createElement(mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},G):G}function yT(){let n=ST(),t=sT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),r?q.createElement("pre",{style:o},r):null,d)}var xT=q.createElement(yT,null),vT=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?q.createElement(Kn.Provider,{value:this.props.routeContext},q.createElement(Rm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _T({routeContext:n,match:t,children:r}){let a=q.useContext(po);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Kn.Provider,{value:n},r)}function ET(n,t=[],r=null,a=null,o=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let u=n,d=r?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(r)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:w,errors:A}=r,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!A||A[v.route.id]===void 0);if(v.route.lazy||R){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let A,R=!1,O=null,B=null;r&&(A=d&&v.route.id?d[v.route.id]:void 0,O=v.route.errorElement||xT,p&&(m<0&&w===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,B=null):m===w&&(R=!0,B=v.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,w+1)),G=()=>{let X;return A?X=O:R?X=B:v.route.Component?X=q.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=g,q.createElement(_T,{match:v,routeContext:{outlet:g,matches:P,isDataRoute:r!=null},children:X})};return r&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?q.createElement(vT,{location:r.location,revalidation:r.revalidation,component:O,error:A,children:G(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):G()},null)}function Cm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bT(n){let t=q.useContext(po);return he(t,Cm(n)),t}function wT(n){let t=q.useContext(Oh);return he(t,Cm(n)),t}function TT(n){let t=q.useContext(Kn);return he(t,Cm(n)),t}function jm(n){let t=TT(n),r=t.matches[t.matches.length-1];return he(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function AT(){return jm("useRouteId")}function ST(){let n=q.useContext(Rm),t=wT("useRouteError"),r=jm("useRouteError");return n!==void 0?n:t.errors?.[r]}function RT(){let{router:n}=bT("useNavigate"),t=jm("useNavigate"),r=q.useRef(!1);return b_(()=>{r.current=!0}),q.useCallback(async(o,u={})=>{ii(r.current,E_),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var ex={};function T_(n,t,r){!t&&!ex[n]&&(ex[n]=!0,ii(!1,r))}q.memo(IT);function IT({routes:n,future:t,state:r,unstable_onError:a}){return w_(n,void 0,r,a,t)}function CT({to:n,replace:t,state:r,relative:a}){he(go(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(ai);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=q.useContext(Kn),{pathname:d}=Ii(),p=Im(),m=Sm(n,Am(u),d,a==="path"),g=JSON.stringify(m);return q.useEffect(()=>{p(JSON.parse(g),{replace:t,state:r,relative:a})},[p,g,a,t,r]),null}function jT(n){return pT(n.context)}function Zi(n){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DT({basename:n="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:u=!1}){he(!go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=q.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof r=="string"&&(r=fo(r));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:A="default"}=r,R=q.useMemo(()=>{let O=ir(m,d);return O==null?null:{location:{pathname:O,search:g,hash:v,state:w,key:A},navigationType:a}},[d,m,g,v,w,A,a]);return ii(R!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:q.createElement(ai.Provider,{value:p},q.createElement(mo.Provider,{children:t,value:R}))}function NT({children:n,location:t}){return gT(Bp(n),t)}function Bp(n,t=[]){let r=[];return q.Children.forEach(n,(a,o)=>{if(!q.isValidElement(a))return;let u=[...t,o];if(a.type===q.Fragment){r.push.apply(r,Bp(a.props.children,u));return}he(a.type===Zi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Bp(a.props.children,u)),r.push(d)}),r}var Wc="get",Zc="application/x-www-form-urlencoded";function Vh(n){return n!=null&&typeof n.tagName=="string"}function MT(n){return Vh(n)&&n.tagName.toLowerCase()==="button"}function OT(n){return Vh(n)&&n.tagName.toLowerCase()==="form"}function VT(n){return Vh(n)&&n.tagName.toLowerCase()==="input"}function kT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function UT(n,t){return n.button===0&&(!t||t==="_self")&&!kT(n)}var Pc=null;function PT(){if(Pc===null)try{new FormData(document.createElement("form"),0),Pc=!1}catch{Pc=!0}return Pc}var zT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lp(n){return n!=null&&!zT.has(n)?(ii(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):n}function LT(n,t){let r,a,o,u,d;if(OT(n)){let p=n.getAttribute("action");a=p?ir(p,t):null,r=n.getAttribute("method")||Wc,o=lp(n.getAttribute("enctype"))||Zc,u=new FormData(n)}else if(MT(n)||VT(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?ir(m,t):null,r=n.getAttribute("formmethod")||p.getAttribute("method")||Wc,o=lp(n.getAttribute("formenctype"))||lp(p.getAttribute("enctype"))||Zc,u=new FormData(p,n),!PT()){let{name:g,type:v,value:w}=n;if(v==="image"){let A=g?`${g}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else g&&u.append(g,w)}}else{if(Vh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Wc,a=null,o=Zc,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dm(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function BT(n,t,r){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${r}`:t&&ir(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function $T(n,t){if(n.id in t)return t[n.id];try{let r=await import(n.module);return t[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function KT(n,t,r){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await $T(u,r);return d.links?d.links():[]}return[]}));return YT(a.flat(1).filter(FT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function nx(n,t,r,a,o,u){let d=(m,g)=>r[g]?m.route.id!==r[g].route.id:!0,p=(m,g)=>r[g].pathname!==m.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,g)=>d(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function qT(n,t,{includeHydrateFallback:r}={}){return HT(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function HT(n){return[...new Set(n)]}function GT(n){let t={},r=Object.keys(n).sort();for(let a of r)t[a]=n[a];return t}function YT(n,t){let r=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(GT(o));return r.has(u)||(r.add(u),a.push({key:u,link:o})),a},[])}function A_(){let n=q.useContext(po);return Dm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function QT(){let n=q.useContext(Oh);return Dm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Nm=q.createContext(void 0);Nm.displayName="FrameworkContext";function S_(){let n=q.useContext(Nm);return Dm(n,"You must render this element inside a <HydratedRouter> element"),n}function XT(n,t){let r=q.useContext(Nm),[a,o]=q.useState(!1),[u,d]=q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,A=q.useRef(null);q.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let B=G=>{G.forEach(X=>{d(X.isIntersecting)})},P=new IntersectionObserver(B,{threshold:.5});return A.current&&P.observe(A.current),()=>{P.disconnect()}}},[n]),q.useEffect(()=>{if(a){let B=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(B)}}},[a]);let R=()=>{o(!0)},O=()=>{o(!1),d(!1)};return r?n!=="intent"?[u,A,{}]:[u,A,{onFocus:Dl(p,R),onBlur:Dl(m,O),onMouseEnter:Dl(g,R),onMouseLeave:Dl(v,O),onTouchStart:Dl(w,R)}]:[!1,A,{}]}function Dl(n,t){return r=>{n&&n(r),r.defaultPrevented||t(r)}}function WT({page:n,...t}){let{router:r}=A_(),a=q.useMemo(()=>g_(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?q.createElement(JT,{page:n,matches:a,...t}):null}function ZT(n){let{manifest:t,routeModules:r}=S_(),[a,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return KT(n,t,r).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,r]),a}function JT({page:n,matches:t,...r}){let a=Ii(),{manifest:o,routeModules:u}=S_(),{basename:d}=A_(),{loaderData:p,matches:m}=QT(),g=q.useMemo(()=>nx(n,t,m,o,a,"data"),[n,t,m,o,a]),v=q.useMemo(()=>nx(n,t,m,o,a,"assets"),[n,t,m,o,a]),w=q.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let O=new Set,B=!1;if(t.forEach(G=>{let X=o.routes[G.route.id];!X||!X.hasLoader||(!g.some(et=>et.route.id===G.route.id)&&G.route.id in p&&u[G.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:O.add(G.route.id))}),O.size===0)return[];let P=BT(n,d,"data");return B&&O.size>0&&P.searchParams.set("_routes",t.filter(G=>O.has(G.route.id)).map(G=>G.route.id).join(",")),[P.pathname+P.search]},[d,p,a,o,g,t,n,u]),A=q.useMemo(()=>qT(v,o),[v,o]),R=ZT(v);return q.createElement(q.Fragment,null,w.map(O=>q.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...r})),A.map(O=>q.createElement("link",{key:O,rel:"modulepreload",href:O,...r})),R.map(({key:O,link:B})=>q.createElement("link",{key:O,nonce:r.nonce,...B})))}function tA(...n){return t=>{n.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.9.1")}catch{}function eA({basename:n,children:t,window:r}){let a=q.useRef();a.current==null&&(a.current=Uw({window:r,v5Compat:!0}));let o=a.current,[u,d]=q.useState({action:o.action,location:o.location}),p=q.useCallback(m=>{q.startTransition(()=>d(m))},[d]);return q.useLayoutEffect(()=>o.listen(p),[o,p]),q.createElement(DT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var I_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yo=q.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:w,...A},R){let{basename:O}=q.useContext(ai),B=typeof g=="string"&&I_.test(g),P,G=!1;if(typeof g=="string"&&B&&(P=g,R_))try{let j=new URL(window.location.href),M=g.startsWith("//")?new URL(j.protocol+g):new URL(g),k=ir(M.pathname,O);M.origin===j.origin&&k!=null?g=k+M.search+M.hash:G=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=cT(g,{relative:o}),[et,ct,Z]=XT(a,A),ft=aA(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:w});function C(j){t&&t(j),j.defaultPrevented||ft(j)}let I=q.createElement("a",{...A,...Z,href:P||X,onClick:G||u?t:C,ref:tA(R,ct),target:m,"data-discover":!B&&r==="render"?"true":void 0});return et&&!B?q.createElement(q.Fragment,null,I,q.createElement(WT,{page:X})):I});yo.displayName="Link";var nA=q.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:p,children:m,...g},v){let w=lu(d,{relative:g.relative}),A=Ii(),R=q.useContext(Oh),{navigator:O,basename:B}=q.useContext(ai),P=R!=null&&cA(w)&&p===!0,G=O.encodeLocation?O.encodeLocation(w).pathname:w.pathname,X=A.pathname,et=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;r||(X=X.toLowerCase(),et=et?et.toLowerCase():null,G=G.toLowerCase()),et&&B&&(et=ir(et,B)||et);const ct=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let Z=X===G||!o&&X.startsWith(G)&&X.charAt(ct)==="/",ft=et!=null&&(et===G||!o&&et.startsWith(G)&&et.charAt(G.length)==="/"),C={isActive:Z,isPending:ft,isTransitioning:P},I=Z?t:void 0,j;typeof a=="function"?j=a(C):j=[a,Z?"active":null,ft?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(C):u;return q.createElement(yo,{...g,"aria-current":I,className:j,ref:v,style:M,to:d,viewTransition:p},typeof m=="function"?m(C):m)});nA.displayName="NavLink";var iA=q.forwardRef(({discover:n="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:u,method:d=Wc,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:w,...A},R)=>{let O=lA(),B=uA(p,{relative:g}),P=d.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&I_.test(p),X=et=>{if(m&&m(et),et.defaultPrevented)return;et.preventDefault();let ct=et.nativeEvent.submitter,Z=ct?.getAttribute("formmethod")||d;O(ct||et.currentTarget,{fetcherKey:t,method:Z,navigate:r,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return q.createElement("form",{ref:R,method:P,action:B,onSubmit:a?m:X,...A,"data-discover":!G&&n==="render"?"true":void 0})});iA.displayName="Form";function rA(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C_(n){let t=q.useContext(po);return he(t,rA(n)),t}function aA(n,{target:t,replace:r,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let p=Im(),m=Ii(),g=lu(n,{relative:u});return q.useCallback(v=>{if(UT(v,t)){v.preventDefault();let w=r!==void 0?r:Yl(m)===Yl(g);p(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[m,p,g,r,a,t,n,o,u,d])}var sA=0,oA=()=>`__${String(++sA)}__`;function lA(){let{router:n}=C_("useSubmit"),{basename:t}=q.useContext(ai),r=AT();return q.useCallback(async(a,o={})=>{let{action:u,method:d,encType:p,formData:m,body:g}=LT(a,t);if(o.navigate===!1){let v=o.fetcherKey||oA();await n.fetch(v,r,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,r])}function uA(n,{relative:t}={}){let{basename:r}=q.useContext(ai),a=q.useContext(Kn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...lu(n||".",{relative:t})},d=Ii();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:tr([r,u.pathname])),Yl(u)}function cA(n,{relative:t}={}){let r=q.useContext(__);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=C_("useViewTransitionState"),o=lu(n,{relative:t});if(!r.isTransitioning)return!1;let u=ir(r.currentLocation.pathname,a)||r.currentLocation.pathname,d=ir(r.nextLocation.pathname,a)||r.nextLocation.pathname;return ph(o.pathname,d)!=null||ph(o.pathname,u)!=null}var up={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function hA(){if(ix)return nn;ix=1;var n=Tm();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,v)},nn.flushSync=function(m){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=g,a.p=v,a.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:A,fetchPriority:R}):v==="script"&&a.d.X(m,{crossOrigin:w,integrity:A,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},nn.requestFormReset=function(m){a.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var rx;function dA(){if(rx)return up.exports;rx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),up.exports=hA(),up.exports}var cp={exports:{}},hp,ax;function fA(){if(ax)return hp;ax=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hp=n,hp}var dp,sx;function pA(){if(sx)return dp;sx=1;var n=fA();function t(){}function r(){}return r.resetWarningCache=t,dp=function(){function a(d,p,m,g,v,w){if(w!==n){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return u.PropTypes=u,u},dp}var ox;function mA(){return ox||(ox=1,cp.exports=pA()()),cp.exports}var gA=mA();const W=m_(gA);var vn=function(){return vn=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},vn.apply(this,arguments)};function mh(n,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var oe="-ms-",zl="-moz-",Ht="-webkit-",j_="comm",kh="rule",Mm="decl",yA="@import",D_="@keyframes",xA="@layer",N_=Math.abs,Om=String.fromCharCode,$p=Object.assign;function vA(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function M_(n){return n.trim()}function Ji(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,r){return n.replace(t,r)}function Jc(n,t,r){return n.indexOf(t,r)}function qe(n,t){return n.charCodeAt(t)|0}function to(n,t,r){return n.slice(t,r)}function Ei(n){return n.length}function O_(n){return n.length}function Ol(n,t){return t.push(n),n}function _A(n,t){return n.map(t).join("")}function lx(n,t){return n.filter(function(r){return!Ji(r,t)})}var Uh=1,eo=1,V_=0,Fn=0,je=0,xo="";function Ph(n,t,r,a,o,u,d,p){return{value:n,root:t,parent:r,type:a,props:o,children:u,line:Uh,column:eo,length:d,return:"",siblings:p}}function Gr(n,t){return $p(Ph("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function qs(n){for(;n.root;)n=Gr(n.root,{children:[n]});Ol(n,n.siblings)}function EA(){return je}function bA(){return je=Fn>0?qe(xo,--Fn):0,eo--,je===10&&(eo=1,Uh--),je}function ni(){return je=Fn<V_?qe(xo,Fn++):0,eo++,je===10&&(eo=1,Uh++),je}function Ga(){return qe(xo,Fn)}function th(){return Fn}function zh(n,t){return to(xo,n,t)}function Fp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wA(n){return Uh=eo=1,V_=Ei(xo=n),Fn=0,[]}function TA(n){return xo="",n}function fp(n){return M_(zh(Fn-1,Kp(n===91?n+2:n===40?n+1:n)))}function AA(n){for(;(je=Ga())&&je<33;)ni();return Fp(n)>2||Fp(je)>3?"":" "}function SA(n,t){for(;--t&&ni()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return zh(n,th()+(t<6&&Ga()==32&&ni()==32))}function Kp(n){for(;ni();)switch(je){case n:return Fn;case 34:case 39:n!==34&&n!==39&&Kp(je);break;case 40:n===41&&Kp(n);break;case 92:ni();break}return Fn}function RA(n,t){for(;ni()&&n+je!==57;)if(n+je===84&&Ga()===47)break;return"/*"+zh(t,Fn-1)+"*"+Om(n===47?n:ni())}function IA(n){for(;!Fp(Ga());)ni();return zh(n,Fn)}function CA(n){return TA(eh("",null,null,null,[""],n=wA(n),0,[0],n))}function eh(n,t,r,a,o,u,d,p,m){for(var g=0,v=0,w=d,A=0,R=0,O=0,B=1,P=1,G=1,X=0,et="",ct=o,Z=u,ft=a,C=et;P;)switch(O=X,X=ni()){case 40:if(O!=108&&qe(C,w-1)==58){Jc(C+=Nt(fp(X),"&","&\f"),"&\f",N_(g?p[g-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:C+=fp(X);break;case 9:case 10:case 13:case 32:C+=AA(O);break;case 92:C+=SA(th()-1,7);continue;case 47:switch(Ga()){case 42:case 47:Ol(jA(RA(ni(),th()),t,r,m),m);break;default:C+="/"}break;case 123*B:p[g++]=Ei(C)*G;case 125*B:case 59:case 0:switch(X){case 0:case 125:P=0;case 59+v:G==-1&&(C=Nt(C,/\f/g,"")),R>0&&Ei(C)-w&&Ol(R>32?cx(C+";",a,r,w-1,m):cx(Nt(C," ","")+";",a,r,w-2,m),m);break;case 59:C+=";";default:if(Ol(ft=ux(C,t,r,g,v,o,p,et,ct=[],Z=[],w,u),u),X===123)if(v===0)eh(C,t,ft,ft,ct,u,w,p,Z);else switch(A===99&&qe(C,3)===110?100:A){case 100:case 108:case 109:case 115:eh(n,ft,ft,a&&Ol(ux(n,ft,ft,0,0,o,p,et,o,ct=[],w,Z),Z),o,Z,w,p,a?ct:Z);break;default:eh(C,ft,ft,ft,[""],Z,0,p,Z)}}g=v=R=0,B=G=1,et=C="",w=d;break;case 58:w=1+Ei(C),R=O;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&bA()==125)continue}switch(C+=Om(X),X*B){case 38:G=v>0?1:(C+="\f",-1);break;case 44:p[g++]=(Ei(C)-1)*G,G=1;break;case 64:Ga()===45&&(C+=fp(ni())),A=Ga(),v=w=Ei(et=C+=IA(th())),X++;break;case 45:O===45&&Ei(C)==2&&(B=0)}}return u}function ux(n,t,r,a,o,u,d,p,m,g,v,w){for(var A=o-1,R=o===0?u:[""],O=O_(R),B=0,P=0,G=0;B<a;++B)for(var X=0,et=to(n,A+1,A=N_(P=d[B])),ct=n;X<O;++X)(ct=M_(P>0?R[X]+" "+et:Nt(et,/&\f/g,R[X])))&&(m[G++]=ct);return Ph(n,t,r,o===0?kh:p,m,g,v,w)}function jA(n,t,r,a){return Ph(n,t,r,j_,Om(EA()),to(n,2,-2),0,a)}function cx(n,t,r,a,o){return Ph(n,t,r,Mm,to(n,0,a),to(n,a+1,-1),a,o)}function k_(n,t,r){switch(vA(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return zl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+zl+n+oe+n+n;case 5936:switch(qe(n,t+11)){case 114:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+oe+n+n;case 6165:return Ht+n+oe+"flex-"+n+n;case 5187:return Ht+n+Nt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+oe+"flex-$1$2")+n;case 5443:return Ht+n+oe+"flex-item-"+Nt(n,/flex-|-self/g,"")+(Ji(n,/flex-|baseline/)?"":oe+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+oe+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+oe+Nt(n,"shrink","negative")+n;case 5292:return Ht+n+oe+Nt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Nt(n,"-grow","")+Ht+n+oe+Nt(n,"grow","positive")+n;case 4554:return Ht+Nt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!Ji(n,/flex-|baseline/))return oe+"grid-column-align"+to(n,t)+n;break;case 2592:case 3360:return oe+Nt(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,Ji(a.props,/grid-\w+-end/)})?~Jc(n+(r=r[t].value),"span",0)?n:oe+Nt(n,"-start","")+n+oe+"grid-row-span:"+(~Jc(r,"span",0)?Ji(r,/\d+/):+Ji(r,/\d+/)-+Ji(n,/\d+/))+";":oe+Nt(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return Ji(a.props,/grid-\w+-start/)})?n:oe+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ei(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+zl+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Jc(n,"stretch",0)?k_(Nt(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,p,m,g){return oe+o+":"+u+g+(d?oe+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Nt(n,":",":"+Ht)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(qe(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+oe+"$2box$3")+n;case 100:return Nt(n,":",":"+oe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function gh(n,t){for(var r="",a=0;a<n.length;a++)r+=t(n[a],a,n,t)||"";return r}function DA(n,t,r,a){switch(n.type){case xA:if(n.children.length)break;case yA:case Mm:return n.return=n.return||n.value;case j_:return"";case D_:return n.return=n.value+"{"+gh(n.children,a)+"}";case kh:if(!Ei(n.value=n.props.join(",")))return""}return Ei(r=gh(n.children,a))?n.return=n.value+"{"+r+"}":""}function NA(n){var t=O_(n);return function(r,a,o,u){for(var d="",p=0;p<t;p++)d+=n[p](r,a,o,u)||"";return d}}function MA(n){return function(t){t.root||(t=t.return)&&n(t)}}function OA(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case Mm:n.return=k_(n.value,n.length,r);return;case D_:return gh([Gr(n,{value:Nt(n.value,"@","@"+Ht)})],a);case kh:if(n.length)return _A(r=n.props,function(o){switch(Ji(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qs(Gr(n,{props:[Nt(o,/:(read-\w+)/,":"+zl+"$1")]})),qs(Gr(n,{props:[o]})),$p(n,{props:lx(r,a)});break;case"::placeholder":qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,":"+zl+"$1")]})),qs(Gr(n,{props:[Nt(o,/:(plac\w+)/,oe+"input-$1")]})),qs(Gr(n,{props:[o]})),$p(n,{props:lx(r,a)});break}return""})}}var VA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},In={},no=typeof process<"u"&&In!==void 0&&(In.REACT_APP_SC_ATTR||In.SC_ATTR)||"data-styled",U_="active",P_="data-styled-version",Lh="6.1.19",Vm=`/*!sc*/
`,yh=typeof window<"u"&&typeof document<"u",kA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==""?In.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&In.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.SC_DISABLE_SPEEDY!==void 0&&In.SC_DISABLE_SPEEDY!==""&&In.SC_DISABLE_SPEEDY!=="false"&&In.SC_DISABLE_SPEEDY),Bh=Object.freeze([]),io=Object.freeze({});function UA(n,t,r){return r===void 0&&(r=io),n.theme!==r.theme&&n.theme||t||r.theme}var z_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),PA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zA=/(^-|-$)/g;function hx(n){return n.replace(PA,"-").replace(zA,"")}var LA=/(a)(d)/gi,zc=52,dx=function(n){return String.fromCharCode(n+(n>25?39:97))};function qp(n){var t,r="";for(t=Math.abs(n);t>zc;t=t/zc|0)r=dx(t%zc)+r;return(dx(t%zc)+r).replace(LA,"$1-$2")}var pp,L_=5381,Xs=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},B_=function(n){return Xs(L_,n)};function BA(n){return qp(B_(n)>>>0)}function $A(n){return n.displayName||n.name||"Component"}function mp(n){return typeof n=="string"&&!0}var $_=typeof Symbol=="function"&&Symbol.for,F_=$_?Symbol.for("react.memo"):60115,FA=$_?Symbol.for("react.forward_ref"):60112,KA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HA=((pp={})[FA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pp[F_]=K_,pp);function fx(n){return("type"in(t=n)&&t.type.$$typeof)===F_?K_:"$$typeof"in n?HA[n.$$typeof]:KA;var t}var GA=Object.defineProperty,YA=Object.getOwnPropertyNames,px=Object.getOwnPropertySymbols,QA=Object.getOwnPropertyDescriptor,XA=Object.getPrototypeOf,mx=Object.prototype;function q_(n,t,r){if(typeof t!="string"){if(mx){var a=XA(t);a&&a!==mx&&q_(n,a,r)}var o=YA(t);px&&(o=o.concat(px(t)));for(var u=fx(n),d=fx(t),p=0;p<o.length;++p){var m=o[p];if(!(m in qA||r&&r[m]||d&&m in d||u&&m in u)){var g=QA(t,m);try{GA(n,m,g)}catch{}}}}return n}function ro(n){return typeof n=="function"}function km(n){return typeof n=="object"&&"styledComponentId"in n}function qa(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function gx(n,t){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Ql(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Hp(n,t,r){if(r===void 0&&(r=!1),!r&&!Ql(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Hp(n[a],t[a]);else if(Ql(t))for(var a in t)n[a]=Hp(n[a],t[a]);return n}function Um(n,t){Object.defineProperty(n,"toString",{value:t})}function uu(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var WA=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw uu(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(t+1),m=(d=0,r.length);d<m;d++)this.tag.insertRule(p,r[d])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)r+="".concat(this.tag.getRule(d)).concat(Vm);return r},n})(),nh=new Map,xh=new Map,ih=1,Lc=function(n){if(nh.has(n))return nh.get(n);for(;xh.has(ih);)ih++;var t=ih++;return nh.set(n,t),xh.set(t,n),t},ZA=function(n,t){ih=t+1,nh.set(n,t),xh.set(t,n)},JA="style[".concat(no,"][").concat(P_,'="').concat(Lh,'"]'),tS=new RegExp("^".concat(no,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eS=function(n,t,r){for(var a,o=r.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},nS=function(n,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(Vm),o=[],u=0,d=a.length;u<d;u++){var p=a[u].trim();if(p){var m=p.match(tS);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(ZA(v,g),eS(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},yx=function(n){for(var t=document.querySelectorAll(JA),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(no)!==U_&&(nS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function iS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H_=function(n){var t=document.head,r=n||t,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(no,"]")));return m[m.length-1]})(r),u=o!==void 0?o.nextSibling:null;a.setAttribute(no,U_),a.setAttribute(P_,Lh);var d=iS();return d&&a.setAttribute("nonce",d),r.insertBefore(a,u),a},rS=(function(){function n(t){this.element=H_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===r)return d}throw uu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n})(),aS=(function(){function n(t){this.element=H_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),sS=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),xx=yh,oS={isServer:!yh,useCSSOMInjection:!kA},G_=(function(){function n(t,r,a){t===void 0&&(t=io),r===void 0&&(r={});var o=this;this.options=vn(vn({},oS),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&yh&&xx&&(xx=!1,yx(this)),Um(this,function(){return(function(u){for(var d=u.getTag(),p=d.length,m="",g=function(w){var A=(function(G){return xh.get(G)})(w);if(A===void 0)return"continue";var R=u.names.get(A),O=d.getGroup(w);if(R===void 0||!R.size||O.length===0)return"continue";var B="".concat(no,".g").concat(w,'[id="').concat(A,'"]'),P="";R!==void 0&&R.forEach(function(G){G.length>0&&(P+="".concat(G,","))}),m+="".concat(O).concat(B,'{content:"').concat(P,'"}').concat(Vm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(t){return Lc(t)},n.prototype.rehydrate=function(){!this.server&&yh&&yx(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(vn(vn({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new sS(o):a?new rS(o):new aS(o)})(this.options),new WA(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(Lc(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},n.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Lc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Lc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),lS=/&/g,uS=/^\s*\/\/.*$/gm;function Y_(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Y_(r.children,t)),r})}function cS(n){var t,r,a,o=io,u=o.options,d=u===void 0?io:u,p=o.plugins,m=p===void 0?Bh:p,g=function(A,R,O){return O.startsWith(r)&&O.endsWith(r)&&O.replaceAll(r,"").length>0?".".concat(t):A},v=m.slice();v.push(function(A){A.type===kh&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(lS,r).replace(a,g))}),d.prefix&&v.push(OA),v.push(DA);var w=function(A,R,O,B){R===void 0&&(R=""),O===void 0&&(O=""),B===void 0&&(B="&"),t=B,r=R,a=new RegExp("\\".concat(r,"\\b"),"g");var P=A.replace(uS,""),G=CA(O||R?"".concat(O," ").concat(R," { ").concat(P," }"):P);d.namespace&&(G=Y_(G,d.namespace));var X=[];return gh(G,NA(v.concat(MA(function(et){return X.push(et)})))),X};return w.hash=m.length?m.reduce(function(A,R){return R.name||uu(15),Xs(A,R.name)},L_).toString():"",w}var hS=new G_,Gp=cS(),Q_=Dt.createContext({shouldForwardProp:void 0,styleSheet:hS,stylis:Gp});Q_.Consumer;Dt.createContext(void 0);function vx(){return q.useContext(Q_)}var dS=(function(){function n(t,r){var a=this;this.inject=function(o,u){u===void 0&&(u=Gp);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Um(this,function(){throw uu(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=Gp),this.name+t.hash},n})(),fS=function(n){return n>="A"&&n<="Z"};function _x(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;fS(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var X_=function(n){return n==null||n===!1||n===""},W_=function(n){var t,r,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!X_(u)&&(Array.isArray(u)&&u.isCss||ro(u)?a.push("".concat(_x(o),":"),u,";"):Ql(u)?a.push.apply(a,mh(mh(["".concat(o," {")],W_(u),!1),["}"],!1)):a.push("".concat(_x(o),": ").concat((t=o,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in VA||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function Ya(n,t,r,a){if(X_(n))return[];if(km(n))return[".".concat(n.styledComponentId)];if(ro(n)){if(!ro(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Ya(o,t,r,a)}var u;return n instanceof dS?r?(n.inject(r,a),[n.getName(a)]):[n]:Ql(n)?W_(n):Array.isArray(n)?Array.prototype.concat.apply(Bh,n.map(function(d){return Ya(d,t,r,a)})):[n.toString()]}function pS(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(ro(r)&&!km(r))return!1}return!0}var mS=B_(Lh),gS=(function(){function n(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&pS(t),this.componentId=r,this.baseHash=Xs(mS,r),this.baseStyle=a,G_.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=qa(o,this.staticRulesId);else{var u=gx(Ya(this.rules,t,r,a)),d=qp(Xs(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,d)){var p=a(u,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,p)}o=qa(o,d),this.staticRulesId=d}else{for(var m=Xs(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var A=gx(Ya(w,t,r,a));m=Xs(m,A+v),g+=A}}if(g){var R=qp(m>>>0);r.hasNameForId(this.componentId,R)||r.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=qa(o,R)}}return o},n})(),Z_=Dt.createContext(void 0);Z_.Consumer;var gp={};function yS(n,t,r){var a=km(n),o=n,u=!mp(n),d=t.attrs,p=d===void 0?Bh:d,m=t.componentId,g=m===void 0?(function(ct,Z){var ft=typeof ct!="string"?"sc":hx(ct);gp[ft]=(gp[ft]||0)+1;var C="".concat(ft,"-").concat(BA(Lh+ft+gp[ft]));return Z?"".concat(Z,"-").concat(C):C})(t.displayName,t.parentComponentId):m,v=t.displayName,w=v===void 0?(function(ct){return mp(ct)?"styled.".concat(ct):"Styled(".concat($A(ct),")")})(n):v,A=t.displayName&&t.componentId?"".concat(hx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,O=t.shouldForwardProp;if(a&&o.shouldForwardProp){var B=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;O=function(ct,Z){return B(ct,Z)&&P(ct,Z)}}else O=B}var G=new gS(r,A,a?o.componentStyle:void 0);function X(ct,Z){return(function(ft,C,I){var j=ft.attrs,M=ft.componentStyle,k=ft.defaultProps,z=ft.foldedComponentIds,N=ft.styledComponentId,ue=ft.target,ne=Dt.useContext(Z_),J=vx(),ht=ft.shouldForwardProp||J.shouldForwardProp,yt=UA(C,ne,k)||io,It=(function(Ct,_t,ge){for(var zt,Me=vn(vn({},_t),{className:void 0,theme:ge}),ji=0;ji<Ct.length;ji+=1){var qn=ro(zt=Ct[ji])?zt(Me):zt;for(var on in qn)Me[on]=on==="className"?qa(Me[on],qn[on]):on==="style"?vn(vn({},Me[on]),qn[on]):qn[on]}return _t.className&&(Me.className=qa(Me.className,_t.className)),Me})(j,C,yt),V=It.as||ue,at={};for(var lt in It)It[lt]===void 0||lt[0]==="$"||lt==="as"||lt==="theme"&&It.theme===yt||(lt==="forwardedAs"?at.as=It.forwardedAs:ht&&!ht(lt,V)||(at[lt]=It[lt]));var ut=(function(Ct,_t){var ge=vx(),zt=Ct.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return zt})(M,It),gt=qa(z,N);return ut&&(gt+=" "+ut),It.className&&(gt+=" "+It.className),at[mp(V)&&!z_.has(V)?"class":"className"]=gt,I&&(at.ref=I),q.createElement(V,at)})(et,ct,Z)}X.displayName=w;var et=Dt.forwardRef(X);return et.attrs=R,et.componentStyle=G,et.displayName=w,et.shouldForwardProp=O,et.foldedComponentIds=a?qa(o.foldedComponentIds,o.styledComponentId):"",et.styledComponentId=A,et.target=a?o.target:n,Object.defineProperty(et,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ct){this._foldedDefaultProps=a?(function(Z){for(var ft=[],C=1;C<arguments.length;C++)ft[C-1]=arguments[C];for(var I=0,j=ft;I<j.length;I++)Hp(Z,j[I],!0);return Z})({},o.defaultProps,ct):ct}}),Um(et,function(){return".".concat(et.styledComponentId)}),u&&q_(et,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),et}function Ex(n,t){for(var r=[n[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],n[a+1]);return r}var bx=function(n){return Object.assign(n,{isCss:!0})};function xS(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ro(n)||Ql(n))return bx(Ya(Ex(Bh,mh([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ya(a):bx(Ya(Ex(a,t)))}function Yp(n,t,r){if(r===void 0&&(r=io),!t)throw uu(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,r,xS.apply(void 0,mh([o],u,!1)))};return a.attrs=function(o){return Yp(n,t,vn(vn({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Yp(n,t,vn(vn({},r),o))},a}var J_=function(n){return Yp(yS,n)},S=J_;z_.forEach(function(n){S[n]=J_(n)});const yp=S.a`
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
`;function Pm({label:n,href:t="#",active:r=!1,onClick:a,style:o,target:u,rel:d}){const p="/TU2025gradulate/",m=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!m&&t&&(t.startsWith(p)?(g="/"+t.slice(p.length).replace(/^\/+/,""),v=!0):t.startsWith("/")&&(g=t,v=!0),t===p&&(g="/",v=!0));const A={"aria-current":r?"page":void 0,"data-active":r?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:r};return v?x.jsx(yp,{as:yo,to:g,...A,children:x.jsx("span",{className:"navbtn-text",children:n})}):t?x.jsx(yp,{href:t,target:u,rel:d,...A,children:x.jsx("span",{className:"navbtn-text",children:n})}):x.jsx(yp,{as:"button",type:"button",...A,style:{background:"none",border:0,...o},children:x.jsx("span",{className:"navbtn-text",children:n})})}Pm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const vS=({isOpen:n=!1,size:t=28,color:r="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:r,strokeWidth:o,strokeLinecap:"round"}),x.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:r,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("rect",{x:0,y:u-d-p/2,width:t,height:p,rx:m,fill:r}),x.jsx("rect",{x:0,y:u-p/2,width:t,height:p,rx:m,fill:r}),x.jsx("rect",{x:0,y:u+d-p/2,width:t,height:p,rx:m,fill:r})]})},pe=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),_S=S.header`
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
`,ES=S.div`
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
`,bS=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,wS=S.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,TS=S.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,AS=S.button`
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
`,SS=S.div`
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
`,RS=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,IS=S(Pm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,CS=S.div`
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
`,jS=S.div`
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
`;function t2({items:n=[],activeKey:t,mode:r,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:p,overlay:m=!1}){const[g,v]=q.useState(!1),[w,A]=q.useState(pe.GRADIENT),R=typeof r=="string",O=R?r:w,B=q.useRef(R?r:w);q.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(B.current=r)},[r,R,u]),q.useEffect(()=>{if(!o)return;const M=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=B.current||pe.GRADIENT_DARK,N=k>u?pe.DARK:z;R||A(N),a&&a(N)};return M(),window.addEventListener("scroll",M,{passive:!0}),()=>window.removeEventListener("scroll",M)},[o,R,a,u]);const{baseColor:P,gradient:G,textColor:X,boxShadow:et,showGradient:ct}=q.useMemo(()=>{switch(O){case pe.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case pe.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case pe.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[O]),C=O===pe.DARK||O===pe.GRADIENT_DARK||g,I=C?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",j=n.filter(M=>M.label!=="SHOWROOM");return q.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),x.jsxs(_S,{role:"banner",$sticky:d,$overlay:m,$baseColor:P,$gradient:G,$showGradient:ct,$textColor:X,$boxShadow:et,children:[x.jsx(ES,{$maxWidth:p,children:x.jsxs(bS,{children:[x.jsxs(wS,{children:[x.jsx(yo,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:x.jsx(CS,{"aria-hidden":!0,children:x.jsx(jS,{children:x.jsx("div",{style:{backgroundImage:`url(${I})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),x.jsx(TS,{"aria-label":"주 메뉴",children:n.map(M=>x.jsx(Pm,{label:M.label,href:M.href,active:M.key===t},M.key))})]}),x.jsx(AS,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(M=>!M),children:x.jsx(vS,{isOpen:g,size:24,color:C?"#fff":"#000"})})]})}),x.jsx(SS,{$open:g,onClick:()=>v(!1),children:x.jsx(RS,{onClick:M=>M.stopPropagation(),children:j.map(M=>x.jsx(IS,{label:M.label,href:M.href,active:M.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},M.key))})})]})}t2.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([pe.GRADIENT,pe.LIGHT,pe.DARK,pe.GRADIENT_DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,overlay:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const zm="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",DS=S.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,NS=S.div`
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
`,MS=S.div`
  font-family: ${zm};
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
`,OS=S.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${zm};
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
`,wx=S.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,VS=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${zm};
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
`,kS=S.div`
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
`,Tx=S.a`
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
`;function e2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:r=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return x.jsx(DS,{role:"contentinfo",children:x.jsxs(NS,{$sidePadding:u,$maxWidth:o,children:[x.jsx(MS,{children:n}),x.jsx(OS,{"aria-label":"푸터 메뉴",children:t.map(d=>{const p=d.href||"#",m=/^https?:\/\//i.test(p),g="/TU2025gradulate/";let v=p;return m||(p===g?v="/":p.startsWith(g)&&(v="/"+p.slice(g.length).replace(/^\/+/,""))),m?x.jsx(wx,{href:p,children:d.label},d.label):x.jsx(wx,{as:yo,to:v,children:d.label},d.label)})}),x.jsx(VS,{children:r.map((d,p)=>x.jsx("div",{children:d},p))}),x.jsxs(kS,{$sidePadding:u,children:[a?.youtube?.href&&x.jsx(Tx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:x.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&x.jsx(Tx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}e2.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const Ci="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",US=S.div`
  position: relative; background: #fff;
`,PS=S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function Ax({children:n}){return x.jsx(US,{children:x.jsx(PS,{children:n})})}const zS=S.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Ci}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 98px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,LS=S.div`
  font-family: ${Ci}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
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
`;function BS(){return x.jsxs(x.Fragment,{children:[x.jsx(zS,{children:"CREDITS"}),x.jsx(LS,{children:"잔향 : 기억의 향기"})]})}const $S=S.p`
  max-width: 374px;
  font-family: ${Ci};
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
`,FS=S.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,KS=S.div`
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
`,qS=S.div`
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
`,HS=S.div`
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
`,n2=S.div`
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
`;function GS({text:n}){return x.jsxs(FS,{children:[x.jsx(n2,{}),x.jsx(KS,{}),x.jsx($S,{dangerouslySetInnerHTML:{__html:n}})]})}const YS=S.div`
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
`,QS=S.div`
  width: 800px; height: 450px; background: #FFF4ED; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,XS=S.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${Ci};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;function WS({children:n}){return x.jsx(QS,{children:x.jsx(XS,{children:n})})}const ZS=S.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,JS=S.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,t4=S.div`
  font-family: ${Ci}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,e4=S.p`
  font-family: ${Ci}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function n4({blocks:n}){return x.jsxs(ZS,{children:[x.jsx(n2,{}),n.map(t=>x.jsxs(JS,{children:[x.jsx(t4,{children:t.title}),x.jsx(e4,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const i4=S.div`
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
`,r4=S.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,a4=S.div`
  font-family: ${Ci}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,s4=S.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function o4({title:n,rows:t,last:r=!1}){return x.jsxs(i4,{$last:r,children:[x.jsx(r4,{children:x.jsx(a4,{children:n})}),x.jsx(s4,{children:t.map((a,o)=>x.jsx(f4,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const l4=S.div`
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
`,u4=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,c4=S.div`
  font-family: ${Ci};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,h4=S.div`
  display: flex; align-items: center;
`,d4=S.div`
  font-family: ${Ci};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function f4({ko:n,en:t,divider:r=!1}){return x.jsxs(l4,{$divider:r,children:[x.jsx(u4,{children:x.jsx(c4,{children:n})}),x.jsx(h4,{children:x.jsx(d4,{children:t})})]})}const p4=S.div`
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
`,m4=S.div`
  display: flex;
  position: relative;
  font-family: ${Ci};
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
`;function g4(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],r=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soyi"},{ko:"문나라",en:"Moon Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return x.jsxs("div",{style:{position:"relative"},children:[x.jsxs(Ax,{children:[x.jsx(BS,{}),x.jsxs(YS,{children:[x.jsx(GS,{text:n}),x.jsx(WS,{children:"단체사진 1장"})]})]}),x.jsxs(Ax,{children:[x.jsx(n4,{blocks:t}),x.jsxs(p4,{children:[x.jsx(HS,{}),x.jsxs(m4,{children:[x.jsx(qS,{}),"2025 잔향",x.jsx("br",{}),"제 20대 졸업전시위원회"]}),r.map(a=>x.jsx(o4,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const y4=S.div`
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
`,x4=S.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,v4=S.img`
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
`,_4=S.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,E4=S.div`
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
`,Sx=S.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,b4=S.h1`
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
`,rh=S.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,w4=S(rh)`
 @media (max-width: 640px) {
    display: none;
 }`;function Lm({nameKor:n,nameEng:t,role:r,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return x.jsxs(y4,{children:[x.jsxs(x4,{children:[x.jsx(v4,{src:u,alt:d}),x.jsx(_4,{})]}),x.jsxs(E4,{children:[x.jsxs(Sx,{style:{top:"50px"},children:[x.jsx(b4,{children:n}),x.jsx(rh,{children:t})]}),x.jsxs(Sx,{children:[x.jsx(rh,{children:r}),typeof a=="string"&&a.trim()&&a!=="-"?x.jsx(rh,{children:a}):Array.isArray(a)&&a.length>0?x.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>x.jsx("span",{style:{wordBreak:"break-all"},children:p.handle||p.url},`${p.platform}-${m}`))}):"-",x.jsx(w4,{children:o?x.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}Lm.defaultProps={sns:[]};Lm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const T4=S.div`
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
`,A4=S.div`
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
`,i2=S.p`
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
`,S4=S(i2)`
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
`;function Qp({path:n="student",isActive:t=!1,onClick:r}){return x.jsxs(T4,{onClick:r,children:[x.jsx(i2,{$active:t,children:"교수"}),x.jsx(S4,{$active:t,children:"학생"}),x.jsx(A4,{$active:t})]})}Qp.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const Rx=S.a`
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
`,Ix=S.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;function ah({label:n,href:t=null,active:r=!1,onClick:a,style:o,target:u,rel:d}){const m={"aria-current":r?"page":void 0,"data-active":r?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:r};return t?x.jsx(Rx,{href:t,target:u,rel:d,...m,children:x.jsx(Ix,{className:"navbtn-text",children:n})}):x.jsx(Rx,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:x.jsx(Ix,{className:"navbtn-text",children:n})})}ah.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const r2=S.div`
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
`,R4=S(r2)`
  justify-content: flex-start;
`,Cx=S.div`
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
`,a2=S.p`
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
`,I4=S(a2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function Bm({label:n,style:t,mode:r}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return r==="category"?x.jsxs(R4,{style:t,children:[x.jsx(I4,{children:n}),x.jsx(Cx,{children:x.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):x.jsxs(r2,{style:t,children:[x.jsx(a2,{children:n}),x.jsx(Cx,{children:x.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Bm.propTypes={label:W.string.isRequired,style:W.object};const C4=S.div`
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
`,j4=S.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,D4=S.p`
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
`;function s2({options:n,onSelect:t,style:r,isOpen:a,position:o,selected:u}){return x.jsx(C4,{style:r,$open:a,children:n.map((d,p)=>x.jsx(j4,{onClick:()=>t(d),children:x.jsx(D4,{$selected:d===u,children:d})},p))})}s2.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const N4=S.div`
  position: relative;
`;function $m({label:n,options:t,onSelect:r,style:a,filter:o,mode:u}){const[d,p]=Dt.useState(!1),[m,g]=Dt.useState({top:0,left:0}),v=Dt.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}p(R=>!R)},A=R=>{r&&r(R),p(!1)};return x.jsxs(N4,{ref:v,style:a,children:[x.jsx("div",{onClick:w,children:x.jsx(Bm,{label:n,options:t,onSelect:r,style:{},filter:o,mode:u})}),x.jsx(s2,{options:t,onSelect:A,style:{},isOpen:d,position:m,selected:n})]})}$m.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};$m.defaultProps={style:{},filter:""};const M4=S.div`
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
`,O4=S.div`
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
`,V4=S.div`
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
`;function o2({options:n,isOpen:t,onSelect:r,selected:a}){return x.jsx(M4,{$open:t,children:x.jsx(O4,{$open:t,children:n.map((o,u)=>x.jsx(V4,{$selected:a===o,onClick:()=>r(o),children:o},u))})})}o2.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const k4=S.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Ll({label:n,options:t,onSelect:r,style:a,mode:o}){const[u,d]=Dt.useState(!1),p=Dt.useRef(null),m=()=>{d(v=>!v)},g=v=>{r&&r(v),d(!1)};return x.jsxs(k4,{ref:p,style:a,children:[x.jsx("div",{onClick:m,children:x.jsx(Bm,{label:n,mode:o})}),x.jsx(o2,{options:t,onSelect:g,isOpen:u,selected:n})]})}Ll.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Ll.defaultProps={style:{},mode:"category"};const xp=S.div`
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
`,vp=S.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,_p=S.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Ep=S.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function l2({onCategoryChange:n,onToggleChange:t,type:r,onSortChange:a,sortLabel:o}){const u={type:r},[d,p]=Dt.useState(!1),m=()=>p(Z=>{const ft=!Z;return t&&t(ft),ft}),[g,v]=Dt.useState("전체"),[w,A]=Dt.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],O=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],B=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[G,X]=Dt.useState("이름순"),et=o||G,ct=Z=>{X(Z),a&&a(Z)};return q.useEffect(()=>{v(d?O[0]:R[0])},[d]),u.type==="project"?x.jsxs(xp,{children:[x.jsx(vp,{}),x.jsx(_p,{children:B.map(Z=>x.jsx(ah,{label:Z,active:w===Z,onClick:()=>{A(Z),n&&n(Z)}},Z))}),x.jsx(Ep,{children:x.jsx(Ll,{mode:"category",label:w,options:B,onSelect:Z=>{A(Z),n&&n(Z)}})}),x.jsx($m,{label:et,options:P,onSelect:ct})]}):d?x.jsxs(xp,{children:[x.jsx(vp,{}),x.jsx(_p,{children:O.map(Z=>x.jsx(ah,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(Ep,{children:x.jsx(Ll,{mode:"category",label:g,options:O,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(Qp,{path:d?"professor":"student",isActive:d,onClick:m})]}):x.jsxs(xp,{children:[x.jsx(vp,{}),x.jsx(_p,{children:R.map(Z=>x.jsx(ah,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(Ep,{children:x.jsx(Ll,{mode:"category",label:g,options:R,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(Qp,{path:d?"professor":"student",isActive:d,onClick:m})]})}const U4=S.div`
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
`,P4=S.div`
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
`,z4=S.img`
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
`,L4=S.div`
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
`,B4=S.p`
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
`,Bc=S.div`
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
`,$c=S.p`
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
`,jx=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Fc=S.p`
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
`;function Fm({nameKor:n,rank:t,eMail:r,education:a,field:o,imgSrc:u,imgAlt:d}){const p=m=>Array.isArray(m)?x.jsx(jx,{children:m.map((g,v)=>x.jsx(Fc,{children:g},v))}):typeof m=="string"&&m?x.jsx(jx,{children:x.jsx(Fc,{children:m})}):null;return x.jsx(U4,{children:x.jsxs(P4,{children:[x.jsx(z4,{src:u,alt:d}),x.jsxs(L4,{children:[x.jsx(B4,{children:n}),x.jsxs(Bc,{children:[x.jsx($c,{children:"직위(직급)"}),x.jsx(Fc,{children:t})]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"이메일"}),x.jsx(Fc,{children:r})]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"약력"}),p(a)]}),x.jsxs(Bc,{children:[x.jsx($c,{children:"전문 분야"}),p(o)]})]})]})})}Fm.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};Fm.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Km=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Front-End, UI/UX Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"3D Graphics","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Front Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"@username","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),$4=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Xl=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"-"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),Dx=40;function u2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const F4={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Nx=["전체","산업디자인공학","미디어디자인공학"],K4={산업디자인공학:0,미디어디자인공학:1},Mx=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,bp=Km,Nl=$4,q4=S.div`
  position: relative; background: #fff;
`,H4=S.div`
  padding-left: ${Dx}px; padding-right: ${Dx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function G4({children:n}){return x.jsx(q4,{children:x.jsx(H4,{children:n})})}const Y4=S.div`
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
`,Q4=S.div`
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
`,X4=S.div`
  text-decoration: none; cursor: pointer;
`,W4=S.div`position: relative;`;function Z4({people:n}){const t=Im();return x.jsx(Y4,{children:n.map((r,a)=>{const o=r.id??r.studentId??`${r.nameKor}-${a}`,u=typeof r.projectNum=="number"&&r.category,d=u?r.projectNum+1:null,p=u?`${F4[r.category]||"A"}${String(d).padStart(3,"0")}`:null,m=x.jsx(Lm,{nameKor:r.nameKor,nameEng:r.nameEng,role:r.role,sns:r.sns||"-",eMail:r.eMail,imgSrc:u2(r.imgUrl),imgAlt:`${r.nameKor} profile`},o);return u?x.jsx(X4,{role:"link",tabIndex:0,onClick:()=>t(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${p}`)},"aria-label":`${r.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function J4(){const[n,t]=Dt.useState(!1),[r,a]=Dt.useState(Nx[0]),o=Dt.useMemo(()=>{const p=new Map;return(Xl||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);Dt.useEffect(()=>{a(n?Nl[0]?.id||"":Nx[0])},[n]);const u=Dt.useMemo(()=>{if(!n){if(r==="전체")return bp;let m=K4[r];return m===void 0&&(m=Mx(r)),bp.filter(g=>Mx(g.department)===m)}const p=Nl.some(m=>m.id===r)?r:Nl.find(m=>m.nameKor===r)?.id||"";return bp.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(Xl||[]).find(w=>w.category===m.category&&w.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[r,n,o]),d=Dt.useMemo(()=>n&&(Nl.find(m=>m.id===r)||Nl.find(m=>m.nameKor===r))||null,[n,r]);return x.jsxs(W4,{children:[x.jsx(Q4,{children:"Peoples"}),x.jsx(l2,{type:"people",onCategoryChange:a,onToggleChange:t}),x.jsxs(G4,{children:[n&&d&&x.jsx(Fm,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:u2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),x.jsx(Z4,{people:u})]})]})}const Ox=S.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,tR=S.div`
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
`,Vx=S.div`
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
`,eR=S.div`
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
`,nR=S.img`
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
`,iR=S.div`
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
`,rR=S.div`
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
`,aR=S.p`
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
`,sR=S.p`
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
`,oR=S.div`
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
`,lR=S.div`
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
`,uR=S.p`
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
`,cR=S.div`
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
`,hR=S.img`
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
`,dR=S.div`
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
`,kx=S.div`
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
`,Ux=S.div`
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
`,Px=S.p`
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
`;function zx(n){return typeof n=="number"&&n>999?"999+":n}function qm({titleKor:n,titleEng:t,nameKor:r,view:a,like:o,href:u,src:d,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,w=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=1)},A=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=0)},R="/TU2025gradulate/",O=/^https?:\/\//i.test(u),B=x.jsxs(x.Fragment,{children:[x.jsx(tR,{children:x.jsxs(eR,{onMouseEnter:w,onMouseLeave:A,children:[x.jsx(iR,{className:"card-hover",children:x.jsxs(rR,{children:[x.jsx(sR,{children:n}),x.jsx(aR,{children:t})]})}),x.jsx(nR,{src:d,alt:"Project"})]})}),x.jsxs(oR,{children:[x.jsxs(lR,{children:[x.jsx(cR,{children:p.map((P,G)=>x.jsx(hR,{src:P,alt:`Profile${G+1}`,$z:3-G,$ml:G>0},G))}),x.jsx(uR,{children:r})]}),x.jsxs(dR,{children:[x.jsxs(kx,{children:[x.jsx(Ux,{src:`${R}icons/likeIcon.svg`}),x.jsx(Px,{children:zx(g)})]}),x.jsxs(kx,{children:[x.jsx(Ux,{src:`${R}icons/viewIcon.svg`}),x.jsx(Px,{children:zx(v)})]})]})]})]});return O?x.jsx(Ox,{children:x.jsx(Vx,{as:"a",href:u,style:{textDecoration:"none"},children:B})}):x.jsx(Ox,{children:x.jsx(Vx,{as:yo,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:B})})}qm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};qm.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const fR=()=>{};var Lx={};/**
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
 */const c2=function(n){const t=[];let r=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},pR=function(n){const t=[];let r=0,a=0;for(;r<n.length;){const o=n[r++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[r++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[r++],d=n[r++],p=n[r++],m=((o&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[r++],d=n[r++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},h2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,p=d?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,w=(u&3)<<4|p>>4;let A=(p&15)<<2|g>>6,R=g&63;m||(R=64,d||(A=64)),a.push(r[v],r[w],r[A],r[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(c2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):pR(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=r[n.charAt(o++)],p=o<n.length?r[n.charAt(o)]:0;++o;const g=o<n.length?r[n.charAt(o)]:64;++o;const w=o<n.length?r[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new mR;const A=u<<2|p>>4;if(a.push(A),g!==64){const R=p<<4&240|g>>2;if(a.push(R),w!==64){const O=g<<6&192|w;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gR=function(n){const t=c2(n);return h2.encodeByteArray(t,!0)},vh=function(n){return gR(n).replace(/\./g,"")},yR=function(n){try{return h2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vR=()=>xR().__FIREBASE_DEFAULTS__,_R=()=>{if(typeof process>"u"||typeof Lx>"u")return;const n=Lx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ER=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&yR(n[1]);return t&&JSON.parse(t)},Hm=()=>{try{return fR()||vR()||_R()||ER()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bR=n=>Hm()?.emulatorHosts?.[n],wR=n=>{const t=bR(n);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),a]:[t.substring(0,r),a]},d2=()=>Hm()?.config;/**
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
 */class TR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,a))}}}/**
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
 */function Gm(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function AR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function SR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[vh(JSON.stringify(r)),vh(JSON.stringify(d)),""].join(".")}const Bl={};function RR(){const n={prod:[],emulator:[]};for(const t of Object.keys(Bl))Bl[t]?n.emulator.push(t):n.prod.push(t);return n}function IR(n){let t=document.getElementById(n),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),r=!0),{created:r,element:t}}let Bx=!1;function CR(n,t){if(typeof window>"u"||typeof document>"u"||!Gm(window.location.host)||Bl[n]===t||Bl[n]||Bx)return;Bl[n]=t;function r(A){return`__firebase__banner__${A}`}const a="__firebase__banner",u=RR().prod.length>0;function d(){const A=document.getElementById(a);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,R){A.setAttribute("width","24"),A.setAttribute("id",R),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Bx=!0,d()},A}function v(A,R){A.setAttribute("id",R),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function w(){const A=IR(a),R=r("text"),O=document.getElementById(R)||document.createElement("span"),B=r("learnmore"),P=document.getElementById(B)||document.createElement("a"),G=r("preprendIcon"),X=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const et=A.element;p(et),v(P,B);const ct=g();m(X,G),et.append(X,O,P,ct),document.body.appendChild(et)}u?(O.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function jR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DR(){const n=Hm()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NR(){return!DR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MR(){try{return typeof indexedDB=="object"}catch{return!1}}function OR(){return new Promise((n,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(r){t(r)}})}/**
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
 */const VR="FirebaseError";class vo extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=VR,Object.setPrototypeOf(this,vo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f2.prototype.create)}}class f2{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?kR(u,a):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new vo(o,p,a)}}function kR(n,t){return n.replace(UR,(r,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const UR=/\{\$([^}]+)}/g;function _h(n,t){if(n===t)return!0;const r=Object.keys(n),a=Object.keys(t);for(const o of r){if(!a.includes(o))return!1;const u=n[o],d=t[o];if($x(u)&&$x(d)){if(!_h(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!r.includes(o))return!1;return!0}function $x(n){return n!==null&&typeof n=="object"}/**
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
 */function rr(n){return n&&n._delegate?n._delegate:n}class Wl{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ka="[DEFAULT]";/**
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
 */class PR{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const a=new TR;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(LR(t))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ka){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ka){return this.instances.has(t)}getOptions(t=Ka){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&d.resolve(o)}return o}onInit(t,r){const a=this.normalizeInstanceIdentifier(r),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,r){const a=this.onInitCallbacks.get(r);if(a)for(const o of a)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:zR(t),options:r}),this.instances.set(t,a),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ka){return this.component?this.component.multipleInstances?t:Ka:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zR(n){return n===Ka?void 0:n}function LR(n){return n.instantiationMode==="EAGER"}/**
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
 */class BR{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new PR(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $t;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($t||($t={}));const $R={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},FR=$t.INFO,KR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},qR=(n,t,...r)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=KR[t];if(o)console[o](`[${a}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class p2{constructor(t){this.name=t,this._logLevel=FR,this._logHandler=qR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$R[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const HR=(n,t)=>t.some(r=>n instanceof r);let Fx,Kx;function GR(){return Fx||(Fx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YR(){return Kx||(Kx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m2=new WeakMap,Xp=new WeakMap,g2=new WeakMap,wp=new WeakMap,Ym=new WeakMap;function QR(n){const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{r(Qr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(r=>{r instanceof IDBCursor&&m2.set(r,n)}).catch(()=>{}),Ym.set(t,n),t}function XR(n){if(Xp.has(n))return;const t=new Promise((r,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{r(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});Xp.set(n,t)}let Wp={get(n,t,r){if(n instanceof IDBTransaction){if(t==="done")return Xp.get(n);if(t==="objectStoreNames")return n.objectStoreNames||g2.get(n);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Qr(n[t])},set(n,t,r){return n[t]=r,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function WR(n){Wp=n(Wp)}function ZR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=n.call(Tp(this),t,...r);return g2.set(a,t.sort?t.sort():[t]),Qr(a)}:YR().includes(n)?function(...t){return n.apply(Tp(this),t),Qr(m2.get(this))}:function(...t){return Qr(n.apply(Tp(this),t))}}function JR(n){return typeof n=="function"?ZR(n):(n instanceof IDBTransaction&&XR(n),HR(n,GR())?new Proxy(n,Wp):n)}function Qr(n){if(n instanceof IDBRequest)return QR(n);if(wp.has(n))return wp.get(n);const t=JR(n);return t!==n&&(wp.set(n,t),Ym.set(t,n)),t}const Tp=n=>Ym.get(n);function t6(n,t,{blocked:r,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),p=Qr(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Qr(d.result),m.oldVersion,m.newVersion,Qr(d.transaction),m)}),r&&d.addEventListener("blocked",m=>r(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const e6=["get","getKey","getAll","getAllKeys","count"],n6=["put","add","delete","clear"],Ap=new Map;function qx(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ap.get(t))return Ap.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,o=n6.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(o||e6.includes(r)))return;const u=async function(d,...p){const m=this.transaction(d,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[r](...p),o&&m.done]))[0]};return Ap.set(t,u),u}WR(n=>({...n,get:(t,r,a)=>qx(t,r)||n.get(t,r,a),has:(t,r)=>!!qx(t,r)||n.has(t,r)}));/**
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
 */class i6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(r6(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function r6(n){return n.getComponent()?.type==="VERSION"}const Zp="@firebase/app",Hx="0.14.4";/**
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
 */const ar=new p2("@firebase/app"),a6="@firebase/app-compat",s6="@firebase/analytics-compat",o6="@firebase/analytics",l6="@firebase/app-check-compat",u6="@firebase/app-check",c6="@firebase/auth",h6="@firebase/auth-compat",d6="@firebase/database",f6="@firebase/data-connect",p6="@firebase/database-compat",m6="@firebase/functions",g6="@firebase/functions-compat",y6="@firebase/installations",x6="@firebase/installations-compat",v6="@firebase/messaging",_6="@firebase/messaging-compat",E6="@firebase/performance",b6="@firebase/performance-compat",w6="@firebase/remote-config",T6="@firebase/remote-config-compat",A6="@firebase/storage",S6="@firebase/storage-compat",R6="@firebase/firestore",I6="@firebase/ai",C6="@firebase/firestore-compat",j6="firebase",D6="12.4.0";/**
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
 */const Jp="[DEFAULT]",N6={[Zp]:"fire-core",[a6]:"fire-core-compat",[o6]:"fire-analytics",[s6]:"fire-analytics-compat",[u6]:"fire-app-check",[l6]:"fire-app-check-compat",[c6]:"fire-auth",[h6]:"fire-auth-compat",[d6]:"fire-rtdb",[f6]:"fire-data-connect",[p6]:"fire-rtdb-compat",[m6]:"fire-fn",[g6]:"fire-fn-compat",[y6]:"fire-iid",[x6]:"fire-iid-compat",[v6]:"fire-fcm",[_6]:"fire-fcm-compat",[E6]:"fire-perf",[b6]:"fire-perf-compat",[w6]:"fire-rc",[T6]:"fire-rc-compat",[A6]:"fire-gcs",[S6]:"fire-gcs-compat",[R6]:"fire-fst",[C6]:"fire-fst-compat",[I6]:"fire-vertex","fire-js":"fire-js",[j6]:"fire-js-all"};/**
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
 */const Zl=new Map,M6=new Map,tm=new Map;function Gx(n,t){try{n.container.addComponent(t)}catch(r){ar.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,r)}}function Eh(n){const t=n.name;if(tm.has(t))return ar.debug(`There were multiple attempts to register component ${t}.`),!1;tm.set(t,n);for(const r of Zl.values())Gx(r,n);for(const r of M6.values())Gx(r,n);return!0}function O6(n,t){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(t)}function V6(n){return n==null?!1:n.settings!==void 0}/**
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
 */const k6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new f2("app","Firebase",k6);/**
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
 */class U6{constructor(t,r,a){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Wl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const P6=D6;function Qm(n,t={}){let r=n;typeof t!="object"&&(t={name:t});const a={name:Jp,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Xr.create("bad-app-name",{appName:String(o)});if(r||(r=d2()),!r)throw Xr.create("no-options");const u=Zl.get(o);if(u){if(_h(r,u.options)&&_h(a,u.config))return u;throw Xr.create("duplicate-app",{appName:o})}const d=new BR(o);for(const m of tm.values())d.addComponent(m);const p=new U6(r,a,d);return Zl.set(o,p),p}function z6(n=Jp){const t=Zl.get(n);if(!t&&n===Jp&&d2())return Qm();if(!t)throw Xr.create("no-app",{appName:n});return t}function Yx(){return Array.from(Zl.values())}function Ws(n,t,r){let a=N6[n]??n;r&&(a+=`-${r}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ar.warn(d.join(" "));return}Eh(new Wl(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const L6="firebase-heartbeat-database",B6=1,Jl="firebase-heartbeat-store";let Sp=null;function y2(){return Sp||(Sp=t6(L6,B6,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Jl)}catch(r){console.warn(r)}}}}).catch(n=>{throw Xr.create("idb-open",{originalErrorMessage:n.message})})),Sp}async function $6(n){try{const r=(await y2()).transaction(Jl),a=await r.objectStore(Jl).get(x2(n));return await r.done,a}catch(t){if(t instanceof vo)ar.warn(t.message);else{const r=Xr.create("idb-get",{originalErrorMessage:t?.message});ar.warn(r.message)}}}async function Qx(n,t){try{const a=(await y2()).transaction(Jl,"readwrite");await a.objectStore(Jl).put(t,x2(n)),await a.done}catch(r){if(r instanceof vo)ar.warn(r.message);else{const a=Xr.create("idb-set",{originalErrorMessage:r?.message});ar.warn(a.message)}}}function x2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const F6=1024,K6=30;class q6{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new G6(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Xx();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>K6){const o=Y6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ar.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xx(),{heartbeatsToSend:r,unsentEntries:a}=H6(this._heartbeatsCache.heartbeats),o=vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ar.warn(t),""}}}function Xx(){return new Date().toISOString().substring(0,10)}function H6(n,t=F6){const r=[];let a=n.slice();for(const o of n){const u=r.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),Wx(r)>t){u.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Wx(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class G6{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MR()?OR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await $6(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Qx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return Qx(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Wx(n){return vh(JSON.stringify({version:2,heartbeats:n})).length}function Y6(n){if(n.length===0)return-1;let t=0,r=n[0].date;for(let a=1;a<n.length;a++)n[a].date<r&&(r=n[a].date,t=a);return t}/**
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
 */function Q6(n){Eh(new Wl("platform-logger",t=>new i6(t),"PRIVATE")),Eh(new Wl("heartbeat",t=>new q6(t),"PRIVATE")),Ws(Zp,Hx,n),Ws(Zp,Hx,"esm2020"),Ws("fire-js","")}Q6("");var X6="firebase",W6="12.4.0";/**
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
 */Ws(X6,W6,"app");var Zx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,v2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function j(){}j.prototype=I.prototype,C.F=I.prototype,C.prototype=new j,C.prototype.constructor=C,C.D=function(M,k,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return I.prototype[k].apply(M,N)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,r),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,j){j||(j=0);const M=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)M[k]=I.charCodeAt(j++)|I.charCodeAt(j++)<<8|I.charCodeAt(j++)<<16|I.charCodeAt(j++)<<24;else for(k=0;k<16;++k)M[k]=I[j++]|I[j++]<<8|I[j++]<<16|I[j++]<<24;I=C.g[0],j=C.g[1],k=C.g[2];let z=C.g[3],N;N=I+(z^j&(k^z))+M[0]+3614090360&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+M[1]+3905402710&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+M[2]+606105819&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+M[3]+3250441966&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+M[4]+4118548399&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+M[5]+1200080426&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+M[6]+2821735955&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+M[7]+4249261313&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+M[8]+1770035416&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+M[9]+2336552879&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+M[10]+4294925233&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+M[11]+2304563134&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+M[12]+1804603682&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+M[13]+4254626195&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+M[14]+2792965006&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+M[15]+1236535329&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(k^z&(j^k))+M[1]+4129170786&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+M[6]+3225465664&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+M[11]+643717713&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+M[0]+3921069994&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+M[5]+3593408605&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+M[10]+38016083&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+M[15]+3634488961&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+M[4]+3889429448&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+M[9]+568446438&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+M[14]+3275163606&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+M[3]+4107603335&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+M[8]+1163531501&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+M[13]+2850285829&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+M[2]+4243563512&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+M[7]+1735328473&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+M[12]+2368359562&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(j^k^z)+M[5]+4294588738&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+M[8]+2272392833&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+M[11]+1839030562&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+M[14]+4259657740&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+M[1]+2763975236&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+M[4]+1272893353&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+M[7]+4139469664&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+M[10]+3200236656&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+M[13]+681279174&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+M[0]+3936430074&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+M[3]+3572445317&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+M[6]+76029189&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+M[9]+3654602809&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+M[12]+3873151461&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+M[15]+530742520&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+M[2]+3299628645&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(k^(j|~z))+M[0]+4096336452&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+M[7]+1126891415&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+M[14]+2878612391&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+M[5]+4237533241&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+M[12]+1700485571&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+M[3]+2399980690&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+M[10]+4293915773&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+M[1]+2240044497&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+M[8]+1873313359&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+M[15]+4264355552&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+M[6]+2734768916&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+M[13]+1309151649&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+M[4]+4149444226&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+M[11]+3174756917&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+M[2]+718787259&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+M[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+z&4294967295}a.prototype.v=function(C,I){I===void 0&&(I=C.length);const j=I-this.blockSize,M=this.C;let k=this.h,z=0;for(;z<I;){if(k==0)for(;z<=j;)o(this,C,z),z+=this.blockSize;if(typeof C=="string"){for(;z<I;)if(M[k++]=C.charCodeAt(z++),k==this.blockSize){o(this,M),k=0;break}}else for(;z<I;)if(M[k++]=C[z++],k==this.blockSize){o(this,M),k=0;break}}this.h=k,this.o+=I},a.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var j=C.length-8;j<C.length;++j)C[j]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,j=0;j<4;++j)for(let M=0;M<32;M+=8)C[I++]=this.g[j]>>>M&255;return C};function u(C,I){var j=p;return Object.prototype.hasOwnProperty.call(j,C)?j[C]:j[C]=I(C)}function d(C,I){this.h=I;const j=[];let M=!0;for(let k=C.length-1;k>=0;k--){const z=C[k]|0;M&&z==I||(j[k]=z,M=!1)}this.g=j}var p={};function m(C){return-128<=C&&C<128?u(C,function(I){return new d([I|0],I<0?-1:0)}):new d([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(C<0)return P(g(-C));const I=[];let j=1;for(let M=0;C>=j;M++)I[M]=C/j|0,j*=4294967296;return new d(I,0)}function v(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return P(v(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const j=g(Math.pow(I,8));let M=w;for(let z=0;z<C.length;z+=8){var k=Math.min(8,C.length-z);const N=parseInt(C.substring(z,z+k),I);k<8?(k=g(Math.pow(I,k)),M=M.j(k).add(g(N))):(M=M.j(j),M=M.add(g(N)))}return M}var w=m(0),A=m(1),R=m(16777216);n=d.prototype,n.m=function(){if(B(this))return-P(this).m();let C=0,I=1;for(let j=0;j<this.g.length;j++){const M=this.i(j);C+=(M>=0?M:4294967296+M)*I,I*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(O(this))return"0";if(B(this))return"-"+P(this).toString(C);const I=g(Math.pow(C,6));var j=this;let M="";for(;;){const k=ct(j,I).g;j=G(j,k.j(I));let z=((j.g.length>0?j.g[0]:j.h)>>>0).toString(C);if(j=k,O(j))return z+M;for(;z.length<6;)z="0"+z;M=z+M}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function O(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function B(C){return C.h==-1}n.l=function(C){return C=G(this,C),B(C)?-1:O(C)?0:1};function P(C){const I=C.g.length,j=[];for(let M=0;M<I;M++)j[M]=~C.g[M];return new d(j,~C.h).add(A)}n.abs=function(){return B(this)?P(this):this},n.add=function(C){const I=Math.max(this.g.length,C.g.length),j=[];let M=0;for(let k=0;k<=I;k++){let z=M+(this.i(k)&65535)+(C.i(k)&65535),N=(z>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);M=N>>>16,z&=65535,N&=65535,j[k]=N<<16|z}return new d(j,j[j.length-1]&-2147483648?-1:0)};function G(C,I){return C.add(P(I))}n.j=function(C){if(O(this)||O(C))return w;if(B(this))return B(C)?P(this).j(P(C)):P(P(this).j(C));if(B(C))return P(this.j(P(C)));if(this.l(R)<0&&C.l(R)<0)return g(this.m()*C.m());const I=this.g.length+C.g.length,j=[];for(var M=0;M<2*I;M++)j[M]=0;for(M=0;M<this.g.length;M++)for(let k=0;k<C.g.length;k++){const z=this.i(M)>>>16,N=this.i(M)&65535,ue=C.i(k)>>>16,ne=C.i(k)&65535;j[2*M+2*k]+=N*ne,X(j,2*M+2*k),j[2*M+2*k+1]+=z*ne,X(j,2*M+2*k+1),j[2*M+2*k+1]+=N*ue,X(j,2*M+2*k+1),j[2*M+2*k+2]+=z*ue,X(j,2*M+2*k+2)}for(C=0;C<I;C++)j[C]=j[2*C+1]<<16|j[2*C];for(C=I;C<2*I;C++)j[C]=0;return new d(j,0)};function X(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function et(C,I){this.g=C,this.h=I}function ct(C,I){if(O(I))throw Error("division by zero");if(O(C))return new et(w,w);if(B(C))return I=ct(P(C),I),new et(P(I.g),P(I.h));if(B(I))return I=ct(C,P(I)),new et(P(I.g),I.h);if(C.g.length>30){if(B(C)||B(I))throw Error("slowDivide_ only works with positive integers.");for(var j=A,M=I;M.l(C)<=0;)j=Z(j),M=Z(M);var k=ft(j,1),z=ft(M,1);for(M=ft(M,2),j=ft(j,2);!O(M);){var N=z.add(M);N.l(C)<=0&&(k=k.add(j),z=N),M=ft(M,1),j=ft(j,1)}return I=G(C,k.j(I)),new et(k,I)}for(k=w;C.l(I)>=0;){for(j=Math.max(1,Math.floor(C.m()/I.m())),M=Math.ceil(Math.log(j)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),z=g(j),N=z.j(I);B(N)||N.l(C)>0;)j-=M,z=g(j),N=z.j(I);O(z)&&(z=A),k=k.add(z),C=G(C,N)}return new et(k,C)}n.B=function(C){return ct(this,C).h},n.and=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let M=0;M<I;M++)j[M]=this.i(M)&C.i(M);return new d(j,this.h&C.h)},n.or=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let M=0;M<I;M++)j[M]=this.i(M)|C.i(M);return new d(j,this.h|C.h)},n.xor=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let M=0;M<I;M++)j[M]=this.i(M)^C.i(M);return new d(j,this.h^C.h)};function Z(C){const I=C.g.length+1,j=[];for(let M=0;M<I;M++)j[M]=C.i(M)<<1|C.i(M-1)>>>31;return new d(j,C.h)}function ft(C,I){const j=I>>5;I%=32;const M=C.g.length-j,k=[];for(let z=0;z<M;z++)k[z]=I>0?C.i(z+j)>>>I|C.i(z+j+1)<<32-I:C.i(z+j);return new d(k,C.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,v2=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Wr=d}).apply(typeof Zx<"u"?Zx:typeof self<"u"?self:typeof window<"u"?window:{});var Kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _2,Vl,E2,sh,em,b2,w2,T2;(function(){var n,t=Object.defineProperty;function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kc=="object"&&Kc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=r(this);function o(c,y){if(y)t:{var _=a;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in _))break t;_=_[F]}c=c[c.length-1],T=_[c],y=y(T),y!=T&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&_.push([T,y[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,_){return c.call.apply(c.bind,arguments)}function g(c,y,_){return g=m,g.apply(null,arguments)}function v(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,F,Q){for(var ot=Array(arguments.length-2),St=2;St<arguments.length;St++)ot[St-2]=arguments[St];return y.prototype[F].apply(T,ot)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const y=c.length;if(y>0){const _=Array(y);for(let T=0;T<y;T++)_[T]=c[T];return _}return[]}function O(c,y){for(let T=1;T<arguments.length;T++){const F=arguments[T];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=c.length||0;const Q=F.length||0;c.length=_+Q;for(let ot=0;ot<Q;ot++)c[_+ot]=F[ot]}else c.push(F)}}class B{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){d.setTimeout(()=>{throw c},0)}function G(){var c=C;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class X{constructor(){this.h=this.g=null}add(y,_){const T=et.get();T.set(y,_),this.h?this.h.next=T:this.g=T,this.h=T}}var et=new B(()=>new ct,c=>c.reset());class ct{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ft=!1,C=new X,I=()=>{const c=Promise.resolve(void 0);Z=()=>{c.then(j)}};function j(){for(var c;c=G();){try{c.h.call(c.g)}catch(_){P(_)}var y=et;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ft=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,y),d.removeEventListener("test",_,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}w(ue,k),ue.prototype.init=function(c,y){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),J=0;function ht(c,y,_,T,F){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!T,this.ha=F,this.key=++J,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function It(c,y,_){for(const T in c)y.call(_,c[T],T,c)}function V(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function at(c){const y={};for(const _ in c)y[_]=c[_];return y}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(c,y){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)c[_]=T[_];for(let Q=0;Q<lt.length;Q++)_=lt[Q],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,_,T,F){const Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);const ot=_t(c,y,T,F);return ot>-1?(y=c[ot],_||(y.fa=!1)):(y=new ht(y,this.src,Q,!!T,F),y.fa=_,c.push(y)),y};function Ct(c,y){const _=y.type;if(_ in c.g){var T=c.g[_],F=Array.prototype.indexOf.call(T,y,void 0),Q;(Q=F>=0)&&Array.prototype.splice.call(T,F,1),Q&&(yt(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,y,_,T){for(let F=0;F<c.length;++F){const Q=c[F];if(!Q.da&&Q.listener==y&&Q.capture==!!_&&Q.ha==T)return F}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),zt={};function Me(c,y,_,T,F){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)Me(c,y[Q],_,T,F);return null}return _=vu(_),c&&c[ne]?c.J(y,_,p(T)?!!T.capture:!1,F):ji(c,y,_,!1,T,F)}function ji(c,y,_,T,F,Q){if(!y)throw Error("Invalid event type");const ot=p(F)?!!F.capture:!!F;let St=Ao(c);if(St||(c[ge]=St=new gt(c)),_=St.add(y,_,T,ot,Q),_.proxy)return _;if(T=qn(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)z||(F=ot),F===void 0&&(F=!1),c.addEventListener(y.toString(),T,F);else if(c.attachEvent)c.attachEvent(ns(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function qn(){function c(_){return y.call(c.src,c.listener,_)}const y=ad;return c}function on(c,y,_,T,F){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)on(c,y[Q],_,T,F);else T=p(T)?!!T.capture:!!T,_=vu(_),c&&c[ne]?(c=c.i,Q=String(y).toString(),Q in c.g&&(y=c.g[Q],_=_t(y,_,T,F),_>-1&&(yt(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[Q],c.h--)))):c&&(c=Ao(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_t(y,_,T,F)),(_=c>-1?y[c]:null)&&oa(_))}function oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])Ct(y.i,c);else{var _=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(_,T,c.capture):y.detachEvent?y.detachEvent(ns(_),T):y.addListener&&y.removeListener&&y.removeListener(T),(_=Ao(y))?(Ct(_,c),_.h==0&&(_.src=null,y[ge]=null)):yt(c)}}}function ns(c){return c in zt?zt[c]:zt[c]="on"+c}function ad(c,y){if(c.da)c=!0;else{y=new ue(y,this);const _=c.listener,T=c.ha||c.src;c.fa&&oa(c),c=_.call(T,y)}return c}function Ao(c){return c=c[ge],c instanceof gt?c:null}var fn="__closure_events_fn_"+(Math.random()*1e9>>>0);function vu(c){return typeof c=="function"?c:(c[fn]||(c[fn]=function(y){return c.handleEvent(y)}),c[fn])}function Oe(){M.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,M),Oe.prototype[ne]=!0,Oe.prototype.removeEventListener=function(c,y,_,T){on(this,c,y,_,T)};function ze(c,y){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new k(y,c);else if(y instanceof k)y.target=y.target||c;else{var F=y;y=new k(T,c),ut(y,F)}F=!0;let Q,ot;if(_)for(ot=_.length-1;ot>=0;ot--)Q=y.g=_[ot],F=Di(Q,T,!0,y)&&F;if(Q=y.g=c,F=Di(Q,T,!0,y)&&F,F=Di(Q,T,!1,y)&&F,_)for(ot=0;ot<_.length;ot++)Q=y.g=_[ot],F=Di(Q,T,!1,y)&&F}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let T=0;T<_.length;T++)yt(_[T]);delete c.g[y],c.h--}}this.G=null},Oe.prototype.J=function(c,y,_,T){return this.i.add(String(c),y,!1,_,T)},Oe.prototype.K=function(c,y,_,T){return this.i.add(String(c),y,!0,_,T)};function Di(c,y,_,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let Q=0;Q<y.length;++Q){const ot=y[Q];if(ot&&!ot.da&&ot.capture==_){const St=ot.listener,se=ot.ha||ot.src;ot.fa&&Ct(c.i,ot),F=St.call(se,T)!==!1&&F}}return F&&!T.defaultPrevented}function sd(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:d.setTimeout(c,y||0)}function So(c){c.g=sd(()=>{c.g=null,c.i&&(c.i=!1,So(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class od extends M{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:So(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(c){M.call(this),this.h=c,this.g={}}w(la,M);var ur=[];function Je(c){It(c.g,function(y,_){this.g.hasOwnProperty(_)&&oa(y)},c),c.g={}}la.prototype.N=function(){la.Z.N.call(this),Je(this)},la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=d.JSON.stringify,ln=d.JSON.parse,ld=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function _u(){}function Eu(){}var si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cr(){k.call(this,"d")}w(cr,k);function Hn(){k.call(this,"c")}w(Hn,k);var Dn={},hr=null;function is(){return hr=hr||new Oe}Dn.Ia="serverreachability";function Ro(c){k.call(this,Dn.Ia,c)}w(Ro,k);function dr(c){const y=is();ze(y,new Ro(y))}Dn.STAT_EVENT="statevent";function rs(c,y){k.call(this,Dn.STAT_EVENT,c),this.stat=y}w(rs,k);function ve(c){const y=is();ze(y,new rs(y,c))}Dn.Ja="timingevent";function bu(c,y){k.call(this,Dn.Ja,c),this.size=y}w(bu,k);function fr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},y)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Io(c,y,_,T,F,Q){c.info(function(){if(c.g)if(Q){var ot="",St=Q.split("&");for(let Yt=0;Yt<St.length;Yt++){var se=St[Yt].split("=");if(se.length>1){const be=se[0];se=se[1];const _n=be.split("_");ot=_n.length>=2&&_n[1]=="type"?ot+(be+"="+se+"&"):ot+(be+"=redacted&")}}}else ot=null;else ot=Q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+y+`
`+_+`
`+ot})}function Co(c,y,_,T,F,Q,ot){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+y+`
`+_+`
`+Q+" "+ot})}function Ni(c,y,_,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+oi(c,_)+(T?" "+T:"")})}function ud(c,y){c.info(function(){return"TIMEOUT: "+y})}pr.prototype.info=function(){};function oi(c,y){if(!c.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(c=0;c<Q.length;c++)if(Array.isArray(Q[c])){var _=Q[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let ot=1;ot<T.length;ot++)T[ot]=""}}}}return jn(Q)}catch{return y}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mi;function ua(){}w(ua,_u),ua.prototype.g=function(){return new XMLHttpRequest},Mi=new ua;function ca(c){return encodeURIComponent(String(c))}function cd(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Gn(c,y,_,T){this.j=c,this.i=y,this.l=_,this.S=T||1,this.V=new la(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mr}function mr(){this.i=null,this.g="",this.h=!1}var as={},li={};function ui(c,y,_){c.M=1,c.A=Vi(de(y)),c.u=_,c.R=!0,gr(c,null)}function gr(c,y){c.F=Date.now(),ha(c),c.B=de(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Su(_.i,"t",T),c.C=0,_=c.j.L,c.h=new mr,c.g=ms(c.j,_?y:null,!c.u),c.P>0&&(c.O=new od(g(c.Y,c,c.g),c.P)),y=c.V,_=c.g,T=c.ba;var F="readystatechange";Array.isArray(F)||(F&&(ur[0]=F.toString()),F=ur);for(let Q=0;Q<F.length;Q++){const ot=Me(_,F[Q],T||y.handleEvent,!1,y.h||y);if(!ot)break;y.g[ot.key]=ot}y=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),dr(),Io(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const St=tn(this.g),se=this.g.ya(),Yt=this.g.ca();if(!(St<3)&&(St!=3||this.g&&(this.h.h||this.g.la()||ba(this.g)))){this.K||St!=4||se==7||(se==8||Yt<=0?dr(3):dr(2)),hi(this);var y=this.g.ca();this.X=y;var _=yr(this);if(this.o=y==200,Co(this.i,this.v,this.B,this.l,this.S,St,y),this.o){if(this.U&&!this.L){e:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(T)){var Q=T;break e}}Q=null}if(c=Q)Ni(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ss(this,c);else{this.o=!1,this.m=3,ve(12),di(this),da(this);break t}}if(this.R){c=!0;let be;for(;!this.K&&this.C<_.length;)if(be=wu(this,_),be==li){St==4&&(this.m=4,ve(14),c=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(be==as){this.m=4,ve(15),Ni(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Ni(this.i,this.l,be,null),ss(this,be);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Ni(this.i,this.l,_,"[Invalid Chunked Response]"),di(this),da(this);else if(_.length>0&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.aa&&!ot.P&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),zo(ot),ot.P=!0,ve(11))}}else Ni(this.i,this.l,_,null),ss(this,_);St==4&&di(this),this.o&&!this.K&&(St==4?Lo(this.j,this):(this.o=!1,ha(this)))}else wa(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),di(this),da(this)}}}catch{}finally{}};function yr(c){if(!Ee(c))return c.g.la();const y=ba(c.g);if(y==="")return"";let _="";const T=y.length,F=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),da(c),"";c.h.i=new d.TextDecoder}for(let Q=0;Q<T;Q++)c.h.h=!0,_+=c.h.i.decode(y[Q],{stream:!(F&&Q==T-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function wu(c,y){var _=c.C,T=y.indexOf(`
`,_);return T==-1?li:(_=Number(y.substring(_,T)),isNaN(_)?as:(T+=1,T+_>y.length?li:(y=y.slice(T,T+_),c.C=T+_,y)))}Gn.prototype.cancel=function(){this.K=!0,di(this)};function ha(c){c.T=Date.now()+c.H,ci(c,c.H)}function ci(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=fr(g(c.aa,c),y)}function hi(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ud(this.i,this.B),this.M!=2&&(dr(),ve(17)),di(this),this.m=2,da(this)):ci(this,this.T-c)};function da(c){c.j.I==0||c.K||Lo(c.j,c)}function di(c){hi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function ss(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ma(_.h,c))){if(!c.L&&ma(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)ps(_),fi(_);else break t;Po(_),ve(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=fr(g(_.Va,_),6e3));Nn(_.h)<=1&&_.ta&&(_.ta=void 0)}else Pi(_,11)}else if((c.L||_.g==c)&&ps(_),!N(y))for(F=_.Ba.g.parse(y),y=0;y<F.length;y++){let Yt=F[y];const be=Yt[0];if(!(be<=_.K))if(_.K=be,Yt=Yt[1],_.I==2)if(Yt[0]=="c"){_.M=Yt[1],_.ba=Yt[2];const _n=Yt[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const pi=Yt[4];pi!=null&&(_.za=pi,_.j.info("SVER="+_.za));const Xn=Yt[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(T=1.5*Xn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Wn=c.g;if(Wn){const Zn=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var Q=T.h;Q.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(os(Q,Q.h),Q.h=null))}if(T.G){const $o=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(T.wa=$o,Wt(T.J,T.G,$o))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ot=c;if(T.na=Vu(T,T.L?T.ba:null,T.W),ot.L){Oi(T.h,ot);var St=ot,se=T.O;se&&(St.H=se),St.D&&(hi(St),ha(St)),T.g=ot}else Du(T);_.i.length>0&&Ra(_)}else Yt[0]!="stop"&&Yt[0]!="close"||Pi(_,7);else _.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?Pi(_,7):Aa(_):Yt[0]!="noop"&&_.l&&_.l.qa(Yt),_.A=0)}}dr(4)}catch{}}var hd=class{constructor(c,y){this.g=c,this.map=y}};function fa(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ma(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function os(c,y){c.g?c.g.add(y):c.h=y}function Oi(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}fa.prototype.cancel=function(){if(this.i=ls(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ls(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return R(c.i)}var us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dd(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let F,Q=null;T>=0?(F=c[_].substring(0,T),Q=c[_].substring(T+1)):F=c[_],y(F,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Yn?(this.l=c.l,xr(this,c.j),this.o=c.o,this.g=c.g,ga(this,c.u),this.h=c.h,vr(this,Ru(c.i)),this.m=c.m):c&&(y=String(c).match(us))?(this.l=!1,xr(this,y[1]||"",!0),this.o=ya(y[2]||""),this.g=ya(y[3]||"",!0),ga(this,y[4]),this.h=ya(y[5]||"",!0),vr(this,y[6]||"",!0),this.m=ya(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Yn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Le(y,Do,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Le(y,Do,!0),"@"),c.push(ca(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Le(_,_.charAt(0)=="/"?_r:No,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Le(_,Au)),c.join("")},Yn.prototype.resolve=function(c){const y=de(this);let _=!!c.j;_?xr(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var T=c.h;if(_)ga(y,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=y.h.lastIndexOf("/");F!=-1&&(T=y.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const Q=[];for(let ot=0;ot<F.length;){const St=F[ot++];St=="."?T&&ot==F.length&&Q.push(""):St==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),T&&ot==F.length&&Q.push("")):(Q.push(St),T=!0)}T=Q.join("/")}else T=F}return _?y.h=T:_=c.i.toString()!=="",_?vr(y,Ru(c.i)):_=!!c.m,_&&(y.m=c.m),y};function de(c){return new Yn(c)}function xr(c,y,_){c.j=_?ya(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ga(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function vr(c,y,_){y instanceof Mn?(c.i=y,Vo(c.i,c.l)):(_||(y=Le(y,Tu)),c.i=new Mn(y,c.l))}function Wt(c,y,_){c.i.set(y,_)}function Vi(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ya(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Le(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,jo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function jo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Do=/[#\/\?@]/g,No=/[#\?:]/g,_r=/[#\?]/g,Tu=/[#\?@]/g,Au=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function ki(c){c.g||(c.g=new Map,c.h=0,c.i&&dd(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Mn.prototype,n.add=function(c,y){ki(this),this.i=null,c=Qn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Mo(c,y){ki(c),y=Qn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Oo(c,y){return ki(c),y=Qn(c,y),c.g.has(y)}n.forEach=function(c,y){ki(this),this.g.forEach(function(_,T){_.forEach(function(F){c.call(y,F,T,this)},this)},this)};function cs(c,y){ki(c);let _=[];if(typeof y=="string")Oo(c,y)&&(_=_.concat(c.g.get(Qn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return ki(this),this.i=null,c=Qn(this,c),Oo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=cs(this,c),c.length>0?String(c[0]):y):y};function Su(c,y,_){Mo(c,y),_.length>0&&(c.i=null,c.g.set(Qn(c,y),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var _=y[T];const F=ca(_);_=cs(this,_);for(let Q=0;Q<_.length;Q++){let ot=F;_[Q]!==""&&(ot+="="+ca(_[Q])),c.push(ot)}}return this.i=c.join("&")};function Ru(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Qn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Vo(c,y){y&&!c.j&&(ki(c),c.i=null,c.g.forEach(function(_,T){const F=T.toLowerCase();T!=F&&(Mo(this,T),Su(this,F,_))},c)),c.j=y}function ko(c,y){const _=new pr;if(d.Image){const T=new Image;T.onload=v(un,_,"TestLoadImage: loaded",!0,y,T),T.onerror=v(un,_,"TestLoadImage: error",!1,y,T),T.onabort=v(un,_,"TestLoadImage: abort",!1,y,T),T.ontimeout=v(un,_,"TestLoadImage: timeout",!1,y,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function Er(c,y){const _=new pr,T=new AbortController,F=setTimeout(()=>{T.abort(),un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(Q=>{clearTimeout(F),Q.ok?un(_,"TestPingServer: ok",!0,y):un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),un(_,"TestPingServer: error",!1,y)})}function un(c,y,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Iu(){this.g=new ld}function xa(c){this.i=c.Sb||null,this.h=c.ab||!1}w(xa,_u),xa.prototype.g=function(){return new va(this.i,this.h)};function va(c,y){Oe.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(va,Oe),n=va.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Ui(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||d).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;br(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function br(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Ui(this),this.readyState==3&&br(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wr(c){let y="";return It(c,function(_,T){y+=T,y+=":",y+=_,y+=`\r
`}),y}function On(c,y,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wr(_),typeof c=="string"?_!=null&&ca(_):Wt(c,y,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var hs=/^https?$/i,Cu=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mi.g(),this.g.onreadystatechange=A(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){_a(this,Q);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())_.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Cu,y,void 0)>=0)||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ot]of _)this.g.setRequestHeader(Q,ot);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Q){_a(this,Q)}};function _a(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Ea(c),Ve(c)}function Ea(c){c.A||(c.A=!0,ze(c,"complete"),ze(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ze(this,"complete"),ze(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Uo(this):this.Xa())},n.Xa=function(){Uo(this)};function Uo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(ze(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Q=c.ca();t:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var T;if(T=Q===0){let ot=String(c.D).match(us)[1]||null;!ot&&d.self&&d.self.location&&(ot=d.self.location.protocol.slice(0,-1)),T=!hs.test(ot?ot.toLowerCase():"")}_=T}if(_)ze(c,"complete"),ze(c,"success");else{c.o=6;try{var F=tn(c)>2?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.ca()+"]",Ea(c)}}finally{Ve(c)}}}}function Ve(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||ze(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function ba(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function wa(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(N(c[T]))continue;var _=cd(c[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=y[F]||[];y[F]=Q,Q.push(_)}V(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ta(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function ds(c){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ta("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ta("baseRetryDelayMs",5e3,c),this.Za=Ta("retryDelaySeedMs",1e4,c),this.Ta=Ta("forwardChannelMaxRetries",2,c),this.va=Ta("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new fa(c&&c.concurrentRequestLimit),this.Ba=new Iu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ds.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,T){ve(0),this.W=c,this.H=y||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Vu(this,null,this.W),Ra(this)};function Aa(c){if(Sa(c),c.I==3){var y=c.V++,_=de(c.J);if(Wt(_,"SID",c.M),Wt(_,"RID",y),Wt(_,"TYPE","terminate"),Ia(c,_),y=new Gn(c,c.j,y),y.M=2,y.A=Vi(de(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=y.A,_=!0),_||(y.g=ms(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ha(y)}Ou(c)}function fi(c){c.g&&(zo(c),c.g.cancel(),c.g=null)}function Sa(c){fi(c),c.v&&(d.clearTimeout(c.v),c.v=null),ps(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ra(c){if(!pa(c.h)&&!c.m){c.m=!0;var y=c.Ea;Z||I(),ft||(Z(),ft=!0),C.add(y,c),c.D=0}}function fd(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=fr(g(c.Ea,c,y),Mu(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const F=new Gn(this,this.j,c);let Q=this.o;if(this.U&&(Q?(Q=at(Q),ut(Q,this.U)):Q=this.U),this.u!==null||this.R||(F.J=Q,Q=null),this.S)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=fs(this,F,y),_=de(this.J),Wt(_,"RID",c),Wt(_,"CVER",22),this.G&&Wt(_,"X-HTTP-Session-Id",this.G),Ia(this,_),Q&&(this.R?y="headers="+ca(wr(Q))+"&"+y:this.u&&On(_,this.u,Q)),os(this.h,F),this.Ra&&Wt(_,"TYPE","init"),this.S?(Wt(_,"$req",y),Wt(_,"SID","null"),F.U=!0,ui(F,_,null)):ui(F,_,y),this.I=2}}else this.I==3&&(c?ju(this,c):this.i.length==0||pa(this.h)||ju(this))};function ju(c,y){var _;y?_=y.l:_=c.V++;const T=de(c.J);Wt(T,"SID",c.M),Wt(T,"RID",_),Wt(T,"AID",c.K),Ia(c,T),c.u&&c.o&&On(T,c.u,c.o),_=new Gn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=fs(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),os(c.h,_),ui(_,T,y)}function Ia(c,y){c.H&&It(c.H,function(_,T){Wt(y,T,_)}),c.l&&It({},function(_,T){Wt(y,T,_)})}function fs(c,y,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var F=c.i;let St=-1;for(;;){const se=["count="+_];St==-1?_>0?(St=F[0].g,se.push("ofs="+St)):St=0:se.push("ofs="+St);let Yt=!0;for(let be=0;be<_;be++){var Q=F[be].g;const _n=F[be].map;if(Q-=St,Q<0)St=Math.max(0,F[be].g-100),Yt=!1;else try{Q="req"+Q+"_"||"";try{var ot=_n instanceof Map?_n:Object.entries(_n);for(const[pi,Xn]of ot){let Wn=Xn;p(Xn)&&(Wn=jn(Xn)),se.push(Q+pi+"="+encodeURIComponent(Wn))}}catch(pi){throw se.push(Q+"type="+encodeURIComponent("_badmap")),pi}}catch{T&&T(_n)}}if(Yt){ot=se.join("&");break t}}ot=void 0}return c=c.i.splice(0,_),y.G=c,ot}function Du(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;Z||I(),ft||(Z(),ft=!0),C.add(y,c),c.A=0}}function Po(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=fr(g(c.Da,c),Mu(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Nu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=fr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),fi(this),Nu(this))};function zo(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Nu(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=de(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),Ia(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Vi(de(y)),_.u=null,_.R=!0,gr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,fi(this),Po(this),ve(19))};function ps(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Lo(c,y){var _=null;if(c.g==y){ps(c),zo(c),c.g=null;var T=2}else if(ma(c.h,y))_=y.G,Oi(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var F=c.D;T=is(),ze(T,new bu(T,_)),Ra(c)}else Du(c);else if(F=y.m,F==3||F==0&&y.X>0||!(T==1&&fd(c,y)||T==2&&Po(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),F){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function Mu(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function Pi(c,y){if(c.j.info("Error code "+y),y==2){var _=g(c.bb,c),T=c.Ua;const F=!T;T=new Yn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||xr(T,"https"),Vi(T),F?ko(T.toString(),_):Er(T.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(y),Ou(c),Sa(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Ou(c){if(c.I=0,c.ja=[],c.l){const y=ls(c.h);(y.length!=0||c.i.length!=0)&&(O(c.ja,y),O(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Vu(c,y,_){var T=_ instanceof Yn?de(_):new Yn(_);if(T.g!="")y&&(T.g=y+"."+T.g),ga(T,T.u);else{var F=d.location;T=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const Q=new Yn(null);T&&xr(Q,T),y&&(Q.g=y),F&&ga(Q,F),_&&(Q.h=_),T=Q}return _=c.G,y=c.wa,_&&y&&Wt(T,_,y),Wt(T,"VER",c.ka),Ia(c,T),T}function ms(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new xa({ab:_})):new ie(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}n=ku.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function gs(){}gs.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Oe.call(this),this.g=new ds(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Tr(this)}w(hn,Oe),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Aa(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=jn(c),c=_);y.i.push(new hd(y.Ya++,c)),y.I==3&&Ra(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,hn.Z.N.call(this)};function Bo(c){cr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}w(Bo,cr);function Uu(){Hn.call(this),this.status=1}w(Uu,Hn);function Tr(c){this.g=c}w(Tr,ku),Tr.prototype.ra=function(){ze(this.g,"a")},Tr.prototype.qa=function(c){ze(this.g,new Bo(c))},Tr.prototype.pa=function(c){ze(this.g,new Uu)},Tr.prototype.oa=function(){ze(this.g,"b")},gs.prototype.createWebChannel=gs.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,T2=function(){return new gs},w2=function(){return is()},b2=Dn,em={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,sh=_e,He.COMPLETE="complete",E2=He,Eu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Vl=Eu,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,_2=ie}).apply(typeof Kc<"u"?Kc:typeof self<"u"?self:typeof window<"u"?window:{});const Jx="@firebase/firestore",tv="4.9.2";/**
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
 */let _o="12.3.0";/**
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
 */const Xa=new p2("@firebase/firestore");function Hs(){return Xa.logLevel}function pt(n,...t){if(Xa.logLevel<=$t.DEBUG){const r=t.map(Xm);Xa.debug(`Firestore (${_o}): ${n}`,...r)}}function sr(n,...t){if(Xa.logLevel<=$t.ERROR){const r=t.map(Xm);Xa.error(`Firestore (${_o}): ${n}`,...r)}}function ao(n,...t){if(Xa.logLevel<=$t.WARN){const r=t.map(Xm);Xa.warn(`Firestore (${_o}): ${n}`,...r)}}function Xm(n){if(typeof n=="string")return n;try{/**
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
*/return(function(r){return JSON.stringify(r)})(n)}catch{return n}}/**
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
 */function wt(n,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,A2(n,a,r)}function A2(n,t,r){let a=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(r!==void 0)try{a+=" CONTEXT: "+JSON.stringify(r)}catch{a+=" CONTEXT: "+r}throw sr(a),new Error(a)}function Gt(n,t,r,a){let o="Unexpected state";typeof r=="string"?o=r:a=r,n||A2(t,o,a)}function Rt(n,t){return n}/**
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
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends vo{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class er{constructor(){this.promise=new Promise(((t,r)=>{this.resolve=t,this.reject=r}))}}/**
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
 */class S2{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Z6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable((()=>r(an.UNAUTHENTICATED)))}shutdown(){}}class J6{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable((()=>r(this.token.user)))}shutdown(){this.changeListener=null}}class tI{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,r){Gt(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,r(m)):Promise.resolve();let u=new er;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new er,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const m=u;t.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new er)}}),0),d()}getToken(){const t=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new S2(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class eI{constructor(t,r,a){this.P=t,this.T=r,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(t,r,a){this.P=t,this.T=r,this.I=a}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(t,r){t.enqueueRetryable((()=>r(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ev{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iI{constructor(t,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,V6(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,r){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?r(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ev(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((r=>r?(Gt(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new ev(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let a=0;a<n;a++)r[a]=Math.floor(256*Math.random());return r}/**
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
 */class Wm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=rI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<r&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function nm(n,t){const r=Math.min(n.length,t.length);for(let a=0;a<r;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return Rp(o)===Rp(u)?Ut(o,u):Rp(o)?1:-1}return Ut(n.length,t.length)}const aI=55296,sI=57343;function Rp(n){const t=n.charCodeAt(0);return t>=aI&&t<=sI}function so(n,t,r){return n.length===t.length&&n.every(((a,o)=>r(a,t[o])))}/**
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
 */const nv="__name__";class _i{constructor(t,r,a){r===void 0?r=0:r>t.length&&wt(637,{offset:r,range:t.length}),a===void 0?a=t.length-r:a>t.length-r&&wt(1746,{length:a,range:t.length-r}),this.segments=t,this.offset=r,this.len=a}get length(){return this.len}isEqual(t){return _i.comparator(this,t)===0}child(t){const r=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach((a=>{r.push(a)})):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,a=this.limit();r<a;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){const a=Math.min(t.length,r.length);for(let o=0;o<a;o++){const u=_i.compareSegments(t.get(o),r.get(o));if(u!==0)return u}return Ut(t.length,r.length)}static compareSegments(t,r){const a=_i.isNumericId(t),o=_i.isNumericId(r);return a&&!o?-1:!a&&o?1:a&&o?_i.extractNumericId(t).compare(_i.extractNumericId(r)):nm(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wr.fromString(t.substring(4,t.length-2))}}class ae extends _i{construct(t,r,a){return new ae(t,r,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const r=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);r.push(...a.split("/").filter((o=>o.length>0)))}return new ae(r)}static emptyPath(){return new ae([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends _i{construct(t,r,a){return new We(t,r,a)}static isValidIdentifier(t){return oI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nv}static keyField(){return new We([nv])}static fromServerFormat(t){const r=[];let a="",o=0;const u=()=>{if(a.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(a),a=""};let d=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new dt(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new dt(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=m,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(a+=p,o++):(u(),o++)}if(u(),d)throw new dt(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(r)}static emptyPath(){return new We([])}}/**
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
 */class vt{constructor(t){this.path=t}static fromPath(t){return new vt(ae.fromString(t))}static fromName(t){return new vt(ae.fromString(t).popFirst(5))}static empty(){return new vt(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ae.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return ae.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vt(new ae(t.slice()))}}/**
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
 */function R2(n,t,r){if(!r)throw new dt(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function lI(n,t,r,a){if(t===!0&&a===!0)throw new dt(it.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function iv(n){if(!vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rv(n){if(vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function I2(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $h(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":wt(12329,{type:typeof n})}function or(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new dt(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=$h(n);throw new dt(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return n}/**
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
 */function Ne(n,t){const r={typeString:n};return t&&(r.value=t),r}function cu(n,t){if(!I2(n))throw new dt(it.INVALID_ARGUMENT,"JSON must be an object");let r;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){r=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){r=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){r=`Expected '${a}' field to equal '${u.value}'`;break}}if(r)throw new dt(it.INVALID_ARGUMENT,r);return!0}/**
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
 */const av=-62135596800,sv=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),a=Math.floor((t-1e3*r)*sv);return new le(r,a)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<av)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sv}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(cu(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-av;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ne("string",le._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new le(0,0))}static max(){return new At(new le(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tu=-1;function uI(n,t){const r=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=At.fromTimestamp(a===1e9?new le(r+1,0):new le(r,a));return new Jr(o,vt.empty(),t)}function cI(n){return new Jr(n.readTime,n.key,tu)}class Jr{constructor(t,r,a){this.readTime=t,this.documentKey=r,this.largestBatchId=a}static min(){return new Jr(At.min(),vt.empty(),tu)}static max(){return new Jr(At.max(),vt.empty(),tu)}}function hI(n,t){let r=n.readTime.compareTo(t.readTime);return r!==0?r:(r=vt.comparator(n.documentKey,t.documentKey),r!==0?r:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const dI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Eo(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==dI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)}),(r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)}))}catch(t){return this.next(void 0,t)}next(t,r){return this.callbackAttached&&wt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(r,u).next(a,o)}}))}toPromise(){return new Promise(((t,r)=>{this.next(t,r)}))}wrapUserFunction(t){try{const r=t();return r instanceof st?r:st.resolve(r)}catch(r){return st.reject(r)}}wrapSuccess(t,r){return t?this.wrapUserFunction((()=>t(r))):st.resolve(r)}wrapFailure(t,r){return t?this.wrapUserFunction((()=>t(r))):st.reject(r)}static resolve(t){return new st(((r,a)=>{r(t)}))}static reject(t){return new st(((r,a)=>{a(t)}))}static waitFor(t){return new st(((r,a)=>{let o=0,u=0,d=!1;t.forEach((p=>{++o,p.next((()=>{++u,d&&u===o&&r()}),(m=>a(m)))})),d=!0,u===o&&r()}))}static or(t){let r=st.resolve(!1);for(const a of t)r=r.next((o=>o?st.resolve(o):a()));return r}static forEach(t,r){const a=[];return t.forEach(((o,u)=>{a.push(r.call(this,o,u))})),this.waitFor(a)}static mapArray(t,r){return new st(((a,o)=>{const u=t.length,d=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;r(t[g]).next((v=>{d[g]=v,++p,p===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,r){return new st(((a,o)=>{const u=()=>{t()===!0?r().next((()=>{u()}),o):a()};u()}))}}function pI(n){const t=n.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function bo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fh{constructor(t,r){this.previousValue=t,r&&(r.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>r.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Fh.ce=-1;/**
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
 */const Zm=-1;function Kh(n){return n==null}function bh(n){return n===0&&1/n==-1/0}function mI(n){return typeof n=="number"&&Number.isInteger(n)&&!bh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const C2="";function gI(n){let t="";for(let r=0;r<n.length;r++)t.length>0&&(t=ov(t)),t=yI(n.get(r),t);return ov(t)}function yI(n,t){let r=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":r+="";break;case C2:r+="";break;default:r+=u}}return r}function ov(n){return n+C2+""}/**
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
 */function lv(n){let t=0;for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t++;return t}function aa(n,t){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t(r,n[r])}function j2(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class me{constructor(t,r){this.comparator=t,this.root=r||Xe.EMPTY}insert(t,r){return new me(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}indexOf(t){let r=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return r+a.left.size;o<0?a=a.left:(r+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((r,a)=>(t(r,a),!1)))}toString(){const t=[];return this.inorderTraversal(((r,a)=>(t.push(`${r}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qc(this.root,t,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qc(this.root,t,this.comparator,!0)}}class qc{constructor(t,r,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=r?a(t.key,r):1,r&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,r,a,o,u){this.key=t,this.value=r,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,a,o,u){return new Xe(t??this.key,r??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,r,a),null):u===0?o.copy(null,r,null,null,null):o.copy(null,null,null,null,o.right.insert(t,r,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let a,o=this;if(r(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,r),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),r(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,r))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw wt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw wt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw wt(57766)}get value(){throw wt(16141)}get color(){throw wt(16727)}get left(){throw wt(29726)}get right(){throw wt(36894)}copy(t,r,a,o,u){return this}insert(t,r,a){return new Xe(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((r,a)=>(t(r),!1)))}forEachInRange(t,r){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;r(o.key)}}forEachWhile(t,r){let a;for(a=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new uv(this.data.getIterator())}getIteratorFrom(t){return new uv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach((a=>{r=r.add(a)})),r}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const r=this.data.getIterator(),a=t.data.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((r=>{t.push(r)})),t}toString(){const t=[];return this.forEach((r=>t.push(r))),"SortedSet("+t.toString()+")"}copy(t){const r=new Pe(this.comparator);return r.data=t,r}}class uv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new Cn([])}unionWith(t){let r=new Pe(We.comparator);for(const a of this.fields)r=r.add(a);for(const a of t)r=r.add(a);return new Cn(r.toArray())}covers(t){for(const r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return so(this.fields,t.fields,((r,a)=>r.isEqual(a)))}}/**
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
 */class D2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const r=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new D2("Invalid base64 string: "+u):u}})(t);return new Ze(r)}static fromUint8Array(t){const r=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Ze(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const xI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ta(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const r=xI.exec(n);if(Gt(!!r,46558,{timestamp:n}),r[1]){let o=r[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ea(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const N2="server_timestamp",M2="__type__",O2="__previous_value__",V2="__local_write_time__";function Jm(n){return(n?.mapValue?.fields||{})[M2]?.stringValue===N2}function qh(n){const t=n.mapValue.fields[O2];return Jm(t)?qh(t):t}function eu(n){const t=ta(n.mapValue.fields[V2].timestampValue);return new le(t.seconds,t.nanos)}/**
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
 */class vI{constructor(t,r,a,o,u,d,p,m,g,v){this.databaseId=t,this.appId=r,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const wh="(default)";class nu{constructor(t,r){this.projectId=t,this.database=r||wh}static empty(){return new nu("","")}get isDefaultDatabase(){return this.database===wh}isEqual(t){return t instanceof nu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const k2="__type__",_I="__max__",Hc={mapValue:{}},U2="__vector__",Th="value";function na(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jm(n)?4:bI(n)?9007199254740991:EI(n)?10:11:wt(28295,{value:n})}function Ri(n,t){if(n===t)return!0;const r=na(n);if(r!==na(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return eu(n).isEqual(eu(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=ta(o.timestampValue),p=ta(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ea(o.bytesValue).isEqual(ea(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Ae(o.geoPointValue.latitude)===Ae(u.geoPointValue.latitude)&&Ae(o.geoPointValue.longitude)===Ae(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Ae(o.integerValue)===Ae(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Ae(o.doubleValue),p=Ae(u.doubleValue);return d===p?bh(d)===bh(p):isNaN(d)&&isNaN(p)}return!1})(n,t);case 9:return so(n.arrayValue.values||[],t.arrayValue.values||[],Ri);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},p=u.mapValue.fields||{};if(lv(d)!==lv(p))return!1;for(const m in d)if(d.hasOwnProperty(m)&&(p[m]===void 0||!Ri(d[m],p[m])))return!1;return!0})(n,t);default:return wt(52216,{left:n})}}function iu(n,t){return(n.values||[]).find((r=>Ri(r,t)))!==void 0}function oo(n,t){if(n===t)return 0;const r=na(n),a=na(t);if(r!==a)return Ut(r,a);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const p=Ae(u.integerValue||u.doubleValue),m=Ae(d.integerValue||d.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return cv(n.timestampValue,t.timestampValue);case 4:return cv(eu(n),eu(t));case 5:return nm(n.stringValue,t.stringValue);case 6:return(function(u,d){const p=ea(u),m=ea(d);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const p=u.split("/"),m=d.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ut(p[g],m[g]);if(v!==0)return v}return Ut(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const p=Ut(Ae(u.latitude),Ae(d.latitude));return p!==0?p:Ut(Ae(u.longitude),Ae(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return hv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const p=u.fields||{},m=d.fields||{},g=p[Th]?.arrayValue,v=m[Th]?.arrayValue,w=Ut(g?.values?.length||0,v?.values?.length||0);return w!==0?w:hv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Hc.mapValue&&d===Hc.mapValue)return 0;if(u===Hc.mapValue)return 1;if(d===Hc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=d.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let w=0;w<m.length&&w<v.length;++w){const A=nm(m[w],v[w]);if(A!==0)return A;const R=oo(p[m[w]],g[v[w]]);if(R!==0)return R}return Ut(m.length,v.length)})(n.mapValue,t.mapValue);default:throw wt(23264,{he:r})}}function cv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const r=ta(n),a=ta(t),o=Ut(r.seconds,a.seconds);return o!==0?o:Ut(r.nanos,a.nanos)}function hv(n,t){const r=n.values||[],a=t.values||[];for(let o=0;o<r.length&&o<a.length;++o){const u=oo(r[o],a[o]);if(u)return u}return Ut(r.length,a.length)}function lo(n){return im(n)}function im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(r){const a=ta(r);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(r){return ea(r).toBase64()})(n.bytesValue):"referenceValue"in n?(function(r){return vt.fromName(r).toString()})(n.referenceValue):"geoPointValue"in n?(function(r){return`geo(${r.latitude},${r.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(r){let a="[",o=!0;for(const u of r.values||[])o?o=!1:a+=",",a+=im(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(r){const a=Object.keys(r.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${im(r.fields[d])}`;return o+"}"})(n.mapValue):wt(61005,{value:n})}function oh(n){switch(na(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=qh(n);return t?16+oh(t):16;case 5:return 2*n.stringValue.length;case 6:return ea(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+oh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return aa(a.fields,((u,d)=>{o+=u.length+oh(d)})),o})(n.mapValue);default:throw wt(13486,{value:n})}}function dv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rm(n){return!!n&&"integerValue"in n}function tg(n){return!!n&&"arrayValue"in n}function fv(n){return!!n&&"nullValue"in n}function pv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lh(n){return!!n&&"mapValue"in n}function EI(n){return(n?.mapValue?.fields||{})[k2]?.stringValue===U2}function $l(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return aa(n.mapValue.fields,((r,a)=>t.mapValue.fields[r]=$l(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(n.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=$l(n.arrayValue.values[r]);return t}return{...n}}function bI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_I}/**
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
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let a=0;a<t.length-1;++a)if(r=(r.mapValue.fields||{})[t.get(a)],!lh(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=$l(r)}setAll(t){let r=We.emptyPath(),a={},o=[];t.forEach(((d,p)=>{if(!r.isImmediateParentOf(p)){const m=this.getFieldsMap(r);this.applyChanges(m,a,o),a={},o=[],r=p.popLast()}d?a[p.lastSegment()]=$l(d):o.push(p.lastSegment())}));const u=this.getFieldsMap(r);this.applyChanges(u,a,o)}delete(t){const r=this.field(t.popLast());lh(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Ri(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=r.mapValue.fields[t.get(a)];lh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},r.mapValue.fields[t.get(a)]=o),r=o}return r.mapValue.fields}applyChanges(t,r,a){aa(r,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new xn($l(this.value))}}function P2(n){const t=[];return aa(n.fields,((r,a)=>{const o=new We([r]);if(lh(a)){const u=P2(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new Cn(t)}/**
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
 */class sn{constructor(t,r,a,o,u,d,p){this.key=t,this.documentType=r,this.version=a,this.readTime=o,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(t){return new sn(t,0,At.min(),At.min(),At.min(),xn.empty(),0)}static newFoundDocument(t,r,a,o){return new sn(t,1,r,At.min(),a,o,0)}static newNoDocument(t,r){return new sn(t,2,r,At.min(),At.min(),xn.empty(),0)}static newUnknownDocument(t,r){return new sn(t,3,r,At.min(),At.min(),xn.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ah{constructor(t,r){this.position=t,this.inclusive=r}}function mv(n,t,r){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),r.key):a=oo(d,r.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function gv(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let r=0;r<n.position.length;r++)if(!Ri(n.position[r],t.position[r]))return!1;return!0}/**
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
 */class ru{constructor(t,r="asc"){this.field=t,this.dir=r}}function wI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class z2{}class De extends z2{constructor(t,r,a){super(),this.field=t,this.op=r,this.value=a}static create(t,r,a){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,a):new AI(t,r,a):r==="array-contains"?new II(t,a):r==="in"?new CI(t,a):r==="not-in"?new jI(t,a):r==="array-contains-any"?new DI(t,a):new De(t,r,a)}static createKeyFieldInFilter(t,r,a){return r==="in"?new SI(t,a):new RI(t,a)}matches(t){const r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(oo(r,this.value)):r!==null&&na(this.value)===na(r)&&this.matchesComparison(oo(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ri extends z2{constructor(t,r){super(),this.filters=t,this.op=r,this.Pe=null}static create(t,r){return new ri(t,r)}matches(t){return L2(this)?this.filters.find((r=>!r.matches(t)))===void 0:this.filters.find((r=>r.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,r)=>t.concat(r.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function L2(n){return n.op==="and"}function B2(n){return TI(n)&&L2(n)}function TI(n){for(const t of n.filters)if(t instanceof ri)return!1;return!0}function am(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+lo(n.value);if(B2(n))return n.filters.map((t=>am(t))).join(",");{const t=n.filters.map((r=>am(r))).join(",");return`${n.op}(${t})`}}function $2(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ri(a.value,o.value)})(n,t):n instanceof ri?(function(a,o){return o instanceof ri&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,p)=>u&&$2(d,o.filters[p])),!0):!1})(n,t):void wt(19439)}function F2(n){return n instanceof De?(function(r){return`${r.field.canonicalString()} ${r.op} ${lo(r.value)}`})(n):n instanceof ri?(function(r){return r.op.toString()+" {"+r.getFilters().map(F2).join(" ,")+"}"})(n):"Filter"}class AI extends De{constructor(t,r,a){super(t,r,a),this.key=vt.fromName(a.referenceValue)}matches(t){const r=vt.comparator(t.key,this.key);return this.matchesComparison(r)}}class SI extends De{constructor(t,r){super(t,"in",r),this.keys=K2("in",r)}matches(t){return this.keys.some((r=>r.isEqual(t.key)))}}class RI extends De{constructor(t,r){super(t,"not-in",r),this.keys=K2("not-in",r)}matches(t){return!this.keys.some((r=>r.isEqual(t.key)))}}function K2(n,t){return(t.arrayValue?.values||[]).map((r=>vt.fromName(r.referenceValue)))}class II extends De{constructor(t,r){super(t,"array-contains",r)}matches(t){const r=t.data.field(this.field);return tg(r)&&iu(r.arrayValue,this.value)}}class CI extends De{constructor(t,r){super(t,"in",r)}matches(t){const r=t.data.field(this.field);return r!==null&&iu(this.value.arrayValue,r)}}class jI extends De{constructor(t,r){super(t,"not-in",r)}matches(t){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!iu(this.value.arrayValue,r)}}class DI extends De{constructor(t,r){super(t,"array-contains-any",r)}matches(t){const r=t.data.field(this.field);return!(!tg(r)||!r.arrayValue.values)&&r.arrayValue.values.some((a=>iu(this.value.arrayValue,a)))}}/**
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
 */class NI{constructor(t,r=null,a=[],o=[],u=null,d=null,p=null){this.path=t,this.collectionGroup=r,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function yv(n,t=null,r=[],a=[],o=null,u=null,d=null){return new NI(n,t,r,a,o,u,d)}function eg(n){const t=Rt(n);if(t.Te===null){let r=t.path.canonicalString();t.collectionGroup!==null&&(r+="|cg:"+t.collectionGroup),r+="|f:",r+=t.filters.map((a=>am(a))).join(","),r+="|ob:",r+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Kh(t.limit)||(r+="|l:",r+=t.limit),t.startAt&&(r+="|lb:",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((a=>lo(a))).join(",")),t.endAt&&(r+="|ub:",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((a=>lo(a))).join(",")),t.Te=r}return t.Te}function ng(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!wI(n.orderBy[r],t.orderBy[r]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(!$2(n.filters[r],t.filters[r]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!gv(n.startAt,t.startAt)&&gv(n.endAt,t.endAt)}function sm(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class wo{constructor(t,r=null,a=[],o=[],u=null,d="F",p=null,m=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function MI(n,t,r,a,o,u,d,p){return new wo(n,t,r,a,o,u,d,p)}function ig(n){return new wo(n)}function xv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function q2(n){return n.collectionGroup!==null}function Fl(n){const t=Rt(n);if(t.Ie===null){t.Ie=[];const r=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),r.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Pe(We.comparator);return d.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(t).forEach((u=>{r.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new ru(u,a))})),r.has(We.keyField().canonicalString())||t.Ie.push(new ru(We.keyField(),a))}return t.Ie}function bi(n){const t=Rt(n);return t.Ee||(t.Ee=OI(t,Fl(n))),t.Ee}function OI(n,t){if(n.limitType==="F")return yv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new ru(o.field,u)}));const r=n.endAt?new Ah(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Ah(n.startAt.position,n.startAt.inclusive):null;return yv(n.path,n.collectionGroup,t,n.filters,n.limit,r,a)}}function om(n,t){const r=n.filters.concat([t]);return new wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),r,n.limit,n.limitType,n.startAt,n.endAt)}function lm(n,t,r){return new wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,r,n.startAt,n.endAt)}function Hh(n,t){return ng(bi(n),bi(t))&&n.limitType===t.limitType}function H2(n){return`${eg(bi(n))}|lt:${n.limitType}`}function Gs(n){return`Query(target=${(function(r){let a=r.path.canonicalString();return r.collectionGroup!==null&&(a+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(a+=`, filters: [${r.filters.map((o=>F2(o))).join(", ")}]`),Kh(r.limit)||(a+=", limit: "+r.limit),r.orderBy.length>0&&(a+=`, orderBy: [${r.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),r.startAt&&(a+=", startAt: ",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map((o=>lo(o))).join(",")),r.endAt&&(a+=", endAt: ",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map((o=>lo(o))).join(",")),`Target(${a})`})(bi(n))}; limitType=${n.limitType})`}function Gh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Fl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,p,m){const g=mv(d,p,m);return d.inclusive?g<=0:g<0})(a.startAt,Fl(a),o)||a.endAt&&!(function(d,p,m){const g=mv(d,p,m);return d.inclusive?g>=0:g>0})(a.endAt,Fl(a),o))})(n,t)}function VI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function G2(n){return(t,r)=>{let a=!1;for(const o of Fl(n)){const u=kI(o,t,r);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function kI(n,t,r){const a=n.field.isKeyField()?vt.comparator(t.key,r.key):(function(u,d,p){const m=d.data.field(u),g=p.data.field(u);return m!==null&&g!==null?oo(m,g):wt(42886)})(n.field,t,r);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return wt(19790,{direction:n.dir})}}/**
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
 */class Ja{constructor(t,r){this.mapKeyFn=t,this.equalsFn=r,this.inner={},this.innerSize=0}get(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,r){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,r]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,r]);o.push([t,r]),this.innerSize++}delete(t){const r=this.mapKeyFn(t),a=this.inner[r];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[r]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){aa(this.inner,((r,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return j2(this.inner)}size(){return this.innerSize}}/**
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
 */const UI=new me(vt.comparator);function lr(){return UI}const Y2=new me(vt.comparator);function kl(...n){let t=Y2;for(const r of n)t=t.insert(r.key,r);return t}function Q2(n){let t=Y2;return n.forEach(((r,a)=>t=t.insert(r,a.overlayedDocument))),t}function Ha(){return Kl()}function X2(){return Kl()}function Kl(){return new Ja((n=>n.toString()),((n,t)=>n.isEqual(t)))}const PI=new me(vt.comparator),zI=new Pe(vt.comparator);function Pt(...n){let t=zI;for(const r of n)t=t.add(r);return t}const LI=new Pe(Ut);function BI(){return LI}/**
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
 */function rg(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bh(t)?"-0":t}}function W2(n){return{integerValue:""+n}}function Z2(n,t){return mI(t)?W2(t):rg(n,t)}/**
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
 */class Yh{constructor(){this._=void 0}}function $I(n,t,r){return n instanceof Sh?(function(o,u){const d={fields:{[M2]:{stringValue:N2},[V2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jm(u)&&(u=qh(u)),u&&(d.fields[O2]=u),{mapValue:d}})(r,t):n instanceof au?tE(n,t):n instanceof su?eE(n,t):(function(o,u){const d=J2(o,u),p=vv(d)+vv(o.Ae);return rm(d)&&rm(o.Ae)?W2(p):rg(o.serializer,p)})(n,t)}function FI(n,t,r){return n instanceof au?tE(n,t):n instanceof su?eE(n,t):r}function J2(n,t){return n instanceof ou?(function(a){return rm(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Sh extends Yh{}class au extends Yh{constructor(t){super(),this.elements=t}}function tE(n,t){const r=nE(t);for(const a of n.elements)r.some((o=>Ri(o,a)))||r.push(a);return{arrayValue:{values:r}}}class su extends Yh{constructor(t){super(),this.elements=t}}function eE(n,t){let r=nE(t);for(const a of n.elements)r=r.filter((o=>!Ri(o,a)));return{arrayValue:{values:r}}}class ou extends Yh{constructor(t,r){super(),this.serializer=t,this.Ae=r}}function vv(n){return Ae(n.integerValue||n.doubleValue)}function nE(n){return tg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class KI{constructor(t,r){this.field=t,this.transform=r}}function qI(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof au&&o instanceof au||a instanceof su&&o instanceof su?so(a.elements,o.elements,Ri):a instanceof ou&&o instanceof ou?Ri(a.Ae,o.Ae):a instanceof Sh&&o instanceof Sh})(n.transform,t.transform)}class HI{constructor(t,r){this.version=t,this.transformResults=r}}class wi{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new wi}static exists(t){return new wi(void 0,t)}static updateTime(t){return new wi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function uh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qh{}function iE(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new aE(n.key,wi.none()):new hu(n.key,n.data,wi.none());{const r=n.data,a=xn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let d=r.field(u);d===null&&u.length>1&&(u=u.popLast(),d=r.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new sa(n.key,a,new Cn(o.toArray()),wi.none())}}function GI(n,t,r){n instanceof hu?(function(o,u,d){const p=o.value.clone(),m=Ev(o.fieldTransforms,u,d.transformResults);p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,r):n instanceof sa?(function(o,u,d){if(!uh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Ev(o.fieldTransforms,u,d.transformResults),m=u.data;m.setAll(rE(o)),m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,r):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,r)}function ql(n,t,r,a){return n instanceof hu?(function(u,d,p,m){if(!uh(u.precondition,d))return p;const g=u.value.clone(),v=bv(u.fieldTransforms,m,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,r,a):n instanceof sa?(function(u,d,p,m){if(!uh(u.precondition,d))return p;const g=bv(u.fieldTransforms,m,d),v=d.data;return v.setAll(rE(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,r,a):(function(u,d,p){return uh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(n,t,r)}function YI(n,t){let r=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=J2(a.transform,o||null);u!=null&&(r===null&&(r=xn.empty()),r.set(a.field,u))}return r||null}function _v(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&so(a,o,((u,d)=>qI(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class hu extends Qh{constructor(t,r,a,o=[]){super(),this.key=t,this.value=r,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Qh{constructor(t,r,a,o,u=[]){super(),this.key=t,this.data=r,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function rE(n){const t=new Map;return n.fieldMask.fields.forEach((r=>{if(!r.isEmpty()){const a=n.data.field(r);t.set(r,a)}})),t}function Ev(n,t,r){const a=new Map;Gt(n.length===r.length,32656,{Re:r.length,Ve:n.length});for(let o=0;o<r.length;o++){const u=n[o],d=u.transform,p=t.data.field(u.field);a.set(u.field,FI(d,p,r[o]))}return a}function bv(n,t,r){const a=new Map;for(const o of n){const u=o.transform,d=r.data.field(o.field);a.set(o.field,$I(u,d,t))}return a}class aE extends Qh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QI extends Qh{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XI{constructor(t,r,a,o){this.batchId=t,this.localWriteTime=r,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,r){const a=r.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&GI(u,t,a[o])}}applyToLocalView(t,r){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(r=ql(a,t,r,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(r=ql(a,t,r,this.localWriteTime));return r}applyToLocalDocumentSet(t,r){const a=X2();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=r.has(o.key)?null:p;const m=iE(d,p);m!==null&&a.set(o.key,m),d.isValidDocument()||d.convertToNoDocument(At.min())})),a}keys(){return this.mutations.reduce(((t,r)=>t.add(r.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&so(this.mutations,t.mutations,((r,a)=>_v(r,a)))&&so(this.baseMutations,t.baseMutations,((r,a)=>_v(r,a)))}}class ag{constructor(t,r,a,o){this.batch=t,this.commitVersion=r,this.mutationResults=a,this.docVersions=o}static from(t,r,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return PI})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new ag(t,r,a,o)}}/**
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
 */let WI=class{constructor(t,r){this.largestBatchId=t,this.mutation=r}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ZI{constructor(t,r){this.count=t,this.unchangedNames=r}}/**
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
 */var Ce,Bt;function JI(n){switch(n){case it.OK:return wt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return wt(15467,{code:n})}}function sE(n){if(n===void 0)return sr("GRPC error has no .code"),it.UNKNOWN;switch(n){case Ce.OK:return it.OK;case Ce.CANCELLED:return it.CANCELLED;case Ce.UNKNOWN:return it.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return it.INTERNAL;case Ce.UNAVAILABLE:return it.UNAVAILABLE;case Ce.UNAUTHENTICATED:return it.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case Ce.NOT_FOUND:return it.NOT_FOUND;case Ce.ALREADY_EXISTS:return it.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return it.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case Ce.ABORTED:return it.ABORTED;case Ce.OUT_OF_RANGE:return it.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return it.UNIMPLEMENTED;case Ce.DATA_LOSS:return it.DATA_LOSS;default:return wt(39323,{code:n})}}(Bt=Ce||(Ce={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function t3(){return new TextEncoder}/**
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
 */const e3=new Wr([4294967295,4294967295],0);function wv(n){const t=t3().encode(n),r=new v2;return r.update(t),new Uint8Array(r.digest())}function Tv(n){const t=new DataView(n.buffer),r=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Wr([r,a],0),new Wr([o,u],0)]}class sg{constructor(t,r,a){if(this.bitmap=t,this.padding=r,this.hashCount=a,r<0||r>=8)throw new Ul(`Invalid padding: ${r}`);if(a<0)throw new Ul(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ul(`Invalid hash count: ${a}`);if(t.length===0&&r!==0)throw new Ul(`Invalid padding when bitmap length is 0: ${r}`);this.ge=8*t.length-r,this.pe=Wr.fromNumber(this.ge)}ye(t,r,a){let o=t.add(r.multiply(Wr.fromNumber(a)));return o.compare(e3)===1&&(o=new Wr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const r=wv(t),[a,o]=Tv(r);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,r,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new sg(u,o,r);return a.forEach((p=>d.insert(p))),d}insert(t){if(this.ge===0)return;const r=wv(t),[a,o]=Tv(r);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const r=Math.floor(t/8),a=t%8;this.bitmap[r]|=1<<a}}class Ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xh{constructor(t,r,a,o,u){this.snapshotVersion=t,this.targetChanges=r,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,r,a){const o=new Map;return o.set(t,du.createSynthesizedTargetChangeForCurrentChange(t,r,a)),new Xh(At.min(),o,new me(Ut),lr(),Pt())}}class du{constructor(t,r,a,o,u){this.resumeToken=t,this.current=r,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,r,a){return new du(a,r,Pt(),Pt(),Pt())}}/**
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
 */class ch{constructor(t,r,a,o){this.be=t,this.removedTargetIds=r,this.key=a,this.De=o}}class oE{constructor(t,r){this.targetId=t,this.Ce=r}}class lE{constructor(t,r,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=r,this.resumeToken=a,this.cause=o}}class Av{constructor(){this.ve=0,this.Fe=Sv(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),r=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:r=r.add(o);break;case 1:a=a.add(o);break;default:wt(38017,{changeType:u})}})),new du(this.Me,this.xe,t,r,a)}qe(){this.Oe=!1,this.Fe=Sv()}Qe(t,r){this.Oe=!0,this.Fe=this.Fe.insert(t,r)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class n3{constructor(t){this.Ge=t,this.ze=new Map,this.je=lr(),this.Je=Gc(),this.He=Gc(),this.Ye=new me(Ut)}Ze(t){for(const r of t.be)t.De&&t.De.isFoundDocument()?this.Xe(r,t.De):this.et(r,t.key,t.De);for(const r of t.removedTargetIds)this.et(r,t.key,t.De)}tt(t){this.forEachTarget(t,(r=>{const a=this.nt(r);switch(t.state){case 0:this.rt(r)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(r);break;case 3:this.rt(r)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(r)&&(this.it(r),a.Le(t.resumeToken));break;default:wt(56790,{state:t.state})}}))}forEachTarget(t,r){t.targetIds.length>0?t.targetIds.forEach(r):this.ze.forEach(((a,o)=>{this.rt(o)&&r(o)}))}st(t){const r=t.targetId,a=t.Ce.count,o=this.ot(r);if(o){const u=o.target;if(sm(u))if(a===0){const d=new vt(u.path);this.et(r,d,sn.newNoDocument(d,At.min()))}else Gt(a===1,20013,{expectedCount:a});else{const d=this._t(r);if(d!==a){const p=this.ut(t),m=p?this.ct(p,t,d):1;if(m!==0){this.it(r);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(r,g)}}}}}ut(t){const r=t.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=r;let d,p;try{d=ea(a).toUint8Array()}catch(m){if(m instanceof D2)return ao("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new sg(d,o,u)}catch(m){return ao(m instanceof Ul?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(t,r,a){return r.Ce.count===a-this.Pt(t,r.targetId)?0:2}Pt(t,r){const a=this.Ge.getRemoteKeysForTarget(r);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(r,u,null),o++)})),o}Tt(t){const r=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&sm(p.target)){const m=new vt(p.target.path);this.It(m).has(d)||this.Et(d,m)||this.et(d,m,sn.newNoDocument(m,t))}u.Be&&(r.set(d,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new Xh(t,r,this.Ye,this.je,a);return this.je=lr(),this.Je=Gc(),this.He=Gc(),this.Ye=new me(Ut),o}Xe(t,r){if(!this.rt(t))return;const a=this.Et(t,r.key)?2:0;this.nt(t).Qe(r.key,a),this.je=this.je.insert(r.key,r),this.Je=this.Je.insert(r.key,this.It(r.key).add(t)),this.He=this.He.insert(r.key,this.dt(r.key).add(t))}et(t,r,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,r)?o.Qe(r,1):o.$e(r),this.He=this.He.insert(r,this.dt(r).delete(t)),this.He=this.He.insert(r,this.dt(r).add(t)),a&&(this.je=this.je.insert(r,a))}removeTarget(t){this.ze.delete(t)}_t(t){const r=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let r=this.ze.get(t);return r||(r=new Av,this.ze.set(t,r)),r}dt(t){let r=this.He.get(t);return r||(r=new Pe(Ut),this.He=this.He.insert(t,r)),r}It(t){let r=this.Je.get(t);return r||(r=new Pe(Ut),this.Je=this.Je.insert(t,r)),r}rt(t){const r=this.ot(t)!==null;return r||pt("WatchChangeAggregator","Detected inactive target",t),r}ot(t){const r=this.ze.get(t);return r&&r.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Av),this.Ge.getRemoteKeysForTarget(t).forEach((r=>{this.et(t,r,null)}))}Et(t,r){return this.Ge.getRemoteKeysForTarget(t).has(r)}}function Gc(){return new me(vt.comparator)}function Sv(){return new me(vt.comparator)}const i3={asc:"ASCENDING",desc:"DESCENDING"},r3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a3={and:"AND",or:"OR"};class s3{constructor(t,r){this.databaseId=t,this.useProto3Json=r}}function um(n,t){return n.useProto3Json||Kh(t)?t:{value:t}}function Rh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function o3(n,t){return Rh(n,t.toTimestamp())}function Ti(n){return Gt(!!n,49232),At.fromTimestamp((function(r){const a=ta(r);return new le(a.seconds,a.nanos)})(n))}function og(n,t){return cm(n,t).canonicalString()}function cm(n,t){const r=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?r:r.child(t)}function cE(n){const t=ae.fromString(n);return Gt(mE(t),10190,{key:t.toString()}),t}function hm(n,t){return og(n.databaseId,t.path)}function Ip(n,t){const r=cE(t);if(r.get(1)!==n.databaseId.projectId)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+n.databaseId.projectId);if(r.get(3)!==n.databaseId.database)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+n.databaseId.database);return new vt(dE(r))}function hE(n,t){return og(n.databaseId,t)}function l3(n){const t=cE(n);return t.length===4?ae.emptyPath():dE(t)}function dm(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dE(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rv(n,t,r){return{name:hm(n,t),fields:r.value.mapValue.fields}}function u3(n,t){let r;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:wt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Gt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Gt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:sE(g.code);return new dt(v,g.message||"")})(d);r=new lE(a,o,u,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Ip(n,a.document.name),u=Ti(a.document.updateTime),d=a.document.createTime?Ti(a.document.createTime):At.min(),p=new xn({mapValue:{fields:a.document.fields}}),m=sn.newFoundDocument(o,u,d,p),g=a.targetIds||[],v=a.removedTargetIds||[];r=new ch(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Ip(n,a.document),u=a.readTime?Ti(a.readTime):At.min(),d=sn.newNoDocument(o,u),p=a.removedTargetIds||[];r=new ch([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Ip(n,a.document),u=a.removedTargetIds||[];r=new ch([],u,o,null)}else{if(!("filter"in t))return wt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new ZI(o,u),p=a.targetId;r=new oE(p,d)}}return r}function c3(n,t){let r;if(t instanceof hu)r={update:Rv(n,t.key,t.value)};else if(t instanceof aE)r={delete:hm(n,t.key)};else if(t instanceof sa)r={update:Rv(n,t.key,t.data),updateMask:v3(t.fieldMask)};else{if(!(t instanceof QI))return wt(16599,{Vt:t.type});r={verify:hm(n,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const p=d.transform;if(p instanceof Sh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof au)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof su)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ou)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw wt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(r.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:o3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:wt(27497)})(n,t.precondition)),r}function h3(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((r=>(function(o,u){let d=o.updateTime?Ti(o.updateTime):Ti(u);return d.isEqual(At.min())&&(d=Ti(u)),new HI(d,o.transformResults||[])})(r,t)))):[]}function d3(n,t){return{documents:[hE(n,t.path)]}}function f3(n,t){const r={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),r.structuredQuery.from=[{collectionId:a.lastSegment()}]),r.parent=hE(n,o);const u=(function(g){if(g.length!==0)return pE(ri.create(g,"and"))})(t.filters);u&&(r.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(A){return{field:Ys(A.field),direction:g3(A.dir)}})(v)))})(t.orderBy);d&&(r.structuredQuery.orderBy=d);const p=um(n,t.limit);return p!==null&&(r.structuredQuery.limit=p),t.startAt&&(r.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(r.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:r,parent:o}}function p3(n){let t=l3(n.parent);const r=n.structuredQuery,a=r.from?r.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const v=r.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];r.where&&(u=(function(w){const A=fE(w);return A instanceof ri&&B2(A)?A.getFilters():[A]})(r.where));let d=[];r.orderBy&&(d=(function(w){return w.map((A=>(function(O){return new ru(Qs(O.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(A)))})(r.orderBy));let p=null;r.limit&&(p=(function(w){let A;return A=typeof w=="object"?w.value:w,Kh(A)?null:A})(r.limit));let m=null;r.startAt&&(m=(function(w){const A=!!w.before,R=w.values||[];return new Ah(R,A)})(r.startAt));let g=null;return r.endAt&&(g=(function(w){const A=!w.before,R=w.values||[];return new Ah(R,A)})(r.endAt)),MI(t,o,d,u,p,"F",m,g)}function m3(n,t){const r=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return wt(28987,{purpose:o})}})(t.purpose);return r==null?null:{"goog-listen-tags":r}}function fE(n){return n.unaryFilter!==void 0?(function(r){switch(r.unaryFilter.op){case"IS_NAN":const a=Qs(r.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Qs(r.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Qs(r.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Qs(r.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return wt(61313);default:return wt(60726)}})(n):n.fieldFilter!==void 0?(function(r){return De.create(Qs(r.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return wt(58110);default:return wt(50506)}})(r.fieldFilter.op),r.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(r){return ri.create(r.compositeFilter.filters.map((a=>fE(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return wt(1026)}})(r.compositeFilter.op))})(n):wt(30097,{filter:n})}function g3(n){return i3[n]}function y3(n){return r3[n]}function x3(n){return a3[n]}function Ys(n){return{fieldPath:n.canonicalString()}}function Qs(n){return We.fromServerFormat(n.fieldPath)}function pE(n){return n instanceof De?(function(r){if(r.op==="=="){if(pv(r.value))return{unaryFilter:{field:Ys(r.field),op:"IS_NAN"}};if(fv(r.value))return{unaryFilter:{field:Ys(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(pv(r.value))return{unaryFilter:{field:Ys(r.field),op:"IS_NOT_NAN"}};if(fv(r.value))return{unaryFilter:{field:Ys(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(r.field),op:y3(r.op),value:r.value}}})(n):n instanceof ri?(function(r){const a=r.getFilters().map((o=>pE(o)));return a.length===1?a[0]:{compositeFilter:{op:x3(r.op),filters:a}}})(n):wt(54877,{filter:n})}function v3(n){const t=[];return n.fields.forEach((r=>t.push(r.canonicalString()))),{fieldPaths:t}}function mE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yr{constructor(t,r,a,o,u=At.min(),d=At.min(),p=Ze.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=r,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,r){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class _3{constructor(t){this.yt=t}}function E3(n){const t=p3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lm(t,t.limit,"L"):t}/**
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
 */class b3{constructor(){this.Cn=new w3}addToCollectionParentIndex(t,r){return this.Cn.add(r),st.resolve()}getCollectionParents(t,r){return st.resolve(this.Cn.getEntries(r))}addFieldIndex(t,r){return st.resolve()}deleteFieldIndex(t,r){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,r){return st.resolve()}getDocumentsMatchingTarget(t,r){return st.resolve(null)}getIndexType(t,r){return st.resolve(0)}getFieldIndexes(t,r){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,r){return st.resolve(Jr.min())}getMinOffsetFromCollectionGroup(t,r){return st.resolve(Jr.min())}updateCollectionGroup(t,r,a){return st.resolve()}updateIndexEntries(t,r){return st.resolve()}}class w3{constructor(){this.index={}}add(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r]||new Pe(ae.comparator),u=!o.has(a);return this.index[r]=o.add(a),u}has(t){const r=t.lastSegment(),a=t.popLast(),o=this.index[r];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(ae.comparator)).toArray()}}/**
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
 */const Iv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gE=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,r,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=a}}/**
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
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(gE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
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
 */class uo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new uo(0)}static cr(){return new uo(-1)}}/**
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
 */const Cv="LruGarbageCollector",T3=1048576;function jv([n,t],[r,a]){const o=Ut(n,r);return o===0?Ut(t,a):o}class A3{constructor(t){this.Ir=t,this.buffer=new Pe(jv),this.Er=0}dr(){return++this.Er}Ar(t){const r=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(r);else{const a=this.buffer.last();jv(r,a)<0&&(this.buffer=this.buffer.delete(a).add(r))}}get maxValue(){return this.buffer.last()[0]}}class S3{constructor(t,r,a){this.garbageCollector=t,this.asyncQueue=r,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(Cv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){bo(r)?pt(Cv,"Ignoring IndexedDB error during garbage collection: ",r):await Eo(r)}await this.Vr(3e5)}))}}class R3{constructor(t,r){this.mr=t,this.params=r}calculateTargetCount(t,r){return this.mr.gr(t).next((a=>Math.floor(r/100*a)))}nthSequenceNumber(t,r){if(r===0)return st.resolve(Fh.ce);const a=new A3(r);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,r,a){return this.mr.removeTargets(t,r,a)}removeOrphanedDocuments(t,r){return this.mr.removeOrphanedDocuments(t,r)}collect(t,r){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Iv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iv):this.yr(t,r)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,r){let a,o,u,d,p,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,d=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,p=Date.now(),this.removeTargets(t,a,r)))).next((w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Hs()<=$t.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function I3(n,t){return new R3(n,t)}/**
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
 */class C3{constructor(){this.changes=new Ja((t=>t.toString()),((t,r)=>t.isEqual(r))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,r){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(r))}getEntry(t,r){this.assertNotApplied();const a=this.changes.get(r);return a!==void 0?st.resolve(a):this.getFromCache(t,r)}getEntries(t,r){return this.getAllFromCache(t,r)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class j3{constructor(t,r){this.overlayedDocument=t,this.mutatedFields=r}}/**
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
 */class D3{constructor(t,r,a,o){this.remoteDocumentCache=t,this.mutationQueue=r,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,r){let a=null;return this.documentOverlayCache.getOverlay(t,r).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,r)))).next((o=>(a!==null&&ql(a.mutation,o,Cn.empty(),le.now()),o)))}getDocuments(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,r,a=Pt()){const o=Ha();return this.populateOverlays(t,o,r).next((()=>this.computeViews(t,r,o,a).next((u=>{let d=kl();return u.forEach(((p,m)=>{d=d.insert(p,m.overlayedDocument)})),d}))))}getOverlayedDocuments(t,r){const a=Ha();return this.populateOverlays(t,a,r).next((()=>this.computeViews(t,r,a,Pt())))}populateOverlays(t,r,a){const o=[];return a.forEach((u=>{r.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,p)=>{r.set(d,p)}))}))}computeViews(t,r,a,o){let u=lr();const d=Kl(),p=(function(){return Kl()})();return r.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof sa)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),ql(v.mutation,g,v.mutation.getFieldMask(),le.now())):d.set(g.key,Cn.empty())})),this.recalculateAndSaveOverlays(t,u).next((m=>(m.forEach(((g,v)=>d.set(g,v))),r.forEach(((g,v)=>p.set(g,new j3(v,d.get(g)??null)))),p)))}recalculateAndSaveOverlays(t,r){const a=Kl();let o=new me(((d,p)=>d-p)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,r).next((d=>{for(const p of d)p.keys().forEach((m=>{const g=r.get(m);if(g===null)return;let v=a.get(m)||Cn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const w=(o.get(p.batchId)||Pt()).add(m);o=o.insert(p.batchId,w)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,w=X2();v.forEach((A=>{if(!u.has(A)){const R=iE(r.get(A),a.get(A));R!==null&&w.set(A,R),u=u.add(A)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,r){return this.remoteDocumentCache.getEntries(t,r).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,r,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(r)?this.getDocumentsMatchingDocumentQuery(t,r.path):q2(r)?this.getDocumentsMatchingCollectionGroupQuery(t,r,a,o):this.getDocumentsMatchingCollectionQuery(t,r,a,o)}getNextDocuments(t,r,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,r,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,r,a.largestBatchId,o-u.size):st.resolve(Ha());let p=tu,m=u;return d.next((g=>st.forEach(g,((v,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((A=>{m=m.insert(v,A)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,m,g,Pt()))).next((v=>({batchId:p,changes:Q2(v)})))))}))}getDocumentsMatchingDocumentQuery(t,r){return this.getDocument(t,new vt(r)).next((a=>{let o=kl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,r,a,o){const u=r.collectionGroup;let d=kl();return this.indexManager.getCollectionParents(t,u).next((p=>st.forEach(p,(m=>{const g=(function(w,A){return new wo(A,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(r,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,A)=>{d=d.insert(w,A)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,r,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,r.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,r,a,u,o)))).next((d=>{u.forEach(((m,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,sn.newInvalidDocument(v)))}));let p=kl();return d.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&ql(v.mutation,g,Cn.empty(),le.now()),Gh(r,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class N3{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,r){return st.resolve(this.Lr.get(r))}saveBundleMetadata(t,r){return this.Lr.set(r.id,(function(o){return{id:o.id,version:o.version,createTime:Ti(o.createTime)}})(r)),st.resolve()}getNamedQuery(t,r){return st.resolve(this.kr.get(r))}saveNamedQuery(t,r){return this.kr.set(r.name,(function(o){return{name:o.name,query:E3(o.bundledQuery),readTime:Ti(o.readTime)}})(r)),st.resolve()}}/**
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
 */class M3{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,r){return st.resolve(this.overlays.get(r))}getOverlays(t,r){const a=Ha();return st.forEach(r,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,r,a){return a.forEach(((o,u)=>{this.St(t,r,u)})),st.resolve()}removeOverlaysForBatchId(t,r,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,r,a){const o=Ha(),u=r.length+1,d=new vt(r.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return st.resolve(o)}getOverlaysForCollectionGroup(t,r,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ha(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Ha(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return st.resolve(p)}St(t,r,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new WI(r,a));let u=this.qr.get(r);u===void 0&&(u=Pt(),this.qr.set(r,u)),this.qr.set(r,u.add(a.key))}}/**
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
 */class O3{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,r){return this.sessionToken=r,st.resolve()}}/**
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
 */class lg{constructor(){this.Qr=new Pe(Ke.$r),this.Ur=new Pe(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,r){const a=new Ke(t,r);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,r){t.forEach((a=>this.addReference(a,r)))}removeReference(t,r){this.Gr(new Ke(t,r))}zr(t,r){t.forEach((a=>this.removeReference(a,r)))}jr(t){const r=new vt(new ae([])),a=new Ke(r,t),o=new Ke(r,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const r=new vt(new ae([])),a=new Ke(r,t),o=new Ke(r,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const r=new Ke(t,0),a=this.Qr.firstAfterOrEqual(r);return a!==null&&t.isEqual(a.key)}}class Ke{constructor(t,r){this.key=t,this.Yr=r}static $r(t,r){return vt.comparator(t.key,r.key)||Ut(t.Yr,r.Yr)}static Kr(t,r){return Ut(t.Yr,r.Yr)||vt.comparator(t.key,r.key)}}/**
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
 */class V3{constructor(t,r){this.indexManager=t,this.referenceDelegate=r,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ke.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,r,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new XI(u,r,a,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new Ke(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,r){return st.resolve(this.Xr(r))}getNextMutationBatchAfterBatchId(t,r){const a=r+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?Zm:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,r){const a=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const p=this.Xr(d.Yr);u.push(p)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,r){let a=new Pe(Ut);return r.forEach((o=>{const u=new Ke(o,0),d=new Ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(p=>{a=a.add(p.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,r){const a=r.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new Ke(new vt(u),0);let p=new Pe(Ut);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),d),st.resolve(this.ti(p))}ti(t){const r=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&r.push(o)})),r}removeMutationBatch(t,r){Gt(this.ni(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(r.mutations,(o=>{const u=new Ke(o.key,r.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,r){const a=new Ke(r,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(r.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,r){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const r=this.ei(t);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class k3{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,r){const a=r.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(r);return this.docs=this.docs.insert(a,{document:r.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const r=this.docs.get(t);r&&(this.docs=this.docs.remove(t),this.size-=r.size)}getEntry(t,r){const a=this.docs.get(r);return st.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(r))}getEntries(t,r){let a=lr();return r.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,r,a,o){let u=lr();const d=r.path,p=new vt(d.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||hI(cI(v),a)<=0||(o.has(v.key)||Gh(r,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,r,a,o){wt(9500)}ii(t,r){return st.forEach(this.docs,(a=>r(a)))}newChangeBuffer(t){return new U3(this)}getSize(t){return st.resolve(this.size)}}class U3 extends C3{constructor(t){super(),this.Nr=t}applyChanges(t){const r=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?r.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(r)}getFromCache(t,r){return this.Nr.getEntry(t,r)}getAllFromCache(t,r){return this.Nr.getEntries(t,r)}}/**
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
 */class P3{constructor(t){this.persistence=t,this.si=new Ja((r=>eg(r)),ng),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.oi=0,this._i=new lg,this.targetCount=0,this.ai=uo.ur()}forEachTarget(t,r){return this.si.forEach(((a,o)=>r(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,r,a){return a&&(this.lastRemoteSnapshotVersion=a),r>this.oi&&(this.oi=r),st.resolve()}Pr(t){this.si.set(t.target,t);const r=t.targetId;r>this.highestTargetId&&(this.ai=new uo(r),this.highestTargetId=r),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,r){return this.Pr(r),this.targetCount+=1,st.resolve()}updateTargetData(t,r){return this.Pr(r),st.resolve()}removeTargetData(t,r){return this.si.delete(r.target),this._i.jr(r.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,r,a){let o=0;const u=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=r&&a.get(p.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,r){const a=this.si.get(r)||null;return st.resolve(a)}addMatchingKeys(t,r,a){return this._i.Wr(r,a),st.resolve()}removeMatchingKeys(t,r,a){this._i.zr(r,a);const o=this.persistence.referenceDelegate,u=[];return o&&r.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,r){return this._i.jr(r),st.resolve()}getMatchingKeysForTargetId(t,r){const a=this._i.Hr(r);return st.resolve(a)}containsKey(t,r){return st.resolve(this._i.containsKey(r))}}/**
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
 */class yE{constructor(t,r){this.ui={},this.overlays={},this.ci=new Fh(0),this.li=!1,this.li=!0,this.hi=new O3,this.referenceDelegate=t(this),this.Pi=new P3(this),this.indexManager=new b3,this.remoteDocumentCache=(function(o){return new k3(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new _3(r),this.Ii=new N3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let r=this.overlays[t.toKey()];return r||(r=new M3,this.overlays[t.toKey()]=r),r}getMutationQueue(t,r){let a=this.ui[t.toKey()];return a||(a=new V3(r,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,r,a){pt("MemoryPersistence","Starting transaction:",t);const o=new z3(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,r){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,r))))}}class z3 extends fI{constructor(t){super(),this.currentSequenceNumber=t}}class ug{constructor(t){this.persistence=t,this.Ri=new lg,this.Vi=null}static mi(t){return new ug(t)}get fi(){if(this.Vi)return this.Vi;throw wt(60996)}addReference(t,r,a){return this.Ri.addReference(a,r),this.fi.delete(a.toString()),st.resolve()}removeReference(t,r,a){return this.Ri.removeReference(a,r),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,r){return this.fi.add(r.toString()),st.resolve()}removeTarget(t,r){this.Ri.jr(r.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,r.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,r)))}Ei(){this.Vi=new Set}di(t){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||r.removeEntry(o,At.min())}))})).next((()=>(this.Vi=null,r.apply(t))))}updateLimboDocument(t,r){return this.gi(t,r).next((a=>{a?this.fi.delete(r.toString()):this.fi.add(r.toString())}))}Ti(t){return 0}gi(t,r){return st.or([()=>st.resolve(this.Ri.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(t,r),()=>this.persistence.Ai(t,r)])}}class Ih{constructor(t,r){this.persistence=t,this.pi=new Ja((a=>gI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=I3(this,r)}static mi(t,r){return new Ih(t,r)}Ei(){}di(t){return st.resolve()}forEachTarget(t,r){return this.persistence.getTargetCache().forEachTarget(t,r)}gr(t){const r=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>r.next((o=>a+o))))}wr(t){let r=0;return this.pr(t,(a=>{r++})).next((()=>r))}pr(t,r){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():r(o)))))}removeTargets(t,r,a){return this.persistence.getTargetCache().removeTargets(t,r,a)}removeOrphanedDocuments(t,r){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,r).next((p=>{p||(a++,u.removeEntry(d,At.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,r){return this.pi.set(r,t.currentSequenceNumber),st.resolve()}removeTarget(t,r){const a=r.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,r,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,r){return this.pi.set(r,t.currentSequenceNumber),st.resolve()}Ti(t){let r=t.key.toString().length;return t.isFoundDocument()&&(r+=oh(t.data.value)),r}br(t,r,a){return st.or([()=>this.persistence.Ai(t,r),()=>this.persistence.getTargetCache().containsKey(t,r),()=>{const o=this.pi.get(r);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class cg{constructor(t,r,a,o){this.targetId=t,this.fromCache=r,this.Es=a,this.ds=o}static As(t,r){let a=Pt(),o=Pt();for(const u of r.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cg(t,r.fromCache,a,o)}}/**
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
 */class L3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class B3{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return NR()?8:pI(jR())>0?6:4})()}initialize(t,r){this.ps=t,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(t,r,a,o){const u={result:null};return this.ys(t,r).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,r,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new L3;return this.Ss(t,r,d).next((p=>{if(u.result=p,this.Vs)return this.bs(t,r,d,p.size)}))})).next((()=>u.result))}bs(t,r,a,o){return a.documentReadCount<this.fs?(Hs()<=$t.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Gs(r),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Hs()<=$t.DEBUG&&pt("QueryEngine","Query:",Gs(r),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Hs()<=$t.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Gs(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bi(r))):st.resolve())}ys(t,r){if(xv(r))return st.resolve(null);let a=bi(r);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(r.limit!==null&&o===1&&(r=lm(r,null,"F"),a=bi(r)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Pt(...u);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((m=>{const g=this.Ds(r,p);return this.Cs(r,g,d,m.readTime)?this.ys(t,lm(r,null,"F")):this.vs(t,g,r,m)}))))})))))}ws(t,r,a,o){return xv(r)||o.isEqual(At.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(r,u);return this.Cs(r,d,a,o)?st.resolve(null):(Hs()<=$t.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(r)),this.vs(t,d,r,uI(o,tu)).next((p=>p)))}))}Ds(t,r){let a=new Pe(G2(t));return r.forEach(((o,u)=>{Gh(t,u)&&(a=a.add(u))})),a}Cs(t,r,a,o){if(t.limit===null)return!1;if(a.size!==r.size)return!0;const u=t.limitType==="F"?r.last():r.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,r,a){return Hs()<=$t.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Gs(r)),this.ps.getDocumentsMatchingQuery(t,r,Jr.min(),a)}vs(t,r,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(r.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const hg="LocalStore",$3=3e8;class F3{constructor(t,r,a,o){this.persistence=t,this.Fs=r,this.serializer=o,this.Ms=new me(Ut),this.xs=new Ja((u=>eg(u)),ng),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new D3(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(r=>t.collect(r,this.Ms)))}}function K3(n,t,r,a){return new F3(n,t,r,a)}async function xE(n,t){const r=Rt(n);return await r.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return r.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,r.Bs(t),r.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],p=[];let m=Pt();for(const g of o){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return r.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:p})))}))}))}function q3(n,t){const r=Rt(n);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=r.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const w=g.batch,A=w.keys();let R=st.resolve();return A.forEach((O=>{R=R.next((()=>v.getEntry(m,O))).next((B=>{const P=g.docVersions.get(O);Gt(P!==null,48541),B.version.compareTo(P)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))}))})),R.next((()=>p.mutationQueue.removeMutationBatch(m,w)))})(r,a,t,u).next((()=>u.apply(a))).next((()=>r.mutationQueue.performConsistencyCheck(a))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Pt();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(t)))).next((()=>r.localDocuments.getDocuments(a,o)))}))}function vE(n){const t=Rt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(r=>t.Pi.getLastRemoteSnapshotVersion(r)))}function H3(n,t){const r=Rt(n),a=t.snapshotVersion;let o=r.Ms;return r.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=r.Ns.newChangeBuffer({trackRemovals:!0});o=r.Ms;const p=[];t.targetChanges.forEach(((v,w)=>{const A=o.get(w);if(!A)return;p.push(r.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>r.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=A.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Ze.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(B,P,G){return B.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=$3?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(A,R,v)&&p.push(r.Pi.updateTargetData(u,R))}));let m=lr(),g=Pt();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&p.push(r.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(G3(u,d,t.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(At.min())){const v=r.Pi.getLastRemoteSnapshotVersion(u).next((w=>r.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return st.waitFor(p).next((()=>d.apply(u))).next((()=>r.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(r.Ms=o,u)))}function G3(n,t,r){let a=Pt(),o=Pt();return r.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=lr();return r.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(At.min())?(t.removeEntry(p,m.readTime),d=d.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),d=d.insert(p,m)):pt(hg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:d,qs:o}}))}function Y3(n,t){const r=Rt(n);return r.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=Zm),r.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function Q3(n,t){const r=Rt(n);return r.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return r.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):r.Pi.allocateTargetId(a).next((d=>(o=new Yr(t,d,"TargetPurposeListen",a.currentSequenceNumber),r.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=r.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(r.Ms=r.Ms.insert(a.targetId,a),r.xs.set(t,a.targetId)),a}))}async function fm(n,t,r){const a=Rt(n),o=a.Ms.get(t),u=r?"readwrite":"readwrite-primary";try{r||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!bo(d))throw d;pt(hg,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function Dv(n,t,r){const a=Rt(n);let o=At.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(m,g,v){const w=Rt(m),A=w.xs.get(v);return A!==void 0?st.resolve(w.Ms.get(A)):w.Pi.getTargetData(g,v)})(a,d,bi(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,r?o:At.min(),r?u:Pt()))).next((p=>(X3(a,VI(t),p),{documents:p,Qs:u})))))}function X3(n,t,r){let a=n.Os.get(t)||At.min();r.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Nv{constructor(){this.activeTargetIds=BI()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class W3{constructor(){this.Mo=new Nv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,r,a){}addLocalQueryTarget(t,r=!0){return r&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,r,a){this.xo[t]=r}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Nv,Promise.resolve()}handleUserChange(t,r,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Z3{Oo(t){}shutdown(){}}/**
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
 */const Mv="ConnectivityMonitor";class Ov{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Mv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Mv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yc=null;function pm(){return Yc===null?Yc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yc++,"0x"+Yc.toString(16)}/**
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
 */const Cp="RestConnection",J3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=r+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===wh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,r,a,o,u){const d=pm(),p=this.zo(t,r.toUriEncodedString());pt(Cp,`Sending RPC '${t}' ${d}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=Gm(g);return this.Jo(t,p,m,a,v).then((w=>(pt(Cp,`Received RPC '${t}' ${d}: `,w),w)),(w=>{throw ao(Cp,`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",a),w}))}Ho(t,r,a,o,u,d){return this.Go(t,r,a,o,u)}jo(t,r,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_o})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,r){const a=J3[t];return`${this.Uo}/v1/${r}:${a}`}terminate(){}}/**
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
 */class eC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const rn="WebChannelConnection";class nC extends tC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,r,a,o,u){const d=pm();return new Promise(((p,m)=>{const g=new _2;g.setWithCredentials(!0),g.listenOnce(E2.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case sh.NO_ERROR:const w=g.getResponseJson();pt(rn,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(w)),p(w);break;case sh.TIMEOUT:pt(rn,`RPC '${t}' ${d} timed out`),m(new dt(it.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const A=g.getStatus();if(pt(rn,`RPC '${t}' ${d} failed with status:`,A,"response text:",g.getResponseText()),A>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const B=(function(G){const X=G.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(X)>=0?X:it.UNKNOWN})(O.status);m(new dt(B,O.message))}else m(new dt(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new dt(it.UNAVAILABLE,"Connection failed."));break;default:wt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(rn,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(rn,`RPC '${t}' ${d} sending request:`,o),g.send(r,"POST",v,a,15)}))}T_(t,r,a){const o=pm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=T2(),p=w2(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,r,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pt(rn,`Creating RPC '${t}' stream ${o}: ${v}`,m);const w=d.createWebChannel(v,m);this.I_(w);let A=!1,R=!1;const O=new eC({Yo:P=>{R?pt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(A||(pt(rn,`Opening RPC '${t}' stream ${o} transport.`),w.open(),A=!0),pt(rn,`RPC '${t}' stream ${o} sending:`,P),w.send(P))},Zo:()=>w.close()}),B=(P,G,X)=>{P.listen(G,(et=>{try{X(et)}catch(ct){setTimeout((()=>{throw ct}),0)}}))};return B(w,Vl.EventType.OPEN,(()=>{R||(pt(rn,`RPC '${t}' stream ${o} transport opened.`),O.o_())})),B(w,Vl.EventType.CLOSE,(()=>{R||(R=!0,pt(rn,`RPC '${t}' stream ${o} transport closed`),O.a_(),this.E_(w))})),B(w,Vl.EventType.ERROR,(P=>{R||(R=!0,ao(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),O.a_(new dt(it.UNAVAILABLE,"The operation could not be completed")))})),B(w,Vl.EventType.MESSAGE,(P=>{if(!R){const G=P.data[0];Gt(!!G,16349);const X=G,et=X?.error||X[0]?.error;if(et){pt(rn,`RPC '${t}' stream ${o} received error:`,et);const ct=et.status;let Z=(function(I){const j=Ce[I];if(j!==void 0)return sE(j)})(ct),ft=et.message;Z===void 0&&(Z=it.INTERNAL,ft="Unknown error status: "+ct+" with message "+et.message),R=!0,O.a_(new dt(Z,ft)),w.close()}else pt(rn,`RPC '${t}' stream ${o} received:`,G),O.u_(G)}})),B(p,b2.STAT_EVENT,(P=>{P.stat===em.PROXY?pt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===em.NOPROXY&&pt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((r=>r===t))}}function jp(){return typeof document<"u"?document:null}/**
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
 */function Wh(n){return new s3(n,!0)}/**
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
 */class _E{constructor(t,r,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=r,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const r=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,r-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Vv="PersistentStream";class EE{constructor(t,r,a,o,u,d,p,m){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _E(t,r)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,r){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():r&&r.code===it.RESOURCE_EXHAUSTED?(sr(r.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):r&&r.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(r)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),r=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===r&&this.G_(a,o)}),(a=>{t((()=>{const o=new dt(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,r){const a=this.W_(this.D_);this.stream=this.j_(t,r),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Vv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return r=>{this.Mi.enqueueAndForget((()=>this.D_===t?r():(pt(Vv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iC extends EE{constructor(t,r,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,a,o,d),this.serializer=u}j_(t,r){return this.connection.T_("Listen",t,r)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const r=u3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return At.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?At.min():d.readTime?Ti(d.readTime):At.min()})(t);return this.listener.H_(r,a)}Y_(t){const r={};r.database=dm(this.serializer),r.addTarget=(function(u,d){let p;const m=d.target;if(p=sm(m)?{documents:d3(u,m)}:{query:f3(u,m).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=uE(u,d.resumeToken);const g=um(u,d.expectedCount);g!==null&&(p.expectedCount=g)}else if(d.snapshotVersion.compareTo(At.min())>0){p.readTime=Rh(u,d.snapshotVersion.toTimestamp());const g=um(u,d.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,t);const a=m3(this.serializer,t);a&&(r.labels=a),this.q_(r)}Z_(t){const r={};r.database=dm(this.serializer),r.removeTarget=t,this.q_(r)}}class rC extends EE{constructor(t,r,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,r){return this.connection.T_("Write",t,r)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const r=h3(t.writeResults,t.commitTime),a=Ti(t.commitTime);return this.listener.na(a,r)}ra(){const t={};t.database=dm(this.serializer),this.q_(t)}ea(t){const r={streamToken:this.lastStreamToken,writes:t.map((a=>c3(this.serializer,a)))};this.q_(r)}}/**
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
 */class aC{}class sC extends aC{constructor(t,r,a,o){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,r,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,cm(r,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new dt(it.UNKNOWN,u.toString())}))}Ho(t,r,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,cm(r,a),o,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new dt(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oC{constructor(t,r){this.asyncQueue=t,this.onlineStateHandler=r,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const r=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(r),this.aa=!1):pt("OnlineStateTracker",r)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Wa="RemoteStore";class lC{constructor(t,r,a,o,u){this.localStore=t,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ts(this)&&(pt(Wa,"Restarting streams for network reachability change."),await(async function(m){const g=Rt(m);g.Ea.add(4),await fu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Zh(g)})(this))}))})),this.Ra=new oC(a,o)}}async function Zh(n){if(ts(n))for(const t of n.da)await t(!0)}async function fu(n){for(const t of n.da)await t(!1)}function bE(n,t){const r=Rt(n);r.Ia.has(t.targetId)||(r.Ia.set(t.targetId,t),mg(r)?pg(r):To(r).O_()&&fg(r,t))}function dg(n,t){const r=Rt(n),a=To(r);r.Ia.delete(t),a.O_()&&wE(r,t),r.Ia.size===0&&(a.O_()?a.L_():ts(r)&&r.Ra.set("Unknown"))}function fg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const r=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}To(n).Y_(t)}function wE(n,t){n.Va.Ue(t),To(n).Z_(t)}function pg(n){n.Va=new n3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),To(n).start(),n.Ra.ua()}function mg(n){return ts(n)&&!To(n).x_()&&n.Ia.size>0}function ts(n){return Rt(n).Ea.size===0}function TE(n){n.Va=void 0}async function uC(n){n.Ra.set("Online")}async function cC(n){n.Ia.forEach(((t,r)=>{fg(n,t)}))}async function hC(n,t){TE(n),mg(n)?(n.Ra.ha(t),pg(n)):n.Ra.set("Unknown")}async function dC(n,t,r){if(n.Ra.set("Online"),t instanceof lE&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(n,t)}catch(a){pt(Wa,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Ch(n,a)}else if(t instanceof ch?n.Va.Ze(t):t instanceof oE?n.Va.st(t):n.Va.tt(t),!r.isEqual(At.min()))try{const a=await vE(n.localStore);r.compareTo(a)>=0&&await(function(u,d){const p=u.Va.Tt(d);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,d))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),wE(u,m);const w=new Yr(v.target,m,g,v.sequenceNumber);fg(u,w)})),u.remoteSyncer.applyRemoteEvent(p)})(n,r)}catch(a){pt(Wa,"Failed to raise snapshot:",a),await Ch(n,a)}}async function Ch(n,t,r){if(!bo(t))throw t;n.Ea.add(1),await fu(n),n.Ra.set("Offline"),r||(r=()=>vE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Wa,"Retrying IndexedDB access"),await r(),n.Ea.delete(1),await Zh(n)}))}function AE(n,t){return t().catch((r=>Ch(n,r,t)))}async function Jh(n){const t=Rt(n),r=ia(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Zm;for(;fC(t);)try{const o=await Y3(t.localStore,a);if(o===null){t.Ta.length===0&&r.L_();break}a=o.batchId,pC(t,o)}catch(o){await Ch(t,o)}SE(t)&&RE(t)}function fC(n){return ts(n)&&n.Ta.length<10}function pC(n,t){n.Ta.push(t);const r=ia(n);r.O_()&&r.X_&&r.ea(t.mutations)}function SE(n){return ts(n)&&!ia(n).x_()&&n.Ta.length>0}function RE(n){ia(n).start()}async function mC(n){ia(n).ra()}async function gC(n){const t=ia(n);for(const r of n.Ta)t.ea(r.mutations)}async function yC(n,t,r){const a=n.Ta.shift(),o=ag.from(a,t,r);await AE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Jh(n)}async function xC(n,t){t&&ia(n).X_&&await(async function(a,o){if((function(d){return JI(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();ia(a).B_(),await AE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Jh(a)}})(n,t),SE(n)&&RE(n)}async function kv(n,t){const r=Rt(n);r.asyncQueue.verifyOperationInProgress(),pt(Wa,"RemoteStore received new credentials");const a=ts(r);r.Ea.add(3),await fu(r),a&&r.Ra.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.Ea.delete(3),await Zh(r)}async function vC(n,t){const r=Rt(n);t?(r.Ea.delete(2),await Zh(r)):t||(r.Ea.add(2),await fu(r),r.Ra.set("Unknown"))}function To(n){return n.ma||(n.ma=(function(r,a,o){const u=Rt(r);return u.sa(),new iC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:uC.bind(null,n),t_:cC.bind(null,n),r_:hC.bind(null,n),H_:dC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),mg(n)?pg(n):n.Ra.set("Unknown")):(await n.ma.stop(),TE(n))}))),n.ma}function ia(n){return n.fa||(n.fa=(function(r,a,o){const u=Rt(r);return u.sa(),new rC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:mC.bind(null,n),r_:xC.bind(null,n),ta:gC.bind(null,n),na:yC.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Jh(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Wa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class gg{constructor(t,r,a,o,u){this.asyncQueue=t,this.timerId=r,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,r,a,o,u){const d=Date.now()+a,p=new gg(t,r,d,o,u);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yg(n,t){if(sr("AsyncQueue",`${t}: ${n}`),bo(n))return new dt(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Zs{static emptySet(t){return new Zs(t.comparator)}constructor(t){this.comparator=t?(r,a)=>t(r,a)||vt.comparator(r.key,a.key):(r,a)=>vt.comparator(r.key,a.key),this.keyedMap=kl(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const r=this.keyedMap.get(t);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((r,a)=>(t(r),!1)))}add(t){const r=this.delete(t.key);return r.copy(r.keyedMap.insert(t.key,t),r.sortedSet.insert(t,null))}delete(t){const r=this.get(t);return r?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(r)):this}isEqual(t){if(!(t instanceof Zs)||this.size!==t.size)return!1;const r=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;r.hasNext();){const o=r.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((r=>{t.push(r.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,r){const a=new Zs;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=r,a}}/**
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
 */class Uv{constructor(){this.ga=new me(vt.comparator)}track(t){const r=t.doc.key,a=this.ga.get(r);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(r,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(r,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(r,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(r):t.type===1&&a.type===2?this.ga=this.ga.insert(r,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(r,{type:2,doc:t.doc}):wt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(r,t)}ya(){const t=[];return this.ga.inorderTraversal(((r,a)=>{t.push(a)})),t}}class co{constructor(t,r,a,o,u,d,p,m,g){this.query=t,this.docs=r,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,r,a,o,u){const d=[];return r.forEach((p=>{d.push({type:0,doc:p})})),new co(t,r,Zs.emptySet(r),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const r=this.docChanges,a=t.docChanges;if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(r[o].type!==a[o].type||!r[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
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
 */class _C{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class EC{constructor(){this.queries=Pv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(r,a){const o=Rt(r),u=o.queries;o.queries=Pv(),u.forEach(((d,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new dt(it.ABORTED,"Firestore shutting down"))}}function Pv(){return new Ja((n=>H2(n)),Hh)}async function IE(n,t){const r=Rt(n);let a=3;const o=t.query;let u=r.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new _C,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await r.onListen(o,!0);break;case 1:u.wa=await r.onListen(o,!1);break;case 2:await r.onFirstRemoteStoreListen(o)}}catch(d){const p=yg(d,`Initialization of query '${Gs(t.query)}' failed`);return void t.onError(p)}r.queries.set(o,u),u.Sa.push(t),t.va(r.onlineState),u.wa&&t.Fa(u.wa)&&xg(r)}async function CE(n,t){const r=Rt(n),a=t.query;let o=3;const u=r.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return r.queries.delete(a),r.onUnlisten(a,!0);case 1:return r.queries.delete(a),r.onUnlisten(a,!1);case 2:return r.onLastRemoteStoreUnlisten(a);default:return}}function bC(n,t){const r=Rt(n);let a=!1;for(const o of t){const u=o.query,d=r.queries.get(u);if(d){for(const p of d.Sa)p.Fa(o)&&(a=!0);d.wa=o}}a&&xg(r)}function wC(n,t,r){const a=Rt(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(r);a.queries.delete(t)}function xg(n){n.Ca.forEach((t=>{t.next()}))}var mm,zv;(zv=mm||(mm={})).Ma="default",zv.Cache="cache";class jE{constructor(t,r,a){this.query=t,this.xa=r,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new co(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let r=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),r=!0):this.La(t,this.onlineState)&&(this.ka(t),r=!0),this.Na=t,r}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let r=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),r=!0),r}La(t,r){if(!t.fromCache||!this.Da())return!0;const a=r!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||r==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const r=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}ka(t){t=co.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==mm.Cache}}/**
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
 */class DE{constructor(t){this.key=t}}class NE{constructor(t){this.key=t}}class TC{constructor(t,r){this.query=t,this.Ya=r,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=G2(t),this.tu=new Zs(this.eu)}get nu(){return this.Ya}ru(t,r){const a=r?r.iu:new Uv,o=r?r.tu:this.tu;let u=r?r.mutatedKeys:this.mutatedKeys,d=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const A=o.get(v),R=Gh(this.query,w)?w:null,O=!!A&&this.mutatedKeys.has(A.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;A&&R?A.data.isEqual(R.data)?O!==B&&(a.track({type:3,doc:R}),P=!0):this.su(A,R)||(a.track({type:2,doc:R}),P=!0,(m&&this.eu(R,m)>0||g&&this.eu(R,g)<0)&&(p=!0)):!A&&R?(a.track({type:0,doc:R}),P=!0):A&&!R&&(a.track({type:1,doc:A}),P=!0,(m||g)&&(p=!0)),P&&(R?(d=d.add(R),u=B?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:p,mutatedKeys:u}}su(t,r){return t.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(t,r,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,w)=>(function(R,O){const B=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wt(20277,{Rt:P})}};return B(R)-B(O)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const p=r&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,d.length!==0||g?{snapshot:new co(this.query,t.tu,u,d,t.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Uv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((r=>this.Ya=this.Ya.add(r))),t.modifiedDocuments.forEach((r=>{})),t.removedDocuments.forEach((r=>this.Ya=this.Ya.delete(r))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const r=[];return t.forEach((a=>{this.Xa.has(a)||r.push(new NE(a))})),this.Xa.forEach((a=>{t.has(a)||r.push(new DE(a))})),r}cu(t){this.Ya=t.Qs,this.Xa=Pt();const r=this.ru(t.documents);return this.applyChanges(r,!0)}lu(){return co.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vg="SyncEngine";class AC{constructor(t,r,a){this.query=t,this.targetId=r,this.view=a}}class SC{constructor(t){this.key=t,this.hu=!1}}class RC{constructor(t,r,a,o,u,d){this.localStore=t,this.remoteStore=r,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Ja((p=>H2(p)),Hh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new lg,this.Vu={},this.mu=new Map,this.fu=uo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function IC(n,t,r=!0){const a=PE(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await ME(a,t,r,!0),o}async function CC(n,t){const r=PE(n);await ME(r,t,!0,!1)}async function ME(n,t,r,a){const o=await Q3(n.localStore,bi(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,r);let p;return a&&(p=await jC(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&r&&bE(n.remoteStore,o),p}async function jC(n,t,r,a,o){n.pu=(w,A,R)=>(async function(B,P,G,X){let et=P.view.ru(G);et.Cs&&(et=await Dv(B.localStore,P.query,!1).then((({documents:C})=>P.view.ru(C,et))));const ct=X&&X.targetChanges.get(P.targetId),Z=X&&X.targetMismatches.get(P.targetId)!=null,ft=P.view.applyChanges(et,B.isPrimaryClient,ct,Z);return Bv(B,P.targetId,ft.au),ft.snapshot})(n,w,A,R);const u=await Dv(n.localStore,t,!0),d=new TC(t,u.Qs),p=d.ru(u.documents),m=du.createSynthesizedTargetChangeForCurrentChange(r,a&&n.onlineState!=="Offline",o),g=d.applyChanges(p,n.isPrimaryClient,m);Bv(n,r,g.au);const v=new AC(t,r,d);return n.Tu.set(t,v),n.Iu.has(r)?n.Iu.get(r).push(t):n.Iu.set(r,[t]),g.snapshot}async function DC(n,t,r){const a=Rt(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!Hh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await fm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),r&&dg(a.remoteStore,o.targetId),gm(a,o.targetId)})).catch(Eo)):(gm(a,o.targetId),await fm(a.localStore,o.targetId,!0))}async function NC(n,t){const r=Rt(n),a=r.Tu.get(t),o=r.Iu.get(a.targetId);r.isPrimaryClient&&o.length===1&&(r.sharedClientState.removeLocalQueryTarget(a.targetId),dg(r.remoteStore,a.targetId))}async function MC(n,t,r){const a=LC(n);try{const o=await(function(d,p){const m=Rt(d),g=le.now(),v=p.reduce(((R,O)=>R.add(O.key)),Pt());let w,A;return m.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let O=lr(),B=Pt();return m.Ns.getEntries(R,v).next((P=>{O=P,O.forEach(((G,X)=>{X.isValidDocument()||(B=B.add(G))}))})).next((()=>m.localDocuments.getOverlayedDocuments(R,O))).next((P=>{w=P;const G=[];for(const X of p){const et=YI(X,w.get(X.key).overlayedDocument);et!=null&&G.push(new sa(X.key,et,P2(et.value.mapValue),wi.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,G,p)})).next((P=>{A=P;const G=P.applyToLocalDocumentSet(w,B);return m.documentOverlayCache.saveOverlays(R,P.batchId,G)}))})).then((()=>({batchId:A.batchId,changes:Q2(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,p,m){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(p,m),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,r),await pu(a,o.changes),await Jh(a.remoteStore)}catch(o){const u=yg(o,"Failed to persist write");r.reject(u)}}async function OE(n,t){const r=Rt(n);try{const a=await H3(r.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=r.Au.get(u);d&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Gt(d.hu,14607):o.removedDocuments.size>0&&(Gt(d.hu,42227),d.hu=!1))})),await pu(r,a,t)}catch(a){await Eo(a)}}function Lv(n,t,r){const a=Rt(n);if(a.isPrimaryClient&&r===0||!a.isPrimaryClient&&r===1){const o=[];a.Tu.forEach(((u,d)=>{const p=d.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const m=Rt(d);m.onlineState=p;let g=!1;m.queries.forEach(((v,w)=>{for(const A of w.Sa)A.va(p)&&(g=!0)})),g&&xg(m)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function OC(n,t,r){const a=Rt(n);a.sharedClientState.updateQueryState(t,"rejected",r);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,sn.newNoDocument(u,At.min()));const p=Pt().add(u),m=new Xh(At.min(),new Map,new me(Ut),d,p);await OE(a,m),a.du=a.du.remove(u),a.Au.delete(t),_g(a)}else await fm(a.localStore,t,!1).then((()=>gm(a,t,r))).catch(Eo)}async function VC(n,t){const r=Rt(n),a=t.batch.batchId;try{const o=await q3(r.localStore,t);kE(r,a,null),VE(r,a),r.sharedClientState.updateMutationState(a,"acknowledged"),await pu(r,o)}catch(o){await Eo(o)}}async function kC(n,t,r){const a=Rt(n);try{const o=await(function(d,p){const m=Rt(d);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((w=>(Gt(w!==null,37113),v=w.keys(),m.mutationQueue.removeMutationBatch(g,w)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);kE(a,t,r),VE(a,t),a.sharedClientState.updateMutationState(t,"rejected",r),await pu(a,o)}catch(o){await Eo(o)}}function VE(n,t){(n.mu.get(t)||[]).forEach((r=>{r.resolve()})),n.mu.delete(t)}function kE(n,t,r){const a=Rt(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(r?u.reject(r):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function gm(n,t,r=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),r&&n.Pu.yu(a,r);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||UE(n,a)}))}function UE(n,t){n.Eu.delete(t.path.canonicalString());const r=n.du.get(t);r!==null&&(dg(n.remoteStore,r),n.du=n.du.remove(t),n.Au.delete(r),_g(n))}function Bv(n,t,r){for(const a of r)a instanceof DE?(n.Ru.addReference(a.key,t),UC(n,a)):a instanceof NE?(pt(vg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||UE(n,a.key)):wt(19791,{wu:a})}function UC(n,t){const r=t.key,a=r.path.canonicalString();n.du.get(r)||n.Eu.has(a)||(pt(vg,"New document in limbo: "+r),n.Eu.add(a),_g(n))}function _g(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const r=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new SC(r)),n.du=n.du.insert(r,a),bE(n.remoteStore,new Yr(bi(ig(r.path)),a,"TargetPurposeLimboResolution",Fh.ce))}}async function pu(n,t,r){const a=Rt(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{d.push(a.pu(m,t,r).then((g=>{if((g||r)&&a.isPrimaryClient){const v=g?!g.fromCache:r?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=cg.As(m.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(m,g){const v=Rt(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(A=>st.forEach(A.Es,(R=>v.persistence.referenceDelegate.addReference(w,A.targetId,R))).next((()=>st.forEach(A.ds,(R=>v.persistence.referenceDelegate.removeReference(w,A.targetId,R)))))))))}catch(w){if(!bo(w))throw w;pt(hg,"Failed to update sequence numbers: "+w)}for(const w of g){const A=w.targetId;if(!w.fromCache){const R=v.Ms.get(A),O=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(O);v.Ms=v.Ms.insert(A,B)}}})(a.localStore,u))}async function PC(n,t){const r=Rt(n);if(!r.currentUser.isEqual(t)){pt(vg,"User change. New user:",t.toKey());const a=await xE(r.localStore,t);r.currentUser=t,(function(u,d){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new dt(it.CANCELLED,d))}))})),u.mu.clear()})(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await pu(r,a.Ls)}}function zC(n,t){const r=Rt(n),a=r.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=r.Iu.get(t);if(!u)return o;for(const d of u){const p=r.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function PE(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=OC.bind(null,t),t.Pu.H_=bC.bind(null,t.eventManager),t.Pu.yu=wC.bind(null,t.eventManager),t}function LC(n){const t=Rt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=VC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kC.bind(null,t),t}class jh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Wh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,r){return null}Mu(t,r){return null}vu(t){return K3(this.persistence,new B3,t.initialUser,this.serializer)}Cu(t){return new yE(ug.mi,this.serializer)}Du(t){return new W3}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jh.provider={build:()=>new jh};class BC extends jh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,r){Gt(this.persistence.referenceDelegate instanceof Ih,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new S3(a,t.asyncQueue,r)}Cu(t){const r=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new yE((a=>Ih.mi(a,r)),this.serializer)}}class ym{async initialize(t,r){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Lv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=PC.bind(null,this.syncEngine),await vC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new EC})()}createDatastore(t){const r=Wh(t.databaseInfo.databaseId),a=(function(u){return new nC(u)})(t.databaseInfo);return(function(u,d,p,m){return new sC(u,d,p,m)})(t.authCredentials,t.appCheckCredentials,a,r)}createRemoteStore(t){return(function(a,o,u,d,p){return new lC(a,o,u,d,p)})(this.localStore,this.datastore,t.asyncQueue,(r=>Lv(this.syncEngine,r,0)),(function(){return Ov.v()?new Ov:new Z3})())}createSyncEngine(t,r){return(function(o,u,d,p,m,g,v){const w=new RC(o,u,d,p,m,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,r)}async terminate(){await(async function(r){const a=Rt(r);pt(Wa,"RemoteStore shutting down."),a.Ea.add(5),await fu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ym.provider={build:()=>new ym};/**
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
 */class zE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):sr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,r){setTimeout((()=>{this.muted||t(r)}),0)}}/**
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
 */const ra="FirestoreClient";class $C{constructor(t,r,a,o,u){this.authCredentials=t,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=Wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(ra,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(ra,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(r){const a=yg(r,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Dp(n,t){n.asyncQueue.verifyOperationInProgress(),pt(ra,"Initializing OfflineComponentProvider");const r=n.configuration;await t.initialize(r);let a=r.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await xE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function $v(n,t){n.asyncQueue.verifyOperationInProgress();const r=await FC(n);pt(ra,"Initializing OnlineComponentProvider"),await t.initialize(r,n.configuration),n.setCredentialChangeListener((a=>kv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>kv(t.remoteStore,o))),n._onlineComponents=t}async function FC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(ra,"Using user provided OfflineComponentProvider");try{await Dp(n,n._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(r))throw r;ao("Error using user provided cache. Falling back to memory cache: "+r),await Dp(n,new jh)}}else pt(ra,"Using default OfflineComponentProvider"),await Dp(n,new BC(void 0));return n._offlineComponents}async function LE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(ra,"Using user provided OnlineComponentProvider"),await $v(n,n._uninitializedComponentsProvider._online)):(pt(ra,"Using default OnlineComponentProvider"),await $v(n,new ym))),n._onlineComponents}function KC(n){return LE(n).then((t=>t.syncEngine))}async function BE(n){const t=await LE(n),r=t.eventManager;return r.onListen=IC.bind(null,t.syncEngine),r.onUnlisten=DC.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=CC.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=NC.bind(null,t.syncEngine),r}function qC(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new zE({next:A=>{v.Nu(),d.enqueueAndForget((()=>CE(u,w)));const R=A.docs.has(p);!R&&A.fromCache?g.reject(new dt(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&m&&m.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),w=new jE(ig(p.path),v,{includeMetadataChanges:!0,qa:!0});return IE(u,w)})(await BE(n),n.asyncQueue,t,r,a))),a.promise}function HC(n,t,r={}){const a=new er;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new zE({next:A=>{v.Nu(),d.enqueueAndForget((()=>CE(u,w))),A.fromCache&&m.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),w=new jE(p,v,{includeMetadataChanges:!0,qa:!0});return IE(u,w)})(await BE(n),n.asyncQueue,t,r,a))),a.promise}/**
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
 */function $E(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Fv=new Map;/**
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
 */const FE="firestore.googleapis.com",Kv=!0;class qv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new dt(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=FE,this.ssl=Kv}else this.host=t.host,this.ssl=t.ssl??Kv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=gE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<T3)throw new dt(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$E(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class td{constructor(t,r,a,o){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new Z6;switch(a.type){case"firstParty":return new nI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const a=Fv.get(r);a&&(pt("ComponentProvider","Removing Datastore"),Fv.delete(r),a.terminate())})(this),Promise.resolve()}}function GC(n,t,r,a={}){n=or(n,td);const o=Gm(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${r}`;o&&(AR(`https://${p}`),CR("Firestore",!0)),u.host!==FE&&u.host!==p&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!_h(m,d)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=an.MOCK_USER;else{g=SR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new dt(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new an(w)}n._authCredentials=new J6(new S2(g,v))}}/**
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
 */class es{constructor(t,r,a){this.converter=r,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new es(this.firestore,t,this._query)}}class Se{constructor(t,r,a){this.converter=r,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Se(this.firestore,t,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,a){if(cu(r,Se._jsonSchema))return new Se(t,a||null,new vt(ae.fromString(r.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:Ne("string",Se._jsonSchemaVersion),referencePath:Ne("string")};class Zr extends es{constructor(t,r,a){super(t,r,ig(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Se(this.firestore,null,new vt(t))}withConverter(t){return new Zr(this.firestore,t,this._path)}}function hh(n,t,...r){if(n=rr(n),R2("collection","path",t),n instanceof td){const a=ae.fromString(t,...r);return rv(a),new Zr(n,null,a)}{if(!(n instanceof Se||n instanceof Zr))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...r));return rv(a),new Zr(n.firestore,null,a)}}function Hl(n,t,...r){if(n=rr(n),arguments.length===1&&(t=Wm.newId()),R2("doc","path",t),n instanceof td){const a=ae.fromString(t,...r);return iv(a),new Se(n,null,new vt(a))}{if(!(n instanceof Se||n instanceof Zr))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...r));return iv(a),new Se(n.firestore,n instanceof Zr?n.converter:null,new vt(a))}}/**
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
 */const Hv="AsyncQueue";class Gv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _E(this,"async_queue_retry"),this._c=()=>{const a=jp();a&&pt(Hv,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const r=jp();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const r=jp();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const r=new er;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!bo(t))throw t;pt(Hv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const r=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",Yv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=r,r}enqueueAfterDelay(t,r,a){this.uc(),this.oc.indexOf(t)>-1&&(r=0);const o=gg.createAndSchedule(this,t,r,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&wt(47125,{Pc:Yv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const r of this.tc)if(r.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((r,a)=>r.targetTimeMs-a.targetTimeMs));for(const r of this.tc)if(r.skipDelay(),t!=="all"&&r.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const r=this.tc.indexOf(t);this.tc.splice(r,1)}}function Yv(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class mu extends td{constructor(t,r,a,o){super(t,r,a,o),this.type="firestore",this._queue=new Gv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Gv(t),this._firestoreClient=void 0,await t}}}function KE(n,t){const r=typeof n=="object"?n:z6(),a=typeof n=="string"?n:wh,o=O6(r,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=wR("firestore");u&&GC(o,...u)}return o}function Eg(n){if(n._terminated)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YC(n),n._firestoreClient}function YC(n){const t=n._freezeSettings(),r=(function(o,u,d,p){return new vI(o,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,$E(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new $C(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(r){throw new dt(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(cu(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Ne("string",$n._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class ed{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new dt(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class nd{constructor(t){this._methodName=t}}/**
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
 */class Ai{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new dt(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new dt(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ai._jsonSchemaVersion}}static fromJSON(t){if(cu(t,Ai._jsonSchema))return new Ai(t.latitude,t.longitude)}}Ai._jsonSchemaVersion="firestore/geoPoint/1.0",Ai._jsonSchema={type:Ne("string",Ai._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Si{constructor(t){this._values=(t||[]).map((r=>r))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Si._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(cu(t,Si._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((r=>typeof r=="number")))return new Si(t.vectorValues);throw new dt(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Si._jsonSchemaVersion="firestore/vectorValue/1.0",Si._jsonSchema={type:Ne("string",Si._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const QC=/^__.*__$/;class XC{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return this.fieldMask!==null?new sa(t,this.data,this.fieldMask,r,this.fieldTransforms):new hu(t,this.data,r,this.fieldTransforms)}}class qE{constructor(t,r,a){this.data=t,this.fieldMask=r,this.fieldTransforms=a}toMutation(t,r){return new sa(t,this.data,this.fieldMask,r,this.fieldTransforms)}}function HE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt(40011,{Ac:n})}}class bg{constructor(t,r,a,o,u,d){this.settings=t,this.databaseId=r,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new bg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.gc(t),a}yc(t){const r=this.path?.child(t),a=this.Vc({path:r,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Dh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((r=>t.isPrefixOf(r)))!==void 0||this.fieldTransforms.find((r=>t.isPrefixOf(r.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(HE(this.Ac)&&QC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class WC{constructor(t,r,a){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=a||Wh(t)}Cc(t,r,a,o=!1){return new bg({Ac:t,methodName:r,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wg(n){const t=n._freezeSettings(),r=Wh(n._databaseId);return new WC(n._databaseId,!!t.ignoreUndefinedProperties,r)}function ZC(n,t,r,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,r,o);Ag("Data must be an object, but it was:",d,a);const p=GE(a,d);let m,g;if(u.merge)m=new Cn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const A=xm(t,w,r);if(!d.contains(A))throw new dt(it.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);QE(v,A)||v.push(A)}m=new Cn(v),g=d.fieldTransforms.filter((w=>m.covers(w.field)))}else m=null,g=d.fieldTransforms;return new XC(new xn(p),m,g)}class id extends nd{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof id}}class Tg extends nd{constructor(t,r){super(t),this.Fc=r}_toFieldTransform(t){const r=new ou(t.serializer,Z2(t.serializer,this.Fc));return new KI(t.path,r)}isEqual(t){return t instanceof Tg&&this.Fc===t.Fc}}function JC(n,t,r,a){const o=n.Cc(1,t,r);Ag("Data must be an object, but it was:",o,a);const u=[],d=xn.empty();aa(a,((m,g)=>{const v=Sg(t,m,r);g=rr(g);const w=o.yc(v);if(g instanceof id)u.push(v);else{const A=gu(g,w);A!=null&&(u.push(v),d.set(v,A))}}));const p=new Cn(u);return new qE(d,p,o.fieldTransforms)}function t5(n,t,r,a,o,u){const d=n.Cc(1,t,r),p=[xm(t,a,r)],m=[o];if(u.length%2!=0)throw new dt(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)p.push(xm(t,u[A])),m.push(u[A+1]);const g=[],v=xn.empty();for(let A=p.length-1;A>=0;--A)if(!QE(g,p[A])){const R=p[A];let O=m[A];O=rr(O);const B=d.yc(R);if(O instanceof id)g.push(R);else{const P=gu(O,B);P!=null&&(g.push(R),v.set(R,P))}}const w=new Cn(g);return new qE(v,w,d.fieldTransforms)}function e5(n,t,r,a=!1){return gu(r,n.Cc(a?4:3,t))}function gu(n,t){if(YE(n=rr(n)))return Ag("Unsupported field value:",t,n),GE(n,t);if(n instanceof nd)return(function(a,o){if(!HE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const p of a){let m=gu(p,o.wc(d));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=rr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return Z2(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:Rh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Rh(o.serializer,u)}}if(a instanceof Ai)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:uE(o.serializer,a._byteString)};if(a instanceof Se){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:og(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Si)return(function(d,p){return{mapValue:{fields:{[k2]:{stringValue:U2},[Th]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return rg(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${$h(a)}`)})(n,t)}function GE(n,t){const r={};return j2(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aa(n,((a,o)=>{const u=gu(o,t.mc(a));u!=null&&(r[a]=u)})),{mapValue:{fields:r}}}function YE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Ai||n instanceof $n||n instanceof Se||n instanceof nd||n instanceof Si)}function Ag(n,t,r){if(!YE(r)||!I2(r)){const a=$h(r);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function xm(n,t,r){if((t=rr(t))instanceof ed)return t._internalPath;if(typeof t=="string")return Sg(n,t);throw Dh("Field path arguments must be of type string or ",n,!1,void 0,r)}const n5=new RegExp("[~\\*/\\[\\]]");function Sg(n,t,r){if(t.search(n5)>=0)throw Dh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,r);try{return new ed(...t.split("."))._internalPath}catch{throw Dh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,r)}}function Dh(n,t,r,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let p=`Function ${t}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||d)&&(m+=" (found",u&&(m+=` in field ${a}`),d&&(m+=` in document ${o}`),m+=")"),new dt(it.INVALID_ARGUMENT,p+n+m)}function QE(n,t){return n.some((r=>r.isEqual(t)))}/**
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
 */class XE{constructor(t,r,a,o,u){this._firestore=t,this._userDataWriter=r,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new i5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const r=this._document.data.field(Rg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class i5 extends XE{data(){return super.data()}}function Rg(n,t){return typeof t=="string"?Sg(n,t):t instanceof ed?t._internalPath:t._delegate._internalPath}/**
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
 */function r5(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new dt(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class WE extends Ig{}function Qv(n,t,...r){let a=[];t instanceof Ig&&a.push(t),a=a.concat(r),(function(u){const d=u.filter((m=>m instanceof jg)).length,p=u.filter((m=>m instanceof Cg)).length;if(d>1||d>0&&p>0)throw new dt(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Cg extends WE{constructor(t,r,a){super(),this._field=t,this._op=r,this._value=a,this.type="where"}static _create(t,r,a){return new Cg(t,r,a)}_apply(t){const r=this._parse(t);return ZE(t._query,r),new es(t.firestore,t.converter,om(t._query,r))}_parse(t){const r=wg(t.firestore);return(function(u,d,p,m,g,v,w){let A;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new dt(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Zv(w,v);const O=[];for(const B of w)O.push(Wv(m,u,B));A={arrayValue:{values:O}}}else A=Wv(m,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Zv(w,v),A=e5(p,d,w,v==="in"||v==="not-in");return De.create(g,v,A)})(t._query,"where",r,t.firestore._databaseId,this._field,this._op,this._value)}}class jg extends Ig{constructor(t,r){super(),this.type=t,this._queryConstraints=r}static _create(t,r){return new jg(t,r)}_parse(t){const r=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return r.length===1?r[0]:ri.create(r,this._getOperator())}_apply(t){const r=this._parse(t);return r.getFilters().length===0?t:((function(o,u){let d=o;const p=u.getFlattenedFilters();for(const m of p)ZE(d,m),d=om(d,m)})(t._query,r),new es(t.firestore,t.converter,om(t._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dg extends WE{constructor(t,r){super(),this._field=t,this._direction=r,this.type="orderBy"}static _create(t,r){return new Dg(t,r)}_apply(t){const r=(function(o,u,d){if(o.startAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ru(u,d)})(t._query,this._field,this._direction);return new es(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new wo(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,r))}}function Xv(n,t="asc"){const r=t,a=Rg("orderBy",n);return Dg._create(a,r)}function Wv(n,t,r){if(typeof(r=rr(r))=="string"){if(r==="")throw new dt(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!q2(t)&&r.indexOf("/")!==-1)throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const a=t.path.child(ae.fromString(r));if(!vt.isDocumentKey(a))throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return dv(n,new vt(a))}if(r instanceof Se)return dv(n,r._key);throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$h(r)}.`)}function Zv(n,t){if(!Array.isArray(n)||n.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ZE(n,t){const r=(function(o,u){for(const d of o)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(r!==null)throw r===t.op?new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class a5{convertValue(t,r="none"){switch(na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ae(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ea(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw wt(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const a={};return aa(t,((o,u)=>{a[o]=this.convertValue(u,r)})),a}convertVectorValue(t){const r=t.fields?.[Th].arrayValue?.values?.map((a=>Ae(a.doubleValue)));return new Si(r)}convertGeoPoint(t){return new Ai(Ae(t.latitude),Ae(t.longitude))}convertArray(t,r){return(t.values||[]).map((a=>this.convertValue(a,r)))}convertServerTimestamp(t,r){switch(r){case"previous":const a=qh(t);return a==null?null:this.convertValue(a,r);case"estimate":return this.convertTimestamp(eu(t));default:return null}}convertTimestamp(t){const r=ta(t);return new le(r.seconds,r.nanos)}convertDocumentKey(t,r){const a=ae.fromString(t);Gt(mE(a),9688,{name:t});const o=new nu(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(r)||sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),u}}/**
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
 */function s5(n,t,r){let a;return a=n?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t,a}class Pl{constructor(t,r){this.hasPendingWrites=t,this.fromCache=r}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qa extends XE{constructor(t,r,a,o,u,d){super(t,r,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const r=new dh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,r={}){if(this._document){const a=this._document.data.field(Rg("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,r={};return r.type=Qa._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:Ne("string",Qa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class dh extends Qa{data(t={}){return super.data(t)}}class Js{constructor(t,r,a,o){this._firestore=t,this._userDataWriter=r,this._snapshot=o,this.metadata=new Pl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((r=>t.push(r))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,r){this._snapshot.docs.forEach((a=>{t.call(r,new dh(this._firestore,this._userDataWriter,a.key,a,new Pl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const r=!!t.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new dt(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Pl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Pl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),v=d.indexOf(p.doc.key)),{type:o5(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Js._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(r.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function o5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt(61501,{type:n})}}/**
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
 */function fh(n){n=or(n,Se);const t=or(n.firestore,mu);return qC(Eg(t),n._key).then((r=>l5(t,n,r)))}Js._jsonSchemaVersion="firestore/querySnapshot/1.0",Js._jsonSchema={type:Ne("string",Js._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class JE extends a5{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const r=this.convertDocumentKey(t,this.firestore._databaseId);return new Se(this.firestore,null,r)}}function vm(n){n=or(n,es);const t=or(n.firestore,mu),r=Eg(t),a=new JE(t);return r5(n._query),HC(r,n._query).then((o=>new Js(t,a,n,o)))}function Ng(n,t,r){n=or(n,Se);const a=or(n.firestore,mu),o=s5(n.converter,t,r);return tb(a,[ZC(wg(a),"setDoc",n._key,o,n.converter!==null,r).toMutation(n._key,wi.none())])}function Nh(n,t,r,...a){n=or(n,Se);const o=or(n.firestore,mu),u=wg(o);let d;return d=typeof(t=rr(t))=="string"||t instanceof ed?t5(u,"updateDoc",n._key,t,r,a):JC(u,"updateDoc",n._key,t),tb(o,[d.toMutation(n._key,wi.exists(!0))])}function tb(n,t){return(function(a,o){const u=new er;return a.asyncQueue.enqueueAndForget((async()=>MC(await KC(a),o,u))),u.promise})(Eg(n),t)}function l5(n,t,r){const a=r.docs.get(t._key),o=new JE(n);return new Qa(n,o,t._key,a,new Pl(r.hasPendingWrites,r.fromCache),t.converter)}function Mh(n){return new Tg("increment",n)}(function(t,r=!0){(function(o){_o=o})(P6),Eh(new Wl("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),p=new mu(new tI(a.getProvider("auth-internal")),new iI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new dt(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nu(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:r,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Ws(Jx,tv,t),Ws(Jx,tv,"esm2020")})();const u5={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},c5=Yx().length?Yx()[0]:Qm(u5),Gl=KE(c5),Jv=40;function eb(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const h5=S.div`
  position: relative; background: #fff;
`,d5=S.div`
  padding-left: ${Jv}px; padding-right: ${Jv}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function f5({children:n}){return x.jsx(h5,{children:x.jsx(d5,{children:n})})}const p5=S.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,m5=S.div`
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
`,g5=S.div`
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
`,t_=Xl,nb=Km,y5={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function _m(n){return n.members.map(t=>{const r=nb.find(a=>a.num===t);return r?r.nameKor:""}).filter(Boolean).join(", ")}function x5(n){return n.members.map(t=>{const r=nb.find(a=>a.num===t);return r?eb(r.imgUrl):""}).filter(Boolean)}function v5({list:n,statsById:t}){const r={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return x.jsx(m5,{children:n.map((a,o)=>{const u=_m(a),d=x5(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${r[a.category]||"A"}${p}`,v=a.projectNum??a.num;return x.jsx(qm,{titleKor:a.titleKor,titleEng:a.titleEng,src:eb(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function _5(){const[n,t]=Dt.useState("All Projects"),[r,a]=Dt.useState("이름순"),[o,u]=Dt.useState({});Dt.useEffect(()=>{let m=!0;return(async()=>{try{const g=await vm(hh(Gl,"works"));if(!m)return;const v={};g.forEach(w=>{const A=w.data()||{};v[String(w.id)]={like:typeof A.like=="number"?A.like:0,view:typeof A.view=="number"?A.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const d=Dt.useMemo(()=>{const m=y5[n]||null;return m?t_.filter(g=>g.category===m):t_},[n]),p=Dt.useMemo(()=>{const m=[...d];switch(r){case"이름순":m.sort((g,v)=>_m(g).localeCompare(_m(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),A=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[A]?.like??0)-R});break;case"조회수순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),A=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[A]?.view??0)-R});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[d,r,o]);return x.jsxs(p5,{children:[x.jsx(g5,{children:"Projects"}),x.jsx(l2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:r}),x.jsx(f5,{children:x.jsx(v5,{list:p,statsById:o})})]})}const E5=S.div(({height:n,from:t,to:r,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${r} 100%)`}));function Mg({position:n="bottom",from:t,to:r,height:a=240,z:o=0,style:u}){return x.jsx(E5,{position:n,from:t,to:r,height:a,z:o,style:u})}const nr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},e_="/TU2025gradulate/",b5=S.section`
  position: relative;
  height: calc(100vh);
  min-height: 620px;
  overflow: hidden;
  background: #121212;
  z-index: 1;
  @media (max-width: 640px) {
    min-height: 220px;
  }
`,w5=S.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,T5=S.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,A5=S.video`
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
`,S5=S.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  aspect-ratio: 1 / 1; /* width defines the square size now */
  transform: translate(-50%, -50%);
  overflow: hidden;
`,R5=S.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,I5=S.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.0);
`,C5=S.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  opacity: ${n=>n.$visible?1:0};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${n=>n.$visible?"auto":"none"};
  @media (max-width: 640px) {
    left: 16px;
    bottom: 241px;
    max-width: 90vw;
    gap: 8px;
  }
`,n_=S.p`
  margin: 0; color: rgba(0,0,0,0.4); font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px; font-weight: 400;
  //css로 텍스트 오버레이 효과 부여 해야됨
  mix-blend-mode: darken;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 120%;
  }
`,j5=S.p`
  margin: 0; color: rgba(255,255,255,0.4); font-family: Pretendard, system-ui; font-weight: 500; font-size: 24px; line-height: 27.6px;
  mix-blend-mode: difference;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 115%;
  }
`,D5=S.button`
  position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px;
  width: 240px; height: 52px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba(0,0,0,0.05); 
  border: 1px solid #FFFFFF; 
  color: #FFFFFF;
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
`;function N5(){const[n,t]=Dt.useState(!1),r=Dt.useRef(null);return Dt.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),x.jsxs(b5,{"aria-label":"Hero",children:[x.jsxs(w5,{children:[x.jsx(T5,{"aria-hidden":!0,children:x.jsx(A5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:x.jsx("source",{src:`${e_}video/hero11.mp4`,type:"video/mp4"})})}),x.jsx(S5,{"aria-label":"Hero background video",children:x.jsxs(R5,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>t(!0),15500)},children:[x.jsx("source",{src:`${e_}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),x.jsx(I5,{})]}),x.jsxs(C5,{$visible:n,children:[x.jsxs(n_,{children:["25. 10. 24. FRI~26. SUN",x.jsx("br",{}),"Hongdae Art Center B2"]}),x.jsx(n_,{children:"Department of Design Engineering"}),x.jsxs(j5,{children:["Tech University of Korea",x.jsx("br",{}),"20th Grad Exhibition"]})]}),x.jsx(D5,{type:"button","aria-label":"View More",children:"View More"}),x.jsx(Mg,{position:"bottom",from:nr.heroToWhite.from,to:nr.heroToWhite.to,height:nr.heroToWhite.h,z:0})]})}const i_="/TU2025gradulate/",M5=S.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,O5=S.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,V5=S.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,k5=S.div`
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
`,U5=S.h2`
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
`,P5=S.div`
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
`,z5=S.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,L5=S.div`
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
`;function B5(){return x.jsxs(M5,{"aria-labelledby":"brand-title",children:[x.jsxs(O5,{children:[x.jsxs(V5,{children:[x.jsx(U5,{id:"brand-title",children:"Brand Concept"}),x.jsxs(k5,{children:[x.jsxs(P5,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",x.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",x.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",x.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",x.jsx("br",{}),x.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",x.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",x.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",x.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",x.jsx("br",{}),x.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",x.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),x.jsx(z5,{children:x.jsx("img",{src:`${i_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),x.jsx(L5,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:x.jsx("img",{src:`${i_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),x.jsx(Mg,{position:"bottom",from:nr.whiteToBlack.from,to:nr.whiteToBlack.to,height:nr.whiteToBlack.h,z:0})]})}const $5='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',F5=S.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${$5};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,K5=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function rd({as:n="button",href:t,label:r="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[w,A]=Dt.useState(d),R=v?u:w;Dt.useCallback(()=>{if(v){p&&p(!u);return}A(B=>{const P=!B;return p&&p(P),P})},[v,p,u]);const O={onClick:m,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return x.jsxs(F5,{...O,target:"_blank",rel:"noopener noreferrer",children:[r,R?x.jsx(K5,{"aria-hidden":!0}):null]})}const q5=S.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,H5=S.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,G5=S.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,Y5=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Q5=S.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,X5=S.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,W5=S.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
  }
`;S.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;S.div`
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
`;const Z5=S.div`
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
`;function J5(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return x.jsxs(q5,{"aria-label":"Gallery",children:[x.jsx(Mg,{position:"top",from:nr.blackToBlackSoft.from,to:nr.blackToBlackSoft.to,height:nr.blackToBlackSoft.h,z:0}),x.jsxs(H5,{children:[x.jsxs(G5,{children:[x.jsx(Y5,{src:"https://placehold.co/1840x1000",alt:"featured"}),x.jsx(Q5,{"aria-hidden":!0,children:x.jsx(X5,{})})]}),x.jsx(W5,{className:"gallery-desktop"}),x.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:x.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:n.map((t,r)=>x.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[x.jsx("img",{src:t.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.cap&&x.jsx(Z5,{children:t.cap})]},r))})}),x.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:x.jsx(rd,{label:"View More"})})]})]})}const tj=S.section`
  padding: 0;
`,ej=S.div`
  position: relative; height: 1045px; overflow: hidden;
`,nj=S.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,ij=S.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,rj=S.img`
  width: 100%; height: 100%; object-fit: cover;
`,aj=S.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,sj=S.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,oj=S.div`
  position: absolute; left: 860px; top: 935px;
`;function lj(){return x.jsx(tj,{"aria-labelledby":"online-title",children:x.jsxs(ej,{children:[x.jsx(nj,{id:"online-title",children:"Online Exhibition"}),x.jsx(ij,{children:x.jsx(rj,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),x.jsx(aj,{"aria-hidden":!0}),x.jsx(sj,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),x.jsx(oj,{children:x.jsx(rd,{label:"View More"})})]})})}const uj=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],cj=S.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,hj=S.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,dj=S.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fj=S.img`
  width: 100%;
  height: auto;
  display: block;
`,pj=S.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;S.div`
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
`;S.div`
  position: absolute;
  left: 0; right: 0; top: 4px;
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
`;S.div`
  position: absolute;
  left: 351px; top: 140px;
  width: 1219px; height: 686px;
  border-radius: 3.55px;
  background: #606060;
  overflow: hidden;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  @media (max-width: 640px) {
    position: static;
    width: 90vw;
    height: auto;
    min-height: 160px;
    margin: 0 auto 12px auto;
    border-radius: 10px;
    transform: none;
  }
`;S.img`
  width: 1265px; height: 712px; display: block;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;const yu=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;S.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${yu}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;S.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${yu}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;S.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${yu}
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
`;S.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${yu}
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
`;S.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  transform: translate3d(0, ${n=>n.$y||0}px, 0);
  opacity: ${n=>n.$opacity??1};
  ${yu}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;S.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;S.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;function mj(){return x.jsxs(x.Fragment,{children:[x.jsx(cj,{className:"expo-works-desktop"}),x.jsx(hj,{children:uj.map(n=>x.jsxs(dj,{children:[x.jsx(fj,{src:n.image,alt:n.titleStrong}),x.jsxs(pj,{children:[x.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),x.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const gj="/TU2025gradulate/",yj=S.div`
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
`,xj=S.div`
  position: relative; 
  height: auto;
`,vj=S.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,_j=S.div`
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
`,Ej=S.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,bj=S.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,wj=S.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function Tj(){return x.jsx(yj,{"aria-labelledby":"insta-title",children:x.jsx(xj,{children:x.jsxs(vj,{children:[x.jsx(_j,{children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),x.jsx(Ej,{id:"insta-title",children:"@tukd_grad"}),x.jsxs(bj,{children:[x.jsx(wj,{children:x.jsx("img",{src:`${gj}insta-qr.png`,alt:"Instagram preview"})}),x.jsx(rd,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const xu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,r_=350,Aj=S.section`
  padding: 120px 0 0 0; background: #121212;
`,Sj=S.div`
  position: relative; background: #121212;
`,Rj=S.div`
  /* padding-left: ${r_}px; padding-right: ${r_}px; */
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
`,Ij=({children:n})=>x.jsx(Sj,{children:x.jsx(Rj,{children:n})}),Cj=S.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,jj=S.div`
  font-family: ${xu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function Dj({title:n}){return x.jsx(Cj,{children:x.jsx(jj,{children:n})})}const Nj=S.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,Mj=S.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,Oj=S.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,Vj=S.div`
  font-family: ${xu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,kj=S.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Hr({k:n,children:t,divider:r=!0}){return x.jsxs(Mj,{$divider:r,children:[x.jsx(Oj,{children:x.jsx(Vj,{children:n})}),x.jsx(kj,{children:t})]})}const Uj=S.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function a_({title:n,children:t,last:r=!1}){return x.jsxs(Nj,{$last:r,children:[x.jsx(Dj,{title:n}),x.jsx(Uj,{children:t})]})}const Pj=S.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,zj=S.div`
  font-family: ${xu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=S.div`
  font-family: ${xu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,Qc=S(qt)`
  font-weight: 500;
`,Lj=S(qt)`
  font-size: 13px;
`;S(qt)`
  margin-top: 24px;
`;const Bj=S.a`
  font-family: ${xu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function $j(){return x.jsx(Aj,{"aria-label":"Venue & Access",children:x.jsxs(Ij,{children:[x.jsxs(a_,{title:"Venew Details",children:[x.jsx(Pj,{children:x.jsx(zj,{children:"잔향 : 기억의 향기"})}),x.jsx(Hr,{k:"Term",children:x.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),x.jsxs(Hr,{k:"Hours",children:[x.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),x.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),x.jsxs(Hr,{k:"Schedule",children:[x.jsx(Qc,{children:"10.24.FRI"}),x.jsx(qt,{children:"13:00    자유관람"}),x.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),x.jsx(qt,{children:"16:00    개회식"}),x.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),x.jsx(qt,{children:"16:30    자유관람"}),x.jsxs(Qc,{children:[x.jsx("br",{}),"10.25.SAT"]}),x.jsx(qt,{children:"10:00    자유관람"}),x.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),x.jsxs(Qc,{children:[x.jsx("br",{}),"10.26.SUN"]}),x.jsx(qt,{children:"10:00    자유관람"})]}),x.jsxs(Hr,{k:"Website",divider:!1,children:[x.jsx(qt,{children:"Hongik Art Center"}),x.jsx(Bj,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),x.jsxs(a_,{title:"Access",children:[x.jsxs(Hr,{k:"Address",children:[x.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관 3",x.jsx("br",{}),"서울시 종로구 대학로 57"]}),x.jsxs(qt,{children:["Hongik Art Center B2 Gallery 3",x.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),x.jsx("div",{style:{marginTop:24},children:x.jsx(rd,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),x.jsxs(Hr,{k:"Parking",children:[x.jsx(qt,{children:"B3F ~ B6F"}),x.jsxs(qt,{children:[x.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),x.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),x.jsx(Qc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),x.jsx(Lj,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),x.jsxs(Hr,{k:"By Subway",children:[x.jsx(qt,{children:"[1호선 종로5가역]"}),x.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[4호선 혜화역]"]}),x.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),x.jsxs(Hr,{k:"By Bus",divider:!1,children:[x.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),x.jsx(qt,{children:"마을버스 종로 08번"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),x.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[이화장(01-223) 하차]"]}),x.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function Fj(){const n=[x.jsx(N5,{},"hero"),x.jsx(B5,{},"brand"),x.jsx(J5,{},"gallery"),x.jsx(lj,{},"online"),x.jsx(mj,{},"works"),x.jsx(Tj,{},"insta"),x.jsx($j,{},"venue")];return x.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const Kj="/TU2025gradulate/",Og="Pretendard, system-ui",qj=S.div`
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
`,Hj=S.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${Kj}/gestbook-card.svg);
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
`,Gj=S.div` 
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
`,Yj=S.div`
  /* position: absolute; */
  font-family: ${Og};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,Qj=S.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${Og};
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
`,Xj=S.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${Og};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function Wj({to:n,from:t,message:r}){return x.jsxs(qj,{$w:ho,$h:Za,children:[x.jsx(Hj,{}),x.jsxs(Gj,{$w:ho,$h:Za,children:[x.jsx(Yj,{children:`To. ${n}`}),x.jsx(Qj,{children:r}),x.jsx(Xj,{children:`From. ${t}`})]})]})}const Zj=S.div`
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
`,Jj=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function tD({src:n}){return x.jsx(Zj,{$w:ho,$h:Za,children:x.jsx(Jj,{src:n,alt:"포토 카드"})})}const eD=S.button`
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
`,nD=S.div`
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
`,iD=S.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,rD=S.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,aD=S.span`
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
`,sD=S.span`
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
`;function oD({onClick:n}){return x.jsxs(eD,{onClick:n,"aria-label":"방명록 작성",$w:ho,$h:Za,children:[x.jsx(nD,{$w:ho,$h:Za}),x.jsx(iD,{children:x.jsxs(rD,{children:[x.jsx(aD,{}),x.jsx(sD,{})]})})]})}const ho=270,Za=337,lD=30,ib=20,uD=210,cD=60,rb=173,ab=216,hD=16,dD=16,Em=16,fD=S.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,pD=S.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,mD=S.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,gD=S.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${cD}px 0 ${uD}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,yD=S.div`
  display: flex;
  gap: ${lD}px;
  align-items: flex-start;
  min-height: ${Za*2+ib}px;

  @media (max-width: 640px) {
    gap: ${hD}px;
    min-height: initial;
  }
`,xD=S.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Em}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,vD=S.div`
  width: calc((100% - ${Em}px) / 2);
  height: ${ab}px;
  flex: 0 0 calc((100% - ${Em}px) / 2);
`,_D=S.div`
  @media (max-width: 640px) { display: none; }
`,ED=S.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,bD=S.div`
  display: flex;
  flex-direction: column;
  gap: ${ib}px;
  @media (max-width: 640px) {
    width: ${rb}px;
    gap: ${dD}px;
  }
`,sb=S.div`
  width: ${ho}px;
  height: ${Za}px;
  @media (max-width: 640px) {
    width: ${rb}px;
    height: ${ab}px;
  }
`,s_=n=>{const t=[{type:"add",id:"add"},...n],r=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return r.forEach((o,u)=>{if(t.length>o.min+a){const d=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(d,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},wD=n=>{const t=[];for(let r=0;r<n.length;r+=2)t.push([n[r],n[r+1]||null]);return t};function TD({onOpenModal:n,items:t}){const r=q.useRef(null),[a,o]=q.useState({width:0,trackW:0}),[u,d]=q.useState(()=>s_(t)),[p,m]=q.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);q.useEffect(()=>{d(s_(t))},[t]);const g=wD(u);q.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),O=B=>m(B.matches);return R.addEventListener?R.addEventListener("change",O):R.addListener(O),()=>{R.removeEventListener?R.removeEventListener("change",O):R.removeListener(O)}},[]),q.useEffect(()=>{if(p)return;const R=r.current;if(!R)return;const O=B=>{Math.abs(B.deltaY)>Math.abs(B.deltaX)&&(R.scrollLeft+=B.deltaY,B.preventDefault())};return R.addEventListener("wheel",O,{passive:!1}),()=>R.removeEventListener("wheel",O)},[p]);const v=q.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');q.useEffect(()=>{if(p)return;const R=r.current;if(!R)return;const O=G=>{G.button===0&&(w(G.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=G.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(G.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},B=G=>{if(!v.current.on)return;const X=G.clientX-v.current.startX;Math.abs(X)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-X},P=G=>{v.current.on&&(R.releasePointerCapture?.(G.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(G.preventDefault(),G.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",O),window.addEventListener("pointermove",B),window.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),()=>{R.removeEventListener("pointerdown",O),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P)}},[p]);const A=q.useCallback(()=>{const R=r.current;if(!R)return;const O=R.clientWidth,B=R.scrollWidth,P=R.scrollLeft,X=R.parentElement?.clientWidth||O,et=Math.max(1,B-O),ct=Math.min(1,Math.max(0,P/et)),Z=Math.round(X*ct);o({width:Z,trackW:X})},[]);return q.useEffect(()=>{if(p)return;A();const R=r.current;if(!R)return;const O=()=>requestAnimationFrame(A),B=()=>requestAnimationFrame(A);return R.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",B),()=>{R.removeEventListener("scroll",O),window.removeEventListener("resize",B)}},[A,p]),x.jsxs(x.Fragment,{children:[x.jsxs(_D,{children:[x.jsx(fD,{children:x.jsx(pD,{children:x.jsx(mD,{$w:a.width})})}),x.jsx(gD,{ref:r,children:x.jsx(yD,{children:g.map((R,O)=>x.jsxs(bD,{children:[x.jsx(Np,{data:R[0],onOpenModal:n}),R[1]?x.jsx(Np,{data:R[1],onOpenModal:n}):x.jsx(sb,{})]},`col-${O}`))})})]}),x.jsx(ED,{children:x.jsx(xD,{children:u.map(R=>x.jsx(vD,{children:x.jsx(Np,{data:R,onOpenModal:n})},R.id))})})]})}function Np({data:n,onOpenModal:t}){return n?n.type==="add"?x.jsx(oD,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?x.jsx(tD,{src:n.src}):x.jsx(Wj,{to:n.to,from:n.from,message:n.message}):x.jsx(sb,{})}const AD="/TU2025gradulate/",SD=S.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,RD=S.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,ID=S.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,CD=S.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,jD=S.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,DD=S.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${AD}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,ND=S.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,MD=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,OD=S.input`
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
`,VD=S.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,kD=S.textarea`
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
`,UD=S.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,PD=S.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,zD=S.input`
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
`,LD=S.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,BD=S.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,$D=S.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,FD=S.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,KD=S.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,qD=S.div`
  width: 32px; height: 32px; position: relative;
`,o_=S.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function HD({open:n,onClose:t,onSubmit:r,defaultTo:a="",defaultFrom:o=""}){const[u,d]=q.useState(a),[p,m]=q.useState(o),[g,v]=q.useState(""),w=q.useRef(null);if(q.useEffect(()=>{const O=B=>{B.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[n,t]),!n)return null;const A=O=>{O.target===w.current&&t?.()},R=()=>{const O={to:(u||"").trim(),from:(p||"").trim(),message:(g||"").trim()};O.message&&r?.(O)};return x.jsx(SD,{ref:w,onMouseDown:A,children:x.jsxs(RD,{onMouseDown:O=>O.stopPropagation(),children:[x.jsx(ID,{children:x.jsxs(CD,{children:[x.jsxs(jD,{children:[x.jsx(DD,{}),x.jsxs(ND,{children:[x.jsx(MD,{children:"To."}),x.jsx(OD,{value:u,onChange:O=>d(O.target.value),placeholder:"받는 사람"})]}),x.jsx(VD,{children:x.jsx(kD,{placeholder:"내용을 입력해 주세요.",value:g,onChange:O=>v(O.target.value)})}),x.jsxs(UD,{children:[x.jsx(PD,{children:"From."}),x.jsx(zD,{value:p,onChange:O=>m(O.target.value),placeholder:"보내는 사람"})]})]}),x.jsx(LD,{children:x.jsx(BD,{type:"button",onClick:R,"aria-label":"send",children:x.jsx($D,{})})})]})}),x.jsx(FD,{children:x.jsx(KD,{type:"button",onClick:t,"aria-label":"close",children:x.jsxs(qD,{children:[x.jsx(o_,{$deg:45}),x.jsx(o_,{$deg:-45})]})})})]})})}const GD={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},YD=Qm(GD),Mp=KE(YD),QD='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',XD=S.div`
  background: #121212; min-height: 100vh;
`,WD=S.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,ZD=S.h1`
  font-family: ${QD}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,JD=S.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,tN=S.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function eN(){const[n,t]=Dt.useState(!1),[r,a]=Dt.useState([]);Dt.useEffect(()=>{let d=!0;return(async()=>{try{const p=Qv(hh(Mp,"guest"),Xv("time","desc")),m=await vm(p);if(!d)return;const g=[];m.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)}catch(p){console.error("Failed to load guestbook items:",p)}})(),()=>{d=!1}},[]);const o=async({to:d,from:p,message:m})=>{try{const g=String(Date.now());await Ng(Hl(hh(Mp,"guest"),g),{to:d||"",from:p||"",message:m||"",time:g});try{const v=Qv(hh(Mp,"guest"),Xv("time","desc")),w=await vm(v),A=[];w.forEach(R=>{const O=R.data();A.push({id:R.id,to:O.to||"",from:O.from||"",message:O.message||"",type:"text"})}),a(A)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return x.jsxs(XD,{children:[x.jsxs(WD,{children:[x.jsx(ZD,{children:"Guest Book"}),x.jsx(JD,{children:x.jsxs(tN,{className:"gb-wrap",children:[x.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),x.jsx(TD,{onOpenModal:()=>t(!0),items:r})]})})]}),x.jsx(HD,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const bm="/TU2025gradulate/",nN=S.div`
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
`,iN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,rN=S.div`
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
`,aN=S.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,sN=S.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
}
`,oN=S.h1`
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
`,lN=S.p`
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
`,uN=S.div`
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
`,cN=S.div`
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
`,hN=S.div`
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
`,dN=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,fN=S.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,pN=S.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,mN=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,gN=S.p`
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
`,yN=S.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${bm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function wm({titleKor:n,titleEng:t,context:r,isOpen:a=!0,onClose:o,src:u,docId:d,collection:p="works"}){const[m,g]=q.useState(0),[v,w]=q.useState(!1);q.useEffect(()=>{let O=!0;return(async()=>{if(d!=null)try{const B=Hl(Gl,p,String(d)),P=await fh(B);if(!O)return;if(P.exists()){const G=P.data();g(typeof G.like=="number"?G.like:0)}else g(0)}catch(B){console.error("Firestore getDoc error:",B),O&&g(0)}})(),()=>{O=!1}},[d,p]);const A=async()=>{try{const O=Hl(Gl,p,String(d)),B=await fh(O);if(B.exists()){const P=B.data();g(typeof P.like=="number"?P.like:0)}}catch(O){console.error("Firestore refresh error:",O)}},R=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}w(!0);const O=Hl(Gl,p,String(d));try{await Nh(O,{like:Mh(1)}),g(B=>B+1),await A()}catch(B){if(B.code==="not-found"||/No document/i.test(String(B)))try{(await fh(O)).exists()?await Nh(O,{like:Mh(1)}):await Ng(O,{like:1},{merge:!0}),await A()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",B)}finally{w(!1)}};return x.jsx(nN,{$open:!!a,children:x.jsxs(iN,{children:[x.jsxs(rN,{children:[x.jsx(aN,{onClick:()=>{typeof o=="function"&&o()},children:x.jsx("img",{src:`${bm}icons/closeIcon.svg`,alt:"Close Icon"})}),x.jsxs(sN,{children:[x.jsx(uN,{$src:u}),x.jsx(oN,{children:n}),x.jsx(lN,{children:r})]})]}),x.jsxs(cN,{children:[x.jsx(hN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:x.jsxs(dN,{children:[x.jsx(fN,{$src:`${bm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),x.jsx(pN,{children:m})]})}),x.jsxs(mN,{onClick:()=>{const B=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,G=Math.max(0,B-269);window.scrollTo({top:G,behavior:"smooth"})},children:[x.jsx(gN,{children:"Designer Info"}),x.jsx(yN,{})]})]})]})})}wm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const xN=S.div`
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
`,vN=S.div`
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
`,_N=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,EN=S.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,bN=S.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,wN=S.h1`
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
`,TN=S.h2`
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
`,AN=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,SN=S.div`
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
`,Op=S.h3`
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
`,RN=S.div`
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
`,Vp=S.p`
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
`;function Vg({nameKor:n,nameEng:t,part:r,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return x.jsxs(xN,{children:[x.jsx(vN,{children:x.jsx(_N,{src:u,alt:d})}),x.jsxs(EN,{children:[x.jsxs(bN,{children:[x.jsx(wN,{children:n}),x.jsx(TN,{children:t})]}),x.jsxs(AN,{children:[x.jsxs(SN,{children:[x.jsx(Op,{children:"Part"}),x.jsx(Op,{children:"SNS"}),x.jsx(Op,{children:"E-mail"})]}),x.jsxs(RN,{children:[x.jsx(Vp,{children:r}),x.jsx(Vp,{children:a}),x.jsx(Vp,{children:o})]})]})]})]})}Vg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Vg.defaultProps={sns:"N/A",eMail:"N/A"};const IN=S.div`
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
`,CN=S.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,jN=S.h1`
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
`;function l_({designers:n}){return x.jsxs(IN,{children:[x.jsx(jN,{children:"Designer"}),x.jsx(CN,{children:n.map((t,r)=>x.jsx(Vg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},r))})]})}const DN=S.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,NN=S.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,MN=S.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function ON({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return x.jsx(DN,{$isInfoOpen:t,children:x.jsx(NN,{children:x.jsx(MN,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const VN="/TU2025gradulate/",kN=S.div`
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
`,UN=S.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function PN({isOpen:n=!1,onClick:t}){const[r,a]=q.useState(!1);return q.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),x.jsx(kN,{$visible:!n,$active:r,onClick:()=>{typeof t=="function"&&t()},children:x.jsx(UN,{children:x.jsx("img",{src:`${VN}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function Xc(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const r=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+r}const zN=S.img`
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
`,kp=n=>x.jsx(zN,{loading:"lazy",...n}),LN=S.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,BN=S.div`
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
    padding: 20px 0px 0px 0px;
}
`,$N=S.div`
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
`,u_=S.div`
  display: flex;
  position: relative;
  width: 100%;
`,FN=S.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,KN={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function qN(){const{pid:n}=mT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[r,a]=q.useState(!0),[o,u]=q.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(t){const[,G,X]=t,et=KN[G]||null,ct=Math.max(0,parseInt(X,10)-1);m=Xl.find(Z=>Z.projectNum===ct&&(!et||Z.category===et)),m||(m=Xl.find(Z=>Z.projectNum==ct))}if(!m)return x.jsx(u_,{children:x.jsxs(PageContainer,{children:[x.jsx(wm,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:r,onClose:()=>a(!1),docId:0}),x.jsx(kp,{src:"https://placehold.co/1530x4000",alt:"featured"}),x.jsx(l_,{children:"  "})]})});const g=(m.members||[]).map(G=>{const X=Km.find(et=>et.num===G);return X?{nameKor:X.nameKor,nameEng:X.nameEng,role:X.role||"Designer",sns:X.sns||"-",eMail:X.eMail||"",imgUrl:Xc(X.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",A=m.projectNum??m.num,R=String(A).padStart(3,"0"),O=`/projects/${A}`,[B,P]=q.useState([]);return q.useEffect(()=>{let G=!1;const X=["jpg"],et=30,ct=2,Z=C=>!C||!C.ok?!1:(C.headers.get("content-type")||"").startsWith("image/"),ft=async C=>{try{const I=await fetch(C,{method:"GET",cache:"no-store"});return Z(I)}catch{return!1}};return(async()=>{const C=[];let I=0;for(let j=0;j<et;j++){let M=!1;for(const k of X){const z=Xc(`${O}/gallery/${j}.${k}`);if(await ft(z)){C.push(z),M=!0,I=0;break}}if(!M&&(C.length===0||(I+=1,I>=ct)))break}G||P(C)})(),()=>{G=!0}},[O]),q.useEffect(()=>{const G=m?.projectNum??m?.num;if(G==null)return;const et=Hl(Gl,"works",String(G));(async()=>{try{await Nh(et,{view:Mh(1)})}catch(ct){if(ct.code==="not-found"||/No document/i.test(String(ct)))try{(await fh(et)).exists()?await Nh(et,{view:Mh(1)}):await Ng(et,{view:1},{merge:!0})}catch(Z){console.error("Firestore view fallback error:",Z)}else console.error("Firestore view error:",ct)}})()},[m?.projectNum,m?.num]),x.jsx(u_,{children:x.jsxs(LN,{children:[x.jsx(PN,{isOpen:r,onClick:p}),x.jsx($N,{$visible:o,children:x.jsx(wm,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:r,onClose:d,src:Xc(`/projects/${A}/thumb.jpg`),docId:A})}),x.jsxs(BN,{$isInfoOpen:r,children:[B.length>0?B.map((G,X)=>x.jsx(kp,{src:G,alt:`project-${w}${R}-img-${X+1}`},X)):x.jsx(kp,{src:Xc("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),x.jsx(ON,{videoId:m.videoId,isInfoOpen:r}),x.jsx(FN,{children:x.jsx(l_,{designers:g})})]})]})})}var Up={exports:{}},Ml={},Pp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function HN(){return c_||(c_=1,(function(n){function t(J,ht){var yt=J.length;J.push(ht);t:for(;0<yt;){var It=yt-1>>>1,V=J[It];if(0<o(V,ht))J[It]=ht,J[yt]=V,yt=It;else break t}}function r(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ht=J[0],yt=J.pop();if(yt!==ht){J[0]=yt;t:for(var It=0,V=J.length,at=V>>>1;It<at;){var lt=2*(It+1)-1,ut=J[lt],gt=lt+1,Ct=J[gt];if(0>o(ut,yt))gt<V&&0>o(Ct,ut)?(J[It]=Ct,J[gt]=yt,It=gt):(J[It]=ut,J[lt]=yt,It=lt);else if(gt<V&&0>o(Ct,yt))J[It]=Ct,J[gt]=yt,It=gt;else break t}}return ht}function o(J,ht){var yt=J.sortIndex-ht.sortIndex;return yt!==0?yt:J.id-ht.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,w=null,A=3,R=!1,O=!1,B=!1,P=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null;function ct(J){for(var ht=r(g);ht!==null;){if(ht.callback===null)a(g);else if(ht.startTime<=J)a(g),ht.sortIndex=ht.expirationTime,t(m,ht);else break;ht=r(g)}}function Z(J){if(B=!1,ct(J),!O)if(r(m)!==null)O=!0,ft||(ft=!0,z());else{var ht=r(g);ht!==null&&ne(Z,ht.startTime-J)}}var ft=!1,C=-1,I=5,j=-1;function M(){return P?!0:!(n.unstable_now()-j<I)}function k(){if(P=!1,ft){var J=n.unstable_now();j=J;var ht=!0;try{t:{O=!1,B&&(B=!1,X(C),C=-1),R=!0;var yt=A;try{e:{for(ct(J),w=r(m);w!==null&&!(w.expirationTime>J&&M());){var It=w.callback;if(typeof It=="function"){w.callback=null,A=w.priorityLevel;var V=It(w.expirationTime<=J);if(J=n.unstable_now(),typeof V=="function"){w.callback=V,ct(J),ht=!0;break e}w===r(m)&&a(m),ct(J)}else a(m);w=r(m)}if(w!==null)ht=!0;else{var at=r(g);at!==null&&ne(Z,at.startTime-J),ht=!1}}break t}finally{w=null,A=yt,R=!1}ht=void 0}}finally{ht?z():ft=!1}}}var z;if(typeof et=="function")z=function(){et(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=k,z=function(){ue.postMessage(null)}}else z=function(){G(k,0)};function ne(J,ht){C=G(function(){J(n.unstable_now())},ht)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(J){switch(A){case 1:case 2:case 3:var ht=3;break;default:ht=A}var yt=A;A=ht;try{return J()}finally{A=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(J,ht){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var yt=A;A=J;try{return ht()}finally{A=yt}},n.unstable_scheduleCallback=function(J,ht,yt){var It=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?It+yt:It):yt=It,J){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=yt+V,J={id:v++,callback:ht,priorityLevel:J,startTime:yt,expirationTime:V,sortIndex:-1},yt>It?(J.sortIndex=yt,t(g,J),r(m)===null&&J===r(g)&&(B?(X(C),C=-1):B=!0,ne(Z,yt-It))):(J.sortIndex=V,t(m,J),O||R||(O=!0,ft||(ft=!0,z()))),J},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(J){var ht=A;return function(){var yt=A;A=ht;try{return J.apply(this,arguments)}finally{A=yt}}}})(zp)),zp}var h_;function GN(){return h_||(h_=1,Pp.exports=HN()),Pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function YN(){if(d_)return Ml;d_=1;var n=GN(),t=Tm(),r=dA();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function d(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return p(h),e;if(f===l)return p(h),i;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=f;break}if(b===l){E=!0,l=h,s=f;break}b=b.sibling}if(!E){for(b=f.child;b;){if(b===s){E=!0,s=f,l=h;break}if(b===l){E=!0,l=f,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),et=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case P:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case ft:return"SuspenseList";case j:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case et:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case ct:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return i=e.displayName||null,i!==null?i:ue(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return ue(e(i))}catch{}}return null}var ne=Array.isArray,J=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},It=[],V=-1;function at(e){return{current:e}}function lt(e){0>V||(e.current=It[V],It[V]=null,V--)}function ut(e,i){V++,It[V]=e.current,e.current=i}var gt=at(null),Ct=at(null),_t=at(null),ge=at(null);function zt(e,i){switch(ut(_t,i),ut(Ct,e),ut(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?b1(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=b1(i),e=w1(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(gt),ut(gt,e)}function Me(){lt(gt),lt(Ct),lt(_t)}function ji(e){e.memoizedState!==null&&ut(ge,e);var i=gt.current,s=w1(i,e.type);i!==s&&(ut(Ct,e),ut(gt,s))}function qn(e){Ct.current===e&&(lt(gt),lt(Ct)),ge.current===e&&(lt(ge),Al._currentValue=yt)}var on=Object.prototype.hasOwnProperty,oa=n.unstable_scheduleCallback,ns=n.unstable_cancelCallback,ad=n.unstable_shouldYield,Ao=n.unstable_requestPaint,fn=n.unstable_now,vu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,Di=n.unstable_NormalPriority,sd=n.unstable_LowPriority,So=n.unstable_IdlePriority,od=n.log,la=n.unstable_setDisableYieldValue,ur=null,Je=null;function jn(e){if(typeof od=="function"&&la(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ur,e)}catch{}}var ln=Math.clz32?Math.clz32:Eu,ld=Math.log,_u=Math.LN2;function Eu(e){return e>>>=0,e===0?32:31-(ld(e)/_u|0)|0}var si=256,cr=4194304;function Hn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Hn(l):(E&=b,E!==0?h=Hn(E):s||(s=b&~e,s!==0&&(h=Hn(s))))):(b=l&~f,b!==0?h=Hn(b):E!==0?h=Hn(E):s||(s=l&~e,s!==0&&(h=Hn(s)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,s=i&-i,f>=s||f===32&&(s&4194048)!==0)?i:h}function hr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function is(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var e=si;return si<<=1,(si&4194048)===0&&(si=256),e}function dr(){var e=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),e}function rs(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function ve(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bu(e,i,s,l,h,f){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,D=e.expirationTimes,K=e.hiddenUpdates;for(s=E&~s;0<s;){var tt=31-ln(s),rt=1<<tt;b[tt]=0,D[tt]=-1;var H=K[tt];if(H!==null)for(K[tt]=null,tt=0;tt<H.length;tt++){var Y=H[tt];Y!==null&&(Y.lane&=-536870913)}s&=~rt}l!==0&&fr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(E&~i))}function fr(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ln(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function pr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function Io(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:$1(e.type))}function ud(e,i){var s=ht.p;try{return ht.p=e,i()}finally{ht.p=s}}var oi=Math.random().toString(36).slice(2),_e="__reactFiber$"+oi,He="__reactProps$"+oi,Mi="__reactContainer$"+oi,ua="__reactEvents$"+oi,ca="__reactListeners$"+oi,cd="__reactHandles$"+oi,Gn="__reactResources$"+oi,mr="__reactMarker$"+oi;function as(e){delete e[_e],delete e[He],delete e[ua],delete e[ca],delete e[cd]}function li(e){var i=e[_e];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Mi]||s[_e]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=R1(e);e!==null;){if(s=e[_e])return s;e=R1(e)}return i}e=s,s=e.parentNode}return null}function ui(e){if(e=e[_e]||e[Mi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function gr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function yr(e){var i=e[Gn];return i||(i=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ee(e){e[mr]=!0}var wu=new Set,ha={};function ci(e,i){hi(e,i),hi(e+"Capture",i)}function hi(e,i){for(ha[e]=i,e=0;e<i.length;e++)wu.add(i[e])}var da=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},ss={};function hd(e){return on.call(ss,e)?!0:on.call(di,e)?!1:da.test(e)?ss[e]=!0:(di[e]=!0,!1)}function fa(e,i,s){if(hd(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function pa(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Nn(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ma,os;function Oi(e){if(ma===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ma=i&&i[1]||"",os=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ma+e+os}var ls=!1;function us(e,i){if(!e||ls)return"";ls=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Y){var H=Y}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Y){H=Y}e.call(rt.prototype)}}else{try{throw Error()}catch(Y){H=Y}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),E=f[0],b=f[1];if(E&&b){var D=E.split(`
`),K=b.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<K.length&&!K[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===K.length)for(l=D.length-1,h=K.length-1;1<=l&&0<=h&&D[l]!==K[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==K[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==K[h]){var tt=`
`+D[l].replace(" at new "," at ");return e.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",e.displayName)),tt}while(1<=l&&0<=h);break}}}finally{ls=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Oi(s):""}function dd(e){switch(e.tag){case 26:case 27:case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return us(e.type,!1);case 11:return us(e.type.render,!1);case 1:return us(e.type,!0);case 31:return Oi("Activity");default:return""}}function Yn(e){try{var i="";do i+=dd(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ga(e){var i=xr(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function vr(e){e._valueTracker||(e._valueTracker=ga(e))}function Wt(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=xr(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function Le(e){return e.replace(ya,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function jo(e,i,s,l,h,f,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?No(e,E,de(i)):s!=null?No(e,E,de(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+de(b):e.removeAttribute("name")}function Do(e,i,s,l,h,f,E,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;s=s!=null?""+de(s):"",i=i!=null?""+de(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function No(e,i,s){i==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function _r(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+de(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Tu(e,i,s){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+de(s):""}function Au(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=de(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mo(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ki.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Oo(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Mo(e,h,l)}else for(var f in i)i.hasOwnProperty(f)&&Mo(e,f,i[f])}function cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ru=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return Ru.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vo=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,un=null;function Iu(e){var i=ui(e);if(i&&(e=i.stateNode)){var s=e[He]||null;t:switch(e=i.stateNode,i.type){case"input":if(jo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Le(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));jo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Wt(l)}break t;case"textarea":Tu(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&_r(e,!!s.multiple,i,!1)}}}var xa=!1;function va(e,i,s){if(xa)return e(i,s);xa=!0;try{var l=e(i);return l}finally{if(xa=!1,(Er!==null||un!==null)&&(yc(),Er&&(i=Er,e=un,un=Er=null,Iu(i),e)))for(i=0;i<e.length;i++)Iu(e[i])}}function br(e,i){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(cn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ui=!1}var On=null,ie=null,hs=null;function Cu(){if(hs)return hs;var e,i=ie,s=i.length,l,h="value"in On?On.value:On.textContent,f=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===h[f-l];l++);return hs=h.slice(e,1<l?1-l:void 0)}function _a(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Uo(){return!1}function Ve(e){function i(s,l,h,f,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ea:Uo,this.isPropagationStopped=Uo,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Ve(tn),wa=v({},tn,{view:0,detail:0}),Ta=Ve(wa),ds,Aa,fi,Sa=v({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(ds=e.screenX-fi.screenX,Aa=e.screenY-fi.screenY):Aa=ds=0,fi=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),Ra=Ve(Sa),fd=v({},Sa,{dataTransfer:0}),ju=Ve(fd),Ia=v({},wa,{relatedTarget:0}),fs=Ve(Ia),Du=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Po=Ve(Du),zo=v({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nu=Ve(zo),ps=v({},tn,{data:0}),Lo=Ve(ps),Mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ou[e])?!!i[e]:!1}function ms(){return Vu}var ku=v({},wa,{key:function(e){if(e.key){var i=Mu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gs=Ve(ku),hn=v({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=Ve(hn),Uu=v({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),Tr=Ve(Uu),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Ve(c),_=v({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=Ve(_),F=v({},tn,{newState:0,oldState:0}),Q=Ve(F),ot=[9,13,27,32],St=cn&&"CompositionEvent"in window,se=null;cn&&"documentMode"in document&&(se=document.documentMode);var Yt=cn&&"TextEvent"in window&&!se,be=cn&&(!St||se&&8<se&&11>=se),_n=" ",pi=!1;function Xn(e,i){switch(e){case"keyup":return ot.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function $o(e,i){switch(e){case"compositionend":return Wn(i);case"keypress":return i.which!==32?null:(pi=!0,_n);case"textInput":return e=i.data,e===_n&&pi?null:e;default:return null}}function ob(e,i){if(Zn)return e==="compositionend"||!St&&Xn(e,i)?(e=Cu(),hs=ie=On=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return be&&i.locale!=="ko"?null:i.data;default:return null}}var lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!lb[e.type]:i==="textarea"}function Ug(e,i,s,l){Er?un?un.push(l):un=[l]:Er=l,i=wc(i,"onChange"),0<i.length&&(s=new ba("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Fo=null,Ko=null;function ub(e){y1(e,0)}function Pu(e){var i=gr(e);if(Wt(i))return e}function Pg(e,i){if(e==="change")return i}var zg=!1;if(cn){var pd;if(cn){var md="oninput"in document;if(!md){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),md=typeof Lg.oninput=="function"}pd=md}else pd=!1;zg=pd&&(!document.documentMode||9<document.documentMode)}function Bg(){Fo&&(Fo.detachEvent("onpropertychange",$g),Ko=Fo=null)}function $g(e){if(e.propertyName==="value"&&Pu(Ko)){var i=[];Ug(i,Ko,e,ko(e)),va(ub,i)}}function cb(e,i,s){e==="focusin"?(Bg(),Fo=i,Ko=s,Fo.attachEvent("onpropertychange",$g)):e==="focusout"&&Bg()}function hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(Ko)}function db(e,i){if(e==="click")return Pu(i)}function fb(e,i){if(e==="input"||e==="change")return Pu(i)}function pb(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var En=typeof Object.is=="function"?Object.is:pb;function qo(e,i){if(En(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(i,h)||!En(e[h],i[h]))return!1}return!0}function Fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kg(e,i){var s=Fg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Fg(s)}}function qg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?qg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Hg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Vi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Vi(e.document)}return i}function gd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var mb=cn&&"documentMode"in document&&11>=document.documentMode,ys=null,yd=null,Ho=null,xd=!1;function Gg(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xd||ys==null||ys!==Vi(l)||(l=ys,"selectionStart"in l&&gd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ho&&qo(Ho,l)||(Ho=l,l=wc(yd,"onSelect"),0<l.length&&(i=new ba("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ys)))}function Ca(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var xs={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},vd={},Yg={};cn&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function ja(e){if(vd[e])return vd[e];if(!xs[e])return e;var i=xs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Yg)return vd[e]=i[s];return e}var Qg=ja("animationend"),Xg=ja("animationiteration"),Wg=ja("animationstart"),gb=ja("transitionrun"),yb=ja("transitionstart"),xb=ja("transitioncancel"),Zg=ja("transitionend"),Jg=new Map,_d="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_d.push("scrollEnd");function Jn(e,i){Jg.set(e,i),ci(i,[e])}var t0=new WeakMap;function Vn(e,i){if(typeof e=="object"&&e!==null){var s=t0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Yn(i)},t0.set(e,i),i)}return{value:e,source:i,stack:Yn(i)}}var kn=[],vs=0,Ed=0;function zu(){for(var e=vs,i=Ed=vs=0;i<e;){var s=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var f=kn[i];if(kn[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}f!==0&&e0(s,h,f)}}function Lu(e,i,s,l){kn[vs++]=e,kn[vs++]=i,kn[vs++]=s,kn[vs++]=l,Ed|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bd(e,i,s,l){return Lu(e,i,s,l),Bu(e)}function _s(e,i){return Lu(e,null,null,i),Bu(e)}function e0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&i!==null&&(h=31-ln(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),f):null}function Bu(e){if(50<yl)throw yl=0,Cf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Es={};function vb(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,i,s,l){return new vb(e,i,s,l)}function wd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,i){var s=e.alternate;return s===null?(s=bn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function n0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function $u(e,i,s,l,h,f){var E=0;if(l=e,typeof e=="function")wd(e)&&(E=1);else if(typeof e=="string")E=Ew(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case j:return e=bn(31,s,i,h),e.elementType=j,e.lanes=f,e;case O:return Da(s.children,h,f,i);case B:E=8,h|=24;break;case P:return e=bn(12,s,i,h|2),e.elementType=P,e.lanes=f,e;case Z:return e=bn(13,s,i,h),e.elementType=Z,e.lanes=f,e;case ft:return e=bn(19,s,i,h),e.elementType=ft,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case et:E=10;break t;case X:E=9;break t;case ct:E=11;break t;case C:E=14;break t;case I:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=bn(E,s,i,h),i.elementType=e,i.type=l,i.lanes=f,i}function Da(e,i,s,l){return e=bn(7,e,l,i),e.lanes=s,e}function Td(e,i,s){return e=bn(6,e,null,i),e.lanes=s,e}function Ad(e,i,s){return i=bn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var bs=[],ws=0,Fu=null,Ku=0,Un=[],Pn=0,Na=null,Li=1,Bi="";function Ma(e,i){bs[ws++]=Ku,bs[ws++]=Fu,Fu=e,Ku=i}function i0(e,i,s){Un[Pn++]=Li,Un[Pn++]=Bi,Un[Pn++]=Na,Na=e;var l=Li;e=Bi;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var f=32-ln(i)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Li=1<<32-ln(i)+h|s<<h|l,Bi=f+e}else Li=1<<f|s<<h|l,Bi=e}function Sd(e){e.return!==null&&(Ma(e,1),i0(e,1,0))}function Rd(e){for(;e===Fu;)Fu=bs[--ws],bs[ws]=null,Ku=bs[--ws],bs[ws]=null;for(;e===Na;)Na=Un[--Pn],Un[Pn]=null,Bi=Un[--Pn],Un[Pn]=null,Li=Un[--Pn],Un[Pn]=null}var dn=null,ye=null,Kt=!1,Oa=null,mi=!1,Id=Error(a(519));function Va(e){var i=Error(a(418,""));throw Qo(Vn(i,e)),Id}function r0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[_e]=e,i[He]=l,s){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(s=0;s<vl.length;s++)kt(vl[s],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":kt("invalid",i),Do(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),vr(i);break;case"select":kt("invalid",i);break;case"textarea":kt("invalid",i),Au(i,l.value,l.defaultValue,l.children),vr(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||E1(i.textContent,s)?(l.popover!=null&&(kt("beforetoggle",i),kt("toggle",i)),l.onScroll!=null&&kt("scroll",i),l.onScrollEnd!=null&&kt("scrollend",i),l.onClick!=null&&(i.onclick=Tc),i=!0):i=!1,i||Va(e)}function a0(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:dn=dn.return}}function Go(e){if(e!==dn)return!1;if(!Kt)return a0(e),Kt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||qf(e.type,e.memoizedProps)),s=!s),s&&ye&&Va(e),a0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){ye=ei(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}ye=null}}else i===27?(i=ye,Lr(e.type)?(e=Qf,Qf=null,ye=e):ye=i):ye=dn?ei(e.stateNode.nextSibling):null;return!0}function Yo(){ye=dn=null,Kt=!1}function s0(){var e=Oa;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),Oa=null),e}function Qo(e){Oa===null?Oa=[e]:Oa.push(e)}var Cd=at(null),ka=null,$i=null;function Ar(e,i,s){ut(Cd,i._currentValue),i._currentValue=s}function Fi(e){e._currentValue=Cd.current,lt(Cd)}function jd(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Dd(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var E=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var D=0;D<i.length;D++)if(b.context===i[D]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),jd(f.return,s,e),l||(E=null);break t}f=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,f=E.alternate,f!==null&&(f.lanes|=s),jd(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Xo(e,i,s,l){e=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&Dd(i,e,s,l),i.flags|=262144}function qu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return o0(ka,e)}function Hu(e,i){return ka===null&&Ua(e),o0(e,i)}function o0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},$i===null){if(e===null)throw Error(a(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return s}var _b=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Eb=n.unstable_scheduleCallback,bb=n.unstable_NormalPriority,ke={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nd(){return{controller:new _b,data:new Map,refCount:0}}function Wo(e){e.refCount--,e.refCount===0&&Eb(bb,function(){e.controller.abort()})}var Zo=null,Md=0,Ts=0,As=null;function wb(e,i){if(Zo===null){var s=Zo=[];Md=0,Ts=kf(),As={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Md++,i.then(l0,l0),i}function l0(){if(--Md===0&&Zo!==null){As!==null&&(As.status="fulfilled");var e=Zo;Zo=null,Ts=0,As=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Tb(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var u0=J.S;J.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&wb(e,i),u0!==null&&u0(e,i)};var Pa=at(null);function Od(){var e=Pa.current;return e!==null?e:re.pooledCache}function Gu(e,i){i===null?ut(Pa,Pa.current):ut(Pa,i.pool)}function c0(){var e=Od();return e===null?null:{parent:ke._currentValue,pool:e}}var Jo=Error(a(460)),h0=Error(a(474)),Yu=Error(a(542)),Vd={then:function(){}};function d0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(){}function f0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Qu,Qu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,m0(e),e;default:if(typeof i.status=="string")i.then(Qu,Qu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,m0(e),e}throw tl=i,Jo}}var tl=null;function p0(){if(tl===null)throw Error(a(459));var e=tl;return tl=null,e}function m0(e){if(e===Jo||e===Yu)throw Error(a(483))}var Sr=!1;function kd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Bu(e),e0(e,null,s),i}return Lu(e,l,i,s),Bu(e)}function el(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,pr(e,s)}}function Pd(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=E:f=f.next=E,s=s.next}while(s!==null);f===null?h=f=i:f=f.next=i}else h=f=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var zd=!1;function nl(){if(zd){var e=As;if(e!==null)throw e}}function il(e,i,s,l){zd=!1;var h=e.updateQueue;Sr=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var D=b,K=D.next;D.next=null,E===null?f=K:E.next=K,E=D;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,b=tt.lastBaseUpdate,b!==E&&(b===null?tt.firstBaseUpdate=K:b.next=K,tt.lastBaseUpdate=D))}if(f!==null){var rt=h.baseState;E=0,tt=K=D=null,b=f;do{var H=b.lane&-536870913,Y=H!==b.lane;if(Y?(Lt&H)===H:(l&H)===H){H!==0&&H===Ts&&(zd=!0),tt!==null&&(tt=tt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;H=i;var te=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(te,rt,H);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,H=typeof Tt=="function"?Tt.call(te,rt,H):Tt,H==null)break t;rt=v({},rt,H);break t;case 2:Sr=!0}}H=b.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},tt===null?(K=tt=Y,D=rt):tt=tt.next=Y,E|=H;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);tt===null&&(D=rt),h.baseState=D,h.firstBaseUpdate=K,h.lastBaseUpdate=tt,f===null&&(h.shared.lanes=0),kr|=E,e.lanes=E,e.memoizedState=rt}}function g0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function y0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)g0(s[e],i)}var Ss=at(null),Xu=at(0);function x0(e,i){e=Xi,ut(Xu,e),ut(Ss,i),Xi=e|i.baseLanes}function Ld(){ut(Xu,Xi),ut(Ss,Ss.current)}function Bd(){Xi=Xu.current,lt(Ss),lt(Xu)}var Cr=0,Mt=null,Zt=null,Re=null,Wu=!1,Rs=!1,za=!1,Zu=0,rl=0,Is=null,Ab=0;function we(){throw Error(a(321))}function $d(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!En(e[s],i[s]))return!1;return!0}function Fd(e,i,s,l,h,f){return Cr=f,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,J.H=e===null||e.memoizedState===null?ey:ny,za=!1,f=s(l,h),za=!1,Rs&&(f=_0(i,s,l,h)),v0(e),f}function v0(e){J.H=rc;var i=Zt!==null&&Zt.next!==null;if(Cr=0,Re=Zt=Mt=null,Wu=!1,rl=0,Is=null,i)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&qu(e)&&(Be=!0))}function _0(e,i,s,l){Mt=e;var h=0;do{if(Rs&&(Is=null),rl=0,Rs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Zt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}J.H=Nb,f=i(s,l)}while(Rs);return f}function Sb(){var e=J.H,i=e.useState()[0];return i=typeof i.then=="function"?al(i):i,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Mt.flags|=1024),i}function Kd(){var e=Zu!==0;return Zu=0,e}function qd(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Hd(e){if(Wu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wu=!1}Cr=0,Re=Zt=Mt=null,Rs=!1,rl=Zu=0,Is=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Zt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var i=Re===null?Mt.memoizedState:Re.next;if(i!==null)Re=i,Zt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var i=rl;return rl+=1,Is===null&&(Is=[]),e=f0(Is,e,i),i=Mt,(Re===null?i.memoizedState:Re.next)===null&&(i=i.alternate,J.H=i===null||i.memoizedState===null?ey:ny),e}function Ju(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===et)return en(e)}throw Error(a(438,String(e)))}function Yd(e){var i=null,s=Mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Gd(),Mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=M;return i.index++,s}function Ki(e,i){return typeof i=="function"?i(e):i}function tc(e){var i=Ie();return Qd(i,Zt,e)}function Qd(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}i.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{i=h.next;var b=E=null,D=null,K=i,tt=!1;do{var rt=K.lane&-536870913;if(rt!==K.lane?(Lt&rt)===rt:(Cr&rt)===rt){var H=K.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),rt===Ts&&(tt=!0);else if((Cr&H)===H){K=K.next,H===Ts&&(tt=!0);continue}else rt={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(b=D=rt,E=f):D=D.next=rt,Mt.lanes|=H,kr|=H;rt=K.action,za&&s(f,rt),f=K.hasEagerState?K.eagerState:s(f,rt)}else H={lane:rt,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(b=D=H,E=f):D=D.next=H,Mt.lanes|=rt,kr|=rt;K=K.next}while(K!==null&&K!==i);if(D===null?E=f:D.next=b,!En(f,e.memoizedState)&&(Be=!0,tt&&(s=As,s!==null)))throw s;e.memoizedState=f,e.baseState=E,e.baseQueue=D,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xd(e){var i=Ie(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do f=e(f,E.action),E=E.next;while(E!==h);En(f,i.memoizedState)||(Be=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),s.lastRenderedState=f}return[f,l]}function E0(e,i,s){var l=Mt,h=Ie(),f=Kt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,Be=!0),h=h.queue;var b=T0.bind(null,l,h,e);if(sl(2048,8,b,[e]),h.getSnapshot!==i||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Cs(9,ec(),w0.bind(null,l,h,s,i),null),re===null)throw Error(a(349));f||(Cr&124)!==0||b0(l,i,s)}return s}function b0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Mt.updateQueue,i===null?(i=Gd(),Mt.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function w0(e,i,s,l){i.value=s,i.getSnapshot=l,A0(i)&&S0(e)}function T0(e,i,s){return s(function(){A0(i)&&S0(e)})}function A0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!En(e,s)}catch{return!0}}function S0(e){var i=_s(e,2);i!==null&&Rn(i,e,2)}function Wd(e){var i=pn();if(typeof e=="function"){var s=e;if(e=s(),za){jn(!0);try{s()}finally{jn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},i}function R0(e,i,s,l){return e.baseState=s,Qd(e,Zt,typeof l=="function"?l:Ki)}function Rb(e,i,s,l,h){if(ic(e))throw Error(a(485));if(e=i.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};J.T!==null?s(!0):f.isTransition=!1,l(f),s=i.pending,s===null?(f.next=i.pending=f,I0(i,f)):(f.next=s.next,i.pending=s.next=f)}}function I0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var f=J.T,E={};J.T=E;try{var b=s(h,l),D=J.S;D!==null&&D(E,b),C0(e,i,b)}catch(K){Zd(e,i,K)}finally{J.T=f}}else try{f=s(h,l),C0(e,i,f)}catch(K){Zd(e,i,K)}}function C0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){j0(e,i,l)},function(l){return Zd(e,i,l)}):j0(e,i,s)}function j0(e,i,s){i.status="fulfilled",i.value=s,D0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,I0(e,s)))}function Zd(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,D0(i),i=i.next;while(i!==l)}e.action=null}function D0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function N0(e,i){return i}function M0(e,i){if(Kt){var s=re.formState;if(s!==null){t:{var l=Mt;if(Kt){if(ye){e:{for(var h=ye,f=mi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ei(h.nextSibling),l=h.data==="F!";break t}}Va(l)}l=!1}l&&(i=s[0])}}return s=pn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:i},s.queue=l,s=Z0.bind(null,Mt,l),l.dispatch=s,l=Wd(!1),f=rf.bind(null,Mt,!1,l.queue),l=pn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=Rb.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function O0(e){var i=Ie();return V0(i,Zt,e)}function V0(e,i,s){if(i=Qd(e,i,N0)[0],e=tc(Ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=al(i)}catch(E){throw E===Jo?Yu:E}else l=i;i=Ie();var h=i.queue,f=h.dispatch;return s!==i.memoizedState&&(Mt.flags|=2048,Cs(9,ec(),Ib.bind(null,h,s),null)),[l,f,e]}function Ib(e,i){e.action=i}function k0(e){var i=Ie(),s=Zt;if(s!==null)return V0(i,s,e);Ie(),i=i.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Cs(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=Gd(),Mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function ec(){return{destroy:void 0,resource:void 0}}function U0(){return Ie().memoizedState}function nc(e,i,s,l){var h=pn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Cs(1|i,ec(),s,l)}function sl(e,i,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Zt!==null&&l!==null&&$d(l,Zt.memoizedState.deps)?h.memoizedState=Cs(i,f,s,l):(Mt.flags|=e,h.memoizedState=Cs(1|i,f,s,l))}function P0(e,i){nc(8390656,8,e,i)}function z0(e,i){sl(2048,8,e,i)}function L0(e,i){return sl(4,2,e,i)}function B0(e,i){return sl(4,4,e,i)}function $0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function F0(e,i,s){s=s!=null?s.concat([e]):null,sl(4,4,$0.bind(null,i,e),s)}function Jd(){}function K0(e,i){var s=Ie();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&$d(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function q0(e,i){var s=Ie();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&$d(i,l[1]))return l[0];if(l=e(),za){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,i],l}function tf(e,i,s){return s===void 0||(Cr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Yy(),Mt.lanes|=e,kr|=e,s)}function H0(e,i,s,l){return En(s,i)?s:Ss.current!==null?(e=tf(e,s,l),En(e,i)||(Be=!0),e):(Cr&42)===0?(Be=!0,e.memoizedState=s):(e=Yy(),Mt.lanes|=e,kr|=e,i)}function G0(e,i,s,l,h){var f=ht.p;ht.p=f!==0&&8>f?f:8;var E=J.T,b={};J.T=b,rf(e,!1,i,s);try{var D=h(),K=J.S;if(K!==null&&K(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var tt=Tb(D,l);ol(e,i,tt,Sn(e))}else ol(e,i,l,Sn(e))}catch(rt){ol(e,i,{then:function(){},status:"rejected",reason:rt},Sn())}finally{ht.p=f,J.T=E}}function Cb(){}function ef(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=Y0(e).queue;G0(e,h,i,yt,s===null?Cb:function(){return Q0(e),s(l)})}function Y0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:yt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Q0(e){var i=Y0(e).next.queue;ol(e,i,{},Sn())}function nf(){return en(Al)}function X0(){return Ie().memoizedState}function W0(){return Ie().memoizedState}function jb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Sn();e=Rr(s);var l=Ir(i,e,s);l!==null&&(Rn(l,i,s),el(l,i,s)),i={cache:Nd()},e.payload=i;return}i=i.return}}function Db(e,i,s){var l=Sn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?J0(i,s):(s=bd(e,i,s,l),s!==null&&(Rn(s,e,l),ty(s,i,l)))}function Z0(e,i,s){var l=Sn();ol(e,i,s,l)}function ol(e,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))J0(i,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var E=i.lastRenderedState,b=f(E,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,E))return Lu(e,i,h,0),re===null&&zu(),!1}catch{}finally{}if(s=bd(e,i,h,l),s!==null)return Rn(s,e,l),ty(s,i,l),!0}return!1}function rf(e,i,s,l){if(l={lane:2,revertLane:kf(),action:l,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(i)throw Error(a(479))}else i=bd(e,s,l,2),i!==null&&Rn(i,e,2)}function ic(e){var i=e.alternate;return e===Mt||i!==null&&i===Mt}function J0(e,i){Rs=Wu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function ty(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,pr(e,s)}}var rc={readContext:en,use:Ju,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},ey={readContext:en,use:Ju,useCallback:function(e,i){return pn().memoizedState=[e,i===void 0?null:i],e},useContext:en,useEffect:P0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,nc(4194308,4,$0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return nc(4194308,4,e,i)},useInsertionEffect:function(e,i){nc(4,2,e,i)},useMemo:function(e,i){var s=pn();i=i===void 0?null:i;var l=e();if(za){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=pn();if(s!==void 0){var h=s(i);if(za){jn(!0);try{s(i)}finally{jn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Db.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var i=pn();return e={current:e},i.memoizedState=e},useState:function(e){e=Wd(e);var i=e.queue,s=Z0.bind(null,Mt,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Jd,useDeferredValue:function(e,i){var s=pn();return tf(s,e,i)},useTransition:function(){var e=Wd(!1);return e=G0.bind(null,Mt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Mt,h=pn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),re===null)throw Error(a(349));(Lt&124)!==0||b0(l,i,s)}h.memoizedState=s;var f={value:s,getSnapshot:i};return h.queue=f,P0(T0.bind(null,l,f,e),[e]),l.flags|=2048,Cs(9,ec(),w0.bind(null,l,f,s,i),null),s},useId:function(){var e=pn(),i=re.identifierPrefix;if(Kt){var s=Bi,l=Li;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Zu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Ab++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:nf,useFormState:M0,useActionState:M0,useOptimistic:function(e){var i=pn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=rf.bind(null,Mt,!0,s),s.dispatch=i,[e,i]},useMemoCache:Yd,useCacheRefresh:function(){return pn().memoizedState=jb.bind(null,Mt)}},ny={readContext:en,use:Ju,useCallback:K0,useContext:en,useEffect:z0,useImperativeHandle:F0,useInsertionEffect:L0,useLayoutEffect:B0,useMemo:q0,useReducer:tc,useRef:U0,useState:function(){return tc(Ki)},useDebugValue:Jd,useDeferredValue:function(e,i){var s=Ie();return H0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=tc(Ki)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:E0,useId:X0,useHostTransitionStatus:nf,useFormState:O0,useActionState:O0,useOptimistic:function(e,i){var s=Ie();return R0(s,Zt,e,i)},useMemoCache:Yd,useCacheRefresh:W0},Nb={readContext:en,use:Ju,useCallback:K0,useContext:en,useEffect:z0,useImperativeHandle:F0,useInsertionEffect:L0,useLayoutEffect:B0,useMemo:q0,useReducer:Xd,useRef:U0,useState:function(){return Xd(Ki)},useDebugValue:Jd,useDeferredValue:function(e,i){var s=Ie();return Zt===null?tf(s,e,i):H0(s,Zt.memoizedState,e,i)},useTransition:function(){var e=Xd(Ki)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:E0,useId:X0,useHostTransitionStatus:nf,useFormState:k0,useActionState:k0,useOptimistic:function(e,i){var s=Ie();return Zt!==null?R0(s,Zt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Yd,useCacheRefresh:W0},js=null,ll=0;function ac(e){var i=ll;return ll+=1,js===null&&(js=[]),f0(js,e,i)}function ul(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function sc(e,i){throw i.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function iy(e){var i=e._init;return i(e._payload)}function ry(e){function i(L,U){if(e){var $=L.deletions;$===null?(L.deletions=[U],L.flags|=16):$.push(U)}}function s(L,U){if(!e)return null;for(;U!==null;)i(L,U),U=U.sibling;return null}function l(L){for(var U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function h(L,U){return L=zi(L,U),L.index=0,L.sibling=null,L}function f(L,U,$){return L.index=$,e?($=L.alternate,$!==null?($=$.index,$<U?(L.flags|=67108866,U):$):(L.flags|=67108866,U)):(L.flags|=1048576,U)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function b(L,U,$,nt){return U===null||U.tag!==6?(U=Td($,L.mode,nt),U.return=L,U):(U=h(U,$),U.return=L,U)}function D(L,U,$,nt){var mt=$.type;return mt===O?tt(L,U,$.props.children,nt,$.key):U!==null&&(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&iy(mt)===U.type)?(U=h(U,$.props),ul(U,$),U.return=L,U):(U=$u($.type,$.key,$.props,null,L.mode,nt),ul(U,$),U.return=L,U)}function K(L,U,$,nt){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Ad($,L.mode,nt),U.return=L,U):(U=h(U,$.children||[]),U.return=L,U)}function tt(L,U,$,nt,mt){return U===null||U.tag!==7?(U=Da($,L.mode,nt,mt),U.return=L,U):(U=h(U,$),U.return=L,U)}function rt(L,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Td(""+U,L.mode,$),U.return=L,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case A:return $=$u(U.type,U.key,U.props,null,L.mode,$),ul($,U),$.return=L,$;case R:return U=Ad(U,L.mode,$),U.return=L,U;case I:var nt=U._init;return U=nt(U._payload),rt(L,U,$)}if(ne(U)||z(U))return U=Da(U,L.mode,$,null),U.return=L,U;if(typeof U.then=="function")return rt(L,ac(U),$);if(U.$$typeof===et)return rt(L,Hu(L,U),$);sc(L,U)}return null}function H(L,U,$,nt){var mt=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return mt!==null?null:b(L,U,""+$,nt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return $.key===mt?D(L,U,$,nt):null;case R:return $.key===mt?K(L,U,$,nt):null;case I:return mt=$._init,$=mt($._payload),H(L,U,$,nt)}if(ne($)||z($))return mt!==null?null:tt(L,U,$,nt,null);if(typeof $.then=="function")return H(L,U,ac($),nt);if($.$$typeof===et)return H(L,U,Hu(L,$),nt);sc(L,$)}return null}function Y(L,U,$,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return L=L.get($)||null,b(U,L,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case A:return L=L.get(nt.key===null?$:nt.key)||null,D(U,L,nt,mt);case R:return L=L.get(nt.key===null?$:nt.key)||null,K(U,L,nt,mt);case I:var Ot=nt._init;return nt=Ot(nt._payload),Y(L,U,$,nt,mt)}if(ne(nt)||z(nt))return L=L.get($)||null,tt(U,L,nt,mt,null);if(typeof nt.then=="function")return Y(L,U,$,ac(nt),mt);if(nt.$$typeof===et)return Y(L,U,$,Hu(U,nt),mt);sc(U,nt)}return null}function Tt(L,U,$,nt){for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null;xt!==null&&bt<$.length;bt++){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=H(L,xt,$[bt],nt);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&i(L,xt),U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Fe}if(bt===$.length)return s(L,xt),Kt&&Ma(L,bt),mt;if(xt===null){for(;bt<$.length;bt++)xt=rt(L,$[bt],nt),xt!==null&&(U=f(xt,U,bt),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Kt&&Ma(L,bt),mt}for(xt=l(xt);bt<$.length;bt++)Fe=Y(xt,L,bt,$[bt],nt),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?bt:Fe.key),U=f(Fe,U,bt),Ot===null?mt=Fe:Ot.sibling=Fe,Ot=Fe);return e&&xt.forEach(function(qr){return i(L,qr)}),Kt&&Ma(L,bt),mt}function Et(L,U,$,nt){if($==null)throw Error(a(151));for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null,Ft=$.next();xt!==null&&!Ft.done;bt++,Ft=$.next()){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var qr=H(L,xt,Ft.value,nt);if(qr===null){xt===null&&(xt=Fe);break}e&&xt&&qr.alternate===null&&i(L,xt),U=f(qr,U,bt),Ot===null?mt=qr:Ot.sibling=qr,Ot=qr,xt=Fe}if(Ft.done)return s(L,xt),Kt&&Ma(L,bt),mt;if(xt===null){for(;!Ft.done;bt++,Ft=$.next())Ft=rt(L,Ft.value,nt),Ft!==null&&(U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Kt&&Ma(L,bt),mt}for(xt=l(xt);!Ft.done;bt++,Ft=$.next())Ft=Y(xt,L,bt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?bt:Ft.key),U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(Mw){return i(L,Mw)}),Kt&&Ma(L,bt),mt}function te(L,U,$,nt){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case A:t:{for(var mt=$.key;U!==null;){if(U.key===mt){if(mt=$.type,mt===O){if(U.tag===7){s(L,U.sibling),nt=h(U,$.props.children),nt.return=L,L=nt;break t}}else if(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&iy(mt)===U.type){s(L,U.sibling),nt=h(U,$.props),ul(nt,$),nt.return=L,L=nt;break t}s(L,U);break}else i(L,U);U=U.sibling}$.type===O?(nt=Da($.props.children,L.mode,nt,$.key),nt.return=L,L=nt):(nt=$u($.type,$.key,$.props,null,L.mode,nt),ul(nt,$),nt.return=L,L=nt)}return E(L);case R:t:{for(mt=$.key;U!==null;){if(U.key===mt)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){s(L,U.sibling),nt=h(U,$.children||[]),nt.return=L,L=nt;break t}else{s(L,U);break}else i(L,U);U=U.sibling}nt=Ad($,L.mode,nt),nt.return=L,L=nt}return E(L);case I:return mt=$._init,$=mt($._payload),te(L,U,$,nt)}if(ne($))return Tt(L,U,$,nt);if(z($)){if(mt=z($),typeof mt!="function")throw Error(a(150));return $=mt.call($),Et(L,U,$,nt)}if(typeof $.then=="function")return te(L,U,ac($),nt);if($.$$typeof===et)return te(L,U,Hu(L,$),nt);sc(L,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,U!==null&&U.tag===6?(s(L,U.sibling),nt=h(U,$),nt.return=L,L=nt):(s(L,U),nt=Td($,L.mode,nt),nt.return=L,L=nt),E(L)):s(L,U)}return function(L,U,$,nt){try{ll=0;var mt=te(L,U,$,nt);return js=null,mt}catch(xt){if(xt===Jo||xt===Yu)throw xt;var Ot=bn(29,xt,null,L.mode);return Ot.lanes=nt,Ot.return=L,Ot}finally{}}}var Ds=ry(!0),ay=ry(!1),zn=at(null),gi=null;function jr(e){var i=e.alternate;ut(Ue,Ue.current&1),ut(zn,e),gi===null&&(i===null||Ss.current!==null||i.memoizedState!==null)&&(gi=e)}function sy(e){if(e.tag===22){if(ut(Ue,Ue.current),ut(zn,e),gi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(gi=e)}}else Dr()}function Dr(){ut(Ue,Ue.current),ut(zn,zn.current)}function qi(e){lt(zn),gi===e&&(gi=null),lt(Ue)}var Ue=at(0);function oc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Yf(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function af(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var sf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Sn(),h=Rr(l);h.payload=i,s!=null&&(h.callback=s),i=Ir(e,h,l),i!==null&&(Rn(i,e,l),el(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Sn(),h=Rr(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ir(e,h,l),i!==null&&(Rn(i,e,l),el(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Sn(),l=Rr(s);l.tag=2,i!=null&&(l.callback=i),i=Ir(e,l,s),i!==null&&(Rn(i,e,s),el(i,e,s))}};function oy(e,i,s,l,h,f,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,E):i.prototype&&i.prototype.isPureReactComponent?!qo(s,l)||!qo(h,f):!0}function ly(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&sf.enqueueReplaceState(i,i.state,null)}function La(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function uy(e){lc(e)}function cy(e){console.error(e)}function hy(e){lc(e)}function uc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function dy(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function of(e,i,s){return s=Rr(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(e,i)},s}function fy(e){return e=Rr(e),e.tag=3,e}function py(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){dy(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){dy(i,s,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Mb(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Xo(i,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return gi===null?Df():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Vd?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Mf(e,l,h)),!1;case 22:return s.flags|=65536,l===Vd?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Mf(e,l,h)),!1}throw Error(a(435,s.tag))}return Mf(e,l,h),Df(),!1}if(Kt)return i=zn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Id&&(e=Error(a(422),{cause:l}),Qo(Vn(e,s)))):(l!==Id&&(i=Error(a(423),{cause:l}),Qo(Vn(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=of(e.stateNode,l,h),Pd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=Vn(f,s),gl===null?gl=[f]:gl.push(f),xe!==4&&(xe=2),i===null)return!0;l=Vn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=of(s.stateNode,l,e),Pd(s,e),!1;case 1:if(i=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ur===null||!Ur.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=fy(h),py(h,e,s,l),Pd(s,h),!1}s=s.return}while(s!==null);return!1}var my=Error(a(461)),Be=!1;function Ge(e,i,s,l){i.child=e===null?ay(i,null,s,l):Ds(i,e.child,s,l)}function gy(e,i,s,l,h){s=s.render;var f=i.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return Ua(i),l=Fd(e,i,s,E,f,h),b=Kd(),e!==null&&!Be?(qd(e,i,h),Hi(e,i,h)):(Kt&&b&&Sd(i),i.flags|=1,Ge(e,i,l,h),i.child)}function yy(e,i,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!wd(f)&&f.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=f,xy(e,i,f,l,h)):(e=$u(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!mf(e,h)){var E=f.memoizedProps;if(s=s.compare,s=s!==null?s:qo,s(E,l)&&e.ref===i.ref)return Hi(e,i,h)}return i.flags|=1,e=zi(f,l),e.ref=i.ref,e.return=i,i.child=e}function xy(e,i,s,l,h){if(e!==null){var f=e.memoizedProps;if(qo(f,l)&&e.ref===i.ref)if(Be=!1,i.pendingProps=l=f,mf(e,h))(e.flags&131072)!==0&&(Be=!0);else return i.lanes=e.lanes,Hi(e,i,h)}return lf(e,i,s,l,h)}function vy(e,i,s){var l=i.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=i.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~l}else i.childLanes=0,i.child=null;return _y(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(i,f!==null?f.cachePool:null),f!==null?x0(i,f):Ld(),sy(i);else return i.lanes=i.childLanes=536870912,_y(e,i,f!==null?f.baseLanes|s:s,s)}else f!==null?(Gu(i,f.cachePool),x0(i,f),Dr(),i.memoizedState=null):(e!==null&&Gu(i,null),Ld(),Dr());return Ge(e,i,h,s),i.child}function _y(e,i,s,l){var h=Od();return h=h===null?null:{parent:ke._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Gu(i,null),Ld(),sy(i),e!==null&&Xo(e,i,l,!0),null}function cc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function lf(e,i,s,l,h){return Ua(i),s=Fd(e,i,s,l,void 0,h),l=Kd(),e!==null&&!Be?(qd(e,i,h),Hi(e,i,h)):(Kt&&l&&Sd(i),i.flags|=1,Ge(e,i,s,h),i.child)}function Ey(e,i,s,l,h,f){return Ua(i),i.updateQueue=null,s=_0(i,l,s,h),v0(e),l=Kd(),e!==null&&!Be?(qd(e,i,f),Hi(e,i,f)):(Kt&&l&&Sd(i),i.flags|=1,Ge(e,i,s,f),i.child)}function by(e,i,s,l,h){if(Ua(i),i.stateNode===null){var f=Es,E=s.contextType;typeof E=="object"&&E!==null&&(f=en(E)),f=new s(l,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=l,f.state=i.memoizedState,f.refs={},kd(i),E=s.contextType,f.context=typeof E=="object"&&E!==null?en(E):Es,f.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(af(i,s,E,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&sf.enqueueReplaceState(f,f.state,null),il(i,l,f,h),nl(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){f=i.stateNode;var b=i.memoizedProps,D=La(s,b);f.props=D;var K=f.context,tt=s.contextType;E=Es,typeof tt=="object"&&tt!==null&&(E=en(tt));var rt=s.getDerivedStateFromProps;tt=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,tt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||K!==E)&&ly(i,f,l,E),Sr=!1;var H=i.memoizedState;f.state=H,il(i,l,f,h),nl(),K=i.memoizedState,b||H!==K||Sr?(typeof rt=="function"&&(af(i,s,rt,l),K=i.memoizedState),(D=Sr||oy(i,s,D,l,H,K,E))?(tt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=K),f.props=l,f.state=K,f.context=E,l=D):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{f=i.stateNode,Ud(e,i),E=i.memoizedProps,tt=La(s,E),f.props=tt,rt=i.pendingProps,H=f.context,K=s.contextType,D=Es,typeof K=="object"&&K!==null&&(D=en(K)),b=s.getDerivedStateFromProps,(K=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==rt||H!==D)&&ly(i,f,l,D),Sr=!1,H=i.memoizedState,f.state=H,il(i,l,f,h),nl();var Y=i.memoizedState;E!==rt||H!==Y||Sr||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof b=="function"&&(af(i,s,b,l),Y=i.memoizedState),(tt=Sr||oy(i,s,tt,l,H,Y,D)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Y,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Y,D)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),f.props=l,f.state=Y,f.context=D,l=tt):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),l=!1)}return f=l,cc(e,i),l=(i.flags&128)!==0,f||l?(f=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&l?(i.child=Ds(i,e.child,null,h),i.child=Ds(i,null,s,h)):Ge(e,i,s,h),i.memoizedState=f.state,e=i.child):e=Hi(e,i,h),e}function wy(e,i,s,l){return Yo(),i.flags|=256,Ge(e,i,s,l),i.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:c0()}}function hf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Ln),e}function Ty(e,i,s){var l=i.pendingProps,h=!1,f=(i.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Kt){if(h?jr(i):Dr(),Kt){var b=ye,D;if(D=b){t:{for(D=b,b=mi;D.nodeType!==8;){if(!b){b=null;break t}if(D=ei(D.nextSibling),D===null){b=null;break t}}b=D}b!==null?(i.memoizedState={dehydrated:b,treeContext:Na!==null?{id:Li,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=b,D.return=i,i.child=D,dn=i,ye=null,D=!0):D=!1}D||Va(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Yf(b)?i.lanes=32:i.lanes=536870912,null;qi(i)}return b=l.children,l=l.fallback,h?(Dr(),h=i.mode,b=hc({mode:"hidden",children:b},h),l=Da(l,h,s,null),b.return=i,l.return=i,b.sibling=l,i.child=b,h=i.child,h.memoizedState=cf(s),h.childLanes=hf(e,E,s),i.memoizedState=uf,l):(jr(i),df(i,b))}if(D=e.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(f)i.flags&256?(jr(i),i.flags&=-257,i=ff(e,i,s)):i.memoizedState!==null?(Dr(),i.child=e.child,i.flags|=128,i=null):(Dr(),h=l.fallback,b=i.mode,l=hc({mode:"visible",children:l.children},b),h=Da(h,b,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ds(i,e.child,null,s),l=i.child,l.memoizedState=cf(s),l.childLanes=hf(e,E,s),i.memoizedState=uf,i=h);else if(jr(i),Yf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(a(419)),l.stack="",l.digest=E,Qo({value:l,source:null,stack:null}),i=ff(e,i,s)}else if(Be||Xo(e,i,s,!1),E=(s&e.childLanes)!==0,Be||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:Io(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,_s(e,l),Rn(E,e,l),my;b.data==="$?"||Df(),i=ff(e,i,s)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=D.treeContext,ye=ei(b.nextSibling),dn=i,Kt=!0,Oa=null,mi=!1,e!==null&&(Un[Pn++]=Li,Un[Pn++]=Bi,Un[Pn++]=Na,Li=e.id,Bi=e.overflow,Na=i),i=df(i,l.children),i.flags|=4096);return i}return h?(Dr(),h=l.fallback,b=i.mode,D=e.child,K=D.sibling,l=zi(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,K!==null?h=zi(K,h):(h=Da(h,b,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,b=e.child.memoizedState,b===null?b=cf(s):(D=b.cachePool,D!==null?(K=ke._currentValue,D=D.parent!==K?{parent:K,pool:K}:D):D=c0(),b={baseLanes:b.baseLanes|s,cachePool:D}),h.memoizedState=b,h.childLanes=hf(e,E,s),i.memoizedState=uf,l):(jr(i),s=e.child,e=s.sibling,s=zi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function df(e,i){return i=hc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function hc(e,i){return e=bn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ff(e,i,s){return Ds(i,e.child,null,s),e=df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ay(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),jd(e.return,i,s)}function pf(e,i,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Sy(e,i,s){var l=i.pendingProps,h=l.revealOrder,f=l.tail;if(Ge(e,i,l.children,s),l=Ue.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ay(e,s,i);else if(e.tag===19)Ay(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ut(Ue,l),h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&oc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),pf(i,!1,h,s,f);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&oc(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}pf(i,!0,s,null,f);break;case"together":pf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Hi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),kr|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Xo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=zi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=zi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function mf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function Ob(e,i,s){switch(i.tag){case 3:zt(i,i.stateNode.containerInfo),Ar(i,ke,e.memoizedState.cache),Yo();break;case 27:case 5:ji(i);break;case 4:zt(i,i.stateNode.containerInfo);break;case 10:Ar(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(jr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ty(e,i,s):(jr(i),e=Hi(e,i,s),e!==null?e.sibling:null);jr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Xo(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return Sy(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ut(Ue,Ue.current),l)break;return null;case 22:case 23:return i.lanes=0,vy(e,i,s);case 24:Ar(i,ke,e.memoizedState.cache)}return Hi(e,i,s)}function Ry(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Be=!0;else{if(!mf(e,s)&&(i.flags&128)===0)return Be=!1,Ob(e,i,s);Be=(e.flags&131072)!==0}else Be=!1,Kt&&(i.flags&1048576)!==0&&i0(i,Ku,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")wd(l)?(e=La(l,e),i.tag=1,i=by(null,i,l,e,s)):(i.tag=0,i=lf(null,i,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ct){i.tag=11,i=gy(null,i,l,e,s);break t}else if(h===C){i.tag=14,i=yy(null,i,l,e,s);break t}}throw i=ue(l)||l,Error(a(306,i,""))}}return i;case 0:return lf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=La(l,i.pendingProps),by(e,i,l,h,s);case 3:t:{if(zt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var f=i.memoizedState;h=f.element,Ud(e,i),il(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ar(i,ke,l),l!==f.cache&&Dd(i,[ke],s,!0),nl(),l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=wy(e,i,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),i),Qo(h),i=wy(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ei(e.firstChild),dn=i,Kt=!0,Oa=null,mi=!0,s=ay(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Yo(),l===h){i=Hi(e,i,s);break t}Ge(e,i,l,s)}i=i.child}return i;case 26:return cc(e,i),e===null?(s=D1(i.type,null,i.pendingProps,null))?i.memoizedState=s:Kt||(s=i.type,e=i.pendingProps,l=Ac(_t.current).createElement(s),l[_e]=i,l[He]=e,Qe(l,s,e),Ee(l),i.stateNode=l):i.memoizedState=D1(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ji(i),e===null&&Kt&&(l=i.stateNode=I1(i.type,i.pendingProps,_t.current),dn=i,mi=!0,h=ye,Lr(i.type)?(Qf=h,ye=ei(l.firstChild)):ye=h),Ge(e,i,i.pendingProps.children,s),cc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=lw(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,dn=i,ye=ei(l.firstChild),mi=!1,h=!0):h=!1),h||Va(i)),ji(i),h=i.type,f=i.pendingProps,E=e!==null?e.memoizedProps:null,l=f.children,qf(h,f)?l=null:E!==null&&qf(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Fd(e,i,Sb,null,null,s),Al._currentValue=h),cc(e,i),Ge(e,i,l,s),i.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=uw(s,i.pendingProps,mi),s!==null?(i.stateNode=s,dn=i,ye=null,e=!0):e=!1),e||Va(i)),null;case 13:return Ty(e,i,s);case 4:return zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ds(i,null,l,s):Ge(e,i,l,s),i.child;case 11:return gy(e,i,i.type,i.pendingProps,s);case 7:return Ge(e,i,i.pendingProps,s),i.child;case 8:return Ge(e,i,i.pendingProps.children,s),i.child;case 12:return Ge(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ar(i,i.type,l.value),Ge(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ua(i),h=en(h),l=l(h),i.flags|=1,Ge(e,i,l,s),i.child;case 14:return yy(e,i,i.type,i.pendingProps,s);case 15:return xy(e,i,i.type,i.pendingProps,s);case 19:return Sy(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=hc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=zi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return vy(e,i,s);case 24:return Ua(i),l=en(ke),e===null?(h=Od(),h===null&&(h=re,f=Nd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),i.memoizedState={parent:l,cache:h},kd(i),Ar(i,ke,h)):((e.lanes&s)!==0&&(Ud(e,i),il(i,null,null,s),nl()),h=e.memoizedState,f=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ar(i,ke,l)):(l=f.cache,Ar(i,ke,l),l!==h.cache&&Dd(i,[ke],s,!0))),Ge(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Gi(e){e.flags|=4}function Iy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k1(i)){if(i=zn.current,i!==null&&((Lt&4194048)===Lt?gi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==gi))throw tl=Vd,h0;e.flags|=8192}}function dc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?dr():536870912,e.lanes|=i,Vs|=i)}function cl(e,i){if(!Kt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Vb(e,i,s){var l=i.pendingProps;switch(Rd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(i),null;case 1:return fe(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Fi(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Go(i)?Gi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,s0())),fe(i),null;case 26:return s=i.memoizedState,e===null?(Gi(i),s!==null?(fe(i),Iy(i,s)):(fe(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Gi(i),fe(i),Iy(i,s)):(fe(i),i.flags&=-16777217):(e.memoizedProps!==l&&Gi(i),fe(i),i.flags&=-16777217),null;case 27:qn(i),s=_t.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return fe(i),null}e=gt.current,Go(i)?r0(i):(e=I1(h,l,s),i.stateNode=e,Gi(i))}return fe(i),null;case 5:if(qn(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return fe(i),null}if(e=gt.current,Go(i))r0(i);else{switch(h=Ac(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=i,e[He]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(i)}}return fe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Gi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=_t.current,Go(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=dn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||E1(e.nodeValue,s)),e||Va(i)}else e=Ac(e).createTextNode(l),e[_e]=i,i.stateNode=e}return fe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Go(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=i}else Yo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fe(i),h=!1}else h=s0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),dc(i,i.updateQueue),fe(i),null;case 4:return Me(),e===null&&Lf(i.stateNode.containerInfo),fe(i),null;case 10:return Fi(i.type),fe(i),null;case 19:if(lt(Ue),h=i.memoizedState,h===null)return fe(i),null;if(l=(i.flags&128)!==0,f=h.rendering,f===null)if(l)cl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=oc(e),f!==null){for(i.flags|=128,cl(h,!1),e=f.updateQueue,i.updateQueue=e,dc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)n0(s,e),s=s.sibling;return ut(Ue,Ue.current&1|2),i.child}e=e.sibling}h.tail!==null&&fn()>mc&&(i.flags|=128,l=!0,cl(h,!1),i.lanes=4194304)}else{if(!l)if(e=oc(f),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,dc(i,e),cl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Kt)return fe(i),null}else 2*fn()-h.renderingStartTime>mc&&s!==536870912&&(i.flags|=128,l=!0,cl(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(e=h.last,e!==null?e.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=fn(),i.sibling=null,e=Ue.current,ut(Ue,l?e&1|2:e&1),i):(fe(i),null);case 22:case 23:return qi(i),Bd(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(fe(i),i.subtreeFlags&6&&(i.flags|=8192)):fe(i),s=i.updateQueue,s!==null&&dc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&lt(Pa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Fi(ke),fe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function kb(e,i){switch(Rd(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Fi(ke),Me(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return qn(i),null;case 13:if(qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Yo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return lt(Ue),null;case 4:return Me(),null;case 10:return Fi(i.type),null;case 22:case 23:return qi(i),Bd(),e!==null&&lt(Pa),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Fi(ke),null;case 25:return null;default:return null}}function Cy(e,i){switch(Rd(i),i.tag){case 3:Fi(ke),Me();break;case 26:case 27:case 5:qn(i);break;case 4:Me();break;case 13:qi(i);break;case 19:lt(Ue);break;case 10:Fi(i.type);break;case 22:case 23:qi(i),Bd(),e!==null&&lt(Pa);break;case 24:Fi(ke)}}function hl(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,E=s.inst;l=f(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ee(i,i.return,b)}}function Nr(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=i;var D=s,K=b;try{K()}catch(tt){ee(h,D,tt)}}}l=l.next}while(l!==f)}}catch(tt){ee(i,i.return,tt)}}function jy(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{y0(i,s)}catch(l){ee(e,e.return,l)}}}function Dy(e,i,s){s.props=La(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,i,l)}}function dl(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,i,h)}}function yi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,i,h)}else s.current=null}function Ny(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function gf(e,i,s){try{var l=e.stateNode;iw(l,e.type,s,i),l[He]=i}catch(h){ee(e,e.return,h)}}function My(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Lr(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||My(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Lr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Tc));else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(xf(e,i,s),e=e.sibling;e!==null;)xf(e,i,s),e=e.sibling}function fc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Lr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fc(e,i,s),e=e.sibling;e!==null;)fc(e,i,s),e=e.sibling}function Oy(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qe(i,l,s),i[_e]=e,i[He]=s}catch(f){ee(e,e.return,f)}}var Yi=!1,Te=!1,vf=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ub(e,i){if(e=e.containerInfo,Ff=Dc,e=Hg(e),gd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var E=0,b=-1,D=-1,K=0,tt=0,rt=e,H=null;e:for(;;){for(var Y;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==f||l!==0&&rt.nodeType!==3||(D=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(Y=rt.firstChild)!==null;)H=rt,rt=Y;for(;;){if(rt===e)break e;if(H===s&&++K===h&&(b=E),H===f&&++tt===l&&(D=E),(Y=rt.nextSibling)!==null)break;rt=H,H=rt.parentNode}rt=Y}s=b===-1||D===-1?null:{start:b,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kf={focusedElem:e,selectionRange:s},Dc=!1,$e=i;$e!==null;)if(i=$e,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,$e=e;else for(;$e!==null;){switch(i=$e,f=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=i,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Tt=La(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Gf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,$e=e;break}$e=i.return}}function ky(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Mr(e,s),l&4&&hl(5,s);break;case 1:if(Mr(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=La(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&jy(s),l&512&&dl(s,s.return);break;case 3:if(Mr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{y0(e,i)}catch(E){ee(s,s.return,E)}}break;case 27:i===null&&l&4&&Oy(s);case 26:case 5:Mr(e,s),i===null&&l&4&&Ny(s),l&512&&dl(s,s.return);break;case 12:Mr(e,s);break;case 13:Mr(e,s),l&4&&zy(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Hb.bind(null,s),cw(e,s))));break;case 22:if(l=s.memoizedState!==null||Yi,!l){i=i!==null&&i.memoizedState!==null||Te,h=Yi;var f=Te;Yi=l,(Te=i)&&!f?Or(e,s,(s.subtreeFlags&8772)!==0):Mr(e,s),Yi=h,Te=f}break;case 30:break;default:Mr(e,s)}}function Uy(e){var i=e.alternate;i!==null&&(e.alternate=null,Uy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&as(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Qi(e,i,s){for(s=s.child;s!==null;)Py(e,i,s),s=s.sibling}function Py(e,i,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ur,s)}catch{}switch(s.tag){case 26:Te||yi(s,i),Qi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||yi(s,i);var l=ce,h=mn;Lr(s.type)&&(ce=s.stateNode,mn=!1),Qi(e,i,s),El(s.stateNode),ce=l,mn=h;break;case 5:Te||yi(s,i);case 6:if(l=ce,h=mn,ce=null,Qi(e,i,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ee(s,i,f)}else try{ce.removeChild(s.stateNode)}catch(f){ee(s,i,f)}break;case 18:ce!==null&&(mn?(e=ce,S1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Cl(e)):S1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Qi(e,i,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Te||Nr(2,s,i),Te||Nr(4,s,i),Qi(e,i,s);break;case 1:Te||(yi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Dy(s,i,l)),Qi(e,i,s);break;case 21:Qi(e,i,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Qi(e,i,s),Te=l;break;default:Qi(e,i,s)}}function zy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(s){ee(i,i.return,s)}}function Pb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Vy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Vy),i;default:throw Error(a(435,e.tag))}}function _f(e,i){var s=Pb(e);i.forEach(function(l){var h=Gb.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function wn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,E=i,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(Lr(b.type)){ce=b.stateNode,mn=!1;break t}break;case 5:ce=b.stateNode,mn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,mn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));Py(f,E,h),ce=null,mn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ly(i,e),i=i.sibling}var ti=null;function Ly(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(i,e),Tn(e),l&4&&(Nr(3,e,e.return),hl(3,e),Nr(5,e,e.return));break;case 1:wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[mr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Qe(f,l,s),f[_e]=e,Ee(f),l=f;break t;case"link":var E=O1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(f=E[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;case"meta":if(E=O1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(f=E[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,Ee(f),l=f}e.stateNode=l}else V1(h,e.type,e.stateNode);else e.stateNode=M1(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?V1(h,e.type,e.stateNode):M1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&gf(e,e.memoizedProps,s.memoizedProps)}break;case 27:wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),s!==null&&l&4&&gf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wn(i,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Y){ee(e,e.return,Y)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,gf(e,h,s!==null?s.memoizedProps:h)),l&1024&&(vf=!0);break;case 6:if(wn(i,e),Tn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Y){ee(e,e.return,Y)}}break;case 3:if(Ic=null,h=ti,ti=Sc(i.containerInfo),wn(i,e),ti=h,Tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Cl(i.containerInfo)}catch(Y){ee(e,e.return,Y)}vf&&(vf=!1,By(e));break;case 4:l=ti,ti=Sc(e.stateNode.containerInfo),wn(i,e),Tn(e),ti=l;break;case 12:wn(i,e),Tn(e);break;case 13:wn(i,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Sf=fn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_f(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,K=Yi,tt=Te;if(Yi=K||h,Te=tt||D,wn(i,e),Te=tt,Yi=K,Tn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||D||Yi||Te||Ba(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){D=s=i;try{if(f=D.stateNode,h)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=D.stateNode;var rt=D.memoizedProps.style,H=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Y){ee(D,D.return,Y)}}}else if(i.tag===6){if(s===null){D=i;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(Y){ee(D,D.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,_f(e,s))));break;case 19:wn(i,e),Tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_f(e,l)));break;case 30:break;case 21:break;default:wn(i,e),Tn(e)}}function Tn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(My(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=yf(e);fc(e,f,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var b=yf(e);fc(e,b,E);break;case 3:case 4:var D=s.stateNode.containerInfo,K=yf(e);xf(e,K,D);break;default:throw Error(a(161))}}catch(tt){ee(e,e.return,tt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function By(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;By(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Mr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ky(e,i.alternate,i),i=i.sibling}function Ba(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Nr(4,i,i.return),Ba(i);break;case 1:yi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Dy(i,i.return,s),Ba(i);break;case 27:El(i.stateNode);case 26:case 5:yi(i,i.return),Ba(i);break;case 22:i.memoizedState===null&&Ba(i);break;case 30:Ba(i);break;default:Ba(i)}e=e.sibling}}function Or(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,f=i,E=f.flags;switch(f.tag){case 0:case 11:case 15:Or(h,f,s),hl(4,f);break;case 1:if(Or(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(K){ee(l,l.return,K)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)g0(D[h],b)}catch(K){ee(l,l.return,K)}}s&&E&64&&jy(f),dl(f,f.return);break;case 27:Oy(f);case 26:case 5:Or(h,f,s),s&&l===null&&E&4&&Ny(f),dl(f,f.return);break;case 12:Or(h,f,s);break;case 13:Or(h,f,s),s&&E&4&&zy(h,f);break;case 22:f.memoizedState===null&&Or(h,f,s),dl(f,f.return);break;case 30:break;default:Or(h,f,s)}i=i.sibling}}function Ef(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Wo(s))}function bf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Wo(e))}function xi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$y(e,i,s,l),i=i.sibling}function $y(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:xi(e,i,s,l),h&2048&&hl(9,i);break;case 1:xi(e,i,s,l);break;case 3:xi(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Wo(e)));break;case 12:if(h&2048){xi(e,i,s,l),e=i.stateNode;try{var f=i.memoizedProps,E=f.id,b=f.onPostCommit;typeof b=="function"&&b(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(i,i.return,D)}}else xi(e,i,s,l);break;case 13:xi(e,i,s,l);break;case 23:break;case 22:f=i.stateNode,E=i.alternate,i.memoizedState!==null?f._visibility&2?xi(e,i,s,l):fl(e,i):f._visibility&2?xi(e,i,s,l):(f._visibility|=2,Ns(e,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&Ef(E,i);break;case 24:xi(e,i,s,l),h&2048&&bf(i.alternate,i);break;default:xi(e,i,s,l)}}function Ns(e,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=e,E=i,b=s,D=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Ns(f,E,b,D,h),hl(8,E);break;case 23:break;case 22:var tt=E.stateNode;E.memoizedState!==null?tt._visibility&2?Ns(f,E,b,D,h):fl(f,E):(tt._visibility|=2,Ns(f,E,b,D,h)),h&&K&2048&&Ef(E.alternate,E);break;case 24:Ns(f,E,b,D,h),h&&K&2048&&bf(E.alternate,E);break;default:Ns(f,E,b,D,h)}i=i.sibling}}function fl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:fl(s,l),h&2048&&Ef(l.alternate,l);break;case 24:fl(s,l),h&2048&&bf(l.alternate,l);break;default:fl(s,l)}i=i.sibling}}var pl=8192;function Ms(e){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)Fy(e),e=e.sibling}function Fy(e){switch(e.tag){case 26:Ms(e),e.flags&pl&&e.memoizedState!==null&&ww(ti,e.memoizedState,e.memoizedProps);break;case 5:Ms(e);break;case 3:case 4:var i=ti;ti=Sc(e.stateNode.containerInfo),Ms(e),ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pl,pl=16777216,Ms(e),pl=i):Ms(e));break;default:Ms(e)}}function Ky(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ml(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Hy(l,e)}Ky(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qy(e),e=e.sibling}function qy(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&Nr(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,pc(e)):ml(e);break;default:ml(e)}}function pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];$e=l,Hy(l,e)}Ky(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Nr(8,i,i.return),pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,pc(i));break;default:pc(i)}e=e.sibling}}function Hy(e,i){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Nr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,$e=l;else t:for(s=e;$e!==null;){l=$e;var h=l.sibling,f=l.return;if(Uy(l),l===s){$e=null;break t}if(h!==null){h.return=f,$e=h;break t}$e=f}}}var zb={getCacheForType:function(e){var i=en(ke),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Lb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Vt=null,Lt=0,Xt=0,An=null,Vr=!1,Os=!1,wf=!1,Xi=0,xe=0,kr=0,$a=0,Tf=0,Ln=0,Vs=0,gl=null,gn=null,Af=!1,Sf=0,mc=1/0,gc=null,Ur=null,Ye=0,Pr=null,ks=null,Us=0,Rf=0,If=null,Gy=null,yl=0,Cf=null;function Sn(){if((Qt&2)!==0&&Lt!==0)return Lt&-Lt;if(J.T!==null){var e=Ts;return e!==0?e:kf()}return Ni()}function Yy(){Ln===0&&(Ln=(Lt&536870912)===0||Kt?Ro():536870912);var e=zn.current;return e!==null&&(e.flags|=32),Ln}function Rn(e,i,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ps(e,0),zr(e,Lt,Ln,!1)),ve(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&($a|=s),xe===4&&zr(e,Lt,Ln,!1)),vi(e))}function Qy(e,i,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||hr(e,i),h=l?Fb(e,i):Nf(e,i,!0),f=l;do{if(h===0){Os&&!l&&zr(e,i,0,!1);break}else{if(s=e.current.alternate,f&&!Bb(s)){h=Nf(e,i,!1),f=!1;continue}if(h===2){if(f=i,e.errorRecoveryDisabledLanes&f)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var b=e;h=gl;var D=b.current.memoizedState.isDehydrated;if(D&&(Ps(b,E).flags|=256),E=Nf(b,E,!1),E!==2){if(wf&&!D){b.errorRecoveryDisabledLanes|=f,$a|=f,h=4;break t}f=gn,gn=h,f!==null&&(gn===null?gn=f:gn.push.apply(gn,f))}h=E}if(f=!1,h!==2)continue}}if(h===1){Ps(e,0),zr(e,i,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:zr(l,i,Ln,!Vr);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Sf+300-fn(),10<h)){if(zr(l,i,Ln,!Vr),Dn(l,0,!0)!==0)break t;l.timeoutHandle=T1(Xy.bind(null,l,s,gn,gc,Af,i,Ln,$a,Vs,Vr,f,2,-0,0),h);break t}Xy(l,s,gn,gc,Af,i,Ln,$a,Vs,Vr,f,0,-0,0)}}break}while(!0);vi(e)}function Xy(e,i,s,l,h,f,E,b,D,K,tt,rt,H,Y){if(e.timeoutHandle=-1,rt=i.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:bw},Fy(i),rt=Tw(),rt!==null)){e.cancelPendingCommit=rt(i1.bind(null,e,i,f,s,l,h,E,b,D,tt,1,H,Y)),zr(e,f,E,!K);return}i1(e,i,f,s,l,h,E,b,D)}function Bb(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(e,i,s,l){i&=~Tf,i&=~$a,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var f=31-ln(h),E=1<<f;l[f]=-1,h&=~E}s!==0&&fr(e,s,i)}function yc(){return(Qt&6)===0?(xl(0),!1):!0}function jf(){if(Vt!==null){if(Xt===0)var e=Vt.return;else e=Vt,$i=ka=null,Hd(e),js=null,ll=0,e=Vt;for(;e!==null;)Cy(e.alternate,e),e=e.return;Vt=null}}function Ps(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,aw(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),jf(),re=e,Vt=s=zi(e.current,null),Lt=i,Xt=0,An=null,Vr=!1,Os=hr(e,i),wf=!1,Vs=Ln=Tf=$a=kr=xe=0,gn=gl=null,Af=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-ln(l),f=1<<h;i|=e[h],l&=~f}return Xi=i,zu(),s}function Wy(e,i){Mt=null,J.H=rc,i===Jo||i===Yu?(i=p0(),Xt=3):i===h0?(i=p0(),Xt=4):Xt=i===my?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,An=i,Vt===null&&(xe=1,uc(e,Vn(i,e.current)))}function Zy(){var e=J.H;return J.H=rc,e===null?rc:e}function Jy(){var e=J.A;return J.A=zb,e}function Df(){xe=4,Vr||(Lt&4194048)!==Lt&&zn.current!==null||(Os=!0),(kr&134217727)===0&&($a&134217727)===0||re===null||zr(re,Lt,Ln,!1)}function Nf(e,i,s){var l=Qt;Qt|=2;var h=Zy(),f=Jy();(re!==e||Lt!==i)&&(gc=null,Ps(e,i)),i=!1;var E=xe;t:do try{if(Xt!==0&&Vt!==null){var b=Vt,D=An;switch(Xt){case 8:jf(),E=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(i=!0);var K=Xt;if(Xt=0,An=null,zs(e,b,D,K),s&&Os){E=0;break t}break;default:K=Xt,Xt=0,An=null,zs(e,b,D,K)}}$b(),E=xe;break}catch(tt){Wy(e,tt)}while(!0);return i&&e.shellSuspendCounter++,$i=ka=null,Qt=l,J.H=h,J.A=f,Vt===null&&(re=null,Lt=0,zu()),E}function $b(){for(;Vt!==null;)t1(Vt)}function Fb(e,i){var s=Qt;Qt|=2;var l=Zy(),h=Jy();re!==e||Lt!==i?(gc=null,mc=fn()+500,Ps(e,i)):Os=hr(e,i);t:do try{if(Xt!==0&&Vt!==null){i=Vt;var f=An;e:switch(Xt){case 1:Xt=0,An=null,zs(e,i,f,1);break;case 2:case 9:if(d0(f)){Xt=0,An=null,e1(i);break}i=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),vi(e)},f.then(i,i);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:d0(f)?(Xt=0,An=null,e1(i)):(Xt=0,An=null,zs(e,i,f,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||k1(E)){Xt=0,An=null;var D=b.sibling;if(D!==null)Vt=D;else{var K=b.return;K!==null?(Vt=K,xc(K)):Vt=null}break e}}Xt=0,An=null,zs(e,i,f,5);break;case 6:Xt=0,An=null,zs(e,i,f,6);break;case 8:jf(),xe=6;break t;default:throw Error(a(462))}}Kb();break}catch(tt){Wy(e,tt)}while(!0);return $i=ka=null,J.H=l,J.A=h,Qt=s,Vt!==null?0:(re=null,Lt=0,zu(),xe)}function Kb(){for(;Vt!==null&&!ad();)t1(Vt)}function t1(e){var i=Ry(e.alternate,e,Xi);e.memoizedProps=e.pendingProps,i===null?xc(e):Vt=i}function e1(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ey(s,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=Ey(s,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:Hd(i);default:Cy(s,i),i=Vt=n0(i,Xi),i=Ry(s,i,Xi)}e.memoizedProps=e.pendingProps,i===null?xc(e):Vt=i}function zs(e,i,s,l){$i=ka=null,Hd(i),js=null,ll=0;var h=i.return;try{if(Mb(e,h,i,s,Lt)){xe=1,uc(e,Vn(s,e.current)),Vt=null;return}}catch(f){if(h!==null)throw Vt=h,f;xe=1,uc(e,Vn(s,e.current)),Vt=null;return}i.flags&32768?(Kt||l===1?e=!0:Os||(Lt&536870912)!==0?e=!1:(Vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),n1(i,e)):xc(i)}function xc(e){var i=e;do{if((i.flags&32768)!==0){n1(i,Vr);return}e=i.return;var s=Vb(i.alternate,i,Xi);if(s!==null){Vt=s;return}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=e}while(i!==null);xe===0&&(xe=5)}function n1(e,i){do{var s=kb(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function i1(e,i,s,l,h,f,E,b,D){e.cancelPendingCommit=null;do vc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(f=i.lanes|i.childLanes,f|=Ed,bu(e,s,f,E,b,D),e===re&&(Vt=re=null,Lt=0),ks=i,Pr=e,Us=s,Rf=f,If=h,Gy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yb(Di,function(){return l1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,h=ht.p,ht.p=2,E=Qt,Qt|=4;try{Ub(e,i,s)}finally{Qt=E,ht.p=h,J.T=l}}Ye=1,r1(),a1(),s1()}}function r1(){if(Ye===1){Ye=0;var e=Pr,i=ks,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{Ly(i,e);var f=Kf,E=Hg(e.containerInfo),b=f.focusedElem,D=f.selectionRange;if(E!==b&&b&&b.ownerDocument&&qg(b.ownerDocument.documentElement,b)){if(D!==null&&gd(b)){var K=D.start,tt=D.end;if(tt===void 0&&(tt=K),"selectionStart"in b)b.selectionStart=K,b.selectionEnd=Math.min(tt,b.value.length);else{var rt=b.ownerDocument||document,H=rt&&rt.defaultView||window;if(H.getSelection){var Y=H.getSelection(),Tt=b.textContent.length,Et=Math.min(D.start,Tt),te=D.end===void 0?Et:Math.min(D.end,Tt);!Y.extend&&Et>te&&(E=te,te=Et,Et=E);var L=Kg(b,Et),U=Kg(b,te);if(L&&U&&(Y.rangeCount!==1||Y.anchorNode!==L.node||Y.anchorOffset!==L.offset||Y.focusNode!==U.node||Y.focusOffset!==U.offset)){var $=rt.createRange();$.setStart(L.node,L.offset),Y.removeAllRanges(),Et>te?(Y.addRange($),Y.extend(U.node,U.offset)):($.setEnd(U.node,U.offset),Y.addRange($))}}}}for(rt=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&rt.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Dc=!!Ff,Kf=Ff=null}finally{Qt=h,ht.p=l,J.T=s}}e.current=i,Ye=2}}function a1(){if(Ye===2){Ye=0;var e=Pr,i=ks,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{ky(e,i.alternate,i)}finally{Qt=h,ht.p=l,J.T=s}}Ye=3}}function s1(){if(Ye===4||Ye===3){Ye=0,Ao();var e=Pr,i=ks,s=Us,l=Gy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ye=5:(Ye=0,ks=Pr=null,o1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ur=null),Co(s),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ur,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=J.T,h=ht.p,ht.p=2,J.T=null;try{for(var f=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];f(b.value,{componentStack:b.stack})}}finally{J.T=i,ht.p=h}}(Us&3)!==0&&vc(),vi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Cf?yl++:(yl=0,Cf=e):yl=0,xl(0)}}function o1(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Wo(i)))}function vc(e){return r1(),a1(),s1(),l1()}function l1(){if(Ye!==5)return!1;var e=Pr,i=Rf;Rf=0;var s=Co(Us),l=J.T,h=ht.p;try{ht.p=32>s?32:s,J.T=null,s=If,If=null;var f=Pr,E=Us;if(Ye=0,ks=Pr=null,Us=0,(Qt&6)!==0)throw Error(a(331));var b=Qt;if(Qt|=4,qy(f.current),$y(f,f.current,E,s),Qt=b,xl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ur,f)}catch{}return!0}finally{ht.p=h,J.T=l,o1(e,i)}}function u1(e,i,s){i=Vn(s,i),i=of(e.stateNode,i,2),e=Ir(e,i,2),e!==null&&(ve(e,2),vi(e))}function ee(e,i,s){if(e.tag===3)u1(e,e,s);else for(;i!==null;){if(i.tag===3){u1(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){e=Vn(s,e),s=fy(2),l=Ir(i,s,2),l!==null&&(py(s,l,i,e),ve(l,2),vi(l));break}}i=i.return}}function Mf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Lb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(wf=!0,h.add(s),e=qb.bind(null,e,i,s),i.then(e,e))}function qb(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(Lt&s)===s&&(xe===4||xe===3&&(Lt&62914560)===Lt&&300>fn()-Sf?(Qt&2)===0&&Ps(e,0):Tf|=s,Vs===Lt&&(Vs=0)),vi(e)}function c1(e,i){i===0&&(i=dr()),e=_s(e,i),e!==null&&(ve(e,i),vi(e))}function Hb(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),c1(e,s)}function Gb(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),c1(e,s)}function Yb(e,i){return oa(e,i)}var _c=null,Ls=null,Of=!1,Ec=!1,Vf=!1,Fa=0;function vi(e){e!==Ls&&e.next===null&&(Ls===null?_c=Ls=e:Ls=Ls.next=e),Ec=!0,Of||(Of=!0,Xb())}function xl(e,i){if(!Vf&&Ec){Vf=!0;do for(var s=!1,l=_c;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var E=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-ln(42|e)+1)-1,f&=h&~(E&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,p1(l,f))}else f=Lt,f=Dn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||hr(l,f)||(s=!0,p1(l,f));l=l.next}while(s);Vf=!1}}function Qb(){h1()}function h1(){Ec=Of=!1;var e=0;Fa!==0&&(rw()&&(e=Fa),Fa=0);for(var i=fn(),s=null,l=_c;l!==null;){var h=l.next,f=d1(l,i);f===0?(l.next=null,s===null?_c=h:s.next=h,h===null&&(Ls=s)):(s=l,(e!==0||(f&3)!==0)&&(Ec=!0)),l=h}xl(e)}function d1(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var E=31-ln(f),b=1<<E,D=h[E];D===-1?((b&s)===0||(b&l)!==0)&&(h[E]=is(b,i)):D<=i&&(e.expiredLanes|=b),f&=~b}if(i=re,s=Lt,s=Dn(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ns(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||hr(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ns(l),Co(s)){case 2:case 8:s=ze;break;case 32:s=Di;break;case 268435456:s=So;break;default:s=Di}return l=f1.bind(null,e),s=oa(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ns(l),e.callbackPriority=2,e.callbackNode=null,2}function f1(e,i){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var l=Lt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qy(e,l,i),d1(e,fn()),e.callbackNode!=null&&e.callbackNode===s?f1.bind(null,e):null)}function p1(e,i){if(vc())return null;Qy(e,i,!0)}function Xb(){sw(function(){(Qt&6)!==0?oa(Oe,Qb):h1()})}function kf(){return Fa===0&&(Fa=Ro()),Fa}function m1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function g1(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Wb(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var f=m1((h[He]||null).action),E=l.submitter;E&&(i=(i=E[He]||null)?m1(i.formAction):E.getAttribute("formAction"),i!==null&&(f=i,E=null));var b=new ba("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var D=E?g1(h,E):new FormData(h);ef(s,{pending:!0,data:D,method:h.method,action:f},null,D)}}else typeof f=="function"&&(b.preventDefault(),D=E?g1(h,E):new FormData(h),ef(s,{pending:!0,data:D,method:h.method,action:f},f,D))},currentTarget:h}]})}}for(var Uf=0;Uf<_d.length;Uf++){var Pf=_d[Uf],Zb=Pf.toLowerCase(),Jb=Pf[0].toUpperCase()+Pf.slice(1);Jn(Zb,"on"+Jb)}Jn(Qg,"onAnimationEnd"),Jn(Xg,"onAnimationIteration"),Jn(Wg,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(gb,"onTransitionRun"),Jn(yb,"onTransitionStart"),Jn(xb,"onTransitionCancel"),Jn(Zg,"onTransitionEnd"),hi("onMouseEnter",["mouseout","mouseover"]),hi("onMouseLeave",["mouseout","mouseover"]),hi("onPointerEnter",["pointerout","pointerover"]),hi("onPointerLeave",["pointerout","pointerover"]),ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function y1(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(i)for(var E=l.length-1;0<=E;E--){var b=l[E],D=b.instance,K=b.currentTarget;if(b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=K;try{f(h)}catch(tt){lc(tt)}h.currentTarget=null,f=D}else for(E=0;E<l.length;E++){if(b=l[E],D=b.instance,K=b.currentTarget,b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=K;try{f(h)}catch(tt){lc(tt)}h.currentTarget=null,f=D}}}}function kt(e,i){var s=i[ua];s===void 0&&(s=i[ua]=new Set);var l=e+"__bubble";s.has(l)||(x1(i,e,2,!1),s.add(l))}function zf(e,i,s){var l=0;i&&(l|=4),x1(s,e,l,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[bc]){e[bc]=!0,wu.forEach(function(s){s!=="selectionchange"&&(tw.has(s)||zf(s,!1,e),zf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[bc]||(i[bc]=!0,zf("selectionchange",!1,i))}}function x1(e,i,s,l){switch($1(i)){case 2:var h=Rw;break;case 8:h=Iw;break;default:h=tp}s=h.bind(null,i,s,e),h=void 0,!Ui||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Bf(e,i,s,l,h){var f=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=li(b),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=f=E;continue t}b=b.parentNode}}l=l.return}va(function(){var K=f,tt=ko(s),rt=[];t:{var H=Jg.get(e);if(H!==void 0){var Y=ba,Tt=e;switch(e){case"keypress":if(_a(s)===0)break t;case"keydown":case"keyup":Y=gs;break;case"focusin":Tt="focus",Y=fs;break;case"focusout":Tt="blur",Y=fs;break;case"beforeblur":case"afterblur":Y=fs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=ju;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Tr;break;case Qg:case Xg:case Wg:Y=Po;break;case Zg:Y=y;break;case"scroll":case"scrollend":Y=Ta;break;case"wheel":Y=T;break;case"copy":case"cut":case"paste":Y=Nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Bo;break;case"toggle":case"beforetoggle":Y=Q}var Et=(i&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?H!==null?H+"Capture":null:H;Et=[];for(var U=K,$;U!==null;){var nt=U;if($=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||$===null||L===null||(nt=br(U,L),nt!=null&&Et.push(_l(U,nt,$))),te)break;U=U.return}0<Et.length&&(H=new Y(H,Tt,null,s,tt),rt.push({event:H,listeners:Et}))}}if((i&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&s!==Vo&&(Tt=s.relatedTarget||s.fromElement)&&(li(Tt)||Tt[Mi]))break t;if((Y||H)&&(H=tt.window===tt?tt:(H=tt.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(Tt=s.relatedTarget||s.toElement,Y=K,Tt=Tt?li(Tt):null,Tt!==null&&(te=u(Tt),Et=Tt.tag,Tt!==te||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(Y=null,Tt=K),Y!==Tt)){if(Et=Ra,nt="onMouseLeave",L="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Bo,nt="onPointerLeave",L="onPointerEnter",U="pointer"),te=Y==null?H:gr(Y),$=Tt==null?H:gr(Tt),H=new Et(nt,U+"leave",Y,s,tt),H.target=te,H.relatedTarget=$,nt=null,li(tt)===K&&(Et=new Et(L,U+"enter",Tt,s,tt),Et.target=$,Et.relatedTarget=te,nt=Et),te=nt,Y&&Tt)e:{for(Et=Y,L=Tt,U=0,$=Et;$;$=Bs($))U++;for($=0,nt=L;nt;nt=Bs(nt))$++;for(;0<U-$;)Et=Bs(Et),U--;for(;0<$-U;)L=Bs(L),$--;for(;U--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=Bs(Et),L=Bs(L)}Et=null}else Et=null;Y!==null&&v1(rt,H,Y,Et,!1),Tt!==null&&te!==null&&v1(rt,te,Tt,Et,!0)}}t:{if(H=K?gr(K):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var mt=Pg;else if(kg(H))if(zg)mt=fb;else{mt=hb;var Ot=cb}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?K&&cs(K.elementType)&&(mt=Pg):mt=db;if(mt&&(mt=mt(e,K))){Ug(rt,mt,s,tt);break t}Ot&&Ot(e,H,K),e==="focusout"&&K&&H.type==="number"&&K.memoizedProps.value!=null&&No(H,"number",H.value)}switch(Ot=K?gr(K):window,e){case"focusin":(kg(Ot)||Ot.contentEditable==="true")&&(ys=Ot,yd=K,Ho=null);break;case"focusout":Ho=yd=ys=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,Gg(rt,s,tt);break;case"selectionchange":if(mb)break;case"keydown":case"keyup":Gg(rt,s,tt)}var xt;if(St)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Zn?Xn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(be&&s.locale!=="ko"&&(Zn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Zn&&(xt=Cu()):(On=tt,ie="value"in On?On.value:On.textContent,Zn=!0)),Ot=wc(K,bt),0<Ot.length&&(bt=new Lo(bt,e,null,s,tt),rt.push({event:bt,listeners:Ot}),xt?bt.data=xt:(xt=Wn(s),xt!==null&&(bt.data=xt)))),(xt=Yt?$o(e,s):ob(e,s))&&(bt=wc(K,"onBeforeInput"),0<bt.length&&(Ot=new Lo("onBeforeInput","beforeinput",null,s,tt),rt.push({event:Ot,listeners:bt}),Ot.data=xt)),Wb(rt,e,K,s,tt)}y1(rt,i)})}function _l(e,i,s){return{instance:e,listener:i,currentTarget:s}}function wc(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=br(e,s),h!=null&&l.unshift(_l(e,h,f)),h=br(e,i),h!=null&&l.push(_l(e,h,f))),e.tag===3)return l;e=e.return}return[]}function Bs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v1(e,i,s,l,h){for(var f=i._reactName,E=[];s!==null&&s!==l;){var b=s,D=b.alternate,K=b.stateNode;if(b=b.tag,D!==null&&D===l)break;b!==5&&b!==26&&b!==27||K===null||(D=K,h?(K=br(s,f),K!=null&&E.unshift(_l(s,K,D))):h||(K=br(s,f),K!=null&&E.push(_l(s,K,D)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var ew=/\r\n?/g,nw=/\u0000|\uFFFD/g;function _1(e){return(typeof e=="string"?e:""+e).replace(ew,`
`).replace(nw,"")}function E1(e,i){return i=_1(i),_1(e)===i}function Tc(){}function Jt(e,i,s,l,h,f){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(e,""+l);break;case"className":pa(e,"class",l);break;case"tabIndex":pa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pa(e,s,l);break;case"style":Oo(e,l,f);break;case"data":if(i!=="object"){pa(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(i!=="input"&&Jt(e,i,"name",h.name,h,null),Jt(e,i,"formEncType",h.formEncType,h,null),Jt(e,i,"formMethod",h.formMethod,h,null),Jt(e,i,"formTarget",h.formTarget,h,null)):(Jt(e,i,"encType",h.encType,h,null),Jt(e,i,"method",h.method,h,null),Jt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Tc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),fa(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Su.get(s)||s,fa(e,s,l))}}function $f(e,i,s,l,h,f){switch(s){case"style":Oo(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),f=e[He]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(i,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):fa(e,s,l)}}}function Qe(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var E=s[f];if(E!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,f,E,s,null)}}h&&Jt(e,i,"srcSet",s.srcSet,s,null),l&&Jt(e,i,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=f=E=h=null,D=null,K=null;for(l in s)if(s.hasOwnProperty(l)){var tt=s[l];if(tt!=null)switch(l){case"name":h=tt;break;case"type":E=tt;break;case"checked":D=tt;break;case"defaultChecked":K=tt;break;case"value":f=tt;break;case"defaultValue":b=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:Jt(e,i,l,tt,s,null)}}Do(e,f,b,D,K,E,h,!1),vr(e);return;case"select":kt("invalid",e),l=E=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Jt(e,i,h,b,s,null)}i=f,s=E,e.multiple=!!l,i!=null?_r(e,!!l,i,!1):s!=null&&_r(e,!!l,s,!0);return;case"textarea":kt("invalid",e),f=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Jt(e,i,E,b,s,null)}Au(e,l,h,f),vr(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,i,D,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<vl.length;l++)kt(vl[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(l=s[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(e,i,K,l,s,null)}return;default:if(cs(i)){for(tt in s)s.hasOwnProperty(tt)&&(l=s[tt],l!==void 0&&$f(e,i,tt,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Jt(e,i,b,l,s,null))}function iw(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,E=null,b=null,D=null,K=null,tt=null;for(Y in s){var rt=s[Y];if(s.hasOwnProperty(Y)&&rt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=rt;default:l.hasOwnProperty(Y)||Jt(e,i,Y,null,l,rt)}}for(var H in l){var Y=l[H];if(rt=s[H],l.hasOwnProperty(H)&&(Y!=null||rt!=null))switch(H){case"type":f=Y;break;case"name":h=Y;break;case"checked":K=Y;break;case"defaultChecked":tt=Y;break;case"value":E=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,i));break;default:Y!==rt&&Jt(e,i,H,Y,l,rt)}}jo(e,E,b,D,K,tt,f,h);return;case"select":Y=E=b=H=null;for(f in s)if(D=s[f],s.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":Y=D;default:l.hasOwnProperty(f)||Jt(e,i,f,null,l,D)}for(h in l)if(f=l[h],D=s[h],l.hasOwnProperty(h)&&(f!=null||D!=null))switch(h){case"value":H=f;break;case"defaultValue":b=f;break;case"multiple":E=f;default:f!==D&&Jt(e,i,h,f,l,D)}i=b,s=E,l=Y,H!=null?_r(e,!!s,H,!1):!!l!=!!s&&(i!=null?_r(e,!!s,i,!0):_r(e,!!s,s?[]:"",!1));return;case"textarea":Y=H=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(e,i,b,null,l,h)}for(E in l)if(h=l[E],f=s[E],l.hasOwnProperty(E)&&(h!=null||f!=null))switch(E){case"value":H=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Jt(e,i,E,h,l,f)}Tu(e,H,Y);return;case"option":for(var Tt in s)if(H=s[Tt],s.hasOwnProperty(Tt)&&H!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jt(e,i,Tt,null,l,H)}for(D in l)if(H=l[D],Y=s[D],l.hasOwnProperty(D)&&H!==Y&&(H!=null||Y!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(e,i,D,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et)&&Jt(e,i,Et,null,l,H);for(K in l)if(H=l[K],Y=s[K],l.hasOwnProperty(K)&&H!==Y&&(H!=null||Y!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,i));break;default:Jt(e,i,K,H,l,Y)}return;default:if(cs(i)){for(var te in s)H=s[te],s.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&$f(e,i,te,void 0,l,H);for(tt in l)H=l[tt],Y=s[tt],!l.hasOwnProperty(tt)||H===Y||H===void 0&&Y===void 0||$f(e,i,tt,H,l,Y);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Jt(e,i,L,null,l,H);for(rt in l)H=l[rt],Y=s[rt],!l.hasOwnProperty(rt)||H===Y||H==null&&Y==null||Jt(e,i,rt,H,l,Y)}var Ff=null,Kf=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function b1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w1(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function qf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hf=null;function rw(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var T1=typeof setTimeout=="function"?setTimeout:void 0,aw=typeof clearTimeout=="function"?clearTimeout:void 0,A1=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof A1<"u"?function(e){return A1.resolve(null).then(e).catch(ow)}:T1;function ow(e){setTimeout(function(){throw e})}function Lr(e){return e==="head"}function S1(e,i){var s=i,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&El(E.documentElement),s&2&&El(E.body),s&4)for(s=E.head,El(s),E=s.firstChild;E;){var b=E.nextSibling,D=E.nodeName;E[mr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(f),Cl(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Cl(i)}function Gf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Gf(s),as(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function lw(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[mr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function uw(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ei(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cw(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ei(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Qf=null;function R1(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function I1(e,i,s){switch(i=Ac(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function El(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);as(e)}var Bn=new Map,C1=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wi=ht.d;ht.d={f:hw,r:dw,D:fw,C:pw,L:mw,m:gw,X:xw,S:yw,M:vw};function hw(){var e=Wi.f(),i=yc();return e||i}function dw(e){var i=ui(e);i!==null&&i.tag===5&&i.type==="form"?Q0(i):Wi.r(e)}var $s=typeof document>"u"?null:document;function j1(e,i,s){var l=$s;if(l&&typeof i=="string"&&i){var h=Le(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),C1.has(h)||(C1.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function fw(e){Wi.D(e),j1("dns-prefetch",e,null)}function pw(e,i){Wi.C(e,i),j1("preconnect",e,i)}function mw(e,i,s){Wi.L(e,i,s);var l=$s;if(l&&e&&i){var h='link[rel="preload"][as="'+Le(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Le(s.imageSizes)+'"]')):h+='[href="'+Le(e)+'"]';var f=h;switch(i){case"style":f=Fs(e);break;case"script":f=Ks(e)}Bn.has(f)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Bn.set(f,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(bl(f))||i==="script"&&l.querySelector(wl(f))||(i=l.createElement("link"),Qe(i,"link",e),Ee(i),l.head.appendChild(i)))}}function gw(e,i){Wi.m(e,i);var s=$s;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Le(l)+'"][href="'+Le(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ks(e)}if(!Bn.has(f)&&(e=v({rel:"modulepreload",href:e},i),Bn.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(wl(f)))return}l=s.createElement("link"),Qe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function yw(e,i,s){Wi.S(e,i,s);var l=$s;if(l&&e){var h=yr(l).hoistableStyles,f=Fs(e);i=i||"default";var E=h.get(f);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(bl(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Bn.get(f))&&Xf(e,s);var D=E=l.createElement("link");Ee(D),Qe(D,"link",e),D._p=new Promise(function(K,tt){D.onload=K,D.onerror=tt}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Rc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(f,E)}}}function xw(e,i){Wi.X(e,i);var s=$s;if(s&&e){var l=yr(s).hoistableScripts,h=Ks(e),f=l.get(h);f||(f=s.querySelector(wl(h)),f||(e=v({src:e,async:!0},i),(i=Bn.get(h))&&Wf(e,i),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function vw(e,i){Wi.M(e,i);var s=$s;if(s&&e){var l=yr(s).hoistableScripts,h=Ks(e),f=l.get(h);f||(f=s.querySelector(wl(h)),f||(e=v({src:e,async:!0,type:"module"},i),(i=Bn.get(h))&&Wf(e,i),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function D1(e,i,s,l){var h=(h=_t.current)?Sc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Fs(s.href),s=yr(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Fs(s.href);var f=yr(h).hoistableStyles,E=f.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,E),(f=h.querySelector(bl(e)))&&!f._p&&(E.instance=f,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),f||_w(h,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ks(s),s=yr(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Fs(e){return'href="'+Le(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function N1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function _w(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qe(i,"link",s),Ee(i),e.head.appendChild(i))}function Ks(e){return'[src="'+Le(e)+'"]'}function wl(e){return"script[async]"+e}function M1(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Le(s.href)+'"]');if(l)return i.instance=l,Ee(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Qe(l,"style",h),Rc(l,s.precedence,e),i.instance=l;case"stylesheet":h=Fs(s.href);var f=e.querySelector(bl(h));if(f)return i.state.loading|=4,i.instance=f,Ee(f),f;l=N1(s),(h=Bn.get(h))&&Xf(l,h),f=(e.ownerDocument||e).createElement("link"),Ee(f);var E=f;return E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",l),i.state.loading|=4,Rc(f,s.precedence,e),i.instance=f;case"script":return f=Ks(s.src),(h=e.querySelector(wl(f)))?(i.instance=h,Ee(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),Wf(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Rc(l,s.precedence,e));return i.instance}function Rc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===i)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Xf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Wf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ic=null;function O1(e,i,s){if(Ic===null){var l=new Map,h=Ic=new Map;h.set(s,l)}else h=Ic,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[mr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(i)||"";E=e+E;var b=l.get(E);b?b.push(f):l.set(E,[f])}}return l}function V1(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Ew(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tl=null;function bw(){}function ww(e,i,s){if(Tl===null)throw Error(a(475));var l=Tl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Fs(s.href),f=e.querySelector(bl(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Cc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=f,Ee(f);return}f=e.ownerDocument||e,s=N1(s),(h=Bn.get(h))&&Xf(s,h),f=f.createElement("link"),Ee(f);var E=f;E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",s),i.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Cc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Tw(){if(Tl===null)throw Error(a(475));var e=Tl;return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jc=null;function Zf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jc=new Map,i.forEach(Aw,e),jc=null,Cc.call(e))}function Aw(e,i){if(!(i.state.loading&4)){var s=jc.get(e);if(s)var l=s.get(null);else{s=new Map,jc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var E=h[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),f=s.get(E)||l,f===l&&s.set(null,h),s.set(E,h),this.count++,l=Cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Al={$$typeof:et,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Sw(e,i,s,l,h,f,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.hiddenUpdates=rs(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function U1(e,i,s,l,h,f,E,b,D,K,tt,rt){return e=new Sw(e,i,s,E,b,D,K,rt),i=1,f===!0&&(i|=24),f=bn(3,null,null,i),e.current=f,f.stateNode=e,i=Nd(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:i},kd(f),e}function P1(e){return e?(e=Es,e):Es}function z1(e,i,s,l,h,f){h=P1(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(i),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=Ir(e,l,i),s!==null&&(Rn(s,e,i),el(s,e,i))}function L1(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Jf(e,i){L1(e,i),(e=e.alternate)&&L1(e,i)}function B1(e){if(e.tag===13){var i=_s(e,67108864);i!==null&&Rn(i,e,67108864),Jf(e,67108864)}}var Dc=!0;function Rw(e,i,s,l){var h=J.T;J.T=null;var f=ht.p;try{ht.p=2,tp(e,i,s,l)}finally{ht.p=f,J.T=h}}function Iw(e,i,s,l){var h=J.T;J.T=null;var f=ht.p;try{ht.p=8,tp(e,i,s,l)}finally{ht.p=f,J.T=h}}function tp(e,i,s,l){if(Dc){var h=ep(l);if(h===null)Bf(e,i,l,Nc,s),F1(e,l);else if(jw(h,e,i,s,l))l.stopPropagation();else if(F1(e,l),i&4&&-1<Cw.indexOf(e)){for(;h!==null;){var f=ui(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Hn(f.pendingLanes);if(E!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var D=1<<31-ln(E);b.entanglements[1]|=D,E&=~D}vi(f),(Qt&6)===0&&(mc=fn()+500,xl(0))}}break;case 13:b=_s(f,2),b!==null&&Rn(b,f,2),yc(),Jf(f,2)}if(f=ep(l),f===null&&Bf(e,i,l,Nc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Bf(e,i,l,null,s)}}function ep(e){return e=ko(e),np(e)}var Nc=null;function np(e){if(Nc=null,e=li(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Nc=e,null}function $1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vu()){case Oe:return 2;case ze:return 8;case Di:case sd:return 32;case So:return 268435456;default:return 32}default:return 32}}var ip=!1,Br=null,$r=null,Fr=null,Sl=new Map,Rl=new Map,Kr=[],Cw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F1(e,i){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function Il(e,i,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},i!==null&&(i=ui(i),i!==null&&B1(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function jw(e,i,s,l,h){switch(i){case"focusin":return Br=Il(Br,e,i,s,l,h),!0;case"dragenter":return $r=Il($r,e,i,s,l,h),!0;case"mouseover":return Fr=Il(Fr,e,i,s,l,h),!0;case"pointerover":var f=h.pointerId;return Sl.set(f,Il(Sl.get(f)||null,e,i,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,Rl.set(f,Il(Rl.get(f)||null,e,i,s,l,h)),!0}return!1}function K1(e){var i=li(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){e.blockedOn=i,ud(e.priority,function(){if(s.tag===13){var l=Sn();l=Io(l);var h=_s(s,l);h!==null&&Rn(h,s,l),Jf(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ep(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Vo=l,s.target.dispatchEvent(l),Vo=null}else return i=ui(s),i!==null&&B1(i),e.blockedOn=s,!1;i.shift()}return!0}function q1(e,i,s){Mc(e)&&s.delete(i)}function Dw(){ip=!1,Br!==null&&Mc(Br)&&(Br=null),$r!==null&&Mc($r)&&($r=null),Fr!==null&&Mc(Fr)&&(Fr=null),Sl.forEach(q1),Rl.forEach(q1)}function Oc(e,i){e.blockedOn===i&&(e.blockedOn=null,ip||(ip=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Dw)))}var Vc=null;function H1(e){Vc!==e&&(Vc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(np(l||s)===null)continue;break}var f=ui(s);f!==null&&(e.splice(i,3),i-=3,ef(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Cl(e){function i(D){return Oc(D,e)}Br!==null&&Oc(Br,e),$r!==null&&Oc($r,e),Fr!==null&&Oc(Fr,e),Sl.forEach(i),Rl.forEach(i);for(var s=0;s<Kr.length;s++){var l=Kr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Kr.length&&(s=Kr[0],s.blockedOn===null);)K1(s),s.blockedOn===null&&Kr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],E=h[He]||null;if(typeof f=="function")E||H1(s);else if(E){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,E=f[He]||null)b=E.formAction;else if(np(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),H1(s)}}}function rp(e){this._internalRoot=e}kc.prototype.render=rp.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Sn();z1(s,l,e,i,null,null)},kc.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;z1(e.current,2,null,e,null,null),yc(),i[Mi]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ni();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Kr.length&&i!==0&&i<Kr[s].priority;s++);Kr.splice(s,0,e),s===0&&K1(e)}};var G1=t.version;if(G1!=="19.1.1")throw Error(a(527,G1,"19.1.1"));ht.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Nw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ur=Uc.inject(Nw),Je=Uc}catch{}}return Ml.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",h=uy,f=cy,E=hy,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=U1(e,1,!1,null,null,s,l,h,f,E,b,null),e[Mi]=i.current,Lf(e),new rp(i)},Ml.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=uy,E=cy,b=hy,D=null,K=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(K=s.formState)),i=U1(e,1,!0,i,s??null,l,h,f,E,b,D,K),i.context=P1(null),s=i.current,l=Sn(),l=Io(l),h=Rr(l),h.callback=null,Ir(s,h,l),s=l,i.current.lanes=s,ve(i,s),vi(i),e[Mi]=i.current,Lf(e),new kc(i)},Ml.version="19.1.1",Ml}var f_;function QN(){if(f_)return Up.exports;f_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Up.exports=YN(),Up.exports}var XN=QN();function WN(){const n=Ii(),t=hT();return Dt.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const r=document.getElementById("main");r&&r.focus({preventScroll:!0})},[n,t]),null}function ZN({headerMode:n,setHeaderMode:t}){const r=q.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Ii(),o=q.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const d=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(d)?d:void 0},[a.pathname]);return x.jsxs(x.Fragment,{children:[x.jsx(t2,{items:r,activeKey:o,mode:n,autoOnScroll:n===pe.GRADIENT_DARK||n===pe.DARK,scrollThreshold:8,sticky:!0,overlay:n===pe.GRADIENT_DARK||n===pe.DARK,maxWidth:1280,onModeChange:t}),x.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:x.jsx(jT,{})}),x.jsx(e2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function JN({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(g4,{})}function t9({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(J4,{})}function e9({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(_5,{})}function n9({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.GRADIENT_DARK)},[n]),x.jsx(Fj,{})}function i9({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.DARK)},[n]),x.jsx(eN,{})}function r9({setHeaderMode:n}){return Dt.useEffect(()=>{n(pe.LIGHT)},[n]),x.jsx(qN,{})}function a9(){const[n,t]=q.useState(pe.GRADIENT);return x.jsxs(eA,{basename:"/TU2025gradulate/",children:[x.jsx(WN,{}),x.jsx(NT,{children:x.jsxs(Zi,{element:x.jsx(ZN,{headerMode:n,setHeaderMode:t}),children:[x.jsx(Zi,{index:!0,element:x.jsx(n9,{setHeaderMode:t})}),x.jsx(Zi,{path:"projects/",element:x.jsx(e9,{setHeaderMode:t})}),x.jsx(Zi,{path:"peoples/",element:x.jsx(t9,{setHeaderMode:t})}),x.jsx(Zi,{path:"guestbook/",element:x.jsx(i9,{setHeaderMode:t})}),x.jsx(Zi,{path:"work/:pid",element:x.jsx(r9,{setHeaderMode:t})}),x.jsx(Zi,{path:"credits/",element:x.jsx(JN,{setHeaderMode:t})}),x.jsx(Zi,{path:"*",element:x.jsx(CT,{to:"/",replace:!0})})]})})]})}const p_=typeof document<"u"?document.getElementById("root"):null;p_&&XN.createRoot(p_).render(x.jsx(a9,{}));
