(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function b_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lp={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function Bw(){if(J1)return Ml;J1=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:d,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=t,Ml.jsx=i,Ml.jsxs=i,Ml}var tx;function $w(){return tx||(tx=1,lp.exports=Bw()),lp.exports}var x=$w(),up={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function Fw(){if(ex)return Dt;ex=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function P(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}P.prototype.isReactComponent={},P.prototype.setState=function(V,at){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,at,"setState")},P.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function G(){}G.prototype=P.prototype;function X(V,at,lt){this.props=V,this.context=at,this.refs=B,this.updater=lt||R}var et=X.prototype=new G;et.constructor=X,M(et,P.prototype),et.isPureReactComponent=!0;var ct=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function C(V,at,lt,ut,gt,jt){return lt=jt.ref,{$$typeof:n,type:V,key:at,ref:lt!==void 0?lt:null,props:jt}}function I(V,at){return C(V.type,at,void 0,void 0,void 0,V.props)}function j(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var at={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(lt){return at[lt]})}var k=/\/+/g;function z(V,at){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):at.toString(36)}function N(){}function ue(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(N,N):(V.status="pending",V.then(function(at){V.status==="pending"&&(V.status="fulfilled",V.value=at)},function(at){V.status==="pending"&&(V.status="rejected",V.reason=at)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function ne(V,at,lt,ut,gt){var jt=typeof V;(jt==="undefined"||jt==="boolean")&&(V=null);var _t=!1;if(V===null)_t=!0;else switch(jt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(V.$$typeof){case n:case t:_t=!0;break;case v:return _t=V._init,ne(_t(V._payload),at,lt,ut,gt)}}if(_t)return gt=gt(V),_t=ut===""?"."+z(V,0):ut,ct(gt)?(lt="",_t!=null&&(lt=_t.replace(k,"$&/")+"/"),ne(gt,at,lt,"",function(Me){return Me})):gt!=null&&(j(gt)&&(gt=I(gt,lt+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(k,"$&/")+"/")+_t)),at.push(gt)),1;_t=0;var ge=ut===""?".":ut+":";if(ct(V))for(var zt=0;zt<V.length;zt++)ut=V[zt],jt=ge+z(ut,zt),_t+=ne(ut,at,lt,jt,gt);else if(zt=S(V),typeof zt=="function")for(V=zt.call(V),zt=0;!(ut=V.next()).done;)ut=ut.value,jt=ge+z(ut,zt++),_t+=ne(ut,at,lt,jt,gt);else if(jt==="object"){if(typeof V.then=="function")return ne(ue(V),at,lt,ut,gt);throw at=String(V),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function J(V,at,lt){if(V==null)return V;var ut=[],gt=0;return ne(V,ut,"","",function(jt){return at.call(lt,jt,gt++)}),ut}function ht(V){if(V._status===-1){var at=V._result;at=at(),at.then(function(lt){(V._status===0||V._status===-1)&&(V._status=1,V._result=lt)},function(lt){(V._status===0||V._status===-1)&&(V._status=2,V._result=lt)}),V._status===-1&&(V._status=0,V._result=at)}if(V._status===1)return V._result.default;throw V._result}var yt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ct(){}return Dt.Children={map:J,forEach:function(V,at,lt){J(V,function(){at.apply(this,arguments)},lt)},count:function(V){var at=0;return J(V,function(){at++}),at},toArray:function(V){return J(V,function(at){return at})||[]},only:function(V){if(!j(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Dt.Component=P,Dt.Fragment=i,Dt.Profiler=o,Dt.PureComponent=X,Dt.StrictMode=a,Dt.Suspense=m,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Dt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return Z.H.useMemoCache(V)}},Dt.cache=function(V){return function(){return V.apply(null,arguments)}},Dt.cloneElement=function(V,at,lt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ut=M({},V.props),gt=V.key,jt=void 0;if(at!=null)for(_t in at.ref!==void 0&&(jt=void 0),at.key!==void 0&&(gt=""+at.key),at)!ft.call(at,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&at.ref===void 0||(ut[_t]=at[_t]);var _t=arguments.length-2;if(_t===1)ut.children=lt;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];ut.children=ge}return C(V.type,gt,void 0,void 0,jt,ut)},Dt.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},Dt.createElement=function(V,at,lt){var ut,gt={},jt=null;if(at!=null)for(ut in at.key!==void 0&&(jt=""+at.key),at)ft.call(at,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(gt[ut]=at[ut]);var _t=arguments.length-2;if(_t===1)gt.children=lt;else if(1<_t){for(var ge=Array(_t),zt=0;zt<_t;zt++)ge[zt]=arguments[zt+2];gt.children=ge}if(V&&V.defaultProps)for(ut in _t=V.defaultProps,_t)gt[ut]===void 0&&(gt[ut]=_t[ut]);return C(V,jt,void 0,void 0,null,gt)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(V){return{$$typeof:p,render:V}},Dt.isValidElement=j,Dt.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:ht}},Dt.memo=function(V,at){return{$$typeof:g,type:V,compare:at===void 0?null:at}},Dt.startTransition=function(V){var at=Z.T,lt={};Z.T=lt;try{var ut=V(),gt=Z.S;gt!==null&&gt(lt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(Ct,yt)}catch(jt){yt(jt)}finally{Z.T=at}},Dt.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Dt.use=function(V){return Z.H.use(V)},Dt.useActionState=function(V,at,lt){return Z.H.useActionState(V,at,lt)},Dt.useCallback=function(V,at){return Z.H.useCallback(V,at)},Dt.useContext=function(V){return Z.H.useContext(V)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(V,at){return Z.H.useDeferredValue(V,at)},Dt.useEffect=function(V,at,lt){var ut=Z.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ut.useEffect(V,at)},Dt.useId=function(){return Z.H.useId()},Dt.useImperativeHandle=function(V,at,lt){return Z.H.useImperativeHandle(V,at,lt)},Dt.useInsertionEffect=function(V,at){return Z.H.useInsertionEffect(V,at)},Dt.useLayoutEffect=function(V,at){return Z.H.useLayoutEffect(V,at)},Dt.useMemo=function(V,at){return Z.H.useMemo(V,at)},Dt.useOptimistic=function(V,at){return Z.H.useOptimistic(V,at)},Dt.useReducer=function(V,at,lt){return Z.H.useReducer(V,at,lt)},Dt.useRef=function(V){return Z.H.useRef(V)},Dt.useState=function(V){return Z.H.useState(V)},Dt.useSyncExternalStore=function(V,at,lt){return Z.H.useSyncExternalStore(V,at,lt)},Dt.useTransition=function(){return Z.H.useTransition()},Dt.version="19.1.1",Dt}var nx;function Cm(){return nx||(nx=1,up.exports=Fw()),up.exports}var q=Cm();const Rt=b_(q);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ix="popstate";function Kw(n={}){function t(a,o){let{pathname:u,search:d,hash:p}=a.location;return qp("",{pathname:u,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Wl(o)}return Hw(t,i,null,n)}function he(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function ii(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qw(){return Math.random().toString(36).substring(2,10)}function rx(n,t){return{usr:n.state,key:n.key,idx:t}}function qp(n,t,i=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?go(t):t,state:i,key:t&&t.key||a||qw()}}function Wl({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function go(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let a=n.indexOf("?");a>=0&&(t.search=n.substring(a),n=n.substring(0,a)),n&&(t.pathname=n)}return t}function Hw(n,t,i,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,d=o.history,p="POP",m=null,g=v();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function v(){return(d.state||{idx:null}).idx}function w(){p="POP";let P=v(),G=P==null?null:P-g;g=P,m&&m({action:p,location:B.location,delta:G})}function S(P,G){p="PUSH";let X=qp(B.location,P,G);g=v()+1;let et=rx(X,g),ct=B.createHref(X);try{d.pushState(et,"",ct)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;o.location.assign(ct)}u&&m&&m({action:p,location:B.location,delta:1})}function R(P,G){p="REPLACE";let X=qp(B.location,P,G);g=v();let et=rx(X,g),ct=B.createHref(X);d.replaceState(et,"",ct),u&&m&&m({action:p,location:B.location,delta:0})}function M(P){return Gw(P)}let B={get action(){return p},get location(){return n(o,d)},listen(P){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(ix,w),m=P,()=>{o.removeEventListener(ix,w),m=null}},createHref(P){return t(o,P)},createURL:M,encodeLocation(P){let G=M(P);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:S,replace:R,go(P){return d.go(P)}};return B}function Gw(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),he(i,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Wl(n);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function w_(n,t,i="/"){return Yw(n,t,i,!1)}function Yw(n,t,i,a){let o=typeof t=="string"?go(t):t,u=ar(o.pathname||"/",i);if(u==null)return null;let d=T_(n);Qw(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=sT(u);p=rT(d[m],g,a)}return p}function T_(n,t=[],i=[],a="",o=!1){let u=(d,p,m=o,g)=>{let v={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;he(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let w=nr([a,v.relativePath]),S=i.concat(v);d.children&&d.children.length>0&&(he(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),T_(d.children,t,S,w,m)),!(d.path==null&&!d.index)&&t.push({path:w,score:nT(w,d.index),routesMeta:S})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let m of S_(d.path))u(d,p,!0,m)}),t}function S_(n){let t=n.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let d=S_(a.join("/")),p=[];return p.push(...d.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function Qw(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:iT(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Xw=/^:[\w-]+$/,Ww=3,Zw=2,Jw=1,tT=10,eT=-2,ax=n=>n==="*";function nT(n,t){let i=n.split("/"),a=i.length;return i.some(ax)&&(a+=eT),t&&(a+=Zw),i.filter(o=>!ax(o)).reduce((o,u)=>o+(Xw.test(u)?Ww:u===""?Jw:tT),a)}function iT(n,t){return n.length===t.length&&n.slice(0,-1).every((a,o)=>a===t[o])?n[n.length-1]-t[t.length-1]:0}function rT(n,t,i=!1){let{routesMeta:a}=n,o={},u="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",w=yh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),S=m.route;if(!w&&g&&i&&!a[a.length-1].route.index&&(w=yh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!w)return null;Object.assign(o,w.params),d.push({params:o,pathname:nr([u,w.pathname]),pathnameBase:cT(nr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=nr([u,w.pathnameBase]))}return d}function yh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,a]=aT(n.path,n.caseSensitive,n.end),o=t.match(i);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:w},S)=>{if(v==="*"){let M=p[S]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const R=p[S];return w&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:n}}function aT(n,t=!1,i=!0){ii(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function sT(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ii(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function ar(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=n.charAt(i);return a&&a!=="/"?null:n.slice(i)||"/"}function oT(n,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof n=="string"?go(n):n;return{pathname:i?i.startsWith("/")?i:lT(i,t):t,search:hT(a),hash:dT(o)}}function lT(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function cp(n,t,i,a){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uT(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function jm(n){let t=uT(n);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function Dm(n,t,i,a=!1){let o;typeof n=="string"?o=go(n):(o={...n},he(!o.pathname||!o.pathname.includes("?"),cp("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),cp("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),cp("#","search","hash",o)));let u=n===""||o.pathname==="",d=u?"/":o.pathname,p;if(d==null)p=i;else{let w=t.length-1;if(!a&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}p=w>=0?t[w]:"/"}let m=oT(o,p),g=d&&d!=="/"&&d.endsWith("/"),v=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var nr=n=>n.join("/").replace(/\/\/+/g,"/"),cT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),hT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,dT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function fT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var A_=["POST","PUT","PATCH","DELETE"];new Set(A_);var pT=["GET",...A_];new Set(pT);var yo=q.createContext(null);yo.displayName="DataRouter";var Uh=q.createContext(null);Uh.displayName="DataRouterState";q.createContext(!1);var R_=q.createContext({isTransitioning:!1});R_.displayName="ViewTransition";var mT=q.createContext(new Map);mT.displayName="Fetchers";var gT=q.createContext(null);gT.displayName="Await";var ai=q.createContext(null);ai.displayName="Navigation";var xo=q.createContext(null);xo.displayName="Location";var Kn=q.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var Nm=q.createContext(null);Nm.displayName="RouteError";function yT(n,{relative:t}={}){he(vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=q.useContext(ai),{hash:o,pathname:u,search:d}=hu(n,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:nr([i,u])),a.createHref({pathname:p,search:d,hash:o})}function vo(){return q.useContext(xo)!=null}function Ci(){return he(vo(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(xo).location}function xT(){return q.useContext(xo).navigationType}var I_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function C_(n){q.useContext(ai).static||q.useLayoutEffect(n)}function Mm(){let{isDataRoute:n}=q.useContext(Kn);return n?OT():vT()}function vT(){he(vo(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(yo),{basename:t,navigator:i}=q.useContext(ai),{matches:a}=q.useContext(Kn),{pathname:o}=Ci(),u=JSON.stringify(jm(a)),d=q.useRef(!1);return C_(()=>{d.current=!0}),q.useCallback((m,g={})=>{if(ii(d.current,I_),!d.current)return;if(typeof m=="number"){i.go(m);return}let v=Dm(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:nr([t,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[t,i,u,o,n])}var _T=q.createContext(null);function ET(n){let t=q.useContext(Kn).outlet;return t&&q.createElement(_T.Provider,{value:n},t)}function bT(){let{matches:n}=q.useContext(Kn),t=n[n.length-1];return t?t.params:{}}function hu(n,{relative:t}={}){let{matches:i}=q.useContext(Kn),{pathname:a}=Ci(),o=JSON.stringify(jm(i));return q.useMemo(()=>Dm(n,JSON.parse(o),a,t==="path"),[n,o,a,t])}function wT(n,t){return j_(n,t)}function j_(n,t,i,a,o){he(vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=q.useContext(ai),{matches:d}=q.useContext(Kn),p=d[d.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",w=p&&p.route;{let X=w&&w.path||"";D_(g,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let S=Ci(),R;if(t){let X=typeof t=="string"?go(t):t;he(v==="/"||X.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=S;let M=R.pathname||"/",B=M;if(v!=="/"){let X=v.replace(/^\//,"").split("/");B="/"+M.replace(/^\//,"").split("/").slice(X.length).join("/")}let P=w_(n,{pathname:B});ii(w||P!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=IT(P&&P.map(X=>Object.assign({},X,{params:Object.assign({},m,X.params),pathname:nr([v,u.encodeLocation?u.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?v:nr([v,u.encodeLocation?u.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),d,i,a,o);return t&&G?q.createElement(xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},G):G}function TT(){let n=MT(),t=fT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),i?q.createElement("pre",{style:o},i):null,d)}var ST=q.createElement(TT,null),AT=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.unstable_onError?this.props.unstable_onError(n,t):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?q.createElement(Kn.Provider,{value:this.props.routeContext},q.createElement(Nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RT({routeContext:n,match:t,children:i}){let a=q.useContext(yo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(Kn.Provider,{value:n},i)}function IT(n,t=[],i=null,a=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i?.errors;if(d!=null){let g=u.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);he(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:w,errors:S}=i,R=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||R){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,w)=>{let S,R=!1,M=null,B=null;i&&(S=d&&v.route.id?d[v.route.id]:void 0,M=v.route.errorElement||ST,p&&(m<0&&w===0?(D_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,B=null):m===w&&(R=!0,B=v.route.hydrateFallbackElement||null)));let P=t.concat(u.slice(0,w+1)),G=()=>{let X;return S?X=M:R?X=B:v.route.Component?X=q.createElement(v.route.Component,null):v.route.element?X=v.route.element:X=g,q.createElement(RT,{match:v,routeContext:{outlet:g,matches:P,isDataRoute:i!=null},children:X})};return i&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?q.createElement(AT,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:G(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:a}):G()},null)}function Om(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CT(n){let t=q.useContext(yo);return he(t,Om(n)),t}function jT(n){let t=q.useContext(Uh);return he(t,Om(n)),t}function DT(n){let t=q.useContext(Kn);return he(t,Om(n)),t}function Vm(n){let t=DT(n),i=t.matches[t.matches.length-1];return he(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function NT(){return Vm("useRouteId")}function MT(){let n=q.useContext(Nm),t=jT("useRouteError"),i=Vm("useRouteError");return n!==void 0?n:t.errors?.[i]}function OT(){let{router:n}=CT("useNavigate"),t=Vm("useNavigate"),i=q.useRef(!1);return C_(()=>{i.current=!0}),q.useCallback(async(o,u={})=>{ii(i.current,I_),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var sx={};function D_(n,t,i){!t&&!sx[n]&&(sx[n]=!0,ii(!1,i))}q.memo(VT);function VT({routes:n,future:t,state:i,unstable_onError:a}){return j_(n,void 0,i,a,t)}function kT({to:n,replace:t,state:i,relative:a}){he(vo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(ai);ii(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=q.useContext(Kn),{pathname:d}=Ci(),p=Mm(),m=Dm(n,jm(u),d,a==="path"),g=JSON.stringify(m);return q.useEffect(()=>{p(JSON.parse(g),{replace:t,state:i,relative:a})},[p,g,a,t,i]),null}function UT(n){return ET(n.context)}function tr(n){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PT({basename:n="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:u=!1}){he(!vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=q.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof i=="string"&&(i=go(i));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:S="default"}=i,R=q.useMemo(()=>{let M=ar(m,d);return M==null?null:{location:{pathname:M,search:g,hash:v,state:w,key:S},navigationType:a}},[d,m,g,v,w,S,a]);return ii(R!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:q.createElement(ai.Provider,{value:p},q.createElement(xo.Provider,{children:t,value:R}))}function zT({children:n,location:t}){return wT(Hp(n),t)}function Hp(n,t=[]){let i=[];return q.Children.forEach(n,(a,o)=>{if(!q.isValidElement(a))return;let u=[...t,o];if(a.type===q.Fragment){i.push.apply(i,Hp(a.props.children,u));return}he(a.type===tr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Hp(a.props.children,u)),i.push(d)}),i}var th="get",eh="application/x-www-form-urlencoded";function Ph(n){return n!=null&&typeof n.tagName=="string"}function LT(n){return Ph(n)&&n.tagName.toLowerCase()==="button"}function BT(n){return Ph(n)&&n.tagName.toLowerCase()==="form"}function $T(n){return Ph(n)&&n.tagName.toLowerCase()==="input"}function FT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function KT(n,t){return n.button===0&&(!t||t==="_self")&&!FT(n)}var Bc=null;function qT(){if(Bc===null)try{new FormData(document.createElement("form"),0),Bc=!1}catch{Bc=!0}return Bc}var HT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hp(n){return n!=null&&!HT.has(n)?(ii(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eh}"`),null):n}function GT(n,t){let i,a,o,u,d;if(BT(n)){let p=n.getAttribute("action");a=p?ar(p,t):null,i=n.getAttribute("method")||th,o=hp(n.getAttribute("enctype"))||eh,u=new FormData(n)}else if(LT(n)||$T(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?ar(m,t):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||th,o=hp(n.getAttribute("formenctype"))||hp(p.getAttribute("enctype"))||eh,u=new FormData(p,n),!qT()){let{name:g,type:v,value:w}=n;if(v==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,w)}}else{if(Ph(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=th,a=null,o=eh,d=n}return u&&o==="text/plain"&&(d=u,u=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function km(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function YT(n,t,i){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&ar(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function QT(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function WT(n,t,i){let a=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let d=await QT(u,i);return d.links?d.links():[]}return[]}));return e4(a.flat(1).filter(XT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ox(n,t,i,a,o,u){let d=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,p=(m,g)=>i[g].pathname!==m.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,g)=>d(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ZT(n,t,{includeHydrateFallback:i}={}){return JT(n.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function JT(n){return[...new Set(n)]}function t4(n){let t={},i=Object.keys(n).sort();for(let a of i)t[a]=n[a];return t}function e4(n,t){let i=new Set;return new Set(t),n.reduce((a,o)=>{let u=JSON.stringify(t4(o));return i.has(u)||(i.add(u),a.push({key:u,link:o})),a},[])}function N_(){let n=q.useContext(yo);return km(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function n4(){let n=q.useContext(Uh);return km(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Um=q.createContext(void 0);Um.displayName="FrameworkContext";function M_(){let n=q.useContext(Um);return km(n,"You must render this element inside a <HydratedRouter> element"),n}function i4(n,t){let i=q.useContext(Um),[a,o]=q.useState(!1),[u,d]=q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=t,S=q.useRef(null);q.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let B=G=>{G.forEach(X=>{d(X.isIntersecting)})},P=new IntersectionObserver(B,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[n]),q.useEffect(()=>{if(a){let B=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(B)}}},[a]);let R=()=>{o(!0)},M=()=>{o(!1),d(!1)};return i?n!=="intent"?[u,S,{}]:[u,S,{onFocus:Ol(p,R),onBlur:Ol(m,M),onMouseEnter:Ol(g,R),onMouseLeave:Ol(v,M),onTouchStart:Ol(w,R)}]:[!1,S,{}]}function Ol(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function r4({page:n,...t}){let{router:i}=N_(),a=q.useMemo(()=>w_(i.routes,n,i.basename),[i.routes,n,i.basename]);return a?q.createElement(s4,{page:n,matches:a,...t}):null}function a4(n){let{manifest:t,routeModules:i}=M_(),[a,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return WT(n,t,i).then(d=>{u||o(d)}),()=>{u=!0}},[n,t,i]),a}function s4({page:n,matches:t,...i}){let a=Ci(),{manifest:o,routeModules:u}=M_(),{basename:d}=N_(),{loaderData:p,matches:m}=n4(),g=q.useMemo(()=>ox(n,t,m,o,a,"data"),[n,t,m,o,a]),v=q.useMemo(()=>ox(n,t,m,o,a,"assets"),[n,t,m,o,a]),w=q.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let M=new Set,B=!1;if(t.forEach(G=>{let X=o.routes[G.route.id];!X||!X.hasLoader||(!g.some(et=>et.route.id===G.route.id)&&G.route.id in p&&u[G.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:M.add(G.route.id))}),M.size===0)return[];let P=YT(n,d,"data");return B&&M.size>0&&P.searchParams.set("_routes",t.filter(G=>M.has(G.route.id)).map(G=>G.route.id).join(",")),[P.pathname+P.search]},[d,p,a,o,g,t,n,u]),S=q.useMemo(()=>ZT(v,o),[v,o]),R=a4(v);return q.createElement(q.Fragment,null,w.map(M=>q.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),S.map(M=>q.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),R.map(({key:M,link:B})=>q.createElement("link",{key:M,nonce:i.nonce,...B})))}function o4(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var O_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{O_&&(window.__reactRouterVersion="7.9.1")}catch{}function l4({basename:n,children:t,window:i}){let a=q.useRef();a.current==null&&(a.current=Kw({window:i,v5Compat:!0}));let o=a.current,[u,d]=q.useState({action:o.action,location:o.location}),p=q.useCallback(m=>{q.startTransition(()=>d(m))},[d]);return q.useLayoutEffect(()=>o.listen(p),[o,p]),q.createElement(PT,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var V_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_o=q.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:u,replace:d,state:p,target:m,to:g,preventScrollReset:v,viewTransition:w,...S},R){let{basename:M}=q.useContext(ai),B=typeof g=="string"&&V_.test(g),P,G=!1;if(typeof g=="string"&&B&&(P=g,O_))try{let j=new URL(window.location.href),O=g.startsWith("//")?new URL(j.protocol+g):new URL(g),k=ar(O.pathname,M);O.origin===j.origin&&k!=null?g=k+O.search+O.hash:G=!0}catch{ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=yT(g,{relative:o}),[et,ct,Z]=i4(a,S),ft=d4(g,{replace:d,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:w});function C(j){t&&t(j),j.defaultPrevented||ft(j)}let I=q.createElement("a",{...S,...Z,href:P||X,onClick:G||u?t:C,ref:o4(R,ct),target:m,"data-discover":!B&&i==="render"?"true":void 0});return et&&!B?q.createElement(q.Fragment,null,I,q.createElement(r4,{page:X})):I});_o.displayName="Link";var u4=q.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:u,to:d,viewTransition:p,children:m,...g},v){let w=hu(d,{relative:g.relative}),S=Ci(),R=q.useContext(Uh),{navigator:M,basename:B}=q.useContext(ai),P=R!=null&&y4(w)&&p===!0,G=M.encodeLocation?M.encodeLocation(w).pathname:w.pathname,X=S.pathname,et=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(X=X.toLowerCase(),et=et?et.toLowerCase():null,G=G.toLowerCase()),et&&B&&(et=ar(et,B)||et);const ct=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let Z=X===G||!o&&X.startsWith(G)&&X.charAt(ct)==="/",ft=et!=null&&(et===G||!o&&et.startsWith(G)&&et.charAt(G.length)==="/"),C={isActive:Z,isPending:ft,isTransitioning:P},I=Z?t:void 0,j;typeof a=="function"?j=a(C):j=[a,Z?"active":null,ft?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(C):u;return q.createElement(_o,{...g,"aria-current":I,className:j,ref:v,style:O,to:d,viewTransition:p},typeof m=="function"?m(C):m)});u4.displayName="NavLink";var c4=q.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:u,method:d=th,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:w,...S},R)=>{let M=m4(),B=g4(p,{relative:g}),P=d.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&V_.test(p),X=et=>{if(m&&m(et),et.defaultPrevented)return;et.preventDefault();let ct=et.nativeEvent.submitter,Z=ct?.getAttribute("formmethod")||d;M(ct||et.currentTarget,{fetcherKey:t,method:Z,navigate:i,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:w})};return q.createElement("form",{ref:R,method:P,action:B,onSubmit:a?m:X,...S,"data-discover":!G&&n==="render"?"true":void 0})});c4.displayName="Form";function h4(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k_(n){let t=q.useContext(yo);return he(t,h4(n)),t}function d4(n,{target:t,replace:i,state:a,preventScrollReset:o,relative:u,viewTransition:d}={}){let p=Mm(),m=Ci(),g=hu(n,{relative:u});return q.useCallback(v=>{if(KT(v,t)){v.preventDefault();let w=i!==void 0?i:Wl(m)===Wl(g);p(n,{replace:w,state:a,preventScrollReset:o,relative:u,viewTransition:d})}},[m,p,g,i,a,t,n,o,u,d])}var f4=0,p4=()=>`__${String(++f4)}__`;function m4(){let{router:n}=k_("useSubmit"),{basename:t}=q.useContext(ai),i=NT();return q.useCallback(async(a,o={})=>{let{action:u,method:d,encType:p,formData:m,body:g}=GT(a,t);if(o.navigate===!1){let v=o.fetcherKey||p4();await n.fetch(v,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||d,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,i])}function g4(n,{relative:t}={}){let{basename:i}=q.useContext(ai),a=q.useContext(Kn);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...hu(n||".",{relative:t})},d=Ci();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:nr([i,u.pathname])),Wl(u)}function y4(n,{relative:t}={}){let i=q.useContext(R_);he(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=k_("useViewTransitionState"),o=hu(n,{relative:t});if(!i.isTransitioning)return!1;let u=ar(i.currentLocation.pathname,a)||i.currentLocation.pathname,d=ar(i.nextLocation.pathname,a)||i.nextLocation.pathname;return yh(o.pathname,d)!=null||yh(o.pathname,u)!=null}var dp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function x4(){if(lx)return nn;lx=1;var n=Cm();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,v)},nn.flushSync=function(m){var g=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=g,a.p=v,a.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:R}):v==="script"&&a.d.X(m,{crossOrigin:w,integrity:S,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},nn.requestFormReset=function(m){a.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,v){return d.H.useFormState(m,g,v)},nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var ux;function v4(){if(ux)return dp.exports;ux=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),dp.exports=x4(),dp.exports}var fp={exports:{}},pp,cx;function _4(){if(cx)return pp;cx=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pp=n,pp}var mp,hx;function E4(){if(hx)return mp;hx=1;var n=_4();function t(){}function i(){}return i.resetWarningCache=t,mp=function(){function a(d,p,m,g,v,w){if(w!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:t};return u.PropTypes=u,u},mp}var dx;function b4(){return dx||(dx=1,fp.exports=E4()()),fp.exports}var w4=b4();const W=b_(w4);var vn=function(){return vn=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(t[u]=i[u])}return t},vn.apply(this,arguments)};function xh(n,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,u;a<o;a++)(u||!(a in t))&&(u||(u=Array.prototype.slice.call(t,0,a)),u[a]=t[a]);return n.concat(u||Array.prototype.slice.call(t))}var oe="-ms-",$l="-moz-",Ht="-webkit-",U_="comm",zh="rule",Pm="decl",T4="@import",P_="@keyframes",S4="@layer",z_=Math.abs,zm=String.fromCharCode,Gp=Object.assign;function A4(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function L_(n){return n.trim()}function er(n,t){return(n=t.exec(n))?n[0]:n}function Nt(n,t,i){return n.replace(t,i)}function nh(n,t,i){return n.indexOf(t,i)}function qe(n,t){return n.charCodeAt(t)|0}function io(n,t,i){return n.slice(t,i)}function bi(n){return n.length}function B_(n){return n.length}function Ul(n,t){return t.push(n),n}function R4(n,t){return n.map(t).join("")}function fx(n,t){return n.filter(function(i){return!er(i,t)})}var Lh=1,ro=1,$_=0,Fn=0,je=0,Eo="";function Bh(n,t,i,a,o,u,d,p){return{value:n,root:t,parent:i,type:a,props:o,children:u,line:Lh,column:ro,length:d,return:"",siblings:p}}function Qr(n,t){return Gp(Bh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Gs(n){for(;n.root;)n=Qr(n.root,{children:[n]});Ul(n,n.siblings)}function I4(){return je}function C4(){return je=Fn>0?qe(Eo,--Fn):0,ro--,je===10&&(ro=1,Lh--),je}function ni(){return je=Fn<$_?qe(Eo,Fn++):0,ro++,je===10&&(ro=1,Lh++),je}function Qa(){return qe(Eo,Fn)}function ih(){return Fn}function $h(n,t){return io(Eo,n,t)}function Yp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j4(n){return Lh=ro=1,$_=bi(Eo=n),Fn=0,[]}function D4(n){return Eo="",n}function gp(n){return L_($h(Fn-1,Qp(n===91?n+2:n===40?n+1:n)))}function N4(n){for(;(je=Qa())&&je<33;)ni();return Yp(n)>2||Yp(je)>3?"":" "}function M4(n,t){for(;--t&&ni()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return $h(n,ih()+(t<6&&Qa()==32&&ni()==32))}function Qp(n){for(;ni();)switch(je){case n:return Fn;case 34:case 39:n!==34&&n!==39&&Qp(je);break;case 40:n===41&&Qp(n);break;case 92:ni();break}return Fn}function O4(n,t){for(;ni()&&n+je!==57;)if(n+je===84&&Qa()===47)break;return"/*"+$h(t,Fn-1)+"*"+zm(n===47?n:ni())}function V4(n){for(;!Yp(Qa());)ni();return $h(n,Fn)}function k4(n){return D4(rh("",null,null,null,[""],n=j4(n),0,[0],n))}function rh(n,t,i,a,o,u,d,p,m){for(var g=0,v=0,w=d,S=0,R=0,M=0,B=1,P=1,G=1,X=0,et="",ct=o,Z=u,ft=a,C=et;P;)switch(M=X,X=ni()){case 40:if(M!=108&&qe(C,w-1)==58){nh(C+=Nt(gp(X),"&","&\f"),"&\f",z_(g?p[g-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:C+=gp(X);break;case 9:case 10:case 13:case 32:C+=N4(M);break;case 92:C+=M4(ih()-1,7);continue;case 47:switch(Qa()){case 42:case 47:Ul(U4(O4(ni(),ih()),t,i,m),m);break;default:C+="/"}break;case 123*B:p[g++]=bi(C)*G;case 125*B:case 59:case 0:switch(X){case 0:case 125:P=0;case 59+v:G==-1&&(C=Nt(C,/\f/g,"")),R>0&&bi(C)-w&&Ul(R>32?mx(C+";",a,i,w-1,m):mx(Nt(C," ","")+";",a,i,w-2,m),m);break;case 59:C+=";";default:if(Ul(ft=px(C,t,i,g,v,o,p,et,ct=[],Z=[],w,u),u),X===123)if(v===0)rh(C,t,ft,ft,ct,u,w,p,Z);else switch(S===99&&qe(C,3)===110?100:S){case 100:case 108:case 109:case 115:rh(n,ft,ft,a&&Ul(px(n,ft,ft,0,0,o,p,et,o,ct=[],w,Z),Z),o,Z,w,p,a?ct:Z);break;default:rh(C,ft,ft,ft,[""],Z,0,p,Z)}}g=v=R=0,B=G=1,et=C="",w=d;break;case 58:w=1+bi(C),R=M;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&C4()==125)continue}switch(C+=zm(X),X*B){case 38:G=v>0?1:(C+="\f",-1);break;case 44:p[g++]=(bi(C)-1)*G,G=1;break;case 64:Qa()===45&&(C+=gp(ni())),S=Qa(),v=w=bi(et=C+=V4(ih())),X++;break;case 45:M===45&&bi(C)==2&&(B=0)}}return u}function px(n,t,i,a,o,u,d,p,m,g,v,w){for(var S=o-1,R=o===0?u:[""],M=B_(R),B=0,P=0,G=0;B<a;++B)for(var X=0,et=io(n,S+1,S=z_(P=d[B])),ct=n;X<M;++X)(ct=L_(P>0?R[X]+" "+et:Nt(et,/&\f/g,R[X])))&&(m[G++]=ct);return Bh(n,t,i,o===0?zh:p,m,g,v,w)}function U4(n,t,i,a){return Bh(n,t,i,U_,zm(I4()),io(n,2,-2),0,a)}function mx(n,t,i,a,o){return Bh(n,t,i,Pm,io(n,0,a),io(n,a+1,-1),a,o)}function F_(n,t,i){switch(A4(n,t)){case 5103:return Ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ht+n+n;case 4789:return $l+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ht+n+$l+n+oe+n+n;case 5936:switch(qe(n,t+11)){case 114:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ht+n+oe+Nt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ht+n+oe+n+n;case 6165:return Ht+n+oe+"flex-"+n+n;case 5187:return Ht+n+Nt(n,/(\w+).+(:[^]+)/,Ht+"box-$1$2"+oe+"flex-$1$2")+n;case 5443:return Ht+n+oe+"flex-item-"+Nt(n,/flex-|-self/g,"")+(er(n,/flex-|baseline/)?"":oe+"grid-row-"+Nt(n,/flex-|-self/g,""))+n;case 4675:return Ht+n+oe+"flex-line-pack"+Nt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ht+n+oe+Nt(n,"shrink","negative")+n;case 5292:return Ht+n+oe+Nt(n,"basis","preferred-size")+n;case 6060:return Ht+"box-"+Nt(n,"-grow","")+Ht+n+oe+Nt(n,"grow","positive")+n;case 4554:return Ht+Nt(n,/([^-])(transform)/g,"$1"+Ht+"$2")+n;case 6187:return Nt(Nt(Nt(n,/(zoom-|grab)/,Ht+"$1"),/(image-set)/,Ht+"$1"),n,"")+n;case 5495:case 3959:return Nt(n,/(image-set\([^]*)/,Ht+"$1$`$1");case 4968:return Nt(Nt(n,/(.+:)(flex-)?(.*)/,Ht+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ht+n+n;case 4200:if(!er(n,/flex-|baseline/))return oe+"grid-column-align"+io(n,t)+n;break;case 2592:case 3360:return oe+Nt(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,er(a.props,/grid-\w+-end/)})?~nh(n+(i=i[t].value),"span",0)?n:oe+Nt(n,"-start","")+n+oe+"grid-row-span:"+(~nh(i,"span",0)?er(i,/\d+/):+er(i,/\d+/)-+er(n,/\d+/))+";":oe+Nt(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(a){return er(a.props,/grid-\w+-start/)})?n:oe+Nt(Nt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Nt(n,/(.+)-inline(.+)/,Ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Nt(n,/(.+:)(.+)-([^]+)/,"$1"+Ht+"$2-$3$1"+$l+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~nh(n,"stretch",0)?F_(Nt(n,"stretch","fill-available"),t,i)+n:n}break;case 5152:case 5920:return Nt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,d,p,m,g){return oe+o+":"+u+g+(d?oe+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Nt(n,":",":"+Ht)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Nt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ht+(qe(n,14)===45?"inline-":"")+"box$3$1"+Ht+"$2$3$1"+oe+"$2box$3")+n;case 100:return Nt(n,":",":"+oe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(n,"scroll-","scroll-snap-")+n}return n}function vh(n,t){for(var i="",a=0;a<n.length;a++)i+=t(n[a],a,n,t)||"";return i}function P4(n,t,i,a){switch(n.type){case S4:if(n.children.length)break;case T4:case Pm:return n.return=n.return||n.value;case U_:return"";case P_:return n.return=n.value+"{"+vh(n.children,a)+"}";case zh:if(!bi(n.value=n.props.join(",")))return""}return bi(i=vh(n.children,a))?n.return=n.value+"{"+i+"}":""}function z4(n){var t=B_(n);return function(i,a,o,u){for(var d="",p=0;p<t;p++)d+=n[p](i,a,o,u)||"";return d}}function L4(n){return function(t){t.root||(t=t.return)&&n(t)}}function B4(n,t,i,a){if(n.length>-1&&!n.return)switch(n.type){case Pm:n.return=F_(n.value,n.length,i);return;case P_:return vh([Qr(n,{value:Nt(n.value,"@","@"+Ht)})],a);case zh:if(n.length)return R4(i=n.props,function(o){switch(er(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gs(Qr(n,{props:[Nt(o,/:(read-\w+)/,":"+$l+"$1")]})),Gs(Qr(n,{props:[o]})),Gp(n,{props:fx(i,a)});break;case"::placeholder":Gs(Qr(n,{props:[Nt(o,/:(plac\w+)/,":"+Ht+"input-$1")]})),Gs(Qr(n,{props:[Nt(o,/:(plac\w+)/,":"+$l+"$1")]})),Gs(Qr(n,{props:[Nt(o,/:(plac\w+)/,oe+"input-$1")]})),Gs(Qr(n,{props:[o]})),Gp(n,{props:fx(i,a)});break}return""})}}var $4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},In={},ao=typeof process<"u"&&In!==void 0&&(In.REACT_APP_SC_ATTR||In.SC_ATTR)||"data-styled",K_="active",q_="data-styled-version",Fh="6.1.19",Lm=`/*!sc*/
`,_h=typeof window<"u"&&typeof document<"u",F4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==""?In.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&In.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.SC_DISABLE_SPEEDY!==void 0&&In.SC_DISABLE_SPEEDY!==""&&In.SC_DISABLE_SPEEDY!=="false"&&In.SC_DISABLE_SPEEDY),Kh=Object.freeze([]),so=Object.freeze({});function K4(n,t,i){return i===void 0&&(i=so),n.theme!==i.theme&&n.theme||t||i.theme}var H_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),q4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H4=/(^-|-$)/g;function gx(n){return n.replace(q4,"-").replace(H4,"")}var G4=/(a)(d)/gi,$c=52,yx=function(n){return String.fromCharCode(n+(n>25?39:97))};function Xp(n){var t,i="";for(t=Math.abs(n);t>$c;t=t/$c|0)i=yx(t%$c)+i;return(yx(t%$c)+i).replace(G4,"$1-$2")}var yp,G_=5381,Js=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},Y_=function(n){return Js(G_,n)};function Y4(n){return Xp(Y_(n)>>>0)}function Q4(n){return n.displayName||n.name||"Component"}function xp(n){return typeof n=="string"&&!0}var Q_=typeof Symbol=="function"&&Symbol.for,X_=Q_?Symbol.for("react.memo"):60115,X4=Q_?Symbol.for("react.forward_ref"):60112,W4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J4=((yp={})[X4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yp[X_]=W_,yp);function xx(n){return("type"in(t=n)&&t.type.$$typeof)===X_?W_:"$$typeof"in n?J4[n.$$typeof]:W4;var t}var tS=Object.defineProperty,eS=Object.getOwnPropertyNames,vx=Object.getOwnPropertySymbols,nS=Object.getOwnPropertyDescriptor,iS=Object.getPrototypeOf,_x=Object.prototype;function Z_(n,t,i){if(typeof t!="string"){if(_x){var a=iS(t);a&&a!==_x&&Z_(n,a,i)}var o=eS(t);vx&&(o=o.concat(vx(t)));for(var u=xx(n),d=xx(t),p=0;p<o.length;++p){var m=o[p];if(!(m in Z4||i&&i[m]||d&&m in d||u&&m in u)){var g=nS(t,m);try{tS(n,m,g)}catch{}}}}return n}function oo(n){return typeof n=="function"}function Bm(n){return typeof n=="object"&&"styledComponentId"in n}function Ga(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function Ex(n,t){if(n.length===0)return"";for(var i=n[0],a=1;a<n.length;a++)i+=n[a];return i}function Zl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Wp(n,t,i){if(i===void 0&&(i=!1),!i&&!Zl(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)n[a]=Wp(n[a],t[a]);else if(Zl(t))for(var a in t)n[a]=Wp(n[a],t[a]);return n}function $m(n,t){Object.defineProperty(n,"toString",{value:t})}function du(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rS=(function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},n.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;t>=u;)if((u<<=1)<0)throw du(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var d=o;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(t+1),m=(d=0,i.length);d<m;d++)this.tag.insertRule(p,i[d])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),u=o+a,d=o;d<u;d++)i+="".concat(this.tag.getRule(d)).concat(Lm);return i},n})(),ah=new Map,Eh=new Map,sh=1,Fc=function(n){if(ah.has(n))return ah.get(n);for(;Eh.has(sh);)sh++;var t=sh++;return ah.set(n,t),Eh.set(t,n),t},aS=function(n,t){sh=t+1,ah.set(n,t),Eh.set(t,n)},sS="style[".concat(ao,"][").concat(q_,'="').concat(Fh,'"]'),oS=new RegExp("^".concat(ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lS=function(n,t,i){for(var a,o=i.split(","),u=0,d=o.length;u<d;u++)(a=o[u])&&n.registerName(t,a)},uS=function(n,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(Lm),o=[],u=0,d=a.length;u<d;u++){var p=a[u].trim();if(p){var m=p.match(oS);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(aS(v,g),lS(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},bx=function(n){for(var t=document.querySelectorAll(sS),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(ao)!==K_&&(uS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function cS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var J_=function(n){var t=document.head,i=n||t,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(ao,"]")));return m[m.length-1]})(i),u=o!==void 0?o.nextSibling:null;a.setAttribute(ao,K_),a.setAttribute(q_,Fh);var d=cS();return d&&a.setAttribute("nonce",d),i.insertBefore(a,u),a},hS=(function(){function n(t){this.element=J_(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var d=a[o];if(d.ownerNode===i)return d}throw du(17)})(this.element),this.length=0}return n.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},n})(),dS=(function(){function n(t){this.element=J_(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n})(),fS=(function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n})(),wx=_h,pS={isServer:!_h,useCSSOMInjection:!F4},t2=(function(){function n(t,i,a){t===void 0&&(t=so),i===void 0&&(i={});var o=this;this.options=vn(vn({},pS),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&_h&&wx&&(wx=!1,bx(this)),$m(this,function(){return(function(u){for(var d=u.getTag(),p=d.length,m="",g=function(w){var S=(function(G){return Eh.get(G)})(w);if(S===void 0)return"continue";var R=u.names.get(S),M=d.getGroup(w);if(R===void 0||!R.size||M.length===0)return"continue";var B="".concat(ao,".g").concat(w,'[id="').concat(S,'"]'),P="";R!==void 0&&R.forEach(function(G){G.length>0&&(P+="".concat(G,","))}),m+="".concat(M).concat(B,'{content:"').concat(P,'"}').concat(Lm)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(t){return Fc(t)},n.prototype.rehydrate=function(){!this.server&&_h&&bx(this)},n.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(vn(vn({},this.options),t),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new fS(o):a?new hS(o):new dS(o)})(this.options),new rS(t)));var t},n.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},n.prototype.registerName=function(t,i){if(Fc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},n.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(Fc(t),a)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Fc(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n})(),mS=/&/g,gS=/^\s*\/\/.*$/gm;function e2(n,t){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=e2(i.children,t)),i})}function yS(n){var t,i,a,o=so,u=o.options,d=u===void 0?so:u,p=o.plugins,m=p===void 0?Kh:p,g=function(S,R,M){return M.startsWith(i)&&M.endsWith(i)&&M.replaceAll(i,"").length>0?".".concat(t):S},v=m.slice();v.push(function(S){S.type===zh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(mS,i).replace(a,g))}),d.prefix&&v.push(B4),v.push(P4);var w=function(S,R,M,B){R===void 0&&(R=""),M===void 0&&(M=""),B===void 0&&(B="&"),t=B,i=R,a=new RegExp("\\".concat(i,"\\b"),"g");var P=S.replace(gS,""),G=k4(M||R?"".concat(M," ").concat(R," { ").concat(P," }"):P);d.namespace&&(G=e2(G,d.namespace));var X=[];return vh(G,z4(v.concat(L4(function(et){return X.push(et)})))),X};return w.hash=m.length?m.reduce(function(S,R){return R.name||du(15),Js(S,R.name)},G_).toString():"",w}var xS=new t2,Zp=yS(),n2=Rt.createContext({shouldForwardProp:void 0,styleSheet:xS,stylis:Zp});n2.Consumer;Rt.createContext(void 0);function Tx(){return q.useContext(n2)}var vS=(function(){function n(t,i){var a=this;this.inject=function(o,u){u===void 0&&(u=Zp);var d=a.name+u.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,u(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,$m(this,function(){throw du(12,String(a.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=Zp),this.name+t.hash},n})(),_S=function(n){return n>="A"&&n<="Z"};function Sx(n){for(var t="",i=0;i<n.length;i++){var a=n[i];if(i===1&&a==="-"&&n[0]==="-")return n;_S(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var i2=function(n){return n==null||n===!1||n===""},r2=function(n){var t,i,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!i2(u)&&(Array.isArray(u)&&u.isCss||oo(u)?a.push("".concat(Sx(o),":"),u,";"):Zl(u)?a.push.apply(a,xh(xh(["".concat(o," {")],r2(u),!1),["}"],!1)):a.push("".concat(Sx(o),": ").concat((t=o,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in $4||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Xa(n,t,i,a){if(i2(n))return[];if(Bm(n))return[".".concat(n.styledComponentId)];if(oo(n)){if(!oo(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return Xa(o,t,i,a)}var u;return n instanceof vS?i?(n.inject(i,a),[n.getName(a)]):[n]:Zl(n)?r2(n):Array.isArray(n)?Array.prototype.concat.apply(Kh,n.map(function(d){return Xa(d,t,i,a)})):[n.toString()]}function ES(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(oo(i)&&!Bm(i))return!1}return!0}var bS=Y_(Fh),wS=(function(){function n(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&ES(t),this.componentId=i,this.baseHash=Js(bS,i),this.baseStyle=a,t2.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ga(o,this.staticRulesId);else{var u=Ex(Xa(this.rules,t,i,a)),d=Xp(Js(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,d)){var p=a(u,".".concat(d),void 0,this.componentId);i.insertRules(this.componentId,d,p)}o=Ga(o,d),this.staticRulesId=d}else{for(var m=Js(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var S=Ex(Xa(w,t,i,a));m=Js(m,S+v),g+=S}}if(g){var R=Xp(m>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,a(g,".".concat(R),void 0,this.componentId)),o=Ga(o,R)}}return o},n})(),a2=Rt.createContext(void 0);a2.Consumer;var vp={};function TS(n,t,i){var a=Bm(n),o=n,u=!xp(n),d=t.attrs,p=d===void 0?Kh:d,m=t.componentId,g=m===void 0?(function(ct,Z){var ft=typeof ct!="string"?"sc":gx(ct);vp[ft]=(vp[ft]||0)+1;var C="".concat(ft,"-").concat(Y4(Fh+ft+vp[ft]));return Z?"".concat(Z,"-").concat(C):C})(t.displayName,t.parentComponentId):m,v=t.displayName,w=v===void 0?(function(ct){return xp(ct)?"styled.".concat(ct):"Styled(".concat(Q4(ct),")")})(n):v,S=t.displayName&&t.componentId?"".concat(gx(t.displayName),"-").concat(t.componentId):t.componentId||g,R=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,M=t.shouldForwardProp;if(a&&o.shouldForwardProp){var B=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;M=function(ct,Z){return B(ct,Z)&&P(ct,Z)}}else M=B}var G=new wS(i,S,a?o.componentStyle:void 0);function X(ct,Z){return(function(ft,C,I){var j=ft.attrs,O=ft.componentStyle,k=ft.defaultProps,z=ft.foldedComponentIds,N=ft.styledComponentId,ue=ft.target,ne=Rt.useContext(a2),J=Tx(),ht=ft.shouldForwardProp||J.shouldForwardProp,yt=K4(C,ne,k)||so,Ct=(function(jt,_t,ge){for(var zt,Me=vn(vn({},_t),{className:void 0,theme:ge}),Di=0;Di<jt.length;Di+=1){var qn=oo(zt=jt[Di])?zt(Me):zt;for(var on in qn)Me[on]=on==="className"?Ga(Me[on],qn[on]):on==="style"?vn(vn({},Me[on]),qn[on]):qn[on]}return _t.className&&(Me.className=Ga(Me.className,_t.className)),Me})(j,C,yt),V=Ct.as||ue,at={};for(var lt in Ct)Ct[lt]===void 0||lt[0]==="$"||lt==="as"||lt==="theme"&&Ct.theme===yt||(lt==="forwardedAs"?at.as=Ct.forwardedAs:ht&&!ht(lt,V)||(at[lt]=Ct[lt]));var ut=(function(jt,_t){var ge=Tx(),zt=jt.generateAndInjectStyles(_t,ge.styleSheet,ge.stylis);return zt})(O,Ct),gt=Ga(z,N);return ut&&(gt+=" "+ut),Ct.className&&(gt+=" "+Ct.className),at[xp(V)&&!H_.has(V)?"class":"className"]=gt,I&&(at.ref=I),q.createElement(V,at)})(et,ct,Z)}X.displayName=w;var et=Rt.forwardRef(X);return et.attrs=R,et.componentStyle=G,et.displayName=w,et.shouldForwardProp=M,et.foldedComponentIds=a?Ga(o.foldedComponentIds,o.styledComponentId):"",et.styledComponentId=S,et.target=a?o.target:n,Object.defineProperty(et,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ct){this._foldedDefaultProps=a?(function(Z){for(var ft=[],C=1;C<arguments.length;C++)ft[C-1]=arguments[C];for(var I=0,j=ft;I<j.length;I++)Wp(Z,j[I],!0);return Z})({},o.defaultProps,ct):ct}}),$m(et,function(){return".".concat(et.styledComponentId)}),u&&Z_(et,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),et}function Ax(n,t){for(var i=[n[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],n[a+1]);return i}var Rx=function(n){return Object.assign(n,{isCss:!0})};function SS(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(oo(n)||Zl(n))return Rx(Xa(Ax(Kh,xh([n],t,!0))));var a=n;return t.length===0&&a.length===1&&typeof a[0]=="string"?Xa(a):Rx(Xa(Ax(a,t)))}function Jp(n,t,i){if(i===void 0&&(i=so),!t)throw du(1,t);var a=function(o){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return n(t,i,SS.apply(void 0,xh([o],u,!1)))};return a.attrs=function(o){return Jp(n,t,vn(vn({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Jp(n,t,vn(vn({},i),o))},a}var s2=function(n){return Jp(TS,n)},A=s2;H_.forEach(function(n){A[n]=s2(n)});const _p=A.a`
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
`;function Fm({label:n,href:t="#",active:i=!1,onClick:a,style:o,target:u,rel:d}){const p="/TU2025gradulate/",m=/^https?:\/\//i.test(t)||t?.startsWith("mailto:")||t?.startsWith("tel:");let g,v=!1;!m&&t&&(t.startsWith(p)?(g="/"+t.slice(p.length).replace(/^\/+/,""),v=!0):t.startsWith("/")&&(g=t,v=!0),t===p&&(g="/",v=!0));const S={"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-label":n,onKeyDown:R=>{a&&(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(R))},onClick:a,style:o,$active:i};return v?x.jsx(_p,{as:_o,to:g,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):t?x.jsx(_p,{href:t,target:u,rel:d,...S,children:x.jsx("span",{className:"navbtn-text",children:n})}):x.jsx(_p,{as:"button",type:"button",...S,style:{background:"none",border:0,...o},children:x.jsx("span",{className:"navbtn-text",children:n})})}Fm.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const AS=({isOpen:n=!1,size:t=28,color:i="#fff",...a})=>{const o=Math.max(2,Math.round(t/14)),u=t/2,d=Math.round(t*.28);if(n)return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("line",{x1:u-d,y1:u-d,x2:u+d,y2:u+d,stroke:i,strokeWidth:o,strokeLinecap:"round"}),x.jsx("line",{x1:u-d,y1:u+d,x2:u+d,y2:u-d,stroke:i,strokeWidth:o,strokeLinecap:"round"})]});const p=o,m=o/2;return x.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",...a,children:[x.jsx("rect",{x:0,y:u-d-p/2,width:t,height:p,rx:m,fill:i}),x.jsx("rect",{x:0,y:u-p/2,width:t,height:p,rx:m,fill:i}),x.jsx("rect",{x:0,y:u+d-p/2,width:t,height:p,rx:m,fill:i})]})},pe=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark",GRADIENT_DARK:"gradient_dark"}),RS=A.header`
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
`,IS=A.div`
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
`,CS=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,jS=A.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,DS=A.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 1450px) {
    display: none;
  }
`,NS=A.button`
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
`,MS=A.div`
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
`,OS=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,VS=A(Fm)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,kS=A.div`
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
`,US=A.div`
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
`;function o2({items:n=[],activeKey:t,mode:i,onModeChange:a,autoOnScroll:o=!1,scrollThreshold:u=8,sticky:d=!0,maxWidth:p,overlay:m=!1}){const[g,v]=q.useState(!1),[w,S]=q.useState(pe.GRADIENT),R=typeof i=="string",M=R?i:w,B=q.useRef(R?i:w);q.useEffect(()=>{if(!R)return;(window.scrollY||document.documentElement.scrollTop||0)<=u&&(B.current=i)},[i,R,u]),q.useEffect(()=>{if(!o)return;const O=()=>{const k=window.scrollY||document.documentElement.scrollTop||0,z=B.current||pe.GRADIENT_DARK,N=k>u?pe.DARK:z;R||S(N),a&&a(N)};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>window.removeEventListener("scroll",O)},[o,R,a,u]);const{baseColor:P,gradient:G,textColor:X,boxShadow:et,showGradient:ct}=q.useMemo(()=>{switch(M){case pe.LIGHT:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",gradient:"rgba(255,255,255,1)",textColor:"#000",showGradient:!0};case pe.DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!0};case pe.GRADIENT_DARK:return{baseColor:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 100%)",gradient:"linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 100%)",textColor:"#fff",showGradient:!1};default:return{baseColor:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",gradient:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000",showGradient:!1}}},[M]),C=M===pe.DARK||M===pe.GRADIENT_DARK||g,I=C?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",j=n.filter(O=>O.label!=="SHOWROOM");return q.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),x.jsxs(RS,{role:"banner",$sticky:d,$overlay:m,$baseColor:P,$gradient:G,$showGradient:ct,$textColor:X,$boxShadow:et,children:[x.jsx(IS,{$maxWidth:p,children:x.jsxs(CS,{children:[x.jsxs(jS,{children:[x.jsx(_o,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:x.jsx(kS,{"aria-hidden":!0,children:x.jsx(US,{children:x.jsx("div",{style:{backgroundImage:`url(${I})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),x.jsx(DS,{"aria-label":"주 메뉴",children:n.map(O=>x.jsx(Fm,{label:O.label,href:O.href,active:O.key===t},O.key))})]}),x.jsx(NS,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>v(O=>!O),children:x.jsx(AS,{isOpen:g,size:24,color:C?"#fff":"#000"})})]})}),x.jsx(MS,{$open:g,onClick:()=>v(!1),children:x.jsx(OS,{onClick:O=>O.stopPropagation(),children:j.map(O=>x.jsx(VS,{label:O.label,href:O.href,active:O.key===t,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>v(!1)},O.key))})})]})}o2.propTypes={items:W.arrayOf(W.shape({key:W.string.isRequired,label:W.string.isRequired,href:W.string})),activeKey:W.string,mode:W.oneOf([pe.GRADIENT,pe.LIGHT,pe.DARK,pe.GRADIENT_DARK]),onModeChange:W.func,autoOnScroll:W.bool,scrollThreshold:W.number,sticky:W.bool,overlay:W.bool,maxWidth:W.oneOfType([W.string,W.number])};const Km="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",PS=A.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,zS=A.div`
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
`,LS=A.div`
  font-family: ${Km};
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
`,BS=A.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${Km};
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
`,Ix=A.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,$S=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${Km};
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
`,FS=A.div`
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
`,Cx=A.a`
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
`;function l2({title:n="잔향 : 기억의 향기",nav:t=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:i=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:a={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:o=1220,sidePadding:u=350}){return x.jsx(PS,{role:"contentinfo",children:x.jsxs(zS,{$sidePadding:u,$maxWidth:o,children:[x.jsx(LS,{children:n}),x.jsx(BS,{"aria-label":"푸터 메뉴",children:t.map(d=>{const p=d.href||"#",m=/^https?:\/\//i.test(p),g="/TU2025gradulate/";let v=p;return m||(p===g?v="/":p.startsWith(g)&&(v="/"+p.slice(g.length).replace(/^\/+/,""))),m?x.jsx(Ix,{href:p,children:d.label},d.label):x.jsx(Ix,{as:_o,to:v,children:d.label},d.label)})}),x.jsx($S,{children:i.map((d,p)=>x.jsx("div",{children:d},p))}),x.jsxs(FS,{$sidePadding:u,children:[a?.youtube?.href&&x.jsx(Cx,{href:a.youtube.href,"aria-label":a.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:x.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),a?.instagram?.href&&x.jsx(Cx,{href:a.instagram.href,"aria-label":a.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}l2.propTypes={title:W.string,nav:W.arrayOf(W.shape({label:W.string.isRequired,href:W.string.isRequired})),copyright:W.arrayOf(W.string),social:W.shape({youtube:W.shape({href:W.string,label:W.string}),instagram:W.shape({href:W.string,label:W.string})}),maxWidth:W.number,sidePadding:W.number};const ji="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",KS=A.div`
  position: relative; background: #fff;
`,qS=A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;function jx({children:n}){return x.jsx(KS,{children:x.jsx(qS,{children:n})})}const HS=A.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${ji}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 98px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`,GS=A.div`
  font-family: ${ji}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
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
`;function YS(){return x.jsxs(x.Fragment,{children:[x.jsx(HS,{children:"CREDITS"}),x.jsx(GS,{children:"잔향 : 기억의 향기"})]})}const QS=A.p`
  max-width: 374px;
  font-family: ${ji};
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
`,XS=A.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`,WS=A.div`
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
`,ZS=A.div`
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
`,JS=A.div`
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
`,u2=A.div`
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
`;function tA({text:n}){return x.jsxs(XS,{children:[x.jsx(u2,{}),x.jsx(WS,{}),x.jsx(QS,{dangerouslySetInnerHTML:{__html:n}})]})}const eA=A.div`
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
`,nA=A.div`
  width: 800px; height: 450px; background: #FFF4ED; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`,iA=A.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${ji};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;function rA({children:n}){return x.jsx(nA,{children:x.jsx(iA,{children:n})})}const aA=A.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`,sA=A.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`,oA=A.div`
  font-family: ${ji}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`,lA=A.p`
  font-family: ${ji}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;function uA({blocks:n}){return x.jsxs(aA,{children:[x.jsx(u2,{}),n.map(t=>x.jsxs(sA,{children:[x.jsx(oA,{children:t.title}),x.jsx(lA,{dangerouslySetInnerHTML:{__html:t.body}})]},t.title))]})}const cA=A.div`
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
`,hA=A.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`,dA=A.div`
  font-family: ${ji}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`,fA=A.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function pA({title:n,rows:t,last:i=!1}){return x.jsxs(cA,{$last:i,children:[x.jsx(hA,{children:x.jsx(dA,{children:n})}),x.jsx(fA,{children:t.map((a,o)=>x.jsx(_A,{ko:a.ko,en:a.en,divider:t.length>1&&o!==t.length-1},a.ko+a.en+o))})]})}const mA=A.div`
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
`,gA=A.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`,yA=A.div`
  font-family: ${ji};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`,xA=A.div`
  display: flex; align-items: center;
`,vA=A.div`
  font-family: ${ji};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;function _A({ko:n,en:t,divider:i=!1}){return x.jsxs(mA,{$divider:i,children:[x.jsx(gA,{children:x.jsx(yA,{children:n})}),x.jsx(xA,{children:x.jsx(vA,{children:t})})]})}const EA=A.div`
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
`,bA=A.div`
  display: flex;
  position: relative;
  font-family: ${ji};
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
`;function wA(){const n='안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.',t=[{title:"학부장의 말씀",body:"스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다."},{title:"학과 소개",body:"한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다."},{title:"웹사이트팀 제작 후기",body:"2025년 졸업전시 잔향의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준 입니다. 25년 5월부터 컨셉이 정해진 이래 150일에 걸쳐 개발한 사이트가 이렇게 완성되어 무척 감격스럽습니다. 이하생략 이이 졸려 이제 잘테다 히히 아무도 나를 막을 수 업다!!"}],i=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin Hyomin"},{ko:"정민호",en:"Jung Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soyi"},{ko:"문나라",en:"Moon Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Koo Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Park Hyeseong"},{ko:"석동현",en:"Suk Donghyun"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return x.jsxs("div",{style:{position:"relative"},children:[x.jsxs(jx,{children:[x.jsx(YS,{}),x.jsxs(eA,{children:[x.jsx(tA,{text:n}),x.jsx(rA,{children:"단체사진 1장"})]})]}),x.jsxs(jx,{children:[x.jsx(uA,{blocks:t}),x.jsxs(EA,{children:[x.jsx(JS,{}),x.jsxs(bA,{children:[x.jsx(ZS,{}),"2025 잔향",x.jsx("br",{}),"제 20대 졸업전시위원회"]}),i.map(a=>x.jsx(pA,{title:a.title,rows:a.rows,last:!!a.last},a.title))]})]})]})}const TA=A.div`
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
`,SA=A.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,AA=A.img`
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
`,RA=A.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,IA=A.div`
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
`,Dx=A.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,CA=A.h1`
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
`,oh=A.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
   @media (max-width: 393px) {
    font-size: 5px;
  }
`,jA=A(oh)`
 @media (max-width: 640px) {
    display: none;
 }`;function qm({nameKor:n,nameEng:t,role:i,sns:a,eMail:o,imgSrc:u,imgAlt:d}){return x.jsxs(TA,{children:[x.jsxs(SA,{children:[x.jsx(AA,{src:u,alt:d}),x.jsx(RA,{})]}),x.jsxs(IA,{children:[x.jsxs(Dx,{style:{top:"50px"},children:[x.jsx(CA,{children:n}),x.jsx(oh,{children:t})]}),x.jsxs(Dx,{children:[x.jsx(oh,{children:i}),typeof a=="string"&&a.trim()&&a!=="-"?x.jsx(oh,{children:a}):Array.isArray(a)&&a.length>0?x.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:a.map((p,m)=>x.jsx("span",{style:{wordBreak:"break-all"},children:p.handle||p.url},`${p.platform}-${m}`))}):"-",x.jsx(jA,{children:o?x.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${o}`,children:o}):null})]})]})]})}qm.defaultProps={sns:[]};qm.propTypes={nameKor:W.string.isRequired,nameEng:W.string,role:W.string,sns:W.arrayOf(W.shape({platform:W.string.isRequired,url:W.string.isRequired})),eMail:W.string,imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};const DA=A.div`
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
`,NA=A.div`
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
`,c2=A.p`
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
`,MA=A(c2)`
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
`;function tm({path:n="student",isActive:t=!1,onClick:i}){return x.jsxs(DA,{onClick:i,children:[x.jsx(c2,{$active:t,children:"교수"}),x.jsx(MA,{$active:t,children:"학생"}),x.jsx(NA,{$active:t})]})}tm.propTypes={path:W.oneOf(["student","professor"]),isActive:W.bool,onClick:W.func};const Nx=A.a`
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
`,Mx=A.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;function lh({label:n,href:t=null,active:i=!1,onClick:a,style:o,target:u,rel:d}){const m={"aria-current":i?"page":void 0,"data-active":i?"true":"false",onKeyDown:g=>{a&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),a(g))},"data-label":n,onClick:a,style:o,$active:i};return t?x.jsx(Nx,{href:t,target:u,rel:d,...m,children:x.jsx(Mx,{className:"navbtn-text",children:n})}):x.jsx(Nx,{as:"button",type:"button",...m,style:{background:"none",border:0,...o},children:x.jsx(Mx,{className:"navbtn-text",children:n})})}lh.propTypes={label:W.string.isRequired,href:W.string,active:W.bool,onClick:W.func,style:W.object,target:W.string,rel:W.string};const h2=A.div`
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
`,OA=A(h2)`
  justify-content: flex-start;
`,Ox=A.div`
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
`,d2=A.p`
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
`,VA=A(d2)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;function Hm({label:n,style:t,mode:i}){const a="/TU2025gradulate/",u=window.matchMedia("(max-width: 640px)").matches?`${a}icons/dropDownMobileIcon.svg`:`${a}icons/arrowDropdownIcon.svg`;return i==="category"?x.jsxs(OA,{style:t,children:[x.jsx(VA,{children:n}),x.jsx(Ox,{children:x.jsx("img",{src:`${a}icons/arrowDropdownIcon.svg`,alt:"dropdownIcon"})})]}):x.jsxs(h2,{style:t,children:[x.jsx(d2,{children:n}),x.jsx(Ox,{children:x.jsx("img",{src:u,alt:"dropdownIcon"})})]})}Hm.propTypes={label:W.string.isRequired,style:W.object};const kA=A.div`
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
`,UA=A.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,PA=A.p`
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
`;function f2({options:n,onSelect:t,style:i,isOpen:a,position:o,selected:u}){return x.jsx(kA,{style:i,$open:a,children:n.map((d,p)=>x.jsx(UA,{onClick:()=>t(d),children:x.jsx(PA,{$selected:d===u,children:d})},p))})}f2.propTypes={options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,isOpen:W.bool,position:W.any,selected:W.string};const zA=A.div`
  position: relative;
`;function Gm({label:n,options:t,onSelect:i,style:a,filter:o,mode:u}){const[d,p]=Rt.useState(!1),[m,g]=Rt.useState({top:0,left:0}),v=Rt.useRef(null),w=()=>{if(v.current){const R=v.current.getBoundingClientRect();g({top:R.bottom+window.scrollY,left:R.left+window.scrollX})}p(R=>!R)},S=R=>{i&&i(R),p(!1)};return x.jsxs(zA,{ref:v,style:a,children:[x.jsx("div",{onClick:w,children:x.jsx(Hm,{label:n,options:t,onSelect:i,style:{},filter:o,mode:u})}),x.jsx(f2,{options:t,onSelect:S,style:{},isOpen:d,position:m,selected:n})]})}Gm.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,filter:W.string};Gm.defaultProps={style:{},filter:""};const LA=A.div`
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
`,BA=A.div`
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
`,$A=A.div`
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
`;function p2({options:n,isOpen:t,onSelect:i,selected:a}){return x.jsx(LA,{$open:t,children:x.jsx(BA,{$open:t,children:n.map((o,u)=>x.jsx($A,{$selected:a===o,onClick:()=>i(o),children:o},u))})})}p2.propTypes={options:W.arrayOf(W.string).isRequired,isOpen:W.bool.isRequired,onSelect:W.func.isRequired,selected:W.oneOfType([W.string,W.number])};const FA=A.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;function Fl({label:n,options:t,onSelect:i,style:a,mode:o}){const[u,d]=Rt.useState(!1),p=Rt.useRef(null),m=()=>{d(v=>!v)},g=v=>{i&&i(v),d(!1)};return x.jsxs(FA,{ref:p,style:a,children:[x.jsx("div",{onClick:m,children:x.jsx(Hm,{label:n,mode:o})}),x.jsx(p2,{options:t,onSelect:g,isOpen:u,selected:n})]})}Fl.propTypes={label:W.string.isRequired,options:W.arrayOf(W.string).isRequired,onSelect:W.func.isRequired,style:W.object,mode:W.string};Fl.defaultProps={style:{},mode:"category"};const Ep=A.div`
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
`,bp=A.div`
  width: 120px;
  height: 100%;
  @media (max-width: 1450px) {
    display: none;
  }
`,wp=A.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1450px) {
    display: none;
  }
`,Tp=A.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;function m2({onCategoryChange:n,onToggleChange:t,type:i,onSortChange:a,sortLabel:o}){const u={type:i},[d,p]=Rt.useState(!1),m=()=>p(Z=>{const ft=!Z;return t&&t(ft),ft}),[g,v]=Rt.useState("전체"),[w,S]=Rt.useState("All Projects"),R=["전체","산업디자인공학","미디어디자인공학"],M=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],B=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],P=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[G,X]=Rt.useState("이름순"),et=o||G,ct=Z=>{X(Z),a&&a(Z)};return q.useEffect(()=>{v(d?M[0]:R[0])},[d]),u.type==="project"?x.jsxs(Ep,{children:[x.jsx(bp,{}),x.jsx(wp,{children:B.map(Z=>x.jsx(lh,{label:Z,active:w===Z,onClick:()=>{S(Z),n&&n(Z)}},Z))}),x.jsx(Tp,{children:x.jsx(Fl,{mode:"category",label:w,options:B,onSelect:Z=>{S(Z),n&&n(Z)}})}),x.jsx(Gm,{label:et,options:P,onSelect:ct})]}):d?x.jsxs(Ep,{children:[x.jsx(bp,{}),x.jsx(wp,{children:M.map(Z=>x.jsx(lh,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(Tp,{children:x.jsx(Fl,{mode:"category",label:g,options:M,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(tm,{path:d?"professor":"student",isActive:d,onClick:m})]}):x.jsxs(Ep,{children:[x.jsx(bp,{}),x.jsx(wp,{children:R.map(Z=>x.jsx(lh,{label:Z,active:g===Z,onClick:()=>{v(Z),n&&n(Z)}},Z))}),x.jsx(Tp,{children:x.jsx(Fl,{mode:"category",label:g,options:R,onSelect:Z=>{v(Z),n&&n(Z)}})}),x.jsx(tm,{path:d?"professor":"student",isActive:d,onClick:m})]})}const KA=A.div`
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
`,qA=A.div`
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
`,HA=A.img`
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
`,GA=A.div`
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
`,YA=A.p`
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
`,Kc=A.div`
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
`,qc=A.p`
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
`,Vx=A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Hc=A.p`
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
`;function Ym({nameKor:n,rank:t,eMail:i,education:a,field:o,imgSrc:u,imgAlt:d}){const p=m=>Array.isArray(m)?x.jsx(Vx,{children:m.map((g,v)=>x.jsx(Hc,{children:g},v))}):typeof m=="string"&&m?x.jsx(Vx,{children:x.jsx(Hc,{children:m})}):null;return x.jsx(KA,{children:x.jsxs(qA,{children:[x.jsx(HA,{src:u,alt:d}),x.jsxs(GA,{children:[x.jsx(YA,{children:n}),x.jsxs(Kc,{children:[x.jsx(qc,{children:"직위(직급)"}),x.jsx(Hc,{children:t})]}),x.jsxs(Kc,{children:[x.jsx(qc,{children:"이메일"}),x.jsx(Hc,{children:i})]}),x.jsxs(Kc,{children:[x.jsx(qc,{children:"약력"}),p(a)]}),x.jsxs(Kc,{children:[x.jsx(qc,{children:"전문 분야"}),p(o)]})]})]})})}Ym.propTypes={nameKor:W.string.isRequired,rank:W.string.isRequired,eMail:W.string.isRequired,education:W.oneOfType([W.string,W.arrayOf(W.string)]),field:W.oneOfType([W.string,W.arrayOf(W.string)]),imgSrc:W.string.isRequired,imgAlt:W.string.isRequired};Ym.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Qm=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"3D Modeler","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0404@gmail.com","sns":"-","imgUrl":"../image/0/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Product Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"harczail.76@gmail.com","sns":"@_archive.hynn","imgUrl":"../image/1/portrait.jpg","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"3d Product Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"@se_o.o_","imgUrl":"../image/2/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"soolu202@naver.com","sns":"@sol20_27","imgUrl":"../image/3/portrait.jpg","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"yejk63@gmail.com","sns":"@yeahz_n","imgUrl":"../image/4/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"@dlsghl01_","imgUrl":"../image/5/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoobeenkwon@gmail.com","sns":"@yoovebeen","imgUrl":"../image/6/portrait.jpg","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"@j_minee_e","imgUrl":"../image/7/portrait.jpg","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Mobility Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"@krkdals.m","imgUrl":"../image/8/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@tukorea.ac.kr","sns":"@gi_yunk","imgUrl":"../image/9/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Product Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongdongju3144@naver.com","sns":"@doongjuu_","imgUrl":"../image/10/portrait.jpg","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Product Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"@eneu201@gmail.com","sns":"@mskk.01","imgUrl":"../image/11/portrait.jpg","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"@ssal._.bap","imgUrl":"../image/12/portrait.jpg","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"UXUI Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"@sorisorry_","imgUrl":"../image/13/portrait.jpg","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Industrial Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"kkye.0204@gmail.com","sns":"@_y.rin_","imgUrl":"../image/14/portrait.jpg","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Front-End, UI/UX Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"@yeah_jun_0228","imgUrl":"../image/15/portrait.jpg","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Front Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon0722@gmail.com","sns":"@0123456789on","imgUrl":"../image/16/portrait.jpg","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"thtpwl39@tukorea.ac.kr","sns":"@kyuunsoo","imgUrl":"../image/17/portrait.jpg","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"3D Modeling","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9063@gmail.com","sns":"@kimyyuun","imgUrl":"../image/18/portrait.jpg","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"UX/UI, HTML Coder","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun58@gmail.com","sns":"-","imgUrl":"../image/19/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Art Director & 2D","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"@oui_parfum_tuk23","imgUrl":"../image/20/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Concept, Rendering","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"@istriioi","imgUrl":"../image/21/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Product Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"mns816@turkorea.ac.kr","sns":"@mnsul_2","imgUrl":"../image/22/portrait.jpg","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"@ga_rim__","imgUrl":"../image/23/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Prototype","department":0,"professorId":"p05","studentId":2020192012,"eMail":"dkyung1919@naver.com","sns":"@munamunyeojung.9","imgUrl":"../image/24/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Interaction Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"@heejae_po","imgUrl":"../image/25/portrait.jpg","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"3D Modeling","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"@iam._.es","imgUrl":"../image/26/portrait.jpg","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Product Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"@nnoom_r","imgUrl":"../image/27/portrait.jpg","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Art Director","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"@puer.deisgn","imgUrl":"../image/28/portrait.jpg","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Art Director","department":0,"professorId":"p00","studentId":2022192010,"eMail":"hime4ma.y@gmail.com","sns":"@kid.mugi","imgUrl":"../image/29/portrait.jpg","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Application Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"@min.gyu7791","imgUrl":"../image/30/portrait.jpg","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Product Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"@ps.zer0","imgUrl":"../image/31/portrait.jpg","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Prototype","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"@p5_baguette","imgUrl":"../image/32/portrait.jpg","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Product Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"@yejin6607","imgUrl":"../image/33/portrait.jpg","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"3D Graphics","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@tukorea.ac.kr","sns":"@jaemino_ob","imgUrl":"../image/34/portrait.jpg","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"2022192012@tukorea.ac.kr","sns":"-","imgUrl":"../image/35/portrait.jpg","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo020128@gmail.com","sns":"@dujs_b","imgUrl":"../image/36/portrait.jpg","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Front Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"2022192014@tukorea.ac.kr","sns":"-","imgUrl":"../image/37/portrait.jpg","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer Director","department":0,"professorId":"p04","studentId":2022190039,"eMail":"parkhyun920@naver.com","sns":"-","imgUrl":"../image/38/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Furniture Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"@comet_design02","imgUrl":"../image/39/portrait.jpg","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"2021190021@tukorea.ac.kr","sns":"-","imgUrl":"../image/40/portrait.jpg","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"UX/UI Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"your3ami@tukorea.ac.kr","sns":"-","imgUrl":"../image/41/portrait.jpg","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Industrial Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"mil2021@tukorea.ac.kr","sns":"-","imgUrl":"../image/42/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Product Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"eifasfkifk@gmail.com","sns":"-","imgUrl":"../image/43/portrait.jpg","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Graphic designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@naver.com","sns":"@oeuvreb","imgUrl":"../image/44/portrait.jpg","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"UI/UX,HTML Coder","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"@yeonju._0","imgUrl":"../image/45/portrait.jpg","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Living Product Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"swj000324@gmail.com","sns":"@wonjin0324","imgUrl":"../image/46/portrait.jpg","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Visual Director","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"@hyun_108","imgUrl":"../image/47/portrait.jpg","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"JS, Flask Prototype","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"-","imgUrl":"../image/48/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"@u_seung0830","imgUrl":"../image/49/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Creative Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"@7.27_v","imgUrl":"../image/50/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"UX/UI Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"@sanamonii","imgUrl":"../image/51/portrait.jpg","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"grace04god@tukorea.ac.kr","sns":"-","imgUrl":"../image/52/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"PM · UX/UI · Dev","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"@krhee_o","imgUrl":"../image/53/portrait.jpg","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"@tlaxotjq","imgUrl":"../image/54/portrait.jpg","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"iltkddms@tukorea.ac.kr","sns":"@in_saengeun","imgUrl":"../image/55/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"UX/UI, Prototype","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeommin2528@gmail.com","sns":"-","imgUrl":"../image/56/portrait.jpg","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Modeling, UX/UI","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"@dbtn_246","imgUrl":"../image/57/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Modeling, Rendering","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"-","imgUrl":"../image/58/portrait.jpg","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Product Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"@hi_seoheeeee","imgUrl":"../image/59/portrait.jpg","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Art Director","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"@bpink._.j","imgUrl":"../image/60/portrait.jpg","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Product,Graphic","department":0,"professorId":"p01","studentId":2022192038,"eMail":"inacutewaytoday@gmail.com","sns":"-","imgUrl":"../image/61/portrait.jpg","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Mobility Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@tukorea.ac.kr","sns":"@dl_doh","imgUrl":"../image/62/portrait.jpg","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Product Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"-","imgUrl":"../image/63/portrait.jpg","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Front Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"@leesang2001","imgUrl":"../image/64/portrait.jpg","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Product Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003@tukorea.ac.kr","sns":"@username","imgUrl":"../image/65/portrait.jpg","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Product Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"roiray0320@gmail.com","sns":"@6amtol","imgUrl":"../image/66/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"@eedndcks","imgUrl":"../image/67/portrait.jpg","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Graphic, 3D, UI/UX","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"@jun_duck0421","imgUrl":"../image/68/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"UX/UI, Prototype","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"@minigmin_1004","imgUrl":"../image/69/portrait.jpg","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Drone Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"lanius4257@tukorea.ac.kr","sns":"@__jiwawa__","imgUrl":"../image/70/portrait.jpg","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"UX/UI, Front-End","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"@cvgh._.ly","imgUrl":"../image/71/portrait.jpg","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"@chae_rr","imgUrl":"../image/72/portrait.jpg","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Product Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"mondyu1024@gmail.com","sns":"@di_ed_ie","imgUrl":"../image/73/portrait.jpg","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Product Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"-","imgUrl":"../image/74/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"3d Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@tukorea.ac.kr","sns":"@idiox_1","imgUrl":"../image/75/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Product Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@tukorea.ac.kr","sns":"@im_seok01","imgUrl":"../image/76/portrait.jpg","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"UX, 3D Graphics","department":1,"professorId":"p01","studentId":2021194028,"eMail":"@jb_jeon@naver.com","sns":"@imdiverstandinoncliff","imgUrl":"../image/77/portrait.jpg","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"UX/UI Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"@moooon_suuuuuun","imgUrl":"../image/78/portrait.jpg","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Industrial Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"@j_m2nh5","imgUrl":"../image/79/portrait.jpg","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Product Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"@jhin0112__","imgUrl":"../image/80/portrait.jpg","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"3D Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar1071@gmail.com","sns":"@stopmongkki","imgUrl":"../image/81/portrait.jpg","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Visual Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jhw275@naver.com","sns":"-","imgUrl":"../image/82/portrait.jpg","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"3D Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"@11.7OK","imgUrl":"../image/83/portrait.jpg","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"UX/UI","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"-","imgUrl":"../image/84/portrait.jpg","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Visual Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"@_sh_1114_","imgUrl":"../image/85/portrait.jpg","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Robot Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"chea0000@tukorea.ac.kr","sns":"-","imgUrl":"../image/86/portrait.jpg","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"@yej1__","imgUrl":"../image/87/portrait.jpg","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Product & Visual","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"@jinsewon99","imgUrl":"../image/88/portrait.jpg","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Living Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"@hyomin_eao","imgUrl":"../image/89/portrait.jpg","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Industrial Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"@cow__tooth","imgUrl":"../image/90/portrait.jpg","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Product Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"@raincar__","imgUrl":"../image/91/portrait.jpg","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"XR Controller","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"@_.ga._.xx","imgUrl":"../image/92/portrait.jpg","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Product Design","department":0,"professorId":"p04","studentId":2021190036,"eMail":"2chaetwo@gmail.com","sns":"@1chaeone","imgUrl":"../image/93/portrait.jpg","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"UX/UI Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"@hama_pit_a_pat","imgUrl":"../image/94/portrait.jpg","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"UX/UI","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"-","imgUrl":"../image/95/portrait.jpg","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Art Director","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"@ji._.iu","imgUrl":"../image/96/portrait.jpg","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Product Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"@dent__de","imgUrl":"../image/97/portrait.jpg","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Art Director","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@gmail.com","sns":"@ghdwldnnn","imgUrl":"../image/98/portrait.jpg","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"3D Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"bvnm1234@tukorea.ac.kr","sns":"@suj2ong","imgUrl":"../image/99/portrait.jpg","category":"c0","projectNum":23,"team":0,"leader":""}]'),QA=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],Jl=JSON.parse(`[{"members":[1],"category":"c0","projectNum":0,"titleKor":"체계적인 아이디어 발전을 위한 AI기반 디자인 실험 워크스페이스","titleEng":"IDEA UNION LAB","description":"IDEA UNION LAB은 아이디어 발전 과정에서 어려움을 겪는 디자이너를 위한 AI 기반 디자인 실험실 서비스입니다. 단순히 AI에게 디자인 결과물을 요청하는 방식이 아니라 디자인 프로세스처럼 방법론의 프로세스에 따라 인사이트를 도출하며, 발전된 아이디어 및 생성 과정을 제공합니다. 이를 통해 보다 체계적으로 아이디어를 발전시킬 수 있으며 방법론을 학습할 수 있습니다.","videoId":1128192125},{"members":[16],"category":"c0","projectNum":1,"titleKor":"맵시","titleEng":"MAPSEE","description":"MAPSEE는 사용자의 취향을 분석해 생성한 퍼소나와 실제 착장을 비교함으로써, 두 스타일 간의 차이를 시각적으로 보여주는 서비스입니다. 색상·핏·무드의 유사도와 차이를 ‘패션 지도’처럼 표현하여, 사용자가 자신의 옷맵시가 어떤 방향으로 나아가고 있는지 한눈에 확인할 수 있도록 돕습니다.","videoId":1127543207},{"members":[18],"category":"c0","projectNum":2,"titleKor":"건물화재내부정찰로봇","titleEng":"RESQ","description":"화재 발생 후 골든타임을 지키기 위해서 현재 소방관인력으로만 힘든  경우가 많습니다. 고온·연기·어두운 환경에서도 자유롭게 이동하며 \\n내부를 탐색할 수 있으며, 실시간 영상 데이터를 제공해 소방관의 안전한 구조 활동을 지원합니다. ResQ는 화재 현장에서 인명 피해를 \\n최소화할 수 있습니다.   \\n있는 든든한 파트너입니다.","videoId":1128457679},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"스카이 가드 듀오","titleEng":"SKY GUARD DUO","description":"매년 증가하는 버드스트라이크 위협에 맞서는 'SKY GUARD DUO'. 이 시스템은 지상을 담당하는 자율주행 로봇과 상공을 책임지는 드론 편대로 구성된 이중 방어 솔루션입니다. AI가 위협을 탐지하면 에어캐논이 먼저 대응하고, 필요시 드론 편대가 출격하여 입체 작전을 펼칩니다. 공항 안전의 새로운 기준을 제시합니다.","videoId":1126407280},{"members":[30],"category":"c0","projectNum":4,"titleKor":"마이다꾸","titleEng":"MYDAKU","description":"MYDAKU 는 작성한 일기의 내용과 키워드를 통해 그날의 기분과 일상을 표현한 AI 스티커 제작 서비스입니다. 업로드 한 일기 사진을 바탕으로 키워드를 선택하여 감정이나 주제를 시각적으로 표현할 수 있는 AI 스티커를 제공받습니다. 또한 자동 생성된 AI 스티커를 저장하며 제작한 스티커와 키워드를 바탕으로 타 사용자와 스티커를 공유할 수 있습니다.","videoId":1126865139},{"members":[36],"category":"c0","projectNum":5,"titleKor":"레디큐","titleEng":"READYQ","description":"READYQ는 필기 자료를 인식하여 퀴즈를 생성하는 AI 기반 학습 관리 서비스입니다. 암기 학습에 어려움을 겪는 사용자를 위해 맞춤형 퀴즈를 제공하고 체계적인 기억 인출 연습을 돕습니다. 나아가 생성된 퀴즈를 통해 자연스러운 복습 기회와 효율적인 학습 관리를 지원합니다.","videoId":1127539556},{"members":[41],"category":"c0","projectNum":6,"titleKor":"조각조각","titleEng":"JOGAKJOGAK","description":"조각조각은 사용자가 키워드를 바탕으로 스토리를 작성하고, 해당 스토리에 맞춰 사진을 촬영하면 AI가 일러스트를 완성시켜 주는 게임형 서비스입니다. 캐릭터 애니메이션 요소를 통해 사용자에게 흥미를 제공하여 사진 속에 담긴 순간의 이야기와 감정을 풍부하게 표현하도록 돕습니다.","videoId":1126740651},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"팔로잉 충전 스테이션 드론","titleEng":"FOLLOWING CHARGING STATION DRONE","description":"Following Charging Station Drone은 공중급유기 기술에서 착안한 제품으로 드론을 충전해주는 이동식 충전소 역할을 수행한다.  이 충전 드론은 배터리 한계로 비행 시간이 짧았던 드론들을 충전하므로써 효율성을 극대화하고 편한 충전 방식을 제공한다.","videoId":1127151890},{"members":[43],"category":"c0","projectNum":8,"titleKor":"에이아이스마트모니터암","titleEng":"AI SMART MONITORARM","description":"AI 스마트 모니터암은 사용자의 자세를 인식해 올바르게 교정해주는 스마트 디바이스입니다. 내장된 카메라와 인공지능이 목과 어깨의 움직임을 실시간으로 감지하여 피로를 줄이고 건강한 자세 습관을 형성하도록 돕습니다.","videoId":1127217010},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"문화유산 복원 시스템 로봇","titleEng":"BIND","description":"국내 문화유산 복원 현장은 인력난과 수작업 한계로 복원율이 1%에 불과합니다. BIND는 유물 복원 작업의 효율성과 정확성을 높여 이 문제를 해결하기 위해 개발되었습니다. 레이저 세척, 3D 스캐닝, AI 모델링, 세라믹 프린팅, CNC 가공을 통합해 원본의 질감까지 재현하며, 이를 통해 소중한 문화유산을 안전하게 보존하여 미래 세대에 온전히 전달합니다.","videoId":1127032149},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"자기주도학습 강화를 위한 학습 독려 로봇","titleEng":"ENDY","description":"공부 도중 휴대전화 사용, 졸음 상황 등 사용자의 학습 상태를 고려하여 바른 학습 태도를 유지하도록 로봇이 재촉하고 시간에 따른 공부 진도를 확인하며 학습 텐션을 유지할 수 있도록 피드백을 한다. 로봇을 통한 사용자의 학습 관찰과 실시간 피드백을 가능케 하여 AI 학습 컴페니언 로봇 개발을 도모하고자 하였다.","videoId":1126889031},{"members":[54],"category":"c0","projectNum":11,"titleKor":"툰챗","titleEng":"TOONCHAT","description":"툰-챗'은 인간관계가 지속될수록 표현이 단조로워지고 단어가 생략되어 가는 온라인 채팅 환경을 만화 같은 그래픽으로 표현하여 풍부하고 즐거운 소통 경험으로 유도하는 서비스입니다. 사용자가 입력한 채팅은 각자 선택한 화풍의 그래픽으로 출력되고, 출력된 서로의 그래픽을 공유하며 새로운 소통 경험을 만듭니다.","videoId":1126711648},{"members":[59],"category":"c0","projectNum":12,"titleKor":"미래형 방범 솔루션 귀갓길 동행 드론","titleEng":"RING GUARDIAN","description":"RING GUARDIAN은 야간 귀가 중 사용자의 머리 위를 따라 이동하며 길을 비추고 주변을 기록하는 방범 드론입니다. 어둠 속에서도 안전한 동행을 제공하며, 엔젤링 형태의 조명으로 심리적 안정감을, 경찰 시스템과 연동되어 신속한 대응과 실질적 보호를 지원합니다.","videoId":1127418304},{"members":[60],"category":"c0","projectNum":13,"titleKor":"마스크 이모지","titleEng":"MASK EMOJI","description":"MASK - EMOJI는 청소년과 20~30대가 SNS 소통 속에서 ‘가면’을 쓰고 진짜 감정을 숨기는 현상에서 착안한 프로젝트입니다. 사용자는 자신만의 ‘가면’을 직접 꾸미며, AI 로봇과 친구처럼 대화하면서 감정을 자연스럽게 표현할 수 있습니다. 또한 방대한 수집 요소를 결합해 감정 표현의 새로운 방식을 제시하는 차별화된 경험을 선사합니다.","videoId":1127190833},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"위플","titleEng":"WEEPLE","description":"Weeple은 가족, 친구, 동호회 등 우리 그룹이 함께 찍은 사진과 짧은 설명을 입력하면,\\nAI가 그룹의  분위기와 특성을 분석하여 우리만의 보드게임 테마를 만들어주는 서비스입니다.\\n같이 찍은 사진이 게임으로 바뀌고, 우리만의 추억과 개성이 담긴 미션에 도전해볼 수 있습니다.\\n함께 웃고 도전하면서, 우리 그룹만의 스토리를 즐길 수 있는 보드게임 테마를 만들어보세요!","videoId":1127052600},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"수중 속 골프공 수거로봇","titleEng":"AQUATRIEVE","description":"매년 전 세계 골프장에서 유실되는 1억 개 이상의 골프공은 해양 오염과 미세플라스틱 문제를 야기합니다. 현재는 다이버가 직접 수중에 들어가 회수하지만, 어두운 환경과 공에 맞을 위험이 있습니다. 본 로봇은 자율주행으로 공을 수거하고 스테이션으로 운반해 로스트볼로 재활용하고, 이니셜·특징이 있는 공은 앱을 통해 주인에게 반환합니다.","videoId":1127036871},{"members":[71],"category":"c0","projectNum":16,"titleKor":"뮤즈","titleEng":"MUSE","description":"MUSE는 디자이너가 논문을 이해하고 실무에 바로 활용하도록 돕는 AI 기반 웹서비스입니다. AI가 논문을 분석하여 디자인 브리프, 퍼소나 스토리, 디자인 가이드라인, 관련 자료 추천, 아이디어 생성 도우미의 5가지 실무에 특화된 형태(텍스트 및 시각 자료 결합)로 재구성해 제공합니다. 도출된 인사이트는 프로젝트 폴더에 체계적으로 저장 및 관리할 수 있으며, 직관적인 UI로 효율적인 디자인 작업을 지원합니다.","videoId":1127403683},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"공항 위험물질 및 마약 탐지 로봇","titleEng":"CO-BOT","description":"마약, 폭발물, 바이러스 등 눈에 보이지 않는 위험을 빠르고 정확하게 탐지해 사고를 예방합니다.다중 센서와 AI 전자코를 이용해 공기 중 분자 변화를 분석하고, 자율주행으로 넓은 공간을 순찰합니다.탐지 정보는 실시간으로 전달되며, 검역, 마약 탐지, 폭발물 탐지 모드를 상황에 맞게 전환할 수 있습니다.이 로봇은 공항 같은 시설을 안전하게 지키는 스마트한 감시 파트너입니다.","videoId":1127049607},{"members":[76],"category":"c0","projectNum":18,"titleKor":"전기차 화재 진압 로봇","titleEng":"E-FIBOT","description":"최근 전기차 시장의 확대와 함께 전기차 화재 또한 사회적 문제로 떠오르고 있다.\\n전기차 화재 진압에서 가장 중요한 것은 신속한 소화이다.\\n\\n하지만 기존 간접 소화 방식은 완전 소화까지 약 3~4시간이 소요되어 피해 확산을 \\n막기 어렵다. 또다른 방식인 직접 소화 방식은 속도는 빠르지만 \\n폭발, 감전과 같은 위험성 때문에 쉽게 쓰기 어렵다.\\n\\n이러한 전기차 화재를 신속하고 안전하게 진압하기 위해 E-FIBOT을 개발하였다.","videoId":1127469972},{"members":[86],"category":"c0","projectNum":19,"titleKor":"해저 미세플라스틱 수거 로봇","titleEng":"Aqua Breeze","description":"Aqua Breeze는 마찰대전 발전소자를 활용한 자가발전 로봇으로 외부 전력 없이도 자율적으로 작동하며 정전기 흡착 원리를 통해 해저에 침적된 미세플라스틱을 친환경적으로 수거하여 기존의 방식으로는 처리하기 어려웠던 문제를 해결하고 이를 통해 해양 생태계와 퇴적 환경을 보호하는 지속가능한 솔루션을 제공합니다.","videoId":"-"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"노블","titleEng":"NOBLE","description":"Noble은 웹소설 집필을 원하는 사용자를 위한 메모 기반 스토리 생성 서비스입니다. 아이디어 메모를 관리하고 선택한 메모를 토대로 다양한 플롯 생성을 제공합니다. 또한 AI 편집 기능을 통해 문장을 다듬고 완성도 있는 웹소설로 발전시킬 수 있습니다. 사용자는 창작 과정의 부담을 줄이고 보다 쉽고 즐겁게 글쓰기를 이어갈 수 있습니다.","videoId":1126680452},{"members":[90],"category":"c0","projectNum":21,"titleKor":"스노모","titleEng":"SNOMO","description":"SNOMO는 겨울철 빈번히 발생하는 비닐하우스 피해를 예방하기 위해서 적설량을 자동 감지해 눈을 제거하는 비닐하우스 전용 제설 로봇입니다. 이를 통해 고령화된 농촌의 인력 소모를 줄이고, 농작물 피해와 복구 비용을 줄일 수 있습니다. 더 나아가 현재뿐만 아니라 미래에 이상 기후로 인하여 더욱 잦고 심각해질 피해에 대응하기 위해서도 필요한 제품입니다.","videoId":1127827337},{"members":[94],"category":"c0","projectNum":22,"titleKor":"초보디자이너들을 위한 실전형 학습 UX/UI 챌린지","titleEng":"RE:CHAL","description":"AI를 활용해 실제 사용자 리뷰를 분석하고, 초보 UX/UI 디자이너가 실무 감각을 기를 수 있는 과제를 자동 생성하는 학습 도구입니다. 데이터 기반의 UX 과제를 통해 사용자는 문제 해결 중심의 사고를 훈련하고, 사용자 경험을 분석하는 능력을 자연스럽게 향상시킬 수 있습니다.","videoId":1127540743},{"members":[99],"category":"c0","projectNum":23,"titleKor":"파미","titleEng":"FARMIE","description":"FARMIE는 농업 인구 감소와 고령화에 대응하여 개발된 스마트 작물보호제 살포 로봇입니다. FARMIE 실시간으로 작물 상태와 병해충을 모니터링하여 최적의 작업 경로를 자동으로 계획/실행합니다. 수집된 데이터 분석을 통해 효과적인 방제 전략을 수립하여 농작업의 효율성, 정밀도 및 효과를 크게 향상시키고 작업자의 부담을 줄이는 것을 목표로 합니다","videoId":1127428419},{"members":[3],"category":"c1","projectNum":24,"titleKor":"심부름 탐험","titleEng":"ERRAND ADVENTURE","description":"어린이의 건강한 성장과정을 위해서는 책임감과 자립심을 기르는 것이 매우 중요합니다. 이때, 심부름이 좋은 효과를 가져다주지만 아이들은 심부름 과정을 귀찮고 지루하게 여기는 경향이 있습니다. 이러한 문제를 해결하기 위해 아이들이 캐릭터와 함께 상호작용하며 놀이처럼 즐길 수 있는 탐험 컨셉의 어린이용 심부름 서비스 제작하였습니다.","videoId":1127852716},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"모티","titleEng":"MOTI","description":"MOTI는 앞날의 불확실성에 불안을 느끼는 청소년들을 위해 버킷리스트라는 목표를 세우며 보다 현실적으로 꿈에 다가갈 수 있도록 유도하는 청소년 자아실현 가이드 플랫폼입니다. 우리는 사용자의 흥미와 관심사를 바탕으로 새로운 도전과제를 제시하고, 그에 어울리는 리워드를 제시함으로써 청소년들의 끊임없는 탐구심을 이끌어냅니다.","videoId":1127523874},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"해빗","titleEng":"HAVIT","description":"HAVIT은 건강과 만족 사이에서 자신만의 균형을 찾고자 하는 이들을 위한 스마트 도시락 및 식단 관리 서비스입니다. 급격한 생활 양식의 변화와 기술 발전으로 젊은 세대의 가속 노화가 두드러진 현시점, HAVIT은 즐거움을 더한 지속 가능한 건강 관리, 즉 헬시 플레저를 추구하는 이들에게 개인화된 루틴을 통한 새로운 경험을 제안합니다.","videoId":"1127431236?h=239d5ba621"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"3D 필드 성장형 러닝서비스","titleEng":"COAK","description":"COAK은 러닝 기록을 특별한 경험으로 바꾸어 동기부여하는 서비스입니다. \\n사용자가 달린 러닝 루트를 시각화 하고 3D 필드로 생성합니다.\\n같은 루트를 반복해 달릴수록 필드의 자연 요소가 점차 성장합니다. \\n크루와 함께한 기록은 모여 하나의 숲을 이루며, 새로운 방식의 러닝 경험을 통해 지속적인 동기를 제공합니다.","videoId":1127539956},{"members":[45,19],"category":"c2","projectNum":28,"titleKor":"감정을 머물러 바라볼 수 있는 감정 기록 앱","titleEng":"Feeltr","description":"Feeltr는 감각 자극(온도, 밝기, 촉각, 청각)을 기반으로 감정을 비유하고 세부 감정을 선택해 모호한 감정을 인식하도록 돕습니다. 이후 감정이 발생한 상황과 반응을 일기로 정리하고, 개인 맞춤형 케어를 제안합니다. 감정 기록은 감정 카드로 생성되어 달력에 저장되며,  감정 변화 흐름을 직관적으로 확인하고 자기 이해와 정서 회복력을 높일 수 있습니다.","videoId":1127177184},{"members":[29],"category":"c2","projectNum":29,"titleKor":"애니키트","titleEng":"ANIKIT","description":"ANIKIT은 ‘animal’의 ‘ani’와 ‘kit’의 합성어로, 동물처럼 친근하면서 언제 어디서나 사용할 수 있는 의료 키트입니다. 차가운 의료기기의 이미지를 벗어나 아이들에게 따뜻함과 안정감을 전하며, 동물을 모티브로 한 디자인으로 자연스럽게 다가갑니다. 학교나 집 등 어디서든 아이가 스스로 건강을 관리할 수 있도록 돕는 동반자 같은 키트입니다.","videoId":1126266309},{"members":[35],"category":"c2","projectNum":30,"titleKor":"액토","titleEng":"ACTO","description":"ACTO는 식단 제안형 냉장고와 이동형 모듈 냉장고, 두 본체로 구성됩니다.\\n이동형 모듈 냉장고는 부재 중 신선식품을 대신 수령·보관하며,\\n식단 제안형 냉장고는 스마트 워치 태그 기반으로 맞춤형 식단을 제공합니다.\\n두 냉장고의 연동을 통해 ACTO는 사용자의 식습관을 분석하고,\\n건강한 생활 패턴을 관리하는 냉장고입니다.","videoId":1126763958},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"스마트 비대면 외래진료 의료기","titleEng":"VITALL^NK","description":"VitalL^nk는 의료 사각지대에 놓인 노인 환자들을 대상으로, 병원 방문 없이도 주요 건강 검진을 스스로 수행할 수 있도록 돕는 의료기기입니다. 단순한 검사 기능과 원격 진료 연결을 제공합니다. 기본적인 체온 검사는 물론, 혈당과 혈압, 심전도 측정, 손목 골밀도 검사, 초음파 검사를 통해 노인성 질환의 주요 지표도 빠르게 확인할 수 있습니다.","videoId":1126436227},{"members":[61],"category":"c2","projectNum":32,"titleKor":"소형 반려견 전용 AED 내장 산책 리드줄","titleEng":"DOG AED LEASH","description":"반려견과 함께 걷는 시간은 언제나 즐겁지만 갑작스러운 위험이 찾아올\\n수도 있습니다. 특히 소형견은 심정지 시 몇 분 안에 대응하지 못하면 큰\\n위험에 놓일 수 있습니다. 이 리드줄은 그런 순간을 대비하여 반려견 전\\n용 AED 기능을 함께 담았습니다. 평소에는 가볍게 사용할 수 있는 리드\\n줄이지만, 필요할 때는 구조 도구가 됩니다.","videoId":1127407103},{"members":[91],"category":"c2","projectNum":33,"titleKor":"메디메이트","titleEng":"MEDIMATE","description":"고령화와 의학 발전으로 현대인들은 의약품을 손쉽게 접하게 되었지만, 그만큼 방치되거나 잘못 폐기되는 의약품 또한 증가하고 있으며, 이들은 수질 오염 및 생태계 교란을 유발하게 됩니다. 따라서 사용자가 약을 안전하게 관리하고 폐기까지 책임질 수 있도록 돕는 서비스, 메디메이트를 제작했습니다. 이는 건강한 생활 습관과 지속 가능한 환경 보호에 기여할 것입니다.","videoId":1127528036},{"members":[10],"category":"c3","projectNum":34,"titleKor":"마리스","titleEng":"MARIS","description":"Maris는 선박 하부에 부착되는 따개비를 효과적으로 제거하기 위해 설계된 자율 주행 수중 로봇입니다. 라틴어로 ‘바다의, 바다를’이라는 뜻을 담은 이름처럼, 해양 환경에서 최적의 성능을 발휘하도록 제작되었습니다. 8개의 고성능 프로펠러가 탑재되어 수중에서도 안정적이고 자유로운 기동이 가능하며, 정밀한 제어를 통해 선박 하부 구역을 빈틈없이 관리할 수 있습니다. 또한 따개비 제거 장치에는 스크래퍼와 브러시가 각각 모듈화되어 있어, 스크래퍼의 날이 무뎌지거나 브러시가 손상될 경우 손쉽게 교체할 수 있습니다. 이를 통해 유지보수가 간단하고, 장기간 안정적인 성능을 보장하며, 효율적인 선체 관리로 연료 절감과 친환경 운항을 돕는 혁신적인 솔루션입니다.","videoId":1127467906},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"ESG 부산 - 스테이션","titleEng":"ESG BUSAN - STATION","description":"ESG 부산'은 부산 주요 관광지에 설치된 ESG 체험 플랫폼으로, 투명 OLED 패널, 업사이클링 키링 자판기, 플로깅 도구 대여 부스로 구성됩니다. 관광객들은 도시를 탐험하는 동안 쓰레기를 줍기 위한 집게를 대여하고, 상징적인 업사이클링 키링을 받을 수 있습니다. 이는 관광과 지속가능성의 접점을 제시하는 새로운 유형의 체험형 공공시설물입니다.","videoId":1127729155},{"members":[22],"category":"c3","projectNum":36,"titleKor":"씬킷","titleEng":"SYN:KET","description":"SYN:KET은 신디사이저, 샘플러, 비트메이커를 하나로 담은 휴대용 그루브 박스입니다.\\n사용자는 8개의 터치패드와 원형 인터페이스를 통해 리듬을 손끝으로 느끼고 조형하며,\\n음악을 ‘만드는 행위’ 에서 ‘소리를 다루는 경험’ 으로 확장된 새로운 창작의 감각을 얻게 됩니다.","videoId":1127471421},{"members":[25],"category":"c3","projectNum":37,"titleKor":"페이스:디","titleEng":"FACE:D","description":"FACE:D는 iPhone의 Face ID와 ARKit52 기술을 활용하여 사용자의 표정을 실시간으로 인식하고, 52개의 BlendShape 데이터를 기반으로 감정을 분석한다. 분석된 감정은 Unity로 제작된 상담 시뮬레이션 콘텐츠에 반영되어, 사용자의 표정에 따라 내담자의 감정 수치가 변화한다. 감정 데이터 기반의 새로운 인터랙티브 경험을 제공한다.","videoId":1127322837},{"members":[27],"category":"c3","projectNum":38,"titleKor":"모온","titleEng":"MO-ON","description":"‘모으다’와 ‘ON’의 MO-ON(모온)은 멀티모달 AI의 강력한 생성 능력을 하나의 웨어러블에 담아 현실과 가상을 넘나들며 자유롭고 직관적인 창작 경험을 제공합니다. 이로써 개개인의 창의성과 개성을 존중하는 창작자 중심의 궁극적인 AI 글래스로 완성됩니다.","videoId":1127476055},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"AI 기반 모의 인터뷰 서비스","titleEng":"PRETALK","description":"PRETALK은 인터뷰 진행자가 더 나은 사용자 경험(UX)과 깊이 있는 인사이트를 도출할 수 있도록 돕는 인터뷰 연습 서비스입니다.\\n가상의 퍼소나와 실전처럼 인터뷰를 연습하면서 질문 설계, 흐름 관리, 응답 분석까지 체계적으로 준비할 수 있으며, 실제 상황에 가까운 시뮬레이션을 통해 인터뷰 역량을 강화할 수 있습니다.","videoId":1126830637},{"members":[53],"category":"c3","projectNum":40,"titleKor":"투미","titleEng":"TO.ME","description":"to.me는 사용자의 감정과 목소리를 기반으로 스스로에게 피드백을 제공하는 일정 관리 서비스입니다.\\nAI가 사용자의 음성과 대화 스타일을 학습해, 일정 전 나의 목소리로 맞춤형 알림을 전달함으로써\\n정서적 몰입과 자기동기화를 돕는 새로운 자기조절 경험을 제공합니다.","videoId":1127548024},{"members":[67],"category":"c3","projectNum":41,"titleKor":"스트릭스","titleEng":"STRIX","description":"야간에 발생하는 조난사고는 제한된 장비와 시야 때문에 구조 시간이 지연되고, 구조대원과 조난당한 등산객 모두에게 큰 위험으로 이어집니다. 이러한 문제를 해결하기 위해 개발된 스마트 AR 헬멧 STRIX는 실시간 정보를 제공함으로써 구조대원의 판단을 지원하고, 구조 효율성과 안정성을 동시에 향상시켜 야간 구조 활동의 새로운 가능성을 제시합니다.","videoId":1127434135},{"members":[78],"category":"c3","projectNum":42,"titleKor":"ESG 부산 - 앱","titleEng":"ESG BUSAN - APP","description":"ESG 앱은 관광객이 부산 명소를 즐기며 자연스럽게 환경 활동에 참여할 수 있는 서비스입니다. ESG 스테이션에서 플로깅 도구를 대여해 미션을 수행하고, 완료 시 관광지 키링을 리워드로 받을 수 있습니다. 전 과정은 앱과 연동되어 관광, 환경 활동, 보상까지 간편하게 체험할 수 있으며, 부산의 지속가능한 가치를 전합니다.","videoId":1127754084},{"members":[92],"category":"c3","projectNum":43,"titleKor":"소프티 엔 하디","titleEng":"SOFTY & HARDY","description":"현재 존재하는 VR  콘서트는 시각과 청각에만 의존하여, 관객은 무대와 깊이 교류하지 못하고 단순한 관람에 머무르게 됩니다. 이 문제를 해결하기 위해 촉각을 더한 새로운 인터랙션을 제안합니다. 본 제품인 HARDY & SOFTY 는 무대와 관객을 이어주는 감각적인 다리 역할을 하며, 이를 통해 관객은 단순한 관람자가 아닌 참여자가 됩니다.","videoId":1127445758},{"members":[95],"category":"c3","projectNum":44,"titleKor":"포잉!","titleEng":"POING!","description":"POING!은 반려동물의 생체 신호와 행동 데이터를 기반으로, 홈캠 공간 속에서 살아 있는 듯한 디지털 반려동물을 구현합니다. 반려동물의 실제 데이터를 바탕으로 특정 상황의 행동을 재현합니다. 사용자는 반려동물의 고유한 특성과 행동 데이터를 '디지털 유산'으로 보존하여, 고유한 행동들을 생생하게 다시 경험할 수 있습니다.","videoId":1127520805},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"소-다방","titleEng":"SO-DABANG","description":"내 손 안의 작은 다방, 소-다방. 어플리케이션 속 DJ와 소통하며 음악을 감상해보세요. 그 시절 다방처럼 DJ에게 원하는 노래를 신청할 수 있습니다. 블루투스 스피커와 함께 사용하여 더 특별한 경험을 만끽하세요.","videoId":1127750387},{"members":[7],"category":"c4","projectNum":46,"titleKor":"집쿡타임","titleEng":"JipCook Time","description":"‘집쿡타임’은 집에 있는 식재료를 기반으로 맞춤형 레시피를 추천하는 서비스입니다. 사용자는 카메라 인식이나 직접 입력으로 식재료를 등록하고, 유통기한 관리도 가능합니다. 이후 조리 시간·맛·요리 종류 등 필터를 통해 원하는 조건의 레시피를 탐색할 수 있으며, GPT API를 활용한 AI가 재료에 맞춘 레시피를 자동 추천합니다. 추천된 레시피는 수정·공유가 가능해 사용자만의 커스텀 레시피로 확장됩니다.","videoId":1127762035},{"members":[11],"category":"c4","projectNum":47,"titleKor":"아쿠아링크","titleEng":"AQUALINK","description":"기존의 제습기는 실내 습도를 조절해 쾌적한 환경을 조성하지만, 이 과정에서 수집된 물은 대부분 활용하지 못한 채 버려집니다. Aqualink는 물을 버리지 않고, 재사용 가능한 자원으로 전환하여 식물 재배에 활용하는 순환형 시스템을 제안합니다. 이를 통해 자원의 활용도를 높이며 환경적 가치와 실용성을 동시에 구현합니다.","videoId":1126379564},{"members":[12],"category":"c4","projectNum":48,"titleKor":"센소","titleEng":"SENSO","description":"SEnSO는 확장현실(XR) 콘텐츠를 체험할 수 있도록 설계된 몰입형 다감각 스피커입니다. XR 환경 속 공연 콘텐츠와 연동되어 단순한 사운드 출력이 아닌, 자동 리프트, 조명 연출, 실제 바람 분사 등 다양한 감각 자극을 통합 제공합니다. 사용자는 콘텐츠 속 위치와 관계없이, 조명과 바람을 통해 몰입의 중심에 있는 듯한 경험을 할 수 있습니다.","videoId":1127519416},{"members":[13],"category":"c4","projectNum":49,"titleKor":"재료 교체로 레시피를 바꾸는 요리 플랫폼","titleEng":"REMIK","description":"레믹은 레시피를 바꿀 수 있는 요리 동영상 플랫폼입니다. 알레르기• 종교• 채식주의 • 개인 선호 등 다양한 이유로 특정 식재료를 먹지 못하는 인구가 증가하고 있습니다. 이를 바탕으로, 레믹은 재료를 변경하여 레시피를 새롭게 재생성합니다. 이 과정에서 사용자는 요리를 더욱 다양하고 창의적으로 접근 할 수 있습니다.","videoId":1127828070},{"members":[15],"category":"c4","projectNum":50,"titleKor":"감성 기반 소비 기록 서비스","titleEng":"LEAF NOTE","description":"Leaf Note는 소비를 단순한 수치가 아닌 나뭇잎과 캐릭터라는 감성적 요소로 표현하는 새로운 형태의 가계부입니다. 매일의 소비가 입력될 때마다 하나의 나뭇잎으로 시각화되어 차곡차곡 쌓이고, 항목별 소비는 개성 있는 캐릭터로 나타나 사용자가 친근하게 자신의 소비 패턴을 이해하도록 돕습니다. 숫자 중심의 기록이 아닌 시각적 변화를 통해, 소비에 담긴 감정과 태도를 자연스럽게 인식하게 합니다.","videoId":"-"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"테트링","titleEng":"TETLINK","description":"테트링은 쌓지 않는 정보 아카이브 서비스입니다. 기존 서비스가 정보를 보관하는 데 목적을 두었다면, 테트링은 이후 정보를 소비하는 것에 초점을 맞춥니다. 사용자가 저장한 정보를 블록형 게임의 블록처럼 시각화해 효과적인 소비를 유도하고, 그 과정에서 사용자는 아카이브를 비워내는 새로운 경험을 즐길 수 있습니다.","videoId":1126373064},{"members":[31],"category":"c4","projectNum":52,"titleKor":"클러버스","titleEng":"CLUB EARTH","description":"클러버스는 패션 업사이클링 스타터를 위해 소장 중인 의류로 새활용을 할 수 있도록 돕는 Up It Yourself! KIT와 온라인 서비스를 제공합니다. 실패에 대한 부담 없이 초보자도 쉽게 제작할 수 있는 도구와 도안, 튜토리얼 영상, 온라인 매뉴얼 등 다양한 가이드를 통해 업사이클링의 장벽을 낮추고, 지속 가능한 패션 문화를 함께 만들어가고자 합니다.","videoId":1127302808},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"공동체 생활에서의 물 절약 시스템","titleEng":"AQUA-SAVE","description":"AQUA-SAVE'는 일상 속 과도한 물 소비 문제를 해결하기 위해 개발된 스마트 절수 시스템입니다. 수전 디스플레이를 통해 실시간 물 사용량, 온도, 사용시간을 확인할 수 있으며, 애플리케이션을 통해 개인 및 공동체별 데이터를 분석하고 절수 미션을 제공합니다. 미션 달성 시 리워드가 제공되며, 이는 공동체의 효율적인 물 사용 습관 형성에 기여합니다.","videoId":1127099717},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한번쯤 망해봐도 괜찮은 인생 게임","titleEng":"내가 뭘 잘못했는데요?","description":"사람은 자신이 하고 싶은 것을 할 때 가장 빛난다.\\n그러나 현실은 빠른 속도와 정해진 답을 끊임없이 요구합니다. 많은 사람들이 중요한 진로와 직업의 갈림길 앞에서 깊은 혼란을 겪습니다. 본 프로젝트는 그러한 상황에서 다양한 선택을 시뮬레이션할 수 있게 하여 각자의 리듬과 가능성을 온전히 존중하고자 하는 의도에서 만들어졌습니다.","videoId":"-"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"사용자 경험 기반 디지털 아카이브","titleEng":"Ever Archive","description":"현대인의 디지털 라이프 속에서 기억은 쉽게 저장되지만, 그 안에 담긴 감정은 점차 흐려집니다. \\nEver Archive는 이런 감정의 흔적을 몰입감 있는 경험으로 보존할 수 있도록 설계되었습니다. \\n기억은 사라지는 것이 아니라, 형태를 바꿔 마음에 남는 것, 디자인을 통해 그 형태를 만들어주고 싶었습니다.\\n사람의 마음과 감정을 다루는 디자인을 지향합니다.","videoId":1127045458},{"members":[46],"category":"c4","projectNum":56,"titleKor":"모듈형 침구 UV 살균 로봇 청소기","titleEng":"NOVIX","description":"NOVIX는 침구 UV 살균 로봇 청소기로 모듈형 로봇기기와 본체 로봇청소기 2개로 이루어져있습니다. 본체는 가정집의 먼지청소를 먼저 이행하고 사용자가 침구위에서 모듈형 로봇을 작동시키면 상단의 360°센서 기반으로 자율 주행하며 침구 위를 이동하면서 보이지 않는 진드기와 유해 입자를 효과적으로 제거하는 UV 살균이 가능합니다.","videoId":1126569569},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"모담이","titleEng":"MODAMI","description":"시니어를 위한 AI 자서전 서비스 '모담이'는 AI 아바타 '담이'와의 대화를 통해 당신의 삶을 기록합니다. \\n키보드 없이 터치와 음성으로 세상에 단 하나뿐인 나만의 특별한 자서전이 완성됩니다.","videoId":1127565627},{"members":[56],"category":"c4","projectNum":58,"titleKor":"소설 창작을 위한 협업 커뮤니티 플랫폼","titleEng":"CREWE","description":"Crewe는 하나의 아이디어에서 여러 사람이 의견을 더해 이야기를 완성하는 협업형 창작 플랫폼입니다. 하나의 소재에서 다양한 전개가 만들어지며, 함께 이야기를 확장해가는 집단 창작의 즐거움을 제공합니다.","videoId":1127471110},{"members":[63],"category":"c4","projectNum":59,"titleKor":"유아 정서 발달 자연 친화 자동화 화분","titleEng":"REONA","description":"REONA는 자연의 흐름을 형상화한 클라우드 형태의 스마트 화분으로 디지털 디스플레이와 직관적인 형태 변화를 통해 날씨와 급수 필요성을 전달합니다. 하단부의 물을 워터펌프를 통해 끌어올려 상단 구름 부분에서 빗방울처럼 떨어뜨림으로써 식물이 자라는 자연의 환경을 실내에서 경험할 수 있도록 재현한 제품입니다.","videoId":"-"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"노트모","titleEng":"NOTEMO","description":"notemo'는 사용자가 겪고 있는 정신적인 어려움을 완화할 수 있는 감정 습관 어플입니다. 하루에 한 번 짧고 직관적인 질문에 대답하며 감정에 솔직해지는 법을 배우고, '마음 기록장'과 '마음 정원' 을 통해 이를 쉽고 재미있게 확인할 수 있습니다. 또한, '마음 살펴보기' 를 통해 특정 심리 영역을 탐색할 수 있습니다.","videoId":1127447000},{"members":[83],"category":"c4","projectNum":61,"titleKor":"리:미스트","titleEng":"RE:MIST","description":"RE:MIST는 사용자가 향을 원하는 대로 조합해 사용하는 모듈형 충전식 스프레이다. 재사용 가능한 구조와 진공 시스템으로 플라스틱과 유해 가스 사용을 줄이며, 분사량·향·기능을 세밀하게 조절할 수 있어 개인 맞춤형 경험을 제공한다. 환경 보호, 경제성, 창의적 사용성을 모두 갖춘 지속 가능한 라이프스타일 제품이다.","videoId":1127188689},{"members":[84],"category":"c4","projectNum":62,"titleKor":"경험소비 기반 햄버거 커스터마이징 어플","titleEng":"BURGIT","description":"Z세대는 전세계 인구의 25%를 차지하며 역대 최대 규모의 소비력을 갖춘 세대가 될 것으로 예측됩니다. 이들에게 중요한 것은 직접 개입한 생산형 경험과 자기표현을 할 수 있는 콘텐츠입니다. 해당 어플은 사용자가 인터랙티브 요소를 통해 햄버거 재료를 직접 선택하고 제조할 수 있도록 하는 경험 소비 기반 햄버거 커스터마이징 어플리케이션입니다.","videoId":1126413536},{"members":[89],"category":"c4","projectNum":63,"titleKor":"엔코","titleEng":"ENCO","description":"밀키트의 복잡한 조리 과정을 디제잉의 감각적인 퍼포먼스로 재해석합니다. DJ 컨트롤러에서 영감을 받은 다이얼과 레버, 행동을 유도하는 LED 인디케이터는 요리의 순서와 흐름을 직관적으로 안내합니다. 이를 통해 요리 과정을 하나의 퍼포먼스처럼 완성하는 새로운 경험을 제공하며 라이프스타일을 제안합니다.","videoId":1128232388},{"members":[93],"category":"c4","projectNum":64,"titleKor":"씨너리","titleEng":"SEENERY","description":"SEENERY는 '나(seen)'와 '여행의 풍경(scenery)'을 연결해 1인 여행자에게 새로운 기록 방식을 제안하는 휴대용 자동 촬영 드론입니다. 사용자는 제품을 비틀어 Boomerang, Sky, Surround, Follow 중 원하는 4가지 모드를 선택 후 공중에 띄웁니다. 제품은 피사체 및 환경 인식, 구도, 색감, 플래시 자동 조절로 최적의 촬영을 제공합니다. 듀얼 프로펠러와 고효율 배터리로 안정적이며, 작고 가벼워 휴대가 용이합니다. 단순한 '띄우는 동작'만으로 나와 풍경을 함께 담아 특별한 순간을 완성합니다.","videoId":"1127472732"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"감정 시각화 표현 치료 장치","titleEng":"VI-MO","description":"‘VI-mo’는 사용자로 하여금 자신의 감정을 외부 시점에서 시각적으로 인식하게 하여 감정의 정리와 자기 이해를 돕는 제품입니다. 감정을 말로 꺼내고 물리적 형태로 마주하는 경험은 심리적 위안과 정서적 회복을 유도하며, 감정을 억누르기보다 자연스럽게 흐르게 하는 감정 순환의 장치를 제공합니다.","videoId":"1128446266"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"폴라리스","titleEng":"POLARIS","description":"극한 환경에서도 자유롭게 이동하며 탐사 목적에 따라 모듈을 교체할 수 있는 극지 탐사 모빌리티로, 드론과 연동해 지형과 위험 요소를 실시간으로 스캔하고 다양한 임무를 효율적이고 안전하게 수행하며, 기후 변화 분석, 자원 탐사, 생태 조사, 야간 관측과 긴급 구조까지 동시에 수행하며 극한 환경 탐사의 새로운 기준과 가능성을 보여준다.","videoId":1128433794},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"파빅스","titleEng":"PAVIX","description":"드론이 포트홀을 스캔하면 무인 모빌리티가 자동으로 이동해 보수를 수행하는 시스템입니다. TBM 공법을 적용해 절삭·청소·접착을 일체화했으며, 프리캐스트 임플란트 공법을 통해 경화 시간을 단축해 신속한 도로 개방이 가능합니다. 다관절 다리로 정밀한 작업이 가능하며, 드론이 프리캐스트를 카트리지 형태로 전달합니다.","videoId":1127509590},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"감정기반 맞춤형 활동 추천 모빌리티 서비스","titleEng":"FLOV","description":"FLOV는 인공지능이 개인의 성향과 상황을 분석해 맞춤형 정보를 제공하는 시대에 주목합니다. 기술의 고도화로 사회적 유대가 약화되고 감정적 교류가 줄어든 미래 환경에서 해소되지 못한 감정을 지닌 개인에게 감정에 적합한 활동과 장소를 추천하고, 그 목적에 최적화된 모듈형 모빌리티를 통해 새로운 감정 해소 경험을 제공합니다.","videoId":1127816861},{"members":[14],"category":"c5","projectNum":69,"titleKor":"지구와 우주를 연결하는 차세대 모빌리티 시스템","titleEng":"KAIROS","description":"KAIROS'는 지구와 우주 간 연속된 이동 경험을 제공하는 차세대 모빌리티 시스템입니다. 출발지부터 목적지까지 단일 공간에서 이동하며 새로운 라이프스타일을 누릴 수 있습니다. 직선과 평면 중심의 클래식카 감성과 미래지향적 조형성의 조화를 이루며 기능성과 감성을 동시에 아우르는 차세대 모빌리티입니다.","videoId":1128367659},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"리프텐","titleEng":"RIFETEN","description":"도로 지면의 손상을 사전에 탐지하고, 발생될 포트홀을 예방하기 위해 개발된 자율주행 모빌리티입니다. 지면의 하부 약화를 감지하면 정지하여 드릴을 이용해 지면을 천공하고, 우레탄 폼과 레진을 주입하여 내부를 메우고 표면을 마감합니다. 드릴, 우레탄 및 레진 노즐은 하부에 배치되어 x축 트랙을 따라 정밀하게 이동하여 보수 대상 지점을 정교하게 작업합니다.","videoId":1127475114},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"레이온","titleEng":"RAYON","description":"RAYON은 복잡한 지하철 역사 환경에서 역무원이 신속하게 이동해 응급 상황에 1차적인 처치를 수행할 수 있도록 설계된 1인용 응급 구조 모빌리티입니다. 구급대가 도착하기 전까지의 결정적인 시간을 단축하기 위해 좁은 통로와 다층 구조에서도 안정적인 주행이 가능하며, 응급 장비 수납 모듈과 직관적인 조작 시스템을 갖추고 있습니다.","videoId":1127232925},{"members":[37],"category":"c5","projectNum":72,"titleKor":"휠로콥터","titleEng":"WHEELOCPCOTER","description":"WHEELCOPTER는 육상 주행과 비행이 모두 가능한 하이브리드 모빌리티로, 접근이 어려운 지역에서도 구조와 탐색을 수행할 수 있습니다. 바퀴를 프로펠러로 전환하는 구조로 효율성과 경제성을 높였으며, 재난 대응·군사 작전·보급 등 다양한 임무에 활용 가능합니다.","videoId":1127451104},{"members":[39],"category":"c5","projectNum":73,"titleKor":"포레스트","titleEng":"FOR:EST","description":"PBV 플랫폼을 기반으로 시니어의 이동과 휴식을 고려한 맞춤형 인테리어 솔루션을 제안한다. 라운지 체어형 무중력 카시트와 모듈 교체 구조를 통해 반려견용·테이블용 옵션을 제공하며, 회전 플레이트로 이동·정차·산책 시나리오에 맞춰 공간을 전환해 액티브 시니어의 안전하고 편안한 아웃도어 라이프를 지원한다.","videoId":1126626799},{"members":[62],"category":"c5","projectNum":74,"titleKor":"하우릭스","titleEng":"HAULIX","description":"HAULIX는 도시와 농촌 모두를 아우르는 차세대 모듈형 전동 바이크입니다. 이동성과 적재 능력을 동시에 갖춘 이 제품은, 후방에 다양한 모듈을 탈부착하여 사용자 맞춤형 구성이 가능합니다. 또한 GPS 기록, 직관적인 디스플레이, 접이식 안장 등 고령자를 배려한 세심한 기능도 탑재되어 있어 일상 이동의 부담을 줄여줍니다.","videoId":1127497630},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"퀀타엑스","titleEng":"QUANTA-X","description":"연기 감지 센서가 화재를 탐지하면 드론이 자동으로 출동해 화재 지점에 소화볼을 투하하고 초기 진화를 수행합니다. 조기 감지와 신속한 대응을 통해 산불 확산을 방지하며 산림 자원과 생태계를 보호하고, 공공기관과 민간 분야로의 활용 가능성이 높습니다.","videoId":1127242698},{"members":[80],"category":"c5","projectNum":76,"titleKor":"투위","titleEng":"TOWEE","description":"TOWEE는 트랜스윙 시스템을 탑재한 eVTOL 차량 견인 모빌리티입니다.","videoId":1127231053}]`),kx=40;function g2(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const XA={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},Ux=["전체","산업디자인공학","미디어디자인공학"],WA={산업디자인공학:0,미디어디자인공학:1},Px=n=>n==="IND"||n===0||n==="0"?0:n==="MED"||n===1||n==="1"?1:n,Sp=Qm,Vl=QA,ZA=A.div`
  position: relative; background: #fff;
`,JA=A.div`
  padding-left: ${kx}px; padding-right: ${kx}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function tR({children:n}){return x.jsx(ZA,{children:x.jsx(JA,{children:n})})}const eR=A.div`
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
`,nR=A.div`
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
`,iR=A.div`
  text-decoration: none; cursor: pointer;
`,rR=A.div`position: relative;`;function aR({people:n}){const t=Mm();return x.jsx(eR,{children:n.map((i,a)=>{const o=i.id??i.studentId??`${i.nameKor}-${a}`,u=typeof i.projectNum=="number"&&i.category,d=u?i.projectNum+1:null,p=u?`${XA[i.category]||"A"}${String(d).padStart(3,"0")}`:null,m=x.jsx(qm,{nameKor:i.nameKor,nameEng:i.nameEng,role:i.role,sns:i.sns||"-",eMail:i.eMail,imgSrc:g2(i.imgUrl),imgAlt:`${i.nameKor} profile`},o);return u?x.jsx(iR,{role:"link",tabIndex:0,onClick:()=>t(`/work/${p}`),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&t(`/work/${p}`)},"aria-label":`${i.nameKor} 작품 보기 (${p})`,children:m},`link-${o}`):m})})}function sR(){const[n,t]=Rt.useState(!1),[i,a]=Rt.useState(Ux[0]),o=Rt.useMemo(()=>{const p=new Map;return(Jl||[]).forEach(m=>{(m.members||[]).forEach(g=>{p.has(g)||p.set(g,m)})}),p},[]);Rt.useEffect(()=>{a(n?Vl[0]?.id||"":Ux[0])},[n]);const u=Rt.useMemo(()=>{if(!n){if(i==="전체")return Sp;let m=WA[i];return m===void 0&&(m=Px(i)),Sp.filter(g=>Px(g.department)===m)}const p=Vl.some(m=>m.id===i)?i:Vl.find(m=>m.nameKor===i)?.id||"";return Sp.filter(m=>m.professorId===p).map(m=>{let g=o.get(m.num);g||(g=(Jl||[]).find(w=>w.category===m.category&&w.projectNum===m.projectNum)||null);const v=g?`/projects/${g.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...m,imgUrl:v}})},[i,n,o]),d=Rt.useMemo(()=>n&&(Vl.find(m=>m.id===i)||Vl.find(m=>m.nameKor===i))||null,[n,i]);return x.jsxs(rR,{children:[x.jsx(nR,{children:"Peoples"}),x.jsx(m2,{type:"people",onCategoryChange:a,onToggleChange:t}),x.jsxs(tR,{children:[n&&d&&x.jsx(Ym,{nameKor:d.nameKor,rank:d.rank||"교수",eMail:d.email,education:d.education,field:d.field,imgSrc:g2(d.imgUrl),imgAlt:`${d.nameKor} profile`}),x.jsx(aR,{people:u})]})]})}const zx=A.div`
  @media (max-width: 393px) {
    --s: clamp(0.82, calc(100vw / 393), 1);

    transform: scale(var(--s));
    transform-origin: top left;

    width: calc(173px * var(--s));
    height: calc(151px * var(--s));
  }
`,oR=A.div`
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
`,Lx=A.div`
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
`,lR=A.div`
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
`,uR=A.img`
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
`,cR=A.div`
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
`,hR=A.div`
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
`,dR=A.p`
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
`,fR=A.p`
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
`,pR=A.div`
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
`,mR=A.div`
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
`,gR=A.p`
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
`,yR=A.div`
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
`,xR=A.img`
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
`,vR=A.div`
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
`,Bx=A.div`
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
`,$x=A.div`
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
`,Fx=A.p`
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
`;function Kx(n){return typeof n=="number"&&n>999?"999+":n}function Xm({titleKor:n,titleEng:t,nameKor:i,view:a,like:o,href:u,src:d,profileImgs:p,docId:m}){const g=typeof o=="number"?o:0,v=typeof a=="number"?a:0,w=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=1)},S=P=>{const G=P.currentTarget.querySelector(".card-hover");G&&(G.style.opacity=0)},R="/TU2025gradulate/",M=/^https?:\/\//i.test(u),B=x.jsxs(x.Fragment,{children:[x.jsx(oR,{children:x.jsxs(lR,{onMouseEnter:w,onMouseLeave:S,children:[x.jsx(cR,{className:"card-hover",children:x.jsxs(hR,{children:[x.jsx(fR,{children:n}),x.jsx(dR,{children:t})]})}),x.jsx(uR,{src:d,alt:"Project"})]})}),x.jsxs(pR,{children:[x.jsxs(mR,{children:[x.jsx(yR,{children:p.map((P,G)=>x.jsx(xR,{src:P,alt:`Profile${G+1}`,$z:3-G,$ml:G>0},G))}),x.jsx(gR,{children:i})]}),x.jsxs(vR,{children:[x.jsxs(Bx,{children:[x.jsx($x,{src:`${R}icons/likeIcon.svg`}),x.jsx(Fx,{children:Kx(g)})]}),x.jsxs(Bx,{children:[x.jsx($x,{src:`${R}icons/viewIcon.svg`}),x.jsx(Fx,{children:Kx(v)})]})]})]})]});return M?x.jsx(zx,{children:x.jsx(Lx,{as:"a",href:u,style:{textDecoration:"none"},children:B})}):x.jsx(zx,{children:x.jsx(Lx,{as:_o,to:u.startsWith("/")?u:`/${u}`,style:{textDecoration:"none"},children:B})})}Xm.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,nameKor:W.string.isRequired,view:W.number,like:W.number,src:W.string.isRequired,href:W.string.isRequired,profileImgs:W.arrayOf(W.string).isRequired,docId:W.oneOfType([W.string,W.number]),collection:W.string};Xm.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0,collection:"works"};const _R=()=>{};var qx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=function(n){const t=[];let i=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},ER=function(n){const t=[];let i=0,a=0;for(;i<n.length;){const o=n[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],d=n[i++],p=n[i++],m=((o&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(m>>10)),t[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[i++],d=n[i++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return t.join("")},x2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],d=o+1<n.length,p=d?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,w=(u&3)<<4|p>>4;let S=(p&15)<<2|g>>6,R=g&63;m||(R=64,d||(S=64)),a.push(i[v],i[w],i[S],i[R])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(y2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ER(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const w=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new bR;const S=u<<2|p>>4;if(a.push(S),g!==64){const R=p<<4&240|g>>2;if(a.push(R),w!==64){const M=g<<6&192|w;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wR=function(n){const t=y2(n);return x2.encodeByteArray(t,!0)},bh=function(n){return wR(n).replace(/\./g,"")},TR=function(n){try{return x2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function SR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AR=()=>SR().__FIREBASE_DEFAULTS__,RR=()=>{if(typeof process>"u"||typeof qx>"u")return;const n=qx.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&TR(n[1]);return t&&JSON.parse(t)},Wm=()=>{try{return _R()||AR()||RR()||IR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},CR=n=>Wm()?.emulatorHosts?.[n],jR=n=>{const t=CR(n);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},v2=()=>Wm()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function Zm(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function NR(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function MR(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bh(JSON.stringify(i)),bh(JSON.stringify(d)),""].join(".")}const Kl={};function OR(){const n={prod:[],emulator:[]};for(const t of Object.keys(Kl))Kl[t]?n.emulator.push(t):n.prod.push(t);return n}function VR(n){let t=document.getElementById(n),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),i=!0),{created:i,element:t}}let Hx=!1;function kR(n,t){if(typeof window>"u"||typeof document>"u"||!Zm(window.location.host)||Kl[n]===t||Kl[n]||Hx)return;Kl[n]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",u=OR().prod.length>0;function d(){const S=document.getElementById(a);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,R){S.setAttribute("width","24"),S.setAttribute("id",R),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Hx=!0,d()},S}function v(S,R){S.setAttribute("id",R),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=VR(a),R=i("text"),M=document.getElementById(R)||document.createElement("span"),B=i("learnmore"),P=document.getElementById(B)||document.createElement("a"),G=i("preprendIcon"),X=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const et=S.element;p(et),v(P,B);const ct=g();m(X,G),et.append(X,M,P,ct),document.body.appendChild(et)}u?(M.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function UR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PR(){const n=Wm()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LR(){try{return typeof indexedDB=="object"}catch{return!1}}function BR(){return new Promise((n,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="FirebaseError";class bo extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=$R,Object.setPrototypeOf(this,bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_2.prototype.create)}}class _2{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],d=u?FR(u,a):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new bo(o,p,a)}}function FR(n,t){return n.replace(KR,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const KR=/\{\$([^}]+)}/g;function wh(n,t){if(n===t)return!0;const i=Object.keys(n),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const u=n[o],d=t[o];if(Gx(u)&&Gx(d)){if(!wh(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function Gx(n){return n!==null&&typeof n=="object"}/**
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
 */function sr(n){return n&&n._delegate?n._delegate:n}class tu{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ha="[DEFAULT]";/**
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
 */class qR{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new DR;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(GR(t))try{this.getOrInitializeService({instanceIdentifier:Ha})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Ha){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ha){return this.instances.has(t)}getOptions(t=Ha){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&d.resolve(o)}return o}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(t),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&t(u,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:HR(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ha){return this.component?this.component.multipleInstances?t:Ha:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HR(n){return n===Ha?void 0:n}function GR(n){return n.instantiationMode==="EAGER"}/**
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
 */class YR{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new qR(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($t||($t={}));const QR={debug:$t.DEBUG,verbose:$t.VERBOSE,info:$t.INFO,warn:$t.WARN,error:$t.ERROR,silent:$t.SILENT},XR=$t.INFO,WR={[$t.DEBUG]:"log",[$t.VERBOSE]:"log",[$t.INFO]:"info",[$t.WARN]:"warn",[$t.ERROR]:"error"},ZR=(n,t,...i)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),o=WR[t];if(o)console[o](`[${a}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class E2{constructor(t){this.name=t,this._logLevel=XR,this._logHandler=ZR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?QR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$t.DEBUG,...t),this._logHandler(this,$t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$t.VERBOSE,...t),this._logHandler(this,$t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$t.INFO,...t),this._logHandler(this,$t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$t.WARN,...t),this._logHandler(this,$t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$t.ERROR,...t),this._logHandler(this,$t.ERROR,...t)}}const JR=(n,t)=>t.some(i=>n instanceof i);let Yx,Qx;function t6(){return Yx||(Yx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e6(){return Qx||(Qx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b2=new WeakMap,em=new WeakMap,w2=new WeakMap,Ap=new WeakMap,Jm=new WeakMap;function n6(n){const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{i(Wr(n.result)),o()},d=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&b2.set(i,n)}).catch(()=>{}),Jm.set(t,n),t}function i6(n){if(em.has(n))return;const t=new Promise((i,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{i(),o()},d=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});em.set(n,t)}let nm={get(n,t,i){if(n instanceof IDBTransaction){if(t==="done")return em.get(n);if(t==="objectStoreNames")return n.objectStoreNames||w2.get(n);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Wr(n[t])},set(n,t,i){return n[t]=i,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function r6(n){nm=n(nm)}function a6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=n.call(Rp(this),t,...i);return w2.set(a,t.sort?t.sort():[t]),Wr(a)}:e6().includes(n)?function(...t){return n.apply(Rp(this),t),Wr(b2.get(this))}:function(...t){return Wr(n.apply(Rp(this),t))}}function s6(n){return typeof n=="function"?a6(n):(n instanceof IDBTransaction&&i6(n),JR(n,t6())?new Proxy(n,nm):n)}function Wr(n){if(n instanceof IDBRequest)return n6(n);if(Ap.has(n))return Ap.get(n);const t=s6(n);return t!==n&&(Ap.set(n,t),Jm.set(t,n)),t}const Rp=n=>Jm.get(n);function o6(n,t,{blocked:i,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(n,t),p=Wr(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Wr(d.result),m.oldVersion,m.newVersion,Wr(d.transaction),m)}),i&&d.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const l6=["get","getKey","getAll","getAllKeys","count"],u6=["put","add","delete","clear"],Ip=new Map;function Xx(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ip.get(t))return Ip.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=u6.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||l6.includes(i)))return;const u=async function(d,...p){const m=this.transaction(d,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),o&&m.done]))[0]};return Ip.set(t,u),u}r6(n=>({...n,get:(t,i,a)=>Xx(t,i)||n.get(t,i,a),has:(t,i)=>!!Xx(t,i)||n.has(t,i)}));/**
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
 */class c6{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(h6(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function h6(n){return n.getComponent()?.type==="VERSION"}const im="@firebase/app",Wx="0.14.4";/**
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
 */const or=new E2("@firebase/app"),d6="@firebase/app-compat",f6="@firebase/analytics-compat",p6="@firebase/analytics",m6="@firebase/app-check-compat",g6="@firebase/app-check",y6="@firebase/auth",x6="@firebase/auth-compat",v6="@firebase/database",_6="@firebase/data-connect",E6="@firebase/database-compat",b6="@firebase/functions",w6="@firebase/functions-compat",T6="@firebase/installations",S6="@firebase/installations-compat",A6="@firebase/messaging",R6="@firebase/messaging-compat",I6="@firebase/performance",C6="@firebase/performance-compat",j6="@firebase/remote-config",D6="@firebase/remote-config-compat",N6="@firebase/storage",M6="@firebase/storage-compat",O6="@firebase/firestore",V6="@firebase/ai",k6="@firebase/firestore-compat",U6="firebase",P6="12.4.0";/**
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
 */const rm="[DEFAULT]",z6={[im]:"fire-core",[d6]:"fire-core-compat",[p6]:"fire-analytics",[f6]:"fire-analytics-compat",[g6]:"fire-app-check",[m6]:"fire-app-check-compat",[y6]:"fire-auth",[x6]:"fire-auth-compat",[v6]:"fire-rtdb",[_6]:"fire-data-connect",[E6]:"fire-rtdb-compat",[b6]:"fire-fn",[w6]:"fire-fn-compat",[T6]:"fire-iid",[S6]:"fire-iid-compat",[A6]:"fire-fcm",[R6]:"fire-fcm-compat",[I6]:"fire-perf",[C6]:"fire-perf-compat",[j6]:"fire-rc",[D6]:"fire-rc-compat",[N6]:"fire-gcs",[M6]:"fire-gcs-compat",[O6]:"fire-fst",[k6]:"fire-fst-compat",[V6]:"fire-vertex","fire-js":"fire-js",[U6]:"fire-js-all"};/**
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
 */const eu=new Map,L6=new Map,am=new Map;function Zx(n,t){try{n.container.addComponent(t)}catch(i){or.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,i)}}function Th(n){const t=n.name;if(am.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;am.set(t,n);for(const i of eu.values())Zx(i,n);for(const i of L6.values())Zx(i,n);return!0}function B6(n,t){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(t)}function $6(n){return n==null?!1:n.settings!==void 0}/**
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
 */const F6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new _2("app","Firebase",F6);/**
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
 */class K6{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new tu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const q6=P6;function tg(n,t={}){let i=n;typeof t!="object"&&(t={name:t});const a={name:rm,automaticDataCollectionEnabled:!0,...t},o=a.name;if(typeof o!="string"||!o)throw Zr.create("bad-app-name",{appName:String(o)});if(i||(i=v2()),!i)throw Zr.create("no-options");const u=eu.get(o);if(u){if(wh(i,u.options)&&wh(a,u.config))return u;throw Zr.create("duplicate-app",{appName:o})}const d=new YR(o);for(const m of am.values())d.addComponent(m);const p=new K6(i,a,d);return eu.set(o,p),p}function H6(n=rm){const t=eu.get(n);if(!t&&n===rm&&v2())return tg();if(!t)throw Zr.create("no-app",{appName:n});return t}function Jx(){return Array.from(eu.values())}function to(n,t,i){let a=z6[n]??n;i&&(a+=`-${i}`);const o=a.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${t}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(d.join(" "));return}Th(new tu(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const G6="firebase-heartbeat-database",Y6=1,nu="firebase-heartbeat-store";let Cp=null;function T2(){return Cp||(Cp=o6(G6,Y6,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(nu)}catch(i){console.warn(i)}}}}).catch(n=>{throw Zr.create("idb-open",{originalErrorMessage:n.message})})),Cp}async function Q6(n){try{const i=(await T2()).transaction(nu),a=await i.objectStore(nu).get(S2(n));return await i.done,a}catch(t){if(t instanceof bo)or.warn(t.message);else{const i=Zr.create("idb-get",{originalErrorMessage:t?.message});or.warn(i.message)}}}async function tv(n,t){try{const a=(await T2()).transaction(nu,"readwrite");await a.objectStore(nu).put(t,S2(n)),await a.done}catch(i){if(i instanceof bo)or.warn(i.message);else{const a=Zr.create("idb-set",{originalErrorMessage:i?.message});or.warn(a.message)}}}function S2(n){return`${n.name}!${n.options.appId}`}/**
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
 */const X6=1024,W6=30;class Z6{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new tI(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ev();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>W6){const o=eI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){or.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ev(),{heartbeatsToSend:i,unsentEntries:a}=J6(this._heartbeatsCache.heartbeats),o=bh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return or.warn(t),""}}}function ev(){return new Date().toISOString().substring(0,10)}function J6(n,t=X6){const i=[];let a=n.slice();for(const o of n){const u=i.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),nv(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),nv(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class tI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LR()?BR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Q6(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return tv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return tv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function nv(n){return bh(JSON.stringify({version:2,heartbeats:n})).length}function eI(n){if(n.length===0)return-1;let t=0,i=n[0].date;for(let a=1;a<n.length;a++)n[a].date<i&&(i=n[a].date,t=a);return t}/**
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
 */function nI(n){Th(new tu("platform-logger",t=>new c6(t),"PRIVATE")),Th(new tu("heartbeat",t=>new Z6(t),"PRIVATE")),to(im,Wx,n),to(im,Wx,"esm2020"),to("fire-js","")}nI("");var iI="firebase",rI="12.4.0";/**
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
 */to(iI,rI,"app");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,A2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function j(){}j.prototype=I.prototype,C.F=I.prototype,C.prototype=new j,C.prototype.constructor=C,C.D=function(O,k,z){for(var N=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)N[ue-2]=arguments[ue];return I.prototype[k].apply(O,N)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,j){j||(j=0);const O=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)O[k]=I.charCodeAt(j++)|I.charCodeAt(j++)<<8|I.charCodeAt(j++)<<16|I.charCodeAt(j++)<<24;else for(k=0;k<16;++k)O[k]=I[j++]|I[j++]<<8|I[j++]<<16|I[j++]<<24;I=C.g[0],j=C.g[1],k=C.g[2];let z=C.g[3],N;N=I+(z^j&(k^z))+O[0]+3614090360&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+O[1]+3905402710&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+O[2]+606105819&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+O[3]+3250441966&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+O[4]+4118548399&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+O[5]+1200080426&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+O[6]+2821735955&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+O[7]+4249261313&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+O[8]+1770035416&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+O[9]+2336552879&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+O[10]+4294925233&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+O[11]+2304563134&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(z^j&(k^z))+O[12]+1804603682&4294967295,I=j+(N<<7&4294967295|N>>>25),N=z+(k^I&(j^k))+O[13]+4254626195&4294967295,z=I+(N<<12&4294967295|N>>>20),N=k+(j^z&(I^j))+O[14]+2792965006&4294967295,k=z+(N<<17&4294967295|N>>>15),N=j+(I^k&(z^I))+O[15]+1236535329&4294967295,j=k+(N<<22&4294967295|N>>>10),N=I+(k^z&(j^k))+O[1]+4129170786&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+O[6]+3225465664&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+O[11]+643717713&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+O[0]+3921069994&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+O[5]+3593408605&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+O[10]+38016083&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+O[15]+3634488961&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+O[4]+3889429448&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+O[9]+568446438&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+O[14]+3275163606&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+O[3]+4107603335&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+O[8]+1163531501&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(k^z&(j^k))+O[13]+2850285829&4294967295,I=j+(N<<5&4294967295|N>>>27),N=z+(j^k&(I^j))+O[2]+4243563512&4294967295,z=I+(N<<9&4294967295|N>>>23),N=k+(I^j&(z^I))+O[7]+1735328473&4294967295,k=z+(N<<14&4294967295|N>>>18),N=j+(z^I&(k^z))+O[12]+2368359562&4294967295,j=k+(N<<20&4294967295|N>>>12),N=I+(j^k^z)+O[5]+4294588738&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+O[8]+2272392833&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+O[11]+1839030562&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+O[14]+4259657740&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+O[1]+2763975236&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+O[4]+1272893353&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+O[7]+4139469664&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+O[10]+3200236656&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+O[13]+681279174&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+O[0]+3936430074&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+O[3]+3572445317&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+O[6]+76029189&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(j^k^z)+O[9]+3654602809&4294967295,I=j+(N<<4&4294967295|N>>>28),N=z+(I^j^k)+O[12]+3873151461&4294967295,z=I+(N<<11&4294967295|N>>>21),N=k+(z^I^j)+O[15]+530742520&4294967295,k=z+(N<<16&4294967295|N>>>16),N=j+(k^z^I)+O[2]+3299628645&4294967295,j=k+(N<<23&4294967295|N>>>9),N=I+(k^(j|~z))+O[0]+4096336452&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+O[7]+1126891415&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+O[14]+2878612391&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+O[5]+4237533241&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+O[12]+1700485571&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+O[3]+2399980690&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+O[10]+4293915773&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+O[1]+2240044497&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+O[8]+1873313359&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+O[15]+4264355552&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+O[6]+2734768916&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+O[13]+1309151649&4294967295,j=k+(N<<21&4294967295|N>>>11),N=I+(k^(j|~z))+O[4]+4149444226&4294967295,I=j+(N<<6&4294967295|N>>>26),N=z+(j^(I|~k))+O[11]+3174756917&4294967295,z=I+(N<<10&4294967295|N>>>22),N=k+(I^(z|~j))+O[2]+718787259&4294967295,k=z+(N<<15&4294967295|N>>>17),N=j+(z^(k|~I))+O[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+z&4294967295}a.prototype.v=function(C,I){I===void 0&&(I=C.length);const j=I-this.blockSize,O=this.C;let k=this.h,z=0;for(;z<I;){if(k==0)for(;z<=j;)o(this,C,z),z+=this.blockSize;if(typeof C=="string"){for(;z<I;)if(O[k++]=C.charCodeAt(z++),k==this.blockSize){o(this,O),k=0;break}}else for(;z<I;)if(O[k++]=C[z++],k==this.blockSize){o(this,O),k=0;break}}this.h=k,this.o+=I},a.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var j=C.length-8;j<C.length;++j)C[j]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,j=0;j<4;++j)for(let O=0;O<32;O+=8)C[I++]=this.g[j]>>>O&255;return C};function u(C,I){var j=p;return Object.prototype.hasOwnProperty.call(j,C)?j[C]:j[C]=I(C)}function d(C,I){this.h=I;const j=[];let O=!0;for(let k=C.length-1;k>=0;k--){const z=C[k]|0;O&&z==I||(j[k]=z,O=!1)}this.g=j}var p={};function m(C){return-128<=C&&C<128?u(C,function(I){return new d([I|0],I<0?-1:0)}):new d([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(C<0)return P(g(-C));const I=[];let j=1;for(let O=0;C>=j;O++)I[O]=C/j|0,j*=4294967296;return new d(I,0)}function v(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return P(v(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const j=g(Math.pow(I,8));let O=w;for(let z=0;z<C.length;z+=8){var k=Math.min(8,C.length-z);const N=parseInt(C.substring(z,z+k),I);k<8?(k=g(Math.pow(I,k)),O=O.j(k).add(g(N))):(O=O.j(j),O=O.add(g(N)))}return O}var w=m(0),S=m(1),R=m(16777216);n=d.prototype,n.m=function(){if(B(this))return-P(this).m();let C=0,I=1;for(let j=0;j<this.g.length;j++){const O=this.i(j);C+=(O>=0?O:4294967296+O)*I,I*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(M(this))return"0";if(B(this))return"-"+P(this).toString(C);const I=g(Math.pow(C,6));var j=this;let O="";for(;;){const k=ct(j,I).g;j=G(j,k.j(I));let z=((j.g.length>0?j.g[0]:j.h)>>>0).toString(C);if(j=k,M(j))return z+O;for(;z.length<6;)z="0"+z;O=z+O}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function M(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function B(C){return C.h==-1}n.l=function(C){return C=G(this,C),B(C)?-1:M(C)?0:1};function P(C){const I=C.g.length,j=[];for(let O=0;O<I;O++)j[O]=~C.g[O];return new d(j,~C.h).add(S)}n.abs=function(){return B(this)?P(this):this},n.add=function(C){const I=Math.max(this.g.length,C.g.length),j=[];let O=0;for(let k=0;k<=I;k++){let z=O+(this.i(k)&65535)+(C.i(k)&65535),N=(z>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);O=N>>>16,z&=65535,N&=65535,j[k]=N<<16|z}return new d(j,j[j.length-1]&-2147483648?-1:0)};function G(C,I){return C.add(P(I))}n.j=function(C){if(M(this)||M(C))return w;if(B(this))return B(C)?P(this).j(P(C)):P(P(this).j(C));if(B(C))return P(this.j(P(C)));if(this.l(R)<0&&C.l(R)<0)return g(this.m()*C.m());const I=this.g.length+C.g.length,j=[];for(var O=0;O<2*I;O++)j[O]=0;for(O=0;O<this.g.length;O++)for(let k=0;k<C.g.length;k++){const z=this.i(O)>>>16,N=this.i(O)&65535,ue=C.i(k)>>>16,ne=C.i(k)&65535;j[2*O+2*k]+=N*ne,X(j,2*O+2*k),j[2*O+2*k+1]+=z*ne,X(j,2*O+2*k+1),j[2*O+2*k+1]+=N*ue,X(j,2*O+2*k+1),j[2*O+2*k+2]+=z*ue,X(j,2*O+2*k+2)}for(C=0;C<I;C++)j[C]=j[2*C+1]<<16|j[2*C];for(C=I;C<2*I;C++)j[C]=0;return new d(j,0)};function X(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function et(C,I){this.g=C,this.h=I}function ct(C,I){if(M(I))throw Error("division by zero");if(M(C))return new et(w,w);if(B(C))return I=ct(P(C),I),new et(P(I.g),P(I.h));if(B(I))return I=ct(C,P(I)),new et(P(I.g),I.h);if(C.g.length>30){if(B(C)||B(I))throw Error("slowDivide_ only works with positive integers.");for(var j=S,O=I;O.l(C)<=0;)j=Z(j),O=Z(O);var k=ft(j,1),z=ft(O,1);for(O=ft(O,2),j=ft(j,2);!M(O);){var N=z.add(O);N.l(C)<=0&&(k=k.add(j),z=N),O=ft(O,1),j=ft(j,1)}return I=G(C,k.j(I)),new et(k,I)}for(k=w;C.l(I)>=0;){for(j=Math.max(1,Math.floor(C.m()/I.m())),O=Math.ceil(Math.log(j)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),z=g(j),N=z.j(I);B(N)||N.l(C)>0;)j-=O,z=g(j),N=z.j(I);M(z)&&(z=S),k=k.add(z),C=G(C,N)}return new et(k,C)}n.B=function(C){return ct(this,C).h},n.and=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)&C.i(O);return new d(j,this.h&C.h)},n.or=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)|C.i(O);return new d(j,this.h|C.h)},n.xor=function(C){const I=Math.max(this.g.length,C.g.length),j=[];for(let O=0;O<I;O++)j[O]=this.i(O)^C.i(O);return new d(j,this.h^C.h)};function Z(C){const I=C.g.length+1,j=[];for(let O=0;O<I;O++)j[O]=C.i(O)<<1|C.i(O-1)>>>31;return new d(j,C.h)}function ft(C,I){const j=I>>5;I%=32;const O=C.g.length-j,k=[];for(let z=0;z<O;z++)k[z]=I>0?C.i(z+j)>>>I|C.i(z+j+1)<<32-I:C.i(z+j);return new d(k,C.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,A2=a,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=v,Jr=d}).apply(typeof iv<"u"?iv:typeof self<"u"?self:typeof window<"u"?window:{});var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R2,Pl,I2,uh,sm,C2,j2,D2;(function(){var n,t=Object.defineProperty;function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gc=="object"&&Gc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=i(this);function o(c,y){if(y)t:{var _=a;c=c.split(".");for(var T=0;T<c.length-1;T++){var F=c[T];if(!(F in _))break t;_=_[F]}c=c[c.length-1],T=_[c],y=y(T),y!=T&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&_.push([T,y[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,_){return c.call.apply(c.bind,arguments)}function g(c,y,_){return g=m,g.apply(null,arguments)}function v(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,F,Q){for(var ot=Array(arguments.length-2),At=2;At<arguments.length;At++)ot[At-2]=arguments[At];return y.prototype[F].apply(T,ot)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const y=c.length;if(y>0){const _=Array(y);for(let T=0;T<y;T++)_[T]=c[T];return _}return[]}function M(c,y){for(let T=1;T<arguments.length;T++){const F=arguments[T];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=c.length||0;const Q=F.length||0;c.length=_+Q;for(let ot=0;ot<Q;ot++)c[_+ot]=F[ot]}else c.push(F)}}class B{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(c){d.setTimeout(()=>{throw c},0)}function G(){var c=C;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class X{constructor(){this.h=this.g=null}add(y,_){const T=et.get();T.set(y,_),this.h?this.h.next=T:this.g=T,this.h=T}}var et=new B(()=>new ct,c=>c.reset());class ct{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ft=!1,C=new X,I=()=>{const c=Promise.resolve(void 0);Z=()=>{c.then(j)}};function j(){for(var c;c=G();){try{c.h.call(c.g)}catch(_){P(_)}var y=et;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ft=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,y),d.removeEventListener("test",_,y)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ue(c,y){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}w(ue,k),ue.prototype.init=function(c,y){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),J=0;function ht(c,y,_,T,F){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!T,this.ha=F,this.key=++J,this.da=this.fa=!1}function yt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ct(c,y,_){for(const T in c)y.call(_,c[T],T,c)}function V(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function at(c){const y={};for(const _ in c)y[_]=c[_];return y}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(c,y){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)c[_]=T[_];for(let Q=0;Q<lt.length;Q++)_=lt[Q],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function gt(c){this.src=c,this.g={},this.h=0}gt.prototype.add=function(c,y,_,T,F){const Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);const ot=_t(c,y,T,F);return ot>-1?(y=c[ot],_||(y.fa=!1)):(y=new ht(y,this.src,Q,!!T,F),y.fa=_,c.push(y)),y};function jt(c,y){const _=y.type;if(_ in c.g){var T=c.g[_],F=Array.prototype.indexOf.call(T,y,void 0),Q;(Q=F>=0)&&Array.prototype.splice.call(T,F,1),Q&&(yt(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _t(c,y,_,T){for(let F=0;F<c.length;++F){const Q=c[F];if(!Q.da&&Q.listener==y&&Q.capture==!!_&&Q.ha==T)return F}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),zt={};function Me(c,y,_,T,F){if(Array.isArray(y)){for(let Q=0;Q<y.length;Q++)Me(c,y[Q],_,T,F);return null}return _=bu(_),c&&c[ne]?c.J(y,_,p(T)?!!T.capture:!1,F):Di(c,y,_,!1,T,F)}function Di(c,y,_,T,F,Q){if(!y)throw Error("Invalid event type");const ot=p(F)?!!F.capture:!!F;let At=Io(c);if(At||(c[ge]=At=new gt(c)),_=At.add(y,_,T,ot,Q),_.proxy)return _;if(T=qn(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)z||(F=ot),F===void 0&&(F=!1),c.addEventListener(y.toString(),T,F);else if(c.attachEvent)c.attachEvent(rs(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function qn(){function c(_){return y.call(c.src,c.listener,_)}const y=ld;return c}function on(c,y,_,T,F){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)on(c,y[Q],_,T,F);else T=p(T)?!!T.capture:!!T,_=bu(_),c&&c[ne]?(c=c.i,Q=String(y).toString(),Q in c.g&&(y=c.g[Q],_=_t(y,_,T,F),_>-1&&(yt(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[Q],c.h--)))):c&&(c=Io(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_t(y,_,T,F)),(_=c>-1?y[c]:null)&&ua(_))}function ua(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ne])jt(y.i,c);else{var _=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(_,T,c.capture):y.detachEvent?y.detachEvent(rs(_),T):y.addListener&&y.removeListener&&y.removeListener(T),(_=Io(y))?(jt(_,c),_.h==0&&(_.src=null,y[ge]=null)):yt(c)}}}function rs(c){return c in zt?zt[c]:zt[c]="on"+c}function ld(c,y){if(c.da)c=!0;else{y=new ue(y,this);const _=c.listener,T=c.ha||c.src;c.fa&&ua(c),c=_.call(T,y)}return c}function Io(c){return c=c[ge],c instanceof gt?c:null}var fn="__closure_events_fn_"+(Math.random()*1e9>>>0);function bu(c){return typeof c=="function"?c:(c[fn]||(c[fn]=function(y){return c.handleEvent(y)}),c[fn])}function Oe(){O.call(this),this.i=new gt(this),this.M=this,this.G=null}w(Oe,O),Oe.prototype[ne]=!0,Oe.prototype.removeEventListener=function(c,y,_,T){on(this,c,y,_,T)};function ze(c,y){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new k(y,c);else if(y instanceof k)y.target=y.target||c;else{var F=y;y=new k(T,c),ut(y,F)}F=!0;let Q,ot;if(_)for(ot=_.length-1;ot>=0;ot--)Q=y.g=_[ot],F=Ni(Q,T,!0,y)&&F;if(Q=y.g=c,F=Ni(Q,T,!0,y)&&F,F=Ni(Q,T,!1,y)&&F,_)for(ot=0;ot<_.length;ot++)Q=y.g=_[ot],F=Ni(Q,T,!1,y)&&F}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let T=0;T<_.length;T++)yt(_[T]);delete c.g[y],c.h--}}this.G=null},Oe.prototype.J=function(c,y,_,T){return this.i.add(String(c),y,!1,_,T)},Oe.prototype.K=function(c,y,_,T){return this.i.add(String(c),y,!0,_,T)};function Ni(c,y,_,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let Q=0;Q<y.length;++Q){const ot=y[Q];if(ot&&!ot.da&&ot.capture==_){const At=ot.listener,se=ot.ha||ot.src;ot.fa&&jt(c.i,ot),F=At.call(se,T)!==!1&&F}}return F&&!T.defaultPrevented}function ud(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:d.setTimeout(c,y||0)}function Co(c){c.g=ud(()=>{c.g=null,c.i&&(c.i=!1,Co(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class cd extends O{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ca(c){O.call(this),this.h=c,this.g={}}w(ca,O);var hr=[];function Je(c){Ct(c.g,function(y,_){this.g.hasOwnProperty(_)&&ua(y)},c),c.g={}}ca.prototype.N=function(){ca.Z.N.call(this),Je(this)},ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=d.JSON.stringify,ln=d.JSON.parse,hd=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function wu(){}function Tu(){}var si={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function dr(){k.call(this,"d")}w(dr,k);function Hn(){k.call(this,"c")}w(Hn,k);var Dn={},fr=null;function as(){return fr=fr||new Oe}Dn.Ia="serverreachability";function jo(c){k.call(this,Dn.Ia,c)}w(jo,k);function pr(c){const y=as();ze(y,new jo(y))}Dn.STAT_EVENT="statevent";function ss(c,y){k.call(this,Dn.STAT_EVENT,c),this.stat=y}w(ss,k);function ve(c){const y=as();ze(y,new ss(y,c))}Dn.Ja="timingevent";function Su(c,y){k.call(this,Dn.Ja,c),this.size=y}w(Su,k);function mr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},y)}function gr(){this.g=!0}gr.prototype.ua=function(){this.g=!1};function Do(c,y,_,T,F,Q){c.info(function(){if(c.g)if(Q){var ot="",At=Q.split("&");for(let Yt=0;Yt<At.length;Yt++){var se=At[Yt].split("=");if(se.length>1){const be=se[0];se=se[1];const _n=be.split("_");ot=_n.length>=2&&_n[1]=="type"?ot+(be+"="+se+"&"):ot+(be+"=redacted&")}}}else ot=null;else ot=Q;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+y+`
`+_+`
`+ot})}function No(c,y,_,T,F,Q,ot){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+y+`
`+_+`
`+Q+" "+ot})}function Mi(c,y,_,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+oi(c,_)+(T?" "+T:"")})}function dd(c,y){c.info(function(){return"TIMEOUT: "+y})}gr.prototype.info=function(){};function oi(c,y){if(!c.g)return y;if(!y)return null;try{const Q=JSON.parse(y);if(Q){for(c=0;c<Q.length;c++)if(Array.isArray(Q[c])){var _=Q[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let ot=1;ot<T.length;ot++)T[ot]=""}}}}return jn(Q)}catch{return y}}var _e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},He={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oi;function ha(){}w(ha,wu),ha.prototype.g=function(){return new XMLHttpRequest},Oi=new ha;function da(c){return encodeURIComponent(String(c))}function fd(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Gn(c,y,_,T){this.j=c,this.i=y,this.l=_,this.S=T||1,this.V=new ca(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yr}function yr(){this.i=null,this.g="",this.h=!1}var os={},li={};function ui(c,y,_){c.M=1,c.A=ki(de(y)),c.u=_,c.R=!0,xr(c,null)}function xr(c,y){c.F=Date.now(),fa(c),c.B=de(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Cu(_.i,"t",T),c.C=0,_=c.j.L,c.h=new yr,c.g=ys(c.j,_?y:null,!c.u),c.P>0&&(c.O=new cd(g(c.Y,c,c.g),c.P)),y=c.V,_=c.g,T=c.ba;var F="readystatechange";Array.isArray(F)||(F&&(hr[0]=F.toString()),F=hr);for(let Q=0;Q<F.length;Q++){const ot=Me(_,F[Q],T||y.handleEvent,!1,y.h||y);if(!ot)break;y.g[ot.key]=ot}y=c.J?at(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),pr(),Do(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const y=this.O;y&&tn(c)==3?y.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const At=tn(this.g),se=this.g.ya(),Yt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||Ta(this.g)))){this.K||At!=4||se==7||(se==8||Yt<=0?pr(3):pr(2)),hi(this);var y=this.g.ca();this.X=y;var _=vr(this);if(this.o=y==200,No(this.i,this.v,this.B,this.l,this.S,At,y),this.o){if(this.U&&!this.L){e:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(T)){var Q=T;break e}}Q=null}if(c=Q)Mi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,c);else{this.o=!1,this.m=3,ve(12),di(this),pa(this);break t}}if(this.R){c=!0;let be;for(;!this.K&&this.C<_.length;)if(be=Au(this,_),be==li){At==4&&(this.m=4,ve(14),c=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(be==os){this.m=4,ve(15),Mi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Mi(this.i,this.l,be,null),ls(this,be);if(Ee(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||_.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)Mi(this.i,this.l,_,"[Invalid Chunked Response]"),di(this),pa(this);else if(_.length>0&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.aa&&!ot.P&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),$o(ot),ot.P=!0,ve(11))}}else Mi(this.i,this.l,_,null),ls(this,_);At==4&&di(this),this.o&&!this.K&&(At==4?Fo(this.j,this):(this.o=!1,fa(this)))}else Sa(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),di(this),pa(this)}}}catch{}finally{}};function vr(c){if(!Ee(c))return c.g.la();const y=Ta(c.g);if(y==="")return"";let _="";const T=y.length,F=tn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),pa(c),"";c.h.i=new d.TextDecoder}for(let Q=0;Q<T;Q++)c.h.h=!0,_+=c.h.i.decode(y[Q],{stream:!(F&&Q==T-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function Ee(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Au(c,y){var _=c.C,T=y.indexOf(`
`,_);return T==-1?li:(_=Number(y.substring(_,T)),isNaN(_)?os:(T+=1,T+_>y.length?li:(y=y.slice(T,T+_),c.C=T+_,y)))}Gn.prototype.cancel=function(){this.K=!0,di(this)};function fa(c){c.T=Date.now()+c.H,ci(c,c.H)}function ci(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=mr(g(c.aa,c),y)}function hi(c){c.D&&(d.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(dd(this.i,this.B),this.M!=2&&(pr(),ve(17)),di(this),this.m=2,pa(this)):ci(this,this.T-c)};function pa(c){c.j.I==0||c.K||Fo(c.j,c)}function di(c){hi(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Je(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function ls(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ya(_.h,c))){if(!c.L&&ya(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)gs(_),fi(_);else break t;Bo(_),ve(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=mr(g(_.Va,_),6e3));Nn(_.h)<=1&&_.ta&&(_.ta=void 0)}else zi(_,11)}else if((c.L||_.g==c)&&gs(_),!N(y))for(F=_.Ba.g.parse(y),y=0;y<F.length;y++){let Yt=F[y];const be=Yt[0];if(!(be<=_.K))if(_.K=be,Yt=Yt[1],_.I==2)if(Yt[0]=="c"){_.M=Yt[1],_.ba=Yt[2];const _n=Yt[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const pi=Yt[4];pi!=null&&(_.za=pi,_.j.info("SVER="+_.za));const Xn=Yt[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(T=1.5*Xn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Wn=c.g;if(Wn){const Zn=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var Q=T.h;Q.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(us(Q,Q.h),Q.h=null))}if(T.G){const qo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(T.wa=qo,Wt(T.J,T.G,qo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ot=c;if(T.na=Pu(T,T.L?T.ba:null,T.W),ot.L){Vi(T.h,ot);var At=ot,se=T.O;se&&(At.H=se),At.D&&(hi(At),fa(At)),T.g=ot}else Ou(T);_.i.length>0&&Ca(_)}else Yt[0]!="stop"&&Yt[0]!="close"||zi(_,7);else _.I==3&&(Yt[0]=="stop"||Yt[0]=="close"?Yt[0]=="stop"?zi(_,7):Ra(_):Yt[0]!="noop"&&_.l&&_.l.qa(Yt),_.A=0)}}pr(4)}catch{}}var pd=class{constructor(c,y){this.g=c,this.map=y}};function ma(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ga(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nn(c){return c.h?1:c.g?c.g.size:0}function ya(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function us(c,y){c.g?c.g.add(y):c.h=y}function Vi(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}ma.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return R(c.i)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function md(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let F,Q=null;T>=0?(F=c[_].substring(0,T),Q=c[_].substring(T+1)):F=c[_],y(F,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Yn?(this.l=c.l,_r(this,c.j),this.o=c.o,this.g=c.g,xa(this,c.u),this.h=c.h,Er(this,ju(c.i)),this.m=c.m):c&&(y=String(c).match(hs))?(this.l=!1,_r(this,y[1]||"",!0),this.o=va(y[2]||""),this.g=va(y[3]||"",!0),xa(this,y[4]),this.h=va(y[5]||"",!0),Er(this,y[6]||"",!0),this.m=va(y[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Yn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Le(y,Oo,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Le(y,Oo,!0),"@"),c.push(da(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Le(_,_.charAt(0)=="/"?br:Vo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Le(_,Iu)),c.join("")},Yn.prototype.resolve=function(c){const y=de(this);let _=!!c.j;_?_r(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var T=c.h;if(_)xa(y,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=y.h.lastIndexOf("/");F!=-1&&(T=y.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const Q=[];for(let ot=0;ot<F.length;){const At=F[ot++];At=="."?T&&ot==F.length&&Q.push(""):At==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),T&&ot==F.length&&Q.push("")):(Q.push(At),T=!0)}T=Q.join("/")}else T=F}return _?y.h=T:_=c.i.toString()!=="",_?Er(y,ju(c.i)):_=!!c.m,_&&(y.m=c.m),y};function de(c){return new Yn(c)}function _r(c,y,_){c.j=_?va(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function xa(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Er(c,y,_){y instanceof Mn?(c.i=y,Po(c.i,c.l)):(_||(y=Le(y,Ru)),c.i=new Mn(y,c.l))}function Wt(c,y,_){c.i.set(y,_)}function ki(c){return Wt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function va(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Le(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Mo),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Mo(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,Vo=/[#\?:]/g,br=/[#\?]/g,Ru=/[#\?@]/g,Iu=/#/g;function Mn(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Ui(c){c.g||(c.g=new Map,c.h=0,c.i&&md(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Mn.prototype,n.add=function(c,y){Ui(this),this.i=null,c=Qn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function ko(c,y){Ui(c),y=Qn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Uo(c,y){return Ui(c),y=Qn(c,y),c.g.has(y)}n.forEach=function(c,y){Ui(this),this.g.forEach(function(_,T){_.forEach(function(F){c.call(y,F,T,this)},this)},this)};function ds(c,y){Ui(c);let _=[];if(typeof y=="string")Uo(c,y)&&(_=_.concat(c.g.get(Qn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return Ui(this),this.i=null,c=Qn(this,c),Uo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=ds(this,c),c.length>0?String(c[0]):y):y};function Cu(c,y,_){ko(c,y),_.length>0&&(c.i=null,c.g.set(Qn(c,y),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var _=y[T];const F=da(_);_=ds(this,_);for(let Q=0;Q<_.length;Q++){let ot=F;_[Q]!==""&&(ot+="="+da(_[Q])),c.push(ot)}}return this.i=c.join("&")};function ju(c){const y=new Mn;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Qn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Po(c,y){y&&!c.j&&(Ui(c),c.i=null,c.g.forEach(function(_,T){const F=T.toLowerCase();T!=F&&(ko(this,T),Cu(this,F,_))},c)),c.j=y}function zo(c,y){const _=new gr;if(d.Image){const T=new Image;T.onload=v(un,_,"TestLoadImage: loaded",!0,y,T),T.onerror=v(un,_,"TestLoadImage: error",!1,y,T),T.onabort=v(un,_,"TestLoadImage: abort",!1,y,T),T.ontimeout=v(un,_,"TestLoadImage: timeout",!1,y,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function wr(c,y){const _=new gr,T=new AbortController,F=setTimeout(()=>{T.abort(),un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(Q=>{clearTimeout(F),Q.ok?un(_,"TestPingServer: ok",!0,y):un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),un(_,"TestPingServer: error",!1,y)})}function un(c,y,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Du(){this.g=new hd}function _a(c){this.i=c.Sb||null,this.h=c.ab||!1}w(_a,wu),_a.prototype.g=function(){return new Ea(this.i,this.h)};function Ea(c,y){Oe.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(Ea,Oe),n=Ea.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Pi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||d).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tr(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tr(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?cn(this):Pi(this),this.readyState==3&&Tr(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,cn(this))},n.Na=function(c){this.g&&(this.response=c,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Pi(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Pi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Sr(c){let y="";return Ct(c,function(_,T){y+=T,y+=":",y+=_,y+=`\r
`}),y}function On(c,y,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=Sr(_),typeof c=="string"?_!=null&&da(_):Wt(c,y,_))}function ie(c){Oe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(ie,Oe);var fs=/^https?$/i,Nu=["POST","PUT"];n=ie.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oi.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){ba(this,Q);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())_.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Nu,y,void 0)>=0)||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ot]of _)this.g.setRequestHeader(Q,ot);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(Q){ba(this,Q)}};function ba(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,wa(c),Ve(c)}function wa(c){c.A||(c.A=!0,ze(c,"complete"),ze(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ze(this,"complete"),ze(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Lo(this):this.Xa())},n.Xa=function(){Lo(this)};function Lo(c){if(c.h&&typeof u<"u"){if(c.v&&tn(c)==4)setTimeout(c.Ca.bind(c),0);else if(ze(c,"readystatechange"),tn(c)==4){c.h=!1;try{const Q=c.ca();t:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var T;if(T=Q===0){let ot=String(c.D).match(hs)[1]||null;!ot&&d.self&&d.self.location&&(ot=d.self.location.protocol.slice(0,-1)),T=!fs.test(ot?ot.toLowerCase():"")}_=T}if(_)ze(c,"complete"),ze(c,"success");else{c.o=6;try{var F=tn(c)>2?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.ca()+"]",wa(c)}}finally{Ve(c)}}}}function Ve(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||ze(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ln(y)}};function Ta(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(c){const y={};c=(c.g&&tn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(N(c[T]))continue;var _=fd(c[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=y[F]||[];y[F]=Q,Q.push(_)}V(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function ps(c){this.za=0,this.i=[],this.j=new gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Aa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Aa("baseRetryDelayMs",5e3,c),this.Za=Aa("retryDelaySeedMs",1e4,c),this.Ta=Aa("forwardChannelMaxRetries",2,c),this.va=Aa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ma(c&&c.concurrentRequestLimit),this.Ba=new Du,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ps.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,T){ve(0),this.W=c,this.H=y||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Pu(this,null,this.W),Ca(this)};function Ra(c){if(Ia(c),c.I==3){var y=c.V++,_=de(c.J);if(Wt(_,"SID",c.M),Wt(_,"RID",y),Wt(_,"TYPE","terminate"),ja(c,_),y=new Gn(c,c.j,y),y.M=2,y.A=ki(de(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=y.A,_=!0),_||(y.g=ys(y.j,null),y.g.ea(y.A)),y.F=Date.now(),fa(y)}Uu(c)}function fi(c){c.g&&($o(c),c.g.cancel(),c.g=null)}function Ia(c){fi(c),c.v&&(d.clearTimeout(c.v),c.v=null),gs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ca(c){if(!ga(c.h)&&!c.m){c.m=!0;var y=c.Ea;Z||I(),ft||(Z(),ft=!0),C.add(y,c),c.D=0}}function gd(c,y){return Nn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=mr(g(c.Ea,c,y),ku(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const F=new Gn(this,this.j,c);let Q=this.o;if(this.U&&(Q?(Q=at(Q),ut(Q,this.U)):Q=this.U),this.u!==null||this.R||(F.J=Q,Q=null),this.S)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=ms(this,F,y),_=de(this.J),Wt(_,"RID",c),Wt(_,"CVER",22),this.G&&Wt(_,"X-HTTP-Session-Id",this.G),ja(this,_),Q&&(this.R?y="headers="+da(Sr(Q))+"&"+y:this.u&&On(_,this.u,Q)),us(this.h,F),this.Ra&&Wt(_,"TYPE","init"),this.S?(Wt(_,"$req",y),Wt(_,"SID","null"),F.U=!0,ui(F,_,null)):ui(F,_,y),this.I=2}}else this.I==3&&(c?Mu(this,c):this.i.length==0||ga(this.h)||Mu(this))};function Mu(c,y){var _;y?_=y.l:_=c.V++;const T=de(c.J);Wt(T,"SID",c.M),Wt(T,"RID",_),Wt(T,"AID",c.K),ja(c,T),c.u&&c.o&&On(T,c.u,c.o),_=new Gn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=ms(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),us(c.h,_),ui(_,T,y)}function ja(c,y){c.H&&Ct(c.H,function(_,T){Wt(y,T,_)}),c.l&&Ct({},function(_,T){Wt(y,T,_)})}function ms(c,y,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var F=c.i;let At=-1;for(;;){const se=["count="+_];At==-1?_>0?(At=F[0].g,se.push("ofs="+At)):At=0:se.push("ofs="+At);let Yt=!0;for(let be=0;be<_;be++){var Q=F[be].g;const _n=F[be].map;if(Q-=At,Q<0)At=Math.max(0,F[be].g-100),Yt=!1;else try{Q="req"+Q+"_"||"";try{var ot=_n instanceof Map?_n:Object.entries(_n);for(const[pi,Xn]of ot){let Wn=Xn;p(Xn)&&(Wn=jn(Xn)),se.push(Q+pi+"="+encodeURIComponent(Wn))}}catch(pi){throw se.push(Q+"type="+encodeURIComponent("_badmap")),pi}}catch{T&&T(_n)}}if(Yt){ot=se.join("&");break t}}ot=void 0}return c=c.i.splice(0,_),y.G=c,ot}function Ou(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;Z||I(),ft||(Z(),ft=!0),C.add(y,c),c.A=0}}function Bo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=mr(g(c.Da,c),ku(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=mr(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),fi(this),Vu(this))};function $o(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Vu(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=de(c.na);Wt(y,"RID","rpc"),Wt(y,"SID",c.M),Wt(y,"AID",c.K),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Wt(y,"TO",c.ia),Wt(y,"TYPE","xmlhttp"),ja(c,y),c.u&&c.o&&On(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=ki(de(y)),_.u=null,_.R=!0,xr(_,c)}n.Va=function(){this.C!=null&&(this.C=null,fi(this),Bo(this),ve(19))};function gs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Fo(c,y){var _=null;if(c.g==y){gs(c),$o(c),c.g=null;var T=2}else if(ya(c.h,y))_=y.G,Vi(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var F=c.D;T=as(),ze(T,new Su(T,_)),Ca(c)}else Ou(c);else if(F=y.m,F==3||F==0&&y.X>0||!(T==1&&gd(c,y)||T==2&&Bo(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),F){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function ku(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function zi(c,y){if(c.j.info("Error code "+y),y==2){var _=g(c.bb,c),T=c.Ua;const F=!T;T=new Yn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||_r(T,"https"),ki(T),F?zo(T.toString(),_):wr(T.toString(),_)}else ve(2);c.I=0,c.l&&c.l.pa(y),Uu(c),Ia(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Uu(c){if(c.I=0,c.ja=[],c.l){const y=cs(c.h);(y.length!=0||c.i.length!=0)&&(M(c.ja,y),M(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Pu(c,y,_){var T=_ instanceof Yn?de(_):new Yn(_);if(T.g!="")y&&(T.g=y+"."+T.g),xa(T,T.u);else{var F=d.location;T=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const Q=new Yn(null);T&&_r(Q,T),y&&(Q.g=y),F&&xa(Q,F),_&&(Q.h=_),T=Q}return _=c.G,y=c.wa,_&&y&&Wt(T,_,y),Wt(T,"VER",c.ka),ja(c,T),T}function ys(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ie(new _a({ab:_})):new ie(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zu(){}n=zu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xs(){}xs.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){Oe.call(this),this.g=new ps(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!N(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!N(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Ar(this)}w(hn,Oe),hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Ra(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=jn(c),c=_);y.i.push(new pd(y.Ya++,c)),y.I==3&&Ca(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,hn.Z.N.call(this)};function Ko(c){dr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}w(Ko,dr);function Lu(){Hn.call(this),this.status=1}w(Lu,Hn);function Ar(c){this.g=c}w(Ar,zu),Ar.prototype.ra=function(){ze(this.g,"a")},Ar.prototype.qa=function(c){ze(this.g,new Ko(c))},Ar.prototype.pa=function(c){ze(this.g,new Lu)},Ar.prototype.oa=function(){ze(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,D2=function(){return new xs},j2=function(){return as()},C2=Dn,sm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,uh=_e,He.COMPLETE="complete",I2=He,Tu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Pl=Tu,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,R2=ie}).apply(typeof Gc<"u"?Gc:typeof self<"u"?self:typeof window<"u"?window:{});const rv="@firebase/firestore",av="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let wo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new E2("@firebase/firestore");function Qs(){return Za.logLevel}function pt(n,...t){if(Za.logLevel<=$t.DEBUG){const i=t.map(eg);Za.debug(`Firestore (${wo}): ${n}`,...i)}}function lr(n,...t){if(Za.logLevel<=$t.ERROR){const i=t.map(eg);Za.error(`Firestore (${wo}): ${n}`,...i)}}function lo(n,...t){if(Za.logLevel<=$t.WARN){const i=t.map(eg);Za.warn(`Firestore (${wo}): ${n}`,...i)}}function eg(n){if(typeof n=="string")return n;try{/**
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
 */function wt(n,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,N2(n,a,i)}function N2(n,t,i){let a=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw lr(a),new Error(a)}function Gt(n,t,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,n||N2(t,o,a)}function It(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends bo{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class aI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(an.UNAUTHENTICATED)))}shutdown(){}}class sI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class oI{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Gt(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,i(m)):Promise.resolve();let u=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ir,t.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const m=u;t.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ir)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Gt(typeof a.accessToken=="string",31837,{l:a}),new M2(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Gt(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class lI{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uI{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new lI(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cI{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$6(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){Gt(this.o===void 0,3512);const a=u=>{u.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,pt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>a(u)))};const o=u=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(Gt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new sv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<n;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=hI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<i&&(a+=t.charAt(o[u]%62))}return a}}function Ut(n,t){return n<t?-1:n>t?1:0}function om(n,t){const i=Math.min(n.length,t.length);for(let a=0;a<i;a++){const o=n.charAt(a),u=t.charAt(a);if(o!==u)return jp(o)===jp(u)?Ut(o,u):jp(o)?1:-1}return Ut(n.length,t.length)}const dI=55296,fI=57343;function jp(n){const t=n.charCodeAt(0);return t>=dI&&t<=fI}function uo(n,t,i){return n.length===t.length&&n.every(((a,o)=>i(a,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="__name__";class Ei{constructor(t,i,a){i===void 0?i=0:i>t.length&&wt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&wt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let o=0;o<a;o++){const u=Ei.compareSegments(t.get(o),i.get(o));if(u!==0)return u}return Ut(t.length,i.length)}static compareSegments(t,i){const a=Ei.isNumericId(t),o=Ei.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?Ei.extractNumericId(t).compare(Ei.extractNumericId(i)):om(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jr.fromString(t.substring(4,t.length-2))}}class ae extends Ei{construct(t,i,a){return new ae(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(it.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new ae(i)}static emptyPath(){return new ae([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ei{construct(t,i,a){return new We(t,i,a)}static isValidIdentifier(t){return pI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ov}static keyField(){return new We([ov])}static fromServerFormat(t){const i=[];let a="",o=0;const u=()=>{if(a.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new dt(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new dt(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=m,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(a+=p,o++):(u(),o++)}if(u(),d)throw new dt(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(i)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function O2(n,t,i){if(!i)throw new dt(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mI(n,t,i,a){if(t===!0&&a===!0)throw new dt(it.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function lv(n){if(!vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uv(n){if(vt.isDocumentKey(n))throw new dt(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function V2(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":wt(12329,{type:typeof n})}function ur(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new dt(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=qh(n);throw new dt(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return n}/**
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
 */function Ne(n,t){const i={typeString:n};return t&&(i.value=t),i}function fu(n,t){if(!V2(n))throw new dt(it.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const o=t[a].typeString,u="value"in t[a]?{value:t[a].value}:void 0;if(!(a in n)){i=`JSON missing required field: '${a}'`;break}const d=n[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${a}' field to equal '${u.value}'`;break}}if(i)throw new dt(it.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=-62135596800,hv=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(t){return le.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*hv);return new le(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new dt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<cv)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hv}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(fu(t,le._jsonSchema))return new le(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-cv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ne("string",le._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const iu=-1;function gI(n,t){const i=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new le(i+1,0):new le(i,a));return new ea(o,vt.empty(),t)}function yI(n){return new ea(n.readTime,n.key,iu)}class ea{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new ea(St.min(),vt.empty(),iu)}static max(){return new ea(St.max(),vt.empty(),iu)}}function xI(n,t){let i=n.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(n.documentKey,t.documentKey),i!==0?i:Ut(n.largestBatchId,t.largestBatchId))}/**
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
 */const vI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _I{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==vI)throw n;pt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&wt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new st(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(i,u).next(a,o)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof st?i:st.resolve(i)}catch(i){return st.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):st.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):st.reject(i)}static resolve(t){return new st(((i,a)=>{i(t)}))}static reject(t){return new st(((i,a)=>{a(t)}))}static waitFor(t){return new st(((i,a)=>{let o=0,u=0,d=!1;t.forEach((p=>{++o,p.next((()=>{++u,d&&u===o&&i()}),(m=>a(m)))})),d=!0,u===o&&i()}))}static or(t){let i=st.resolve(!1);for(const a of t)i=i.next((o=>o?st.resolve(o):a()));return i}static forEach(t,i){const a=[];return t.forEach(((o,u)=>{a.push(i.call(this,o,u))})),this.waitFor(a)}static mapArray(t,i){return new st(((a,o)=>{const u=t.length,d=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;i(t[g]).next((v=>{d[g]=v,++p,p===u&&a(d)}),(v=>o(v)))}}))}static doWhile(t,i){return new st(((a,o)=>{const u=()=>{t()===!0?i().next((()=>{u()}),o):a()};u()}))}}function EI(n){const t=n.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function So(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hh{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Hh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=-1;function Gh(n){return n==null}function Sh(n){return n===0&&1/n==-1/0}function bI(n){return typeof n=="number"&&Number.isInteger(n)&&!Sh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="";function wI(n){let t="";for(let i=0;i<n.length;i++)t.length>0&&(t=dv(t)),t=TI(n.get(i),t);return dv(t)}function TI(n,t){let i=t;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":i+="";break;case k2:i+="";break;default:i+=u}}return i}function dv(n){return n+k2+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){let t=0;for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t++;return t}function oa(n,t){for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t(i,n[i])}function U2(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,i){this.comparator=t,this.root=i||Xe.EMPTY}insert(t,i){return new me(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yc(this.root,t,this.comparator,!0)}}class Yc{constructor(t,i,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=i?a(t.key,i):1,i&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,i,a,o,u){this.key=t,this.value=i,this.color=a??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,o,u){return new Xe(t??this.key,i??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,i,a),null):u===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw wt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw wt(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw wt(57766)}get value(){throw wt(16141)}get color(){throw wt(16727)}get left(){throw wt(29726)}get right(){throw wt(36894)}copy(t,i,a,o,u){return this}insert(t,i,a){return new Xe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new pv(this.data.getIterator())}getIteratorFrom(t){return new pv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Pe(this.comparator);return i.data=t,i}}class pv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new Cn([])}unionWith(t){let i=new Pe(We.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Cn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return uo(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class P2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new P2("Invalid base64 string: "+u):u}})(t);return new Ze(i)}static fromUint8Array(t){const i=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(t);return new Ze(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const SI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function na(n){if(Gt(!!n,39018),typeof n=="string"){let t=0;const i=SI.exec(n);if(Gt(!!i,46558,{timestamp:n}),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ia(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const z2="server_timestamp",L2="__type__",B2="__previous_value__",$2="__local_write_time__";function rg(n){return(n?.mapValue?.fields||{})[L2]?.stringValue===z2}function Yh(n){const t=n.mapValue.fields[B2];return rg(t)?Yh(t):t}function ru(n){const t=na(n.mapValue.fields[$2].timestampValue);return new le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t,i,a,o,u,d,p,m,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Ah="(default)";class au{constructor(t,i){this.projectId=t,this.database=i||Ah}static empty(){return new au("","")}get isDefaultDatabase(){return this.database===Ah}isEqual(t){return t instanceof au&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const F2="__type__",RI="__max__",Qc={mapValue:{}},K2="__vector__",Rh="value";function ra(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rg(n)?4:CI(n)?9007199254740991:II(n)?10:11:wt(28295,{value:n})}function Ii(n,t){if(n===t)return!0;const i=ra(n);if(i!==ra(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ru(n).isEqual(ru(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=na(o.timestampValue),p=na(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(o,u){return ia(o.bytesValue).isEqual(ia(u.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(o,u){return Se(o.geoPointValue.latitude)===Se(u.geoPointValue.latitude)&&Se(o.geoPointValue.longitude)===Se(u.geoPointValue.longitude)})(n,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Se(o.integerValue)===Se(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=Se(o.doubleValue),p=Se(u.doubleValue);return d===p?Sh(d)===Sh(p):isNaN(d)&&isNaN(p)}return!1})(n,t);case 9:return uo(n.arrayValue.values||[],t.arrayValue.values||[],Ii);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},p=u.mapValue.fields||{};if(fv(d)!==fv(p))return!1;for(const m in d)if(d.hasOwnProperty(m)&&(p[m]===void 0||!Ii(d[m],p[m])))return!1;return!0})(n,t);default:return wt(52216,{left:n})}}function su(n,t){return(n.values||[]).find((i=>Ii(i,t)))!==void 0}function co(n,t){if(n===t)return 0;const i=ra(n),a=ra(t);if(i!==a)return Ut(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ut(n.booleanValue,t.booleanValue);case 2:return(function(u,d){const p=Se(u.integerValue||u.doubleValue),m=Se(d.integerValue||d.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return mv(n.timestampValue,t.timestampValue);case 4:return mv(ru(n),ru(t));case 5:return om(n.stringValue,t.stringValue);case 6:return(function(u,d){const p=ia(u),m=ia(d);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(u,d){const p=u.split("/"),m=d.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ut(p[g],m[g]);if(v!==0)return v}return Ut(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(u,d){const p=Ut(Se(u.latitude),Se(d.latitude));return p!==0?p:Ut(Se(u.longitude),Se(d.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return gv(n.arrayValue,t.arrayValue);case 10:return(function(u,d){const p=u.fields||{},m=d.fields||{},g=p[Rh]?.arrayValue,v=m[Rh]?.arrayValue,w=Ut(g?.values?.length||0,v?.values?.length||0);return w!==0?w:gv(g,v)})(n.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Qc.mapValue&&d===Qc.mapValue)return 0;if(u===Qc.mapValue)return 1;if(d===Qc.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=d.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let w=0;w<m.length&&w<v.length;++w){const S=om(m[w],v[w]);if(S!==0)return S;const R=co(p[m[w]],g[v[w]]);if(R!==0)return R}return Ut(m.length,v.length)})(n.mapValue,t.mapValue);default:throw wt(23264,{he:i})}}function mv(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Ut(n,t);const i=na(n),a=na(t),o=Ut(i.seconds,a.seconds);return o!==0?o:Ut(i.nanos,a.nanos)}function gv(n,t){const i=n.values||[],a=t.values||[];for(let o=0;o<i.length&&o<a.length;++o){const u=co(i[o],a[o]);if(u)return u}return Ut(i.length,a.length)}function ho(n){return lm(n)}function lm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(i){const a=na(i);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(i){return ia(i).toBase64()})(n.bytesValue):"referenceValue"in n?(function(i){return vt.fromName(i).toString()})(n.referenceValue):"geoPointValue"in n?(function(i){return`geo(${i.latitude},${i.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(i){let a="[",o=!0;for(const u of i.values||[])o?o=!1:a+=",",a+=lm(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(i){const a=Object.keys(i.fields||{}).sort();let o="{",u=!0;for(const d of a)u?u=!1:o+=",",o+=`${d}:${lm(i.fields[d])}`;return o+"}"})(n.mapValue):wt(61005,{value:n})}function ch(n){switch(ra(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Yh(n);return t?16+ch(t):16;case 5:return 2*n.stringValue.length;case 6:return ia(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+ch(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return oa(a.fields,((u,d)=>{o+=u.length+ch(d)})),o})(n.mapValue);default:throw wt(13486,{value:n})}}function yv(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function um(n){return!!n&&"integerValue"in n}function ag(n){return!!n&&"arrayValue"in n}function xv(n){return!!n&&"nullValue"in n}function vv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hh(n){return!!n&&"mapValue"in n}function II(n){return(n?.mapValue?.fields||{})[F2]?.stringValue===K2}function ql(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return oa(n.mapValue.fields,((i,a)=>t.mapValue.fields[i]=ql(a))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=ql(n.arrayValue.values[i]);return t}return{...n}}function CI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===RI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.value=t}static empty(){return new xn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!hh(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=ql(i)}setAll(t){let i=We.emptyPath(),a={},o=[];t.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,a,o),a={},o=[],i=p.popLast()}d?a[p.lastSegment()]=ql(d):o.push(p.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,a,o)}delete(t){const i=this.field(t.popLast());hh(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ii(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=i.mapValue.fields[t.get(a)];hh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,a){oa(i,((o,u)=>t[o]=u));for(const o of a)delete t[o]}clone(){return new xn(ql(this.value))}}function q2(n){const t=[];return oa(n.fields,((i,a)=>{const o=new We([i]);if(hh(a)){const u=q2(a.mapValue).fields;if(u.length===0)t.push(o);else for(const d of u)t.push(o.child(d))}else t.push(o)})),new Cn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ih{constructor(t,i){this.position=t,this.inclusive=i}}function _v(n,t,i){let a=0;for(let o=0;o<n.position.length;o++){const u=t[o],d=n.position[o];if(u.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=co(d,i.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function Ev(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let i=0;i<n.position.length;i++)if(!Ii(n.position[i],t.position[i]))return!1;return!0}/**
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
 */class ou{constructor(t,i="asc"){this.field=t,this.dir=i}}function jI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class H2{}class De extends H2{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new NI(t,i,a):i==="array-contains"?new VI(t,a):i==="in"?new kI(t,a):i==="not-in"?new UI(t,a):i==="array-contains-any"?new PI(t,a):new De(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new MI(t,a):new OI(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(co(i,this.value)):i!==null&&ra(this.value)===ra(i)&&this.matchesComparison(co(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ri extends H2{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new ri(t,i)}matches(t){return G2(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function G2(n){return n.op==="and"}function Y2(n){return DI(n)&&G2(n)}function DI(n){for(const t of n.filters)if(t instanceof ri)return!1;return!0}function cm(n){if(n instanceof De)return n.field.canonicalString()+n.op.toString()+ho(n.value);if(Y2(n))return n.filters.map((t=>cm(t))).join(",");{const t=n.filters.map((i=>cm(i))).join(",");return`${n.op}(${t})`}}function Q2(n,t){return n instanceof De?(function(a,o){return o instanceof De&&a.op===o.op&&a.field.isEqual(o.field)&&Ii(a.value,o.value)})(n,t):n instanceof ri?(function(a,o){return o instanceof ri&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,d,p)=>u&&Q2(d,o.filters[p])),!0):!1})(n,t):void wt(19439)}function X2(n){return n instanceof De?(function(i){return`${i.field.canonicalString()} ${i.op} ${ho(i.value)}`})(n):n instanceof ri?(function(i){return i.op.toString()+" {"+i.getFilters().map(X2).join(" ,")+"}"})(n):"Filter"}class NI extends De{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class MI extends De{constructor(t,i){super(t,"in",i),this.keys=W2("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class OI extends De{constructor(t,i){super(t,"not-in",i),this.keys=W2("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function W2(n,t){return(t.arrayValue?.values||[]).map((i=>vt.fromName(i.referenceValue)))}class VI extends De{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return ag(i)&&su(i.arrayValue,this.value)}}class kI extends De{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&su(this.value.arrayValue,i)}}class UI extends De{constructor(t,i){super(t,"not-in",i)}matches(t){if(su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!su(this.value.arrayValue,i)}}class PI extends De{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!ag(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>su(this.value.arrayValue,a)))}}/**
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
 */class zI{constructor(t,i=null,a=[],o=[],u=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function bv(n,t=null,i=[],a=[],o=null,u=null,d=null){return new zI(n,t,i,a,o,u,d)}function sg(n){const t=It(n);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>cm(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),Gh(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>ho(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>ho(a))).join(",")),t.Te=i}return t.Te}function og(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!jI(n.orderBy[i],t.orderBy[i]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(!Q2(n.filters[i],t.filters[i]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ev(n.startAt,t.startAt)&&Ev(n.endAt,t.endAt)}function hm(n){return vt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,i=null,a=[],o=[],u=null,d="F",p=null,m=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function LI(n,t,i,a,o,u,d,p){return new Ao(n,t,i,a,o,u,d,p)}function lg(n){return new Ao(n)}function wv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Z2(n){return n.collectionGroup!==null}function Hl(n){const t=It(n);if(t.Ie===null){t.Ie=[];const i=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),i.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Pe(We.comparator);return d.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(t).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new ou(u,a))})),i.has(We.keyField().canonicalString())||t.Ie.push(new ou(We.keyField(),a))}return t.Ie}function wi(n){const t=It(n);return t.Ee||(t.Ee=BI(t,Hl(n))),t.Ee}function BI(n,t){if(n.limitType==="F")return bv(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new ou(o.field,u)}));const i=n.endAt?new Ih(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Ih(n.startAt.position,n.startAt.inclusive):null;return bv(n.path,n.collectionGroup,t,n.filters,n.limit,i,a)}}function dm(n,t){const i=n.filters.concat([t]);return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),i,n.limit,n.limitType,n.startAt,n.endAt)}function fm(n,t,i){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,i,n.startAt,n.endAt)}function Qh(n,t){return og(wi(n),wi(t))&&n.limitType===t.limitType}function J2(n){return`${sg(wi(n))}|lt:${n.limitType}`}function Xs(n){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((o=>X2(o))).join(", ")}]`),Gh(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((o=>ho(o))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((o=>ho(o))).join(",")),`Target(${a})`})(wi(n))}; limitType=${n.limitType})`}function Xh(n,t){return t.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):vt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,t)&&(function(a,o){for(const u of Hl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,t)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,t)&&(function(a,o){return!(a.startAt&&!(function(d,p,m){const g=_v(d,p,m);return d.inclusive?g<=0:g<0})(a.startAt,Hl(a),o)||a.endAt&&!(function(d,p,m){const g=_v(d,p,m);return d.inclusive?g>=0:g>0})(a.endAt,Hl(a),o))})(n,t)}function $I(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tE(n){return(t,i)=>{let a=!1;for(const o of Hl(n)){const u=FI(o,t,i);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function FI(n,t,i){const a=n.field.isKeyField()?vt.comparator(t.key,i.key):(function(u,d,p){const m=d.data.field(u),g=p.data.field(u);return m!==null&&g!==null?co(m,g):wt(42886)})(n.field,t,i);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return wt(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){oa(this.inner,((i,a)=>{for(const[o,u]of a)t(o,u)}))}isEmpty(){return U2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new me(vt.comparator);function cr(){return KI}const eE=new me(vt.comparator);function zl(...n){let t=eE;for(const i of n)t=t.insert(i.key,i);return t}function nE(n){let t=eE;return n.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ya(){return Gl()}function iE(){return Gl()}function Gl(){return new es((n=>n.toString()),((n,t)=>n.isEqual(t)))}const qI=new me(vt.comparator),HI=new Pe(vt.comparator);function Pt(...n){let t=HI;for(const i of n)t=t.add(i);return t}const GI=new Pe(Ut);function YI(){return GI}/**
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
 */function ug(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sh(t)?"-0":t}}function rE(n){return{integerValue:""+n}}function aE(n,t){return bI(t)?rE(t):ug(n,t)}/**
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
 */class Wh{constructor(){this._=void 0}}function QI(n,t,i){return n instanceof Ch?(function(o,u){const d={fields:{[L2]:{stringValue:z2},[$2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rg(u)&&(u=Yh(u)),u&&(d.fields[B2]=u),{mapValue:d}})(i,t):n instanceof lu?oE(n,t):n instanceof uu?lE(n,t):(function(o,u){const d=sE(o,u),p=Tv(d)+Tv(o.Ae);return um(d)&&um(o.Ae)?rE(p):ug(o.serializer,p)})(n,t)}function XI(n,t,i){return n instanceof lu?oE(n,t):n instanceof uu?lE(n,t):i}function sE(n,t){return n instanceof cu?(function(a){return um(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(t)?t:{integerValue:0}:null}class Ch extends Wh{}class lu extends Wh{constructor(t){super(),this.elements=t}}function oE(n,t){const i=uE(t);for(const a of n.elements)i.some((o=>Ii(o,a)))||i.push(a);return{arrayValue:{values:i}}}class uu extends Wh{constructor(t){super(),this.elements=t}}function lE(n,t){let i=uE(t);for(const a of n.elements)i=i.filter((o=>!Ii(o,a)));return{arrayValue:{values:i}}}class cu extends Wh{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function Tv(n){return Se(n.integerValue||n.doubleValue)}function uE(n){return ag(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t,i){this.field=t,this.transform=i}}function ZI(n,t){return n.field.isEqual(t.field)&&(function(a,o){return a instanceof lu&&o instanceof lu||a instanceof uu&&o instanceof uu?uo(a.elements,o.elements,Ii):a instanceof cu&&o instanceof cu?Ii(a.Ae,o.Ae):a instanceof Ch&&o instanceof Ch})(n.transform,t.transform)}class JI{constructor(t,i){this.version=t,this.transformResults=i}}class Ti{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ti}static exists(t){return new Ti(void 0,t)}static updateTime(t){return new Ti(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Zh{}function cE(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new dE(n.key,Ti.none()):new pu(n.key,n.data,Ti.none());{const i=n.data,a=xn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?a.delete(u):a.set(u,d),o=o.add(u)}return new la(n.key,a,new Cn(o.toArray()),Ti.none())}}function t3(n,t,i){n instanceof pu?(function(o,u,d){const p=o.value.clone(),m=Av(o.fieldTransforms,u,d.transformResults);p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,t,i):n instanceof la?(function(o,u,d){if(!dh(o.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Av(o.fieldTransforms,u,d.transformResults),m=u.data;m.setAll(hE(o)),m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(n,t,i):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function Yl(n,t,i,a){return n instanceof pu?(function(u,d,p,m){if(!dh(u.precondition,d))return p;const g=u.value.clone(),v=Rv(u.fieldTransforms,m,d);return g.setAll(v),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null})(n,t,i,a):n instanceof la?(function(u,d,p,m){if(!dh(u.precondition,d))return p;const g=Rv(u.fieldTransforms,m,d),v=d.data;return v.setAll(hE(u)),v.setAll(g),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(n,t,i,a):(function(u,d,p){return dh(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(n,t,i)}function e3(n,t){let i=null;for(const a of n.fieldTransforms){const o=t.data.field(a.field),u=sE(a.transform,o||null);u!=null&&(i===null&&(i=xn.empty()),i.set(a.field,u))}return i||null}function Sv(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&uo(a,o,((u,d)=>ZI(u,d)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class pu extends Zh{constructor(t,i,a,o=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class la extends Zh{constructor(t,i,a,o,u=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function hE(n){const t=new Map;return n.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=n.data.field(i);t.set(i,a)}})),t}function Av(n,t,i){const a=new Map;Gt(n.length===i.length,32656,{Re:i.length,Ve:n.length});for(let o=0;o<i.length;o++){const u=n[o],d=u.transform,p=t.data.field(u.field);a.set(u.field,XI(d,p,i[o]))}return a}function Rv(n,t,i){const a=new Map;for(const o of n){const u=o.transform,d=i.data.field(o.field);a.set(o.field,QI(u,d,t))}return a}class dE extends Zh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n3 extends Zh{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(t,i,a,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&t3(u,t,a[o])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=Yl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=Yl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=iE();return this.mutations.forEach((o=>{const u=t.get(o.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=i.has(o.key)?null:p;const m=cE(d,p);m!==null&&a.set(o.key,m),d.isValidDocument()||d.convertToNoDocument(St.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&uo(this.mutations,t.mutations,((i,a)=>Sv(i,a)))&&uo(this.baseMutations,t.baseMutations,((i,a)=>Sv(i,a)))}}class cg{constructor(t,i,a,o){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(t,i,a){Gt(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let o=(function(){return qI})();const u=t.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,a[d].version);return new cg(t,i,a,o)}}/**
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
 */let r3=class{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class a3{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,Bt;function s3(n){switch(n){case it.OK:return wt(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return wt(15467,{code:n})}}function fE(n){if(n===void 0)return lr("GRPC error has no .code"),it.UNKNOWN;switch(n){case Ce.OK:return it.OK;case Ce.CANCELLED:return it.CANCELLED;case Ce.UNKNOWN:return it.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return it.INTERNAL;case Ce.UNAVAILABLE:return it.UNAVAILABLE;case Ce.UNAUTHENTICATED:return it.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case Ce.NOT_FOUND:return it.NOT_FOUND;case Ce.ALREADY_EXISTS:return it.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return it.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case Ce.ABORTED:return it.ABORTED;case Ce.OUT_OF_RANGE:return it.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return it.UNIMPLEMENTED;case Ce.DATA_LOSS:return it.DATA_LOSS;default:return wt(39323,{code:n})}}(Bt=Ce||(Ce={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function o3(){return new TextEncoder}/**
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
 */const l3=new Jr([4294967295,4294967295],0);function Iv(n){const t=o3().encode(n),i=new A2;return i.update(t),new Uint8Array(i.digest())}function Cv(n){const t=new DataView(n.buffer),i=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Jr([i,a],0),new Jr([o,u],0)]}class hg{constructor(t,i,a){if(this.bitmap=t,this.padding=i,this.hashCount=a,i<0||i>=8)throw new Ll(`Invalid padding: ${i}`);if(a<0)throw new Ll(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Ll(`Invalid hash count: ${a}`);if(t.length===0&&i!==0)throw new Ll(`Invalid padding when bitmap length is 0: ${i}`);this.ge=8*t.length-i,this.pe=Jr.fromNumber(this.ge)}ye(t,i,a){let o=t.add(i.multiply(Jr.fromNumber(a)));return o.compare(l3)===1&&(o=new Jr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const i=Iv(t),[a,o]=Cv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);if(!this.we(d))return!1}return!0}static create(t,i,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new hg(u,o,i);return a.forEach((p=>d.insert(p))),d}insert(t){if(this.ge===0)return;const i=Iv(t),[a,o]=Cv(i);for(let u=0;u<this.hashCount;u++){const d=this.ye(a,o,u);this.Se(d)}}Se(t){const i=Math.floor(t/8),a=t%8;this.bitmap[i]|=1<<a}}class Ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,i,a,o,u){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,i,a){const o=new Map;return o.set(t,mu.createSynthesizedTargetChangeForCurrentChange(t,i,a)),new Jh(St.min(),o,new me(Ut),cr(),Pt())}}class mu{constructor(t,i,a,o,u){this.resumeToken=t,this.current=i,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,i,a){return new mu(a,i,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,i,a,o){this.be=t,this.removedTargetIds=i,this.key=a,this.De=o}}class pE{constructor(t,i){this.targetId=t,this.Ce=i}}class mE{constructor(t,i,a=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=a,this.cause=o}}class jv{constructor(){this.ve=0,this.Fe=Dv(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),i=Pt(),a=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:a=a.add(o);break;default:wt(38017,{changeType:u})}})),new mu(this.Me,this.xe,t,i,a)}qe(){this.Oe=!1,this.Fe=Dv()}Qe(t,i){this.Oe=!0,this.Fe=this.Fe.insert(t,i)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class u3{constructor(t){this.Ge=t,this.ze=new Map,this.je=cr(),this.Je=Xc(),this.He=Xc(),this.Ye=new me(Ut)}Ze(t){for(const i of t.be)t.De&&t.De.isFoundDocument()?this.Xe(i,t.De):this.et(i,t.key,t.De);for(const i of t.removedTargetIds)this.et(i,t.key,t.De)}tt(t){this.forEachTarget(t,(i=>{const a=this.nt(i);switch(t.state){case 0:this.rt(i)&&a.Le(t.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(t.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(i);break;case 3:this.rt(i)&&(a.We(),a.Le(t.resumeToken));break;case 4:this.rt(i)&&(this.it(i),a.Le(t.resumeToken));break;default:wt(56790,{state:t.state})}}))}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.ze.forEach(((a,o)=>{this.rt(o)&&i(o)}))}st(t){const i=t.targetId,a=t.Ce.count,o=this.ot(i);if(o){const u=o.target;if(hm(u))if(a===0){const d=new vt(u.path);this.et(i,d,sn.newNoDocument(d,St.min()))}else Gt(a===1,20013,{expectedCount:a});else{const d=this._t(i);if(d!==a){const p=this.ut(t),m=p?this.ct(p,t,d):1;if(m!==0){this.it(i);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(i,g)}}}}}ut(t){const i=t.Ce.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=i;let d,p;try{d=ia(a).toUint8Array()}catch(m){if(m instanceof P2)return lo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new hg(d,o,u)}catch(m){return lo(m instanceof Ll?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(t,i,a){return i.Ce.count===a-this.Pt(t,i.targetId)?0:2}Pt(t,i){const a=this.Ge.getRemoteKeysForTarget(i);let o=0;return a.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(i,u,null),o++)})),o}Tt(t){const i=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&hm(p.target)){const m=new vt(p.target.path);this.It(m).has(d)||this.Et(d,m)||this.et(d,m,sn.newNoDocument(m,t))}u.Be&&(i.set(d,u.ke()),u.qe())}}));let a=Pt();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const o=new Jh(t,i,this.Ye,this.je,a);return this.je=cr(),this.Je=Xc(),this.He=Xc(),this.Ye=new me(Ut),o}Xe(t,i){if(!this.rt(t))return;const a=this.Et(t,i.key)?2:0;this.nt(t).Qe(i.key,a),this.je=this.je.insert(i.key,i),this.Je=this.Je.insert(i.key,this.It(i.key).add(t)),this.He=this.He.insert(i.key,this.dt(i.key).add(t))}et(t,i,a){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,i)?o.Qe(i,1):o.$e(i),this.He=this.He.insert(i,this.dt(i).delete(t)),this.He=this.He.insert(i,this.dt(i).add(t)),a&&(this.je=this.je.insert(i,a))}removeTarget(t){this.ze.delete(t)}_t(t){const i=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let i=this.ze.get(t);return i||(i=new jv,this.ze.set(t,i)),i}dt(t){let i=this.He.get(t);return i||(i=new Pe(Ut),this.He=this.He.insert(t,i)),i}It(t){let i=this.Je.get(t);return i||(i=new Pe(Ut),this.Je=this.Je.insert(t,i)),i}rt(t){const i=this.ot(t)!==null;return i||pt("WatchChangeAggregator","Detected inactive target",t),i}ot(t){const i=this.ze.get(t);return i&&i.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new jv),this.Ge.getRemoteKeysForTarget(t).forEach((i=>{this.et(t,i,null)}))}Et(t,i){return this.Ge.getRemoteKeysForTarget(t).has(i)}}function Xc(){return new me(vt.comparator)}function Dv(){return new me(vt.comparator)}const c3={asc:"ASCENDING",desc:"DESCENDING"},h3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d3={and:"AND",or:"OR"};class f3{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function pm(n,t){return n.useProto3Json||Gh(t)?t:{value:t}}function jh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function p3(n,t){return jh(n,t.toTimestamp())}function Si(n){return Gt(!!n,49232),St.fromTimestamp((function(i){const a=na(i);return new le(a.seconds,a.nanos)})(n))}function dg(n,t){return mm(n,t).canonicalString()}function mm(n,t){const i=(function(o){return new ae(["projects",o.projectId,"databases",o.database])})(n).child("documents");return t===void 0?i:i.child(t)}function yE(n){const t=ae.fromString(n);return Gt(bE(t),10190,{key:t.toString()}),t}function gm(n,t){return dg(n.databaseId,t.path)}function Dp(n,t){const i=yE(t);if(i.get(1)!==n.databaseId.projectId)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+n.databaseId.projectId);if(i.get(3)!==n.databaseId.database)throw new dt(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+n.databaseId.database);return new vt(vE(i))}function xE(n,t){return dg(n.databaseId,t)}function m3(n){const t=yE(n);return t.length===4?ae.emptyPath():vE(t)}function ym(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vE(n){return Gt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Nv(n,t,i){return{name:gm(n,t),fields:i.value.mapValue.fields}}function g3(n,t){let i;if("targetChange"in t){t.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:wt(39313,{state:g})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Gt(v===void 0||typeof v=="string",58123),Ze.fromBase64String(v||"")):(Gt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ze.fromUint8Array(v||new Uint8Array))})(n,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&(function(g){const v=g.code===void 0?it.UNKNOWN:fE(g.code);return new dt(v,g.message||"")})(d);i=new mE(a,o,u,p||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Dp(n,a.document.name),u=Si(a.document.updateTime),d=a.document.createTime?Si(a.document.createTime):St.min(),p=new xn({mapValue:{fields:a.document.fields}}),m=sn.newFoundDocument(o,u,d,p),g=a.targetIds||[],v=a.removedTargetIds||[];i=new fh(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Dp(n,a.document),u=a.readTime?Si(a.readTime):St.min(),d=sn.newNoDocument(o,u),p=a.removedTargetIds||[];i=new fh([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Dp(n,a.document),u=a.removedTargetIds||[];i=new fh([],u,o,null)}else{if(!("filter"in t))return wt(11601,{Rt:t});{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,d=new a3(o,u),p=a.targetId;i=new pE(p,d)}}return i}function y3(n,t){let i;if(t instanceof pu)i={update:Nv(n,t.key,t.value)};else if(t instanceof dE)i={delete:gm(n,t.key)};else if(t instanceof la)i={update:Nv(n,t.key,t.data),updateMask:A3(t.fieldMask)};else{if(!(t instanceof n3))return wt(16599,{Vt:t.type});i={verify:gm(n,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(u,d){const p=d.transform;if(p instanceof Ch)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof lu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof uu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof cu)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw wt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:p3(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:wt(27497)})(n,t.precondition)),i}function x3(n,t){return n&&n.length>0?(Gt(t!==void 0,14353),n.map((i=>(function(o,u){let d=o.updateTime?Si(o.updateTime):Si(u);return d.isEqual(St.min())&&(d=Si(u)),new JI(d,o.transformResults||[])})(i,t)))):[]}function v3(n,t){return{documents:[xE(n,t.path)]}}function _3(n,t){const i={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),i.structuredQuery.from=[{collectionId:a.lastSegment()}]),i.parent=xE(n,o);const u=(function(g){if(g.length!==0)return EE(ri.create(g,"and"))})(t.filters);u&&(i.structuredQuery.where=u);const d=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Ws(S.field),direction:w3(S.dir)}})(v)))})(t.orderBy);d&&(i.structuredQuery.orderBy=d);const p=pm(n,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(i.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{ft:i,parent:o}}function E3(n){let t=m3(n.parent);const i=n.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){Gt(a===1,65062);const v=i.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let u=[];i.where&&(u=(function(w){const S=_E(w);return S instanceof ri&&Y2(S)?S.getFilters():[S]})(i.where));let d=[];i.orderBy&&(d=(function(w){return w.map((S=>(function(M){return new ou(Zs(M.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(S)))})(i.orderBy));let p=null;i.limit&&(p=(function(w){let S;return S=typeof w=="object"?w.value:w,Gh(S)?null:S})(i.limit));let m=null;i.startAt&&(m=(function(w){const S=!!w.before,R=w.values||[];return new Ih(R,S)})(i.startAt));let g=null;return i.endAt&&(g=(function(w){const S=!w.before,R=w.values||[];return new Ih(R,S)})(i.endAt)),LI(t,o,d,u,p,"F",m,g)}function b3(n,t){const i=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return wt(28987,{purpose:o})}})(t.purpose);return i==null?null:{"goog-listen-tags":i}}function _E(n){return n.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Zs(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Zs(i.unaryFilter.field);return De.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Zs(i.unaryFilter.field);return De.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Zs(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return wt(61313);default:return wt(60726)}})(n):n.fieldFilter!==void 0?(function(i){return De.create(Zs(i.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return wt(58110);default:return wt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(i){return ri.create(i.compositeFilter.filters.map((a=>_E(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return wt(1026)}})(i.compositeFilter.op))})(n):wt(30097,{filter:n})}function w3(n){return c3[n]}function T3(n){return h3[n]}function S3(n){return d3[n]}function Ws(n){return{fieldPath:n.canonicalString()}}function Zs(n){return We.fromServerFormat(n.fieldPath)}function EE(n){return n instanceof De?(function(i){if(i.op==="=="){if(vv(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NAN"}};if(xv(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(vv(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NOT_NAN"}};if(xv(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(i.field),op:T3(i.op),value:i.value}}})(n):n instanceof ri?(function(i){const a=i.getFilters().map((o=>EE(o)));return a.length===1?a[0]:{compositeFilter:{op:S3(i.op),filters:a}}})(n):wt(54877,{filter:n})}function A3(n){const t=[];return n.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function bE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,i,a,o,u=St.min(),d=St.min(),p=Ze.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=i,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Xr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(t){this.yt=t}}function I3(n){const t=E3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fm(t,t.limit,"L"):t}/**
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
 */class C3{constructor(){this.Cn=new j3}addToCollectionParentIndex(t,i){return this.Cn.add(i),st.resolve()}getCollectionParents(t,i){return st.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return st.resolve()}deleteFieldIndex(t,i){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,i){return st.resolve()}getDocumentsMatchingTarget(t,i){return st.resolve(null)}getIndexType(t,i){return st.resolve(0)}getFieldIndexes(t,i){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,i){return st.resolve(ea.min())}getMinOffsetFromCollectionGroup(t,i){return st.resolve(ea.min())}updateCollectionGroup(t,i,a){return st.resolve()}updateIndexEntries(t,i){return st.resolve()}}class j3{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i]||new Pe(ae.comparator),u=!o.has(a);return this.index[i]=o.add(a),u}has(t){const i=t.lastSegment(),a=t.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Pe(ae.comparator)).toArray()}}/**
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
 */const Mv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wE=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(wE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new fo(0)}static cr(){return new fo(-1)}}/**
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
 */const Ov="LruGarbageCollector",D3=1048576;function Vv([n,t],[i,a]){const o=Ut(n,i);return o===0?Ut(t,a):o}class N3{constructor(t){this.Ir=t,this.buffer=new Pe(Vv),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Vv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class M3{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){pt(Ov,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){So(i)?pt(Ov,"Ignoring IndexedDB error during garbage collection: ",i):await To(i)}await this.Vr(3e5)}))}}class O3{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return st.resolve(Hh.ce);const a=new N3(i);return this.mr.forEachTarget(t,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(pt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(Mv)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(pt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mv):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,o,u,d,p,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(pt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,d=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(a=w,p=Date.now(),this.removeTargets(t,a,i)))).next((w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(t,a)))).next((w=>(g=Date.now(),Qs()<=$t.DEBUG&&pt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function V3(n,t){return new O3(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(){this.changes=new es((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?st.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U3{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(t,i,a,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((o=>(a=o,this.remoteDocumentCache.getEntry(t,i)))).next((o=>(a!==null&&Yl(a.mutation,o,Cn.empty(),le.now()),o)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Pt()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Pt()){const o=Ya();return this.populateOverlays(t,o,i).next((()=>this.computeViews(t,i,o,a).next((u=>{let d=zl();return u.forEach(((p,m)=>{d=d.insert(p,m.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Ya();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Pt())))}populateOverlays(t,i,a){const o=[];return a.forEach((u=>{i.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(t,i,a,o){let u=cr();const d=Gl(),p=(function(){return Gl()})();return i.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof la)?u=u.insert(g.key,g):v!==void 0?(d.set(g.key,v.mutation.getFieldMask()),Yl(v.mutation,g,v.mutation.getFieldMask(),le.now())):d.set(g.key,Cn.empty())})),this.recalculateAndSaveOverlays(t,u).next((m=>(m.forEach(((g,v)=>d.set(g,v))),i.forEach(((g,v)=>p.set(g,new U3(v,d.get(g)??null)))),p)))}recalculateAndSaveOverlays(t,i){const a=Gl();let o=new me(((d,p)=>d-p)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const p of d)p.keys().forEach((m=>{const g=i.get(m);if(g===null)return;let v=a.get(m)||Cn.empty();v=p.applyToLocalView(g,v),a.set(m,v);const w=(o.get(p.batchId)||Pt()).add(m);o=o.insert(p.batchId,w)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,w=iE();v.forEach((S=>{if(!u.has(S)){const R=cE(i.get(S),a.get(S));R!==null&&w.set(S,R),u=u.add(S)}})),d.push(this.documentOverlayCache.saveOverlays(t,g,w))}return st.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,o){return(function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Z2(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,o):this.getDocumentsMatchingCollectionQuery(t,i,a,o)}getNextDocuments(t,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,o-u.size):st.resolve(Ya());let p=iu,m=u;return d.next((g=>st.forEach(g,((v,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(v)?st.resolve():this.remoteDocumentCache.getEntry(t,v).next((S=>{m=m.insert(v,S)}))))).next((()=>this.populateOverlays(t,g,u))).next((()=>this.computeViews(t,m,g,Pt()))).next((v=>({batchId:p,changes:nE(v)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next((a=>{let o=zl();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,o){const u=i.collectionGroup;let d=zl();return this.indexManager.getCollectionParents(t,u).next((p=>st.forEach(p,(m=>{const g=(function(w,S){return new Ao(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(i,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,a,o).next((v=>{v.forEach(((w,S)=>{d=d.insert(w,S)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,u,o)))).next((d=>{u.forEach(((m,g)=>{const v=g.getKey();d.get(v)===null&&(d=d.insert(v,sn.newInvalidDocument(v)))}));let p=zl();return d.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Yl(v.mutation,g,Cn.empty(),le.now()),Xh(i,g)&&(p=p.insert(m,g))})),p}))}}/**
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
 */class z3{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return st.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(o){return{id:o.id,version:o.version,createTime:Si(o.createTime)}})(i)),st.resolve()}getNamedQuery(t,i){return st.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(o){return{name:o.name,query:I3(o.bundledQuery),readTime:Si(o.readTime)}})(i)),st.resolve()}}/**
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
 */class L3{constructor(){this.overlays=new me(vt.comparator),this.qr=new Map}getOverlay(t,i){return st.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ya();return st.forEach(i,(o=>this.getOverlay(t,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((o,u)=>{this.St(t,i,u)})),st.resolve()}removeOverlaysForBatchId(t,i,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),st.resolve()}getOverlaysForCollection(t,i,a){const o=Ya(),u=i.length+1,d=new vt(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!i.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return st.resolve(o)}getOverlaysForCollectionGroup(t,i,a,o){let u=new me(((g,v)=>g-v));const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===i&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=Ya(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=Ya(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return st.resolve(p)}St(t,i,a){const o=this.overlays.get(a.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new r3(i,a));let u=this.qr.get(i);u===void 0&&(u=Pt(),this.qr.set(i,u)),this.qr.set(i,u.add(a.key))}}/**
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
 */class B3{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.Qr=new Pe(Ke.$r),this.Ur=new Pe(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Ke(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Ke(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1),u=[];return this.Ur.forEachInRange([a,o],(d=>{this.Gr(d),u.push(d.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new vt(new ae([])),a=new Ke(i,t),o=new Ke(i,t+1);let u=Pt();return this.Ur.forEachInRange([a,o],(d=>{u=u.add(d.key)})),u}containsKey(t){const i=new Ke(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ke{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return vt.comparator(t.key,i.key)||Ut(t.Yr,i.Yr)}static Kr(t,i){return Ut(t.Yr,i.Yr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ke.$r)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new i3(u,i,a,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new Ke(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return st.resolve(d)}lookupMutationBatch(t,i){return st.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,o=this.ei(a),u=o<0?0:o;return st.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?ig:this.tr-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(d=>{const p=this.Xr(d.Yr);u.push(p)})),st.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Pe(Ut);return i.forEach((o=>{const u=new Ke(o,0),d=new Ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,d],(p=>{a=a.add(p.Yr)}))})),st.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,o=a.length+1;let u=a;vt.isDocumentKey(u)||(u=u.child(""));const d=new Ke(new vt(u),0);let p=new Pe(Ut);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),d),st.resolve(this.ti(p))}ti(t){const i=[];return t.forEach((a=>{const o=this.Xr(a);o!==null&&i.push(o)})),i}removeMutationBatch(t,i){Gt(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return st.forEach(i.mutations,(o=>{const u=new Ke(o.key,i.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Ke(i,0),o=this.Zr.firstAfterOrEqual(a);return st.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(t){this.ri=t,this.docs=(function(){return new me(vt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,o=this.docs.get(a),u=o?o.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return st.resolve(a?a.document.mutableCopy():sn.newInvalidDocument(i))}getEntries(t,i){let a=cr();return i.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))})),st.resolve(a)}getDocumentsMatchingQuery(t,i,a,o){let u=cr();const d=i.path,p=new vt(d.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||xI(yI(v),a)<=0||(o.has(v.key)||Xh(i,v))&&(u=u.insert(v.key,v.mutableCopy()))}return st.resolve(u)}getAllFromCollectionGroup(t,i,a,o){wt(9500)}ii(t,i){return st.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new K3(this)}getSize(t){return st.resolve(this.size)}}class K3 extends k3{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?i.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(a)})),st.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(t){this.persistence=t,this.si=new es((i=>sg(i)),og),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new fg,this.targetCount=0,this.ai=fo.ur()}forEachTarget(t,i){return this.si.forEach(((a,o)=>i(o))),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),st.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new fo(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,st.resolve()}updateTargetData(t,i){return this.Pr(i),st.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,i,a){let o=0;const u=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),st.waitFor(u).next((()=>o))}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return st.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),st.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const o=this.persistence.referenceDelegate,u=[];return o&&i.forEach((d=>{u.push(o.markPotentiallyOrphaned(t,d))})),st.waitFor(u)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),st.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return st.resolve(a)}containsKey(t,i){return st.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,i){this.ui={},this.overlays={},this.ci=new Hh(0),this.li=!1,this.li=!0,this.hi=new B3,this.referenceDelegate=t(this),this.Pi=new q3(this),this.indexManager=new C3,this.remoteDocumentCache=(function(o){return new F3(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new R3(i),this.Ii=new z3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new L3,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new $3(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){pt("MemoryPersistence","Starting transaction:",t);const o=new H3(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,i){return st.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class H3 extends _I{constructor(t){super(),this.currentSequenceNumber=t}}class pg{constructor(t){this.persistence=t,this.Ri=new fg,this.Vi=null}static mi(t){return new pg(t)}get fi(){if(this.Vi)return this.Vi;throw wt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),st.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),st.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),st.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.fi,(a=>{const o=vt.fromPath(a);return this.gi(t,o).next((u=>{u||i.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return st.or([()=>st.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Dh{constructor(t,i){this.persistence=t,this.pi=new es((a=>wI(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=V3(this,i)}static mi(t,i){return new Dh(t,i)}Ei(){}di(t){return st.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((o=>a+o))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return st.forEach(this.pi,((a,o)=>this.br(t,a,o).next((u=>u?st.resolve():i(o)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(d=>this.br(t,d,i).next((p=>{p||(a++,u.removeEntry(d,St.min()))})))).next((()=>u.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),st.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=ch(t.data.value)),i}br(t,i,a){return st.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.pi.get(i);return st.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,i,a,o){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=o}static As(t,i){let a=Pt(),o=Pt();for(const u of i.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new mg(t,i.fromCache,a,o)}}/**
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
 */class G3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Y3{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return zR()?8:EI(UR())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,o){const u={result:null};return this.ys(t,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ws(t,i,o,a).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new G3;return this.Ss(t,i,d).next((p=>{if(u.result=p,this.Vs)return this.bs(t,i,d,p.size)}))})).next((()=>u.result))}bs(t,i,a,o){return a.documentReadCount<this.fs?(Qs()<=$t.DEBUG&&pt("QueryEngine","SDK will not create cache indexes for query:",Xs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),st.resolve()):(Qs()<=$t.DEBUG&&pt("QueryEngine","Query:",Xs(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Qs()<=$t.DEBUG&&pt("QueryEngine","The SDK decides to create cache indexes for query:",Xs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wi(i))):st.resolve())}ys(t,i){if(wv(i))return st.resolve(null);let a=wi(i);return this.indexManager.getIndexType(t,a).next((o=>o===0?null:(i.limit!==null&&o===1&&(i=fm(i,null,"F"),a=wi(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((u=>{const d=Pt(...u);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((m=>{const g=this.Ds(i,p);return this.Cs(i,g,d,m.readTime)?this.ys(t,fm(i,null,"F")):this.vs(t,g,i,m)}))))})))))}ws(t,i,a,o){return wv(i)||o.isEqual(St.min())?st.resolve(null):this.ps.getDocuments(t,a).next((u=>{const d=this.Ds(i,u);return this.Cs(i,d,a,o)?st.resolve(null):(Qs()<=$t.DEBUG&&pt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Xs(i)),this.vs(t,d,i,gI(o,iu)).next((p=>p)))}))}Ds(t,i){let a=new Pe(tE(t));return i.forEach(((o,u)=>{Xh(t,u)&&(a=a.add(u))})),a}Cs(t,i,a,o){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const u=t.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,i,a){return Qs()<=$t.DEBUG&&pt("QueryEngine","Using full collection scan to execute query:",Xs(i)),this.ps.getDocumentsMatchingQuery(t,i,ea.min(),a)}vs(t,i,a,o){return this.ps.getDocumentsMatchingQuery(t,a,o).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
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
 */const gg="LocalStore",Q3=3e8;class X3{constructor(t,i,a,o){this.persistence=t,this.Fs=i,this.serializer=o,this.Ms=new me(Ut),this.xs=new es((u=>sg(u)),og),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new P3(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function W3(n,t,i,a){return new X3(n,t,i,a)}async function SE(n,t){const i=It(n);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((u=>{const d=[],p=[];let m=Pt();for(const g of o){d.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return i.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:d,addedBatchIds:p})))}))}))}function Z3(n,t){const i=It(n);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=t.batch.keys(),u=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const w=g.batch,S=w.keys();let R=st.resolve();return S.forEach((M=>{R=R.next((()=>v.getEntry(m,M))).next((B=>{const P=g.docVersions.get(M);Gt(P!==null,48541),B.version.compareTo(P)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))}))})),R.next((()=>p.mutationQueue.removeMutationBatch(m,w)))})(i,a,t,u).next((()=>u.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Pt();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(t)))).next((()=>i.localDocuments.getDocuments(a,o)))}))}function AE(n){const t=It(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function J3(n,t){const i=It(n),a=t.snapshotVersion;let o=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Ns.newChangeBuffer({trackRemovals:!0});o=i.Ms;const p=[];t.targetChanges.forEach(((v,w)=>{const S=o.get(w);if(!S)return;p.push(i.Pi.removeMatchingKeys(u,v.removedDocuments,w).next((()=>i.Pi.addMatchingKeys(u,v.addedDocuments,w))));let R=S.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,a)),o=o.insert(w,R),(function(B,P,G){return B.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Q3?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(S,R,v)&&p.push(i.Pi.updateTargetData(u,R))}));let m=cr(),g=Pt();if(t.documentUpdates.forEach((v=>{t.resolvedLimboDocuments.has(v)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(tC(u,d,t.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(St.min())){const v=i.Pi.getLastRemoteSnapshotVersion(u).next((w=>i.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return st.waitFor(p).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(i.Ms=o,u)))}function tC(n,t,i){let a=Pt(),o=Pt();return i.forEach((u=>a=a.add(u))),t.getEntries(n,a).next((u=>{let d=cr();return i.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(St.min())?(t.removeEntry(p,m.readTime),d=d.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),d=d.insert(p,m)):pt(gg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:d,qs:o}}))}function eC(n,t){const i=It(n);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=ig),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}function nC(n,t){const i=It(n);return i.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return i.Pi.getTargetData(a,t).next((u=>u?(o=u,st.resolve(o)):i.Pi.allocateTargetId(a).next((d=>(o=new Xr(t,d,"TargetPurposeListen",a.currentSequenceNumber),i.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=i.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(a.targetId,a),i.xs.set(t,a.targetId)),a}))}async function xm(n,t,i){const a=It(n),o=a.Ms.get(t),u=i?"readwrite":"readwrite-primary";try{i||await a.persistence.runTransaction("Release target",u,(d=>a.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!So(d))throw d;pt(gg,`Failed to update sequence numbers for target ${t}: ${d}`)}a.Ms=a.Ms.remove(t),a.xs.delete(o.target)}function kv(n,t,i){const a=It(n);let o=St.min(),u=Pt();return a.persistence.runTransaction("Execute query","readwrite",(d=>(function(m,g,v){const w=It(m),S=w.xs.get(v);return S!==void 0?st.resolve(w.Ms.get(S)):w.Pi.getTargetData(g,v)})(a,d,wi(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(d,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(d,t,i?o:St.min(),i?u:Pt()))).next((p=>(iC(a,$I(t),p),{documents:p,Qs:u})))))}function iC(n,t,i){let a=n.Os.get(t)||St.min();i.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(t,a)}class Uv{constructor(){this.activeTargetIds=YI()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rC{constructor(){this.Mo=new Uv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Uv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aC{Oo(t){}shutdown(){}}/**
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
 */const Pv="ConnectivityMonitor";class zv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pt(Pv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){pt(Pv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wc=null;function vm(){return Wc===null?Wc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wc++,"0x"+Wc.toString(16)}/**
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
 */const Np="RestConnection",sC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===Ah?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(t,i,a,o,u){const d=vm(),p=this.zo(t,i.toUriEncodedString());pt(Np,`Sending RPC '${t}' ${d}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=Zm(g);return this.Jo(t,p,m,a,v).then((w=>(pt(Np,`Received RPC '${t}' ${d}: `,w),w)),(w=>{throw lo(Np,`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",a),w}))}Ho(t,i,a,o,u,d){return this.Go(t,i,a,o,u)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((o,u)=>t[u]=o)),a&&a.headers.forEach(((o,u)=>t[u]=o))}zo(t,i){const a=sC[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class uC extends oC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,o,u){const d=vm();return new Promise(((p,m)=>{const g=new R2;g.setWithCredentials(!0),g.listenOnce(I2.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case uh.NO_ERROR:const w=g.getResponseJson();pt(rn,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(w)),p(w);break;case uh.TIMEOUT:pt(rn,`RPC '${t}' ${d} timed out`),m(new dt(it.DEADLINE_EXCEEDED,"Request time out"));break;case uh.HTTP_ERROR:const S=g.getStatus();if(pt(rn,`RPC '${t}' ${d} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R?.error;if(M&&M.status&&M.message){const B=(function(G){const X=G.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(X)>=0?X:it.UNKNOWN})(M.status);m(new dt(B,M.message))}else m(new dt(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new dt(it.UNAVAILABLE,"Connection failed."));break;default:wt(9055,{l_:t,streamId:d,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{pt(rn,`RPC '${t}' ${d} completed.`)}}));const v=JSON.stringify(o);pt(rn,`RPC '${t}' ${d} sending request:`,o),g.send(i,"POST",v,a,15)}))}T_(t,i,a){const o=vm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=D2(),p=j2(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,i,a),m.encodeInitMessageHeaders=!0;const v=u.join("");pt(rn,`Creating RPC '${t}' stream ${o}: ${v}`,m);const w=d.createWebChannel(v,m);this.I_(w);let S=!1,R=!1;const M=new lC({Yo:P=>{R?pt(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(S||(pt(rn,`Opening RPC '${t}' stream ${o} transport.`),w.open(),S=!0),pt(rn,`RPC '${t}' stream ${o} sending:`,P),w.send(P))},Zo:()=>w.close()}),B=(P,G,X)=>{P.listen(G,(et=>{try{X(et)}catch(ct){setTimeout((()=>{throw ct}),0)}}))};return B(w,Pl.EventType.OPEN,(()=>{R||(pt(rn,`RPC '${t}' stream ${o} transport opened.`),M.o_())})),B(w,Pl.EventType.CLOSE,(()=>{R||(R=!0,pt(rn,`RPC '${t}' stream ${o} transport closed`),M.a_(),this.E_(w))})),B(w,Pl.EventType.ERROR,(P=>{R||(R=!0,lo(rn,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),M.a_(new dt(it.UNAVAILABLE,"The operation could not be completed")))})),B(w,Pl.EventType.MESSAGE,(P=>{if(!R){const G=P.data[0];Gt(!!G,16349);const X=G,et=X?.error||X[0]?.error;if(et){pt(rn,`RPC '${t}' stream ${o} received error:`,et);const ct=et.status;let Z=(function(I){const j=Ce[I];if(j!==void 0)return fE(j)})(ct),ft=et.message;Z===void 0&&(Z=it.INTERNAL,ft="Unknown error status: "+ct+" with message "+et.message),R=!0,M.a_(new dt(Z,ft)),w.close()}else pt(rn,`RPC '${t}' stream ${o} received:`,G),M.u_(G)}})),B(p,C2.STAT_EVENT,(P=>{P.stat===sm.PROXY?pt(rn,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===sm.NOPROXY&&pt(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Mp(){return typeof document<"u"?document:null}/**
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
 */function td(n){return new f3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t,i,a=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&pt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="PersistentStream";class IE{constructor(t,i,a,o,u,d,p,m){this.Mi=t,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new RE(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===it.RESOURCE_EXHAUSTED?(lr(i.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===i&&this.G_(a,o)}),(a=>{t((()=>{const o=new dt(it.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return pt(Lv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(pt(Lv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cC extends IE{constructor(t,i,a,o,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}j_(t,i){return this.connection.T_("Listen",t,i)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const i=g3(this.serializer,t),a=(function(u){if(!("targetChange"in u))return St.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?St.min():d.readTime?Si(d.readTime):St.min()})(t);return this.listener.H_(i,a)}Y_(t){const i={};i.database=ym(this.serializer),i.addTarget=(function(u,d){let p;const m=d.target;if(p=hm(m)?{documents:v3(u,m)}:{query:_3(u,m).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=gE(u,d.resumeToken);const g=pm(u,d.expectedCount);g!==null&&(p.expectedCount=g)}else if(d.snapshotVersion.compareTo(St.min())>0){p.readTime=jh(u,d.snapshotVersion.toTimestamp());const g=pm(u,d.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,t);const a=b3(this.serializer,t);a&&(i.labels=a),this.q_(i)}Z_(t){const i={};i.database=ym(this.serializer),i.removeTarget=t,this.q_(i)}}class hC extends IE{constructor(t,i,a,o,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,d),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return Gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=x3(t.writeResults,t.commitTime),a=Si(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=ym(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>y3(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{}class fC extends dC{constructor(t,i,a,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Go(t,mm(i,a),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new dt(it.UNKNOWN,u.toString())}))}Ho(t,i,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,mm(i,a),o,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new dt(it.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class pC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lr(i),this.aa=!1):pt("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="RemoteStore";class mC{constructor(t,i,a,o,u){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{ns(this)&&(pt(Ja,"Restarting streams for network reachability change."),await(async function(m){const g=It(m);g.Ea.add(4),await gu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await ed(g)})(this))}))})),this.Ra=new pC(a,o)}}async function ed(n){if(ns(n))for(const t of n.da)await t(!0)}async function gu(n){for(const t of n.da)await t(!1)}function CE(n,t){const i=It(n);i.Ia.has(t.targetId)||(i.Ia.set(t.targetId,t),_g(i)?vg(i):Ro(i).O_()&&xg(i,t))}function yg(n,t){const i=It(n),a=Ro(i);i.Ia.delete(t),a.O_()&&jE(i,t),i.Ia.size===0&&(a.O_()?a.L_():ns(i)&&i.Ra.set("Unknown"))}function xg(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const i=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Ro(n).Y_(t)}function jE(n,t){n.Va.Ue(t),Ro(n).Z_(t)}function vg(n){n.Va=new u3({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.Ra.ua()}function _g(n){return ns(n)&&!Ro(n).x_()&&n.Ia.size>0}function ns(n){return It(n).Ea.size===0}function DE(n){n.Va=void 0}async function gC(n){n.Ra.set("Online")}async function yC(n){n.Ia.forEach(((t,i)=>{xg(n,t)}))}async function xC(n,t){DE(n),_g(n)?(n.Ra.ha(t),vg(n)):n.Ra.set("Unknown")}async function vC(n,t,i){if(n.Ra.set("Online"),t instanceof mE&&t.state===2&&t.cause)try{await(async function(o,u){const d=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(n,t)}catch(a){pt(Ja,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await Nh(n,a)}else if(t instanceof fh?n.Va.Ze(t):t instanceof pE?n.Va.st(t):n.Va.tt(t),!i.isEqual(St.min()))try{const a=await AE(n.localStore);i.compareTo(a)>=0&&await(function(u,d){const p=u.Va.Tt(d);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,d))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(Ze.EMPTY_BYTE_STRING,v.snapshotVersion)),jE(u,m);const w=new Xr(v.target,m,g,v.sequenceNumber);xg(u,w)})),u.remoteSyncer.applyRemoteEvent(p)})(n,i)}catch(a){pt(Ja,"Failed to raise snapshot:",a),await Nh(n,a)}}async function Nh(n,t,i){if(!So(t))throw t;n.Ea.add(1),await gu(n),n.Ra.set("Offline"),i||(i=()=>AE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pt(Ja,"Retrying IndexedDB access"),await i(),n.Ea.delete(1),await ed(n)}))}function NE(n,t){return t().catch((i=>Nh(n,i,t)))}async function nd(n){const t=It(n),i=aa(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ig;for(;_C(t);)try{const o=await eC(t.localStore,a);if(o===null){t.Ta.length===0&&i.L_();break}a=o.batchId,EC(t,o)}catch(o){await Nh(t,o)}ME(t)&&OE(t)}function _C(n){return ns(n)&&n.Ta.length<10}function EC(n,t){n.Ta.push(t);const i=aa(n);i.O_()&&i.X_&&i.ea(t.mutations)}function ME(n){return ns(n)&&!aa(n).x_()&&n.Ta.length>0}function OE(n){aa(n).start()}async function bC(n){aa(n).ra()}async function wC(n){const t=aa(n);for(const i of n.Ta)t.ea(i.mutations)}async function TC(n,t,i){const a=n.Ta.shift(),o=cg.from(a,t,i);await NE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await nd(n)}async function SC(n,t){t&&aa(n).X_&&await(async function(a,o){if((function(d){return s3(d)&&d!==it.ABORTED})(o.code)){const u=a.Ta.shift();aa(a).B_(),await NE(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await nd(a)}})(n,t),ME(n)&&OE(n)}async function Bv(n,t){const i=It(n);i.asyncQueue.verifyOperationInProgress(),pt(Ja,"RemoteStore received new credentials");const a=ns(i);i.Ea.add(3),await gu(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await ed(i)}async function AC(n,t){const i=It(n);t?(i.Ea.delete(2),await ed(i)):t||(i.Ea.add(2),await gu(i),i.Ra.set("Unknown"))}function Ro(n){return n.ma||(n.ma=(function(i,a,o){const u=It(i);return u.sa(),new cC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:gC.bind(null,n),t_:yC.bind(null,n),r_:xC.bind(null,n),H_:vC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),_g(n)?vg(n):n.Ra.set("Unknown")):(await n.ma.stop(),DE(n))}))),n.ma}function aa(n){return n.fa||(n.fa=(function(i,a,o){const u=It(i);return u.sa(),new hC(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:bC.bind(null,n),r_:SC.bind(null,n),ta:wC.bind(null,n),na:TC.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await nd(n)):(await n.fa.stop(),n.Ta.length>0&&(pt(Ja,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,i,a,o,u){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,o,u){const d=Date.now()+a,p=new Eg(t,i,d,o,u);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bg(n,t){if(lr("AsyncQueue",`${t}: ${n}`),So(n))return new dt(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static emptySet(t){return new eo(t.comparator)}constructor(t){this.comparator=t?(i,a)=>t(i,a)||vt.comparator(i.key,a.key):(i,a)=>vt.comparator(i.key,a.key),this.keyedMap=zl(),this.sortedSet=new me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((i,a)=>(t(i),!1)))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof eo)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((i=>{t.push(i.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const a=new eo;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=i,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.ga=new me(vt.comparator)}track(t){const i=t.doc.key,a=this.ga.get(i);a?t.type!==0&&a.type===3?this.ga=this.ga.insert(i,t):t.type===3&&a.type!==1?this.ga=this.ga.insert(i,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.ga=this.ga.insert(i,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.ga=this.ga.remove(i):t.type===1&&a.type===2?this.ga=this.ga.insert(i,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.ga=this.ga.insert(i,{type:2,doc:t.doc}):wt(63341,{Rt:t,pa:a}):this.ga=this.ga.insert(i,t)}ya(){const t=[];return this.ga.inorderTraversal(((i,a)=>{t.push(a)})),t}}class po{constructor(t,i,a,o,u,d,p,m,g){this.query=t,this.docs=i,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,i,a,o,u){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new po(t,i,eo.emptySet(i),d,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,a=t.docChanges;if(i.length!==a.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==a[o].type||!i[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class IC{constructor(){this.queries=Fv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const o=It(i),u=o.queries;o.queries=Fv(),u.forEach(((d,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new dt(it.ABORTED,"Firestore shutting down"))}}function Fv(){return new es((n=>J2(n)),Qh)}async function VE(n,t){const i=It(n);let a=3;const o=t.query;let u=i.queries.get(o);u?!u.ba()&&t.Da()&&(a=2):(u=new RC,a=t.Da()?0:1);try{switch(a){case 0:u.wa=await i.onListen(o,!0);break;case 1:u.wa=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(d){const p=bg(d,`Initialization of query '${Xs(t.query)}' failed`);return void t.onError(p)}i.queries.set(o,u),u.Sa.push(t),t.va(i.onlineState),u.wa&&t.Fa(u.wa)&&wg(i)}async function kE(n,t){const i=It(n),a=t.query;let o=3;const u=i.queries.get(a);if(u){const d=u.Sa.indexOf(t);d>=0&&(u.Sa.splice(d,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return i.queries.delete(a),i.onUnlisten(a,!0);case 1:return i.queries.delete(a),i.onUnlisten(a,!1);case 2:return i.onLastRemoteStoreUnlisten(a);default:return}}function CC(n,t){const i=It(n);let a=!1;for(const o of t){const u=o.query,d=i.queries.get(u);if(d){for(const p of d.Sa)p.Fa(o)&&(a=!0);d.wa=o}}a&&wg(i)}function jC(n,t,i){const a=It(n),o=a.queries.get(t);if(o)for(const u of o.Sa)u.onError(i);a.queries.delete(t)}function wg(n){n.Ca.forEach((t=>{t.next()}))}var _m,Kv;(Kv=_m||(_m={})).Ma="default",Kv.Cache="cache";class UE{constructor(t,i,a){this.query=t,this.xa=i,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new po(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),i=!0):this.La(t,this.onlineState)&&(this.ka(t),i=!0),this.Na=t,i}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let i=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),i=!0),i}La(t,i){if(!t.fromCache||!this.Da())return!0;const a=i!=="Offline";return(!this.options.qa||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const i=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}ka(t){t=po.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==_m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t){this.key=t}}class zE{constructor(t){this.key=t}}class DC{constructor(t,i){this.query=t,this.Ya=i,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=tE(t),this.tu=new eo(this.eu)}get nu(){return this.Ya}ru(t,i){const a=i?i.iu:new $v,o=i?i.tu:this.tu;let u=i?i.mutatedKeys:this.mutatedKeys,d=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((v,w)=>{const S=o.get(v),R=Xh(this.query,w)?w:null,M=!!S&&this.mutatedKeys.has(S.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;S&&R?S.data.isEqual(R.data)?M!==B&&(a.track({type:3,doc:R}),P=!0):this.su(S,R)||(a.track({type:2,doc:R}),P=!0,(m&&this.eu(R,m)>0||g&&this.eu(R,g)<0)&&(p=!0)):!S&&R?(a.track({type:0,doc:R}),P=!0):S&&!R&&(a.track({type:1,doc:S}),P=!0,(m||g)&&(p=!0)),P&&(R?(d=d.add(R),u=B?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:d,iu:a,Cs:p,mutatedKeys:u}}su(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,a,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort(((v,w)=>(function(R,M){const B=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wt(20277,{Rt:P})}};return B(R)-B(M)})(v.type,w.type)||this.eu(v.doc,w.doc))),this.ou(a),o=o??!1;const p=i&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,d.length!==0||g?{snapshot:new po(this.query,t.tu,u,d,t.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $v,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((i=>this.Ya=this.Ya.add(i))),t.modifiedDocuments.forEach((i=>{})),t.removedDocuments.forEach((i=>this.Ya=this.Ya.delete(i))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const i=[];return t.forEach((a=>{this.Xa.has(a)||i.push(new zE(a))})),this.Xa.forEach((a=>{t.has(a)||i.push(new PE(a))})),i}cu(t){this.Ya=t.Qs,this.Xa=Pt();const i=this.ru(t.documents);return this.applyChanges(i,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Tg="SyncEngine";class NC{constructor(t,i,a){this.query=t,this.targetId=i,this.view=a}}class MC{constructor(t){this.key=t,this.hu=!1}}class OC{constructor(t,i,a,o,u,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new es((p=>J2(p)),Qh),this.Iu=new Map,this.Eu=new Set,this.du=new me(vt.comparator),this.Au=new Map,this.Ru=new fg,this.Vu={},this.mu=new Map,this.fu=fo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VC(n,t,i=!0){const a=qE(n);let o;const u=a.Tu.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await LE(a,t,i,!0),o}async function kC(n,t){const i=qE(n);await LE(i,t,!0,!1)}async function LE(n,t,i,a){const o=await nC(n.localStore,wi(t)),u=o.targetId,d=n.sharedClientState.addLocalQueryTarget(u,i);let p;return a&&(p=await UC(n,t,u,d==="current",o.resumeToken)),n.isPrimaryClient&&i&&CE(n.remoteStore,o),p}async function UC(n,t,i,a,o){n.pu=(w,S,R)=>(async function(B,P,G,X){let et=P.view.ru(G);et.Cs&&(et=await kv(B.localStore,P.query,!1).then((({documents:C})=>P.view.ru(C,et))));const ct=X&&X.targetChanges.get(P.targetId),Z=X&&X.targetMismatches.get(P.targetId)!=null,ft=P.view.applyChanges(et,B.isPrimaryClient,ct,Z);return Hv(B,P.targetId,ft.au),ft.snapshot})(n,w,S,R);const u=await kv(n.localStore,t,!0),d=new DC(t,u.Qs),p=d.ru(u.documents),m=mu.createSynthesizedTargetChangeForCurrentChange(i,a&&n.onlineState!=="Offline",o),g=d.applyChanges(p,n.isPrimaryClient,m);Hv(n,i,g.au);const v=new NC(t,i,d);return n.Tu.set(t,v),n.Iu.has(i)?n.Iu.get(i).push(t):n.Iu.set(i,[t]),g.snapshot}async function PC(n,t,i){const a=It(n),o=a.Tu.get(t),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((d=>!Qh(d,t)))),void a.Tu.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await xm(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),i&&yg(a.remoteStore,o.targetId),Em(a,o.targetId)})).catch(To)):(Em(a,o.targetId),await xm(a.localStore,o.targetId,!0))}async function zC(n,t){const i=It(n),a=i.Tu.get(t),o=i.Iu.get(a.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(a.targetId),yg(i.remoteStore,a.targetId))}async function LC(n,t,i){const a=GC(n);try{const o=await(function(d,p){const m=It(d),g=le.now(),v=p.reduce(((R,M)=>R.add(M.key)),Pt());let w,S;return m.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let M=cr(),B=Pt();return m.Ns.getEntries(R,v).next((P=>{M=P,M.forEach(((G,X)=>{X.isValidDocument()||(B=B.add(G))}))})).next((()=>m.localDocuments.getOverlayedDocuments(R,M))).next((P=>{w=P;const G=[];for(const X of p){const et=e3(X,w.get(X.key).overlayedDocument);et!=null&&G.push(new la(X.key,et,q2(et.value.mapValue),Ti.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,G,p)})).next((P=>{S=P;const G=P.applyToLocalDocumentSet(w,B);return m.documentOverlayCache.saveOverlays(R,P.batchId,G)}))})).then((()=>({batchId:S.batchId,changes:nE(w)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),(function(d,p,m){let g=d.Vu[d.currentUser.toKey()];g||(g=new me(Ut)),g=g.insert(p,m),d.Vu[d.currentUser.toKey()]=g})(a,o.batchId,i),await yu(a,o.changes),await nd(a.remoteStore)}catch(o){const u=bg(o,"Failed to persist write");i.reject(u)}}async function BE(n,t){const i=It(n);try{const a=await J3(i.localStore,t);t.targetChanges.forEach(((o,u)=>{const d=i.Au.get(u);d&&(Gt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Gt(d.hu,14607):o.removedDocuments.size>0&&(Gt(d.hu,42227),d.hu=!1))})),await yu(i,a,t)}catch(a){await To(a)}}function qv(n,t,i){const a=It(n);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.Tu.forEach(((u,d)=>{const p=d.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const m=It(d);m.onlineState=p;let g=!1;m.queries.forEach(((v,w)=>{for(const S of w.Sa)S.va(p)&&(g=!0)})),g&&wg(m)})(a.eventManager,t),o.length&&a.Pu.H_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function BC(n,t,i){const a=It(n);a.sharedClientState.updateQueryState(t,"rejected",i);const o=a.Au.get(t),u=o&&o.key;if(u){let d=new me(vt.comparator);d=d.insert(u,sn.newNoDocument(u,St.min()));const p=Pt().add(u),m=new Jh(St.min(),new Map,new me(Ut),d,p);await BE(a,m),a.du=a.du.remove(u),a.Au.delete(t),Sg(a)}else await xm(a.localStore,t,!1).then((()=>Em(a,t,i))).catch(To)}async function $C(n,t){const i=It(n),a=t.batch.batchId;try{const o=await Z3(i.localStore,t);FE(i,a,null),$E(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await yu(i,o)}catch(o){await To(o)}}async function FC(n,t,i){const a=It(n);try{const o=await(function(d,p){const m=It(d);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((w=>(Gt(w!==null,37113),v=w.keys(),m.mutationQueue.removeMutationBatch(g,w)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,t);FE(a,t,i),$E(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await yu(a,o)}catch(o){await To(o)}}function $E(n,t){(n.mu.get(t)||[]).forEach((i=>{i.resolve()})),n.mu.delete(t)}function FE(n,t,i){const a=It(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(i?u.reject(i):u.resolve(),o=o.remove(t)),a.Vu[a.currentUser.toKey()]=o}}function Em(n,t,i=null){n.sharedClientState.removeLocalQueryTarget(t);for(const a of n.Iu.get(t))n.Tu.delete(a),i&&n.Pu.yu(a,i);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((a=>{n.Ru.containsKey(a)||KE(n,a)}))}function KE(n,t){n.Eu.delete(t.path.canonicalString());const i=n.du.get(t);i!==null&&(yg(n.remoteStore,i),n.du=n.du.remove(t),n.Au.delete(i),Sg(n))}function Hv(n,t,i){for(const a of i)a instanceof PE?(n.Ru.addReference(a.key,t),KC(n,a)):a instanceof zE?(pt(Tg,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,t),n.Ru.containsKey(a.key)||KE(n,a.key)):wt(19791,{wu:a})}function KC(n,t){const i=t.key,a=i.path.canonicalString();n.du.get(i)||n.Eu.has(a)||(pt(Tg,"New document in limbo: "+i),n.Eu.add(a),Sg(n))}function Sg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const i=new vt(ae.fromString(t)),a=n.fu.next();n.Au.set(a,new MC(i)),n.du=n.du.insert(i,a),CE(n.remoteStore,new Xr(wi(lg(i.path)),a,"TargetPurposeLimboResolution",Hh.ce))}}async function yu(n,t,i){const a=It(n),o=[],u=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{d.push(a.pu(m,t,i).then((g=>{if((g||i)&&a.isPrimaryClient){const v=g?!g.fromCache:i?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=mg.As(m.targetId,g);u.push(v)}})))})),await Promise.all(d),a.Pu.H_(o),await(async function(m,g){const v=It(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>st.forEach(g,(S=>st.forEach(S.Es,(R=>v.persistence.referenceDelegate.addReference(w,S.targetId,R))).next((()=>st.forEach(S.ds,(R=>v.persistence.referenceDelegate.removeReference(w,S.targetId,R)))))))))}catch(w){if(!So(w))throw w;pt(gg,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const R=v.Ms.get(S),M=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(M);v.Ms=v.Ms.insert(S,B)}}})(a.localStore,u))}async function qC(n,t){const i=It(n);if(!i.currentUser.isEqual(t)){pt(Tg,"User change. New user:",t.toKey());const a=await SE(i.localStore,t);i.currentUser=t,(function(u,d){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new dt(it.CANCELLED,d))}))})),u.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await yu(i,a.Ls)}}function HC(n,t){const i=It(n),a=i.Au.get(t);if(a&&a.hu)return Pt().add(a.key);{let o=Pt();const u=i.Iu.get(t);if(!u)return o;for(const d of u){const p=i.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function qE(n){const t=It(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=BE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BC.bind(null,t),t.Pu.H_=CC.bind(null,t.eventManager),t.Pu.yu=jC.bind(null,t.eventManager),t}function GC(n){const t=It(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$C.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FC.bind(null,t),t}class Mh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=td(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return W3(this.persistence,new Y3,t.initialUser,this.serializer)}Cu(t){return new TE(pg.mi,this.serializer)}Du(t){return new rC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mh.provider={build:()=>new Mh};class YC extends Mh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){Gt(this.persistence.referenceDelegate instanceof Dh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new M3(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new TE((a=>Dh.mi(a,i)),this.serializer)}}class bm{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>qv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=qC.bind(null,this.syncEngine),await AC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new IC})()}createDatastore(t){const i=td(t.databaseInfo.databaseId),a=(function(u){return new uC(u)})(t.databaseInfo);return(function(u,d,p,m){return new fC(u,d,p,m)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,o,u,d,p){return new mC(a,o,u,d,p)})(this.localStore,this.datastore,t.asyncQueue,(i=>qv(this.syncEngine,i,0)),(function(){return zv.v()?new zv:new aC})())}createSyncEngine(t,i){return(function(o,u,d,p,m,g,v){const w=new OC(o,u,d,p,m,g);return v&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=It(i);pt(Ja,"RemoteStore shutting down."),a.Ea.add(5),await gu(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bm.provider={build:()=>new bm};/**
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
 */class HE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):lr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,i){setTimeout((()=>{this.muted||t(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="FirestoreClient";class QC{constructor(t,i,a,o,u){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async d=>{pt(sa,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(pt(sa,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=bg(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Op(n,t){n.asyncQueue.verifyOperationInProgress(),pt(sa,"Initializing OfflineComponentProvider");const i=n.configuration;await t.initialize(i);let a=i.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await SE(t.localStore,o),a=o)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Gv(n,t){n.asyncQueue.verifyOperationInProgress();const i=await XC(n);pt(sa,"Initializing OnlineComponentProvider"),await t.initialize(i,n.configuration),n.setCredentialChangeListener((a=>Bv(t.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>Bv(t.remoteStore,o))),n._onlineComponents=t}async function XC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pt(sa,"Using user provided OfflineComponentProvider");try{await Op(n,n._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(i))throw i;lo("Error using user provided cache. Falling back to memory cache: "+i),await Op(n,new Mh)}}else pt(sa,"Using default OfflineComponentProvider"),await Op(n,new YC(void 0));return n._offlineComponents}async function GE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pt(sa,"Using user provided OnlineComponentProvider"),await Gv(n,n._uninitializedComponentsProvider._online)):(pt(sa,"Using default OnlineComponentProvider"),await Gv(n,new bm))),n._onlineComponents}function WC(n){return GE(n).then((t=>t.syncEngine))}async function YE(n){const t=await GE(n),i=t.eventManager;return i.onListen=VC.bind(null,t.syncEngine),i.onUnlisten=PC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=kC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=zC.bind(null,t.syncEngine),i}function ZC(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new HE({next:S=>{v.Nu(),d.enqueueAndForget((()=>kE(u,w)));const R=S.docs.has(p);!R&&S.fromCache?g.reject(new dt(it.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&S.fromCache&&m&&m.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new UE(lg(p.path),v,{includeMetadataChanges:!0,qa:!0});return VE(u,w)})(await YE(n),n.asyncQueue,t,i,a))),a.promise}function JC(n,t,i={}){const a=new ir;return n.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,m,g){const v=new HE({next:S=>{v.Nu(),d.enqueueAndForget((()=>kE(u,w))),S.fromCache&&m.source==="server"?g.reject(new dt(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new UE(p,v,{includeMetadataChanges:!0,qa:!0});return VE(u,w)})(await YE(n),n.asyncQueue,t,i,a))),a.promise}/**
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
 */function QE(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Yv=new Map;/**
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
 */const XE="firestore.googleapis.com",Qv=!0;class Xv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new dt(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XE,this.ssl=Qv}else this.host=t.host,this.ssl=t.ssl??Qv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=wE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<D3)throw new dt(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new dt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class id{constructor(t,i,a,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new aI;switch(a.type){case"firstParty":return new uI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=Yv.get(i);a&&(pt("ComponentProvider","Removing Datastore"),Yv.delete(i),a.terminate())})(this),Promise.resolve()}}function tj(n,t,i,a={}){n=ur(n,id);const o=Zm(t),u=n._getSettings(),d={...u,emulatorOptions:n._getEmulatorOptions()},p=`${t}:${i}`;o&&(NR(`https://${p}`),kR("Firestore",!0)),u.host!==XE&&u.host!==p&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!wh(m,d)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=an.MOCK_USER;else{g=MR(a.mockUserToken,n._app?.options.projectId);const w=a.mockUserToken.sub||a.mockUserToken.user_id;if(!w)throw new dt(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new an(w)}n._authCredentials=new sI(new M2(g,v))}}/**
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
 */class is{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new is(this.firestore,t,this._query)}}class Ae{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ae(this.firestore,t,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(fu(i,Ae._jsonSchema))return new Ae(t,a||null,new vt(ae.fromString(i.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class ta extends is{constructor(t,i,a){super(t,i,lg(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new vt(t))}withConverter(t){return new ta(this.firestore,t,this._path)}}function ph(n,t,...i){if(n=sr(n),O2("collection","path",t),n instanceof id){const a=ae.fromString(t,...i);return uv(a),new ta(n,null,a)}{if(!(n instanceof Ae||n instanceof ta))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return uv(a),new ta(n.firestore,null,a)}}function Ql(n,t,...i){if(n=sr(n),arguments.length===1&&(t=ng.newId()),O2("doc","path",t),n instanceof id){const a=ae.fromString(t,...i);return lv(a),new Ae(n,null,new vt(a))}{if(!(n instanceof Ae||n instanceof ta))throw new dt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(ae.fromString(t,...i));return lv(a),new Ae(n.firestore,n instanceof ta?n.converter:null,new vt(a))}}/**
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
 */const Wv="AsyncQueue";class Zv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new RE(this,"async_queue_retry"),this._c=()=>{const a=Mp();a&&pt(Wv,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Mp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Mp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!So(t))throw t;pt(Wv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,lr("INTERNAL UNHANDLED ERROR: ",Jv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const o=Eg.createAndSchedule(this,t,i,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&wt(47125,{Pc:Jv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function Jv(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class xu extends id{constructor(t,i,a,o){super(t,i,a,o),this.type="firestore",this._queue=new Zv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zv(t),this._firestoreClient=void 0,await t}}}function WE(n,t){const i=typeof n=="object"?n:H6(),a=typeof n=="string"?n:Ah,o=B6(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=jR("firestore");u&&tj(o,...u)}return o}function Ag(n){if(n._terminated)throw new dt(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ej(n),n._firestoreClient}function ej(n){const t=n._freezeSettings(),i=(function(o,u,d,p){return new AI(o,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,QE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new QC(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class $n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $n(Ze.fromBase64String(t))}catch(i){throw new dt(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new $n(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(fu(t,$n._jsonSchema))return $n.fromBase64String(t.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Ne("string",$n._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class rd{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new dt(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ad{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new dt(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new dt(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ai._jsonSchemaVersion}}static fromJSON(t){if(fu(t,Ai._jsonSchema))return new Ai(t.latitude,t.longitude)}}Ai._jsonSchemaVersion="firestore/geoPoint/1.0",Ai._jsonSchema={type:Ne("string",Ai._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class Ri{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(fu(t,Ri._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Ri(t.vectorValues);throw new dt(it.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ri._jsonSchemaVersion="firestore/vectorValue/1.0",Ri._jsonSchema={type:Ne("string",Ri._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=/^__.*__$/;class ij{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new la(t,this.data,this.fieldMask,i,this.fieldTransforms):new pu(t,this.data,i,this.fieldTransforms)}}class ZE{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return new la(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function JE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt(40011,{Ac:n})}}class Rg{constructor(t,i,a,o,u,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Rg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Oh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(JE(this.Ac)&&nj.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class rj{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||td(t)}Cc(t,i,a,o=!1){return new Rg({Ac:t,methodName:i,Dc:a,path:We.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ig(n){const t=n._freezeSettings(),i=td(n._databaseId);return new rj(n._databaseId,!!t.ignoreUndefinedProperties,i)}function aj(n,t,i,a,o,u={}){const d=n.Cc(u.merge||u.mergeFields?2:0,t,i,o);jg("Data must be an object, but it was:",d,a);const p=tb(a,d);let m,g;if(u.merge)m=new Cn(d.fieldMask),g=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const w of u.mergeFields){const S=wm(t,w,i);if(!d.contains(S))throw new dt(it.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);nb(v,S)||v.push(S)}m=new Cn(v),g=d.fieldTransforms.filter((w=>m.covers(w.field)))}else m=null,g=d.fieldTransforms;return new ij(new xn(p),m,g)}class sd extends ad{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof sd}}class Cg extends ad{constructor(t,i){super(t),this.Fc=i}_toFieldTransform(t){const i=new cu(t.serializer,aE(t.serializer,this.Fc));return new WI(t.path,i)}isEqual(t){return t instanceof Cg&&this.Fc===t.Fc}}function sj(n,t,i,a){const o=n.Cc(1,t,i);jg("Data must be an object, but it was:",o,a);const u=[],d=xn.empty();oa(a,((m,g)=>{const v=Dg(t,m,i);g=sr(g);const w=o.yc(v);if(g instanceof sd)u.push(v);else{const S=vu(g,w);S!=null&&(u.push(v),d.set(v,S))}}));const p=new Cn(u);return new ZE(d,p,o.fieldTransforms)}function oj(n,t,i,a,o,u){const d=n.Cc(1,t,i),p=[wm(t,a,i)],m=[o];if(u.length%2!=0)throw new dt(it.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)p.push(wm(t,u[S])),m.push(u[S+1]);const g=[],v=xn.empty();for(let S=p.length-1;S>=0;--S)if(!nb(g,p[S])){const R=p[S];let M=m[S];M=sr(M);const B=d.yc(R);if(M instanceof sd)g.push(R);else{const P=vu(M,B);P!=null&&(g.push(R),v.set(R,P))}}const w=new Cn(g);return new ZE(v,w,d.fieldTransforms)}function lj(n,t,i,a=!1){return vu(i,n.Cc(a?4:3,t))}function vu(n,t){if(eb(n=sr(n)))return jg("Unsupported field value:",t,n),tb(n,t);if(n instanceof ad)return(function(a,o){if(!JE(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let d=0;for(const p of a){let m=vu(p,o.wc(d));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),d++}return{arrayValue:{values:u}}})(n,t)}return(function(a,o){if((a=sr(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return aE(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=le.fromDate(a);return{timestampValue:jh(o.serializer,u)}}if(a instanceof le){const u=new le(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:jh(o.serializer,u)}}if(a instanceof Ai)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $n)return{bytesValue:gE(o.serializer,a._byteString)};if(a instanceof Ae){const u=o.databaseId,d=a.firestore._databaseId;if(!d.isEqual(u))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:dg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Ri)return(function(d,p){return{mapValue:{fields:{[F2]:{stringValue:K2},[Rh]:{arrayValue:{values:d.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return ug(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${qh(a)}`)})(n,t)}function tb(n,t){const i={};return U2(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oa(n,((a,o)=>{const u=vu(o,t.mc(a));u!=null&&(i[a]=u)})),{mapValue:{fields:i}}}function eb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Ai||n instanceof $n||n instanceof Ae||n instanceof ad||n instanceof Ri)}function jg(n,t,i){if(!eb(i)||!V2(i)){const a=qh(i);throw a==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+a)}}function wm(n,t,i){if((t=sr(t))instanceof rd)return t._internalPath;if(typeof t=="string")return Dg(n,t);throw Oh("Field path arguments must be of type string or ",n,!1,void 0,i)}const uj=new RegExp("[~\\*/\\[\\]]");function Dg(n,t,i){if(t.search(uj)>=0)throw Oh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,i);try{return new rd(...t.split("."))._internalPath}catch{throw Oh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,i)}}function Oh(n,t,i,a,o){const u=a&&!a.isEmpty(),d=o!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||d)&&(m+=" (found",u&&(m+=` in field ${a}`),d&&(m+=` in document ${o}`),m+=")"),new dt(it.INVALID_ARGUMENT,p+n+m)}function nb(n,t){return n.some((i=>i.isEqual(t)))}/**
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
 */class ib{constructor(t,i,a,o,u){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Ng("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class cj extends ib{data(){return super.data()}}function Ng(n,t){return typeof t=="string"?Dg(n,t):t instanceof rd?t._internalPath:t._delegate._internalPath}/**
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
 */function hj(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new dt(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mg{}class rb extends Mg{}function t_(n,t,...i){let a=[];t instanceof Mg&&a.push(t),a=a.concat(i),(function(u){const d=u.filter((m=>m instanceof Vg)).length,p=u.filter((m=>m instanceof Og)).length;if(d>1||d>0&&p>0)throw new dt(it.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(a);for(const o of a)n=o._apply(n);return n}class Og extends rb{constructor(t,i,a){super(),this._field=t,this._op=i,this._value=a,this.type="where"}static _create(t,i,a){return new Og(t,i,a)}_apply(t){const i=this._parse(t);return ab(t._query,i),new is(t.firestore,t.converter,dm(t._query,i))}_parse(t){const i=Ig(t.firestore);return(function(u,d,p,m,g,v,w){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new dt(it.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){i_(w,v);const M=[];for(const B of w)M.push(n_(m,u,B));S={arrayValue:{values:M}}}else S=n_(m,u,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||i_(w,v),S=lj(p,d,w,v==="in"||v==="not-in");return De.create(g,v,S)})(t._query,"where",i,t.firestore._databaseId,this._field,this._op,this._value)}}class Vg extends Mg{constructor(t,i){super(),this.type=t,this._queryConstraints=i}static _create(t,i){return new Vg(t,i)}_parse(t){const i=this._queryConstraints.map((a=>a._parse(t))).filter((a=>a.getFilters().length>0));return i.length===1?i[0]:ri.create(i,this._getOperator())}_apply(t){const i=this._parse(t);return i.getFilters().length===0?t:((function(o,u){let d=o;const p=u.getFlattenedFilters();for(const m of p)ab(d,m),d=dm(d,m)})(t._query,i),new is(t.firestore,t.converter,dm(t._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kg extends rb{constructor(t,i){super(),this._field=t,this._direction=i,this.type="orderBy"}static _create(t,i){return new kg(t,i)}_apply(t){const i=(function(o,u,d){if(o.startAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new dt(it.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(u,d)})(t._query,this._field,this._direction);return new is(t.firestore,t.converter,(function(o,u){const d=o.explicitOrderBy.concat([u]);return new Ao(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,i))}}function e_(n,t="asc"){const i=t,a=Ng("orderBy",n);return kg._create(a,i)}function n_(n,t,i){if(typeof(i=sr(i))=="string"){if(i==="")throw new dt(it.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Z2(t)&&i.indexOf("/")!==-1)throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);const a=t.path.child(ae.fromString(i));if(!vt.isDocumentKey(a))throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return yv(n,new vt(a))}if(i instanceof Ae)return yv(n,i._key);throw new dt(it.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(i)}.`)}function i_(n,t){if(!Array.isArray(n)||n.length===0)throw new dt(it.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ab(n,t){const i=(function(o,u){for(const d of o)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(i!==null)throw i===t.op?new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new dt(it.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}class dj{convertValue(t,i="none"){switch(ra(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Se(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ia(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw wt(62114,{value:t})}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const a={};return oa(t,((o,u)=>{a[o]=this.convertValue(u,i)})),a}convertVectorValue(t){const i=t.fields?.[Rh].arrayValue?.values?.map((a=>Se(a.doubleValue)));return new Ri(i)}convertGeoPoint(t){return new Ai(Se(t.latitude),Se(t.longitude))}convertArray(t,i){return(t.values||[]).map((a=>this.convertValue(a,i)))}convertServerTimestamp(t,i){switch(i){case"previous":const a=Yh(t);return a==null?null:this.convertValue(a,i);case"estimate":return this.convertTimestamp(ru(t));default:return null}}convertTimestamp(t){const i=na(t);return new le(i.seconds,i.nanos)}convertDocumentKey(t,i){const a=ae.fromString(t);Gt(bE(a),9688,{name:t});const o=new au(a.get(1),a.get(3)),u=new vt(a.popFirst(5));return o.isEqual(i)||lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
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
 */function fj(n,t,i){let a;return a=n?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t,a}class Bl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wa extends ib{constructor(t,i,a,o,u,d){super(t,i,a,o,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new mh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(Ng("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Wa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Wa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wa._jsonSchema={type:Ne("string",Wa._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class mh extends Wa{data(t={}){return super.data(t)}}class no{constructor(t,i,a,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new Bl(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new mh(this._firestore,this._userDataWriter,a.key,a,new Bl(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new dt(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const m=new mh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new mh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Bl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),v=d.indexOf(p.doc.key)),{type:pj(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new dt(it.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=no._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ng.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function pj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt(61501,{type:n})}}/**
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
 */function gh(n){n=ur(n,Ae);const t=ur(n.firestore,xu);return ZC(Ag(t),n._key).then((i=>mj(t,n,i)))}no._jsonSchemaVersion="firestore/querySnapshot/1.0",no._jsonSchema={type:Ne("string",no._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class sb extends dj{constructor(t){super(),this.firestore=t}convertBytes(t){return new $n(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,i)}}function Tm(n){n=ur(n,is);const t=ur(n.firestore,xu),i=Ag(t),a=new sb(t);return hj(n._query),JC(i,n._query).then((o=>new no(t,a,n,o)))}function Ug(n,t,i){n=ur(n,Ae);const a=ur(n.firestore,xu),o=fj(n.converter,t,i);return ob(a,[aj(Ig(a),"setDoc",n._key,o,n.converter!==null,i).toMutation(n._key,Ti.none())])}function Vh(n,t,i,...a){n=ur(n,Ae);const o=ur(n.firestore,xu),u=Ig(o);let d;return d=typeof(t=sr(t))=="string"||t instanceof rd?oj(u,"updateDoc",n._key,t,i,a):sj(u,"updateDoc",n._key,t),ob(o,[d.toMutation(n._key,Ti.exists(!0))])}function ob(n,t){return(function(a,o){const u=new ir;return a.asyncQueue.enqueueAndForget((async()=>LC(await WC(a),o,u))),u.promise})(Ag(n),t)}function mj(n,t,i){const a=i.docs.get(t._key),o=new sb(n);return new Wa(n,o,t._key,a,new Bl(i.hasPendingWrites,i.fromCache),t.converter)}function kh(n){return new Cg("increment",n)}(function(t,i=!0){(function(o){wo=o})(q6),Th(new tu("firestore",((a,{instanceIdentifier:o,options:u})=>{const d=a.getProvider("app").getImmediate(),p=new xu(new oI(a.getProvider("auth-internal")),new cI(d,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new dt(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new au(g.options.projectId,v)})(d,o),d);return u={useFetchStreams:i,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),to(rv,av,t),to(rv,av,"esm2020")})();const gj={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},yj=Jx().length?Jx()[0]:tg(gj),Xl=WE(yj),r_=40;function lb(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=n.replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const xj=A.div`
  position: relative; background: #fff;
`,vj=A.div`
  padding-left: ${r_}px; padding-right: ${r_}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function _j({children:n}){return x.jsx(xj,{children:x.jsx(vj,{children:n})})}const Ej=A.div`
  position: relative;
  min-height: calc(100vh - 200px);
`,bj=A.div`
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
`,wj=A.div`
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
`,a_=Jl,ub=Qm,Tj={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function Sm(n){return n.members.map(t=>{const i=ub.find(a=>a.num===t);return i?i.nameKor:""}).filter(Boolean).join(", ")}function Sj(n){return n.members.map(t=>{const i=ub.find(a=>a.num===t);return i?lb(i.imgUrl):""}).filter(Boolean)}function Aj({list:n,statsById:t}){const i={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return x.jsx(bj,{children:n.map((a,o)=>{const u=Sm(a),d=Sj(a),p=String(a.projectNum+1).padStart(3,"0"),g=`${i[a.category]||"A"}${p}`,v=a.projectNum??a.num;return x.jsx(Xm,{titleKor:a.titleKor,titleEng:a.titleEng,src:lb(`/projects/${a.projectNum}/thumb.jpg`||`/projects/${a.projectNum}/thumb.png`),nameKor:u,profileImgs:d,docId:v,href:`/work/${g}`,like:t[String(v)]?.like??0,view:t[String(v)]?.view??0},o)})})}function Rj(){const[n,t]=Rt.useState("All Projects"),[i,a]=Rt.useState("이름순"),[o,u]=Rt.useState({});Rt.useEffect(()=>{let m=!0;return(async()=>{try{const g=await Tm(ph(Xl,"works"));if(!m)return;const v={};g.forEach(w=>{const S=w.data()||{};v[String(w.id)]={like:typeof S.like=="number"?S.like:0,view:typeof S.view=="number"?S.view:0}}),u(v)}catch(g){console.error("Failed to load works stats:",g)}})(),()=>{m=!1}},[]);const d=Rt.useMemo(()=>{const m=Tj[n]||null;return m?a_.filter(g=>g.category===m):a_},[n]),p=Rt.useMemo(()=>{const m=[...d];switch(i){case"이름순":m.sort((g,v)=>Sm(g).localeCompare(Sm(v),"ko"));break;case"좋아요순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.like??0;return(o[S]?.like??0)-R});break;case"조회수순":m.sort((g,v)=>{const w=String(g.projectNum??g.num),S=String(v.projectNum??v.num),R=o[w]?.view??0;return(o[S]?.view??0)-R});break;case"팀작우선":m.sort((g,v)=>(v.members.length>1)-(g.members.length>1));break;case"개인작우선":m.sort((g,v)=>(g.members.length>1)-(v.members.length>1));break}return m},[d,i,o]);return x.jsxs(Ej,{children:[x.jsx(wj,{children:"Projects"}),x.jsx(m2,{type:"project",onCategoryChange:t,onSortChange:a,sortLabel:i}),x.jsx(_j,{children:x.jsx(Aj,{list:p,statsById:o})})]})}const Ij=A.div(({height:n,from:t,to:i,position:a,z:o})=>({position:"absolute",left:0,right:0,[a]:-1,height:n,pointerEvents:"none",zIndex:o??0,background:`linear-gradient(180deg, ${t} 0%, ${i} 100%)`}));function Pg({position:n="bottom",from:t,to:i,height:a=240,z:o=0,style:u}){return x.jsx(Ij,{position:n,from:t,to:i,height:a,z:o,style:u})}const rr={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:80},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:160},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},s_="/TU2025gradulate/",Cj=A.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 320px;
    min-height: 220px;
  }
`,jj=A.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`,Dj=A.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,Nj=A.video`
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
`,Mj=A.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  aspect-ratio: 1 / 1; /* width defines the square size now */
  transform: translate(-50%, -50%);
  overflow: hidden;
`,Oj=A.video`
  width: 100%;
  height: 100%;
  display: block;
`,Vj=A.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`,kj=A.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  opacity: ${n=>n.$visible?1:0};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${n=>n.$visible?"auto":"none"};
  @media (max-width: 640px) {
    left: 16px;
    bottom: 32px;
    max-width: 90vw;
    gap: 4px;
  }
`,o_=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,Uj=A.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,Pj=A.button`
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
    bottom: 16px;
  }
`;function zj(){const[n,t]=Rt.useState(!1),i=Rt.useRef(null);return Rt.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),x.jsxs(Cj,{"aria-label":"Hero",children:[x.jsxs(jj,{children:[x.jsx(Dj,{"aria-hidden":!0,children:x.jsx(Nj,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",children:x.jsx("source",{src:`${s_}video/hero11.mp4`,type:"video/mp4"})})}),x.jsx(Mj,{"aria-label":"Hero background video",children:x.jsxs(Oj,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onLoadedData:()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>t(!0),13900)},children:[x.jsx("source",{src:`${s_}video/hero11.mp4`,type:"video/mp4"}),"Your browser does not support the video tag."]})}),x.jsx(Vj,{})]}),x.jsxs(kj,{$visible:n,children:[x.jsxs(o_,{children:["25. 10. 24. FRI~26. SUN",x.jsx("br",{}),"Hongdae Art Center B2"]}),x.jsx(o_,{children:"Department of Design Engineering"}),x.jsxs(Uj,{children:["Tech University of Korea",x.jsx("br",{}),"20th Grad Exhibition"]})]}),x.jsx(Pj,{type:"button","aria-label":"View More",children:"View More"}),x.jsx(Pg,{position:"bottom",from:rr.heroToWhite.from,to:rr.heroToWhite.to,height:rr.heroToWhite.h,z:0})]})}const l_="/TU2025gradulate/",Lj=A.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,Bj=A.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,$j=A.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`,Fj=A.div`
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
`,Kj=A.h2`
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
`,qj=A.div`
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
`,Hj=A.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`,Gj=A.div`
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
`;function Yj(){return x.jsxs(Lj,{"aria-labelledby":"brand-title",children:[x.jsxs(Bj,{children:[x.jsxs($j,{children:[x.jsx(Kj,{id:"brand-title",children:"Brand Concept"}),x.jsxs(Fj,{children:[x.jsxs(qj,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",x.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",x.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",x.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",x.jsx("br",{}),x.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",x.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",x.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",x.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",x.jsx("br",{}),x.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",x.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]}),x.jsx(Hj,{children:x.jsx("img",{src:`${l_}brand-logo.png`,alt:"2025 졸업전시 브랜드 로고",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1},draggable:!1})})]})]}),x.jsx(Gj,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:x.jsx("img",{src:`${l_}brand-variation.png`,alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),x.jsx(Pg,{position:"bottom",from:rr.whiteToBlack.from,to:rr.whiteToBlack.to,height:rr.whiteToBlack.h,z:0})]})}const Qj='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',Xj=A.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${n=>n.$size==="sm"?40:52}px;
  padding: 0 ${n=>n.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${Qj};
  font-weight: 700;
  font-size: ${n=>n.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${n=>n.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,Wj=A.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function od({as:n="button",href:t,label:i="View More",size:a="md",fullWidth:o=!1,showArrow:u,defaultShowArrow:d=!0,onArrowChange:p,onClick:m,style:g}){const v=typeof u=="boolean",[w,S]=Rt.useState(d),R=v?u:w;Rt.useCallback(()=>{if(v){p&&p(!u);return}S(B=>{const P=!B;return p&&p(P),P})},[v,p,u]);const M={onClick:m,style:g,"data-arrow-visible":R,"data-toggle-arrow-fn":void 0,$size:a,$full:o,as:n,href:t,type:n==="button"?"button":void 0};return x.jsxs(Xj,{...M,target:"_blank",rel:"noopener noreferrer",children:[i,R?x.jsx(Wj,{"aria-hidden":!0}):null]})}const Zj=A.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,Jj=A.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,t5=A.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,_i=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,e5=A.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,n5=A.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,i5=A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
    display: none; /* hide desktop grid on small screens */
  }
`,Vp=A.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`,Ji=A.div`
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
`,kp=A.div`
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
`,r5=A.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`,a5=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s5=A.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`,o5=A.div`
  display: flex;
  gap: 8px;
`,u_=A.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;function l5(){const n=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:""},{src:"https://placehold.co/727x445",cap:""},{src:"https://placehold.co/727x445",cap:""},{src:"https://placehold.co/727x445",cap:""},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:""},{src:"https://placehold.co/727x445",cap:""}];return x.jsxs(Zj,{"aria-label":"Gallery",children:[x.jsx(Pg,{position:"top",from:rr.blackToBlackSoft.from,to:rr.blackToBlackSoft.to,height:rr.blackToBlackSoft.h,z:0}),x.jsxs(Jj,{children:[x.jsxs(t5,{children:[x.jsx(_i,{src:"https://placehold.co/1840x1000",alt:"featured"}),x.jsx(e5,{"aria-hidden":!0,children:x.jsx(n5,{})})]}),x.jsxs(i5,{className:"gallery-desktop",children:[x.jsxs(Vp,{children:[x.jsx(Ji,{$w:910,$h:445,children:x.jsx(_i,{src:"https://placehold.co/910x512",alt:""})}),x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})}),x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})})]}),x.jsxs(Vp,{children:[x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})}),x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})}),x.jsx(Ji,{$w:910,$h:445,children:x.jsx(_i,{src:"https://placehold.co/910x517",alt:""})})]}),x.jsxs(Vp,{children:[x.jsx(Ji,{$w:910,$h:445,children:x.jsx(_i,{src:"https://placehold.co/987x555",alt:""})}),x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})}),x.jsx(Ji,{$w:445,$h:445,children:x.jsx(_i,{src:"https://placehold.co/727x445",alt:""})})]})]}),x.jsx(r5,{children:x.jsx("div",{style:{marginTop:12,display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((t,i)=>{const a=i*3,o=n[a],u=n[a+1],d=n[a+2];return x.jsxs(a5,{children:[o&&x.jsxs(s5,{children:[x.jsx("img",{src:o.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),o.cap&&x.jsx(kp,{style:{opacity:1},children:o.cap})]}),x.jsxs(o5,{children:[u&&x.jsxs(u_,{children:[x.jsx("img",{src:u.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),u.cap&&x.jsx(kp,{style:{opacity:1},children:u.cap})]}),d&&x.jsxs(u_,{children:[x.jsx("img",{src:d.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),d.cap&&x.jsx(kp,{style:{opacity:1},children:d.cap})]})]})]},i)})})}),x.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:x.jsx(od,{label:"View More"})})]})]})}const u5=A.section`
  padding: 0;
`,c5=A.div`
  position: relative; height: 1045px; overflow: hidden;
`,h5=A.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,d5=A.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,f5=A.img`
  width: 100%; height: 100%; object-fit: cover;
`,p5=A.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,m5=A.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,g5=A.div`
  position: absolute; left: 860px; top: 935px;
`;function y5(){return x.jsx(u5,{"aria-labelledby":"online-title",children:x.jsxs(c5,{children:[x.jsx(h5,{id:"online-title",children:"Online Exhibition"}),x.jsx(d5,{children:x.jsx(f5,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),x.jsx(p5,{"aria-hidden":!0}),x.jsx(m5,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),x.jsx(g5,{children:x.jsx(od,{label:"View More"})})]})})}const x5=A.section`
  position: relative;
  height: ${n=>`${n.$durationVh}vh`};
`,v5=A.div`
  position: sticky; top: 0; height: 100vh; overflow: hidden;
  display: ${n=>n.$center?"flex":"block"};
  align-items: ${n=>n.$center?"center":"stretch"};
  justify-content: ${n=>n.$center?"center":"unset"};
`,_5=A.div`
  width: 100%;
  ${n=>n.$offset?`transform: translateY(${n.$offset}px);`:""}
`;function E5({durationVh:n=300,center:t=!0,centerOffsetPx:i=0,children:a,style:o}){const u=Rt.useRef(null),[d,p]=Rt.useState(0);return Rt.useEffect(()=>{const m=u.current;if(!m)return;let g=0,v=!0;const w=()=>{if(!v)return;const S=m.getBoundingClientRect(),R=window.innerHeight,M=n/100*R-R,B=Math.min(Math.max(-S.top,0),M);p(M>0?B/M:0),g=requestAnimationFrame(w)};return g=requestAnimationFrame(w),()=>{v=!1,cancelAnimationFrame(g)}},[n]),x.jsx(x5,{ref:u,style:o,$durationVh:n,children:x.jsx(v5,{$center:t,children:x.jsx(_5,{$offset:i,children:typeof a=="function"?a(d):a})})})}const c_=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],b5=A.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,w5=A.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,T5=A.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,S5=A.img`
  width: 100%;
  height: auto;
  display: block;
`,A5=A.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,R5=A.div`
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
`,I5=A.div`
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
`,C5=A.div`
  position: absolute;
  left: 351px; top: 140px;
  width: 1219px; height: 686px;
  border-radius: 3.55px;
  background: #606060;
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
`,j5=A.img`
  width: 1265px; height: 712px; display: block;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`,_u=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`,D5=A.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  /* transform and opacity are applied inline for performance */
  ${_u}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,N5=A.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  /* transform and opacity are applied inline for performance */
  ${_u}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,M5=A.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${_u}
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
`,O5=A.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${_u}
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
`,V5=A.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  /* transform and opacity are applied inline for performance */
  ${_u}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`,k5=A.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`,U5=A.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`,P5=(n,t=0,i=1)=>Math.max(t,Math.min(i,n)),Ys=(n,t,i)=>n+(t-n)*i,z5=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function L5({work:n,progress:t}){const i=z5(P5(t,0,1)),a=Ys(0,-120,i),o=Ys(0,-360,i),u=Ys(0,-280,i),d=Ys(0,-220,i),p=Ys(0,-260,i),m=Ys(0,-180,i),g=.55,w=i<g?1:1-Math.max(0,Math.min(1,(i-g)/(.9-g))),S={transform:`translate3d(0, ${a}px, 0)`,willChange:"transform"},R=B=>({transform:`translate3d(0, ${B}px, 0)`,opacity:w,willChange:"transform, opacity"}),M={transform:`translate3d(0, ${m}px, 0)`,opacity:w,willChange:"transform, opacity"};return x.jsxs(b5,{children:[x.jsx(I5,{children:"TU-EXPO Works"}),x.jsxs(R5,{children:[x.jsx(C5,{style:S,children:x.jsx(j5,{src:n.image,alt:"작품 이미지"})}),x.jsx(D5,{style:R(o),children:n.artistKr}),x.jsx(N5,{style:R(u),children:n.dept}),x.jsx(M5,{style:R(d),children:n.rightMeta1}),x.jsx(O5,{style:R(p),children:n.rightMeta2}),x.jsxs(V5,{style:M,children:[x.jsx(k5,{children:n.titleSmall}),x.jsx(U5,{children:n.titleStrong})]})]})]})}function B5(){return x.jsxs(x.Fragment,{children:[x.jsx("style",{children:`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}),x.jsx("div",{className:"expo-works-desktop",children:c_.slice(0,3).map(n=>x.jsx(E5,{durationVh:320,center:!0,centerOffsetPx:-40,children:t=>x.jsx(L5,{work:n,progress:t})},n.id))}),x.jsx(w5,{className:"expo-works-mobile",children:c_.map(n=>x.jsxs(T5,{children:[x.jsx(S5,{src:n.image,alt:n.titleStrong}),x.jsxs(A5,{children:[x.jsx("div",{style:{fontWeight:700,fontSize:16},children:n.titleStrong}),x.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[n.artistKr," | ",n.dept]}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:n.rightMeta1}),x.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:n.rightMeta2})]})]},n.id))})]})}const $5="/TU2025gradulate/",F5=A.div`
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
`,K5=A.div`
  position: relative; 
  height: auto;
`,q5=A.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  @media (max-width: 640px) {
    gap: 16px;
}
`,H5=A.div`
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
`,G5=A.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`,Y5=A.div`
  display: flex; flex-direction: column; align-items: center; gap: 60px; margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`,Q5=A.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;function X5(){return x.jsx(F5,{"aria-labelledby":"insta-title",children:x.jsx(K5,{children:x.jsxs(q5,{children:[x.jsx(H5,{children:x.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF",children:[x.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),x.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),x.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})}),x.jsx(G5,{id:"insta-title",children:"@tukd_grad"}),x.jsxs(Y5,{children:[x.jsx(Q5,{children:x.jsx("img",{src:`${$5}insta-qr.png`,alt:"Instagram preview"})}),x.jsx(od,{as:"a",href:"https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",label:"View Instagram",size:"sm"})]})]})})})}const Eu=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,h_=350,W5=A.section`
  padding: 120px 0 0 0; background: #121212;
`,Z5=A.div`
  position: relative; background: #121212;
`,J5=A.div`
  /* padding-left: ${h_}px; padding-right: ${h_}px; */
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
`,tD=({children:n})=>x.jsx(Z5,{children:x.jsx(J5,{children:n})}),eD=A.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,nD=A.div`
  font-family: ${Eu}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;function iD({title:n}){return x.jsx(eD,{children:x.jsx(nD,{children:n})})}const rD=A.div`
  border-bottom: ${n=>n.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`,aD=A.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${n=>n.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`,sD=A.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,oD=A.div`
  font-family: ${Eu}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,lD=A.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Yr({k:n,children:t,divider:i=!0}){return x.jsxs(aD,{$divider:i,children:[x.jsx(sD,{children:x.jsx(oD,{children:n})}),x.jsx(lD,{children:t})]})}const uD=A.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function d_({title:n,children:t,last:i=!1}){return x.jsxs(rD,{$last:i,children:[x.jsx(iD,{title:n}),x.jsx(uD,{children:t})]})}const cD=A.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`,hD=A.div`
  font-family: ${Eu}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`,qt=A.div`
  font-family: ${Eu}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`,Zc=A(qt)`
  font-weight: 500;
`,dD=A(qt)`
  font-size: 13px;
`;A(qt)`
  margin-top: 24px;
`;const fD=A.a`
  font-family: ${Eu}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;function pD(){return x.jsx(W5,{"aria-label":"Venue & Access",children:x.jsxs(tD,{children:[x.jsxs(d_,{title:"Venew Details",children:[x.jsx(cD,{children:x.jsx(hD,{children:"잔향 : 기억의 향기"})}),x.jsx(Yr,{k:"Term",children:x.jsx(qt,{children:"2025. 10. 24. FRI - 10. 26. SUN"})}),x.jsxs(Yr,{k:"Hours",children:[x.jsx(qt,{children:"10.24.FRI   13:00 ~ 17:30 (OPENING 16:00~)"}),x.jsx(qt,{children:"10.25.SAT ~ 10.26.SUN    10:00 ~ 17:30"})]}),x.jsxs(Yr,{k:"Schedule",children:[x.jsx(Zc,{children:"10.24.FRI"}),x.jsx(qt,{children:"13:00    자유관람"}),x.jsx(qt,{children:"15:00    졸업생 홈커밍 행사"}),x.jsx(qt,{children:"16:00    개회식"}),x.jsx(qt,{children:"16:20    졸업작품 우수작 시상"}),x.jsx(qt,{children:"16:30    자유관람"}),x.jsxs(Zc,{children:[x.jsx("br",{}),"10.25.SAT"]}),x.jsx(qt,{children:"10:00    자유관람"}),x.jsx(qt,{children:"13:00    취·창업 커리어 캠프"}),x.jsxs(Zc,{children:[x.jsx("br",{}),"10.26.SUN"]}),x.jsx(qt,{children:"10:00    자유관람"})]}),x.jsxs(Yr,{k:"Website",divider:!1,children:[x.jsx(qt,{children:"Hongik Art Center"}),x.jsx(fD,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),x.jsxs(d_,{title:"Access",children:[x.jsxs(Yr,{k:"Address",children:[x.jsxs(qt,{children:["홍대 아트센터 지하 2층 전시관 3",x.jsx("br",{}),"서울시 종로구 대학로 57"]}),x.jsxs(qt,{children:["Hongik Art Center B2 Gallery 3",x.jsx("br",{}),"57, Daehak-ro, Jongno-gu, Seoul"]}),x.jsx("div",{style:{marginTop:24},children:x.jsx(od,{as:"a",href:"https://maps.app.goo.gl/qc99M9bDqyBTcmx79",label:"Map",size:"sm",showArrow:!0})})]}),x.jsxs(Yr,{k:"Parking",children:[x.jsx(qt,{children:"B3F ~ B6F"}),x.jsxs(qt,{children:[x.jsx("br",{}),"기본 30분 3,000원 / 이후 20분당 2,000원"]}),x.jsx(qt,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공"}),x.jsx(Zc,{children:"(주차권으로만 정산 가능, 티켓정산 불가)"}),x.jsx(dD,{children:"주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크"})]}),x.jsxs(Yr,{k:"By Subway",children:[x.jsx(qt,{children:"[1호선 종로5가역]"}),x.jsx(qt,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[4호선 혜화역]"]}),x.jsx(qt,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),x.jsx(qt,{children:"또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),x.jsxs(Yr,{k:"By Bus",divider:!1,children:[x.jsx(qt,{children:"[이화사거리(01-572) 하차]"}),x.jsx(qt,{children:"마을버스 종로 08번"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),x.jsx(qt,{children:"102, 107, 108, 109, 162, 301, 7025"}),x.jsxs(qt,{children:[x.jsx("br",{}),"[이화장(01-223) 하차]"]}),x.jsx(qt,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}const mD=A.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;function gD(){const n=[x.jsx(zj,{},"hero"),x.jsx(Yj,{},"brand"),x.jsx(l5,{},"gallery"),x.jsx(mD,{children:x.jsx(y5,{})},"online"),x.jsx(B5,{},"works"),x.jsx(X5,{},"insta"),x.jsx(pD,{},"venue")];return x.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:n})}const yD="/TU2025gradulate/",zg="Pretendard, system-ui",xD=A.div`
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
`,vD=A.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${yD}/gestbook-card.svg);
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
`,_D=A.div` 
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
`,ED=A.div`
  /* position: absolute; */
  font-family: ${zg};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`,bD=A.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${zg};
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
`,wD=A.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${zg};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;function TD({to:n,from:t,message:i}){return x.jsxs(xD,{$w:mo,$h:ts,children:[x.jsx(vD,{}),x.jsxs(_D,{$w:mo,$h:ts,children:[x.jsx(ED,{children:`To. ${n}`}),x.jsx(bD,{children:i}),x.jsx(wD,{children:`From. ${t}`})]})]})}const SD=A.div`
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
`,AD=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function RD({src:n}){return x.jsx(SD,{$w:mo,$h:ts,children:x.jsx(AD,{src:n,alt:"포토 카드"})})}const ID=A.button`
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
`,CD=A.div`
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
`,jD=A.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,DD=A.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`,ND=A.span`
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
`,MD=A.span`
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
`;function OD({onClick:n}){return x.jsxs(ID,{onClick:n,"aria-label":"방명록 작성",$w:mo,$h:ts,children:[x.jsx(CD,{$w:mo,$h:ts}),x.jsx(jD,{children:x.jsxs(DD,{children:[x.jsx(ND,{}),x.jsx(MD,{})]})})]})}const mo=270,ts=337,VD=30,cb=20,kD=210,UD=60,hb=173,db=216,PD=16,zD=16,Am=16,LD=A.div`
  padding: 0 0 12px 0;
  @media (max-width: 640px) {
    display: none;
  }
`,BD=A.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,$D=A.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${n=>n.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,FD=A.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${UD}px 0 ${kD}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    overflow: visible;
    padding: 0px;
    cursor: default;
  }
`,KD=A.div`
  display: flex;
  gap: ${VD}px;
  align-items: flex-start;
  min-height: ${ts*2+cb}px;

  @media (max-width: 640px) {
    gap: ${PD}px;
    min-height: initial;
  }
`,qD=A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${Am}px;
  padding: 0 16px; /* 좌우 16px 고정 마진 */
`,HD=A.div`
  width: calc((100% - ${Am}px) / 2);
  height: ${db}px;
  flex: 0 0 calc((100% - ${Am}px) / 2);
`,GD=A.div`
  @media (max-width: 640px) { display: none; }
`,YD=A.div`
  display: none;
  @media (max-width: 640px) { display: block; }
`,QD=A.div`
  display: flex;
  flex-direction: column;
  gap: ${cb}px;
  @media (max-width: 640px) {
    width: ${hb}px;
    gap: ${zD}px;
  }
`,fb=A.div`
  width: ${mo}px;
  height: ${ts}px;
  @media (max-width: 640px) {
    width: ${hb}px;
    height: ${db}px;
  }
`,f_=n=>{const t=[{type:"add",id:"add"},...n],i=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let a=0;return i.forEach((o,u)=>{if(t.length>o.min+a){const d=Math.min(Math.floor(Math.random()*(o.max-o.min+1))+o.min,t.length)+a;t.splice(d,0,{type:"photo",id:`ph-${Date.now()}-${u}`,src:"https://placehold.co/662x405"}),a++}}),t},XD=n=>{const t=[];for(let i=0;i<n.length;i+=2)t.push([n[i],n[i+1]||null]);return t};function WD({onOpenModal:n,items:t}){const i=q.useRef(null),[a,o]=q.useState({width:0,trackW:0}),[u,d]=q.useState(()=>f_(t)),[p,m]=q.useState(()=>window.matchMedia&&window.matchMedia("(max-width: 640px)").matches);q.useEffect(()=>{d(f_(t))},[t]);const g=XD(u);q.useEffect(()=>{if(!window.matchMedia)return;const R=window.matchMedia("(max-width: 640px)"),M=B=>m(B.matches);return R.addEventListener?R.addEventListener("change",M):R.addListener(M),()=>{R.removeEventListener?R.removeEventListener("change",M):R.removeListener(M)}},[]),q.useEffect(()=>{if(p)return;const R=i.current;if(!R)return;const M=B=>{Math.abs(B.deltaY)>Math.abs(B.deltaX)&&(R.scrollLeft+=B.deltaY,B.preventDefault())};return R.addEventListener("wheel",M,{passive:!1}),()=>R.removeEventListener("wheel",M)},[p]);const v=q.useRef({on:!1,moved:!1,startX:0,startScroll:0}),w=R=>!!R?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');q.useEffect(()=>{if(p)return;const R=i.current;if(!R)return;const M=G=>{G.button===0&&(w(G.target)||(v.current.on=!0,v.current.moved=!1,v.current.startX=G.clientX,v.current.startScroll=R.scrollLeft,R.setPointerCapture?.(G.pointerId),document.body.style.userSelect="none",R.style.cursor="grabbing"))},B=G=>{if(!v.current.on)return;const X=G.clientX-v.current.startX;Math.abs(X)>2&&(v.current.moved=!0),R.scrollLeft=v.current.startScroll-X},P=G=>{v.current.on&&(R.releasePointerCapture?.(G.pointerId),document.body.style.userSelect="",R.style.cursor="grab",v.current.moved&&(G.preventDefault(),G.stopPropagation()),v.current.on=!1)};return R.addEventListener("pointerdown",M),window.addEventListener("pointermove",B),window.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),()=>{R.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P)}},[p]);const S=q.useCallback(()=>{const R=i.current;if(!R)return;const M=R.clientWidth,B=R.scrollWidth,P=R.scrollLeft,X=R.parentElement?.clientWidth||M,et=Math.max(1,B-M),ct=Math.min(1,Math.max(0,P/et)),Z=Math.round(X*ct);o({width:Z,trackW:X})},[]);return q.useEffect(()=>{if(p)return;S();const R=i.current;if(!R)return;const M=()=>requestAnimationFrame(S),B=()=>requestAnimationFrame(S);return R.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",B),()=>{R.removeEventListener("scroll",M),window.removeEventListener("resize",B)}},[S,p]),x.jsxs(x.Fragment,{children:[x.jsxs(GD,{children:[x.jsx(LD,{children:x.jsx(BD,{children:x.jsx($D,{$w:a.width})})}),x.jsx(FD,{ref:i,children:x.jsx(KD,{children:g.map((R,M)=>x.jsxs(QD,{children:[x.jsx(Up,{data:R[0],onOpenModal:n}),R[1]?x.jsx(Up,{data:R[1],onOpenModal:n}):x.jsx(fb,{})]},`col-${M}`))})})]}),x.jsx(YD,{children:x.jsx(qD,{children:u.map(R=>x.jsx(HD,{children:x.jsx(Up,{data:R,onOpenModal:n})},R.id))})})]})}function Up({data:n,onOpenModal:t}){return n?n.type==="add"?x.jsx(OD,{onClick:t,style:{pointerEvents:"auto"}}):n.type==="photo"?x.jsx(RD,{src:n.src}):x.jsx(TD,{to:n.to,from:n.from,message:n.message}):x.jsx(fb,{})}const ZD="/TU2025gradulate/",JD=A.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
  @media (max-width: 640px) {
    align-items: end;
    padding: 0 16px 84px 16px;
  }
`,tN=A.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
  @media (max-width: 640px) {
    gap: 0;
  }
`,eN=A.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    padding: 18px;
    border-radius: 12px;
  }
`,nN=A.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    gap: 12px;
  }
`,iN=A.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  @media (max-width: 640px) {
    width: 260px;
    height: 340px;
    border-radius: 12px;
  }
`,rN=A.div`
  position: absolute;
  left: 12px;
  top: 314.67px;
  width: 302px;
  height: 246px;
  background-image: url(${ZD}/gestbook-card.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    left: 4px;
    top: 210px;
    width: 158px;
    height: 130px;
  }
`,aN=A.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 18px; top: 22px; gap: 6px;
  }
`,sN=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,oN=A.input`
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
`,lN=A.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
  @media (max-width: 640px) {
    left: 18px; top: 78px; width: 206px;
  }
`,uN=A.textarea`
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
`,cN=A.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
  @media (max-width: 640px) {
    left: 110px; top: 270px; gap: 6px;
  }
  @media (max-width: 640px) {
    left: auto; top: auto; right: 18px; bottom: 16px; gap: 6px;
  }
`,hN=A.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
  @media (max-width: 640px) {
    font-size: 22px;
  }
`,dN=A.input`
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
`,fN=A.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
  @media (max-width: 640px) {
    height: 340px;
  }
`,pN=A.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
  @media (max-width: 640px) {
    width: 40px; height: 40px; border-radius: 20px;
  }
`,mN=A.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
  @media (max-width: 640px) {
    width: 16px; height: 14px;
  }
`,gN=A.div`
  width: 60px; height: 640px; position: relative;
  @media (max-width: 640px) {
    width: 100%; height: auto;
  }
`,yN=A.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
  @media (max-width: 640px) {
    position: fixed; left: 50%; bottom: 20px; top: auto; transform: translateX(-50%);
    width: 56px; height: 56px; border-radius: 28px; background: #fff1;
    backdrop-filter: blur(2px);
  }
`,xN=A.div`
  width: 32px; height: 32px; position: relative;
`,p_=A.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${n=>n.$deg}deg);
  @media (max-width: 640px) {
    left: 15px; top: 4px; height: 24px;
  }
`;function vN({open:n,onClose:t,onSubmit:i,defaultTo:a="",defaultFrom:o=""}){const[u,d]=q.useState(a),[p,m]=q.useState(o),[g,v]=q.useState(""),w=q.useRef(null);if(q.useEffect(()=>{const M=B=>{B.key==="Escape"&&t?.()};return n&&document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[n,t]),!n)return null;const S=M=>{M.target===w.current&&t?.()},R=()=>{const M={to:(u||"").trim(),from:(p||"").trim(),message:(g||"").trim()};M.message&&i?.(M)};return x.jsx(JD,{ref:w,onMouseDown:S,children:x.jsxs(tN,{onMouseDown:M=>M.stopPropagation(),children:[x.jsx(eN,{children:x.jsxs(nN,{children:[x.jsxs(iN,{children:[x.jsx(rN,{}),x.jsxs(aN,{children:[x.jsx(sN,{children:"To."}),x.jsx(oN,{value:u,onChange:M=>d(M.target.value),placeholder:"받는 사람"})]}),x.jsx(lN,{children:x.jsx(uN,{placeholder:"내용을 입력해 주세요.",value:g,onChange:M=>v(M.target.value)})}),x.jsxs(cN,{children:[x.jsx(hN,{children:"From."}),x.jsx(dN,{value:p,onChange:M=>m(M.target.value),placeholder:"보내는 사람"})]})]}),x.jsx(fN,{children:x.jsx(pN,{type:"button",onClick:R,"aria-label":"send",children:x.jsx(mN,{})})})]})}),x.jsx(gN,{children:x.jsx(yN,{type:"button",onClick:t,"aria-label":"close",children:x.jsxs(xN,{children:[x.jsx(p_,{$deg:45}),x.jsx(p_,{$deg:-45})]})})})]})})}const _N={apiKey:"AIzaSyAEFzPwTADLzuxWuyk889Jz1cHPsEgLOkQ",authDomain:"tu2025grad.firebaseapp.com",projectId:"tu2025grad",storageBucket:"tu2025grad.firebasestorage.app",messagingSenderId:"553768466639",appId:"1:553768466639:web:7c16f5d6432da7ebc05fba"},EN=tg(_N),Pp=WE(EN),bN='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',wN=A.div`
  background: #121212; min-height: 100vh;
`,TN=A.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 52px 0 80px 0;
  }
`,SN=A.h1`
  font-family: ${bN}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 4px 0 24px ;
  }
`,AN=A.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`,RN=A.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;function IN(){const[n,t]=Rt.useState(!1),[i,a]=Rt.useState([]);Rt.useEffect(()=>{let d=!0;return(async()=>{try{const p=t_(ph(Pp,"guest"),e_("time","desc")),m=await Tm(p);if(!d)return;const g=[];m.forEach(v=>{const w=v.data();g.push({id:v.id,to:w.to||"",from:w.from||"",message:w.message||"",type:"text"})}),a(g)}catch(p){console.error("Failed to load guestbook items:",p)}})(),()=>{d=!1}},[]);const o=async({to:d,from:p,message:m})=>{try{const g=String(Date.now());await Ug(Ql(ph(Pp,"guest"),g),{to:d||"",from:p||"",message:m||"",time:g});try{const v=t_(ph(Pp,"guest"),e_("time","desc")),w=await Tm(v),S=[];w.forEach(R=>{const M=R.data();S.push({id:R.id,to:M.to||"",from:M.from||"",message:M.message||"",type:"text"})}),a(S)}catch(v){console.error("Failed to reload guestbook items after submit:",v)}t(!1)}catch(g){console.error("Failed to submit guest message:",g)}};return x.jsxs(wN,{children:[x.jsxs(TN,{children:[x.jsx(SN,{children:"Guest Book"}),x.jsx(AN,{children:x.jsxs(RN,{className:"gb-wrap",children:[x.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),x.jsx(WD,{onOpenModal:()=>t(!0),items:i})]})})]}),x.jsx(vN,{open:n,onClose:()=>t(!1),onSubmit:o})]})}const Rm="/TU2025gradulate/",CN=A.div`
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
`,jN=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`,DN=A.div`
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
`,NN=A.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`,MN=A.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
}
`,ON=A.h1`
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
`,VN=A.p`
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
`,kN=A.div`
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
`,UN=A.div`
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
`,PN=A.div`
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
`,zN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,LN=A.div`
  width: 24px;
  height: 24px;
  background-image: ${({$src:n})=>`url("${n}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`,BN=A.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`,$N=A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,FN=A.p`
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
`,KN=A.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${Rm}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;function Im({titleKor:n,titleEng:t,context:i,isOpen:a=!0,onClose:o,src:u,docId:d,collection:p="works"}){const[m,g]=q.useState(0),[v,w]=q.useState(!1);q.useEffect(()=>{let M=!0;return(async()=>{if(d!=null)try{const B=Ql(Xl,p,String(d)),P=await gh(B);if(!M)return;if(P.exists()){const G=P.data();g(typeof G.like=="number"?G.like:0)}else g(0)}catch(B){console.error("Firestore getDoc error:",B),M&&g(0)}})(),()=>{M=!1}},[d,p]);const S=async()=>{try{const M=Ql(Xl,p,String(d)),B=await gh(M);if(B.exists()){const P=B.data();g(typeof P.like=="number"?P.like:0)}}catch(M){console.error("Firestore refresh error:",M)}},R=async()=>{if(v)return;if(d==null){console.warn("handleLike called without a valid docId");return}w(!0);const M=Ql(Xl,p,String(d));try{await Vh(M,{like:kh(1)}),g(B=>B+1),await S()}catch(B){if(B.code==="not-found"||/No document/i.test(String(B)))try{(await gh(M)).exists()?await Vh(M,{like:kh(1)}):await Ug(M,{like:1},{merge:!0}),await S()}catch(P){console.error("Firestore like fallback error:",P)}else console.error("Firestore like error:",B)}finally{w(!1)}};return x.jsx(CN,{$open:!!a,children:x.jsxs(jN,{children:[x.jsxs(DN,{children:[x.jsx(NN,{onClick:()=>{typeof o=="function"&&o()},children:x.jsx("img",{src:`${Rm}icons/closeIcon.svg`,alt:"Close Icon"})}),x.jsxs(MN,{children:[x.jsx(kN,{$src:u}),x.jsx(ON,{children:n}),x.jsx(VN,{children:i})]})]}),x.jsxs(UN,{children:[x.jsx(PN,{onClick:R,"aria-disabled":v,title:v?"처리 중":"좋아요",children:x.jsxs(zN,{children:[x.jsx(LN,{$src:`${Rm}icons/likeIcon(white).svg`,"aria-label":"Like icon"}),x.jsx(BN,{children:m})]})}),x.jsxs($N,{onClick:()=>{const B=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,G=Math.max(0,B-269);window.scrollTo({top:G,behavior:"smooth"})},children:[x.jsx(FN,{children:"Designer Info"}),x.jsx(KN,{})]})]})]})})}Im.propTypes={titleKor:W.string.isRequired,titleEng:W.string.isRequired,context:W.string.isRequired,isOpen:W.bool,onClose:W.func,docId:W.oneOfType([W.string,W.number]).isRequired,collection:W.string};const qN=A.div`
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
`,HN=A.div`
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
`,GN=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,YN=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`,QN=A.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,XN=A.h1`
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
`,WN=A.h2`
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
`,ZN=A.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`,JN=A.div`
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
`,zp=A.h3`
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
`,t9=A.div`
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
`,Lp=A.p`
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
`;function Lg({nameKor:n,nameEng:t,part:i,sns:a,eMail:o,imgUrl:u,imgAlt:d}){return x.jsxs(qN,{children:[x.jsx(HN,{children:x.jsx(GN,{src:u,alt:d})}),x.jsxs(YN,{children:[x.jsxs(QN,{children:[x.jsx(XN,{children:n}),x.jsx(WN,{children:t})]}),x.jsxs(ZN,{children:[x.jsxs(JN,{children:[x.jsx(zp,{children:"Part"}),x.jsx(zp,{children:"SNS"}),x.jsx(zp,{children:"E-mail"})]}),x.jsxs(t9,{children:[x.jsx(Lp,{children:i}),x.jsx(Lp,{children:a}),x.jsx(Lp,{children:o})]})]})]})]})}Lg.propTypes={nameKor:W.string.isRequired,nameEng:W.string.isRequired,part:W.string,sns:W.string,eMail:W.string,imgUrl:W.string.isRequired,imgAlt:W.string.isRequired};Lg.defaultProps={sns:"N/A",eMail:"N/A"};const e9=A.div`
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
`,n9=A.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 21px;
}
`,i9=A.h1`
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
`;function m_({designers:n}){return x.jsxs(e9,{children:[x.jsx(i9,{children:"Designer"}),x.jsx(n9,{children:n.map((t,i)=>x.jsx(Lg,{nameKor:t.nameKor,nameEng:t.nameEng,part:t.role,sns:t.sns,eMail:t.eMail,imgUrl:t.imgUrl},i))})]})}const r9=A.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${n=>n.$isInfoOpen?"100%":"1800px"};
@media (max-width: 640px) {
    margin-top: 20px;
}
`,a9=A.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`,s9=A.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;function o9({videoId:n,isInfoOpen:t}){const a=`https://player.vimeo.com/video/${String(n||"").trim()}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;return x.jsx(r9,{$isInfoOpen:t,children:x.jsx(a9,{children:x.jsx(s9,{src:a,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})})}const l9="/TU2025gradulate/",u9=A.div`
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
`,c9=A.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function h9({isOpen:n=!1,onClick:t}){const[i,a]=q.useState(!1);return q.useEffect(()=>{let o;return n?a(!1):(a(!1),o=setTimeout(()=>{a(!0)},500)),()=>clearTimeout(o)},[n]),x.jsx(u9,{$visible:!n,$active:i,onClick:()=>{typeof t=="function"&&t()},children:x.jsx(c9,{children:x.jsx("img",{src:`${l9}icons/infoOpenIcon.svg`,alt:"작품 정보 열기"})})})}function Jc(n){if(!n)return n;const t="/TU2025gradulate/";if(/^https?:\/\//i.test(n))return n;const i=String(n).replace(/^\.\.\//,"").replace(/^\//,"");return t+i}const d9=A.img`
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
`,Bp=n=>x.jsx(d9,{loading:"lazy",...n}),f9=A.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`,p9=A.div`
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
`,m9=A.div`
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
`,g_=A.div`
  display: flex;
  position: relative;
  width: 100%;
`,g9=A.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 1800px; */
`,y9={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function x9(){const{pid:n}=bT(),t=(n||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[i,a]=q.useState(!0),[o,u]=q.useState(!0),d=()=>{a(!1),setTimeout(()=>{u(!1)},500)},p=()=>{u(!0),setTimeout(()=>{a(!0)},0)};let m=null;if(t){const[,G,X]=t,et=y9[G]||null,ct=Math.max(0,parseInt(X,10)-1);m=Jl.find(Z=>Z.projectNum===ct&&(!et||Z.category===et)),m||(m=Jl.find(Z=>Z.projectNum==ct))}if(!m)return x.jsx(g_,{children:x.jsxs(PageContainer,{children:[x.jsx(Im,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:i,onClose:()=>a(!1),docId:0}),x.jsx(Bp,{src:"https://placehold.co/1530x4000",alt:"featured"}),x.jsx(m_,{children:"  "})]})});const g=(m.members||[]).map(G=>{const X=Qm.find(et=>et.num===G);return X?{nameKor:X.nameKor,nameEng:X.nameEng,role:X.role||"Designer",sns:X.sns||"-",eMail:X.eMail||"",imgUrl:Jc(X.imgUrl||"/김예준.jpg")}:null}).filter(Boolean),w={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[m.category]||"A",S=m.projectNum??m.num,R=String(S).padStart(3,"0"),M=`/projects/${S}`,[B,P]=q.useState([]);return q.useEffect(()=>{let G=!1;const X=["jpg"],et=30,ct=2,Z=C=>!C||!C.ok?!1:(C.headers.get("content-type")||"").startsWith("image/"),ft=async C=>{try{const I=await fetch(C,{method:"GET",cache:"no-store"});return Z(I)}catch{return!1}};return(async()=>{const C=[];let I=0;for(let j=0;j<et;j++){let O=!1;for(const k of X){const z=Jc(`${M}/gallery/${j}.${k}`);if(await ft(z)){C.push(z),O=!0,I=0;break}}if(!O&&(C.length===0||(I+=1,I>=ct)))break}G||P(C)})(),()=>{G=!0}},[M]),q.useEffect(()=>{const G=m?.projectNum??m?.num;if(G==null)return;const et=Ql(Xl,"works",String(G));(async()=>{try{await Vh(et,{view:kh(1)})}catch(ct){if(ct.code==="not-found"||/No document/i.test(String(ct)))try{(await gh(et)).exists()?await Vh(et,{view:kh(1)}):await Ug(et,{view:1},{merge:!0})}catch(Z){console.error("Firestore view fallback error:",Z)}else console.error("Firestore view error:",ct)}})()},[m?.projectNum,m?.num]),x.jsx(g_,{children:x.jsxs(f9,{children:[x.jsx(h9,{isOpen:i,onClick:p}),x.jsx(m9,{$visible:o,children:x.jsx(Im,{titleKor:m.titleKor,titleEng:m.titleEng,context:m.description||"null",isOpen:i,onClose:d,src:Jc(`/projects/${S}/thumb.jpg`),docId:S})}),x.jsxs(p9,{$isInfoOpen:i,children:[B.length>0?B.map((G,X)=>x.jsx(Bp,{src:G,alt:`project-${w}${R}-img-${X+1}`},X)):x.jsx(Bp,{src:Jc("/thumbnailExample.png"),alt:`project-${w}${R}-placeholder`}),x.jsx(o9,{videoId:m.videoId,isInfoOpen:i}),x.jsx(g9,{children:x.jsx(m_,{designers:g})})]})]})})}var $p={exports:{}},kl={},Fp={exports:{}},Kp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function v9(){return y_||(y_=1,(function(n){function t(J,ht){var yt=J.length;J.push(ht);t:for(;0<yt;){var Ct=yt-1>>>1,V=J[Ct];if(0<o(V,ht))J[Ct]=ht,J[yt]=V,yt=Ct;else break t}}function i(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ht=J[0],yt=J.pop();if(yt!==ht){J[0]=yt;t:for(var Ct=0,V=J.length,at=V>>>1;Ct<at;){var lt=2*(Ct+1)-1,ut=J[lt],gt=lt+1,jt=J[gt];if(0>o(ut,yt))gt<V&&0>o(jt,ut)?(J[Ct]=jt,J[gt]=yt,Ct=gt):(J[Ct]=ut,J[lt]=yt,Ct=lt);else if(gt<V&&0>o(jt,yt))J[Ct]=jt,J[gt]=yt,Ct=gt;else break t}}return ht}function o(J,ht){var yt=J.sortIndex-ht.sortIndex;return yt!==0?yt:J.id-ht.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],v=1,w=null,S=3,R=!1,M=!1,B=!1,P=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null;function ct(J){for(var ht=i(g);ht!==null;){if(ht.callback===null)a(g);else if(ht.startTime<=J)a(g),ht.sortIndex=ht.expirationTime,t(m,ht);else break;ht=i(g)}}function Z(J){if(B=!1,ct(J),!M)if(i(m)!==null)M=!0,ft||(ft=!0,z());else{var ht=i(g);ht!==null&&ne(Z,ht.startTime-J)}}var ft=!1,C=-1,I=5,j=-1;function O(){return P?!0:!(n.unstable_now()-j<I)}function k(){if(P=!1,ft){var J=n.unstable_now();j=J;var ht=!0;try{t:{M=!1,B&&(B=!1,X(C),C=-1),R=!0;var yt=S;try{e:{for(ct(J),w=i(m);w!==null&&!(w.expirationTime>J&&O());){var Ct=w.callback;if(typeof Ct=="function"){w.callback=null,S=w.priorityLevel;var V=Ct(w.expirationTime<=J);if(J=n.unstable_now(),typeof V=="function"){w.callback=V,ct(J),ht=!0;break e}w===i(m)&&a(m),ct(J)}else a(m);w=i(m)}if(w!==null)ht=!0;else{var at=i(g);at!==null&&ne(Z,at.startTime-J),ht=!1}}break t}finally{w=null,S=yt,R=!1}ht=void 0}}finally{ht?z():ft=!1}}}var z;if(typeof et=="function")z=function(){et(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ue=N.port2;N.port1.onmessage=k,z=function(){ue.postMessage(null)}}else z=function(){G(k,0)};function ne(J,ht){C=G(function(){J(n.unstable_now())},ht)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(J){switch(S){case 1:case 2:case 3:var ht=3;break;default:ht=S}var yt=S;S=ht;try{return J()}finally{S=yt}},n.unstable_requestPaint=function(){P=!0},n.unstable_runWithPriority=function(J,ht){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var yt=S;S=J;try{return ht()}finally{S=yt}},n.unstable_scheduleCallback=function(J,ht,yt){var Ct=n.unstable_now();switch(typeof yt=="object"&&yt!==null?(yt=yt.delay,yt=typeof yt=="number"&&0<yt?Ct+yt:Ct):yt=Ct,J){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=yt+V,J={id:v++,callback:ht,priorityLevel:J,startTime:yt,expirationTime:V,sortIndex:-1},yt>Ct?(J.sortIndex=yt,t(g,J),i(m)===null&&J===i(g)&&(B?(X(C),C=-1):B=!0,ne(Z,yt-Ct))):(J.sortIndex=V,t(m,J),M||R||(M=!0,ft||(ft=!0,z()))),J},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(J){var ht=S;return function(){var yt=S;S=ht;try{return J.apply(this,arguments)}finally{S=yt}}}})(Kp)),Kp}var x_;function _9(){return x_||(x_=1,Fp.exports=v9()),Fp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function E9(){if(v_)return kl;v_=1;var n=_9(),t=Cm(),i=v4();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function d(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var r=e.alternate;if(!r){if(r=u(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var h=s.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===s)return p(h),e;if(f===l)return p(h),r;f=f.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=f;else{for(var E=!1,b=h.child;b;){if(b===s){E=!0,s=h,l=f;break}if(b===l){E=!0,l=h,s=f;break}b=b.sibling}if(!E){for(b=f.child;b;){if(b===s){E=!0,s=f,l=h;break}if(b===l){E=!0,l=f,s=h;break}b=b.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function g(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=g(e),r!==null)return r;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),et=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case P:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case ft:return"SuspenseList";case j:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case et:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case ct:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return r=e.displayName||null,r!==null?r:ue(e.type)||"Memo";case I:r=e._payload,e=e._init;try{return ue(e(r))}catch{}}return null}var ne=Array.isArray,J=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},Ct=[],V=-1;function at(e){return{current:e}}function lt(e){0>V||(e.current=Ct[V],Ct[V]=null,V--)}function ut(e,r){V++,Ct[V]=e.current,e.current=r}var gt=at(null),jt=at(null),_t=at(null),ge=at(null);function zt(e,r){switch(ut(_t,r),ut(jt,e),ut(gt,null),r.nodeType){case 9:case 11:e=(e=r.documentElement)&&(e=e.namespaceURI)?R1(e):0;break;default:if(e=r.tagName,r=r.namespaceURI)r=R1(r),e=I1(r,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(gt),ut(gt,e)}function Me(){lt(gt),lt(jt),lt(_t)}function Di(e){e.memoizedState!==null&&ut(ge,e);var r=gt.current,s=I1(r,e.type);r!==s&&(ut(jt,e),ut(gt,s))}function qn(e){jt.current===e&&(lt(gt),lt(jt)),ge.current===e&&(lt(ge),Il._currentValue=yt)}var on=Object.prototype.hasOwnProperty,ua=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,ld=n.unstable_shouldYield,Io=n.unstable_requestPaint,fn=n.unstable_now,bu=n.unstable_getCurrentPriorityLevel,Oe=n.unstable_ImmediatePriority,ze=n.unstable_UserBlockingPriority,Ni=n.unstable_NormalPriority,ud=n.unstable_LowPriority,Co=n.unstable_IdlePriority,cd=n.log,ca=n.unstable_setDisableYieldValue,hr=null,Je=null;function jn(e){if(typeof cd=="function"&&ca(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(hr,e)}catch{}}var ln=Math.clz32?Math.clz32:Tu,hd=Math.log,wu=Math.LN2;function Tu(e){return e>>>=0,e===0?32:31-(hd(e)/wu|0)|0}var si=256,dr=4194304;function Hn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,r,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,f=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=Hn(l):(E&=b,E!==0?h=Hn(E):s||(s=b&~e,s!==0&&(h=Hn(s))))):(b=l&~f,b!==0?h=Hn(b):E!==0?h=Hn(E):s||(s=l&~e,s!==0&&(h=Hn(s)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,s=r&-r,f>=s||f===32&&(s&4194048)!==0)?r:h}function fr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function as(e,r){switch(e){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=si;return si<<=1,(si&4194048)===0&&(si=256),e}function pr(){var e=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),e}function ss(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function ve(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Su(e,r,s,l,h,f){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,D=e.expirationTimes,K=e.hiddenUpdates;for(s=E&~s;0<s;){var tt=31-ln(s),rt=1<<tt;b[tt]=0,D[tt]=-1;var H=K[tt];if(H!==null)for(K[tt]=null,tt=0;tt<H.length;tt++){var Y=H[tt];Y!==null&&(Y.lane&=-536870913)}s&=~rt}l!==0&&mr(e,l,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(E&~r))}function mr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-ln(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function gr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-ln(s),h=1<<l;h&r|e[l]&r&&(e[l]|=r),s&=~h}}function Do(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mi(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:G1(e.type))}function dd(e,r){var s=ht.p;try{return ht.p=e,r()}finally{ht.p=s}}var oi=Math.random().toString(36).slice(2),_e="__reactFiber$"+oi,He="__reactProps$"+oi,Oi="__reactContainer$"+oi,ha="__reactEvents$"+oi,da="__reactListeners$"+oi,fd="__reactHandles$"+oi,Gn="__reactResources$"+oi,yr="__reactMarker$"+oi;function os(e){delete e[_e],delete e[He],delete e[ha],delete e[da],delete e[fd]}function li(e){var r=e[_e];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Oi]||s[_e]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=N1(e);e!==null;){if(s=e[_e])return s;e=N1(e)}return r}e=s,s=e.parentNode}return null}function ui(e){if(e=e[_e]||e[Oi]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function xr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function vr(e){var r=e[Gn];return r||(r=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ee(e){e[yr]=!0}var Au=new Set,fa={};function ci(e,r){hi(e,r),hi(e+"Capture",r)}function hi(e,r){for(fa[e]=r,e=0;e<r.length;e++)Au.add(r[e])}var pa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},ls={};function pd(e){return on.call(ls,e)?!0:on.call(di,e)?!1:pa.test(e)?ls[e]=!0:(di[e]=!0,!1)}function ma(e,r,s){if(pd(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function ga(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function Nn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}var ya,us;function Vi(e){if(ya===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ya=r&&r[1]||"",us=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ya+e+us}var cs=!1;function hs(e,r){if(!e||cs)return"";cs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var rt=function(){throw Error()};if(Object.defineProperty(rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(rt,[])}catch(Y){var H=Y}Reflect.construct(e,[],rt)}else{try{rt.call()}catch(Y){H=Y}e.call(rt.prototype)}}else{try{throw Error()}catch(Y){H=Y}(rt=e())&&typeof rt.catch=="function"&&rt.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),E=f[0],b=f[1];if(E&&b){var D=E.split(`
`),K=b.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<K.length&&!K[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===K.length)for(l=D.length-1,h=K.length-1;1<=l&&0<=h&&D[l]!==K[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==K[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==K[h]){var tt=`
`+D[l].replace(" at new "," at ");return e.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",e.displayName)),tt}while(1<=l&&0<=h);break}}}finally{cs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Vi(s):""}function md(e){switch(e.tag){case 26:case 27:case 5:return Vi(e.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return Vi("Activity");default:return""}}function Yn(e){try{var r="";do r+=md(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _r(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function xa(e){var r=_r(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,f=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,f.call(this,E)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Er(e){e._valueTracker||(e._valueTracker=xa(e))}function Wt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=_r(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var va=/[\n"\\]/g;function Le(e){return e.replace(va,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mo(e,r,s,l,h,f,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),r!=null?E==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+de(r)):e.value!==""+de(r)&&(e.value=""+de(r)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),r!=null?Vo(e,E,de(r)):s!=null?Vo(e,E,de(s)):l!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+de(b):e.removeAttribute("name")}function Oo(e,r,s,l,h,f,E,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),r!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;s=s!=null?""+de(s):"",r=r!=null?""+de(r):s,b||r===e.value||(e.value=r),e.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Vo(e,r,s){r==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function br(e,r,s,l){if(e=e.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=r.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+de(s),r=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Ru(e,r,s){if(r!=null&&(r=""+de(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+de(s):""}function Iu(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(ne(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=de(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mn(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Ui.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Uo(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&ko(e,h,l)}else for(var f in r)r.hasOwnProperty(f)&&ko(e,f,r[f])}function ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ju=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return ju.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Po=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,un=null;function Du(e){var r=ui(e);if(r&&(e=r.stateNode)){var s=e[He]||null;t:switch(e=r.stateNode,r.type){case"input":if(Mo(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Le(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var h=l[He]||null;if(!h)throw Error(a(90));Mo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Wt(l)}break t;case"textarea":Ru(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&br(e,!!s.multiple,r,!1)}}}var _a=!1;function Ea(e,r,s){if(_a)return e(r,s);_a=!0;try{var l=e(r);return l}finally{if(_a=!1,(wr!==null||un!==null)&&(_c(),wr&&(r=wr,e=un,un=wr=null,Du(r),e)))for(r=0;r<e.length;r++)Du(e[r])}}function Tr(e,r){var s=e.stateNode;if(s===null)return null;var l=s[He]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=!1;if(cn)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Pi=!1}var On=null,ie=null,fs=null;function Nu(){if(fs)return fs;var e,r=ie,s=r.length,l,h="value"in On?On.value:On.textContent,f=h.length;for(e=0;e<s&&r[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&r[s-l]===h[f-l];l++);return fs=h.slice(e,1<l?1-l:void 0)}function ba(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function Lo(){return!1}function Ve(e){function r(s,l,h,f,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?wa:Lo,this.isPropagationStopped=Lo,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=Ve(tn),Sa=v({},tn,{view:0,detail:0}),Aa=Ve(Sa),ps,Ra,fi,Ia=v({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(ps=e.screenX-fi.screenX,Ra=e.screenY-fi.screenY):Ra=ps=0,fi=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),Ca=Ve(Ia),gd=v({},Ia,{dataTransfer:0}),Mu=Ve(gd),ja=v({},Sa,{relatedTarget:0}),ms=Ve(ja),Ou=v({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bo=Ve(Ou),$o=v({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vu=Ve($o),gs=v({},tn,{data:0}),Fo=Ve(gs),ku={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Uu[e])?!!r[e]:!1}function ys(){return Pu}var zu=v({},Sa,{key:function(e){if(e.key){var r=ku[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xs=Ve(zu),hn=v({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Ve(hn),Lu=v({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Ar=Ve(Lu),c=v({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Ve(c),_=v({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=Ve(_),F=v({},tn,{newState:0,oldState:0}),Q=Ve(F),ot=[9,13,27,32],At=cn&&"CompositionEvent"in window,se=null;cn&&"documentMode"in document&&(se=document.documentMode);var Yt=cn&&"TextEvent"in window&&!se,be=cn&&(!At||se&&8<se&&11>=se),_n=" ",pi=!1;function Xn(e,r){switch(e){case"keyup":return ot.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function qo(e,r){switch(e){case"compositionend":return Wn(r);case"keypress":return r.which!==32?null:(pi=!0,_n);case"textInput":return e=r.data,e===_n&&pi?null:e;default:return null}}function pb(e,r){if(Zn)return e==="compositionend"||!At&&Xn(e,r)?(e=Nu(),fs=ie=On=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return be&&r.locale!=="ko"?null:r.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!mb[e.type]:r==="textarea"}function $g(e,r,s,l){wr?un?un.push(l):un=[l]:wr=l,r=Ac(r,"onChange"),0<r.length&&(s=new Ta("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var Ho=null,Go=null;function gb(e){b1(e,0)}function Bu(e){var r=xr(e);if(Wt(r))return e}function Fg(e,r){if(e==="change")return r}var Kg=!1;if(cn){var yd;if(cn){var xd="oninput"in document;if(!xd){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),xd=typeof qg.oninput=="function"}yd=xd}else yd=!1;Kg=yd&&(!document.documentMode||9<document.documentMode)}function Hg(){Ho&&(Ho.detachEvent("onpropertychange",Gg),Go=Ho=null)}function Gg(e){if(e.propertyName==="value"&&Bu(Go)){var r=[];$g(r,Go,e,zo(e)),Ea(gb,r)}}function yb(e,r,s){e==="focusin"?(Hg(),Ho=r,Go=s,Ho.attachEvent("onpropertychange",Gg)):e==="focusout"&&Hg()}function xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bu(Go)}function vb(e,r){if(e==="click")return Bu(r)}function _b(e,r){if(e==="input"||e==="change")return Bu(r)}function Eb(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var En=typeof Object.is=="function"?Object.is:Eb;function Yo(e,r){if(En(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!on.call(r,h)||!En(e[h],r[h]))return!1}return!0}function Yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qg(e,r){var s=Yg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Yg(s)}}function Xg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Xg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Wg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=ki(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=ki(e.document)}return r}function vd(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}var bb=cn&&"documentMode"in document&&11>=document.documentMode,vs=null,_d=null,Qo=null,Ed=!1;function Zg(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ed||vs==null||vs!==ki(l)||(l=vs,"selectionStart"in l&&vd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qo&&Yo(Qo,l)||(Qo=l,l=Ac(_d,"onSelect"),0<l.length&&(r=new Ta("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=vs)))}function Da(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var _s={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},bd={},Jg={};cn&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Na(e){if(bd[e])return bd[e];if(!_s[e])return e;var r=_s[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in Jg)return bd[e]=r[s];return e}var t0=Na("animationend"),e0=Na("animationiteration"),n0=Na("animationstart"),wb=Na("transitionrun"),Tb=Na("transitionstart"),Sb=Na("transitioncancel"),i0=Na("transitionend"),r0=new Map,wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wd.push("scrollEnd");function Jn(e,r){r0.set(e,r),ci(r,[e])}var a0=new WeakMap;function Vn(e,r){if(typeof e=="object"&&e!==null){var s=a0.get(e);return s!==void 0?s:(r={value:e,source:r,stack:Yn(r)},a0.set(e,r),r)}return{value:e,source:r,stack:Yn(r)}}var kn=[],Es=0,Td=0;function $u(){for(var e=Es,r=Td=Es=0;r<e;){var s=kn[r];kn[r++]=null;var l=kn[r];kn[r++]=null;var h=kn[r];kn[r++]=null;var f=kn[r];if(kn[r++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}f!==0&&s0(s,h,f)}}function Fu(e,r,s,l){kn[Es++]=e,kn[Es++]=r,kn[Es++]=s,kn[Es++]=l,Td|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Sd(e,r,s,l){return Fu(e,r,s,l),Ku(e)}function bs(e,r){return Fu(e,null,null,r),Ku(e)}function s0(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,f=e.return;f!==null;)f.childLanes|=s,l=f.alternate,l!==null&&(l.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&r!==null&&(h=31-ln(s),e=f.hiddenUpdates,l=e[h],l===null?e[h]=[r]:l.push(r),r.lane=s|536870912),f):null}function Ku(e){if(50<_l)throw _l=0,Nf=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var ws={};function Ab(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,r,s,l){return new Ab(e,r,s,l)}function Ad(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,r){var s=e.alternate;return s===null?(s=bn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function o0(e,r){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function qu(e,r,s,l,h,f){var E=0;if(l=e,typeof e=="function")Ad(e)&&(E=1);else if(typeof e=="string")E=Iw(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case j:return e=bn(31,s,r,h),e.elementType=j,e.lanes=f,e;case M:return Ma(s.children,h,f,r);case B:E=8,h|=24;break;case P:return e=bn(12,s,r,h|2),e.elementType=P,e.lanes=f,e;case Z:return e=bn(13,s,r,h),e.elementType=Z,e.lanes=f,e;case ft:return e=bn(19,s,r,h),e.elementType=ft,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case et:E=10;break t;case X:E=9;break t;case ct:E=11;break t;case C:E=14;break t;case I:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=bn(E,s,r,h),r.elementType=e,r.type=l,r.lanes=f,r}function Ma(e,r,s,l){return e=bn(7,e,l,r),e.lanes=s,e}function Rd(e,r,s){return e=bn(6,e,null,r),e.lanes=s,e}function Id(e,r,s){return r=bn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}var Ts=[],Ss=0,Hu=null,Gu=0,Un=[],Pn=0,Oa=null,Bi=1,$i="";function Va(e,r){Ts[Ss++]=Gu,Ts[Ss++]=Hu,Hu=e,Gu=r}function l0(e,r,s){Un[Pn++]=Bi,Un[Pn++]=$i,Un[Pn++]=Oa,Oa=e;var l=Bi;e=$i;var h=32-ln(l)-1;l&=~(1<<h),s+=1;var f=32-ln(r)+h;if(30<f){var E=h-h%5;f=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Bi=1<<32-ln(r)+h|s<<h|l,$i=f+e}else Bi=1<<f|s<<h|l,$i=e}function Cd(e){e.return!==null&&(Va(e,1),l0(e,1,0))}function jd(e){for(;e===Hu;)Hu=Ts[--Ss],Ts[Ss]=null,Gu=Ts[--Ss],Ts[Ss]=null;for(;e===Oa;)Oa=Un[--Pn],Un[Pn]=null,$i=Un[--Pn],Un[Pn]=null,Bi=Un[--Pn],Un[Pn]=null}var dn=null,ye=null,Kt=!1,ka=null,mi=!1,Dd=Error(a(519));function Ua(e){var r=Error(a(418,""));throw Zo(Vn(r,e)),Dd}function u0(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[_e]=e,r[He]=l,s){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(s=0;s<bl.length;s++)kt(bl[s],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),Oo(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Er(r);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),Iu(r,l.value,l.defaultValue,l.children),Er(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||A1(r.textContent,s)?(l.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),l.onScroll!=null&&kt("scroll",r),l.onScrollEnd!=null&&kt("scrollend",r),l.onClick!=null&&(r.onclick=Rc),r=!0):r=!1,r||Ua(e)}function c0(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:dn=dn.return}}function Xo(e){if(e!==dn)return!1;if(!Kt)return c0(e),Kt=!0,!1;var r=e.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Yf(e.type,e.memoizedProps)),s=!s),s&&ye&&Ua(e),c0(e),r===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){ye=ei(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}ye=null}}else r===27?(r=ye,$r(e.type)?(e=Zf,Zf=null,ye=e):ye=r):ye=dn?ei(e.stateNode.nextSibling):null;return!0}function Wo(){ye=dn=null,Kt=!1}function h0(){var e=ka;return e!==null&&(gn===null?gn=e:gn.push.apply(gn,e),ka=null),e}function Zo(e){ka===null?ka=[e]:ka.push(e)}var Nd=at(null),Pa=null,Fi=null;function Rr(e,r,s){ut(Nd,r._currentValue),r._currentValue=s}function Ki(e){e._currentValue=Nd.current,lt(Nd)}function Md(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function Od(e,r,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var E=h.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=h;for(var D=0;D<r.length;D++)if(b.context===r[D]){f.lanes|=s,b=f.alternate,b!==null&&(b.lanes|=s),Md(f.return,s,e),l||(E=null);break t}f=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,f=E.alternate,f!==null&&(f.lanes|=s),Md(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Jo(e,r,s,l){e=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var b=h.type;En(h.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(h===ge.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}h=h.return}e!==null&&Od(r,e,s,l),r.flags|=262144}function Yu(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){Pa=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return d0(Pa,e)}function Qu(e,r){return Pa===null&&za(e),d0(e,r)}function d0(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Fi===null){if(e===null)throw Error(a(308));Fi=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else Fi=Fi.next=r;return s}var Rb=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},Ib=n.unstable_scheduleCallback,Cb=n.unstable_NormalPriority,ke={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vd(){return{controller:new Rb,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&Ib(Cb,function(){e.controller.abort()})}var el=null,kd=0,As=0,Rs=null;function jb(e,r){if(el===null){var s=el=[];kd=0,As=zf(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return kd++,r.then(f0,f0),r}function f0(){if(--kd===0&&el!==null){Rs!==null&&(Rs.status="fulfilled");var e=el;el=null,As=0,Rs=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function Db(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var p0=J.S;J.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&jb(e,r),p0!==null&&p0(e,r)};var La=at(null);function Ud(){var e=La.current;return e!==null?e:re.pooledCache}function Xu(e,r){r===null?ut(La,La.current):ut(La,r.pool)}function m0(){var e=Ud();return e===null?null:{parent:ke._currentValue,pool:e}}var nl=Error(a(460)),g0=Error(a(474)),Wu=Error(a(542)),Pd={then:function(){}};function y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zu(){}function x0(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(Zu,Zu),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,_0(e),e;default:if(typeof r.status=="string")r.then(Zu,Zu);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,_0(e),e}throw il=r,nl}}var il=null;function v0(){if(il===null)throw Error(a(459));var e=il;return il=null,e}function _0(e){if(e===nl||e===Wu)throw Error(a(483))}var Ir=!1;function zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ld(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Ku(e),s0(e,null,s),r}return Fu(e,l,r,s),Ku(e)}function rl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,gr(e,s)}}function Bd(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?h=f=E:f=f.next=E,s=s.next}while(s!==null);f===null?h=f=r:f=f.next=r}else h=f=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var $d=!1;function al(){if($d){var e=Rs;if(e!==null)throw e}}function sl(e,r,s,l){$d=!1;var h=e.updateQueue;Ir=!1;var f=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var D=b,K=D.next;D.next=null,E===null?f=K:E.next=K,E=D;var tt=e.alternate;tt!==null&&(tt=tt.updateQueue,b=tt.lastBaseUpdate,b!==E&&(b===null?tt.firstBaseUpdate=K:b.next=K,tt.lastBaseUpdate=D))}if(f!==null){var rt=h.baseState;E=0,tt=K=D=null,b=f;do{var H=b.lane&-536870913,Y=H!==b.lane;if(Y?(Lt&H)===H:(l&H)===H){H!==0&&H===As&&($d=!0),tt!==null&&(tt=tt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Tt=e,Et=b;H=r;var te=s;switch(Et.tag){case 1:if(Tt=Et.payload,typeof Tt=="function"){rt=Tt.call(te,rt,H);break t}rt=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=Et.payload,H=typeof Tt=="function"?Tt.call(te,rt,H):Tt,H==null)break t;rt=v({},rt,H);break t;case 2:Ir=!0}}H=b.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},tt===null?(K=tt=Y,D=rt):tt=tt.next=Y,E|=H;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);tt===null&&(D=rt),h.baseState=D,h.firstBaseUpdate=K,h.lastBaseUpdate=tt,f===null&&(h.shared.lanes=0),Pr|=E,e.lanes=E,e.memoizedState=rt}}function E0(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function b0(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)E0(s[e],r)}var Is=at(null),Ju=at(0);function w0(e,r){e=Wi,ut(Ju,e),ut(Is,r),Wi=e|r.baseLanes}function Fd(){ut(Ju,Wi),ut(Is,Is.current)}function Kd(){Wi=Ju.current,lt(Is),lt(Ju)}var Dr=0,Mt=null,Zt=null,Re=null,tc=!1,Cs=!1,Ba=!1,ec=0,ol=0,js=null,Nb=0;function we(){throw Error(a(321))}function qd(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!En(e[s],r[s]))return!1;return!0}function Hd(e,r,s,l,h,f){return Dr=f,Mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,J.H=e===null||e.memoizedState===null?sy:oy,Ba=!1,f=s(l,h),Ba=!1,Cs&&(f=S0(r,s,l,h)),T0(e),f}function T0(e){J.H=oc;var r=Zt!==null&&Zt.next!==null;if(Dr=0,Re=Zt=Mt=null,tc=!1,ol=0,js=null,r)throw Error(a(300));e===null||Be||(e=e.dependencies,e!==null&&Yu(e)&&(Be=!0))}function S0(e,r,s,l){Mt=e;var h=0;do{if(Cs&&(js=null),ol=0,Cs=!1,25<=h)throw Error(a(301));if(h+=1,Re=Zt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}J.H=zb,f=r(s,l)}while(Cs);return f}function Mb(){var e=J.H,r=e.useState()[0];return r=typeof r.then=="function"?ll(r):r,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(Mt.flags|=1024),r}function Gd(){var e=ec!==0;return ec=0,e}function Yd(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Qd(e){if(tc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}tc=!1}Dr=0,Re=Zt=Mt=null,Cs=!1,ol=ec=0,js=null}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Mt.memoizedState=Re=e:Re=Re.next=e,Re}function Ie(){if(Zt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var r=Re===null?Mt.memoizedState:Re.next;if(r!==null)Re=r,Zt=e;else{if(e===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Re===null?Mt.memoizedState=Re=e:Re=Re.next=e}return Re}function Xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var r=ol;return ol+=1,js===null&&(js=[]),e=x0(js,e,r),r=Mt,(Re===null?r.memoizedState:Re.next)===null&&(r=r.alternate,J.H=r===null||r.memoizedState===null?sy:oy),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===et)return en(e)}throw Error(a(438,String(e)))}function Wd(e){var r=null,s=Mt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Xd(),Mt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=O;return r.index++,s}function qi(e,r){return typeof r=="function"?r(e):r}function ic(e){var r=Ie();return Zd(r,Zt,e)}function Zd(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,f=l.pending;if(f!==null){if(h!==null){var E=h.next;h.next=f.next,f.next=E}r.baseQueue=h=f,l.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{r=h.next;var b=E=null,D=null,K=r,tt=!1;do{var rt=K.lane&-536870913;if(rt!==K.lane?(Lt&rt)===rt:(Dr&rt)===rt){var H=K.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),rt===As&&(tt=!0);else if((Dr&H)===H){K=K.next,H===As&&(tt=!0);continue}else rt={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(b=D=rt,E=f):D=D.next=rt,Mt.lanes|=H,Pr|=H;rt=K.action,Ba&&s(f,rt),f=K.hasEagerState?K.eagerState:s(f,rt)}else H={lane:rt,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},D===null?(b=D=H,E=f):D=D.next=H,Mt.lanes|=rt,Pr|=rt;K=K.next}while(K!==null&&K!==r);if(D===null?E=f:D.next=b,!En(f,e.memoizedState)&&(Be=!0,tt&&(s=Rs,s!==null)))throw s;e.memoizedState=f,e.baseState=E,e.baseQueue=D,l.lastRenderedState=f}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Jd(e){var r=Ie(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,f=r.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do f=e(f,E.action),E=E.next;while(E!==h);En(f,r.memoizedState)||(Be=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),s.lastRenderedState=f}return[f,l]}function A0(e,r,s){var l=Mt,h=Ie(),f=Kt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=r();var E=!En((Zt||h).memoizedState,s);E&&(h.memoizedState=s,Be=!0),h=h.queue;var b=C0.bind(null,l,h,e);if(ul(2048,8,b,[e]),h.getSnapshot!==r||E||Re!==null&&Re.memoizedState.tag&1){if(l.flags|=2048,Ds(9,rc(),I0.bind(null,l,h,s,r),null),re===null)throw Error(a(349));f||(Dr&124)!==0||R0(l,r,s)}return s}function R0(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Mt.updateQueue,r===null?(r=Xd(),Mt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function I0(e,r,s,l){r.value=s,r.getSnapshot=l,j0(r)&&D0(e)}function C0(e,r,s){return s(function(){j0(r)&&D0(e)})}function j0(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!En(e,s)}catch{return!0}}function D0(e){var r=bs(e,2);r!==null&&Rn(r,e,2)}function tf(e){var r=pn();if(typeof e=="function"){var s=e;if(e=s(),Ba){jn(!0);try{s()}finally{jn(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},r}function N0(e,r,s,l){return e.baseState=s,Zd(e,Zt,typeof l=="function"?l:qi)}function Ob(e,r,s,l,h){if(sc(e))throw Error(a(485));if(e=r.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};J.T!==null?s(!0):f.isTransition=!1,l(f),s=r.pending,s===null?(f.next=r.pending=f,M0(r,f)):(f.next=s.next,r.pending=s.next=f)}}function M0(e,r){var s=r.action,l=r.payload,h=e.state;if(r.isTransition){var f=J.T,E={};J.T=E;try{var b=s(h,l),D=J.S;D!==null&&D(E,b),O0(e,r,b)}catch(K){ef(e,r,K)}finally{J.T=f}}else try{f=s(h,l),O0(e,r,f)}catch(K){ef(e,r,K)}}function O0(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){V0(e,r,l)},function(l){return ef(e,r,l)}):V0(e,r,s)}function V0(e,r,s){r.status="fulfilled",r.value=s,k0(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,M0(e,s)))}function ef(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,k0(r),r=r.next;while(r!==l)}e.action=null}function k0(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function U0(e,r){return r}function P0(e,r){if(Kt){var s=re.formState;if(s!==null){t:{var l=Mt;if(Kt){if(ye){e:{for(var h=ye,f=mi;h.nodeType!==8;){if(!f){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ye=ei(h.nextSibling),l=h.data==="F!";break t}}Ua(l)}l=!1}l&&(r=s[0])}}return s=pn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U0,lastRenderedState:r},s.queue=l,s=iy.bind(null,Mt,l),l.dispatch=s,l=tf(!1),f=of.bind(null,Mt,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:e,pending:null},l.queue=h,s=Ob.bind(null,Mt,h,f,s),h.dispatch=s,l.memoizedState=e,[r,s,!1]}function z0(e){var r=Ie();return L0(r,Zt,e)}function L0(e,r,s){if(r=Zd(e,r,U0)[0],e=ic(qi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ll(r)}catch(E){throw E===nl?Wu:E}else l=r;r=Ie();var h=r.queue,f=h.dispatch;return s!==r.memoizedState&&(Mt.flags|=2048,Ds(9,rc(),Vb.bind(null,h,s),null)),[l,f,e]}function Vb(e,r){e.action=r}function B0(e){var r=Ie(),s=Zt;if(s!==null)return L0(r,s,e);Ie(),r=r.memoizedState,s=Ie();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Ds(e,r,s,l){return e={tag:e,create:s,deps:l,inst:r,next:null},r=Mt.updateQueue,r===null&&(r=Xd(),Mt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function rc(){return{destroy:void 0,resource:void 0}}function $0(){return Ie().memoizedState}function ac(e,r,s,l){var h=pn();l=l===void 0?null:l,Mt.flags|=e,h.memoizedState=Ds(1|r,rc(),s,l)}function ul(e,r,s,l){var h=Ie();l=l===void 0?null:l;var f=h.memoizedState.inst;Zt!==null&&l!==null&&qd(l,Zt.memoizedState.deps)?h.memoizedState=Ds(r,f,s,l):(Mt.flags|=e,h.memoizedState=Ds(1|r,f,s,l))}function F0(e,r){ac(8390656,8,e,r)}function K0(e,r){ul(2048,8,e,r)}function q0(e,r){return ul(4,2,e,r)}function H0(e,r){return ul(4,4,e,r)}function G0(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Y0(e,r,s){s=s!=null?s.concat([e]):null,ul(4,4,G0.bind(null,r,e),s)}function nf(){}function Q0(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&qd(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function X0(e,r){var s=Ie();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&qd(r,l[1]))return l[0];if(l=e(),Ba){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,r],l}function rf(e,r,s){return s===void 0||(Dr&1073741824)!==0?e.memoizedState=r:(e.memoizedState=s,e=Jy(),Mt.lanes|=e,Pr|=e,s)}function W0(e,r,s,l){return En(s,r)?s:Is.current!==null?(e=rf(e,s,l),En(e,r)||(Be=!0),e):(Dr&42)===0?(Be=!0,e.memoizedState=s):(e=Jy(),Mt.lanes|=e,Pr|=e,r)}function Z0(e,r,s,l,h){var f=ht.p;ht.p=f!==0&&8>f?f:8;var E=J.T,b={};J.T=b,of(e,!1,r,s);try{var D=h(),K=J.S;if(K!==null&&K(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var tt=Db(D,l);cl(e,r,tt,An(e))}else cl(e,r,l,An(e))}catch(rt){cl(e,r,{then:function(){},status:"rejected",reason:rt},An())}finally{ht.p=f,J.T=E}}function kb(){}function af(e,r,s,l){if(e.tag!==5)throw Error(a(476));var h=J0(e).queue;Z0(e,h,r,yt,s===null?kb:function(){return ty(e),s(l)})}function J0(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:yt},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function ty(e){var r=J0(e).next.queue;cl(e,r,{},An())}function sf(){return en(Il)}function ey(){return Ie().memoizedState}function ny(){return Ie().memoizedState}function Ub(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=An();e=Cr(s);var l=jr(r,e,s);l!==null&&(Rn(l,r,s),rl(l,r,s)),r={cache:Vd()},e.payload=r;return}r=r.return}}function Pb(e,r,s){var l=An();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},sc(e)?ry(r,s):(s=Sd(e,r,s,l),s!==null&&(Rn(s,e,l),ay(s,r,l)))}function iy(e,r,s){var l=An();cl(e,r,s,l)}function cl(e,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(sc(e))ry(r,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var E=r.lastRenderedState,b=f(E,s);if(h.hasEagerState=!0,h.eagerState=b,En(b,E))return Fu(e,r,h,0),re===null&&$u(),!1}catch{}finally{}if(s=Sd(e,r,h,l),s!==null)return Rn(s,e,l),ay(s,r,l),!0}return!1}function of(e,r,s,l){if(l={lane:2,revertLane:zf(),action:l,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(r)throw Error(a(479))}else r=Sd(e,s,l,2),r!==null&&Rn(r,e,2)}function sc(e){var r=e.alternate;return e===Mt||r!==null&&r===Mt}function ry(e,r){Cs=tc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function ay(e,r,s){if((s&4194048)!==0){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,gr(e,s)}}var oc={readContext:en,use:nc,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},sy={readContext:en,use:nc,useCallback:function(e,r){return pn().memoizedState=[e,r===void 0?null:r],e},useContext:en,useEffect:F0,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,ac(4194308,4,G0.bind(null,r,e),s)},useLayoutEffect:function(e,r){return ac(4194308,4,e,r)},useInsertionEffect:function(e,r){ac(4,2,e,r)},useMemo:function(e,r){var s=pn();r=r===void 0?null:r;var l=e();if(Ba){jn(!0);try{e()}finally{jn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=pn();if(s!==void 0){var h=s(r);if(Ba){jn(!0);try{s(r)}finally{jn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Pb.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var r=pn();return e={current:e},r.memoizedState=e},useState:function(e){e=tf(e);var r=e.queue,s=iy.bind(null,Mt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:nf,useDeferredValue:function(e,r){var s=pn();return rf(s,e,r)},useTransition:function(){var e=tf(!1);return e=Z0.bind(null,Mt,e.queue,!0,!1),pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Mt,h=pn();if(Kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),re===null)throw Error(a(349));(Lt&124)!==0||R0(l,r,s)}h.memoizedState=s;var f={value:s,getSnapshot:r};return h.queue=f,F0(C0.bind(null,l,f,e),[e]),l.flags|=2048,Ds(9,rc(),I0.bind(null,l,f,s,r),null),s},useId:function(){var e=pn(),r=re.identifierPrefix;if(Kt){var s=$i,l=Bi;s=(l&~(1<<32-ln(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=ec++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=Nb++,r="«"+r+"r"+s.toString(32)+"»";return e.memoizedState=r},useHostTransitionStatus:sf,useFormState:P0,useActionState:P0,useOptimistic:function(e){var r=pn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=of.bind(null,Mt,!0,s),s.dispatch=r,[e,r]},useMemoCache:Wd,useCacheRefresh:function(){return pn().memoizedState=Ub.bind(null,Mt)}},oy={readContext:en,use:nc,useCallback:Q0,useContext:en,useEffect:K0,useImperativeHandle:Y0,useInsertionEffect:q0,useLayoutEffect:H0,useMemo:X0,useReducer:ic,useRef:$0,useState:function(){return ic(qi)},useDebugValue:nf,useDeferredValue:function(e,r){var s=Ie();return W0(s,Zt.memoizedState,e,r)},useTransition:function(){var e=ic(qi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:A0,useId:ey,useHostTransitionStatus:sf,useFormState:z0,useActionState:z0,useOptimistic:function(e,r){var s=Ie();return N0(s,Zt,e,r)},useMemoCache:Wd,useCacheRefresh:ny},zb={readContext:en,use:nc,useCallback:Q0,useContext:en,useEffect:K0,useImperativeHandle:Y0,useInsertionEffect:q0,useLayoutEffect:H0,useMemo:X0,useReducer:Jd,useRef:$0,useState:function(){return Jd(qi)},useDebugValue:nf,useDeferredValue:function(e,r){var s=Ie();return Zt===null?rf(s,e,r):W0(s,Zt.memoizedState,e,r)},useTransition:function(){var e=Jd(qi)[0],r=Ie().memoizedState;return[typeof e=="boolean"?e:ll(e),r]},useSyncExternalStore:A0,useId:ey,useHostTransitionStatus:sf,useFormState:B0,useActionState:B0,useOptimistic:function(e,r){var s=Ie();return Zt!==null?N0(s,Zt,e,r):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:ny},Ns=null,hl=0;function lc(e){var r=hl;return hl+=1,Ns===null&&(Ns=[]),x0(Ns,e,r)}function dl(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function uc(e,r){throw r.$$typeof===w?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function ly(e){var r=e._init;return r(e._payload)}function uy(e){function r(L,U){if(e){var $=L.deletions;$===null?(L.deletions=[U],L.flags|=16):$.push(U)}}function s(L,U){if(!e)return null;for(;U!==null;)r(L,U),U=U.sibling;return null}function l(L){for(var U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function h(L,U){return L=Li(L,U),L.index=0,L.sibling=null,L}function f(L,U,$){return L.index=$,e?($=L.alternate,$!==null?($=$.index,$<U?(L.flags|=67108866,U):$):(L.flags|=67108866,U)):(L.flags|=1048576,U)}function E(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function b(L,U,$,nt){return U===null||U.tag!==6?(U=Rd($,L.mode,nt),U.return=L,U):(U=h(U,$),U.return=L,U)}function D(L,U,$,nt){var mt=$.type;return mt===M?tt(L,U,$.props.children,nt,$.key):U!==null&&(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&ly(mt)===U.type)?(U=h(U,$.props),dl(U,$),U.return=L,U):(U=qu($.type,$.key,$.props,null,L.mode,nt),dl(U,$),U.return=L,U)}function K(L,U,$,nt){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Id($,L.mode,nt),U.return=L,U):(U=h(U,$.children||[]),U.return=L,U)}function tt(L,U,$,nt,mt){return U===null||U.tag!==7?(U=Ma($,L.mode,nt,mt),U.return=L,U):(U=h(U,$),U.return=L,U)}function rt(L,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Rd(""+U,L.mode,$),U.return=L,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return $=qu(U.type,U.key,U.props,null,L.mode,$),dl($,U),$.return=L,$;case R:return U=Id(U,L.mode,$),U.return=L,U;case I:var nt=U._init;return U=nt(U._payload),rt(L,U,$)}if(ne(U)||z(U))return U=Ma(U,L.mode,$,null),U.return=L,U;if(typeof U.then=="function")return rt(L,lc(U),$);if(U.$$typeof===et)return rt(L,Qu(L,U),$);uc(L,U)}return null}function H(L,U,$,nt){var mt=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return mt!==null?null:b(L,U,""+$,nt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===mt?D(L,U,$,nt):null;case R:return $.key===mt?K(L,U,$,nt):null;case I:return mt=$._init,$=mt($._payload),H(L,U,$,nt)}if(ne($)||z($))return mt!==null?null:tt(L,U,$,nt,null);if(typeof $.then=="function")return H(L,U,lc($),nt);if($.$$typeof===et)return H(L,U,Qu(L,$),nt);uc(L,$)}return null}function Y(L,U,$,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return L=L.get($)||null,b(U,L,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return L=L.get(nt.key===null?$:nt.key)||null,D(U,L,nt,mt);case R:return L=L.get(nt.key===null?$:nt.key)||null,K(U,L,nt,mt);case I:var Ot=nt._init;return nt=Ot(nt._payload),Y(L,U,$,nt,mt)}if(ne(nt)||z(nt))return L=L.get($)||null,tt(U,L,nt,mt,null);if(typeof nt.then=="function")return Y(L,U,$,lc(nt),mt);if(nt.$$typeof===et)return Y(L,U,$,Qu(U,nt),mt);uc(U,nt)}return null}function Tt(L,U,$,nt){for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null;xt!==null&&bt<$.length;bt++){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Ft=H(L,xt,$[bt],nt);if(Ft===null){xt===null&&(xt=Fe);break}e&&xt&&Ft.alternate===null&&r(L,xt),U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft,xt=Fe}if(bt===$.length)return s(L,xt),Kt&&Va(L,bt),mt;if(xt===null){for(;bt<$.length;bt++)xt=rt(L,$[bt],nt),xt!==null&&(U=f(xt,U,bt),Ot===null?mt=xt:Ot.sibling=xt,Ot=xt);return Kt&&Va(L,bt),mt}for(xt=l(xt);bt<$.length;bt++)Fe=Y(xt,L,bt,$[bt],nt),Fe!==null&&(e&&Fe.alternate!==null&&xt.delete(Fe.key===null?bt:Fe.key),U=f(Fe,U,bt),Ot===null?mt=Fe:Ot.sibling=Fe,Ot=Fe);return e&&xt.forEach(function(Gr){return r(L,Gr)}),Kt&&Va(L,bt),mt}function Et(L,U,$,nt){if($==null)throw Error(a(151));for(var mt=null,Ot=null,xt=U,bt=U=0,Fe=null,Ft=$.next();xt!==null&&!Ft.done;bt++,Ft=$.next()){xt.index>bt?(Fe=xt,xt=null):Fe=xt.sibling;var Gr=H(L,xt,Ft.value,nt);if(Gr===null){xt===null&&(xt=Fe);break}e&&xt&&Gr.alternate===null&&r(L,xt),U=f(Gr,U,bt),Ot===null?mt=Gr:Ot.sibling=Gr,Ot=Gr,xt=Fe}if(Ft.done)return s(L,xt),Kt&&Va(L,bt),mt;if(xt===null){for(;!Ft.done;bt++,Ft=$.next())Ft=rt(L,Ft.value,nt),Ft!==null&&(U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return Kt&&Va(L,bt),mt}for(xt=l(xt);!Ft.done;bt++,Ft=$.next())Ft=Y(xt,L,bt,Ft.value,nt),Ft!==null&&(e&&Ft.alternate!==null&&xt.delete(Ft.key===null?bt:Ft.key),U=f(Ft,U,bt),Ot===null?mt=Ft:Ot.sibling=Ft,Ot=Ft);return e&&xt.forEach(function(Lw){return r(L,Lw)}),Kt&&Va(L,bt),mt}function te(L,U,$,nt){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var mt=$.key;U!==null;){if(U.key===mt){if(mt=$.type,mt===M){if(U.tag===7){s(L,U.sibling),nt=h(U,$.props.children),nt.return=L,L=nt;break t}}else if(U.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===I&&ly(mt)===U.type){s(L,U.sibling),nt=h(U,$.props),dl(nt,$),nt.return=L,L=nt;break t}s(L,U);break}else r(L,U);U=U.sibling}$.type===M?(nt=Ma($.props.children,L.mode,nt,$.key),nt.return=L,L=nt):(nt=qu($.type,$.key,$.props,null,L.mode,nt),dl(nt,$),nt.return=L,L=nt)}return E(L);case R:t:{for(mt=$.key;U!==null;){if(U.key===mt)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){s(L,U.sibling),nt=h(U,$.children||[]),nt.return=L,L=nt;break t}else{s(L,U);break}else r(L,U);U=U.sibling}nt=Id($,L.mode,nt),nt.return=L,L=nt}return E(L);case I:return mt=$._init,$=mt($._payload),te(L,U,$,nt)}if(ne($))return Tt(L,U,$,nt);if(z($)){if(mt=z($),typeof mt!="function")throw Error(a(150));return $=mt.call($),Et(L,U,$,nt)}if(typeof $.then=="function")return te(L,U,lc($),nt);if($.$$typeof===et)return te(L,U,Qu(L,$),nt);uc(L,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,U!==null&&U.tag===6?(s(L,U.sibling),nt=h(U,$),nt.return=L,L=nt):(s(L,U),nt=Rd($,L.mode,nt),nt.return=L,L=nt),E(L)):s(L,U)}return function(L,U,$,nt){try{hl=0;var mt=te(L,U,$,nt);return Ns=null,mt}catch(xt){if(xt===nl||xt===Wu)throw xt;var Ot=bn(29,xt,null,L.mode);return Ot.lanes=nt,Ot.return=L,Ot}finally{}}}var Ms=uy(!0),cy=uy(!1),zn=at(null),gi=null;function Nr(e){var r=e.alternate;ut(Ue,Ue.current&1),ut(zn,e),gi===null&&(r===null||Is.current!==null||r.memoizedState!==null)&&(gi=e)}function hy(e){if(e.tag===22){if(ut(Ue,Ue.current),ut(zn,e),gi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(gi=e)}}else Mr()}function Mr(){ut(Ue,Ue.current),ut(zn,zn.current)}function Hi(e){lt(zn),gi===e&&(gi=null),lt(Ue)}var Ue=at(0);function cc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Wf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function lf(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var uf={enqueueSetState:function(e,r,s){e=e._reactInternals;var l=An(),h=Cr(l);h.payload=r,s!=null&&(h.callback=s),r=jr(e,h,l),r!==null&&(Rn(r,e,l),rl(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=An(),h=Cr(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=jr(e,h,l),r!==null&&(Rn(r,e,l),rl(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=An(),l=Cr(s);l.tag=2,r!=null&&(l.callback=r),r=jr(e,l,s),r!==null&&(Rn(r,e,s),rl(r,e,s))}};function dy(e,r,s,l,h,f,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,E):r.prototype&&r.prototype.isPureReactComponent?!Yo(s,l)||!Yo(h,f):!0}function fy(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&uf.enqueueReplaceState(r,r.state,null)}function $a(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=v({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function py(e){hc(e)}function my(e){console.error(e)}function gy(e){hc(e)}function dc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function yy(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function cf(e,r,s){return s=Cr(s),s.tag=3,s.payload={element:null},s.callback=function(){dc(e,r)},s}function xy(e){return e=Cr(e),e.tag=3,e}function vy(e,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;e.payload=function(){return h(f)},e.callback=function(){yy(r,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){yy(r,s,l),typeof h!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Lb(e,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Jo(r,s,h,!0),s=zn.current,s!==null){switch(s.tag){case 13:return gi===null?Of():s.alternate===null&&xe===0&&(xe=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Pd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),kf(e,l,h)),!1;case 22:return s.flags|=65536,l===Pd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),kf(e,l,h)),!1}throw Error(a(435,s.tag))}return kf(e,l,h),Of(),!1}if(Kt)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Dd&&(e=Error(a(422),{cause:l}),Zo(Vn(e,s)))):(l!==Dd&&(r=Error(a(423),{cause:l}),Zo(Vn(r,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Vn(l,s),h=cf(e.stateNode,l,h),Bd(e,h),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=Vn(f,s),vl===null?vl=[f]:vl.push(f),xe!==4&&(xe=2),r===null)return!0;l=Vn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=cf(s.stateNode,l,e),Bd(s,e),!1;case 1:if(r=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(zr===null||!zr.has(f))))return s.flags|=65536,h&=-h,s.lanes|=h,h=xy(h),vy(h,e,s,l),Bd(s,h),!1}s=s.return}while(s!==null);return!1}var _y=Error(a(461)),Be=!1;function Ge(e,r,s,l){r.child=e===null?cy(r,null,s,l):Ms(r,e.child,s,l)}function Ey(e,r,s,l,h){s=s.render;var f=r.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return za(r),l=Hd(e,r,s,E,f,h),b=Gd(),e!==null&&!Be?(Yd(e,r,h),Gi(e,r,h)):(Kt&&b&&Cd(r),r.flags|=1,Ge(e,r,l,h),r.child)}function by(e,r,s,l,h){if(e===null){var f=s.type;return typeof f=="function"&&!Ad(f)&&f.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=f,wy(e,r,f,l,h)):(e=qu(s.type,null,l,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(f=e.child,!xf(e,h)){var E=f.memoizedProps;if(s=s.compare,s=s!==null?s:Yo,s(E,l)&&e.ref===r.ref)return Gi(e,r,h)}return r.flags|=1,e=Li(f,l),e.ref=r.ref,e.return=r,r.child=e}function wy(e,r,s,l,h){if(e!==null){var f=e.memoizedProps;if(Yo(f,l)&&e.ref===r.ref)if(Be=!1,r.pendingProps=l=f,xf(e,h))(e.flags&131072)!==0&&(Be=!0);else return r.lanes=e.lanes,Gi(e,r,h)}return hf(e,r,s,l,h)}function Ty(e,r,s){var l=r.pendingProps,h=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=f!==null?f.baseLanes|s:s,e!==null){for(h=r.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;r.childLanes=f&~l}else r.childLanes=0,r.child=null;return Sy(e,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xu(r,f!==null?f.cachePool:null),f!==null?w0(r,f):Fd(),hy(r);else return r.lanes=r.childLanes=536870912,Sy(e,r,f!==null?f.baseLanes|s:s,s)}else f!==null?(Xu(r,f.cachePool),w0(r,f),Mr(),r.memoizedState=null):(e!==null&&Xu(r,null),Fd(),Mr());return Ge(e,r,h,s),r.child}function Sy(e,r,s,l){var h=Ud();return h=h===null?null:{parent:ke._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},e!==null&&Xu(r,null),Fd(),hy(r),e!==null&&Jo(e,r,l,!0),null}function fc(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=4194816)}}function hf(e,r,s,l,h){return za(r),s=Hd(e,r,s,l,void 0,h),l=Gd(),e!==null&&!Be?(Yd(e,r,h),Gi(e,r,h)):(Kt&&l&&Cd(r),r.flags|=1,Ge(e,r,s,h),r.child)}function Ay(e,r,s,l,h,f){return za(r),r.updateQueue=null,s=S0(r,l,s,h),T0(e),l=Gd(),e!==null&&!Be?(Yd(e,r,f),Gi(e,r,f)):(Kt&&l&&Cd(r),r.flags|=1,Ge(e,r,s,f),r.child)}function Ry(e,r,s,l,h){if(za(r),r.stateNode===null){var f=ws,E=s.contextType;typeof E=="object"&&E!==null&&(f=en(E)),f=new s(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},zd(r),E=s.contextType,f.context=typeof E=="object"&&E!==null?en(E):ws,f.state=r.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(lf(r,s,E,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&uf.enqueueReplaceState(f,f.state,null),sl(r,l,f,h),al(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){f=r.stateNode;var b=r.memoizedProps,D=$a(s,b);f.props=D;var K=f.context,tt=s.contextType;E=ws,typeof tt=="object"&&tt!==null&&(E=en(tt));var rt=s.getDerivedStateFromProps;tt=typeof rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,tt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||K!==E)&&fy(r,f,l,E),Ir=!1;var H=r.memoizedState;f.state=H,sl(r,l,f,h),al(),K=r.memoizedState,b||H!==K||Ir?(typeof rt=="function"&&(lf(r,s,rt,l),K=r.memoizedState),(D=Ir||dy(r,s,D,l,H,K,E))?(tt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=K),f.props=l,f.state=K,f.context=E,l=D):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Ld(e,r),E=r.memoizedProps,tt=$a(s,E),f.props=tt,rt=r.pendingProps,H=f.context,K=s.contextType,D=ws,typeof K=="object"&&K!==null&&(D=en(K)),b=s.getDerivedStateFromProps,(K=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==rt||H!==D)&&fy(r,f,l,D),Ir=!1,H=r.memoizedState,f.state=H,sl(r,l,f,h),al();var Y=r.memoizedState;E!==rt||H!==Y||Ir||e!==null&&e.dependencies!==null&&Yu(e.dependencies)?(typeof b=="function"&&(lf(r,s,b,l),Y=r.memoizedState),(tt=Ir||dy(r,s,tt,l,H,Y,D)||e!==null&&e.dependencies!==null&&Yu(e.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Y,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Y,D)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=Y),f.props=l,f.state=Y,f.context=D,l=tt):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),l=!1)}return f=l,fc(e,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,e!==null&&l?(r.child=Ms(r,e.child,null,h),r.child=Ms(r,null,s,h)):Ge(e,r,s,h),r.memoizedState=f.state,e=r.child):e=Gi(e,r,h),e}function Iy(e,r,s,l){return Wo(),r.flags|=256,Ge(e,r,s,l),r.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:m0()}}function pf(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=Ln),e}function Cy(e,r,s){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,e===null){if(Kt){if(h?Nr(r):Mr(),Kt){var b=ye,D;if(D=b){t:{for(D=b,b=mi;D.nodeType!==8;){if(!b){b=null;break t}if(D=ei(D.nextSibling),D===null){b=null;break t}}b=D}b!==null?(r.memoizedState={dehydrated:b,treeContext:Oa!==null?{id:Bi,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},D=bn(18,null,null,0),D.stateNode=b,D.return=r,r.child=D,dn=r,ye=null,D=!0):D=!1}D||Ua(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Wf(b)?r.lanes=32:r.lanes=536870912,null;Hi(r)}return b=l.children,l=l.fallback,h?(Mr(),h=r.mode,b=pc({mode:"hidden",children:b},h),l=Ma(l,h,s,null),b.return=r,l.return=r,b.sibling=l,r.child=b,h=r.child,h.memoizedState=ff(s),h.childLanes=pf(e,E,s),r.memoizedState=df,l):(Nr(r),mf(r,b))}if(D=e.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(f)r.flags&256?(Nr(r),r.flags&=-257,r=gf(e,r,s)):r.memoizedState!==null?(Mr(),r.child=e.child,r.flags|=128,r=null):(Mr(),h=l.fallback,b=r.mode,l=pc({mode:"visible",children:l.children},b),h=Ma(h,b,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ms(r,e.child,null,s),l=r.child,l.memoizedState=ff(s),l.childLanes=pf(e,E,s),r.memoizedState=df,r=h);else if(Nr(r),Wf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var K=E.dgst;E=K,l=Error(a(419)),l.stack="",l.digest=E,Zo({value:l,source:null,stack:null}),r=gf(e,r,s)}else if(Be||Jo(e,r,s,!1),E=(s&e.childLanes)!==0,Be||E){if(E=re,E!==null&&(l=s&-s,l=(l&42)!==0?1:Do(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,bs(e,l),Rn(E,e,l),_y;b.data==="$?"||Of(),r=gf(e,r,s)}else b.data==="$?"?(r.flags|=192,r.child=e.child,r=null):(e=D.treeContext,ye=ei(b.nextSibling),dn=r,Kt=!0,ka=null,mi=!1,e!==null&&(Un[Pn++]=Bi,Un[Pn++]=$i,Un[Pn++]=Oa,Bi=e.id,$i=e.overflow,Oa=r),r=mf(r,l.children),r.flags|=4096);return r}return h?(Mr(),h=l.fallback,b=r.mode,D=e.child,K=D.sibling,l=Li(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,K!==null?h=Li(K,h):(h=Ma(h,b,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b===null?b=ff(s):(D=b.cachePool,D!==null?(K=ke._currentValue,D=D.parent!==K?{parent:K,pool:K}:D):D=m0(),b={baseLanes:b.baseLanes|s,cachePool:D}),h.memoizedState=b,h.childLanes=pf(e,E,s),r.memoizedState=df,l):(Nr(r),s=e.child,e=s.sibling,s=Li(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(E=r.deletions,E===null?(r.deletions=[e],r.flags|=16):E.push(e)),r.child=s,r.memoizedState=null,s)}function mf(e,r){return r=pc({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function pc(e,r){return e=bn(22,e,null,r),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,r,s){return Ms(r,e.child,null,s),e=mf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function jy(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Md(e.return,r,s)}function yf(e,r,s,l,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=h)}function Dy(e,r,s){var l=r.pendingProps,h=l.revealOrder,f=l.tail;if(Ge(e,r,l.children,s),l=Ue.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jy(e,s,r);else if(e.tag===19)jy(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(ut(Ue,l),h){case"forwards":for(s=r.child,h=null;s!==null;)e=s.alternate,e!==null&&cc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),yf(r,!1,h,s,f);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&cc(e)===null){r.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}yf(r,!0,s,null,f);break;case"together":yf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),Pr|=r.lanes,(s&r.childLanes)===0)if(e!==null){if(Jo(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Li(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Li(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function xf(e,r){return(e.lanes&r)!==0?!0:(e=e.dependencies,!!(e!==null&&Yu(e)))}function Bb(e,r,s){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),Rr(r,ke,e.memoizedState.cache),Wo();break;case 27:case 5:Di(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:Rr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Cy(e,r,s):(Nr(r),e=Gi(e,r,s),e!==null?e.sibling:null);Nr(r);break;case 19:var h=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Jo(e,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return Dy(e,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ut(Ue,Ue.current),l)break;return null;case 22:case 23:return r.lanes=0,Ty(e,r,s);case 24:Rr(r,ke,e.memoizedState.cache)}return Gi(e,r,s)}function Ny(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Be=!0;else{if(!xf(e,s)&&(r.flags&128)===0)return Be=!1,Bb(e,r,s);Be=(e.flags&131072)!==0}else Be=!1,Kt&&(r.flags&1048576)!==0&&l0(r,Gu,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Ad(l)?(e=$a(l,e),r.tag=1,r=Ry(null,r,l,e,s)):(r.tag=0,r=hf(null,r,l,e,s));else{if(l!=null){if(h=l.$$typeof,h===ct){r.tag=11,r=Ey(null,r,l,e,s);break t}else if(h===C){r.tag=14,r=by(null,r,l,e,s);break t}}throw r=ue(l)||l,Error(a(306,r,""))}}return r;case 0:return hf(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=$a(l,r.pendingProps),Ry(e,r,l,h,s);case 3:t:{if(zt(r,r.stateNode.containerInfo),e===null)throw Error(a(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Ld(e,r),sl(r,l,null,s);var E=r.memoizedState;if(l=E.cache,Rr(r,ke,l),l!==f.cache&&Od(r,[ke],s,!0),al(),l=E.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=Iy(e,r,l,s);break t}else if(l!==h){h=Vn(Error(a(424)),r),Zo(h),r=Iy(e,r,l,s);break t}else{switch(e=r.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ei(e.firstChild),dn=r,Kt=!0,ka=null,mi=!0,s=cy(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Wo(),l===h){r=Gi(e,r,s);break t}Ge(e,r,l,s)}r=r.child}return r;case 26:return fc(e,r),e===null?(s=k1(r.type,null,r.pendingProps,null))?r.memoizedState=s:Kt||(s=r.type,e=r.pendingProps,l=Ic(_t.current).createElement(s),l[_e]=r,l[He]=e,Qe(l,s,e),Ee(l),r.stateNode=l):r.memoizedState=k1(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Di(r),e===null&&Kt&&(l=r.stateNode=M1(r.type,r.pendingProps,_t.current),dn=r,mi=!0,h=ye,$r(r.type)?(Zf=h,ye=ei(l.firstChild)):ye=h),Ge(e,r,r.pendingProps.children,s),fc(e,r),e===null&&(r.flags|=4194304),r.child;case 5:return e===null&&Kt&&((h=l=ye)&&(l=mw(l,r.type,r.pendingProps,mi),l!==null?(r.stateNode=l,dn=r,ye=ei(l.firstChild),mi=!1,h=!0):h=!1),h||Ua(r)),Di(r),h=r.type,f=r.pendingProps,E=e!==null?e.memoizedProps:null,l=f.children,Yf(h,f)?l=null:E!==null&&Yf(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Hd(e,r,Mb,null,null,s),Il._currentValue=h),fc(e,r),Ge(e,r,l,s),r.child;case 6:return e===null&&Kt&&((e=s=ye)&&(s=gw(s,r.pendingProps,mi),s!==null?(r.stateNode=s,dn=r,ye=null,e=!0):e=!1),e||Ua(r)),null;case 13:return Cy(e,r,s);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Ms(r,null,l,s):Ge(e,r,l,s),r.child;case 11:return Ey(e,r,r.type,r.pendingProps,s);case 7:return Ge(e,r,r.pendingProps,s),r.child;case 8:return Ge(e,r,r.pendingProps.children,s),r.child;case 12:return Ge(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Rr(r,r.type,l.value),Ge(e,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,za(r),h=en(h),l=l(h),r.flags|=1,Ge(e,r,l,s),r.child;case 14:return by(e,r,r.type,r.pendingProps,s);case 15:return wy(e,r,r.type,r.pendingProps,s);case 19:return Dy(e,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},e===null?(s=pc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Li(e.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return Ty(e,r,s);case 24:return za(r),l=en(ke),e===null?(h=Ud(),h===null&&(h=re,f=Vd(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=s),h=f),r.memoizedState={parent:l,cache:h},zd(r),Rr(r,ke,h)):((e.lanes&s)!==0&&(Ld(e,r),sl(r,null,null,s),al()),h=e.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Rr(r,ke,l)):(l=f.cache,Rr(r,ke,l),l!==h.cache&&Od(r,[ke],s,!0))),Ge(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Yi(e){e.flags|=4}function My(e,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B1(r)){if(r=zn.current,r!==null&&((Lt&4194048)===Lt?gi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||r!==gi))throw il=Pd,g0;e.flags|=8192}}function mc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?pr():536870912,e.lanes|=r,Us|=r)}function fl(e,r){if(!Kt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function $b(e,r,s){var l=r.pendingProps;switch(jd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(r),null;case 1:return fe(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Ki(ke),Me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xo(r)?Yi(r):e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,h0())),fe(r),null;case 26:return s=r.memoizedState,e===null?(Yi(r),s!==null?(fe(r),My(r,s)):(fe(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Yi(r),fe(r),My(r,s)):(fe(r),r.flags&=-16777217):(e.memoizedProps!==l&&Yi(r),fe(r),r.flags&=-16777217),null;case 27:qn(r),s=_t.current;var h=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Yi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return fe(r),null}e=gt.current,Xo(r)?u0(r):(e=M1(h,l,s),r.stateNode=e,Yi(r))}return fe(r),null;case 5:if(qn(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Yi(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return fe(r),null}if(e=gt.current,Xo(r))u0(r);else{switch(h=Ic(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}e[_e]=r,e[He]=l;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=e;t:switch(Qe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(r)}}return fe(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Yi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=_t.current,Xo(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,h=dn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||A1(e.nodeValue,s)),e||Ua(r)}else e=Ic(e).createTextNode(l),e[_e]=r,r.stateNode=e}return fe(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Xo(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_e]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;fe(r),h=!1}else h=h0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Hi(r),r):(Hi(r),null)}if(Hi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),mc(r,r.updateQueue),fe(r),null;case 4:return Me(),e===null&&Ff(r.stateNode.containerInfo),fe(r),null;case 10:return Ki(r.type),fe(r),null;case 19:if(lt(Ue),h=r.memoizedState,h===null)return fe(r),null;if(l=(r.flags&128)!==0,f=h.rendering,f===null)if(l)fl(h,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(f=cc(e),f!==null){for(r.flags|=128,fl(h,!1),e=f.updateQueue,r.updateQueue=e,mc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)o0(s,e),s=s.sibling;return ut(Ue,Ue.current&1|2),r.child}e=e.sibling}h.tail!==null&&fn()>xc&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304)}else{if(!l)if(e=cc(f),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,mc(r,e),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Kt)return fe(r),null}else 2*fn()-h.renderingStartTime>xc&&s!==536870912&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304);h.isBackwards?(f.sibling=r.child,r.child=f):(e=h.last,e!==null?e.sibling=f:r.child=f,h.last=f)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=fn(),r.sibling=null,e=Ue.current,ut(Ue,l?e&1|2:e&1),r):(fe(r),null);case 22:case 23:return Hi(r),Kd(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(fe(r),r.subtreeFlags&6&&(r.flags|=8192)):fe(r),s=r.updateQueue,s!==null&&mc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&lt(La),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Ki(ke),fe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function Fb(e,r){switch(jd(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ki(ke),Me(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return qn(r),null;case 13:if(Hi(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Wo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return lt(Ue),null;case 4:return Me(),null;case 10:return Ki(r.type),null;case 22:case 23:return Hi(r),Kd(),e!==null&&lt(La),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Ki(ke),null;case 25:return null;default:return null}}function Oy(e,r){switch(jd(r),r.tag){case 3:Ki(ke),Me();break;case 26:case 27:case 5:qn(r);break;case 4:Me();break;case 13:Hi(r);break;case 19:lt(Ue);break;case 10:Ki(r.type);break;case 22:case 23:Hi(r),Kd(),e!==null&&lt(La);break;case 24:Ki(ke)}}function pl(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var f=s.create,E=s.inst;l=f(),E.destroy=l}s=s.next}while(s!==h)}}catch(b){ee(r,r.return,b)}}function Or(e,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&e)===e){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=r;var D=s,K=b;try{K()}catch(tt){ee(h,D,tt)}}}l=l.next}while(l!==f)}}catch(tt){ee(r,r.return,tt)}}function Vy(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{b0(r,s)}catch(l){ee(e,e.return,l)}}}function ky(e,r,s){s.props=$a(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ee(e,r,l)}}function ml(e,r){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ee(e,r,h)}}function yi(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ee(e,r,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ee(e,r,h)}else s.current=null}function Uy(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ee(e,e.return,h)}}function vf(e,r,s){try{var l=e.stateNode;cw(l,e.type,s,r),l[He]=r}catch(h){ee(e,e.return,h)}}function Py(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$r(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Py(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(e),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Rc));else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode,r=null),e=e.child,e!==null))for(Ef(e,r,s),e=e.sibling;e!==null;)Ef(e,r,s),e=e.sibling}function gc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&(l===27&&$r(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(gc(e,r,s),e=e.sibling;e!==null;)gc(e,r,s),e=e.sibling}function zy(e){var r=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Qe(r,l,s),r[_e]=e,r[He]=s}catch(f){ee(e,e.return,f)}}var Qi=!1,Te=!1,bf=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Kb(e,r){if(e=e.containerInfo,Hf=Oc,e=Wg(e),vd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var E=0,b=-1,D=-1,K=0,tt=0,rt=e,H=null;e:for(;;){for(var Y;rt!==s||h!==0&&rt.nodeType!==3||(b=E+h),rt!==f||l!==0&&rt.nodeType!==3||(D=E+l),rt.nodeType===3&&(E+=rt.nodeValue.length),(Y=rt.firstChild)!==null;)H=rt,rt=Y;for(;;){if(rt===e)break e;if(H===s&&++K===h&&(b=E),H===f&&++tt===l&&(D=E),(Y=rt.nextSibling)!==null)break;rt=H,H=rt.parentNode}rt=Y}s=b===-1||D===-1?null:{start:b,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gf={focusedElem:e,selectionRange:s},Oc=!1,$e=r;$e!==null;)if(r=$e,e=r.child,(r.subtreeFlags&1024)!==0&&e!==null)e.return=r,$e=e;else for(;$e!==null;){switch(r=$e,f=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=r,h=f.memoizedProps,f=f.memoizedState,l=s.stateNode;try{var Tt=$a(s.type,h,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Tt,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Et){ee(s,s.return,Et)}}break;case 3:if((e&1024)!==0){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)Xf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,$e=e;break}$e=r.return}}function By(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Vr(e,s),l&4&&pl(5,s);break;case 1:if(Vr(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(E){ee(s,s.return,E)}else{var h=$a(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(h,r,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ee(s,s.return,E)}}l&64&&Vy(s),l&512&&ml(s,s.return);break;case 3:if(Vr(e,s),l&64&&(e=s.updateQueue,e!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{b0(e,r)}catch(E){ee(s,s.return,E)}}break;case 27:r===null&&l&4&&zy(s);case 26:case 5:Vr(e,s),r===null&&l&4&&Uy(s),l&512&&ml(s,s.return);break;case 12:Vr(e,s);break;case 13:Vr(e,s),l&4&&Ky(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Jb.bind(null,s),yw(e,s))));break;case 22:if(l=s.memoizedState!==null||Qi,!l){r=r!==null&&r.memoizedState!==null||Te,h=Qi;var f=Te;Qi=l,(Te=r)&&!f?kr(e,s,(s.subtreeFlags&8772)!==0):Vr(e,s),Qi=h,Te=f}break;case 30:break;default:Vr(e,s)}}function $y(e){var r=e.alternate;r!==null&&(e.alternate=null,$y(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&os(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,mn=!1;function Xi(e,r,s){for(s=s.child;s!==null;)Fy(e,r,s),s=s.sibling}function Fy(e,r,s){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(hr,s)}catch{}switch(s.tag){case 26:Te||yi(s,r),Xi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Te||yi(s,r);var l=ce,h=mn;$r(s.type)&&(ce=s.stateNode,mn=!1),Xi(e,r,s),Tl(s.stateNode),ce=l,mn=h;break;case 5:Te||yi(s,r);case 6:if(l=ce,h=mn,ce=null,Xi(e,r,s),ce=l,mn=h,ce!==null)if(mn)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(s.stateNode)}catch(f){ee(s,r,f)}else try{ce.removeChild(s.stateNode)}catch(f){ee(s,r,f)}break;case 18:ce!==null&&(mn?(e=ce,D1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Nl(e)):D1(ce,s.stateNode));break;case 4:l=ce,h=mn,ce=s.stateNode.containerInfo,mn=!0,Xi(e,r,s),ce=l,mn=h;break;case 0:case 11:case 14:case 15:Te||Or(2,s,r),Te||Or(4,s,r),Xi(e,r,s);break;case 1:Te||(yi(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ky(s,r,l)),Xi(e,r,s);break;case 21:Xi(e,r,s);break;case 22:Te=(l=Te)||s.memoizedState!==null,Xi(e,r,s),Te=l;break;default:Xi(e,r,s)}}function Ky(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(s){ee(r,r.return,s)}}function qb(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Ly),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Ly),r;default:throw Error(a(435,e.tag))}}function wf(e,r){var s=qb(e);r.forEach(function(l){var h=tw.bind(null,e,l);s.has(l)||(s.add(l),l.then(h,h))})}function wn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],f=e,E=r,b=E;t:for(;b!==null;){switch(b.tag){case 27:if($r(b.type)){ce=b.stateNode,mn=!1;break t}break;case 5:ce=b.stateNode,mn=!1;break t;case 3:case 4:ce=b.stateNode.containerInfo,mn=!0;break t}b=b.return}if(ce===null)throw Error(a(160));Fy(f,E,h),ce=null,mn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)qy(r,e),r=r.sibling}var ti=null;function qy(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(r,e),Tn(e),l&4&&(Or(3,e,e.return),pl(3,e),Or(5,e,e.return));break;case 1:wn(r,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&64&&Qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=ti;if(wn(r,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),l&4){var f=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[yr]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),Qe(f,l,s),f[_e]=e,Ee(f),l=f;break t;case"link":var E=z1("link","href",h).get(l+(s.href||""));if(E){for(var b=0;b<E.length;b++)if(f=E[b],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;case"meta":if(E=z1("meta","content",h).get(l+(s.content||""))){for(b=0;b<E.length;b++)if(f=E[b],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(b,1);break e}}f=h.createElement(l),Qe(f,l,s),h.head.appendChild(f);break;default:throw Error(a(468,l))}f[_e]=e,Ee(f),l=f}e.stateNode=l}else L1(h,e.type,e.stateNode);else e.stateNode=P1(h,l,e.memoizedProps);else f!==l?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,l===null?L1(h,e.type,e.stateNode):P1(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vf(e,e.memoizedProps,s.memoizedProps)}break;case 27:wn(r,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),s!==null&&l&4&&vf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wn(r,e),Tn(e),l&512&&(Te||s===null||yi(s,s.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Y){ee(e,e.return,Y)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,vf(e,h,s!==null?s.memoizedProps:h)),l&1024&&(bf=!0);break;case 6:if(wn(r,e),Tn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Y){ee(e,e.return,Y)}}break;case 3:if(Dc=null,h=ti,ti=Cc(r.containerInfo),wn(r,e),ti=h,Tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(Y){ee(e,e.return,Y)}bf&&(bf=!1,Hy(e));break;case 4:l=ti,ti=Cc(e.stateNode.containerInfo),wn(r,e),Tn(e),ti=l;break;case 12:wn(r,e),Tn(e);break;case 13:wn(r,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cf=fn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wf(e,l)));break;case 22:h=e.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,K=Qi,tt=Te;if(Qi=K||h,Te=tt||D,wn(r,e),Te=tt,Qi=K,Tn(e),l&8192)t:for(r=e.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||D||Qi||Te||Fa(e)),s=null,r=e;;){if(r.tag===5||r.tag===26){if(s===null){D=s=r;try{if(f=D.stateNode,h)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=D.stateNode;var rt=D.memoizedProps.style,H=rt!=null&&rt.hasOwnProperty("display")?rt.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Y){ee(D,D.return,Y)}}}else if(r.tag===6){if(s===null){D=r;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(Y){ee(D,D.return,Y)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,wf(e,s))));break;case 19:wn(r,e),Tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wf(e,l)));break;case 30:break;case 21:break;default:wn(r,e),Tn(e)}}function Tn(e){var r=e.flags;if(r&2){try{for(var s,l=e.return;l!==null;){if(Py(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,f=_f(e);gc(e,f,h);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var b=_f(e);gc(e,b,E);break;case 3:case 4:var D=s.stateNode.containerInfo,K=_f(e);Ef(e,K,D);break;default:throw Error(a(161))}}catch(tt){ee(e,e.return,tt)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Hy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Hy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Vr(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)By(e,r.alternate,r),r=r.sibling}function Fa(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Or(4,r,r.return),Fa(r);break;case 1:yi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&ky(r,r.return,s),Fa(r);break;case 27:Tl(r.stateNode);case 26:case 5:yi(r,r.return),Fa(r);break;case 22:r.memoizedState===null&&Fa(r);break;case 30:Fa(r);break;default:Fa(r)}e=e.sibling}}function kr(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=e,f=r,E=f.flags;switch(f.tag){case 0:case 11:case 15:kr(h,f,s),pl(4,f);break;case 1:if(kr(h,f,s),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(K){ee(l,l.return,K)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)E0(D[h],b)}catch(K){ee(l,l.return,K)}}s&&E&64&&Vy(f),ml(f,f.return);break;case 27:zy(f);case 26:case 5:kr(h,f,s),s&&l===null&&E&4&&Uy(f),ml(f,f.return);break;case 12:kr(h,f,s);break;case 13:kr(h,f,s),s&&E&4&&Ky(h,f);break;case 22:f.memoizedState===null&&kr(h,f,s),ml(f,f.return);break;case 30:break;default:kr(h,f,s)}r=r.sibling}}function Tf(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&tl(s))}function Sf(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e))}function xi(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Gy(e,r,s,l),r=r.sibling}function Gy(e,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:xi(e,r,s,l),h&2048&&pl(9,r);break;case 1:xi(e,r,s,l);break;case 3:xi(e,r,s,l),h&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&tl(e)));break;case 12:if(h&2048){xi(e,r,s,l),e=r.stateNode;try{var f=r.memoizedProps,E=f.id,b=f.onPostCommit;typeof b=="function"&&b(E,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){ee(r,r.return,D)}}else xi(e,r,s,l);break;case 13:xi(e,r,s,l);break;case 23:break;case 22:f=r.stateNode,E=r.alternate,r.memoizedState!==null?f._visibility&2?xi(e,r,s,l):gl(e,r):f._visibility&2?xi(e,r,s,l):(f._visibility|=2,Os(e,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Tf(E,r);break;case 24:xi(e,r,s,l),h&2048&&Sf(r.alternate,r);break;default:xi(e,r,s,l)}}function Os(e,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=e,E=r,b=s,D=l,K=E.flags;switch(E.tag){case 0:case 11:case 15:Os(f,E,b,D,h),pl(8,E);break;case 23:break;case 22:var tt=E.stateNode;E.memoizedState!==null?tt._visibility&2?Os(f,E,b,D,h):gl(f,E):(tt._visibility|=2,Os(f,E,b,D,h)),h&&K&2048&&Tf(E.alternate,E);break;case 24:Os(f,E,b,D,h),h&&K&2048&&Sf(E.alternate,E);break;default:Os(f,E,b,D,h)}r=r.sibling}}function gl(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,h=l.flags;switch(l.tag){case 22:gl(s,l),h&2048&&Tf(l.alternate,l);break;case 24:gl(s,l),h&2048&&Sf(l.alternate,l);break;default:gl(s,l)}r=r.sibling}}var yl=8192;function Vs(e){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)Yy(e),e=e.sibling}function Yy(e){switch(e.tag){case 26:Vs(e),e.flags&yl&&e.memoizedState!==null&&jw(ti,e.memoizedState,e.memoizedProps);break;case 5:Vs(e);break;case 3:case 4:var r=ti;ti=Cc(e.stateNode.containerInfo),Vs(e),ti=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=yl,yl=16777216,Vs(e),yl=r):Vs(e));break;default:Vs(e)}}function Qy(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function xl(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];$e=l,Wy(l,e)}Qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xy(e),e=e.sibling}function Xy(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Or(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&2&&(e.return===null||e.return.tag!==13)?(r._visibility&=-3,yc(e)):xl(e);break;default:xl(e)}}function yc(e){var r=e.deletions;if((e.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];$e=l,Wy(l,e)}Qy(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Or(8,r,r.return),yc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,yc(r));break;default:yc(r)}e=e.sibling}}function Wy(e,r){for(;$e!==null;){var s=$e;switch(s.tag){case 0:case 11:case 15:Or(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,$e=l;else t:for(s=e;$e!==null;){l=$e;var h=l.sibling,f=l.return;if($y(l),l===s){$e=null;break t}if(h!==null){h.return=f,$e=h;break t}$e=f}}}var Hb={getCacheForType:function(e){var r=en(ke),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},Gb=typeof WeakMap=="function"?WeakMap:Map,Qt=0,re=null,Vt=null,Lt=0,Xt=0,Sn=null,Ur=!1,ks=!1,Af=!1,Wi=0,xe=0,Pr=0,Ka=0,Rf=0,Ln=0,Us=0,vl=null,gn=null,If=!1,Cf=0,xc=1/0,vc=null,zr=null,Ye=0,Lr=null,Ps=null,zs=0,jf=0,Df=null,Zy=null,_l=0,Nf=null;function An(){if((Qt&2)!==0&&Lt!==0)return Lt&-Lt;if(J.T!==null){var e=As;return e!==0?e:zf()}return Mi()}function Jy(){Ln===0&&(Ln=(Lt&536870912)===0||Kt?jo():536870912);var e=zn.current;return e!==null&&(e.flags|=32),Ln}function Rn(e,r,s){(e===re&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),Br(e,Lt,Ln,!1)),ve(e,s),((Qt&2)===0||e!==re)&&(e===re&&((Qt&2)===0&&(Ka|=s),xe===4&&Br(e,Lt,Ln,!1)),vi(e))}function t1(e,r,s){if((Qt&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&e.expiredLanes)===0||fr(e,r),h=l?Xb(e,r):Vf(e,r,!0),f=l;do{if(h===0){ks&&!l&&Br(e,r,0,!1);break}else{if(s=e.current.alternate,f&&!Yb(s)){h=Vf(e,r,!1),f=!1;continue}if(h===2){if(f=r,e.errorRecoveryDisabledLanes&f)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var b=e;h=vl;var D=b.current.memoizedState.isDehydrated;if(D&&(Ls(b,E).flags|=256),E=Vf(b,E,!1),E!==2){if(Af&&!D){b.errorRecoveryDisabledLanes|=f,Ka|=f,h=4;break t}f=gn,gn=h,f!==null&&(gn===null?gn=f:gn.push.apply(gn,f))}h=E}if(f=!1,h!==2)continue}}if(h===1){Ls(e,0),Br(e,r,0,!0);break}t:{switch(l=e,f=h,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Br(l,r,Ln,!Ur);break t;case 2:gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Cf+300-fn(),10<h)){if(Br(l,r,Ln,!Ur),Dn(l,0,!0)!==0)break t;l.timeoutHandle=C1(e1.bind(null,l,s,gn,vc,If,r,Ln,Ka,Us,Ur,f,2,-0,0),h);break t}e1(l,s,gn,vc,If,r,Ln,Ka,Us,Ur,f,0,-0,0)}}break}while(!0);vi(e)}function e1(e,r,s,l,h,f,E,b,D,K,tt,rt,H,Y){if(e.timeoutHandle=-1,rt=r.subtreeFlags,(rt&8192||(rt&16785408)===16785408)&&(Rl={stylesheets:null,count:0,unsuspend:Cw},Yy(r),rt=Dw(),rt!==null)){e.cancelPendingCommit=rt(l1.bind(null,e,r,f,s,l,h,E,b,D,tt,1,H,Y)),Br(e,f,E,!K);return}l1(e,r,f,s,l,h,E,b,D)}function Yb(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],f=h.getSnapshot;h=h.value;try{if(!En(f(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Br(e,r,s,l){r&=~Rf,r&=~Ka,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var h=r;0<h;){var f=31-ln(h),E=1<<f;l[f]=-1,h&=~E}s!==0&&mr(e,s,r)}function _c(){return(Qt&6)===0?(El(0),!1):!0}function Mf(){if(Vt!==null){if(Xt===0)var e=Vt.return;else e=Vt,Fi=Pa=null,Qd(e),Ns=null,hl=0,e=Vt;for(;e!==null;)Oy(e.alternate,e),e=e.return;Vt=null}}function Ls(e,r){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,dw(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Mf(),re=e,Vt=s=Li(e.current,null),Lt=r,Xt=0,Sn=null,Ur=!1,ks=fr(e,r),Af=!1,Us=Ln=Rf=Ka=Pr=xe=0,gn=vl=null,If=!1,(r&8)!==0&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var h=31-ln(l),f=1<<h;r|=e[h],l&=~f}return Wi=r,$u(),s}function n1(e,r){Mt=null,J.H=oc,r===nl||r===Wu?(r=v0(),Xt=3):r===g0?(r=v0(),Xt=4):Xt=r===_y?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Sn=r,Vt===null&&(xe=1,dc(e,Vn(r,e.current)))}function i1(){var e=J.H;return J.H=oc,e===null?oc:e}function r1(){var e=J.A;return J.A=Hb,e}function Of(){xe=4,Ur||(Lt&4194048)!==Lt&&zn.current!==null||(ks=!0),(Pr&134217727)===0&&(Ka&134217727)===0||re===null||Br(re,Lt,Ln,!1)}function Vf(e,r,s){var l=Qt;Qt|=2;var h=i1(),f=r1();(re!==e||Lt!==r)&&(vc=null,Ls(e,r)),r=!1;var E=xe;t:do try{if(Xt!==0&&Vt!==null){var b=Vt,D=Sn;switch(Xt){case 8:Mf(),E=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var K=Xt;if(Xt=0,Sn=null,Bs(e,b,D,K),s&&ks){E=0;break t}break;default:K=Xt,Xt=0,Sn=null,Bs(e,b,D,K)}}Qb(),E=xe;break}catch(tt){n1(e,tt)}while(!0);return r&&e.shellSuspendCounter++,Fi=Pa=null,Qt=l,J.H=h,J.A=f,Vt===null&&(re=null,Lt=0,$u()),E}function Qb(){for(;Vt!==null;)a1(Vt)}function Xb(e,r){var s=Qt;Qt|=2;var l=i1(),h=r1();re!==e||Lt!==r?(vc=null,xc=fn()+500,Ls(e,r)):ks=fr(e,r);t:do try{if(Xt!==0&&Vt!==null){r=Vt;var f=Sn;e:switch(Xt){case 1:Xt=0,Sn=null,Bs(e,r,f,1);break;case 2:case 9:if(y0(f)){Xt=0,Sn=null,s1(r);break}r=function(){Xt!==2&&Xt!==9||re!==e||(Xt=7),vi(e)},f.then(r,r);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:y0(f)?(Xt=0,Sn=null,s1(r)):(Xt=0,Sn=null,Bs(e,r,f,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var b=Vt;if(!E||B1(E)){Xt=0,Sn=null;var D=b.sibling;if(D!==null)Vt=D;else{var K=b.return;K!==null?(Vt=K,Ec(K)):Vt=null}break e}}Xt=0,Sn=null,Bs(e,r,f,5);break;case 6:Xt=0,Sn=null,Bs(e,r,f,6);break;case 8:Mf(),xe=6;break t;default:throw Error(a(462))}}Wb();break}catch(tt){n1(e,tt)}while(!0);return Fi=Pa=null,J.H=l,J.A=h,Qt=s,Vt!==null?0:(re=null,Lt=0,$u(),xe)}function Wb(){for(;Vt!==null&&!ld();)a1(Vt)}function a1(e){var r=Ny(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,r===null?Ec(e):Vt=r}function s1(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=Ay(s,r,r.pendingProps,r.type,void 0,Lt);break;case 11:r=Ay(s,r,r.pendingProps,r.type.render,r.ref,Lt);break;case 5:Qd(r);default:Oy(s,r),r=Vt=o0(r,Wi),r=Ny(s,r,Wi)}e.memoizedProps=e.pendingProps,r===null?Ec(e):Vt=r}function Bs(e,r,s,l){Fi=Pa=null,Qd(r),Ns=null,hl=0;var h=r.return;try{if(Lb(e,h,r,s,Lt)){xe=1,dc(e,Vn(s,e.current)),Vt=null;return}}catch(f){if(h!==null)throw Vt=h,f;xe=1,dc(e,Vn(s,e.current)),Vt=null;return}r.flags&32768?(Kt||l===1?e=!0:ks||(Lt&536870912)!==0?e=!1:(Ur=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),o1(r,e)):Ec(r)}function Ec(e){var r=e;do{if((r.flags&32768)!==0){o1(r,Ur);return}e=r.return;var s=$b(r.alternate,r,Wi);if(s!==null){Vt=s;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);xe===0&&(xe=5)}function o1(e,r){do{var s=Fb(e.alternate,e);if(s!==null){s.flags&=32767,Vt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=s}while(e!==null);xe=6,Vt=null}function l1(e,r,s,l,h,f,E,b,D){e.cancelPendingCommit=null;do bc();while(Ye!==0);if((Qt&6)!==0)throw Error(a(327));if(r!==null){if(r===e.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=Td,Su(e,s,f,E,b,D),e===re&&(Vt=re=null,Lt=0),Ps=r,Lr=e,zs=s,jf=f,Df=h,Zy=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ew(Ni,function(){return f1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,h=ht.p,ht.p=2,E=Qt,Qt|=4;try{Kb(e,r,s)}finally{Qt=E,ht.p=h,J.T=l}}Ye=1,u1(),c1(),h1()}}function u1(){if(Ye===1){Ye=0;var e=Lr,r=Ps,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{qy(r,e);var f=Gf,E=Wg(e.containerInfo),b=f.focusedElem,D=f.selectionRange;if(E!==b&&b&&b.ownerDocument&&Xg(b.ownerDocument.documentElement,b)){if(D!==null&&vd(b)){var K=D.start,tt=D.end;if(tt===void 0&&(tt=K),"selectionStart"in b)b.selectionStart=K,b.selectionEnd=Math.min(tt,b.value.length);else{var rt=b.ownerDocument||document,H=rt&&rt.defaultView||window;if(H.getSelection){var Y=H.getSelection(),Tt=b.textContent.length,Et=Math.min(D.start,Tt),te=D.end===void 0?Et:Math.min(D.end,Tt);!Y.extend&&Et>te&&(E=te,te=Et,Et=E);var L=Qg(b,Et),U=Qg(b,te);if(L&&U&&(Y.rangeCount!==1||Y.anchorNode!==L.node||Y.anchorOffset!==L.offset||Y.focusNode!==U.node||Y.focusOffset!==U.offset)){var $=rt.createRange();$.setStart(L.node,L.offset),Y.removeAllRanges(),Et>te?(Y.addRange($),Y.extend(U.node,U.offset)):($.setEnd(U.node,U.offset),Y.addRange($))}}}}for(rt=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&rt.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<rt.length;b++){var nt=rt[b];nt.element.scrollLeft=nt.left,nt.element.scrollTop=nt.top}}Oc=!!Hf,Gf=Hf=null}finally{Qt=h,ht.p=l,J.T=s}}e.current=r,Ye=2}}function c1(){if(Ye===2){Ye=0;var e=Lr,r=Ps,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=J.T,J.T=null;var l=ht.p;ht.p=2;var h=Qt;Qt|=4;try{By(e,r.alternate,r)}finally{Qt=h,ht.p=l,J.T=s}}Ye=3}}function h1(){if(Ye===4||Ye===3){Ye=0,Io();var e=Lr,r=Ps,s=zs,l=Zy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ye=5:(Ye=0,Ps=Lr=null,d1(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(zr=null),No(s),r=r.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(hr,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=J.T,h=ht.p,ht.p=2,J.T=null;try{for(var f=e.onRecoverableError,E=0;E<l.length;E++){var b=l[E];f(b.value,{componentStack:b.stack})}}finally{J.T=r,ht.p=h}}(zs&3)!==0&&bc(),vi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Nf?_l++:(_l=0,Nf=e):_l=0,El(0)}}function d1(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,tl(r)))}function bc(e){return u1(),c1(),h1(),f1()}function f1(){if(Ye!==5)return!1;var e=Lr,r=jf;jf=0;var s=No(zs),l=J.T,h=ht.p;try{ht.p=32>s?32:s,J.T=null,s=Df,Df=null;var f=Lr,E=zs;if(Ye=0,Ps=Lr=null,zs=0,(Qt&6)!==0)throw Error(a(331));var b=Qt;if(Qt|=4,Xy(f.current),Gy(f,f.current,E,s),Qt=b,El(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(hr,f)}catch{}return!0}finally{ht.p=h,J.T=l,d1(e,r)}}function p1(e,r,s){r=Vn(s,r),r=cf(e.stateNode,r,2),e=jr(e,r,2),e!==null&&(ve(e,2),vi(e))}function ee(e,r,s){if(e.tag===3)p1(e,e,s);else for(;r!==null;){if(r.tag===3){p1(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zr===null||!zr.has(l))){e=Vn(s,e),s=xy(2),l=jr(r,s,2),l!==null&&(vy(s,l,r,e),ve(l,2),vi(l));break}}r=r.return}}function kf(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Gb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Af=!0,h.add(s),e=Zb.bind(null,e,r,s),r.then(e,e))}function Zb(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,re===e&&(Lt&s)===s&&(xe===4||xe===3&&(Lt&62914560)===Lt&&300>fn()-Cf?(Qt&2)===0&&Ls(e,0):Rf|=s,Us===Lt&&(Us=0)),vi(e)}function m1(e,r){r===0&&(r=pr()),e=bs(e,r),e!==null&&(ve(e,r),vi(e))}function Jb(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),m1(e,s)}function tw(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),m1(e,s)}function ew(e,r){return ua(e,r)}var wc=null,$s=null,Uf=!1,Tc=!1,Pf=!1,qa=0;function vi(e){e!==$s&&e.next===null&&($s===null?wc=$s=e:$s=$s.next=e),Tc=!0,Uf||(Uf=!0,iw())}function El(e,r){if(!Pf&&Tc){Pf=!0;do for(var s=!1,l=wc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var E=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-ln(42|e)+1)-1,f&=h&~(E&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,v1(l,f))}else f=Lt,f=Dn(l,l===re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||fr(l,f)||(s=!0,v1(l,f));l=l.next}while(s);Pf=!1}}function nw(){g1()}function g1(){Tc=Uf=!1;var e=0;qa!==0&&(hw()&&(e=qa),qa=0);for(var r=fn(),s=null,l=wc;l!==null;){var h=l.next,f=y1(l,r);f===0?(l.next=null,s===null?wc=h:s.next=h,h===null&&($s=s)):(s=l,(e!==0||(f&3)!==0)&&(Tc=!0)),l=h}El(e)}function y1(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var E=31-ln(f),b=1<<E,D=h[E];D===-1?((b&s)===0||(b&l)!==0)&&(h[E]=as(b,r)):D<=r&&(e.expiredLanes|=b),f&=~b}if(r=re,s=Lt,s=Dn(e,e===r?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===r&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rs(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||fr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&rs(l),No(s)){case 2:case 8:s=ze;break;case 32:s=Ni;break;case 268435456:s=Co;break;default:s=Ni}return l=x1.bind(null,e),s=ua(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&rs(l),e.callbackPriority=2,e.callbackNode=null,2}function x1(e,r){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(bc()&&e.callbackNode!==s)return null;var l=Lt;return l=Dn(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(t1(e,l,r),y1(e,fn()),e.callbackNode!=null&&e.callbackNode===s?x1.bind(null,e):null)}function v1(e,r){if(bc())return null;t1(e,r,!0)}function iw(){fw(function(){(Qt&6)!==0?ua(Oe,nw):g1()})}function zf(){return qa===0&&(qa=jo()),qa}function _1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function E1(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function rw(e,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var f=_1((h[He]||null).action),E=l.submitter;E&&(r=(r=E[He]||null)?_1(r.formAction):E.getAttribute("formAction"),r!==null&&(f=r,E=null));var b=new Ta("action","action",null,l,h);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var D=E?E1(h,E):new FormData(h);af(s,{pending:!0,data:D,method:h.method,action:f},null,D)}}else typeof f=="function"&&(b.preventDefault(),D=E?E1(h,E):new FormData(h),af(s,{pending:!0,data:D,method:h.method,action:f},f,D))},currentTarget:h}]})}}for(var Lf=0;Lf<wd.length;Lf++){var Bf=wd[Lf],aw=Bf.toLowerCase(),sw=Bf[0].toUpperCase()+Bf.slice(1);Jn(aw,"on"+sw)}Jn(t0,"onAnimationEnd"),Jn(e0,"onAnimationIteration"),Jn(n0,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(wb,"onTransitionRun"),Jn(Tb,"onTransitionStart"),Jn(Sb,"onTransitionCancel"),Jn(i0,"onTransitionEnd"),hi("onMouseEnter",["mouseout","mouseover"]),hi("onMouseLeave",["mouseout","mouseover"]),hi("onPointerEnter",["pointerout","pointerover"]),hi("onPointerLeave",["pointerout","pointerover"]),ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function b1(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var f=void 0;if(r)for(var E=l.length-1;0<=E;E--){var b=l[E],D=b.instance,K=b.currentTarget;if(b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=K;try{f(h)}catch(tt){hc(tt)}h.currentTarget=null,f=D}else for(E=0;E<l.length;E++){if(b=l[E],D=b.instance,K=b.currentTarget,b=b.listener,D!==f&&h.isPropagationStopped())break t;f=b,h.currentTarget=K;try{f(h)}catch(tt){hc(tt)}h.currentTarget=null,f=D}}}}function kt(e,r){var s=r[ha];s===void 0&&(s=r[ha]=new Set);var l=e+"__bubble";s.has(l)||(w1(r,e,2,!1),s.add(l))}function $f(e,r,s){var l=0;r&&(l|=4),w1(s,e,l,r)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[Sc]){e[Sc]=!0,Au.forEach(function(s){s!=="selectionchange"&&(ow.has(s)||$f(s,!1,e),$f(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Sc]||(r[Sc]=!0,$f("selectionchange",!1,r))}}function w1(e,r,s,l){switch(G1(r)){case 2:var h=Ow;break;case 8:h=Vw;break;default:h=ip}s=h.bind(null,r,s,e),h=void 0,!Pi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(r,s,{capture:!0,passive:h}):e.addEventListener(r,s,!0):h!==void 0?e.addEventListener(r,s,{passive:h}):e.addEventListener(r,s,!1)}function Kf(e,r,s,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=li(b),E===null)return;if(D=E.tag,D===5||D===6||D===26||D===27){l=f=E;continue t}b=b.parentNode}}l=l.return}Ea(function(){var K=f,tt=zo(s),rt=[];t:{var H=r0.get(e);if(H!==void 0){var Y=Ta,Tt=e;switch(e){case"keypress":if(ba(s)===0)break t;case"keydown":case"keyup":Y=xs;break;case"focusin":Tt="focus",Y=ms;break;case"focusout":Tt="blur",Y=ms;break;case"beforeblur":case"afterblur":Y=ms;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Ar;break;case t0:case e0:case n0:Y=Bo;break;case i0:Y=y;break;case"scroll":case"scrollend":Y=Aa;break;case"wheel":Y=T;break;case"copy":case"cut":case"paste":Y=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ko;break;case"toggle":case"beforetoggle":Y=Q}var Et=(r&4)!==0,te=!Et&&(e==="scroll"||e==="scrollend"),L=Et?H!==null?H+"Capture":null:H;Et=[];for(var U=K,$;U!==null;){var nt=U;if($=nt.stateNode,nt=nt.tag,nt!==5&&nt!==26&&nt!==27||$===null||L===null||(nt=Tr(U,L),nt!=null&&Et.push(wl(U,nt,$))),te)break;U=U.return}0<Et.length&&(H=new Y(H,Tt,null,s,tt),rt.push({event:H,listeners:Et}))}}if((r&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&s!==Po&&(Tt=s.relatedTarget||s.fromElement)&&(li(Tt)||Tt[Oi]))break t;if((Y||H)&&(H=tt.window===tt?tt:(H=tt.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(Tt=s.relatedTarget||s.toElement,Y=K,Tt=Tt?li(Tt):null,Tt!==null&&(te=u(Tt),Et=Tt.tag,Tt!==te||Et!==5&&Et!==27&&Et!==6)&&(Tt=null)):(Y=null,Tt=K),Y!==Tt)){if(Et=Ca,nt="onMouseLeave",L="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Et=Ko,nt="onPointerLeave",L="onPointerEnter",U="pointer"),te=Y==null?H:xr(Y),$=Tt==null?H:xr(Tt),H=new Et(nt,U+"leave",Y,s,tt),H.target=te,H.relatedTarget=$,nt=null,li(tt)===K&&(Et=new Et(L,U+"enter",Tt,s,tt),Et.target=$,Et.relatedTarget=te,nt=Et),te=nt,Y&&Tt)e:{for(Et=Y,L=Tt,U=0,$=Et;$;$=Fs($))U++;for($=0,nt=L;nt;nt=Fs(nt))$++;for(;0<U-$;)Et=Fs(Et),U--;for(;0<$-U;)L=Fs(L),$--;for(;U--;){if(Et===L||L!==null&&Et===L.alternate)break e;Et=Fs(Et),L=Fs(L)}Et=null}else Et=null;Y!==null&&T1(rt,H,Y,Et,!1),Tt!==null&&te!==null&&T1(rt,te,Tt,Et,!0)}}t:{if(H=K?xr(K):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var mt=Fg;else if(Bg(H))if(Kg)mt=_b;else{mt=xb;var Ot=yb}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?K&&ds(K.elementType)&&(mt=Fg):mt=vb;if(mt&&(mt=mt(e,K))){$g(rt,mt,s,tt);break t}Ot&&Ot(e,H,K),e==="focusout"&&K&&H.type==="number"&&K.memoizedProps.value!=null&&Vo(H,"number",H.value)}switch(Ot=K?xr(K):window,e){case"focusin":(Bg(Ot)||Ot.contentEditable==="true")&&(vs=Ot,_d=K,Qo=null);break;case"focusout":Qo=_d=vs=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,Zg(rt,s,tt);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Zg(rt,s,tt)}var xt;if(At)t:{switch(e){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else Zn?Xn(e,s)&&(bt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(be&&s.locale!=="ko"&&(Zn||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Zn&&(xt=Nu()):(On=tt,ie="value"in On?On.value:On.textContent,Zn=!0)),Ot=Ac(K,bt),0<Ot.length&&(bt=new Fo(bt,e,null,s,tt),rt.push({event:bt,listeners:Ot}),xt?bt.data=xt:(xt=Wn(s),xt!==null&&(bt.data=xt)))),(xt=Yt?qo(e,s):pb(e,s))&&(bt=Ac(K,"onBeforeInput"),0<bt.length&&(Ot=new Fo("onBeforeInput","beforeinput",null,s,tt),rt.push({event:Ot,listeners:bt}),Ot.data=xt)),rw(rt,e,K,s,tt)}b1(rt,r)})}function wl(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Ac(e,r){for(var s=r+"Capture",l=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Tr(e,s),h!=null&&l.unshift(wl(e,h,f)),h=Tr(e,r),h!=null&&l.push(wl(e,h,f))),e.tag===3)return l;e=e.return}return[]}function Fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T1(e,r,s,l,h){for(var f=r._reactName,E=[];s!==null&&s!==l;){var b=s,D=b.alternate,K=b.stateNode;if(b=b.tag,D!==null&&D===l)break;b!==5&&b!==26&&b!==27||K===null||(D=K,h?(K=Tr(s,f),K!=null&&E.unshift(wl(s,K,D))):h||(K=Tr(s,f),K!=null&&E.push(wl(s,K,D)))),s=s.return}E.length!==0&&e.push({event:r,listeners:E})}var lw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function S1(e){return(typeof e=="string"?e:""+e).replace(lw,`
`).replace(uw,"")}function A1(e,r){return r=S1(r),S1(e)===r}function Rc(){}function Jt(e,r,s,l,h,f){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Mn(e,""+l);break;case"className":ga(e,"class",l);break;case"tabIndex":ga(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ga(e,s,l);break;case"style":Uo(e,l,f);break;case"data":if(r!=="object"){ga(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(r!=="input"&&Jt(e,r,"name",h.name,h,null),Jt(e,r,"formEncType",h.formEncType,h,null),Jt(e,r,"formMethod",h.formMethod,h,null),Jt(e,r,"formTarget",h.formTarget,h,null)):(Jt(e,r,"encType",h.encType,h,null),Jt(e,r,"method",h.method,h,null),Jt(e,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Qn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Rc);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":kt("beforetoggle",e),kt("toggle",e),ma(e,"popover",l);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ma(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Cu.get(s)||s,ma(e,s,l))}}function qf(e,r,s,l,h,f){switch(s){case"style":Uo(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&kt("scroll",e);break;case"onScrollEnd":l!=null&&kt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fa.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),f=e[He]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ma(e,s,l)}}}function Qe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var l=!1,h=!1,f;for(f in s)if(s.hasOwnProperty(f)){var E=s[f];if(E!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,f,E,s,null)}}h&&Jt(e,r,"srcSet",s.srcSet,s,null),l&&Jt(e,r,"src",s.src,s,null);return;case"input":kt("invalid",e);var b=f=E=h=null,D=null,K=null;for(l in s)if(s.hasOwnProperty(l)){var tt=s[l];if(tt!=null)switch(l){case"name":h=tt;break;case"type":E=tt;break;case"checked":D=tt;break;case"defaultChecked":K=tt;break;case"value":f=tt;break;case"defaultValue":b=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,r));break;default:Jt(e,r,l,tt,s,null)}}Oo(e,f,b,D,K,E,h,!1),Er(e);return;case"select":kt("invalid",e),l=E=f=null;for(h in s)if(s.hasOwnProperty(h)&&(b=s[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Jt(e,r,h,b,s,null)}r=f,s=E,e.multiple=!!l,r!=null?br(e,!!l,r,!1):s!=null&&br(e,!!l,s,!0);return;case"textarea":kt("invalid",e),f=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(b=s[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Jt(e,r,E,b,s,null)}Iu(e,l,h,f),Er(e);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(e,r,D,l,s,null)}return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(l=0;l<bl.length;l++)kt(bl[l],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(l=s[K],l!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Jt(e,r,K,l,s,null)}return;default:if(ds(r)){for(tt in s)s.hasOwnProperty(tt)&&(l=s[tt],l!==void 0&&qf(e,r,tt,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Jt(e,r,b,l,s,null))}function cw(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,E=null,b=null,D=null,K=null,tt=null;for(Y in s){var rt=s[Y];if(s.hasOwnProperty(Y)&&rt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=rt;default:l.hasOwnProperty(Y)||Jt(e,r,Y,null,l,rt)}}for(var H in l){var Y=l[H];if(rt=s[H],l.hasOwnProperty(H)&&(Y!=null||rt!=null))switch(H){case"type":f=Y;break;case"name":h=Y;break;case"checked":K=Y;break;case"defaultChecked":tt=Y;break;case"value":E=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:Y!==rt&&Jt(e,r,H,Y,l,rt)}}Mo(e,E,b,D,K,tt,f,h);return;case"select":Y=E=b=H=null;for(f in s)if(D=s[f],s.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":Y=D;default:l.hasOwnProperty(f)||Jt(e,r,f,null,l,D)}for(h in l)if(f=l[h],D=s[h],l.hasOwnProperty(h)&&(f!=null||D!=null))switch(h){case"value":H=f;break;case"defaultValue":b=f;break;case"multiple":E=f;default:f!==D&&Jt(e,r,h,f,l,D)}r=b,s=E,l=Y,H!=null?br(e,!!s,H,!1):!!l!=!!s&&(r!=null?br(e,!!s,r,!0):br(e,!!s,s?[]:"",!1));return;case"textarea":Y=H=null;for(b in s)if(h=s[b],s.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Jt(e,r,b,null,l,h)}for(E in l)if(h=l[E],f=s[E],l.hasOwnProperty(E)&&(h!=null||f!=null))switch(E){case"value":H=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==f&&Jt(e,r,E,h,l,f)}Ru(e,H,Y);return;case"option":for(var Tt in s)if(H=s[Tt],s.hasOwnProperty(Tt)&&H!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Jt(e,r,Tt,null,l,H)}for(D in l)if(H=l[D],Y=s[D],l.hasOwnProperty(D)&&H!==Y&&(H!=null||Y!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(e,r,D,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in s)H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et)&&Jt(e,r,Et,null,l,H);for(K in l)if(H=l[K],Y=s[K],l.hasOwnProperty(K)&&H!==Y&&(H!=null||Y!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:Jt(e,r,K,H,l,Y)}return;default:if(ds(r)){for(var te in s)H=s[te],s.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&qf(e,r,te,void 0,l,H);for(tt in l)H=l[tt],Y=s[tt],!l.hasOwnProperty(tt)||H===Y||H===void 0&&Y===void 0||qf(e,r,tt,H,l,Y);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Jt(e,r,L,null,l,H);for(rt in l)H=l[rt],Y=s[rt],!l.hasOwnProperty(rt)||H===Y||H==null&&Y==null||Jt(e,r,rt,H,l,Y)}var Hf=null,Gf=null;function Ic(e){return e.nodeType===9?e:e.ownerDocument}function R1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I1(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function Yf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qf=null;function hw(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var C1=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,j1=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof j1<"u"?function(e){return j1.resolve(null).then(e).catch(pw)}:C1;function pw(e){setTimeout(function(){throw e})}function $r(e){return e==="head"}function D1(e,r){var s=r,l=0,h=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Tl(E.documentElement),s&2&&Tl(E.body),s&4)for(s=E.head,Tl(s),E=s.firstChild;E;){var b=E.nextSibling,D=E.nodeName;E[yr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=b}}if(h===0){e.removeChild(f),Nl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=f}while(s);Nl(r)}function Xf(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Xf(s),os(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function mw(e,r,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[yr])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function gw(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ei(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yw(e,r){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ei(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}var Zf=null;function N1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function M1(e,r,s){switch(r=Ic(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Tl(e){for(var r=e.attributes;r.length;)e.removeAttributeNode(r[0]);os(e)}var Bn=new Map,O1=new Set;function Cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=ht.d;ht.d={f:xw,r:vw,D:_w,C:Ew,L:bw,m:ww,X:Sw,S:Tw,M:Aw};function xw(){var e=Zi.f(),r=_c();return e||r}function vw(e){var r=ui(e);r!==null&&r.tag===5&&r.type==="form"?ty(r):Zi.r(e)}var Ks=typeof document>"u"?null:document;function V1(e,r,s){var l=Ks;if(l&&typeof r=="string"&&r){var h=Le(r);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),O1.has(h)||(O1.add(h),e={rel:e,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Qe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function _w(e){Zi.D(e),V1("dns-prefetch",e,null)}function Ew(e,r){Zi.C(e,r),V1("preconnect",e,r)}function bw(e,r,s){Zi.L(e,r,s);var l=Ks;if(l&&e&&r){var h='link[rel="preload"][as="'+Le(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Le(s.imageSizes)+'"]')):h+='[href="'+Le(e)+'"]';var f=h;switch(r){case"style":f=qs(e);break;case"script":f=Hs(e)}Bn.has(f)||(e=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Bn.set(f,e),l.querySelector(h)!==null||r==="style"&&l.querySelector(Sl(f))||r==="script"&&l.querySelector(Al(f))||(r=l.createElement("link"),Qe(r,"link",e),Ee(r),l.head.appendChild(r)))}}function ww(e,r){Zi.m(e,r);var s=Ks;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Le(l)+'"][href="'+Le(e)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hs(e)}if(!Bn.has(f)&&(e=v({rel:"modulepreload",href:e},r),Bn.set(f,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(f)))return}l=s.createElement("link"),Qe(l,"link",e),Ee(l),s.head.appendChild(l)}}}function Tw(e,r,s){Zi.S(e,r,s);var l=Ks;if(l&&e){var h=vr(l).hoistableStyles,f=qs(e);r=r||"default";var E=h.get(f);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(Sl(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Bn.get(f))&&Jf(e,s);var D=E=l.createElement("link");Ee(D),Qe(D,"link",e),D._p=new Promise(function(K,tt){D.onload=K,D.onerror=tt}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jc(E,r,l)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(f,E)}}}function Sw(e,r){Zi.X(e,r);var s=Ks;if(s&&e){var l=vr(s).hoistableScripts,h=Hs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0},r),(r=Bn.get(h))&&tp(e,r),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function Aw(e,r){Zi.M(e,r);var s=Ks;if(s&&e){var l=vr(s).hoistableScripts,h=Hs(e),f=l.get(h);f||(f=s.querySelector(Al(h)),f||(e=v({src:e,async:!0,type:"module"},r),(r=Bn.get(h))&&tp(e,r),f=s.createElement("script"),Ee(f),Qe(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function k1(e,r,s,l){var h=(h=_t.current)?Cc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=qs(s.href),s=vr(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qs(s.href);var f=vr(h).hoistableStyles,E=f.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,E),(f=h.querySelector(Sl(e)))&&!f._p&&(E.instance=f,E.state.loading=5),Bn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bn.set(e,s),f||Rw(h,e,s,E.state))),r&&l===null)throw Error(a(528,""));return E}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Hs(s),s=vr(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qs(e){return'href="'+Le(e)+'"'}function Sl(e){return'link[rel="stylesheet"]['+e+"]"}function U1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Rw(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Qe(r,"link",s),Ee(r),e.head.appendChild(r))}function Hs(e){return'[src="'+Le(e)+'"]'}function Al(e){return"script[async]"+e}function P1(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+Le(s.href)+'"]');if(l)return r.instance=l,Ee(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Qe(l,"style",h),jc(l,s.precedence,e),r.instance=l;case"stylesheet":h=qs(s.href);var f=e.querySelector(Sl(h));if(f)return r.state.loading|=4,r.instance=f,Ee(f),f;l=U1(s),(h=Bn.get(h))&&Jf(l,h),f=(e.ownerDocument||e).createElement("link"),Ee(f);var E=f;return E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",l),r.state.loading|=4,jc(f,s.precedence,e),r.instance=f;case"script":return f=Hs(s.src),(h=e.querySelector(Al(f)))?(r.instance=h,Ee(h),h):(l=s,(h=Bn.get(f))&&(l=v({},s),tp(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),Qe(h,"link",l),e.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,jc(l,s.precedence,e));return r.instance}function jc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function Jf(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function tp(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Dc=null;function z1(e,r,s){if(Dc===null){var l=new Map,h=Dc=new Map;h.set(s,l)}else h=Dc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var f=s[h];if(!(f[yr]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(r)||"";E=e+E;var b=l.get(E);b?b.push(f):l.set(E,[f])}}return l}function L1(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function Iw(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function B1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Rl=null;function Cw(){}function jw(e,r,s){if(Rl===null)throw Error(a(475));var l=Rl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=qs(s.href),f=e.querySelector(Sl(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Nc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=f,Ee(f);return}f=e.ownerDocument||e,s=U1(s),(h=Bn.get(h))&&Jf(s,h),f=f.createElement("link"),Ee(f);var E=f;E._p=new Promise(function(b,D){E.onload=b,E.onerror=D}),Qe(f,"link",s),r.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Nc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function Dw(){if(Rl===null)throw Error(a(475));var e=Rl;return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function ep(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,r.forEach(Nw,e),Mc=null,Nc.call(e))}function Nw(e,r){if(!(r.state.loading&4)){var s=Mc.get(e);if(s)var l=s.get(null);else{s=new Map,Mc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var E=h[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=r.instance,E=h.getAttribute("data-precedence"),f=s.get(E)||l,f===l&&s.set(null,h),s.set(E,h),this.count++,l=Nc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),r.state.loading|=4}}var Il={$$typeof:et,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function Mw(e,r,s,l,h,f,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function $1(e,r,s,l,h,f,E,b,D,K,tt,rt){return e=new Mw(e,r,s,E,b,D,K,rt),r=1,f===!0&&(r|=24),f=bn(3,null,null,r),e.current=f,f.stateNode=e,r=Vd(),r.refCount++,e.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:s,cache:r},zd(f),e}function F1(e){return e?(e=ws,e):ws}function K1(e,r,s,l,h,f){h=F1(h),l.context===null?l.context=h:l.pendingContext=h,l=Cr(r),l.payload={element:s},f=f===void 0?null:f,f!==null&&(l.callback=f),s=jr(e,l,r),s!==null&&(Rn(s,e,r),rl(s,e,r))}function q1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function np(e,r){q1(e,r),(e=e.alternate)&&q1(e,r)}function H1(e){if(e.tag===13){var r=bs(e,67108864);r!==null&&Rn(r,e,67108864),np(e,67108864)}}var Oc=!0;function Ow(e,r,s,l){var h=J.T;J.T=null;var f=ht.p;try{ht.p=2,ip(e,r,s,l)}finally{ht.p=f,J.T=h}}function Vw(e,r,s,l){var h=J.T;J.T=null;var f=ht.p;try{ht.p=8,ip(e,r,s,l)}finally{ht.p=f,J.T=h}}function ip(e,r,s,l){if(Oc){var h=rp(l);if(h===null)Kf(e,r,l,Vc,s),Y1(e,l);else if(Uw(h,e,r,s,l))l.stopPropagation();else if(Y1(e,l),r&4&&-1<kw.indexOf(e)){for(;h!==null;){var f=ui(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Hn(f.pendingLanes);if(E!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var D=1<<31-ln(E);b.entanglements[1]|=D,E&=~D}vi(f),(Qt&6)===0&&(xc=fn()+500,El(0))}}break;case 13:b=bs(f,2),b!==null&&Rn(b,f,2),_c(),np(f,2)}if(f=rp(l),f===null&&Kf(e,r,l,Vc,s),f===h)break;h=f}h!==null&&l.stopPropagation()}else Kf(e,r,l,null,s)}}function rp(e){return e=zo(e),ap(e)}var Vc=null;function ap(e){if(Vc=null,e=li(e),e!==null){var r=u(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=d(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Vc=e,null}function G1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bu()){case Oe:return 2;case ze:return 8;case Ni:case ud:return 32;case Co:return 268435456;default:return 32}default:return 32}}var sp=!1,Fr=null,Kr=null,qr=null,Cl=new Map,jl=new Map,Hr=[],kw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y1(e,r){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(r.pointerId)}}function Dl(e,r,s,l,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=ui(r),r!==null&&H1(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function Uw(e,r,s,l,h){switch(r){case"focusin":return Fr=Dl(Fr,e,r,s,l,h),!0;case"dragenter":return Kr=Dl(Kr,e,r,s,l,h),!0;case"mouseover":return qr=Dl(qr,e,r,s,l,h),!0;case"pointerover":var f=h.pointerId;return Cl.set(f,Dl(Cl.get(f)||null,e,r,s,l,h)),!0;case"gotpointercapture":return f=h.pointerId,jl.set(f,Dl(jl.get(f)||null,e,r,s,l,h)),!0}return!1}function Q1(e){var r=li(e.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){e.blockedOn=r,dd(e.priority,function(){if(s.tag===13){var l=An();l=Do(l);var h=bs(s,l);h!==null&&Rn(h,s,l),np(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=rp(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Po=l,s.target.dispatchEvent(l),Po=null}else return r=ui(s),r!==null&&H1(r),e.blockedOn=s,!1;r.shift()}return!0}function X1(e,r,s){kc(e)&&s.delete(r)}function Pw(){sp=!1,Fr!==null&&kc(Fr)&&(Fr=null),Kr!==null&&kc(Kr)&&(Kr=null),qr!==null&&kc(qr)&&(qr=null),Cl.forEach(X1),jl.forEach(X1)}function Uc(e,r){e.blockedOn===r&&(e.blockedOn=null,sp||(sp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Pw)))}var Pc=null;function W1(e){Pc!==e&&(Pc=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],h=e[r+2];if(typeof l!="function"){if(ap(l||s)===null)continue;break}var f=ui(s);f!==null&&(e.splice(r,3),r-=3,af(f,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Nl(e){function r(D){return Uc(D,e)}Fr!==null&&Uc(Fr,e),Kr!==null&&Uc(Kr,e),qr!==null&&Uc(qr,e),Cl.forEach(r),jl.forEach(r);for(var s=0;s<Hr.length;s++){var l=Hr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Hr.length&&(s=Hr[0],s.blockedOn===null);)Q1(s),s.blockedOn===null&&Hr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],f=s[l+1],E=h[He]||null;if(typeof f=="function")E||W1(s);else if(E){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,E=f[He]||null)b=E.formAction;else if(ap(h)!==null)continue}else b=E.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),W1(s)}}}function op(e){this._internalRoot=e}zc.prototype.render=op.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=An();K1(s,l,e,r,null,null)},zc.prototype.unmount=op.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;K1(e.current,2,null,e,null,null),_c(),r[Oi]=null}};function zc(e){this._internalRoot=e}zc.prototype.unstable_scheduleHydration=function(e){if(e){var r=Mi();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Hr.length&&r!==0&&r<Hr[s].priority;s++);Hr.splice(s,0,e),s===0&&Q1(e)}};var Z1=t.version;if(Z1!=="19.1.1")throw Error(a(527,Z1,"19.1.1"));ht.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(r),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var zw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{hr=Lc.inject(zw),Je=Lc}catch{}}return kl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",h=py,f=my,E=gy,b=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=$1(e,1,!1,null,null,s,l,h,f,E,b,null),e[Oi]=r.current,Ff(e),new op(r)},kl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,h="",f=py,E=my,b=gy,D=null,K=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(K=s.formState)),r=$1(e,1,!0,r,s??null,l,h,f,E,b,D,K),r.context=F1(null),s=r.current,l=An(),l=Do(l),h=Cr(l),h.callback=null,jr(s,h,l),s=l,r.current.lanes=s,ve(r,s),vi(r),e[Oi]=r.current,Ff(e),new zc(r)},kl.version="19.1.1",kl}var __;function b9(){if(__)return $p.exports;__=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),$p.exports=E9(),$p.exports}var w9=b9();function T9(){const n=Ci(),t=xT();return Rt.useEffect(()=>{t!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const i=document.getElementById("main");i&&i.focus({preventScroll:!0})},[n,t]),null}function S9({headerMode:n,setHeaderMode:t}){const i=q.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects/"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits/"}],[]),a=Ci(),o=q.useMemo(()=>{const u=a.pathname.replace(/^\/+/,"");if(!u)return;const d=u.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(d)?d:void 0},[a.pathname]);return x.jsxs(x.Fragment,{children:[x.jsx(o2,{items:i,activeKey:o,mode:n,autoOnScroll:n===pe.GRADIENT_DARK||n===pe.DARK,scrollThreshold:8,sticky:!0,overlay:n===pe.GRADIENT_DARK||n===pe.DARK,maxWidth:1280,onModeChange:t}),x.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:x.jsx(UT,{})}),x.jsx(l2,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects/"},{label:"PEOPLES",href:"/TU2025gradulate/peoples/"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom/"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook/"},{label:"CREDITS",href:"/TU2025gradulate/credits/"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function A9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(wA,{})}function R9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(sR,{})}function I9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.GRADIENT)},[n]),x.jsx(Rj,{})}function C9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.GRADIENT_DARK)},[n]),x.jsx(gD,{})}function j9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.DARK)},[n]),x.jsx(IN,{})}function D9({setHeaderMode:n}){return Rt.useEffect(()=>{n(pe.LIGHT)},[n]),x.jsx(x9,{})}function N9(){const[n,t]=q.useState(pe.GRADIENT);return x.jsxs(l4,{basename:"/TU2025gradulate/",children:[x.jsx(T9,{}),x.jsx(zT,{children:x.jsxs(tr,{element:x.jsx(S9,{headerMode:n,setHeaderMode:t}),children:[x.jsx(tr,{index:!0,element:x.jsx(C9,{setHeaderMode:t})}),x.jsx(tr,{path:"projects/",element:x.jsx(I9,{setHeaderMode:t})}),x.jsx(tr,{path:"peoples/",element:x.jsx(R9,{setHeaderMode:t})}),x.jsx(tr,{path:"guestbook/",element:x.jsx(j9,{setHeaderMode:t})}),x.jsx(tr,{path:"work/:pid",element:x.jsx(D9,{setHeaderMode:t})}),x.jsx(tr,{path:"credits/",element:x.jsx(A9,{setHeaderMode:t})}),x.jsx(tr,{path:"*",element:x.jsx(kT,{to:"/",replace:!0})})]})})]})}const E_=typeof document<"u"?document.getElementById("root"):null;E_&&w9.createRoot(E_).render(x.jsx(N9,{}));
